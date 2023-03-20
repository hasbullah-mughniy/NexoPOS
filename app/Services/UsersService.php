<?php

namespace App\Services;

use App\Classes\Hook;
use App\Exceptions\NotAllowedException;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\UserAttribute;
use App\Models\UserRoleRelation;
use App\Models\UserWidget;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersService
{
    public function __construct() {
        // ...
    }

    /**
     * get all user from a specific group
     *
     * @param string
     * @return array of users
     */
    public function all( $namespace = null )
    {

        if ( $namespace != null ) {
            return Role::namespace( $namespace )->users()->get();
        } else {
            return User::get();
        }
    }

    /**
     * Will either create or update an existing user
     * that will check the attribute or the user
     *
     * @param array $attributes
     * @param User $user
     * @return array $response
     */
    public function setUser( $attributes, $user = null )
    {
        collect([
            'username' => fn() => User::where( 'username', $attributes[ 'username' ] ),
            'email' => fn() => User::where( 'email', $attributes[ 'email' ] ),
        ])->each( function( $callback, $key ) use ( $user ) {
            $query = $callback();

            if ( $user instanceof User ) {
                $query->where( 'id', '<>', $user->id );
            }

            $user = $query->first();

            if ( $user instanceof User ) {
                throw new NotAllowedException(
                    sprintf(
                        __( 'The %s is already taken.' ),
                        $key
                    )
                );
            }
        });

        $user = new User;
        $user->username = $attributes[ 'username' ];
        $user->email = $attributes[ 'email' ];
        $user->active = $attributes[ 'active' ];
        $user->password = Hash::make( $attributes[ 'password' ] );

        /**
         * For additional parameters
         * we'll provide them.
         */
        foreach ( $attributes as $name => $value ) {
            if ( ! in_array(
                $name, [
                    'username',
                    'id',
                    'password',
                    'email',
                    'active',
                    'roles', // will be used elsewhere
                ]
            )) {
                $user->$name = $value;
            }
        }

        $user->save();

        /**
         * if the role are defined we'll use them. Otherwise, we'll use
         * the role defined by default.
         */
        $this->setUserRole( $user, $attributes[ 'roles' ] ?? ns()->option->get( 'ns_registration_role' ) );

        /**
         * Every new user comes with attributes that
         * should be explicitly defined.
         */
        $this->createAttribute( $user );

        return [
            'status' => 'success',
            'message' => __( 'The user has been successfully created' ),
            'data' => compact( 'user' ),
        ];
    }

    /**
     * We'll define user role
     *
     * @param User $user
     * @param array $roles
     */
    public function setUserRole( User $user, $roles )
    {
        UserRoleRelation::where( 'user_id', $user->id )->delete();

        $roles = collect( $roles )->unique()->toArray();

        foreach ( $roles as $roleId ) {
            $relation = new UserRoleRelation;
            $relation->user_id = $user->id;
            $relation->role_id = $roleId;
            $relation->save();
        }
    }

    /**
     * Activate account using a
     * code and the user id
     *
     * @param string coe
     * @param int user id
     * @return AsyncResponse
     */
    public function activateAccount( $code, $user_id )
    {
        $user = User::find( $user_id );
        $date = app()->make( DateService::class );

        if ( ! $user instanceof User ) {
            throw new Exception( __( 'The activation process has failed.' ) );
        }

        $userOptions = new UserOptions( $user->id );
        $activationCode = $userOptions->get( 'activation-code' );
        $expiration = $userOptions->get( 'activation-expiration' );

        if ( $activationCode !== $code ) {
            throw new Exception(
                __( 'Unable to activate the account. The activation token is wrong.' )
            );
        }

        if ( $date->greaterThan( Carbon::parse( $expiration ) ) ) {
            throw new Exception(
                __( 'Unable to activate the account. The activation token has expired.' )
            );
        }

        $user->active = true;
        $user->save();

        /**
         * we might need to send some
         * email ?
         */
        Hook::action( 'user.activated', $user );

        return [
            'status' => 'success',
            'message' => __( 'The account has been successfully activated.' ),
        ];
    }

    /**
     * Check if a user belongs to a group
     */
    public function is( string | array $group_name ): bool
    {
        $roles = Auth::user()
            ->roles
            ->map( fn( $role ) => $role->namespace );

        if ( is_array( $group_name ) ) {
            return $roles
                ->filter( fn( $roleNamespace ) => in_array( $roleNamespace, $group_name ) )
                ->count() > 0;
        } else {
            return in_array( $group_name, $roles->toArray() );
        }
    }

    /**
     * Clone a role assigning same permissions
     */
    public function cloneRole( Role $role ): array
    {
        $newRole = $role->toArray();

        unset( $newRole[ 'id' ] );
        unset( $newRole[ 'created_at' ] );
        unset( $newRole[ 'updated_at' ] );

        /**
         * We would however like
         * to provide a unique name and namespace
         */
        $name = sprintf(
            __( 'Clone of "%s"' ),
            $newRole[ 'name' ]
        );

        $namespace = Str::slug( $name );

        $newRole[ 'name' ] = $name;
        $newRole[ 'namespace' ] = $namespace;
        $newRole[ 'locked' ] = 0; // shouldn't be locked by default.

        /**
         * @var Role
         */
        $newRole = Role::create( $newRole );
        $newRole->addPermissions( $role->permissions );

        return [
            'status' => 'success',
            'message' => __( 'The role has been cloned.' ),
        ];
    }

    /**
     * Will create the user attribute
     * for the provided user if that doesn't
     * exist yet.
     */
    public function createAttribute( User $user ): void
    {
        if ( ! $user->attribute instanceof UserAttribute ) {
            $userAttribute = new UserAttribute;
            $userAttribute->user_id = $user->id;
            $userAttribute->language = ns()->option->get( 'ns_store_language' );
            $userAttribute->save();
        }
    }

    /**
     * Stores the widgets details
     * on the provided area
     */
    public function storeWidgetsOnAreas( array $config, User | null $user = null ): array
    {
        $userId     =   $user !== null ? $user->id : Auth::user()->id;

        extract( $config );
        /**
         * @var array $column
         */

        foreach( $column[ 'widgets' ] as $position => $columnWidget ) {
            $widget             =   UserWidget::where( 'identifier', $columnWidget[ 'componentName' ] )
                ->where( 'column', $column[ 'name' ] )
                ->where( 'user_id', $userId )
                ->first();

            if ( ! $widget instanceof UserWidget ) {
                $widget     =   new UserWidget;
            }

            $widget->identifier     =   $columnWidget[ 'componentName' ];
            $widget->class_name     =   $columnWidget[ 'className' ] ?? '';
            $widget->position       =   $position;
            $widget->user_id        =   $userId;
            $widget->column         =   $column[ 'name' ];
            $widget->save();
        }

        $identifiers    =   collect( $column[ 'widgets' ] )->map( fn( $widget ) => $widget[ 'componentName' ] )->toArray();

        UserWidget::whereNotIn( 'identifier', $identifiers )
            ->where( 'column', $column[ 'name' ] )
            ->where( 'user_id', $userId )
            ->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The widgets was successfully updated.' )
        ];
    }

    /**
     * Will generate a token for either the
     * logged user or for the provided user
     */
    public function createToken( $name, User | null $user = null ): array
    {
        if ( $user === null ) {
            /**
             * @var User $user
             */
            $user   =   Auth::user();
        }

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The token was successfully created' ),
            'data'      =>  [
                'token' =>  $user->createToken( $name )
            ]
        ];
    }

    /**
     * Returns all generated token
     * using the provided user or the logged one.
     */
    public function getTokens( User | null $user = null ): EloquentCollection
    {
        if ( $user === null ) {
            /**
             * @var User $user
             */
            $user   =   Auth::user();
        }

        return $user->tokens()->orderBy( 'created_at', 'desc' )->get();
    }

    public function deleteToken( $tokenId, User | null $user = null )
    {
        if ( $user === null ) {
            /**
             * @var User $user
             */
            $user   =   Auth::user();
        }

        $user->tokens()->where( 'id', $tokenId )->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The token has been successfully deleted.' )
        ];
    }
}