import{s as y,_ as f,m as h,p as l,u as d,o as r,a as o,f as n,F as u,r as v,e as c,h as F,z as C,q as _,w,j as p,n as T,t as b,b as S,i as A}from"./bootstrap.b3920df9.js";import{b as j}from"./components.b3e5aaf5.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./ns-notice.dcd05aaf.js";import"./ns-pos-confirm-popup.1b443749.js";import"./ns-numpad-plus.dcfa5f84.js";import"./ns-paginate.6d11ab6e.js";import"./ns-prompt-popup.9575a5e5.js";import"./ns-alert-popup.6aa5594a.js";import"./ns-pos-loading-popup.c288281e.js";const D={name:"ns-settings",props:["url"],components:{nsField:j},data(){return{validation:new y,form:{},test:""}},computed:{formDefined(){return Object.values(this.form).length>0},activeTab(){for(let t in this.form.tabs)if(this.form.tabs[t].active===!0)return this.form.tabs[t]}},mounted(){this.loadSettingsForm()},methods:{__:f,loadComponent(t){return nsExtraComponents[t]},submitForm(){if(this.validation.validateForm(this.form).length===0){this.validation.disableForm(this.form);const t=this.validation.extractForm(this.form);return h.post(this.url,t).subscribe({next:e=>{this.validation.enableForm(this.form),this.loadSettingsForm(),e.data&&e.data.results&&e.data.results.forEach(s=>{s.status==="failed"?l.error(s.message).subscribe():l.success(s.message).subscribe()}),d.doAction("ns-settings-saved",{result:e,instance:this}),l.success(e.message).subscribe()},error:e=>{this.validation.enableForm(this.form),this.validation.triggerFieldsErrors(this.form,e),d.doAction("ns-settings-failed",{error:e,instance:this}),l.error(e.message||f("Unable to proceed the form is not valid.")).subscribe()}})}l.error(this.$slots["error-form-invalid"][0].text||f("Unable to proceed the form is not valid.")).subscribe()},setActive(t){for(let e in this.form.tabs)this.form.tabs[e].active=!1;t.active=!0,d.doAction("ns-settings-change-tab",{tab:t,instance:this})},loadSettingsForm(){h.get(this.url).subscribe(t=>{let e=0;Object.values(t.tabs).filter(s=>s.active).length>0;for(let s in t.tabs)this.formDefined?t.tabs[s].active=this.form.tabs[s].active:(t.tabs[s].active=!1,e===0&&(t.tabs[s].active=!0)),e++,t.tabs[s].fields===void 0&&(t.tabs[s].fields=[]);this.form=this.validation.createForm(t),d.doAction("ns-settings-loaded",this),d.doAction("ns-settings-change-tab",{tab:this.activeTab,instance:this})})}}},V={key:0,id:"tabbed-card",class:"ns-tab"},E={id:"card-header",class:"flex flex-wrap ml-4"},N=["onClick"],z={key:0,class:"ml-2 rounded-full ns-inset-button error active text-sm h-6 w-6 flex items-center justify-center"},H={class:"card-body ns-tab-item"},O={class:"shadow rounded"},U={class:"-mx-4 flex flex-wrap p-2"},q={class:"flex flex-col my-2"},L={key:1,class:"w-full px-4"},G={key:0,class:"border-t border-gray-400 dark:border-slate-600 p-2 flex justify-end"};function I(t,e,s,J,g,i){const x=p("ns-field"),k=p("ns-button");return i.formDefined?(r(),o("div",V,[n("div",E,[(r(!0),o(u,null,v(g.form.tabs,(a,m)=>(r(),o("div",{class:T([a.active?"active":"inactive","tab cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg"]),onClick:K=>i.setActive(a),key:m},[n("span",null,b(a.label),1),a.errors&&a.errors.length>0?(r(),o("span",z,b(a.errors.length),1)):c("",!0)],10,N))),128))]),n("div",H,[n("div",O,[n("div",U,[i.activeTab.fields?(r(!0),o(u,{key:0},v(i.activeTab.fields,(a,m)=>(r(),o("div",{class:"w-full px-4 md:w-1/2 lg:w-1/3",key:m},[n("div",q,[_(x,{field:a},null,8,["field"])])]))),128)):c("",!0),i.activeTab.component?(r(),o("div",L,[(r(),F(C(i.loadComponent(i.activeTab.component))))])):c("",!0)]),i.activeTab.fields&&i.activeTab.fields.length>0?(r(),o("div",G,[_(k,{onClick:e[0]||(e[0]=a=>i.submitForm()),type:"info"},{default:w(()=>[S(t.$slots,"submit-button",{},()=>[A(b(i.__("Save Settings")),1)])]),_:3})])):c("",!0)])])])):c("",!0)}var et=B(D,[["render",I]]);export{et as default};