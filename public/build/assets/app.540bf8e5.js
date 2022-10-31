import{_ as e}from"./ns-numpad-plus.dcfa5f84.js";import{d as t,c as a}from"./bootstrap.b3920df9.js";import{c as E,n as R,a as T}from"./components.b3e5aaf5.js";import{N as A}from"./time.69e4ace6.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./ns-notice.dcd05aaf.js";import"./ns-pos-confirm-popup.1b443749.js";import"./ns-paginate.6d11ab6e.js";import"./ns-prompt-popup.9575a5e5.js";import"./ns-alert-popup.6aa5594a.js";import"./ns-pos-loading-popup.c288281e.js";function I(s,m){m.forEach(_=>{let o=s.document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",_),s.document.getElementsByTagName("head")[0].appendChild(o)})}const L={install(s,m={}){s.config.globalProperties.$htmlToPaper=(_,o,l=()=>!0)=>{let b="_blank",h=["fullscreen=yes","titlebar=yes","scrollbars=yes"],v=!0,w=[],{name:u=b,specs:i=h,replace:P=v,styles:c=w}=m;o&&(o.name&&(u=o.name),o.specs&&(i=o.specs),o.replace&&(P=o.replace),o.styles&&(c=o.styles)),i=i.length?i.join(","):"";const p=window.document.getElementById(_);if(!p){alert(`Element to print #${_} not found!`);return}const D="",n=window.open(D,u,i);return n.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${p.innerHTML}
            </body>
          </html>
        `),I(n,c),setTimeout(()=>{n.document.close(),n.focus(),n.print(),n.close(),l()},1e3),!0}}},V=t(()=>e(()=>import("./rewards-system.1a2d5d25.js"),["assets/rewards-system.1a2d5d25.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),O=t(()=>e(()=>import("./create-coupons.0414ee18.js"),["assets/create-coupons.0414ee18.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),f=t(()=>e(()=>import("./settings.d62e0233.js"),["assets/settings.d62e0233.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js"])),S=t(()=>e(()=>import("./reset.8a8152cd.js"),["assets/reset.8a8152cd.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),y=t(()=>e(()=>import("./modules.d45600db.js"),["assets/modules.d45600db.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),g=t(()=>e(()=>import("./ns-permissions.d0c13a92.js"),["assets/ns-permissions.d0c13a92.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),C=t(()=>e(()=>import("./ns-procurement.6844f64d.js"),["assets/ns-procurement.6844f64d.js","assets/bootstrap.b3920df9.js","assets/manage-products.d718757e.js","assets/ns-pos-confirm-popup.1b443749.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-select-popup.94967168.js","assets/currency.ddae5e8e.js"])),M=t(()=>e(()=>import("./manage-products.d718757e.js"),["assets/manage-products.d718757e.js","assets/bootstrap.b3920df9.js","assets/ns-pos-confirm-popup.1b443749.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-select-popup.94967168.js","assets/currency.ddae5e8e.js"])),k=t(()=>e(()=>import("./ns-procurement-invoice.35b3a47f.js"),[])),H=t(()=>e(()=>import("./ns-notifications.d926d2af.js"),["assets/ns-notifications.d926d2af.js","assets/bootstrap.b3920df9.js","assets/ns-pos-confirm-popup.1b443749.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/components.b3e5aaf5.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),j=t(()=>e(()=>import("./components.b3e5aaf5.js").then(function(s){return s.h}),["assets/components.b3e5aaf5.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js"])),x=t(()=>e(()=>import("./ns-expense.5dde762d.js"),["assets/ns-expense.5dde762d.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/currency.ddae5e8e.js"])),B=t(()=>e(()=>import("./ns-low-stock-report.358d94aa.js"),["assets/ns-low-stock-report.358d94aa.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/ns-select-popup.94967168.js","assets/currency.ddae5e8e.js"])),N=t(()=>e(()=>import("./ns-sale-report.531b9e87.js"),["assets/ns-sale-report.531b9e87.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/ns-select-popup.94967168.js","assets/currency.ddae5e8e.js"])),$=t(()=>e(()=>import("./ns-sold-stock-report.5d088074.js"),["assets/ns-sold-stock-report.5d088074.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),F=t(()=>e(()=>import("./ns-profit-report.9774320f.js"),["assets/ns-profit-report.9774320f.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),Y=t(()=>e(()=>import("./ns-cash-flow-report.bc9bf73d.js"),["assets/ns-cash-flow-report.bc9bf73d.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),q=t(()=>e(()=>import("./ns-yearly-report.bf7e57ea.js"),["assets/ns-yearly-report.bf7e57ea.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),z=t(()=>e(()=>import("./ns-best-products-report.32b86396.js"),["assets/ns-best-products-report.32b86396.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),G=t(()=>e(()=>import("./ns-payment-types-report.4b8f7a95.js"),["assets/ns-payment-types-report.4b8f7a95.js","assets/bootstrap.b3920df9.js","assets/components.b3e5aaf5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-numpad-plus.dcfa5f84.js","assets/ns-paginate.6d11ab6e.js","assets/ns-prompt-popup.9575a5e5.js","assets/ns-alert-popup.6aa5594a.js","assets/ns-pos-loading-popup.c288281e.js","assets/currency.ddae5e8e.js"])),J=t(()=>e(()=>import("./ns-customers-statement-report.d1221c9d.js"),["assets/ns-customers-statement-report.d1221c9d.js","assets/currency.ddae5e8e.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),K=t(()=>e(()=>import("./ns-dashboard-cards.26c157f0.js"),["assets/ns-dashboard-cards.26c157f0.js","assets/bootstrap.b3920df9.js","assets/currency.ddae5e8e.js","assets/plugin-vue_export-helper.21dcd24c.js"])),Q=t(()=>e(()=>import("./ns-best-customers.63aab0ae.js"),["assets/ns-best-customers.63aab0ae.js","assets/bootstrap.b3920df9.js","assets/currency.ddae5e8e.js","assets/plugin-vue_export-helper.21dcd24c.js"])),U=t(()=>e(()=>import("./ns-best-cashiers.19c84e94.js"),["assets/ns-best-cashiers.19c84e94.js","assets/currency.ddae5e8e.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),W=t(()=>e(()=>import("./ns-orders-summary.7f54217c.js"),["assets/ns-orders-summary.7f54217c.js","assets/bootstrap.b3920df9.js","assets/currency.ddae5e8e.js","assets/plugin-vue_export-helper.21dcd24c.js"])),X=t(()=>e(()=>import("./ns-orders-chart.7c24e3e1.js"),["assets/ns-orders-chart.7c24e3e1.js","assets/bootstrap.b3920df9.js","assets/currency.ddae5e8e.js","assets/ns-notice.dcd05aaf.js","assets/ns-notice.a5114bf1.css","assets/plugin-vue_export-helper.21dcd24c.js"])),Z=t(()=>e(()=>import("./ns-cashier-dashboard.00718a6c.js"),["assets/ns-cashier-dashboard.00718a6c.js","assets/currency.ddae5e8e.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),ee=t(()=>e(()=>import("./ns-stock-adjustment.773196f2.js"),["assets/ns-stock-adjustment.773196f2.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ns-pos-confirm-popup.1b443749.js","assets/ns-prompt-popup.9575a5e5.js","assets/currency.ddae5e8e.js"])),te=t(()=>e(()=>import("./ns-order-invoice.64e1397e.js"),["assets/ns-order-invoice.64e1397e.js","assets/currency.ddae5e8e.js","assets/bootstrap.b3920df9.js","assets/plugin-vue_export-helper.21dcd24c.js"])),r=window.nsState,se=window.nsScreen,oe=window.nsExtraComponents;window.nsHotPress=new A;const d=Object.assign({nsModules:y,nsRewardsSystem:V,nsCreateCoupons:O,nsManageProducts:M,nsSettings:f,nsReset:S,nsPermissions:g,nsProcurement:C,nsProcurementInvoice:k,nsMedia:j,nsExpense:x,nsDashboardCards:K,nsCashierDashboard:Z,nsBestCustomers:Q,nsBestCashiers:U,nsOrdersSummary:W,nsOrdersChart:X,nsNotifications:H,nsSaleReport:N,nsSoldStockReport:$,nsProfitReport:F,nsCashFlowReport:Y,nsYearlyReport:q,nsPaymentTypesReport:G,nsBestProductsReport:z,nsLowStockReport:B,nsCustomersStatementReport:J,nsStockAdjustment:ee,nsOrderInvoice:te,...E},oe);window.nsDashboardAside=a({data(){return{sidebar:"visible"}},components:{nsMenu:R,nsSubmenu:T},mounted(){r.behaviorState.subscribe(({object:s})=>{this.sidebar=s.sidebar})}});window.nsDashboardOverlay=a({data(){return{sidebar:null}},components:d,mounted(){r.behaviorState.subscribe(({object:s})=>{this.sidebar=s.sidebar})},methods:{closeMenu(){r.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=a({data(){return{menuToggled:!1,sidebar:"visible"}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(se.breakpoint)?r.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):r.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){r.behaviorState.subscribe(({object:s})=>{this.sidebar=s.sidebar})}});window.nsDashboardContent=a({});for(let s in d)window.nsDashboardContent.component(s,d[s]);window.nsDashboardContent.use(L,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,E);window.nsDashboardAside.mount("#dashboard-aside");window.nsDashboardOverlay.mount("#dashboard-overlay");window.nsDashboardHeader.mount("#dashboard-header");window.nsDashboardContent.mount("#dashboard-content");