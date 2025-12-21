function nT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ny={exports:{}},Fl={},xy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),iT=Symbol.for("react.portal"),sT=Symbol.for("react.fragment"),oT=Symbol.for("react.strict_mode"),aT=Symbol.for("react.profiler"),lT=Symbol.for("react.provider"),uT=Symbol.for("react.context"),cT=Symbol.for("react.forward_ref"),hT=Symbol.for("react.suspense"),dT=Symbol.for("react.memo"),fT=Symbol.for("react.lazy"),zp=Symbol.iterator;function pT(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var Dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Vy={};function $i(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||Dy}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=$i.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||Dy}var ed=Zh.prototype=new Ly;ed.constructor=Zh;Oy(ed,$i.prototype);ed.isPureReactComponent=!0;var $p=Array.isArray,My=Object.prototype.hasOwnProperty,td={current:null},by={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)My.call(e,r)&&!by.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ao,type:t,key:s,ref:o,props:i,_owner:td.current}}function mT(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function gT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gT(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case iT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ku(o,0):r,$p(i)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),xa(i,e,n,"",function(h){return h})):i!=null&&(nd(i)&&(i=mT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$p(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ku(s,l);o+=xa(s,e,n,u,i)}else if(u=pT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ku(s,l++),o+=xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Da={transition:null},_T={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Da,ReactCurrentOwner:td};function Fy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=$i;Z.Fragment=sT;Z.Profiler=aT;Z.PureComponent=Zh;Z.StrictMode=oT;Z.Suspense=hT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_T;Z.act=Fy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=td.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)My.call(e,u)&&!by.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ao,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:uT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lT,_context:t},t.Consumer=t};Z.createElement=Uy;Z.createFactory=function(t){var e=Uy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:cT,render:t}};Z.isValidElement=nd;Z.lazy=function(t){return{$$typeof:fT,_payload:{_status:-1,_result:t},_init:yT}};Z.memo=function(t,e){return{$$typeof:dT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Z.unstable_act=Fy;Z.useCallback=function(t,e){return ot.current.useCallback(t,e)};Z.useContext=function(t){return ot.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ot.current.useEffect(t,e)};Z.useId=function(){return ot.current.useId()};Z.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ot.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};Z.useRef=function(t){return ot.current.useRef(t)};Z.useState=function(t){return ot.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ot.current.useTransition()};Z.version="18.3.1";xy.exports=Z;var F=xy.exports;const vT=rT(F),ET=nT({__proto__:null,default:vT},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT=F,TT=Symbol.for("react.element"),IT=Symbol.for("react.fragment"),ST=Object.prototype.hasOwnProperty,AT=wT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RT={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ST.call(e,r)&&!RT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TT,type:t,key:s,ref:o,props:i,_owner:AT.current}}Fl.Fragment=IT;Fl.jsx=jy;Fl.jsxs=jy;Ny.exports=Fl;var V=Ny.exports,By={exports:{}},vt={},zy={exports:{}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=z[ge];if(0<i(le,Q))z[ge]=Q,z[J]=le,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ge=0,le=z.length,Ie=le>>>1;ge<Ie;){var rn=2*(ge+1)-1,sn=z[rn],on=rn+1,an=z[on];if(0>i(sn,J))on<le&&0>i(an,sn)?(z[ge]=an,z[on]=J,ge=on):(z[ge]=sn,z[rn]=J,ge=rn);else if(on<le&&0>i(an,J))z[ge]=an,z[on]=J,ge=on;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,P=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function O(z){if(N=!1,S(z),!P)if(n(u)!==null)P=!0,es(U);else{var Q=n(h);Q!==null&&nn(O,Q.startTime-z)}}function U(z,Q){P=!1,N&&(N=!1,w(y),y=-1),A=!0;var J=g;try{for(S(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,g=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),S(Q)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var rn=n(h);rn!==null&&nn(O,rn.startTime-Q),Ie=!1}return Ie}finally{p=null,g=J,A=!1}}var j=!1,E=null,y=-1,v=5,T=-1;function R(){return!(t.unstable_now()-T<v)}function k(){if(E!==null){var z=t.unstable_now();T=z;var Q=!0;try{Q=E(!0,z)}finally{Q?I():(j=!1,E=null)}}else j=!1}var I;if(typeof _=="function")I=function(){_(k)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,yr=wt.port2;wt.port1.onmessage=k,I=function(){yr.postMessage(null)}}else I=function(){x(k,0)};function es(z){E=z,j||(j=!0,I())}function nn(z,Q){y=x(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,es(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(z,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(N?(w(y),y=-1):N=!0,nn(O,J-ge))):(z.sortIndex=le,e(u,z),P||A||(P=!0,es(U))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var Q=g;return function(){var J=g;g=Q;try{return z.apply(this,arguments)}finally{g=J}}}})($y);zy.exports=$y;var PT=zy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT=F,_t=PT;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,Ks={};function Wr(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Wy.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,kT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Hp={};function NT(t){return Vc.call(Hp,t)?!0:Vc.call(qp,t)?!1:kT.test(t)?Hp[t]=!0:(qp[t]=!0,!1)}function xT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DT(t,e,n,r){if(e===null||typeof e>"u"||xT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rd,id);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rd,id);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rd,id);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DT(e,n,i,r)&&(n=null),r||i===null?NT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=CT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),qy=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Ky=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Gu;function Is(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Qu=!1;function Yu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function OT(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case Lc:return"Profiler";case od:return"StrictMode";case Mc:return"Suspense";case bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hy:return(t.displayName||"Context")+".Consumer";case qy:return(t._context.displayName||"Context")+".Provider";case ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:Uc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Uc(t(e))}catch{}}return null}function VT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LT(t){var e=Gy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=LT(t))}function Qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yy(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function jc(t,e){Yy(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Ss(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Xy(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ha,Zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MT=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){MT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function e_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function t_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(t,e){if(e){if(bT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kc=null,vi=null,Ei=null;function Jp(t){if(t=Co(t)){if(typeof Kc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Wl(e),Kc(t.stateNode,t.type,e))}}function n_(t){vi?Ei?Ei.push(t):Ei=[t]:vi=t}function r_(){if(vi){var t=vi,e=Ei;if(Ei=vi=null,Jp(t),e)for(t=0;t<e.length;t++)Jp(e[t])}}function i_(t,e){return t(e)}function s_(){}var Xu=!1;function o_(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return i_(t,e,n)}finally{Xu=!1,(vi!==null||Ei!==null)&&(s_(),r_())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Gc=!1;if(wn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Gc=!1}function UT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Vs=!1,Za=null,el=!1,Qc=null,FT={onError:function(t){Vs=!0,Za=t}};function jT(t,e,n,r,i,s,o,l,u){Vs=!1,Za=null,UT.apply(FT,arguments)}function BT(t,e,n,r,i,s,o,l,u){if(jT.apply(this,arguments),Vs){if(Vs){var h=Za;Vs=!1,Za=null}else throw Error(b(198));el||(el=!0,Qc=h)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(t){if(qr(t)!==t)throw Error(b(188))}function zT(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zp(i),t;if(s===r)return Zp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function l_(t){return t=zT(t),t!==null?u_(t):null}function u_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u_(t);if(e!==null)return e;t=t.sibling}return null}var c_=_t.unstable_scheduleCallback,em=_t.unstable_cancelCallback,$T=_t.unstable_shouldYield,WT=_t.unstable_requestPaint,Ae=_t.unstable_now,qT=_t.unstable_getCurrentPriorityLevel,cd=_t.unstable_ImmediatePriority,h_=_t.unstable_UserBlockingPriority,tl=_t.unstable_NormalPriority,HT=_t.unstable_LowPriority,d_=_t.unstable_IdlePriority,jl=null,qt=null;function KT(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:YT,GT=Math.log,QT=Math.LN2;function YT(t){return t>>>=0,t===0?32:31-(GT(t)/QT|0)|0}var da=64,fa=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=As(l):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function XT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=XT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function ZT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function p_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m_,dd,g_,y_,__,Xc=!1,pa=[],Kn=null,Gn=null,Qn=null,Ys=new Map,Xs=new Map,bn=[],eI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Co(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tI(t,e,n,r,i){switch(e){case"focusin":return Kn=gs(Kn,t,e,n,r,i),!0;case"dragenter":return Gn=gs(Gn,t,e,n,r,i),!0;case"mouseover":return Qn=gs(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ys.set(s,gs(Ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,gs(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function v_(t){var e=Ar(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=a_(n),e!==null){t.blockedOn=e,__(t.priority,function(){g_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hc=r,n.target.dispatchEvent(r),Hc=null}else return e=Co(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Oa(t)&&n.delete(e)}function nI(){Xc=!1,Kn!==null&&Oa(Kn)&&(Kn=null),Gn!==null&&Oa(Gn)&&(Gn=null),Qn!==null&&Oa(Qn)&&(Qn=null),Ys.forEach(nm),Xs.forEach(nm)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,nI)))}function Js(t){function e(i){return ys(i,t)}if(0<pa.length){ys(pa[0],t);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&ys(Kn,t),Gn!==null&&ys(Gn,t),Qn!==null&&ys(Qn,t),Ys.forEach(e),Xs.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)v_(n),n.blockedOn===null&&bn.shift()}var wi=kn.ReactCurrentBatchConfig,rl=!0;function rI(t,e,n,r){var i=oe,s=wi.transition;wi.transition=null;try{oe=1,fd(t,e,n,r)}finally{oe=i,wi.transition=s}}function iI(t,e,n,r){var i=oe,s=wi.transition;wi.transition=null;try{oe=4,fd(t,e,n,r)}finally{oe=i,wi.transition=s}}function fd(t,e,n,r){if(rl){var i=Jc(t,e,n,r);if(i===null)lc(t,e,r,il,n),tm(t,r);else if(tI(i,t,e,n,r))r.stopPropagation();else if(tm(t,r),e&4&&-1<eI.indexOf(t)){for(;i!==null;){var s=Co(i);if(s!==null&&m_(s),s=Jc(t,e,n,r),s===null&&lc(t,e,r,il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lc(t,e,r,null,n)}}var il=null;function Jc(t,e,n,r){if(il=null,t=ud(r),t=Ar(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function E_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qT()){case cd:return 1;case h_:return 4;case tl:case HT:return 16;case d_:return 536870912;default:return 16}default:return 16}}var $n=null,pd=null,Va=null;function w_(){if(Va)return Va;var t,e=pd,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function La(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function rm(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:rm,this.isPropagationStopped=rm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=Et(Wi),Po=ve({},Wi,{view:0,detail:0}),sI=Et(Po),Zu,ec,_s,Bl=ve({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Zu=t.screenX-_s.screenX,ec=t.screenY-_s.screenY):ec=Zu=0,_s=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),im=Et(Bl),oI=ve({},Bl,{dataTransfer:0}),aI=Et(oI),lI=ve({},Po,{relatedTarget:0}),tc=Et(lI),uI=ve({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),cI=Et(uI),hI=ve({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dI=Et(hI),fI=ve({},Wi,{data:0}),sm=Et(fI),pI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gI[t])?!!e[t]:!1}function gd(){return yI}var _I=ve({},Po,{key:function(t){if(t.key){var e=pI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=La(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?La(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?La(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vI=Et(_I),EI=ve({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Et(EI),wI=ve({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),TI=Et(wI),II=ve({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),SI=Et(II),AI=ve({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RI=Et(AI),PI=[9,13,27,32],yd=wn&&"CompositionEvent"in window,Ls=null;wn&&"documentMode"in document&&(Ls=document.documentMode);var CI=wn&&"TextEvent"in window&&!Ls,T_=wn&&(!yd||Ls&&8<Ls&&11>=Ls),am=" ",lm=!1;function I_(t,e){switch(t){case"keyup":return PI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function kI(t,e){switch(t){case"compositionend":return S_(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function NI(t,e){if(ai)return t==="compositionend"||!yd&&I_(t,e)?(t=w_(),Va=pd=$n=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T_&&e.locale!=="ko"?null:e.data;default:return null}}var xI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xI[t.type]:e==="textarea"}function A_(t,e,n,r){n_(r),e=sl(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,Zs=null;function DI(t){M_(t,0)}function zl(t){var e=ci(t);if(Qy(e))return t}function OI(t,e){if(t==="change")return e}var R_=!1;if(wn){var nc;if(wn){var rc="oninput"in document;if(!rc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),rc=typeof cm.oninput=="function"}nc=rc}else nc=!1;R_=nc&&(!document.documentMode||9<document.documentMode)}function hm(){Ms&&(Ms.detachEvent("onpropertychange",P_),Zs=Ms=null)}function P_(t){if(t.propertyName==="value"&&zl(Zs)){var e=[];A_(e,Zs,t,ud(t)),o_(DI,e)}}function VI(t,e,n){t==="focusin"?(hm(),Ms=e,Zs=n,Ms.attachEvent("onpropertychange",P_)):t==="focusout"&&hm()}function LI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Zs)}function MI(t,e){if(t==="click")return zl(e)}function bI(t,e){if(t==="input"||t==="change")return zl(e)}function UI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:UI;function eo(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var n=dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function C_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FI(t){var e=k_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C_(n.ownerDocument.documentElement,n)){if(r!==null&&_d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fm(n,s);var o=fm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jI=wn&&"documentMode"in document&&11>=document.documentMode,li=null,Zc=null,bs=null,eh=!1;function pm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eh||li==null||li!==Ja(r)||(r=li,"selectionStart"in r&&_d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&eo(bs,r)||(bs=r,r=sl(Zc,"onSelect"),0<r.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},ic={},N_={};wn&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function $l(t){if(ic[t])return ic[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N_)return ic[t]=e[n];return t}var x_=$l("animationend"),D_=$l("animationiteration"),O_=$l("animationstart"),V_=$l("transitionend"),L_=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){L_.set(t,e),Wr(e,[t])}for(var sc=0;sc<mm.length;sc++){var oc=mm[sc],BI=oc.toLowerCase(),zI=oc[0].toUpperCase()+oc.slice(1);dr(BI,"on"+zI)}dr(x_,"onAnimationEnd");dr(D_,"onAnimationIteration");dr(O_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(V_,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function gm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BT(r,e,void 0,t),t.currentTarget=null}function M_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;gm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;gm(i,l,h),s=u}}}if(el)throw t=Qc,el=!1,Qc=null,t}function de(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var r=t+"__bubble";n.has(r)||(b_(e,t,2,!1),n.add(r))}function ac(t,e,n){var r=0;e&&(r|=4),b_(n,t,r,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[ya]){t[ya]=!0,Wy.forEach(function(n){n!=="selectionchange"&&($I.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,ac("selectionchange",!1,e))}}function b_(t,e,n,r){switch(E_(e)){case 1:var i=rI;break;case 4:i=iI;break;default:i=fd}n=i.bind(null,e,n,t),i=void 0,!Gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ar(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}o_(function(){var h=s,f=ud(n),p=[];e:{var g=L_.get(t);if(g!==void 0){var A=md,P=t;switch(t){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":A=vI;break;case"focusin":P="focus",A=tc;break;case"focusout":P="blur",A=tc;break;case"beforeblur":case"afterblur":A=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=aI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=TI;break;case x_:case D_:case O_:A=cI;break;case V_:A=SI;break;case"scroll":A=sI;break;case"wheel":A=RI;break;case"copy":case"cut":case"paste":A=dI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=om}var N=(e&4)!==0,x=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var _=h,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,w!==null&&(O=Qs(_,w),O!=null&&N.push(no(_,O,S)))),x)break;_=_.return}0<N.length&&(g=new A(g,P,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Hc&&(P=n.relatedTarget||n.fromElement)&&(Ar(P)||P[Tn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Ar(P):null,P!==null&&(x=qr(P),P!==x||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(N=im,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=om,O="onPointerLeave",w="onPointerEnter",_="pointer"),x=A==null?g:ci(A),S=P==null?g:ci(P),g=new N(O,_+"leave",A,n,f),g.target=x,g.relatedTarget=S,O=null,Ar(f)===h&&(N=new N(w,_+"enter",P,n,f),N.target=S,N.relatedTarget=x,O=N),x=O,A&&P)t:{for(N=A,w=P,_=0,S=N;S;S=ti(S))_++;for(S=0,O=w;O;O=ti(O))S++;for(;0<_-S;)N=ti(N),_--;for(;0<S-_;)w=ti(w),S--;for(;_--;){if(N===w||w!==null&&N===w.alternate)break t;N=ti(N),w=ti(w)}N=null}else N=null;A!==null&&ym(p,g,A,N,!1),P!==null&&x!==null&&ym(p,x,P,N,!0)}}e:{if(g=h?ci(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=OI;else if(um(g))if(R_)U=bI;else{U=LI;var j=VI}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=MI);if(U&&(U=U(t,h))){A_(p,U,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Bc(g,"number",g.value)}switch(j=h?ci(h):window,t){case"focusin":(um(j)||j.contentEditable==="true")&&(li=j,Zc=h,bs=null);break;case"focusout":bs=Zc=li=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,pm(p,n,f);break;case"selectionchange":if(jI)break;case"keydown":case"keyup":pm(p,n,f)}var E;if(yd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ai?I_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(T_&&n.locale!=="ko"&&(ai||y!=="onCompositionStart"?y==="onCompositionEnd"&&ai&&(E=w_()):($n=f,pd="value"in $n?$n.value:$n.textContent,ai=!0)),j=sl(h,y),0<j.length&&(y=new sm(y,t,null,n,f),p.push({event:y,listeners:j}),E?y.data=E:(E=S_(n),E!==null&&(y.data=E)))),(E=CI?kI(t,n):NI(t,n))&&(h=sl(h,"onBeforeInput"),0<h.length&&(f=new sm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}M_(p,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Qs(n,s),u!=null&&o.unshift(no(n,u,l))):i||(u=Qs(n,s),u!=null&&o.push(no(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(WI,`
`).replace(qI,"")}function _a(t,e,n){if(e=_m(e),_m(t)!==e&&n)throw Error(b(425))}function ol(){}var th=null,nh=null;function rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,HI=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,KI=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(GI)}:ih;function GI(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+qi,ro="__reactProps$"+qi,Tn="__reactContainer$"+qi,sh="__reactEvents$"+qi,QI="__reactListeners$"+qi,YI="__reactHandles$"+qi;function Ar(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[Wt])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[Wt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Wl(t){return t[ro]||null}var oh=[],hi=-1;function fr(t){return{current:t}}function pe(t){0>hi||(t.current=oh[hi],oh[hi]=null,hi--)}function ce(t,e){hi++,oh[hi]=t.current,t.current=e}var ar={},et=fr(ar),ct=fr(!1),Vr=ar;function ki(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function al(){pe(ct),pe(et)}function wm(t,e,n){if(et.current!==ar)throw Error(b(168));ce(et,e),ce(ct,n)}function U_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,VT(t)||"Unknown",i));return ve({},n,r)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Vr=et.current,ce(et,t),ce(ct,ct.current),!0}function Tm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=U_(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,pe(ct),pe(et),ce(et,t)):pe(ct),ce(ct,n)}var dn=null,ql=!1,cc=!1;function F_(t){dn===null?dn=[t]:dn.push(t)}function XI(t){ql=!0,F_(t)}function pr(){if(!cc&&dn!==null){cc=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,ql=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),c_(cd,pr),i}finally{oe=e,cc=!1}}return null}var di=[],fi=0,ul=null,cl=0,Tt=[],It=0,Lr=null,fn=1,pn="";function Tr(t,e){di[fi++]=cl,di[fi++]=ul,ul=t,cl=e}function j_(t,e,n){Tt[It++]=fn,Tt[It++]=pn,Tt[It++]=Lr,Lr=t;var r=fn;t=pn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Mt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function vd(t){t.return!==null&&(Tr(t,1),j_(t,1,0))}function Ed(t){for(;t===ul;)ul=di[--fi],di[fi]=null,cl=di[--fi],di[fi]=null;for(;t===Lr;)Lr=Tt[--It],Tt[It]=null,pn=Tt[--It],Tt[It]=null,fn=Tt[--It],Tt[It]=null}var yt=null,gt=null,me=!1,Ot=null;function B_(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lh(t){if(me){var e=gt;if(e){var n=e;if(!Im(t,e)){if(ah(t))throw Error(b(418));e=Yn(n.nextSibling);var r=yt;e&&Im(t,e)?B_(r,n):(t.flags=t.flags&-4097|2,me=!1,yt=t)}}else{if(ah(t))throw Error(b(418));t.flags=t.flags&-4097|2,me=!1,yt=t}}}function Sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function va(t){if(t!==yt)return!1;if(!me)return Sm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rh(t.type,t.memoizedProps)),e&&(e=gt)){if(ah(t))throw z_(),Error(b(418));for(;e;)B_(t,e),e=Yn(e.nextSibling)}if(Sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?Yn(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=gt;t;)t=Yn(t.nextSibling)}function Ni(){gt=yt=null,me=!1}function wd(t){Ot===null?Ot=[t]:Ot.push(t)}var JI=kn.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Ea(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Am(t){var e=t._init;return e(t._payload)}function $_(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=er(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,S,O){return _===null||_.tag!==6?(_=yc(S,w.mode,O),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,O){var U=S.type;return U===oi?f(w,_,S.props.children,O,S.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ln&&Am(U)===_.type)?(O=i(_,S.props),O.ref=vs(w,_,S),O.return=w,O):(O=za(S.type,S.key,S.props,null,w.mode,O),O.ref=vs(w,_,S),O.return=w,O)}function h(w,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=_c(S,w.mode,O),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function f(w,_,S,O,U){return _===null||_.tag!==7?(_=Nr(S,w.mode,O,U),_.return=w,_):(_=i(_,S),_.return=w,_)}function p(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=yc(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:return S=za(_.type,_.key,_.props,null,w.mode,S),S.ref=vs(w,null,_),S.return=w,S;case si:return _=_c(_,w.mode,S),_.return=w,_;case Ln:var O=_._init;return p(w,O(_._payload),S)}if(Ss(_)||ps(_))return _=Nr(_,w.mode,S,null),_.return=w,_;Ea(w,_)}return null}function g(w,_,S,O){var U=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(w,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:return S.key===U?u(w,_,S,O):null;case si:return S.key===U?h(w,_,S,O):null;case Ln:return U=S._init,g(w,_,U(S._payload),O)}if(Ss(S)||ps(S))return U!==null?null:f(w,_,S,O,null);Ea(w,S)}return null}function A(w,_,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(S)||null,l(_,w,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ua:return w=w.get(O.key===null?S:O.key)||null,u(_,w,O,U);case si:return w=w.get(O.key===null?S:O.key)||null,h(_,w,O,U);case Ln:var j=O._init;return A(w,_,S,j(O._payload),U)}if(Ss(O)||ps(O))return w=w.get(S)||null,f(_,w,O,U,null);Ea(_,O)}return null}function P(w,_,S,O){for(var U=null,j=null,E=_,y=_=0,v=null;E!==null&&y<S.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var T=g(w,E,S[y],O);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(w,E),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T,E=v}if(y===S.length)return n(w,E),me&&Tr(w,y),U;if(E===null){for(;y<S.length;y++)E=p(w,S[y],O),E!==null&&(_=s(E,_,y),j===null?U=E:j.sibling=E,j=E);return me&&Tr(w,y),U}for(E=r(w,E);y<S.length;y++)v=A(E,w,y,S[y],O),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),j===null?U=v:j.sibling=v,j=v);return t&&E.forEach(function(R){return e(w,R)}),me&&Tr(w,y),U}function N(w,_,S,O){var U=ps(S);if(typeof U!="function")throw Error(b(150));if(S=U.call(S),S==null)throw Error(b(151));for(var j=U=null,E=_,y=_=0,v=null,T=S.next();E!==null&&!T.done;y++,T=S.next()){E.index>y?(v=E,E=null):v=E.sibling;var R=g(w,E,T.value,O);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(w,E),_=s(R,_,y),j===null?U=R:j.sibling=R,j=R,E=v}if(T.done)return n(w,E),me&&Tr(w,y),U;if(E===null){for(;!T.done;y++,T=S.next())T=p(w,T.value,O),T!==null&&(_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return me&&Tr(w,y),U}for(E=r(w,E);!T.done;y++,T=S.next())T=A(E,w,y,T.value,O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return t&&E.forEach(function(k){return e(w,k)}),me&&Tr(w,y),U}function x(w,_,S,O){if(typeof S=="object"&&S!==null&&S.type===oi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:e:{for(var U=S.key,j=_;j!==null;){if(j.key===U){if(U=S.type,U===oi){if(j.tag===7){n(w,j.sibling),_=i(j,S.props.children),_.return=w,w=_;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ln&&Am(U)===j.type){n(w,j.sibling),_=i(j,S.props),_.ref=vs(w,j,S),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}S.type===oi?(_=Nr(S.props.children,w.mode,O,S.key),_.return=w,w=_):(O=za(S.type,S.key,S.props,null,w.mode,O),O.ref=vs(w,_,S),O.return=w,w=O)}return o(w);case si:e:{for(j=S.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=_c(S,w.mode,O),_.return=w,w=_}return o(w);case Ln:return j=S._init,x(w,_,j(S._payload),O)}if(Ss(S))return P(w,_,S,O);if(ps(S))return N(w,_,S,O);Ea(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=yc(S,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return x}var xi=$_(!0),W_=$_(!1),hl=fr(null),dl=null,pi=null,Td=null;function Id(){Td=pi=dl=null}function Sd(t){var e=hl.current;pe(hl),t._currentValue=e}function uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){dl=t,Td=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Pt(t){var e=t._currentValue;if(Td!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(dl===null)throw Error(b(308));pi=t,dl.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Rr=null;function Ad(t){Rr===null?Rr=[t]:Rr.push(t)}function q_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ad(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Ad(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Ma(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}function Rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,A=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(A,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(A,p,g):P,g==null)break e;p=ve({},p,g);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=p}}function Pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ko={},Ht=fr(ko),io=fr(ko),so=fr(ko);function Pr(t){if(t===ko)throw Error(b(174));return t}function Pd(t,e){switch(ce(so,e),ce(io,t),ce(Ht,ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}pe(Ht),ce(Ht,e)}function Di(){pe(Ht),pe(io),pe(so)}function K_(t){Pr(so.current);var e=Pr(Ht.current),n=$c(e,t.type);e!==n&&(ce(io,t),ce(Ht,n))}function Cd(t){io.current===t&&(pe(Ht),pe(io))}var ye=fr(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=[];function kd(){for(var t=0;t<hc.length;t++)hc[t]._workInProgressVersionPrimary=null;hc.length=0}var ba=kn.ReactCurrentDispatcher,dc=kn.ReactCurrentBatchConfig,Mr=0,_e=null,Ne=null,Ve=null,ml=!1,Us=!1,oo=0,ZI=0;function Ge(){throw Error(b(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function xd(t,e,n,r,i,s){if(Mr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?rS:iS,t=n(r,i),Us){s=0;do{if(Us=!1,oo=0,25<=s)throw Error(b(301));s+=1,Ve=Ne=null,e.updateQueue=null,ba.current=sS,t=n(r,i)}while(Us)}if(ba.current=gl,e=Ne!==null&&Ne.next!==null,Mr=0,Ve=Ne=_e=null,ml=!1,e)throw Error(b(300));return t}function Dd(){var t=oo!==0;return oo=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Ct(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Ve===null?_e.memoizedState:Ve.next;if(e!==null)Ve=e,Ne=t;else{if(t===null)throw Error(b(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function ao(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Mr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ut(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G_(){}function Q_(t,e){var n=_e,r=Ct(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Od(J_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,lo(9,X_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(b(349));Mr&30||Y_(n,e,i)}return i}function Y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X_(t,e,n,r){e.value=n,e.getSnapshot=r,Z_(e)&&ev(t)}function J_(t,e,n){return n(function(){Z_(e)&&ev(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function ev(t){var e=In(t,1);e!==null&&bt(e,t,1,-1)}function Cm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,_e,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tv(){return Ct().memoizedState}function Ua(t,e,n,r){var i=$t();_e.flags|=t,i.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Nd(r,o.deps)){i.memoizedState=lo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=lo(1|e,n,s,r)}function km(t,e){return Ua(8390656,8,t,e)}function Od(t,e){return Hl(2048,8,t,e)}function nv(t,e){return Hl(4,2,t,e)}function rv(t,e){return Hl(4,4,t,e)}function iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,iv.bind(null,e,t),n)}function Vd(){}function ov(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return Mr&21?(Ut(n,e)||(n=f_(),_e.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function eS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=dc.transition;dc.transition={};try{t(!1),e()}finally{oe=n,dc.transition=r}}function uv(){return Ct().memoizedState}function tS(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))hv(e,n);else if(n=q_(t,e,n,r),n!==null){var i=st();bt(n,t,r,i),dv(n,e,r)}}function nS(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))hv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,o)){var u=e.interleaved;u===null?(i.next=i,Ad(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=q_(t,e,i,r),n!==null&&(i=st(),bt(n,t,r,i),dv(n,e,r))}}function cv(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function hv(t,e){Us=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}var gl={readContext:Pt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},rS={readContext:Pt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:Cm,useDebugValue:Vd,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Cm(!1),e=t[0];return t=eS.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=$t();if(me){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Le===null)throw Error(b(349));Mr&30||Y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(J_.bind(null,r,s,t),[t]),r.flags|=2048,lo(9,X_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Le.identifierPrefix;if(me){var n=pn,r=fn;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:Pt,useCallback:ov,useContext:Pt,useEffect:Od,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:fc,useRef:tv,useState:function(){return fc(ao)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ct();return lv(e,Ne.memoizedState,t)},useTransition:function(){var t=fc(ao)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:Q_,useId:uv,unstable_isNewReconciler:!1},sS={readContext:Pt,useCallback:ov,useContext:Pt,useEffect:Od,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:pc,useRef:tv,useState:function(){return pc(ao)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ct();return Ne===null?e.memoizedState=t:lv(e,Ne.memoizedState,t)},useTransition:function(){var t=pc(ao)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:Q_,useId:uv,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(bt(e,t,i,r),Ma(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(bt(e,t,i,r),Ma(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Zn(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(bt(e,t,r,n),Ma(e,t,r))}};function Nm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function fv(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=ht(e)?Vr:et.current,r=e.contextTypes,s=(r=r!=null)?ki(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=ht(e)?Vr:et.current,i.context=ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kl.enqueueReplaceState(i,i.state,null),fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,e){try{var n="",r=e;do n+=OT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_l||(_l=!0,Th=r),dh(t,e)},n}function mv(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ES.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var aS=kn.ReactCurrentOwner,ut=!1;function it(t,e,n,r){e.child=t===null?W_(e,null,n,r):xi(e,t.child,n,r)}function Lm(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=xd(t,e,n,r,s,i),n=Dd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(me&&n&&vd(e),e.flags|=1,it(t,e,r,i),e.child)}function Mm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gv(t,e,s,r,i)):(t=za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return fh(t,e,n,r,i)}function yv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(gi,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(gi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(gi,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(gi,mt),mt|=r;return it(t,e,i,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fh(t,e,n,r,i){var s=ht(n)?Vr:et.current;return s=ki(e,s),Ti(e,i),n=xd(t,e,n,r,s,i),r=Dd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(me&&r&&vd(e),e.flags|=1,it(t,e,n,i),e.child)}function bm(t,e,n,r,i){if(ht(n)){var s=!0;ll(e)}else s=!1;if(Ti(e,i),e.stateNode===null)Fa(t,e),fv(e,n,r),hh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pt(h):(h=ht(n)?Vr:et.current,h=ki(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&xm(e,o,r,h),Mn=!1;var g=e.memoizedState;o.state=g,fl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ct.current||Mn?(typeof f=="function"&&(ch(e,n,f,r),u=e.memoizedState),(l=Mn||Nm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:xt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=ht(n)?Vr:et.current,u=ki(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&xm(e,o,r,u),Mn=!1,g=e.memoizedState,o.state=g,fl(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||ct.current||Mn?(typeof A=="function"&&(ch(e,n,A,r),P=e.memoizedState),(h=Mn||Nm(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ph(t,e,n,r,s,i)}function ph(t,e,n,r,i,s){_v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tm(e,n,!1),Sn(t,e,s);r=e.stateNode,aS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&Tm(e,n,!0),e.child}function vv(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),Pd(t,e.containerInfo)}function Um(t,e,n,r,i){return Ni(),wd(i),e.flags|=256,it(t,e,n,r),e.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ev(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gh(n),e.memoizedState=mh,t):Ld(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=er(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mh,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ld(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,r){return r!==null&&wd(r),xi(e,t.child,null,n),t=Ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mc(Error(b(422))),wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=gh(o),e.memoizedState=mh,s);if(!(e.mode&1))return wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=mc(s,r,void 0),wa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),bt(r,t,i,-1))}return Bd(),r=mc(Error(b(421))),wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Yn(i.nextSibling),yt=e,me=!0,Ot=null,t!==null&&(Tt[It++]=fn,Tt[It++]=pn,Tt[It++]=Lr,fn=t.id,pn=t.overflow,Lr=e),e=Ld(e,r.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uh(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:vv(e),Ni();break;case 5:K_(e);break;case 1:ht(e.type)&&ll(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?Ev(t,e,n):(ce(ye,ye.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,yv(t,e,n)}return Sn(t,e,n)}var Tv,yh,Iv,Sv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};Iv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(Ht.current);var s=null;switch(n){case"input":i=Fc(t,i),r=Fc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ol)}Wc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ks.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Es(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cS(t,e,n){var r=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return ht(e.type)&&al(),Qe(e),null;case 3:return r=e.stateNode,Di(),pe(ct),pe(et),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(Ah(Ot),Ot=null))),yh(t,e),Qe(e),null;case 5:Cd(e);var i=Pr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Qe(e),null}if(t=Pr(Ht.current),va(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)de(Rs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Gp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Yp(r,s),de("invalid",r)}Wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,l,t),i=["children",""+l]):Ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ca(r),Qp(r,s,!0);break;case"textarea":ca(r),Xp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[ro]=r,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)de(Rs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Gp(t,r),i=Fc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Yp(t,r),i=zc(t,r),de("invalid",t);break;default:i=r}Wc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?t_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gs(t,u):typeof u=="number"&&Gs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&sd(t,s,u,o))}switch(n){case"input":ca(t),Qp(t,r,!1);break;case"textarea":ca(t),Xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Pr(so.current),Pr(Ht.current),va(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:_a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&gt!==null&&e.mode&1&&!(e.flags&128))z_(),Ni(),e.flags|=98560,s=!1;else if(s=va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Wt]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ot!==null&&(Ah(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?xe===0&&(xe=3):Bd())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Di(),yh(t,e),t===null&&to(e.stateNode.containerInfo),Qe(e),null;case 10:return Sd(e.type._context),Qe(e),null;case 17:return ht(e.type)&&al(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Es(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,Es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Vi&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function hS(t,e){switch(Ed(e),e.tag){case 1:return ht(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),pe(ct),pe(et),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Di(),null;case 10:return Sd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var Ta=!1,Je=!1,dS=typeof WeakSet=="function"?WeakSet:Set,$=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function _h(t,e,n){try{n()}catch(r){Te(t,e,r)}}var jm=!1;function fS(t,e){if(th=rl,t=k_(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:t,selectionRange:n},rl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,x=P.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:xt(e.type,N),x);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=jm,jm=!1,P}function Fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_h(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Av(t){var e=t.alternate;e!==null&&(t.alternate=null,Av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[ro],delete e[sh],delete e[QI],delete e[YI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var be=null,Dt=!1;function On(t,e,n){for(n=n.child;n!==null;)Pv(t,e,n),n=n.sibling}function Pv(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Je||mi(n,e);case 6:var r=be,i=Dt;be=null,On(t,e,n),be=r,Dt=i,be!==null&&(Dt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Dt?(t=be,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),Js(t)):uc(be,n.stateNode));break;case 4:r=be,i=Dt,be=n.stateNode.containerInfo,Dt=!0,On(t,e,n),be=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_h(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!Je&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,On(t,e,n),Je=r):On(t,e,n);break;default:On(t,e,n)}}function zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(r){var i=TS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Dt=!1;break e;case 3:be=l.stateNode.containerInfo,Dt=!0;break e;case 4:be=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(be===null)throw Error(b(160));Pv(s,o,i),be=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),zt(t),r&4){try{Fs(3,t,t.return),Gl(3,t)}catch(N){Te(t,t.return,N)}try{Fs(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Nt(e,t),zt(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Nt(e,t),zt(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Gs(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Yy(i,s),qc(l,o);var h=qc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?t_(i,p):f==="dangerouslySetInnerHTML"?Zy(i,p):f==="children"?Gs(i,p):sd(i,f,p,h)}switch(l){case"input":jc(i,s);break;case"textarea":Xy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?_i(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Nt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Nt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Nt(e,t),zt(t);break;case 13:Nt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ud=Ae())),r&4&&zm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Nt(e,t),Je=h):Nt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,A=g.child,g.tag){case 0:case 11:case 14:case 15:Fs(4,g,g.return);break;case 1:mi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){Wm(p);continue}}A!==null?(A.return=g,$=A):Wm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=e_("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nt(e,t),zt(t),r&4&&zm(t);break;case 21:break;default:Nt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gs(i,""),r.flags&=-33);var s=Bm(t);wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bm(t);Eh(t,l,o);break;default:throw Error(b(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){$=t,kv(t)}function kv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ta;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Ta;var h=Je;if(Ta=o,(Je=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?qm(i):u!==null?(u.return=o,$=u):qm(i);for(;s!==null;)$=s,kv(s),s=s.sibling;$=i,Ta=l,Je=h}$m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):$m(t)}}function $m(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Js(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Je||e.flags&512&&vh(e)}catch(g){Te(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Wm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function qm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{vh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{vh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var mS=Math.ceil,yl=kn.ReactCurrentDispatcher,Md=kn.ReactCurrentOwner,Rt=kn.ReactCurrentBatchConfig,re=0,Le=null,Pe=null,je=0,mt=0,gi=fr(0),xe=0,uo=null,br=0,Ql=0,bd=0,js=null,lt=null,Ud=0,Vi=1/0,hn=null,_l=!1,Th=null,Jn=null,Ia=!1,Wn=null,vl=0,Bs=0,Ih=null,ja=-1,Ba=0;function st(){return re&6?Ae():ja!==-1?ja:ja=Ae()}function Zn(t){return t.mode&1?re&2&&je!==0?je&-je:JI.transition!==null?(Ba===0&&(Ba=f_()),Ba):(t=oe,t!==0||(t=window.event,t=t===void 0?16:E_(t.type)),t):1}function bt(t,e,n,r){if(50<Bs)throw Bs=0,Ih=null,Error(b(185));Ro(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(Ql|=n),xe===4&&Un(t,je)),dt(t,r),n===1&&re===0&&!(e.mode&1)&&(Vi=Ae()+500,ql&&pr()))}function dt(t,e){var n=t.callbackNode;JT(t,e);var r=nl(t,t===Le?je:0);if(r===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?XI(Hm.bind(null,t)):F_(Hm.bind(null,t)),KI(function(){!(re&6)&&pr()}),n=null;else{switch(p_(r)){case 1:n=cd;break;case 4:n=h_;break;case 16:n=tl;break;case 536870912:n=d_;break;default:n=tl}n=bv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(ja=-1,Ba=0,re&6)throw Error(b(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=nl(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=El(t,r);else{e=r;var i=re;re|=2;var s=Dv();(Le!==t||je!==e)&&(hn=null,Vi=Ae()+500,kr(t,e));do try{_S();break}catch(l){xv(t,l)}while(!0);Id(),yl.current=s,re=i,Pe!==null?e=0:(Le=null,je=0,e=xe)}if(e!==0){if(e===2&&(i=Yc(t),i!==0&&(r=i,e=Sh(t,i))),e===1)throw n=uo,kr(t,0),Un(t,r),dt(t,Ae()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!gS(i)&&(e=El(t,r),e===2&&(s=Yc(t),s!==0&&(r=s,e=Sh(t,s))),e===1))throw n=uo,kr(t,0),Un(t,r),dt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ir(t,lt,hn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Ud+500-Ae(),10<e)){if(nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ih(Ir.bind(null,t,lt,hn),e);break}Ir(t,lt,hn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mS(r/1960))-r,10<r){t.timeoutHandle=ih(Ir.bind(null,t,lt,hn),r);break}Ir(t,lt,hn);break;case 5:Ir(t,lt,hn);break;default:throw Error(b(329))}}}return dt(t,Ae()),t.callbackNode===n?Nv.bind(null,t):null}function Sh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=El(t,e),t!==2&&(e=lt,lt=n,e!==null&&Ah(e)),t}function Ah(t){lt===null?lt=t:lt.push.apply(lt,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~bd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Hm(t){if(re&6)throw Error(b(327));Ii();var e=nl(t,0);if(!(e&1))return dt(t,Ae()),null;var n=El(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=Sh(t,r))}if(n===1)throw n=uo,kr(t,0),Un(t,e),dt(t,Ae()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,lt,hn),dt(t,Ae()),null}function Fd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Vi=Ae()+500,ql&&pr())}}function Ur(t){Wn!==null&&Wn.tag===0&&!(re&6)&&Ii();var e=re;re|=1;var n=Rt.transition,r=oe;try{if(Rt.transition=null,oe=1,t)return t()}finally{oe=r,Rt.transition=n,re=e,!(re&6)&&pr()}}function jd(){mt=gi.current,pe(gi)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Di(),pe(ct),pe(et),kd();break;case 5:Cd(r);break;case 4:Di();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Sd(r.type._context);break;case 22:case 23:jd()}n=n.return}if(Le=t,Pe=t=er(t.current,null),je=mt=e,xe=0,uo=null,bd=Ql=br=0,lt=js=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function xv(t,e){do{var n=Pe;try{if(Id(),ba.current=gl,ml){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ml=!1}if(Mr=0,Ve=Ne=_e=null,Us=!1,oo=0,Md.current=null,n===null||n.return===null){xe=1,uo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Om(o);if(A!==null){A.flags&=-257,Vm(A,o,l,s,e),A.mode&1&&Dm(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Dm(s,h,e),Bd();break e}u=Error(b(426))}}else if(me&&l.mode&1){var x=Om(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Vm(x,o,l,s,e),wd(Oi(u,l));break e}}s=u=Oi(u,l),xe!==4&&(xe=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=pv(s,u,e);Rm(s,w);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Jn===null||!Jn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=mv(s,l,e);Rm(s,O);break e}}s=s.return}while(s!==null)}Vv(n)}catch(U){e=U,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Dv(){var t=yl.current;return yl.current=gl,t===null?gl:t}function Bd(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||!(br&268435455)&&!(Ql&268435455)||Un(Le,je)}function El(t,e){var n=re;re|=2;var r=Dv();(Le!==t||je!==e)&&(hn=null,kr(t,e));do try{yS();break}catch(i){xv(t,i)}while(!0);if(Id(),re=n,yl.current=r,Pe!==null)throw Error(b(261));return Le=null,je=0,xe}function yS(){for(;Pe!==null;)Ov(Pe)}function _S(){for(;Pe!==null&&!$T();)Ov(Pe)}function Ov(t){var e=Mv(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Vv(t):Pe=e,Md.current=null}function Vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hS(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Pe=null;return}}else if(n=cS(n,e,mt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);xe===0&&(xe=5)}function Ir(t,e,n){var r=oe,i=Rt.transition;try{Rt.transition=null,oe=1,vS(t,e,n,r)}finally{Rt.transition=i,oe=r}return null}function vS(t,e,n,r){do Ii();while(Wn!==null);if(re&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZT(t,s),t===Le&&(Pe=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,bv(tl,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=oe;oe=1;var l=re;re|=4,Md.current=null,fS(t,n),Cv(n,t),FI(nh),rl=!!th,nh=th=null,t.current=n,pS(n),WT(),re=l,oe=o,Rt.transition=s}else t.current=n;if(Ia&&(Ia=!1,Wn=t,vl=i),s=t.pendingLanes,s===0&&(Jn=null),KT(n.stateNode),dt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_l)throw _l=!1,t=Th,Th=null,t;return vl&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===Ih?Bs++:(Bs=0,Ih=t):Bs=0,pr(),null}function Ii(){if(Wn!==null){var t=p_(vl),e=Rt.transition,n=oe;try{if(Rt.transition=null,oe=16>t?16:t,Wn===null)var r=!1;else{if(t=Wn,Wn=null,vl=0,re&6)throw Error(b(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Fs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,A=f.return;if(Av(f),f===h){$=null;break}if(g!==null){g.return=A,$=g;break}$=A}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var x=N.sibling;N.sibling=null,N=x}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(U){Te(l,l.return,U)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(re=i,pr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{oe=n,Rt.transition=e}}return!1}function Km(t,e,n){e=Oi(n,e),e=pv(t,e,1),t=Xn(t,e,1),e=st(),t!==null&&(Ro(t,1,e),dt(t,e))}function Te(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Oi(n,t),t=mv(e,t,1),e=Xn(e,t,1),t=st(),e!==null&&(Ro(e,1,t),dt(e,t));break}}e=e.return}}function ES(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>Ae()-Ud?kr(t,0):bd|=n),dt(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=st();t=In(t,e),t!==null&&(Ro(t,e,n),dt(t,n))}function wS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Lv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,uS(t,e,n);ut=!!(t.flags&131072)}else ut=!1,me&&e.flags&1048576&&j_(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fa(t,e),t=e.pendingProps;var i=ki(e,et.current);Ti(e,n),i=xd(null,e,r,t,i,n);var s=Dd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rd(e),i.updater=Kl,e.stateNode=i,i._reactInternals=e,hh(e,r,t,n),e=ph(null,e,r,!0,s,n)):(e.tag=0,me&&s&&vd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SS(r),t=xt(r,t),i){case 0:e=fh(null,e,r,t,n);break e;case 1:e=bm(null,e,r,t,n);break e;case 11:e=Lm(null,e,r,t,n);break e;case 14:e=Mm(null,e,r,xt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),bm(t,e,r,i,n);case 3:e:{if(vv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H_(t,e),fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oi(Error(b(423)),e),e=Um(t,e,r,n,i);break e}else if(r!==i){i=Oi(Error(b(424)),e),e=Um(t,e,r,n,i);break e}else for(gt=Yn(e.stateNode.containerInfo.firstChild),yt=e,me=!0,Ot=null,n=W_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=Sn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return K_(e),t===null&&lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rh(r,i)?o=null:s!==null&&rh(r,s)&&(e.flags|=32),_v(t,e),it(t,e,o,n),e.child;case 6:return t===null&&lh(e),null;case 13:return Ev(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Lm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(hl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!ct.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),uh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=Pt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),Mm(t,e,r,i,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Fa(t,e),e.tag=1,ht(r)?(t=!0,ll(e)):t=!1,Ti(e,n),fv(e,r,i),hh(e,r,i,n),ph(null,e,r,!0,t,n);case 19:return wv(t,e,n);case 22:return yv(t,e,n)}throw Error(b(156,e.tag))};function bv(t,e){return c_(t,e)}function IS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new IS(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SS(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ad)return 11;if(t===ld)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Nr(n.children,i,s,e);case od:o=8,i|=8;break;case Lc:return t=At(12,n,e,i|2),t.elementType=Lc,t.lanes=s,t;case Mc:return t=At(13,n,e,i),t.elementType=Mc,t.lanes=s,t;case bc:return t=At(19,n,e,i),t.elementType=bc,t.lanes=s,t;case Ky:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qy:o=10;break e;case Hy:o=9;break e;case ad:o=11;break e;case ld:o=14;break e;case Ln:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=At(22,t,r,e),t.elementType=Ky,t.lanes=n,t.stateNode={isHidden:!1},t}function yc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,r,i,s,o,l,u){return t=new AS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),t}function RS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return ar;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ht(n))return U_(t,n,e)}return e}function Fv(t,e,n,r,i,s,o,l,u){return t=$d(n,r,!0,t,i,s,o,l,u),t.context=Uv(null),n=t.current,r=st(),i=Zn(n),s=vn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Ro(t,i,r),dt(t,r),t}function Xl(t,e,n,r){var i=e.current,s=st(),o=Zn(i);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(bt(t,i,o,s),Ma(t,i,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wd(t,e){Gm(t,e),(t=t.alternate)&&Gm(t,e)}function PS(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}Jl.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Xl(t,e,null,null)};Jl.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Xl(null,t,null,null)}),e[Tn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&v_(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function CS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=wl(o);s.call(h)}}var o=Fv(e,r,t,0,null,!1,!1,"",Qm);return t._reactRootContainer=o,t[Tn]=o.current,to(t.nodeType===8?t.parentNode:t),Ur(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=wl(u);l.call(h)}}var u=$d(t,0,!1,null,null,!1,!1,"",Qm);return t._reactRootContainer=u,t[Tn]=u.current,to(t.nodeType===8?t.parentNode:t),Ur(function(){Xl(e,u,n,r)}),u}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=wl(o);l.call(u)}}Xl(e,o,t,i)}else o=CS(n,e,t,i,r);return wl(o)}m_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(hd(e,n|1),dt(e,Ae()),!(re&6)&&(Vi=Ae()+500,pr()))}break;case 13:Ur(function(){var r=In(t,1);if(r!==null){var i=st();bt(r,t,1,i)}}),Wd(t,1)}};dd=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=st();bt(e,t,134217728,n)}Wd(t,134217728)}};g_=function(t){if(t.tag===13){var e=Zn(t),n=In(t,e);if(n!==null){var r=st();bt(n,t,e,r)}Wd(t,e)}};y_=function(){return oe};__=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Kc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wl(r);if(!i)throw Error(b(90));Qy(r),jc(r,i)}}}break;case"textarea":Xy(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};i_=Fd;s_=Ur;var kS={usingClientEntryPoint:!1,Events:[Co,ci,Wl,n_,r_,Fd]},ws={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NS={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l_(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{jl=Sa.inject(NS),qt=Sa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(b(200));return RS(t,e,null,n)};vt.createRoot=function(t,e){if(!Hd(t))throw Error(b(299));var n=!1,r="",i=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,to(t.nodeType===8?t.parentNode:t),new qd(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=l_(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return Ur(t)};vt.hydrate=function(t,e,n){if(!Zl(e))throw Error(b(200));return eu(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};vt.render=function(t,e,n){if(!Zl(e))throw Error(b(200));return eu(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(b(40));return t._reactRootContainer?(Ur(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};vt.unstable_batchedUpdates=Fd;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return eu(t,e,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function Bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bv)}catch(t){console.error(t)}}Bv(),By.exports=vt;var xS=By.exports,zv,Ym=xS;zv=Ym.createRoot,Ym.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},co.apply(this,arguments)}var qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qn||(qn={}));const Xm="popstate";function DS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Rh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$v(i)}return VS(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OS(){return Math.random().toString(36).substr(2,8)}function Jm(t,e){return{usr:t.state,key:t.key,idx:e}}function Rh(t,e,n,r){return n===void 0&&(n=null),co({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hi(e):e,{state:n,key:e&&e.key||r||OS()})}function $v(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=qn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(co({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=qn.Pop;let x=f(),w=x==null?null:x-h;h=x,u&&u({action:l,location:N.location,delta:w})}function g(x,w){l=qn.Push;let _=Rh(N.location,x,w);h=f()+1;let S=Jm(_,h),O=N.createHref(_);try{o.pushState(S,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function A(x,w){l=qn.Replace;let _=Rh(N.location,x,w);h=f();let S=Jm(_,h),O=N.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function P(x){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:$v(x);return _=_.replace(/ $/,"%20"),ke(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let N={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xm,p),u=x,()=>{i.removeEventListener(Xm,p),u=null}},createHref(x){return e(i,x)},createURL:P,encodeLocation(x){let w=P(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:A,go(x){return o.go(x)}};return N}var Zm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zm||(Zm={}));function LS(t,e,n){return n===void 0&&(n="/"),MS(t,e,n)}function MS(t,e,n,r){let i=typeof e=="string"?Hi(e):e,s=Hv(i.pathname||"/",n);if(s==null)return null;let o=Wv(t);bS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=QS(s);l=HS(o[u],h)}return l}function Wv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=xr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Wv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:WS(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of qv(s.path))i(s,o,u)}),e}function qv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qv(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function bS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const US=/^:[\w-]+$/,FS=3,jS=2,BS=1,zS=10,$S=-2,eg=t=>t==="*";function WS(t,e){let n=t.split("/"),r=n.length;return n.some(eg)&&(r+=$S),e&&(r+=jS),n.filter(i=>!eg(i)).reduce((i,s)=>i+(US.test(s)?FS:s===""?BS:zS),r)}function qS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function HS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=KS({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:xr([s,p.pathname]),pathnameBase:eA(xr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=xr([s,p.pathnameBase]))}return o}function KS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:g,isOptional:A}=f;if(g==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[p];return A&&!P?h[g]=void 0:h[g]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function GS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const YS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XS=t=>YS.test(t);function JS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Hi(t):t,s;if(n)if(XS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Kd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=tg(n.substring(1),"/"):s=tg(n,e)}else s=e;return{pathname:s,search:tA(r),hash:nA(i)}}function tg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Kv(t,e){let n=ZS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Hi(t):(i=co({},t),ke(!i.pathname||!i.pathname.includes("?"),vc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),vc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),vc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=JS(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),eA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qv=["post","put","patch","delete"];new Set(Qv);const iA=["get",...Qv];new Set(iA);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}const Gd=F.createContext(null),sA=F.createContext(null),No=F.createContext(null),tu=F.createContext(null),mr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Yv=F.createContext(null);function xo(){return F.useContext(tu)!=null}function nu(){return xo()||ke(!1),F.useContext(tu).location}function Xv(t){F.useContext(No).static||F.useLayoutEffect(t)}function ru(){let{isDataRoute:t}=F.useContext(mr);return t?EA():oA()}function oA(){xo()||ke(!1);let t=F.useContext(Gd),{basename:e,future:n,navigator:r}=F.useContext(No),{matches:i}=F.useContext(mr),{pathname:s}=nu(),o=JSON.stringify(Kv(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return Xv(()=>{l.current=!0}),F.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Gv(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:xr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}const aA=F.createContext(null);function lA(t){let e=F.useContext(mr).outlet;return e&&F.createElement(aA.Provider,{value:t},e)}function uA(t,e){return cA(t,e)}function cA(t,e,n,r){xo()||ke(!1);let{navigator:i}=F.useContext(No),{matches:s}=F.useContext(mr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=nu(),f;if(e){var p;let x=typeof e=="string"?Hi(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||ke(!1),f=x}else f=h;let g=f.pathname||"/",A=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let P=LS(t,{pathname:A}),N=mA(P&&P.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:xr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:xr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&N?F.createElement(tu.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:qn.Pop}},N):N}function hA(){let t=vA(),e=rA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const dA=F.createElement(hA,null);class fA extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(mr.Provider,{value:this.props.routeContext},F.createElement(Yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pA(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Gd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(mr.Provider,{value:e},r)}function mA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:A}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||P){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let A,P=!1,N=null,x=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||dA,u&&(h<0&&g===0?(wA("route-fallback"),P=!0,x=null):h===g&&(P=!0,x=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let S;return A?S=N:P?S=x:p.route.Component?S=F.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=f,F.createElement(pA,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?F.createElement(fA,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var Jv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jv||{}),Zv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zv||{});function gA(t){let e=F.useContext(Gd);return e||ke(!1),e}function yA(t){let e=F.useContext(sA);return e||ke(!1),e}function _A(t){let e=F.useContext(mr);return e||ke(!1),e}function eE(t){let e=_A(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function vA(){var t;let e=F.useContext(Yv),n=yA(),r=eE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function EA(){let{router:t}=gA(Jv.UseNavigateStable),e=eE(Zv.UseNavigateStable),n=F.useRef(!1);return Xv(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ho({fromRouteId:e},s)))},[t,e])}const ng={};function wA(t,e,n){ng[t]||(ng[t]=!0)}function TA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ph(t){let{to:e,replace:n,state:r,relative:i}=t;xo()||ke(!1);let{future:s,static:o}=F.useContext(No),{matches:l}=F.useContext(mr),{pathname:u}=nu(),h=ru(),f=Gv(e,Kv(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return F.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function tE(t){return lA(t.context)}function cn(t){ke(!1)}function IA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:s,static:o=!1,future:l}=t;xo()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=F.useMemo(()=>({basename:u,navigator:s,static:o,future:ho({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Hi(r));let{pathname:f="/",search:p="",hash:g="",state:A=null,key:P="default"}=r,N=F.useMemo(()=>{let x=Hv(f,u);return x==null?null:{location:{pathname:x,search:p,hash:g,state:A,key:P},navigationType:i}},[u,f,p,g,A,P,i]);return N==null?null:F.createElement(No.Provider,{value:h},F.createElement(tu.Provider,{children:n,value:N}))}function SA(t){let{children:e,location:n}=t;return uA(Ch(e),n)}new Promise(()=>{});function Ch(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Ch(r.props.children,s));return}r.type!==cn&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ch(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const AA="6";try{window.__reactRouterVersion=AA}catch{}const RA="startTransition",rg=ET[RA];function PA(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=DS({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=F.useCallback(p=>{h&&rg?rg(()=>u(p)):u(p)},[u,h]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>TA(r),[r]),F.createElement(IA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ig||(ig={}));var sg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sg||(sg={}));var og={};/**
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
 */const nE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new kA;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NA=function(t){const e=nE(t);return rE.encodeByteArray(e,!0)},Tl=function(t){return NA(t).replace(/\./g,"")},iE=function(t){try{return rE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DA=()=>xA().__FIREBASE_DEFAULTS__,OA=()=>{if(typeof process>"u"||typeof og>"u")return;const t=og.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iE(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return DA()||OA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sE=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oE=t=>{const e=sE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aE=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config},lE=t=>{var e;return(e=iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class LA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Tl(JSON.stringify(n)),Tl(JSON.stringify(o)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function bA(){var t;const e=(t=iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BA(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $A(){try{return typeof indexedDB=="object"}catch{return!1}}function WA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const qA="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qA,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new en(i,l,r)}}function HA(t,e){return t.replace(KA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KA=/\{\$([^}]+)}/g;function GA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ag(s)&&ag(o)){if(!Il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ag(t){return t!==null&&typeof t=="object"}/**
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
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QA(t,e){const n=new YA(t,e);return n.subscribe.bind(n)}class YA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class JA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eR(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZA(t){return t===Sr?void 0:t}function eR(t){return t.instantiationMode==="EAGER"}/**
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
 */class tR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const nR={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},rR=te.INFO,iR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},sR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=sR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const oR=(t,e)=>e.some(n=>t instanceof n);let lg,ug;function aR(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cE=new WeakMap,kh=new WeakMap,hE=new WeakMap,wc=new WeakMap,Yd=new WeakMap;function uR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cE.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function cR(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){Nh=t(Nh)}function dR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return hE.set(r,e.sort?e.sort():[e]),tr(r)}:lR().includes(t)?function(...e){return t.apply(Tc(this),e),tr(cE.get(this))}:function(...e){return tr(t.apply(Tc(this),e))}}function fR(t){return typeof t=="function"?dR(t):(t instanceof IDBTransaction&&cR(t),oR(t,aR())?new Proxy(t,Nh):t)}function tr(t){if(t instanceof IDBRequest)return uR(t);if(wc.has(t))return wc.get(t);const e=fR(t);return e!==t&&(wc.set(t,e),Yd.set(e,t)),e}const Tc=t=>Yd.get(t);function pR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const mR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],Ic=new Map;function cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ic.set(e,s),s}hR(t=>({...t,get:(e,n,r)=>cg(e,n)||t.get(e,n,r),has:(e,n)=>!!cg(e,n)||t.has(e,n)}));/**
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
 */class yR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_R(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _R(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",hg="0.10.13";/**
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
 */const An=new Qd("@firebase/app"),vR="@firebase/app-compat",ER="@firebase/analytics-compat",wR="@firebase/analytics",TR="@firebase/app-check-compat",IR="@firebase/app-check",SR="@firebase/auth",AR="@firebase/auth-compat",RR="@firebase/database",PR="@firebase/data-connect",CR="@firebase/database-compat",kR="@firebase/functions",NR="@firebase/functions-compat",xR="@firebase/installations",DR="@firebase/installations-compat",OR="@firebase/messaging",VR="@firebase/messaging-compat",LR="@firebase/performance",MR="@firebase/performance-compat",bR="@firebase/remote-config",UR="@firebase/remote-config-compat",FR="@firebase/storage",jR="@firebase/storage-compat",BR="@firebase/firestore",zR="@firebase/vertexai-preview",$R="@firebase/firestore-compat",WR="firebase",qR="10.14.1";/**
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
 */const Dh="[DEFAULT]",HR={[xh]:"fire-core",[vR]:"fire-core-compat",[wR]:"fire-analytics",[ER]:"fire-analytics-compat",[IR]:"fire-app-check",[TR]:"fire-app-check-compat",[SR]:"fire-auth",[AR]:"fire-auth-compat",[RR]:"fire-rtdb",[PR]:"fire-data-connect",[CR]:"fire-rtdb-compat",[kR]:"fire-fn",[NR]:"fire-fn-compat",[xR]:"fire-iid",[DR]:"fire-iid-compat",[OR]:"fire-fcm",[VR]:"fire-fcm-compat",[LR]:"fire-perf",[MR]:"fire-perf-compat",[bR]:"fire-rc",[UR]:"fire-rc-compat",[FR]:"fire-gcs",[jR]:"fire-gcs-compat",[BR]:"fire-fst",[$R]:"fire-fst-compat",[zR]:"fire-vertex","fire-js":"fire-js",[WR]:"fire-js-all"};/**
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
 */const Sl=new Map,KR=new Map,Oh=new Map;function dg(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Oh.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,t);for(const n of Sl.values())dg(n,t);for(const n of KR.values())dg(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
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
 */const GR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new Do("app","Firebase",GR);/**
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
 */class QR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=qR;function dE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=aE()),!n)throw nr.create("no-options");const s=Sl.get(i);if(s){if(Il(n,s.options)&&Il(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new tR(i);for(const u of Oh.values())o.addComponent(u);const l=new QR(n,r,o);return Sl.set(i,l),l}function Xd(t=Dh){const e=Sl.get(t);if(!e&&t===Dh&&aE())return dE();if(!e)throw nr.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=HR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}Fr(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YR="firebase-heartbeat-database",XR=1,fo="firebase-heartbeat-store";let Sc=null;function fE(){return Sc||(Sc=pR(YR,XR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function JR(t){try{const n=(await fE()).transaction(fo),r=await n.objectStore(fo).get(pE(t));return await n.done,r}catch(e){if(e instanceof en)An.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function fg(t,e){try{const r=(await fE()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,pE(t)),await r.done}catch(n){if(n instanceof en)An.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function pE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZR=1024,eP=30*24*60*60*1e3;class tP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=eP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pg(),{heartbeatsToSend:r,unsentEntries:i}=nP(this._heartbeatsCache.heartbeats),s=Tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function pg(){return new Date().toISOString().substring(0,10)}function nP(t,e=ZR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $A()?WA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mg(t){return Tl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function iP(t){Fr(new lr("platform-logger",e=>new yR(e),"PRIVATE")),Fr(new lr("heartbeat",e=>new tP(e),"PRIVATE")),Kt(xh,hg,t),Kt(xh,hg,"esm2017"),Kt("fire-js","")}iP("");var sP="firebase",oP="10.14.1";/**
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
 */Kt(sP,oP,"app");function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aP=mE,gE=new Do("auth","Firebase",mE());/**
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
 */const Al=new Qd("@firebase/auth");function lP(t,...e){Al.logLevel<=te.WARN&&Al.warn(`Auth (${Hr}): ${t}`,...e)}function $a(t,...e){Al.logLevel<=te.ERROR&&Al.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw Zd(t,...e)}function Gt(t,...e){return Zd(t,...e)}function yE(t,e,n){const r=Object.assign(Object.assign({},aP()),{[e]:n});return new Do("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return yE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gE.create(t,...e)}function K(t,e,...n){if(!t)throw Zd(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Rn(t,e){t||gn(e)}/**
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
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uP(){return gg()==="http:"||gg()==="https:"}function gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uP()||FA()||"connection"in navigator)?navigator.onLine:!0}function hP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=MA()||jA()}get(){return cP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ef(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _E{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fP=new Vo(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,i={}){return vE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return UA()||(h.referrerPolicy="no-referrer"),_E.fetch()(EE(t,t.config.apiHost,n,l),h)})}async function vE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dP),e);try{const i=new mP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yE(t,f,h);Ft(t,f)}}catch(i){if(i instanceof en)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function ou(t,e,n,r,i={}){const s=await gr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function EE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`}function pP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),fP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function yg(t){return t!==void 0&&t.enterprise!==void 0}class gP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yP(t,e){return gr(t,"GET","/v2/recaptchaConfig",Kr(t,e))}/**
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
 */async function _P(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function wE(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=tf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(Ac(i.auth_time)),issuedAtTime:zs(Ac(i.iat)),expirationTime:zs(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=iE(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _g(t){const e=tf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&EP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,wE(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TE(s.providerUserInfo):[],l=IP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function TP(t){const e=$e(t);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TE(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SP(t,e){const n=await vE(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=EE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_E.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AP(t,e){return gr(t,"POST","/v2/accounts:revokeToken",Kr(t,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=_g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Vn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vP(this,e)}reload(){return TP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await po(this,_P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:U,providerData:j,stsTokenManager:E}=n;K(S&&E,e,"internal-error");const y=Si.fromJSON(this.name,E);K(typeof S=="string",e,"internal-error"),Vn(p,e.name),Vn(g,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),Vn(A,e.name),Vn(P,e.name),Vn(N,e.name),Vn(x,e.name),Vn(w,e.name),Vn(_,e.name);const v=new yn({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:U,photoURL:P,phoneNumber:A,tenantId:N,stsTokenManager:y,createdAt:w,lastLoginAt:_});return j&&Array.isArray(j)&&(v.providerData=j.map(T=>Object.assign({},T))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?TE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new yn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const vg=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=vg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vg.set(t,e),e)}/**
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
 */class IE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IE.type="NONE";const Eg=IE;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(_n(Eg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n(Eg);const o=Wa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=yn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ai(s,e,r))}}/**
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
 */function wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kE(e))return"Blackberry";if(NE(e))return"Webos";if(AE(e))return"Safari";if((e.includes("chrome/")||RE(e))&&!e.includes("edge/"))return"Chrome";if(CE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SE(t=tt()){return/firefox\//i.test(t)}function AE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RE(t=tt()){return/crios\//i.test(t)}function PE(t=tt()){return/iemobile/i.test(t)}function CE(t=tt()){return/android/i.test(t)}function kE(t=tt()){return/blackberry/i.test(t)}function NE(t=tt()){return/webos/i.test(t)}function nf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RP(t=tt()){var e;return nf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PP(){return BA()&&document.documentMode===10}function xE(t=tt()){return nf(t)||CE(t)||NE(t)||kE(t)||/windows phone/i.test(t)||PE(t)}/**
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
 */function DE(t,e=[]){let n;switch(t){case"Browser":n=wg(tt());break;case"Worker":n=`${wg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class CP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kP(t,e={}){return gr(t,"GET","/v2/passwordPolicy",Kr(t,e))}/**
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
 */const NP=6;class xP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new CP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wE(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(rr(this));const n=e?$e(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kP(this),n=new xP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ki(t){return $e(t)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=QA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OP(t){au=t}function OE(t){return au.loadJS(t)}function VP(){return au.recaptchaEnterpriseScript}function LP(){return au.gapiScript}function MP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bP="recaptcha-enterprise",UP="NO_RECAPTCHA";class FP{constructor(e){this.type=bP,this.auth=Ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new gP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;yg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(UP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&yg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VP();u.length!==0&&(u+=l),OE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Ig(t,e,n,r=!1){const i=new FP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ig(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ig(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function jP(t,e){const n=su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Il(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function BP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zP(t,e,n){const r=Ki(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VE(e),{host:o,port:l}=$P(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),WP()}function VE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $P(t){const e=VE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ag(o)}}}function Ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function qP(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HP(t,e){return ou(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
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
 */async function KP(t,e){return ou(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function GP(t,e){return ou(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
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
 */class mo extends rf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sg(e,n,"signInWithPassword",HP);case"emailLink":return KP(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sg(e,r,"signUpPassword",qP);case"emailLink":return GP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ri(t,e){return ou(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
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
 */const QP="http://localhost";class jr extends rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:QP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
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
 */function YP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XP(t){const e=Ps(Cs(t)).link,n=e?Ps(Cs(e)).deep_link_id:null,r=Ps(Cs(t)).deep_link_id;return(r?Ps(Cs(r)).link:null)||r||n||e||t}class sf{constructor(e){var n,r,i,s,o,l;const u=Ps(Cs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=YP((i=u.mode)!==null&&i!==void 0?i:null);K(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=XP(e);try{return new sf(n)}catch{return null}}}/**
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
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sf.parseLink(n);return K(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class LE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends LE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Lo{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class jn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Bn extends Lo{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class zn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */class Li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yn._fromIdTokenResponse(e,r,i),o=Rg(r);return new Li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rg(r);return new Li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pl extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pl(e,n,r,i)}}function ME(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(t,s,e,r):s})}async function JP(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Li._forOperation(t,"link",r)}/**
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
 */async function ZP(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await po(t,ME(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=tf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function bE(t,e,n=!1){if(mn(t.app))return Promise.reject(rr(t));const r="signIn",i=await ME(t,r,e),s=await Li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eC(t,e){return bE(Ki(t),e)}/**
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
 */async function tC(t){const e=Ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nC(t,e,n){return mn(t.app)?Promise.reject(rr(t)):eC($e(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tC(t),r})}function rC(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function iC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function sC(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function oC(t){return $e(t).signOut()}const Cl="__sak";/**
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
 */class UE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aC=1e3,lC=10;class FE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const uC=FE;/**
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
 */class jE extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jE.type="SESSION";const BE=jE;/**
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
 */function cC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await cC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lu.receivers=[];/**
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
 */function of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=of("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function dC(t){Qt().location.href=t}/**
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
 */function zE(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function fC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mC(){return zE()?self:null}/**
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
 */const $E="firebaseLocalStorageDb",gC=1,kl="firebaseLocalStorage",WE="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uu(t,e){return t.transaction([kl],e?"readwrite":"readonly").objectStore(kl)}function yC(){const t=indexedDB.deleteDatabase($E);return new Mo(t).toPromise()}function Mh(){const t=indexedDB.open($E,gC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kl,{keyPath:WE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kl)?e(r):(r.close(),await yC(),e(await Mh()))})})}async function Pg(t,e,n){const r=uu(t,!0).put({[WE]:e,value:n});return new Mo(r).toPromise()}async function _C(t,e){const n=uu(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Cg(t,e){const n=uu(t,!0).delete(e);return new Mo(n).toPromise()}const vC=800,EC=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lu._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mh();return await Pg(e,Cl,"1"),await Cg(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_C(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uu(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const wC=qE;new Vo(3e4,6e4);/**
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
 */function TC(t,e){return e?_n(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class af extends rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IC(t){return bE(t.auth,new af(t),t.bypassAuthState)}function SC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ZP(n,new af(t),t.bypassAuthState)}async function AC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),JP(n,new af(t),t.bypassAuthState)}/**
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
 */class HE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return AC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:Ft(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RC=new Vo(2e3,1e4);class yi extends HE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RC.get())};e()}}yi.currentPopupAction=null;/**
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
 */const PC="pendingRedirect",qa=new Map;class CC extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await kC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kC(t,e){const n=DC(e),r=xC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NC(t,e){qa.set(t._key(),e)}function xC(t){return _n(t._redirectPersistence)}function DC(t){return Wa(PC,t.config.apiKey,t.name)}async function OC(t,e,n=!1){if(mn(t.app))return Promise.reject(rr(t));const r=Ki(t),i=TC(r,e),o=await new CC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const VC=10*60*1e3;class LC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VC&&this.cachedEventUids.clear(),this.cachedEventUids.has(kg(e))}saveEventToCache(e){this.cachedEventUids.add(kg(e)),this.lastProcessedEventTime=Date.now()}}function kg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KE(t);default:return!1}}/**
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
 */async function bC(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const UC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function jC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bC(t);for(const n of e)try{if(BC(n))return}catch{}Ft(t,"unauthorized-domain")}function BC(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FC.test(n))return!1;if(UC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zC=new Vo(3e4,6e4);function Ng(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $C(t){return new Promise((e,n)=>{var r,i,s;function o(){Ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ng(),n(Gt(t,"network-request-failed"))},timeout:zC.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const l=MP("iframefcb");return Qt()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},OE(`${LP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function WC(t){return Ha=Ha||$C(t),Ha}/**
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
 */const qC=new Vo(5e3,15e3),HC="__/auth/iframe",KC="emulator/auth/iframe",GC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,KC):`https://${t.config.authDomain}/${HC}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=QC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function XC(t){const e=await WC(t),n=Qt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:YC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(o)},qC.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const JC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,ek=600,tk="_blank",nk="http://localhost";class xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rk(t,e,n,r=ZC,i=ek){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=RE(h)?tk:n),SE(h)&&(e=e||nk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(RP(h)&&l!=="_self")return ik(e||"",l),new xg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new xg(p)}function ik(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sk="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function Dg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof LE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${ak}=${encodeURIComponent(u)}`:"";return`${lk(t)}?${Oo(l).slice(1)}${h}`}function lk({config:t}){return t.emulator?ef(t,ok):`https://${t.authDomain}/${sk}`}/**
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
 */const Rc="webStorageSupport";class uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BE,this._completeRedirectFn=OC,this._overrideRedirectResult=NC}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dg(e,n,r,Vh(),i);return rk(e,o,of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dg(e,n,r,Vh(),i);return dC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XC(e),r=new LC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rc];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xE()||AE()||nf()}}const ck=uk;var Og="@firebase/auth",Vg="1.7.9";/**
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
 */class hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fk(t){Fr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DE(t)},h=new DP(r,i,s,u);return BP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new lr("auth-internal",e=>{const n=Ki(e.getProvider("auth").getImmediate());return(r=>new hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Og,Vg,dk(t)),Kt(Og,Vg,"esm2017")}/**
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
 */const pk=5*60,mk=lE("authIdTokenMaxAge")||pk;let Lg=null;const gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mk)return;const i=n==null?void 0:n.token;Lg!==i&&(Lg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yk(t=Xd()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jP(t,{popupRedirectResolver:ck,persistence:[wC,uC,BE]}),r=lE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gk(s.toString());iC(n,o,()=>o(n.currentUser)),rC(n,l=>o(l))}}const i=sE("auth");return i&&zP(n,`http://${i}`),n}function _k(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_k().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fk("Browser");var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,GE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,R,k){for(var I=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)I[wt-2]=arguments[wt];return y.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],R=E.g[2];var k=E.g[3],I=y+(k^v&(R^k))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=k+(R^y&(v^R))+T[1]+3905402710&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(v^k&(y^v))+T[2]+606105819&4294967295,R=k+(I<<17&4294967295|I>>>15),I=v+(y^R&(k^y))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(k^v&(R^k))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=k+(R^y&(v^R))+T[5]+1200080426&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(v^k&(y^v))+T[6]+2821735955&4294967295,R=k+(I<<17&4294967295|I>>>15),I=v+(y^R&(k^y))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(k^v&(R^k))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=k+(R^y&(v^R))+T[9]+2336552879&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(v^k&(y^v))+T[10]+4294925233&4294967295,R=k+(I<<17&4294967295|I>>>15),I=v+(y^R&(k^y))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(k^v&(R^k))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=k+(R^y&(v^R))+T[13]+4254626195&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(v^k&(y^v))+T[14]+2792965006&4294967295,R=k+(I<<17&4294967295|I>>>15),I=v+(y^R&(k^y))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(R^k&(v^R))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=k+(v^R&(y^v))+T[6]+3225465664&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(k^y))+T[11]+643717713&4294967295,R=k+(I<<14&4294967295|I>>>18),I=v+(k^y&(R^k))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(v^R))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=k+(v^R&(y^v))+T[10]+38016083&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(k^y))+T[15]+3634488961&4294967295,R=k+(I<<14&4294967295|I>>>18),I=v+(k^y&(R^k))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(v^R))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=k+(v^R&(y^v))+T[14]+3275163606&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(k^y))+T[3]+4107603335&4294967295,R=k+(I<<14&4294967295|I>>>18),I=v+(k^y&(R^k))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(v^R))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=k+(v^R&(y^v))+T[2]+4243563512&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(k^y))+T[7]+1735328473&4294967295,R=k+(I<<14&4294967295|I>>>18),I=v+(k^y&(R^k))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(v^R^k)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=k+(y^v^R)+T[8]+2272392833&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^v)+T[11]+1839030562&4294967295,R=k+(I<<16&4294967295|I>>>16),I=v+(R^k^y)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^k)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=k+(y^v^R)+T[4]+1272893353&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^v)+T[7]+4139469664&4294967295,R=k+(I<<16&4294967295|I>>>16),I=v+(R^k^y)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^k)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=k+(y^v^R)+T[0]+3936430074&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^v)+T[3]+3572445317&4294967295,R=k+(I<<16&4294967295|I>>>16),I=v+(R^k^y)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^k)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=k+(y^v^R)+T[12]+3873151461&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^v)+T[15]+530742520&4294967295,R=k+(I<<16&4294967295|I>>>16),I=v+(R^k^y)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(R^(v|~k))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=k+(v^(y|~R))+T[7]+1126891415&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~v))+T[14]+2878612391&4294967295,R=k+(I<<15&4294967295|I>>>17),I=v+(k^(R|~y))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~k))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=k+(v^(y|~R))+T[3]+2399980690&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~v))+T[10]+4293915773&4294967295,R=k+(I<<15&4294967295|I>>>17),I=v+(k^(R|~y))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~k))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=k+(v^(y|~R))+T[15]+4264355552&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~v))+T[6]+2734768916&4294967295,R=k+(I<<15&4294967295|I>>>17),I=v+(k^(R|~y))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~k))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=k+(v^(y|~R))+T[11]+3174756917&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~v))+T[2]+718787259&4294967295,R=k+(I<<15&4294967295|I>>>17),I=v+(k^(R|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,R=this.h,k=0;k<y;){if(R==0)for(;k<=v;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(T[R++]=E.charCodeAt(k++),R==this.blockSize){i(this,T),R=0;break}}else for(;k<y;)if(T[R++]=E[k++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],T=!0,R=E.length-1;0<=R;R--){var k=E[R]|0;T&&k==y||(v[R]=k,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(h(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return x(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=p,R=0;R<E.length;R+=8){var k=Math.min(8,E.length-R),I=parseInt(E.substring(R,R+k),y);8>k?(k=h(Math.pow(y,k)),T=T.j(k).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-x(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+x(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,T="";;){var R=O(v,y).g;v=w(v,R.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=R,P(v))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=w(this,E),N(E)?-1:P(E)?0:1};function x(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new o(v,~E.h).add(g)}t.abs=function(){return N(this)?x(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,R=0;R<=y;R++){var k=T+(this.i(R)&65535)+(E.i(R)&65535),I=(k>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);T=I>>>16,k&=65535,I&=65535,v[R]=I<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(x(y))}t.j=function(E){if(P(this)||P(E))return p;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<E.g.length;R++){var k=this.i(T)>>>16,I=this.i(T)&65535,wt=E.i(R)>>>16,yr=E.i(R)&65535;v[2*T+2*R]+=I*yr,_(v,2*T+2*R),v[2*T+2*R+1]+=k*yr,_(v,2*T+2*R+1),v[2*T+2*R+1]+=I*wt,_(v,2*T+2*R+1),v[2*T+2*R+2]+=k*wt,_(v,2*T+2*R+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function O(E,y){if(P(y))throw Error("division by zero");if(P(E))return new S(p,p);if(N(E))return y=O(x(E),y),new S(x(y.g),x(y.h));if(N(y))return y=O(E,x(y)),new S(x(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(E);)v=U(v),T=U(T);var R=j(v,1),k=j(T,1);for(T=j(T,2),v=j(v,2);!P(T);){var I=k.add(T);0>=I.l(E)&&(R=R.add(v),k=I),T=j(T,1),v=j(v,1)}return y=w(E,R.j(y)),new S(R,y)}for(R=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=h(v),I=k.j(y);N(I)||0<I.l(E);)v-=T,k=h(v),I=k.j(y);P(k)&&(k=g),R=R.add(k),E=w(E,I)}return new S(R,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function U(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function j(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,R=[],k=0;k<T;k++)R[k]=0<y?E.i(k+v)>>>y|E.i(k+v+1)<<32-y:E.i(k+v);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,GE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Dr=o}).apply(typeof Mg<"u"?Mg:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QE,ks,YE,Ka,bh,XE,JE,ZE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,D){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return c.prototype[C].apply(m,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function x(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const C=a.length||0,D=m.length||0;a.length=C+D;for(let B=0;B<D;B++)a[C+B]=m[B]}else a.push(m)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class wt{constructor(){this.h=this.g=null}add(c,d){const m=yr.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var yr=new w(()=>new es,a=>a.reset());class es{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,z=!1,Q=new wt,J=()=>{const a=l.Promise.resolve(void 0);nn=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){k(d)}var c=yr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function sn(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{O(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:on[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}P(sn,Ie);var on={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Aw=0;function Rw(a,c,d,m,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=C,this.key=++Aw,this.da=this.fa=!1}function Wo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qo(a){this.src=a,this.g={},this.h=0}qo.prototype.add=function(a,c,d,m,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=Au(a,c,m,C);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new Rw(c,this.src,D,!!m,C),c.fa=d,a.push(c)),c};function Su(a,c){var d=c.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=C)&&Array.prototype.splice.call(m,C,1),D&&(Wo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Au(a,c,d,m){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return C}return-1}var Ru="closure_lm_"+(1e6*Math.random()|0),Pu={};function $f(a,c,d,m,C){if(Array.isArray(c)){for(var D=0;D<c.length;D++)$f(a,c[D],d,m,C);return null}return d=Hf(d),a&&a[an]?a.K(c,d,h(m)?!!m.capture:!1,C):Pw(a,c,d,!1,m,C)}function Pw(a,c,d,m,C,D){if(!c)throw Error("Invalid event type");var B=h(C)?!!C.capture:!!C,ue=ku(a);if(ue||(a[Ru]=ue=new qo(a)),d=ue.add(c,d,m,B,D),d.proxy)return d;if(m=Cw(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)rn||(C=B),C===void 0&&(C=!1),a.addEventListener(c.toString(),m,C);else if(a.attachEvent)a.attachEvent(qf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cw(){function a(d){return c.call(a.src,a.listener,d)}const c=kw;return a}function Wf(a,c,d,m,C){if(Array.isArray(c))for(var D=0;D<c.length;D++)Wf(a,c[D],d,m,C);else m=h(m)?!!m.capture:!!m,d=Hf(d),a&&a[an]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Au(D,d,m,C),-1<d&&(Wo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=ku(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Au(c,d,m,C)),(d=-1<a?c[a]:null)&&Cu(d))}function Cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[an])Su(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(qf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=ku(c))?(Su(d,a),d.h==0&&(d.src=null,c[Ru]=null)):Wo(a)}}}function qf(a){return a in Pu?Pu[a]:Pu[a]="on"+a}function kw(a,c){if(a.da)a=!0;else{c=new sn(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&Cu(a),a=d.call(m,c)}return a}function ku(a){return a=a[Ru],a instanceof qo?a:null}var Nu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hf(a){return typeof a=="function"?a:(a[Nu]||(a[Nu]=function(c){return a.handleEvent(c)}),a[Nu])}function qe(){le.call(this),this.i=new qo(this),this.M=this,this.F=null}P(qe,le),qe.prototype[an]=!0,qe.prototype.removeEventListener=function(a,c,d,m){Wf(this,a,c,d,m)};function nt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var C=c;c=new Ie(m,a),T(c,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var B=c.g=d[D];C=Ho(B,m,!0,c)&&C}if(B=c.g=a,C=Ho(B,m,!0,c)&&C,C=Ho(B,m,!1,c)&&C,d)for(D=0;D<d.length;D++)B=c.g=d[D],C=Ho(B,m,!1,c)&&C}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)Wo(d[m]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},qe.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ho(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==d){var ue=B.listener,Me=B.ha||B.src;B.fa&&Su(a.i,B),C=ue.call(Me,m)!==!1&&C}}return C&&!m.defaultPrevented}function Kf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Gf(a){a.g=Kf(()=>{a.g=null,a.i&&(a.i=!1,Gf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Nw extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Gf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(a){le.call(this),this.h=a,this.g={}}P(ts,le);var Qf=[];function Yf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Cu(c)},a),a.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Yf(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xu=l.JSON.stringify,xw=l.JSON.parse,Dw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Du(){}Du.prototype.h=null;function Xf(a){return a.h||(a.h=a.i())}function Jf(){}var ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ou(){Ie.call(this,"d")}P(Ou,Ie);function Vu(){Ie.call(this,"c")}P(Vu,Ie);var _r={},Zf=null;function Ko(){return Zf=Zf||new qe}_r.La="serverreachability";function ep(a){Ie.call(this,_r.La,a)}P(ep,Ie);function rs(a){const c=Ko();nt(c,new ep(c))}_r.STAT_EVENT="statevent";function tp(a,c){Ie.call(this,_r.STAT_EVENT,a),this.stat=c}P(tp,Ie);function rt(a){const c=Ko();nt(c,new tp(c,a))}_r.Ma="timingevent";function np(a,c){Ie.call(this,_r.Ma,a),this.size=c}P(np,Ie);function is(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function Ow(a,c,d,m,C,D){a.info(function(){if(a.g)if(D)for(var B="",ue=D.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var He=ie[0];ie=ie[1];var Ke=He.split("_");B=2<=Ke.length&&Ke[1]=="type"?B+(He+"="+ie+"&"):B+(He+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+c+`
`+d+`
`+B})}function Vw(a,c,d,m,C,D,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+c+`
`+d+`
`+D+" "+B})}function Xr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Mw(a,d)+(m?" "+m:"")})}function Lw(a,c){a.info(function(){return"TIMEOUT: "+c})}ss.prototype.info=function(){};function Mw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<C.length;B++)C[B]=""}}}}return xu(d)}catch{return c}}var Go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lu;function Qo(){}P(Qo,Du),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},Lu=new Qo;function Nn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var sp={},Mu={};function bu(a,c,d){a.L=1,a.v=Zo(ln(c)),a.m=d,a.P=!0,op(a,null)}function op(a,c){a.F=Date.now(),Yo(a),a.A=ln(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ep(d.i,"t",m),a.C=0,d=a.j.J,a.h=new ip,a.g=Up(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Nw(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Qf[0]=C.toString()),C=Qf);for(var D=0;D<C.length;D++){var B=$f(d,C[D],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),rs(),Ow(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&un(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=un(this.g);var c=this.g.Ba();const ei=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Pp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=ei?rs(3):rs(2)),Uu(this);var d=this.g.Z();this.X=d;t:if(ap(this)){var m=Pp(this.g);a="";var C=m.length,D=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),os(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==C-1)});m.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Vw(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ie=ue;break t}}ie=null}if(d=ie)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fu(this,d);else{this.o=!1,this.s=3,rt(12),vr(this),os(this);break e}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<B.length;)if(kt=bw(this,B),kt==Mu){Ke==4&&(this.s=4,rt(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==sp){this.s=4,rt(15),Xr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,kt,null),Fu(this,kt);if(ap(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||B.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,B,"[Invalid Chunked Response]"),vr(this),os(this);else if(0<B.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),qu(He),He.M=!0,rt(11))}}else Xr(this.i,this.l,B,null),Fu(this,B);Ke==4&&vr(this),this.o&&!this.J&&(Ke==4?Vp(this.j,this):(this.o=!1,Yo(this)))}else eT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),vr(this),os(this)}}}catch{}finally{}};function ap(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Mu:(d=Number(c.substring(d,m)),isNaN(d)?sp:(m+=1,m+d>c.length?Mu:(c=c.slice(m,m+d),a.C=m+d,c)))}Nn.prototype.cancel=function(){this.J=!0,vr(this)};function Yo(a){a.S=Date.now()+a.I,lp(a,a.I)}function lp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=is(g(a.ba,a),c)}function Uu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Lw(this.i,this.A),this.L!=2&&(rs(),rt(17)),vr(this),this.s=2,os(this)):lp(this,this.S-a)};function os(a){a.j.G==0||a.J||Vp(a.j,a)}function vr(a){Uu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Fu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||ju(d.h,a))){if(!a.K&&ju(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)sa(d),ra(d);else break e;Wu(d),rt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=is(g(d.Za,d),6e3));if(1>=hp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wr(d,11)}else if((a.K||d.g==a)&&sa(d),!_(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ie=C[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const He=ie[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const ei=ie[5];ei!=null&&typeof ei=="number"&&0<ei&&(m=1.5*ei,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const kt=a.g;if(kt){const aa=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var D=m.h;D.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Bu(D,D.h),D.h=null))}if(m.D){const Hu=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(m.ya=Hu,he(m.I,m.D,Hu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=a;if(m.qa=bp(m,m.J?m.ia:null,m.W),B.K){dp(m.h,B);var ue=B,Me=m.L;Me&&(ue.I=Me),ue.B&&(Uu(ue),Yo(ue)),m.g=B}else Dp(m);0<d.i.length&&ia(d)}else ie[0]!="stop"&&ie[0]!="close"||wr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?wr(d,7):$u(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}rs(4)}catch{}}var Uw=class{constructor(a,c){this.g=a,this.map=c}};function up(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hp(a){return a.h?1:a.g?a.g.size:0}function ju(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Bu(a,c){a.g?a.g.add(c):a.h=c}function dp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}up.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Fw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function jw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function pp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=jw(a),m=Fw(a),C=m.length,D=0;D<C;D++)c.call(void 0,m[D],d&&d[D],a)}var mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var D=a[d].substring(0,m);C=a[d].substring(m+1)}else D=a[d];c(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,Xo(this,a.j),this.o=a.o,this.g=a.g,Jo(this,a.s),this.l=a.l;var c=a.i,d=new us;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),gp(this,d),this.m=a.m}else a&&(c=String(a).match(mp))?(this.h=!1,Xo(this,c[1]||"",!0),this.o=as(c[2]||""),this.g=as(c[3]||"",!0),Jo(this,c[4]),this.l=as(c[5]||"",!0),gp(this,c[6]||"",!0),this.m=as(c[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Er.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ls(c,yp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ls(c,yp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ls(d,d.charAt(0)=="/"?Ww:$w,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ls(d,Hw)),a.join("")};function ln(a){return new Er(a)}function Xo(a,c,d){a.j=d?as(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Jo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function gp(a,c,d){c instanceof us?(a.i=c,Kw(a.i,a.h)):(d||(c=ls(c,qw)),a.i=new us(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Zo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function as(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ls(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,zw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yp=/[#\/\?@]/g,$w=/[#\?:]/g,Ww=/[#\?]/g,qw=/[#\?@]/g,Hw=/#/g;function us(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Bw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=us.prototype,t.add=function(a,c){xn(this),this.i=null,a=Jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function _p(a,c){xn(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function vp(a,c){return xn(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){xn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(c,C,m,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const C=a[m];for(let D=0;D<C.length;D++)d.push(c[m])}return d},t.V=function(a){xn(this);let c=[];if(typeof a=="string")vp(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return xn(this),this.i=null,a=Jr(this,a),vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Ep(a,c,d){_p(a,c),0<d.length&&(a.i=null,a.g.set(Jr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const D=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var C=D;B[m]!==""&&(C+="="+encodeURIComponent(String(B[m]))),a.push(C)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Kw(a,c){c&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(_p(this,m),Ep(this,C,d))},a)),a.j=c}function Gw(a,c){const d=new ss;if(l.Image){const m=new Image;m.onload=A(Dn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=A(Dn,d,"TestLoadImage: error",!1,c,m),m.onabort=A(Dn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=A(Dn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function Qw(a,c){const d=new ss,m=new AbortController,C=setTimeout(()=>{m.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Yw(){this.g=new Dw}function Xw(a,c,d){const m=d||"";try{pp(a,function(C,D){let B=C;h(C)&&(B=xu(C)),c.push(m+D+"="+encodeURIComponent(B))})}catch(C){throw c.push(m+"type="+encodeURIComponent("_badmap")),C}}function ea(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ea,Du),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(a){return function(){return a}}({});function ta(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ta,qe),t=ta.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?cs(this):hs(this),this.readyState==3&&wp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,cs(this))},t.Qa=function(a){this.g&&(this.response=a,cs(this))},t.ga=function(){this.g&&cs(this)};function cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,hs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tp(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function zu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Tp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function we(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(we,qe);var Jw=/^https?$/i,Zw=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lu.g(),this.v=this.o?Xf(this.o):Xf(Lu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Ip(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zw,c,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Ip(this,D)}};function Ip(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Sp(a),na(a)}function Sp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ap(this):this.bb())},t.bb=function(){Ap(this)};function Ap(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Kf(a.Ea,0,a);else if(nt(a,"readystatechange"),un(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=B===0){var C=String(a.D).match(mp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Jw.test(C?C.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Sp(a)}}finally{na(a)}}}}function na(a,c){if(a.g){Rp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=m}catch{}}}function Rp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),xw(c)}};function Pp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eT(a){const c={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=R(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[C]||[];c[C]=D,D.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Cp(a){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,a),this.cb=ds("retryDelaySeedMs",1e4,a),this.Wa=ds("forwardChannelMaxRetries",2,a),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new up(a&&a.concurrentRequestLimit),this.Da=new Yw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){rt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=bp(this,null,this.W),ia(this)};function $u(a){if(kp(a),a.G==3){var c=a.U++,d=ln(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),fs(a,d),c=new Nn(a,a.j,c),c.L=2,c.v=Zo(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Up(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yo(c)}Mp(a)}function ra(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function kp(a){ra(a),a.u&&(l.clearTimeout(a.u),a.u=null),sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ia(a){if(!cp(a.h)&&!a.s){a.s=!0;var c=a.Ga;nn||J(),z||(nn(),z=!0),Q.add(c,a),a.B=0}}function tT(a,c){return hp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=is(g(a.Ga,a,c),Lp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Nn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=xp(this,C,c),d=ln(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),fs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Tp(D)))+"&"+c:this.m&&zu(d,this.m,D)),Bu(this.h,C),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),C.T=!0,bu(C,d,null)):bu(C,d,c),this.G=2}}else this.G==3&&(a?Np(this,a):this.i.length==0||cp(this.h)||Np(this))};function Np(a,c){var d;c?d=c.l:d=a.U++;const m=ln(a.I);he(m,"SID",a.K),he(m,"RID",d),he(m,"AID",a.T),fs(a,m),a.m&&a.o&&zu(m,a.m,a.o),d=new Nn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=xp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bu(a.h,d),bu(d,m,c)}function fs(a,c){a.H&&j(a.H,function(d,m){he(c,m,d)}),a.l&&pp({},function(d,m){he(c,m,d)})}function xp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=C[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let ue=!0;for(let Me=0;Me<d;Me++){let ie=C[Me].g;const He=C[Me].map;if(ie-=D,0>ie)D=Math.max(0,C[Me].g-100),ue=!1;else try{Xw(He,B,"req"+ie+"_")}catch{m&&m(He)}}if(ue){m=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Dp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;nn||J(),z||(nn(),z=!0),Q.add(c,a),a.v=0}}function Wu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=is(g(a.Fa,a),Lp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Op(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=is(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ra(this),Op(this))};function qu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Op(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=ln(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),fs(a,c),a.m&&a.o&&zu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Zo(ln(c)),d.m=null,d.P=!0,op(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ra(this),Wu(this),rt(19))};function sa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Vp(a,c){var d=null;if(a.g==c){sa(a),qu(a),a.g=null;var m=2}else if(ju(a.h,c))d=c.D,dp(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;m=Ko(),nt(m,new np(m,d)),ia(a)}else Dp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(m==1&&tT(a,c)||m==2&&Wu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function Lp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function wr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new Er(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xo(m,"https"),Zo(m),C?Gw(m.toString(),d):Qw(m.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),Mp(a),kp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Mp(a){if(a.G=0,a.ka=[],a.l){const c=fp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ka,c),x(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function bp(a,c,d){var m=d instanceof Er?ln(d):new Er(d);if(m.g!="")c&&(m.g=c+"."+m.g),Jo(m,m.s);else{var C=l.location;m=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var D=new Er(null);m&&Xo(D,m),c&&(D.g=c),C&&Jo(D,C),d&&(D.l=d),m=D}return d=a.D,c=a.ya,d&&c&&he(m,d,c),he(m,"VER",a.la),fs(a,m),m}function Up(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new ea({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fp(){}t=Fp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oa(){}oa.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){qe.call(this),this.g=new Cp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zr(this)}P(pt,qe),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){$u(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xu(a),a=d);c.i.push(new Uw(c.Ya++,a)),c.G==3&&ia(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,$u(this.g),delete this.g,pt.aa.N.call(this)};function jp(a){Ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(jp,Ou);function Bp(){Vu.call(this),this.status=1}P(Bp,Vu);function Zr(a){this.g=a}P(Zr,Fp),Zr.prototype.ua=function(){nt(this.g,"a")},Zr.prototype.ta=function(a){nt(this.g,new jp(a))},Zr.prototype.sa=function(a){nt(this.g,new Bp)},Zr.prototype.ra=function(){nt(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,ZE=function(){return new oa},JE=function(){return Ko()},XE=_r,bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,Ka=Go,rp.COMPLETE="complete",YE=rp,Jf.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",qe.prototype.listen=qe.prototype.K,ks=Jf,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,QE=we}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});const bg="@firebase/firestore";/**
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
 */let Xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Qi="10.14.0";/**
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
 */const Br=new Qd("@firebase/firestore");function Ts(){return Br.logLevel}function q(t,...e){if(Br.logLevel<=te.DEBUG){const n=e.map(lf);Br.debug(`Firestore (${Qi}): ${t}`,...n)}}function Pn(t,...e){if(Br.logLevel<=te.ERROR){const n=e.map(lf);Br.error(`Firestore (${Qi}): ${t}`,...n)}}function Mi(t,...e){if(Br.logLevel<=te.WARN){const n=e.map(lf);Br.warn(`Firestore (${Qi}): ${t}`,...n)}}function lf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class e0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new e0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class Tk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Tk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new Sk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class t0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new De(0,0))}static max(){return new Y(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends go{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends go{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return Pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function Ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new ur(i,H.empty(),e)}function kk(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(Y.min(),H.empty(),-1)}static max(){return new ur(Y.max(),H.empty(),-1)}}function Nk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==xk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ok(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}uf.oe=-1;function cu(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function Vk(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ug(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function n0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Be(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class r0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new r0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Lk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=Lk.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hf(t){const e=t.mapValue.fields.__previous_value__;return cf(e)?hf(e):e}function yo(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class Mk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class _o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ca={mapValue:{}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cf(t)?4:Uk(t)?9007199254740991:bk(t)?10:11:G()}function Jt(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yo(t).isEqual(yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),l=cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Nl(o)===Nl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ug(o)!==Ug(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jt(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function vo(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return jg(t.timestampValue,e.timestampValue);case 4:return jg(yo(t),yo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=zr(s),u=zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=se(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Bg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ca.mapValue&&o===Ca.mapValue)return 0;if(s===Ca.mapValue)return 1;if(o===Ca.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=se(u[p],f[p]);if(g!==0)return g;const A=Ui(l[u[p]],h[f[p]]);if(A!==0)return A}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function jg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=cr(t),r=cr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Bg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ui(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Fi(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Uh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Uh(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function zg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function Wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function bk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Uk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=$s(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St($s(this.value))}}function i0(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new Fe([n]);if(Ga(r)){const s=i0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xl{constructor(e,n){this.position=e,this.inclusive=n}}function qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s0{}class Ce extends s0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bk(e,n,r):n==="array-contains"?new Wk(e,r):n==="in"?new qk(e,r):n==="not-in"?new Hk(e,r):n==="array-contains-any"?new Kk(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zk(e,r):new $k(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ui(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends s0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jt(e,n)}matches(e){return o0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function o0(t){return t.op==="and"}function a0(t){return jk(t)&&o0(t)}function jk(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function jh(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(a0(t))return t.filters.map(e=>jh(e)).join(",");{const e=t.filters.map(n=>jh(n)).join(",");return`${t.op}(${e})`}}function l0(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&l0(o,i.filters[l]),!0):!1}(t,e):void G()}function u0(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Fi(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(u0).join(" ,")+"}"}(t):"Filter"}class Bk extends Ce{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class zk extends Ce{constructor(e,n){super(e,"in",n),this.keys=c0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $k extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=c0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Wk extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&vo(n.arrayValue,this.value)}}class qk extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class Hk extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class Kk extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
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
 */class Gk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Gk(t,e,n,r,i,s,o)}function ff(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ue=n}return e.ue}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!l0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hg(t.startAt,e.startAt)&&Hg(t.endAt,e.endAt)}function Bh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qk(t,e,n,r,i,s,o,l){return new Xi(t,e,n,r,i,s,o,l)}function hu(t){return new Xi(t)}function Gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h0(t){return t.collectionGroup!==null}function Ws(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Eo(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new Eo(Fe.keyField(),r))}return e.ce}function Yt(t){const e=X(t);return e.le||(e.le=Yk(e,Ws(t))),e.le}function Yk(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Eo(i.field,s)});const n=t.endAt?new xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xl(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zh(t,e){const n=t.filters.concat([e]);return new Xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $h(t,e,n){return new Xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function du(t,e){return pf(Yt(t),Yt(e))&&t.limitType===e.limitType}function d0(t){return`${ff(Yt(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>u0(i)).join(", ")}]`),cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fi(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=qg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,l,u){const h=qg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),i))}(t,e)}function Xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f0(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=Jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jk(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ui(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return n0(this.inner)}size(){return this.innerSize}}/**
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
 */const Zk=new Ee(H.comparator);function Cn(){return Zk}const p0=new Ee(H.comparator);function Ns(...t){let e=p0;for(const n of t)e=e.insert(n.key,n);return e}function m0(t){let e=p0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return qs()}function g0(){return qs()}function qs(){return new Ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const e1=new Ee(H.comparator),t1=new Be(H.comparator);function ee(...t){let e=t1;for(const n of t)e=e.add(n);return e}const n1=new Be(se);function r1(){return n1}/**
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
 */function mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function y0(t){return{integerValue:""+t}}function i1(t,e){return Vk(e)?y0(e):mf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this._=void 0}}function s1(t,e,n){return t instanceof wo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cf(s)&&(s=hf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof To?v0(t,e):t instanceof Io?E0(t,e):function(i,s){const o=_0(i,s),l=Qg(o)+Qg(i.Pe);return Fh(o)&&Fh(i.Pe)?y0(l):mf(i.serializer,l)}(t,e)}function o1(t,e,n){return t instanceof To?v0(t,e):t instanceof Io?E0(t,e):n}function _0(t,e){return t instanceof Dl?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wo extends pu{}class To extends pu{constructor(e){super(),this.elements=e}}function v0(t,e){const n=w0(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends pu{constructor(e){super(),this.elements=e}}function E0(t,e){let n=w0(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class Dl extends pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qg(t){return Se(t.integerValue||t.doubleValue)}function w0(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class a1{constructor(e,n){this.field=e,this.transform=n}}function l1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof To&&i instanceof To||r instanceof Io&&i instanceof Io?bi(r.elements,i.elements,Jt):r instanceof Dl&&i instanceof Dl?Jt(r.Pe,i.Pe):r instanceof wo&&i instanceof wo}(t.transform,e.transform)}class u1{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mu{}function T0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S0(t.key,En.none()):new Fo(t.key,t.data,En.none());{const n=t.data,r=St.empty();let i=new Be(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new Vt(i.toArray()),En.none())}}function c1(t,e,n){t instanceof Fo?function(i,s,o){const l=i.value.clone(),u=Xg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(i,s,o){if(!Qa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(I0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Fo?function(s,o,l,u){if(!Qa(s.precondition,o))return l;const h=s.value.clone(),f=Jg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(s,o,l,u){if(!Qa(s.precondition,o))return l;const h=Jg(s.fieldTransforms,u,o),f=o.data;return f.setAll(I0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Qa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function h1(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_0(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function Yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bi(r,i,(s,o)=>l1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends mu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends mu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function I0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,o1(o,l,n[i]))}return r}function Jg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s1(s,o,e))}return r}class S0 extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d1 extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class f1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=T0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>Yg(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>Yg(n,r))}}class gf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return e1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gf(e,n,r,i)}}/**
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
 */class p1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class m1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,ne;function g1(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function A0(t){if(t===void 0)return Pn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function y1(){return new TextEncoder}/**
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
 */const _1=new Dr([4294967295,4294967295],0);function Zg(t){const e=y1().encode(t),n=new GE;return n.update(e),new Uint8Array(n.digest())}function ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([i,s],0)]}class yf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Dr.fromNumber(r)));return i.compare(_1)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new yf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(Y.min(),i,new Ee(se),Cn(),ee())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,ee(),ee(),ee())}}/**
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
 */class Ya{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class R0{constructor(e,n){this.targetId=e,this.me=n}}class P0{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ty{constructor(){this.fe=0,this.ge=ry(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new jo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class v1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=ny(),this.Qe=new Ee(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Bh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=zr(r).toUint8Array()}catch(u){if(u instanceof r0)return Mi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new yf(o,i,s)}catch(u){return Mi(u instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Bh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gu(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=ny(),this.Qe=new Ee(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ny(){return new Ee(H.comparator)}function ry(){return new Ee(H.comparator)}const E1={asc:"ASCENDING",desc:"DESCENDING"},w1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T1={and:"AND",or:"OR"};class I1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||cu(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S1(t,e){return Ol(t,e.toTimestamp())}function Xt(t){return ae(!!t),Y.fromTimestamp(function(n){const r=cr(n);return new De(r.seconds,r.nanos)}(t))}function _f(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function k0(t){const e=fe.fromString(t);return ae(V0(e)),e}function Hh(t,e){return _f(t.databaseId,e.path)}function Pc(t,e){const n=k0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(x0(n))}function N0(t,e){return _f(t.databaseId,e)}function A1(t){const e=k0(t);return e.length===4?fe.emptyPath():x0(e)}function Kh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function x0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:Hh(t,e),fields:n.value.mapValue.fields}}function R1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:A0(h.code);return new W(f,h.message||"")}(o);n=new P0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pc(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):Y.min(),l=new St({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ya(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pc(t,r.document),s=r.readTime?Xt(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ya([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pc(t,r.document),s=r.removedTargetIds||[];n=new Ya([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new m1(i,s),l=r.targetId;n=new R0(l,o)}}return n}function P1(t,e){let n;if(e instanceof Fo)n={update:iy(t,e.key,e.value)};else if(e instanceof S0)n={delete:Hh(t,e.key)};else if(e instanceof Gr)n={update:iy(t,e.key,e.data),updateMask:M1(e.fieldMask)};else{if(!(e instanceof d1))return G();n={verify:Hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof To)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:S1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function C1(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(Y.min())&&(o=Xt(s)),new u1(o,i.transformResults||[])}(n,e))):[]}function k1(t,e){return{documents:[N0(t,e.path)]}}function N1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N0(t,i);const s=function(h){if(h.length!==0)return O0(jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ri(g.field),direction:O1(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function x1(t){let e=A1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=D0(p);return g instanceof jt&&a0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Eo(ii(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,cu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new xl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new xl(A,g)}(n.endAt)),Qk(e,i,o,s,l,"F",u,h)}function D1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>D0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function O1(t){return E1[t]}function V1(t){return w1[t]}function L1(t){return T1[t]}function ri(t){return{fieldPath:t.canonicalString()}}function ii(t){return Fe.fromServerFormat(t.fieldPath)}function O0(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Wg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if($g(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if($g(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:V1(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(i=>O0(i));return r.length===1?r[0]:{compositeFilter:{op:L1(n.op),filters:r}}}(t):G()}function M1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b1{constructor(e){this.ct=e}}function U1(t){const e=x1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$h(e,e.limit,"L"):e}/**
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
 */class F1{constructor(){this.un=new j1}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ur.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class j1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(fe.comparator)).toArray()}}/**
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
 */class ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ji(0)}static kn(){return new ji(-1)}}/**
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
 */class B1{constructor(){this.changes=new Ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class z1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Hs(r.mutation,i,Vt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=qs(),l=function(){return qs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Gr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Hs(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new z1(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=g0();f.forEach(g=>{if(!s.has(g)){const A=T0(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):h0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Cr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:m0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,g){return new Xi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Ns();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Hs(f.mutation,h,Vt.empty(),De.now()),fu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class W1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:U1(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),M.resolve()}}/**
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
 */class q1{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Cr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Cr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Cr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p1(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class vf{constructor(){this.Tr=new Be(Oe.Er),this.dr=new Be(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class K1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(Oe.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new f1(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(se);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new H(s),0);let l=new Be(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class G1{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nk(kk(f),r)<=0||(i.has(f.key)||fu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Q1(this)}getSize(e){return M.resolve(this.size)}}class Q1 extends B1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Y1{constructor(e){this.persistence=e,this.Nr=new Ji(n=>ff(n),pf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vf,this.targetCount=0,this.kr=ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class X1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new uf(0),this.Kr=!1,this.Kr=!0,this.$r=new H1,this.referenceDelegate=e(this),this.Ur=new Y1(this),this.indexManager=new F1,this.remoteDocumentCache=function(i){return new G1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new b1(n),this.Gr=new W1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new q1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new K1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new J1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class J1 extends Dk{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Jr=new vf,this.Yr=null}static Zr(e){return new Ef(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wf(e,n.fromCache,r,i)}}/**
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
 */class Z1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zA()?8:Ok(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Z1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ts()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ts()<=te.DEBUG&&q("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ts()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):M.resolve())}Yi(e,n){if(Gg(n))return M.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$h(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,$h(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Gg(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Ts()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(n)),this.rs(e,o,n,Ck(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(f0(e));return n.forEach((i,s)=>{fu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ts()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(se),this._s=new Ji(s=>ff(s),pf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nN(t,e,n,r){return new tN(t,e,n,r)}async function L0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function rN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=M.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(N=>{const x=h.docVersions.get(P);ae(x!==null),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function M0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(N,x,w){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Cn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sN(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function sN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function oN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gh(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Uo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function sy(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),g=p._s.get(f);return g!==void 0?M.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(lN(r,Xk(e),l),{documents:l,Ts:s})))}function lN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class oy{constructor(){this.activeTargetIds=r1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uN{constructor(){this.so=new oy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cN{_o(e){}shutdown(){}}/**
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
 */class ay{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function Cc(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
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
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ye="WebChannelConnection";class fN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Cc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Mi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Cc();return new Promise((o,l)=>{const u=new QE;u.setWithCredentials(!0),u.listenOnce(YE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ka.NO_ERROR:const f=u.getResponseJson();q(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ka.TIMEOUT:q(Ye,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const p=u.getStatus();if(q(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const P=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(A.status);l(new W(P,A.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Cc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZE(),l=JE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,A=!1;const P=new dN({Io:x=>{A?q(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(g||(q(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),q(Ye,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),N=(x,w,_)=>{x.listen(w,S=>{try{_(S)}catch(O){setTimeout(()=>{throw O},0)}})};return N(p,ks.EventType.OPEN,()=>{A||(q(Ye,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(p,ks.EventType.CLOSE,()=>{A||(A=!0,q(Ye,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(p,ks.EventType.ERROR,x=>{A||(A=!0,Mi(Ye,`RPC '${e}' stream ${i} transport errored:`,x),P.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,ks.EventType.MESSAGE,x=>{var w;if(!A){const _=x.data[0];ae(!!_);const S=_,O=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(O){q(Ye,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let j=function(v){const T=Re[v];if(T!==void 0)return A0(T)}(U),E=O.message;j===void 0&&(j=L.INTERNAL,E="Unknown error status: "+U+" with message "+O.message),A=!0,P.So(new W(j,E)),p.close()}else q(Ye,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),N(l,XE.STAT_EVENT,x=>{x.stat===bh.PROXY?q(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===bh.NOPROXY&&q(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function kc(){return typeof document<"u"?document:null}/**
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
 */function yu(t){return new I1(t,!0)}/**
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
 */class b0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class U0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new b0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends U0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=R1(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Xt(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bh(u)?{documents:k1(s,u)}:{query:N1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C0(s,o.resumeToken);const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ol(s,o.snapshotVersion.toTimestamp());const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=D1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.a_(n)}}class mN extends U0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=C1(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>P1(this.serializer,r))};this.a_(n)}}/**
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
 */class gN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _N{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await Bo(h),h.q_.set("Unknown"),h.L_.delete(4),await _u(h)}(this))})}),this.q_=new yN(r,i)}}async function _u(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function F0(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Af(n)?Sf(n):Zi(n).r_()&&If(n,e))}function Tf(t,e){const n=X(t),r=Zi(n);n.N_.delete(e),r.r_()&&j0(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function If(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zi(t).A_(e)}function j0(t,e){t.Q_.xe(e),Zi(t).R_(e)}function Sf(t){t.Q_=new v1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zi(t).start(),t.q_.v_()}function Af(t){return Qr(t)&&!Zi(t).n_()&&t.N_.size>0}function Qr(t){return X(t).L_.size===0}function B0(t){t.Q_=void 0}async function vN(t){t.q_.set("Online")}async function EN(t){t.N_.forEach((e,n)=>{If(t,e)})}async function wN(t,e){B0(t),Af(t)?(t.q_.M_(e),Sf(t)):t.q_.set("Unknown")}async function TN(t,e,n){if(t.q_.set("Online"),e instanceof P0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof Ya?t.Q_.Ke(e):e instanceof R0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await M0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),j0(s,u);const p=new Hn(f.target,u,h,f.sequenceNumber);If(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!Uo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>M0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _u(t)})}function z0(t,e){return e().catch(n=>Vl(t,n,e))}async function vu(t){const e=X(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IN(e);)try{const i=await oN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SN(e,i)}catch(i){await Vl(e,i)}$0(e)&&W0(e)}function IN(t){return Qr(t)&&t.O_.length<10}function SN(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $0(t){return Qr(t)&&!hr(t).n_()&&t.O_.length>0}function W0(t){hr(t).start()}async function AN(t){hr(t).p_()}async function RN(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function PN(t,e,n){const r=t.O_.shift(),i=gf.from(r,e,n);await z0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vu(t)}async function CN(t,e){e&&hr(t).V_&&await async function(r,i){if(function(o){return g1(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();hr(r).s_(),await z0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await vu(r)}}(t,e),$0(t)&&W0(t)}async function ly(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _u(n)}async function kN(t,e){const n=X(t);e?(n.L_.delete(2),await _u(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function Zi(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new pN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:vN.bind(null,t),Ro:EN.bind(null,t),mo:wN.bind(null,t),d_:TN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Af(t)?Sf(t):t.q_.set("Unknown")):(await t.K_.stop(),B0(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AN.bind(null,t),mo:CN.bind(null,t),f_:RN.bind(null,t),g_:PN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Rf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Uo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Pi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uy{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,Pi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xN{constructor(){this.queries=cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=cy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function cy(){return new Ji(t=>d0(t),du)}async function q0(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new NN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pf(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Cf(n)}async function H0(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Cf(n)}function ON(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Cf(t){t.Y_.forEach(e=>{e.next()})}var Qh,hy;(hy=Qh||(Qh={})).ea="default",hy.Cache="cache";class K0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qh.Cache}}/**
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
 */class G0{constructor(e){this.key=e}}class Q0{constructor(e){this.key=e}}class VN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=f0(e),this.Ra=new Pi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new uy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=fu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;g&&A?g.data.isEqual(A.data)?P!==N&&(r.track({type:3,doc:A}),x=!0):this.ga(g,A)||(r.track({type:2,doc:A}),x=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),x=!0):g&&!A&&(r.track({type:1,doc:g}),x=!0,(u||h)&&(l=!0)),x&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,P){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(A)-N(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Bi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Q0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new G0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MN{constructor(e){this.key=e,this.va=!1}}class bN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ji(l=>d0(l),du),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new vf,this.Ba={},this.ka=new Map,this.qa=ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UN(t,e,n=!0){const r=tw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Y0(r,e,n,!0),i}async function FN(t,e){const n=tw(t);await Y0(n,e,!0,!1)}async function Y0(t,e,n,r){const i=await aN(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await jN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&F0(t.remoteStore,i),l}async function jN(t,e,n,r,i){t.Ka=(p,g,A)=>async function(N,x,w,_){let S=x.view.ma(w);S.ns&&(S=await sy(N.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,S)));const O=_&&_.targetChanges.get(x.targetId),U=_&&_.targetMismatches.get(x.targetId)!=null,j=x.view.applyChanges(S,N.isPrimaryClient,O,U);return fy(N,x.targetId,j.wa),j.snapshot}(t,p,g,A);const s=await sy(t.localStore,e,!0),o=new VN(e,s.Ts),l=o.ma(s.documents),u=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);fy(t,n,h.wa);const f=new LN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function BN(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!du(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tf(r.remoteStore,i.targetId),Yh(r,i.targetId)}).catch(bo)):(Yh(r,i.targetId),await Gh(r.localStore,i.targetId,!0))}async function zN(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tf(n.remoteStore,r.targetId))}async function $N(t,e,n){const r=YN(t);try{const i=await function(o,l){const u=X(o),h=De.now(),f=l.reduce((A,P)=>A.add(P.key),ee());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Cn(),N=ee();return u.cs.getEntries(A,f).next(x=>{P=x,P.forEach((w,_)=>{_.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(x=>{p=x;const w=[];for(const _ of l){const S=h1(_,p.get(_.key).overlayedDocument);S!=null&&w.push(new Gr(_.key,S,i0(S.value.mapValue),En.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,w,l)}).next(x=>{g=x;const w=x.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(A,x.batchId,w)})}).then(()=>({batchId:g.batchId,changes:m0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await zo(r,i.changes),await vu(r.remoteStore)}catch(i){const s=Pf(i,"Failed to persist write");n.reject(s)}}async function X0(t,e){const n=X(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await bo(r)}}function dy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Cf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new gu(Y.min(),new Map,new Ee(se),o,l);await X0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),kf(r)}else await Gh(r.localStore,e,!1).then(()=>Yh(r,e,n)).catch(bo)}async function qN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await rN(n.localStore,e);Z0(n,r,null),J0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await bo(i)}}async function HN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Z0(r,e,n),J0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await bo(i)}}function J0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Z0(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ew(t,r)})}function ew(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),kf(t))}function fy(t,e,n){for(const r of n)r instanceof G0?(t.La.addReference(r.key,e),KN(t,r)):r instanceof Q0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ew(t,r.key)):G()}function KN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),kf(t))}function kf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new MN(n)),t.Oa=t.Oa.insert(n,r),F0(t.remoteStore,new Hn(Yt(hu(n.path)),r,"TargetPurposeLimboResolution",uf.oe))}}async function zo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=wf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.$i,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>M.forEach(g.Ui,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Uo(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.os.get(g),P=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function GN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await L0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function QN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function tw(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=X0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WN.bind(null,e),e.Ca.d_=DN.bind(null,e.eventManager),e.Ca.$a=ON.bind(null,e.eventManager),e}function YN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HN.bind(null,e),e}class Ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nN(this.persistence,new eN,e.initialUser,this.serializer)}Ga(e){return new X1(Ef.Zr,this.serializer)}Wa(e){return new uN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ll.provider={build:()=>new Ll};class Xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xN}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(s){return new fN(s)}(e.databaseInfo);return function(s,o,l,u){return new gN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _N(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return ay.D()?new ay:new cN}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new bN(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xh.provider={build:()=>new Xh};/**
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
 *//**
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
 */class nw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=t0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await L0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JN(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ly(e.remoteStore,i)),t._onlineComponents=e}async function JN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new Ll)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Nc(t,new Ll);return t._offlineComponents}async function rw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await py(t,new Xh))),t._onlineComponents}function ZN(t){return rw(t).then(e=>e.syncEngine)}async function Jh(t){const e=await rw(t),n=e.eventManager;return n.onListen=UN.bind(null,e.syncEngine),n.onUnlisten=BN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zN.bind(null,e.syncEngine),n}function ex(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new nw({next:g=>{f.Za(),o.enqueueAndForget(()=>H0(s,p));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new K0(hu(l.path),f,{includeMetadataChanges:!0,_a:!0});return q0(s,p)}(await Jh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const my=new Map;/**
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
 */function sw(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tx(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!H.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(H.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _y({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _y(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vk;switch(r.type){case"firstParty":return new Ik(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(q("ComponentProvider","Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function nx(t,e,n,r={}){var i;const s=(t=Or(t,wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=uE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new Ek(new e0(l,u))}}/**
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
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class sr extends Yr{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new H(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function ow(t,e,...n){if(t=$e(t),sw("collection","path",e),t instanceof wu){const r=fe.fromString(e,...n);return yy(r),new sr(t,null,r)}{if(!(t instanceof ft||t instanceof sr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return yy(r),new sr(t.firestore,null,r)}}function aw(t,e,...n){if(t=$e(t),arguments.length===1&&(e=t0.newId()),sw("doc","path",e),t instanceof wu){const r=fe.fromString(e,...n);return gy(r),new ft(t,null,new H(r))}{if(!(t instanceof ft||t instanceof sr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return gy(r),new ft(t.firestore,t instanceof sr?t.converter:null,new H(r))}}/**
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
 */class vy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new b0(this,"async_queue_retry"),this.Vu=()=>{const r=kc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Uo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Rf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ey(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class So extends wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vy(e),this._firestoreClient=void 0,await e}}}function rx(t,e){const n=typeof t=="object"?t:Xd(),r=typeof t=="string"?t:"(default)",i=su(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oE("firestore");s&&nx(i,...s)}return i}function Nf(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ix(t),t._firestoreClient}function ix(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Mk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,iw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new XN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(We.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zi(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
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
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const sx=/^__.*__$/;class ox{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function lw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ml(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(lw(this.Cu)&&sx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ax{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}Qu(e,n,r,i=!1){return new Lf({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uw(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new ax(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);dw("Data must be an object, but it was:",o,r);const l=cw(r,o);let u,h;if(s.merge)u=new Vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=cx(e,p,n);if(!o.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dx(f,g)||f.push(g)}u=new Vt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new ox(new St(l),u,h)}class Mf extends Df{_toFieldTransform(e){return new a1(e.path,new wo)}isEqual(e){return e instanceof Mf}}function ux(t,e,n,r=!1){return bf(n,t.Qu(r?4:3,e))}function bf(t,e){if(hw(t=$e(t)))return dw("Unsupported field value:",e,t),cw(t,e);if(t instanceof Df)return function(r,i){if(!lw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=bf(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Ol(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(i.serializer,s)}}if(r instanceof Of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zi)return{bytesValue:C0(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return mf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Eu(r)}`)}(t,e)}function cw(t,e){const n={};return n0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=bf(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Of||t instanceof zi||t instanceof ft||t instanceof Df||t instanceof Vf)}function dw(t,e,n){if(!hw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Eu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cx(t,e,n){if((e=$e(e))instanceof xf)return e._internalPath;if(typeof e=="string")return fw(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const hx=new RegExp("[~\\*/\\[\\]]");function fw(t,e,n){if(e.search(hx)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xf(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function dx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fx extends pw{data(){return super.data()}}function Tu(t,e){return typeof e=="string"?fw(t,e):e instanceof xf?e._internalPath:e._delegate._internalPath}/**
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
 */function px(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class mw extends Uf{}function mx(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ff).length,l=s.filter(u=>u instanceof Iu).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Iu extends mw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Iu(e,n,r)}_apply(e){const n=this._parse(e);return gw(e._query,n),new Yr(e.firestore,e.converter,zh(e._query,n))}_parse(e){const n=uw(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ty(p,f);const A=[];for(const P of p)A.push(wy(u,s,P));g={arrayValue:{values:A}}}else g=wy(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ty(p,f),g=ux(l,o,p,f==="in"||f==="not-in");return Ce.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gx(t,e,n){const r=e,i=Tu("where",t);return Iu._create(i,r,n)}class Ff extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ff(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gw(o,u),o=zh(o,u)}(e._query,n),new Yr(e.firestore,e.converter,zh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jf extends mw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eo(s,o)}(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Xi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function yx(t,e="asc"){const n=e,r=Tu("orderBy",t);return jf._create(r,n)}function wy(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h0(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zg(t,new H(r))}if(n instanceof ft)return zg(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eu(n)}.`)}function Ty(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _x{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new Vf(s)}convertGeoPoint(e){return new Of(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const n=cr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(V0(r));const i=new _o(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function vx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yw extends pw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xa extends yw{data(e={}){return super.data(e)}}class Ex{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xa(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Xa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Xa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:wx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function Tx(t){t=Or(t,ft);const e=Or(t.firestore,So);return ex(Nf(e),t._key).then(n=>vw(e,t,n))}class _w extends _x{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function Ix(t,e){const n=Or(t.firestore,So),r=aw(t),i=vx(t.converter,e);return Ax(n,[lx(uw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function Sx(t,...e){var n,r,i;t=$e(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ey(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ey(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof ft)h=Or(t.firestore,So),f=hu(t._key.path),u={next:p=>{e[o]&&e[o](vw(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Or(t,Yr);h=Or(p.firestore,So),f=p._query;const g=new _w(h);u={next:A=>{e[o]&&e[o](new Ex(h,g,p,A))},error:e[o+1],complete:e[o+2]},px(t._query)}return function(g,A,P,N){const x=new nw(N),w=new K0(A,x,P);return g.asyncQueue.enqueueAndForget(async()=>q0(await Jh(g),w)),()=>{x.Za(),g.asyncQueue.enqueueAndForget(async()=>H0(await Jh(g),w))}}(Nf(h),f,l,u)}function Ax(t,e){return function(r,i){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>$N(await ZN(r),i,s)),s.promise}(Nf(t),e)}function vw(t,e,n){const r=n.docs.get(e._key),i=new _w(t);return new yw(t,i,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}function Rx(){return new Mf("serverTimestamp")}(function(e,n=!0){(function(i){Qi=i})(Hr),Fr(new lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new So(new wk(r.getProvider("auth-internal")),new Ak(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kt(bg,"4.7.3",e),Kt(bg,"4.7.3","esm2017")})();/**
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
 */const Ew="firebasestorage.googleapis.com",Px="storageBucket",Cx=2*60*1e3,kx=10*60*1e3;/**
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
 */class tn extends en{constructor(e,n,r=0){super(xc(e),`Firebase Storage: ${n} (${xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Zt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Zt||(Zt={}));function xc(t){return"storage/"+t}function Nx(){const t="An unknown error occurred, please check the error payload for server response.";return new tn(Zt.UNKNOWN,t)}function xx(){return new tn(Zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Dx(){return new tn(Zt.CANCELED,"User canceled the upload/download.")}function Ox(t){return new tn(Zt.INVALID_URL,"Invalid URL '"+t+"'.")}function Vx(t){return new tn(Zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Iy(t){return new tn(Zt.INVALID_ARGUMENT,t)}function ww(){return new tn(Zt.APP_DELETED,"The Firebase app was deleted.")}function Lx(t){return new tn(Zt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw Vx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},N=n===Ew?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",w=new RegExp(`^https?://${N}/${i}/${x}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:A,indices:P,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<S.length;O++){const U=S[O],j=U.regex.exec(e);if(j){const E=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new Lt(E,y),U.postModify(r);break}}if(r==null)throw Ox(e);return r}}class Mx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bx(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,t(A,u())},x)}function g(){s&&clearTimeout(s)}function A(x,...w){if(h){g();return}if(x){g(),f.call(null,x,...w);return}if(u()||o){g(),f.call(null,x,...w);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let P=!1;function N(x){P||(P=!0,g(),!h&&(i!==null?(x||(l=2),clearTimeout(i),p(0)):x||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function Ux(t){t(!1)}/**
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
 */function Fx(t){return t!==void 0}function Sy(t,e,n,r){if(r<e)throw Iy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Iy(`Invalid value for '${t}'. Expected ${n} or less.`)}function jx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var bl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bl||(bl={}));/**
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
 */function Bx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class zx{constructor(e,n,r,i,s,o,l,u,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Na(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===bl.NO_ERROR,u=s.getStatus();if(!l||Bx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===bl.ABORT;r(!1,new Na(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Na(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Fx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Nx();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ww():Dx();o(u)}else{const u=xx();o(u)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=bx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ux(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $x(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Hx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Kx(t,e,n,r,i,s,o=!0){const l=jx(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return qx(h,e),$x(h,n),Wx(h,s),Hx(h,r),new zx(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Gx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ul{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ul(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qx(this._location.path)}get storage(){return this._service}get parent(){const e=Gx(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new Ul(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Lx(e)}}function Ay(t,e){const n=e==null?void 0:e[Px];return n==null?null:Lt.makeFromBucketSpec(n,t)}function Yx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:uE(i,t.app.options.projectId))}class Xx{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ew,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cx,this._maxUploadRetryTime=kx,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=Ay(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=Ay(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ul(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Mx(ww());{const o=Kx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ry="@firebase/storage",Py="0.13.2";/**
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
 */const Tw="storage";function Jx(t=Xd(),e){t=$e(t);const r=su(t,Tw).getImmediate({identifier:e}),i=oE("storage");return i&&Zx(r,...i),r}function Zx(t,e,n,r={}){Yx(t,e,n,r)}function e2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xx(n,r,i,e,Hr)}function t2(){Fr(new lr(Tw,e2,"PUBLIC").setMultipleInstances(!0)),Kt(Ry,Py,""),Kt(Ry,Py,"esm2017")}t2();const n2={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},Bf=dE(n2),Dc=yk(Bf),zf=rx(Bf);Jx(Bf);const Iw=F.createContext();function $o(){return F.useContext(Iw)}function r2({children:t}){const[e,n]=F.useState(null),[r,i]=F.useState(null),[s,o]=F.useState(!0);async function l(f,p){return nC(Dc,f,p)}function u(){return oC(Dc)}F.useEffect(()=>sC(Dc,async p=>{if(p){try{const g=await Tx(aw(zf,"users",p.uid));g.exists()?i(g.data()):(console.warn("User document not found in Firestore"),i(null))}catch(g){console.error("Error fetching user data:",g)}n(p)}else n(null),i(null);o(!1)}),[]);const h={currentUser:e,userData:r,userRole:r==null?void 0:r.role,login:l,logout:u};return V.jsx(Iw.Provider,{value:h,children:!s&&t})}/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sw=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>F.createElement("svg",{ref:u,...s2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Sw("lucide",i),...l},[...o.map(([h,f])=>F.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(t,e)=>{const n=F.forwardRef(({className:r,...i},s)=>F.createElement(o2,{ref:s,iconNode:e,className:Sw(`lucide-${i2(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Bt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=Bt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Bt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Bt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Bt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Bt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=Bt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=Bt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Bt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=Bt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=Bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function m2(){const{userData:t,logout:e}=$o(),n=ru(),r=nu(),[i,s]=F.useState(!1),o=async()=>{try{await e(),n("/login")}catch(h){console.error("Failed to log out",h)}},u=(h=>{const f=[{label:"Dashboard",path:"/dashboard",icon:u2}];switch(h){case"student":return[...f,{label:"Request Outpass",path:"/student/request",icon:Cy},{label:"My History",path:"/student/history",icon:ky}];case"teacher":case"hod":case"warden":return[...f,{label:"Pending Approvals",path:"/staff/approvals",icon:ky},{label:"Student History",path:"/staff/students",icon:f2}];case"security":return[...f,{label:"Scan QR",path:"/security/scan",icon:d2},{label:"Logs",path:"/security/logs",icon:Cy}];default:return f}})(t==null?void 0:t.role);return V.jsxs("div",{className:"flex h-screen bg-gray-100",children:[i&&V.jsx("div",{className:"fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden",onClick:()=>s(!1)}),V.jsxs("aside",{className:`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${i?"translate-x-0":"-translate-x-full"}`,children:[V.jsxs("div",{className:"flex items-center justify-between h-16 px-6 bg-blue-600 text-white",children:[V.jsx("span",{className:"text-xl font-bold",children:"Smart Outpass"}),V.jsx("button",{onClick:()=>s(!1),className:"lg:hidden focus:outline-none",children:V.jsx(p2,{size:24})})]}),V.jsxs("div",{className:"px-6 py-4 border-b border-gray-100",children:[V.jsx("p",{className:"text-sm text-gray-500",children:"Welcome,"}),V.jsx("p",{className:"font-semibold text-gray-800 truncate",children:(t==null?void 0:t.name)||"User"}),V.jsx("p",{className:"text-xs text-blue-600 uppercase font-bold mt-1",children:(t==null?void 0:t.role)||"Guest"})]}),V.jsxs("nav",{className:"p-4 space-y-2",children:[u.map(h=>V.jsxs("button",{onClick:()=>{n(h.path),s(!1)},className:`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${r.pathname===h.path?"bg-blue-50 text-blue-700":"text-gray-700 hover:bg-gray-100"}`,children:[V.jsx(h.icon,{size:20,className:"mr-3"}),V.jsx("span",{className:"font-medium",children:h.label})]},h.path)),V.jsx("div",{className:"pt-8 mt-8 border-t border-gray-200",children:V.jsxs("button",{onClick:o,className:"flex items-center w-full px-4 py-3 text-left text-red-600 rounded-lg hover:bg-red-50 transition-colors",children:[V.jsx(c2,{size:20,className:"mr-3"}),V.jsx("span",{className:"font-medium",children:"Logout"})]})})]})]}),V.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[V.jsxs("header",{className:"flex items-center justify-between h-16 px-6 bg-white shadow-sm lg:hidden",children:[V.jsx("button",{onClick:()=>s(!0),className:"text-gray-700 focus:outline-none",children:V.jsx(h2,{size:24})}),V.jsx("span",{className:"text-lg font-semibold text-gray-800",children:"CIT Outpass"}),V.jsx("div",{className:"w-6"})," "]}),V.jsx("main",{className:"flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6",children:V.jsx(tE,{})})]})]})}function g2(){const[t,e]=F.useState(""),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(!1),{login:u}=$o(),h=ru();async function f(p){p.preventDefault();try{s(""),l(!0),await u(t,n),h("/dashboard")}catch(g){s("Failed to log in: "+g.message)}l(!1)}return V.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:V.jsxs("div",{className:"w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md",children:[V.jsxs("div",{className:"text-center",children:[V.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Smart Outpass"}),V.jsx("p",{className:"mt-2 text-gray-600",children:"Sign in to your account"})]}),i&&V.jsx("div",{className:"p-3 text-sm text-red-600 bg-red-100 rounded-lg",children:i}),V.jsxs("form",{onSubmit:f,className:"space-y-4",children:[V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email Address"}),V.jsx("input",{type:"email",required:!0,className:"w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",value:t,onChange:p=>e(p.target.value),placeholder:"you@citchennai.edu.in"})]}),V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),V.jsx("input",{type:"password",required:!0,className:"w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",value:n,onChange:p=>r(p.target.value),placeholder:"••••••••"})]}),V.jsx("button",{type:"submit",disabled:o,className:"w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors",children:o?"Signing In...":"Sign In"})]})]})})}function y2(){const{currentUser:t,userData:e}=$o(),n=ru(),[r,i]=F.useState(!1),[s,o]=F.useState({reason:"",fromTime:"",toTime:"",description:""}),l=async h=>{h.preventDefault(),i(!0);try{const f={studentId:t.uid,studentName:(e==null?void 0:e.name)||"Student",department:(e==null?void 0:e.department)||"Unknown",...s,status:"pending-teacher",teacherStatus:"pending",hodStatus:"pending",wardenStatus:"pending",qrCode:null,createdAt:Rx(),riskScore:0};await Ix(ow(zf,"outpasses"),f),n("/student/history")}catch(f){console.error("Error creating request:",f),alert("Failed to submit request: "+f.message)}finally{i(!1)}},u=h=>{o({...s,[h.target.name]:h.target.value})};return V.jsxs("div",{className:"max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6",children:[V.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Request Outpass"}),V.jsxs("form",{onSubmit:l,className:"space-y-4",children:[V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Reason Category"}),V.jsxs("select",{name:"reason",required:!0,className:"w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500",value:s.reason,onChange:u,children:[V.jsx("option",{value:"",children:"Select Reason"}),V.jsx("option",{value:"Medical",children:"Medical"}),V.jsx("option",{value:"Home Visit",children:"Home Visit"}),V.jsx("option",{value:"Academic",children:"Academic/Event"}),V.jsx("option",{value:"Personal",children:"Personal/Shopping"})]})]}),V.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"From Date & Time"}),V.jsx("input",{type:"datetime-local",name:"fromTime",required:!0,className:"w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500",value:s.fromTime,onChange:u})]}),V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"To Date & Time"}),V.jsx("input",{type:"datetime-local",name:"toTime",required:!0,className:"w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500",value:s.toTime,onChange:u})]})]}),V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Description / Details"}),V.jsx("textarea",{name:"description",rows:"3",className:"w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500",value:s.description,onChange:u,placeholder:"Provide more details about your request..."})]}),V.jsx("div",{className:"flex justify-end pt-4",children:V.jsx("button",{type:"submit",disabled:r,className:"px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium",children:r?"Submitting...":"Submit Request"})})]})]})}function _2(){const{currentUser:t}=$o(),[e,n]=F.useState([]),[r,i]=F.useState(!0);F.useEffect(()=>{if(!t)return;const o=mx(ow(zf,"outpasses"),gx("studentId","==",t.uid),yx("createdAt","desc")),l=Sx(o,u=>{const h=u.docs.map(f=>({id:f.id,...f.data()}));n(h),i(!1)},u=>{console.error("Error fetching history:",u),i(!1)});return()=>l()},[t]);const s=o=>{switch(o){case"approved":return V.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[V.jsx(a2,{size:12,className:"mr-1"})," Approved"]});case"rejected":return V.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",children:[V.jsx(l2,{size:12,className:"mr-1"})," Rejected"]});case"pending-teacher":return V.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",children:[V.jsx(Oc,{size:12,className:"mr-1"})," Pending Teacher"]});case"pending-hod":return V.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:[V.jsx(Oc,{size:12,className:"mr-1"})," Pending HOD"]});case"pending-warden":return V.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800",children:[V.jsx(Oc,{size:12,className:"mr-1"})," Pending Warden"]});default:return V.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800",children:o})}};return r?V.jsx("div",{className:"p-4 text-center",children:"Loading history..."}):V.jsxs("div",{className:"space-y-6",children:[V.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"My Requests History"}),e.length===0?V.jsx("div",{className:"text-center py-10 bg-white rounded-lg shadow",children:V.jsx("p",{className:"text-gray-500",children:"No outpass requests found."})}):V.jsx("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:V.jsx("ul",{className:"divide-y divide-gray-200",children:e.map(o=>V.jsx("li",{className:"p-4 hover:bg-gray-50 transition-colors",children:V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{className:"flex-1 min-w-0",children:[V.jsx("p",{className:"text-sm font-medium text-blue-600 truncate",children:o.reason}),V.jsxs("p",{className:"text-sm text-gray-500",children:[new Date(o.fromTime).toLocaleString()," — ",new Date(o.toTime).toLocaleString()]}),V.jsx("div",{className:"mt-1",children:s(o.status||o.finalStatus)})]}),V.jsx("div",{children:o.status==="approved"&&o.qrCode&&V.jsx("button",{className:"text-sm text-blue-500 underline",children:"View QR"})})]})},o.id))})})]})}const v2=({allowedRoles:t})=>{const{currentUser:e,userRole:n,loading:r}=$o();return r?V.jsx("div",{className:"flex items-center justify-center h-screen",children:"Loading..."}):e?t&&!t.includes(n)?V.jsxs("div",{className:"p-8 text-center text-red-600",children:["Unauthorized Access (",n,")"]}):V.jsx(tE,{}):V.jsx(Ph,{to:"/login",replace:!0})};function E2(){return V.jsx(PA,{children:V.jsx(r2,{children:V.jsxs(SA,{children:[V.jsx(cn,{path:"/login",element:V.jsx(g2,{})}),V.jsx(cn,{element:V.jsx(v2,{}),children:V.jsxs(cn,{element:V.jsx(m2,{}),children:[V.jsx(cn,{path:"/dashboard",element:V.jsx("div",{className:"p-6",children:V.jsx("h2",{children:"Welcome to Smart Outpass Dashboard"})})}),V.jsx(cn,{path:"/student/request",element:V.jsx(y2,{})}),V.jsx(cn,{path:"/student/history",element:V.jsx(_2,{})}),V.jsx(cn,{path:"/",element:V.jsx(Ph,{to:"/dashboard",replace:!0})})]})}),V.jsx(cn,{path:"*",element:V.jsx(Ph,{to:"/login",replace:!0})})]})})})}zv(document.getElementById("root")).render(V.jsx(F.StrictMode,{children:V.jsx(E2,{})}));
