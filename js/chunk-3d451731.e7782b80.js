(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d451731","chunk-2d0e5588"],{"26f2":function(t,e,r){"use strict";function n(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,r,n,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=r,a.value=n||""}}function s(t,e,r){return Math.max(t,Math.min(e,r))}function c(t){return t.timeStamp||Date.now()}function u(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var r=e[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var r="rtl"===t.document.dir;switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var r=t._original||t;return{_original:t,emit:p(r.emit.bind(r),e)}}function p(t,e){var r;return void 0===e&&(e=0),function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];clearTimeout(r),r=setTimeout.apply(void 0,[t,e].concat(n))}}r.d(e,"a",function(){return n}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return i}),r.d(e,"d",function(){return o}),r.d(e,"e",function(){return a}),r.d(e,"f",function(){return d}),r.d(e,"g",function(){return l}),r.d(e,"h",function(){return s}),r.d(e,"i",function(){return p}),r.d(e,"j",function(){return u})},"4b4c":function(t,e,r){"use strict";r.r(e),r.d(e,"IonBackdrop",function(){return o});var n=r("26f2"),i=r("93a9"),o=function(){function t(){this.lastClick=-1e4,this.blocker=i["GESTURE_CONTROLLER"].createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return t.prototype.componentDidLoad=function(){this.stopPropagation&&this.blocker.block()},t.prototype.componentDidUnload=function(){this.blocker.destroy()},t.prototype.onTouchStart=function(t){this.lastClick=Object(n["b"])(t),this.emitTap(t)},t.prototype.onMouseDown=function(t){this.lastClick<Object(n["b"])(t)-2500&&this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(t,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"click",method:"onMouseDown",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-backdrop-md-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}.backdrop-hide.sc-ion-backdrop-md-h{background:transparent}.backdrop-no-tappable.sc-ion-backdrop-md-h{cursor:auto}.sc-ion-backdrop-md-h{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}()},"93a9":function(t,e,r){"use strict";r.r(e),r.d(e,"createGesture",function(){return b}),r.d(e,"GESTURE_CONTROLLER",function(){return c});var n,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,i=-1e4;if(n.forEach(function(t){i=Math.max(i,t)}),i===r){this.capturedId=e,n.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return n.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,r,n,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*n+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,r,n){this.id=e,this.disable=r,this.disableScroll=n,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",c=new i(document);function u(t,e,r,n){var i,o,a=l(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,r,a),function(){t[o](e,r,a)}}function l(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){n=!1}return!!n}var d=2e3;function p(t,e,r,n,i){var o,a,s,c,l,p,f,b=0;function v(n){b=Date.now()+d,e(n)&&(!a&&r&&(a=u(t,"touchmove",r,i)),s||(s=u(t,"touchend",y,i)),c||(c=u(t,"touchcancel",y,i)))}function m(n){b>Date.now()||e(n)&&(!p&&r&&(p=u(h(t),"mousemove",r,i)),f||(f=u(h(t),"mouseup",S,i)))}function y(t){g(),n&&n(t)}function S(t){w(),n&&n(t)}function g(){a&&a(),s&&s(),c&&c(),a=s=c=void 0}function w(){p&&p(),f&&f(),p=f=void 0}function k(){g(),w()}function X(e){e?(o&&o(),l&&l(),o=l=void 0,k()):(o||(o=u(t,"touchstart",v,i)),l||(l=u(t,"mousedown",m,i)))}return{setDisabled:X,stop:k,destroy:function(){X(!0),n=r=e=void 0}}}function h(t){return t instanceof Document?t:t.ownerDocument}function f(t,e,r){var n=r*(Math.PI/180),i="x"===t,o=Math.cos(n),a=e*e,s=0,c=0,u=!1,l=0;return{start:function(t,e){s=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-s,n=e-c,d=r*r+n*n;if(d<a)return!1;var p=Math.sqrt(d),h=(i?r:n)/p;return l=h>o?1:h<-o?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function b(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,n=e.onWillStart,i=e.onStart,o=e.onEnd,a=e.notCaptured,s=e.onMove,u=e.threshold,l=e.queue,d={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},h=p(e.el,function(t){var e=y(t);return!(w||!k)&&(m(t,d),d.startX=d.currentX,d.startY=d.currentY,d.startTimeStamp=d.timeStamp=e,d.velocityX=d.velocityY=d.deltaX=d.deltaY=0,d.event=t,(!r||!1!==r(d))&&(S.release(),!!S.start()&&(w=!0,0===u?Y():(b.start(d.startX,d.startY),!0))))},function(t){g?!X&&k&&(X=!0,v(d,t),l.write(D)):(v(d,t),b.detect(d.currentX,d.currentY)&&(b.isGesture()&&Y()||(_(),h.stop(),a&&a(d))))},E,{capture:!1}),b=f(e.direction,e.threshold,e.maxAngle),S=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),g=!1,w=!1,k=!0,X=!1;function D(){g&&(X=!1,s&&s(d))}function Y(){return!(S&&!S.capture()||(g=!0,k=!1,d.startX=d.currentX,d.startY=d.currentY,d.startTimeStamp=d.timeStamp,n?n(d).then(T):T(),0))}function T(){i&&i(d),k=!0}function _(){g=!1,w=!1,X=!1,k=!0,S.release()}function E(t){var e=g,r=k;_(),r&&(v(d,t),e?o&&o(d):a&&a(d))}return{setDisabled:function(t){t&&g&&E(void 0),h.setDisabled(t)},destroy:function(){S.destroy(),h.destroy()}}}function v(t,e){if(e){var r=t.currentX,n=t.currentY,i=t.timeStamp;m(e,t);var o=t.currentX,a=t.currentY,s=(t.timeStamp=y(e))-i;if(s>0&&s<100){var c=(a-n)/s;t.velocityX=(o-r)/s*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}}function m(t,e){var r=0,n=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];r=o.clientX,n=o.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n}function y(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=chunk-3d451731.e7782b80.js.map