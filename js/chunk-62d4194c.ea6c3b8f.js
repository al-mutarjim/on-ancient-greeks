(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d4194c"],{"0790":function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(n,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},r(n,t)};function o(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function i(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(n){try{c(r.next(n))}catch(t){i(t)}}function u(n){try{c(r["throw"](n))}catch(t){i(t)}}function c(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,u)}c((r=r.apply(n,t||[])).next())})}function a(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(n){return function(t){return c([n,t])}}function c(i){if(e)throw new TypeError("Generator is already executing.");while(a)try{if(e=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(u){i=[6,u],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},c885:function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return o}),e.d(t,"e",function(){return a});var r=e("0790");function o(n,t){return null!==t.closest(n)}function i(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function a(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=void 0!==n,e}function u(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}function c(n){var t={};return u(n).forEach(function(n){return t[n]=!0}),t}var d=/^[a-z][a-z0-9+\-.]*:/;function l(n,t,e,o){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||d.test(t)?[3,2]:(i=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,o)];case 2:return[2,!1]}})})}},eb2a:function(n,t,e){"use strict";e.r(t),e.d(t,"IonAvatar",function(){return i}),e.d(t,"IonBadge",function(){return a}),e.d(t,"IonThumbnail",function(){return u});var r=e("7018"),o=e("c885"),i=function(){function n(){}return n.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}(),a=function(){function n(){}return n.prototype.hostData=function(){return{class:Object(o["c"])(this.color)}},n.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}(),u=function(){function n(){}return n.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-thumbnail"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"},enumerable:!0,configurable:!0}),n}()}}]);
//# sourceMappingURL=chunk-62d4194c.ea6c3b8f.js.map