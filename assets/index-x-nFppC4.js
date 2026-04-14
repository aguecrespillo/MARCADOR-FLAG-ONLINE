(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Wp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hp={exports:{}},yl={},Bp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Cy=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),by=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Oy=Symbol.for("react.lazy"),fh=Symbol.iterator;function Ly(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,qp={};function rs(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Gp}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qp(){}Qp.prototype=rs.prototype;function fu(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||Gp}var pu=fu.prototype=new Qp;pu.constructor=fu;Kp(pu,rs.prototype);pu.isPureReactComponent=!0;var ph=Array.isArray,Yp=Object.prototype.hasOwnProperty,mu={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Yp.call(e,r)&&!Jp.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ci,type:t,key:i,ref:o,props:s,_owner:mu.current}}function Dy(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function My(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mh=/\/+/g;function ra(t,e){return typeof t=="object"&&t!==null&&t.key!=null?My(""+t.key):e.toString(36)}function oo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ci:case Cy:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ra(o,0):r,ph(s)?(n="",t!=null&&(n=t.replace(mh,"$&/")+"/"),oo(s,e,n,"",function(c){return c})):s!=null&&(gu(s)&&(s=Dy(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(mh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ph(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+ra(i,l);o+=oo(i,e,n,a,s)}else if(a=Ly(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+ra(i,l++),o+=oo(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zi(t,e,n){if(t==null)return t;var r=[],s=0;return oo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ve={current:null},lo={transition:null},Fy={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:lo,ReactCurrentOwner:mu};function Zp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:zi,forEach:function(t,e,n){zi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zi(t,function(){e++}),e},toArray:function(t){return zi(t,function(e){return e})||[]},only:function(t){if(!gu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=rs;H.Fragment=ky;H.Profiler=Iy;H.PureComponent=fu;H.StrictMode=Ty;H.Suspense=Py;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;H.act=Zp;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kp({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=mu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Yp.call(e,a)&&!Jp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ci,type:t.type,key:s,ref:i,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:by,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ny,_context:t},t.Consumer=t};H.createElement=Xp;H.createFactory=function(t){var e=Xp.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Ry,render:t}};H.isValidElement=gu;H.lazy=function(t){return{$$typeof:Oy,_payload:{_status:-1,_result:t},_init:jy}};H.memo=function(t,e){return{$$typeof:Ay,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};H.unstable_act=Zp;H.useCallback=function(t,e){return Ve.current.useCallback(t,e)};H.useContext=function(t){return Ve.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Ve.current.useDeferredValue(t)};H.useEffect=function(t,e){return Ve.current.useEffect(t,e)};H.useId=function(){return Ve.current.useId()};H.useImperativeHandle=function(t,e,n){return Ve.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Ve.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Ve.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Ve.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Ve.current.useReducer(t,e,n)};H.useRef=function(t){return Ve.current.useRef(t)};H.useState=function(t){return Ve.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Ve.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Ve.current.useTransition()};H.version="18.3.1";Bp.exports=H;var L=Bp.exports;const Uy=Wp(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=L,Vy=Symbol.for("react.element"),$y=Symbol.for("react.fragment"),Wy=Object.prototype.hasOwnProperty,Hy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Wy.call(e,r)&&!By.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Vy,type:t,key:i,ref:o,props:s,_owner:Hy.current}}yl.Fragment=$y;yl.jsx=em;yl.jsxs=em;Hp.exports=yl;var u=Hp.exports,tm={exports:{}},et={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,E){var R=I.length;I.push(E);e:for(;0<R;){var Y=R-1>>>1,ue=I[Y];if(0<s(ue,E))I[Y]=E,I[R]=ue,R=Y;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var E=I[0],R=I.pop();if(R!==E){I[0]=R;e:for(var Y=0,ue=I.length,ut=ue>>>1;Y<ut;){var Et=2*(Y+1)-1,hr=I[Et],Pt=Et+1,jn=I[Pt];if(0>s(hr,R))Pt<ue&&0>s(jn,hr)?(I[Y]=jn,I[Pt]=R,Y=Pt):(I[Y]=hr,I[Et]=R,Y=Et);else if(Pt<ue&&0>s(jn,R))I[Y]=jn,I[Pt]=R,Y=Pt;else break e}}return E}function s(I,E){var R=I.sortIndex-E.sortIndex;return R!==0?R:I.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,h=null,f=3,g=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var E=n(c);E!==null;){if(E.callback===null)r(c);else if(E.startTime<=I)r(c),E.sortIndex=E.expirationTime,e(a,E);else break;E=n(c)}}function x(I){if(y=!1,_(I),!v)if(n(a)!==null)v=!0,B(C);else{var E=n(c);E!==null&&pe(x,E.startTime-I)}}function C(I,E){v=!1,y&&(y=!1,m(b),b=-1),g=!0;var R=f;try{for(_(E),h=n(a);h!==null&&(!(h.expirationTime>E)||I&&!Q());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,f=h.priorityLevel;var ue=Y(h.expirationTime<=E);E=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(a)&&r(a),_(E)}else r(a);h=n(a)}if(h!==null)var ut=!0;else{var Et=n(c);Et!==null&&pe(x,Et.startTime-E),ut=!1}return ut}finally{h=null,f=R,g=!1}}var T=!1,N=null,b=-1,U=5,A=-1;function Q(){return!(t.unstable_now()-A<U)}function F(){if(N!==null){var I=t.unstable_now();A=I;var E=!0;try{E=N(!0,I)}finally{E?G():(T=!1,N=null)}}else T=!1}var G;if(typeof p=="function")G=function(){p(F)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=F,G=function(){D.postMessage(null)}}else G=function(){w(F,0)};function B(I){N=I,T||(T=!0,G())}function pe(I,E){b=w(function(){I(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,B(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var R=f;f=E;try{return I()}finally{f=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,E){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=f;f=I;try{return E()}finally{f=R}},t.unstable_scheduleCallback=function(I,E,R){var Y=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,I){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=R+ue,I={id:d++,callback:E,priorityLevel:I,startTime:R,expirationTime:ue,sortIndex:-1},R>Y?(I.sortIndex=R,e(c,I),n(a)===null&&I===n(c)&&(y?(m(b),b=-1):y=!0,pe(x,R-Y))):(I.sortIndex=ue,e(a,I),v||g||(v=!0,B(C))),I},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(I){var E=f;return function(){var R=f;f=E;try{return I.apply(this,arguments)}finally{f=R}}}})(rm);nm.exports=rm;var Gy=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=L,Ze=Gy;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,qs={};function lr(t,e){Vr(t,e),Vr(t+"Capture",e)}function Vr(t,e){for(qs[t]=e,t=0;t<e.length;t++)sm.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},_h={};function Qy(t){return Ya.call(_h,t)?!0:Ya.call(gh,t)?!1:qy.test(t)?_h[t]=!0:(gh[t]=!0,!1)}function Yy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jy(t,e,n,r){if(e===null||typeof e>"u"||Yy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function vu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_u,vu);be[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_u,vu);be[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_u,vu);be[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function yu(t,e,n,r){var s=be.hasOwnProperty(e)?be[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jy(e,n,s,r)&&(n=null),r||s===null?Qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jt=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),om=Symbol.for("react.context"),xu=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),lm=Symbol.for("react.offscreen"),vh=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,sa;function Is(t){if(sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sa=e&&e[1]||""}return`
`+sa+t}var ia=!1;function oa(t,e){if(!t||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function Xy(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=oa(t.type,!1),t;case 11:return t=oa(t.type.render,!1),t;case 1:return t=oa(t.type,!0),t;default:return""}}function ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case Ja:return"Profiler";case wu:return"StrictMode";case Xa:return"Suspense";case Za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case om:return(t.displayName||"Context")+".Consumer";case im:return(t._context.displayName||"Context")+".Provider";case xu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eu:return e=t.displayName||null,e!==null?e:ec(t.type)||"Memo";case tn:e=t._payload,t=t._init;try{return ec(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ec(e);case 8:return e===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function In(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function e0(t){var e=am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $i(t){t._valueTracker||(t._valueTracker=e0(t))}function cm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=am(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tc(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=In(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function um(t,e){e=e.checked,e!=null&&yu(t,"checked",e,!1)}function nc(t,e){um(t,e);var n=In(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rc(t,e.type,n):e.hasOwnProperty("defaultValue")&&rc(t,e.type,In(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rc(t,e,n){(e!=="number"||ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function Rr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+In(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ns(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:In(n)}}function dm(t,e){var n=In(e.value),r=In(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wi,fm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){t0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function pm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function mm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=pm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var n0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(t,e){if(e){if(n0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,Pr=null,Ar=null;function Sh(t){if(t=Ii(t)){if(typeof cc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Cl(e),cc(t.stateNode,t.type,e))}}function gm(t){Pr?Ar?Ar.push(t):Ar=[t]:Pr=t}function _m(){if(Pr){var t=Pr,e=Ar;if(Ar=Pr=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function vm(t,e){return t(e)}function ym(){}var la=!1;function wm(t,e,n){if(la)return t(e,n);la=!0;try{return vm(t,e,n)}finally{la=!1,(Pr!==null||Ar!==null)&&(ym(),_m())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var uc=!1;if(Ht)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){uc=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{uc=!1}function r0(t,e,n,r,s,i,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ls=!1,To=null,Io=!1,dc=null,s0={onError:function(t){Ls=!0,To=t}};function i0(t,e,n,r,s,i,o,l,a){Ls=!1,To=null,r0.apply(s0,arguments)}function o0(t,e,n,r,s,i,o,l,a){if(i0.apply(this,arguments),Ls){if(Ls){var c=To;Ls=!1,To=null}else throw Error(S(198));Io||(Io=!0,dc=c)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(ar(t)!==t)throw Error(S(188))}function l0(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ch(s),t;if(i===r)return Ch(s),e;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Em(t){return t=l0(t),t!==null?Sm(t):null}function Sm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sm(t);if(e!==null)return e;t=t.sibling}return null}var Cm=Ze.unstable_scheduleCallback,kh=Ze.unstable_cancelCallback,a0=Ze.unstable_shouldYield,c0=Ze.unstable_requestPaint,me=Ze.unstable_now,u0=Ze.unstable_getCurrentPriorityLevel,Cu=Ze.unstable_ImmediatePriority,km=Ze.unstable_UserBlockingPriority,No=Ze.unstable_NormalPriority,d0=Ze.unstable_LowPriority,Tm=Ze.unstable_IdlePriority,wl=null,Tt=null;function h0(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:m0,f0=Math.log,p0=Math.LN2;function m0(t){return t>>>=0,t===0?32:31-(f0(t)/p0|0)|0}var Hi=64,Bi=4194304;function bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=bs(l):(i&=o,i!==0&&(r=bs(i)))}else o=n&~s,o!==0?r=bs(o):i!==0&&(r=bs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),s=1<<n,r|=t[n],e&=~s;return r}function g0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-_t(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=g0(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Im(){var t=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),t}function aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function v0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-_t(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ku(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var J=0;function Nm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bm,Tu,Rm,Pm,Am,fc=!1,Gi=[],fn=null,pn=null,mn=null,Js=new Map,Xs=new Map,rn=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function _s(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ii(e),e!==null&&Tu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function w0(t,e,n,r,s){switch(e){case"focusin":return fn=_s(fn,t,e,n,r,s),!0;case"dragenter":return pn=_s(pn,t,e,n,r,s),!0;case"mouseover":return mn=_s(mn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Js.set(i,_s(Js.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Xs.set(i,_s(Xs.get(i)||null,t,e,n,r,s)),!0}return!1}function Om(t){var e=Wn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=xm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){Rm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return e=Ii(n),e!==null&&Tu(e),t.blockedOn=n,!1;e.shift()}return!0}function Ih(t,e,n){ao(t)&&n.delete(e)}function x0(){fc=!1,fn!==null&&ao(fn)&&(fn=null),pn!==null&&ao(pn)&&(pn=null),mn!==null&&ao(mn)&&(mn=null),Js.forEach(Ih),Xs.forEach(Ih)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,fc||(fc=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,x0)))}function Zs(t){function e(s){return vs(s,t)}if(0<Gi.length){vs(Gi[0],t);for(var n=1;n<Gi.length;n++){var r=Gi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&vs(fn,t),pn!==null&&vs(pn,t),mn!==null&&vs(mn,t),Js.forEach(e),Xs.forEach(e),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&rn.shift()}var Or=Jt.ReactCurrentBatchConfig,Ro=!0;function E0(t,e,n,r){var s=J,i=Or.transition;Or.transition=null;try{J=1,Iu(t,e,n,r)}finally{J=s,Or.transition=i}}function S0(t,e,n,r){var s=J,i=Or.transition;Or.transition=null;try{J=4,Iu(t,e,n,r)}finally{J=s,Or.transition=i}}function Iu(t,e,n,r){if(Ro){var s=pc(t,e,n,r);if(s===null)va(t,e,r,Po,n),Th(t,r);else if(w0(s,t,e,n,r))r.stopPropagation();else if(Th(t,r),e&4&&-1<y0.indexOf(t)){for(;s!==null;){var i=Ii(s);if(i!==null&&bm(i),i=pc(t,e,n,r),i===null&&va(t,e,r,Po,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else va(t,e,r,null,n)}}var Po=null;function pc(t,e,n,r){if(Po=null,t=Su(r),t=Wn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function Lm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u0()){case Cu:return 1;case km:return 4;case No:case d0:return 16;case Tm:return 536870912;default:return 16}default:return 16}}var un=null,Nu=null,co=null;function Dm(){if(co)return co;var t,e=Nu,n=e.length,r,s="value"in un?un.value:un.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return co=s.slice(t,1<r?1-r:void 0)}function uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ki(){return!0}function Nh(){return!1}function tt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ki:Nh,this.isPropagationStopped=Nh,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=tt(ss),Ti=ce({},ss,{view:0,detail:0}),C0=tt(Ti),ca,ua,ys,xl=ce({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ys&&(ys&&t.type==="mousemove"?(ca=t.screenX-ys.screenX,ua=t.screenY-ys.screenY):ua=ca=0,ys=t),ca)},movementY:function(t){return"movementY"in t?t.movementY:ua}}),bh=tt(xl),k0=ce({},xl,{dataTransfer:0}),T0=tt(k0),I0=ce({},Ti,{relatedTarget:0}),da=tt(I0),N0=ce({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=tt(N0),R0=ce({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P0=tt(R0),A0=ce({},ss,{data:0}),Rh=tt(A0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D0[t])?!!e[t]:!1}function Ru(){return M0}var j0=ce({},Ti,{key:function(t){if(t.key){var e=O0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F0=tt(j0),U0=ce({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=tt(U0),z0=ce({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),V0=tt(z0),$0=ce({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=tt($0),H0=ce({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=tt(H0),G0=[9,13,27,32],Pu=Ht&&"CompositionEvent"in window,Ds=null;Ht&&"documentMode"in document&&(Ds=document.documentMode);var K0=Ht&&"TextEvent"in window&&!Ds,Mm=Ht&&(!Pu||Ds&&8<Ds&&11>=Ds),Ah=" ",Oh=!1;function jm(t,e){switch(t){case"keyup":return G0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function q0(t,e){switch(t){case"compositionend":return Fm(e);case"keypress":return e.which!==32?null:(Oh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Oh?null:t;default:return null}}function Q0(t,e){if(_r)return t==="compositionend"||!Pu&&jm(t,e)?(t=Dm(),co=Nu=un=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mm&&e.locale!=="ko"?null:e.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y0[t.type]:e==="textarea"}function Um(t,e,n,r){gm(r),e=Ao(e,"onChange"),0<e.length&&(n=new bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,ei=null;function J0(t){Ym(t,0)}function El(t){var e=wr(t);if(cm(e))return t}function X0(t,e){if(t==="change")return e}var zm=!1;if(Ht){var ha;if(Ht){var fa="oninput"in document;if(!fa){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),fa=typeof Dh.oninput=="function"}ha=fa}else ha=!1;zm=ha&&(!document.documentMode||9<document.documentMode)}function Mh(){Ms&&(Ms.detachEvent("onpropertychange",Vm),ei=Ms=null)}function Vm(t){if(t.propertyName==="value"&&El(ei)){var e=[];Um(e,ei,t,Su(t)),wm(J0,e)}}function Z0(t,e,n){t==="focusin"?(Mh(),Ms=e,ei=n,Ms.attachEvent("onpropertychange",Vm)):t==="focusout"&&Mh()}function ew(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ei)}function tw(t,e){if(t==="click")return El(e)}function nw(t,e){if(t==="input"||t==="change")return El(e)}function rw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wt=typeof Object.is=="function"?Object.is:rw;function ti(t,e){if(wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ya.call(e,s)||!wt(t[s],e[s]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=jh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jh(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wm(){for(var t=window,e=ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ko(t.document)}return e}function Au(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sw(t){var e=Wm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Au(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Fh(n,i);var o=Fh(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iw=Ht&&"documentMode"in document&&11>=document.documentMode,vr=null,mc=null,js=null,gc=!1;function Uh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||vr==null||vr!==ko(r)||(r=vr,"selectionStart"in r&&Au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),js&&ti(js,r)||(js=r,r=Ao(mc,"onSelect"),0<r.length&&(e=new bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},pa={},Hm={};Ht&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Sl(t){if(pa[t])return pa[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hm)return pa[t]=e[n];return t}var Bm=Sl("animationend"),Gm=Sl("animationiteration"),Km=Sl("animationstart"),qm=Sl("transitionend"),Qm=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,e){Qm.set(t,e),lr(e,[t])}for(var ma=0;ma<zh.length;ma++){var ga=zh[ma],ow=ga.toLowerCase(),lw=ga[0].toUpperCase()+ga.slice(1);An(ow,"on"+lw)}An(Bm,"onAnimationEnd");An(Gm,"onAnimationIteration");An(Km,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(qm,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Vh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,o0(r,e,void 0,t),t.currentTarget=null}function Ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;Vh(s,l,c),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;Vh(s,l,c),i=a}}}if(Io)throw t=dc,Io=!1,dc=null,t}function re(t,e){var n=e[xc];n===void 0&&(n=e[xc]=new Set);var r=t+"__bubble";n.has(r)||(Jm(e,t,2,!1),n.add(r))}function _a(t,e,n){var r=0;e&&(r|=4),Jm(n,t,r,e)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ni(t){if(!t[Qi]){t[Qi]=!0,sm.forEach(function(n){n!=="selectionchange"&&(aw.has(n)||_a(n,!1,t),_a(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qi]||(e[Qi]=!0,_a("selectionchange",!1,e))}}function Jm(t,e,n,r){switch(Lm(e)){case 1:var s=E0;break;case 4:s=S0;break;default:s=Iu}n=s.bind(null,e,n,t),s=void 0,!uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function va(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}wm(function(){var c=i,d=Su(n),h=[];e:{var f=Qm.get(t);if(f!==void 0){var g=bu,v=t;switch(t){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":g=F0;break;case"focusin":v="focus",g=da;break;case"focusout":v="blur",g=da;break;case"beforeblur":case"afterblur":g=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=V0;break;case Bm:case Gm:case Km:g=b0;break;case qm:g=W0;break;case"scroll":g=C0;break;case"wheel":g=B0;break;case"copy":case"cut":case"paste":g=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ph}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,_;p!==null;){_=p;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=Ys(p,m),x!=null&&y.push(ri(p,x,_)))),w)break;p=p.return}0<y.length&&(f=new g(f,v,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ac&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[Bt]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Wn(v):null,v!==null&&(w=ar(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=bh,x="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ph,x="onPointerLeave",m="onPointerEnter",p="pointer"),w=g==null?f:wr(g),_=v==null?f:wr(v),f=new y(x,p+"leave",g,n,d),f.target=w,f.relatedTarget=_,x=null,Wn(d)===c&&(y=new y(m,p+"enter",v,n,d),y.target=_,y.relatedTarget=w,x=y),w=x,g&&v)t:{for(y=g,m=v,p=0,_=y;_;_=fr(_))p++;for(_=0,x=m;x;x=fr(x))_++;for(;0<p-_;)y=fr(y),p--;for(;0<_-p;)m=fr(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=fr(y),m=fr(m)}y=null}else y=null;g!==null&&$h(h,f,g,y,!1),v!==null&&w!==null&&$h(h,w,v,y,!0)}}e:{if(f=c?wr(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=X0;else if(Lh(f))if(zm)C=nw;else{C=ew;var T=Z0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=tw);if(C&&(C=C(t,c))){Um(h,C,n,d);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&rc(f,"number",f.value)}switch(T=c?wr(c):window,t){case"focusin":(Lh(T)||T.contentEditable==="true")&&(vr=T,mc=c,js=null);break;case"focusout":js=mc=vr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Uh(h,n,d);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":Uh(h,n,d)}var N;if(Pu)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else _r?jm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Mm&&n.locale!=="ko"&&(_r||b!=="onCompositionStart"?b==="onCompositionEnd"&&_r&&(N=Dm()):(un=d,Nu="value"in un?un.value:un.textContent,_r=!0)),T=Ao(c,b),0<T.length&&(b=new Rh(b,t,null,n,d),h.push({event:b,listeners:T}),N?b.data=N:(N=Fm(n),N!==null&&(b.data=N)))),(N=K0?q0(t,n):Q0(t,n))&&(c=Ao(c,"onBeforeInput"),0<c.length&&(d=new Rh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=N))}Ym(h,e)})}function ri(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ao(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ys(t,n),i!=null&&r.unshift(ri(t,i,s)),i=Ys(t,e),i!=null&&r.push(ri(t,i,s))),t=t.return}return r}function fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,s?(a=Ys(n,i),a!=null&&o.unshift(ri(n,a,l))):s||(a=Ys(n,i),a!=null&&o.push(ri(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(cw,`
`).replace(uw,"")}function Yi(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(S(425))}function Oo(){}var _c=null,vc=null;function yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,hw=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(fw)}:wc;function fw(t){setTimeout(function(){throw t})}function ya(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zs(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),kt="__reactFiber$"+is,si="__reactProps$"+is,Bt="__reactContainer$"+is,xc="__reactEvents$"+is,pw="__reactListeners$"+is,mw="__reactHandles$"+is;function Wn(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bt]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[kt])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Ii(t){return t=t[kt]||t[Bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Cl(t){return t[si]||null}var Ec=[],xr=-1;function On(t){return{current:t}}function se(t){0>xr||(t.current=Ec[xr],Ec[xr]=null,xr--)}function ne(t,e){xr++,Ec[xr]=t.current,t.current=e}var Nn={},Le=On(Nn),Ke=On(!1),Qn=Nn;function $r(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function qe(t){return t=t.childContextTypes,t!=null}function Lo(){se(Ke),se(Le)}function Gh(t,e,n){if(Le.current!==Nn)throw Error(S(168));ne(Le,e),ne(Ke,n)}function Xm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(S(108,Zy(t)||"Unknown",s));return ce({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,Qn=Le.current,ne(Le,t),ne(Ke,Ke.current),!0}function Kh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Xm(t,e,Qn),r.__reactInternalMemoizedMergedChildContext=t,se(Ke),se(Le),ne(Le,t)):se(Ke),ne(Ke,n)}var Lt=null,kl=!1,wa=!1;function Zm(t){Lt===null?Lt=[t]:Lt.push(t)}function gw(t){kl=!0,Zm(t)}function Ln(){if(!wa&&Lt!==null){wa=!0;var t=0,e=J;try{var n=Lt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Lt=null,kl=!1}catch(s){throw Lt!==null&&(Lt=Lt.slice(t+1)),Cm(Cu,Ln),s}finally{J=e,wa=!1}}return null}var Er=[],Sr=0,Mo=null,jo=0,nt=[],rt=0,Yn=null,Dt=1,Mt="";function Un(t,e){Er[Sr++]=jo,Er[Sr++]=Mo,Mo=t,jo=e}function eg(t,e,n){nt[rt++]=Dt,nt[rt++]=Mt,nt[rt++]=Yn,Yn=t;var r=Dt;t=Mt;var s=32-_t(r)-1;r&=~(1<<s),n+=1;var i=32-_t(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Dt=1<<32-_t(e)+s|n<<s|r,Mt=i+t}else Dt=1<<i|n<<s|r,Mt=t}function Ou(t){t.return!==null&&(Un(t,1),eg(t,1,0))}function Lu(t){for(;t===Mo;)Mo=Er[--Sr],Er[Sr]=null,jo=Er[--Sr],Er[Sr]=null;for(;t===Yn;)Yn=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null,Dt=nt[--rt],nt[rt]=null}var Xe=null,Je=null,oe=!1,pt=null;function tg(t,e){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Je=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yn!==null?{id:Dt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Je=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(oe){var e=Je;if(e){var n=e;if(!qh(t,e)){if(Sc(t))throw Error(S(418));e=gn(n.nextSibling);var r=Xe;e&&qh(t,e)?tg(r,n):(t.flags=t.flags&-4097|2,oe=!1,Xe=t)}}else{if(Sc(t))throw Error(S(418));t.flags=t.flags&-4097|2,oe=!1,Xe=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function Ji(t){if(t!==Xe)return!1;if(!oe)return Qh(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yc(t.type,t.memoizedProps)),e&&(e=Je)){if(Sc(t))throw ng(),Error(S(418));for(;e;)tg(t,e),e=gn(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Xe?gn(t.stateNode.nextSibling):null;return!0}function ng(){for(var t=Je;t;)t=gn(t.nextSibling)}function Wr(){Je=Xe=null,oe=!1}function Du(t){pt===null?pt=[t]:pt.push(t)}var _w=Jt.ReactCurrentBatchConfig;function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Xi(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function rg(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=wn(m,p),m.index=0,m.sibling=null,m}function i(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,x){return p===null||p.tag!==6?(p=Ia(_,m.mode,x),p.return=m,p):(p=s(p,_),p.return=m,p)}function a(m,p,_,x){var C=_.type;return C===gr?d(m,p,_.props.children,x,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&Yh(C)===p.type)?(x=s(p,_.props),x.ref=ws(m,p,_),x.return=m,x):(x=vo(_.type,_.key,_.props,null,m.mode,x),x.ref=ws(m,p,_),x.return=m,x)}function c(m,p,_,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Na(_,m.mode,x),p.return=m,p):(p=s(p,_.children||[]),p.return=m,p)}function d(m,p,_,x,C){return p===null||p.tag!==7?(p=qn(_,m.mode,x,C),p.return=m,p):(p=s(p,_),p.return=m,p)}function h(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ia(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return _=vo(p.type,p.key,p.props,null,m.mode,_),_.ref=ws(m,null,p),_.return=m,_;case mr:return p=Na(p,m.mode,_),p.return=m,p;case tn:var x=p._init;return h(m,x(p._payload),_)}if(Ns(p)||ms(p))return p=qn(p,m.mode,_,null),p.return=m,p;Xi(m,p)}return null}function f(m,p,_,x){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:l(m,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vi:return _.key===C?a(m,p,_,x):null;case mr:return _.key===C?c(m,p,_,x):null;case tn:return C=_._init,f(m,p,C(_._payload),x)}if(Ns(_)||ms(_))return C!==null?null:d(m,p,_,x,null);Xi(m,_)}return null}function g(m,p,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(_)||null,l(p,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vi:return m=m.get(x.key===null?_:x.key)||null,a(p,m,x,C);case mr:return m=m.get(x.key===null?_:x.key)||null,c(p,m,x,C);case tn:var T=x._init;return g(m,p,_,T(x._payload),C)}if(Ns(x)||ms(x))return m=m.get(_)||null,d(p,m,x,C,null);Xi(p,x)}return null}function v(m,p,_,x){for(var C=null,T=null,N=p,b=p=0,U=null;N!==null&&b<_.length;b++){N.index>b?(U=N,N=null):U=N.sibling;var A=f(m,N,_[b],x);if(A===null){N===null&&(N=U);break}t&&N&&A.alternate===null&&e(m,N),p=i(A,p,b),T===null?C=A:T.sibling=A,T=A,N=U}if(b===_.length)return n(m,N),oe&&Un(m,b),C;if(N===null){for(;b<_.length;b++)N=h(m,_[b],x),N!==null&&(p=i(N,p,b),T===null?C=N:T.sibling=N,T=N);return oe&&Un(m,b),C}for(N=r(m,N);b<_.length;b++)U=g(N,m,b,_[b],x),U!==null&&(t&&U.alternate!==null&&N.delete(U.key===null?b:U.key),p=i(U,p,b),T===null?C=U:T.sibling=U,T=U);return t&&N.forEach(function(Q){return e(m,Q)}),oe&&Un(m,b),C}function y(m,p,_,x){var C=ms(_);if(typeof C!="function")throw Error(S(150));if(_=C.call(_),_==null)throw Error(S(151));for(var T=C=null,N=p,b=p=0,U=null,A=_.next();N!==null&&!A.done;b++,A=_.next()){N.index>b?(U=N,N=null):U=N.sibling;var Q=f(m,N,A.value,x);if(Q===null){N===null&&(N=U);break}t&&N&&Q.alternate===null&&e(m,N),p=i(Q,p,b),T===null?C=Q:T.sibling=Q,T=Q,N=U}if(A.done)return n(m,N),oe&&Un(m,b),C;if(N===null){for(;!A.done;b++,A=_.next())A=h(m,A.value,x),A!==null&&(p=i(A,p,b),T===null?C=A:T.sibling=A,T=A);return oe&&Un(m,b),C}for(N=r(m,N);!A.done;b++,A=_.next())A=g(N,m,b,A.value,x),A!==null&&(t&&A.alternate!==null&&N.delete(A.key===null?b:A.key),p=i(A,p,b),T===null?C=A:T.sibling=A,T=A);return t&&N.forEach(function(F){return e(m,F)}),oe&&Un(m,b),C}function w(m,p,_,x){if(typeof _=="object"&&_!==null&&_.type===gr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Vi:e:{for(var C=_.key,T=p;T!==null;){if(T.key===C){if(C=_.type,C===gr){if(T.tag===7){n(m,T.sibling),p=s(T,_.props.children),p.return=m,m=p;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tn&&Yh(C)===T.type){n(m,T.sibling),p=s(T,_.props),p.ref=ws(m,T,_),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}_.type===gr?(p=qn(_.props.children,m.mode,x,_.key),p.return=m,m=p):(x=vo(_.type,_.key,_.props,null,m.mode,x),x.ref=ws(m,p,_),x.return=m,m=x)}return o(m);case mr:e:{for(T=_.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=s(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Na(_,m.mode,x),p.return=m,m=p}return o(m);case tn:return T=_._init,w(m,p,T(_._payload),x)}if(Ns(_))return v(m,p,_,x);if(ms(_))return y(m,p,_,x);Xi(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=s(p,_),p.return=m,m=p):(n(m,p),p=Ia(_,m.mode,x),p.return=m,m=p),o(m)):n(m,p)}return w}var Hr=rg(!0),sg=rg(!1),Fo=On(null),Uo=null,Cr=null,Mu=null;function ju(){Mu=Cr=Uo=null}function Fu(t){var e=Fo.current;se(Fo),t._currentValue=e}function kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lr(t,e){Uo=t,Mu=Cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Be=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:e,next:null},Cr===null){if(Uo===null)throw Error(S(308));Cr=t,Uo.dependencies={lanes:0,firstContext:t}}else Cr=Cr.next=t;return e}var Hn=null;function Uu(t){Hn===null?Hn=[t]:Hn.push(t)}function ig(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Uu(e)):(n.next=s.next,s.next=n),e.interleaved=n,Gt(t,r)}function Gt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nn=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Gt(t,n)}return s=r.interleaved,s===null?(e.next=e,Uu(r)):(e.next=s.next,s.next=e),r.interleaved=e,Gt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ku(t,n)}}function Jh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var s=t.updateQueue;nn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(i!==null){var h=s.baseState;o=0,d=c=a=null,l=i;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,h,f):v,f==null)break e;h=ce({},h,f);break e;case 2:nn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,a=h):d=d.next=g,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(a=h),s.baseState=a,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xn|=o,t.lanes=o,t.memoizedState=h}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(S(191,s));s.call(r)}}}var Ni={},It=On(Ni),ii=On(Ni),oi=On(Ni);function Bn(t){if(t===Ni)throw Error(S(174));return t}function Vu(t,e){switch(ne(oi,e),ne(ii,t),ne(It,Ni),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ic(e,t)}se(It),ne(It,e)}function Br(){se(It),se(ii),se(oi)}function lg(t){Bn(oi.current);var e=Bn(It.current),n=ic(e,t.type);e!==n&&(ne(ii,t),ne(It,n))}function $u(t){ii.current===t&&(se(It),se(ii))}var le=On(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xa=[];function Wu(){for(var t=0;t<xa.length;t++)xa[t]._workInProgressVersionPrimary=null;xa.length=0}var fo=Jt.ReactCurrentDispatcher,Ea=Jt.ReactCurrentBatchConfig,Jn=0,ae=null,ve=null,Se=null,$o=!1,Fs=!1,li=0,vw=0;function Pe(){throw Error(S(321))}function Hu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wt(t[n],e[n]))return!1;return!0}function Bu(t,e,n,r,s,i){if(Jn=i,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?Ew:Sw,t=n(r,s),Fs){i=0;do{if(Fs=!1,li=0,25<=i)throw Error(S(301));i+=1,Se=ve=null,e.updateQueue=null,fo.current=Cw,t=n(r,s)}while(Fs)}if(fo.current=Wo,e=ve!==null&&ve.next!==null,Jn=0,Se=ve=ae=null,$o=!1,e)throw Error(S(300));return t}function Gu(){var t=li!==0;return li=0,t}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=t:Se=Se.next=t,Se}function at(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Se===null?ae.memoizedState:Se.next;if(e!==null)Se=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?ae.memoizedState=Se=t:Se=Se.next=t}return Se}function ai(t,e){return typeof e=="function"?e(t):e}function Sa(t){var e=at(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,c=i;do{var d=c.lane;if((Jn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ae.lanes|=d,Xn|=d}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=l,wt(r,e.memoizedState)||(Be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ae.lanes|=i,Xn|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ca(t){var e=at(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);wt(i,e.memoizedState)||(Be=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ag(){}function cg(t,e){var n=ae,r=at(),s=e(),i=!wt(r.memoizedState,s);if(i&&(r.memoizedState=s,Be=!0),r=r.queue,Ku(hg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,ci(9,dg.bind(null,n,r,s,e),void 0,null),ke===null)throw Error(S(349));Jn&30||ug(n,e,s)}return s}function ug(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dg(t,e,n,r){e.value=n,e.getSnapshot=r,fg(e)&&pg(t)}function hg(t,e,n){return n(function(){fg(e)&&pg(t)})}function fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wt(t,n)}catch{return!0}}function pg(t){var e=Gt(t,1);e!==null&&vt(e,t,1,-1)}function Zh(t){var e=Ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:t},e.queue=t,t=t.dispatch=xw.bind(null,ae,t),[e.memoizedState,t]}function ci(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mg(){return at().memoizedState}function po(t,e,n,r){var s=Ct();ae.flags|=t,s.memoizedState=ci(1|e,n,void 0,r===void 0?null:r)}function Tl(t,e,n,r){var s=at();r=r===void 0?null:r;var i=void 0;if(ve!==null){var o=ve.memoizedState;if(i=o.destroy,r!==null&&Hu(r,o.deps)){s.memoizedState=ci(e,n,i,r);return}}ae.flags|=t,s.memoizedState=ci(1|e,n,i,r)}function ef(t,e){return po(8390656,8,t,e)}function Ku(t,e){return Tl(2048,8,t,e)}function gg(t,e){return Tl(4,2,t,e)}function _g(t,e){return Tl(4,4,t,e)}function vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yg(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,vg.bind(null,e,t),n)}function qu(){}function wg(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xg(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Eg(t,e,n){return Jn&21?(wt(n,e)||(n=Im(),ae.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Be=!0),t.memoizedState=n)}function yw(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Ea.transition;Ea.transition={};try{t(!1),e()}finally{J=n,Ea.transition=r}}function Sg(){return at().memoizedState}function ww(t,e,n){var r=yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))kg(e,n);else if(n=ig(t,e,n,r),n!==null){var s=Fe();vt(n,t,r,s),Tg(n,e,r)}}function xw(t,e,n){var r=yn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))kg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,wt(l,o)){var a=e.interleaved;a===null?(s.next=s,Uu(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=ig(t,e,s,r),n!==null&&(s=Fe(),vt(n,t,r,s),Tg(n,e,r))}}function Cg(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function kg(t,e){Fs=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ku(t,n)}}var Wo={readContext:lt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Ew={readContext:lt,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:ef,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=Ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ww.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:qu,useDeferredValue:function(t){return Ct().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=yw.bind(null,t[1]),Ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,s=Ct();if(oe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));Jn&30||ug(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ef(hg.bind(null,r,i,t),[t]),r.flags|=2048,ci(9,dg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Ct(),e=ke.identifierPrefix;if(oe){var n=Mt,r=Dt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=li++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sw={readContext:lt,useCallback:wg,useContext:lt,useEffect:Ku,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:xg,useReducer:Sa,useRef:mg,useState:function(){return Sa(ai)},useDebugValue:qu,useDeferredValue:function(t){var e=at();return Eg(e,ve.memoizedState,t)},useTransition:function(){var t=Sa(ai)[0],e=at().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:cg,useId:Sg,unstable_isNewReconciler:!1},Cw={readContext:lt,useCallback:wg,useContext:lt,useEffect:Ku,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:xg,useReducer:Ca,useRef:mg,useState:function(){return Ca(ai)},useDebugValue:qu,useDeferredValue:function(t){var e=at();return ve===null?e.memoizedState=t:Eg(e,ve.memoizedState,t)},useTransition:function(){var t=Ca(ai)[0],e=at().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:cg,useId:Sg,unstable_isNewReconciler:!1};function ht(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),s=yn(t),i=$t(r,s);i.payload=e,n!=null&&(i.callback=n),e=_n(t,i,s),e!==null&&(vt(e,t,s,r),ho(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),s=yn(t),i=$t(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=_n(t,i,s),e!==null&&(vt(e,t,s,r),ho(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=yn(t),s=$t(n,r);s.tag=2,e!=null&&(s.callback=e),e=_n(t,s,r),e!==null&&(vt(e,t,r,n),ho(e,t,r))}};function tf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ti(n,r)||!ti(s,i):!0}function Ig(t,e,n){var r=!1,s=Nn,i=e.contextType;return typeof i=="object"&&i!==null?i=lt(i):(s=qe(e)?Qn:Le.current,r=e.contextTypes,i=(r=r!=null)?$r(t,s):Nn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function nf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},zu(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=lt(i):(i=qe(e)?Qn:Le.current,s.context=$r(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Tc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Il.enqueueReplaceState(s,s.state,null),zo(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,e){try{var n="",r=e;do n+=Xy(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ka(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kw=typeof WeakMap=="function"?WeakMap:Map;function Ng(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,Fc=r),Nc(t,e)},n}function bg(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nc(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Uw.bind(null,t,e,n),e.then(t,t))}function sf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function of(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,_n(n,e,1))),n.lanes|=1),t)}var Tw=Jt.ReactCurrentOwner,Be=!1;function Me(t,e,n,r){e.child=t===null?sg(e,null,n,r):Hr(e,t.child,n,r)}function lf(t,e,n,r,s){n=n.render;var i=e.ref;return Lr(e,s),r=Bu(t,e,n,r,i,s),n=Gu(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kt(t,e,s)):(oe&&n&&Ou(e),e.flags|=1,Me(t,e,r,s),e.child)}function af(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!nd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Rg(t,e,i,r,s)):(t=vo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(o,r)&&t.ref===e.ref)return Kt(t,e,s)}return e.flags|=1,t=wn(i,r),t.ref=e.ref,t.return=e,e.child=t}function Rg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ti(i,r)&&t.ref===e.ref)if(Be=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Be=!0);else return e.lanes=t.lanes,Kt(t,e,s)}return bc(t,e,n,r,s)}function Pg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Tr,Ye),Ye|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Tr,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(Tr,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ne(Tr,Ye),Ye|=r;return Me(t,e,s,n),e.child}function Ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bc(t,e,n,r,s){var i=qe(n)?Qn:Le.current;return i=$r(e,i),Lr(e,s),n=Bu(t,e,n,r,i,s),r=Gu(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kt(t,e,s)):(oe&&r&&Ou(e),e.flags|=1,Me(t,e,n,s),e.child)}function cf(t,e,n,r,s){if(qe(n)){var i=!0;Do(e)}else i=!1;if(Lr(e,s),e.stateNode===null)mo(t,e),Ig(e,n,r),Ic(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=qe(n)?Qn:Le.current,c=$r(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&nf(e,o,r,c),nn=!1;var f=e.memoizedState;o.state=f,zo(e,r,o,s),a=e.memoizedState,l!==r||f!==a||Ke.current||nn?(typeof d=="function"&&(Tc(e,n,d,r),a=e.memoizedState),(l=nn||tf(e,n,l,r,f,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,og(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ht(e.type,l),o.props=c,h=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=lt(a):(a=qe(n)?Qn:Le.current,a=$r(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||f!==a)&&nf(e,o,r,a),nn=!1,f=e.memoizedState,o.state=f,zo(e,r,o,s);var v=e.memoizedState;l!==h||f!==v||Ke.current||nn?(typeof g=="function"&&(Tc(e,n,g,r),v=e.memoizedState),(c=nn||tf(e,n,c,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Rc(t,e,n,r,i,s)}function Rc(t,e,n,r,s,i){Ag(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Kh(e,n,!1),Kt(t,e,i);r=e.stateNode,Tw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hr(e,t.child,null,i),e.child=Hr(e,null,l,i)):Me(t,e,l,i),e.memoizedState=r.state,s&&Kh(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),Vu(t,e.containerInfo)}function uf(t,e,n,r,s){return Wr(),Du(s),e.flags|=256,Me(t,e,n,r),e.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lg(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(le,s&1),t===null)return Cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rl(o,r,0,null),t=qn(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ac(n),e.memoizedState=Pc,t):Qu(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Iw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=wn(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=wn(l,i):(i=qn(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ac(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Pc,r}return i=t.child,t=i.sibling,r=wn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qu(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zi(t,e,n,r){return r!==null&&Du(r),Hr(e,t.child,null,n),t=Qu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ka(Error(S(422))),Zi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Rl({mode:"visible",children:r.children},s,0,null),i=qn(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Hr(e,t.child,null,o),e.child.memoizedState=Ac(o),e.memoizedState=Pc,i);if(!(e.mode&1))return Zi(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(S(419)),r=ka(i,r,void 0),Zi(t,e,o,r)}if(l=(o&t.childLanes)!==0,Be||l){if(r=ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Gt(t,s),vt(r,t,s,-1))}return td(),r=ka(Error(S(421))),Zi(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=zw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Je=gn(s.nextSibling),Xe=e,oe=!0,pt=null,t!==null&&(nt[rt++]=Dt,nt[rt++]=Mt,nt[rt++]=Yn,Dt=t.id,Mt=t.overflow,Yn=e),e=Qu(e,r.children),e.flags|=4096,e)}function df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kc(t.return,e,n)}function Ta(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Dg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Me(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,n,e);else if(t.tag===19)df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ta(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Vo(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ta(e,!0,n,null,i);break;case"together":Ta(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nw(t,e,n){switch(e.tag){case 3:Og(e),Wr();break;case 5:lg(e);break;case 1:qe(e.type)&&Do(e);break;case 4:Vu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ne(Fo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Lg(t,e,n):(ne(le,le.current&1),t=Kt(t,e,n),t!==null?t.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return Kt(t,e,n)}var Mg,Oc,jg,Fg;Mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};jg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Bn(It.current);var i=null;switch(n){case"input":s=tc(t,s),r=tc(t,r),i=[];break;case"select":s=ce({},s,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":s=sc(t,s),r=sc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oo)}oc(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qs.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qs.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&re("scroll",t),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Fg=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bw(t,e,n){var r=e.pendingProps;switch(Lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return qe(e.type)&&Lo(),Ae(e),null;case 3:return r=e.stateNode,Br(),se(Ke),se(Le),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ji(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(Vc(pt),pt=null))),Oc(t,e),Ae(e),null;case 5:$u(e);var s=Bn(oi.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ae(e),null}if(t=Bn(It.current),Ji(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[kt]=e,r[si]=i,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<Rs.length;s++)re(Rs[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":yh(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":xh(r,i),re("invalid",r)}oc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Yi(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Yi(r.textContent,l,t),s=["children",""+l]):qs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":$i(r),wh(r,i,!0);break;case"textarea":$i(r),Eh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oo)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kt]=e,t[si]=r,Mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=lc(n,r),n){case"dialog":re("cancel",t),re("close",t),s=r;break;case"iframe":case"object":case"embed":re("load",t),s=r;break;case"video":case"audio":for(s=0;s<Rs.length;s++)re(Rs[s],t);s=r;break;case"source":re("error",t),s=r;break;case"img":case"image":case"link":re("error",t),re("load",t),s=r;break;case"details":re("toggle",t),s=r;break;case"input":yh(t,r),s=tc(t,r),re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ce({},r,{value:void 0}),re("invalid",t);break;case"textarea":xh(t,r),s=sc(t,r),re("invalid",t);break;default:s=r}oc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?mm(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fm(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qs(t,a):typeof a=="number"&&Qs(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qs.hasOwnProperty(i)?a!=null&&i==="onScroll"&&re("scroll",t):a!=null&&yu(t,i,a,o))}switch(n){case"input":$i(t),wh(t,r,!1);break;case"textarea":$i(t),Eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+In(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Rr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Rr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Fg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Bn(oi.current),Bn(It.current),Ji(e)){if(r=e.stateNode,n=e.memoizedProps,r[kt]=e,(i=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:Yi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=e,e.stateNode=r}return Ae(e),null;case 13:if(se(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Je!==null&&e.mode&1&&!(e.flags&128))ng(),Wr(),e.flags|=98560,i=!1;else if(i=Ji(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(S(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[kt]=e}else Wr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),i=!1}else pt!==null&&(Vc(pt),pt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?xe===0&&(xe=3):td())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Br(),Oc(t,e),t===null&&ni(e.stateNode.containerInfo),Ae(e),null;case 10:return Fu(e.type._context),Ae(e),null;case 17:return qe(e.type)&&Lo(),Ae(e),null;case 19:if(se(le),i=e.memoizedState,i===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)xs(i,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,xs(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&me()>Kr&&(e.flags|=128,r=!0,xs(i,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!oe)return Ae(e),null}else 2*me()-i.renderingStartTime>Kr&&n!==1073741824&&(e.flags|=128,r=!0,xs(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=me(),e.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Rw(t,e){switch(Lu(e),e.tag){case 1:return qe(e.type)&&Lo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),se(Ke),se(Le),Wu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $u(e),null;case 13:if(se(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Wr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(le),null;case 4:return Br(),null;case 10:return Fu(e.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var eo=!1,Oe=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,P=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function Lc(t,e,n){try{n()}catch(r){de(t,e,r)}}var hf=!1;function Aw(t,e){if(_c=Ro,t=Wm(),Au(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===s&&(l=o),f===i&&++d===r&&(a=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:t,selectionRange:n},Ro=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ht(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){de(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=hf,hf=!1,v}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Lc(e,n,i)}s=s.next}while(s!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kt],delete e[si],delete e[xc],delete e[pw],delete e[mw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zg(t){return t.tag===5||t.tag===3||t.tag===4}function ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oo));else if(r!==4&&(t=t.child,t!==null))for(Mc(t,e,n),t=t.sibling;t!==null;)Mc(t,e,n),t=t.sibling}function jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}var Te=null,ft=!1;function Zt(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Oe||kr(n,e);case 6:var r=Te,s=ft;Te=null,Zt(t,e,n),Te=r,ft=s,Te!==null&&(ft?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ft?(t=Te,n=n.stateNode,t.nodeType===8?ya(t.parentNode,n):t.nodeType===1&&ya(t,n),Zs(t)):ya(Te,n.stateNode));break;case 4:r=Te,s=ft,Te=n.stateNode.containerInfo,ft=!0,Zt(t,e,n),Te=r,ft=s;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Lc(n,e,o),s=s.next}while(s!==r)}Zt(t,e,n);break;case 1:if(!Oe&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,e,l)}Zt(t,e,n);break;case 21:Zt(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Zt(t,e,n),Oe=r):Zt(t,e,n);break;default:Zt(t,e,n)}}function pf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Pw),e.forEach(function(r){var s=Vw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,ft=!1;break e;case 3:Te=l.stateNode.containerInfo,ft=!0;break e;case 4:Te=l.stateNode.containerInfo,ft=!0;break e}l=l.return}if(Te===null)throw Error(S(160));Vg(i,o,s),Te=null,ft=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(c){de(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),St(t),r&4){try{Us(3,t,t.return),Nl(3,t)}catch(y){de(t,t.return,y)}try{Us(5,t,t.return)}catch(y){de(t,t.return,y)}}break;case 1:dt(e,t),St(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(dt(e,t),St(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var s=t.stateNode;try{Qs(s,"")}catch(y){de(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&um(s,i),lc(l,o);var c=lc(l,i);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?mm(s,h):d==="dangerouslySetInnerHTML"?fm(s,h):d==="children"?Qs(s,h):yu(s,d,h,c)}switch(l){case"input":nc(s,i);break;case"textarea":dm(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Rr(s,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?Rr(s,!!i.multiple,i.defaultValue,!0):Rr(s,!!i.multiple,i.multiple?[]:"",!1))}s[si]=i}catch(y){de(t,t.return,y)}}break;case 6:if(dt(e,t),St(t),r&4){if(t.stateNode===null)throw Error(S(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){de(t,t.return,y)}}break;case 3:if(dt(e,t),St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(y){de(t,t.return,y)}break;case 4:dt(e,t),St(t);break;case 13:dt(e,t),St(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Xu=me())),r&4&&pf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(c=Oe)||d,dt(e,t),Oe=c):dt(e,t),St(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(h=P=d;P!==null;){switch(f=P,g=f.child,f.tag){case 0:case 11:case 14:case 15:Us(4,f,f.return);break;case 1:kr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){de(r,n,y)}}break;case 5:kr(f,f.return);break;case 22:if(f.memoizedState!==null){gf(h);continue}}g!==null?(g.return=f,P=g):gf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pm("display",o))}catch(y){de(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){de(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dt(e,t),St(t),r&4&&pf(t);break;case 21:break;default:dt(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qs(s,""),r.flags&=-33);var i=ff(t);jc(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ff(t);Mc(t,l,o);break;default:throw Error(S(161))}}catch(a){de(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ow(t,e,n){P=t,Wg(t)}function Wg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var s=P,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||eo;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=eo;var c=Oe;if(eo=o,(Oe=a)&&!c)for(P=s;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?_f(s):a!==null?(a.return=o,P=a):_f(s);for(;i!==null;)P=i,Wg(i),i=i.sibling;P=s,eo=l,Oe=c}mf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,P=i):mf(t)}}function mf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ht(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Xh(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Zs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Oe||e.flags&512&&Dc(e)}catch(f){de(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function gf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function _f(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){de(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){de(e,s,a)}}var i=e.return;try{Dc(e)}catch(a){de(e,i,a)}break;case 5:var o=e.return;try{Dc(e)}catch(a){de(e,o,a)}}}catch(a){de(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var Lw=Math.ceil,Ho=Jt.ReactCurrentDispatcher,Yu=Jt.ReactCurrentOwner,ot=Jt.ReactCurrentBatchConfig,K=0,ke=null,_e=null,Ne=0,Ye=0,Tr=On(0),xe=0,ui=null,Xn=0,bl=0,Ju=0,zs=null,We=null,Xu=0,Kr=1/0,Ot=null,Bo=!1,Fc=null,vn=null,to=!1,dn=null,Go=0,Vs=0,Uc=null,go=-1,_o=0;function Fe(){return K&6?me():go!==-1?go:go=me()}function yn(t){return t.mode&1?K&2&&Ne!==0?Ne&-Ne:_w.transition!==null?(_o===0&&(_o=Im()),_o):(t=J,t!==0||(t=window.event,t=t===void 0?16:Lm(t.type)),t):1}function vt(t,e,n,r){if(50<Vs)throw Vs=0,Uc=null,Error(S(185));ki(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(bl|=n),xe===4&&sn(t,Ne)),Qe(t,r),n===1&&K===0&&!(e.mode&1)&&(Kr=me()+500,kl&&Ln()))}function Qe(t,e){var n=t.callbackNode;_0(t,e);var r=bo(t,t===ke?Ne:0);if(r===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?gw(vf.bind(null,t)):Zm(vf.bind(null,t)),hw(function(){!(K&6)&&Ln()}),n=null;else{switch(Nm(r)){case 1:n=Cu;break;case 4:n=km;break;case 16:n=No;break;case 536870912:n=Tm;break;default:n=No}n=Jg(n,Hg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hg(t,e){if(go=-1,_o=0,K&6)throw Error(S(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=bo(t,t===ke?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ko(t,r);else{e=r;var s=K;K|=2;var i=Gg();(ke!==t||Ne!==e)&&(Ot=null,Kr=me()+500,Kn(t,e));do try{jw();break}catch(l){Bg(t,l)}while(!0);ju(),Ho.current=i,K=s,_e!==null?e=0:(ke=null,Ne=0,e=xe)}if(e!==0){if(e===2&&(s=hc(t),s!==0&&(r=s,e=zc(t,s))),e===1)throw n=ui,Kn(t,0),sn(t,r),Qe(t,me()),n;if(e===6)sn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Dw(s)&&(e=Ko(t,r),e===2&&(i=hc(t),i!==0&&(r=i,e=zc(t,i))),e===1))throw n=ui,Kn(t,0),sn(t,r),Qe(t,me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:zn(t,We,Ot);break;case 3:if(sn(t,r),(r&130023424)===r&&(e=Xu+500-me(),10<e)){if(bo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=wc(zn.bind(null,t,We,Ot),e);break}zn(t,We,Ot);break;case 4:if(sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-_t(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lw(r/1960))-r,10<r){t.timeoutHandle=wc(zn.bind(null,t,We,Ot),r);break}zn(t,We,Ot);break;case 5:zn(t,We,Ot);break;default:throw Error(S(329))}}}return Qe(t,me()),t.callbackNode===n?Hg.bind(null,t):null}function zc(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(Kn(t,e).flags|=256),t=Ko(t,e),t!==2&&(e=We,We=n,e!==null&&Vc(e)),t}function Vc(t){We===null?We=t:We.push.apply(We,t)}function Dw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!wt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sn(t,e){for(e&=~Ju,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function vf(t){if(K&6)throw Error(S(327));Dr();var e=bo(t,0);if(!(e&1))return Qe(t,me()),null;var n=Ko(t,e);if(t.tag!==0&&n===2){var r=hc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=ui,Kn(t,0),sn(t,e),Qe(t,me()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,We,Ot),Qe(t,me()),null}function Zu(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Kr=me()+500,kl&&Ln())}}function Zn(t){dn!==null&&dn.tag===0&&!(K&6)&&Dr();var e=K;K|=1;var n=ot.transition,r=J;try{if(ot.transition=null,J=1,t)return t()}finally{J=r,ot.transition=n,K=e,!(K&6)&&Ln()}}function ed(){Ye=Tr.current,se(Tr)}function Kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dw(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Br(),se(Ke),se(Le),Wu();break;case 5:$u(r);break;case 4:Br();break;case 13:se(le);break;case 19:se(le);break;case 10:Fu(r.type._context);break;case 22:case 23:ed()}n=n.return}if(ke=t,_e=t=wn(t.current,null),Ne=Ye=e,xe=0,ui=null,Ju=bl=Xn=0,We=zs=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Hn=null}return t}function Bg(t,e){do{var n=_e;try{if(ju(),fo.current=Wo,$o){for(var r=ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}$o=!1}if(Jn=0,Se=ve=ae=null,Fs=!1,li=0,Yu.current=null,n===null||n.return===null){xe=1,ui=e,_e=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=sf(o);if(g!==null){g.flags&=-257,of(g,o,l,i,e),g.mode&1&&rf(i,c,e),e=g,a=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){rf(i,c,e),td();break e}a=Error(S(426))}}else if(oe&&l.mode&1){var w=sf(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),of(w,o,l,i,e),Du(Gr(a,l));break e}}i=a=Gr(a,l),xe!==4&&(xe=2),zs===null?zs=[i]:zs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Ng(i,a,e);Jh(i,m);break e;case 1:l=a;var p=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(vn===null||!vn.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=bg(i,l,e);Jh(i,x);break e}}i=i.return}while(i!==null)}qg(n)}catch(C){e=C,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Gg(){var t=Ho.current;return Ho.current=Wo,t===null?Wo:t}function td(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(Xn&268435455)&&!(bl&268435455)||sn(ke,Ne)}function Ko(t,e){var n=K;K|=2;var r=Gg();(ke!==t||Ne!==e)&&(Ot=null,Kn(t,e));do try{Mw();break}catch(s){Bg(t,s)}while(!0);if(ju(),K=n,Ho.current=r,_e!==null)throw Error(S(261));return ke=null,Ne=0,xe}function Mw(){for(;_e!==null;)Kg(_e)}function jw(){for(;_e!==null&&!a0();)Kg(_e)}function Kg(t){var e=Yg(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?qg(t):_e=e,Yu.current=null}function qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rw(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,_e=null;return}}else if(n=bw(n,e,Ye),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);xe===0&&(xe=5)}function zn(t,e,n){var r=J,s=ot.transition;try{ot.transition=null,J=1,Fw(t,e,n,r)}finally{ot.transition=s,J=r}return null}function Fw(t,e,n,r){do Dr();while(dn!==null);if(K&6)throw Error(S(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(v0(t,i),t===ke&&(_e=ke=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Jg(No,function(){return Dr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var o=J;J=1;var l=K;K|=4,Yu.current=null,Aw(t,n),$g(n,t),sw(vc),Ro=!!_c,vc=_c=null,t.current=n,Ow(n),c0(),K=l,J=o,ot.transition=i}else t.current=n;if(to&&(to=!1,dn=t,Go=s),i=t.pendingLanes,i===0&&(vn=null),h0(n.stateNode),Qe(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Bo)throw Bo=!1,t=Fc,Fc=null,t;return Go&1&&t.tag!==0&&Dr(),i=t.pendingLanes,i&1?t===Uc?Vs++:(Vs=0,Uc=t):Vs=0,Ln(),null}function Dr(){if(dn!==null){var t=Nm(Go),e=ot.transition,n=J;try{if(ot.transition=null,J=16>t?16:t,dn===null)var r=!1;else{if(t=dn,dn=null,Go=0,K&6)throw Error(S(331));var s=K;for(K|=4,P=t.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Us(8,d,i)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var f=d.sibling,g=d.return;if(Ug(d),d===c){P=null;break}if(f!==null){f.return=g,P=f;break}P=g}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Us(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,P=m;break e}P=i.return}}var p=t.current;for(P=p;P!==null;){o=P;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,P=_;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(C){de(l,l.return,C)}if(l===o){P=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,P=x;break e}P=l.return}}if(K=s,Ln(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{J=n,ot.transition=e}}return!1}function yf(t,e,n){e=Gr(n,e),e=Ng(t,e,1),t=_n(t,e,1),e=Fe(),t!==null&&(ki(t,1,e),Qe(t,e))}function de(t,e,n){if(t.tag===3)yf(t,t,n);else for(;e!==null;){if(e.tag===3){yf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=Gr(n,t),t=bg(e,t,1),e=_n(e,t,1),t=Fe(),e!==null&&(ki(e,1,t),Qe(e,t));break}}e=e.return}}function Uw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Ne&n)===n&&(xe===4||xe===3&&(Ne&130023424)===Ne&&500>me()-Xu?Kn(t,0):Ju|=n),Qe(t,e)}function Qg(t,e){e===0&&(t.mode&1?(e=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):e=1);var n=Fe();t=Gt(t,e),t!==null&&(ki(t,e,n),Qe(t,n))}function zw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qg(t,n)}function Vw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Qg(t,n)}var Yg;Yg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Be=!1,Nw(t,e,n);Be=!!(t.flags&131072)}else Be=!1,oe&&e.flags&1048576&&eg(e,jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mo(t,e),t=e.pendingProps;var s=$r(e,Le.current);Lr(e,n),s=Bu(null,e,r,t,s,n);var i=Gu();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(i=!0,Do(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zu(e),s.updater=Il,e.stateNode=s,s._reactInternals=e,Ic(e,r,t,n),e=Rc(null,e,r,!0,i,n)):(e.tag=0,oe&&i&&Ou(e),Me(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Ww(r),t=ht(r,t),s){case 0:e=bc(null,e,r,t,n);break e;case 1:e=cf(null,e,r,t,n);break e;case 11:e=lf(null,e,r,t,n);break e;case 14:e=af(null,e,r,ht(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ht(r,s),bc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ht(r,s),cf(t,e,r,s,n);case 3:e:{if(Og(e),t===null)throw Error(S(387));r=e.pendingProps,i=e.memoizedState,s=i.element,og(t,e),zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Gr(Error(S(423)),e),e=uf(t,e,r,n,s);break e}else if(r!==s){s=Gr(Error(S(424)),e),e=uf(t,e,r,n,s);break e}else for(Je=gn(e.stateNode.containerInfo.firstChild),Xe=e,oe=!0,pt=null,n=sg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===s){e=Kt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return lg(e),t===null&&Cc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,yc(r,s)?o=null:i!==null&&yc(r,i)&&(e.flags|=32),Ag(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&Cc(e),null;case 13:return Lg(t,e,n);case 4:return Vu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hr(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ht(r,s),lf(t,e,r,s,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ne(Fo,r._currentValue),r._currentValue=o,i!==null)if(wt(i.value,o)){if(i.children===s.children&&!Ke.current){e=Kt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=$t(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),kc(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Me(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Lr(e,n),s=lt(s),r=r(s),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,s=ht(r,e.pendingProps),s=ht(r.type,s),af(t,e,r,s,n);case 15:return Rg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ht(r,s),mo(t,e),e.tag=1,qe(r)?(t=!0,Do(e)):t=!1,Lr(e,n),Ig(e,r,s),Ic(e,r,s,n),Rc(null,e,r,!0,t,n);case 19:return Dg(t,e,n);case 22:return Pg(t,e,n)}throw Error(S(156,e.tag))};function Jg(t,e){return Cm(t,e)}function $w(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,n,r){return new $w(t,e,n,r)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xu)return 11;if(t===Eu)return 14}return 2}function wn(t,e){var n=t.alternate;return n===null?(n=st(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return qn(n.children,s,i,e);case wu:o=8,s|=8;break;case Ja:return t=st(12,n,e,s|2),t.elementType=Ja,t.lanes=i,t;case Xa:return t=st(13,n,e,s),t.elementType=Xa,t.lanes=i,t;case Za:return t=st(19,n,e,s),t.elementType=Za,t.lanes=i,t;case lm:return Rl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case im:o=10;break e;case om:o=9;break e;case xu:o=11;break e;case Eu:o=14;break e;case tn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=st(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qn(t,e,n,r){return t=st(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=st(22,t,r,e),t.elementType=lm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ia(t,e,n){return t=st(6,t,null,e),t.lanes=n,t}function Na(t,e,n){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function rd(t,e,n,r,s,i,o,l,a){return t=new Hw(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=st(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(i),t}function Bw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xg(t){if(!t)return Nn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(qe(n))return Xm(t,n,e)}return e}function Zg(t,e,n,r,s,i,o,l,a){return t=rd(n,r,!0,t,s,i,o,l,a),t.context=Xg(null),n=t.current,r=Fe(),s=yn(n),i=$t(r,s),i.callback=e??null,_n(n,i,s),t.current.lanes=s,ki(t,s,r),Qe(t,r),t}function Pl(t,e,n,r){var s=e.current,i=Fe(),o=yn(s);return n=Xg(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_n(s,e,o),t!==null&&(vt(t,s,o,i),ho(t,s,o)),o}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sd(t,e){wf(t,e),(t=t.alternate)&&wf(t,e)}function Gw(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function id(t){this._internalRoot=t}Al.prototype.render=id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Pl(t,e,null,null)};Al.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){Pl(null,t,null,null)}),e[Bt]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rn.length&&e!==0&&e<rn[n].priority;n++);rn.splice(n,0,t),n===0&&Om(t)}};function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xf(){}function Kw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=qo(o);i.call(c)}}var o=Zg(e,r,t,0,null,!1,!1,"",xf);return t._reactRootContainer=o,t[Bt]=o.current,ni(t.nodeType===8?t.parentNode:t),Zn(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=qo(a);l.call(c)}}var a=rd(t,0,!1,null,null,!1,!1,"",xf);return t._reactRootContainer=a,t[Bt]=a.current,ni(t.nodeType===8?t.parentNode:t),Zn(function(){Pl(e,a,n,r)}),a}function Ll(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=qo(o);l.call(a)}}Pl(e,o,t,s)}else o=Kw(n,e,t,s,r);return qo(o)}bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bs(e.pendingLanes);n!==0&&(ku(e,n|1),Qe(e,me()),!(K&6)&&(Kr=me()+500,Ln()))}break;case 13:Zn(function(){var r=Gt(t,1);if(r!==null){var s=Fe();vt(r,t,1,s)}}),sd(t,1)}};Tu=function(t){if(t.tag===13){var e=Gt(t,134217728);if(e!==null){var n=Fe();vt(e,t,134217728,n)}sd(t,134217728)}};Rm=function(t){if(t.tag===13){var e=yn(t),n=Gt(t,e);if(n!==null){var r=Fe();vt(n,t,e,r)}sd(t,e)}};Pm=function(){return J};Am=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};cc=function(t,e,n){switch(e){case"input":if(nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Cl(r);if(!s)throw Error(S(90));cm(r),nc(r,s)}}}break;case"textarea":dm(t,n);break;case"select":e=n.value,e!=null&&Rr(t,!!n.multiple,e,!1)}};vm=Zu;ym=Zn;var qw={usingClientEntryPoint:!1,Events:[Ii,wr,Cl,gm,_m,Zu]},Es={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Em(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{wl=no.inject(Qw),Tt=no}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(e))throw Error(S(200));return Bw(t,e,null,n)};et.createRoot=function(t,e){if(!od(t))throw Error(S(299));var n=!1,r="",s=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=rd(t,1,!1,null,null,n,!1,r,s),t[Bt]=e.current,ni(t.nodeType===8?t.parentNode:t),new id(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Em(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return Zn(t)};et.hydrate=function(t,e,n){if(!Ol(e))throw Error(S(200));return Ll(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!od(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=e_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zg(e,null,t,1,n??null,s,!1,i,o),t[Bt]=e.current,ni(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Al(e)};et.render=function(t,e,n){if(!Ol(e))throw Error(S(200));return Ll(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(S(40));return t._reactRootContainer?(Zn(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Bt]=null})}),!0):!1};et.unstable_batchedUpdates=Zu;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Ll(t,e,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),tm.exports=et;var Yw=tm.exports,n_,Ef=Yw;n_=Ef.createRoot,Ef.hydrateRoot;const Jw={},Sf=t=>{let e;const n=new Set,r=(d,h)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const g=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(v=>v(e,g))}},s=()=>e,a={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Jw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,a);return a},Xw=t=>t?Sf(t):Sf;var r_={exports:{}},s_={},i_={exports:{}},o_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=L;function Zw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ex=typeof Object.is=="function"?Object.is:Zw,tx=qr.useState,nx=qr.useEffect,rx=qr.useLayoutEffect,sx=qr.useDebugValue;function ix(t,e){var n=e(),r=tx({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return rx(function(){s.value=n,s.getSnapshot=e,ba(s)&&i({inst:s})},[t,n,e]),nx(function(){return ba(s)&&i({inst:s}),t(function(){ba(s)&&i({inst:s})})},[t]),sx(n),n}function ba(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ex(t,n)}catch{return!0}}function ox(t,e){return e()}var lx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ox:ix;o_.useSyncExternalStore=qr.useSyncExternalStore!==void 0?qr.useSyncExternalStore:lx;i_.exports=o_;var ax=i_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=L,cx=ax;function ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dx=typeof Object.is=="function"?Object.is:ux,hx=cx.useSyncExternalStore,fx=Dl.useRef,px=Dl.useEffect,mx=Dl.useMemo,gx=Dl.useDebugValue;s_.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=fx(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=mx(function(){function a(g){if(!c){if(c=!0,d=g,g=r(g),s!==void 0&&o.hasValue){var v=o.value;if(s(v,g))return h=v}return h=g}if(v=h,dx(d,g))return v;var y=r(g);return s!==void 0&&s(v,y)?(d=g,v):(d=g,h=y)}var c=!1,d,h,f=n===void 0?null:n;return[function(){return a(e())},f===null?void 0:function(){return a(f())}]},[e,n,r,s]);var l=hx(t,i[0],i[1]);return px(function(){o.hasValue=!0,o.value=l},[l]),gx(l),l};r_.exports=s_;var _x=r_.exports;const vx=Wp(_x),l_={},{useDebugValue:yx}=Uy,{useSyncExternalStoreWithSelector:wx}=vx;let Cf=!1;const xx=t=>t;function Ex(t,e=xx,n){(l_?"production":void 0)!=="production"&&n&&!Cf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Cf=!0);const r=wx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return yx(r),r}const kf=t=>{(l_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Xw(t):t,n=(r,s)=>Ex(e,r,s);return Object.assign(n,e),n},Sx=t=>t?kf(t):kf;var Tf={};/**
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
 */const a_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw os(e)},os=function(t){return new Error("Firebase Database ("+a_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const c_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),r.push(n[d],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||h==null)throw new kx;const f=i<<2|l>>4;if(r.push(f),c!==64){const g=l<<4&240|c>>2;if(r.push(g),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u_=function(t){const e=c_(t);return ld.encodeByteArray(e,!0)},Qo=function(t){return u_(t).replace(/\./g,"")},Yo=function(t){try{return ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tx(t){return d_(void 0,t)}function d_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ix(n)||(t[n]=d_(t[n],e[n]));return t}function Ix(t){return t!=="__proto__"}/**
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
 */function Nx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bx=()=>Nx().__FIREBASE_DEFAULTS__,Rx=()=>{if(typeof process>"u"||typeof Tf>"u")return;const t=Tf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Px=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yo(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return bx()||Rx()||Px()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},h_=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ax=t=>{const e=h_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f_=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config},p_=t=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ox(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Lx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mx(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jx(){return a_.NODE_ADMIN===!0}function Fx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ux(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zx="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zx,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vx(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,l,r)}}function Vx(t,e){return t.replace($x,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $x=/\{\$([^}]+)}/g;/**
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
 */function di(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const g_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=di(Yo(i[0])||""),n=di(Yo(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Wx=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Hx=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $c(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(If(i)&&If(o)){if(!Xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
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
 */function ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Bx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=l^i&(o^l),d=1518500249):(c=i^o^l,d=1859775393):h<60?(c=i&o|l&(i|o),d=2400959708):(c=i^o^l,d=3395469782);const f=(s<<5|s>>>27)+c+a+d+r[h]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Gx(t,e){const n=new Kx(t,e);return n.subscribe.bind(n)}class Kx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ra),s.error===void 0&&(s.error=Ra),s.complete===void 0&&(s.complete=Ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ra(){}function Ml(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Qx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class Yx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xx(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jx(t){return t===Vn?void 0:t}function Xx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const eE={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},tE=X.INFO,nE={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},rE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=tE,this._logHandler=rE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const sE=(t,e)=>e.some(n=>t instanceof n);let Nf,bf;function iE(){return Nf||(Nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oE(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,Wc=new WeakMap,v_=new WeakMap,Pa=new WeakMap,dd=new WeakMap;function lE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),dd.set(e,t),e}function aE(t){if(Wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||v_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cE(t){Hc=t(Hc)}function uE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Aa(this),e,...n);return v_.set(r,e.sort?e.sort():[e]),xn(r)}:oE().includes(t)?function(...e){return t.apply(Aa(this),e),xn(__.get(this))}:function(...e){return xn(t.apply(Aa(this),e))}}function dE(t){return typeof t=="function"?uE(t):(t instanceof IDBTransaction&&aE(t),sE(t,iE())?new Proxy(t,Hc):t)}function xn(t){if(t instanceof IDBRequest)return lE(t);if(Pa.has(t))return Pa.get(t);const e=dE(t);return e!==t&&(Pa.set(t,e),dd.set(e,t)),e}const Aa=t=>dd.get(t);function hE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=xn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(xn(o.result),a.oldVersion,a.newVersion,xn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const fE=["get","getKey","getAll","getAllKeys","count"],pE=["put","add","delete","clear"],Oa=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fE.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Oa.set(e,i),i}cE(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
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
 */class mE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",Pf="0.10.13";/**
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
 */const qt=new ud("@firebase/app"),_E="@firebase/app-compat",vE="@firebase/analytics-compat",yE="@firebase/analytics",wE="@firebase/app-check-compat",xE="@firebase/app-check",EE="@firebase/auth",SE="@firebase/auth-compat",CE="@firebase/database",kE="@firebase/data-connect",TE="@firebase/database-compat",IE="@firebase/functions",NE="@firebase/functions-compat",bE="@firebase/installations",RE="@firebase/installations-compat",PE="@firebase/messaging",AE="@firebase/messaging-compat",OE="@firebase/performance",LE="@firebase/performance-compat",DE="@firebase/remote-config",ME="@firebase/remote-config-compat",jE="@firebase/storage",FE="@firebase/storage-compat",UE="@firebase/firestore",zE="@firebase/vertexai-preview",VE="@firebase/firestore-compat",$E="firebase",WE="10.14.1";/**
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
 */const Gc="[DEFAULT]",HE={[Bc]:"fire-core",[_E]:"fire-core-compat",[yE]:"fire-analytics",[vE]:"fire-analytics-compat",[xE]:"fire-app-check",[wE]:"fire-app-check-compat",[EE]:"fire-auth",[SE]:"fire-auth-compat",[CE]:"fire-rtdb",[kE]:"fire-data-connect",[TE]:"fire-rtdb-compat",[IE]:"fire-fn",[NE]:"fire-fn-compat",[bE]:"fire-iid",[RE]:"fire-iid-compat",[PE]:"fire-fcm",[AE]:"fire-fcm-compat",[OE]:"fire-perf",[LE]:"fire-perf-compat",[DE]:"fire-rc",[ME]:"fire-rc-compat",[jE]:"fire-gcs",[FE]:"fire-gcs-compat",[UE]:"fire-fst",[VE]:"fire-fst-compat",[zE]:"fire-vertex","fire-js":"fire-js",[$E]:"fire-js-all"};/**
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
 */const Zo=new Map,BE=new Map,Kc=new Map;function Af(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(Kc.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of Zo.values())Af(n,t);for(const n of BE.values())Af(n,t);return!0}function hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t.settings!==void 0}/**
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
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new Ri("app","Firebase",GE);/**
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
 */class KE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const as=WE;function y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=f_()),!n)throw En.create("no-options");const i=Zo.get(s);if(i){if(Xo(n,i.options)&&Xo(r,i.config))return i;throw En.create("duplicate-app",{appName:s})}const o=new Zx(s);for(const a of Kc.values())o.addComponent(a);const l=new KE(n,r,o);return Zo.set(s,l),l}function w_(t=Gc){const e=Zo.get(t);if(!e&&t===Gc&&f_())return y_();if(!e)throw En.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let s=(r=HE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}Yr(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const qE="firebase-heartbeat-database",QE=1,hi="firebase-heartbeat-store";let La=null;function x_(){return La||(La=hE(qE,QE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),La}async function YE(t){try{const n=(await x_()).transaction(hi),r=await n.objectStore(hi).get(E_(t));return await n.done,r}catch(e){if(e instanceof Dn)qt.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Of(t,e){try{const r=(await x_()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,E_(t)),await r.done}catch(n){if(n instanceof Dn)qt.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function E_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JE=1024,XE=30*24*60*60*1e3;class ZE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=XE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lf(),{heartbeatsToSend:r,unsentEntries:s}=eS(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qt.warn(n),""}}}function Lf(){return new Date().toISOString().substring(0,10)}function eS(t,e=JE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fx()?Ux().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Df(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nS(t){Yr(new er("platform-logger",e=>new mE(e),"PRIVATE")),Yr(new er("heartbeat",e=>new ZE(e),"PRIVATE")),Sn(Bc,Pf,t),Sn(Bc,Pf,"esm2017"),Sn("fire-js","")}nS("");var rS="firebase",sS="10.14.1";/**
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
 */Sn(rS,sS,"app");var Mf={};const jf="@firebase/database",Ff="1.0.8";/**
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
 */let S_="";function iS(t){S_=t}/**
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
 */class oS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:di(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const C_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oS(e)}}catch{}return new lS},Gn=C_("localStorage"),aS=C_("sessionStorage");/**
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
 */const Mr=new ud("@firebase/database"),cS=function(){let t=1;return function(){return t++}}(),k_=function(t){const e=Qx(t),n=new Bx;n.update(e);const r=n.digest();return ld.encodeByteArray(r)},Pi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pi.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let $s=null,Uf=!0;const uS=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Mr.logLevel=X.VERBOSE,$s=Mr.log.bind(Mr)},Ie=function(...t){if(Uf===!0&&(Uf=!1,$s===null&&aS.get("logging_enabled")===!0&&uS()),$s){const e=Pi.apply(null,t);$s(e)}},Ai=function(t){return function(...e){Ie(t,...e)}},qc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pi(...t);Mr.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Pi(...t)}`;throw Mr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Pi(...t);Mr.warn(e)},dS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jr="[MIN_NAME]",tr="[MAX_NAME]",cr=function(t,e){if(t===e)return 0;if(t===Jr||e===tr)return-1;if(e===Jr||t===tr)return 1;{const n=zf(t),r=zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},fS=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},pd=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=pd(t[e[r]]);return n+="}",n},T_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const I_=function(t){k(!fd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},pS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _S=new RegExp("^-?(0*)\\d{1,10}$"),vS=-2147483648,yS=2147483647,zf=function(t){if(_S.test(t)){const e=Number(t);if(e>=vS&&e<=yS)return e}return null},cs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},wS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ES{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class yo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yo.OWNER="owner";/**
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
 */const md="5",N_="v",b_="s",R_="r",P_="f",A_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,O_="ls",L_="p",Qc="ac",D_="websocket",M_="long_polling";/**
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
 */class j_{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function SS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function F_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===D_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===M_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SS(t)&&(n.ns=t.namespace);const s=[];return Re(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class CS{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tx(this.counters_)}}/**
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
 */const Da={},Ma={};function gd(t){const e=t.toString();return Da[e]||(Da[e]=new CS),Da[e]}function kS(t,e){const n=t.toString();return Ma[n]||(Ma[n]=e()),Ma[n]}/**
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
 */class TS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&cs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vf="start",IS="close",NS="pLPCommand",bS="pRTLPCB",U_="id",z_="pw",V_="ser",RS="cb",PS="seg",AS="ts",OS="d",LS="dframe",$_=1870,W_=30,DS=$_-W_,MS=25e3,jS=3e4;class Ir{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ai(e),this.stats_=gd(n),this.urlFn=a=>(this.appCheckToken&&(a[Qc]=this.appCheckToken),F_(n,M_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jS)),hS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _d((...i)=>{const[o,l,a,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vf)this.id=l,this.password=a;else if(o===IS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vf]="t",r[V_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[N_]=md,this.transportSessionId&&(r[b_]=this.transportSessionId),this.lastSessionId&&(r[O_]=this.lastSessionId),this.applicationId&&(r[L_]=this.applicationId),this.appCheckToken&&(r[Qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&A_.test(location.hostname)&&(r[R_]=P_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ir.forceAllow_=!0}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){return Ir.forceAllow_?!0:!Ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pS()&&!mS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=u_(n),s=T_(r,DS);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LS]="t",r[U_]=e,r[z_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _d{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cS(),window[NS+this.uniqueCallbackIdentifier]=e,window[bS+this.uniqueCallbackIdentifier]=n,this.myIFrame=_d.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[U_]=this.myID,e[z_]=this.myPW,e[V_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+W_+r.length<=$_;){const o=this.pendingSegs.shift();r=r+"&"+PS+s+"="+o.seg+"&"+AS+s+"="+o.ts+"&"+OS+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(MS)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const FS=16384,US=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class mt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ai(this.connId),this.stats_=gd(n),this.connURL=mt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[N_]=md,typeof location<"u"&&location.hostname&&A_.test(location.hostname)&&(o[R_]=P_),n&&(o[b_]=n),r&&(o[O_]=r),s&&(o[Qc]=s),i&&(o[L_]=i),F_(e,D_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;jx(),this.mySock=new el(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&el!==null&&!mt.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=di(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=T_(n,FS);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(US))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ir,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const s=this.transports_=[];for(const i of fi.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fi.globalTransportInitialized_=!1;/**
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
 */const zS=6e4,VS=5e3,$S=10*1024,WS=100*1024,ja="t",$f="d",HS="s",Wf="r",BS="e",Hf="o",Bf="a",Gf="n",Kf="p",GS="h";class KS{constructor(e,n,r,s,i,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ai("c:"+this.id+":"),this.transportManager_=new fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$S?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ja in e){const n=e[ja];n===Bf?this.upgradeIfSecondaryHealthy_():n===Wf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(ja,e);if($f in e){const r=e[$f];if(n===GS){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Gf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===HS?this.onConnectionShutdown_(r):n===Wf?this.onReset_(r):n===BS?qc("Server Error: "+r):n===Hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),md!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class H_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class B_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class tl extends B_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tl}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qf=32,Qf=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new Z("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function vd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function G_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function he(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Z)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Z(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=V(t),r=V(e);if(n===null)return e;if(n===r)return je(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QS(t,e){const n=pi(t,0),r=pi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=cr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function yd(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class YS{constructor(e,n){this.errorPrefix_=n,this.parts_=pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jl(this.parts_[r]);K_(this)}}function JS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jl(e),K_(t)}function XS(t){const e=t.parts_.pop();t.byteLength_-=jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function K_(t){if(t.byteLength_>Qf)throw new Error(t.errorPrefix_+"has a key path longer than "+Qf+" bytes ("+t.byteLength_+").");if(t.parts_.length>qf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qf+") or object contains a cycle "+$n(t))}function $n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wd extends B_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Cs=1e3,ZS=60*5*1e3,Yf=30*1e3,eC=1.3,tC=3e4,nC="server_kill",Jf=3;class Wt extends H_{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=Ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=ZS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(we(i)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new bi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,c=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=Qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Wx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):qc("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tC&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Wt.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(h){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new KS(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ue(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(nC)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ue(h),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$c(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>pd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Z(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+S_.replace(/\./g,"-")]=1,cd()?e["framework.cordova"]=1:m_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return $c(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class Fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(Jr,e),s=new $(Jr,n);return this.compare(r,s)!==0}minPost(){return $.MIN}}/**
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
 */let ro;class q_ extends Fl{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(e){ro=e}compare(e,n){return cr(e.name,n.name)}isDefinedOn(e){throw os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(tr,ro)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,ro)}toString(){return".key"}}const jr=new q_;/**
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
 */class so{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=s??Ge.EMPTY_NODE,this.right=i??Ge.EMPTY_NODE}copy(e,n,r,s,i){return new Ce(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class rC{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new rC;/**
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
 */function sC(t,e){return cr(t.name,e.name)}function xd(t,e){return cr(t,e)}/**
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
 */let Yc;function iC(t){Yc=t}const Q_=function(t){return typeof t=="number"?"number:"+I_(t):"string:"+t},Y_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else k(t===Yc||t.isEmpty(),"priority of unexpected type.");k(t===Yc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Xf;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y_(this.priorityNode_)}static set __childrenNodeConstructor(e){Xf=e}static get __childrenNodeConstructor(){return Xf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:V(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=V(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Q_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=I_(this.value_):e+=this.value_,this.lazyHash_=k_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ee.VALUE_TYPE_ORDER.indexOf(n),i=Ee.VALUE_TYPE_ORDER.indexOf(r);return k(s>=0,"Unknown leaf type: "+n),k(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let J_,X_;function oC(t){J_=t}function lC(t){X_=t}class aC extends Fl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?cr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(tr,new Ee("[PRIORITY-POST]",X_))}makePost(e,n){const r=J_(e);return new $(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new aC;/**
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
 */const cC=Math.log(2);class uC{constructor(e){const n=i=>parseInt(Math.log(i)/cC,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(t,e,n,r){t.sort(e);const s=function(a,c){const d=c-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const g=parseInt(d/2,10)+a,v=s(a,g),y=s(g+1,c);return h=t[g],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,v,y)}},i=function(a){let c=null,d=null,h=t.length;const f=function(v,y){const w=h-v,m=h;h-=v;const p=s(w+1,m),_=t[w],x=n?n(_):_;g(new Ce(x,_.node,y,null,p))},g=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),w=Math.pow(2,a.count-(v+1));y?f(w,Ce.BLACK):(f(w,Ce.BLACK),f(w,Ce.RED))}return d},o=new uC(t.length),l=i(o);return new Ge(r||e,l)};/**
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
 */let Fa;const pr={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(pr&&fe,"ChildrenNode.ts has not been loaded"),Fa=Fa||new Ft({".priority":pr},{".priority":fe}),Fa}get(e){const n=Qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator($.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=nl(r,e.getCompare()):l=pr;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ft(d,c)}addToIndexes(e,n){const r=Jo(this.indexes_,(s,i)=>{const o=Qr(this.indexSet_,i);if(k(o,"Missing index implementation for "+i),s===pr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator($.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),nl(l,o.getCompare())}else return pr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new $(e.name,l))),a.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,s=>{if(s===pr)return s;{const i=n.get(e.name);return i?s.remove(new $(e.name,i)):s}});return new Ft(r,this.indexSet_)}}/**
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
 */let ks;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Y_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ks||(ks=new M(new Ge(xd),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ks}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ks:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ks:this.priorityNode_;return new M(s,o,i)}}updateChild(e,n){const r=V(e);if(r===null)return n;{k(V(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(te(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,i&&M.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Q_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":k_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new $(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,$.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oi?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),s=n.getIterator(fe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dC extends M{constructor(){super(new Ge(xd),M.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Oi=new dC;Object.defineProperties($,{MIN:{value:new $(Jr,M.EMPTY_NODE)},MAX:{value:new $(tr,Oi)}});q_.__EMPTY_NODE=M.EMPTY_NODE;Ee.__childrenNodeConstructor=M;iC(Oi);lC(Oi);/**
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
 */const hC=!0;function ye(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ye(e))}if(!(t instanceof Array)&&hC){const n=[];let r=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new $(o,a)))}}),n.length===0)return M.EMPTY_NODE;const i=nl(n,sC,o=>o.name,xd);if(r){const o=nl(n,fe.getCompare());return new M(i,ye(e),new Ft({".priority":o},{".priority":fe}))}else return new M(i,ye(e),Ft.Default)}else{let n=M.EMPTY_NODE;return Re(t,(r,s)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const i=ye(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ye(e))}}oC(ye);/**
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
 */class fC extends Fl{constructor(e){super(),this.indexPath_=e,k(!W(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?cr(e.name,n.name):i}makePost(e,n){const r=ye(e),s=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,s)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Oi);return new $(tr,e)}toString(){return pi(this.indexPath_,0).join("/")}}/**
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
 */class pC extends Fl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=ye(e);return new $(n,r)}toString(){return".value"}}const mC=new pC;/**
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
 */function Z_(t){return{type:"value",snapshotNode:t}}function Xr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ed{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(mi(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Xr(n,r)):o.trackChildChange(gi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(s,i)=>{n.hasChild(s)||r.trackChildChange(mi(s,i))}),n.isLeafNode()||n.forEachChild(fe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(gi(s,i,o))}else r.trackChildChange(Xr(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _i{constructor(e){this.indexedFilter_=new Ed(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_i.getStartPost_(e),this.endPost_=_i.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new $(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(M.EMPTY_NODE);const i=this;return n.forEachChild(fe,(o,l)=>{i.matches(new $(o,l))||(s=s.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class _C{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _i(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new $(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=M.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(M.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new $(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(d&&!r.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(gi(n,r,h)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(mi(n,h));const y=l.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Xr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,a)>=0?(i!=null&&(i.trackChildChange(mi(c.name,c.node)),i.trackChildChange(Xr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vC(t){return t.loadsAllData()?new Ed(t.getIndex()):t.hasLimit()?new _C(t):new _i(t)}function Zf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===mC?n="$value":t.index_===jr?n="$key":(k(t.index_ instanceof fC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ep(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class rl extends H_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ai("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=rl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Zf(e._queryParams);this.restRequest_(i+".json",a,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Qr(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=rl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Zf(e._queryParams),r=e._path.toString(),s=new bi;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ls(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=di(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class yC{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function sl(){return{value:null,children:new Map}}function ev(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=V(e);t.children.has(r)||t.children.set(r,sl());const s=t.children.get(r);e=te(e),ev(s,e,n)}}function Jc(t,e,n){t.value!==null?n(e,t.value):wC(t,(r,s)=>{const i=new Z(e.toString()+"/"+r);Jc(s,i,n)})}function wC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class xC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const tp=10*1e3,EC=30*1e3,SC=5*60*1e3;class CC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xC(e);const r=tp+(EC-tp)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(s,i)=>{i>0&&Rt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*SC))}}/**
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
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Cd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Td(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class il{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=Cd()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new il(q(),n,this.revert)}}else return k(V(this.path)===e,"operationForChild called for unrelated child."),new il(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class vi{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new vi(this.source,q()):new vi(this.source,te(this.path))}}/**
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
 */class nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return W(this.path)?new nr(this.source,q(),this.snap.getImmediateChild(e)):new nr(this.source,te(this.path),this.snap)}}/**
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
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new nr(this.source,q(),n.value):new Zr(this.source,q(),n)}else return k(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Rn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class kC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TC(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(gC(o.childName,o.snapshotNode))}),Ts(t,s,"child_removed",e,r,n),Ts(t,s,"child_added",e,r,n),Ts(t,s,"child_moved",i,r,n),Ts(t,s,"child_changed",e,r,n),Ts(t,s,"value",e,r,n),s}function Ts(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>NC(t,l,a)),o.forEach(l=>{const a=IC(t,l,i);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function IC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function NC(t,e,n){if(e.childName==null||n.childName==null)throw os("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),s=new $(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Ul(t,e){return{eventCache:t,serverCache:e}}function Hs(t,e,n,r){return Ul(new Rn(e,n,r),t.serverCache)}function tv(t,e,n,r){return Ul(t.eventCache,new Rn(e,n,r))}function ol(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ua;const bC=()=>(Ua||(Ua=new Ge(fS)),Ua);class ee{constructor(e,n=bC()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return Re(e,(r,s)=>{n=n.set(new Z(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(W(e))return null;{const r=V(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(te(e),n);return i!=null?{path:he(new Z(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=V(e),r=this.children.get(n);return r!==null?r.subtree(te(e)):new ee(null)}}set(e,n){if(W(e))return new ee(n,this.children);{const r=V(e),i=(this.children.get(r)||new ee(null)).set(te(e),n),o=this.children.insert(r,i);return new ee(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=V(e),r=this.children.get(n);if(r){const s=r.remove(te(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ee(null):new ee(this.value,i)}else return this}}get(e){if(W(e))return this.value;{const n=V(e),r=this.children.get(n);return r?r.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const r=V(e),i=(this.children.get(r)||new ee(null)).setTree(te(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ee(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(he(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(W(e))return null;{const i=V(e),o=this.children.get(i);return o?o.findOnPath_(te(e),he(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const s=V(e),i=this.children.get(s);return i?i.foreachOnPath_(te(e),he(n,s),r):new ee(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(he(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new ee(null))}}function Bs(t,e,n){if(W(e))return new yt(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=je(s,e);return i=i.updateChild(o,n),new yt(t.writeTree_.set(s,i))}else{const s=new ee(n),i=t.writeTree_.setTree(e,s);return new yt(i)}}}function Xc(t,e,n){let r=t;return Re(n,(s,i)=>{r=Bs(r,he(e,s),i)}),r}function np(t,e){if(W(e))return yt.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new yt(n)}}function Zc(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function rp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,s)=>{e.push(new $(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new $(r,s.value))}),e}function Cn(t,e){if(W(e))return t;{const n=ur(t,e);return n!=null?new yt(new ee(n)):new yt(t.writeTree_.subtree(e))}}function eu(t){return t.writeTree_.isEmpty()}function es(t,e){return nv(q(),t.writeTree_,e)}function nv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(k(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=nv(he(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(he(t,".priority"),r)),n}}/**
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
 */function zl(t,e){return ov(e,t)}function RC(t,e,n,r,s){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Bs(t.visibleWrites,e,n)),t.lastWriteId=r}function PC(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Xc(t.visibleWrites,e,n),t.lastWriteId=r}function AC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&LC(l,r.path)?s=!1:it(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return DC(t),!0;if(r.snap)t.visibleWrites=np(t.visibleWrites,r.path);else{const l=r.children;Re(l,a=>{t.visibleWrites=np(t.visibleWrites,he(r.path,a))})}return!0}else return!1}function LC(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(he(t.path,n),e))return!0;return!1}function DC(t){t.visibleWrites=rv(t.allWrites,MC,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MC(t){return t.visible}function rv(t,e,n){let r=yt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)it(n,o)?(l=je(n,o),r=Bs(r,l,i.snap)):it(o,n)&&(l=je(o,n),r=Bs(r,q(),i.snap.getChild(l)));else if(i.children){if(it(n,o))l=je(n,o),r=Xc(r,l,i.children);else if(it(o,n))if(l=je(o,n),W(l))r=Xc(r,q(),i.children);else{const a=Qr(i.children,V(l));if(a){const c=a.getChild(te(l));r=Bs(r,q(),c)}}}else throw os("WriteRecord should have .snap or .children")}}return r}function sv(t,e,n,r,s){if(!r&&!s){const i=ur(t.visibleWrites,e);if(i!=null)return i;{const o=Cn(t.visibleWrites,e);if(eu(o))return n;if(n==null&&!Zc(o,q()))return null;{const l=n||M.EMPTY_NODE;return es(o,l)}}}else{const i=Cn(t.visibleWrites,e);if(!s&&eu(i))return n;if(!s&&n==null&&!Zc(i,q()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(it(c.path,e)||it(e,c.path))},l=rv(t.allWrites,o,e),a=n||M.EMPTY_NODE;return es(l,a)}}}function jC(t,e,n){let r=M.EMPTY_NODE;const s=ur(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(fe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Cn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=es(Cn(i,new Z(o)),l);r=r.updateImmediateChild(o,a)}),rp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Cn(t.visibleWrites,e);return rp(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FC(t,e,n,r,s){k(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=he(e,n);if(Zc(t.visibleWrites,i))return null;{const o=Cn(t.visibleWrites,i);return eu(o)?s.getChild(n):es(o,s.getChild(n))}}function UC(t,e,n,r){const s=he(e,n),i=ur(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Cn(t.visibleWrites,s);return es(o,r.getNode().getImmediateChild(n))}else return null}function zC(t,e){return ur(t.visibleWrites,e)}function VC(t,e,n,r,s,i,o){let l;const a=Cn(t.visibleWrites,e),c=ur(a,q());if(c!=null)l=c;else if(n!=null)l=es(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<s;)h(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function $C(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function ll(t,e,n,r){return sv(t.writeTree,t.treePath,e,n,r)}function Id(t,e){return jC(t.writeTree,t.treePath,e)}function sp(t,e,n,r){return FC(t.writeTree,t.treePath,e,n,r)}function al(t,e){return zC(t.writeTree,he(t.treePath,e))}function WC(t,e,n,r,s,i){return VC(t.writeTree,t.treePath,e,n,r,s,i)}function Nd(t,e,n){return UC(t.writeTree,t.treePath,e,n)}function iv(t,e){return ov(he(t.treePath,e),t.writeTree)}function ov(t,e){return{treePath:t,writeTree:e}}/**
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
 */class HC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,gi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,mi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Xr(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,gi(r,e.snapshotNode,s.oldSnap));else throw os("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class BC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const lv=new BC;class bd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),i=WC(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function GC(t){return{filter:t}}function KC(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qC(t,e,n,r,s){const i=new HC;let o,l;if(n.type===gt.OVERWRITE){const c=n;c.source.fromUser?o=tu(t,e,c.path,c.snap,r,s,i):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=cl(t,e,c.path,c.snap,r,s,l,i))}else if(n.type===gt.MERGE){const c=n;c.source.fromUser?o=YC(t,e,c.path,c.children,r,s,i):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=nu(t,e,c.path,c.children,r,s,l,i))}else if(n.type===gt.ACK_USER_WRITE){const c=n;c.revert?o=ZC(t,e,c.path,r,s,i):o=JC(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===gt.LISTEN_COMPLETE)o=XC(t,e,n.path,r,i);else throw os("Unknown operation type: "+n.type);const a=i.getChanges();return QC(e,o,a),{viewCache:o,changes:a}}function QC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ol(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Z_(ol(e)))}}function av(t,e,n,r,s,i){const o=e.eventCache;if(al(r,n)!=null)return e;{let l,a;if(W(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rr(e),d=c instanceof M?c:M.EMPTY_NODE,h=Id(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=ll(r,rr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=V(n);if(c===".priority"){k(bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=sp(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=te(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=sp(r,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=Nd(r,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,d,s,i):l=o.getNode()}}return Hs(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function cl(t,e,n,r,s,i,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),g,null)}else{const g=V(n);if(!a.isCompleteForPath(n)&&bn(n)>1)return e;const v=te(n),w=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?c=d.updatePriority(a.getNode(),w):c=d.updateChild(a.getNode(),g,w,v,lv,null)}const h=tv(e,c,a.isFullyInitialized()||W(n),d.filtersNodes()),f=new bd(s,h,i);return av(t,h,n,s,f,l)}function tu(t,e,n,r,s,i,o){const l=e.eventCache;let a,c;const d=new bd(s,e,i);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Hs(e,c,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Hs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=te(n),g=l.getNode().getImmediateChild(h);let v;if(W(f))v=r;else{const y=d.getCompleteChild(h);y!=null?vd(f)===".priority"&&y.getChild(G_(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=M.EMPTY_NODE}if(g.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),h,v,f,d,o);a=Hs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ip(t,e){return t.eventCache.isCompleteForChild(e)}function YC(t,e,n,r,s,i,o){let l=e;return r.foreach((a,c)=>{const d=he(n,a);ip(e,V(d))&&(l=tu(t,l,d,c,s,i,o))}),r.foreach((a,c)=>{const d=he(n,a);ip(e,V(d))||(l=tu(t,l,d,c,s,i,o))}),l}function op(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function nu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;W(n)?c=r:c=new ee(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=op(t,g,f);a=cl(t,a,new Z(h),v,s,i,o,l)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),y=op(t,v,f);a=cl(t,a,new Z(h),y,s,i,o,l)}}),a}function JC(t,e,n,r,s,i,o){if(al(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return cl(t,e,n,a.getNode().getChild(n),s,i,l,o);if(W(n)){let c=new ee(null);return a.getNode().forEachChild(jr,(d,h)=>{c=c.set(new Z(d),h)}),nu(t,e,n,c,s,i,l,o)}else return e}else{let c=new ee(null);return r.foreach((d,h)=>{const f=he(n,d);a.isCompleteForPath(f)&&(c=c.set(d,a.getNode().getChild(f)))}),nu(t,e,n,c,s,i,l,o)}}function XC(t,e,n,r,s){const i=e.serverCache,o=tv(e,i.getNode(),i.isFullyInitialized()||W(n),i.isFiltered());return av(t,o,n,r,lv,s)}function ZC(t,e,n,r,s,i){let o;if(al(r,n)!=null)return e;{const l=new bd(r,e,s),a=e.eventCache.getNode();let c;if(W(n)||V(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ll(r,rr(e));else{const h=e.serverCache.getNode();k(h instanceof M,"serverChildren would be complete if leaf node"),d=Id(r,h)}d=d,c=t.filter.updateFullNode(a,d,i)}else{const d=V(n);let h=Nd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?c=t.filter.updateChild(a,d,h,te(n),l,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,M.EMPTY_NODE,te(n),l,i):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ll(r,rr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||al(r,q())!=null,Hs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class ek{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ed(r.getIndex()),i=vC(r);this.processor_=GC(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(M.EMPTY_NODE,l.getNode(),null),d=new Rn(a,o.isFullyInitialized(),s.filtersNodes()),h=new Rn(c,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ul(h,d),this.eventGenerator_=new kC(this.query_)}get query(){return this.query_}}function tk(t){return t.viewCache_.serverCache.getNode()}function nk(t){return ol(t.viewCache_)}function rk(t,e){const n=rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function lp(t){return t.eventRegistrations_.length===0}function sk(t,e){t.eventRegistrations_.push(e)}function ap(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function cp(t,e,n,r){e.type===gt.MERGE&&e.source.queryId!==null&&(k(rr(t.viewCache_),"We should always have a full cache before handling merges"),k(ol(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=qC(t.processor_,s,e,n,r);return KC(t.processor_,i.viewCache),k(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,cv(t,i.changes,i.viewCache.eventCache.getNode(),null)}function ik(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(i,o)=>{r.push(Xr(i,o))}),n.isFullyInitialized()&&r.push(Z_(n.getNode())),cv(t,r,n.getNode(),e)}function cv(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return TC(t.eventGenerator_,e,n,s)}/**
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
 */let ul;class uv{constructor(){this.views=new Map}}function ok(t){k(!ul,"__referenceConstructor has already been defined"),ul=t}function lk(){return k(ul,"Reference.ts has not been loaded"),ul}function ak(t){return t.views.size===0}function Rd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return k(i!=null,"SyncTree gave us an op for an invalid query."),cp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(cp(o,e,n,r));return i}}function dv(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=ll(n,s?r:null),a=!1;l?a=!0:r instanceof M?(l=Id(n,r),a=!1):(l=M.EMPTY_NODE,a=!1);const c=Ul(new Rn(l,a,!1),new Rn(r,s,!1));return new ek(e,c)}return o}function ck(t,e,n,r,s,i){const o=dv(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),sk(o,n),ik(o,n)}function uk(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Pn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(ap(c,n,r)),lp(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||i.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(ap(a,n,r)),lp(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!Pn(t)&&i.push(new(lk())(e._repo,e._path)),{removed:i,events:o}}function hv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kn(t,e){let n=null;for(const r of t.views.values())n=n||rk(r,e);return n}function fv(t,e){if(e._queryParams.loadsAllData())return Vl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function pv(t,e){return fv(t,e)!=null}function Pn(t){return Vl(t)!=null}function Vl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let dl;function dk(t){k(!dl,"__referenceConstructor has already been defined"),dl=t}function hk(){return k(dl,"Reference.ts has not been loaded"),dl}let fk=1;class up{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=$C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mv(t,e,n,r,s){return RC(t.pendingWriteTree_,e,n,r,s),s?us(t,new nr(Cd(),e,n)):[]}function pk(t,e,n,r){PC(t.pendingWriteTree_,e,n,r);const s=ee.fromObject(n);return us(t,new Zr(Cd(),e,s))}function hn(t,e,n=!1){const r=AC(t.pendingWriteTree_,e);if(OC(t.pendingWriteTree_,e)){let i=new ee(null);return r.snap!=null?i=i.set(q(),!0):Re(r.children,o=>{i=i.set(new Z(o),!0)}),us(t,new il(r.path,i,n))}else return[]}function Li(t,e,n){return us(t,new nr(kd(),e,n))}function mk(t,e,n){const r=ee.fromObject(n);return us(t,new Zr(kd(),e,r))}function gk(t,e){return us(t,new vi(kd(),e))}function _k(t,e,n){const r=Ad(t,n);if(r){const s=Od(r),i=s.path,o=s.queryId,l=je(i,e),a=new vi(Td(o),l);return Ld(t,i,a)}else return[]}function hl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||pv(o,e))){const a=uk(o,e,n,r);ak(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;if(l=a.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,g)=>Pn(g));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const g=wk(f);for(let v=0;v<g.length;++v){const y=g[v],w=y.query,m=yv(t,y);t.listenProvider_.startListening(Gs(w),yi(t,w),m.hashFn,m.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Gs(e),null):c.forEach(f=>{const g=t.queryToTagMap.get($l(f));t.listenProvider_.stopListening(Gs(f),g)}))}xk(t,c)}return l}function gv(t,e,n,r){const s=Ad(t,r);if(s!=null){const i=Od(s),o=i.path,l=i.queryId,a=je(o,e),c=new nr(Td(l),a,n);return Ld(t,o,c)}else return[]}function vk(t,e,n,r){const s=Ad(t,r);if(s){const i=Od(s),o=i.path,l=i.queryId,a=je(o,e),c=ee.fromObject(n),d=new Zr(Td(l),a,c);return Ld(t,o,d)}else return[]}function ru(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,g)=>{const v=je(f,s);i=i||kn(g,v),o=o||Pn(g)});let l=t.syncPointTree_.get(s);l?(o=o||Pn(l),i=i||kn(l,q())):(l=new uv,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=M.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,v)=>{const y=kn(v,q());y&&(i=i.updateImmediateChild(g,y))}));const c=pv(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=$l(e);k(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Ek();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=zl(t.pendingWriteTree_,s);let h=ck(l,e,n,d,i,a);if(!c&&!o&&!r){const f=fv(l,e);h=h.concat(Sk(t,e,f))}return h}function Pd(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),c=kn(l,a);if(c)return c});return sv(s,e,i,n,!0)}function yk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=je(c,n);r=r||kn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||kn(s,q()):(s=new uv,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Rn(r,!0,!1):null,l=zl(t.pendingWriteTree_,e._path),a=dv(s,e,l,i?o.getNode():M.EMPTY_NODE,i);return nk(a)}function us(t,e){return _v(e,t.syncPointTree_,null,zl(t.pendingWriteTree_,q()))}function _v(t,e,n,r){if(W(t.path))return vv(t,e,n,r);{const s=e.get(q());n==null&&s!=null&&(n=kn(s,q()));let i=[];const o=V(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=iv(r,o);i=i.concat(_v(l,a,c,d))}return s&&(i=i.concat(Rd(s,t,r,n))),i}}function vv(t,e,n,r){const s=e.get(q());n==null&&s!=null&&(n=kn(s,q()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=iv(r,o),d=t.operationForChild(o);d&&(i=i.concat(vv(d,l,a,c)))}),s&&(i=i.concat(Rd(s,t,r,n))),i}function yv(t,e){const n=e.query,r=yi(t,n);return{hashFn:()=>(tk(e)||M.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?_k(t,n._path,r):gk(t,n._path);{const i=gS(s,n);return hl(t,n,null,i)}}}}function yi(t,e){const n=$l(e);return t.queryToTagMap.get(n)}function $l(t){return t._path.toString()+"$"+t._queryIdentifier}function Ad(t,e){return t.tagToQueryMap.get(e)}function Od(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Ld(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const s=zl(t.pendingWriteTree_,e);return Rd(r,n,s,null)}function wk(t){return t.fold((e,n,r)=>{if(n&&Pn(n))return[Vl(n)];{let s=[];return n&&(s=hv(n)),Re(r,(i,o)=>{s=s.concat(o)}),s}})}function Gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hk())(t._repo,t._path):t}function xk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=$l(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function Ek(){return fk++}function Sk(t,e,n){const r=e._path,s=yi(t,e),i=yv(t,n),o=t.listenProvider_.startListening(Gs(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)k(!Pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,h)=>{if(!W(c)&&d&&Pn(d))return[Vl(d).query];{let f=[];return d&&(f=f.concat(hv(d).map(g=>g.query))),Re(h,(g,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Gs(d),yi(t,d))}}return o}/**
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
 */class Dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dd(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new Md(this.syncTree_,n)}node(){return Pd(this.syncTree_,this.path_)}}const Ck=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Tk(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},Tk=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const s=e.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},wv=function(t,e,n,r){return jd(e,new Md(n,t),r)},xv=function(t,e,n){return jd(t,new Dd(e),n)};function jd(t,e,n){const r=t.getPriority().val(),s=dp(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=dp(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ee(l,ye(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ee(s))),o.forEachChild(fe,(l,a)=>{const c=jd(a,e.getImmediateChild(l),n);c!==a&&(i=i.updateImmediateChild(l,c))}),i}}/**
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
 */class Fd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ud(t,e){let n=e instanceof Z?e:new Z(e),r=t,s=V(n);for(;s!==null;){const i=Qr(r.node.children,s)||{children:{},childCount:0};r=new Fd(s,r,i),n=te(n),s=V(n)}return r}function ds(t){return t.node.value}function Ev(t,e){t.node.value=e,su(t)}function Sv(t){return t.node.childCount>0}function Ik(t){return ds(t)===void 0&&!Sv(t)}function Wl(t,e){Re(t.node.children,(n,r)=>{e(new Fd(n,t,r))})}function Cv(t,e,n,r){n&&e(t),Wl(t,s=>{Cv(s,e,!0)})}function Nk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Di(t){return new Z(t.parent===null?t.name:Di(t.parent)+"/"+t.name)}function su(t){t.parent!==null&&bk(t.parent,t.name,t)}function bk(t,e,n){const r=Ik(n),s=Rt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,su(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,su(t))}/**
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
 */const Rk=/[\[\].#$\/\u0000-\u001F\u007F]/,Pk=/[\[\].#$\u0000-\u001F\u007F]/,za=10*1024*1024,zd=function(t){return typeof t=="string"&&t.length!==0&&!Rk.test(t)},kv=function(t){return typeof t=="string"&&t.length!==0&&!Pk.test(t)},Ak=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kv(t)},Ok=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!fd(t)||t&&typeof t=="object"&&Rt(t,".sv")},Tv=function(t,e,n,r){r&&e===void 0||Hl(Ml(t,"value"),e,n)},Hl=function(t,e,n){const r=n instanceof Z?new YS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$n(r));if(typeof e=="function")throw new Error(t+"contains a function "+$n(r)+" with contents = "+e.toString());if(fd(e))throw new Error(t+"contains "+e.toString()+" "+$n(r));if(typeof e=="string"&&e.length>za/3&&jl(e)>za)throw new Error(t+"contains a string greater than "+za+" utf8 bytes "+$n(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Re(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!zd(o)))throw new Error(t+" contains an invalid key ("+o+") "+$n(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JS(r,o),Hl(t,l,r),XS(r)}),s&&i)throw new Error(t+' contains ".value" child '+$n(r)+" in addition to actual children.")}},Lk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=pi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!zd(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QS);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&it(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Dk=function(t,e,n,r){const s=Ml(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Re(e,(o,l)=>{const a=new Z(o);if(Hl(s,l,he(n,a)),vd(a)===".priority"&&!Ok(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),Lk(s,i)},Iv=function(t,e,n,r){if(!kv(n))throw new Error(Ml(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iv(t,e,n)},Vd=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ak(n))throw new Error(Ml(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Fk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bl(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!yd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Nv(t,e,n){Bl(t,n),bv(t,r=>yd(r,e))}function ct(t,e,n){Bl(t,n),bv(t,r=>it(r,e)||it(e,r))}function bv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(Uk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Uk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$s&&Ie("event: "+n.toString()),cs(r)}}}/**
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
 */const zk="repo_interrupt",Vk=25;class $k{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Fk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sl(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wk(t,e,n){if(t.stats_=gd(t.repoInfo_),t.forceRestClient_||wS())t.server_=new rl(t.repoInfo_,(r,s,i,o)=>{hp(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,s,i,o)=>{hp(t,r,s,i,o)},r=>{fp(t,r)},r=>{Hk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kS(t.repoInfo_,()=>new CC(t.stats_,t.server_)),t.infoData_=new yC,t.infoSyncTree_=new up({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Li(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$d(t,"connected",!1),t.serverSyncTree_=new up({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const c=o(l,a);ct(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Rv(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(t){return Ck({timestamp:Rv(t)})}function hp(t,e,n,r,s){t.dataUpdateCount++;const i=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=Jo(n,c=>ye(c));o=vk(t.serverSyncTree_,i,a,s)}else{const a=ye(n);o=gv(t.serverSyncTree_,i,a,s)}else if(r){const a=Jo(n,c=>ye(c));o=mk(t.serverSyncTree_,i,a)}else{const a=ye(n);o=Li(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=ts(t,i)),ct(t.eventQueue_,l,o)}function fp(t,e){$d(t,"connected",e),e===!1&&qk(t)}function Hk(t,e){Re(e,(n,r)=>{$d(t,n,r)})}function $d(t,e,n){const r=new Z("/.info/"+e),s=ye(n);t.infoData_.updateSnapshot(r,s);const i=Li(t.infoSyncTree_,r,s);ct(t.eventQueue_,r,i)}function Wd(t){return t.nextWriteId_++}function Bk(t,e,n){const r=yk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ye(s).withIndex(e._queryParams.getIndex());ru(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Li(t.serverSyncTree_,e._path,i);else{const l=yi(t.serverSyncTree_,e);o=gv(t.serverSyncTree_,e._path,i,l)}return ct(t.eventQueue_,e._path,o),hl(t.serverSyncTree_,e,n,null,!0),i},s=>(Mi(t,"get for query "+we(e)+" failed: "+s),Promise.reject(new Error(s))))}function Gk(t,e,n,r,s){Mi(t,"set",{path:e.toString(),value:n,priority:r});const i=Gl(t),o=ye(n,r),l=Pd(t.serverSyncTree_,e),a=xv(o,l,i),c=Wd(t),d=mv(t.serverSyncTree_,e,a,c,!0);Bl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Ue("set at "+e+" failed: "+f);const y=hn(t.serverSyncTree_,c,!v);ct(t.eventQueue_,e,y),iu(t,s,f,g)});const h=Bd(t,e);ts(t,h),ct(t.eventQueue_,h,[])}function Kk(t,e,n,r){Mi(t,"update",{path:e.toString(),value:n});let s=!0;const i=Gl(t),o={};if(Re(n,(l,a)=>{s=!1,o[l]=wv(he(e,l),ye(a),t.serverSyncTree_,i)}),s)Ie("update() called with empty data.  Don't do anything."),iu(t,r,"ok",void 0);else{const l=Wd(t),a=pk(t.serverSyncTree_,e,o,l);Bl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Ue("update at "+e+" failed: "+c);const f=hn(t.serverSyncTree_,l,!h),g=f.length>0?ts(t,e):e;ct(t.eventQueue_,g,f),iu(t,r,c,d)}),Re(n,c=>{const d=Bd(t,he(e,c));ts(t,d)}),ct(t.eventQueue_,e,[])}}function qk(t){Mi(t,"onDisconnectEvents");const e=Gl(t),n=sl();Jc(t.onDisconnect_,q(),(s,i)=>{const o=wv(s,i,t.serverSyncTree_,e);ev(n,s,o)});let r=[];Jc(n,q(),(s,i)=>{r=r.concat(Li(t.serverSyncTree_,s,i));const o=Bd(t,s);ts(t,o)}),t.onDisconnect_=sl(),ct(t.eventQueue_,q(),r)}function Qk(t,e,n){let r;V(e._path)===".info"?r=ru(t.infoSyncTree_,e,n):r=ru(t.serverSyncTree_,e,n),Nv(t.eventQueue_,e._path,r)}function Yk(t,e,n){let r;V(e._path)===".info"?r=hl(t.infoSyncTree_,e,n):r=hl(t.serverSyncTree_,e,n),Nv(t.eventQueue_,e._path,r)}function Jk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zk)}function Mi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function iu(t,e,n,r){e&&cs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Pv(t,e,n){return Pd(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Hd(t,e=t.transactionQueueTree_){if(e||Kl(t,e),ds(e)){const n=Ov(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Xk(t,Di(e),n)}else Sv(e)&&Wl(e,n=>{Hd(t,n)})}function Xk(t,e,n){const r=n.map(c=>c.currentWriteId),s=Pv(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=je(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Mi(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(hn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Kl(t,Ud(t.transactionQueueTree_,e)),Hd(t,t.transactionQueueTree_),ct(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)cs(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ue("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ts(t,e)}},o)}function ts(t,e){const n=Av(t,e),r=Di(n),s=Ov(t,n);return Zk(t,s,r),r}function Zk(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=je(n,a.path);let d=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,s=s.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Vk)d=!0,h="maxretry",s=s.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Pv(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Hl("transaction failed: Data returned ",g,a.path);let v=ye(g);typeof g=="object"&&g!=null&&Rt(g,".priority")||(v=v.updatePriority(f.getPriority()));const w=a.currentWriteId,m=Gl(t),p=xv(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Wd(t),o.splice(o.indexOf(w),1),s=s.concat(mv(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),s=s.concat(hn(t.serverSyncTree_,w,!0))}else d=!0,h="nodata",s=s.concat(hn(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}Kl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)cs(r[l]);Hd(t,t.transactionQueueTree_)}function Av(t,e){let n,r=t.transactionQueueTree_;for(n=V(e);n!==null&&ds(r)===void 0;)r=Ud(r,n),e=te(e),n=V(e);return r}function Ov(t,e){const n=[];return Lv(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Lv(t,e,n){const r=ds(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Wl(e,s=>{Lv(t,s,n)})}function Kl(t,e){const n=ds(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Ev(e,n.length>0?n:void 0)}Wl(e,r=>{Kl(t,r)})}function Bd(t,e){const n=Di(Av(t,e)),r=Ud(t.transactionQueueTree_,e);return Nk(r,s=>{Va(t,s)}),Va(t,r),Cv(r,s=>{Va(t,s)}),n}function Va(t,e){const n=ds(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Ev(e,void 0):n.length=i+1,ct(t.eventQueue_,Di(e),s);for(let o=0;o<r.length;o++)cs(r[o])}}/**
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
 */function eT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function tT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const pp=function(t,e){const n=nT(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new j_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Z(n.pathString)}},nT=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=eT(t.substring(d,h)));const f=tT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
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
 */const mp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=mp.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=mp.charAt(e[s]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class sT{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class iT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Dv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gd{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return W(this._path)?null:vd(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=ep(this._queryParams),n=pd(e);return n==="{}"?"default":n}get _queryObject(){return ep(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof Gd))return!1;const n=this._repo===e._repo,r=yd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+qS(this._path)}}class Xt extends Gd{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=G_(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),r=xi(this.ref,e);return new wi(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new wi(s,xi(this.ref,r),fe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sr(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?xi(t._root,e):t._root}function xi(t,e){return t=De(t),V(t._path)===null?Mk("child","path",e):Iv("child","path",e),new Xt(t._repo,he(t._path,e))}function oT(t,e){t=De(t),Vd("push",t._path),Tv("push",e,t._path,!0);const n=Rv(t._repo),r=rT(n),s=xi(t,r),i=xi(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function lT(t){return Vd("remove",t._path),wo(t,null)}function wo(t,e){t=De(t),Vd("set",t._path),Tv("set",e,t._path,!1);const n=new bi;return Gk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function aT(t,e){Dk("update",e,t._path);const n=new bi;return Kk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function cT(t){t=De(t);const e=new Dv(()=>{}),n=new ql(e);return Bk(t._repo,t,n).then(r=>new wi(r,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class ql{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sT("value",this,new wi(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iT(this,e,n):null}matches(e){return e instanceof ql?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uT(t,e,n,r,s){const i=new Dv(n,void 0),o=new ql(i);return Qk(t._repo,t,o),()=>Yk(t._repo,t,o)}function ou(t,e,n,r){return uT(t,"value",e)}ok(Xt);dk(Xt);/**
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
 */const dT="FIREBASE_DATABASE_EMULATOR_HOST",lu={};let hT=!1;function fT(t,e,n,r){t.repoInfo_=new j_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pT(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pp(i,s),l=o.repoInfo,a;typeof process<"u"&&Mf&&(a=Mf[dT]),a?(i=`http://${a}?ns=${l.namespace}`,o=pp(i,s),l=o.repoInfo):o.repoInfo.secure;const c=new ES(t.name,t.options,e);jk("Invalid Firebase Database URL",o),W(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gT(l,t,c,new xS(t.name,n));return new _T(d,t)}function mT(t,e){const n=lu[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Jk(t),delete n[t.key]}function gT(t,e,n,r){let s=lu[e.name];s||(s={},lu[e.name]=s);let i=s[t.toURLString()];return i&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new $k(t,hT,n,r),s[t.toURLString()]=i,i}class _T{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function vT(t=w_(),e){const n=hd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ax("database");r&&yT(n,...r)}return n}function yT(t,e,n,r={}){t=De(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new yo(yo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ox(r.mockUserToken,t.app.options.projectId);i=new yo(o)}fT(s,e,n,i)}/**
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
 */function wT(t){iS(as),Yr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return pT(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Sn(jf,Ff,t),Sn(jf,Ff,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wT();function Kd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xT=Mv,jv=new Ri("auth","Firebase",Mv());/**
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
 */const fl=new ud("@firebase/auth");function ET(t,...e){fl.logLevel<=X.WARN&&fl.warn(`Auth (${as}): ${t}`,...e)}function xo(t,...e){fl.logLevel<=X.ERROR&&fl.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function xt(t,...e){throw qd(t,...e)}function Nt(t,...e){return qd(t,...e)}function Fv(t,e,n){const r=Object.assign(Object.assign({},xT()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return Fv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jv.create(t,...e)}function j(t,e,...n){if(!t)throw qd(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Yt(t,e){t||Ut(e)}/**
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
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ST(){return gp()==="http:"||gp()==="https:"}function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ST()||Dx()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=cd()||m_()}get(){return CT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qd(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IT=new ji(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,s={}){return zv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ls(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},i);return Lx()||(c.referrerPolicy="no-referrer"),Uv.fetch()(Vv(t,t.config.apiHost,n,l),c)})}async function zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TT),e);try{const s=new bT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw io(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fv(t,d,c);xt(t,d)}}catch(s){if(s instanceof Dn)throw s;xt(t,"network-request-failed",{message:String(s)})}}async function Ql(t,e,n,r,s={}){const i=await Mn(t,e,n,r,s);return"mfaPendingCredential"in i&&xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qd(t.config,s):`${t.config.apiScheme}://${s}`}function NT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),IT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nt(t,e,r);return s.customData._tokenResponse=n,s}function _p(t){return t!==void 0&&t.enterprise!==void 0}class RT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function PT(t,e){return Mn(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
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
 */async function AT(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function $v(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OT(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Yd(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks($a(s.auth_time)),issuedAtTime:Ks($a(s.iat)),expirationTime:Ks($a(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $a(t){return Number(t)*1e3}function Yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yo(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vp(t){const e=Yd(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&LT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ei(t,$v(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wv(i.providerUserInfo):[],l=jT(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function MT(t){const e=De(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wv(t){return t.map(e=>{var{providerId:n}=e,r=Kd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FT(t,e){const n=await zv(t,{},async()=>{const r=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UT(t,e){return Mn(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
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
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fr;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function en(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OT(this,e)}reload(){return MT(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Ei(this,AT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:x,isAnonymous:C,providerData:T,stsTokenManager:N}=n;j(_&&N,e,"internal-error");const b=Fr.fromJSON(this.name,N);j(typeof _=="string",e,"internal-error"),en(h,e.name),en(f,e.name),j(typeof x=="boolean",e,"internal-error"),j(typeof C=="boolean",e,"internal-error"),en(g,e.name),en(v,e.name),en(y,e.name),en(w,e.name),en(m,e.name),en(p,e.name);const U=new zt({uid:_,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(U.providerData=T.map(A=>Object.assign({},A))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fr;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Fr;l.updateFromIdToken(r);const a=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,c),a}}/**
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
 */const yp=new Map;function Vt(t){Yt(t instanceof Function,"Expected a class definition");let e=yp.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yp.set(t,e),e)}/**
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
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hv.type="NONE";const wp=Hv;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(Vt(wp),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Vt(wp);const o=Eo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const h=zt._fromJSON(e,d);c!==i&&(l=h),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Ur(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ur(i,e,r))}}/**
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
 */function xp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yv(e))return"Blackberry";if(Jv(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||Kv(e))&&!e.includes("edge/"))return"Chrome";if(Qv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bv(t=ze()){return/firefox\//i.test(t)}function Gv(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kv(t=ze()){return/crios\//i.test(t)}function qv(t=ze()){return/iemobile/i.test(t)}function Qv(t=ze()){return/android/i.test(t)}function Yv(t=ze()){return/blackberry/i.test(t)}function Jv(t=ze()){return/webos/i.test(t)}function Jd(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zT(t=ze()){var e;return Jd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VT(){return Mx()&&document.documentMode===10}function Xv(t=ze()){return Jd(t)||Qv(t)||Jv(t)||Yv(t)||/windows phone/i.test(t)||qv(t)}/**
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
 */function Zv(t,e=[]){let n;switch(t){case"Browser":n=xp(ze());break;case"Worker":n=`${xp(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
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
 */class $T{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WT(t,e={}){return Mn(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
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
 */const HT=6;class BT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ep(this),this.idTokenSubscription=new Ep(this),this.beforeStateQueue=new $T(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $v(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Tn(this));const n=e?De(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WT(this),n=new BT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ET(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hs(t){return De(t)}class Ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gx(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KT(t){Yl=t}function ey(t){return Yl.loadJS(t)}function qT(){return Yl.recaptchaEnterpriseScript}function QT(){return Yl.gapiScript}function YT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JT="recaptcha-enterprise",XT="NO_RECAPTCHA";class ZT{constructor(e){this.type=JT,this.auth=hs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{PT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new RT(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;_p(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(XT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&_p(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=qT();a.length!==0&&(a+=l),ey(a).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Sp(t,e,n,r=!1){const s=new ZT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Cp(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function e1(t,e){const n=hd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xo(i,e??{}))return s;xt(s,"already-initialized")}return n.initialize({options:e})}function t1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n1(t,e,n){const r=hs(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ty(e),{host:o,port:l}=r1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s1()}function ty(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r1(t){const e=ty(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function i1(t,e){return Mn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function o1(t,e){return Ql(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}/**
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
 */async function l1(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function a1(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
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
 */class Si extends Xd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Si(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Si(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cp(e,n,"signInWithPassword",o1);case"emailLink":return l1(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cp(e,r,"signUpPassword",i1);case"emailLink":return a1(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zr(t,e){return Ql(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
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
 */const c1="http://localhost";class ir extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Kd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:c1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
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
 */function u1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d1(t){const e=Ps(As(t)).link,n=e?Ps(As(e)).deep_link_id:null,r=Ps(As(t)).deep_link_id;return(r?Ps(As(r)).link:null)||r||n||e||t}class Zd{constructor(e){var n,r,s,i,o,l;const a=Ps(As(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=u1((s=a.mode)!==null&&s!==void 0?s:null);j(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=d1(e);try{return new Zd(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zd.parseLink(n);return j(r,"argument-error"),Si._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends Fi{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class an extends Fi{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class cn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=Tp(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tp(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ml extends Dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ml(e,n,r,s)}}function ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,i,e,r):i})}async function h1(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function f1(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await Ei(t,ry(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=Yd(i.idToken);j(o,r,"internal-error");const{sub:l}=o;return j(t.uid===l,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),i}}/**
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
 */async function sy(t,e,n=!1){if(jt(t.app))return Promise.reject(Tn(t));const r="signIn",s=await ry(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function p1(t,e){return sy(hs(t),e)}/**
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
 */async function m1(t){const e=hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function g1(t,e,n){return jt(t.app)?Promise.reject(Tn(t)):p1(De(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&m1(t),r})}function _1(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function v1(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function y1(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function w1(t){return De(t).signOut()}const gl="__sak";/**
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
 */class iy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const x1=1e3,E1=10;class oy extends iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,E1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},x1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oy.type="LOCAL";const S1=oy;/**
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
 */class ly extends iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const ay=ly;/**
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
 */function C1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await C1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
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
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=eh("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function T1(t){bt().location.href=t}/**
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
 */function cy(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function I1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function b1(){return cy()?self:null}/**
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
 */const uy="firebaseLocalStorageDb",R1=1,_l="firebaseLocalStorage",dy="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function P1(){const t=indexedDB.deleteDatabase(uy);return new Ui(t).toPromise()}function uu(){const t=indexedDB.open(uy,R1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:dy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await P1(),e(await uu()))})})}async function Ip(t,e,n){const r=Xl(t,!0).put({[dy]:e,value:n});return new Ui(r).toPromise()}async function A1(t,e){const n=Xl(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Np(t,e){const n=Xl(t,!0).delete(e);return new Ui(n).toPromise()}const O1=800,L1=3;class hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(b1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await I1(),!this.activeServiceWorker)return;this.sender=new k1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Ip(e,gl,"1"),await Np(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xl(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hy.type="LOCAL";const D1=hy;new ji(3e4,6e4);/**
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
 */function M1(t,e){return e?Vt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class th extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j1(t){return sy(t.auth,new th(t),t.bypassAuthState)}function F1(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),f1(n,new th(t),t.bypassAuthState)}async function U1(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),h1(n,new th(t),t.bypassAuthState)}/**
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
 */class fy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j1;case"linkViaPopup":case"linkViaRedirect":return U1;case"reauthViaPopup":case"reauthViaRedirect":return F1;default:xt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const z1=new ji(2e3,1e4);class Nr extends fy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z1.get())};e()}}Nr.currentPopupAction=null;/**
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
 */const V1="pendingRedirect",So=new Map;class $1 extends fy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await W1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W1(t,e){const n=G1(e),r=B1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function H1(t,e){So.set(t._key(),e)}function B1(t){return Vt(t._redirectPersistence)}function G1(t){return Eo(V1,t.config.apiKey,t.name)}async function K1(t,e,n=!1){if(jt(t.app))return Promise.reject(Tn(t));const r=hs(t),s=M1(r,e),o=await new $1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const q1=10*60*1e3;class Q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!py(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q1&&this.cachedEventUids.clear(),this.cachedEventUids.has(bp(e))}saveEventToCache(e){this.cachedEventUids.add(bp(e)),this.lastProcessedEventTime=Date.now()}}function bp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function py({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return py(t);default:return!1}}/**
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
 */async function J1(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
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
 */const X1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z1=/^https?/;async function eI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J1(t);for(const n of e)try{if(tI(n))return}catch{}xt(t,"unauthorized-domain")}function tI(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z1.test(n))return!1;if(X1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nI=new ji(3e4,6e4);function Rp(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rI(t){return new Promise((e,n)=>{var r,s,i;function o(){Rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rp(),n(Nt(t,"network-request-failed"))},timeout:nI.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)o();else{const l=YT("iframefcb");return bt()[l]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},ey(`${QT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Co=null,e})}let Co=null;function sI(t){return Co=Co||rI(t),Co}/**
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
 */const iI=new ji(5e3,15e3),oI="__/auth/iframe",lI="emulator/auth/iframe",aI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uI(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,lI):`https://${t.config.authDomain}/${oI}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=cI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ls(r).slice(1)}`}async function dI(t){const e=await sI(t),n=bt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:uI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),l=bt().setTimeout(()=>{i(o)},iI.get());function a(){bt().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const hI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fI=500,pI=600,mI="_blank",gI="http://localhost";class Pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(t,e,n,r=fI,s=pI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},hI),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ze().toLowerCase();n&&(l=Kv(c)?mI:n),Bv(c)&&(e=e||gI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(zT(c)&&l!=="_self")return vI(e||"",l),new Pp(null);const h=window.open(e||"",l,d);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Pp(h)}function vI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yI="__/auth/handler",wI="emulator/auth/handler",xI=encodeURIComponent("fac");async function Ap(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$c(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Fi){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${xI}=${encodeURIComponent(a)}`:"";return`${EI(t)}?${ls(l).slice(1)}${c}`}function EI({config:t}){return t.emulator?Qd(t,wI):`https://${t.authDomain}/${yI}`}/**
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
 */const Wa="webStorageSupport";class SI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ay,this._completeRedirectFn=K1,this._overrideRedirectResult=H1}async _openPopup(e,n,r,s){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ap(e,n,r,au(),s);return _I(e,o,eh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ap(e,n,r,au(),s);return T1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dI(e),r=new Q1(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wa,{type:Wa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wa];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xv()||Gv()||Jd()}}const CI=SI;var Op="@firebase/auth",Lp="1.7.9";/**
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
 */class kI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function II(t){Yr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zv(t)},c=new GT(r,s,i,a);return t1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new er("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(r=>new kI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Op,Lp,TI(t)),Sn(Op,Lp,"esm2017")}/**
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
 */const NI=5*60,bI=p_("authIdTokenMaxAge")||NI;let Dp=null;const RI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bI)return;const s=n==null?void 0:n.token;Dp!==s&&(Dp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PI(t=w_()){const e=hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e1(t,{popupRedirectResolver:CI,persistence:[D1,S1,ay]}),r=p_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=RI(i.toString());v1(n,o,()=>o(n.currentUser)),_1(n,l=>o(l))}}const s=h_("auth");return s&&n1(n,`http://${s}`),n}function AI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});II("Browser");const OI={apiKey:"AIzaSyCHOzNjb3CMpxNP_mkqGB01Aa6HSS6jyqw",authDomain:"flag-online.firebaseapp.com",databaseURL:"https://flag-online-default-rtdb.europe-west1.firebasedatabase.app",projectId:"flag-online",storageBucket:"flag-online.appspot.com",messagingSenderId:"975905100860",appId:"1:975905100860:web:e66bd079d63e363b469f39"},my=y_(OI),or=vT(my),Ha=PI(my),Ba=sr(or,"game"),LI=sr(or,"matches"),DI=sr(or,"teams"),Ga={homeTeam:"LOCAL",awayTeam:"VISITANTE",homeScore:0,awayScore:0,homeLogo:null,awayLogo:null,timeLeft:1200,isRunning:!1,isFinished:!1,currentDown:1,period:1,history:[],homeRoster:[],awayRoster:[],homeTimeouts:2,awayTimeouts:2,timeoutTimer:null,viewerPassword:"corsairs",lastError:null,teamsList:[]},Mp=t=>(t||"").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),He=Sx((t,e)=>{let n=!1;const r=c=>{console.error(c),t({lastError:c})},s=()=>t({lastError:null}),i=async c=>{try{return await aT(Ba,c),t({lastError:null}),!0}catch(d){return console.error("Error sincronizando con Firebase:",d),r("No tienes permisos o ha fallado la sincronización con Firebase."),!1}},o=()=>{const c=e(),d=c.history||[],h={};d.forEach(y=>{const w=y.playerName||"Jugador",m=y.pts??y.points??0;h[w]=(h[w]||0)+m});const g=Object.entries(h).sort((y,w)=>Number(w[1])-Number(y[1]))[0]||["-",0];let v="EMPATE";return(c.homeScore??0)>(c.awayScore??0)?v=c.homeTeam??"LOCAL":(c.awayScore??0)>(c.homeScore??0)&&(v=c.awayTeam??"VISITANTE"),{savedAt:new Date().toISOString(),homeTeam:c.homeTeam??"LOCAL",awayTeam:c.awayTeam??"VISITANTE",homeScore:c.homeScore??0,awayScore:c.awayScore??0,winner:v,isDraw:v==="EMPATE",mvp:{name:String(g[0]),points:Number(g[1])||0},stats:h,history:d,homeRoster:c.homeRoster||[],awayRoster:c.awayRoster||[],homeLogo:c.homeLogo??null,awayLogo:c.awayLogo??null,period:c.period??1,currentDown:c.currentDown??1,homeTimeouts:c.homeTimeouts??2,awayTimeouts:c.awayTimeouts??2}},l=async()=>{try{const c=o(),d=oT(LI);return await wo(d,c),t({lastError:null}),!0}catch(c){return console.error("Error guardando partido en historial:",c),r("No se pudo guardar el partido en el historial."),!1}},a=async(c,d)=>{try{if(!(c!=null&&c.trim()))return r("Debes seleccionar un equipo válido."),!1;const h=await cT(sr(or,`teams/${c}`));if(!h.exists())return r("No existe la plantilla seleccionada."),!1;const f=h.val(),g=Array.isArray(f==null?void 0:f.roster)?f.roster:[],v=(f==null?void 0:f.logo)??null,y=(f==null?void 0:f.name)??c,w=d==="home"?"homeRoster":"awayRoster",m=d==="home"?"homeLogo":"awayLogo",p=d==="home"?"homeTeam":"awayTeam",_=e();return t({[w]:g,[m]:v,[p]:y}),await i({[w]:g,[m]:v,[p]:y})?(t({lastError:null}),!0):(t({[w]:_[w],[m]:_[m],[p]:_[p]}),!1)}catch(h){return console.error("Error cargando plantilla por clave:",h),r("No se pudo cargar la plantilla seleccionada."),!1}};return ou(Ba,c=>{const d=c.val();d?(t({homeTeam:d.homeTeam??"LOCAL",awayTeam:d.awayTeam??"VISITANTE",homeScore:d.homeScore??0,awayScore:d.awayScore??0,homeLogo:d.homeLogo??null,awayLogo:d.awayLogo??null,timeLeft:d.timeLeft??1200,isRunning:d.isRunning??!1,isFinished:d.isFinished??!1,currentDown:d.currentDown??1,period:d.period??1,history:d.history||[],homeRoster:d.homeRoster||[],awayRoster:d.awayRoster||[],homeTimeouts:d.homeTimeouts??2,awayTimeouts:d.awayTimeouts??2,timeoutTimer:d.timeoutTimer??null,viewerPassword:d.viewerPassword??"corsairs"}),n=!0):n||(t(Ga),wo(Ba,Ga).catch(h=>{console.error("Error creando estado inicial en Firebase:",h)}),n=!0)}),ou(DI,c=>{const d=c.val()||{},h=Object.keys(d).sort((f,g)=>f.localeCompare(g));t({teamsList:h})}),{...Ga,updateTeams:async c=>{const d=e();t(f=>({...f,...c}));const h=await i(c);return h||t({homeTeam:d.homeTeam,awayTeam:d.awayTeam,homeLogo:d.homeLogo,awayLogo:d.awayLogo,viewerPassword:d.viewerPassword}),h},addPoints:async(c,d,h,f="EQUIPO")=>{const g=e(),v=`${c}Score`,y=g[v]||0,w=y+d,p=[{id:Date.now(),team:c,points:d,pts:d,type:h,time:g.timeLeft,period:g.period??1,playerName:f},...g.history||[]].slice(0,50);t({[v]:w,history:p});const _=await i({[v]:w,history:p});return _||t({[v]:y,history:g.history}),_},addPlayer:async(c,d)=>{const h=e(),f=`${c}Roster`,g=h[f]||[],v=[...g,d];t({[f]:v});const y=await i({[f]:v});return y||t({[f]:g}),y},updatePlayer:async(c,d,h)=>{const f=e(),g=`${c}Roster`,v=f[g]||[],y=v.map(m=>m.id===d?{...m,...h}:m);t({[g]:y});const w=await i({[g]:y});return w||t({[g]:v}),w},removePlayer:async(c,d)=>{const h=e(),f=`${c}Roster`,g=h[f]||[],v=g.filter(w=>w.id!==d);t({[f]:v});const y=await i({[f]:v});return y||t({[f]:g}),y},toggleTimer:async()=>{const c=e(),d=!c.isRunning;t({isRunning:d});const h=await i({isRunning:d});return h||t({isRunning:c.isRunning}),h},updateTime:async c=>{const d=e(),h=Math.max(0,c),f={timeLeft:h,...h===0?{isRunning:!1}:{}};t(f);const g=await i(f);return g||t({timeLeft:d.timeLeft,isRunning:d.isRunning}),g},nextPeriod:async()=>{const c=e();if((c.period??1)>=2)return!1;const d={period:2,timeLeft:1200,isRunning:!1,currentDown:1,homeTimeouts:2,awayTimeouts:2,timeoutTimer:null};t(d);const h=await i(d);return h||t({period:c.period,timeLeft:c.timeLeft,isRunning:c.isRunning,currentDown:c.currentDown,homeTimeouts:c.homeTimeouts,awayTimeouts:c.awayTimeouts,timeoutTimer:c.timeoutTimer}),h},saveMatchToHistory:async()=>await l(),finishGame:async(c=!1)=>{if(c&&!await l())return!1;const d=e(),h={isFinished:!0,isRunning:!1,timeoutTimer:null};t(h);const f=await i(h);return f||t({isFinished:d.isFinished,isRunning:d.isRunning,timeoutTimer:d.timeoutTimer}),f},requestTimeout:async c=>{const d=e(),h=c==="home"?"homeTimeouts":"awayTimeouts",f=d[h]??0;if(f<=0)return!1;const g={[h]:f-1,timeoutTimer:60,isRunning:!1};t(g);const v=await i(g);return v||t({[h]:f,timeoutTimer:d.timeoutTimer,isRunning:d.isRunning}),v},setTimeoutTimer:async c=>{const d=e().timeoutTimer;t({timeoutTimer:c});const h=await i({timeoutTimer:c});return h||t({timeoutTimer:d}),h},undoLastPlay:async()=>{const c=e(),d=c.history||[];if(d.length===0)return!1;const h=d[0],f=d.slice(1),g=h.team,v=h.points??h.pts??0,y=`${g}Score`,w=c[y]||0,m=Math.max(0,w-v);t({[y]:m,history:f});const p=await i({[y]:m,history:f});return p||t({[y]:w,history:d}),p},resetGame:async()=>{const c=e(),d={homeScore:0,awayScore:0,timeLeft:1200,isRunning:!1,isFinished:!1,currentDown:1,period:1,history:[],homeTimeouts:2,awayTimeouts:2,timeoutTimer:null};t(d);const h=await i(d);return h||t({homeScore:c.homeScore,awayScore:c.awayScore,timeLeft:c.timeLeft,isRunning:c.isRunning,isFinished:c.isFinished,currentDown:c.currentDown,period:c.period,history:c.history,homeTimeouts:c.homeTimeouts,awayTimeouts:c.awayTimeouts,timeoutTimer:c.timeoutTimer}),h},saveRosterTemplate:async c=>{try{const d=e(),h=c==="home"?d.homeTeam:d.awayTeam,f=c==="home"?d.homeLogo:d.awayLogo,g=c==="home"?d.homeRoster:d.awayRoster,v=Mp(h);return h!=null&&h.trim()?v?!g||g.length===0?(r("No puedes guardar una plantilla sin jugadores."),!1):(await wo(sr(or,`teams/${v}`),{name:h,logo:f??null,roster:g,updatedAt:new Date().toISOString()}),t({lastError:null}),!0):(r("El nombre del equipo no es válido."),!1):(r("Debes poner antes el nombre del equipo."),!1)}catch(d){return console.error("Error guardando plantilla del equipo:",d),r("No se pudo guardar la plantilla del equipo."),!1}},loadRosterTemplate:async c=>{try{const d=e(),h=c==="home"?d.homeTeam:d.awayTeam,f=Mp(h);return h!=null&&h.trim()?f?await a(f,c):(r("El nombre del equipo no es válido."),!1):(r("Debes poner antes el nombre del equipo."),!1)}catch(d){return console.error("Error cargando plantilla del equipo:",d),r("No se pudo cargar la plantilla del equipo."),!1}},loadRosterTemplateByKey:async(c,d)=>await a(c,d),clearError:s}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ie=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:a,...c},d)=>L.createElement("svg",{ref:d,...MI,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${jI(t)}`,l].join(" "),...c},[...e.map(([h,f])=>L.createElement(h,f)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=ie("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=ie("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=ie("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=ie("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ie("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=ie("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=ie("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=ie("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=ie("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=ie("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=ie("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=ie("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=ie("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ie("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=ie("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=ie("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ie("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=ie("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=ie("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=ie("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=ie("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),JI=()=>{const t=He(),e=new URLSearchParams(window.location.search).get("viewer")==="1",n=new URLSearchParams(window.location.search).get("screen")==="1",r=t.timeLeft??1200,s=t.isRunning??!1,i=t.period??1,o=t.toggleTimer??(()=>{}),l=t.updateTime??(()=>{}),a=t.nextPeriod??(()=>{}),c=t.finishGame??(async()=>{});L.useEffect(()=>{let h=null;return s&&r>0&&(h=setInterval(()=>{const f=He.getState(),g=f.timeLeft??0;(f.isRunning??!1)&&(g>1?l(g-1):g===1&&l(0))},1e3)),()=>{h&&clearInterval(h)}},[s,r,l]);const d=h=>{const f=Math.floor(h/60),g=h%60;return`${f}:${g.toString().padStart(2,"0")}`};return n?null:u.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col items-center w-full",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[u.jsx(du,{size:16,className:"text-blue-500"}),u.jsxs("span",{className:"text-[10px] font-black uppercase text-slate-500",children:["Periodo ",i]})]}),u.jsx("div",{className:"text-7xl font-mono font-black text-white mb-6 tabular-nums",children:d(r)}),u.jsxs("div",{className:"grid grid-cols-3 gap-2 w-full",children:[u.jsx("button",{onClick:()=>{e||o()},disabled:e,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":s?"bg-amber-500/10 text-amber-500 border border-amber-500/20 active:scale-95":"bg-blue-600 text-white shadow-lg shadow-blue-900/40 active:scale-95"}`,children:s?u.jsx(WI,{size:20,fill:"currentColor"}):u.jsx(HI,{size:20,fill:"currentColor"})}),u.jsx("button",{onClick:()=>{e||a()},disabled:e||i>=2,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e||i>=2?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-slate-800 text-white border border-slate-700 active:scale-95"}`,title:"Siguiente periodo",children:u.jsx(KI,{size:20})}),u.jsx("button",{onClick:async()=>{if(e||!window.confirm("¿Finalizar partido?"))return;const f=window.confirm("¿Guardar resultado en historial para estadísticas?");await c(f)},disabled:e,className:`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${e?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":"bg-red-600 text-white shadow-lg shadow-red-900/40 active:scale-95"}`,title:"Finalizar partido",children:u.jsx(VI,{size:20})})]}),!e&&u.jsxs("div",{className:"mt-3 flex w-full justify-between text-[10px] font-black uppercase text-slate-500 px-1",children:[u.jsx("span",{children:s?"Pausa":"Iniciar"}),u.jsx("span",{children:i>=2?"Último periodo":"Periodo 2"}),u.jsx("span",{children:"Finalizar"})]})]})},XI=()=>{const t=He(),e=new URLSearchParams(window.location.search).get("viewer")==="1",{homeScore:n,awayScore:r,homeTeam:s,awayTeam:i,homeLogo:o,awayLogo:l,isFinished:a,resetGame:c,history:d}=t,h=t.homeTimeouts??2,f=t.awayTimeouts??2,g=t.requestTimeout??(()=>{}),v=t.timeoutTimer,y=t.setTimeoutTimer??(()=>{}),w=t.undoLastPlay??(()=>{}),m=()=>{const p={},_=D=>{const B=Number(D);if(!Number.isFinite(B))return"-";const pe=Math.floor(B/60),I=B%60;return`${pe}:${I.toString().padStart(2,"0")}`};d.forEach(D=>{const B=D.playerName||"Jugador",pe=D.pts??D.points??0;p[B]=(p[B]||0)+pe});const x=Object.entries(p).sort((D,B)=>B[1]-D[1]),C=x[0]||["-",0],T=C[0],N=C[1];let b="";n>r?b=`🏆 Ganador: ${s}`:r>n?b=`🏆 Ganador: ${i}`:b="🤝 Empate";let U=`
📊 ESTADÍSTICAS INDIVIDUALES`;x.length===0?U+=`
- Sin anotadores`:x.forEach(([D,B])=>{U+=`
- ${D}: ${B} pts`});const A=d.filter(D=>(D.period??1)===1).slice().reverse(),Q=d.filter(D=>(D.period??1)===2).slice().reverse(),F=D=>{const B=D.pts??D.points??0,pe=_(D.time),I=D.playerName||"Jugador",E=D.type||"Anotación";return`- ${pe} | ${I} | ${E} (+${B})`};let G=`
⏱ CRONOLOGÍA DEL PARTIDO`;A.length>0&&(G+=`

1º TIEMPO`,A.forEach(D=>{G+=`
${F(D)}`})),Q.length>0&&(G+=`

2º TIEMPO`,Q.forEach(D=>{G+=`
${F(D)}`})),A.length===0&&Q.length===0&&(G+=`
- Sin jugadas registradas`);const z=`🏈 ACTA FINAL FLAG FOOTBALL

🏠 ${s}: ${n}
🚩 ${i}: ${r}

${b}
⭐ MVP: ${T} (${N} pts)
-----------------------------
${U}
${G}

Generado por Alfonso Scoreboard`;window.open(`https://wa.me/?text=${encodeURIComponent(z)}`,"_blank")};return a?u.jsxs("div",{className:"bg-slate-900 p-8 rounded-3xl border-4 border-yellow-500 text-center shadow-2xl",children:[u.jsx(_y,{className:"mx-auto text-yellow-500 mb-4",size:48}),u.jsx("h2",{className:"text-white text-2xl font-black uppercase mb-8",children:"Finalizado"}),u.jsxs("div",{className:"flex justify-around items-center mb-10 bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[u.jsxs("div",{className:"text-center flex flex-col items-center",children:[o?u.jsx("img",{src:o,alt:`Logo ${s}`,className:"w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"}):u.jsx("div",{className:"w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black",children:"LOGO"}),u.jsx("div",{className:"text-blue-400 font-bold text-[10px] uppercase mb-1",children:s}),u.jsx("div",{className:"text-5xl font-black text-white",children:n})]}),u.jsx("div",{className:"text-slate-700 text-3xl font-light px-3",children:"VS"}),u.jsxs("div",{className:"text-center flex flex-col items-center",children:[l?u.jsx("img",{src:l,alt:`Logo ${i}`,className:"w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"}):u.jsx("div",{className:"w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black",children:"LOGO"}),u.jsx("div",{className:"text-red-400 font-bold text-[10px] uppercase mb-1",children:i}),u.jsx("div",{className:"text-5xl font-black text-white",children:r})]})]}),u.jsxs("button",{onClick:m,className:"w-full bg-green-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 mb-4",children:[u.jsx(gy,{size:20})," ENVIAR ACTA"]}),!e&&u.jsx("button",{onClick:()=>confirm("¿Resetear?")&&c(),className:"text-slate-500 text-[10px] font-black uppercase",children:"Reiniciar"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{className:"bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl",children:[u.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-blue-500"}),o?u.jsx("img",{src:o,alt:`Logo ${s}`,className:"w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"}):u.jsx("div",{className:"w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black",children:"LOGO"}),u.jsx("span",{className:"text-blue-400 font-black text-[10px] uppercase mb-1 text-center",children:s}),u.jsx("span",{className:"text-7xl font-black text-white mb-4",children:n}),u.jsxs("button",{onClick:()=>{e||g("home")},disabled:e||h<=0,className:`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${e?"bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60":h>0?"bg-blue-600/10 border border-blue-500/30 text-blue-400 active:scale-95":"bg-slate-800 text-slate-600 border border-transparent"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[u.jsx(du,{size:14,className:!e&&h>0?"animate-pulse":""}),u.jsx("span",{className:"font-black text-xs",children:"TIMEOUTS"})]}),u.jsx("div",{className:"flex gap-1.5 mt-1",children:[...Array(2)].map((p,_)=>u.jsx("div",{className:`h-1.5 w-6 rounded-full ${_<h?"bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]":"bg-slate-700"}`},_))})]})]}),u.jsxs("div",{className:"bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl",children:[u.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-red-500"}),l?u.jsx("img",{src:l,alt:`Logo ${i}`,className:"w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"}):u.jsx("div",{className:"w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black",children:"LOGO"}),u.jsx("span",{className:"text-red-400 font-black text-[10px] uppercase mb-1 text-center",children:i}),u.jsx("span",{className:"text-7xl font-black text-white mb-4",children:r}),u.jsxs("button",{onClick:()=>{e||g("away")},disabled:e||f<=0,className:`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${e?"bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60":f>0?"bg-red-600/10 border border-red-500/30 text-red-400 active:scale-95":"bg-slate-800 text-slate-600 border border-transparent"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[u.jsx(du,{size:14,className:!e&&f>0?"animate-pulse":""}),u.jsx("span",{className:"font-black text-xs",children:"TIMEOUTS"})]}),u.jsx("div",{className:"flex gap-1.5 mt-1",children:[...Array(2)].map((p,_)=>u.jsx("div",{className:`h-1.5 w-6 rounded-full ${_<f?"bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]":"bg-slate-700"}`},_))})]})]})]}),!e&&d.length>0&&u.jsx("div",{className:"flex justify-center mt-4",children:u.jsxs("button",{onClick:()=>confirm("¿Eliminar última jugada?")&&w(),className:"flex items-center gap-2 px-6 py-2 bg-slate-800 text-slate-400 rounded-full text-[10px] font-black uppercase",children:[u.jsx(qI,{size:12})," CORREGIR ERROR"]})}),typeof v=="number"&&u.jsxs("div",{className:"fixed inset-0 bg-[#020617] flex flex-col items-center justify-center text-center",children:[u.jsx(YI,{size:60,className:"text-yellow-500 mb-4 animate-pulse"}),u.jsx("div",{className:"text-[8rem] font-mono text-yellow-400",children:v}),!e&&u.jsx("button",{onClick:()=>y(null),className:"bg-red-600 text-white px-8 py-4 rounded-2xl font-black mt-6",children:"REANUDAR"})]})]})},$p=({team:t})=>{const e=He(),n=new URLSearchParams(window.location.search).get("viewer")==="1",r=e.addPoints??(()=>{}),s=e.homeRoster??[],i=e.awayRoster??[],o=t==="home"?e.homeTeam||"LOCAL":e.awayTeam||"VISITANTE",l=t==="home"?s:i,[a,c]=L.useState(null),d=[{label:"TOUCHDOWN",pts:6,type:"Touchdown"},{label:"EXTRA (5Y)",pts:1,type:"Extra 1"},{label:"EXTRA (10Y)",pts:2,type:"Extra 2"},{label:"SAFETY",pts:2,type:"Safety"}],h=(g,v)=>{if(!n){if(!l.length){r(t,g,v,"EQUIPO");return}c({points:g,type:v})}},f=g=>{n||!a||(r(t,a.points,a.type,g),c(null))};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-3xl border border-slate-800 flex flex-col gap-3 relative overflow-hidden",children:[u.jsx("h3",{className:`text-[10px] font-black uppercase text-center tracking-widest ${t==="home"?"text-blue-500":"text-red-500"}`,children:o}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:d.map(g=>u.jsxs("button",{onClick:()=>h(g.pts,g.type),disabled:n,className:`p-3 rounded-2xl flex flex-col items-center transition-all shadow-md ${n?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60":t==="home"?"bg-blue-600 active:scale-95":"bg-red-600 active:scale-95"}`,children:[u.jsx("span",{className:`text-xl font-black ${n?"text-slate-500":"text-white"}`,children:g.pts}),u.jsx("span",{className:`text-[7px] font-bold uppercase ${n?"text-slate-500":"text-white"}`,children:g.label})]},g.label))})]}),a!==null&&!n&&u.jsxs("div",{className:"fixed inset-0 z-[9999] bg-slate-950 flex flex-col",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-800",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-black text-yellow-500 uppercase",children:"¿Quién anotó?"}),u.jsxs("p",{className:"text-[10px] text-slate-400 uppercase",children:[a.type," · ",o]})]}),u.jsx("button",{onClick:()=>c(null),className:"text-red-500 text-sm font-black uppercase",children:"✕"})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2",children:l.map((g,v)=>u.jsxs("button",{onClick:()=>f(g.name),className:"w-full flex items-center gap-3 bg-slate-900 p-4 rounded-2xl active:scale-[0.98] transition-all border border-slate-800",children:[u.jsx("div",{className:"w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-slate-800 text-white font-black text-sm",children:g.number??"--"}),u.jsx("div",{className:"text-left min-w-0",children:u.jsx("p",{className:"text-sm font-bold text-white uppercase truncate",children:g.name})})]},g.id??`${g.name}-${v}`))}),u.jsx("div",{className:"p-4 border-t border-slate-800",children:u.jsx("button",{onClick:()=>c(null),className:"w-full bg-red-600 p-3 rounded-2xl text-white font-black uppercase text-xs",children:"Cancelar"})})]})]})},qa=t=>t.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),ZI=()=>{const t=new URLSearchParams(window.location.search).get("viewer")==="1",{homeRoster:e=[],awayRoster:n=[],addPlayer:r,updatePlayer:s,removePlayer:i,saveRosterTemplate:o,loadRosterTemplate:l,loadRosterTemplateByKey:a,homeTeam:c,awayTeam:d,lastError:h,teamsList:f=[]}=He(),[g,v]=L.useState(""),[y,w]=L.useState(""),[m,p]=L.useState(""),[_,x]=L.useState(""),[C,T]=L.useState(""),N=L.useMemo(()=>[...f].sort((E,R)=>E.localeCompare(R)),[f]),b=E=>{T(E),window.setTimeout(()=>{T("")},2500)},U=E=>{if(t||g.trim()==="")return;const R={id:Date.now().toString(),name:g.trim().toUpperCase(),number:y||"00"};r(E,R),v(""),w("")},A=(E,R,Y)=>{t||window.confirm(`¿Seguro que quieres borrar a ${Y}?`)&&i(E,R)},Q=async E=>{await o(E)&&b(`Plantilla guardada: ${E==="home"?c||"LOCAL":d||"VISITANTE"}`)},F=async E=>{await l(E)&&b(`Plantilla cargada: ${E==="home"?c||"LOCAL":d||"VISITANTE"}`)},G=async E=>{const R=E==="home"?m:_;if(!R)return;await a(R,E)&&b(`Plantilla cargada: ${qa(R)}`)},z=async E=>{if(t)return;const R=E==="home"?e:n,Y=E==="home"?c:d;if(!R.length)return;const ue=`¿Seguro que quieres vaciar el roster de ${Y||(E==="home"?"LOCAL":"VISITANTE")}?`;if(window.confirm(ue)){for(const ut of R)await i(E,ut.id);b(`Roster vaciado: ${Y||(E==="home"?"LOCAL":"VISITANTE")}`)}},D="flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-sm transition-colors",B="bg-slate-800 text-slate-500 cursor-not-allowed",pe="rounded-md bg-slate-900 border border-slate-700 text-white outline-none px-2 py-1",I="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 gap-2";return u.jsxs("div",{className:"flex flex-col gap-4 mt-6",children:[u.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-5 border-b border-slate-800 pb-3",children:[u.jsx(Ka,{size:18,className:"text-yellow-500"}),u.jsx("h3",{className:"text-[11px] font-black uppercase text-slate-400 tracking-widest",children:"Gestión de jugadores"})]}),h&&u.jsx("div",{className:"mb-4 rounded-xl border border-red-700 bg-red-950/40 px-3 py-2 text-sm text-red-300",children:h}),!!C&&u.jsx("div",{className:"mb-4 rounded-xl border border-green-700 bg-green-950/40 px-3 py-2 text-sm text-green-300",children:C}),u.jsxs("div",{className:"flex gap-2 mb-4",children:[u.jsx("input",{type:"text",placeholder:"Nombre...",value:g,onChange:E=>v(E.target.value),disabled:t,className:`flex-1 rounded-xl p-3 text-sm outline-none ${t?"bg-slate-900 border border-slate-800 text-slate-500":"bg-slate-950 border border-slate-800 text-white"}`}),u.jsx("input",{type:"text",placeholder:"Nº",value:y,onChange:E=>w(E.target.value),disabled:t,className:`w-16 rounded-xl p-3 text-sm text-center font-bold outline-none ${t?"bg-slate-900 border border-slate-800 text-slate-500":"bg-slate-950 border border-slate-800 text-white"}`})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[u.jsxs("button",{onClick:()=>U("home"),disabled:t,className:`${D} ${t?B:"bg-blue-600 hover:bg-blue-500 text-white"}`,children:[u.jsx(Ka,{size:18}),"Añadir local"]}),u.jsxs("button",{onClick:()=>U("away"),disabled:t,className:`${D} ${t?B:"bg-red-600 hover:bg-red-500 text-white"}`,children:[u.jsx(Ka,{size:18}),"Añadir visitante"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[u.jsxs("button",{onClick:()=>Q("home"),disabled:t,className:`${D} ${t?B:"bg-green-600 hover:bg-green-500 text-white"}`,children:[u.jsx(zp,{size:18}),"Guardar plantilla local"]}),u.jsxs("button",{onClick:()=>Q("away"),disabled:t,className:`${D} ${t?B:"bg-green-600 hover:bg-green-500 text-white"}`,children:[u.jsx(zp,{size:18}),"Guardar plantilla visitante"]}),u.jsxs("button",{onClick:()=>F("home"),disabled:t,className:`${D} ${t?B:"bg-yellow-500 hover:bg-yellow-400 text-black"}`,children:[u.jsx(br,{size:18}),"Cargar por nombre local"]}),u.jsxs("button",{onClick:()=>F("away"),disabled:t,className:`${D} ${t?B:"bg-yellow-500 hover:bg-yellow-400 text-black"}`,children:[u.jsx(br,{size:18}),"Cargar por nombre visitante"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[u.jsxs("button",{onClick:()=>z("home"),disabled:t,className:`${D} ${t?B:"bg-slate-700 hover:bg-slate-600 text-white"}`,children:[u.jsx(hu,{size:18}),"Vaciar local"]}),u.jsxs("button",{onClick:()=>z("away"),disabled:t,className:`${D} ${t?B:"bg-slate-700 hover:bg-slate-600 text-white"}`,children:[u.jsx(hu,{size:18}),"Vaciar visitante"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("select",{value:m,onChange:E=>p(E.target.value),disabled:t,className:"h-12 rounded-xl px-3 text-sm bg-slate-950 border border-slate-800 text-white outline-none",children:[u.jsx("option",{value:"",children:"Equipo guardado local..."}),N.map(E=>u.jsx("option",{value:E,children:qa(E)},E))]}),u.jsxs("button",{onClick:()=>G("home"),disabled:t,className:`${D} ${t?B:"bg-cyan-600 hover:bg-cyan-500 text-white"}`,children:[u.jsx(br,{size:18}),"Cargar selección local"]})]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("select",{value:_,onChange:E=>x(E.target.value),disabled:t,className:"h-12 rounded-xl px-3 text-sm bg-slate-950 border border-slate-800 text-white outline-none",children:[u.jsx("option",{value:"",children:"Equipo guardado visitante..."}),N.map(E=>u.jsx("option",{value:E,children:qa(E)},E))]}),u.jsxs("button",{onClick:()=>G("away"),disabled:t,className:`${D} ${t?B:"bg-orange-500 hover:bg-orange-400 text-white"}`,children:[u.jsx(br,{size:18}),"Cargar selección visitante"]})]})]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{className:"bg-slate-900 p-4 rounded-2xl border border-slate-800",children:[u.jsxs("h4",{className:"text-blue-500 font-bold text-xs mb-3 tracking-wide",children:["LOCAL ",c?`- ${c}`:""]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[e.length===0&&u.jsx("p",{className:"text-slate-500 text-xs italic",children:"Sin jugadores"}),e.map(E=>u.jsxs("div",{className:I,children:[u.jsx("input",{type:"text",value:E.number??"",onChange:R=>s("home",E.id,{number:R.target.value}),disabled:t,className:`w-12 text-center text-xs font-bold text-blue-400 ${pe} ${t?"opacity-80 cursor-default":""}`}),u.jsx("input",{type:"text",value:E.name??"",onChange:R=>s("home",E.id,{name:R.target.value.toUpperCase()}),disabled:t,className:`flex-1 text-sm font-medium min-w-0 ${pe} ${t?"opacity-80 cursor-default":""}`}),!t&&u.jsx("button",{onClick:()=>A("home",E.id,E.name),className:"text-slate-400 hover:text-red-400 transition shrink-0",children:u.jsx(Vp,{size:18})})]},E.id))]})]}),u.jsxs("div",{className:"bg-slate-900 p-4 rounded-2xl border border-slate-800",children:[u.jsxs("h4",{className:"text-red-500 font-bold text-xs mb-3 tracking-wide",children:["VISITANTE ",d?`- ${d}`:""]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[n.length===0&&u.jsx("p",{className:"text-slate-500 text-xs italic",children:"Sin jugadores"}),n.map(E=>u.jsxs("div",{className:I,children:[u.jsx("input",{type:"text",value:E.number??"",onChange:R=>s("away",E.id,{number:R.target.value}),disabled:t,className:`w-12 text-center text-xs font-bold text-red-400 ${pe} ${t?"opacity-80 cursor-default":""}`}),u.jsx("input",{type:"text",value:E.name??"",onChange:R=>s("away",E.id,{name:R.target.value.toUpperCase()}),disabled:t,className:`flex-1 text-sm font-medium min-w-0 ${pe} ${t?"opacity-80 cursor-default":""}`}),!t&&u.jsx("button",{onClick:()=>A("away",E.id,E.name),className:"text-slate-400 hover:text-red-400 transition shrink-0",children:u.jsx(Vp,{size:18})})]},E.id))]})]})]})]})},eN=()=>{const e=He().history??[],n=r=>{const s=Number(r);if(!Number.isFinite(s))return"-";const i=Math.floor(s/60),o=s%60;return`${i}:${o.toString().padStart(2,"0")}`};return u.jsxs("div",{className:"bg-slate-900/80 rounded-[2rem] border border-slate-800 overflow-hidden shadow-xl",children:[u.jsxs("div",{className:"flex items-center gap-3 px-6 py-5 border-b border-slate-800",children:[u.jsx(vl,{size:18,className:"text-blue-500"}),u.jsx("h3",{className:"text-[11px] font-black uppercase tracking-[0.25em] text-slate-300",children:"Historial de jugadas"})]}),u.jsxs("div",{className:"grid grid-cols-[110px_1fr_90px] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 border-b border-slate-800",children:[u.jsx("div",{children:"Reloj"}),u.jsx("div",{children:"Jugador"}),u.jsx("div",{className:"text-right",children:"Pts"})]}),e.length===0?u.jsx("div",{className:"px-6 py-10 text-center text-slate-500 text-sm font-bold",children:"Sin jugadas registradas"}):u.jsx("div",{children:e.slice(0,10).map((r,s)=>{const i=r.pts??r.points??0,o=r.playerName||"Jugador",l=r.type||"Anotación",a=n(r.time);return u.jsxs("div",{className:"grid grid-cols-[110px_1fr_90px] items-center gap-4 px-6 py-5 border-b border-slate-800/70 last:border-b-0",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-white text-2xl font-black tabular-nums",children:a}),u.jsxs("div",{className:"text-[10px] font-black uppercase text-slate-500 mt-1",children:["Tipo: ",l]})]}),u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"}),u.jsx("div",{className:"text-white text-2xl font-black uppercase truncate",children:o})]}),u.jsx("div",{className:"flex justify-end",children:u.jsxs("div",{className:"min-w-[56px] text-center bg-blue-900/50 text-blue-300 px-4 py-2 rounded-2xl text-2xl font-black",children:["+",i]})})]},r.id??s)})}),u.jsx("div",{className:"px-6 py-4 text-center text-[10px] uppercase text-slate-600 border-t border-slate-800",children:"Últimas acciones registradas"})]})},tN=()=>{const{currentDown:t,updateTeams:e}=He(),n=new URLSearchParams(window.location.search).get("viewer")==="1",r=typeof t=="number"&&t>=1&&t<=4?t:1,s=l=>{n||e({currentDown:l})},i=()=>{n||(r<4?s(r+1):s(1))},o=()=>{n||s(1)};return u.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-[2.5rem] border border-slate-800 shadow-xl mt-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4 px-2",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full animate-pulse"}),u.jsx("span",{className:"text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]",children:"Down Progress"})]}),u.jsx("button",{onClick:o,disabled:n,className:`transition-colors ${n?"text-slate-600 cursor-not-allowed opacity-60":"text-slate-500 hover:text-white"}`,title:"Reiniciar a 1º Down",children:u.jsx(BI,{size:16})})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"flex-1 grid grid-cols-4 gap-2",children:[1,2,3,4].map(l=>u.jsxs("button",{onClick:()=>s(l),disabled:n,className:`relative h-14 rounded-2xl font-black text-xl transition-all flex items-center justify-center ${r===l?n?"bg-yellow-500/50 text-slate-200 border border-yellow-500/30 opacity-80":"bg-yellow-500 text-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-105 z-10":n?"bg-slate-800 text-slate-600 border border-slate-700/50 cursor-not-allowed opacity-60":"bg-slate-800 text-slate-500 border border-slate-700/50"}`,children:[l,r===l&&u.jsx("span",{className:"absolute -bottom-1 w-6 h-1 bg-slate-900 rounded-full opacity-20"})]},l))}),u.jsx("button",{onClick:i,disabled:n,className:`p-4 rounded-2xl border transition-all ${n?"bg-slate-800 border-slate-700 text-slate-600 cursor-not-allowed opacity-60":"bg-slate-800 border-slate-700 text-yellow-500 active:scale-90"}`,title:"Siguiente down",children:u.jsx(zI,{size:24,strokeWidth:3})})]}),u.jsx("div",{className:"mt-4 text-center",children:u.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest",children:r===4?"¡ÚLTIMO INTENTO!":`${r}º DOWN`})})]})},nN=()=>{const t=He(),e=t.homeTeam??"LOCAL",n=t.awayTeam??"VISITANTE",r=t.homeScore??0,s=t.awayScore??0,i=t.homeLogo??null,o=t.awayLogo??null,l=t.timeLeft??1200,a=t.period??1,c=t.currentDown??1,d=t.homeTimeouts??2,h=t.awayTimeouts??2,f=t.isFinished??!1,g=t.timeoutTimer??null,v=t.history??[],[y,w]=L.useState(!1),m=v.length>0?v[0]:null,p=L.useRef(null),_=L.useRef(!1),x=L.useRef(null);L.useEffect(()=>{if(m!=null&&m.id){if(!_.current){_.current=!0,p.current=m.id;return}m.id!==p.current&&(p.current=m.id,w(!0),x.current&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{w(!1),x.current=null},3500))}},[m==null?void 0:m.id]),L.useEffect(()=>()=>{x.current&&window.clearTimeout(x.current)},[]);const C=F=>{const G=Math.floor(F/60),z=F%60;return`${G}:${z.toString().padStart(2,"0")}`},T=F=>{const G=Number(F);if(!Number.isFinite(G))return"-";const z=Math.floor(G/60),D=G%60;return`${z}:${D.toString().padStart(2,"0")}`},N=(F,G)=>u.jsx("div",{className:"flex gap-2 justify-center mt-3",children:[0,1].map(z=>u.jsx("div",{className:`h-3 w-12 rounded-full ${z<F?G:"bg-slate-700"}`},z))}),b=L.useMemo(()=>v.slice(0,5),[v]),U=F=>F==="home"?{strongText:"text-blue-400",badge:"bg-blue-500/15 text-blue-300 border border-blue-500/30",row:"border-l-4 border-blue-500",glow:"shadow-[0_0_20px_rgba(59,130,246,0.15)]",overlay:"from-blue-600/30 to-blue-400/10 border-blue-400/30"}:{strongText:"text-red-400",badge:"bg-red-500/15 text-red-300 border border-red-500/30",row:"border-l-4 border-red-500",glow:"shadow-[0_0_20px_rgba(239,68,68,0.15)]",overlay:"from-red-600/30 to-red-400/10 border-red-400/30"},A=F=>{const G=((F==null?void 0:F.type)||"Anotación").toString().toUpperCase(),z=(F==null?void 0:F.pts)??(F==null?void 0:F.points)??0;return`${G} +${z}`},Q=(m==null?void 0:m.team)==="home"?U("home"):U("away");return typeof g=="number"?u.jsxs("div",{className:"min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6",children:[u.jsx("div",{className:"text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-yellow-500 mb-6",children:"Tiempo muerto"}),u.jsx("div",{className:"text-[8rem] md:text-[12rem] leading-none font-mono font-black text-yellow-400 tabular-nums animate-pulse",children:g})]}):f?u.jsxs("div",{className:"min-h-screen bg-slate-950 text-white px-8 py-8 flex flex-col justify-center",children:[u.jsx("div",{className:"text-center text-yellow-500 text-4xl md:text-6xl font-black uppercase mb-8",children:"Final del partido"}),u.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center gap-8",children:[u.jsxs("div",{className:"flex flex-col items-center",children:[i?u.jsx("img",{src:i,alt:`Logo ${e}`,className:"w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):u.jsx("div",{className:"w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4",children:"LOGO"}),u.jsx("div",{className:"text-blue-400 text-xl md:text-2xl font-black uppercase text-center",children:e}),u.jsx("div",{className:"text-white text-7xl md:text-8xl font-black mt-4",children:r})]}),u.jsx("div",{className:"text-slate-600 text-4xl md:text-5xl font-light px-4",children:"VS"}),u.jsxs("div",{className:"flex flex-col items-center",children:[o?u.jsx("img",{src:o,alt:`Logo ${n}`,className:"w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):u.jsx("div",{className:"w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4",children:"LOGO"}),u.jsx("div",{className:"text-red-400 text-xl md:text-2xl font-black uppercase text-center",children:n}),u.jsx("div",{className:"text-white text-7xl md:text-8xl font-black mt-4",children:s})]})]})]}):u.jsxs("div",{className:"min-h-screen bg-slate-950 text-white px-6 py-6 overflow-hidden",children:[y&&m&&u.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none",children:u.jsx("div",{className:`mx-6 w-full max-w-4xl rounded-[2rem] border bg-gradient-to-br ${Q.overlay} backdrop-blur-md px-8 py-10 shadow-2xl animate-[pulse_1.1s_ease-in-out_infinite]`,children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:`text-2xl md:text-3xl font-black uppercase tracking-[0.2em] ${Q.strongText}`,children:"Nueva anotación"}),u.jsx("div",{className:"mt-4 text-4xl md:text-7xl font-black text-white uppercase leading-tight",children:A(m)}),u.jsx("div",{className:"mt-4 text-xl md:text-3xl font-black text-slate-200 uppercase",children:m.playerName||"Jugador"}),u.jsx("div",{className:`mt-3 text-lg md:text-2xl font-black uppercase ${Q.strongText}`,children:m.team==="home"?e:n}),u.jsx("div",{className:"mt-4 text-yellow-400 font-mono text-2xl md:text-4xl font-black",children:T(m.time)})]})})}),u.jsxs("div",{className:"max-w-7xl mx-auto flex h-full flex-col gap-6",children:[u.jsxs("div",{className:"grid grid-cols-[220px_minmax(0,1fr)_220px] items-center gap-6",children:[u.jsxs("div",{className:"flex flex-col items-center",children:[i?u.jsx("img",{src:i,alt:`Logo ${e}`,className:"w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):u.jsx("div",{className:"w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4",children:"LOGO"}),u.jsx("div",{className:"text-blue-400 text-2xl font-black uppercase text-center leading-tight",children:e}),N(d,"bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]")]}),u.jsxs("div",{className:"flex flex-col items-center min-w-0",children:[u.jsxs("div",{className:"font-black leading-none tabular-nums text-white whitespace-nowrap",style:{fontSize:"clamp(4rem, 14vw, 10rem)"},children:[r," - ",s]}),u.jsx("div",{className:"mt-4 font-mono font-black text-yellow-400 leading-none tabular-nums whitespace-nowrap",style:{fontSize:"clamp(3rem, 10vw, 7rem)"},children:C(l)}),u.jsxs("div",{className:"mt-4 flex gap-6 text-base md:text-2xl font-black uppercase text-slate-300",children:[u.jsxs("span",{children:["Periodo ",a]}),u.jsxs("span",{children:[c,"º Down"]})]})]}),u.jsxs("div",{className:"flex flex-col items-center",children:[o?u.jsx("img",{src:o,alt:`Logo ${n}`,className:"w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"}):u.jsx("div",{className:"w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4",children:"LOGO"}),u.jsx("div",{className:"text-red-400 text-2xl font-black uppercase text-center leading-tight",children:n}),N(h,"bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]")]})]}),u.jsxs("div",{className:"w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-5",children:[u.jsx("div",{className:"text-center text-slate-300 text-2xl font-black uppercase mb-4",children:"Últimas anotaciones"}),b.length===0?u.jsx("div",{className:"text-center text-slate-500 font-bold py-6",children:"Sin anotaciones todavía"}):u.jsx("div",{className:"space-y-3",children:b.map((F,G)=>{const z=F.pts??F.points??0,D=F.playerName||"Jugador",B=F.type||"Anotación",pe=F.team==="home"?e:n,I=U(F.team==="home"?"home":"away"),E=T(F.time),R=G===0;return u.jsxs("div",{className:`grid grid-cols-[110px_minmax(0,1fr)_260px_90px] items-center gap-4 bg-slate-950/70 rounded-2xl px-4 py-3 ${I.row} ${R?I.glow:""}`,children:[u.jsx("div",{className:"text-yellow-400 font-mono font-black text-2xl whitespace-nowrap",children:E}),u.jsx("div",{className:"text-white font-black text-2xl uppercase truncate",children:D}),u.jsx("div",{className:"flex items-center justify-start min-w-0",children:u.jsxs("span",{className:`px-3 py-1 rounded-full text-base font-black uppercase truncate max-w-full ${I.badge}`,children:[pe," · ",B]})}),u.jsxs("div",{className:"text-white font-black text-3xl text-right whitespace-nowrap",children:["+",z]})]},F.id??`${D}-${G}`)})})]})]})]})},rN=()=>{var v,y;const[t,e]=L.useState([]),[n,r]=L.useState(!0),[s,i]=L.useState(null),[o,l]=L.useState(null);L.useEffect(()=>{const w=sr(or,"matches"),m=ou(w,p=>{const _=p.val();if(!_){e([]),r(!1);return}const x=Object.entries(_).map(([C,T])=>({id:C,...T}));x.sort((C,T)=>{const N=new Date(C.savedAt||0).getTime();return new Date(T.savedAt||0).getTime()-N}),e(x),r(!1)});return()=>m()},[]);const a=L.useMemo(()=>{if(!(o!=null&&o.history))return[];const w={};return o.history.forEach(m=>{const p=m.playerName||"Jugador",_=m.pts??m.points??0;w[p]=(w[p]||0)+_}),Object.entries(w).map(([m,p])=>({name:m,points:p})).sort((m,p)=>p.points-m.points)},[o]),c=w=>{if(!w)return"-";const m=new Date(w);return Number.isNaN(m.getTime())?"-":m.toLocaleString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})},d=w=>{const m=Number(w);if(!Number.isFinite(m))return"-";const p=Math.floor(m/60),_=m%60;return`${p}:${_.toString().padStart(2,"0")}`},h=w=>w.isDraw?"Empate":w.winner||"-",f=async w=>{if(window.confirm(`¿Borrar el partido ${w.homeTeam||"LOCAL"} vs ${w.awayTeam||"VISITANTE"}?`))try{i(w.id),await lT(sr(or,`matches/${w.id}`)),(o==null?void 0:o.id)===w.id&&l(null)}catch(p){console.error("Error borrando partido:",p),window.alert("No se pudo borrar el partido.")}finally{i(null)}},g=w=>{var F,G;const m={};(w.history||[]).forEach(z=>{const D=z.playerName||"Jugador",B=z.pts??z.points??0;m[D]=(m[D]||0)+B});const p=Object.entries(m).sort((z,D)=>Number(D[1])-Number(z[1])),_=((F=w.mvp)==null?void 0:F.name)||"-",x=((G=w.mvp)==null?void 0:G.points)??0;let C="";w.isDraw?C="🤝 Empate":C=`🏆 Ganador: ${w.winner||"-"}`;let T=`
📊 ESTADÍSTICAS INDIVIDUALES`;p.length===0?T+=`
- Sin anotadores`:p.forEach(([z,D])=>{T+=`
- ${z}: ${D} pts`});const N=(w.history||[]).filter(z=>(z.period??1)===1).slice().reverse(),b=(w.history||[]).filter(z=>(z.period??1)===2).slice().reverse(),U=z=>{const D=z.pts??z.points??0,B=d(z.time),pe=z.playerName||"Jugador",I=z.type||"Anotación";return`- ${B} | ${pe} | ${I} (+${D})`};let A=`
⏱ CRONOLOGÍA DEL PARTIDO`;N.length>0&&(A+=`

1º TIEMPO`,N.forEach(z=>{A+=`
${U(z)}`})),b.length>0&&(A+=`

2º TIEMPO`,b.forEach(z=>{A+=`
${U(z)}`})),N.length===0&&b.length===0&&(A+=`
- Sin jugadas registradas`);const Q=`🏈 ACTA FINAL FLAG FOOTBALL

📅 ${c(w.savedAt)}

🏠 ${w.homeTeam||"LOCAL"}: ${w.homeScore??0}
🚩 ${w.awayTeam||"VISITANTE"}: ${w.awayScore??0}

${C}
⭐ MVP: ${_} (${x} pts)
-----------------------------
${T}
${A}

Generado por Alfonso Scoreboard`;window.open(`https://wa.me/?text=${encodeURIComponent(Q)}`,"_blank")};return n?u.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx(vl,{size:18,className:"text-blue-500"}),u.jsx("h3",{className:"text-sm font-black uppercase text-slate-300",children:"Historial de partidos"})]}),u.jsx("p",{className:"text-slate-500 font-bold",children:"Cargando historial..."})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[u.jsx(vl,{size:18,className:"text-blue-500"}),u.jsx("h3",{className:"text-sm font-black uppercase text-slate-300",children:"Historial de partidos"})]}),t.length===0?u.jsx("p",{className:"text-slate-500 font-bold",children:"Todavía no hay partidos guardados."}):u.jsx("div",{className:"space-y-4",children:t.map(w=>{var m,p;return u.jsxs("button",{onClick:()=>l(w),className:"w-full text-left bg-slate-950 border border-slate-800 rounded-2xl p-4 transition-all active:scale-[0.99]",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-slate-400 text-xs font-black uppercase",children:[u.jsx(UI,{size:14}),u.jsx("span",{children:c(w.savedAt)})]}),u.jsx("button",{onClick:_=>{_.stopPropagation(),f(w)},disabled:s===w.id,className:`p-2 rounded-xl border transition-all ${s===w.id?"bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed":"bg-red-950/30 text-red-400 border-red-500/30 active:scale-95"}`,title:"Borrar partido",children:u.jsx(hu,{size:16})})]}),u.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-blue-400 text-xs font-black uppercase",children:w.homeTeam||"LOCAL"}),u.jsx("div",{className:"text-red-400 text-xs font-black uppercase mt-1",children:w.awayTeam||"VISITANTE"})]}),u.jsx("div",{className:"text-right",children:u.jsxs("div",{className:"text-white text-2xl font-black",children:[w.homeScore??0," - ",w.awayScore??0]})})]}),u.jsxs("div",{className:"flex items-center gap-2 text-slate-300 text-sm font-bold mb-2",children:[u.jsx(_y,{size:14,className:"text-yellow-500"}),u.jsxs("span",{children:["Resultado: ",h(w)]})]}),u.jsxs("div",{className:"text-slate-400 text-sm font-bold",children:["MVP: ",((m=w.mvp)==null?void 0:m.name)||"-"," (",((p=w.mvp)==null?void 0:p.points)??0," pts)"]})]},w.id)})})]}),o&&u.jsx("div",{className:"fixed inset-0 z-[10020] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4",children:u.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl",children:[u.jsxs("div",{className:"flex items-start justify-between gap-4 mb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-white text-xl font-black uppercase",children:"Detalle del partido"}),u.jsx("p",{className:"text-slate-400 text-sm font-bold mt-1",children:c(o.savedAt)})]}),u.jsx("button",{onClick:()=>l(null),className:"p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700",title:"Cerrar",children:u.jsx(QI,{size:18})})]}),u.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5",children:[u.jsxs("div",{className:"flex items-center justify-between gap-4",children:[u.jsxs("div",{className:"text-left",children:[u.jsx("div",{className:"text-blue-400 text-xs font-black uppercase",children:o.homeTeam||"LOCAL"}),u.jsx("div",{className:"text-red-400 text-xs font-black uppercase mt-2",children:o.awayTeam||"VISITANTE"})]}),u.jsx("div",{className:"text-right",children:u.jsxs("div",{className:"text-white text-3xl font-black",children:[o.homeScore??0," - ",o.awayScore??0]})})]}),u.jsxs("div",{className:"mt-4 text-slate-300 text-sm font-bold",children:["Resultado: ",h(o)]}),u.jsxs("div",{className:"mt-1 text-slate-400 text-sm font-bold",children:["MVP: ",((v=o.mvp)==null?void 0:v.name)||"-"," (",((y=o.mvp)==null?void 0:y.points)??0," pts)"]}),u.jsxs("button",{onClick:()=>g(o),className:"mt-4 w-full bg-green-600 text-white py-3 rounded-2xl font-black flex items-center justify-center gap-2",children:[u.jsx(gy,{size:18}),"ENVIAR ACTA POR WHATSAPP"]})]}),u.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx(FI,{size:16,className:"text-blue-400"}),u.jsx("h3",{className:"text-slate-300 text-sm font-black uppercase",children:"Estadísticas por jugador"})]}),a.length===0?u.jsx("p",{className:"text-slate-500 font-bold",children:"Sin estadísticas disponibles."}):u.jsx("div",{className:"space-y-3",children:a.map((w,m)=>u.jsxs("div",{className:"flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3",children:[u.jsx("div",{className:"text-white font-black uppercase truncate",children:w.name}),u.jsxs("div",{className:"text-blue-300 font-black text-xl",children:[w.points," pts"]})]},`${w.name}-${m}`))})]}),u.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4",children:[u.jsx("h3",{className:"text-slate-300 text-sm font-black uppercase mb-4",children:"Cronología"}),!o.history||o.history.length===0?u.jsx("p",{className:"text-slate-500 font-bold",children:"Sin jugadas registradas."}):u.jsx("div",{className:"space-y-3",children:o.history.slice().reverse().map((w,m)=>{const p=w.pts??w.points??0,_=w.playerName||"Jugador",x=w.type||"Anotación",C=w.team==="home"?o.homeTeam||"LOCAL":o.awayTeam||"VISITANTE";return u.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl px-4 py-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-white font-black uppercase",children:_}),u.jsxs("div",{className:"text-slate-400 text-sm font-bold",children:[C," · ",x]})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("div",{className:"text-yellow-400 font-mono font-black",children:d(w.time)}),u.jsxs("div",{className:"text-blue-300 font-black",children:["+",p]})]})]}),u.jsxs("div",{className:"mt-2 text-slate-500 text-xs font-black uppercase",children:["Periodo ",w.period??1]})]},w.id??m)})})]})]})})]})},Qa=t=>t.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase());function sN(){const t=He(),e=new URLSearchParams(window.location.search).get("viewer")==="1",n=new URLSearchParams(window.location.search).get("screen")==="1",r="viewer-auth-ok",{homeTeam:s,awayTeam:i,homeLogo:o,awayLogo:l,viewerPassword:a,updateTeams:c,isFinished:d,timeoutTimer:h,setTimeoutTimer:f,teamsList:g=[],loadRosterTemplateByKey:v,lastError:y}=t,[w,m]=L.useState(!1),[p,_]=L.useState(!1),[x,C]=L.useState(""),[T,N]=L.useState(""),[b,U]=L.useState(null),[A,Q]=L.useState(null),[F,G]=L.useState("corsairs"),[z,D]=L.useState(""),[B,pe]=L.useState(""),[I,E]=L.useState(""),[R,Y]=L.useState(""),[ue,ut]=L.useState(!e),[Et,hr]=L.useState(""),[Pt,jn]=L.useState(!e&&!n),[ps,vy]=L.useState(null),[nh,yy]=L.useState(""),[rh,sh]=L.useState(""),[ih,oh]=L.useState(""),[Zl,lh]=L.useState(!1),ah=L.useMemo(()=>[...g].sort((O,ge)=>O.localeCompare(ge)),[g]),ea=O=>{E(O),window.setTimeout(()=>{E("")},2500)};L.useEffect(()=>{s&&C(s),i&&N(i),U(o??null),Q(l??null),G(a??"corsairs")},[s,i,o,l,a]),L.useEffect(()=>{if(!e){ut(!0);return}const O=sessionStorage.getItem(r);ut(O==="true")},[e]),L.useEffect(()=>{if(typeof h!="number"||h<=0)return;const O=window.setInterval(()=>{const ge=He.getState().timeoutTimer;typeof ge=="number"&&(ge>1?He.getState().setTimeoutTimer(ge-1):He.getState().setTimeoutTimer(null))},1e3);return()=>window.clearInterval(O)},[h,f]),L.useEffect(()=>{if(e||n){jn(!1);return}const O=y1(Ha,ge=>{vy(ge),jn(!1)});return()=>O()},[e,n]);const ch=(O,ge)=>{var hh;const Fn=(hh=O.target.files)==null?void 0:hh[0];if(!Fn)return;const At=new FileReader;At.onloadend=()=>{const na=typeof At.result=="string"?At.result:null;na&&(ge==="home"?U(na):Q(na))},At.readAsDataURL(Fn)},wy=O=>{O.preventDefault(),R===(a??"corsairs")?(sessionStorage.setItem(r,"true"),ut(!0),hr("")):hr("Contraseña incorrecta")},xy=async O=>{O.preventDefault(),oh(""),lh(!0);try{await g1(Ha,nh.trim(),rh)}catch(ge){console.error("Error login admin:",ge),oh("Email o contraseña incorrectos")}finally{lh(!1)}},Ey=async()=>{try{await w1(Ha),m(!1),_(!1),sh("")}catch(O){console.error("Error cerrando sesión:",O)}},uh=async O=>{const ge=O==="home"?z:B;if(!ge){E("Selecciona antes un equipo guardado.");return}if(!await v(ge,O)){E("No se pudo cargar el equipo seleccionado.");return}const At=He.getState();O==="home"?(C(At.homeTeam||""),U(At.homeLogo??null)):(N(At.awayTeam||""),Q(At.awayLogo??null)),ea(`${O==="home"?"Local":"Visitante"} cargado: ${Qa(ge)}`)},dh=async O=>{const ge=He.getState();if(O==="home"){D(""),C(""),U(null);for(const Fn of ge.homeRoster||[])await ge.removePlayer("home",Fn.id);await c({homeTeam:"",homeLogo:null}),ea("Equipo local preparado para crear uno nuevo.")}else{pe(""),N(""),Q(null);for(const Fn of ge.awayRoster||[])await ge.removePlayer("away",Fn.id);await c({awayTeam:"",awayLogo:null}),ea("Equipo visitante preparado para crear uno nuevo.")}};if(!s&&!i)return u.jsxs("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white",children:[u.jsx(jp,{className:"w-10 h-10 text-blue-500 animate-spin mb-4"}),u.jsx("p",{className:"text-slate-400 font-bold animate-pulse",children:"CONECTANDO CON BÉLGICA..."})]});if(Pt)return u.jsxs("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white",children:[u.jsx(jp,{className:"w-10 h-10 text-blue-500 animate-spin mb-4"}),u.jsx("p",{className:"text-slate-400 font-bold animate-pulse",children:"CARGANDO ACCESO..."})]});if(e&&!ue)return u.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white",children:u.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl",children:[u.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[u.jsx(Fp,{className:"text-yellow-500 mb-3",size:34}),u.jsx("h1",{className:"text-xl font-black uppercase",children:"Modo visor protegido"}),u.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Introduce la contraseña para ver el marcador."})]}),u.jsxs("form",{onSubmit:wy,className:"space-y-4",children:[u.jsx("input",{type:"password",value:R,onChange:O=>Y(O.target.value),placeholder:"Contraseña",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),Et&&u.jsx("p",{className:"text-red-400 text-sm font-bold",children:Et}),u.jsx("button",{type:"submit",className:"w-full bg-blue-600 py-4 rounded-2xl font-black uppercase",children:"Entrar"})]})]})});if(n)return u.jsx(nN,{});if(!e&&!ps)return u.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white",children:u.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl",children:[u.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[u.jsx(Fp,{className:"text-blue-500 mb-3",size:34}),u.jsx("h1",{className:"text-xl font-black uppercase",children:"Acceso administrador"}),u.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Inicia sesión para modificar el marcador y el historial."})]}),u.jsxs("form",{onSubmit:xy,className:"space-y-4",children:[u.jsx("input",{type:"email",value:nh,onChange:O=>yy(O.target.value),placeholder:"Email",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),u.jsx("input",{type:"password",value:rh,onChange:O=>sh(O.target.value),placeholder:"Contraseña",className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"}),ih&&u.jsx("p",{className:"text-red-400 text-sm font-bold",children:ih}),u.jsx("button",{type:"submit",disabled:Zl,className:`w-full py-4 rounded-2xl font-black uppercase ${Zl?"bg-slate-700 text-slate-400 cursor-not-allowed":"bg-blue-600 text-white"}`,children:Zl?"Entrando...":"Entrar como admin"})]})]})});const Sy=()=>{c({homeTeam:x,awayTeam:T,homeLogo:b,awayLogo:A,viewerPassword:F||"corsairs"}),sessionStorage.removeItem(r),m(!1)},ta=typeof h=="number";return u.jsxs("div",{className:"min-h-screen bg-slate-950 p-4 flex flex-col gap-4 max-w-md mx-auto text-white pb-10",children:[u.jsxs("div",{className:"flex justify-between items-center p-2",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-blue-500 font-black italic uppercase text-xs tracking-tighter",children:"Flag Score Alfonso"}),(ps==null?void 0:ps.email)&&u.jsxs("p",{className:"text-[10px] text-slate-500 font-bold mt-1",children:["Admin: ",ps.email]})]}),!e&&!ta&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>_(O=>!O),className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Historial",children:u.jsx(vl,{size:20})}),u.jsx("button",{onClick:()=>m(!0),className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Ajustes",children:u.jsx(GI,{size:20})}),u.jsx("button",{onClick:Ey,className:"p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400",title:"Cerrar sesión",children:u.jsx($I,{size:20})})]})]}),!e&&w&&!ta&&u.jsx("div",{className:"fixed inset-0 z-[10001] bg-black/95 backdrop-blur-md flex items-center justify-center p-6",children:u.jsxs("div",{className:"bg-slate-900 w-full rounded-3xl border border-slate-700 p-6 shadow-2xl max-h-[90vh] overflow-y-auto",children:[u.jsx("h2",{className:"mb-6 font-black uppercase text-sm text-slate-400",children:"Configurar Equipos"}),(y||I)&&u.jsx("div",{className:`mb-4 rounded-xl px-3 py-2 text-sm ${y?"border border-red-700 bg-red-950/40 text-red-300":"border border-green-700 bg-green-950/40 text-green-300"}`,children:y||I}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-950/40 p-4",children:[u.jsx("p",{className:"mb-3 text-[10px] font-black uppercase tracking-widest text-blue-400",children:"Equipo local guardado"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("select",{value:z,onChange:O=>D(O.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white",children:[u.jsx("option",{value:"",children:"Selecciona equipo local..."}),ah.map(O=>u.jsx("option",{value:O,children:Qa(O)},O))]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("button",{onClick:()=>uh("home"),className:"bg-cyan-600 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2",children:[u.jsx(br,{size:16}),"Cargar local"]}),u.jsxs("button",{onClick:()=>dh("home"),className:"bg-slate-700 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2",children:[u.jsx(Up,{size:16}),"Nuevo local"]})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Nombre local"}),u.jsx("input",{value:x,onChange:O=>C(O.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Local"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Logo local"}),u.jsx("input",{type:"file",accept:"image/*",onChange:O=>ch(O,"home"),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"}),b&&u.jsx("div",{className:"mt-3 flex justify-center",children:u.jsx("img",{src:b,alt:"Logo local",className:"w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"})})]}),u.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-950/40 p-4",children:[u.jsx("p",{className:"mb-3 text-[10px] font-black uppercase tracking-widest text-red-400",children:"Equipo visitante guardado"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("select",{value:B,onChange:O=>pe(O.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white",children:[u.jsx("option",{value:"",children:"Selecciona equipo visitante..."}),ah.map(O=>u.jsx("option",{value:O,children:Qa(O)},O))]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("button",{onClick:()=>uh("away"),className:"bg-orange-500 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2",children:[u.jsx(br,{size:16}),"Cargar visitante"]}),u.jsxs("button",{onClick:()=>dh("away"),className:"bg-slate-700 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2",children:[u.jsx(Up,{size:16}),"Nuevo visitante"]})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Nombre visitante"}),u.jsx("input",{value:T,onChange:O=>N(O.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Visitante"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Logo visitante"}),u.jsx("input",{type:"file",accept:"image/*",onChange:O=>ch(O,"away"),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"}),A&&u.jsx("div",{className:"mt-3 flex justify-center",children:u.jsx("img",{src:A,alt:"Logo visitante",className:"w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"})})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black uppercase text-slate-500 mb-2",children:"Contraseña modo visor"}),u.jsx("input",{type:"text",value:F,onChange:O=>G(O.target.value),className:"w-full bg-slate-950 border border-slate-800 p-3 rounded-xl",placeholder:"Contraseña visor"})]}),u.jsx("button",{onClick:Sy,className:"w-full bg-blue-600 py-4 rounded-2xl font-black",children:"GUARDAR"})]})]})}),p?u.jsx(rN,{}):u.jsxs(u.Fragment,{children:[u.jsx(XI,{}),!d&&!ta&&u.jsxs(u.Fragment,{children:[u.jsx(tN,{}),u.jsx(JI,{}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsx($p,{team:"home"}),u.jsx($p,{team:"away"})]}),u.jsx(eN,{}),u.jsx(ZI,{})]})]})]})}n_(document.getElementById("root")).render(u.jsx(L.StrictMode,{children:u.jsx(sN,{})}));
