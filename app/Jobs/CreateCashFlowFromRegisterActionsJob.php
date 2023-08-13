<?php

namespace App\Jobs;

use App\Models\RegisterHistory;
use App\Services\TransactionService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateCashFlowFromRegisterActionsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct( protected RegisterHistory $registerHistory )
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle( TransactionService $transactionService ): void
    {
        $transactionService->handleCashOperation( $this->registerHistory );
    }
}