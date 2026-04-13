(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cp={exports:{}},dl={},kp={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),Zv=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),ly=Symbol.for("react.memo"),ay=Symbol.for("react.lazy"),Qd=Symbol.iterator;function uy(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var Tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Np={};function Xr(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Tp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bp(){}bp.prototype=Xr.prototype;function ec(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Tp}var tc=ec.prototype=new bp;tc.constructor=ec;Ip(tc,Xr.prototype);tc.isPureReactComponent=!0;var Yd=Array.isArray,Rp=Object.prototype.hasOwnProperty,nc={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rp.call(e,r)&&!Pp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:gs,type:t,key:s,ref:o,props:i,_owner:nc.current}}function cy(t,e){return{$$typeof:gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===gs}function dy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jd=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dy(""+t.key):e.toString(36)}function Js(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gs:case Zv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kl(o,0):r,Yd(i)?(n="",t!=null&&(n=t.replace(Jd,"$&/")+"/"),Js(i,e,n,"",function(u){return u})):i!=null&&(rc(i)&&(i=cy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Kl(s,l);o+=Js(s,e,n,a,i)}else if(a=uy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Kl(s,l++),o+=Js(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ps(t,e,n){if(t==null)return t;var r=[],i=0;return Js(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},Xs={transition:null},fy={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:nc};function Op(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=Xr;$.Fragment=ey;$.Profiler=ny;$.PureComponent=ec;$.StrictMode=ty;$.Suspense=oy;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;$.act=Op;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ip({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Rp.call(e,a)&&!Pp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:gs,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:iy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ry,_context:t},t.Consumer=t};$.createElement=Ap;$.createFactory=function(t){var e=Ap.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:sy,render:t}};$.isValidElement=rc;$.lazy=function(t){return{$$typeof:ay,_payload:{_status:-1,_result:t},_init:hy}};$.memo=function(t,e){return{$$typeof:ly,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=Xs.transition;Xs.transition={};try{t()}finally{Xs.transition=e}};$.unstable_act=Op;$.useCallback=function(t,e){return Fe.current.useCallback(t,e)};$.useContext=function(t){return Fe.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};$.useEffect=function(t,e){return Fe.current.useEffect(t,e)};$.useId=function(){return Fe.current.useId()};$.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return Fe.current.useMemo(t,e)};$.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};$.useRef=function(t){return Fe.current.useRef(t)};$.useState=function(t){return Fe.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return Fe.current.useTransition()};$.version="18.3.1";kp.exports=$;var L=kp.exports;const py=Sp(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=L,gy=Symbol.for("react.element"),_y=Symbol.for("react.fragment"),vy=Object.prototype.hasOwnProperty,yy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vy.call(e,r)&&!wy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gy,type:t,key:s,ref:o,props:i,_owner:yy.current}}dl.Fragment=_y;dl.jsx=Lp;dl.jsxs=Lp;Cp.exports=dl;var d=Cp.exports,Dp={exports:{}},Xe={},Mp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,P){var j=T.length;T.push(P);e:for(;0<j;){var ie=j-1>>>1,pe=T[ie];if(0<i(pe,P))T[ie]=P,T[j]=pe,j=ie;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],j=T.pop();if(j!==P){T[0]=j;e:for(var ie=0,pe=T.length,Ln=pe>>>1;ie<Ln;){var wt=2*(ie+1)-1,lr=T[wt],xt=wt+1,Yt=T[xt];if(0>i(lr,j))xt<pe&&0>i(Yt,lr)?(T[ie]=Yt,T[xt]=j,ie=xt):(T[ie]=lr,T[wt]=j,ie=wt);else if(xt<pe&&0>i(Yt,j))T[ie]=Yt,T[xt]=j,ie=xt;else break e}}return P}function i(T,P){var j=T.sortIndex-P.sortIndex;return j!==0?j:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,f=3,g=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(T){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=T)r(u),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(u)}}function x(T){if(y=!1,_(T),!v)if(n(a)!==null)v=!0,ee(C);else{var P=n(u);P!==null&&Oe(x,P.startTime-T)}}function C(T,P){v=!1,y&&(y=!1,m(N),N=-1),g=!0;var j=f;try{for(_(P),c=n(a);c!==null&&(!(c.expirationTime>P)||T&&!re());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,f=c.priorityLevel;var pe=ie(c.expirationTime<=P);P=t.unstable_now(),typeof pe=="function"?c.callback=pe:c===n(a)&&r(a),_(P)}else r(a);c=n(a)}if(c!==null)var Ln=!0;else{var wt=n(u);wt!==null&&Oe(x,wt.startTime-P),Ln=!1}return Ln}finally{c=null,f=j,g=!1}}var k=!1,I=null,N=-1,U=5,R=-1;function re(){return!(t.unstable_now()-R<U)}function F(){if(I!==null){var T=t.unstable_now();R=T;var P=!0;try{P=I(!0,T)}finally{P?K():(k=!1,I=null)}}else k=!1}var K;if(typeof p=="function")K=function(){p(F)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,M=D.port2;D.port1.onmessage=F,K=function(){M.postMessage(null)}}else K=function(){w(F,0)};function ee(T){I=T,k||(k=!0,K())}function Oe(T,P){N=w(function(){T(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ee(C))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var j=f;f=P;try{return T()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=f;f=T;try{return P()}finally{f=j}},t.unstable_scheduleCallback=function(T,P,j){var ie=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,T){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=j+pe,T={id:h++,callback:P,priorityLevel:T,startTime:j,expirationTime:pe,sortIndex:-1},j>ie?(T.sortIndex=j,e(u,T),n(a)===null&&T===n(u)&&(y?(m(N),N=-1):y=!0,Oe(x,j-ie))):(T.sortIndex=pe,e(a,T),v||g||(v=!0,ee(C))),T},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(T){var P=f;return function(){var j=f;f=P;try{return T.apply(this,arguments)}finally{f=j}}}})(jp);Mp.exports=jp;var xy=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey=L,Je=xy;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Wi={};function nr(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Wi[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},Zd={};function Cy(t){return ja.call(Zd,t)?!0:ja.call(Xd,t)?!1:Sy.test(t)?Zd[t]=!0:(Xd[t]=!0,!1)}function ky(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ty(t,e,n,r){if(e===null||typeof e>"u"||ky(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ic,sc);Ie[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ic,sc);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ic,sc);Ie[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function oc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ty(e,n,i,r)&&(n=null),r||i===null?Cy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),zp=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),za=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),eh=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,ql;function xi(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Ql=!1;function Yl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function Iy(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function Va(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case cr:return"Portal";case Fa:return"Profiler";case lc:return"StrictMode";case Ua:return"Suspense";case za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zp:return(t.displayName||"Context")+".Consumer";case Up:return(t._context.displayName||"Context")+".Provider";case ac:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uc:return e=t.displayName||null,e!==null?e:Va(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return Va(t(e))}catch{}}return null}function Ny(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Va(e);case 8:return e===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=Wp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=by(t))}function $p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wa(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hp(t,e){e=e.checked,e!=null&&oc(t,"checked",e,!1)}function $a(t,e){Hp(t,e);var n=Cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ha(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ha(t,e.type,Cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ha(t,e,n){(e!=="number"||mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ei(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cn(n)}}function Bp(t,e){var n=Cn(e.value),r=Cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,Kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ry=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){Ry.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function qp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Py=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ka(t,e){if(e){if(Py[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function qa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ya=null,kr=null,Tr=null;function sh(t){if(t=ys(t)){if(typeof Ya!="function")throw Error(E(280));var e=t.stateNode;e&&(e=gl(e),Ya(t.stateNode,t.type,e))}}function Yp(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function Jp(){if(kr){var t=kr,e=Tr;if(Tr=kr=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function Xp(t,e){return t(e)}function Zp(){}var Jl=!1;function em(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Xp(t,e,n)}finally{Jl=!1,(kr!==null||Tr!==null)&&(Zp(),Jp())}}function Hi(t,e){var n=t.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ja=!1;if(Wt)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Ja=!1}function Ay(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ni=!1,go=null,_o=!1,Xa=null,Oy={onError:function(t){Ni=!0,go=t}};function Ly(t,e,n,r,i,s,o,l,a){Ni=!1,go=null,Ay.apply(Oy,arguments)}function Dy(t,e,n,r,i,s,o,l,a){if(Ly.apply(this,arguments),Ni){if(Ni){var u=go;Ni=!1,go=null}else throw Error(E(198));_o||(_o=!0,Xa=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(rr(t)!==t)throw Error(E(188))}function My(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return oh(i),t;if(s===r)return oh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function nm(t){return t=My(t),t!==null?rm(t):null}function rm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rm(t);if(e!==null)return e;t=t.sibling}return null}var im=Je.unstable_scheduleCallback,lh=Je.unstable_cancelCallback,jy=Je.unstable_shouldYield,Fy=Je.unstable_requestPaint,fe=Je.unstable_now,Uy=Je.unstable_getCurrentPriorityLevel,dc=Je.unstable_ImmediatePriority,sm=Je.unstable_UserBlockingPriority,vo=Je.unstable_NormalPriority,zy=Je.unstable_LowPriority,om=Je.unstable_IdlePriority,hl=null,kt=null;function Vy(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Hy,Wy=Math.log,$y=Math.LN2;function Hy(t){return t>>>=0,t===0?32:31-(Wy(t)/$y|0)|0}var Ds=64,Ms=4194304;function Si(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Si(l):(s&=o,s!==0&&(r=Si(s)))}else o=n&~i,o!==0?r=Si(o):s!==0&&(r=Si(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function By(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=By(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Za(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lm(){var t=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function Ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var um,fc,cm,dm,hm,eu=!1,js=[],dn=null,hn=null,fn=null,Bi=new Map,Gi=new Map,tn=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,e){switch(t){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(e.pointerId)}}function di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ys(e),e!==null&&fc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qy(t,e,n,r,i){switch(e){case"focusin":return dn=di(dn,t,e,n,r,i),!0;case"dragenter":return hn=di(hn,t,e,n,r,i),!0;case"mouseover":return fn=di(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bi.set(s,di(Bi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gi.set(s,di(Gi.get(s)||null,t,e,n,r,i)),!0}return!1}function fm(t){var e=Un(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=tm(n),e!==null){t.blockedOn=e,hm(t.priority,function(){cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return e=ys(n),e!==null&&fc(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){Zs(t)&&n.delete(e)}function Yy(){eu=!1,dn!==null&&Zs(dn)&&(dn=null),hn!==null&&Zs(hn)&&(hn=null),fn!==null&&Zs(fn)&&(fn=null),Bi.forEach(uh),Gi.forEach(uh)}function hi(t,e){t.blockedOn===e&&(t.blockedOn=null,eu||(eu=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Yy)))}function Ki(t){function e(i){return hi(i,t)}if(0<js.length){hi(js[0],t);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dn!==null&&hi(dn,t),hn!==null&&hi(hn,t),fn!==null&&hi(fn,t),Bi.forEach(e),Gi.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)fm(n),n.blockedOn===null&&tn.shift()}var Ir=Qt.ReactCurrentBatchConfig,wo=!0;function Jy(t,e,n,r){var i=q,s=Ir.transition;Ir.transition=null;try{q=1,pc(t,e,n,r)}finally{q=i,Ir.transition=s}}function Xy(t,e,n,r){var i=q,s=Ir.transition;Ir.transition=null;try{q=4,pc(t,e,n,r)}finally{q=i,Ir.transition=s}}function pc(t,e,n,r){if(wo){var i=tu(t,e,n,r);if(i===null)aa(t,e,r,xo,n),ah(t,r);else if(Qy(i,t,e,n,r))r.stopPropagation();else if(ah(t,r),e&4&&-1<qy.indexOf(t)){for(;i!==null;){var s=ys(i);if(s!==null&&um(s),s=tu(t,e,n,r),s===null&&aa(t,e,r,xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else aa(t,e,r,null,n)}}var xo=null;function tu(t,e,n,r){if(xo=null,t=cc(r),t=Un(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xo=t,null}function pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uy()){case dc:return 1;case sm:return 4;case vo:case zy:return 16;case om:return 536870912;default:return 16}default:return 16}}var an=null,mc=null,eo=null;function mm(){if(eo)return eo;var t,e=mc,n=e.length,r,i="value"in an?an.value:an.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return eo=i.slice(t,1<r?1-r:void 0)}function to(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function ch(){return!1}function Ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:ch,this.isPropagationStopped=ch,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Ze(Zr),vs=ae({},Zr,{view:0,detail:0}),Zy=Ze(vs),Zl,ea,fi,fl=ae({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fi&&(fi&&t.type==="mousemove"?(Zl=t.screenX-fi.screenX,ea=t.screenY-fi.screenY):ea=Zl=0,fi=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:ea}}),dh=Ze(fl),e0=ae({},fl,{dataTransfer:0}),t0=Ze(e0),n0=ae({},vs,{relatedTarget:0}),ta=Ze(n0),r0=ae({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=Ze(r0),s0=ae({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Ze(s0),l0=ae({},Zr,{data:0}),hh=Ze(l0),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=c0[t])?!!e[t]:!1}function _c(){return d0}var h0=ae({},vs,{key:function(t){if(t.key){var e=a0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f0=Ze(h0),p0=ae({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Ze(p0),m0=ae({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),g0=Ze(m0),_0=ae({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=Ze(_0),y0=ae({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=Ze(y0),x0=[9,13,27,32],vc=Wt&&"CompositionEvent"in window,bi=null;Wt&&"documentMode"in document&&(bi=document.documentMode);var E0=Wt&&"TextEvent"in window&&!bi,gm=Wt&&(!vc||bi&&8<bi&&11>=bi),ph=" ",mh=!1;function _m(t,e){switch(t){case"keyup":return x0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function S0(t,e){switch(t){case"compositionend":return vm(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function C0(t,e){if(hr)return t==="compositionend"||!vc&&_m(t,e)?(t=mm(),eo=mc=an=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gm&&e.locale!=="ko"?null:e.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k0[t.type]:e==="textarea"}function ym(t,e,n,r){Yp(r),e=Eo(e,"onChange"),0<e.length&&(n=new gc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ri=null,qi=null;function T0(t){Rm(t,0)}function pl(t){var e=mr(t);if($p(e))return t}function I0(t,e){if(t==="change")return e}var wm=!1;if(Wt){var na;if(Wt){var ra="oninput"in document;if(!ra){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),ra=typeof _h.oninput=="function"}na=ra}else na=!1;wm=na&&(!document.documentMode||9<document.documentMode)}function vh(){Ri&&(Ri.detachEvent("onpropertychange",xm),qi=Ri=null)}function xm(t){if(t.propertyName==="value"&&pl(qi)){var e=[];ym(e,qi,t,cc(t)),em(T0,e)}}function N0(t,e,n){t==="focusin"?(vh(),Ri=e,qi=n,Ri.attachEvent("onpropertychange",xm)):t==="focusout"&&vh()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(qi)}function R0(t,e){if(t==="click")return pl(e)}function P0(t,e){if(t==="input"||t==="change")return pl(e)}function A0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:A0;function Qi(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=yh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function Em(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Em(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var t=window,e=mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mo(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function O0(t){var e=Sm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wh(n,s);var o=wh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L0=Wt&&"documentMode"in document&&11>=document.documentMode,fr=null,nu=null,Pi=null,ru=!1;function xh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||fr==null||fr!==mo(r)||(r=fr,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Qi(Pi,r)||(Pi=r,r=Eo(nu,"onSelect"),0<r.length&&(e=new gc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fr)))}function Us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},ia={},Cm={};Wt&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function ml(t){if(ia[t])return ia[t];if(!pr[t])return t;var e=pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cm)return ia[t]=e[n];return t}var km=ml("animationend"),Tm=ml("animationiteration"),Im=ml("animationstart"),Nm=ml("transitionend"),bm=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,e){bm.set(t,e),nr(e,[t])}for(var sa=0;sa<Eh.length;sa++){var oa=Eh[sa],D0=oa.toLowerCase(),M0=oa[0].toUpperCase()+oa.slice(1);Nn(D0,"on"+M0)}Nn(km,"onAnimationEnd");Nn(Tm,"onAnimationIteration");Nn(Im,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Nm,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Sh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Dy(r,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}}}if(_o)throw t=Xa,_o=!1,Xa=null,t}function te(t,e){var n=e[au];n===void 0&&(n=e[au]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function la(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[zs]){t[zs]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||la(n,!1,t),la(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,la("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(pm(e)){case 1:var i=Jy;break;case 4:i=Xy;break;default:i=pc}n=i.bind(null,e,n,t),i=void 0,!Ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function aa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Un(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}em(function(){var u=s,h=cc(n),c=[];e:{var f=bm.get(t);if(f!==void 0){var g=gc,v=t;switch(t){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":g=f0;break;case"focusin":v="focus",g=ta;break;case"focusout":v="blur",g=ta;break;case"beforeblur":case"afterblur":g=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=g0;break;case km:case Tm:case Im:g=i0;break;case Nm:g=v0;break;case"scroll":g=Zy;break;case"wheel":g=w0;break;case"copy":case"cut":case"paste":g=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fh}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,_;p!==null;){_=p;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=Hi(p,m),x!=null&&y.push(Ji(p,x,_)))),w)break;p=p.return}0<y.length&&(f=new g(f,v,null,n,h),c.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Qa&&(v=n.relatedTarget||n.fromElement)&&(Un(v)||v[$t]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Un(v):null,v!==null&&(w=rr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=dh,x="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=fh,x="onPointerLeave",m="onPointerEnter",p="pointer"),w=g==null?f:mr(g),_=v==null?f:mr(v),f=new y(x,p+"leave",g,n,h),f.target=w,f.relatedTarget=_,x=null,Un(h)===u&&(y=new y(m,p+"enter",v,n,h),y.target=_,y.relatedTarget=w,x=y),w=x,g&&v)t:{for(y=g,m=v,p=0,_=y;_;_=ar(_))p++;for(_=0,x=m;x;x=ar(x))_++;for(;0<p-_;)y=ar(y),p--;for(;0<_-p;)m=ar(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=ar(y),m=ar(m)}y=null}else y=null;g!==null&&Ch(c,f,g,y,!1),v!==null&&w!==null&&Ch(c,w,v,y,!0)}}e:{if(f=u?mr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=I0;else if(gh(f))if(wm)C=P0;else{C=b0;var k=N0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=R0);if(C&&(C=C(t,u))){ym(c,C,n,h);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Ha(f,"number",f.value)}switch(k=u?mr(u):window,t){case"focusin":(gh(k)||k.contentEditable==="true")&&(fr=k,nu=u,Pi=null);break;case"focusout":Pi=nu=fr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,xh(c,n,h);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":xh(c,n,h)}var I;if(vc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else hr?_m(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(gm&&n.locale!=="ko"&&(hr||N!=="onCompositionStart"?N==="onCompositionEnd"&&hr&&(I=mm()):(an=h,mc="value"in an?an.value:an.textContent,hr=!0)),k=Eo(u,N),0<k.length&&(N=new hh(N,t,null,n,h),c.push({event:N,listeners:k}),I?N.data=I:(I=vm(n),I!==null&&(N.data=I)))),(I=E0?S0(t,n):C0(t,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(h=new hh("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=I))}Rm(c,e)})}function Ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hi(t,n),s!=null&&r.unshift(Ji(t,s,i)),s=Hi(t,e),s!=null&&r.push(Ji(t,s,i))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hi(n,s),a!=null&&o.unshift(Ji(n,a,l))):i||(a=Hi(n,s),a!=null&&o.push(Ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var F0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace(U0,"")}function Vs(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(E(425))}function So(){}var iu=null,su=null;function ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(W0)}:lu;function W0(t){setTimeout(function(){throw t})}function ua(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ki(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ki(e)}function pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ih(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ei,Xi="__reactProps$"+ei,$t="__reactContainer$"+ei,au="__reactEvents$"+ei,$0="__reactListeners$"+ei,H0="__reactHandles$"+ei;function Un(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$t]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ih(t);t!==null;){if(n=t[Ct])return n;t=Ih(t)}return e}t=n,n=t.parentNode}return null}function ys(t){return t=t[Ct]||t[$t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function gl(t){return t[Xi]||null}var uu=[],gr=-1;function bn(t){return{current:t}}function ne(t){0>gr||(t.current=uu[gr],uu[gr]=null,gr--)}function Z(t,e){gr++,uu[gr]=t.current,t.current=e}var kn={},Ae=bn(kn),Be=bn(!1),Bn=kn;function jr(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function Co(){ne(Be),ne(Ae)}function Nh(t,e,n){if(Ae.current!==kn)throw Error(E(168));Z(Ae,e),Z(Be,n)}function Am(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Ny(t)||"Unknown",i));return ae({},n,r)}function ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,Bn=Ae.current,Z(Ae,t),Z(Be,Be.current),!0}function bh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Am(t,e,Bn),r.__reactInternalMemoizedMergedChildContext=t,ne(Be),ne(Ae),Z(Ae,t)):ne(Be),Z(Be,n)}var At=null,_l=!1,ca=!1;function Om(t){At===null?At=[t]:At.push(t)}function B0(t){_l=!0,Om(t)}function Rn(){if(!ca&&At!==null){ca=!0;var t=0,e=q;try{var n=At;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}At=null,_l=!1}catch(i){throw At!==null&&(At=At.slice(t+1)),im(dc,Rn),i}finally{q=e,ca=!1}}return null}var _r=[],vr=0,To=null,Io=0,et=[],tt=0,Gn=null,Ot=1,Lt="";function Dn(t,e){_r[vr++]=Io,_r[vr++]=To,To=t,Io=e}function Lm(t,e,n){et[tt++]=Ot,et[tt++]=Lt,et[tt++]=Gn,Gn=t;var r=Ot;t=Lt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-pt(e)+i|n<<i|r,Lt=s+t}else Ot=1<<s|n<<i|r,Lt=t}function wc(t){t.return!==null&&(Dn(t,1),Lm(t,1,0))}function xc(t){for(;t===To;)To=_r[--vr],_r[vr]=null,Io=_r[--vr],_r[vr]=null;for(;t===Gn;)Gn=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null,Ot=et[--tt],et[tt]=null}var Ye=null,Qe=null,se=!1,dt=null;function Dm(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gn!==null?{id:Ot,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,Qe=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(se){var e=Qe;if(e){var n=e;if(!Rh(t,e)){if(cu(t))throw Error(E(418));e=pn(n.nextSibling);var r=Ye;e&&Rh(t,e)?Dm(r,n):(t.flags=t.flags&-4097|2,se=!1,Ye=t)}}else{if(cu(t))throw Error(E(418));t.flags=t.flags&-4097|2,se=!1,Ye=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function Ws(t){if(t!==Ye)return!1;if(!se)return Ph(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ou(t.type,t.memoizedProps)),e&&(e=Qe)){if(cu(t))throw Mm(),Error(E(418));for(;e;)Dm(t,e),e=pn(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ye?pn(t.stateNode.nextSibling):null;return!0}function Mm(){for(var t=Qe;t;)t=pn(t.nextSibling)}function Fr(){Qe=Ye=null,se=!1}function Ec(t){dt===null?dt=[t]:dt.push(t)}var G0=Qt.ReactCurrentBatchConfig;function pi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function $s(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ah(t){var e=t._init;return e(t._payload)}function jm(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=vn(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,x){return p===null||p.tag!==6?(p=_a(_,m.mode,x),p.return=m,p):(p=i(p,_),p.return=m,p)}function a(m,p,_,x){var C=_.type;return C===dr?h(m,p,_.props.children,x,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Ah(C)===p.type)?(x=i(p,_.props),x.ref=pi(m,p,_),x.return=m,x):(x=ao(_.type,_.key,_.props,null,m.mode,x),x.ref=pi(m,p,_),x.return=m,x)}function u(m,p,_,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=va(_,m.mode,x),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function h(m,p,_,x,C){return p===null||p.tag!==7?(p=Hn(_,m.mode,x,C),p.return=m,p):(p=i(p,_),p.return=m,p)}function c(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_a(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case As:return _=ao(p.type,p.key,p.props,null,m.mode,_),_.ref=pi(m,null,p),_.return=m,_;case cr:return p=va(p,m.mode,_),p.return=m,p;case Zt:var x=p._init;return c(m,x(p._payload),_)}if(Ei(p)||ui(p))return p=Hn(p,m.mode,_,null),p.return=m,p;$s(m,p)}return null}function f(m,p,_,x){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:l(m,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case As:return _.key===C?a(m,p,_,x):null;case cr:return _.key===C?u(m,p,_,x):null;case Zt:return C=_._init,f(m,p,C(_._payload),x)}if(Ei(_)||ui(_))return C!==null?null:h(m,p,_,x,null);$s(m,_)}return null}function g(m,p,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(_)||null,l(p,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case As:return m=m.get(x.key===null?_:x.key)||null,a(p,m,x,C);case cr:return m=m.get(x.key===null?_:x.key)||null,u(p,m,x,C);case Zt:var k=x._init;return g(m,p,_,k(x._payload),C)}if(Ei(x)||ui(x))return m=m.get(_)||null,h(p,m,x,C,null);$s(p,x)}return null}function v(m,p,_,x){for(var C=null,k=null,I=p,N=p=0,U=null;I!==null&&N<_.length;N++){I.index>N?(U=I,I=null):U=I.sibling;var R=f(m,I,_[N],x);if(R===null){I===null&&(I=U);break}t&&I&&R.alternate===null&&e(m,I),p=s(R,p,N),k===null?C=R:k.sibling=R,k=R,I=U}if(N===_.length)return n(m,I),se&&Dn(m,N),C;if(I===null){for(;N<_.length;N++)I=c(m,_[N],x),I!==null&&(p=s(I,p,N),k===null?C=I:k.sibling=I,k=I);return se&&Dn(m,N),C}for(I=r(m,I);N<_.length;N++)U=g(I,m,N,_[N],x),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?N:U.key),p=s(U,p,N),k===null?C=U:k.sibling=U,k=U);return t&&I.forEach(function(re){return e(m,re)}),se&&Dn(m,N),C}function y(m,p,_,x){var C=ui(_);if(typeof C!="function")throw Error(E(150));if(_=C.call(_),_==null)throw Error(E(151));for(var k=C=null,I=p,N=p=0,U=null,R=_.next();I!==null&&!R.done;N++,R=_.next()){I.index>N?(U=I,I=null):U=I.sibling;var re=f(m,I,R.value,x);if(re===null){I===null&&(I=U);break}t&&I&&re.alternate===null&&e(m,I),p=s(re,p,N),k===null?C=re:k.sibling=re,k=re,I=U}if(R.done)return n(m,I),se&&Dn(m,N),C;if(I===null){for(;!R.done;N++,R=_.next())R=c(m,R.value,x),R!==null&&(p=s(R,p,N),k===null?C=R:k.sibling=R,k=R);return se&&Dn(m,N),C}for(I=r(m,I);!R.done;N++,R=_.next())R=g(I,m,N,R.value,x),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?N:R.key),p=s(R,p,N),k===null?C=R:k.sibling=R,k=R);return t&&I.forEach(function(F){return e(m,F)}),se&&Dn(m,N),C}function w(m,p,_,x){if(typeof _=="object"&&_!==null&&_.type===dr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case As:e:{for(var C=_.key,k=p;k!==null;){if(k.key===C){if(C=_.type,C===dr){if(k.tag===7){n(m,k.sibling),p=i(k,_.props.children),p.return=m,m=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Ah(C)===k.type){n(m,k.sibling),p=i(k,_.props),p.ref=pi(m,k,_),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}_.type===dr?(p=Hn(_.props.children,m.mode,x,_.key),p.return=m,m=p):(x=ao(_.type,_.key,_.props,null,m.mode,x),x.ref=pi(m,p,_),x.return=m,m=x)}return o(m);case cr:e:{for(k=_.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=va(_,m.mode,x),p.return=m,m=p}return o(m);case Zt:return k=_._init,w(m,p,k(_._payload),x)}if(Ei(_))return v(m,p,_,x);if(ui(_))return y(m,p,_,x);$s(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=_a(_,m.mode,x),p.return=m,m=p),o(m)):n(m,p)}return w}var Ur=jm(!0),Fm=jm(!1),No=bn(null),bo=null,yr=null,Sc=null;function Cc(){Sc=yr=bo=null}function kc(t){var e=No.current;ne(No),t._currentValue=e}function hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){bo=t,Sc=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ot(t){var e=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(bo===null)throw Error(E(308));yr=t,bo.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var zn=null;function Tc(t){zn===null?zn=[t]:zn.push(t)}function Um(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function Ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Tc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function no(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}function Oh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ro(t,e,n,r){var i=t.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(g,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,c,f):v,f==null)break e;c=ae({},c,f);break e;case 2:en=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=c):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qn|=o,t.lanes=o,t.memoizedState=c}}function Lh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ws={},Tt=bn(ws),Zi=bn(ws),es=bn(ws);function Vn(t){if(t===ws)throw Error(E(174));return t}function Nc(t,e){switch(Z(es,e),Z(Zi,t),Z(Tt,ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ga(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ga(e,t)}ne(Tt),Z(Tt,e)}function zr(){ne(Tt),ne(Zi),ne(es)}function Vm(t){Vn(es.current);var e=Vn(Tt.current),n=Ga(e,t.type);e!==n&&(Z(Zi,t),Z(Tt,n))}function bc(t){Zi.current===t&&(ne(Tt),ne(Zi))}var oe=bn(0);function Po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=[];function Rc(){for(var t=0;t<da.length;t++)da[t]._workInProgressVersionPrimary=null;da.length=0}var ro=Qt.ReactCurrentDispatcher,ha=Qt.ReactCurrentBatchConfig,Kn=0,le=null,ge=null,ye=null,Ao=!1,Ai=!1,ts=0,K0=0;function be(){throw Error(E(321))}function Pc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function Ac(t,e,n,r,i,s){if(Kn=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ro.current=t===null||t.memoizedState===null?J0:X0,t=n(r,i),Ai){s=0;do{if(Ai=!1,ts=0,25<=s)throw Error(E(301));s+=1,ye=ge=null,e.updateQueue=null,ro.current=Z0,t=n(r,i)}while(Ai)}if(ro.current=Oo,e=ge!==null&&ge.next!==null,Kn=0,ye=ge=le=null,Ao=!1,e)throw Error(E(300));return t}function Oc(){var t=ts!==0;return ts=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?le.memoizedState=ye=t:ye=ye.next=t,ye}function lt(){if(ge===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ye===null?le.memoizedState:ye.next;if(e!==null)ye=e,ge=t;else{if(t===null)throw Error(E(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?le.memoizedState=ye=t:ye=ye.next=t}return ye}function ns(t,e){return typeof e=="function"?e(t):e}function fa(t){var e=lt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Kn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,le.lanes|=h,qn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,_t(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pa(t){var e=lt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wm(){}function $m(t,e){var n=le,r=lt(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,Lc(Gm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,rs(9,Bm.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(E(349));Kn&30||Hm(n,e,i)}return i}function Hm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,r){e.value=n,e.getSnapshot=r,Km(e)&&qm(t)}function Gm(t,e,n){return n(function(){Km(e)&&qm(t)})}function Km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function qm(t){var e=Ht(t,1);e!==null&&mt(e,t,1,-1)}function Dh(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},e.queue=t,t=t.dispatch=Y0.bind(null,le,t),[e.memoizedState,t]}function rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qm(){return lt().memoizedState}function io(t,e,n,r){var i=St();le.flags|=t,i.memoizedState=rs(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=lt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Pc(r,o.deps)){i.memoizedState=rs(e,n,s,r);return}}le.flags|=t,i.memoizedState=rs(1|e,n,s,r)}function Mh(t,e){return io(8390656,8,t,e)}function Lc(t,e){return vl(2048,8,t,e)}function Ym(t,e){return vl(4,2,t,e)}function Jm(t,e){return vl(4,4,t,e)}function Xm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zm(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,Xm.bind(null,e,t),n)}function Dc(){}function eg(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tg(t,e){var n=lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ng(t,e,n){return Kn&21?(_t(n,e)||(n=lm(),le.lanes|=n,qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function q0(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=ha.transition;ha.transition={};try{t(!1),e()}finally{q=n,ha.transition=r}}function rg(){return lt().memoizedState}function Q0(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ig(t))sg(e,n);else if(n=Um(t,e,n,r),n!==null){var i=De();mt(n,t,r,i),og(n,e,r)}}function Y0(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(t))sg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var a=e.interleaved;a===null?(i.next=i,Tc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Um(t,e,i,r),n!==null&&(i=De(),mt(n,t,r,i),og(n,e,r))}}function ig(t){var e=t.alternate;return t===le||e!==null&&e===le}function sg(t,e){Ai=Ao=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function og(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}var Oo={readContext:ot,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},J0={readContext:ot,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:Mh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,io(4194308,4,Xm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return io(4194308,4,t,e)},useInsertionEffect:function(t,e){return io(4,2,t,e)},useMemo:function(t,e){var n=St();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=St();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Q0.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:Dh,useDebugValue:Dc,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=Dh(!1),e=t[0];return t=q0.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=St();if(se){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Se===null)throw Error(E(349));Kn&30||Hm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mh(Gm.bind(null,r,s,t),[t]),r.flags|=2048,rs(9,Bm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=St(),e=Se.identifierPrefix;if(se){var n=Lt,r=Ot;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},X0={readContext:ot,useCallback:eg,useContext:ot,useEffect:Lc,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Jm,useMemo:tg,useReducer:fa,useRef:Qm,useState:function(){return fa(ns)},useDebugValue:Dc,useDeferredValue:function(t){var e=lt();return ng(e,ge.memoizedState,t)},useTransition:function(){var t=fa(ns)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:$m,useId:rg,unstable_isNewReconciler:!1},Z0={readContext:ot,useCallback:eg,useContext:ot,useEffect:Lc,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Jm,useMemo:tg,useReducer:pa,useRef:Qm,useState:function(){return pa(ns)},useDebugValue:Dc,useDeferredValue:function(t){var e=lt();return ge===null?e.memoizedState=t:ng(e,ge.memoizedState,t)},useTransition:function(){var t=pa(ns)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:$m,useId:rg,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=_n(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(mt(e,t,i,r),no(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=_n(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(mt(e,t,i,r),no(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=_n(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=mn(t,i,r),e!==null&&(mt(e,t,r,n),no(e,t,r))}};function jh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,s):!0}function lg(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=Ge(e)?Bn:Ae.current,r=e.contextTypes,s=(r=r!=null)?jr(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function pu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ic(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=Ge(e)?Bn:Ae.current,i.context=jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Ro(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e){try{var n="",r=e;do n+=Iy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function ag(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,ku=r),mu(t,e)},n}function ug(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mu(t,e),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ew;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pw.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,mn(n,e,1))),n.lanes|=1),t)}var tw=Qt.ReactCurrentOwner,We=!1;function Le(t,e,n,r){e.child=t===null?Fm(e,null,n,r):Ur(e,t.child,n,r)}function Wh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=Ac(t,e,n,r,s,i),n=Oc(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(se&&n&&wc(e),e.flags|=1,Le(t,e,r,i),e.child)}function $h(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$c(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cg(t,e,s,r,i)):(t=ao(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(o,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=vn(s,r),t.ref=e.ref,t.return=e,e.child=t}function cg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qi(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Bt(t,e,i)}return gu(t,e,n,r,i)}function dg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(xr,qe),qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(xr,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(xr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(xr,qe),qe|=r;return Le(t,e,i,n),e.child}function hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gu(t,e,n,r,i){var s=Ge(n)?Bn:Ae.current;return s=jr(e,s),Nr(e,i),n=Ac(t,e,n,r,s,i),r=Oc(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(se&&r&&wc(e),e.flags|=1,Le(t,e,n,i),e.child)}function Hh(t,e,n,r,i){if(Ge(n)){var s=!0;ko(e)}else s=!1;if(Nr(e,i),e.stateNode===null)so(t,e),lg(e,n,r),pu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ge(n)?Bn:Ae.current,u=jr(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Fh(e,o,r,u),en=!1;var f=e.memoizedState;o.state=f,Ro(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Be.current||en?(typeof h=="function"&&(fu(e,n,h,r),a=e.memoizedState),(l=en||jh(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ut(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Ge(n)?Bn:Ae.current,a=jr(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Fh(e,o,r,a),en=!1,f=e.memoizedState,o.state=f,Ro(e,r,o,i);var v=e.memoizedState;l!==c||f!==v||Be.current||en?(typeof g=="function"&&(fu(e,n,g,r),v=e.memoizedState),(u=en||jh(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return _u(t,e,n,r,s,i)}function _u(t,e,n,r,i,s){hg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bh(e,n,!1),Bt(t,e,s);r=e.stateNode,tw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):Le(t,e,l,s),e.memoizedState=r.state,i&&bh(e,n,!0),e.child}function fg(t){var e=t.stateNode;e.pendingContext?Nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nh(t,e.context,!1),Nc(t,e.containerInfo)}function Bh(t,e,n,r,i){return Fr(),Ec(i),e.flags|=256,Le(t,e,n,r),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function pg(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yu(n),e.memoizedState=vu,t):Mc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=vn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vn(l,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vu,r}return s=t.child,t=s.sibling,r=vn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mc(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hs(t,e,n,r){return r!==null&&Ec(r),Ur(e,t.child,null,n),t=Mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ma(Error(E(422))),Hs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=El({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ur(e,t.child,null,o),e.child.memoizedState=yu(o),e.memoizedState=vu,s);if(!(e.mode&1))return Hs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=ma(s,r,void 0),Hs(t,e,o,r)}if(l=(o&t.childLanes)!==0,We||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),mt(r,t,i,-1))}return Wc(),r=ma(Error(E(421))),Hs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=pn(i.nextSibling),Ye=e,se=!0,dt=null,t!==null&&(et[tt++]=Ot,et[tt++]=Lt,et[tt++]=Gn,Ot=t.id,Lt=t.overflow,Gn=e),e=Mc(e,r.children),e.flags|=4096,e)}function Gh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hu(t.return,e,n)}function ga(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,n,e);else if(t.tag===19)Gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ga(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ga(e,!0,n,null,s);break;case"together":ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function so(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rw(t,e,n){switch(e.tag){case 3:fg(e),Fr();break;case 5:Vm(e);break;case 1:Ge(e.type)&&ko(e);break;case 4:Nc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(No,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?pg(t,e,n):(Z(oe,oe.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,dg(t,e,n)}return Bt(t,e,n)}var gg,wu,_g,vg;gg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};_g=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vn(Tt.current);var s=null;switch(n){case"input":i=Wa(t,i),r=Wa(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Ba(t,i),r=Ba(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=So)}Ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vg=function(t,e,n,r){n!==r&&(e.flags|=4)};function mi(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iw(t,e,n){var r=e.pendingProps;switch(xc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ge(e.type)&&Co(),Re(e),null;case 3:return r=e.stateNode,zr(),ne(Be),ne(Ae),Rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ws(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(Nu(dt),dt=null))),wu(t,e),Re(e),null;case 5:bc(e);var i=Vn(es.current);if(n=e.type,t!==null&&e.stateNode!=null)_g(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Re(e),null}if(t=Vn(Tt.current),Ws(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[Xi]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)te(Ci[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":th(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":rh(r,s),te("invalid",r)}Ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Vs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Vs(r.textContent,l,t),i=["children",""+l]):Wi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Os(r),nh(r,s,!0);break;case"textarea":Os(r),ih(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=So)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[Xi]=r,gg(t,e,!1,!1),e.stateNode=t;e:{switch(o=qa(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)te(Ci[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":th(t,r),i=Wa(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",t);break;case"textarea":rh(t,r),i=Ba(t,r),te("invalid",t);break;default:i=r}Ka(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&oc(t,s,a,o))}switch(n){case"input":Os(t),nh(t,r,!1);break;case"textarea":Os(t),ih(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)vg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Vn(es.current),Vn(Tt.current),Ws(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:Vs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Re(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Qe!==null&&e.mode&1&&!(e.flags&128))Mm(),Fr(),e.flags|=98560,s=!1;else if(s=Ws(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ct]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else dt!==null&&(Nu(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?_e===0&&(_e=3):Wc())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return zr(),wu(t,e),t===null&&Yi(e.stateNode.containerInfo),Re(e),null;case 10:return kc(e.type._context),Re(e),null;case 17:return Ge(e.type)&&Co(),Re(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mi(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Po(t),o!==null){for(e.flags|=128,mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Wr&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Re(e),null}else 2*fe()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Vc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qe&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function sw(t,e){switch(xc(e),e.tag){case 1:return Ge(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(),ne(Be),ne(Ae),Rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bc(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return zr(),null;case 10:return kc(e.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var Bs=!1,Pe=!1,ow=typeof WeakSet=="function"?WeakSet:Set,b=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function xu(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Kh=!1;function lw(t,e){if(iu=wo,t=Sm(),yc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:t,selectionRange:n},wo=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ut(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){ue(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=Kh,Kh=!1,v}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xu(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yg(t){var e=t.alternate;e!==null&&(t.alternate=null,yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[Xi],delete e[au],delete e[$0],delete e[H0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wg(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=So));else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var Ce=null,ct=!1;function Jt(t,e,n){for(n=n.child;n!==null;)xg(t,e,n),n=n.sibling}function xg(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Pe||wr(n,e);case 6:var r=Ce,i=ct;Ce=null,Jt(t,e,n),Ce=r,ct=i,Ce!==null&&(ct?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ct?(t=Ce,n=n.stateNode,t.nodeType===8?ua(t.parentNode,n):t.nodeType===1&&ua(t,n),Ki(t)):ua(Ce,n.stateNode));break;case 4:r=Ce,i=ct,Ce=n.stateNode.containerInfo,ct=!0,Jt(t,e,n),Ce=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xu(n,e,o),i=i.next}while(i!==r)}Jt(t,e,n);break;case 1:if(!Pe&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}Jt(t,e,n);break;case 21:Jt(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Jt(t,e,n),Pe=r):Jt(t,e,n);break;default:Jt(t,e,n)}}function Qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ow),e.forEach(function(r){var i=gw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ct=!1;break e;case 3:Ce=l.stateNode.containerInfo,ct=!0;break e;case 4:Ce=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ce===null)throw Error(E(160));xg(s,o,i),Ce=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Eg(e,t),e=e.sibling}function Eg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),Et(t),r&4){try{Oi(3,t,t.return),wl(3,t)}catch(y){ue(t,t.return,y)}try{Oi(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:at(e,t),Et(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(at(e,t),Et(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hp(i,s),qa(l,o);var u=qa(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?Qp(i,c):h==="dangerouslySetInnerHTML"?Kp(i,c):h==="children"?$i(i,c):oc(i,h,c,u)}switch(l){case"input":$a(i,s);break;case"textarea":Bp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xi]=s}catch(y){ue(t,t.return,y)}}break;case 6:if(at(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ue(t,t.return,y)}}break;case 3:if(at(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:at(e,t),Et(t);break;case 13:at(e,t),Et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uc=fe())),r&4&&Qh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||h,at(e,t),Pe=u):at(e,t),Et(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(b=t,h=t.child;h!==null;){for(c=b=h;b!==null;){switch(f=b,g=f.child,f.tag){case 0:case 11:case 14:case 15:Oi(4,f,f.return);break;case 1:wr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Jh(c);continue}}g!==null?(g.return=f,b=g):Jh(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=qp("display",o))}catch(y){ue(t,t.return,y)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ue(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:at(e,t),Et(t),r&4&&Qh(t);break;case 21:break;default:at(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=qh(t);Cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qh(t);Su(t,l,o);break;default:throw Error(E(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aw(t,e,n){b=t,Sg(t)}function Sg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Pe;l=Bs;var u=Pe;if(Bs=o,(Pe=a)&&!u)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?Xh(i):a!==null?(a.return=o,b=a):Xh(i);for(;s!==null;)b=s,Sg(s),s=s.sibling;b=i,Bs=l,Pe=u}Yh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Yh(t)}}function Yh(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&Ki(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Pe||e.flags&512&&Eu(e)}catch(f){ue(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Jh(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Xh(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ue(e,i,a)}}var s=e.return;try{Eu(e)}catch(a){ue(e,s,a)}break;case 5:var o=e.return;try{Eu(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var uw=Math.ceil,Lo=Qt.ReactCurrentDispatcher,jc=Qt.ReactCurrentOwner,st=Qt.ReactCurrentBatchConfig,H=0,Se=null,me=null,Te=0,qe=0,xr=bn(0),_e=0,is=null,qn=0,xl=0,Fc=0,Li=null,Ve=null,Uc=0,Wr=1/0,Pt=null,Do=!1,ku=null,gn=null,Gs=!1,un=null,Mo=0,Di=0,Tu=null,oo=-1,lo=0;function De(){return H&6?fe():oo!==-1?oo:oo=fe()}function _n(t){return t.mode&1?H&2&&Te!==0?Te&-Te:G0.transition!==null?(lo===0&&(lo=lm()),lo):(t=q,t!==0||(t=window.event,t=t===void 0?16:pm(t.type)),t):1}function mt(t,e,n,r){if(50<Di)throw Di=0,Tu=null,Error(E(185));_s(t,n,r),(!(H&2)||t!==Se)&&(t===Se&&(!(H&2)&&(xl|=n),_e===4&&nn(t,Te)),Ke(t,r),n===1&&H===0&&!(e.mode&1)&&(Wr=fe()+500,_l&&Rn()))}function Ke(t,e){var n=t.callbackNode;Gy(t,e);var r=yo(t,t===Se?Te:0);if(r===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?B0(Zh.bind(null,t)):Om(Zh.bind(null,t)),V0(function(){!(H&6)&&Rn()}),n=null;else{switch(am(r)){case 1:n=dc;break;case 4:n=sm;break;case 16:n=vo;break;case 536870912:n=om;break;default:n=vo}n=Pg(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(oo=-1,lo=0,H&6)throw Error(E(327));var n=t.callbackNode;if(br()&&t.callbackNode!==n)return null;var r=yo(t,t===Se?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jo(t,r);else{e=r;var i=H;H|=2;var s=Tg();(Se!==t||Te!==e)&&(Pt=null,Wr=fe()+500,$n(t,e));do try{hw();break}catch(l){kg(t,l)}while(!0);Cc(),Lo.current=s,H=i,me!==null?e=0:(Se=null,Te=0,e=_e)}if(e!==0){if(e===2&&(i=Za(t),i!==0&&(r=i,e=Iu(t,i))),e===1)throw n=is,$n(t,0),nn(t,r),Ke(t,fe()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!cw(i)&&(e=jo(t,r),e===2&&(s=Za(t),s!==0&&(r=s,e=Iu(t,s))),e===1))throw n=is,$n(t,0),nn(t,r),Ke(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Mn(t,Ve,Pt);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=Uc+500-fe(),10<e)){if(yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lu(Mn.bind(null,t,Ve,Pt),e);break}Mn(t,Ve,Pt);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uw(r/1960))-r,10<r){t.timeoutHandle=lu(Mn.bind(null,t,Ve,Pt),r);break}Mn(t,Ve,Pt);break;case 5:Mn(t,Ve,Pt);break;default:throw Error(E(329))}}}return Ke(t,fe()),t.callbackNode===n?Cg.bind(null,t):null}function Iu(t,e){var n=Li;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=jo(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&Nu(e)),t}function Nu(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~Fc,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function Zh(t){if(H&6)throw Error(E(327));br();var e=yo(t,0);if(!(e&1))return Ke(t,fe()),null;var n=jo(t,e);if(t.tag!==0&&n===2){var r=Za(t);r!==0&&(e=r,n=Iu(t,r))}if(n===1)throw n=is,$n(t,0),nn(t,e),Ke(t,fe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,Ve,Pt),Ke(t,fe()),null}function zc(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Wr=fe()+500,_l&&Rn())}}function Qn(t){un!==null&&un.tag===0&&!(H&6)&&br();var e=H;H|=1;var n=st.transition,r=q;try{if(st.transition=null,q=1,t)return t()}finally{q=r,st.transition=n,H=e,!(H&6)&&Rn()}}function Vc(){qe=xr.current,ne(xr)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z0(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:zr(),ne(Be),ne(Ae),Rc();break;case 5:bc(r);break;case 4:zr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:kc(r.type._context);break;case 22:case 23:Vc()}n=n.return}if(Se=t,me=t=vn(t.current,null),Te=qe=e,_e=0,is=null,Fc=xl=qn=0,Ve=Li=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function kg(t,e){do{var n=me;try{if(Cc(),ro.current=Oo,Ao){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ao=!1}if(Kn=0,ye=ge=le=null,Ai=!1,ts=0,jc.current=null,n===null||n.return===null){_e=1,is=e,me=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=zh(o);if(g!==null){g.flags&=-257,Vh(g,o,l,s,e),g.mode&1&&Uh(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){Uh(s,u,e),Wc();break e}a=Error(E(426))}}else if(se&&l.mode&1){var w=zh(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Vh(w,o,l,s,e),Ec(Vr(a,l));break e}}s=a=Vr(a,l),_e!==4&&(_e=2),Li===null?Li=[s]:Li.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ag(s,a,e);Oh(s,m);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gn===null||!gn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ug(s,l,e);Oh(s,x);break e}}s=s.return}while(s!==null)}Ng(n)}catch(C){e=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Tg(){var t=Lo.current;return Lo.current=Oo,t===null?Oo:t}function Wc(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(qn&268435455)&&!(xl&268435455)||nn(Se,Te)}function jo(t,e){var n=H;H|=2;var r=Tg();(Se!==t||Te!==e)&&(Pt=null,$n(t,e));do try{dw();break}catch(i){kg(t,i)}while(!0);if(Cc(),H=n,Lo.current=r,me!==null)throw Error(E(261));return Se=null,Te=0,_e}function dw(){for(;me!==null;)Ig(me)}function hw(){for(;me!==null&&!jy();)Ig(me)}function Ig(t){var e=Rg(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?Ng(t):me=e,jc.current=null}function Ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sw(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,me=null;return}}else if(n=iw(n,e,qe),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);_e===0&&(_e=5)}function Mn(t,e,n){var r=q,i=st.transition;try{st.transition=null,q=1,fw(t,e,n,r)}finally{st.transition=i,q=r}return null}function fw(t,e,n,r){do br();while(un!==null);if(H&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ky(t,s),t===Se&&(me=Se=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,Pg(vo,function(){return br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=st.transition,st.transition=null;var o=q;q=1;var l=H;H|=4,jc.current=null,lw(t,n),Eg(n,t),O0(su),wo=!!iu,su=iu=null,t.current=n,aw(n),Fy(),H=l,q=o,st.transition=s}else t.current=n;if(Gs&&(Gs=!1,un=t,Mo=i),s=t.pendingLanes,s===0&&(gn=null),Vy(n.stateNode),Ke(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=ku,ku=null,t;return Mo&1&&t.tag!==0&&br(),s=t.pendingLanes,s&1?t===Tu?Di++:(Di=0,Tu=t):Di=0,Rn(),null}function br(){if(un!==null){var t=am(Mo),e=st.transition,n=q;try{if(st.transition=null,q=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,Mo=0,H&6)throw Error(E(331));var i=H;for(H|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Oi(8,h,s)}var c=h.child;if(c!==null)c.return=h,b=c;else for(;b!==null;){h=b;var f=h.sibling,g=h.return;if(yg(h),h===u){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,b=_;else e:for(o=p;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wl(9,l)}}catch(C){ue(l,l.return,C)}if(l===o){b=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,b=x;break e}b=l.return}}if(H=i,Rn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{q=n,st.transition=e}}return!1}function ef(t,e,n){e=Vr(n,e),e=ag(t,e,1),t=mn(t,e,1),e=De(),t!==null&&(_s(t,1,e),Ke(t,e))}function ue(t,e,n){if(t.tag===3)ef(t,t,n);else for(;e!==null;){if(e.tag===3){ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){t=Vr(n,t),t=ug(e,t,1),e=mn(e,t,1),t=De(),e!==null&&(_s(e,1,t),Ke(e,t));break}}e=e.return}}function pw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Te&n)===n&&(_e===4||_e===3&&(Te&130023424)===Te&&500>fe()-Uc?$n(t,0):Fc|=n),Ke(t,e)}function bg(t,e){e===0&&(t.mode&1?(e=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):e=1);var n=De();t=Ht(t,e),t!==null&&(_s(t,e,n),Ke(t,n))}function mw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bg(t,n)}function gw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),bg(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,rw(t,e,n);We=!!(t.flags&131072)}else We=!1,se&&e.flags&1048576&&Lm(e,Io,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;so(t,e),t=e.pendingProps;var i=jr(e,Ae.current);Nr(e,n),i=Ac(null,e,r,t,i,n);var s=Oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,ko(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ic(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,pu(e,r,t,n),e=_u(null,e,r,!0,s,n)):(e.tag=0,se&&s&&wc(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(so(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vw(r),t=ut(r,t),i){case 0:e=gu(null,e,r,t,n);break e;case 1:e=Hh(null,e,r,t,n);break e;case 11:e=Wh(null,e,r,t,n);break e;case 14:e=$h(null,e,r,ut(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),gu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Hh(t,e,r,i,n);case 3:e:{if(fg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zm(t,e),Ro(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vr(Error(E(423)),e),e=Bh(t,e,r,n,i);break e}else if(r!==i){i=Vr(Error(E(424)),e),e=Bh(t,e,r,n,i);break e}else for(Qe=pn(e.stateNode.containerInfo.firstChild),Ye=e,se=!0,dt=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=Bt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Vm(e),t===null&&du(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ou(r,i)?o=null:s!==null&&ou(r,s)&&(e.flags|=32),hg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&du(e),null;case 13:return pg(t,e,n);case 4:return Nc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Wh(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(No,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!Be.current){e=Bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=ot(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),$h(t,e,r,i,n);case 15:return cg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),so(t,e),e.tag=1,Ge(r)?(t=!0,ko(e)):t=!1,Nr(e,n),lg(e,r,i),pu(e,r,i,n),_u(null,e,r,!0,t,n);case 19:return mg(t,e,n);case 22:return dg(t,e,n)}throw Error(E(156,e.tag))};function Pg(t,e){return im(t,e)}function _w(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new _w(t,e,n,r)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vw(t){if(typeof t=="function")return $c(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ac)return 11;if(t===uc)return 14}return 2}function vn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ao(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$c(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case dr:return Hn(n.children,i,s,e);case lc:o=8,i|=8;break;case Fa:return t=nt(12,n,e,i|2),t.elementType=Fa,t.lanes=s,t;case Ua:return t=nt(13,n,e,i),t.elementType=Ua,t.lanes=s,t;case za:return t=nt(19,n,e,i),t.elementType=za,t.lanes=s,t;case Vp:return El(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Up:o=10;break e;case zp:o=9;break e;case ac:o=11;break e;case uc:o=14;break e;case Zt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function El(t,e,n,r){return t=nt(22,t,r,e),t.elementType=Vp,t.lanes=n,t.stateNode={isHidden:!1},t}function _a(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function va(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new yw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(s),t}function ww(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ag(t){if(!t)return kn;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ge(n))return Am(t,n,e)}return e}function Og(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=Ag(null),n=t.current,r=De(),i=_n(n),s=zt(r,i),s.callback=e??null,mn(n,s,i),t.current.lanes=i,_s(t,i,r),Ke(t,r),t}function Sl(t,e,n,r){var i=e.current,s=De(),o=_n(i);return n=Ag(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mn(i,e,o),t!==null&&(mt(t,i,o,s),no(t,i,o)),o}function Fo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bc(t,e){tf(t,e),(t=t.alternate)&&tf(t,e)}function xw(){return null}var Lg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}Cl.prototype.render=Gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Sl(t,e,null,null)};Cl.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qn(function(){Sl(null,t,null,null)}),e[$t]=null}};function Cl(t){this._internalRoot=t}Cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&fm(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function Ew(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fo(o);s.call(u)}}var o=Og(e,r,t,0,null,!1,!1,"",nf);return t._reactRootContainer=o,t[$t]=o.current,Yi(t.nodeType===8?t.parentNode:t),Qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fo(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=a,t[$t]=a.current,Yi(t.nodeType===8?t.parentNode:t),Qn(function(){Sl(e,a,n,r)}),a}function Tl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Fo(o);l.call(a)}}Sl(e,o,t,i)}else o=Ew(n,e,t,i,r);return Fo(o)}um=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Si(e.pendingLanes);n!==0&&(hc(e,n|1),Ke(e,fe()),!(H&6)&&(Wr=fe()+500,Rn()))}break;case 13:Qn(function(){var r=Ht(t,1);if(r!==null){var i=De();mt(r,t,1,i)}}),Bc(t,1)}};fc=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=De();mt(e,t,134217728,n)}Bc(t,134217728)}};cm=function(t){if(t.tag===13){var e=_n(t),n=Ht(t,e);if(n!==null){var r=De();mt(n,t,e,r)}Bc(t,e)}};dm=function(){return q};hm=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};Ya=function(t,e,n){switch(e){case"input":if($a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gl(r);if(!i)throw Error(E(90));$p(r),$a(r,i)}}}break;case"textarea":Bp(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};Xp=zc;Zp=Qn;var Sw={usingClientEntryPoint:!1,Events:[ys,mr,gl,Yp,Jp,zc]},gi={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cw={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nm(t),t===null?null:t.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{hl=Ks.inject(Cw),kt=Ks}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(e))throw Error(E(200));return ww(t,e,null,n)};Xe.createRoot=function(t,e){if(!Kc(t))throw Error(E(299));var n=!1,r="",i=Lg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[$t]=e.current,Yi(t.nodeType===8?t.parentNode:t),new Gc(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=nm(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return Qn(t)};Xe.hydrate=function(t,e,n){if(!kl(e))throw Error(E(200));return Tl(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!Kc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Og(e,null,t,1,n??null,i,!1,s,o),t[$t]=e.current,Yi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cl(e)};Xe.render=function(t,e,n){if(!kl(e))throw Error(E(200));return Tl(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!kl(t))throw Error(E(40));return t._reactRootContainer?(Qn(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[$t]=null})}),!0):!1};Xe.unstable_batchedUpdates=zc;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Tl(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(t){console.error(t)}}Dg(),Dp.exports=Xe;var kw=Dp.exports,Mg,rf=kw;Mg=rf.createRoot,rf.hydrateRoot;const Tw={},sf=t=>{let e;const n=new Set,r=(h,c)=>{const f=typeof h=="function"?h(e):h;if(!Object.is(f,e)){const g=e;e=c??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(v=>v(e,g))}},i=()=>e,a={setState:r,getState:i,getInitialState:()=>u,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Tw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(r,i,a);return a},Iw=t=>t?sf(t):sf;var jg={exports:{}},Fg={},Ug={exports:{}},zg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=L;function Nw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bw=typeof Object.is=="function"?Object.is:Nw,Rw=$r.useState,Pw=$r.useEffect,Aw=$r.useLayoutEffect,Ow=$r.useDebugValue;function Lw(t,e){var n=e(),r=Rw({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Aw(function(){i.value=n,i.getSnapshot=e,ya(i)&&s({inst:i})},[t,n,e]),Pw(function(){return ya(i)&&s({inst:i}),t(function(){ya(i)&&s({inst:i})})},[t]),Ow(n),n}function ya(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bw(t,n)}catch{return!0}}function Dw(t,e){return e()}var Mw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Dw:Lw;zg.useSyncExternalStore=$r.useSyncExternalStore!==void 0?$r.useSyncExternalStore:Mw;Ug.exports=zg;var jw=Ug.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=L,Fw=jw;function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zw=typeof Object.is=="function"?Object.is:Uw,Vw=Fw.useSyncExternalStore,Ww=Il.useRef,$w=Il.useEffect,Hw=Il.useMemo,Bw=Il.useDebugValue;Fg.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Ww(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Hw(function(){function a(g){if(!u){if(u=!0,h=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return c=v}return c=g}if(v=c,zw(h,g))return v;var y=r(g);return i!==void 0&&i(v,y)?(h=g,v):(h=g,c=y)}var u=!1,h,c,f=n===void 0?null:n;return[function(){return a(e())},f===null?void 0:function(){return a(f())}]},[e,n,r,i]);var l=Vw(t,s[0],s[1]);return $w(function(){o.hasValue=!0,o.value=l},[l]),Bw(l),l};jg.exports=Fg;var Gw=jg.exports;const Kw=Sp(Gw),Vg={},{useDebugValue:qw}=py,{useSyncExternalStoreWithSelector:Qw}=Kw;let of=!1;const Yw=t=>t;function Jw(t,e=Yw,n){(Vg?"production":void 0)!=="production"&&n&&!of&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),of=!0);const r=Qw(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return qw(r),r}const lf=t=>{(Vg?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Iw(t):t,n=(r,i)=>Jw(e,r,i);return Object.assign(n,e),n},Xw=t=>t?lf(t):lf;var af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+Wg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[h],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new ex;const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ex extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=$g(t);return qc.encodeByteArray(e,!0)},Uo=function(t){return Hg(t).replace(/\./g,"")},zo=function(t){try{return qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){return Bg(void 0,t)}function Bg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nx(n)||(t[n]=Bg(t[n],e[n]));return t}function nx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=()=>rx().__FIREBASE_DEFAULTS__,sx=()=>{if(typeof process>"u"||typeof af>"u")return;const t=af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ox=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return ix()||sx()||ox()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lx=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},qg=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function ux(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dx(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hx(){return Wg.NODE_ADMIN===!0}function fx(){try{return typeof indexedDB=="object"}catch{return!1}}function px(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mx,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function gx(t,e){return t.replace(_x,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _x=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ss(zo(s[0])||""),n=ss(zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vx=function(t){const e=Yg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yx=function(t){const e=Yg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uf(s)&&uf(o)){if(!Wo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function xx(t,e){const n=new Ex(t,e);return n.subscribe.bind(n)}class Ex{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wa),i.error===void 0&&(i.error=wa),i.complete===void 0&&(i.complete=wa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}function Nl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ix(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tx(t){return t===jn?void 0:t}function Ix(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const bx={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Rx=Q.INFO,Px={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Ax=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Px[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=Rx,this._logHandler=Ax,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Ox=(t,e)=>e.some(n=>t instanceof n);let cf,df;function Lx(){return cf||(cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dx(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jg=new WeakMap,Ru=new WeakMap,Xg=new WeakMap,xa=new WeakMap,Xc=new WeakMap;function Mx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jg.set(n,t)}).catch(()=>{}),Xc.set(e,t),e}function jx(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fx(t){Pu=t(Pu)}function Ux(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ea(this),e,...n);return Xg.set(r,e.sort?e.sort():[e]),yn(r)}:Dx().includes(t)?function(...e){return t.apply(Ea(this),e),yn(Jg.get(this))}:function(...e){return yn(t.apply(Ea(this),e))}}function zx(t){return typeof t=="function"?Ux(t):(t instanceof IDBTransaction&&jx(t),Ox(t,Lx())?new Proxy(t,Pu):t)}function yn(t){if(t instanceof IDBRequest)return Mx(t);if(xa.has(t))return xa.get(t);const e=zx(t);return e!==t&&(xa.set(t,e),Xc.set(e,t)),e}const Ea=t=>Xc.get(t);function Vx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yn(o.result),a.oldVersion,a.newVersion,yn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Wx=["get","getKey","getAll","getAllKeys","count"],$x=["put","add","delete","clear"],Sa=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wx.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Sa.set(e,s),s}Fx(t=>({...t,get:(e,n,r)=>hf(e,n)||t.get(e,n,r),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Au="@firebase/app",ff="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Jc("@firebase/app"),Gx="@firebase/app-compat",Kx="@firebase/analytics-compat",qx="@firebase/analytics",Qx="@firebase/app-check-compat",Yx="@firebase/app-check",Jx="@firebase/auth",Xx="@firebase/auth-compat",Zx="@firebase/database",eE="@firebase/data-connect",tE="@firebase/database-compat",nE="@firebase/functions",rE="@firebase/functions-compat",iE="@firebase/installations",sE="@firebase/installations-compat",oE="@firebase/messaging",lE="@firebase/messaging-compat",aE="@firebase/performance",uE="@firebase/performance-compat",cE="@firebase/remote-config",dE="@firebase/remote-config-compat",hE="@firebase/storage",fE="@firebase/storage-compat",pE="@firebase/firestore",mE="@firebase/vertexai-preview",gE="@firebase/firestore-compat",_E="firebase",vE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="[DEFAULT]",yE={[Au]:"fire-core",[Gx]:"fire-core-compat",[qx]:"fire-analytics",[Kx]:"fire-analytics-compat",[Yx]:"fire-app-check",[Qx]:"fire-app-check-compat",[Jx]:"fire-auth",[Xx]:"fire-auth-compat",[Zx]:"fire-rtdb",[eE]:"fire-data-connect",[tE]:"fire-rtdb-compat",[nE]:"fire-fn",[rE]:"fire-fn-compat",[iE]:"fire-iid",[sE]:"fire-iid-compat",[oE]:"fire-fcm",[lE]:"fire-fcm-compat",[aE]:"fire-perf",[uE]:"fire-perf-compat",[cE]:"fire-rc",[dE]:"fire-rc-compat",[hE]:"fire-gcs",[fE]:"fire-gcs-compat",[pE]:"fire-fst",[gE]:"fire-fst-compat",[mE]:"fire-vertex","fire-js":"fire-js",[_E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map,wE=new Map,Lu=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Lu.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of $o.values())pf(n,t);for(const n of wE.values())pf(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new Es("app","Firebase",xE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=vE;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=Kg()),!n)throw wn.create("no-options");const s=$o.get(i);if(s){if(Wo(n,s.options)&&Wo(r,s.config))return s;throw wn.create("duplicate-app",{appName:i})}const o=new Nx(i);for(const a of Lu.values())o.addComponent(a);const l=new EE(n,r,o);return $o.set(i,l),l}function e_(t=Ou){const e=$o.get(t);if(!e&&t===Ou&&Kg())return Zg();if(!e)throw wn.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=yE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Br(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebase-heartbeat-database",CE=1,os="firebase-heartbeat-store";let Ca=null;function t_(){return Ca||(Ca=Vx(SE,CE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(os)}catch(n){console.warn(n)}}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ca}async function kE(t){try{const n=(await t_()).transaction(os),r=await n.objectStore(os).get(n_(t));return await n.done,r}catch(e){if(e instanceof Pn)Gt.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function mf(t,e){try{const r=(await t_()).transaction(os,"readwrite");await r.objectStore(os).put(e,n_(t)),await r.done}catch(n){if(n instanceof Pn)Gt.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function n_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=1024,IE=30*24*60*60*1e3;class NE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=IE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:i}=bE(this._heartbeatsCache.heartbeats),s=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gt.warn(n),""}}}function gf(){return new Date().toISOString().substring(0,10)}function bE(t,e=TE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fx()?px().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _f(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){Br(new Yn("platform-logger",e=>new Hx(e),"PRIVATE")),Br(new Yn("heartbeat",e=>new NE(e),"PRIVATE")),xn(Au,ff,t),xn(Au,ff,"esm2017"),xn("fire-js","")}PE("");var AE="firebase",OE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(AE,OE,"app");var vf={};const yf="@firebase/database",wf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_="";function LE(t){r_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DE(e)}}catch{}return new ME},Wn=i_("localStorage"),jE=i_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Jc("@firebase/database"),FE=function(){let t=1;return function(){return t++}}(),s_=function(t){const e=Cx(t),n=new wx;n.update(e);const r=n.digest();return qc.encodeByteArray(r)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ss.apply(null,r):typeof r=="object"?e+=Ee(r):e+=r,e+=" "}return e};let Mi=null,xf=!0;const UE=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Rr.logLevel=Q.VERBOSE,Mi=Rr.log.bind(Rr)},ke=function(...t){if(xf===!0&&(xf=!1,Mi===null&&jE.get("logging_enabled")===!0&&UE()),Mi){const e=Ss.apply(null,t);Mi(e)}},Cs=function(t){return function(...e){ke(t,...e)}},Du=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);Rr.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw Rr.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Ss(...t);Rr.warn(e)},zE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ed=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},VE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",Jn="[MAX_NAME]",ir=function(t,e){if(t===e)return 0;if(t===Gr||e===Jn)return-1;if(e===Gr||t===Jn)return 1;{const n=Ef(t),r=Ef(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WE=function(t,e){return t===e?0:t<e?-1:1},_i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},td=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ee(e[r]),n+=":",n+=td(t[e[r]]);return n+="}",n},o_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const l_=function(t){S(!ed(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},$E=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function BE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GE=new RegExp("^-?(0*)\\d{1,10}$"),KE=-2147483648,qE=2147483647,Ef=function(t){if(GE.test(t)){const e=Number(t);if(e>=KE&&e<=qE)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},QE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="5",a_="v",u_="s",c_="r",d_="f",h_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f_="ls",p_="p",Mu="ac",m_="websocket",g_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===m_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===g_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XE(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={},Ta={};function rd(t){const e=t.toString();return ka[e]||(ka[e]=new ZE),ka[e]}function eS(t,e){const n=t.toString();return Ta[n]||(Ta[n]=e()),Ta[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="start",nS="close",rS="pLPCommand",iS="pRTLPCB",y_="id",w_="pw",x_="ser",sS="cb",oS="seg",lS="ts",aS="d",uS="dframe",E_=1870,S_=30,cS=E_-S_,dS=25e3,hS=3e4;class Er{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=rd(n),this.urlFn=a=>(this.appCheckToken&&(a[Mu]=this.appCheckToken),v_(n,g_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hS)),VE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new id((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sf)this.id=l,this.password=a;else if(o===nS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sf]="t",r[x_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[a_]=nd,this.transportSessionId&&(r[u_]=this.transportSessionId),this.lastSessionId&&(r[f_]=this.lastSessionId),this.applicationId&&(r[p_]=this.applicationId),this.appCheckToken&&(r[Mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&h_.test(location.hostname)&&(r[c_]=d_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$E()&&!HE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hg(n),i=o_(r,cS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uS]="t",r[y_]=e,r[w_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class id{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FE(),window[rS+this.uniqueCallbackIdentifier]=e,window[iS+this.uniqueCallbackIdentifier]=n,this.myIFrame=id.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y_]=this.myID,e[w_]=this.myPW,e[x_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+r.length<=E_;){const o=this.pendingSegs.shift();r=r+"&"+oS+i+"="+o.seg+"&"+lS+i+"="+o.ts+"&"+aS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=16384,pS=45e3;let Ho=null;typeof MozWebSocket<"u"?Ho=MozWebSocket:typeof WebSocket<"u"&&(Ho=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=rd(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[a_]=nd,typeof location<"u"&&location.hostname&&h_.test(location.hostname)&&(o[c_]=d_),n&&(o[u_]=n),r&&(o[f_]=r),i&&(o[Mu]=i),s&&(o[p_]=s),v_(e,m_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;hx(),this.mySock=new Ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ho!==null&&!ht.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ss(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=o_(n,fS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of ls.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=6e4,gS=5e3,_S=10*1024,vS=100*1024,Ia="t",Cf="d",yS="s",kf="r",wS="e",Tf="o",If="a",Nf="n",bf="p",xS="h";class ES{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_S?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ia in e){const n=e[Ia];n===If?this.upgradeIfSecondaryHealthy_():n===kf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:If,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_i(Ia,e);if(Cf in e){const r=e[Cf];if(n===xS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yS?this.onConnectionShutdown_(r):n===kf?this.onReset_(r):n===wS?Du("Server Error: "+r):n===Tf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nd!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends k_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bo}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=32,Pf=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Y("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function sd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function as(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function T_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return $e(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CS(t,e){const n=as(t,0),r=as(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ir(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function od(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kS{constructor(e,n){this.errorPrefix_=n,this.parts_=as(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bl(this.parts_[r]);I_(this)}}function TS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bl(e),I_(t)}function IS(t){const e=t.parts_.pop();t.byteLength_-=bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function I_(t){if(t.byteLength_>Pf)throw new Error(t.errorPrefix_+"has a key path longer than "+Pf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rf+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends k_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ld}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=1e3,NS=60*5*1e3,Af=30*1e3,bS=1.3,RS=3e4,PS="server_kill",Of=3;class Vt extends C_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Vt.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vi,this.maxReconnectDelay_=NS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ld.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ee(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const r=Hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Du("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RS&&(this.reconnectDelay_=vi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new ES(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(PS)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bu(this.interruptReasons_)&&(this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>td(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Of&&(this.reconnectDelay_=Af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Of&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+r_.replace(/\./g,"-")]=1,Yc()?e["framework.cordova"]=1:Qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bo.getInstance().currentlyOnline();return bu(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(Gr,e),i=new V(Gr,n);return this.compare(r,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class N_ extends Rl{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return ir(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Jn,qs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,qs)}toString(){return".key"}}const Pr=new N_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??we.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new we(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class AS{copy(e,n,r,i,s){return this}insert(e,n,r){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qs(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new AS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t,e){return ir(t.name,e.name)}function ad(t,e){return ir(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju;function LS(t){ju=t}const b_=function(t){return typeof t=="number"?"number:"+l_(t):"string:"+t},R_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else S(t===ju||t.isEmpty(),"priority of unexpected type.");S(t===ju||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),R_(this.priorityNode_)}static set __childrenNodeConstructor(e){Lf=e}static get __childrenNodeConstructor(){return Lf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+b_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=l_(this.value_):e+=this.value_,this.lazyHash_=s_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_,A_;function DS(t){P_=t}function MS(t){A_=t}class jS extends Rl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ir(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Jn,new ve("[PRIORITY-POST]",A_))}makePost(e,n){const r=P_(e);return new V(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const de=new jS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=Math.log(2);class US{constructor(e){const n=s=>parseInt(Math.log(s)/FS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Go=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,f;if(h===0)return null;if(h===1)return c=t[a],f=n?n(c):c,new we(f,c.node,we.BLACK,null,null);{const g=parseInt(h/2,10)+a,v=i(a,g),y=i(g+1,u);return c=t[g],f=n?n(c):c,new we(f,c.node,we.BLACK,v,y)}},s=function(a){let u=null,h=null,c=t.length;const f=function(v,y){const w=c-v,m=c;c-=v;const p=i(w+1,m),_=t[w],x=n?n(_):_;g(new we(x,_.node,y,null,p))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),w=Math.pow(2,a.count-(v+1));y?f(w,we.BLACK):(f(w,we.BLACK),f(w,we.RED))}return h},o=new US(t.length),l=s(o);return new He(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const ur={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(ur&&de,"ChildrenNode.ts has not been loaded"),Na=Na||new Mt({".priority":ur},{".priority":de}),Na}get(e){const n=Hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Pr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Go(r,e.getCompare()):l=ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Mt(h,u)}addToIndexes(e,n){const r=Vo(this.indexes_,(i,s)=>{const o=Hr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Go(l,o.getCompare())}else return ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vo(this.indexes_,i=>{if(i===ur)return i;{const s=n.get(e.name);return s?i.remove(new V(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&R_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yi||(yi=new O(new He(ad),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yi:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?yi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{S(z(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+b_(this.getPriority().val())+":"),this.forEachChild(de,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===Pr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(de),i=n.getIterator(de);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zS extends O{constructor(){super(new He(ad),O.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ks=new zS;Object.defineProperties(V,{MIN:{value:new V(Gr,O.EMPTY_NODE)},MAX:{value:new V(Jn,ks)}});N_.__EMPTY_NODE=O.EMPTY_NODE;ve.__childrenNodeConstructor=O;LS(ks);MS(ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=!0;function xe(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,xe(e))}if(!(t instanceof Array)&&VS){const n=[];let r=!1;if(Ne(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=xe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Go(n,OS,o=>o.name,ad);if(r){const o=Go(n,de.getCompare());return new O(s,xe(e),new Mt({".priority":o},{".priority":de}))}else return new O(s,xe(e),Mt.Default)}else{let n=O.EMPTY_NODE;return Ne(t,(r,i)=>{if(bt(t,r)&&r.substring(0,1)!=="."){const s=xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xe(e))}}DS(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends Rl{constructor(e){super(),this.indexPath_=e,S(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ir(e.name,n.name):s}makePost(e,n){const r=xe(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ks);return new V(Jn,e)}toString(){return as(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S extends Rl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ir(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=xe(e);return new V(n,r)}toString(){return".value"}}const HS=new $S;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(us(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(cs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(de,(i,s)=>{n.hasChild(i)||r.trackChildChange(us(i,s))}),n.isLeafNode()||n.forEachChild(de,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(cs(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new V(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,l)=>{s.matches(new V(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new V(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new V(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(cs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(us(n,c));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Kr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(us(u.name,u.node)),s.trackChildChange(Kr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KS(t){return t.loadsAllData()?new ud(t.getIndex()):t.hasLimit()?new GS(t):new ds(t)}function Df(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===HS?n="$value":t.index_===Pr?n="$key":(S(t.index_ instanceof WS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ee(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ee(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ee(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends C_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=Df(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Hr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Df(e._queryParams),r=e._path.toString(),i=new xs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ss(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){return{value:null,children:new Map}}function L_(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,qo());const i=t.children.get(r);e=X(e),L_(i,e,n)}}function Fu(t,e,n){t.value!==null?n(e,t.value):QS(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);Fu(i,s,n)})}function QS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=10*1e3,JS=30*1e3,XS=5*60*1e3;class ZS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YS(e);const r=jf+(JS-jf)*Math.random();ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*XS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function dd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=dd()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new Qo(G(),n,this.revert)}}else return S(z(this.path)===e,"operationForChild called for unrelated child."),new Qo(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new hs(this.source,G()):new hs(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return W(this.path)?new Xn(this.source,G(),this.snap.getImmediateChild(e)):new Xn(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new Xn(this.source,G(),n.value):new qr(this.source,G(),n)}else return S(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qr(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(BS(o.childName,o.snapshotNode))}),wi(t,i,"child_removed",e,r,n),wi(t,i,"child_added",e,r,n),wi(t,i,"child_moved",s,r,n),wi(t,i,"child_changed",e,r,n),wi(t,i,"value",e,r,n),i}function wi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>rC(t,l,a)),o.forEach(l=>{const a=nC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function nC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rC(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return Pl(new Zn(e,n,r),t.serverCache)}function D_(t,e,n,r){return Pl(t.eventCache,new Zn(e,n,r))}function Uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;const iC=()=>(ba||(ba=new He(WE)),ba);class J{constructor(e,n=iC()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Ne(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ce(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new J(null)}}set(e,n){if(W(e))return new J(n,this.children);{const r=z(e),s=(this.children.get(r)||new J(null)).set(X(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new J(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ce(n,i),r):new J(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new J(null))}}function Ui(t,e,n){if(W(e))return new gt(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$e(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function zu(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Ui(r,ce(e,i),s)}),r}function Ff(t,e){if(W(e))return gt.empty();{const n=t.writeTree_.setTree(e,new J(null));return new gt(n)}}function Vu(t,e){return sr(t,e)!=null}function sr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Uf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(r,i)=>{e.push(new V(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new V(r,i.value))}),e}function En(t,e){if(W(e))return t;{const n=sr(t,e);return n!=null?new gt(new J(n)):new gt(t.writeTree_.subtree(e))}}function Wu(t){return t.writeTree_.isEmpty()}function Qr(t,e){return M_(G(),t.writeTree_,e)}function M_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=M_(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e){return z_(e,t)}function sC(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ui(t.visibleWrites,e,n)),t.lastWriteId=r}function oC(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=zu(t.visibleWrites,e,n),t.lastWriteId=r}function lC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&uC(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return cC(t),!0;if(r.snap)t.visibleWrites=Ff(t.visibleWrites,r.path);else{const l=r.children;Ne(l,a=>{t.visibleWrites=Ff(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function uC(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(ce(t.path,n),e))return!0;return!1}function cC(t){t.visibleWrites=j_(t.allWrites,dC,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dC(t){return t.visible}function j_(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=$e(n,o),r=Ui(r,l,s.snap)):rt(o,n)&&(l=$e(o,n),r=Ui(r,G(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=$e(n,o),r=zu(r,l,s.children);else if(rt(o,n))if(l=$e(o,n),W(l))r=zu(r,G(),s.children);else{const a=Hr(s.children,z(l));if(a){const u=a.getChild(X(l));r=Ui(r,G(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function F_(t,e,n,r,i){if(!r&&!i){const s=sr(t.visibleWrites,e);if(s!=null)return s;{const o=En(t.visibleWrites,e);if(Wu(o))return n;if(n==null&&!Vu(o,G()))return null;{const l=n||O.EMPTY_NODE;return Qr(o,l)}}}else{const s=En(t.visibleWrites,e);if(!i&&Wu(s))return n;if(!i&&n==null&&!Vu(s,G()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=j_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Qr(l,a)}}}function hC(t,e,n){let r=O.EMPTY_NODE;const i=sr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=En(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const a=Qr(En(s,new Y(o)),l);r=r.updateImmediateChild(o,a)}),Uf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=En(t.visibleWrites,e);return Uf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fC(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Vu(t.visibleWrites,s))return null;{const o=En(t.visibleWrites,s);return Wu(o)?i.getChild(n):Qr(o,i.getChild(n))}}function pC(t,e,n,r){const i=ce(e,n),s=sr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function mC(t,e){return sr(t.visibleWrites,e)}function gC(t,e,n,r,i,s,o){let l;const a=En(t.visibleWrites,e),u=sr(a,G());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<i;)c(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function _C(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Yo(t,e,n,r){return F_(t.writeTree,t.treePath,e,n,r)}function md(t,e){return hC(t.writeTree,t.treePath,e)}function zf(t,e,n,r){return fC(t.writeTree,t.treePath,e,n,r)}function Jo(t,e){return mC(t.writeTree,ce(t.treePath,e))}function vC(t,e,n,r,i,s){return gC(t.writeTree,t.treePath,e,n,r,i,s)}function gd(t,e,n){return pC(t.writeTree,t.treePath,e,n)}function U_(t,e){return z_(ce(t.treePath,e),t.writeTree)}function z_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,cs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,us(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,cs(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const V_=new wC;class _d{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=vC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){return{filter:t}}function EC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SC(t,e,n,r,i){const s=new yC;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=$u(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Xo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=kC(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=NC(t,e,u.path,r,i,s):o=TC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=IC(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const a=s.getChanges();return CC(e,o,a),{viewCache:o,changes:a}}function CC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Uu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(O_(Uu(e)))}}function W_(t,e,n,r,i,s){const o=e.eventCache;if(Jo(r,n)!=null)return e;{let l,a;if(W(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),h=u instanceof O?u:O.EMPTY_NODE,c=md(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Yo(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){S(Tn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=zf(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=X(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=zf(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(h,f):c=o.getNode().getImmediateChild(u)}else c=gd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return Fi(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Xo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),g,null)}else{const g=z(n);if(!a.isCompleteForPath(n)&&Tn(n)>1)return e;const v=X(n),w=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(a.getNode(),w):u=h.updateChild(a.getNode(),g,w,v,V_,null)}const c=D_(e,u,a.isFullyInitialized()||W(n),h.filtersNodes()),f=new _d(i,c,s);return W_(t,c,n,i,f,l)}function $u(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new _d(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Fi(e,u,!0,t.filter.filtersNodes());else{const c=z(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Fi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=X(n),g=l.getNode().getImmediateChild(c);let v;if(W(f))v=r;else{const y=h.getCompleteChild(c);y!=null?sd(f)===".priority"&&y.getChild(T_(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=O.EMPTY_NODE}if(g.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,f,h,o);a=Fi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Vf(t,e){return t.eventCache.isCompleteForChild(e)}function kC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=ce(n,a);Vf(e,z(h))&&(l=$u(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=ce(n,a);Vf(e,z(h))||(l=$u(t,l,h,u,i,s,o))}),l}function Wf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;W(n)?u=r:u=new J(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(h.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=Wf(t,g,f);a=Xo(t,a,new Y(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!h.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),y=Wf(t,v,f);a=Xo(t,a,new Y(c),y,i,s,o,l)}}),a}function TC(t,e,n,r,i,s,o){if(Jo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Xo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(W(n)){let u=new J(null);return a.getNode().forEachChild(Pr,(h,c)=>{u=u.set(new Y(h),c)}),Hu(t,e,n,u,i,s,l,o)}else return e}else{let u=new J(null);return r.foreach((h,c)=>{const f=ce(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Hu(t,e,n,u,i,s,l,o)}}function IC(t,e,n,r,i){const s=e.serverCache,o=D_(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return W_(t,o,n,r,V_,i)}function NC(t,e,n,r,i,s){let o;if(Jo(r,n)!=null)return e;{const l=new _d(r,e,i),a=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Yo(r,er(e));else{const c=e.serverCache.getNode();S(c instanceof O,"serverChildren would be complete if leaf node"),h=md(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=z(n);let c=gd(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,X(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,O.EMPTY_NODE,X(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yo(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Jo(r,G())!=null,Fi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ud(r.getIndex()),s=KS(r);this.processor_=xC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),h=new Zn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Zn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Pl(c,h),this.eventGenerator_=new eC(this.query_)}get query(){return this.query_}}function RC(t){return t.viewCache_.serverCache.getNode()}function PC(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function $f(t){return t.eventRegistrations_.length===0}function AC(t,e){t.eventRegistrations_.push(e)}function Hf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Bf(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(S(er(t.viewCache_),"We should always have a full cache before handling merges"),S(Uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SC(t.processor_,i,e,n,r);return EC(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function OC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(O_(n.getNode())),$_(t,r,n.getNode(),e)}function $_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class LC{constructor(){this.views=new Map}}function DC(t){S(!Zo,"__referenceConstructor has already been defined"),Zo=t}function MC(){return S(Zo,"Reference.ts has not been loaded"),Zo}function jC(t){return t.views.size===0}function vd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Bf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Bf(o,e,n,r));return s}}function FC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Yo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=md(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Pl(new Zn(l,a,!1),new Zn(r,i,!1));return new bC(e,u)}return o}function UC(t,e,n,r,i,s){const o=FC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AC(o,n),OC(o,n)}function zC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=In(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Hf(u,n,r)),$f(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Hf(a,n,r)),$f(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!In(t)&&s.push(new(MC())(e._repo,e._path)),{removed:s,events:o}}function H_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ar(t,e){let n=null;for(const r of t.views.values())n=n||PC(r,e);return n}function B_(t,e){if(e._queryParams.loadsAllData())return Al(t);{const r=e._queryIdentifier;return t.views.get(r)}}function G_(t,e){return B_(t,e)!=null}function In(t){return Al(t)!=null}function Al(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;function VC(t){S(!el,"__referenceConstructor has already been defined"),el=t}function WC(){return S(el,"Reference.ts has not been loaded"),el}let $C=1;class Gf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=_C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(t,e,n,r,i){return sC(t.pendingWriteTree_,e,n,r,i),i?si(t,new Xn(dd(),e,n)):[]}function HC(t,e,n,r){oC(t.pendingWriteTree_,e,n,r);const i=J.fromObject(n);return si(t,new qr(dd(),e,i))}function cn(t,e,n=!1){const r=lC(t.pendingWriteTree_,e);if(aC(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set(G(),!0):Ne(r.children,o=>{s=s.set(new Y(o),!0)}),si(t,new Qo(r.path,s,n))}else return[]}function Ol(t,e,n){return si(t,new Xn(hd(),e,n))}function BC(t,e,n){const r=J.fromObject(n);return si(t,new qr(hd(),e,r))}function GC(t,e){return si(t,new hs(hd(),e))}function KC(t,e,n){const r=wd(t,n);if(r){const i=xd(r),s=i.path,o=i.queryId,l=$e(s,e),a=new hs(fd(o),l);return Ed(t,s,a)}else return[]}function Bu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||G_(o,e))){const a=zC(o,e,n,r);jC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>In(g));if(h&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=YC(f);for(let v=0;v<g.length;++v){const y=g[v],w=y.query,m=Y_(t,y);t.listenProvider_.startListening(zi(w),tl(t,w),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(zi(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Ll(f));t.listenProvider_.stopListening(zi(f),g)}))}JC(t,u)}return l}function qC(t,e,n,r){const i=wd(t,r);if(i!=null){const s=xd(i),o=s.path,l=s.queryId,a=$e(o,e),u=new Xn(fd(l),a,n);return Ed(t,o,u)}else return[]}function QC(t,e,n,r){const i=wd(t,r);if(i){const s=xd(i),o=s.path,l=s.queryId,a=$e(o,e),u=J.fromObject(n),h=new qr(fd(l),a,u);return Ed(t,o,h)}else return[]}function Kf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=$e(f,i);s=s||Ar(g,v),o=o||In(g)});let l=t.syncPointTree_.get(i);l?(o=o||In(l),s=s||Ar(l,G())):(l=new LC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=Ar(v,G());y&&(s=s.updateImmediateChild(g,y))}));const u=G_(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ll(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=XC();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=pd(t.pendingWriteTree_,i);let c=UC(l,e,n,h,s,a);if(!u&&!o&&!r){const f=B_(l,e);c=c.concat(ZC(t,e,f))}return c}function yd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),u=Ar(l,a);if(u)return u});return F_(i,e,s,n,!0)}function si(t,e){return q_(e,t.syncPointTree_,null,pd(t.pendingWriteTree_,G()))}function q_(t,e,n,r){if(W(t.path))return Q_(t,e,n,r);{const i=e.get(G());n==null&&i!=null&&(n=Ar(i,G()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=U_(r,o);s=s.concat(q_(l,a,u,h))}return i&&(s=s.concat(vd(i,t,r,n))),s}}function Q_(t,e,n,r){const i=e.get(G());n==null&&i!=null&&(n=Ar(i,G()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=U_(r,o),h=t.operationForChild(o);h&&(s=s.concat(Q_(h,l,a,u)))}),i&&(s=s.concat(vd(i,t,r,n))),s}function Y_(t,e){const n=e.query,r=tl(t,n);return{hashFn:()=>(RC(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?KC(t,n._path,r):GC(t,n._path);{const s=BE(i,n);return Bu(t,n,null,s)}}}}function tl(t,e){const n=Ll(e);return t.queryToTagMap.get(n)}function Ll(t){return t._path.toString()+"$"+t._queryIdentifier}function wd(t,e){return t.tagToQueryMap.get(e)}function xd(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function Ed(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=pd(t.pendingWriteTree_,e);return vd(r,n,i,null)}function YC(t){return t.fold((e,n,r)=>{if(n&&In(n))return[Al(n)];{let i=[];return n&&(i=H_(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(WC())(t._repo,t._path):t}function JC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ll(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function XC(){return $C++}function ZC(t,e,n){const r=e._path,i=tl(t,e),s=Y_(t,n),o=t.listenProvider_.startListening(zi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!In(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!W(u)&&h&&In(h))return[Al(h).query];{let f=[];return h&&(f=f.concat(H_(h).map(g=>g.query))),Ne(c,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(zi(h),tl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Cd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Cd(this.syncTree_,n)}node(){return yd(this.syncTree_,this.path_)}}const ek=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qf=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nk(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},nk=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},J_=function(t,e,n,r){return kd(e,new Cd(n,t),r)},X_=function(t,e,n){return kd(t,new Sd(e),n)};function kd(t,e,n){const r=t.getPriority().val(),i=qf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=qf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(de,(l,a)=>{const u=kd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Id(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=z(n);for(;i!==null;){const s=Hr(r.node.children,i)||{children:{},childCount:0};r=new Td(i,r,s),n=X(n),i=z(n)}return r}function oi(t){return t.node.value}function Z_(t,e){t.node.value=e,Gu(t)}function ev(t){return t.node.childCount>0}function rk(t){return oi(t)===void 0&&!ev(t)}function Dl(t,e){Ne(t.node.children,(n,r)=>{e(new Td(n,t,r))})}function tv(t,e,n,r){n&&e(t),Dl(t,i=>{tv(i,e,!0)})}function ik(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ts(t){return new Y(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function Gu(t){t.parent!==null&&sk(t.parent,t.name,t)}function sk(t,e,n){const r=rk(n),i=bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=/[\[\].#$\/\u0000-\u001F\u007F]/,lk=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,Nd=function(t){return typeof t=="string"&&t.length!==0&&!ok.test(t)},nv=function(t){return typeof t=="string"&&t.length!==0&&!lk.test(t)},ak=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nv(t)},uk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ed(t)||t&&typeof t=="object"&&bt(t,".sv")},rv=function(t,e,n,r){r&&e===void 0||Ml(Nl(t,"value"),e,n)},Ml=function(t,e,n){const r=n instanceof Y?new kS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(ed(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Ra/3&&bl(e)>Ra)throw new Error(t+"contains a string greater than "+Ra+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Nd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TS(r,o),Ml(t,l,r),IS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},ck=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=as(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Nd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(CS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},dk=function(t,e,n,r){const i=Nl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,l)=>{const a=new Y(o);if(Ml(i,l,ce(n,a)),sd(a)===".priority"&&!uk(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),ck(i,s)},iv=function(t,e,n,r){if(!nv(n))throw new Error(Nl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),iv(t,e,n)},bd=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ak(n))throw new Error(Nl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!od(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sv(t,e,n){jl(t,n),ov(t,r=>od(r,e))}function vt(t,e,n){jl(t,n),ov(t,r=>rt(r,e)||rt(e,r))}function ov(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mi&&ke("event: "+n.toString()),ii(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="repo_interrupt",_k=25;class vk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qo(),this.transactionQueueTree_=new Td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yk(t,e,n){if(t.stats_=rd(t.repoInfo_),t.forceRestClient_||QE())t.server_=new Ko(t.repoInfo_,(r,i,s,o)=>{Qf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,s,o)=>{Qf(t,r,i,s,o)},r=>{Yf(t,r)},r=>{wk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eS(t.repoInfo_,()=>new ZS(t.stats_,t.server_)),t.infoData_=new qS,t.infoSyncTree_=new Gf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ol(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Rd(t,"connected",!1),t.serverSyncTree_=new Gf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);vt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lv(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fl(t){return ek({timestamp:lv(t)})}function Qf(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Vo(n,u=>xe(u));o=QC(t.serverSyncTree_,s,a,i)}else{const a=xe(n);o=qC(t.serverSyncTree_,s,a,i)}else if(r){const a=Vo(n,u=>xe(u));o=BC(t.serverSyncTree_,s,a)}else{const a=xe(n);o=Ol(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Yr(t,s)),vt(t.eventQueue_,l,o)}function Yf(t,e){Rd(t,"connected",e),e===!1&&Sk(t)}function wk(t,e){Ne(e,(n,r)=>{Rd(t,n,r)})}function Rd(t,e,n){const r=new Y("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(r,i);const s=Ol(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function Pd(t){return t.nextWriteId_++}function xk(t,e,n,r,i){Ul(t,"set",{path:e.toString(),value:n,priority:r});const s=Fl(t),o=xe(n,r),l=yd(t.serverSyncTree_,e),a=X_(o,l,s),u=Pd(t),h=K_(t.serverSyncTree_,e,a,u,!0);jl(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Me("set at "+e+" failed: "+f);const y=cn(t.serverSyncTree_,u,!v);vt(t.eventQueue_,e,y),Ku(t,i,f,g)});const c=Od(t,e);Yr(t,c),vt(t.eventQueue_,c,[])}function Ek(t,e,n,r){Ul(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fl(t),o={};if(Ne(n,(l,a)=>{i=!1,o[l]=J_(ce(e,l),xe(a),t.serverSyncTree_,s)}),i)ke("update() called with empty data.  Don't do anything."),Ku(t,r,"ok",void 0);else{const l=Pd(t),a=HC(t.serverSyncTree_,e,o,l);jl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const c=u==="ok";c||Me("update at "+e+" failed: "+u);const f=cn(t.serverSyncTree_,l,!c),g=f.length>0?Yr(t,e):e;vt(t.eventQueue_,g,f),Ku(t,r,u,h)}),Ne(n,u=>{const h=Od(t,ce(e,u));Yr(t,h)}),vt(t.eventQueue_,e,[])}}function Sk(t){Ul(t,"onDisconnectEvents");const e=Fl(t),n=qo();Fu(t.onDisconnect_,G(),(i,s)=>{const o=J_(i,s,t.serverSyncTree_,e);L_(n,i,o)});let r=[];Fu(n,G(),(i,s)=>{r=r.concat(Ol(t.serverSyncTree_,i,s));const o=Od(t,i);Yr(t,o)}),t.onDisconnect_=qo(),vt(t.eventQueue_,G(),r)}function Ck(t,e,n){let r;z(e._path)===".info"?r=Kf(t.infoSyncTree_,e,n):r=Kf(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function kk(t,e,n){let r;z(e._path)===".info"?r=Bu(t.infoSyncTree_,e,n):r=Bu(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function Tk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gk)}function Ul(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function Ku(t,e,n,r){e&&ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function av(t,e,n){return yd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Ad(t,e=t.transactionQueueTree_){if(e||zl(t,e),oi(e)){const n=cv(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ik(t,Ts(e),n)}else ev(e)&&Dl(e,n=>{Ad(t,n)})}function Ik(t,e,n){const r=n.map(u=>u.currentWriteId),i=av(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];S(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=$e(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ul(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(cn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zl(t,Id(t.transactionQueueTree_,e)),Ad(t,t.transactionQueueTree_),vt(t.eventQueue_,e,h);for(let f=0;f<c.length;f++)ii(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Yr(t,e)}},o)}function Yr(t,e){const n=uv(t,e),r=Ts(n),i=cv(t,n);return Nk(t,i,r),r}function Nk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=$e(n,a.path);let h=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=_k)h=!0,c="maxretry",i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=av(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Ml("transaction failed: Data returned ",g,a.path);let v=xe(g);typeof g=="object"&&g!=null&&bt(g,".priority")||(v=v.updatePriority(f.getPriority()));const w=a.currentWriteId,m=Fl(t),p=X_(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Pd(t),o.splice(o.indexOf(w),1),i=i.concat(K_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(cn(t.serverSyncTree_,w,!0))}else h=!0,c="nodata",i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}zl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ii(r[l]);Ad(t,t.transactionQueueTree_)}function uv(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&oi(r)===void 0;)r=Id(r,n),e=X(e),n=z(e);return r}function cv(t,e){const n=[];return dv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function dv(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(e,i=>{dv(t,i,n)})}function zl(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Z_(e,n.length>0?n:void 0)}Dl(e,r=>{zl(t,r)})}function Od(t,e){const n=Ts(uv(t,e)),r=Id(t.transactionQueueTree_,e);return ik(r,i=>{Pa(t,i)}),Pa(t,r),tv(r,i=>{Pa(t,i)}),n}function Pa(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Z_(e,void 0):n.length=s+1,vt(t.eventQueue_,Ts(e),i);for(let o=0;o<r.length;o++)ii(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jf=function(t,e){const n=Pk(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new __(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},Pk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=bk(t.substring(h,c)));const f=Rk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ak=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Xf.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Xf.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Lk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:sd(this._path)}get ref(){return new An(this._repo,this._path)}get _queryIdentifier(){const e=Mf(this._queryParams),n=td(e);return n==="{}"?"default":n}get _queryObject(){return Mf(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Ld))return!1;const n=this._repo===e._repo,r=od(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+SS(this._path)}}class An extends Ld{constructor(e,n){super(e,n,new cd,!1)}get parent(){const e=T_(this._path);return e===null?null:new An(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=fs(this.ref,e);return new nl(this._node.getChild(n),r,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new nl(i,fs(this.ref,r),de)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rl(t,e){return t=ze(t),t._checkNotDeleted("ref"),e!==void 0?fs(t._root,e):t._root}function fs(t,e){return t=ze(t),z(t._path)===null?hk("child","path",e):iv("child","path",e),new An(t._repo,ce(t._path,e))}function Mk(t,e){t=ze(t),bd("push",t._path),rv("push",e,t._path,!0);const n=lv(t._repo),r=Ak(n),i=fs(t,r),s=fs(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function jk(t){return bd("remove",t._path),qu(t,null)}function qu(t,e){t=ze(t),bd("set",t._path),rv("set",e,t._path,!1);const n=new xs;return xk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Fk(t,e){dk("update",e,t._path);const n=new xs;return Ek(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Dd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ok("value",this,new nl(e.snapshotNode,new An(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lk(this,e,n):null}matches(e){return e instanceof Dd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Uk(t,e,n,r,i){const s=new Dk(n,void 0),o=new Dd(s);return Ck(t._repo,t,o),()=>kk(t._repo,t,o)}function hv(t,e,n,r){return Uk(t,"value",e)}DC(An);VC(An);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let Vk=!1;function Wk(t,e,n,r){t.repoInfo_=new __(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $k(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jf(s,i),l=o.repoInfo,a;typeof process<"u"&&vf&&(a=vf[zk]),a?(s=`http://${a}?ns=${l.namespace}`,o=Jf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new JE(t.name,t.options,e);fk("Invalid Firebase Database URL",o),W(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Bk(l,t,u,new YE(t.name,n));return new Gk(h,t)}function Hk(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Tk(t),delete n[t.key]}function Bk(t,e,n,r){let i=Qu[e.name];i||(i={},Qu[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new vk(t,Vk,n,r),i[t.toURLString()]=s,s}class Gk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new An(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Hk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Kk(t=e_(),e){const n=Zc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lx("database");r&&qk(n,...r)}return n}function qk(t,e,n,r={}){t=ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new uo(uo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ax(r.mockUserToken,t.app.options.projectId);s=new uo(o)}Wk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){LE(ri),Br(new Yn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $k(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xn(yf,wf,t),xn(yf,wf,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Qk();function Md(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=fv,pv=new Es("auth","Firebase",fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Jc("@firebase/auth");function Jk(t,...e){il.logLevel<=Q.WARN&&il.warn(`Auth (${ri}): ${t}`,...e)}function co(t,...e){il.logLevel<=Q.ERROR&&il.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw jd(t,...e)}function It(t,...e){return jd(t,...e)}function mv(t,e,n){const r=Object.assign(Object.assign({},Yk()),{[e]:n});return new Es("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return mv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pv.create(t,...e)}function A(t,e,...n){if(!t)throw jd(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw co(e),new Error(e)}function qt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xk(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||cx()||"connection"in navigator)?navigator.onLine:!0}function eT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yc()||Qg()}get(){return Zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new Is(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,r,i={}){return _v(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return ux()||(u.referrerPolicy="no-referrer"),gv.fetch()(vv(t,t.config.apiHost,n,l),u)})}async function _v(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tT),e);try{const i=new iT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ys(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ys(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ys(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mv(t,h,u);yt(t,h)}}catch(i){if(i instanceof Pn)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function Vl(t,e,n,r,i={}){const s=await On(t,e,n,r,i);return"mfaPendingCredential"in s&&yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fd(t.config,i):`${t.config.apiScheme}://${i}`}function rT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),nT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ys(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}function ep(t){return t!==void 0&&t.enterprise!==void 0}class sT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oT(t,e){return On(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function yv(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aT(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Ud(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(Aa(i.auth_time)),issuedAtTime:Vi(Aa(i.iat)),expirationTime:Vi(Aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):(co("Failed to decode base64 JWT payload"),null)}catch(i){return co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tp(t){const e=Ud(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&uT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ps(t,yv(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wv(s.providerUserInfo):[],l=hT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ju(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function dT(t){const e=ze(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wv(t){return t.map(e=>{var{providerId:n}=e,r=Md(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,e){const n=await _v(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pT(t,e){return On(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=tp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Or;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ju(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aT(this,e)}reload(){return dT(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await ps(this,lT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:x,isAnonymous:C,providerData:k,stsTokenManager:I}=n;A(_&&I,e,"internal-error");const N=Or.fromJSON(this.name,I);A(typeof _=="string",e,"internal-error"),Xt(c,e.name),Xt(f,e.name),A(typeof x=="boolean",e,"internal-error"),A(typeof C=="boolean",e,"internal-error"),Xt(g,e.name),Xt(v,e.name),Xt(y,e.name),Xt(w,e.name),Xt(m,e.name),Xt(p,e.name);const U=new Ft({uid:_,auth:e,email:f,emailVerified:x,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:N,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(U.providerData=k.map(R=>Object.assign({},R))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Or;l.updateFromIdToken(r);const a=new Ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ju(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new Map;function Ut(t){qt(t instanceof Function,"Expected a class definition");let e=np.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,np.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xv.type="NONE";const rp=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ho(this.userKey,i.apiKey,s),this.fullPersistenceKey=ho("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(Ut(rp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(rp);const o=ho(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Ft._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Lr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Lr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(Nv(e))return"Webos";if(Sv(e))return"Safari";if((e.includes("chrome/")||Cv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ev(t=je()){return/firefox\//i.test(t)}function Sv(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cv(t=je()){return/crios\//i.test(t)}function kv(t=je()){return/iemobile/i.test(t)}function Tv(t=je()){return/android/i.test(t)}function Iv(t=je()){return/blackberry/i.test(t)}function Nv(t=je()){return/webos/i.test(t)}function zd(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mT(t=je()){var e;return zd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gT(){return dx()&&document.documentMode===10}function bv(t=je()){return zd(t)||Tv(t)||Nv(t)||Iv(t)||/windows phone/i.test(t)||kv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=ip(je());break;case"Worker":n=`${ip(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(t,e={}){return On(t,"GET","/v2/passwordPolicy",or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=6;class wT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new _T(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yv(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Sn(this));const n=e?ze(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vT(this),n=new wT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function li(t){return ze(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=xx(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ET(t){Wl=t}function Pv(t){return Wl.loadJS(t)}function ST(){return Wl.recaptchaEnterpriseScript}function CT(){return Wl.gapiScript}function kT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TT="recaptcha-enterprise",IT="NO_RECAPTCHA";class NT{constructor(e){this.type=TT,this.auth=li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{oT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new sT(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;ep(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(IT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ep(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=ST();a.length!==0&&(a+=l),Pv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function op(t,e,n,r=!1){const i=new NT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await op(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await op(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wo(s,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function RT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PT(t,e,n){const r=li(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Av(e),{host:o,port:l}=AT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),OT()}function Av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AT(t){const e=Av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ap(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ap(o)}}}function ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function LT(t,e){return On(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){return Vl(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return Vl(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function jT(t,e){return Vl(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Vd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lp(e,n,"signInWithPassword",DT);case"emailLink":return MT(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lp(e,r,"signUpPassword",LT);case"emailLink":return jT(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return Vl(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="http://localhost";class tr extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Md(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:FT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zT(t){const e=ki(Ti(t)).link,n=e?ki(Ti(e)).deep_link_id:null,r=ki(Ti(t)).deep_link_id;return(r?ki(Ti(r)).link:null)||r||n||e||t}class Wd{constructor(e){var n,r,i,s,o,l;const a=ki(Ti(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,c=UT((i=a.mode)!==null&&i!==void 0?i:null);A(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=zT(e);try{return new Wd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wd.parseLink(n);return A(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Ov{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ns{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ns{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ns{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=up(r);return new Jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=up(r);return new Jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function up(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ol(e,n,r,i)}}function Lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,s,e,r):s})}async function VT(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await ps(t,Lv(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Ud(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e,n=!1){if(Dt(t.app))return Promise.reject(Sn(t));const r="signIn",i=await Lv(t,r,e),s=await Jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $T(t,e){return Dv(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(t){const e=li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function BT(t,e,n){return Dt(t.app)?Promise.reject(Sn(t)):$T(ze(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HT(t),r})}function GT(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function KT(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function qT(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function QT(t){return ze(t).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=1e3,JT=10;class jv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jv.type="LOCAL";const XT=jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fv.type="SESSION";const Uv=Fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await ZT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=$d("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function tI(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function nI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iI(){return zv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="firebaseLocalStorageDb",sI=1,al="firebaseLocalStorage",Wv="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function oI(){const t=indexedDB.deleteDatabase(Vv);return new bs(t).toPromise()}function Xu(){const t=indexedDB.open(Vv,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:Wv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await oI(),e(await Xu()))})})}async function cp(t,e,n){const r=Hl(t,!0).put({[Wv]:e,value:n});return new bs(r).toPromise()}async function lI(t,e){const n=Hl(t,!1).get(e),r=await new bs(n).toPromise();return r===void 0?null:r.value}function dp(t,e){const n=Hl(t,!0).delete(e);return new bs(n).toPromise()}const aI=800,uI=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(iI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nI(),!this.activeServiceWorker)return;this.sender=new eI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xu();return await cp(e,ll,"1"),await dp(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const cI=$v;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e){return e?Ut(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return Dv(t.auth,new Hd(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),WT(n,new Hd(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),VT(n,new Hd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:yt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Is(2e3,1e4);class Sr extends Hv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",fo=new Map;class _I extends Hv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(t,e){const n=xI(e),r=wI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yI(t,e){fo.set(t._key(),e)}function wI(t){return Ut(t._redirectPersistence)}function xI(t){return ho(gI,t.config.apiKey,t.name)}async function EI(t,e,n=!1){if(Dt(t.app))return Promise.reject(Sn(t));const r=li(t),i=dI(r,e),o=await new _I(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=10*60*1e3;class CI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(hp(e))}saveEventToCache(e){this.cachedEventUids.add(hp(e)),this.lastProcessedEventTime=Date.now()}}function hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NI=/^https?/;async function bI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TI(t);for(const n of e)try{if(RI(n))return}catch{}yt(t,"unauthorized-domain")}function RI(t){const e=Yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NI.test(n))return!1;if(II.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Is(3e4,6e4);function fp(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AI(t){return new Promise((e,n)=>{var r,i,s;function o(){fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fp(),n(It(t,"network-request-failed"))},timeout:PI.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const l=kT("iframefcb");return Nt()[l]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Pv(`${CT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw po=null,e})}let po=null;function OI(t){return po=po||AI(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new Is(5e3,15e3),DI="__/auth/iframe",MI="emulator/auth/iframe",jI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fd(e,MI):`https://${t.config.authDomain}/${DI}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=FI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function zI(t){const e=await OI(t),n=Nt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=Nt().setTimeout(()=>{s(o)},LI.get());function a(){Nt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,$I=600,HI="_blank",BI="http://localhost";class pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GI(t,e,n,r=WI,i=$I){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},VI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(l=Cv(u)?HI:n),Ev(u)&&(e=e||BI,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(mT(u)&&l!=="_self")return KI(e||"",l),new pp(null);const c=window.open(e||"",l,h);A(c,t,"popup-blocked");try{c.focus()}catch{}return new pp(c)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",QI="emulator/auth/handler",YI=encodeURIComponent("fac");async function mp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof Ov){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries({}))o[h]=c}if(e instanceof Ns){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${YI}=${encodeURIComponent(a)}`:"";return`${JI(t)}?${ni(l).slice(1)}${u}`}function JI({config:t}){return t.emulator?Fd(t,QI):`https://${t.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uv,this._completeRedirectFn=EI,this._overrideRedirectResult=yI}async _openPopup(e,n,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mp(e,n,r,Yu(),i);return GI(e,o,$d())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mp(e,n,r,Yu(),i);return tI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zI(e),r=new CI(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oa];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||Sv()||zd()}}const ZI=XI;var gp="@firebase/auth",_p="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n1(t){Br(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},u=new xT(r,i,s,a);return RT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Yn("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(r=>new e1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(gp,_p,t1(t)),xn(gp,_p,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=5*60,i1=qg("authIdTokenMaxAge")||r1;let vp=null;const s1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i1)return;const i=n==null?void 0:n.token;vp!==i&&(vp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function o1(t=e_()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bT(t,{popupRedirectResolver:ZI,persistence:[cI,XT,Uv]}),r=qg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=s1(s.toString());KT(n,o,()=>o(n.currentUser)),GT(n,l=>o(l))}}const i=Gg("auth");return i&&PT(n,`http://${i}`),n}function l1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ET({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n1("Browser");const a1={apiKey:"AIzaSyCHOzNjb3CMpxNP_mkqGB01Aa6HSS6jyqw",authDomain:"flag-online.firebaseapp.com",databaseURL:"https://flag-online-default-rtdb.europe-west1.firebasedatabase.app",projectId:"flag-online",storageBucket:"flag-online.appspot.com",messagingSenderId:"975905100860",appId:"1:975905100860:web:e66bd079d63e363b469f39"},Gv=Zg(a1),ul=Kk(Gv),La=o1(Gv),Da=rl(ul,"game"),u1=rl(ul,"matches"),Ma={homeTeam:"LOCAL",awayTeam:"VISITANTE",homeScore:0,awayScore:0,homeLogo:null,awayLogo:null,timeLeft:1200,isRunning:!1,isFinished:!1,currentDown:1,period:1,history:[],homeRoster:[],awayRoster:[],homeTimeouts:2,awayTimeouts:2,timeoutTimer:null,viewerPassword:"corsairs",lastError:null},it=Xw((t,e)=>{let n=!1;const r=a=>{console.error(a),t({lastError:a})},i=()=>t({lastError:null}),s=async a=>{try{return await Fk(Da,a),t({lastError:null}),!0}catch(u){return console.error("Error sincronizando con Firebase:",u),r("No tienes permisos o ha fallado la sincronización con Firebase."),!1}},o=()=>{const a=e(),u=a.history||[],h={};u.forEach(v=>{const y=v.playerName||"Jugador",w=v.pts??v.points??0;h[y]=(h[y]||0)+w});const f=Object.entries(h).sort((v,y)=>Number(y[1])-Number(v[1]))[0]||["-",0];let g="EMPATE";return(a.homeScore??0)>(a.awayScore??0)?g=a.homeTeam??"LOCAL":(a.awayScore??0)>(a.homeScore??0)&&(g=a.awayTeam??"VISITANTE"),{savedAt:new Date().toISOString(),homeTeam:a.homeTeam??"LOCAL",awayTeam:a.awayTeam??"VISITANTE",homeScore:a.homeScore??0,awayScore:a.awayScore??0,winner:g,isDraw:g==="EMPATE",mvp:{name:String(f[0]),points:Number(f[1])||0},stats:h,history:u,homeRoster:a.homeRoster||[],awayRoster:a.awayRoster||[],homeLogo:a.homeLogo??null,awayLogo:a.awayLogo??null,period:a.period??1,currentDown:a.currentDown??1,homeTimeouts:a.homeTimeouts??2,awayTimeouts:a.awayTimeouts??2}},l=async()=>{try{const a=o(),u=Mk(u1);return await qu(u,a),t({lastError:null}),!0}catch(a){return console.error("Error guardando partido en historial:",a),r("No se pudo guardar el partido en el historial."),!1}};return hv(Da,a=>{const u=a.val();u?(t({homeTeam:u.homeTeam??"LOCAL",awayTeam:u.awayTeam??"VISITANTE",homeScore:u.homeScore??0,awayScore:u.awayScore??0,homeLogo:u.homeLogo??null,awayLogo:u.awayLogo??null,timeLeft:u.timeLeft??1200,isRunning:u.isRunning??!1,isFinished:u.isFinished??!1,currentDown:u.currentDown??1,period:u.period??1,history:u.history||[],homeRoster:u.homeRoster||[],awayRoster:u.awayRoster||[],homeTimeouts:u.homeTimeouts??2,awayTimeouts:u.awayTimeouts??2,timeoutTimer:u.timeoutTimer??null,viewerPassword:u.viewerPassword??"corsairs"}),n=!0):n||(t(Ma),qu(Da,Ma).catch(h=>{console.error("Error creando estado inicial en Firebase:",h)}),n=!0)}),{...Ma,updateTeams:async a=>{const u=e();t(c=>({...c,...a}));const h=await s(a);return h||t({homeTeam:u.homeTeam,awayTeam:u.awayTeam,homeLogo:u.homeLogo,awayLogo:u.awayLogo}),h},addPoints:async(a,u,h,c="EQUIPO")=>{const f=e(),g=`${a}Score`,v=f[g]||0,y=v+u,m=[{id:Date.now(),team:a,points:u,pts:u,type:h,time:f.timeLeft,period:f.period??1,playerName:c},...f.history||[]].slice(0,50);t({[g]:y,history:m});const p=await s({[g]:y,history:m});return p||t({[g]:v,history:f.history}),p},addPlayer:async(a,u)=>{const h=e(),c=`${a}Roster`,f=h[c]||[],g=[...f,u];t({[c]:g});const v=await s({[c]:g});return v||t({[c]:f}),v},removePlayer:async(a,u)=>{const h=e(),c=`${a}Roster`,f=h[c]||[],g=f.filter(y=>y.id!==u);t({[c]:g});const v=await s({[c]:g});return v||t({[c]:f}),v},toggleTimer:async()=>{const a=e(),u=!a.isRunning;t({isRunning:u});const h=await s({isRunning:u});return h||t({isRunning:a.isRunning}),h},updateTime:async a=>{const u=e(),h=Math.max(0,a),c={timeLeft:h,...h===0?{isRunning:!1}:{}};t(c);const f=await s(c);return f||t({timeLeft:u.timeLeft,isRunning:u.isRunning}),f},nextPeriod:async()=>{const a=e();if((a.period??1)>=2)return!1;const u={period:2,timeLeft:1200,isRunning:!1,currentDown:1,homeTimeouts:2,awayTimeouts:2,timeoutTimer:null};t(u);const h=await s(u);return h||t({period:a.period,timeLeft:a.timeLeft,isRunning:a.isRunning,currentDown:a.currentDown,homeTimeouts:a.homeTimeouts,awayTimeouts:a.awayTimeouts,timeoutTimer:a.timeoutTimer}),h},saveMatchToHistory:async()=>await l(),finishGame:async(a=!1)=>{if(a&&!await l())return!1;const u=e(),h={isFinished:!0,isRunning:!1,timeoutTimer:null};t(h);const c=await s(h);return c||t({isFinished:u.isFinished,isRunning:u.isRunning,timeoutTimer:u.timeoutTimer}),c},requestTimeout:async a=>{const u=e(),h=a==="home"?"homeTimeouts":"awayTimeouts",c=u[h]??0;if(c<=0)return!1;const f={[h]:c-1,timeoutTimer:60,isRunning:!1};t(f);const g=await s(f);return g||t({[h]:c,timeoutTimer:u.timeoutTimer,isRunning:u.isRunning}),g},setTimeoutTimer:async a=>{const u=e().timeoutTimer;t({timeoutTimer:a});const h=await s({timeoutTimer:a});return h||t({timeoutTimer:u}),h},undoLastPlay:async()=>{const a=e(),u=a.history||[];if(u.length===0)return!1;const h=u[0],c=u.slice(1),f=h.team,g=h.points??h.pts??0,v=`${f}Score`,y=a[v]||0,w=Math.max(0,y-g);t({[v]:w,history:c});const m=await s({[v]:w,history:c});return m||t({[v]:y,history:u}),m},resetGame:async()=>{const a=e(),u={homeScore:0,awayScore:0,timeLeft:1200,isRunning:!1,isFinished:!1,currentDown:1,period:1,history:[],homeTimeouts:2,awayTimeouts:2,timeoutTimer:null};t(u);const h=await s(u);return h||t({homeScore:a.homeScore,awayScore:a.awayScore,timeLeft:a.timeLeft,isRunning:a.isRunning,isFinished:a.isFinished,currentDown:a.currentDown,period:a.period,history:a.history,homeTimeouts:a.homeTimeouts,awayTimeouts:a.awayTimeouts,timeoutTimer:a.timeoutTimer}),h},clearError:i}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),he=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:a,...u},h)=>L.createElement("svg",{ref:h,...c1,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${d1(t)}`,l].join(" "),...u},[...e.map(([c,f])=>L.createElement(c,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=he("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=he("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=he("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=he("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=he("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=he("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=he("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=he("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=he("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=he("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=he("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=he("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=he("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=he("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=he("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),I1=()=>{const t=it(),e=new URLSearchParams(window.location.search).get("viewer")==="1",n=new URLSearchParams(window.location.search).get("screen")==="1",r=t.timeLeft??1200,i=t.isRunning??!1,s=t.period??1,o=t.toggleTimer??(()=>{}),l=t.updateTime??(()=>{}),a=t.nextPeriod??(()=>{}),u=t.finishGame??(async()=>{});L.useEffect(()=>{let c=null;return i&&r>0&&(c=setInterval(()=>{const f=it.getState(),g=f.timeLeft??0;(f.isRunning??!1)&&(g>1?l(g-1):g===1&&l(0))},1e3)),()=>{c&&clearInterval(c)}},[i,r,l]);const h=c=>{const f=Math.floor(c/60),g=c%60;return`${f}:${g.toString().padStart(2,"0")}`};return n?null:d.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col items-center w-full",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(Zu,{size:16,className:"text-blue-500"}),d.jsxs("span",{className:"text-[10px] font-black uppercase text-slate-500",children:["Periodo ",s]})]}),d.jsx("div",{className:"text-7xl font-mono font-black text-white mb-6 tabular-nums",children:h(r)}),d.jsxs("div",{className:"grid grid-cols-3 gap-2 w-full",children:[d.jsx("button",{onClick:()=>{e||o()},disabled:e,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":i?"bg-amber-500/10 text-amber-500 border border-amber-500/20 active:scale-95":"bg-blue-600 text-white shadow-lg shadow-blue-900/40 active:scale-95"}`,children:i?d.jsx(_1,{size:20,fill:"currentColor"}):d.jsx(v1,{size:20,fill:"currentColor"})}),d.jsx("button",{onClick:()=>{e||a()},disabled:e||s>=2,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e||s>=2?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-slate-800 text-white border border-slate-700 active:scale-95"}`,title:"Siguiente periodo",children:d.jsx(x1,{size:20})}),d.jsx("button",{onClick:async()=>{if(e||!window.confirm("¿Finalizar partido?"))return;const f=window.confirm("¿Guardar resultado en historial para estadísticas?");await u(f)},disabled:e,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-red-600 text-white shadow-lg shadow-red-900/40 active:scale-95"}`,title:"Finalizar partido",children:d.jsx(m1,{size:20})})]}),!e&&d.jsxs("div",{className:"mt-3 flex w-full justify-between text-[10px] font-black uppercase text-slate-500 px-1",children:[d.jsx("span",{children:i?"Pausa":"Iniciar"}),d.jsx("span",{children:s>=2?"Último periodo":"Periodo 2"}),d.jsx("span",{children:"Finalizar"})]})]})},N1=()=>{const t=it(),e=new URLSearchParams(window.location.search).get("viewer")==="1",{homeScore:n,awayScore:r,homeTeam:i,awayTeam:s,homeLogo:o,awayLogo:l,isFinished:a,resetGame:u,history:h}=t,c=t.homeTimeouts??2,f=t.awayTimeouts??2,g=t.requestTimeout??(()=>{}),v=t.timeoutTimer,y=t.setTimeoutTimer??(()=>{}),w=t.undoLastPlay??(()=>{}),m=()=>{const p={},_=M=>{const ee=Number(M);if(!Number.isFinite(ee))return"-";const Oe=Math.floor(ee/60),T=ee%60;return`${Oe}:${T.toString().padStart(2,"0")}`};h.forEach(M=>{const ee=M.playerName||"Jugador",Oe=M.pts??M.points??0;p[ee]=(p[ee]||0)+Oe});const x=Object.entries(p).sort((M,ee)=>ee[1]-M[1]),C=x[0]||["-",0],k=C[0],I=C[1];let N="";n>r?N=`🏆 Ganador: ${i}`:r>n?N=`🏆 Ganador: ${s}`:N="🤝 Empate";let U=`
📊 ESTADÍSTICAS INDIVIDUALES`;x.length===0?U+=`
- Sin anotadores`:x.forEach(([M,ee])=>{U+=`
- ${M}: ${ee} pts`});const R=h.filter(M=>(M.period??1)===1).slice().reverse(),re=h.filter(M=>(M.period??1)===2).slice().reverse(),F=M=>{const ee=M.pts??M.points??0,Oe=_(M.time),T=M.playerName||"Jugador",P=M.type||"Anotación";return`- ${Oe} | ${T} | ${P} (+${ee})`};let K=`
⏱ CRONOLOGÍA DEL PARTIDO`;R.length>0&&(K+=`

1º TIEMPO`,R.forEach(M=>{K+=`
${F(M)}`})),re.length>0&&(K+=`

2º TIEMPO`,re.forEach(M=>{K+=`
${F(M)}`})),R.length===0&&re.length===0&&(K+=`
- Sin jugadas registradas`);const D=`🏈 ACTA FINAL FLAG FOOTBALL

🏠 ${i}: ${n}
🚩 ${s}: ${r}

${N}
⭐ MVP: ${k} (${I} pts)
-----------------------------
${U}
${K}

Generado por Alfonso Scoreboard`;window.open(`https://wa.me/?text=${encodeURIComponent(D)}`,"_blank")};return a?d.jsxs("div",{className:"bg-slate-900 p-8 rounded-3xl border-4 border-yellow-500 text-center shadow-2xl",children:[d.jsx(qv,{className:"mx-auto text-yellow-500 mb-4",size:48}),d.jsx("h2",{className:"text-white text-2xl font-black uppercase mb-8",children:"Finalizado"}),d.jsxs("div",{className:"flex justify-around items-center mb-10 bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[d.jsxs("div",{className:"text-center flex flex-col items-center",children:[o?d.jsx("img",{src:o,alt:`Logo ${i}`,className:"w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"}):d.jsx("div",{className:"w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black",children:"LOGO"}),d.jsx("div",{className:"text-blue-400 font-bold text-[10px] uppercase mb-1",children:i}),d.jsx("div",{className:"text-5xl font-black text-white",children:n})]}),d.jsx("div",{className:"text-slate-700 text-3xl font-light px-3",children:"VS"}),d.jsxs("div",{className:"text-center flex flex-col items-center",children:[l?d.jsx("img",{src:l,alt:`Logo ${s}`,className:"w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"}):d.jsx("div",{className:"w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black",children:"LOGO"}),d.jsx("div",{className:"text-red-400 font-bold text-[10px] uppercase mb-1",children:s}),d.jsx("div",{className:"text-5xl font-black text-white",children:r})]})]}),d.jsxs("button",{onClick:m,className:"w-full bg-green-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 mb-4",children:[d.jsx(Kv,{size:20})," ENVIAR ACTA"]}),!e&&d.jsx("button",{onClick:()=>confirm("¿Resetear?")&&u(),className:"text-slate-500 text-[10px] font-black uppercase",children:"Reiniciar"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl",children:[d.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-blue-500"}),o?d.jsx("img",{src:o,alt:`Logo ${i}`,className:"w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"}):d.jsx("div",{className:"w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black",children:"LOGO"}),d.jsx("span",{className:"text-blue-400 font-black text-[10px] uppercase mb-1 text-center",children:i}),d.jsx("span",{className:"text-7xl font-black text-white mb-4",children:n}),d.jsxs("button",{onClick:()=>{e||g("home")},disabled:e||c<=0,className:`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${e?"bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60":c>0?"bg-blue-600/10 border border-blue-500/30 text-blue-400 active:scale-95":"bg-slate-800 text-slate-600 border border-transparent"}`,children:[d.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[d.jsx(Zu,{size:14,className:!e&&c>0?"animate-pulse":""}),d.jsx("span",{className:"font-black text-xs",children:"TIMEOUTS"})]}),d.jsx("div",{className:"flex gap-1.5 mt-1",children:[...Array(2)].map((p,_)=>d.jsx("div",{className:`h-1.5 w-6 rounded-full ${_<c?"bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]":"bg-slate-700"}`},_))})]})]}),d.jsxs("div",{className:"bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl",children:[d.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-red-500"}),l?d.jsx("img",{src:l,alt:`Logo ${s}`,className:"w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"}):d.jsx("div",{className:"w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black",children:"LOGO"}),d.jsx("span",{className:"text-red-400 font-black text-[10px] uppercase mb-1 text-center",children:s}),d.jsx("span",{className:"text-7xl font-black text-white mb-4",children:r}),d.jsxs("button",{onClick:()=>{e||g("away")},disabled:e||f<=0,className:`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${e?"bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60":f>0?"bg-red-600/10 border border-red-500/30 text-red-400 active:scale-95":"bg-slate-800 text-slate-600 border border-transparent"}`,children:[d.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[d.jsx(Zu,{size:14,className:!e&&f>0?"animate-pulse":""}),d.jsx("span",{className:"font-black text-xs",children:"TIMEOUTS"})]}),d.jsx("div",{className:"flex gap-1.5 mt-1",children:[...Array(2)].map((p,_)=>d.jsx("div",{className:`h-1.5 w-6 rounded-full ${_<f?"bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]":"bg-slate-700"}`},_))})]})]})]}),!e&&h.length>0&&d.jsx("div",{className:"flex justify-center mt-4",children:d.jsxs("button",{onClick:()=>confirm("¿Eliminar última jugada?")&&w(),className:"flex items-center gap-2 px-6 py-2 bg-slate-800 text-slate-400 rounded-full text-[10px] font-black uppercase",children:[d.jsx(S1,{size:12})," CORREGIR ERROR"]})}),typeof v=="number"&&d.jsxs("div",{className:"fixed inset-0 bg-[#020617] flex flex-col items-center justify-center text-center",children:[d.jsx(T1,{size:60,className:"text-yellow-500 mb-4 animate-pulse"}),d.jsx("div",{className:"text-[8rem] font-mono text-yellow-400",children:v}),!e&&d.jsx("button",{onClick:()=>y(null),className:"bg-red-600 text-white px-8 py-4 rounded-2xl font-black mt-6",children:"REANUDAR"})]})]})},Ep=({team:t})=>{const e=it(),n=new URLSearchParams(window.location.search).get("viewer")==="1",r=e.addPoints??(()=>{}),i=e.homeRoster??[],s=e.awayRoster??[],o=t==="home"?e.homeTeam||"LOCAL":e.awayTeam||"VISITANTE",l=t==="home"?i:s,[a,u]=L.useState(null),h=[{label:"TOUCHDOWN",pts:6,type:"Touchdown"},{label:"EXTRA (5Y)",pts:1,type:"Extra 1"},{label:"EXTRA (10Y)",pts:2,type:"Extra 2"},{label:"SAFETY",pts:2,type:"Safety"}],c=(g,v)=>{if(!n){if(!l.length){r(t,g,v,"EQUIPO");return}u({points:g,type:v})}},f=g=>{n||!a||(r(t,a.points,a.type,g),u(null))};return d.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-3xl border border-slate-800 flex flex-col gap-3 relative overflow-hidden",children:[d.jsx("h3",{className:`text-[10px] font-black uppercase text-center tracking-widest ${t==="home"?"text-blue-500":"text-red-500"}`,children:o}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:h.map(g=>d.jsxs("button",{onClick:()=>c(g.pts,g.type),disabled:n,className:`p-3 rounded-2xl flex flex-col items-center transition-all shadow-md ${n?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":t==="home"?"bg-blue-600 active:scale-95":"bg-red-600 active:scale-95"}`,children:[d.jsx("span",{className:`text-xl font-black ${n?"text-slate-500":"text-white"}`,children:g.pts}),d.jsx("span",{className:`text-[7px] font-bold uppercase ${n?"text-slate-500":"text-white"}`,children:g.label})]},g.label))}),a!==null&&!n&&d.jsxs("div",{className:"absolute inset-0 z-50 bg-slate-900 p-4 flex flex-col border-2 border-yellow-500 rounded-3xl",children:[d.jsx("p",{className:"text-[9px] font-black text-center mb-2 text-yellow-500 uppercase",children:"¿Quién anotó?"}),d.jsx("div",{className:"flex-1 overflow-y-auto space-y-1 pr-1",children:l.map((g,v)=>d.jsxs("button",{onClick:()=>f(g.name),className:"w-full text-left bg-slate-800 p-2 rounded-xl text-[10px] font-bold hover:bg-slate-700 uppercase",children:[g.number?`#${g.number} `:"",g.name]},g.id??`${g.name}-${v}`))}),d.jsx("button",{onClick:()=>u(null),className:"mt-2 text-[8px] font-black text-red-500 uppercase tracking-widest",children:"Cancelar"})]})]})},b1=()=>{const t=new URLSearchParams(window.location.search).get("viewer")==="1",{homeRoster:e=[],awayRoster:n=[],addPlayer:r,removePlayer:i}=it(),[s,o]=L.useState(""),[l,a]=L.useState(""),u=c=>{if(t||s.trim()==="")return;const f={id:Date.now().toString(),name:s.trim().toUpperCase(),number:l||"00"};r(c,f),o(""),a("")},h=(c,f,g)=>{t||window.confirm(`¿Seguro que quieres borrar a ${g} del equipo?`)&&i(c,f)};return d.jsxs("div",{className:"flex flex-col gap-4 mt-6",children:[d.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[d.jsxs("div",{className:"flex items-center gap-2.5 mb-5 border-b border-slate-800 pb-3",children:[d.jsx(C1,{size:18,className:"text-yellow-500"}),d.jsx("h3",{className:"text-[11px] font-black uppercase text-slate-400 tracking-widest",children:"Gestión de Jugadores"})]}),d.jsxs("div",{className:"flex gap-2 mb-4",children:[d.jsx("input",{type:"text",placeholder:"Nombre...",value:s,onChange:c=>o(c.target.value),disabled:t,className:`flex-1 rounded-xl p-3 text-sm outline-none ${t?"bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed opacity-60":"bg-slate-950 border border-slate-800 text-white focus:border-blue-500"}`}),d.jsx("input",{type:"text",placeholder:"Nº",value:l,onChange:c=>a(c.target.value),disabled:t,className:`w-16 rounded-xl p-3 text-sm text-center font-bold outline-none ${t?"bg-slate-900 border border-slate-800 text-slate-500 cursor-not-allowed opacity-60":"bg-slate-950 border border-slate-800 text-white focus:border-blue-500"}`})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsx("button",{onClick:()=>u("home"),disabled:t,className:`font-black py-3 rounded-xl transition-all text-[10px] uppercase tracking-widest ${t?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-blue-600 hover:bg-blue-500 text-white active:scale-95"}`,children:"Añadir Local"}),d.jsx("button",{onClick:()=>u("away"),disabled:t,className:`font-black py-3 rounded-xl transition-all text-[10px] uppercase tracking-widest ${t?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-red-600 hover:bg-red-500 text-white active:scale-95"}`,children:"Añadir Visitante"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsxs("div",{className:"bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50 min-h-[120px]",children:[d.jsx("h4",{className:"text-[10px] font-black text-blue-500 uppercase mb-3 border-b border-blue-500/20 pb-1 tracking-widest",children:"ROSTER LOCAL"}),d.jsx("div",{className:"flex flex-col gap-1.5",children:(e||[]).map(c=>d.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded-lg border border-slate-800 shadow-inner",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"text-blue-500 font-mono text-[9px] font-bold",children:["#",c.number]}),d.jsx("span",{className:"font-bold text-white uppercase text-[10px] truncate max-w-[60px]",children:c.name})]}),!t&&d.jsx("button",{onClick:()=>h("home",c.id,c.name),className:"text-red-900 hover:text-red-500 transition-colors p-1",children:d.jsx(xp,{size:14})})]},c.id))})]}),d.jsxs("div",{className:"bg-slate-900/40 p-4 rounded-2xl border border-slate-800/50 min-h-[120px]",children:[d.jsx("h4",{className:"text-[10px] font-black text-red-500 uppercase mb-3 border-b border-red-500/20 pb-1 tracking-widest",children:"ROSTER VISITANTE"}),d.jsx("div",{className:"flex flex-col gap-1.5",children:(n||[]).map(c=>d.jsxs("div",{className:"flex justify-between items-center bg-slate-950/60 p-2 rounded-lg border border-slate-800 shadow-inner",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"text-red-500 font-mono text-[9px] font-bold",children:["#",c.number]}),d.jsx("span",{className:"font-bold text-white uppercase text-[10px] truncate max-w-[60px]",children:c.name})]}),!t&&d.jsx("button",{onClick:()=>h("away",c.id,c.name),className:"text-red-900 hover:text-red-500 transition-colors p-1",children:d.jsx(xp,{size:14})})]},c.id))})]})]})]})},R1=()=>{const e=it().history??[],n=r=>{const i=Number(r);if(!Number.isFinite(i))return"-";const s=Math.floor(i/60),o=i%60;return`${s}:${o.toString().padStart(2,"0")}`};return d.jsxs("div",{className:"bg-slate-900/80 rounded-[2rem] border border-slate-800 overflow-hidden shadow-xl",children:[d.jsxs("div",{className:"flex items-center gap-3 px-6 py-5 border-b border-slate-800",children:[d.jsx(cl,{size:18,className:"text-blue-500"}),d.jsx("h3",{className:"text-[11px] font-black uppercase tracking-[0.25em] text-slate-300",children:"Historial de jugadas"})]}),d.jsxs("div",{className:"grid grid-cols-[110px_1fr_90px] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 border-b border-slate-800",children:[d.jsx("div",{children:"Reloj"}),d.jsx("div",{children:"Jugador"}),d.jsx("div",{className:"text-right",children:"Pts"})]}),e.length===0?d.jsx("div",{className:"px-6 py-10 text-center text-slate-500 text-sm font-bold",children:"Sin jugadas registradas"}):d.jsx("div",{children:e.slice(0,10).map((r,i)=>{const s=r.pts??r.points??0,o=r.playerName||"Jugador",l=r.type||"Anotación",a=n(r.time);return d.jsxs("div",{className:"grid grid-cols-[110px_1fr_90px] items-center gap-4 px-6 py-5 border-b border-slate-800/70 last:border-b-0",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-white text-2xl font-black tabular-nums",children:a}),d.jsxs("div",{className:"text-[10px] font-black uppercase text-slate-500 mt-1",children:["Tipo: ",l]})]}),d.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"}),d.jsx("div",{className:"text-white text-2xl font-black uppercase truncate",children:o})]}),d.jsx("div",{className:"flex justify-end",children:d.jsxs("div",{className:"min-w-[56px] text-center bg-blue-900/50 text-blue-300 px-4 py-2 rounded-2xl text-2xl font-black",children:["+",s]})})]},r.id??i)})}),d.jsx("div",{className:"px-6 py-4 text-center text-[10px] uppercase text-slate-600 border-t border-slate-800",children:"Últimas acciones registradas"})]})},P1=()=>{const{currentDown:t,updateTeams:e}=it(),n=new URLSearchParams(window.location.search).get("viewer")==="1",r=typeof t=="number"&&t>=1&&t<=4?t:1,i=l=>{n||e({currentDown:l})},s=()=>{n||(r<4?i(r+1):i(1))},o=()=>{n||i(1)};return d.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-[2.5rem] border border-slate-800 shadow-xl mt-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4 px-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full animate-pulse"}),d.jsx("span",{className:"text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]",children:"Down Progress"})]}),d.jsx("button",{onClick:o,disabled:n,className:`transition-colors ${n?"text-slate-600 cursor-not-allowed opacity-60":"text-slate-500 hover:text-white"}`,title:"Reiniciar a 1º Down",children:d.jsx(y1,{size:16})})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"flex-1 grid grid-cols-4 gap-2",children:[1,2,3,4].map(l=>d.jsxs("button",{onClick:()=>i(l),disabled:n,className:`relative h-14 rounded-2xl font-black text-xl transition-all flex items-center justify-center ${r===l?n?"bg-yellow-500/50 text-slate-200 border border-yellow-500/30 opacity-80":"bg-yellow-500 text-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-105 z-10":n?"bg-slate-800 text-slate-600 border border-slate-700/50 cursor-not-allowed opacity-60":"bg-slate-800 text-slate-500 border border-slate-700/50"}`,children:[l,r===l&&d.jsx("span",{className:"absolute -bottom-1 w-6 h-1 bg-slate-900 rounded-full opacity-20"})]},l))}),d.jsx("button",{onClick:s,disabled:n,className:`p-4 rounded-2xl border transition-all ${n?"bg-slate-800 border-slate-700 text-slate-600 cursor-not-allowed opacity-60":"bg-slate-800 border-slate-700 text-yellow-500 active:scale-90"}`,title:"Siguiente down",children:d.jsx(p1,{size:24,strokeWidth:3})})]}),d.jsx("div",{className:"mt-4 text-center",children:d.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:r===4?"¡ÚLTIMO INTENTO!":`${r}º DOWN`})})]})},A1=()=>{const t=it(),e=t.homeTeam??"LOCAL",n=t.awayTeam??"VISITANTE",r=t.homeScore??0,i=t.awayScore??0,s=t.homeLogo??null,o=t.awayLogo??null,l=t.timeLeft??1200,a=t.period??1,u=t.currentDown??1,h=t.homeTimeouts??2,c=t.awayTimeouts??2,f=t.isFinished??!1,g=t.timeoutTimer??null,v=t.history??[],[y,w]=L.useState(!1),m=v.length>0?v[0]:null,p=L.useRef(null),_=L.useRef(!1),x=L.useRef(null);L.useEffect(()=>{if(m!=null&&m.id){if(!_.current){_.current=!0,p.current=m.id;return}m.id!==p.current&&(p.current=m.id,w(!0),x.current&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{w(!1),x.current=null},3500))}},[m==null?void 0:m.id]),L.useEffect(()=>()=>{x.current&&window.clearTimeout(x.current)},[]);const C=F=>{const K=Math.floor(F/60),D=F%60;return`${K}:${D.toString().padStart(2,"0")}`},k=F=>{const K=Number(F);if(!Number.isFinite(K))return"-";const D=Math.floor(K/60),M=K%60;return`${D}:${M.toString().padStart(2,"0")}`},I=(F,K)=>d.jsx("div",{className:"flex gap-2 justify-center mt-3",children:[0,1].map(D=>d.jsx("div",{className:`h-3 w-12 rounded-full ${D<F?K:"bg-slate-700"}`},D))}),N=L.useMemo(()=>v.slice(0,5),[v]),U=F=>F==="home"?{strongText:"text-blue-400",badge:"bg-blue-500/15 text-blue-300 border border-blue-500/30",row:"border-l-4 border-blue-500",glow:"shadow-[0_0_20px_rgba(59,130,246,0.15)]",overlay:"from-blue-600/30 to-blue-400/10 border-blue-400/30"}:{strongText:"text-red-400",badge:"bg-red-500/15 text-red-300 border border-red-500/30",row:"border-l-4 border-red-500",glow:"shadow-[0_0_20px_rgba(239,68,68,0.15)]",overlay:"from-red-600/30 to-red-400/10 border-red-400/30"},R=F=>{const K=((F==null?void 0:F.type)||"Anotación").toString().toUpperCase(),D=(F==null?void 0:F.pts)??(F==null?void 0:F.points)??0;return`${K} +${D}`},re=(m==null?void 0:m.team)==="home"?U("home"):U("away");return typeof g=="number"?d.jsxs("div",{className:"min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6",children:[d.jsx("div",{className:"text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-yellow-500 mb-6",children:"Tiempo muerto"}),d.jsx("div",{className:"text-[8rem] md:text-[12rem] leading-none font-mono font-black text-yellow-400 tabular-nums animate-pulse",children:g})]}):f?d.jsxs("div",{className:"min-h-screen bg-slate-950 text-white px-8 py-8 flex flex-col justify-center",children:[d.jsx("div",{className:"text-center text-yellow-500 text-4xl md:text-6xl font-black uppercase mb-8",children:"Final del partido"}),d.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center gap-8",children:[d.jsxs("div",{className:"flex flex-col items-center",children:[s?d.jsx("img",{src:s,alt:`Logo ${e}`,className:"w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):d.jsx("div",{className:"w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4",children:"LOGO"}),d.jsx("div",{className:"text-blue-400 text-xl md:text-2xl font-black uppercase text-center",children:e}),d.jsx("div",{className:"text-white text-7xl md:text-8xl font-black mt-4",children:r})]}),d.jsx("div",{className:"text-slate-600 text-4xl md:text-5xl font-light px-4",children:"VS"}),d.jsxs("div",{className:"flex flex-col items-center",children:[o?d.jsx("img",{src:o,alt:`Logo ${n}`,className:"w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):d.jsx("div",{className:"w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4",children:"LOGO"}),d.jsx("div",{className:"text-red-400 text-xl md:text-2xl font-black uppercase text-center",children:n}),d.jsx("div",{className:"text-white text-7xl md:text-8xl font-black mt-4",children:i})]})]})]}):d.jsxs("div",{className:"min-h-screen bg-slate-950 text-white px-6 py-6 overflow-hidden",children:[y&&m&&d.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none",children:d.jsx("div",{className:`mx-6 w-full max-w-4xl rounded-[2rem] border bg-gradient-to-br ${re.overlay} backdrop-blur-md px-8 py-10 shadow-2xl animate-[pulse_1.1s_ease-in-out_infinite]`,children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:`text-2xl md:text-3xl font-black uppercase tracking-[0.2em] ${re.strongText}`,children:"Nueva anotación"}),d.jsx("div",{className:"mt-4 text-4xl md:text-7xl font-black text-white uppercase leading-tight",children:R(m)}),d.jsx("div",{className:"mt-4 text-xl md:text-3xl font-black text-slate-200 uppercase",children:m.playerName||"Jugador"}),d.jsx("div",{className:`mt-3 text-lg md:text-2xl font-black uppercase ${re.strongText}`,children:m.team==="home"?e:n}),d.jsx("div",{className:"mt-4 text-yellow-400 font-mono text-2xl md:text-4xl font-black",children:k(m.time)})]})})}),d.jsxs("div",{className:"max-w-7xl mx-auto flex h-full flex-col gap-6",children:[d.jsxs("div",{className:"grid grid-cols-[220px_minmax(0,1fr)_220px] items-center gap-6",children:[d.jsxs("div",{className:"flex flex-col items-center",children:[s?d.jsx("img",{src:s,alt:`Logo ${e}`,className:"w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):d.jsx("div",{className:"w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4",children:"LOGO"}),d.jsx("div",{className:"text-blue-400 text-2xl font-black uppercase text-center leading-tight",children:e}),I(h,"bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]")]}),d.jsxs("div",{className:"flex flex-col items-center min-w-0",children:[d.jsxs("div",{className:"font-black leading-none tabular-nums text-white whitespace-nowrap",style:{fontSize:"clamp(4rem, 14vw, 10rem)"},children:[r," - ",i]}),d.jsx("div",{className:"mt-4 font-mono font-black text-yellow-400 leading-none tabular-nums whitespace-nowrap",style:{fontSize:"clamp(3rem, 10vw, 7rem)"},children:C(l)}),d.jsxs("div",{className:"mt-4 flex gap-6 text-base md:text-2xl font-black uppercase text-slate-300",children:[d.jsxs("span",{children:["Periodo ",a]}),d.jsxs("span",{children:[u,"º Down"]})]})]}),d.jsxs("div",{className:"flex flex-col items-center",children:[o?d.jsx("img",{src:o,alt:`Logo ${n}`,className:"w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):d.jsx("div",{className:"w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4",children:"LOGO"}),d.jsx("div",{className:"text-red-400 text-2xl font-black uppercase text-center leading-tight",children:n}),I(c,"bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]")]})]}),d.jsxs("div",{className:"w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-5",children:[d.jsx("div",{className:"text-center text-slate-300 text-2xl font-black uppercase mb-4",children:"Últimas anotaciones"}),N.length===0?d.jsx("div",{className:"text-center text-slate-500 font-bold py-6",children:"Sin anotaciones todavía"}):d.jsx("div",{className:"space-y-3",children:N.map((F,K)=>{const D=F.pts??F.points??0,M=F.playerName||"Jugador",ee=F.type||"Anotación",Oe=F.team==="home"?e:n,T=U(F.team==="home"?"home":"away"),P=k(F.time),j=K===0;return d.jsxs("div",{className:`grid grid-cols-[110px_minmax(0,1fr)_260px_90px] items-center gap-4 bg-slate-950/70 rounded-2xl px-4 py-3 ${T.row} ${j?T.glow:""}`,children:[d.jsx("div",{className:"text-yellow-400 font-mono font-black text-2xl whitespace-nowrap",children:P}),d.jsx("div",{className:"text-white font-black text-2xl uppercase truncate",children:M}),d.jsx("div",{className:"flex items-center justify-start min-w-0",children:d.jsxs("span",{className:`px-3 py-1 rounded-full text-base font-black uppercase truncate max-w-full ${T.badge}`,children:[Oe," · ",ee]})}),d.jsxs("div",{className:"text-white font-black text-3xl text-right whitespace-nowrap",children:["+",D]})]},F.id??`${M}-${K}`)})})]})]})]})},O1=()=>{var v,y;const[t,e]=L.useState([]),[n,r]=L.useState(!0),[i,s]=L.useState(null),[o,l]=L.useState(null);L.useEffect(()=>{const w=rl(ul,"matches"),m=hv(w,p=>{const _=p.val();if(!_){e([]),r(!1);return}const x=Object.entries(_).map(([C,k])=>({id:C,...k}));x.sort((C,k)=>{const I=new Date(C.savedAt||0).getTime();return new Date(k.savedAt||0).getTime()-I}),e(x),r(!1)});return()=>m()},[]);const a=L.useMemo(()=>{if(!(o!=null&&o.history))return[];const w={};return o.history.forEach(m=>{const p=m.playerName||"Jugador",_=m.pts??m.points??0;w[p]=(w[p]||0)+_}),Object.entries(w).map(([m,p])=>({name:m,points:p})).sort((m,p)=>p.points-m.points)},[o]),u=w=>{if(!w)return"-";const m=new Date(w);return Number.isNaN(m.getTime())?"-":m.toLocaleString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})},h=w=>{const m=Number(w);if(!Number.isFinite(m))return"-";const p=Math.floor(m/60),_=m%60;return`${p}:${_.toString().padStart(2,"0")}`},c=w=>w.isDraw?"Empate":w.winner||"-",f=async w=>{if(window.confirm(`¿Borrar el partido ${w.homeTeam||"LOCAL"} vs ${w.awayTeam||"VISITANTE"}?`))try{s(w.id),await jk(rl(ul,`matches/${w.id}`)),(o==null?void 0:o.id)===w.id&&l(null)}catch(p){console.error("Error borrando partido:",p),window.alert("No se pudo borrar el partido.")}finally{s(null)}},g=w=>{var F,K;const m={};(w.history||[]).forEach(D=>{const M=D.playerName||"Jugador",ee=D.pts??D.points??0;m[M]=(m[M]||0)+ee});const p=Object.entries(m).sort((D,M)=>Number(M[1])-Number(D[1])),_=((F=w.mvp)==null?void 0:F.name)||"-",x=((K=w.mvp)==null?void 0:K.points)??0;let C="";w.isDraw?C="🤝 Empate":C=`🏆 Ganador: ${w.winner||"-"}`;let k=`
📊 ESTADÍSTICAS INDIVIDUALES`;p.length===0?k+=`
- Sin anotadores`:p.forEach(([D,M])=>{k+=`
- ${D}: ${M} pts`});const I=(w.history||[]).filter(D=>(D.period??1)===1).slice().reverse(),N=(w.history||[]).filter(D=>(D.period??1)===2).slice().reverse(),U=D=>{const M=D.pts??D.points??0,ee=h(D.time),Oe=D.playerName||"Jugador",T=D.type||"Anotación";return`- ${ee} | ${Oe} | ${T} (+${M})`};let R=`
⏱ CRONOLOGÍA DEL PARTIDO`;I.length>0&&(R+=`

1º TIEMPO`,I.forEach(D=>{R+=`
${U(D)}`})),N.length>0&&(R+=`

2º TIEMPO`,N.forEach(D=>{R+=`
${U(D)}`})),I.length===0&&N.length===0&&(R+=`
- Sin jugadas registradas`);const re=`🏈 ACTA FINAL FLAG FOOTBALL

📅 ${u(w.savedAt)}

🏠 ${w.homeTeam||"LOCAL"}: ${w.homeScore??0}
🚩 ${w.awayTeam||"VISITANTE"}: ${w.awayScore??0}

${C}
⭐ MVP: ${_} (${x} pts)
-----------------------------
${k}
${R}

Generado por Alfonso Scoreboard`;window.open(`https://wa.me/?text=${encodeURIComponent(re)}`,"_blank")};return n?d.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx(cl,{size:18,className:"text-blue-500"}),d.jsx("h3",{className:"text-sm font-black uppercase text-slate-300",children:"Historial de partidos"})]}),d.jsx("p",{className:"text-slate-500 font-bold",children:"Cargando historial..."})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[d.jsx(cl,{size:18,className:"text-blue-500"}),d.jsx("h3",{className:"text-sm font-black uppercase text-slate-300",children:"Historial de partidos"})]}),t.length===0?d.jsx("p",{className:"text-slate-500 font-bold",children:"Todavía no hay partidos guardados."}):d.jsx("div",{className:"space-y-4",children:t.map(w=>{var m,p;return d.jsxs("button",{onClick:()=>l(w),className:"w-full text-left bg-slate-950 border border-slate-800 rounded-2xl p-4 transition-all active:scale-[0.99]",children:[d.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 text-slate-400 text-xs font-black uppercase",children:[d.jsx(f1,{size:14}),d.jsx("span",{children:u(w.savedAt)})]}),d.jsx("button",{onClick:_=>{_.stopPropagation(),f(w)},disabled:i===w.id,className:`p-2 rounded-xl border transition-all ${i===w.id?"bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed":"bg-red-950/30 text-red-400 border-red-500/30 active:scale-95"}`,title:"Borrar partido",children:d.jsx(E1,{size:16})})]}),d.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"text-blue-400 text-xs font-black uppercase",children:w.homeTeam||"LOCAL"}),d.jsx("div",{className:"text-red-400 text-xs font-black uppercase mt-1",children:w.awayTeam||"VISITANTE"})]}),d.jsx("div",{className:"text-right",children:d.jsxs("div",{className:"text-white text-2xl font-black",children:[w.homeScore??0," - ",w.awayScore??0]})})]}),d.jsxs("div",{className:"flex items-center gap-2 text-slate-300 text-sm font-bold mb-2",children:[d.jsx(qv,{size:14,className:"text-yellow-500"}),d.jsxs("span",{children:["Resultado: ",c(w)]})]}),d.jsxs("div",{className:"text-slate-400 text-sm font-bold",children:["MVP: ",((m=w.mvp)==null?void 0:m.name)||"-"," (",((p=w.mvp)==null?void 0:p.points)??0," pts)"]})]},w.id)})})]}),o&&d.jsx("div",{className:"fixed inset-0 z-[10020] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4",children:d.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-white text-xl font-black uppercase",children:"Detalle del partido"}),d.jsx("p",{className:"text-slate-400 text-sm font-bold mt-1",children:u(o.savedAt)})]}),d.jsx("button",{onClick:()=>l(null),className:"p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700",title:"Cerrar",children:d.jsx(k1,{size:18})})]}),d.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5",children:[d.jsxs("div",{className:"flex items-center justify-between gap-4",children:[d.jsxs("div",{className:"text-left",children:[d.jsx("div",{className:"text-blue-400 text-xs font-black uppercase",children:o.homeTeam||"LOCAL"}),d.jsx("div",{className:"text-red-400 text-xs font-black uppercase mt-2",children:o.awayTeam||"VISITANTE"})]}),d.jsx("div",{className:"text-right",children:d.jsxs("div",{className:"text-white text-3xl font-black",children:[o.homeScore??0," - ",o.awayScore??0]})})]}),d.jsxs("div",{className:"mt-4 text-slate-300 text-sm font-bold",children:["Resultado: ",c(o)]}),d.jsxs("div",{className:"mt-1 text-slate-400 text-sm font-bold",children:["MVP: ",((v=o.mvp)==null?void 0:v.name)||"-"," (",((y=o.mvp)==null?void 0:y.points)??0," pts)"]}),d.jsxs("button",{onClick:()=>g(o),className:"mt-4 w-full bg-green-600 text-white py-3 rounded-2xl font-black flex items-center justify-center gap-2",children:[d.jsx(Kv,{size:18}),"ENVIAR ACTA POR WHATSAPP"]})]}),d.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[d.jsx(h1,{size:16,className:"text-blue-400"}),d.jsx("h3",{className:"text-slate-300 text-sm font-black uppercase",children:"Estadísticas por jugador"})]}),a.length===0?d.jsx("p",{className:"text-slate-500 font-bold",children:"Sin estadísticas disponibles."}):d.jsx("div",{className:"space-y-3",children:a.map((w,m)=>d.jsxs("div",{className:"flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3",children:[d.jsx("div",{className:"text-white font-black uppercase truncate",children:w.name}),d.jsxs("div",{className:"text-blue-300 font-black text-xl",children:[w.points," pts"]})]},`${w.name}-${m}`))})]}),d.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4",children:[d.jsx("h3",{className:"text-slate-300 text-sm font-black uppercase mb-4",children:"Cronología"}),!o.history||o.history.length===0?d.jsx("p",{className:"text-slate-500 font-bold",children:"Sin jugadas registradas."}):d.jsx("div",{className:"space-y-3",children:o.history.slice().reverse().map((w,m)=>{const p=w.pts??w.points??0,_=w.playerName||"Jugador",x=w.type||"Anotación",C=w.team==="home"?o.homeTeam||"LOCAL":o.awayTeam||"VISITANTE";return d.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl px-4 py-3",children:[d.jsxs("div",{className:"flex items-center justify-between gap-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-white font-black uppercase",children:_}),d.jsxs("div",{className:"text-slate-400 text-sm font-bold",children:[C," · ",x]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-yellow-400 font-mono font-black",children:h(w.time)}),d.jsxs("div",{className:"text-blue-300 font-black",children:["+",p]})]})]}),d.jsxs("div",{className:"mt-2 text-slate-500 text-xs font-black uppercase",children:["Periodo ",w.period??1]})]},w.id??m)})})]})]})})]})};function L1(){const t=it(),e=new URLSearchParams(window.location.search).get("viewer")==="1",n=new URLSearchParams(window.location.search).get("screen")==="1",r="viewer-auth-ok",{homeTeam:i,awayTeam:s,homeLogo:o,awayLogo:l,viewerPassword:a,updateTeams:u,isFinished:h,timeoutTimer:c,setTimeoutTimer:f}=t,[g,v]=L.useState(!1),[y,w]=L.useState(!1),[m,p]=L.useState(""),[_,x]=L.useState(""),[C,k]=L.useState(null),[I,N]=L.useState(null),[U,R]=L.useState("corsairs"),[re,F]=L.useState(""),[K,D]=L.useState(!e),[M,ee]=L.useState(""),[Oe,T]=L.useState(!e&&!n),[P,j]=L.useState(null),[ie,pe]=L.useState(""),[Ln,wt]=L.useState(""),[lr,xt]=L.useState(""),[Yt,Bd]=L.useState(!1);L.useEffect(()=>{i&&p(i),s&&x(s),k(o??null),N(l??null),R(a??"corsairs")},[i,s,o,l,a]),L.useEffect(()=>{if(!e){D(!0);return}const B=sessionStorage.getItem(r);D(B==="true")},[e]),L.useEffect(()=>{if(typeof c!="number"||c<=0)return;const B=window.setInterval(()=>{const Rt=it.getState().timeoutTimer;typeof Rt=="number"&&(Rt>1?it.getState().setTimeoutTimer(Rt-1):it.getState().setTimeoutTimer(null))},1e3);return()=>window.clearInterval(B)},[c,f]),L.useEffect(()=>{if(e||n){T(!1);return}const B=qT(La,Rt=>{j(Rt),T(!1)});return()=>B()},[e,n]);const Gd=(B,Rt)=>{var qd;const Kd=(qd=B.target.files)==null?void 0:qd[0];if(!Kd)return;const Rs=new FileReader;Rs.onloadend=()=>{const Gl=typeof Rs.result=="string"?Rs.result:null;Gl&&(Rt==="home"?k(Gl):N(Gl))},Rs.readAsDataURL(Kd)},Qv=B=>{B.preventDefault(),re===(a??"corsairs")?(sessionStorage.setItem(r,"true"),D(!0),ee("")):ee("Contraseña incorrecta")},Yv=async B=>{B.preventDefault(),xt(""),Bd(!0);try{await BT(La,ie.trim(),Ln)}catch(Rt){console.error("Error login admin:",Rt),xt("Email o contraseña incorrectos")}finally{Bd(!1)}},Jv=async()=>{try{await QT(La),v(!1),w(!1),wt("")}catch(B){console.error("Error cerrando sesión:",B)}};if(!i)return d.jsxs("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white",children:[d.jsx(yp,{className:"w-10 h-10 text-blue-500 animate-spin mb-4"}),d.jsx("p",{className:"text-slate-400 font-bold animate-pulse",children:"CONECTANDO CON BÉLGICA..."})]});if(Oe)return d.jsxs("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white",children:[d.jsx(yp,{className:"w-10 h-10 text-blue-500 animate-spin mb-4"}),d.jsx("p",{className:"text-slate-400 font-bold animate-pulse",children:"CARGANDO ACCESO..."})]});if(e&&!K)return d.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white",children:d.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[d.jsx(wp,{className:"text-yellow-500 mb-3",size:34}),d.jsx("h1",{className:"text-xl font-black uppercase",children:"Modo visor protegido"}),d.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Introduce la contraseña para ver el marcador."})]}),d.jsxs("form",{onSubmit:Qv,className:"space-y-4",children:[d.jsx("input",{type:"password",value:re,onChange:B=>F(B.target.value),placeholder:"Contraseña",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),M&&d.jsx("p",{className:"text-red-400 text-sm font-bold",children:M}),d.jsx("button",{type:"submit",className:"w-full bg-blue-600 py-4 rounded-2xl font-black uppercase",children:"Entrar"})]})]})});if(n)return d.jsx(A1,{});if(!e&&!P)return d.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white",children:d.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[d.jsx(wp,{className:"text-blue-500 mb-3",size:34}),d.jsx("h1",{className:"text-xl font-black uppercase",children:"Acceso administrador"}),d.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Inicia sesión para modificar el marcador y el historial."})]}),d.jsxs("form",{onSubmit:Yv,className:"space-y-4",children:[d.jsx("input",{type:"email",value:ie,onChange:B=>pe(B.target.value),placeholder:"Email",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),d.jsx("input",{type:"password",value:Ln,onChange:B=>wt(B.target.value),placeholder:"Contraseña",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),lr&&d.jsx("p",{className:"text-red-400 text-sm font-bold",children:lr}),d.jsx("button",{type:"submit",disabled:Yt,className:`w-full py-4 rounded-2xl font-black uppercase ${Yt?"bg-slate-700 text-slate-400 cursor-not-allowed":"bg-blue-600 text-white"}`,children:Yt?"Entrando...":"Entrar como admin"})]})]})});const Xv=()=>{u({homeTeam:m,awayTeam:_,homeLogo:C,awayLogo:I,viewerPassword:U||"corsairs"}),sessionStorage.removeItem(r),v(!1)},Bl=typeof c=="number";return d.jsxs("div",{className:"min-h-screen bg-slate-950 p-4 flex flex-col gap-4 max-w-md mx-auto text-white pb-10",children:[d.jsxs("div",{className:"flex justify-between items-center p-2",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-blue-500 font-black italic uppercase text-xs tracking-tighter",children:"Flag Score Alfonso"}),(P==null?void 0:P.email)&&d.jsxs("p",{className:"text-[10px] text-slate-500 font-bold mt-1",children:["Admin: ",P.email]})]}),!e&&!Bl&&d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>w(B=>!B),className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Historial",children:d.jsx(cl,{size:20})}),d.jsx("button",{onClick:()=>v(!0),className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Ajustes",children:d.jsx(w1,{size:20})}),d.jsx("button",{onClick:Jv,className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Cerrar sesión",children:d.jsx(g1,{size:20})})]})]}),!e&&g&&!Bl&&d.jsx("div",{className:"fixed inset-0 z-[10001] bg-black/95 backdrop-blur-md flex items-center justify-center p-6",children:d.jsxs("div",{className:"bg-slate-900 w-full rounded-3xl border border-slate-700 p-6 shadow-2xl max-h-[90vh] overflow-y-auto",children:[d.jsx("h2",{className:"mb-6 font-black uppercase text-sm text-slate-400",children:"Configurar Equipos"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Nombre local"}),d.jsx("input",{value:m,onChange:B=>p(B.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Local"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Logo local"}),d.jsx("input",{type:"file",accept:"image/*",onChange:B=>Gd(B,"home"),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"}),C&&d.jsx("div",{className:"mt-3 flex justify-center",children:d.jsx("img",{src:C,alt:"Logo local",className:"w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"})})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Nombre visitante"}),d.jsx("input",{value:_,onChange:B=>x(B.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Visitante"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Logo visitante"}),d.jsx("input",{type:"file",accept:"image/*",onChange:B=>Gd(B,"away"),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"}),I&&d.jsx("div",{className:"mt-3 flex justify-center",children:d.jsx("img",{src:I,alt:"Logo visitante",className:"w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"})})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Contraseña modo visor"}),d.jsx("input",{type:"text",value:U,onChange:B=>R(B.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Contraseña visor"})]}),d.jsx("button",{onClick:Xv,className:"w-full bg-blue-600 py-4 rounded-2xl font-black",children:"GUARDAR"})]})]})}),y?d.jsx(O1,{}):d.jsxs(d.Fragment,{children:[d.jsx(N1,{}),!h&&!Bl&&d.jsxs(d.Fragment,{children:[d.jsx(P1,{}),d.jsx(I1,{}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx(Ep,{team:"home"}),d.jsx(Ep,{team:"away"})]}),d.jsx(R1,{}),d.jsx(b1,{})]})]})]})}Mg(document.getElementById("root")).render(d.jsx(L.StrictMode,{children:d.jsx(L1,{})}));
