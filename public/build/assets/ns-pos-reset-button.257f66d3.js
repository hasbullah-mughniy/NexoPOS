import{A as r,P as n,o as i,a as p,f as e,t as a}from"./bootstrap.f2724e83.js";import"./currency.cdd08e48.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import m from"./ns-pos-confirm-popup.e8c513d2.js";import"./ns-orders-preview-popup.b9501716.js";import"./ns-numpad-plus.5bc07cb0.js";import"./ns-select-popup.6d92d557.js";import"./ns-notice.9f3b0acd.js";import"./ns-prompt-popup.b4b1dbc4.js";const u={name:"ns-pos-customers-button",mounted(){this.popupCloser()},methods:{__,popupCloser:r,reset(){n.show(m,{title:__("Confirm Your Action"),message:__("The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?"),onAction:t=>{t&&POS.reset()}})}}},c={class:"ns-button error"},d=e("i",{class:"mr-1 text-xl las la-eraser"},null,-1);function _(t,o,f,x,h,s){return i(),p("div",c,[e("button",{onClick:o[0]||(o[0]=P=>s.reset()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,e("span",null,a(s.__("Reset")),1)])])}var g=l(u,[["render",_]]);export{g as default};