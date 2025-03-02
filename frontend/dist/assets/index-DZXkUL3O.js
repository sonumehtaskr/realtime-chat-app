function _mergeNamespaces(tt,nt){for(var ot=0;ot<nt.length;ot++){const st=nt[ot];if(typeof st!="string"&&!Array.isArray(st)){for(const ft in st)if(ft!=="default"&&!(ft in tt)){const ht=Object.getOwnPropertyDescriptor(st,ft);ht&&Object.defineProperty(tt,ft,ht.get?ht:{enumerable:!0,get:()=>st[ft]})}}}return Object.freeze(Object.defineProperty(tt,Symbol.toStringTag,{value:"Module"}))}(function(){const nt=document.createElement("link").relList;if(nt&&nt.supports&&nt.supports("modulepreload"))return;for(const ft of document.querySelectorAll('link[rel="modulepreload"]'))st(ft);new MutationObserver(ft=>{for(const ht of ft)if(ht.type==="childList")for(const gt of ht.addedNodes)gt.tagName==="LINK"&&gt.rel==="modulepreload"&&st(gt)}).observe(document,{childList:!0,subtree:!0});function ot(ft){const ht={};return ft.integrity&&(ht.integrity=ft.integrity),ft.referrerPolicy&&(ht.referrerPolicy=ft.referrerPolicy),ft.crossOrigin==="use-credentials"?ht.credentials="include":ft.crossOrigin==="anonymous"?ht.credentials="omit":ht.credentials="same-origin",ht}function st(ft){if(ft.ep)return;ft.ep=!0;const ht=ot(ft);fetch(ft.href,ht)}})();function getDefaultExportFromCjs(tt){return tt&&tt.__esModule&&Object.prototype.hasOwnProperty.call(tt,"default")?tt.default:tt}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$2=Symbol.for("react.element"),n$3=Symbol.for("react.portal"),p$3=Symbol.for("react.fragment"),q$2=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u$2=Symbol.for("react.context"),v$3=Symbol.for("react.forward_ref"),w$2=Symbol.for("react.suspense"),x$1=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$2=Symbol.iterator;function A$3(tt){return tt===null||typeof tt!="object"?null:(tt=z$2&&tt[z$2]||tt["@@iterator"],typeof tt=="function"?tt:null)}var B$2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$2=Object.assign,D$3={};function E$1(tt,nt,ot){this.props=tt,this.context=nt,this.refs=D$3,this.updater=ot||B$2}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(tt,nt){if(typeof tt!="object"&&typeof tt!="function"&&tt!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,tt,nt,"setState")};E$1.prototype.forceUpdate=function(tt){this.updater.enqueueForceUpdate(this,tt,"forceUpdate")};function F$2(){}F$2.prototype=E$1.prototype;function G$3(tt,nt,ot){this.props=tt,this.context=nt,this.refs=D$3,this.updater=ot||B$2}var H$2=G$3.prototype=new F$2;H$2.constructor=G$3;C$2(H$2,E$1.prototype);H$2.isPureReactComponent=!0;var I$3=Array.isArray,J$2=Object.prototype.hasOwnProperty,K$2={current:null},L$2={key:!0,ref:!0,__self:!0,__source:!0};function M$3(tt,nt,ot){var st,ft={},ht=null,gt=null;if(nt!=null)for(st in nt.ref!==void 0&&(gt=nt.ref),nt.key!==void 0&&(ht=""+nt.key),nt)J$2.call(nt,st)&&!L$2.hasOwnProperty(st)&&(ft[st]=nt[st]);var yt=arguments.length-2;if(yt===1)ft.children=ot;else if(1<yt){for(var vt=Array(yt),xt=0;xt<yt;xt++)vt[xt]=arguments[xt+2];ft.children=vt}if(tt&&tt.defaultProps)for(st in yt=tt.defaultProps,yt)ft[st]===void 0&&(ft[st]=yt[st]);return{$$typeof:l$2,type:tt,key:ht,ref:gt,props:ft,_owner:K$2.current}}function N$1(tt,nt){return{$$typeof:l$2,type:tt.type,key:nt,ref:tt.ref,props:tt.props,_owner:tt._owner}}function O$3(tt){return typeof tt=="object"&&tt!==null&&tt.$$typeof===l$2}function escape(tt){var nt={"=":"=0",":":"=2"};return"$"+tt.replace(/[=:]/g,function(ot){return nt[ot]})}var P$2=/\/+/g;function Q$3(tt,nt){return typeof tt=="object"&&tt!==null&&tt.key!=null?escape(""+tt.key):nt.toString(36)}function R$2(tt,nt,ot,st,ft){var ht=typeof tt;(ht==="undefined"||ht==="boolean")&&(tt=null);var gt=!1;if(tt===null)gt=!0;else switch(ht){case"string":case"number":gt=!0;break;case"object":switch(tt.$$typeof){case l$2:case n$3:gt=!0}}if(gt)return gt=tt,ft=ft(gt),tt=st===""?"."+Q$3(gt,0):st,I$3(ft)?(ot="",tt!=null&&(ot=tt.replace(P$2,"$&/")+"/"),R$2(ft,nt,ot,"",function(xt){return xt})):ft!=null&&(O$3(ft)&&(ft=N$1(ft,ot+(!ft.key||gt&&gt.key===ft.key?"":(""+ft.key).replace(P$2,"$&/")+"/")+tt)),nt.push(ft)),1;if(gt=0,st=st===""?".":st+":",I$3(tt))for(var yt=0;yt<tt.length;yt++){ht=tt[yt];var vt=st+Q$3(ht,yt);gt+=R$2(ht,nt,ot,vt,ft)}else if(vt=A$3(tt),typeof vt=="function")for(tt=vt.call(tt),yt=0;!(ht=tt.next()).done;)ht=ht.value,vt=st+Q$3(ht,yt++),gt+=R$2(ht,nt,ot,vt,ft);else if(ht==="object")throw nt=String(tt),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(tt).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.");return gt}function S$3(tt,nt,ot){if(tt==null)return tt;var st=[],ft=0;return R$2(tt,st,"","",function(ht){return nt.call(ot,ht,ft++)}),st}function T$3(tt){if(tt._status===-1){var nt=tt._result;nt=nt(),nt.then(function(ot){(tt._status===0||tt._status===-1)&&(tt._status=1,tt._result=ot)},function(ot){(tt._status===0||tt._status===-1)&&(tt._status=2,tt._result=ot)}),tt._status===-1&&(tt._status=0,tt._result=nt)}if(tt._status===1)return tt._result.default;throw tt._result}var U$3={current:null},V$3={transition:null},W$3={ReactCurrentDispatcher:U$3,ReactCurrentBatchConfig:V$3,ReactCurrentOwner:K$2};function X$4(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$3,forEach:function(tt,nt,ot){S$3(tt,function(){nt.apply(this,arguments)},ot)},count:function(tt){var nt=0;return S$3(tt,function(){nt++}),nt},toArray:function(tt){return S$3(tt,function(nt){return nt})||[]},only:function(tt){if(!O$3(tt))throw Error("React.Children.only expected to receive a single React element child.");return tt}};react_production_min.Component=E$1;react_production_min.Fragment=p$3;react_production_min.Profiler=r;react_production_min.PureComponent=G$3;react_production_min.StrictMode=q$2;react_production_min.Suspense=w$2;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$3;react_production_min.act=X$4;react_production_min.cloneElement=function(tt,nt,ot){if(tt==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+tt+".");var st=C$2({},tt.props),ft=tt.key,ht=tt.ref,gt=tt._owner;if(nt!=null){if(nt.ref!==void 0&&(ht=nt.ref,gt=K$2.current),nt.key!==void 0&&(ft=""+nt.key),tt.type&&tt.type.defaultProps)var yt=tt.type.defaultProps;for(vt in nt)J$2.call(nt,vt)&&!L$2.hasOwnProperty(vt)&&(st[vt]=nt[vt]===void 0&&yt!==void 0?yt[vt]:nt[vt])}var vt=arguments.length-2;if(vt===1)st.children=ot;else if(1<vt){yt=Array(vt);for(var xt=0;xt<vt;xt++)yt[xt]=arguments[xt+2];st.children=yt}return{$$typeof:l$2,type:tt.type,key:ft,ref:ht,props:st,_owner:gt}};react_production_min.createContext=function(tt){return tt={$$typeof:u$2,_currentValue:tt,_currentValue2:tt,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},tt.Provider={$$typeof:t$1,_context:tt},tt.Consumer=tt};react_production_min.createElement=M$3;react_production_min.createFactory=function(tt){var nt=M$3.bind(null,tt);return nt.type=tt,nt};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(tt){return{$$typeof:v$3,render:tt}};react_production_min.isValidElement=O$3;react_production_min.lazy=function(tt){return{$$typeof:y$1,_payload:{_status:-1,_result:tt},_init:T$3}};react_production_min.memo=function(tt,nt){return{$$typeof:x$1,type:tt,compare:nt===void 0?null:nt}};react_production_min.startTransition=function(tt){var nt=V$3.transition;V$3.transition={};try{tt()}finally{V$3.transition=nt}};react_production_min.unstable_act=X$4;react_production_min.useCallback=function(tt,nt){return U$3.current.useCallback(tt,nt)};react_production_min.useContext=function(tt){return U$3.current.useContext(tt)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(tt){return U$3.current.useDeferredValue(tt)};react_production_min.useEffect=function(tt,nt){return U$3.current.useEffect(tt,nt)};react_production_min.useId=function(){return U$3.current.useId()};react_production_min.useImperativeHandle=function(tt,nt,ot){return U$3.current.useImperativeHandle(tt,nt,ot)};react_production_min.useInsertionEffect=function(tt,nt){return U$3.current.useInsertionEffect(tt,nt)};react_production_min.useLayoutEffect=function(tt,nt){return U$3.current.useLayoutEffect(tt,nt)};react_production_min.useMemo=function(tt,nt){return U$3.current.useMemo(tt,nt)};react_production_min.useReducer=function(tt,nt,ot){return U$3.current.useReducer(tt,nt,ot)};react_production_min.useRef=function(tt){return U$3.current.useRef(tt)};react_production_min.useState=function(tt){return U$3.current.useState(tt)};react_production_min.useSyncExternalStore=function(tt,nt,ot){return U$3.current.useSyncExternalStore(tt,nt,ot)};react_production_min.useTransition=function(){return U$3.current.useTransition()};react_production_min.version="18.3.1";react.exports=react_production_min;var reactExports=react.exports;const o$1=getDefaultExportFromCjs(reactExports),React=_mergeNamespaces({__proto__:null,default:o$1},[reactExports]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f$2=reactExports,k$1=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$3=Object.prototype.hasOwnProperty,n$2=f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$2={key:!0,ref:!0,__self:!0,__source:!0};function q$1(tt,nt,ot){var st,ft={},ht=null,gt=null;ot!==void 0&&(ht=""+ot),nt.key!==void 0&&(ht=""+nt.key),nt.ref!==void 0&&(gt=nt.ref);for(st in nt)m$3.call(nt,st)&&!p$2.hasOwnProperty(st)&&(ft[st]=nt[st]);if(tt&&tt.defaultProps)for(st in nt=tt.defaultProps,nt)ft[st]===void 0&&(ft[st]=nt[st]);return{$$typeof:k$1,type:tt,key:ht,ref:gt,props:ft,_owner:n$2.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q$1;reactJsxRuntime_production_min.jsxs=q$1;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(tt){function nt(Lt,Dt){var Mt=Lt.length;Lt.push(Dt);e:for(;0<Mt;){var Bt=Mt-1>>>1,zt=Lt[Bt];if(0<ft(zt,Dt))Lt[Bt]=Dt,Lt[Mt]=zt,Mt=Bt;else break e}}function ot(Lt){return Lt.length===0?null:Lt[0]}function st(Lt){if(Lt.length===0)return null;var Dt=Lt[0],Mt=Lt.pop();if(Mt!==Dt){Lt[0]=Mt;e:for(var Bt=0,zt=Lt.length,Jt=zt>>>1;Bt<Jt;){var Ht=2*(Bt+1)-1,Yt=Lt[Ht],Wt=Ht+1,Kt=Lt[Wt];if(0>ft(Yt,Mt))Wt<zt&&0>ft(Kt,Yt)?(Lt[Bt]=Kt,Lt[Wt]=Mt,Bt=Wt):(Lt[Bt]=Yt,Lt[Ht]=Mt,Bt=Ht);else if(Wt<zt&&0>ft(Kt,Mt))Lt[Bt]=Kt,Lt[Wt]=Mt,Bt=Wt;else break e}}return Dt}function ft(Lt,Dt){var Mt=Lt.sortIndex-Dt.sortIndex;return Mt!==0?Mt:Lt.id-Dt.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ht=performance;tt.unstable_now=function(){return ht.now()}}else{var gt=Date,yt=gt.now();tt.unstable_now=function(){return gt.now()-yt}}var vt=[],xt=[],Et=1,wt=null,kt=3,Ct=!1,bt=!1,jt=!1,Pt=typeof setTimeout=="function"?setTimeout:null,St=typeof clearTimeout=="function"?clearTimeout:null,$t=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Rt(Lt){for(var Dt=ot(xt);Dt!==null;){if(Dt.callback===null)st(xt);else if(Dt.startTime<=Lt)st(xt),Dt.sortIndex=Dt.expirationTime,nt(vt,Dt);else break;Dt=ot(xt)}}function Tt(Lt){if(jt=!1,Rt(Lt),!bt)if(ot(vt)!==null)bt=!0,en(Nt);else{var Dt=ot(xt);Dt!==null&&Gt(Tt,Dt.startTime-Lt)}}function Nt(Lt,Dt){bt=!1,jt&&(jt=!1,St(It),It=-1),Ct=!0;var Mt=kt;try{for(Rt(Dt),wt=ot(vt);wt!==null&&(!(wt.expirationTime>Dt)||Lt&&!Vt());){var Bt=wt.callback;if(typeof Bt=="function"){wt.callback=null,kt=wt.priorityLevel;var zt=Bt(wt.expirationTime<=Dt);Dt=tt.unstable_now(),typeof zt=="function"?wt.callback=zt:wt===ot(vt)&&st(vt),Rt(Dt)}else st(vt);wt=ot(vt)}if(wt!==null)var Jt=!0;else{var Ht=ot(xt);Ht!==null&&Gt(Tt,Ht.startTime-Dt),Jt=!1}return Jt}finally{wt=null,kt=Mt,Ct=!1}}var At=!1,Ot=null,It=-1,Ut=5,Ft=-1;function Vt(){return!(tt.unstable_now()-Ft<Ut)}function Xt(){if(Ot!==null){var Lt=tt.unstable_now();Ft=Lt;var Dt=!0;try{Dt=Ot(!0,Lt)}finally{Dt?Qt():(At=!1,Ot=null)}}else At=!1}var Qt;if(typeof $t=="function")Qt=function(){$t(Xt)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,an=nn.port2;nn.port1.onmessage=Xt,Qt=function(){an.postMessage(null)}}else Qt=function(){Pt(Xt,0)};function en(Lt){Ot=Lt,At||(At=!0,Qt())}function Gt(Lt,Dt){It=Pt(function(){Lt(tt.unstable_now())},Dt)}tt.unstable_IdlePriority=5,tt.unstable_ImmediatePriority=1,tt.unstable_LowPriority=4,tt.unstable_NormalPriority=3,tt.unstable_Profiling=null,tt.unstable_UserBlockingPriority=2,tt.unstable_cancelCallback=function(Lt){Lt.callback=null},tt.unstable_continueExecution=function(){bt||Ct||(bt=!0,en(Nt))},tt.unstable_forceFrameRate=function(Lt){0>Lt||125<Lt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ut=0<Lt?Math.floor(1e3/Lt):5},tt.unstable_getCurrentPriorityLevel=function(){return kt},tt.unstable_getFirstCallbackNode=function(){return ot(vt)},tt.unstable_next=function(Lt){switch(kt){case 1:case 2:case 3:var Dt=3;break;default:Dt=kt}var Mt=kt;kt=Dt;try{return Lt()}finally{kt=Mt}},tt.unstable_pauseExecution=function(){},tt.unstable_requestPaint=function(){},tt.unstable_runWithPriority=function(Lt,Dt){switch(Lt){case 1:case 2:case 3:case 4:case 5:break;default:Lt=3}var Mt=kt;kt=Lt;try{return Dt()}finally{kt=Mt}},tt.unstable_scheduleCallback=function(Lt,Dt,Mt){var Bt=tt.unstable_now();switch(typeof Mt=="object"&&Mt!==null?(Mt=Mt.delay,Mt=typeof Mt=="number"&&0<Mt?Bt+Mt:Bt):Mt=Bt,Lt){case 1:var zt=-1;break;case 2:zt=250;break;case 5:zt=1073741823;break;case 4:zt=1e4;break;default:zt=5e3}return zt=Mt+zt,Lt={id:Et++,callback:Dt,priorityLevel:Lt,startTime:Mt,expirationTime:zt,sortIndex:-1},Mt>Bt?(Lt.sortIndex=Mt,nt(xt,Lt),ot(vt)===null&&Lt===ot(xt)&&(jt?(St(It),It=-1):jt=!0,Gt(Tt,Mt-Bt))):(Lt.sortIndex=zt,nt(vt,Lt),bt||Ct||(bt=!0,en(Nt))),Lt},tt.unstable_shouldYield=Vt,tt.unstable_wrapCallback=function(Lt){var Dt=kt;return function(){var Mt=kt;kt=Dt;try{return Lt.apply(this,arguments)}finally{kt=Mt}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p$1(tt){for(var nt="https://reactjs.org/docs/error-decoder.html?invariant="+tt,ot=1;ot<arguments.length;ot++)nt+="&args[]="+encodeURIComponent(arguments[ot]);return"Minified React error #"+tt+"; visit "+nt+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(tt,nt){ha(tt,nt),ha(tt+"Capture",nt)}function ha(tt,nt){for(ea[tt]=nt,tt=0;tt<nt.length;tt++)da.add(nt[tt])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(tt){return ja.call(ma,tt)?!0:ja.call(la,tt)?!1:ka.test(tt)?ma[tt]=!0:(la[tt]=!0,!1)}function pa(tt,nt,ot,st){if(ot!==null&&ot.type===0)return!1;switch(typeof nt){case"function":case"symbol":return!0;case"boolean":return st?!1:ot!==null?!ot.acceptsBooleans:(tt=tt.toLowerCase().slice(0,5),tt!=="data-"&&tt!=="aria-");default:return!1}}function qa(tt,nt,ot,st){if(nt===null||typeof nt>"u"||pa(tt,nt,ot,st))return!0;if(st)return!1;if(ot!==null)switch(ot.type){case 3:return!nt;case 4:return nt===!1;case 5:return isNaN(nt);case 6:return isNaN(nt)||1>nt}return!1}function v$2(tt,nt,ot,st,ft,ht,gt){this.acceptsBooleans=nt===2||nt===3||nt===4,this.attributeName=st,this.attributeNamespace=ft,this.mustUseProperty=ot,this.propertyName=tt,this.type=nt,this.sanitizeURL=ht,this.removeEmptyString=gt}var z$1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(tt){z$1[tt]=new v$2(tt,0,!1,tt,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(tt){var nt=tt[0];z$1[nt]=new v$2(nt,1,!1,tt[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(tt){z$1[tt]=new v$2(tt,2,!1,tt.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(tt){z$1[tt]=new v$2(tt,2,!1,tt,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(tt){z$1[tt]=new v$2(tt,3,!1,tt.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(tt){z$1[tt]=new v$2(tt,3,!0,tt,null,!1,!1)});["capture","download"].forEach(function(tt){z$1[tt]=new v$2(tt,4,!1,tt,null,!1,!1)});["cols","rows","size","span"].forEach(function(tt){z$1[tt]=new v$2(tt,6,!1,tt,null,!1,!1)});["rowSpan","start"].forEach(function(tt){z$1[tt]=new v$2(tt,5,!1,tt.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(tt){return tt[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(tt){var nt=tt.replace(ra,sa);z$1[nt]=new v$2(nt,1,!1,tt,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(tt){var nt=tt.replace(ra,sa);z$1[nt]=new v$2(nt,1,!1,tt,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(tt){var nt=tt.replace(ra,sa);z$1[nt]=new v$2(nt,1,!1,tt,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(tt){z$1[tt]=new v$2(tt,1,!1,tt.toLowerCase(),null,!1,!1)});z$1.xlinkHref=new v$2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(tt){z$1[tt]=new v$2(tt,1,!1,tt.toLowerCase(),null,!0,!0)});function ta(tt,nt,ot,st){var ft=z$1.hasOwnProperty(nt)?z$1[nt]:null;(ft!==null?ft.type!==0:st||!(2<nt.length)||nt[0]!=="o"&&nt[0]!=="O"||nt[1]!=="n"&&nt[1]!=="N")&&(qa(nt,ot,ft,st)&&(ot=null),st||ft===null?oa(nt)&&(ot===null?tt.removeAttribute(nt):tt.setAttribute(nt,""+ot)):ft.mustUseProperty?tt[ft.propertyName]=ot===null?ft.type===3?!1:"":ot:(nt=ft.attributeName,st=ft.attributeNamespace,ot===null?tt.removeAttribute(nt):(ft=ft.type,ot=ft===3||ft===4&&ot===!0?"":""+ot,st?tt.setAttributeNS(st,nt,ot):tt.setAttribute(nt,ot))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(tt){return tt===null||typeof tt!="object"?null:(tt=Ja&&tt[Ja]||tt["@@iterator"],typeof tt=="function"?tt:null)}var A$2=Object.assign,La;function Ma(tt){if(La===void 0)try{throw Error()}catch(ot){var nt=ot.stack.trim().match(/\n( *(at )?)/);La=nt&&nt[1]||""}return`
`+La+tt}var Na=!1;function Oa(tt,nt){if(!tt||Na)return"";Na=!0;var ot=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(nt)if(nt=function(){throw Error()},Object.defineProperty(nt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(nt,[])}catch(xt){var st=xt}Reflect.construct(tt,[],nt)}else{try{nt.call()}catch(xt){st=xt}tt.call(nt.prototype)}else{try{throw Error()}catch(xt){st=xt}tt()}}catch(xt){if(xt&&st&&typeof xt.stack=="string"){for(var ft=xt.stack.split(`
`),ht=st.stack.split(`
`),gt=ft.length-1,yt=ht.length-1;1<=gt&&0<=yt&&ft[gt]!==ht[yt];)yt--;for(;1<=gt&&0<=yt;gt--,yt--)if(ft[gt]!==ht[yt]){if(gt!==1||yt!==1)do if(gt--,yt--,0>yt||ft[gt]!==ht[yt]){var vt=`
`+ft[gt].replace(" at new "," at ");return tt.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",tt.displayName)),vt}while(1<=gt&&0<=yt);break}}}finally{Na=!1,Error.prepareStackTrace=ot}return(tt=tt?tt.displayName||tt.name:"")?Ma(tt):""}function Pa(tt){switch(tt.tag){case 5:return Ma(tt.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return tt=Oa(tt.type,!1),tt;case 11:return tt=Oa(tt.type.render,!1),tt;case 1:return tt=Oa(tt.type,!0),tt;default:return""}}function Qa(tt){if(tt==null)return null;if(typeof tt=="function")return tt.displayName||tt.name||null;if(typeof tt=="string")return tt;switch(tt){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof tt=="object")switch(tt.$$typeof){case Ca:return(tt.displayName||"Context")+".Consumer";case Ba:return(tt._context.displayName||"Context")+".Provider";case Da:var nt=tt.render;return tt=tt.displayName,tt||(tt=nt.displayName||nt.name||"",tt=tt!==""?"ForwardRef("+tt+")":"ForwardRef"),tt;case Ga:return nt=tt.displayName||null,nt!==null?nt:Qa(tt.type)||"Memo";case Ha:nt=tt._payload,tt=tt._init;try{return Qa(tt(nt))}catch{}}return null}function Ra(tt){var nt=tt.type;switch(tt.tag){case 24:return"Cache";case 9:return(nt.displayName||"Context")+".Consumer";case 10:return(nt._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return tt=nt.render,tt=tt.displayName||tt.name||"",nt.displayName||(tt!==""?"ForwardRef("+tt+")":"ForwardRef");case 7:return"Fragment";case 5:return nt;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(nt);case 8:return nt===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof nt=="function")return nt.displayName||nt.name||null;if(typeof nt=="string")return nt}return null}function Sa(tt){switch(typeof tt){case"boolean":case"number":case"string":case"undefined":return tt;case"object":return tt;default:return""}}function Ta(tt){var nt=tt.type;return(tt=tt.nodeName)&&tt.toLowerCase()==="input"&&(nt==="checkbox"||nt==="radio")}function Ua(tt){var nt=Ta(tt)?"checked":"value",ot=Object.getOwnPropertyDescriptor(tt.constructor.prototype,nt),st=""+tt[nt];if(!tt.hasOwnProperty(nt)&&typeof ot<"u"&&typeof ot.get=="function"&&typeof ot.set=="function"){var ft=ot.get,ht=ot.set;return Object.defineProperty(tt,nt,{configurable:!0,get:function(){return ft.call(this)},set:function(gt){st=""+gt,ht.call(this,gt)}}),Object.defineProperty(tt,nt,{enumerable:ot.enumerable}),{getValue:function(){return st},setValue:function(gt){st=""+gt},stopTracking:function(){tt._valueTracker=null,delete tt[nt]}}}}function Va(tt){tt._valueTracker||(tt._valueTracker=Ua(tt))}function Wa(tt){if(!tt)return!1;var nt=tt._valueTracker;if(!nt)return!0;var ot=nt.getValue(),st="";return tt&&(st=Ta(tt)?tt.checked?"true":"false":tt.value),tt=st,tt!==ot?(nt.setValue(tt),!0):!1}function Xa(tt){if(tt=tt||(typeof document<"u"?document:void 0),typeof tt>"u")return null;try{return tt.activeElement||tt.body}catch{return tt.body}}function Ya(tt,nt){var ot=nt.checked;return A$2({},nt,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:ot??tt._wrapperState.initialChecked})}function Za(tt,nt){var ot=nt.defaultValue==null?"":nt.defaultValue,st=nt.checked!=null?nt.checked:nt.defaultChecked;ot=Sa(nt.value!=null?nt.value:ot),tt._wrapperState={initialChecked:st,initialValue:ot,controlled:nt.type==="checkbox"||nt.type==="radio"?nt.checked!=null:nt.value!=null}}function ab(tt,nt){nt=nt.checked,nt!=null&&ta(tt,"checked",nt,!1)}function bb(tt,nt){ab(tt,nt);var ot=Sa(nt.value),st=nt.type;if(ot!=null)st==="number"?(ot===0&&tt.value===""||tt.value!=ot)&&(tt.value=""+ot):tt.value!==""+ot&&(tt.value=""+ot);else if(st==="submit"||st==="reset"){tt.removeAttribute("value");return}nt.hasOwnProperty("value")?cb(tt,nt.type,ot):nt.hasOwnProperty("defaultValue")&&cb(tt,nt.type,Sa(nt.defaultValue)),nt.checked==null&&nt.defaultChecked!=null&&(tt.defaultChecked=!!nt.defaultChecked)}function db(tt,nt,ot){if(nt.hasOwnProperty("value")||nt.hasOwnProperty("defaultValue")){var st=nt.type;if(!(st!=="submit"&&st!=="reset"||nt.value!==void 0&&nt.value!==null))return;nt=""+tt._wrapperState.initialValue,ot||nt===tt.value||(tt.value=nt),tt.defaultValue=nt}ot=tt.name,ot!==""&&(tt.name=""),tt.defaultChecked=!!tt._wrapperState.initialChecked,ot!==""&&(tt.name=ot)}function cb(tt,nt,ot){(nt!=="number"||Xa(tt.ownerDocument)!==tt)&&(ot==null?tt.defaultValue=""+tt._wrapperState.initialValue:tt.defaultValue!==""+ot&&(tt.defaultValue=""+ot))}var eb=Array.isArray;function fb(tt,nt,ot,st){if(tt=tt.options,nt){nt={};for(var ft=0;ft<ot.length;ft++)nt["$"+ot[ft]]=!0;for(ot=0;ot<tt.length;ot++)ft=nt.hasOwnProperty("$"+tt[ot].value),tt[ot].selected!==ft&&(tt[ot].selected=ft),ft&&st&&(tt[ot].defaultSelected=!0)}else{for(ot=""+Sa(ot),nt=null,ft=0;ft<tt.length;ft++){if(tt[ft].value===ot){tt[ft].selected=!0,st&&(tt[ft].defaultSelected=!0);return}nt!==null||tt[ft].disabled||(nt=tt[ft])}nt!==null&&(nt.selected=!0)}}function gb(tt,nt){if(nt.dangerouslySetInnerHTML!=null)throw Error(p$1(91));return A$2({},nt,{value:void 0,defaultValue:void 0,children:""+tt._wrapperState.initialValue})}function hb(tt,nt){var ot=nt.value;if(ot==null){if(ot=nt.children,nt=nt.defaultValue,ot!=null){if(nt!=null)throw Error(p$1(92));if(eb(ot)){if(1<ot.length)throw Error(p$1(93));ot=ot[0]}nt=ot}nt==null&&(nt=""),ot=nt}tt._wrapperState={initialValue:Sa(ot)}}function ib(tt,nt){var ot=Sa(nt.value),st=Sa(nt.defaultValue);ot!=null&&(ot=""+ot,ot!==tt.value&&(tt.value=ot),nt.defaultValue==null&&tt.defaultValue!==ot&&(tt.defaultValue=ot)),st!=null&&(tt.defaultValue=""+st)}function jb(tt){var nt=tt.textContent;nt===tt._wrapperState.initialValue&&nt!==""&&nt!==null&&(tt.value=nt)}function kb(tt){switch(tt){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(tt,nt){return tt==null||tt==="http://www.w3.org/1999/xhtml"?kb(nt):tt==="http://www.w3.org/2000/svg"&&nt==="foreignObject"?"http://www.w3.org/1999/xhtml":tt}var mb,nb=function(tt){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(nt,ot,st,ft){MSApp.execUnsafeLocalFunction(function(){return tt(nt,ot,st,ft)})}:tt}(function(tt,nt){if(tt.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in tt)tt.innerHTML=nt;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+nt.valueOf().toString()+"</svg>",nt=mb.firstChild;tt.firstChild;)tt.removeChild(tt.firstChild);for(;nt.firstChild;)tt.appendChild(nt.firstChild)}});function ob(tt,nt){if(nt){var ot=tt.firstChild;if(ot&&ot===tt.lastChild&&ot.nodeType===3){ot.nodeValue=nt;return}}tt.textContent=nt}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(tt){qb.forEach(function(nt){nt=nt+tt.charAt(0).toUpperCase()+tt.substring(1),pb[nt]=pb[tt]})});function rb(tt,nt,ot){return nt==null||typeof nt=="boolean"||nt===""?"":ot||typeof nt!="number"||nt===0||pb.hasOwnProperty(tt)&&pb[tt]?(""+nt).trim():nt+"px"}function sb(tt,nt){tt=tt.style;for(var ot in nt)if(nt.hasOwnProperty(ot)){var st=ot.indexOf("--")===0,ft=rb(ot,nt[ot],st);ot==="float"&&(ot="cssFloat"),st?tt.setProperty(ot,ft):tt[ot]=ft}}var tb=A$2({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(tt,nt){if(nt){if(tb[tt]&&(nt.children!=null||nt.dangerouslySetInnerHTML!=null))throw Error(p$1(137,tt));if(nt.dangerouslySetInnerHTML!=null){if(nt.children!=null)throw Error(p$1(60));if(typeof nt.dangerouslySetInnerHTML!="object"||!("__html"in nt.dangerouslySetInnerHTML))throw Error(p$1(61))}if(nt.style!=null&&typeof nt.style!="object")throw Error(p$1(62))}}function vb(tt,nt){if(tt.indexOf("-")===-1)return typeof nt.is=="string";switch(tt){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(tt){return tt=tt.target||tt.srcElement||window,tt.correspondingUseElement&&(tt=tt.correspondingUseElement),tt.nodeType===3?tt.parentNode:tt}var yb=null,zb=null,Ab=null;function Bb(tt){if(tt=Cb(tt)){if(typeof yb!="function")throw Error(p$1(280));var nt=tt.stateNode;nt&&(nt=Db(nt),yb(tt.stateNode,tt.type,nt))}}function Eb(tt){zb?Ab?Ab.push(tt):Ab=[tt]:zb=tt}function Fb(){if(zb){var tt=zb,nt=Ab;if(Ab=zb=null,Bb(tt),nt)for(tt=0;tt<nt.length;tt++)Bb(nt[tt])}}function Gb(tt,nt){return tt(nt)}function Hb(){}var Ib=!1;function Jb(tt,nt,ot){if(Ib)return tt(nt,ot);Ib=!0;try{return Gb(tt,nt,ot)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(tt,nt){var ot=tt.stateNode;if(ot===null)return null;var st=Db(ot);if(st===null)return null;ot=st[nt];e:switch(nt){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(st=!st.disabled)||(tt=tt.type,st=!(tt==="button"||tt==="input"||tt==="select"||tt==="textarea")),tt=!st;break e;default:tt=!1}if(tt)return null;if(ot&&typeof ot!="function")throw Error(p$1(231,nt,typeof ot));return ot}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(tt,nt,ot,st,ft,ht,gt,yt,vt){var xt=Array.prototype.slice.call(arguments,3);try{nt.apply(ot,xt)}catch(Et){this.onError(Et)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(tt){Ob=!0,Pb=tt}};function Tb(tt,nt,ot,st,ft,ht,gt,yt,vt){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(tt,nt,ot,st,ft,ht,gt,yt,vt){if(Tb.apply(this,arguments),Ob){if(Ob){var xt=Pb;Ob=!1,Pb=null}else throw Error(p$1(198));Qb||(Qb=!0,Rb=xt)}}function Vb(tt){var nt=tt,ot=tt;if(tt.alternate)for(;nt.return;)nt=nt.return;else{tt=nt;do nt=tt,nt.flags&4098&&(ot=nt.return),tt=nt.return;while(tt)}return nt.tag===3?ot:null}function Wb(tt){if(tt.tag===13){var nt=tt.memoizedState;if(nt===null&&(tt=tt.alternate,tt!==null&&(nt=tt.memoizedState)),nt!==null)return nt.dehydrated}return null}function Xb(tt){if(Vb(tt)!==tt)throw Error(p$1(188))}function Yb(tt){var nt=tt.alternate;if(!nt){if(nt=Vb(tt),nt===null)throw Error(p$1(188));return nt!==tt?null:tt}for(var ot=tt,st=nt;;){var ft=ot.return;if(ft===null)break;var ht=ft.alternate;if(ht===null){if(st=ft.return,st!==null){ot=st;continue}break}if(ft.child===ht.child){for(ht=ft.child;ht;){if(ht===ot)return Xb(ft),tt;if(ht===st)return Xb(ft),nt;ht=ht.sibling}throw Error(p$1(188))}if(ot.return!==st.return)ot=ft,st=ht;else{for(var gt=!1,yt=ft.child;yt;){if(yt===ot){gt=!0,ot=ft,st=ht;break}if(yt===st){gt=!0,st=ft,ot=ht;break}yt=yt.sibling}if(!gt){for(yt=ht.child;yt;){if(yt===ot){gt=!0,ot=ht,st=ft;break}if(yt===st){gt=!0,st=ht,ot=ft;break}yt=yt.sibling}if(!gt)throw Error(p$1(189))}}if(ot.alternate!==st)throw Error(p$1(190))}if(ot.tag!==3)throw Error(p$1(188));return ot.stateNode.current===ot?tt:nt}function Zb(tt){return tt=Yb(tt),tt!==null?$b(tt):null}function $b(tt){if(tt.tag===5||tt.tag===6)return tt;for(tt=tt.child;tt!==null;){var nt=$b(tt);if(nt!==null)return nt;tt=tt.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B$1=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(tt){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,tt,void 0,(tt.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(tt){return tt>>>=0,tt===0?32:31-(pc(tt)/qc|0)|0}var rc=64,sc=4194304;function tc(tt){switch(tt&-tt){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return tt&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return tt&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return tt}}function uc(tt,nt){var ot=tt.pendingLanes;if(ot===0)return 0;var st=0,ft=tt.suspendedLanes,ht=tt.pingedLanes,gt=ot&268435455;if(gt!==0){var yt=gt&~ft;yt!==0?st=tc(yt):(ht&=gt,ht!==0&&(st=tc(ht)))}else gt=ot&~ft,gt!==0?st=tc(gt):ht!==0&&(st=tc(ht));if(st===0)return 0;if(nt!==0&&nt!==st&&!(nt&ft)&&(ft=st&-st,ht=nt&-nt,ft>=ht||ft===16&&(ht&4194240)!==0))return nt;if(st&4&&(st|=ot&16),nt=tt.entangledLanes,nt!==0)for(tt=tt.entanglements,nt&=st;0<nt;)ot=31-oc(nt),ft=1<<ot,st|=tt[ot],nt&=~ft;return st}function vc(tt,nt){switch(tt){case 1:case 2:case 4:return nt+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return nt+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(tt,nt){for(var ot=tt.suspendedLanes,st=tt.pingedLanes,ft=tt.expirationTimes,ht=tt.pendingLanes;0<ht;){var gt=31-oc(ht),yt=1<<gt,vt=ft[gt];vt===-1?(!(yt&ot)||yt&st)&&(ft[gt]=vc(yt,nt)):vt<=nt&&(tt.expiredLanes|=yt),ht&=~yt}}function xc(tt){return tt=tt.pendingLanes&-1073741825,tt!==0?tt:tt&1073741824?1073741824:0}function yc(){var tt=rc;return rc<<=1,!(rc&4194240)&&(rc=64),tt}function zc(tt){for(var nt=[],ot=0;31>ot;ot++)nt.push(tt);return nt}function Ac(tt,nt,ot){tt.pendingLanes|=nt,nt!==536870912&&(tt.suspendedLanes=0,tt.pingedLanes=0),tt=tt.eventTimes,nt=31-oc(nt),tt[nt]=ot}function Bc(tt,nt){var ot=tt.pendingLanes&~nt;tt.pendingLanes=nt,tt.suspendedLanes=0,tt.pingedLanes=0,tt.expiredLanes&=nt,tt.mutableReadLanes&=nt,tt.entangledLanes&=nt,nt=tt.entanglements;var st=tt.eventTimes;for(tt=tt.expirationTimes;0<ot;){var ft=31-oc(ot),ht=1<<ft;nt[ft]=0,st[ft]=-1,tt[ft]=-1,ot&=~ht}}function Cc(tt,nt){var ot=tt.entangledLanes|=nt;for(tt=tt.entanglements;ot;){var st=31-oc(ot),ft=1<<st;ft&nt|tt[st]&nt&&(tt[st]|=nt),ot&=~ft}}var C$1=0;function Dc(tt){return tt&=-tt,1<tt?4<tt?tt&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(tt,nt){switch(tt){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(nt.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(nt.pointerId)}}function Tc(tt,nt,ot,st,ft,ht){return tt===null||tt.nativeEvent!==ht?(tt={blockedOn:nt,domEventName:ot,eventSystemFlags:st,nativeEvent:ht,targetContainers:[ft]},nt!==null&&(nt=Cb(nt),nt!==null&&Fc(nt)),tt):(tt.eventSystemFlags|=st,nt=tt.targetContainers,ft!==null&&nt.indexOf(ft)===-1&&nt.push(ft),tt)}function Uc(tt,nt,ot,st,ft){switch(nt){case"focusin":return Lc=Tc(Lc,tt,nt,ot,st,ft),!0;case"dragenter":return Mc=Tc(Mc,tt,nt,ot,st,ft),!0;case"mouseover":return Nc=Tc(Nc,tt,nt,ot,st,ft),!0;case"pointerover":var ht=ft.pointerId;return Oc.set(ht,Tc(Oc.get(ht)||null,tt,nt,ot,st,ft)),!0;case"gotpointercapture":return ht=ft.pointerId,Pc.set(ht,Tc(Pc.get(ht)||null,tt,nt,ot,st,ft)),!0}return!1}function Vc(tt){var nt=Wc(tt.target);if(nt!==null){var ot=Vb(nt);if(ot!==null){if(nt=ot.tag,nt===13){if(nt=Wb(ot),nt!==null){tt.blockedOn=nt,Ic(tt.priority,function(){Gc(ot)});return}}else if(nt===3&&ot.stateNode.current.memoizedState.isDehydrated){tt.blockedOn=ot.tag===3?ot.stateNode.containerInfo:null;return}}}tt.blockedOn=null}function Xc(tt){if(tt.blockedOn!==null)return!1;for(var nt=tt.targetContainers;0<nt.length;){var ot=Yc(tt.domEventName,tt.eventSystemFlags,nt[0],tt.nativeEvent);if(ot===null){ot=tt.nativeEvent;var st=new ot.constructor(ot.type,ot);wb=st,ot.target.dispatchEvent(st),wb=null}else return nt=Cb(ot),nt!==null&&Fc(nt),tt.blockedOn=ot,!1;nt.shift()}return!0}function Zc(tt,nt,ot){Xc(tt)&&ot.delete(nt)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(tt,nt){tt.blockedOn===nt&&(tt.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(tt){function nt(ft){return ad(ft,tt)}if(0<Kc.length){ad(Kc[0],tt);for(var ot=1;ot<Kc.length;ot++){var st=Kc[ot];st.blockedOn===tt&&(st.blockedOn=null)}}for(Lc!==null&&ad(Lc,tt),Mc!==null&&ad(Mc,tt),Nc!==null&&ad(Nc,tt),Oc.forEach(nt),Pc.forEach(nt),ot=0;ot<Qc.length;ot++)st=Qc[ot],st.blockedOn===tt&&(st.blockedOn=null);for(;0<Qc.length&&(ot=Qc[0],ot.blockedOn===null);)Vc(ot),ot.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(tt,nt,ot,st){var ft=C$1,ht=cd.transition;cd.transition=null;try{C$1=1,fd(tt,nt,ot,st)}finally{C$1=ft,cd.transition=ht}}function gd(tt,nt,ot,st){var ft=C$1,ht=cd.transition;cd.transition=null;try{C$1=4,fd(tt,nt,ot,st)}finally{C$1=ft,cd.transition=ht}}function fd(tt,nt,ot,st){if(dd){var ft=Yc(tt,nt,ot,st);if(ft===null)hd(tt,nt,st,id,ot),Sc(tt,st);else if(Uc(ft,tt,nt,ot,st))st.stopPropagation();else if(Sc(tt,st),nt&4&&-1<Rc.indexOf(tt)){for(;ft!==null;){var ht=Cb(ft);if(ht!==null&&Ec(ht),ht=Yc(tt,nt,ot,st),ht===null&&hd(tt,nt,st,id,ot),ht===ft)break;ft=ht}ft!==null&&st.stopPropagation()}else hd(tt,nt,st,null,ot)}}var id=null;function Yc(tt,nt,ot,st){if(id=null,tt=xb(st),tt=Wc(tt),tt!==null)if(nt=Vb(tt),nt===null)tt=null;else if(ot=nt.tag,ot===13){if(tt=Wb(nt),tt!==null)return tt;tt=null}else if(ot===3){if(nt.stateNode.current.memoizedState.isDehydrated)return nt.tag===3?nt.stateNode.containerInfo:null;tt=null}else nt!==tt&&(tt=null);return id=tt,null}function jd(tt){switch(tt){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var tt,nt=ld,ot=nt.length,st,ft="value"in kd?kd.value:kd.textContent,ht=ft.length;for(tt=0;tt<ot&&nt[tt]===ft[tt];tt++);var gt=ot-tt;for(st=1;st<=gt&&nt[ot-st]===ft[ht-st];st++);return md=ft.slice(tt,1<st?1-st:void 0)}function od(tt){var nt=tt.keyCode;return"charCode"in tt?(tt=tt.charCode,tt===0&&nt===13&&(tt=13)):tt=nt,tt===10&&(tt=13),32<=tt||tt===13?tt:0}function pd(){return!0}function qd(){return!1}function rd(tt){function nt(ot,st,ft,ht,gt){this._reactName=ot,this._targetInst=ft,this.type=st,this.nativeEvent=ht,this.target=gt,this.currentTarget=null;for(var yt in tt)tt.hasOwnProperty(yt)&&(ot=tt[yt],this[yt]=ot?ot(ht):ht[yt]);return this.isDefaultPrevented=(ht.defaultPrevented!=null?ht.defaultPrevented:ht.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A$2(nt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var ot=this.nativeEvent;ot&&(ot.preventDefault?ot.preventDefault():typeof ot.returnValue!="unknown"&&(ot.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var ot=this.nativeEvent;ot&&(ot.stopPropagation?ot.stopPropagation():typeof ot.cancelBubble!="unknown"&&(ot.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),nt}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(tt){return tt.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A$2({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A$2({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(tt){return tt.relatedTarget===void 0?tt.fromElement===tt.srcElement?tt.toElement:tt.fromElement:tt.relatedTarget},movementX:function(tt){return"movementX"in tt?tt.movementX:(tt!==yd&&(yd&&tt.type==="mousemove"?(wd=tt.screenX-yd.screenX,xd=tt.screenY-yd.screenY):xd=wd=0,yd=tt),wd)},movementY:function(tt){return"movementY"in tt?tt.movementY:xd}}),Bd=rd(Ad),Cd=A$2({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A$2({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A$2({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A$2({},sd,{clipboardData:function(tt){return"clipboardData"in tt?tt.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A$2({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(tt){var nt=this.nativeEvent;return nt.getModifierState?nt.getModifierState(tt):(tt=Od[tt])?!!nt[tt]:!1}function zd(){return Pd}var Qd=A$2({},ud,{key:function(tt){if(tt.key){var nt=Md[tt.key]||tt.key;if(nt!=="Unidentified")return nt}return tt.type==="keypress"?(tt=od(tt),tt===13?"Enter":String.fromCharCode(tt)):tt.type==="keydown"||tt.type==="keyup"?Nd[tt.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(tt){return tt.type==="keypress"?od(tt):0},keyCode:function(tt){return tt.type==="keydown"||tt.type==="keyup"?tt.keyCode:0},which:function(tt){return tt.type==="keypress"?od(tt):tt.type==="keydown"||tt.type==="keyup"?tt.keyCode:0}}),Rd=rd(Qd),Sd=A$2({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A$2({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A$2({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A$2({},Ad,{deltaX:function(tt){return"deltaX"in tt?tt.deltaX:"wheelDeltaX"in tt?-tt.wheelDeltaX:0},deltaY:function(tt){return"deltaY"in tt?tt.deltaY:"wheelDeltaY"in tt?-tt.wheelDeltaY:"wheelDelta"in tt?-tt.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae$1=ia&&"CompositionEvent"in window,be$2=null;ia&&"documentMode"in document&&(be$2=document.documentMode);var ce$1=ia&&"TextEvent"in window&&!be$2,de$1=ia&&(!ae$1||be$2&&8<be$2&&11>=be$2),ee$2=" ",fe$2=!1;function ge$2(tt,nt){switch(tt){case"keyup":return $d.indexOf(nt.keyCode)!==-1;case"keydown":return nt.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he$2(tt){return tt=tt.detail,typeof tt=="object"&&"data"in tt?tt.data:null}var ie$1=!1;function je$1(tt,nt){switch(tt){case"compositionend":return he$2(nt);case"keypress":return nt.which!==32?null:(fe$2=!0,ee$2);case"textInput":return tt=nt.data,tt===ee$2&&fe$2?null:tt;default:return null}}function ke$1(tt,nt){if(ie$1)return tt==="compositionend"||!ae$1&&ge$2(tt,nt)?(tt=nd(),md=ld=kd=null,ie$1=!1,tt):null;switch(tt){case"paste":return null;case"keypress":if(!(nt.ctrlKey||nt.altKey||nt.metaKey)||nt.ctrlKey&&nt.altKey){if(nt.char&&1<nt.char.length)return nt.char;if(nt.which)return String.fromCharCode(nt.which)}return null;case"compositionend":return de$1&&nt.locale!=="ko"?null:nt.data;default:return null}}var le$2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(tt){var nt=tt&&tt.nodeName&&tt.nodeName.toLowerCase();return nt==="input"?!!le$2[tt.type]:nt==="textarea"}function ne$2(tt,nt,ot,st){Eb(st),nt=oe$2(nt,"onChange"),0<nt.length&&(ot=new td("onChange","change",null,ot,st),tt.push({event:ot,listeners:nt}))}var pe$1=null,qe$1=null;function re$3(tt){se$2(tt,0)}function te$1(tt){var nt=ue$2(tt);if(Wa(nt))return tt}function ve$2(tt,nt){if(tt==="change")return nt}var we$1=!1;if(ia){var xe$2;if(ia){var ye$2="oninput"in document;if(!ye$2){var ze$1=document.createElement("div");ze$1.setAttribute("oninput","return;"),ye$2=typeof ze$1.oninput=="function"}xe$2=ye$2}else xe$2=!1;we$1=xe$2&&(!document.documentMode||9<document.documentMode)}function Ae$2(){pe$1&&(pe$1.detachEvent("onpropertychange",Be),qe$1=pe$1=null)}function Be(tt){if(tt.propertyName==="value"&&te$1(qe$1)){var nt=[];ne$2(nt,qe$1,tt,xb(tt)),Jb(re$3,nt)}}function Ce$1(tt,nt,ot){tt==="focusin"?(Ae$2(),pe$1=nt,qe$1=ot,pe$1.attachEvent("onpropertychange",Be)):tt==="focusout"&&Ae$2()}function De$1(tt){if(tt==="selectionchange"||tt==="keyup"||tt==="keydown")return te$1(qe$1)}function Ee$2(tt,nt){if(tt==="click")return te$1(nt)}function Fe$1(tt,nt){if(tt==="input"||tt==="change")return te$1(nt)}function Ge$1(tt,nt){return tt===nt&&(tt!==0||1/tt===1/nt)||tt!==tt&&nt!==nt}var He$1=typeof Object.is=="function"?Object.is:Ge$1;function Ie$2(tt,nt){if(He$1(tt,nt))return!0;if(typeof tt!="object"||tt===null||typeof nt!="object"||nt===null)return!1;var ot=Object.keys(tt),st=Object.keys(nt);if(ot.length!==st.length)return!1;for(st=0;st<ot.length;st++){var ft=ot[st];if(!ja.call(nt,ft)||!He$1(tt[ft],nt[ft]))return!1}return!0}function Je$1(tt){for(;tt&&tt.firstChild;)tt=tt.firstChild;return tt}function Ke$1(tt,nt){var ot=Je$1(tt);tt=0;for(var st;ot;){if(ot.nodeType===3){if(st=tt+ot.textContent.length,tt<=nt&&st>=nt)return{node:ot,offset:nt-tt};tt=st}e:{for(;ot;){if(ot.nextSibling){ot=ot.nextSibling;break e}ot=ot.parentNode}ot=void 0}ot=Je$1(ot)}}function Le(tt,nt){return tt&&nt?tt===nt?!0:tt&&tt.nodeType===3?!1:nt&&nt.nodeType===3?Le(tt,nt.parentNode):"contains"in tt?tt.contains(nt):tt.compareDocumentPosition?!!(tt.compareDocumentPosition(nt)&16):!1:!1}function Me$1(){for(var tt=window,nt=Xa();nt instanceof tt.HTMLIFrameElement;){try{var ot=typeof nt.contentWindow.location.href=="string"}catch{ot=!1}if(ot)tt=nt.contentWindow;else break;nt=Xa(tt.document)}return nt}function Ne$1(tt){var nt=tt&&tt.nodeName&&tt.nodeName.toLowerCase();return nt&&(nt==="input"&&(tt.type==="text"||tt.type==="search"||tt.type==="tel"||tt.type==="url"||tt.type==="password")||nt==="textarea"||tt.contentEditable==="true")}function Oe$1(tt){var nt=Me$1(),ot=tt.focusedElem,st=tt.selectionRange;if(nt!==ot&&ot&&ot.ownerDocument&&Le(ot.ownerDocument.documentElement,ot)){if(st!==null&&Ne$1(ot)){if(nt=st.start,tt=st.end,tt===void 0&&(tt=nt),"selectionStart"in ot)ot.selectionStart=nt,ot.selectionEnd=Math.min(tt,ot.value.length);else if(tt=(nt=ot.ownerDocument||document)&&nt.defaultView||window,tt.getSelection){tt=tt.getSelection();var ft=ot.textContent.length,ht=Math.min(st.start,ft);st=st.end===void 0?ht:Math.min(st.end,ft),!tt.extend&&ht>st&&(ft=st,st=ht,ht=ft),ft=Ke$1(ot,ht);var gt=Ke$1(ot,st);ft&&gt&&(tt.rangeCount!==1||tt.anchorNode!==ft.node||tt.anchorOffset!==ft.offset||tt.focusNode!==gt.node||tt.focusOffset!==gt.offset)&&(nt=nt.createRange(),nt.setStart(ft.node,ft.offset),tt.removeAllRanges(),ht>st?(tt.addRange(nt),tt.extend(gt.node,gt.offset)):(nt.setEnd(gt.node,gt.offset),tt.addRange(nt)))}}for(nt=[],tt=ot;tt=tt.parentNode;)tt.nodeType===1&&nt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof ot.focus=="function"&&ot.focus(),ot=0;ot<nt.length;ot++)tt=nt[ot],tt.element.scrollLeft=tt.left,tt.element.scrollTop=tt.top}}var Pe$1=ia&&"documentMode"in document&&11>=document.documentMode,Qe$1=null,Re$2=null,Se$2=null,Te$2=!1;function Ue$1(tt,nt,ot){var st=ot.window===ot?ot.document:ot.nodeType===9?ot:ot.ownerDocument;Te$2||Qe$1==null||Qe$1!==Xa(st)||(st=Qe$1,"selectionStart"in st&&Ne$1(st)?st={start:st.selectionStart,end:st.selectionEnd}:(st=(st.ownerDocument&&st.ownerDocument.defaultView||window).getSelection(),st={anchorNode:st.anchorNode,anchorOffset:st.anchorOffset,focusNode:st.focusNode,focusOffset:st.focusOffset}),Se$2&&Ie$2(Se$2,st)||(Se$2=st,st=oe$2(Re$2,"onSelect"),0<st.length&&(nt=new td("onSelect","select",null,nt,ot),tt.push({event:nt,listeners:st}),nt.target=Qe$1)))}function Ve$1(tt,nt){var ot={};return ot[tt.toLowerCase()]=nt.toLowerCase(),ot["Webkit"+tt]="webkit"+nt,ot["Moz"+tt]="moz"+nt,ot}var We$1={animationend:Ve$1("Animation","AnimationEnd"),animationiteration:Ve$1("Animation","AnimationIteration"),animationstart:Ve$1("Animation","AnimationStart"),transitionend:Ve$1("Transition","TransitionEnd")},Xe$1={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We$1.animationend.animation,delete We$1.animationiteration.animation,delete We$1.animationstart.animation),"TransitionEvent"in window||delete We$1.transitionend.transition);function Ze$1(tt){if(Xe$1[tt])return Xe$1[tt];if(!We$1[tt])return tt;var nt=We$1[tt],ot;for(ot in nt)if(nt.hasOwnProperty(ot)&&ot in Ye)return Xe$1[tt]=nt[ot];return tt}var $e$1=Ze$1("animationend"),af=Ze$1("animationiteration"),bf=Ze$1("animationstart"),cf=Ze$1("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(tt,nt){df.set(tt,nt),fa(nt,[tt])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e$1,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(tt,nt,ot){var st=tt.type||"unknown-event";tt.currentTarget=ot,Ub(st,nt,void 0,tt),tt.currentTarget=null}function se$2(tt,nt){nt=(nt&4)!==0;for(var ot=0;ot<tt.length;ot++){var st=tt[ot],ft=st.event;st=st.listeners;e:{var ht=void 0;if(nt)for(var gt=st.length-1;0<=gt;gt--){var yt=st[gt],vt=yt.instance,xt=yt.currentTarget;if(yt=yt.listener,vt!==ht&&ft.isPropagationStopped())break e;nf(ft,yt,xt),ht=vt}else for(gt=0;gt<st.length;gt++){if(yt=st[gt],vt=yt.instance,xt=yt.currentTarget,yt=yt.listener,vt!==ht&&ft.isPropagationStopped())break e;nf(ft,yt,xt),ht=vt}}}if(Qb)throw tt=Rb,Qb=!1,Rb=null,tt}function D$2(tt,nt){var ot=nt[of];ot===void 0&&(ot=nt[of]=new Set);var st=tt+"__bubble";ot.has(st)||(pf(nt,tt,2,!1),ot.add(st))}function qf(tt,nt,ot){var st=0;nt&&(st|=4),pf(ot,tt,st,nt)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(tt){if(!tt[rf]){tt[rf]=!0,da.forEach(function(ot){ot!=="selectionchange"&&(mf.has(ot)||qf(ot,!1,tt),qf(ot,!0,tt))});var nt=tt.nodeType===9?tt:tt.ownerDocument;nt===null||nt[rf]||(nt[rf]=!0,qf("selectionchange",!1,nt))}}function pf(tt,nt,ot,st){switch(jd(nt)){case 1:var ft=ed;break;case 4:ft=gd;break;default:ft=fd}ot=ft.bind(null,nt,ot,tt),ft=void 0,!Lb||nt!=="touchstart"&&nt!=="touchmove"&&nt!=="wheel"||(ft=!0),st?ft!==void 0?tt.addEventListener(nt,ot,{capture:!0,passive:ft}):tt.addEventListener(nt,ot,!0):ft!==void 0?tt.addEventListener(nt,ot,{passive:ft}):tt.addEventListener(nt,ot,!1)}function hd(tt,nt,ot,st,ft){var ht=st;if(!(nt&1)&&!(nt&2)&&st!==null)e:for(;;){if(st===null)return;var gt=st.tag;if(gt===3||gt===4){var yt=st.stateNode.containerInfo;if(yt===ft||yt.nodeType===8&&yt.parentNode===ft)break;if(gt===4)for(gt=st.return;gt!==null;){var vt=gt.tag;if((vt===3||vt===4)&&(vt=gt.stateNode.containerInfo,vt===ft||vt.nodeType===8&&vt.parentNode===ft))return;gt=gt.return}for(;yt!==null;){if(gt=Wc(yt),gt===null)return;if(vt=gt.tag,vt===5||vt===6){st=ht=gt;continue e}yt=yt.parentNode}}st=st.return}Jb(function(){var xt=ht,Et=xb(ot),wt=[];e:{var kt=df.get(tt);if(kt!==void 0){var Ct=td,bt=tt;switch(tt){case"keypress":if(od(ot)===0)break e;case"keydown":case"keyup":Ct=Rd;break;case"focusin":bt="focus",Ct=Fd;break;case"focusout":bt="blur",Ct=Fd;break;case"beforeblur":case"afterblur":Ct=Fd;break;case"click":if(ot.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ct=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ct=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ct=Vd;break;case $e$1:case af:case bf:Ct=Hd;break;case cf:Ct=Xd;break;case"scroll":Ct=vd;break;case"wheel":Ct=Zd;break;case"copy":case"cut":case"paste":Ct=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ct=Td}var jt=(nt&4)!==0,Pt=!jt&&tt==="scroll",St=jt?kt!==null?kt+"Capture":null:kt;jt=[];for(var $t=xt,Rt;$t!==null;){Rt=$t;var Tt=Rt.stateNode;if(Rt.tag===5&&Tt!==null&&(Rt=Tt,St!==null&&(Tt=Kb($t,St),Tt!=null&&jt.push(tf($t,Tt,Rt)))),Pt)break;$t=$t.return}0<jt.length&&(kt=new Ct(kt,bt,null,ot,Et),wt.push({event:kt,listeners:jt}))}}if(!(nt&7)){e:{if(kt=tt==="mouseover"||tt==="pointerover",Ct=tt==="mouseout"||tt==="pointerout",kt&&ot!==wb&&(bt=ot.relatedTarget||ot.fromElement)&&(Wc(bt)||bt[uf]))break e;if((Ct||kt)&&(kt=Et.window===Et?Et:(kt=Et.ownerDocument)?kt.defaultView||kt.parentWindow:window,Ct?(bt=ot.relatedTarget||ot.toElement,Ct=xt,bt=bt?Wc(bt):null,bt!==null&&(Pt=Vb(bt),bt!==Pt||bt.tag!==5&&bt.tag!==6)&&(bt=null)):(Ct=null,bt=xt),Ct!==bt)){if(jt=Bd,Tt="onMouseLeave",St="onMouseEnter",$t="mouse",(tt==="pointerout"||tt==="pointerover")&&(jt=Td,Tt="onPointerLeave",St="onPointerEnter",$t="pointer"),Pt=Ct==null?kt:ue$2(Ct),Rt=bt==null?kt:ue$2(bt),kt=new jt(Tt,$t+"leave",Ct,ot,Et),kt.target=Pt,kt.relatedTarget=Rt,Tt=null,Wc(Et)===xt&&(jt=new jt(St,$t+"enter",bt,ot,Et),jt.target=Rt,jt.relatedTarget=Pt,Tt=jt),Pt=Tt,Ct&&bt)t:{for(jt=Ct,St=bt,$t=0,Rt=jt;Rt;Rt=vf(Rt))$t++;for(Rt=0,Tt=St;Tt;Tt=vf(Tt))Rt++;for(;0<$t-Rt;)jt=vf(jt),$t--;for(;0<Rt-$t;)St=vf(St),Rt--;for(;$t--;){if(jt===St||St!==null&&jt===St.alternate)break t;jt=vf(jt),St=vf(St)}jt=null}else jt=null;Ct!==null&&wf(wt,kt,Ct,jt,!1),bt!==null&&Pt!==null&&wf(wt,Pt,bt,jt,!0)}}e:{if(kt=xt?ue$2(xt):window,Ct=kt.nodeName&&kt.nodeName.toLowerCase(),Ct==="select"||Ct==="input"&&kt.type==="file")var Nt=ve$2;else if(me(kt))if(we$1)Nt=Fe$1;else{Nt=De$1;var At=Ce$1}else(Ct=kt.nodeName)&&Ct.toLowerCase()==="input"&&(kt.type==="checkbox"||kt.type==="radio")&&(Nt=Ee$2);if(Nt&&(Nt=Nt(tt,xt))){ne$2(wt,Nt,ot,Et);break e}At&&At(tt,kt,xt),tt==="focusout"&&(At=kt._wrapperState)&&At.controlled&&kt.type==="number"&&cb(kt,"number",kt.value)}switch(At=xt?ue$2(xt):window,tt){case"focusin":(me(At)||At.contentEditable==="true")&&(Qe$1=At,Re$2=xt,Se$2=null);break;case"focusout":Se$2=Re$2=Qe$1=null;break;case"mousedown":Te$2=!0;break;case"contextmenu":case"mouseup":case"dragend":Te$2=!1,Ue$1(wt,ot,Et);break;case"selectionchange":if(Pe$1)break;case"keydown":case"keyup":Ue$1(wt,ot,Et)}var Ot;if(ae$1)e:{switch(tt){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else ie$1?ge$2(tt,ot)&&(It="onCompositionEnd"):tt==="keydown"&&ot.keyCode===229&&(It="onCompositionStart");It&&(de$1&&ot.locale!=="ko"&&(ie$1||It!=="onCompositionStart"?It==="onCompositionEnd"&&ie$1&&(Ot=nd()):(kd=Et,ld="value"in kd?kd.value:kd.textContent,ie$1=!0)),At=oe$2(xt,It),0<At.length&&(It=new Ld(It,tt,null,ot,Et),wt.push({event:It,listeners:At}),Ot?It.data=Ot:(Ot=he$2(ot),Ot!==null&&(It.data=Ot)))),(Ot=ce$1?je$1(tt,ot):ke$1(tt,ot))&&(xt=oe$2(xt,"onBeforeInput"),0<xt.length&&(Et=new Ld("onBeforeInput","beforeinput",null,ot,Et),wt.push({event:Et,listeners:xt}),Et.data=Ot))}se$2(wt,nt)})}function tf(tt,nt,ot){return{instance:tt,listener:nt,currentTarget:ot}}function oe$2(tt,nt){for(var ot=nt+"Capture",st=[];tt!==null;){var ft=tt,ht=ft.stateNode;ft.tag===5&&ht!==null&&(ft=ht,ht=Kb(tt,ot),ht!=null&&st.unshift(tf(tt,ht,ft)),ht=Kb(tt,nt),ht!=null&&st.push(tf(tt,ht,ft))),tt=tt.return}return st}function vf(tt){if(tt===null)return null;do tt=tt.return;while(tt&&tt.tag!==5);return tt||null}function wf(tt,nt,ot,st,ft){for(var ht=nt._reactName,gt=[];ot!==null&&ot!==st;){var yt=ot,vt=yt.alternate,xt=yt.stateNode;if(vt!==null&&vt===st)break;yt.tag===5&&xt!==null&&(yt=xt,ft?(vt=Kb(ot,ht),vt!=null&&gt.unshift(tf(ot,vt,yt))):ft||(vt=Kb(ot,ht),vt!=null&&gt.push(tf(ot,vt,yt)))),ot=ot.return}gt.length!==0&&tt.push({event:nt,listeners:gt})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(tt){return(typeof tt=="string"?tt:""+tt).replace(xf,`
`).replace(yf,"")}function Af(tt,nt,ot){if(nt=zf(nt),zf(tt)!==nt&&ot)throw Error(p$1(425))}function Bf(){}var Cf=null,Df=null;function Ef(tt,nt){return tt==="textarea"||tt==="noscript"||typeof nt.children=="string"||typeof nt.children=="number"||typeof nt.dangerouslySetInnerHTML=="object"&&nt.dangerouslySetInnerHTML!==null&&nt.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(tt){return Hf.resolve(null).then(tt).catch(If)}:Ff;function If(tt){setTimeout(function(){throw tt})}function Kf(tt,nt){var ot=nt,st=0;do{var ft=ot.nextSibling;if(tt.removeChild(ot),ft&&ft.nodeType===8)if(ot=ft.data,ot==="/$"){if(st===0){tt.removeChild(ft),bd(nt);return}st--}else ot!=="$"&&ot!=="$?"&&ot!=="$!"||st++;ot=ft}while(ot);bd(nt)}function Lf(tt){for(;tt!=null;tt=tt.nextSibling){var nt=tt.nodeType;if(nt===1||nt===3)break;if(nt===8){if(nt=tt.data,nt==="$"||nt==="$!"||nt==="$?")break;if(nt==="/$")return null}}return tt}function Mf(tt){tt=tt.previousSibling;for(var nt=0;tt;){if(tt.nodeType===8){var ot=tt.data;if(ot==="$"||ot==="$!"||ot==="$?"){if(nt===0)return tt;nt--}else ot==="/$"&&nt++}tt=tt.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(tt){var nt=tt[Of];if(nt)return nt;for(var ot=tt.parentNode;ot;){if(nt=ot[uf]||ot[Of]){if(ot=nt.alternate,nt.child!==null||ot!==null&&ot.child!==null)for(tt=Mf(tt);tt!==null;){if(ot=tt[Of])return ot;tt=Mf(tt)}return nt}tt=ot,ot=tt.parentNode}return null}function Cb(tt){return tt=tt[Of]||tt[uf],!tt||tt.tag!==5&&tt.tag!==6&&tt.tag!==13&&tt.tag!==3?null:tt}function ue$2(tt){if(tt.tag===5||tt.tag===6)return tt.stateNode;throw Error(p$1(33))}function Db(tt){return tt[Pf]||null}var Sf=[],Tf=-1;function Uf(tt){return{current:tt}}function E(tt){0>Tf||(tt.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G$2(tt,nt){Tf++,Sf[Tf]=tt.current,tt.current=nt}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(tt,nt){var ot=tt.type.contextTypes;if(!ot)return Vf;var st=tt.stateNode;if(st&&st.__reactInternalMemoizedUnmaskedChildContext===nt)return st.__reactInternalMemoizedMaskedChildContext;var ft={},ht;for(ht in ot)ft[ht]=nt[ht];return st&&(tt=tt.stateNode,tt.__reactInternalMemoizedUnmaskedChildContext=nt,tt.__reactInternalMemoizedMaskedChildContext=ft),ft}function Zf(tt){return tt=tt.childContextTypes,tt!=null}function $f(){E(Wf),E(H$1)}function ag(tt,nt,ot){if(H$1.current!==Vf)throw Error(p$1(168));G$2(H$1,nt),G$2(Wf,ot)}function bg(tt,nt,ot){var st=tt.stateNode;if(nt=nt.childContextTypes,typeof st.getChildContext!="function")return ot;st=st.getChildContext();for(var ft in st)if(!(ft in nt))throw Error(p$1(108,Ra(tt)||"Unknown",ft));return A$2({},ot,st)}function cg(tt){return tt=(tt=tt.stateNode)&&tt.__reactInternalMemoizedMergedChildContext||Vf,Xf=H$1.current,G$2(H$1,tt),G$2(Wf,Wf.current),!0}function dg(tt,nt,ot){var st=tt.stateNode;if(!st)throw Error(p$1(169));ot?(tt=bg(tt,nt,Xf),st.__reactInternalMemoizedMergedChildContext=tt,E(Wf),E(H$1),G$2(H$1,tt)):E(Wf),G$2(Wf,ot)}var eg=null,fg=!1,gg=!1;function hg(tt){eg===null?eg=[tt]:eg.push(tt)}function ig(tt){fg=!0,hg(tt)}function jg(){if(!gg&&eg!==null){gg=!0;var tt=0,nt=C$1;try{var ot=eg;for(C$1=1;tt<ot.length;tt++){var st=ot[tt];do st=st(!0);while(st!==null)}eg=null,fg=!1}catch(ft){throw eg!==null&&(eg=eg.slice(tt+1)),ac(fc,jg),ft}finally{C$1=nt,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(tt,nt){kg[lg++]=ng,kg[lg++]=mg,mg=tt,ng=nt}function ug(tt,nt,ot){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=tt;var st=rg;tt=sg;var ft=32-oc(st)-1;st&=~(1<<ft),ot+=1;var ht=32-oc(nt)+ft;if(30<ht){var gt=ft-ft%5;ht=(st&(1<<gt)-1).toString(32),st>>=gt,ft-=gt,rg=1<<32-oc(nt)+ft|ot<<ft|st,sg=ht+tt}else rg=1<<ht|ot<<ft|st,sg=tt}function vg(tt){tt.return!==null&&(tg(tt,1),ug(tt,1,0))}function wg(tt){for(;tt===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;tt===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I$2=!1,zg=null;function Ag(tt,nt){var ot=Bg(5,null,null,0);ot.elementType="DELETED",ot.stateNode=nt,ot.return=tt,nt=tt.deletions,nt===null?(tt.deletions=[ot],tt.flags|=16):nt.push(ot)}function Cg(tt,nt){switch(tt.tag){case 5:var ot=tt.type;return nt=nt.nodeType!==1||ot.toLowerCase()!==nt.nodeName.toLowerCase()?null:nt,nt!==null?(tt.stateNode=nt,xg=tt,yg=Lf(nt.firstChild),!0):!1;case 6:return nt=tt.pendingProps===""||nt.nodeType!==3?null:nt,nt!==null?(tt.stateNode=nt,xg=tt,yg=null,!0):!1;case 13:return nt=nt.nodeType!==8?null:nt,nt!==null?(ot=qg!==null?{id:rg,overflow:sg}:null,tt.memoizedState={dehydrated:nt,treeContext:ot,retryLane:1073741824},ot=Bg(18,null,null,0),ot.stateNode=nt,ot.return=tt,tt.child=ot,xg=tt,yg=null,!0):!1;default:return!1}}function Dg(tt){return(tt.mode&1)!==0&&(tt.flags&128)===0}function Eg(tt){if(I$2){var nt=yg;if(nt){var ot=nt;if(!Cg(tt,nt)){if(Dg(tt))throw Error(p$1(418));nt=Lf(ot.nextSibling);var st=xg;nt&&Cg(tt,nt)?Ag(st,ot):(tt.flags=tt.flags&-4097|2,I$2=!1,xg=tt)}}else{if(Dg(tt))throw Error(p$1(418));tt.flags=tt.flags&-4097|2,I$2=!1,xg=tt}}}function Fg(tt){for(tt=tt.return;tt!==null&&tt.tag!==5&&tt.tag!==3&&tt.tag!==13;)tt=tt.return;xg=tt}function Gg(tt){if(tt!==xg)return!1;if(!I$2)return Fg(tt),I$2=!0,!1;var nt;if((nt=tt.tag!==3)&&!(nt=tt.tag!==5)&&(nt=tt.type,nt=nt!=="head"&&nt!=="body"&&!Ef(tt.type,tt.memoizedProps)),nt&&(nt=yg)){if(Dg(tt))throw Hg(),Error(p$1(418));for(;nt;)Ag(tt,nt),nt=Lf(nt.nextSibling)}if(Fg(tt),tt.tag===13){if(tt=tt.memoizedState,tt=tt!==null?tt.dehydrated:null,!tt)throw Error(p$1(317));e:{for(tt=tt.nextSibling,nt=0;tt;){if(tt.nodeType===8){var ot=tt.data;if(ot==="/$"){if(nt===0){yg=Lf(tt.nextSibling);break e}nt--}else ot!=="$"&&ot!=="$!"&&ot!=="$?"||nt++}tt=tt.nextSibling}yg=null}}else yg=xg?Lf(tt.stateNode.nextSibling):null;return!0}function Hg(){for(var tt=yg;tt;)tt=Lf(tt.nextSibling)}function Ig(){yg=xg=null,I$2=!1}function Jg(tt){zg===null?zg=[tt]:zg.push(tt)}var Kg=ua.ReactCurrentBatchConfig;function Lg(tt,nt,ot){if(tt=ot.ref,tt!==null&&typeof tt!="function"&&typeof tt!="object"){if(ot._owner){if(ot=ot._owner,ot){if(ot.tag!==1)throw Error(p$1(309));var st=ot.stateNode}if(!st)throw Error(p$1(147,tt));var ft=st,ht=""+tt;return nt!==null&&nt.ref!==null&&typeof nt.ref=="function"&&nt.ref._stringRef===ht?nt.ref:(nt=function(gt){var yt=ft.refs;gt===null?delete yt[ht]:yt[ht]=gt},nt._stringRef=ht,nt)}if(typeof tt!="string")throw Error(p$1(284));if(!ot._owner)throw Error(p$1(290,tt))}return tt}function Mg(tt,nt){throw tt=Object.prototype.toString.call(nt),Error(p$1(31,tt==="[object Object]"?"object with keys {"+Object.keys(nt).join(", ")+"}":tt))}function Ng(tt){var nt=tt._init;return nt(tt._payload)}function Og(tt){function nt(St,$t){if(tt){var Rt=St.deletions;Rt===null?(St.deletions=[$t],St.flags|=16):Rt.push($t)}}function ot(St,$t){if(!tt)return null;for(;$t!==null;)nt(St,$t),$t=$t.sibling;return null}function st(St,$t){for(St=new Map;$t!==null;)$t.key!==null?St.set($t.key,$t):St.set($t.index,$t),$t=$t.sibling;return St}function ft(St,$t){return St=Pg(St,$t),St.index=0,St.sibling=null,St}function ht(St,$t,Rt){return St.index=Rt,tt?(Rt=St.alternate,Rt!==null?(Rt=Rt.index,Rt<$t?(St.flags|=2,$t):Rt):(St.flags|=2,$t)):(St.flags|=1048576,$t)}function gt(St){return tt&&St.alternate===null&&(St.flags|=2),St}function yt(St,$t,Rt,Tt){return $t===null||$t.tag!==6?($t=Qg(Rt,St.mode,Tt),$t.return=St,$t):($t=ft($t,Rt),$t.return=St,$t)}function vt(St,$t,Rt,Tt){var Nt=Rt.type;return Nt===ya?Et(St,$t,Rt.props.children,Tt,Rt.key):$t!==null&&($t.elementType===Nt||typeof Nt=="object"&&Nt!==null&&Nt.$$typeof===Ha&&Ng(Nt)===$t.type)?(Tt=ft($t,Rt.props),Tt.ref=Lg(St,$t,Rt),Tt.return=St,Tt):(Tt=Rg(Rt.type,Rt.key,Rt.props,null,St.mode,Tt),Tt.ref=Lg(St,$t,Rt),Tt.return=St,Tt)}function xt(St,$t,Rt,Tt){return $t===null||$t.tag!==4||$t.stateNode.containerInfo!==Rt.containerInfo||$t.stateNode.implementation!==Rt.implementation?($t=Sg(Rt,St.mode,Tt),$t.return=St,$t):($t=ft($t,Rt.children||[]),$t.return=St,$t)}function Et(St,$t,Rt,Tt,Nt){return $t===null||$t.tag!==7?($t=Tg(Rt,St.mode,Tt,Nt),$t.return=St,$t):($t=ft($t,Rt),$t.return=St,$t)}function wt(St,$t,Rt){if(typeof $t=="string"&&$t!==""||typeof $t=="number")return $t=Qg(""+$t,St.mode,Rt),$t.return=St,$t;if(typeof $t=="object"&&$t!==null){switch($t.$$typeof){case va:return Rt=Rg($t.type,$t.key,$t.props,null,St.mode,Rt),Rt.ref=Lg(St,null,$t),Rt.return=St,Rt;case wa:return $t=Sg($t,St.mode,Rt),$t.return=St,$t;case Ha:var Tt=$t._init;return wt(St,Tt($t._payload),Rt)}if(eb($t)||Ka($t))return $t=Tg($t,St.mode,Rt,null),$t.return=St,$t;Mg(St,$t)}return null}function kt(St,$t,Rt,Tt){var Nt=$t!==null?$t.key:null;if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number")return Nt!==null?null:yt(St,$t,""+Rt,Tt);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case va:return Rt.key===Nt?vt(St,$t,Rt,Tt):null;case wa:return Rt.key===Nt?xt(St,$t,Rt,Tt):null;case Ha:return Nt=Rt._init,kt(St,$t,Nt(Rt._payload),Tt)}if(eb(Rt)||Ka(Rt))return Nt!==null?null:Et(St,$t,Rt,Tt,null);Mg(St,Rt)}return null}function Ct(St,$t,Rt,Tt,Nt){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number")return St=St.get(Rt)||null,yt($t,St,""+Tt,Nt);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case va:return St=St.get(Tt.key===null?Rt:Tt.key)||null,vt($t,St,Tt,Nt);case wa:return St=St.get(Tt.key===null?Rt:Tt.key)||null,xt($t,St,Tt,Nt);case Ha:var At=Tt._init;return Ct(St,$t,Rt,At(Tt._payload),Nt)}if(eb(Tt)||Ka(Tt))return St=St.get(Rt)||null,Et($t,St,Tt,Nt,null);Mg($t,Tt)}return null}function bt(St,$t,Rt,Tt){for(var Nt=null,At=null,Ot=$t,It=$t=0,Ut=null;Ot!==null&&It<Rt.length;It++){Ot.index>It?(Ut=Ot,Ot=null):Ut=Ot.sibling;var Ft=kt(St,Ot,Rt[It],Tt);if(Ft===null){Ot===null&&(Ot=Ut);break}tt&&Ot&&Ft.alternate===null&&nt(St,Ot),$t=ht(Ft,$t,It),At===null?Nt=Ft:At.sibling=Ft,At=Ft,Ot=Ut}if(It===Rt.length)return ot(St,Ot),I$2&&tg(St,It),Nt;if(Ot===null){for(;It<Rt.length;It++)Ot=wt(St,Rt[It],Tt),Ot!==null&&($t=ht(Ot,$t,It),At===null?Nt=Ot:At.sibling=Ot,At=Ot);return I$2&&tg(St,It),Nt}for(Ot=st(St,Ot);It<Rt.length;It++)Ut=Ct(Ot,St,It,Rt[It],Tt),Ut!==null&&(tt&&Ut.alternate!==null&&Ot.delete(Ut.key===null?It:Ut.key),$t=ht(Ut,$t,It),At===null?Nt=Ut:At.sibling=Ut,At=Ut);return tt&&Ot.forEach(function(Vt){return nt(St,Vt)}),I$2&&tg(St,It),Nt}function jt(St,$t,Rt,Tt){var Nt=Ka(Rt);if(typeof Nt!="function")throw Error(p$1(150));if(Rt=Nt.call(Rt),Rt==null)throw Error(p$1(151));for(var At=Nt=null,Ot=$t,It=$t=0,Ut=null,Ft=Rt.next();Ot!==null&&!Ft.done;It++,Ft=Rt.next()){Ot.index>It?(Ut=Ot,Ot=null):Ut=Ot.sibling;var Vt=kt(St,Ot,Ft.value,Tt);if(Vt===null){Ot===null&&(Ot=Ut);break}tt&&Ot&&Vt.alternate===null&&nt(St,Ot),$t=ht(Vt,$t,It),At===null?Nt=Vt:At.sibling=Vt,At=Vt,Ot=Ut}if(Ft.done)return ot(St,Ot),I$2&&tg(St,It),Nt;if(Ot===null){for(;!Ft.done;It++,Ft=Rt.next())Ft=wt(St,Ft.value,Tt),Ft!==null&&($t=ht(Ft,$t,It),At===null?Nt=Ft:At.sibling=Ft,At=Ft);return I$2&&tg(St,It),Nt}for(Ot=st(St,Ot);!Ft.done;It++,Ft=Rt.next())Ft=Ct(Ot,St,It,Ft.value,Tt),Ft!==null&&(tt&&Ft.alternate!==null&&Ot.delete(Ft.key===null?It:Ft.key),$t=ht(Ft,$t,It),At===null?Nt=Ft:At.sibling=Ft,At=Ft);return tt&&Ot.forEach(function(Xt){return nt(St,Xt)}),I$2&&tg(St,It),Nt}function Pt(St,$t,Rt,Tt){if(typeof Rt=="object"&&Rt!==null&&Rt.type===ya&&Rt.key===null&&(Rt=Rt.props.children),typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case va:e:{for(var Nt=Rt.key,At=$t;At!==null;){if(At.key===Nt){if(Nt=Rt.type,Nt===ya){if(At.tag===7){ot(St,At.sibling),$t=ft(At,Rt.props.children),$t.return=St,St=$t;break e}}else if(At.elementType===Nt||typeof Nt=="object"&&Nt!==null&&Nt.$$typeof===Ha&&Ng(Nt)===At.type){ot(St,At.sibling),$t=ft(At,Rt.props),$t.ref=Lg(St,At,Rt),$t.return=St,St=$t;break e}ot(St,At);break}else nt(St,At);At=At.sibling}Rt.type===ya?($t=Tg(Rt.props.children,St.mode,Tt,Rt.key),$t.return=St,St=$t):(Tt=Rg(Rt.type,Rt.key,Rt.props,null,St.mode,Tt),Tt.ref=Lg(St,$t,Rt),Tt.return=St,St=Tt)}return gt(St);case wa:e:{for(At=Rt.key;$t!==null;){if($t.key===At)if($t.tag===4&&$t.stateNode.containerInfo===Rt.containerInfo&&$t.stateNode.implementation===Rt.implementation){ot(St,$t.sibling),$t=ft($t,Rt.children||[]),$t.return=St,St=$t;break e}else{ot(St,$t);break}else nt(St,$t);$t=$t.sibling}$t=Sg(Rt,St.mode,Tt),$t.return=St,St=$t}return gt(St);case Ha:return At=Rt._init,Pt(St,$t,At(Rt._payload),Tt)}if(eb(Rt))return bt(St,$t,Rt,Tt);if(Ka(Rt))return jt(St,$t,Rt,Tt);Mg(St,Rt)}return typeof Rt=="string"&&Rt!==""||typeof Rt=="number"?(Rt=""+Rt,$t!==null&&$t.tag===6?(ot(St,$t.sibling),$t=ft($t,Rt),$t.return=St,St=$t):(ot(St,$t),$t=Qg(Rt,St.mode,Tt),$t.return=St,St=$t),gt(St)):ot(St,$t)}return Pt}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(tt){var nt=Wg.current;E(Wg),tt._currentValue=nt}function bh(tt,nt,ot){for(;tt!==null;){var st=tt.alternate;if((tt.childLanes&nt)!==nt?(tt.childLanes|=nt,st!==null&&(st.childLanes|=nt)):st!==null&&(st.childLanes&nt)!==nt&&(st.childLanes|=nt),tt===ot)break;tt=tt.return}}function ch(tt,nt){Xg=tt,Zg=Yg=null,tt=tt.dependencies,tt!==null&&tt.firstContext!==null&&(tt.lanes&nt&&(dh=!0),tt.firstContext=null)}function eh(tt){var nt=tt._currentValue;if(Zg!==tt)if(tt={context:tt,memoizedValue:nt,next:null},Yg===null){if(Xg===null)throw Error(p$1(308));Yg=tt,Xg.dependencies={lanes:0,firstContext:tt}}else Yg=Yg.next=tt;return nt}var fh=null;function gh(tt){fh===null?fh=[tt]:fh.push(tt)}function hh(tt,nt,ot,st){var ft=nt.interleaved;return ft===null?(ot.next=ot,gh(nt)):(ot.next=ft.next,ft.next=ot),nt.interleaved=ot,ih(tt,st)}function ih(tt,nt){tt.lanes|=nt;var ot=tt.alternate;for(ot!==null&&(ot.lanes|=nt),ot=tt,tt=tt.return;tt!==null;)tt.childLanes|=nt,ot=tt.alternate,ot!==null&&(ot.childLanes|=nt),ot=tt,tt=tt.return;return ot.tag===3?ot.stateNode:null}var jh=!1;function kh(tt){tt.updateQueue={baseState:tt.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(tt,nt){tt=tt.updateQueue,nt.updateQueue===tt&&(nt.updateQueue={baseState:tt.baseState,firstBaseUpdate:tt.firstBaseUpdate,lastBaseUpdate:tt.lastBaseUpdate,shared:tt.shared,effects:tt.effects})}function mh(tt,nt){return{eventTime:tt,lane:nt,tag:0,payload:null,callback:null,next:null}}function nh(tt,nt,ot){var st=tt.updateQueue;if(st===null)return null;if(st=st.shared,K$1&2){var ft=st.pending;return ft===null?nt.next=nt:(nt.next=ft.next,ft.next=nt),st.pending=nt,ih(tt,ot)}return ft=st.interleaved,ft===null?(nt.next=nt,gh(st)):(nt.next=ft.next,ft.next=nt),st.interleaved=nt,ih(tt,ot)}function oh(tt,nt,ot){if(nt=nt.updateQueue,nt!==null&&(nt=nt.shared,(ot&4194240)!==0)){var st=nt.lanes;st&=tt.pendingLanes,ot|=st,nt.lanes=ot,Cc(tt,ot)}}function ph(tt,nt){var ot=tt.updateQueue,st=tt.alternate;if(st!==null&&(st=st.updateQueue,ot===st)){var ft=null,ht=null;if(ot=ot.firstBaseUpdate,ot!==null){do{var gt={eventTime:ot.eventTime,lane:ot.lane,tag:ot.tag,payload:ot.payload,callback:ot.callback,next:null};ht===null?ft=ht=gt:ht=ht.next=gt,ot=ot.next}while(ot!==null);ht===null?ft=ht=nt:ht=ht.next=nt}else ft=ht=nt;ot={baseState:st.baseState,firstBaseUpdate:ft,lastBaseUpdate:ht,shared:st.shared,effects:st.effects},tt.updateQueue=ot;return}tt=ot.lastBaseUpdate,tt===null?ot.firstBaseUpdate=nt:tt.next=nt,ot.lastBaseUpdate=nt}function qh(tt,nt,ot,st){var ft=tt.updateQueue;jh=!1;var ht=ft.firstBaseUpdate,gt=ft.lastBaseUpdate,yt=ft.shared.pending;if(yt!==null){ft.shared.pending=null;var vt=yt,xt=vt.next;vt.next=null,gt===null?ht=xt:gt.next=xt,gt=vt;var Et=tt.alternate;Et!==null&&(Et=Et.updateQueue,yt=Et.lastBaseUpdate,yt!==gt&&(yt===null?Et.firstBaseUpdate=xt:yt.next=xt,Et.lastBaseUpdate=vt))}if(ht!==null){var wt=ft.baseState;gt=0,Et=xt=vt=null,yt=ht;do{var kt=yt.lane,Ct=yt.eventTime;if((st&kt)===kt){Et!==null&&(Et=Et.next={eventTime:Ct,lane:0,tag:yt.tag,payload:yt.payload,callback:yt.callback,next:null});e:{var bt=tt,jt=yt;switch(kt=nt,Ct=ot,jt.tag){case 1:if(bt=jt.payload,typeof bt=="function"){wt=bt.call(Ct,wt,kt);break e}wt=bt;break e;case 3:bt.flags=bt.flags&-65537|128;case 0:if(bt=jt.payload,kt=typeof bt=="function"?bt.call(Ct,wt,kt):bt,kt==null)break e;wt=A$2({},wt,kt);break e;case 2:jh=!0}}yt.callback!==null&&yt.lane!==0&&(tt.flags|=64,kt=ft.effects,kt===null?ft.effects=[yt]:kt.push(yt))}else Ct={eventTime:Ct,lane:kt,tag:yt.tag,payload:yt.payload,callback:yt.callback,next:null},Et===null?(xt=Et=Ct,vt=wt):Et=Et.next=Ct,gt|=kt;if(yt=yt.next,yt===null){if(yt=ft.shared.pending,yt===null)break;kt=yt,yt=kt.next,kt.next=null,ft.lastBaseUpdate=kt,ft.shared.pending=null}}while(!0);if(Et===null&&(vt=wt),ft.baseState=vt,ft.firstBaseUpdate=xt,ft.lastBaseUpdate=Et,nt=ft.shared.interleaved,nt!==null){ft=nt;do gt|=ft.lane,ft=ft.next;while(ft!==nt)}else ht===null&&(ft.shared.lanes=0);rh|=gt,tt.lanes=gt,tt.memoizedState=wt}}function sh(tt,nt,ot){if(tt=nt.effects,nt.effects=null,tt!==null)for(nt=0;nt<tt.length;nt++){var st=tt[nt],ft=st.callback;if(ft!==null){if(st.callback=null,st=ot,typeof ft!="function")throw Error(p$1(191,ft));ft.call(st)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(tt){if(tt===th)throw Error(p$1(174));return tt}function yh(tt,nt){switch(G$2(wh,nt),G$2(vh,tt),G$2(uh,th),tt=nt.nodeType,tt){case 9:case 11:nt=(nt=nt.documentElement)?nt.namespaceURI:lb(null,"");break;default:tt=tt===8?nt.parentNode:nt,nt=tt.namespaceURI||null,tt=tt.tagName,nt=lb(nt,tt)}E(uh),G$2(uh,nt)}function zh(){E(uh),E(vh),E(wh)}function Ah(tt){xh(wh.current);var nt=xh(uh.current),ot=lb(nt,tt.type);nt!==ot&&(G$2(vh,tt),G$2(uh,ot))}function Bh(tt){vh.current===tt&&(E(uh),E(vh))}var L$1=Uf(0);function Ch(tt){for(var nt=tt;nt!==null;){if(nt.tag===13){var ot=nt.memoizedState;if(ot!==null&&(ot=ot.dehydrated,ot===null||ot.data==="$?"||ot.data==="$!"))return nt}else if(nt.tag===19&&nt.memoizedProps.revealOrder!==void 0){if(nt.flags&128)return nt}else if(nt.child!==null){nt.child.return=nt,nt=nt.child;continue}if(nt===tt)break;for(;nt.sibling===null;){if(nt.return===null||nt.return===tt)return null;nt=nt.return}nt.sibling.return=nt.return,nt=nt.sibling}return null}var Dh=[];function Eh(){for(var tt=0;tt<Dh.length;tt++)Dh[tt]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M$2=null,N=null,O$2=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P$1(){throw Error(p$1(321))}function Mh(tt,nt){if(nt===null)return!1;for(var ot=0;ot<nt.length&&ot<tt.length;ot++)if(!He$1(tt[ot],nt[ot]))return!1;return!0}function Nh(tt,nt,ot,st,ft,ht){if(Hh=ht,M$2=nt,nt.memoizedState=null,nt.updateQueue=null,nt.lanes=0,Fh.current=tt===null||tt.memoizedState===null?Oh:Ph,tt=ot(st,ft),Jh){ht=0;do{if(Jh=!1,Kh=0,25<=ht)throw Error(p$1(301));ht+=1,O$2=N=null,nt.updateQueue=null,Fh.current=Qh,tt=ot(st,ft)}while(Jh)}if(Fh.current=Rh,nt=N!==null&&N.next!==null,Hh=0,O$2=N=M$2=null,Ih=!1,nt)throw Error(p$1(300));return tt}function Sh(){var tt=Kh!==0;return Kh=0,tt}function Th(){var tt={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O$2===null?M$2.memoizedState=O$2=tt:O$2=O$2.next=tt,O$2}function Uh(){if(N===null){var tt=M$2.alternate;tt=tt!==null?tt.memoizedState:null}else tt=N.next;var nt=O$2===null?M$2.memoizedState:O$2.next;if(nt!==null)O$2=nt,N=tt;else{if(tt===null)throw Error(p$1(310));N=tt,tt={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O$2===null?M$2.memoizedState=O$2=tt:O$2=O$2.next=tt}return O$2}function Vh(tt,nt){return typeof nt=="function"?nt(tt):nt}function Wh(tt){var nt=Uh(),ot=nt.queue;if(ot===null)throw Error(p$1(311));ot.lastRenderedReducer=tt;var st=N,ft=st.baseQueue,ht=ot.pending;if(ht!==null){if(ft!==null){var gt=ft.next;ft.next=ht.next,ht.next=gt}st.baseQueue=ft=ht,ot.pending=null}if(ft!==null){ht=ft.next,st=st.baseState;var yt=gt=null,vt=null,xt=ht;do{var Et=xt.lane;if((Hh&Et)===Et)vt!==null&&(vt=vt.next={lane:0,action:xt.action,hasEagerState:xt.hasEagerState,eagerState:xt.eagerState,next:null}),st=xt.hasEagerState?xt.eagerState:tt(st,xt.action);else{var wt={lane:Et,action:xt.action,hasEagerState:xt.hasEagerState,eagerState:xt.eagerState,next:null};vt===null?(yt=vt=wt,gt=st):vt=vt.next=wt,M$2.lanes|=Et,rh|=Et}xt=xt.next}while(xt!==null&&xt!==ht);vt===null?gt=st:vt.next=yt,He$1(st,nt.memoizedState)||(dh=!0),nt.memoizedState=st,nt.baseState=gt,nt.baseQueue=vt,ot.lastRenderedState=st}if(tt=ot.interleaved,tt!==null){ft=tt;do ht=ft.lane,M$2.lanes|=ht,rh|=ht,ft=ft.next;while(ft!==tt)}else ft===null&&(ot.lanes=0);return[nt.memoizedState,ot.dispatch]}function Xh(tt){var nt=Uh(),ot=nt.queue;if(ot===null)throw Error(p$1(311));ot.lastRenderedReducer=tt;var st=ot.dispatch,ft=ot.pending,ht=nt.memoizedState;if(ft!==null){ot.pending=null;var gt=ft=ft.next;do ht=tt(ht,gt.action),gt=gt.next;while(gt!==ft);He$1(ht,nt.memoizedState)||(dh=!0),nt.memoizedState=ht,nt.baseQueue===null&&(nt.baseState=ht),ot.lastRenderedState=ht}return[ht,st]}function Yh(){}function Zh(tt,nt){var ot=M$2,st=Uh(),ft=nt(),ht=!He$1(st.memoizedState,ft);if(ht&&(st.memoizedState=ft,dh=!0),st=st.queue,$h(ai.bind(null,ot,st,tt),[tt]),st.getSnapshot!==nt||ht||O$2!==null&&O$2.memoizedState.tag&1){if(ot.flags|=2048,bi(9,ci.bind(null,ot,st,ft,nt),void 0,null),Q$2===null)throw Error(p$1(349));Hh&30||di(ot,nt,ft)}return ft}function di(tt,nt,ot){tt.flags|=16384,tt={getSnapshot:nt,value:ot},nt=M$2.updateQueue,nt===null?(nt={lastEffect:null,stores:null},M$2.updateQueue=nt,nt.stores=[tt]):(ot=nt.stores,ot===null?nt.stores=[tt]:ot.push(tt))}function ci(tt,nt,ot,st){nt.value=ot,nt.getSnapshot=st,ei(nt)&&fi(tt)}function ai(tt,nt,ot){return ot(function(){ei(nt)&&fi(tt)})}function ei(tt){var nt=tt.getSnapshot;tt=tt.value;try{var ot=nt();return!He$1(tt,ot)}catch{return!0}}function fi(tt){var nt=ih(tt,1);nt!==null&&gi(nt,tt,1,-1)}function hi(tt){var nt=Th();return typeof tt=="function"&&(tt=tt()),nt.memoizedState=nt.baseState=tt,tt={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:tt},nt.queue=tt,tt=tt.dispatch=ii.bind(null,M$2,tt),[nt.memoizedState,tt]}function bi(tt,nt,ot,st){return tt={tag:tt,create:nt,destroy:ot,deps:st,next:null},nt=M$2.updateQueue,nt===null?(nt={lastEffect:null,stores:null},M$2.updateQueue=nt,nt.lastEffect=tt.next=tt):(ot=nt.lastEffect,ot===null?nt.lastEffect=tt.next=tt:(st=ot.next,ot.next=tt,tt.next=st,nt.lastEffect=tt)),tt}function ji(){return Uh().memoizedState}function ki(tt,nt,ot,st){var ft=Th();M$2.flags|=tt,ft.memoizedState=bi(1|nt,ot,void 0,st===void 0?null:st)}function li(tt,nt,ot,st){var ft=Uh();st=st===void 0?null:st;var ht=void 0;if(N!==null){var gt=N.memoizedState;if(ht=gt.destroy,st!==null&&Mh(st,gt.deps)){ft.memoizedState=bi(nt,ot,ht,st);return}}M$2.flags|=tt,ft.memoizedState=bi(1|nt,ot,ht,st)}function mi(tt,nt){return ki(8390656,8,tt,nt)}function $h(tt,nt){return li(2048,8,tt,nt)}function ni(tt,nt){return li(4,2,tt,nt)}function oi(tt,nt){return li(4,4,tt,nt)}function pi(tt,nt){if(typeof nt=="function")return tt=tt(),nt(tt),function(){nt(null)};if(nt!=null)return tt=tt(),nt.current=tt,function(){nt.current=null}}function qi(tt,nt,ot){return ot=ot!=null?ot.concat([tt]):null,li(4,4,pi.bind(null,nt,tt),ot)}function ri(){}function si(tt,nt){var ot=Uh();nt=nt===void 0?null:nt;var st=ot.memoizedState;return st!==null&&nt!==null&&Mh(nt,st[1])?st[0]:(ot.memoizedState=[tt,nt],tt)}function ti(tt,nt){var ot=Uh();nt=nt===void 0?null:nt;var st=ot.memoizedState;return st!==null&&nt!==null&&Mh(nt,st[1])?st[0]:(tt=tt(),ot.memoizedState=[tt,nt],tt)}function ui(tt,nt,ot){return Hh&21?(He$1(ot,nt)||(ot=yc(),M$2.lanes|=ot,rh|=ot,tt.baseState=!0),nt):(tt.baseState&&(tt.baseState=!1,dh=!0),tt.memoizedState=ot)}function vi(tt,nt){var ot=C$1;C$1=ot!==0&&4>ot?ot:4,tt(!0);var st=Gh.transition;Gh.transition={};try{tt(!1),nt()}finally{C$1=ot,Gh.transition=st}}function wi(){return Uh().memoizedState}function xi(tt,nt,ot){var st=yi(tt);if(ot={lane:st,action:ot,hasEagerState:!1,eagerState:null,next:null},zi(tt))Ai(nt,ot);else if(ot=hh(tt,nt,ot,st),ot!==null){var ft=R$1();gi(ot,tt,st,ft),Bi(ot,nt,st)}}function ii(tt,nt,ot){var st=yi(tt),ft={lane:st,action:ot,hasEagerState:!1,eagerState:null,next:null};if(zi(tt))Ai(nt,ft);else{var ht=tt.alternate;if(tt.lanes===0&&(ht===null||ht.lanes===0)&&(ht=nt.lastRenderedReducer,ht!==null))try{var gt=nt.lastRenderedState,yt=ht(gt,ot);if(ft.hasEagerState=!0,ft.eagerState=yt,He$1(yt,gt)){var vt=nt.interleaved;vt===null?(ft.next=ft,gh(nt)):(ft.next=vt.next,vt.next=ft),nt.interleaved=ft;return}}catch{}finally{}ot=hh(tt,nt,ft,st),ot!==null&&(ft=R$1(),gi(ot,tt,st,ft),Bi(ot,nt,st))}}function zi(tt){var nt=tt.alternate;return tt===M$2||nt!==null&&nt===M$2}function Ai(tt,nt){Jh=Ih=!0;var ot=tt.pending;ot===null?nt.next=nt:(nt.next=ot.next,ot.next=nt),tt.pending=nt}function Bi(tt,nt,ot){if(ot&4194240){var st=nt.lanes;st&=tt.pendingLanes,ot|=st,nt.lanes=ot,Cc(tt,ot)}}var Rh={readContext:eh,useCallback:P$1,useContext:P$1,useEffect:P$1,useImperativeHandle:P$1,useInsertionEffect:P$1,useLayoutEffect:P$1,useMemo:P$1,useReducer:P$1,useRef:P$1,useState:P$1,useDebugValue:P$1,useDeferredValue:P$1,useTransition:P$1,useMutableSource:P$1,useSyncExternalStore:P$1,useId:P$1,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(tt,nt){return Th().memoizedState=[tt,nt===void 0?null:nt],tt},useContext:eh,useEffect:mi,useImperativeHandle:function(tt,nt,ot){return ot=ot!=null?ot.concat([tt]):null,ki(4194308,4,pi.bind(null,nt,tt),ot)},useLayoutEffect:function(tt,nt){return ki(4194308,4,tt,nt)},useInsertionEffect:function(tt,nt){return ki(4,2,tt,nt)},useMemo:function(tt,nt){var ot=Th();return nt=nt===void 0?null:nt,tt=tt(),ot.memoizedState=[tt,nt],tt},useReducer:function(tt,nt,ot){var st=Th();return nt=ot!==void 0?ot(nt):nt,st.memoizedState=st.baseState=nt,tt={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:nt},st.queue=tt,tt=tt.dispatch=xi.bind(null,M$2,tt),[st.memoizedState,tt]},useRef:function(tt){var nt=Th();return tt={current:tt},nt.memoizedState=tt},useState:hi,useDebugValue:ri,useDeferredValue:function(tt){return Th().memoizedState=tt},useTransition:function(){var tt=hi(!1),nt=tt[0];return tt=vi.bind(null,tt[1]),Th().memoizedState=tt,[nt,tt]},useMutableSource:function(){},useSyncExternalStore:function(tt,nt,ot){var st=M$2,ft=Th();if(I$2){if(ot===void 0)throw Error(p$1(407));ot=ot()}else{if(ot=nt(),Q$2===null)throw Error(p$1(349));Hh&30||di(st,nt,ot)}ft.memoizedState=ot;var ht={value:ot,getSnapshot:nt};return ft.queue=ht,mi(ai.bind(null,st,ht,tt),[tt]),st.flags|=2048,bi(9,ci.bind(null,st,ht,ot,nt),void 0,null),ot},useId:function(){var tt=Th(),nt=Q$2.identifierPrefix;if(I$2){var ot=sg,st=rg;ot=(st&~(1<<32-oc(st)-1)).toString(32)+ot,nt=":"+nt+"R"+ot,ot=Kh++,0<ot&&(nt+="H"+ot.toString(32)),nt+=":"}else ot=Lh++,nt=":"+nt+"r"+ot.toString(32)+":";return tt.memoizedState=nt},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(tt){var nt=Uh();return ui(nt,N.memoizedState,tt)},useTransition:function(){var tt=Wh(Vh)[0],nt=Uh().memoizedState;return[tt,nt]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(tt){var nt=Uh();return N===null?nt.memoizedState=tt:ui(nt,N.memoizedState,tt)},useTransition:function(){var tt=Xh(Vh)[0],nt=Uh().memoizedState;return[tt,nt]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(tt,nt){if(tt&&tt.defaultProps){nt=A$2({},nt),tt=tt.defaultProps;for(var ot in tt)nt[ot]===void 0&&(nt[ot]=tt[ot]);return nt}return nt}function Di(tt,nt,ot,st){nt=tt.memoizedState,ot=ot(st,nt),ot=ot==null?nt:A$2({},nt,ot),tt.memoizedState=ot,tt.lanes===0&&(tt.updateQueue.baseState=ot)}var Ei={isMounted:function(tt){return(tt=tt._reactInternals)?Vb(tt)===tt:!1},enqueueSetState:function(tt,nt,ot){tt=tt._reactInternals;var st=R$1(),ft=yi(tt),ht=mh(st,ft);ht.payload=nt,ot!=null&&(ht.callback=ot),nt=nh(tt,ht,ft),nt!==null&&(gi(nt,tt,ft,st),oh(nt,tt,ft))},enqueueReplaceState:function(tt,nt,ot){tt=tt._reactInternals;var st=R$1(),ft=yi(tt),ht=mh(st,ft);ht.tag=1,ht.payload=nt,ot!=null&&(ht.callback=ot),nt=nh(tt,ht,ft),nt!==null&&(gi(nt,tt,ft,st),oh(nt,tt,ft))},enqueueForceUpdate:function(tt,nt){tt=tt._reactInternals;var ot=R$1(),st=yi(tt),ft=mh(ot,st);ft.tag=2,nt!=null&&(ft.callback=nt),nt=nh(tt,ft,st),nt!==null&&(gi(nt,tt,st,ot),oh(nt,tt,st))}};function Fi(tt,nt,ot,st,ft,ht,gt){return tt=tt.stateNode,typeof tt.shouldComponentUpdate=="function"?tt.shouldComponentUpdate(st,ht,gt):nt.prototype&&nt.prototype.isPureReactComponent?!Ie$2(ot,st)||!Ie$2(ft,ht):!0}function Gi(tt,nt,ot){var st=!1,ft=Vf,ht=nt.contextType;return typeof ht=="object"&&ht!==null?ht=eh(ht):(ft=Zf(nt)?Xf:H$1.current,st=nt.contextTypes,ht=(st=st!=null)?Yf(tt,ft):Vf),nt=new nt(ot,ht),tt.memoizedState=nt.state!==null&&nt.state!==void 0?nt.state:null,nt.updater=Ei,tt.stateNode=nt,nt._reactInternals=tt,st&&(tt=tt.stateNode,tt.__reactInternalMemoizedUnmaskedChildContext=ft,tt.__reactInternalMemoizedMaskedChildContext=ht),nt}function Hi(tt,nt,ot,st){tt=nt.state,typeof nt.componentWillReceiveProps=="function"&&nt.componentWillReceiveProps(ot,st),typeof nt.UNSAFE_componentWillReceiveProps=="function"&&nt.UNSAFE_componentWillReceiveProps(ot,st),nt.state!==tt&&Ei.enqueueReplaceState(nt,nt.state,null)}function Ii(tt,nt,ot,st){var ft=tt.stateNode;ft.props=ot,ft.state=tt.memoizedState,ft.refs={},kh(tt);var ht=nt.contextType;typeof ht=="object"&&ht!==null?ft.context=eh(ht):(ht=Zf(nt)?Xf:H$1.current,ft.context=Yf(tt,ht)),ft.state=tt.memoizedState,ht=nt.getDerivedStateFromProps,typeof ht=="function"&&(Di(tt,nt,ht,ot),ft.state=tt.memoizedState),typeof nt.getDerivedStateFromProps=="function"||typeof ft.getSnapshotBeforeUpdate=="function"||typeof ft.UNSAFE_componentWillMount!="function"&&typeof ft.componentWillMount!="function"||(nt=ft.state,typeof ft.componentWillMount=="function"&&ft.componentWillMount(),typeof ft.UNSAFE_componentWillMount=="function"&&ft.UNSAFE_componentWillMount(),nt!==ft.state&&Ei.enqueueReplaceState(ft,ft.state,null),qh(tt,ot,ft,st),ft.state=tt.memoizedState),typeof ft.componentDidMount=="function"&&(tt.flags|=4194308)}function Ji(tt,nt){try{var ot="",st=nt;do ot+=Pa(st),st=st.return;while(st);var ft=ot}catch(ht){ft=`
Error generating stack: `+ht.message+`
`+ht.stack}return{value:tt,source:nt,stack:ft,digest:null}}function Ki(tt,nt,ot){return{value:tt,source:null,stack:ot??null,digest:nt??null}}function Li(tt,nt){try{console.error(nt.value)}catch(ot){setTimeout(function(){throw ot})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(tt,nt,ot){ot=mh(-1,ot),ot.tag=3,ot.payload={element:null};var st=nt.value;return ot.callback=function(){Oi||(Oi=!0,Pi=st),Li(tt,nt)},ot}function Qi(tt,nt,ot){ot=mh(-1,ot),ot.tag=3;var st=tt.type.getDerivedStateFromError;if(typeof st=="function"){var ft=nt.value;ot.payload=function(){return st(ft)},ot.callback=function(){Li(tt,nt)}}var ht=tt.stateNode;return ht!==null&&typeof ht.componentDidCatch=="function"&&(ot.callback=function(){Li(tt,nt),typeof st!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var gt=nt.stack;this.componentDidCatch(nt.value,{componentStack:gt!==null?gt:""})}),ot}function Si(tt,nt,ot){var st=tt.pingCache;if(st===null){st=tt.pingCache=new Mi;var ft=new Set;st.set(nt,ft)}else ft=st.get(nt),ft===void 0&&(ft=new Set,st.set(nt,ft));ft.has(ot)||(ft.add(ot),tt=Ti.bind(null,tt,nt,ot),nt.then(tt,tt))}function Ui(tt){do{var nt;if((nt=tt.tag===13)&&(nt=tt.memoizedState,nt=nt!==null?nt.dehydrated!==null:!0),nt)return tt;tt=tt.return}while(tt!==null);return null}function Vi(tt,nt,ot,st,ft){return tt.mode&1?(tt.flags|=65536,tt.lanes=ft,tt):(tt===nt?tt.flags|=65536:(tt.flags|=128,ot.flags|=131072,ot.flags&=-52805,ot.tag===1&&(ot.alternate===null?ot.tag=17:(nt=mh(-1,1),nt.tag=2,nh(ot,nt,1))),ot.lanes|=1),tt)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(tt,nt,ot,st){nt.child=tt===null?Vg(nt,null,ot,st):Ug(nt,tt.child,ot,st)}function Yi(tt,nt,ot,st,ft){ot=ot.render;var ht=nt.ref;return ch(nt,ft),st=Nh(tt,nt,ot,st,ht,ft),ot=Sh(),tt!==null&&!dh?(nt.updateQueue=tt.updateQueue,nt.flags&=-2053,tt.lanes&=~ft,Zi(tt,nt,ft)):(I$2&&ot&&vg(nt),nt.flags|=1,Xi(tt,nt,st,ft),nt.child)}function $i(tt,nt,ot,st,ft){if(tt===null){var ht=ot.type;return typeof ht=="function"&&!aj(ht)&&ht.defaultProps===void 0&&ot.compare===null&&ot.defaultProps===void 0?(nt.tag=15,nt.type=ht,bj(tt,nt,ht,st,ft)):(tt=Rg(ot.type,null,st,nt,nt.mode,ft),tt.ref=nt.ref,tt.return=nt,nt.child=tt)}if(ht=tt.child,!(tt.lanes&ft)){var gt=ht.memoizedProps;if(ot=ot.compare,ot=ot!==null?ot:Ie$2,ot(gt,st)&&tt.ref===nt.ref)return Zi(tt,nt,ft)}return nt.flags|=1,tt=Pg(ht,st),tt.ref=nt.ref,tt.return=nt,nt.child=tt}function bj(tt,nt,ot,st,ft){if(tt!==null){var ht=tt.memoizedProps;if(Ie$2(ht,st)&&tt.ref===nt.ref)if(dh=!1,nt.pendingProps=st=ht,(tt.lanes&ft)!==0)tt.flags&131072&&(dh=!0);else return nt.lanes=tt.lanes,Zi(tt,nt,ft)}return cj(tt,nt,ot,st,ft)}function dj(tt,nt,ot){var st=nt.pendingProps,ft=st.children,ht=tt!==null?tt.memoizedState:null;if(st.mode==="hidden")if(!(nt.mode&1))nt.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$2(ej,fj),fj|=ot;else{if(!(ot&1073741824))return tt=ht!==null?ht.baseLanes|ot:ot,nt.lanes=nt.childLanes=1073741824,nt.memoizedState={baseLanes:tt,cachePool:null,transitions:null},nt.updateQueue=null,G$2(ej,fj),fj|=tt,null;nt.memoizedState={baseLanes:0,cachePool:null,transitions:null},st=ht!==null?ht.baseLanes:ot,G$2(ej,fj),fj|=st}else ht!==null?(st=ht.baseLanes|ot,nt.memoizedState=null):st=ot,G$2(ej,fj),fj|=st;return Xi(tt,nt,ft,ot),nt.child}function gj(tt,nt){var ot=nt.ref;(tt===null&&ot!==null||tt!==null&&tt.ref!==ot)&&(nt.flags|=512,nt.flags|=2097152)}function cj(tt,nt,ot,st,ft){var ht=Zf(ot)?Xf:H$1.current;return ht=Yf(nt,ht),ch(nt,ft),ot=Nh(tt,nt,ot,st,ht,ft),st=Sh(),tt!==null&&!dh?(nt.updateQueue=tt.updateQueue,nt.flags&=-2053,tt.lanes&=~ft,Zi(tt,nt,ft)):(I$2&&st&&vg(nt),nt.flags|=1,Xi(tt,nt,ot,ft),nt.child)}function hj(tt,nt,ot,st,ft){if(Zf(ot)){var ht=!0;cg(nt)}else ht=!1;if(ch(nt,ft),nt.stateNode===null)ij(tt,nt),Gi(nt,ot,st),Ii(nt,ot,st,ft),st=!0;else if(tt===null){var gt=nt.stateNode,yt=nt.memoizedProps;gt.props=yt;var vt=gt.context,xt=ot.contextType;typeof xt=="object"&&xt!==null?xt=eh(xt):(xt=Zf(ot)?Xf:H$1.current,xt=Yf(nt,xt));var Et=ot.getDerivedStateFromProps,wt=typeof Et=="function"||typeof gt.getSnapshotBeforeUpdate=="function";wt||typeof gt.UNSAFE_componentWillReceiveProps!="function"&&typeof gt.componentWillReceiveProps!="function"||(yt!==st||vt!==xt)&&Hi(nt,gt,st,xt),jh=!1;var kt=nt.memoizedState;gt.state=kt,qh(nt,st,gt,ft),vt=nt.memoizedState,yt!==st||kt!==vt||Wf.current||jh?(typeof Et=="function"&&(Di(nt,ot,Et,st),vt=nt.memoizedState),(yt=jh||Fi(nt,ot,yt,st,kt,vt,xt))?(wt||typeof gt.UNSAFE_componentWillMount!="function"&&typeof gt.componentWillMount!="function"||(typeof gt.componentWillMount=="function"&&gt.componentWillMount(),typeof gt.UNSAFE_componentWillMount=="function"&&gt.UNSAFE_componentWillMount()),typeof gt.componentDidMount=="function"&&(nt.flags|=4194308)):(typeof gt.componentDidMount=="function"&&(nt.flags|=4194308),nt.memoizedProps=st,nt.memoizedState=vt),gt.props=st,gt.state=vt,gt.context=xt,st=yt):(typeof gt.componentDidMount=="function"&&(nt.flags|=4194308),st=!1)}else{gt=nt.stateNode,lh(tt,nt),yt=nt.memoizedProps,xt=nt.type===nt.elementType?yt:Ci(nt.type,yt),gt.props=xt,wt=nt.pendingProps,kt=gt.context,vt=ot.contextType,typeof vt=="object"&&vt!==null?vt=eh(vt):(vt=Zf(ot)?Xf:H$1.current,vt=Yf(nt,vt));var Ct=ot.getDerivedStateFromProps;(Et=typeof Ct=="function"||typeof gt.getSnapshotBeforeUpdate=="function")||typeof gt.UNSAFE_componentWillReceiveProps!="function"&&typeof gt.componentWillReceiveProps!="function"||(yt!==wt||kt!==vt)&&Hi(nt,gt,st,vt),jh=!1,kt=nt.memoizedState,gt.state=kt,qh(nt,st,gt,ft);var bt=nt.memoizedState;yt!==wt||kt!==bt||Wf.current||jh?(typeof Ct=="function"&&(Di(nt,ot,Ct,st),bt=nt.memoizedState),(xt=jh||Fi(nt,ot,xt,st,kt,bt,vt)||!1)?(Et||typeof gt.UNSAFE_componentWillUpdate!="function"&&typeof gt.componentWillUpdate!="function"||(typeof gt.componentWillUpdate=="function"&&gt.componentWillUpdate(st,bt,vt),typeof gt.UNSAFE_componentWillUpdate=="function"&&gt.UNSAFE_componentWillUpdate(st,bt,vt)),typeof gt.componentDidUpdate=="function"&&(nt.flags|=4),typeof gt.getSnapshotBeforeUpdate=="function"&&(nt.flags|=1024)):(typeof gt.componentDidUpdate!="function"||yt===tt.memoizedProps&&kt===tt.memoizedState||(nt.flags|=4),typeof gt.getSnapshotBeforeUpdate!="function"||yt===tt.memoizedProps&&kt===tt.memoizedState||(nt.flags|=1024),nt.memoizedProps=st,nt.memoizedState=bt),gt.props=st,gt.state=bt,gt.context=vt,st=xt):(typeof gt.componentDidUpdate!="function"||yt===tt.memoizedProps&&kt===tt.memoizedState||(nt.flags|=4),typeof gt.getSnapshotBeforeUpdate!="function"||yt===tt.memoizedProps&&kt===tt.memoizedState||(nt.flags|=1024),st=!1)}return jj(tt,nt,ot,st,ht,ft)}function jj(tt,nt,ot,st,ft,ht){gj(tt,nt);var gt=(nt.flags&128)!==0;if(!st&&!gt)return ft&&dg(nt,ot,!1),Zi(tt,nt,ht);st=nt.stateNode,Wi.current=nt;var yt=gt&&typeof ot.getDerivedStateFromError!="function"?null:st.render();return nt.flags|=1,tt!==null&&gt?(nt.child=Ug(nt,tt.child,null,ht),nt.child=Ug(nt,null,yt,ht)):Xi(tt,nt,yt,ht),nt.memoizedState=st.state,ft&&dg(nt,ot,!0),nt.child}function kj(tt){var nt=tt.stateNode;nt.pendingContext?ag(tt,nt.pendingContext,nt.pendingContext!==nt.context):nt.context&&ag(tt,nt.context,!1),yh(tt,nt.containerInfo)}function lj(tt,nt,ot,st,ft){return Ig(),Jg(ft),nt.flags|=256,Xi(tt,nt,ot,st),nt.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(tt){return{baseLanes:tt,cachePool:null,transitions:null}}function oj(tt,nt,ot){var st=nt.pendingProps,ft=L$1.current,ht=!1,gt=(nt.flags&128)!==0,yt;if((yt=gt)||(yt=tt!==null&&tt.memoizedState===null?!1:(ft&2)!==0),yt?(ht=!0,nt.flags&=-129):(tt===null||tt.memoizedState!==null)&&(ft|=1),G$2(L$1,ft&1),tt===null)return Eg(nt),tt=nt.memoizedState,tt!==null&&(tt=tt.dehydrated,tt!==null)?(nt.mode&1?tt.data==="$!"?nt.lanes=8:nt.lanes=1073741824:nt.lanes=1,null):(gt=st.children,tt=st.fallback,ht?(st=nt.mode,ht=nt.child,gt={mode:"hidden",children:gt},!(st&1)&&ht!==null?(ht.childLanes=0,ht.pendingProps=gt):ht=pj(gt,st,0,null),tt=Tg(tt,st,ot,null),ht.return=nt,tt.return=nt,ht.sibling=tt,nt.child=ht,nt.child.memoizedState=nj(ot),nt.memoizedState=mj,tt):qj(nt,gt));if(ft=tt.memoizedState,ft!==null&&(yt=ft.dehydrated,yt!==null))return rj(tt,nt,gt,st,yt,ft,ot);if(ht){ht=st.fallback,gt=nt.mode,ft=tt.child,yt=ft.sibling;var vt={mode:"hidden",children:st.children};return!(gt&1)&&nt.child!==ft?(st=nt.child,st.childLanes=0,st.pendingProps=vt,nt.deletions=null):(st=Pg(ft,vt),st.subtreeFlags=ft.subtreeFlags&14680064),yt!==null?ht=Pg(yt,ht):(ht=Tg(ht,gt,ot,null),ht.flags|=2),ht.return=nt,st.return=nt,st.sibling=ht,nt.child=st,st=ht,ht=nt.child,gt=tt.child.memoizedState,gt=gt===null?nj(ot):{baseLanes:gt.baseLanes|ot,cachePool:null,transitions:gt.transitions},ht.memoizedState=gt,ht.childLanes=tt.childLanes&~ot,nt.memoizedState=mj,st}return ht=tt.child,tt=ht.sibling,st=Pg(ht,{mode:"visible",children:st.children}),!(nt.mode&1)&&(st.lanes=ot),st.return=nt,st.sibling=null,tt!==null&&(ot=nt.deletions,ot===null?(nt.deletions=[tt],nt.flags|=16):ot.push(tt)),nt.child=st,nt.memoizedState=null,st}function qj(tt,nt){return nt=pj({mode:"visible",children:nt},tt.mode,0,null),nt.return=tt,tt.child=nt}function sj(tt,nt,ot,st){return st!==null&&Jg(st),Ug(nt,tt.child,null,ot),tt=qj(nt,nt.pendingProps.children),tt.flags|=2,nt.memoizedState=null,tt}function rj(tt,nt,ot,st,ft,ht,gt){if(ot)return nt.flags&256?(nt.flags&=-257,st=Ki(Error(p$1(422))),sj(tt,nt,gt,st)):nt.memoizedState!==null?(nt.child=tt.child,nt.flags|=128,null):(ht=st.fallback,ft=nt.mode,st=pj({mode:"visible",children:st.children},ft,0,null),ht=Tg(ht,ft,gt,null),ht.flags|=2,st.return=nt,ht.return=nt,st.sibling=ht,nt.child=st,nt.mode&1&&Ug(nt,tt.child,null,gt),nt.child.memoizedState=nj(gt),nt.memoizedState=mj,ht);if(!(nt.mode&1))return sj(tt,nt,gt,null);if(ft.data==="$!"){if(st=ft.nextSibling&&ft.nextSibling.dataset,st)var yt=st.dgst;return st=yt,ht=Error(p$1(419)),st=Ki(ht,st,void 0),sj(tt,nt,gt,st)}if(yt=(gt&tt.childLanes)!==0,dh||yt){if(st=Q$2,st!==null){switch(gt&-gt){case 4:ft=2;break;case 16:ft=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:ft=32;break;case 536870912:ft=268435456;break;default:ft=0}ft=ft&(st.suspendedLanes|gt)?0:ft,ft!==0&&ft!==ht.retryLane&&(ht.retryLane=ft,ih(tt,ft),gi(st,tt,ft,-1))}return tj(),st=Ki(Error(p$1(421))),sj(tt,nt,gt,st)}return ft.data==="$?"?(nt.flags|=128,nt.child=tt.child,nt=uj.bind(null,tt),ft._reactRetry=nt,null):(tt=ht.treeContext,yg=Lf(ft.nextSibling),xg=nt,I$2=!0,zg=null,tt!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=tt.id,sg=tt.overflow,qg=nt),nt=qj(nt,st.children),nt.flags|=4096,nt)}function vj(tt,nt,ot){tt.lanes|=nt;var st=tt.alternate;st!==null&&(st.lanes|=nt),bh(tt.return,nt,ot)}function wj(tt,nt,ot,st,ft){var ht=tt.memoizedState;ht===null?tt.memoizedState={isBackwards:nt,rendering:null,renderingStartTime:0,last:st,tail:ot,tailMode:ft}:(ht.isBackwards=nt,ht.rendering=null,ht.renderingStartTime=0,ht.last=st,ht.tail=ot,ht.tailMode=ft)}function xj(tt,nt,ot){var st=nt.pendingProps,ft=st.revealOrder,ht=st.tail;if(Xi(tt,nt,st.children,ot),st=L$1.current,st&2)st=st&1|2,nt.flags|=128;else{if(tt!==null&&tt.flags&128)e:for(tt=nt.child;tt!==null;){if(tt.tag===13)tt.memoizedState!==null&&vj(tt,ot,nt);else if(tt.tag===19)vj(tt,ot,nt);else if(tt.child!==null){tt.child.return=tt,tt=tt.child;continue}if(tt===nt)break e;for(;tt.sibling===null;){if(tt.return===null||tt.return===nt)break e;tt=tt.return}tt.sibling.return=tt.return,tt=tt.sibling}st&=1}if(G$2(L$1,st),!(nt.mode&1))nt.memoizedState=null;else switch(ft){case"forwards":for(ot=nt.child,ft=null;ot!==null;)tt=ot.alternate,tt!==null&&Ch(tt)===null&&(ft=ot),ot=ot.sibling;ot=ft,ot===null?(ft=nt.child,nt.child=null):(ft=ot.sibling,ot.sibling=null),wj(nt,!1,ft,ot,ht);break;case"backwards":for(ot=null,ft=nt.child,nt.child=null;ft!==null;){if(tt=ft.alternate,tt!==null&&Ch(tt)===null){nt.child=ft;break}tt=ft.sibling,ft.sibling=ot,ot=ft,ft=tt}wj(nt,!0,ot,null,ht);break;case"together":wj(nt,!1,null,null,void 0);break;default:nt.memoizedState=null}return nt.child}function ij(tt,nt){!(nt.mode&1)&&tt!==null&&(tt.alternate=null,nt.alternate=null,nt.flags|=2)}function Zi(tt,nt,ot){if(tt!==null&&(nt.dependencies=tt.dependencies),rh|=nt.lanes,!(ot&nt.childLanes))return null;if(tt!==null&&nt.child!==tt.child)throw Error(p$1(153));if(nt.child!==null){for(tt=nt.child,ot=Pg(tt,tt.pendingProps),nt.child=ot,ot.return=nt;tt.sibling!==null;)tt=tt.sibling,ot=ot.sibling=Pg(tt,tt.pendingProps),ot.return=nt;ot.sibling=null}return nt.child}function yj(tt,nt,ot){switch(nt.tag){case 3:kj(nt),Ig();break;case 5:Ah(nt);break;case 1:Zf(nt.type)&&cg(nt);break;case 4:yh(nt,nt.stateNode.containerInfo);break;case 10:var st=nt.type._context,ft=nt.memoizedProps.value;G$2(Wg,st._currentValue),st._currentValue=ft;break;case 13:if(st=nt.memoizedState,st!==null)return st.dehydrated!==null?(G$2(L$1,L$1.current&1),nt.flags|=128,null):ot&nt.child.childLanes?oj(tt,nt,ot):(G$2(L$1,L$1.current&1),tt=Zi(tt,nt,ot),tt!==null?tt.sibling:null);G$2(L$1,L$1.current&1);break;case 19:if(st=(ot&nt.childLanes)!==0,tt.flags&128){if(st)return xj(tt,nt,ot);nt.flags|=128}if(ft=nt.memoizedState,ft!==null&&(ft.rendering=null,ft.tail=null,ft.lastEffect=null),G$2(L$1,L$1.current),st)break;return null;case 22:case 23:return nt.lanes=0,dj(tt,nt,ot)}return Zi(tt,nt,ot)}var zj,Aj,Bj,Cj;zj=function(tt,nt){for(var ot=nt.child;ot!==null;){if(ot.tag===5||ot.tag===6)tt.appendChild(ot.stateNode);else if(ot.tag!==4&&ot.child!==null){ot.child.return=ot,ot=ot.child;continue}if(ot===nt)break;for(;ot.sibling===null;){if(ot.return===null||ot.return===nt)return;ot=ot.return}ot.sibling.return=ot.return,ot=ot.sibling}};Aj=function(){};Bj=function(tt,nt,ot,st){var ft=tt.memoizedProps;if(ft!==st){tt=nt.stateNode,xh(uh.current);var ht=null;switch(ot){case"input":ft=Ya(tt,ft),st=Ya(tt,st),ht=[];break;case"select":ft=A$2({},ft,{value:void 0}),st=A$2({},st,{value:void 0}),ht=[];break;case"textarea":ft=gb(tt,ft),st=gb(tt,st),ht=[];break;default:typeof ft.onClick!="function"&&typeof st.onClick=="function"&&(tt.onclick=Bf)}ub(ot,st);var gt;ot=null;for(xt in ft)if(!st.hasOwnProperty(xt)&&ft.hasOwnProperty(xt)&&ft[xt]!=null)if(xt==="style"){var yt=ft[xt];for(gt in yt)yt.hasOwnProperty(gt)&&(ot||(ot={}),ot[gt]="")}else xt!=="dangerouslySetInnerHTML"&&xt!=="children"&&xt!=="suppressContentEditableWarning"&&xt!=="suppressHydrationWarning"&&xt!=="autoFocus"&&(ea.hasOwnProperty(xt)?ht||(ht=[]):(ht=ht||[]).push(xt,null));for(xt in st){var vt=st[xt];if(yt=ft!=null?ft[xt]:void 0,st.hasOwnProperty(xt)&&vt!==yt&&(vt!=null||yt!=null))if(xt==="style")if(yt){for(gt in yt)!yt.hasOwnProperty(gt)||vt&&vt.hasOwnProperty(gt)||(ot||(ot={}),ot[gt]="");for(gt in vt)vt.hasOwnProperty(gt)&&yt[gt]!==vt[gt]&&(ot||(ot={}),ot[gt]=vt[gt])}else ot||(ht||(ht=[]),ht.push(xt,ot)),ot=vt;else xt==="dangerouslySetInnerHTML"?(vt=vt?vt.__html:void 0,yt=yt?yt.__html:void 0,vt!=null&&yt!==vt&&(ht=ht||[]).push(xt,vt)):xt==="children"?typeof vt!="string"&&typeof vt!="number"||(ht=ht||[]).push(xt,""+vt):xt!=="suppressContentEditableWarning"&&xt!=="suppressHydrationWarning"&&(ea.hasOwnProperty(xt)?(vt!=null&&xt==="onScroll"&&D$2("scroll",tt),ht||yt===vt||(ht=[])):(ht=ht||[]).push(xt,vt))}ot&&(ht=ht||[]).push("style",ot);var xt=ht;(nt.updateQueue=xt)&&(nt.flags|=4)}};Cj=function(tt,nt,ot,st){ot!==st&&(nt.flags|=4)};function Dj(tt,nt){if(!I$2)switch(tt.tailMode){case"hidden":nt=tt.tail;for(var ot=null;nt!==null;)nt.alternate!==null&&(ot=nt),nt=nt.sibling;ot===null?tt.tail=null:ot.sibling=null;break;case"collapsed":ot=tt.tail;for(var st=null;ot!==null;)ot.alternate!==null&&(st=ot),ot=ot.sibling;st===null?nt||tt.tail===null?tt.tail=null:tt.tail.sibling=null:st.sibling=null}}function S$2(tt){var nt=tt.alternate!==null&&tt.alternate.child===tt.child,ot=0,st=0;if(nt)for(var ft=tt.child;ft!==null;)ot|=ft.lanes|ft.childLanes,st|=ft.subtreeFlags&14680064,st|=ft.flags&14680064,ft.return=tt,ft=ft.sibling;else for(ft=tt.child;ft!==null;)ot|=ft.lanes|ft.childLanes,st|=ft.subtreeFlags,st|=ft.flags,ft.return=tt,ft=ft.sibling;return tt.subtreeFlags|=st,tt.childLanes=ot,nt}function Ej(tt,nt,ot){var st=nt.pendingProps;switch(wg(nt),nt.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$2(nt),null;case 1:return Zf(nt.type)&&$f(),S$2(nt),null;case 3:return st=nt.stateNode,zh(),E(Wf),E(H$1),Eh(),st.pendingContext&&(st.context=st.pendingContext,st.pendingContext=null),(tt===null||tt.child===null)&&(Gg(nt)?nt.flags|=4:tt===null||tt.memoizedState.isDehydrated&&!(nt.flags&256)||(nt.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(tt,nt),S$2(nt),null;case 5:Bh(nt);var ft=xh(wh.current);if(ot=nt.type,tt!==null&&nt.stateNode!=null)Bj(tt,nt,ot,st,ft),tt.ref!==nt.ref&&(nt.flags|=512,nt.flags|=2097152);else{if(!st){if(nt.stateNode===null)throw Error(p$1(166));return S$2(nt),null}if(tt=xh(uh.current),Gg(nt)){st=nt.stateNode,ot=nt.type;var ht=nt.memoizedProps;switch(st[Of]=nt,st[Pf]=ht,tt=(nt.mode&1)!==0,ot){case"dialog":D$2("cancel",st),D$2("close",st);break;case"iframe":case"object":case"embed":D$2("load",st);break;case"video":case"audio":for(ft=0;ft<lf.length;ft++)D$2(lf[ft],st);break;case"source":D$2("error",st);break;case"img":case"image":case"link":D$2("error",st),D$2("load",st);break;case"details":D$2("toggle",st);break;case"input":Za(st,ht),D$2("invalid",st);break;case"select":st._wrapperState={wasMultiple:!!ht.multiple},D$2("invalid",st);break;case"textarea":hb(st,ht),D$2("invalid",st)}ub(ot,ht),ft=null;for(var gt in ht)if(ht.hasOwnProperty(gt)){var yt=ht[gt];gt==="children"?typeof yt=="string"?st.textContent!==yt&&(ht.suppressHydrationWarning!==!0&&Af(st.textContent,yt,tt),ft=["children",yt]):typeof yt=="number"&&st.textContent!==""+yt&&(ht.suppressHydrationWarning!==!0&&Af(st.textContent,yt,tt),ft=["children",""+yt]):ea.hasOwnProperty(gt)&&yt!=null&&gt==="onScroll"&&D$2("scroll",st)}switch(ot){case"input":Va(st),db(st,ht,!0);break;case"textarea":Va(st),jb(st);break;case"select":case"option":break;default:typeof ht.onClick=="function"&&(st.onclick=Bf)}st=ft,nt.updateQueue=st,st!==null&&(nt.flags|=4)}else{gt=ft.nodeType===9?ft:ft.ownerDocument,tt==="http://www.w3.org/1999/xhtml"&&(tt=kb(ot)),tt==="http://www.w3.org/1999/xhtml"?ot==="script"?(tt=gt.createElement("div"),tt.innerHTML="<script><\/script>",tt=tt.removeChild(tt.firstChild)):typeof st.is=="string"?tt=gt.createElement(ot,{is:st.is}):(tt=gt.createElement(ot),ot==="select"&&(gt=tt,st.multiple?gt.multiple=!0:st.size&&(gt.size=st.size))):tt=gt.createElementNS(tt,ot),tt[Of]=nt,tt[Pf]=st,zj(tt,nt,!1,!1),nt.stateNode=tt;e:{switch(gt=vb(ot,st),ot){case"dialog":D$2("cancel",tt),D$2("close",tt),ft=st;break;case"iframe":case"object":case"embed":D$2("load",tt),ft=st;break;case"video":case"audio":for(ft=0;ft<lf.length;ft++)D$2(lf[ft],tt);ft=st;break;case"source":D$2("error",tt),ft=st;break;case"img":case"image":case"link":D$2("error",tt),D$2("load",tt),ft=st;break;case"details":D$2("toggle",tt),ft=st;break;case"input":Za(tt,st),ft=Ya(tt,st),D$2("invalid",tt);break;case"option":ft=st;break;case"select":tt._wrapperState={wasMultiple:!!st.multiple},ft=A$2({},st,{value:void 0}),D$2("invalid",tt);break;case"textarea":hb(tt,st),ft=gb(tt,st),D$2("invalid",tt);break;default:ft=st}ub(ot,ft),yt=ft;for(ht in yt)if(yt.hasOwnProperty(ht)){var vt=yt[ht];ht==="style"?sb(tt,vt):ht==="dangerouslySetInnerHTML"?(vt=vt?vt.__html:void 0,vt!=null&&nb(tt,vt)):ht==="children"?typeof vt=="string"?(ot!=="textarea"||vt!=="")&&ob(tt,vt):typeof vt=="number"&&ob(tt,""+vt):ht!=="suppressContentEditableWarning"&&ht!=="suppressHydrationWarning"&&ht!=="autoFocus"&&(ea.hasOwnProperty(ht)?vt!=null&&ht==="onScroll"&&D$2("scroll",tt):vt!=null&&ta(tt,ht,vt,gt))}switch(ot){case"input":Va(tt),db(tt,st,!1);break;case"textarea":Va(tt),jb(tt);break;case"option":st.value!=null&&tt.setAttribute("value",""+Sa(st.value));break;case"select":tt.multiple=!!st.multiple,ht=st.value,ht!=null?fb(tt,!!st.multiple,ht,!1):st.defaultValue!=null&&fb(tt,!!st.multiple,st.defaultValue,!0);break;default:typeof ft.onClick=="function"&&(tt.onclick=Bf)}switch(ot){case"button":case"input":case"select":case"textarea":st=!!st.autoFocus;break e;case"img":st=!0;break e;default:st=!1}}st&&(nt.flags|=4)}nt.ref!==null&&(nt.flags|=512,nt.flags|=2097152)}return S$2(nt),null;case 6:if(tt&&nt.stateNode!=null)Cj(tt,nt,tt.memoizedProps,st);else{if(typeof st!="string"&&nt.stateNode===null)throw Error(p$1(166));if(ot=xh(wh.current),xh(uh.current),Gg(nt)){if(st=nt.stateNode,ot=nt.memoizedProps,st[Of]=nt,(ht=st.nodeValue!==ot)&&(tt=xg,tt!==null))switch(tt.tag){case 3:Af(st.nodeValue,ot,(tt.mode&1)!==0);break;case 5:tt.memoizedProps.suppressHydrationWarning!==!0&&Af(st.nodeValue,ot,(tt.mode&1)!==0)}ht&&(nt.flags|=4)}else st=(ot.nodeType===9?ot:ot.ownerDocument).createTextNode(st),st[Of]=nt,nt.stateNode=st}return S$2(nt),null;case 13:if(E(L$1),st=nt.memoizedState,tt===null||tt.memoizedState!==null&&tt.memoizedState.dehydrated!==null){if(I$2&&yg!==null&&nt.mode&1&&!(nt.flags&128))Hg(),Ig(),nt.flags|=98560,ht=!1;else if(ht=Gg(nt),st!==null&&st.dehydrated!==null){if(tt===null){if(!ht)throw Error(p$1(318));if(ht=nt.memoizedState,ht=ht!==null?ht.dehydrated:null,!ht)throw Error(p$1(317));ht[Of]=nt}else Ig(),!(nt.flags&128)&&(nt.memoizedState=null),nt.flags|=4;S$2(nt),ht=!1}else zg!==null&&(Fj(zg),zg=null),ht=!0;if(!ht)return nt.flags&65536?nt:null}return nt.flags&128?(nt.lanes=ot,nt):(st=st!==null,st!==(tt!==null&&tt.memoizedState!==null)&&st&&(nt.child.flags|=8192,nt.mode&1&&(tt===null||L$1.current&1?T$2===0&&(T$2=3):tj())),nt.updateQueue!==null&&(nt.flags|=4),S$2(nt),null);case 4:return zh(),Aj(tt,nt),tt===null&&sf(nt.stateNode.containerInfo),S$2(nt),null;case 10:return ah(nt.type._context),S$2(nt),null;case 17:return Zf(nt.type)&&$f(),S$2(nt),null;case 19:if(E(L$1),ht=nt.memoizedState,ht===null)return S$2(nt),null;if(st=(nt.flags&128)!==0,gt=ht.rendering,gt===null)if(st)Dj(ht,!1);else{if(T$2!==0||tt!==null&&tt.flags&128)for(tt=nt.child;tt!==null;){if(gt=Ch(tt),gt!==null){for(nt.flags|=128,Dj(ht,!1),st=gt.updateQueue,st!==null&&(nt.updateQueue=st,nt.flags|=4),nt.subtreeFlags=0,st=ot,ot=nt.child;ot!==null;)ht=ot,tt=st,ht.flags&=14680066,gt=ht.alternate,gt===null?(ht.childLanes=0,ht.lanes=tt,ht.child=null,ht.subtreeFlags=0,ht.memoizedProps=null,ht.memoizedState=null,ht.updateQueue=null,ht.dependencies=null,ht.stateNode=null):(ht.childLanes=gt.childLanes,ht.lanes=gt.lanes,ht.child=gt.child,ht.subtreeFlags=0,ht.deletions=null,ht.memoizedProps=gt.memoizedProps,ht.memoizedState=gt.memoizedState,ht.updateQueue=gt.updateQueue,ht.type=gt.type,tt=gt.dependencies,ht.dependencies=tt===null?null:{lanes:tt.lanes,firstContext:tt.firstContext}),ot=ot.sibling;return G$2(L$1,L$1.current&1|2),nt.child}tt=tt.sibling}ht.tail!==null&&B$1()>Gj&&(nt.flags|=128,st=!0,Dj(ht,!1),nt.lanes=4194304)}else{if(!st)if(tt=Ch(gt),tt!==null){if(nt.flags|=128,st=!0,ot=tt.updateQueue,ot!==null&&(nt.updateQueue=ot,nt.flags|=4),Dj(ht,!0),ht.tail===null&&ht.tailMode==="hidden"&&!gt.alternate&&!I$2)return S$2(nt),null}else 2*B$1()-ht.renderingStartTime>Gj&&ot!==1073741824&&(nt.flags|=128,st=!0,Dj(ht,!1),nt.lanes=4194304);ht.isBackwards?(gt.sibling=nt.child,nt.child=gt):(ot=ht.last,ot!==null?ot.sibling=gt:nt.child=gt,ht.last=gt)}return ht.tail!==null?(nt=ht.tail,ht.rendering=nt,ht.tail=nt.sibling,ht.renderingStartTime=B$1(),nt.sibling=null,ot=L$1.current,G$2(L$1,st?ot&1|2:ot&1),nt):(S$2(nt),null);case 22:case 23:return Hj(),st=nt.memoizedState!==null,tt!==null&&tt.memoizedState!==null!==st&&(nt.flags|=8192),st&&nt.mode&1?fj&1073741824&&(S$2(nt),nt.subtreeFlags&6&&(nt.flags|=8192)):S$2(nt),null;case 24:return null;case 25:return null}throw Error(p$1(156,nt.tag))}function Ij(tt,nt){switch(wg(nt),nt.tag){case 1:return Zf(nt.type)&&$f(),tt=nt.flags,tt&65536?(nt.flags=tt&-65537|128,nt):null;case 3:return zh(),E(Wf),E(H$1),Eh(),tt=nt.flags,tt&65536&&!(tt&128)?(nt.flags=tt&-65537|128,nt):null;case 5:return Bh(nt),null;case 13:if(E(L$1),tt=nt.memoizedState,tt!==null&&tt.dehydrated!==null){if(nt.alternate===null)throw Error(p$1(340));Ig()}return tt=nt.flags,tt&65536?(nt.flags=tt&-65537|128,nt):null;case 19:return E(L$1),null;case 4:return zh(),null;case 10:return ah(nt.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U$2=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V$2=null;function Lj(tt,nt){var ot=tt.ref;if(ot!==null)if(typeof ot=="function")try{ot(null)}catch(st){W$2(tt,nt,st)}else ot.current=null}function Mj(tt,nt,ot){try{ot()}catch(st){W$2(tt,nt,st)}}var Nj=!1;function Oj(tt,nt){if(Cf=dd,tt=Me$1(),Ne$1(tt)){if("selectionStart"in tt)var ot={start:tt.selectionStart,end:tt.selectionEnd};else e:{ot=(ot=tt.ownerDocument)&&ot.defaultView||window;var st=ot.getSelection&&ot.getSelection();if(st&&st.rangeCount!==0){ot=st.anchorNode;var ft=st.anchorOffset,ht=st.focusNode;st=st.focusOffset;try{ot.nodeType,ht.nodeType}catch{ot=null;break e}var gt=0,yt=-1,vt=-1,xt=0,Et=0,wt=tt,kt=null;t:for(;;){for(var Ct;wt!==ot||ft!==0&&wt.nodeType!==3||(yt=gt+ft),wt!==ht||st!==0&&wt.nodeType!==3||(vt=gt+st),wt.nodeType===3&&(gt+=wt.nodeValue.length),(Ct=wt.firstChild)!==null;)kt=wt,wt=Ct;for(;;){if(wt===tt)break t;if(kt===ot&&++xt===ft&&(yt=gt),kt===ht&&++Et===st&&(vt=gt),(Ct=wt.nextSibling)!==null)break;wt=kt,kt=wt.parentNode}wt=Ct}ot=yt===-1||vt===-1?null:{start:yt,end:vt}}else ot=null}ot=ot||{start:0,end:0}}else ot=null;for(Df={focusedElem:tt,selectionRange:ot},dd=!1,V$2=nt;V$2!==null;)if(nt=V$2,tt=nt.child,(nt.subtreeFlags&1028)!==0&&tt!==null)tt.return=nt,V$2=tt;else for(;V$2!==null;){nt=V$2;try{var bt=nt.alternate;if(nt.flags&1024)switch(nt.tag){case 0:case 11:case 15:break;case 1:if(bt!==null){var jt=bt.memoizedProps,Pt=bt.memoizedState,St=nt.stateNode,$t=St.getSnapshotBeforeUpdate(nt.elementType===nt.type?jt:Ci(nt.type,jt),Pt);St.__reactInternalSnapshotBeforeUpdate=$t}break;case 3:var Rt=nt.stateNode.containerInfo;Rt.nodeType===1?Rt.textContent="":Rt.nodeType===9&&Rt.documentElement&&Rt.removeChild(Rt.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163))}}catch(Tt){W$2(nt,nt.return,Tt)}if(tt=nt.sibling,tt!==null){tt.return=nt.return,V$2=tt;break}V$2=nt.return}return bt=Nj,Nj=!1,bt}function Pj(tt,nt,ot){var st=nt.updateQueue;if(st=st!==null?st.lastEffect:null,st!==null){var ft=st=st.next;do{if((ft.tag&tt)===tt){var ht=ft.destroy;ft.destroy=void 0,ht!==void 0&&Mj(nt,ot,ht)}ft=ft.next}while(ft!==st)}}function Qj(tt,nt){if(nt=nt.updateQueue,nt=nt!==null?nt.lastEffect:null,nt!==null){var ot=nt=nt.next;do{if((ot.tag&tt)===tt){var st=ot.create;ot.destroy=st()}ot=ot.next}while(ot!==nt)}}function Rj(tt){var nt=tt.ref;if(nt!==null){var ot=tt.stateNode;switch(tt.tag){case 5:tt=ot;break;default:tt=ot}typeof nt=="function"?nt(tt):nt.current=tt}}function Sj(tt){var nt=tt.alternate;nt!==null&&(tt.alternate=null,Sj(nt)),tt.child=null,tt.deletions=null,tt.sibling=null,tt.tag===5&&(nt=tt.stateNode,nt!==null&&(delete nt[Of],delete nt[Pf],delete nt[of],delete nt[Qf],delete nt[Rf])),tt.stateNode=null,tt.return=null,tt.dependencies=null,tt.memoizedProps=null,tt.memoizedState=null,tt.pendingProps=null,tt.stateNode=null,tt.updateQueue=null}function Tj(tt){return tt.tag===5||tt.tag===3||tt.tag===4}function Uj(tt){e:for(;;){for(;tt.sibling===null;){if(tt.return===null||Tj(tt.return))return null;tt=tt.return}for(tt.sibling.return=tt.return,tt=tt.sibling;tt.tag!==5&&tt.tag!==6&&tt.tag!==18;){if(tt.flags&2||tt.child===null||tt.tag===4)continue e;tt.child.return=tt,tt=tt.child}if(!(tt.flags&2))return tt.stateNode}}function Vj(tt,nt,ot){var st=tt.tag;if(st===5||st===6)tt=tt.stateNode,nt?ot.nodeType===8?ot.parentNode.insertBefore(tt,nt):ot.insertBefore(tt,nt):(ot.nodeType===8?(nt=ot.parentNode,nt.insertBefore(tt,ot)):(nt=ot,nt.appendChild(tt)),ot=ot._reactRootContainer,ot!=null||nt.onclick!==null||(nt.onclick=Bf));else if(st!==4&&(tt=tt.child,tt!==null))for(Vj(tt,nt,ot),tt=tt.sibling;tt!==null;)Vj(tt,nt,ot),tt=tt.sibling}function Wj(tt,nt,ot){var st=tt.tag;if(st===5||st===6)tt=tt.stateNode,nt?ot.insertBefore(tt,nt):ot.appendChild(tt);else if(st!==4&&(tt=tt.child,tt!==null))for(Wj(tt,nt,ot),tt=tt.sibling;tt!==null;)Wj(tt,nt,ot),tt=tt.sibling}var X$3=null,Xj=!1;function Yj(tt,nt,ot){for(ot=ot.child;ot!==null;)Zj(tt,nt,ot),ot=ot.sibling}function Zj(tt,nt,ot){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,ot)}catch{}switch(ot.tag){case 5:U$2||Lj(ot,nt);case 6:var st=X$3,ft=Xj;X$3=null,Yj(tt,nt,ot),X$3=st,Xj=ft,X$3!==null&&(Xj?(tt=X$3,ot=ot.stateNode,tt.nodeType===8?tt.parentNode.removeChild(ot):tt.removeChild(ot)):X$3.removeChild(ot.stateNode));break;case 18:X$3!==null&&(Xj?(tt=X$3,ot=ot.stateNode,tt.nodeType===8?Kf(tt.parentNode,ot):tt.nodeType===1&&Kf(tt,ot),bd(tt)):Kf(X$3,ot.stateNode));break;case 4:st=X$3,ft=Xj,X$3=ot.stateNode.containerInfo,Xj=!0,Yj(tt,nt,ot),X$3=st,Xj=ft;break;case 0:case 11:case 14:case 15:if(!U$2&&(st=ot.updateQueue,st!==null&&(st=st.lastEffect,st!==null))){ft=st=st.next;do{var ht=ft,gt=ht.destroy;ht=ht.tag,gt!==void 0&&(ht&2||ht&4)&&Mj(ot,nt,gt),ft=ft.next}while(ft!==st)}Yj(tt,nt,ot);break;case 1:if(!U$2&&(Lj(ot,nt),st=ot.stateNode,typeof st.componentWillUnmount=="function"))try{st.props=ot.memoizedProps,st.state=ot.memoizedState,st.componentWillUnmount()}catch(yt){W$2(ot,nt,yt)}Yj(tt,nt,ot);break;case 21:Yj(tt,nt,ot);break;case 22:ot.mode&1?(U$2=(st=U$2)||ot.memoizedState!==null,Yj(tt,nt,ot),U$2=st):Yj(tt,nt,ot);break;default:Yj(tt,nt,ot)}}function ak(tt){var nt=tt.updateQueue;if(nt!==null){tt.updateQueue=null;var ot=tt.stateNode;ot===null&&(ot=tt.stateNode=new Kj),nt.forEach(function(st){var ft=bk.bind(null,tt,st);ot.has(st)||(ot.add(st),st.then(ft,ft))})}}function ck(tt,nt){var ot=nt.deletions;if(ot!==null)for(var st=0;st<ot.length;st++){var ft=ot[st];try{var ht=tt,gt=nt,yt=gt;e:for(;yt!==null;){switch(yt.tag){case 5:X$3=yt.stateNode,Xj=!1;break e;case 3:X$3=yt.stateNode.containerInfo,Xj=!0;break e;case 4:X$3=yt.stateNode.containerInfo,Xj=!0;break e}yt=yt.return}if(X$3===null)throw Error(p$1(160));Zj(ht,gt,ft),X$3=null,Xj=!1;var vt=ft.alternate;vt!==null&&(vt.return=null),ft.return=null}catch(xt){W$2(ft,nt,xt)}}if(nt.subtreeFlags&12854)for(nt=nt.child;nt!==null;)dk(nt,tt),nt=nt.sibling}function dk(tt,nt){var ot=tt.alternate,st=tt.flags;switch(tt.tag){case 0:case 11:case 14:case 15:if(ck(nt,tt),ek(tt),st&4){try{Pj(3,tt,tt.return),Qj(3,tt)}catch(jt){W$2(tt,tt.return,jt)}try{Pj(5,tt,tt.return)}catch(jt){W$2(tt,tt.return,jt)}}break;case 1:ck(nt,tt),ek(tt),st&512&&ot!==null&&Lj(ot,ot.return);break;case 5:if(ck(nt,tt),ek(tt),st&512&&ot!==null&&Lj(ot,ot.return),tt.flags&32){var ft=tt.stateNode;try{ob(ft,"")}catch(jt){W$2(tt,tt.return,jt)}}if(st&4&&(ft=tt.stateNode,ft!=null)){var ht=tt.memoizedProps,gt=ot!==null?ot.memoizedProps:ht,yt=tt.type,vt=tt.updateQueue;if(tt.updateQueue=null,vt!==null)try{yt==="input"&&ht.type==="radio"&&ht.name!=null&&ab(ft,ht),vb(yt,gt);var xt=vb(yt,ht);for(gt=0;gt<vt.length;gt+=2){var Et=vt[gt],wt=vt[gt+1];Et==="style"?sb(ft,wt):Et==="dangerouslySetInnerHTML"?nb(ft,wt):Et==="children"?ob(ft,wt):ta(ft,Et,wt,xt)}switch(yt){case"input":bb(ft,ht);break;case"textarea":ib(ft,ht);break;case"select":var kt=ft._wrapperState.wasMultiple;ft._wrapperState.wasMultiple=!!ht.multiple;var Ct=ht.value;Ct!=null?fb(ft,!!ht.multiple,Ct,!1):kt!==!!ht.multiple&&(ht.defaultValue!=null?fb(ft,!!ht.multiple,ht.defaultValue,!0):fb(ft,!!ht.multiple,ht.multiple?[]:"",!1))}ft[Pf]=ht}catch(jt){W$2(tt,tt.return,jt)}}break;case 6:if(ck(nt,tt),ek(tt),st&4){if(tt.stateNode===null)throw Error(p$1(162));ft=tt.stateNode,ht=tt.memoizedProps;try{ft.nodeValue=ht}catch(jt){W$2(tt,tt.return,jt)}}break;case 3:if(ck(nt,tt),ek(tt),st&4&&ot!==null&&ot.memoizedState.isDehydrated)try{bd(nt.containerInfo)}catch(jt){W$2(tt,tt.return,jt)}break;case 4:ck(nt,tt),ek(tt);break;case 13:ck(nt,tt),ek(tt),ft=tt.child,ft.flags&8192&&(ht=ft.memoizedState!==null,ft.stateNode.isHidden=ht,!ht||ft.alternate!==null&&ft.alternate.memoizedState!==null||(fk=B$1())),st&4&&ak(tt);break;case 22:if(Et=ot!==null&&ot.memoizedState!==null,tt.mode&1?(U$2=(xt=U$2)||Et,ck(nt,tt),U$2=xt):ck(nt,tt),ek(tt),st&8192){if(xt=tt.memoizedState!==null,(tt.stateNode.isHidden=xt)&&!Et&&tt.mode&1)for(V$2=tt,Et=tt.child;Et!==null;){for(wt=V$2=Et;V$2!==null;){switch(kt=V$2,Ct=kt.child,kt.tag){case 0:case 11:case 14:case 15:Pj(4,kt,kt.return);break;case 1:Lj(kt,kt.return);var bt=kt.stateNode;if(typeof bt.componentWillUnmount=="function"){st=kt,ot=kt.return;try{nt=st,bt.props=nt.memoizedProps,bt.state=nt.memoizedState,bt.componentWillUnmount()}catch(jt){W$2(st,ot,jt)}}break;case 5:Lj(kt,kt.return);break;case 22:if(kt.memoizedState!==null){gk(wt);continue}}Ct!==null?(Ct.return=kt,V$2=Ct):gk(wt)}Et=Et.sibling}e:for(Et=null,wt=tt;;){if(wt.tag===5){if(Et===null){Et=wt;try{ft=wt.stateNode,xt?(ht=ft.style,typeof ht.setProperty=="function"?ht.setProperty("display","none","important"):ht.display="none"):(yt=wt.stateNode,vt=wt.memoizedProps.style,gt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null,yt.style.display=rb("display",gt))}catch(jt){W$2(tt,tt.return,jt)}}}else if(wt.tag===6){if(Et===null)try{wt.stateNode.nodeValue=xt?"":wt.memoizedProps}catch(jt){W$2(tt,tt.return,jt)}}else if((wt.tag!==22&&wt.tag!==23||wt.memoizedState===null||wt===tt)&&wt.child!==null){wt.child.return=wt,wt=wt.child;continue}if(wt===tt)break e;for(;wt.sibling===null;){if(wt.return===null||wt.return===tt)break e;Et===wt&&(Et=null),wt=wt.return}Et===wt&&(Et=null),wt.sibling.return=wt.return,wt=wt.sibling}}break;case 19:ck(nt,tt),ek(tt),st&4&&ak(tt);break;case 21:break;default:ck(nt,tt),ek(tt)}}function ek(tt){var nt=tt.flags;if(nt&2){try{e:{for(var ot=tt.return;ot!==null;){if(Tj(ot)){var st=ot;break e}ot=ot.return}throw Error(p$1(160))}switch(st.tag){case 5:var ft=st.stateNode;st.flags&32&&(ob(ft,""),st.flags&=-33);var ht=Uj(tt);Wj(tt,ht,ft);break;case 3:case 4:var gt=st.stateNode.containerInfo,yt=Uj(tt);Vj(tt,yt,gt);break;default:throw Error(p$1(161))}}catch(vt){W$2(tt,tt.return,vt)}tt.flags&=-3}nt&4096&&(tt.flags&=-4097)}function hk(tt,nt,ot){V$2=tt,ik(tt)}function ik(tt,nt,ot){for(var st=(tt.mode&1)!==0;V$2!==null;){var ft=V$2,ht=ft.child;if(ft.tag===22&&st){var gt=ft.memoizedState!==null||Jj;if(!gt){var yt=ft.alternate,vt=yt!==null&&yt.memoizedState!==null||U$2;yt=Jj;var xt=U$2;if(Jj=gt,(U$2=vt)&&!xt)for(V$2=ft;V$2!==null;)gt=V$2,vt=gt.child,gt.tag===22&&gt.memoizedState!==null?jk(ft):vt!==null?(vt.return=gt,V$2=vt):jk(ft);for(;ht!==null;)V$2=ht,ik(ht),ht=ht.sibling;V$2=ft,Jj=yt,U$2=xt}kk(tt)}else ft.subtreeFlags&8772&&ht!==null?(ht.return=ft,V$2=ht):kk(tt)}}function kk(tt){for(;V$2!==null;){var nt=V$2;if(nt.flags&8772){var ot=nt.alternate;try{if(nt.flags&8772)switch(nt.tag){case 0:case 11:case 15:U$2||Qj(5,nt);break;case 1:var st=nt.stateNode;if(nt.flags&4&&!U$2)if(ot===null)st.componentDidMount();else{var ft=nt.elementType===nt.type?ot.memoizedProps:Ci(nt.type,ot.memoizedProps);st.componentDidUpdate(ft,ot.memoizedState,st.__reactInternalSnapshotBeforeUpdate)}var ht=nt.updateQueue;ht!==null&&sh(nt,ht,st);break;case 3:var gt=nt.updateQueue;if(gt!==null){if(ot=null,nt.child!==null)switch(nt.child.tag){case 5:ot=nt.child.stateNode;break;case 1:ot=nt.child.stateNode}sh(nt,gt,ot)}break;case 5:var yt=nt.stateNode;if(ot===null&&nt.flags&4){ot=yt;var vt=nt.memoizedProps;switch(nt.type){case"button":case"input":case"select":case"textarea":vt.autoFocus&&ot.focus();break;case"img":vt.src&&(ot.src=vt.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(nt.memoizedState===null){var xt=nt.alternate;if(xt!==null){var Et=xt.memoizedState;if(Et!==null){var wt=Et.dehydrated;wt!==null&&bd(wt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p$1(163))}U$2||nt.flags&512&&Rj(nt)}catch(kt){W$2(nt,nt.return,kt)}}if(nt===tt){V$2=null;break}if(ot=nt.sibling,ot!==null){ot.return=nt.return,V$2=ot;break}V$2=nt.return}}function gk(tt){for(;V$2!==null;){var nt=V$2;if(nt===tt){V$2=null;break}var ot=nt.sibling;if(ot!==null){ot.return=nt.return,V$2=ot;break}V$2=nt.return}}function jk(tt){for(;V$2!==null;){var nt=V$2;try{switch(nt.tag){case 0:case 11:case 15:var ot=nt.return;try{Qj(4,nt)}catch(vt){W$2(nt,ot,vt)}break;case 1:var st=nt.stateNode;if(typeof st.componentDidMount=="function"){var ft=nt.return;try{st.componentDidMount()}catch(vt){W$2(nt,ft,vt)}}var ht=nt.return;try{Rj(nt)}catch(vt){W$2(nt,ht,vt)}break;case 5:var gt=nt.return;try{Rj(nt)}catch(vt){W$2(nt,gt,vt)}}}catch(vt){W$2(nt,nt.return,vt)}if(nt===tt){V$2=null;break}var yt=nt.sibling;if(yt!==null){yt.return=nt.return,V$2=yt;break}V$2=nt.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K$1=0,Q$2=null,Y$2=null,Z$2=0,fj=0,ej=Uf(0),T$2=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R$1(){return K$1&6?B$1():Ak!==-1?Ak:Ak=B$1()}function yi(tt){return tt.mode&1?K$1&2&&Z$2!==0?Z$2&-Z$2:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(tt=C$1,tt!==0||(tt=window.event,tt=tt===void 0?16:jd(tt.type)),tt):1}function gi(tt,nt,ot,st){if(50<yk)throw yk=0,zk=null,Error(p$1(185));Ac(tt,ot,st),(!(K$1&2)||tt!==Q$2)&&(tt===Q$2&&(!(K$1&2)&&(qk|=ot),T$2===4&&Ck(tt,Z$2)),Dk(tt,st),ot===1&&K$1===0&&!(nt.mode&1)&&(Gj=B$1()+500,fg&&jg()))}function Dk(tt,nt){var ot=tt.callbackNode;wc(tt,nt);var st=uc(tt,tt===Q$2?Z$2:0);if(st===0)ot!==null&&bc(ot),tt.callbackNode=null,tt.callbackPriority=0;else if(nt=st&-st,tt.callbackPriority!==nt){if(ot!=null&&bc(ot),nt===1)tt.tag===0?ig(Ek.bind(null,tt)):hg(Ek.bind(null,tt)),Jf(function(){!(K$1&6)&&jg()}),ot=null;else{switch(Dc(st)){case 1:ot=fc;break;case 4:ot=gc;break;case 16:ot=hc;break;case 536870912:ot=jc;break;default:ot=hc}ot=Fk(ot,Gk.bind(null,tt))}tt.callbackPriority=nt,tt.callbackNode=ot}}function Gk(tt,nt){if(Ak=-1,Bk=0,K$1&6)throw Error(p$1(327));var ot=tt.callbackNode;if(Hk()&&tt.callbackNode!==ot)return null;var st=uc(tt,tt===Q$2?Z$2:0);if(st===0)return null;if(st&30||st&tt.expiredLanes||nt)nt=Ik(tt,st);else{nt=st;var ft=K$1;K$1|=2;var ht=Jk();(Q$2!==tt||Z$2!==nt)&&(uk=null,Gj=B$1()+500,Kk(tt,nt));do try{Lk();break}catch(yt){Mk(tt,yt)}while(!0);$g(),mk.current=ht,K$1=ft,Y$2!==null?nt=0:(Q$2=null,Z$2=0,nt=T$2)}if(nt!==0){if(nt===2&&(ft=xc(tt),ft!==0&&(st=ft,nt=Nk(tt,ft))),nt===1)throw ot=pk,Kk(tt,0),Ck(tt,st),Dk(tt,B$1()),ot;if(nt===6)Ck(tt,st);else{if(ft=tt.current.alternate,!(st&30)&&!Ok(ft)&&(nt=Ik(tt,st),nt===2&&(ht=xc(tt),ht!==0&&(st=ht,nt=Nk(tt,ht))),nt===1))throw ot=pk,Kk(tt,0),Ck(tt,st),Dk(tt,B$1()),ot;switch(tt.finishedWork=ft,tt.finishedLanes=st,nt){case 0:case 1:throw Error(p$1(345));case 2:Pk(tt,tk,uk);break;case 3:if(Ck(tt,st),(st&130023424)===st&&(nt=fk+500-B$1(),10<nt)){if(uc(tt,0)!==0)break;if(ft=tt.suspendedLanes,(ft&st)!==st){R$1(),tt.pingedLanes|=tt.suspendedLanes&ft;break}tt.timeoutHandle=Ff(Pk.bind(null,tt,tk,uk),nt);break}Pk(tt,tk,uk);break;case 4:if(Ck(tt,st),(st&4194240)===st)break;for(nt=tt.eventTimes,ft=-1;0<st;){var gt=31-oc(st);ht=1<<gt,gt=nt[gt],gt>ft&&(ft=gt),st&=~ht}if(st=ft,st=B$1()-st,st=(120>st?120:480>st?480:1080>st?1080:1920>st?1920:3e3>st?3e3:4320>st?4320:1960*lk(st/1960))-st,10<st){tt.timeoutHandle=Ff(Pk.bind(null,tt,tk,uk),st);break}Pk(tt,tk,uk);break;case 5:Pk(tt,tk,uk);break;default:throw Error(p$1(329))}}}return Dk(tt,B$1()),tt.callbackNode===ot?Gk.bind(null,tt):null}function Nk(tt,nt){var ot=sk;return tt.current.memoizedState.isDehydrated&&(Kk(tt,nt).flags|=256),tt=Ik(tt,nt),tt!==2&&(nt=tk,tk=ot,nt!==null&&Fj(nt)),tt}function Fj(tt){tk===null?tk=tt:tk.push.apply(tk,tt)}function Ok(tt){for(var nt=tt;;){if(nt.flags&16384){var ot=nt.updateQueue;if(ot!==null&&(ot=ot.stores,ot!==null))for(var st=0;st<ot.length;st++){var ft=ot[st],ht=ft.getSnapshot;ft=ft.value;try{if(!He$1(ht(),ft))return!1}catch{return!1}}}if(ot=nt.child,nt.subtreeFlags&16384&&ot!==null)ot.return=nt,nt=ot;else{if(nt===tt)break;for(;nt.sibling===null;){if(nt.return===null||nt.return===tt)return!0;nt=nt.return}nt.sibling.return=nt.return,nt=nt.sibling}}return!0}function Ck(tt,nt){for(nt&=~rk,nt&=~qk,tt.suspendedLanes|=nt,tt.pingedLanes&=~nt,tt=tt.expirationTimes;0<nt;){var ot=31-oc(nt),st=1<<ot;tt[ot]=-1,nt&=~st}}function Ek(tt){if(K$1&6)throw Error(p$1(327));Hk();var nt=uc(tt,0);if(!(nt&1))return Dk(tt,B$1()),null;var ot=Ik(tt,nt);if(tt.tag!==0&&ot===2){var st=xc(tt);st!==0&&(nt=st,ot=Nk(tt,st))}if(ot===1)throw ot=pk,Kk(tt,0),Ck(tt,nt),Dk(tt,B$1()),ot;if(ot===6)throw Error(p$1(345));return tt.finishedWork=tt.current.alternate,tt.finishedLanes=nt,Pk(tt,tk,uk),Dk(tt,B$1()),null}function Qk(tt,nt){var ot=K$1;K$1|=1;try{return tt(nt)}finally{K$1=ot,K$1===0&&(Gj=B$1()+500,fg&&jg())}}function Rk(tt){wk!==null&&wk.tag===0&&!(K$1&6)&&Hk();var nt=K$1;K$1|=1;var ot=ok.transition,st=C$1;try{if(ok.transition=null,C$1=1,tt)return tt()}finally{C$1=st,ok.transition=ot,K$1=nt,!(K$1&6)&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(tt,nt){tt.finishedWork=null,tt.finishedLanes=0;var ot=tt.timeoutHandle;if(ot!==-1&&(tt.timeoutHandle=-1,Gf(ot)),Y$2!==null)for(ot=Y$2.return;ot!==null;){var st=ot;switch(wg(st),st.tag){case 1:st=st.type.childContextTypes,st!=null&&$f();break;case 3:zh(),E(Wf),E(H$1),Eh();break;case 5:Bh(st);break;case 4:zh();break;case 13:E(L$1);break;case 19:E(L$1);break;case 10:ah(st.type._context);break;case 22:case 23:Hj()}ot=ot.return}if(Q$2=tt,Y$2=tt=Pg(tt.current,null),Z$2=fj=nt,T$2=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(nt=0;nt<fh.length;nt++)if(ot=fh[nt],st=ot.interleaved,st!==null){ot.interleaved=null;var ft=st.next,ht=ot.pending;if(ht!==null){var gt=ht.next;ht.next=ft,st.next=gt}ot.pending=st}fh=null}return tt}function Mk(tt,nt){do{var ot=Y$2;try{if($g(),Fh.current=Rh,Ih){for(var st=M$2.memoizedState;st!==null;){var ft=st.queue;ft!==null&&(ft.pending=null),st=st.next}Ih=!1}if(Hh=0,O$2=N=M$2=null,Jh=!1,Kh=0,nk.current=null,ot===null||ot.return===null){T$2=1,pk=nt,Y$2=null;break}e:{var ht=tt,gt=ot.return,yt=ot,vt=nt;if(nt=Z$2,yt.flags|=32768,vt!==null&&typeof vt=="object"&&typeof vt.then=="function"){var xt=vt,Et=yt,wt=Et.tag;if(!(Et.mode&1)&&(wt===0||wt===11||wt===15)){var kt=Et.alternate;kt?(Et.updateQueue=kt.updateQueue,Et.memoizedState=kt.memoizedState,Et.lanes=kt.lanes):(Et.updateQueue=null,Et.memoizedState=null)}var Ct=Ui(gt);if(Ct!==null){Ct.flags&=-257,Vi(Ct,gt,yt,ht,nt),Ct.mode&1&&Si(ht,xt,nt),nt=Ct,vt=xt;var bt=nt.updateQueue;if(bt===null){var jt=new Set;jt.add(vt),nt.updateQueue=jt}else bt.add(vt);break e}else{if(!(nt&1)){Si(ht,xt,nt),tj();break e}vt=Error(p$1(426))}}else if(I$2&&yt.mode&1){var Pt=Ui(gt);if(Pt!==null){!(Pt.flags&65536)&&(Pt.flags|=256),Vi(Pt,gt,yt,ht,nt),Jg(Ji(vt,yt));break e}}ht=vt=Ji(vt,yt),T$2!==4&&(T$2=2),sk===null?sk=[ht]:sk.push(ht),ht=gt;do{switch(ht.tag){case 3:ht.flags|=65536,nt&=-nt,ht.lanes|=nt;var St=Ni(ht,vt,nt);ph(ht,St);break e;case 1:yt=vt;var $t=ht.type,Rt=ht.stateNode;if(!(ht.flags&128)&&(typeof $t.getDerivedStateFromError=="function"||Rt!==null&&typeof Rt.componentDidCatch=="function"&&(Ri===null||!Ri.has(Rt)))){ht.flags|=65536,nt&=-nt,ht.lanes|=nt;var Tt=Qi(ht,yt,nt);ph(ht,Tt);break e}}ht=ht.return}while(ht!==null)}Sk(ot)}catch(Nt){nt=Nt,Y$2===ot&&ot!==null&&(Y$2=ot=ot.return);continue}break}while(!0)}function Jk(){var tt=mk.current;return mk.current=Rh,tt===null?Rh:tt}function tj(){(T$2===0||T$2===3||T$2===2)&&(T$2=4),Q$2===null||!(rh&268435455)&&!(qk&268435455)||Ck(Q$2,Z$2)}function Ik(tt,nt){var ot=K$1;K$1|=2;var st=Jk();(Q$2!==tt||Z$2!==nt)&&(uk=null,Kk(tt,nt));do try{Tk();break}catch(ft){Mk(tt,ft)}while(!0);if($g(),K$1=ot,mk.current=st,Y$2!==null)throw Error(p$1(261));return Q$2=null,Z$2=0,T$2}function Tk(){for(;Y$2!==null;)Uk(Y$2)}function Lk(){for(;Y$2!==null&&!cc();)Uk(Y$2)}function Uk(tt){var nt=Vk(tt.alternate,tt,fj);tt.memoizedProps=tt.pendingProps,nt===null?Sk(tt):Y$2=nt,nk.current=null}function Sk(tt){var nt=tt;do{var ot=nt.alternate;if(tt=nt.return,nt.flags&32768){if(ot=Ij(ot,nt),ot!==null){ot.flags&=32767,Y$2=ot;return}if(tt!==null)tt.flags|=32768,tt.subtreeFlags=0,tt.deletions=null;else{T$2=6,Y$2=null;return}}else if(ot=Ej(ot,nt,fj),ot!==null){Y$2=ot;return}if(nt=nt.sibling,nt!==null){Y$2=nt;return}Y$2=nt=tt}while(nt!==null);T$2===0&&(T$2=5)}function Pk(tt,nt,ot){var st=C$1,ft=ok.transition;try{ok.transition=null,C$1=1,Wk(tt,nt,ot,st)}finally{ok.transition=ft,C$1=st}return null}function Wk(tt,nt,ot,st){do Hk();while(wk!==null);if(K$1&6)throw Error(p$1(327));ot=tt.finishedWork;var ft=tt.finishedLanes;if(ot===null)return null;if(tt.finishedWork=null,tt.finishedLanes=0,ot===tt.current)throw Error(p$1(177));tt.callbackNode=null,tt.callbackPriority=0;var ht=ot.lanes|ot.childLanes;if(Bc(tt,ht),tt===Q$2&&(Y$2=Q$2=null,Z$2=0),!(ot.subtreeFlags&2064)&&!(ot.flags&2064)||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),ht=(ot.flags&15990)!==0,ot.subtreeFlags&15990||ht){ht=ok.transition,ok.transition=null;var gt=C$1;C$1=1;var yt=K$1;K$1|=4,nk.current=null,Oj(tt,ot),dk(ot,tt),Oe$1(Df),dd=!!Cf,Df=Cf=null,tt.current=ot,hk(ot),dc(),K$1=yt,C$1=gt,ok.transition=ht}else tt.current=ot;if(vk&&(vk=!1,wk=tt,xk=ft),ht=tt.pendingLanes,ht===0&&(Ri=null),mc(ot.stateNode),Dk(tt,B$1()),nt!==null)for(st=tt.onRecoverableError,ot=0;ot<nt.length;ot++)ft=nt[ot],st(ft.value,{componentStack:ft.stack,digest:ft.digest});if(Oi)throw Oi=!1,tt=Pi,Pi=null,tt;return xk&1&&tt.tag!==0&&Hk(),ht=tt.pendingLanes,ht&1?tt===zk?yk++:(yk=0,zk=tt):yk=0,jg(),null}function Hk(){if(wk!==null){var tt=Dc(xk),nt=ok.transition,ot=C$1;try{if(ok.transition=null,C$1=16>tt?16:tt,wk===null)var st=!1;else{if(tt=wk,wk=null,xk=0,K$1&6)throw Error(p$1(331));var ft=K$1;for(K$1|=4,V$2=tt.current;V$2!==null;){var ht=V$2,gt=ht.child;if(V$2.flags&16){var yt=ht.deletions;if(yt!==null){for(var vt=0;vt<yt.length;vt++){var xt=yt[vt];for(V$2=xt;V$2!==null;){var Et=V$2;switch(Et.tag){case 0:case 11:case 15:Pj(8,Et,ht)}var wt=Et.child;if(wt!==null)wt.return=Et,V$2=wt;else for(;V$2!==null;){Et=V$2;var kt=Et.sibling,Ct=Et.return;if(Sj(Et),Et===xt){V$2=null;break}if(kt!==null){kt.return=Ct,V$2=kt;break}V$2=Ct}}}var bt=ht.alternate;if(bt!==null){var jt=bt.child;if(jt!==null){bt.child=null;do{var Pt=jt.sibling;jt.sibling=null,jt=Pt}while(jt!==null)}}V$2=ht}}if(ht.subtreeFlags&2064&&gt!==null)gt.return=ht,V$2=gt;else e:for(;V$2!==null;){if(ht=V$2,ht.flags&2048)switch(ht.tag){case 0:case 11:case 15:Pj(9,ht,ht.return)}var St=ht.sibling;if(St!==null){St.return=ht.return,V$2=St;break e}V$2=ht.return}}var $t=tt.current;for(V$2=$t;V$2!==null;){gt=V$2;var Rt=gt.child;if(gt.subtreeFlags&2064&&Rt!==null)Rt.return=gt,V$2=Rt;else e:for(gt=$t;V$2!==null;){if(yt=V$2,yt.flags&2048)try{switch(yt.tag){case 0:case 11:case 15:Qj(9,yt)}}catch(Nt){W$2(yt,yt.return,Nt)}if(yt===gt){V$2=null;break e}var Tt=yt.sibling;if(Tt!==null){Tt.return=yt.return,V$2=Tt;break e}V$2=yt.return}}if(K$1=ft,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,tt)}catch{}st=!0}return st}finally{C$1=ot,ok.transition=nt}}return!1}function Xk(tt,nt,ot){nt=Ji(ot,nt),nt=Ni(tt,nt,1),tt=nh(tt,nt,1),nt=R$1(),tt!==null&&(Ac(tt,1,nt),Dk(tt,nt))}function W$2(tt,nt,ot){if(tt.tag===3)Xk(tt,tt,ot);else for(;nt!==null;){if(nt.tag===3){Xk(nt,tt,ot);break}else if(nt.tag===1){var st=nt.stateNode;if(typeof nt.type.getDerivedStateFromError=="function"||typeof st.componentDidCatch=="function"&&(Ri===null||!Ri.has(st))){tt=Ji(ot,tt),tt=Qi(nt,tt,1),nt=nh(nt,tt,1),tt=R$1(),nt!==null&&(Ac(nt,1,tt),Dk(nt,tt));break}}nt=nt.return}}function Ti(tt,nt,ot){var st=tt.pingCache;st!==null&&st.delete(nt),nt=R$1(),tt.pingedLanes|=tt.suspendedLanes&ot,Q$2===tt&&(Z$2&ot)===ot&&(T$2===4||T$2===3&&(Z$2&130023424)===Z$2&&500>B$1()-fk?Kk(tt,0):rk|=ot),Dk(tt,nt)}function Yk(tt,nt){nt===0&&(tt.mode&1?(nt=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):nt=1);var ot=R$1();tt=ih(tt,nt),tt!==null&&(Ac(tt,nt,ot),Dk(tt,ot))}function uj(tt){var nt=tt.memoizedState,ot=0;nt!==null&&(ot=nt.retryLane),Yk(tt,ot)}function bk(tt,nt){var ot=0;switch(tt.tag){case 13:var st=tt.stateNode,ft=tt.memoizedState;ft!==null&&(ot=ft.retryLane);break;case 19:st=tt.stateNode;break;default:throw Error(p$1(314))}st!==null&&st.delete(nt),Yk(tt,ot)}var Vk;Vk=function(tt,nt,ot){if(tt!==null)if(tt.memoizedProps!==nt.pendingProps||Wf.current)dh=!0;else{if(!(tt.lanes&ot)&&!(nt.flags&128))return dh=!1,yj(tt,nt,ot);dh=!!(tt.flags&131072)}else dh=!1,I$2&&nt.flags&1048576&&ug(nt,ng,nt.index);switch(nt.lanes=0,nt.tag){case 2:var st=nt.type;ij(tt,nt),tt=nt.pendingProps;var ft=Yf(nt,H$1.current);ch(nt,ot),ft=Nh(null,nt,st,tt,ft,ot);var ht=Sh();return nt.flags|=1,typeof ft=="object"&&ft!==null&&typeof ft.render=="function"&&ft.$$typeof===void 0?(nt.tag=1,nt.memoizedState=null,nt.updateQueue=null,Zf(st)?(ht=!0,cg(nt)):ht=!1,nt.memoizedState=ft.state!==null&&ft.state!==void 0?ft.state:null,kh(nt),ft.updater=Ei,nt.stateNode=ft,ft._reactInternals=nt,Ii(nt,st,tt,ot),nt=jj(null,nt,st,!0,ht,ot)):(nt.tag=0,I$2&&ht&&vg(nt),Xi(null,nt,ft,ot),nt=nt.child),nt;case 16:st=nt.elementType;e:{switch(ij(tt,nt),tt=nt.pendingProps,ft=st._init,st=ft(st._payload),nt.type=st,ft=nt.tag=Zk(st),tt=Ci(st,tt),ft){case 0:nt=cj(null,nt,st,tt,ot);break e;case 1:nt=hj(null,nt,st,tt,ot);break e;case 11:nt=Yi(null,nt,st,tt,ot);break e;case 14:nt=$i(null,nt,st,Ci(st.type,tt),ot);break e}throw Error(p$1(306,st,""))}return nt;case 0:return st=nt.type,ft=nt.pendingProps,ft=nt.elementType===st?ft:Ci(st,ft),cj(tt,nt,st,ft,ot);case 1:return st=nt.type,ft=nt.pendingProps,ft=nt.elementType===st?ft:Ci(st,ft),hj(tt,nt,st,ft,ot);case 3:e:{if(kj(nt),tt===null)throw Error(p$1(387));st=nt.pendingProps,ht=nt.memoizedState,ft=ht.element,lh(tt,nt),qh(nt,st,null,ot);var gt=nt.memoizedState;if(st=gt.element,ht.isDehydrated)if(ht={element:st,isDehydrated:!1,cache:gt.cache,pendingSuspenseBoundaries:gt.pendingSuspenseBoundaries,transitions:gt.transitions},nt.updateQueue.baseState=ht,nt.memoizedState=ht,nt.flags&256){ft=Ji(Error(p$1(423)),nt),nt=lj(tt,nt,st,ot,ft);break e}else if(st!==ft){ft=Ji(Error(p$1(424)),nt),nt=lj(tt,nt,st,ot,ft);break e}else for(yg=Lf(nt.stateNode.containerInfo.firstChild),xg=nt,I$2=!0,zg=null,ot=Vg(nt,null,st,ot),nt.child=ot;ot;)ot.flags=ot.flags&-3|4096,ot=ot.sibling;else{if(Ig(),st===ft){nt=Zi(tt,nt,ot);break e}Xi(tt,nt,st,ot)}nt=nt.child}return nt;case 5:return Ah(nt),tt===null&&Eg(nt),st=nt.type,ft=nt.pendingProps,ht=tt!==null?tt.memoizedProps:null,gt=ft.children,Ef(st,ft)?gt=null:ht!==null&&Ef(st,ht)&&(nt.flags|=32),gj(tt,nt),Xi(tt,nt,gt,ot),nt.child;case 6:return tt===null&&Eg(nt),null;case 13:return oj(tt,nt,ot);case 4:return yh(nt,nt.stateNode.containerInfo),st=nt.pendingProps,tt===null?nt.child=Ug(nt,null,st,ot):Xi(tt,nt,st,ot),nt.child;case 11:return st=nt.type,ft=nt.pendingProps,ft=nt.elementType===st?ft:Ci(st,ft),Yi(tt,nt,st,ft,ot);case 7:return Xi(tt,nt,nt.pendingProps,ot),nt.child;case 8:return Xi(tt,nt,nt.pendingProps.children,ot),nt.child;case 12:return Xi(tt,nt,nt.pendingProps.children,ot),nt.child;case 10:e:{if(st=nt.type._context,ft=nt.pendingProps,ht=nt.memoizedProps,gt=ft.value,G$2(Wg,st._currentValue),st._currentValue=gt,ht!==null)if(He$1(ht.value,gt)){if(ht.children===ft.children&&!Wf.current){nt=Zi(tt,nt,ot);break e}}else for(ht=nt.child,ht!==null&&(ht.return=nt);ht!==null;){var yt=ht.dependencies;if(yt!==null){gt=ht.child;for(var vt=yt.firstContext;vt!==null;){if(vt.context===st){if(ht.tag===1){vt=mh(-1,ot&-ot),vt.tag=2;var xt=ht.updateQueue;if(xt!==null){xt=xt.shared;var Et=xt.pending;Et===null?vt.next=vt:(vt.next=Et.next,Et.next=vt),xt.pending=vt}}ht.lanes|=ot,vt=ht.alternate,vt!==null&&(vt.lanes|=ot),bh(ht.return,ot,nt),yt.lanes|=ot;break}vt=vt.next}}else if(ht.tag===10)gt=ht.type===nt.type?null:ht.child;else if(ht.tag===18){if(gt=ht.return,gt===null)throw Error(p$1(341));gt.lanes|=ot,yt=gt.alternate,yt!==null&&(yt.lanes|=ot),bh(gt,ot,nt),gt=ht.sibling}else gt=ht.child;if(gt!==null)gt.return=ht;else for(gt=ht;gt!==null;){if(gt===nt){gt=null;break}if(ht=gt.sibling,ht!==null){ht.return=gt.return,gt=ht;break}gt=gt.return}ht=gt}Xi(tt,nt,ft.children,ot),nt=nt.child}return nt;case 9:return ft=nt.type,st=nt.pendingProps.children,ch(nt,ot),ft=eh(ft),st=st(ft),nt.flags|=1,Xi(tt,nt,st,ot),nt.child;case 14:return st=nt.type,ft=Ci(st,nt.pendingProps),ft=Ci(st.type,ft),$i(tt,nt,st,ft,ot);case 15:return bj(tt,nt,nt.type,nt.pendingProps,ot);case 17:return st=nt.type,ft=nt.pendingProps,ft=nt.elementType===st?ft:Ci(st,ft),ij(tt,nt),nt.tag=1,Zf(st)?(tt=!0,cg(nt)):tt=!1,ch(nt,ot),Gi(nt,st,ft),Ii(nt,st,ft,ot),jj(null,nt,st,!0,tt,ot);case 19:return xj(tt,nt,ot);case 22:return dj(tt,nt,ot)}throw Error(p$1(156,nt.tag))};function Fk(tt,nt){return ac(tt,nt)}function $k(tt,nt,ot,st){this.tag=tt,this.key=ot,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=nt,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=st,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(tt,nt,ot,st){return new $k(tt,nt,ot,st)}function aj(tt){return tt=tt.prototype,!(!tt||!tt.isReactComponent)}function Zk(tt){if(typeof tt=="function")return aj(tt)?1:0;if(tt!=null){if(tt=tt.$$typeof,tt===Da)return 11;if(tt===Ga)return 14}return 2}function Pg(tt,nt){var ot=tt.alternate;return ot===null?(ot=Bg(tt.tag,nt,tt.key,tt.mode),ot.elementType=tt.elementType,ot.type=tt.type,ot.stateNode=tt.stateNode,ot.alternate=tt,tt.alternate=ot):(ot.pendingProps=nt,ot.type=tt.type,ot.flags=0,ot.subtreeFlags=0,ot.deletions=null),ot.flags=tt.flags&14680064,ot.childLanes=tt.childLanes,ot.lanes=tt.lanes,ot.child=tt.child,ot.memoizedProps=tt.memoizedProps,ot.memoizedState=tt.memoizedState,ot.updateQueue=tt.updateQueue,nt=tt.dependencies,ot.dependencies=nt===null?null:{lanes:nt.lanes,firstContext:nt.firstContext},ot.sibling=tt.sibling,ot.index=tt.index,ot.ref=tt.ref,ot}function Rg(tt,nt,ot,st,ft,ht){var gt=2;if(st=tt,typeof tt=="function")aj(tt)&&(gt=1);else if(typeof tt=="string")gt=5;else e:switch(tt){case ya:return Tg(ot.children,ft,ht,nt);case za:gt=8,ft|=8;break;case Aa:return tt=Bg(12,ot,nt,ft|2),tt.elementType=Aa,tt.lanes=ht,tt;case Ea:return tt=Bg(13,ot,nt,ft),tt.elementType=Ea,tt.lanes=ht,tt;case Fa:return tt=Bg(19,ot,nt,ft),tt.elementType=Fa,tt.lanes=ht,tt;case Ia:return pj(ot,ft,ht,nt);default:if(typeof tt=="object"&&tt!==null)switch(tt.$$typeof){case Ba:gt=10;break e;case Ca:gt=9;break e;case Da:gt=11;break e;case Ga:gt=14;break e;case Ha:gt=16,st=null;break e}throw Error(p$1(130,tt==null?tt:typeof tt,""))}return nt=Bg(gt,ot,nt,ft),nt.elementType=tt,nt.type=st,nt.lanes=ht,nt}function Tg(tt,nt,ot,st){return tt=Bg(7,tt,st,nt),tt.lanes=ot,tt}function pj(tt,nt,ot,st){return tt=Bg(22,tt,st,nt),tt.elementType=Ia,tt.lanes=ot,tt.stateNode={isHidden:!1},tt}function Qg(tt,nt,ot){return tt=Bg(6,tt,null,nt),tt.lanes=ot,tt}function Sg(tt,nt,ot){return nt=Bg(4,tt.children!==null?tt.children:[],tt.key,nt),nt.lanes=ot,nt.stateNode={containerInfo:tt.containerInfo,pendingChildren:null,implementation:tt.implementation},nt}function al(tt,nt,ot,st,ft){this.tag=nt,this.containerInfo=tt,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=st,this.onRecoverableError=ft,this.mutableSourceEagerHydrationData=null}function bl(tt,nt,ot,st,ft,ht,gt,yt,vt){return tt=new al(tt,nt,ot,yt,vt),nt===1?(nt=1,ht===!0&&(nt|=8)):nt=0,ht=Bg(3,null,null,nt),tt.current=ht,ht.stateNode=tt,ht.memoizedState={element:st,isDehydrated:ot,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(ht),tt}function cl(tt,nt,ot){var st=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:st==null?null:""+st,children:tt,containerInfo:nt,implementation:ot}}function dl(tt){if(!tt)return Vf;tt=tt._reactInternals;e:{if(Vb(tt)!==tt||tt.tag!==1)throw Error(p$1(170));var nt=tt;do{switch(nt.tag){case 3:nt=nt.stateNode.context;break e;case 1:if(Zf(nt.type)){nt=nt.stateNode.__reactInternalMemoizedMergedChildContext;break e}}nt=nt.return}while(nt!==null);throw Error(p$1(171))}if(tt.tag===1){var ot=tt.type;if(Zf(ot))return bg(tt,ot,nt)}return nt}function el(tt,nt,ot,st,ft,ht,gt,yt,vt){return tt=bl(ot,st,!0,tt,ft,ht,gt,yt,vt),tt.context=dl(null),ot=tt.current,st=R$1(),ft=yi(ot),ht=mh(st,ft),ht.callback=nt??null,nh(ot,ht,ft),tt.current.lanes=ft,Ac(tt,ft,st),Dk(tt,st),tt}function fl(tt,nt,ot,st){var ft=nt.current,ht=R$1(),gt=yi(ft);return ot=dl(ot),nt.context===null?nt.context=ot:nt.pendingContext=ot,nt=mh(ht,gt),nt.payload={element:tt},st=st===void 0?null:st,st!==null&&(nt.callback=st),tt=nh(ft,nt,gt),tt!==null&&(gi(tt,ft,gt,ht),oh(tt,ft,gt)),gt}function gl(tt){if(tt=tt.current,!tt.child)return null;switch(tt.child.tag){case 5:return tt.child.stateNode;default:return tt.child.stateNode}}function hl(tt,nt){if(tt=tt.memoizedState,tt!==null&&tt.dehydrated!==null){var ot=tt.retryLane;tt.retryLane=ot!==0&&ot<nt?ot:nt}}function il(tt,nt){hl(tt,nt),(tt=tt.alternate)&&hl(tt,nt)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(tt){console.error(tt)};function ll(tt){this._internalRoot=tt}ml.prototype.render=ll.prototype.render=function(tt){var nt=this._internalRoot;if(nt===null)throw Error(p$1(409));fl(tt,nt,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var tt=this._internalRoot;if(tt!==null){this._internalRoot=null;var nt=tt.containerInfo;Rk(function(){fl(null,tt,null,null)}),nt[uf]=null}};function ml(tt){this._internalRoot=tt}ml.prototype.unstable_scheduleHydration=function(tt){if(tt){var nt=Hc();tt={blockedOn:null,target:tt,priority:nt};for(var ot=0;ot<Qc.length&&nt!==0&&nt<Qc[ot].priority;ot++);Qc.splice(ot,0,tt),ot===0&&Vc(tt)}};function nl(tt){return!(!tt||tt.nodeType!==1&&tt.nodeType!==9&&tt.nodeType!==11)}function ol(tt){return!(!tt||tt.nodeType!==1&&tt.nodeType!==9&&tt.nodeType!==11&&(tt.nodeType!==8||tt.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(tt,nt,ot,st,ft){if(ft){if(typeof st=="function"){var ht=st;st=function(){var xt=gl(gt);ht.call(xt)}}var gt=el(nt,st,tt,0,null,!1,!1,"",pl);return tt._reactRootContainer=gt,tt[uf]=gt.current,sf(tt.nodeType===8?tt.parentNode:tt),Rk(),gt}for(;ft=tt.lastChild;)tt.removeChild(ft);if(typeof st=="function"){var yt=st;st=function(){var xt=gl(vt);yt.call(xt)}}var vt=bl(tt,0,!1,null,null,!1,!1,"",pl);return tt._reactRootContainer=vt,tt[uf]=vt.current,sf(tt.nodeType===8?tt.parentNode:tt),Rk(function(){fl(nt,vt,ot,st)}),vt}function rl(tt,nt,ot,st,ft){var ht=ot._reactRootContainer;if(ht){var gt=ht;if(typeof ft=="function"){var yt=ft;ft=function(){var vt=gl(gt);yt.call(vt)}}fl(nt,gt,tt,ft)}else gt=ql(ot,nt,tt,ft,st);return gl(gt)}Ec=function(tt){switch(tt.tag){case 3:var nt=tt.stateNode;if(nt.current.memoizedState.isDehydrated){var ot=tc(nt.pendingLanes);ot!==0&&(Cc(nt,ot|1),Dk(nt,B$1()),!(K$1&6)&&(Gj=B$1()+500,jg()))}break;case 13:Rk(function(){var st=ih(tt,1);if(st!==null){var ft=R$1();gi(st,tt,1,ft)}}),il(tt,1)}};Fc=function(tt){if(tt.tag===13){var nt=ih(tt,134217728);if(nt!==null){var ot=R$1();gi(nt,tt,134217728,ot)}il(tt,134217728)}};Gc=function(tt){if(tt.tag===13){var nt=yi(tt),ot=ih(tt,nt);if(ot!==null){var st=R$1();gi(ot,tt,nt,st)}il(tt,nt)}};Hc=function(){return C$1};Ic=function(tt,nt){var ot=C$1;try{return C$1=tt,nt()}finally{C$1=ot}};yb=function(tt,nt,ot){switch(nt){case"input":if(bb(tt,ot),nt=ot.name,ot.type==="radio"&&nt!=null){for(ot=tt;ot.parentNode;)ot=ot.parentNode;for(ot=ot.querySelectorAll("input[name="+JSON.stringify(""+nt)+'][type="radio"]'),nt=0;nt<ot.length;nt++){var st=ot[nt];if(st!==tt&&st.form===tt.form){var ft=Db(st);if(!ft)throw Error(p$1(90));Wa(st),bb(st,ft)}}}break;case"textarea":ib(tt,ot);break;case"select":nt=ot.value,nt!=null&&fb(tt,!!ot.multiple,nt,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue$2,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(tt){return tt=Zb(tt),tt===null?null:tt.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;reactDom_production_min.createPortal=function(tt,nt){var ot=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(nt))throw Error(p$1(200));return cl(tt,nt,null,ot)};reactDom_production_min.createRoot=function(tt,nt){if(!nl(tt))throw Error(p$1(299));var ot=!1,st="",ft=kl;return nt!=null&&(nt.unstable_strictMode===!0&&(ot=!0),nt.identifierPrefix!==void 0&&(st=nt.identifierPrefix),nt.onRecoverableError!==void 0&&(ft=nt.onRecoverableError)),nt=bl(tt,1,!1,null,null,ot,!1,st,ft),tt[uf]=nt.current,sf(tt.nodeType===8?tt.parentNode:tt),new ll(nt)};reactDom_production_min.findDOMNode=function(tt){if(tt==null)return null;if(tt.nodeType===1)return tt;var nt=tt._reactInternals;if(nt===void 0)throw typeof tt.render=="function"?Error(p$1(188)):(tt=Object.keys(tt).join(","),Error(p$1(268,tt)));return tt=Zb(nt),tt=tt===null?null:tt.stateNode,tt};reactDom_production_min.flushSync=function(tt){return Rk(tt)};reactDom_production_min.hydrate=function(tt,nt,ot){if(!ol(nt))throw Error(p$1(200));return rl(null,tt,nt,!0,ot)};reactDom_production_min.hydrateRoot=function(tt,nt,ot){if(!nl(tt))throw Error(p$1(405));var st=ot!=null&&ot.hydratedSources||null,ft=!1,ht="",gt=kl;if(ot!=null&&(ot.unstable_strictMode===!0&&(ft=!0),ot.identifierPrefix!==void 0&&(ht=ot.identifierPrefix),ot.onRecoverableError!==void 0&&(gt=ot.onRecoverableError)),nt=el(nt,null,tt,1,ot??null,ft,!1,ht,gt),tt[uf]=nt.current,sf(tt),st)for(tt=0;tt<st.length;tt++)ot=st[tt],ft=ot._getVersion,ft=ft(ot._source),nt.mutableSourceEagerHydrationData==null?nt.mutableSourceEagerHydrationData=[ot,ft]:nt.mutableSourceEagerHydrationData.push(ot,ft);return new ml(nt)};reactDom_production_min.render=function(tt,nt,ot){if(!ol(nt))throw Error(p$1(200));return rl(null,tt,nt,!1,ot)};reactDom_production_min.unmountComponentAtNode=function(tt){if(!ol(tt))throw Error(p$1(40));return tt._reactRootContainer?(Rk(function(){rl(null,null,tt,!1,function(){tt._reactRootContainer=null,tt[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(tt,nt,ot,st){if(!ol(ot))throw Error(p$1(200));if(tt==null||tt._reactInternals===void 0)throw Error(p$1(38));return rl(tt,nt,ot,!1,st)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(tt){console.error(tt)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports,createRoot,m$2=reactDomExports;createRoot=m$2.createRoot,m$2.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(tt){for(var nt=1;nt<arguments.length;nt++){var ot=arguments[nt];for(var st in ot)Object.prototype.hasOwnProperty.call(ot,st)&&(tt[st]=ot[st])}return tt},_extends$2.apply(this,arguments)}var Action;(function(tt){tt.Pop="POP",tt.Push="PUSH",tt.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(tt){tt===void 0&&(tt={});function nt(st,ft){let{pathname:ht,search:gt,hash:yt}=st.location;return createLocation("",{pathname:ht,search:gt,hash:yt},ft.state&&ft.state.usr||null,ft.state&&ft.state.key||"default")}function ot(st,ft){return typeof ft=="string"?ft:createPath(ft)}return getUrlBasedHistory(nt,ot,null,tt)}function invariant(tt,nt){if(tt===!1||tt===null||typeof tt>"u")throw new Error(nt)}function warning(tt,nt){if(!tt){typeof console<"u"&&console.warn(nt);try{throw new Error(nt)}catch{}}}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(tt,nt){return{usr:tt.state,key:tt.key,idx:nt}}function createLocation(tt,nt,ot,st){return ot===void 0&&(ot=null),_extends$2({pathname:typeof tt=="string"?tt:tt.pathname,search:"",hash:""},typeof nt=="string"?parsePath(nt):nt,{state:ot,key:nt&&nt.key||st||createKey()})}function createPath(tt){let{pathname:nt="/",search:ot="",hash:st=""}=tt;return ot&&ot!=="?"&&(nt+=ot.charAt(0)==="?"?ot:"?"+ot),st&&st!=="#"&&(nt+=st.charAt(0)==="#"?st:"#"+st),nt}function parsePath(tt){let nt={};if(tt){let ot=tt.indexOf("#");ot>=0&&(nt.hash=tt.substr(ot),tt=tt.substr(0,ot));let st=tt.indexOf("?");st>=0&&(nt.search=tt.substr(st),tt=tt.substr(0,st)),tt&&(nt.pathname=tt)}return nt}function getUrlBasedHistory(tt,nt,ot,st){st===void 0&&(st={});let{window:ft=document.defaultView,v5Compat:ht=!1}=st,gt=ft.history,yt=Action.Pop,vt=null,xt=Et();xt==null&&(xt=0,gt.replaceState(_extends$2({},gt.state,{idx:xt}),""));function Et(){return(gt.state||{idx:null}).idx}function wt(){yt=Action.Pop;let Pt=Et(),St=Pt==null?null:Pt-xt;xt=Pt,vt&&vt({action:yt,location:jt.location,delta:St})}function kt(Pt,St){yt=Action.Push;let $t=createLocation(jt.location,Pt,St);xt=Et()+1;let Rt=getHistoryState($t,xt),Tt=jt.createHref($t);try{gt.pushState(Rt,"",Tt)}catch(Nt){if(Nt instanceof DOMException&&Nt.name==="DataCloneError")throw Nt;ft.location.assign(Tt)}ht&&vt&&vt({action:yt,location:jt.location,delta:1})}function Ct(Pt,St){yt=Action.Replace;let $t=createLocation(jt.location,Pt,St);xt=Et();let Rt=getHistoryState($t,xt),Tt=jt.createHref($t);gt.replaceState(Rt,"",Tt),ht&&vt&&vt({action:yt,location:jt.location,delta:0})}function bt(Pt){let St=ft.location.origin!=="null"?ft.location.origin:ft.location.href,$t=typeof Pt=="string"?Pt:createPath(Pt);return $t=$t.replace(/ $/,"%20"),invariant(St,"No window.location.(origin|href) available to create URL for href: "+$t),new URL($t,St)}let jt={get action(){return yt},get location(){return tt(ft,gt)},listen(Pt){if(vt)throw new Error("A history only accepts one active listener");return ft.addEventListener(PopStateEventType,wt),vt=Pt,()=>{ft.removeEventListener(PopStateEventType,wt),vt=null}},createHref(Pt){return nt(ft,Pt)},createURL:bt,encodeLocation(Pt){let St=bt(Pt);return{pathname:St.pathname,search:St.search,hash:St.hash}},push:kt,replace:Ct,go(Pt){return gt.go(Pt)}};return jt}var ResultType;(function(tt){tt.data="data",tt.deferred="deferred",tt.redirect="redirect",tt.error="error"})(ResultType||(ResultType={}));function matchRoutes(tt,nt,ot){return ot===void 0&&(ot="/"),matchRoutesImpl(tt,nt,ot,!1)}function matchRoutesImpl(tt,nt,ot,st){let ft=typeof nt=="string"?parsePath(nt):nt,ht=stripBasename(ft.pathname||"/",ot);if(ht==null)return null;let gt=flattenRoutes(tt);rankRouteBranches(gt);let yt=null;for(let vt=0;yt==null&&vt<gt.length;++vt){let xt=decodePath(ht);yt=matchRouteBranch(gt[vt],xt,st)}return yt}function flattenRoutes(tt,nt,ot,st){nt===void 0&&(nt=[]),ot===void 0&&(ot=[]),st===void 0&&(st="");let ft=(ht,gt,yt)=>{let vt={relativePath:yt===void 0?ht.path||"":yt,caseSensitive:ht.caseSensitive===!0,childrenIndex:gt,route:ht};vt.relativePath.startsWith("/")&&(invariant(vt.relativePath.startsWith(st),'Absolute route path "'+vt.relativePath+'" nested under path '+('"'+st+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),vt.relativePath=vt.relativePath.slice(st.length));let xt=joinPaths([st,vt.relativePath]),Et=ot.concat(vt);ht.children&&ht.children.length>0&&(invariant(ht.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+xt+'".')),flattenRoutes(ht.children,nt,Et,xt)),!(ht.path==null&&!ht.index)&&nt.push({path:xt,score:computeScore(xt,ht.index),routesMeta:Et})};return tt.forEach((ht,gt)=>{var yt;if(ht.path===""||!((yt=ht.path)!=null&&yt.includes("?")))ft(ht,gt);else for(let vt of explodeOptionalSegments(ht.path))ft(ht,gt,vt)}),nt}function explodeOptionalSegments(tt){let nt=tt.split("/");if(nt.length===0)return[];let[ot,...st]=nt,ft=ot.endsWith("?"),ht=ot.replace(/\?$/,"");if(st.length===0)return ft?[ht,""]:[ht];let gt=explodeOptionalSegments(st.join("/")),yt=[];return yt.push(...gt.map(vt=>vt===""?ht:[ht,vt].join("/"))),ft&&yt.push(...gt),yt.map(vt=>tt.startsWith("/")&&vt===""?"/":vt)}function rankRouteBranches(tt){tt.sort((nt,ot)=>nt.score!==ot.score?ot.score-nt.score:compareIndexes(nt.routesMeta.map(st=>st.childrenIndex),ot.routesMeta.map(st=>st.childrenIndex)))}const paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=tt=>tt==="*";function computeScore(tt,nt){let ot=tt.split("/"),st=ot.length;return ot.some(isSplat)&&(st+=splatPenalty),nt&&(st+=indexRouteValue),ot.filter(ft=>!isSplat(ft)).reduce((ft,ht)=>ft+(paramRe.test(ht)?dynamicSegmentValue:ht===""?emptySegmentValue:staticSegmentValue),st)}function compareIndexes(tt,nt){return tt.length===nt.length&&tt.slice(0,-1).every((st,ft)=>st===nt[ft])?tt[tt.length-1]-nt[nt.length-1]:0}function matchRouteBranch(tt,nt,ot){let{routesMeta:st}=tt,ft={},ht="/",gt=[];for(let yt=0;yt<st.length;++yt){let vt=st[yt],xt=yt===st.length-1,Et=ht==="/"?nt:nt.slice(ht.length)||"/",wt=matchPath({path:vt.relativePath,caseSensitive:vt.caseSensitive,end:xt},Et),kt=vt.route;if(!wt&&xt&&ot&&!st[st.length-1].route.index&&(wt=matchPath({path:vt.relativePath,caseSensitive:vt.caseSensitive,end:!1},Et)),!wt)return null;Object.assign(ft,wt.params),gt.push({params:ft,pathname:joinPaths([ht,wt.pathname]),pathnameBase:normalizePathname(joinPaths([ht,wt.pathnameBase])),route:kt}),wt.pathnameBase!=="/"&&(ht=joinPaths([ht,wt.pathnameBase]))}return gt}function matchPath(tt,nt){typeof tt=="string"&&(tt={path:tt,caseSensitive:!1,end:!0});let[ot,st]=compilePath(tt.path,tt.caseSensitive,tt.end),ft=nt.match(ot);if(!ft)return null;let ht=ft[0],gt=ht.replace(/(.)\/+$/,"$1"),yt=ft.slice(1);return{params:st.reduce((xt,Et,wt)=>{let{paramName:kt,isOptional:Ct}=Et;if(kt==="*"){let jt=yt[wt]||"";gt=ht.slice(0,ht.length-jt.length).replace(/(.)\/+$/,"$1")}const bt=yt[wt];return Ct&&!bt?xt[kt]=void 0:xt[kt]=(bt||"").replace(/%2F/g,"/"),xt},{}),pathname:ht,pathnameBase:gt,pattern:tt}}function compilePath(tt,nt,ot){nt===void 0&&(nt=!1),ot===void 0&&(ot=!0),warning(tt==="*"||!tt.endsWith("*")||tt.endsWith("/*"),'Route path "'+tt+'" will be treated as if it were '+('"'+tt.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+tt.replace(/\*$/,"/*")+'".'));let st=[],ft="^"+tt.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(gt,yt,vt)=>(st.push({paramName:yt,isOptional:vt!=null}),vt?"/?([^\\/]+)?":"/([^\\/]+)"));return tt.endsWith("*")?(st.push({paramName:"*"}),ft+=tt==="*"||tt==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):ot?ft+="\\/*$":tt!==""&&tt!=="/"&&(ft+="(?:(?=\\/|$))"),[new RegExp(ft,nt?void 0:"i"),st]}function decodePath(tt){try{return tt.split("/").map(nt=>decodeURIComponent(nt).replace(/\//g,"%2F")).join("/")}catch(nt){return warning(!1,'The URL path "'+tt+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+nt+").")),tt}}function stripBasename(tt,nt){if(nt==="/")return tt;if(!tt.toLowerCase().startsWith(nt.toLowerCase()))return null;let ot=nt.endsWith("/")?nt.length-1:nt.length,st=tt.charAt(ot);return st&&st!=="/"?null:tt.slice(ot)||"/"}function resolvePath(tt,nt){nt===void 0&&(nt="/");let{pathname:ot,search:st="",hash:ft=""}=typeof tt=="string"?parsePath(tt):tt;return{pathname:ot?ot.startsWith("/")?ot:resolvePathname(ot,nt):nt,search:normalizeSearch(st),hash:normalizeHash(ft)}}function resolvePathname(tt,nt){let ot=nt.replace(/\/+$/,"").split("/");return tt.split("/").forEach(ft=>{ft===".."?ot.length>1&&ot.pop():ft!=="."&&ot.push(ft)}),ot.length>1?ot.join("/"):"/"}function getInvalidPathError(tt,nt,ot,st){return"Cannot include a '"+tt+"' character in a manually specified "+("`to."+nt+"` field ["+JSON.stringify(st)+"].  Please separate it out to the ")+("`to."+ot+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(tt){return tt.filter((nt,ot)=>ot===0||nt.route.path&&nt.route.path.length>0)}function getResolveToMatches(tt,nt){let ot=getPathContributingMatches(tt);return nt?ot.map((st,ft)=>ft===ot.length-1?st.pathname:st.pathnameBase):ot.map(st=>st.pathnameBase)}function resolveTo(tt,nt,ot,st){st===void 0&&(st=!1);let ft;typeof tt=="string"?ft=parsePath(tt):(ft=_extends$2({},tt),invariant(!ft.pathname||!ft.pathname.includes("?"),getInvalidPathError("?","pathname","search",ft)),invariant(!ft.pathname||!ft.pathname.includes("#"),getInvalidPathError("#","pathname","hash",ft)),invariant(!ft.search||!ft.search.includes("#"),getInvalidPathError("#","search","hash",ft)));let ht=tt===""||ft.pathname==="",gt=ht?"/":ft.pathname,yt;if(gt==null)yt=ot;else{let wt=nt.length-1;if(!st&&gt.startsWith("..")){let kt=gt.split("/");for(;kt[0]==="..";)kt.shift(),wt-=1;ft.pathname=kt.join("/")}yt=wt>=0?nt[wt]:"/"}let vt=resolvePath(ft,yt),xt=gt&&gt!=="/"&&gt.endsWith("/"),Et=(ht||gt===".")&&ot.endsWith("/");return!vt.pathname.endsWith("/")&&(xt||Et)&&(vt.pathname+="/"),vt}const joinPaths=tt=>tt.join("/").replace(/\/\/+/g,"/"),normalizePathname=tt=>tt.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=tt=>!tt||tt==="?"?"":tt.startsWith("?")?tt:"?"+tt,normalizeHash=tt=>!tt||tt==="#"?"":tt.startsWith("#")?tt:"#"+tt;function isRouteErrorResponse(tt){return tt!=null&&typeof tt.status=="number"&&typeof tt.statusText=="string"&&typeof tt.internal=="boolean"&&"data"in tt}const validMutationMethodsArr=["post","put","patch","delete"];new Set(validMutationMethodsArr);const validRequestMethodsArr=["get",...validMutationMethodsArr];new Set(validRequestMethodsArr);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(tt){for(var nt=1;nt<arguments.length;nt++){var ot=arguments[nt];for(var st in ot)Object.prototype.hasOwnProperty.call(ot,st)&&(tt[st]=ot[st])}return tt},_extends$1.apply(this,arguments)}const DataRouterContext=reactExports.createContext(null),DataRouterStateContext=reactExports.createContext(null),NavigationContext=reactExports.createContext(null),LocationContext=reactExports.createContext(null),RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1}),RouteErrorContext=reactExports.createContext(null);function useHref(tt,nt){let{relative:ot}=nt===void 0?{}:nt;useInRouterContext()||invariant(!1);let{basename:st,navigator:ft}=reactExports.useContext(NavigationContext),{hash:ht,pathname:gt,search:yt}=useResolvedPath(tt,{relative:ot}),vt=gt;return st!=="/"&&(vt=gt==="/"?st:joinPaths([st,gt])),ft.createHref({pathname:vt,search:yt,hash:ht})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),reactExports.useContext(LocationContext).location}function useIsomorphicLayoutEffect(tt){reactExports.useContext(NavigationContext).static||reactExports.useLayoutEffect(tt)}function useNavigate(){let{isDataRoute:tt}=reactExports.useContext(RouteContext);return tt?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){useInRouterContext()||invariant(!1);let tt=reactExports.useContext(DataRouterContext),{basename:nt,future:ot,navigator:st}=reactExports.useContext(NavigationContext),{matches:ft}=reactExports.useContext(RouteContext),{pathname:ht}=useLocation(),gt=JSON.stringify(getResolveToMatches(ft,ot.v7_relativeSplatPath)),yt=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{yt.current=!0}),reactExports.useCallback(function(xt,Et){if(Et===void 0&&(Et={}),!yt.current)return;if(typeof xt=="number"){st.go(xt);return}let wt=resolveTo(xt,JSON.parse(gt),ht,Et.relative==="path");tt==null&&nt!=="/"&&(wt.pathname=wt.pathname==="/"?nt:joinPaths([nt,wt.pathname])),(Et.replace?st.replace:st.push)(wt,Et.state,Et)},[nt,st,gt,ht,tt])}function useResolvedPath(tt,nt){let{relative:ot}=nt===void 0?{}:nt,{future:st}=reactExports.useContext(NavigationContext),{matches:ft}=reactExports.useContext(RouteContext),{pathname:ht}=useLocation(),gt=JSON.stringify(getResolveToMatches(ft,st.v7_relativeSplatPath));return reactExports.useMemo(()=>resolveTo(tt,JSON.parse(gt),ht,ot==="path"),[tt,gt,ht,ot])}function useRoutes(tt,nt){return useRoutesImpl(tt,nt)}function useRoutesImpl(tt,nt,ot,st){useInRouterContext()||invariant(!1);let{navigator:ft}=reactExports.useContext(NavigationContext),{matches:ht}=reactExports.useContext(RouteContext),gt=ht[ht.length-1],yt=gt?gt.params:{};gt&&gt.pathname;let vt=gt?gt.pathnameBase:"/";gt&&gt.route;let xt=useLocation(),Et;if(nt){var wt;let Pt=typeof nt=="string"?parsePath(nt):nt;vt==="/"||(wt=Pt.pathname)!=null&&wt.startsWith(vt)||invariant(!1),Et=Pt}else Et=xt;let kt=Et.pathname||"/",Ct=kt;if(vt!=="/"){let Pt=vt.replace(/^\//,"").split("/");Ct="/"+kt.replace(/^\//,"").split("/").slice(Pt.length).join("/")}let bt=matchRoutes(tt,{pathname:Ct}),jt=_renderMatches(bt&&bt.map(Pt=>Object.assign({},Pt,{params:Object.assign({},yt,Pt.params),pathname:joinPaths([vt,ft.encodeLocation?ft.encodeLocation(Pt.pathname).pathname:Pt.pathname]),pathnameBase:Pt.pathnameBase==="/"?vt:joinPaths([vt,ft.encodeLocation?ft.encodeLocation(Pt.pathnameBase).pathname:Pt.pathnameBase])})),ht,ot,st);return nt&&jt?reactExports.createElement(LocationContext.Provider,{value:{location:_extends$1({pathname:"/",search:"",hash:"",state:null,key:"default"},Et),navigationType:Action.Pop}},jt):jt}function DefaultErrorComponent(){let tt=useRouteError(),nt=isRouteErrorResponse(tt)?tt.status+" "+tt.statusText:tt instanceof Error?tt.message:JSON.stringify(tt),ot=tt instanceof Error?tt.stack:null,ft={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},nt),ot?reactExports.createElement("pre",{style:ft},ot):null,null)}const defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null);class RenderErrorBoundary extends reactExports.Component{constructor(nt){super(nt),this.state={location:nt.location,revalidation:nt.revalidation,error:nt.error}}static getDerivedStateFromError(nt){return{error:nt}}static getDerivedStateFromProps(nt,ot){return ot.location!==nt.location||ot.revalidation!=="idle"&&nt.revalidation==="idle"?{error:nt.error,location:nt.location,revalidation:nt.revalidation}:{error:nt.error!==void 0?nt.error:ot.error,location:ot.location,revalidation:nt.revalidation||ot.revalidation}}componentDidCatch(nt,ot){console.error("React Router caught the following error during render",nt,ot)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(tt){let{routeContext:nt,match:ot,children:st}=tt,ft=reactExports.useContext(DataRouterContext);return ft&&ft.static&&ft.staticContext&&(ot.route.errorElement||ot.route.ErrorBoundary)&&(ft.staticContext._deepestRenderedBoundaryId=ot.route.id),reactExports.createElement(RouteContext.Provider,{value:nt},st)}function _renderMatches(tt,nt,ot,st){var ft;if(nt===void 0&&(nt=[]),ot===void 0&&(ot=null),st===void 0&&(st=null),tt==null){var ht;if(!ot)return null;if(ot.errors)tt=ot.matches;else if((ht=st)!=null&&ht.v7_partialHydration&&nt.length===0&&!ot.initialized&&ot.matches.length>0)tt=ot.matches;else return null}let gt=tt,yt=(ft=ot)==null?void 0:ft.errors;if(yt!=null){let Et=gt.findIndex(wt=>wt.route.id&&(yt==null?void 0:yt[wt.route.id])!==void 0);Et>=0||invariant(!1),gt=gt.slice(0,Math.min(gt.length,Et+1))}let vt=!1,xt=-1;if(ot&&st&&st.v7_partialHydration)for(let Et=0;Et<gt.length;Et++){let wt=gt[Et];if((wt.route.HydrateFallback||wt.route.hydrateFallbackElement)&&(xt=Et),wt.route.id){let{loaderData:kt,errors:Ct}=ot,bt=wt.route.loader&&kt[wt.route.id]===void 0&&(!Ct||Ct[wt.route.id]===void 0);if(wt.route.lazy||bt){vt=!0,xt>=0?gt=gt.slice(0,xt+1):gt=[gt[0]];break}}}return gt.reduceRight((Et,wt,kt)=>{let Ct,bt=!1,jt=null,Pt=null;ot&&(Ct=yt&&wt.route.id?yt[wt.route.id]:void 0,jt=wt.route.errorElement||defaultErrorElement,vt&&(xt<0&&kt===0?(bt=!0,Pt=null):xt===kt&&(bt=!0,Pt=wt.route.hydrateFallbackElement||null)));let St=nt.concat(gt.slice(0,kt+1)),$t=()=>{let Rt;return Ct?Rt=jt:bt?Rt=Pt:wt.route.Component?Rt=reactExports.createElement(wt.route.Component,null):wt.route.element?Rt=wt.route.element:Rt=Et,reactExports.createElement(RenderedRoute,{match:wt,routeContext:{outlet:Et,matches:St,isDataRoute:ot!=null},children:Rt})};return ot&&(wt.route.ErrorBoundary||wt.route.errorElement||kt===0)?reactExports.createElement(RenderErrorBoundary,{location:ot.location,revalidation:ot.revalidation,component:jt,error:Ct,children:$t(),routeContext:{outlet:null,matches:St,isDataRoute:!0}}):$t()},null)}var DataRouterHook$1=function(tt){return tt.UseBlocker="useBlocker",tt.UseRevalidator="useRevalidator",tt.UseNavigateStable="useNavigate",tt}(DataRouterHook$1||{}),DataRouterStateHook$1=function(tt){return tt.UseBlocker="useBlocker",tt.UseLoaderData="useLoaderData",tt.UseActionData="useActionData",tt.UseRouteError="useRouteError",tt.UseNavigation="useNavigation",tt.UseRouteLoaderData="useRouteLoaderData",tt.UseMatches="useMatches",tt.UseRevalidator="useRevalidator",tt.UseNavigateStable="useNavigate",tt.UseRouteId="useRouteId",tt}(DataRouterStateHook$1||{});function useDataRouterContext(tt){let nt=reactExports.useContext(DataRouterContext);return nt||invariant(!1),nt}function useDataRouterState(tt){let nt=reactExports.useContext(DataRouterStateContext);return nt||invariant(!1),nt}function useRouteContext(tt){let nt=reactExports.useContext(RouteContext);return nt||invariant(!1),nt}function useCurrentRouteId(tt){let nt=useRouteContext(),ot=nt.matches[nt.matches.length-1];return ot.route.id||invariant(!1),ot.route.id}function useRouteError(){var tt;let nt=reactExports.useContext(RouteErrorContext),ot=useDataRouterState(DataRouterStateHook$1.UseRouteError),st=useCurrentRouteId(DataRouterStateHook$1.UseRouteError);return nt!==void 0?nt:(tt=ot.errors)==null?void 0:tt[st]}function useNavigateStable(){let{router:tt}=useDataRouterContext(DataRouterHook$1.UseNavigateStable),nt=useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable),ot=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{ot.current=!0}),reactExports.useCallback(function(ft,ht){ht===void 0&&(ht={}),ot.current&&(typeof ft=="number"?tt.navigate(ft):tt.navigate(ft,_extends$1({fromRouteId:nt},ht)))},[tt,nt])}const alreadyWarned={};function warnOnce(tt,nt){alreadyWarned[nt]||(alreadyWarned[nt]=!0,console.warn(nt))}const logDeprecation=(tt,nt,ot)=>warnOnce(tt,"⚠️ React Router Future Flag Warning: "+nt+". "+("You can use the `"+tt+"` future flag to opt-in early. ")+("For more information, see "+ot+"."));function logV6DeprecationWarnings(tt,nt){tt!=null&&tt.v7_startTransition||logDeprecation("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(tt!=null&&tt.v7_relativeSplatPath)&&!nt&&logDeprecation("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Navigate(tt){let{to:nt,replace:ot,state:st,relative:ft}=tt;useInRouterContext()||invariant(!1);let{future:ht,static:gt}=reactExports.useContext(NavigationContext),{matches:yt}=reactExports.useContext(RouteContext),{pathname:vt}=useLocation(),xt=useNavigate(),Et=resolveTo(nt,getResolveToMatches(yt,ht.v7_relativeSplatPath),vt,ft==="path"),wt=JSON.stringify(Et);return reactExports.useEffect(()=>xt(JSON.parse(wt),{replace:ot,state:st,relative:ft}),[xt,wt,ft,ot,st]),null}function Route(tt){invariant(!1)}function Router(tt){let{basename:nt="/",children:ot=null,location:st,navigationType:ft=Action.Pop,navigator:ht,static:gt=!1,future:yt}=tt;useInRouterContext()&&invariant(!1);let vt=nt.replace(/^\/*/,"/"),xt=reactExports.useMemo(()=>({basename:vt,navigator:ht,static:gt,future:_extends$1({v7_relativeSplatPath:!1},yt)}),[vt,yt,ht,gt]);typeof st=="string"&&(st=parsePath(st));let{pathname:Et="/",search:wt="",hash:kt="",state:Ct=null,key:bt="default"}=st,jt=reactExports.useMemo(()=>{let Pt=stripBasename(Et,vt);return Pt==null?null:{location:{pathname:Pt,search:wt,hash:kt,state:Ct,key:bt},navigationType:ft}},[vt,Et,wt,kt,Ct,bt,ft]);return jt==null?null:reactExports.createElement(NavigationContext.Provider,{value:xt},reactExports.createElement(LocationContext.Provider,{children:ot,value:jt}))}function Routes(tt){let{children:nt,location:ot}=tt;return useRoutes(createRoutesFromChildren(nt),ot)}new Promise(()=>{});function createRoutesFromChildren(tt,nt){nt===void 0&&(nt=[]);let ot=[];return reactExports.Children.forEach(tt,(st,ft)=>{if(!reactExports.isValidElement(st))return;let ht=[...nt,ft];if(st.type===reactExports.Fragment){ot.push.apply(ot,createRoutesFromChildren(st.props.children,ht));return}st.type!==Route&&invariant(!1),!st.props.index||!st.props.children||invariant(!1);let gt={id:st.props.id||ht.join("-"),caseSensitive:st.props.caseSensitive,element:st.props.element,Component:st.props.Component,index:st.props.index,path:st.props.path,loader:st.props.loader,action:st.props.action,errorElement:st.props.errorElement,ErrorBoundary:st.props.ErrorBoundary,hasErrorBoundary:st.props.ErrorBoundary!=null||st.props.errorElement!=null,shouldRevalidate:st.props.shouldRevalidate,handle:st.props.handle,lazy:st.props.lazy};st.props.children&&(gt.children=createRoutesFromChildren(st.props.children,ht)),ot.push(gt)}),ot}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(tt){for(var nt=1;nt<arguments.length;nt++){var ot=arguments[nt];for(var st in ot)Object.prototype.hasOwnProperty.call(ot,st)&&(tt[st]=ot[st])}return tt},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(tt,nt){if(tt==null)return{};var ot={},st=Object.keys(tt),ft,ht;for(ht=0;ht<st.length;ht++)ft=st[ht],!(nt.indexOf(ft)>=0)&&(ot[ft]=tt[ft]);return ot}function isModifiedEvent(tt){return!!(tt.metaKey||tt.altKey||tt.ctrlKey||tt.shiftKey)}function shouldProcessLinkClick(tt,nt){return tt.button===0&&(!nt||nt==="_self")&&!isModifiedEvent(tt)}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],REACT_ROUTER_VERSION="6";try{window.__reactRouterVersion=REACT_ROUTER_VERSION}catch{}const START_TRANSITION="startTransition",startTransitionImpl=React[START_TRANSITION];function BrowserRouter(tt){let{basename:nt,children:ot,future:st,window:ft}=tt,ht=reactExports.useRef();ht.current==null&&(ht.current=createBrowserHistory({window:ft,v5Compat:!0}));let gt=ht.current,[yt,vt]=reactExports.useState({action:gt.action,location:gt.location}),{v7_startTransition:xt}=st||{},Et=reactExports.useCallback(wt=>{xt&&startTransitionImpl?startTransitionImpl(()=>vt(wt)):vt(wt)},[vt,xt]);return reactExports.useLayoutEffect(()=>gt.listen(Et),[gt,Et]),reactExports.useEffect(()=>logV6DeprecationWarnings(st),[st]),reactExports.createElement(Router,{basename:nt,children:ot,location:yt.location,navigationType:yt.action,navigator:gt,future:st})}const isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports.forwardRef(function(nt,ot){let{onClick:st,relative:ft,reloadDocument:ht,replace:gt,state:yt,target:vt,to:xt,preventScrollReset:Et,viewTransition:wt}=nt,kt=_objectWithoutPropertiesLoose(nt,_excluded),{basename:Ct}=reactExports.useContext(NavigationContext),bt,jt=!1;if(typeof xt=="string"&&ABSOLUTE_URL_REGEX.test(xt)&&(bt=xt,isBrowser))try{let Rt=new URL(window.location.href),Tt=xt.startsWith("//")?new URL(Rt.protocol+xt):new URL(xt),Nt=stripBasename(Tt.pathname,Ct);Tt.origin===Rt.origin&&Nt!=null?xt=Nt+Tt.search+Tt.hash:jt=!0}catch{}let Pt=useHref(xt,{relative:ft}),St=useLinkClickHandler(xt,{replace:gt,state:yt,target:vt,preventScrollReset:Et,relative:ft,viewTransition:wt});function $t(Rt){st&&st(Rt),Rt.defaultPrevented||St(Rt)}return reactExports.createElement("a",_extends({},kt,{href:bt||Pt,onClick:jt||ht?st:$t,ref:ot,target:vt}))});var DataRouterHook;(function(tt){tt.UseScrollRestoration="useScrollRestoration",tt.UseSubmit="useSubmit",tt.UseSubmitFetcher="useSubmitFetcher",tt.UseFetcher="useFetcher",tt.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(tt){tt.UseFetcher="useFetcher",tt.UseFetchers="useFetchers",tt.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function useLinkClickHandler(tt,nt){let{target:ot,replace:st,state:ft,preventScrollReset:ht,relative:gt,viewTransition:yt}=nt===void 0?{}:nt,vt=useNavigate(),xt=useLocation(),Et=useResolvedPath(tt,{relative:gt});return reactExports.useCallback(wt=>{if(shouldProcessLinkClick(wt,ot)){wt.preventDefault();let kt=st!==void 0?st:createPath(xt)===createPath(Et);vt(tt,{replace:kt,state:ft,preventScrollReset:ht,relative:gt,viewTransition:yt})}},[xt,vt,Et,st,ft,ot,tt,ht,gt,yt])}const createStoreImpl=tt=>{let nt;const ot=new Set,st=(xt,Et)=>{const wt=typeof xt=="function"?xt(nt):xt;if(!Object.is(wt,nt)){const kt=nt;nt=Et??(typeof wt!="object"||wt===null)?wt:Object.assign({},nt,wt),ot.forEach(Ct=>Ct(nt,kt))}},ft=()=>nt,yt={setState:st,getState:ft,getInitialState:()=>vt,subscribe:xt=>(ot.add(xt),()=>ot.delete(xt))},vt=nt=tt(st,ft,yt);return yt},createStore=tt=>tt?createStoreImpl(tt):createStoreImpl,identity=tt=>tt;function useStore(tt,nt=identity){const ot=o$1.useSyncExternalStore(tt.subscribe,()=>nt(tt.getState()),()=>nt(tt.getInitialState()));return o$1.useDebugValue(ot),ot}const createImpl=tt=>{const nt=createStore(tt),ot=st=>useStore(nt,st);return Object.assign(ot,nt),ot},create=tt=>tt?createImpl(tt):createImpl;function bind(tt,nt){return function(){return tt.apply(nt,arguments)}}const{toString:toString$1}=Object.prototype,{getPrototypeOf}=Object,kindOf=(tt=>nt=>{const ot=toString$1.call(nt);return tt[ot]||(tt[ot]=ot.slice(8,-1).toLowerCase())})(Object.create(null)),kindOfTest=tt=>(tt=tt.toLowerCase(),nt=>kindOf(nt)===tt),typeOfTest=tt=>nt=>typeof nt===tt,{isArray}=Array,isUndefined=typeOfTest("undefined");function isBuffer(tt){return tt!==null&&!isUndefined(tt)&&tt.constructor!==null&&!isUndefined(tt.constructor)&&isFunction(tt.constructor.isBuffer)&&tt.constructor.isBuffer(tt)}const isArrayBuffer=kindOfTest("ArrayBuffer");function isArrayBufferView(tt){let nt;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?nt=ArrayBuffer.isView(tt):nt=tt&&tt.buffer&&isArrayBuffer(tt.buffer),nt}const isString=typeOfTest("string"),isFunction=typeOfTest("function"),isNumber=typeOfTest("number"),isObject$1=tt=>tt!==null&&typeof tt=="object",isBoolean=tt=>tt===!0||tt===!1,isPlainObject=tt=>{if(kindOf(tt)!=="object")return!1;const nt=getPrototypeOf(tt);return(nt===null||nt===Object.prototype||Object.getPrototypeOf(nt)===null)&&!(Symbol.toStringTag in tt)&&!(Symbol.iterator in tt)},isDate=kindOfTest("Date"),isFile=kindOfTest("File"),isBlob=kindOfTest("Blob"),isFileList=kindOfTest("FileList"),isStream=tt=>isObject$1(tt)&&isFunction(tt.pipe),isFormData=tt=>{let nt;return tt&&(typeof FormData=="function"&&tt instanceof FormData||isFunction(tt.append)&&((nt=kindOf(tt))==="formdata"||nt==="object"&&isFunction(tt.toString)&&tt.toString()==="[object FormData]"))},isURLSearchParams=kindOfTest("URLSearchParams"),[isReadableStream,isRequest,isResponse,isHeaders]=["ReadableStream","Request","Response","Headers"].map(kindOfTest),trim$1=tt=>tt.trim?tt.trim():tt.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function forEach(tt,nt,{allOwnKeys:ot=!1}={}){if(tt===null||typeof tt>"u")return;let st,ft;if(typeof tt!="object"&&(tt=[tt]),isArray(tt))for(st=0,ft=tt.length;st<ft;st++)nt.call(null,tt[st],st,tt);else{const ht=ot?Object.getOwnPropertyNames(tt):Object.keys(tt),gt=ht.length;let yt;for(st=0;st<gt;st++)yt=ht[st],nt.call(null,tt[yt],yt,tt)}}function findKey(tt,nt){nt=nt.toLowerCase();const ot=Object.keys(tt);let st=ot.length,ft;for(;st-- >0;)if(ft=ot[st],nt===ft.toLowerCase())return ft;return null}const _global=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,isContextDefined=tt=>!isUndefined(tt)&&tt!==_global;function merge(){const{caseless:tt}=isContextDefined(this)&&this||{},nt={},ot=(st,ft)=>{const ht=tt&&findKey(nt,ft)||ft;isPlainObject(nt[ht])&&isPlainObject(st)?nt[ht]=merge(nt[ht],st):isPlainObject(st)?nt[ht]=merge({},st):isArray(st)?nt[ht]=st.slice():nt[ht]=st};for(let st=0,ft=arguments.length;st<ft;st++)arguments[st]&&forEach(arguments[st],ot);return nt}const extend=(tt,nt,ot,{allOwnKeys:st}={})=>(forEach(nt,(ft,ht)=>{ot&&isFunction(ft)?tt[ht]=bind(ft,ot):tt[ht]=ft},{allOwnKeys:st}),tt),stripBOM=tt=>(tt.charCodeAt(0)===65279&&(tt=tt.slice(1)),tt),inherits=(tt,nt,ot,st)=>{tt.prototype=Object.create(nt.prototype,st),tt.prototype.constructor=tt,Object.defineProperty(tt,"super",{value:nt.prototype}),ot&&Object.assign(tt.prototype,ot)},toFlatObject=(tt,nt,ot,st)=>{let ft,ht,gt;const yt={};if(nt=nt||{},tt==null)return nt;do{for(ft=Object.getOwnPropertyNames(tt),ht=ft.length;ht-- >0;)gt=ft[ht],(!st||st(gt,tt,nt))&&!yt[gt]&&(nt[gt]=tt[gt],yt[gt]=!0);tt=ot!==!1&&getPrototypeOf(tt)}while(tt&&(!ot||ot(tt,nt))&&tt!==Object.prototype);return nt},endsWith=(tt,nt,ot)=>{tt=String(tt),(ot===void 0||ot>tt.length)&&(ot=tt.length),ot-=nt.length;const st=tt.indexOf(nt,ot);return st!==-1&&st===ot},toArray$1=tt=>{if(!tt)return null;if(isArray(tt))return tt;let nt=tt.length;if(!isNumber(nt))return null;const ot=new Array(nt);for(;nt-- >0;)ot[nt]=tt[nt];return ot},isTypedArray=(tt=>nt=>tt&&nt instanceof tt)(typeof Uint8Array<"u"&&getPrototypeOf(Uint8Array)),forEachEntry=(tt,nt)=>{const st=(tt&&tt[Symbol.iterator]).call(tt);let ft;for(;(ft=st.next())&&!ft.done;){const ht=ft.value;nt.call(tt,ht[0],ht[1])}},matchAll=(tt,nt)=>{let ot;const st=[];for(;(ot=tt.exec(nt))!==null;)st.push(ot);return st},isHTMLForm=kindOfTest("HTMLFormElement"),toCamelCase=tt=>tt.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(ot,st,ft){return st.toUpperCase()+ft}),hasOwnProperty=(({hasOwnProperty:tt})=>(nt,ot)=>tt.call(nt,ot))(Object.prototype),isRegExp=kindOfTest("RegExp"),reduceDescriptors=(tt,nt)=>{const ot=Object.getOwnPropertyDescriptors(tt),st={};forEach(ot,(ft,ht)=>{let gt;(gt=nt(ft,ht,tt))!==!1&&(st[ht]=gt||ft)}),Object.defineProperties(tt,st)},freezeMethods=tt=>{reduceDescriptors(tt,(nt,ot)=>{if(isFunction(tt)&&["arguments","caller","callee"].indexOf(ot)!==-1)return!1;const st=tt[ot];if(isFunction(st)){if(nt.enumerable=!1,"writable"in nt){nt.writable=!1;return}nt.set||(nt.set=()=>{throw Error("Can not rewrite read-only method '"+ot+"'")})}})},toObjectSet=(tt,nt)=>{const ot={},st=ft=>{ft.forEach(ht=>{ot[ht]=!0})};return isArray(tt)?st(tt):st(String(tt).split(nt)),ot},noop=()=>{},toFiniteNumber=(tt,nt)=>tt!=null&&Number.isFinite(tt=+tt)?tt:nt,ALPHA="abcdefghijklmnopqrstuvwxyz",DIGIT="0123456789",ALPHABET={DIGIT,ALPHA,ALPHA_DIGIT:ALPHA+ALPHA.toUpperCase()+DIGIT},generateString=(tt=16,nt=ALPHABET.ALPHA_DIGIT)=>{let ot="";const{length:st}=nt;for(;tt--;)ot+=nt[Math.random()*st|0];return ot};function isSpecCompliantForm(tt){return!!(tt&&isFunction(tt.append)&&tt[Symbol.toStringTag]==="FormData"&&tt[Symbol.iterator])}const toJSONObject=tt=>{const nt=new Array(10),ot=(st,ft)=>{if(isObject$1(st)){if(nt.indexOf(st)>=0)return;if(!("toJSON"in st)){nt[ft]=st;const ht=isArray(st)?[]:{};return forEach(st,(gt,yt)=>{const vt=ot(gt,ft+1);!isUndefined(vt)&&(ht[yt]=vt)}),nt[ft]=void 0,ht}}return st};return ot(tt,0)},isAsyncFn=kindOfTest("AsyncFunction"),isThenable=tt=>tt&&(isObject$1(tt)||isFunction(tt))&&isFunction(tt.then)&&isFunction(tt.catch),_setImmediate=((tt,nt)=>tt?setImmediate:nt?((ot,st)=>(_global.addEventListener("message",({source:ft,data:ht})=>{ft===_global&&ht===ot&&st.length&&st.shift()()},!1),ft=>{st.push(ft),_global.postMessage(ot,"*")}))(`axios@${Math.random()}`,[]):ot=>setTimeout(ot))(typeof setImmediate=="function",isFunction(_global.postMessage)),asap=typeof queueMicrotask<"u"?queueMicrotask.bind(_global):typeof process<"u"&&process.nextTick||_setImmediate,utils$1={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isBoolean,isObject:isObject$1,isPlainObject,isReadableStream,isRequest,isResponse,isHeaders,isUndefined,isDate,isFile,isBlob,isRegExp,isFunction,isStream,isURLSearchParams,isTypedArray,isFileList,forEach,merge,extend,trim:trim$1,stripBOM,inherits,toFlatObject,kindOf,kindOfTest,endsWith,toArray:toArray$1,forEachEntry,matchAll,isHTMLForm,hasOwnProperty,hasOwnProp:hasOwnProperty,reduceDescriptors,freezeMethods,toObjectSet,toCamelCase,noop,toFiniteNumber,findKey,global:_global,isContextDefined,ALPHABET,generateString,isSpecCompliantForm,toJSONObject,isAsyncFn,isThenable,setImmediate:_setImmediate,asap};function AxiosError(tt,nt,ot,st,ft){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=tt,this.name="AxiosError",nt&&(this.code=nt),ot&&(this.config=ot),st&&(this.request=st),ft&&(this.response=ft,this.status=ft.status?ft.status:null)}utils$1.inherits(AxiosError,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:utils$1.toJSONObject(this.config),code:this.code,status:this.status}}});const prototype$1=AxiosError.prototype,descriptors={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(tt=>{descriptors[tt]={value:tt}});Object.defineProperties(AxiosError,descriptors);Object.defineProperty(prototype$1,"isAxiosError",{value:!0});AxiosError.from=(tt,nt,ot,st,ft,ht)=>{const gt=Object.create(prototype$1);return utils$1.toFlatObject(tt,gt,function(vt){return vt!==Error.prototype},yt=>yt!=="isAxiosError"),AxiosError.call(gt,tt.message,nt,ot,st,ft),gt.cause=tt,gt.name=tt.name,ht&&Object.assign(gt,ht),gt};const httpAdapter=null;function isVisitable(tt){return utils$1.isPlainObject(tt)||utils$1.isArray(tt)}function removeBrackets(tt){return utils$1.endsWith(tt,"[]")?tt.slice(0,-2):tt}function renderKey(tt,nt,ot){return tt?tt.concat(nt).map(function(ft,ht){return ft=removeBrackets(ft),!ot&&ht?"["+ft+"]":ft}).join(ot?".":""):nt}function isFlatArray(tt){return utils$1.isArray(tt)&&!tt.some(isVisitable)}const predicates=utils$1.toFlatObject(utils$1,{},null,function(nt){return/^is[A-Z]/.test(nt)});function toFormData(tt,nt,ot){if(!utils$1.isObject(tt))throw new TypeError("target must be an object");nt=nt||new FormData,ot=utils$1.toFlatObject(ot,{metaTokens:!0,dots:!1,indexes:!1},!1,function(jt,Pt){return!utils$1.isUndefined(Pt[jt])});const st=ot.metaTokens,ft=ot.visitor||Et,ht=ot.dots,gt=ot.indexes,vt=(ot.Blob||typeof Blob<"u"&&Blob)&&utils$1.isSpecCompliantForm(nt);if(!utils$1.isFunction(ft))throw new TypeError("visitor must be a function");function xt(bt){if(bt===null)return"";if(utils$1.isDate(bt))return bt.toISOString();if(!vt&&utils$1.isBlob(bt))throw new AxiosError("Blob is not supported. Use a Buffer instead.");return utils$1.isArrayBuffer(bt)||utils$1.isTypedArray(bt)?vt&&typeof Blob=="function"?new Blob([bt]):Buffer.from(bt):bt}function Et(bt,jt,Pt){let St=bt;if(bt&&!Pt&&typeof bt=="object"){if(utils$1.endsWith(jt,"{}"))jt=st?jt:jt.slice(0,-2),bt=JSON.stringify(bt);else if(utils$1.isArray(bt)&&isFlatArray(bt)||(utils$1.isFileList(bt)||utils$1.endsWith(jt,"[]"))&&(St=utils$1.toArray(bt)))return jt=removeBrackets(jt),St.forEach(function(Rt,Tt){!(utils$1.isUndefined(Rt)||Rt===null)&&nt.append(gt===!0?renderKey([jt],Tt,ht):gt===null?jt:jt+"[]",xt(Rt))}),!1}return isVisitable(bt)?!0:(nt.append(renderKey(Pt,jt,ht),xt(bt)),!1)}const wt=[],kt=Object.assign(predicates,{defaultVisitor:Et,convertValue:xt,isVisitable});function Ct(bt,jt){if(!utils$1.isUndefined(bt)){if(wt.indexOf(bt)!==-1)throw Error("Circular reference detected in "+jt.join("."));wt.push(bt),utils$1.forEach(bt,function(St,$t){(!(utils$1.isUndefined(St)||St===null)&&ft.call(nt,St,utils$1.isString($t)?$t.trim():$t,jt,kt))===!0&&Ct(St,jt?jt.concat($t):[$t])}),wt.pop()}}if(!utils$1.isObject(tt))throw new TypeError("data must be an object");return Ct(tt),nt}function encode$2(tt){const nt={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(tt).replace(/[!'()~]|%20|%00/g,function(st){return nt[st]})}function AxiosURLSearchParams(tt,nt){this._pairs=[],tt&&toFormData(tt,this,nt)}const prototype=AxiosURLSearchParams.prototype;prototype.append=function(nt,ot){this._pairs.push([nt,ot])};prototype.toString=function(nt){const ot=nt?function(st){return nt.call(this,st,encode$2)}:encode$2;return this._pairs.map(function(ft){return ot(ft[0])+"="+ot(ft[1])},"").join("&")};function encode$1(tt){return encodeURIComponent(tt).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function buildURL(tt,nt,ot){if(!nt)return tt;const st=ot&&ot.encode||encode$1,ft=ot&&ot.serialize;let ht;if(ft?ht=ft(nt,ot):ht=utils$1.isURLSearchParams(nt)?nt.toString():new AxiosURLSearchParams(nt,ot).toString(st),ht){const gt=tt.indexOf("#");gt!==-1&&(tt=tt.slice(0,gt)),tt+=(tt.indexOf("?")===-1?"?":"&")+ht}return tt}class InterceptorManager{constructor(){this.handlers=[]}use(nt,ot,st){return this.handlers.push({fulfilled:nt,rejected:ot,synchronous:st?st.synchronous:!1,runWhen:st?st.runWhen:null}),this.handlers.length-1}eject(nt){this.handlers[nt]&&(this.handlers[nt]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(nt){utils$1.forEach(this.handlers,function(st){st!==null&&nt(st)})}}const transitionalDefaults={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},URLSearchParams$1=typeof URLSearchParams<"u"?URLSearchParams:AxiosURLSearchParams,FormData$1=typeof FormData<"u"?FormData:null,Blob$1=typeof Blob<"u"?Blob:null,platform$1={isBrowser:!0,classes:{URLSearchParams:URLSearchParams$1,FormData:FormData$1,Blob:Blob$1},protocols:["http","https","file","blob","url","data"]},hasBrowserEnv=typeof window<"u"&&typeof document<"u",_navigator=typeof navigator=="object"&&navigator||void 0,hasStandardBrowserEnv=hasBrowserEnv&&(!_navigator||["ReactNative","NativeScript","NS"].indexOf(_navigator.product)<0),hasStandardBrowserWebWorkerEnv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",origin=hasBrowserEnv&&window.location.href||"http://localhost",utils=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv,hasStandardBrowserEnv,hasStandardBrowserWebWorkerEnv,navigator:_navigator,origin},Symbol.toStringTag,{value:"Module"})),platform={...utils,...platform$1};function toURLEncodedForm(tt,nt){return toFormData(tt,new platform.classes.URLSearchParams,Object.assign({visitor:function(ot,st,ft,ht){return platform.isNode&&utils$1.isBuffer(ot)?(this.append(st,ot.toString("base64")),!1):ht.defaultVisitor.apply(this,arguments)}},nt))}function parsePropPath(tt){return utils$1.matchAll(/\w+|\[(\w*)]/g,tt).map(nt=>nt[0]==="[]"?"":nt[1]||nt[0])}function arrayToObject(tt){const nt={},ot=Object.keys(tt);let st;const ft=ot.length;let ht;for(st=0;st<ft;st++)ht=ot[st],nt[ht]=tt[ht];return nt}function formDataToJSON(tt){function nt(ot,st,ft,ht){let gt=ot[ht++];if(gt==="__proto__")return!0;const yt=Number.isFinite(+gt),vt=ht>=ot.length;return gt=!gt&&utils$1.isArray(ft)?ft.length:gt,vt?(utils$1.hasOwnProp(ft,gt)?ft[gt]=[ft[gt],st]:ft[gt]=st,!yt):((!ft[gt]||!utils$1.isObject(ft[gt]))&&(ft[gt]=[]),nt(ot,st,ft[gt],ht)&&utils$1.isArray(ft[gt])&&(ft[gt]=arrayToObject(ft[gt])),!yt)}if(utils$1.isFormData(tt)&&utils$1.isFunction(tt.entries)){const ot={};return utils$1.forEachEntry(tt,(st,ft)=>{nt(parsePropPath(st),ft,ot,0)}),ot}return null}function stringifySafely(tt,nt,ot){if(utils$1.isString(tt))try{return(nt||JSON.parse)(tt),utils$1.trim(tt)}catch(st){if(st.name!=="SyntaxError")throw st}return(0,JSON.stringify)(tt)}const defaults={transitional:transitionalDefaults,adapter:["xhr","http","fetch"],transformRequest:[function(nt,ot){const st=ot.getContentType()||"",ft=st.indexOf("application/json")>-1,ht=utils$1.isObject(nt);if(ht&&utils$1.isHTMLForm(nt)&&(nt=new FormData(nt)),utils$1.isFormData(nt))return ft?JSON.stringify(formDataToJSON(nt)):nt;if(utils$1.isArrayBuffer(nt)||utils$1.isBuffer(nt)||utils$1.isStream(nt)||utils$1.isFile(nt)||utils$1.isBlob(nt)||utils$1.isReadableStream(nt))return nt;if(utils$1.isArrayBufferView(nt))return nt.buffer;if(utils$1.isURLSearchParams(nt))return ot.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),nt.toString();let yt;if(ht){if(st.indexOf("application/x-www-form-urlencoded")>-1)return toURLEncodedForm(nt,this.formSerializer).toString();if((yt=utils$1.isFileList(nt))||st.indexOf("multipart/form-data")>-1){const vt=this.env&&this.env.FormData;return toFormData(yt?{"files[]":nt}:nt,vt&&new vt,this.formSerializer)}}return ht||ft?(ot.setContentType("application/json",!1),stringifySafely(nt)):nt}],transformResponse:[function(nt){const ot=this.transitional||defaults.transitional,st=ot&&ot.forcedJSONParsing,ft=this.responseType==="json";if(utils$1.isResponse(nt)||utils$1.isReadableStream(nt))return nt;if(nt&&utils$1.isString(nt)&&(st&&!this.responseType||ft)){const gt=!(ot&&ot.silentJSONParsing)&&ft;try{return JSON.parse(nt)}catch(yt){if(gt)throw yt.name==="SyntaxError"?AxiosError.from(yt,AxiosError.ERR_BAD_RESPONSE,this,null,this.response):yt}}return nt}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:platform.classes.FormData,Blob:platform.classes.Blob},validateStatus:function(nt){return nt>=200&&nt<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};utils$1.forEach(["delete","get","head","post","put","patch"],tt=>{defaults.headers[tt]={}});const ignoreDuplicateOf=utils$1.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),parseHeaders=tt=>{const nt={};let ot,st,ft;return tt&&tt.split(`
`).forEach(function(gt){ft=gt.indexOf(":"),ot=gt.substring(0,ft).trim().toLowerCase(),st=gt.substring(ft+1).trim(),!(!ot||nt[ot]&&ignoreDuplicateOf[ot])&&(ot==="set-cookie"?nt[ot]?nt[ot].push(st):nt[ot]=[st]:nt[ot]=nt[ot]?nt[ot]+", "+st:st)}),nt},$internals=Symbol("internals");function normalizeHeader(tt){return tt&&String(tt).trim().toLowerCase()}function normalizeValue(tt){return tt===!1||tt==null?tt:utils$1.isArray(tt)?tt.map(normalizeValue):String(tt)}function parseTokens(tt){const nt=Object.create(null),ot=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let st;for(;st=ot.exec(tt);)nt[st[1]]=st[2];return nt}const isValidHeaderName=tt=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(tt.trim());function matchHeaderValue(tt,nt,ot,st,ft){if(utils$1.isFunction(st))return st.call(this,nt,ot);if(ft&&(nt=ot),!!utils$1.isString(nt)){if(utils$1.isString(st))return nt.indexOf(st)!==-1;if(utils$1.isRegExp(st))return st.test(nt)}}function formatHeader(tt){return tt.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(nt,ot,st)=>ot.toUpperCase()+st)}function buildAccessors(tt,nt){const ot=utils$1.toCamelCase(" "+nt);["get","set","has"].forEach(st=>{Object.defineProperty(tt,st+ot,{value:function(ft,ht,gt){return this[st].call(this,nt,ft,ht,gt)},configurable:!0})})}class AxiosHeaders{constructor(nt){nt&&this.set(nt)}set(nt,ot,st){const ft=this;function ht(yt,vt,xt){const Et=normalizeHeader(vt);if(!Et)throw new Error("header name must be a non-empty string");const wt=utils$1.findKey(ft,Et);(!wt||ft[wt]===void 0||xt===!0||xt===void 0&&ft[wt]!==!1)&&(ft[wt||vt]=normalizeValue(yt))}const gt=(yt,vt)=>utils$1.forEach(yt,(xt,Et)=>ht(xt,Et,vt));if(utils$1.isPlainObject(nt)||nt instanceof this.constructor)gt(nt,ot);else if(utils$1.isString(nt)&&(nt=nt.trim())&&!isValidHeaderName(nt))gt(parseHeaders(nt),ot);else if(utils$1.isHeaders(nt))for(const[yt,vt]of nt.entries())ht(vt,yt,st);else nt!=null&&ht(ot,nt,st);return this}get(nt,ot){if(nt=normalizeHeader(nt),nt){const st=utils$1.findKey(this,nt);if(st){const ft=this[st];if(!ot)return ft;if(ot===!0)return parseTokens(ft);if(utils$1.isFunction(ot))return ot.call(this,ft,st);if(utils$1.isRegExp(ot))return ot.exec(ft);throw new TypeError("parser must be boolean|regexp|function")}}}has(nt,ot){if(nt=normalizeHeader(nt),nt){const st=utils$1.findKey(this,nt);return!!(st&&this[st]!==void 0&&(!ot||matchHeaderValue(this,this[st],st,ot)))}return!1}delete(nt,ot){const st=this;let ft=!1;function ht(gt){if(gt=normalizeHeader(gt),gt){const yt=utils$1.findKey(st,gt);yt&&(!ot||matchHeaderValue(st,st[yt],yt,ot))&&(delete st[yt],ft=!0)}}return utils$1.isArray(nt)?nt.forEach(ht):ht(nt),ft}clear(nt){const ot=Object.keys(this);let st=ot.length,ft=!1;for(;st--;){const ht=ot[st];(!nt||matchHeaderValue(this,this[ht],ht,nt,!0))&&(delete this[ht],ft=!0)}return ft}normalize(nt){const ot=this,st={};return utils$1.forEach(this,(ft,ht)=>{const gt=utils$1.findKey(st,ht);if(gt){ot[gt]=normalizeValue(ft),delete ot[ht];return}const yt=nt?formatHeader(ht):String(ht).trim();yt!==ht&&delete ot[ht],ot[yt]=normalizeValue(ft),st[yt]=!0}),this}concat(...nt){return this.constructor.concat(this,...nt)}toJSON(nt){const ot=Object.create(null);return utils$1.forEach(this,(st,ft)=>{st!=null&&st!==!1&&(ot[ft]=nt&&utils$1.isArray(st)?st.join(", "):st)}),ot}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([nt,ot])=>nt+": "+ot).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(nt){return nt instanceof this?nt:new this(nt)}static concat(nt,...ot){const st=new this(nt);return ot.forEach(ft=>st.set(ft)),st}static accessor(nt){const st=(this[$internals]=this[$internals]={accessors:{}}).accessors,ft=this.prototype;function ht(gt){const yt=normalizeHeader(gt);st[yt]||(buildAccessors(ft,gt),st[yt]=!0)}return utils$1.isArray(nt)?nt.forEach(ht):ht(nt),this}}AxiosHeaders.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);utils$1.reduceDescriptors(AxiosHeaders.prototype,({value:tt},nt)=>{let ot=nt[0].toUpperCase()+nt.slice(1);return{get:()=>tt,set(st){this[ot]=st}}});utils$1.freezeMethods(AxiosHeaders);function transformData(tt,nt){const ot=this||defaults,st=nt||ot,ft=AxiosHeaders.from(st.headers);let ht=st.data;return utils$1.forEach(tt,function(yt){ht=yt.call(ot,ht,ft.normalize(),nt?nt.status:void 0)}),ft.normalize(),ht}function isCancel(tt){return!!(tt&&tt.__CANCEL__)}function CanceledError(tt,nt,ot){AxiosError.call(this,tt??"canceled",AxiosError.ERR_CANCELED,nt,ot),this.name="CanceledError"}utils$1.inherits(CanceledError,AxiosError,{__CANCEL__:!0});function settle(tt,nt,ot){const st=ot.config.validateStatus;!ot.status||!st||st(ot.status)?tt(ot):nt(new AxiosError("Request failed with status code "+ot.status,[AxiosError.ERR_BAD_REQUEST,AxiosError.ERR_BAD_RESPONSE][Math.floor(ot.status/100)-4],ot.config,ot.request,ot))}function parseProtocol(tt){const nt=/^([-+\w]{1,25})(:?\/\/|:)/.exec(tt);return nt&&nt[1]||""}function speedometer(tt,nt){tt=tt||10;const ot=new Array(tt),st=new Array(tt);let ft=0,ht=0,gt;return nt=nt!==void 0?nt:1e3,function(vt){const xt=Date.now(),Et=st[ht];gt||(gt=xt),ot[ft]=vt,st[ft]=xt;let wt=ht,kt=0;for(;wt!==ft;)kt+=ot[wt++],wt=wt%tt;if(ft=(ft+1)%tt,ft===ht&&(ht=(ht+1)%tt),xt-gt<nt)return;const Ct=Et&&xt-Et;return Ct?Math.round(kt*1e3/Ct):void 0}}function throttle(tt,nt){let ot=0,st=1e3/nt,ft,ht;const gt=(xt,Et=Date.now())=>{ot=Et,ft=null,ht&&(clearTimeout(ht),ht=null),tt.apply(null,xt)};return[(...xt)=>{const Et=Date.now(),wt=Et-ot;wt>=st?gt(xt,Et):(ft=xt,ht||(ht=setTimeout(()=>{ht=null,gt(ft)},st-wt)))},()=>ft&&gt(ft)]}const progressEventReducer=(tt,nt,ot=3)=>{let st=0;const ft=speedometer(50,250);return throttle(ht=>{const gt=ht.loaded,yt=ht.lengthComputable?ht.total:void 0,vt=gt-st,xt=ft(vt),Et=gt<=yt;st=gt;const wt={loaded:gt,total:yt,progress:yt?gt/yt:void 0,bytes:vt,rate:xt||void 0,estimated:xt&&yt&&Et?(yt-gt)/xt:void 0,event:ht,lengthComputable:yt!=null,[nt?"download":"upload"]:!0};tt(wt)},ot)},progressEventDecorator=(tt,nt)=>{const ot=tt!=null;return[st=>nt[0]({lengthComputable:ot,total:tt,loaded:st}),nt[1]]},asyncDecorator=tt=>(...nt)=>utils$1.asap(()=>tt(...nt)),isURLSameOrigin=platform.hasStandardBrowserEnv?function(){const nt=platform.navigator&&/(msie|trident)/i.test(platform.navigator.userAgent),ot=document.createElement("a");let st;function ft(ht){let gt=ht;return nt&&(ot.setAttribute("href",gt),gt=ot.href),ot.setAttribute("href",gt),{href:ot.href,protocol:ot.protocol?ot.protocol.replace(/:$/,""):"",host:ot.host,search:ot.search?ot.search.replace(/^\?/,""):"",hash:ot.hash?ot.hash.replace(/^#/,""):"",hostname:ot.hostname,port:ot.port,pathname:ot.pathname.charAt(0)==="/"?ot.pathname:"/"+ot.pathname}}return st=ft(window.location.href),function(gt){const yt=utils$1.isString(gt)?ft(gt):gt;return yt.protocol===st.protocol&&yt.host===st.host}}():function(){return function(){return!0}}(),cookies=platform.hasStandardBrowserEnv?{write(tt,nt,ot,st,ft,ht){const gt=[tt+"="+encodeURIComponent(nt)];utils$1.isNumber(ot)&&gt.push("expires="+new Date(ot).toGMTString()),utils$1.isString(st)&&gt.push("path="+st),utils$1.isString(ft)&&gt.push("domain="+ft),ht===!0&&gt.push("secure"),document.cookie=gt.join("; ")},read(tt){const nt=document.cookie.match(new RegExp("(^|;\\s*)("+tt+")=([^;]*)"));return nt?decodeURIComponent(nt[3]):null},remove(tt){this.write(tt,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function isAbsoluteURL(tt){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(tt)}function combineURLs(tt,nt){return nt?tt.replace(/\/?\/$/,"")+"/"+nt.replace(/^\/+/,""):tt}function buildFullPath(tt,nt){return tt&&!isAbsoluteURL(nt)?combineURLs(tt,nt):nt}const headersToObject=tt=>tt instanceof AxiosHeaders?{...tt}:tt;function mergeConfig(tt,nt){nt=nt||{};const ot={};function st(xt,Et,wt){return utils$1.isPlainObject(xt)&&utils$1.isPlainObject(Et)?utils$1.merge.call({caseless:wt},xt,Et):utils$1.isPlainObject(Et)?utils$1.merge({},Et):utils$1.isArray(Et)?Et.slice():Et}function ft(xt,Et,wt){if(utils$1.isUndefined(Et)){if(!utils$1.isUndefined(xt))return st(void 0,xt,wt)}else return st(xt,Et,wt)}function ht(xt,Et){if(!utils$1.isUndefined(Et))return st(void 0,Et)}function gt(xt,Et){if(utils$1.isUndefined(Et)){if(!utils$1.isUndefined(xt))return st(void 0,xt)}else return st(void 0,Et)}function yt(xt,Et,wt){if(wt in nt)return st(xt,Et);if(wt in tt)return st(void 0,xt)}const vt={url:ht,method:ht,data:ht,baseURL:gt,transformRequest:gt,transformResponse:gt,paramsSerializer:gt,timeout:gt,timeoutMessage:gt,withCredentials:gt,withXSRFToken:gt,adapter:gt,responseType:gt,xsrfCookieName:gt,xsrfHeaderName:gt,onUploadProgress:gt,onDownloadProgress:gt,decompress:gt,maxContentLength:gt,maxBodyLength:gt,beforeRedirect:gt,transport:gt,httpAgent:gt,httpsAgent:gt,cancelToken:gt,socketPath:gt,responseEncoding:gt,validateStatus:yt,headers:(xt,Et)=>ft(headersToObject(xt),headersToObject(Et),!0)};return utils$1.forEach(Object.keys(Object.assign({},tt,nt)),function(Et){const wt=vt[Et]||ft,kt=wt(tt[Et],nt[Et],Et);utils$1.isUndefined(kt)&&wt!==yt||(ot[Et]=kt)}),ot}const resolveConfig=tt=>{const nt=mergeConfig({},tt);let{data:ot,withXSRFToken:st,xsrfHeaderName:ft,xsrfCookieName:ht,headers:gt,auth:yt}=nt;nt.headers=gt=AxiosHeaders.from(gt),nt.url=buildURL(buildFullPath(nt.baseURL,nt.url),tt.params,tt.paramsSerializer),yt&&gt.set("Authorization","Basic "+btoa((yt.username||"")+":"+(yt.password?unescape(encodeURIComponent(yt.password)):"")));let vt;if(utils$1.isFormData(ot)){if(platform.hasStandardBrowserEnv||platform.hasStandardBrowserWebWorkerEnv)gt.setContentType(void 0);else if((vt=gt.getContentType())!==!1){const[xt,...Et]=vt?vt.split(";").map(wt=>wt.trim()).filter(Boolean):[];gt.setContentType([xt||"multipart/form-data",...Et].join("; "))}}if(platform.hasStandardBrowserEnv&&(st&&utils$1.isFunction(st)&&(st=st(nt)),st||st!==!1&&isURLSameOrigin(nt.url))){const xt=ft&&ht&&cookies.read(ht);xt&&gt.set(ft,xt)}return nt},isXHRAdapterSupported=typeof XMLHttpRequest<"u",xhrAdapter=isXHRAdapterSupported&&function(tt){return new Promise(function(ot,st){const ft=resolveConfig(tt);let ht=ft.data;const gt=AxiosHeaders.from(ft.headers).normalize();let{responseType:yt,onUploadProgress:vt,onDownloadProgress:xt}=ft,Et,wt,kt,Ct,bt;function jt(){Ct&&Ct(),bt&&bt(),ft.cancelToken&&ft.cancelToken.unsubscribe(Et),ft.signal&&ft.signal.removeEventListener("abort",Et)}let Pt=new XMLHttpRequest;Pt.open(ft.method.toUpperCase(),ft.url,!0),Pt.timeout=ft.timeout;function St(){if(!Pt)return;const Rt=AxiosHeaders.from("getAllResponseHeaders"in Pt&&Pt.getAllResponseHeaders()),Nt={data:!yt||yt==="text"||yt==="json"?Pt.responseText:Pt.response,status:Pt.status,statusText:Pt.statusText,headers:Rt,config:tt,request:Pt};settle(function(Ot){ot(Ot),jt()},function(Ot){st(Ot),jt()},Nt),Pt=null}"onloadend"in Pt?Pt.onloadend=St:Pt.onreadystatechange=function(){!Pt||Pt.readyState!==4||Pt.status===0&&!(Pt.responseURL&&Pt.responseURL.indexOf("file:")===0)||setTimeout(St)},Pt.onabort=function(){Pt&&(st(new AxiosError("Request aborted",AxiosError.ECONNABORTED,tt,Pt)),Pt=null)},Pt.onerror=function(){st(new AxiosError("Network Error",AxiosError.ERR_NETWORK,tt,Pt)),Pt=null},Pt.ontimeout=function(){let Tt=ft.timeout?"timeout of "+ft.timeout+"ms exceeded":"timeout exceeded";const Nt=ft.transitional||transitionalDefaults;ft.timeoutErrorMessage&&(Tt=ft.timeoutErrorMessage),st(new AxiosError(Tt,Nt.clarifyTimeoutError?AxiosError.ETIMEDOUT:AxiosError.ECONNABORTED,tt,Pt)),Pt=null},ht===void 0&&gt.setContentType(null),"setRequestHeader"in Pt&&utils$1.forEach(gt.toJSON(),function(Tt,Nt){Pt.setRequestHeader(Nt,Tt)}),utils$1.isUndefined(ft.withCredentials)||(Pt.withCredentials=!!ft.withCredentials),yt&&yt!=="json"&&(Pt.responseType=ft.responseType),xt&&([kt,bt]=progressEventReducer(xt,!0),Pt.addEventListener("progress",kt)),vt&&Pt.upload&&([wt,Ct]=progressEventReducer(vt),Pt.upload.addEventListener("progress",wt),Pt.upload.addEventListener("loadend",Ct)),(ft.cancelToken||ft.signal)&&(Et=Rt=>{Pt&&(st(!Rt||Rt.type?new CanceledError(null,tt,Pt):Rt),Pt.abort(),Pt=null)},ft.cancelToken&&ft.cancelToken.subscribe(Et),ft.signal&&(ft.signal.aborted?Et():ft.signal.addEventListener("abort",Et)));const $t=parseProtocol(ft.url);if($t&&platform.protocols.indexOf($t)===-1){st(new AxiosError("Unsupported protocol "+$t+":",AxiosError.ERR_BAD_REQUEST,tt));return}Pt.send(ht||null)})},composeSignals=(tt,nt)=>{const{length:ot}=tt=tt?tt.filter(Boolean):[];if(nt||ot){let st=new AbortController,ft;const ht=function(xt){if(!ft){ft=!0,yt();const Et=xt instanceof Error?xt:this.reason;st.abort(Et instanceof AxiosError?Et:new CanceledError(Et instanceof Error?Et.message:Et))}};let gt=nt&&setTimeout(()=>{gt=null,ht(new AxiosError(`timeout ${nt} of ms exceeded`,AxiosError.ETIMEDOUT))},nt);const yt=()=>{tt&&(gt&&clearTimeout(gt),gt=null,tt.forEach(xt=>{xt.unsubscribe?xt.unsubscribe(ht):xt.removeEventListener("abort",ht)}),tt=null)};tt.forEach(xt=>xt.addEventListener("abort",ht));const{signal:vt}=st;return vt.unsubscribe=()=>utils$1.asap(yt),vt}},streamChunk=function*(tt,nt){let ot=tt.byteLength;if(ot<nt){yield tt;return}let st=0,ft;for(;st<ot;)ft=st+nt,yield tt.slice(st,ft),st=ft},readBytes=async function*(tt,nt){for await(const ot of readStream(tt))yield*streamChunk(ot,nt)},readStream=async function*(tt){if(tt[Symbol.asyncIterator]){yield*tt;return}const nt=tt.getReader();try{for(;;){const{done:ot,value:st}=await nt.read();if(ot)break;yield st}}finally{await nt.cancel()}},trackStream=(tt,nt,ot,st)=>{const ft=readBytes(tt,nt);let ht=0,gt,yt=vt=>{gt||(gt=!0,st&&st(vt))};return new ReadableStream({async pull(vt){try{const{done:xt,value:Et}=await ft.next();if(xt){yt(),vt.close();return}let wt=Et.byteLength;if(ot){let kt=ht+=wt;ot(kt)}vt.enqueue(new Uint8Array(Et))}catch(xt){throw yt(xt),xt}},cancel(vt){return yt(vt),ft.return()}},{highWaterMark:2})},isFetchSupported=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",isReadableStreamSupported=isFetchSupported&&typeof ReadableStream=="function",encodeText=isFetchSupported&&(typeof TextEncoder=="function"?(tt=>nt=>tt.encode(nt))(new TextEncoder):async tt=>new Uint8Array(await new Response(tt).arrayBuffer())),test=(tt,...nt)=>{try{return!!tt(...nt)}catch{return!1}},supportsRequestStream=isReadableStreamSupported&&test(()=>{let tt=!1;const nt=new Request(platform.origin,{body:new ReadableStream,method:"POST",get duplex(){return tt=!0,"half"}}).headers.has("Content-Type");return tt&&!nt}),DEFAULT_CHUNK_SIZE=64*1024,supportsResponseStream=isReadableStreamSupported&&test(()=>utils$1.isReadableStream(new Response("").body)),resolvers={stream:supportsResponseStream&&(tt=>tt.body)};isFetchSupported&&(tt=>{["text","arrayBuffer","blob","formData","stream"].forEach(nt=>{!resolvers[nt]&&(resolvers[nt]=utils$1.isFunction(tt[nt])?ot=>ot[nt]():(ot,st)=>{throw new AxiosError(`Response type '${nt}' is not supported`,AxiosError.ERR_NOT_SUPPORT,st)})})})(new Response);const getBodyLength=async tt=>{if(tt==null)return 0;if(utils$1.isBlob(tt))return tt.size;if(utils$1.isSpecCompliantForm(tt))return(await new Request(platform.origin,{method:"POST",body:tt}).arrayBuffer()).byteLength;if(utils$1.isArrayBufferView(tt)||utils$1.isArrayBuffer(tt))return tt.byteLength;if(utils$1.isURLSearchParams(tt)&&(tt=tt+""),utils$1.isString(tt))return(await encodeText(tt)).byteLength},resolveBodyLength=async(tt,nt)=>{const ot=utils$1.toFiniteNumber(tt.getContentLength());return ot??getBodyLength(nt)},fetchAdapter=isFetchSupported&&(async tt=>{let{url:nt,method:ot,data:st,signal:ft,cancelToken:ht,timeout:gt,onDownloadProgress:yt,onUploadProgress:vt,responseType:xt,headers:Et,withCredentials:wt="same-origin",fetchOptions:kt}=resolveConfig(tt);xt=xt?(xt+"").toLowerCase():"text";let Ct=composeSignals([ft,ht&&ht.toAbortSignal()],gt),bt;const jt=Ct&&Ct.unsubscribe&&(()=>{Ct.unsubscribe()});let Pt;try{if(vt&&supportsRequestStream&&ot!=="get"&&ot!=="head"&&(Pt=await resolveBodyLength(Et,st))!==0){let Nt=new Request(nt,{method:"POST",body:st,duplex:"half"}),At;if(utils$1.isFormData(st)&&(At=Nt.headers.get("content-type"))&&Et.setContentType(At),Nt.body){const[Ot,It]=progressEventDecorator(Pt,progressEventReducer(asyncDecorator(vt)));st=trackStream(Nt.body,DEFAULT_CHUNK_SIZE,Ot,It)}}utils$1.isString(wt)||(wt=wt?"include":"omit");const St="credentials"in Request.prototype;bt=new Request(nt,{...kt,signal:Ct,method:ot.toUpperCase(),headers:Et.normalize().toJSON(),body:st,duplex:"half",credentials:St?wt:void 0});let $t=await fetch(bt);const Rt=supportsResponseStream&&(xt==="stream"||xt==="response");if(supportsResponseStream&&(yt||Rt&&jt)){const Nt={};["status","statusText","headers"].forEach(Ut=>{Nt[Ut]=$t[Ut]});const At=utils$1.toFiniteNumber($t.headers.get("content-length")),[Ot,It]=yt&&progressEventDecorator(At,progressEventReducer(asyncDecorator(yt),!0))||[];$t=new Response(trackStream($t.body,DEFAULT_CHUNK_SIZE,Ot,()=>{It&&It(),jt&&jt()}),Nt)}xt=xt||"text";let Tt=await resolvers[utils$1.findKey(resolvers,xt)||"text"]($t,tt);return!Rt&&jt&&jt(),await new Promise((Nt,At)=>{settle(Nt,At,{data:Tt,headers:AxiosHeaders.from($t.headers),status:$t.status,statusText:$t.statusText,config:tt,request:bt})})}catch(St){throw jt&&jt(),St&&St.name==="TypeError"&&/fetch/i.test(St.message)?Object.assign(new AxiosError("Network Error",AxiosError.ERR_NETWORK,tt,bt),{cause:St.cause||St}):AxiosError.from(St,St&&St.code,tt,bt)}}),knownAdapters={http:httpAdapter,xhr:xhrAdapter,fetch:fetchAdapter};utils$1.forEach(knownAdapters,(tt,nt)=>{if(tt){try{Object.defineProperty(tt,"name",{value:nt})}catch{}Object.defineProperty(tt,"adapterName",{value:nt})}});const renderReason=tt=>`- ${tt}`,isResolvedHandle=tt=>utils$1.isFunction(tt)||tt===null||tt===!1,adapters={getAdapter:tt=>{tt=utils$1.isArray(tt)?tt:[tt];const{length:nt}=tt;let ot,st;const ft={};for(let ht=0;ht<nt;ht++){ot=tt[ht];let gt;if(st=ot,!isResolvedHandle(ot)&&(st=knownAdapters[(gt=String(ot)).toLowerCase()],st===void 0))throw new AxiosError(`Unknown adapter '${gt}'`);if(st)break;ft[gt||"#"+ht]=st}if(!st){const ht=Object.entries(ft).map(([yt,vt])=>`adapter ${yt} `+(vt===!1?"is not supported by the environment":"is not available in the build"));let gt=nt?ht.length>1?`since :
`+ht.map(renderReason).join(`
`):" "+renderReason(ht[0]):"as no adapter specified";throw new AxiosError("There is no suitable adapter to dispatch the request "+gt,"ERR_NOT_SUPPORT")}return st},adapters:knownAdapters};function throwIfCancellationRequested(tt){if(tt.cancelToken&&tt.cancelToken.throwIfRequested(),tt.signal&&tt.signal.aborted)throw new CanceledError(null,tt)}function dispatchRequest(tt){return throwIfCancellationRequested(tt),tt.headers=AxiosHeaders.from(tt.headers),tt.data=transformData.call(tt,tt.transformRequest),["post","put","patch"].indexOf(tt.method)!==-1&&tt.headers.setContentType("application/x-www-form-urlencoded",!1),adapters.getAdapter(tt.adapter||defaults.adapter)(tt).then(function(st){return throwIfCancellationRequested(tt),st.data=transformData.call(tt,tt.transformResponse,st),st.headers=AxiosHeaders.from(st.headers),st},function(st){return isCancel(st)||(throwIfCancellationRequested(tt),st&&st.response&&(st.response.data=transformData.call(tt,tt.transformResponse,st.response),st.response.headers=AxiosHeaders.from(st.response.headers))),Promise.reject(st)})}const VERSION="1.7.7",validators$1={};["object","boolean","number","function","string","symbol"].forEach((tt,nt)=>{validators$1[tt]=function(st){return typeof st===tt||"a"+(nt<1?"n ":" ")+tt}});const deprecatedWarnings={};validators$1.transitional=function(nt,ot,st){function ft(ht,gt){return"[Axios v"+VERSION+"] Transitional option '"+ht+"'"+gt+(st?". "+st:"")}return(ht,gt,yt)=>{if(nt===!1)throw new AxiosError(ft(gt," has been removed"+(ot?" in "+ot:"")),AxiosError.ERR_DEPRECATED);return ot&&!deprecatedWarnings[gt]&&(deprecatedWarnings[gt]=!0,console.warn(ft(gt," has been deprecated since v"+ot+" and will be removed in the near future"))),nt?nt(ht,gt,yt):!0}};function assertOptions(tt,nt,ot){if(typeof tt!="object")throw new AxiosError("options must be an object",AxiosError.ERR_BAD_OPTION_VALUE);const st=Object.keys(tt);let ft=st.length;for(;ft-- >0;){const ht=st[ft],gt=nt[ht];if(gt){const yt=tt[ht],vt=yt===void 0||gt(yt,ht,tt);if(vt!==!0)throw new AxiosError("option "+ht+" must be "+vt,AxiosError.ERR_BAD_OPTION_VALUE);continue}if(ot!==!0)throw new AxiosError("Unknown option "+ht,AxiosError.ERR_BAD_OPTION)}}const validator={assertOptions,validators:validators$1},validators=validator.validators;class Axios{constructor(nt){this.defaults=nt,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}async request(nt,ot){try{return await this._request(nt,ot)}catch(st){if(st instanceof Error){let ft;Error.captureStackTrace?Error.captureStackTrace(ft={}):ft=new Error;const ht=ft.stack?ft.stack.replace(/^.+\n/,""):"";try{st.stack?ht&&!String(st.stack).endsWith(ht.replace(/^.+\n.+\n/,""))&&(st.stack+=`
`+ht):st.stack=ht}catch{}}throw st}}_request(nt,ot){typeof nt=="string"?(ot=ot||{},ot.url=nt):ot=nt||{},ot=mergeConfig(this.defaults,ot);const{transitional:st,paramsSerializer:ft,headers:ht}=ot;st!==void 0&&validator.assertOptions(st,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1),ft!=null&&(utils$1.isFunction(ft)?ot.paramsSerializer={serialize:ft}:validator.assertOptions(ft,{encode:validators.function,serialize:validators.function},!0)),ot.method=(ot.method||this.defaults.method||"get").toLowerCase();let gt=ht&&utils$1.merge(ht.common,ht[ot.method]);ht&&utils$1.forEach(["delete","get","head","post","put","patch","common"],bt=>{delete ht[bt]}),ot.headers=AxiosHeaders.concat(gt,ht);const yt=[];let vt=!0;this.interceptors.request.forEach(function(jt){typeof jt.runWhen=="function"&&jt.runWhen(ot)===!1||(vt=vt&&jt.synchronous,yt.unshift(jt.fulfilled,jt.rejected))});const xt=[];this.interceptors.response.forEach(function(jt){xt.push(jt.fulfilled,jt.rejected)});let Et,wt=0,kt;if(!vt){const bt=[dispatchRequest.bind(this),void 0];for(bt.unshift.apply(bt,yt),bt.push.apply(bt,xt),kt=bt.length,Et=Promise.resolve(ot);wt<kt;)Et=Et.then(bt[wt++],bt[wt++]);return Et}kt=yt.length;let Ct=ot;for(wt=0;wt<kt;){const bt=yt[wt++],jt=yt[wt++];try{Ct=bt(Ct)}catch(Pt){jt.call(this,Pt);break}}try{Et=dispatchRequest.call(this,Ct)}catch(bt){return Promise.reject(bt)}for(wt=0,kt=xt.length;wt<kt;)Et=Et.then(xt[wt++],xt[wt++]);return Et}getUri(nt){nt=mergeConfig(this.defaults,nt);const ot=buildFullPath(nt.baseURL,nt.url);return buildURL(ot,nt.params,nt.paramsSerializer)}}utils$1.forEach(["delete","get","head","options"],function(nt){Axios.prototype[nt]=function(ot,st){return this.request(mergeConfig(st||{},{method:nt,url:ot,data:(st||{}).data}))}});utils$1.forEach(["post","put","patch"],function(nt){function ot(st){return function(ht,gt,yt){return this.request(mergeConfig(yt||{},{method:nt,headers:st?{"Content-Type":"multipart/form-data"}:{},url:ht,data:gt}))}}Axios.prototype[nt]=ot(),Axios.prototype[nt+"Form"]=ot(!0)});class CancelToken{constructor(nt){if(typeof nt!="function")throw new TypeError("executor must be a function.");let ot;this.promise=new Promise(function(ht){ot=ht});const st=this;this.promise.then(ft=>{if(!st._listeners)return;let ht=st._listeners.length;for(;ht-- >0;)st._listeners[ht](ft);st._listeners=null}),this.promise.then=ft=>{let ht;const gt=new Promise(yt=>{st.subscribe(yt),ht=yt}).then(ft);return gt.cancel=function(){st.unsubscribe(ht)},gt},nt(function(ht,gt,yt){st.reason||(st.reason=new CanceledError(ht,gt,yt),ot(st.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(nt){if(this.reason){nt(this.reason);return}this._listeners?this._listeners.push(nt):this._listeners=[nt]}unsubscribe(nt){if(!this._listeners)return;const ot=this._listeners.indexOf(nt);ot!==-1&&this._listeners.splice(ot,1)}toAbortSignal(){const nt=new AbortController,ot=st=>{nt.abort(st)};return this.subscribe(ot),nt.signal.unsubscribe=()=>this.unsubscribe(ot),nt.signal}static source(){let nt;return{token:new CancelToken(function(ft){nt=ft}),cancel:nt}}}function spread(tt){return function(ot){return tt.apply(null,ot)}}function isAxiosError(tt){return utils$1.isObject(tt)&&tt.isAxiosError===!0}const HttpStatusCode={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(HttpStatusCode).forEach(([tt,nt])=>{HttpStatusCode[nt]=tt});function createInstance(tt){const nt=new Axios(tt),ot=bind(Axios.prototype.request,nt);return utils$1.extend(ot,Axios.prototype,nt,{allOwnKeys:!0}),utils$1.extend(ot,nt,null,{allOwnKeys:!0}),ot.create=function(ft){return createInstance(mergeConfig(tt,ft))},ot}const axios=createInstance(defaults);axios.Axios=Axios;axios.CanceledError=CanceledError;axios.CancelToken=CancelToken;axios.isCancel=isCancel;axios.VERSION=VERSION;axios.toFormData=toFormData;axios.AxiosError=AxiosError;axios.Cancel=axios.CanceledError;axios.all=function(nt){return Promise.all(nt)};axios.spread=spread;axios.isAxiosError=isAxiosError;axios.mergeConfig=mergeConfig;axios.AxiosHeaders=AxiosHeaders;axios.formToJSON=tt=>formDataToJSON(utils$1.isHTMLForm(tt)?new FormData(tt):tt);axios.getAdapter=adapters.getAdapter;axios.HttpStatusCode=HttpStatusCode;axios.default=axios;const axiosInstance=axios.create({baseURL:"/api",withCredentials:!0});let e={data:""},t=tt=>typeof window=="object"?((tt?tt.querySelector("#_goober"):window._goober)||Object.assign((tt||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:tt||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n$1=/\n+/g,o=(tt,nt)=>{let ot="",st="",ft="";for(let ht in tt){let gt=tt[ht];ht[0]=="@"?ht[1]=="i"?ot=ht+" "+gt+";":st+=ht[1]=="f"?o(gt,ht):ht+"{"+o(gt,ht[1]=="k"?"":nt)+"}":typeof gt=="object"?st+=o(gt,nt?nt.replace(/([^,])+/g,yt=>ht.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,vt=>/&/.test(vt)?vt.replace(/&/g,yt):yt?yt+" "+vt:vt)):ht):gt!=null&&(ht=/^--/.test(ht)?ht:ht.replace(/[A-Z]/g,"-$&").toLowerCase(),ft+=o.p?o.p(ht,gt):ht+":"+gt+";")}return ot+(nt&&ft?nt+"{"+ft+"}":ft)+st},c={},s=tt=>{if(typeof tt=="object"){let nt="";for(let ot in tt)nt+=ot+s(tt[ot]);return nt}return tt},i=(tt,nt,ot,st,ft)=>{let ht=s(tt),gt=c[ht]||(c[ht]=(vt=>{let xt=0,Et=11;for(;xt<vt.length;)Et=101*Et+vt.charCodeAt(xt++)>>>0;return"go"+Et})(ht));if(!c[gt]){let vt=ht!==tt?tt:(xt=>{let Et,wt,kt=[{}];for(;Et=l.exec(xt.replace(a,""));)Et[4]?kt.shift():Et[3]?(wt=Et[3].replace(n$1," ").trim(),kt.unshift(kt[0][wt]=kt[0][wt]||{})):kt[0][Et[1]]=Et[2].replace(n$1," ").trim();return kt[0]})(tt);c[gt]=o(ft?{["@keyframes "+gt]:vt}:vt,ot?"":"."+gt)}let yt=ot&&c.g?c.g:null;return ot&&(c.g=c[gt]),((vt,xt,Et,wt)=>{wt?xt.data=xt.data.replace(wt,vt):xt.data.indexOf(vt)===-1&&(xt.data=Et?vt+xt.data:xt.data+vt)})(c[gt],nt,st,yt),gt},p=(tt,nt,ot)=>tt.reduce((st,ft,ht)=>{let gt=nt[ht];if(gt&&gt.call){let yt=gt(ot),vt=yt&&yt.props&&yt.props.className||/^go/.test(yt)&&yt;gt=vt?"."+vt:yt&&typeof yt=="object"?yt.props?"":o(yt,""):yt===!1?"":yt}return st+ft+(gt??"")},"");function u$1(tt){let nt=this||{},ot=tt.call?tt(nt.p):tt;return i(ot.unshift?ot.raw?p(ot,[].slice.call(arguments,1),nt.p):ot.reduce((st,ft)=>Object.assign(st,ft&&ft.call?ft(nt.p):ft),{}):ot,t(nt.target),nt.g,nt.o,nt.k)}let d,f$1,g$1;u$1.bind({g:1});let h$1=u$1.bind({k:1});function m$1(tt,nt,ot,st){o.p=nt,d=tt,f$1=ot,g$1=st}function j$1(tt,nt){let ot=this||{};return function(){let st=arguments;function ft(ht,gt){let yt=Object.assign({},ht),vt=yt.className||ft.className;ot.p=Object.assign({theme:f$1&&f$1()},yt),ot.o=/ *go\d+/.test(vt),yt.className=u$1.apply(ot,st)+(vt?" "+vt:"");let xt=tt;return tt[0]&&(xt=yt.as||tt,delete yt.as),g$1&&xt[0]&&g$1(yt),d(xt,yt)}return ft}}var W$1=tt=>typeof tt=="function",T$1=(tt,nt)=>W$1(tt)?tt(nt):tt,U$1=(()=>{let tt=0;return()=>(++tt).toString()})(),b=(()=>{let tt;return()=>{if(tt===void 0&&typeof window<"u"){let nt=matchMedia("(prefers-reduced-motion: reduce)");tt=!nt||nt.matches}return tt}})(),Q$1=20,S$1=new Map,X$2=1e3,$$1=tt=>{if(S$1.has(tt))return;let nt=setTimeout(()=>{S$1.delete(tt),u({type:4,toastId:tt})},X$2);S$1.set(tt,nt)},J$1=tt=>{let nt=S$1.get(tt);nt&&clearTimeout(nt)},v$1=(tt,nt)=>{switch(nt.type){case 0:return{...tt,toasts:[nt.toast,...tt.toasts].slice(0,Q$1)};case 1:return nt.toast.id&&J$1(nt.toast.id),{...tt,toasts:tt.toasts.map(ht=>ht.id===nt.toast.id?{...ht,...nt.toast}:ht)};case 2:let{toast:ot}=nt;return tt.toasts.find(ht=>ht.id===ot.id)?v$1(tt,{type:1,toast:ot}):v$1(tt,{type:0,toast:ot});case 3:let{toastId:st}=nt;return st?$$1(st):tt.toasts.forEach(ht=>{$$1(ht.id)}),{...tt,toasts:tt.toasts.map(ht=>ht.id===st||st===void 0?{...ht,visible:!1}:ht)};case 4:return nt.toastId===void 0?{...tt,toasts:[]}:{...tt,toasts:tt.toasts.filter(ht=>ht.id!==nt.toastId)};case 5:return{...tt,pausedAt:nt.time};case 6:let ft=nt.time-(tt.pausedAt||0);return{...tt,pausedAt:void 0,toasts:tt.toasts.map(ht=>({...ht,pauseDuration:ht.pauseDuration+ft}))}}},A$1=[],P={toasts:[],pausedAt:void 0},u=tt=>{P=v$1(P,tt),A$1.forEach(nt=>{nt(P)})},Y$1={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I$1=(tt={})=>{let[nt,ot]=reactExports.useState(P);reactExports.useEffect(()=>(A$1.push(ot),()=>{let ft=A$1.indexOf(ot);ft>-1&&A$1.splice(ft,1)}),[nt]);let st=nt.toasts.map(ft=>{var ht,gt;return{...tt,...tt[ft.type],...ft,duration:ft.duration||((ht=tt[ft.type])==null?void 0:ht.duration)||(tt==null?void 0:tt.duration)||Y$1[ft.type],style:{...tt.style,...(gt=tt[ft.type])==null?void 0:gt.style,...ft.style}}});return{...nt,toasts:st}},G$1=(tt,nt="blank",ot)=>({createdAt:Date.now(),visible:!0,type:nt,ariaProps:{role:"status","aria-live":"polite"},message:tt,pauseDuration:0,...ot,id:(ot==null?void 0:ot.id)||U$1()}),h=tt=>(nt,ot)=>{let st=G$1(nt,tt,ot);return u({type:2,toast:st}),st.id},n=(tt,nt)=>h("blank")(tt,nt);n.error=h("error");n.success=h("success");n.loading=h("loading");n.custom=h("custom");n.dismiss=tt=>{u({type:3,toastId:tt})};n.remove=tt=>u({type:4,toastId:tt});n.promise=(tt,nt,ot)=>{let st=n.loading(nt.loading,{...ot,...ot==null?void 0:ot.loading});return tt.then(ft=>(n.success(T$1(nt.success,ft),{id:st,...ot,...ot==null?void 0:ot.success}),ft)).catch(ft=>{n.error(T$1(nt.error,ft),{id:st,...ot,...ot==null?void 0:ot.error})}),tt};var Z$1=(tt,nt)=>{u({type:1,toast:{id:tt,height:nt}})},ee$1=()=>{u({type:5,time:Date.now()})},D$1=tt=>{let{toasts:nt,pausedAt:ot}=I$1(tt);reactExports.useEffect(()=>{if(ot)return;let ht=Date.now(),gt=nt.map(yt=>{if(yt.duration===1/0)return;let vt=(yt.duration||0)+yt.pauseDuration-(ht-yt.createdAt);if(vt<0){yt.visible&&n.dismiss(yt.id);return}return setTimeout(()=>n.dismiss(yt.id),vt)});return()=>{gt.forEach(yt=>yt&&clearTimeout(yt))}},[nt,ot]);let st=reactExports.useCallback(()=>{ot&&u({type:6,time:Date.now()})},[ot]),ft=reactExports.useCallback((ht,gt)=>{let{reverseOrder:yt=!1,gutter:vt=8,defaultPosition:xt}=gt||{},Et=nt.filter(Ct=>(Ct.position||xt)===(ht.position||xt)&&Ct.height),wt=Et.findIndex(Ct=>Ct.id===ht.id),kt=Et.filter((Ct,bt)=>bt<wt&&Ct.visible).length;return Et.filter(Ct=>Ct.visible).slice(...yt?[kt+1]:[0,kt]).reduce((Ct,bt)=>Ct+(bt.height||0)+vt,0)},[nt]);return{toasts:nt,handlers:{updateHeight:Z$1,startPause:ee$1,endPause:st,calculateOffset:ft}}},oe$1=h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re$2=h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se$1=h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_$1=j$1("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${tt=>tt.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe$1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re$2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${tt=>tt.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se$1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne$1=h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V$1=j$1("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${tt=>tt.secondary||"#e0e0e0"};
  border-right-color: ${tt=>tt.primary||"#616161"};
  animation: ${ne$1} 1s linear infinite;
`,pe=h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w$1=j$1("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${tt=>tt.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${tt=>tt.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ue$1=j$1("div")`
  position: absolute;
`,le$1=j$1("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te$1=h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe$1=j$1("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te$1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M$1=({toast:tt})=>{let{icon:nt,type:ot,iconTheme:st}=tt;return nt!==void 0?typeof nt=="string"?reactExports.createElement(fe$1,null,nt):nt:ot==="blank"?null:reactExports.createElement(le$1,null,reactExports.createElement(V$1,{...st}),ot!=="loading"&&reactExports.createElement(ue$1,null,ot==="error"?reactExports.createElement(_$1,{...st}):reactExports.createElement(w$1,{...st})))},ye$1=tt=>`
0% {transform: translate3d(0,${tt*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge$1=tt=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${tt*-150}%,-1px) scale(.6); opacity:0;}
`,he$1="0%{opacity:0;} 100%{opacity:1;}",xe$1="0%{opacity:1;} 100%{opacity:0;}",be$1=j$1("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se$1=j$1("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae$1=(tt,nt)=>{let ot=tt.includes("top")?1:-1,[st,ft]=b()?[he$1,xe$1]:[ye$1(ot),ge$1(ot)];return{animation:nt?`${h$1(st)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h$1(ft)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F$1=reactExports.memo(({toast:tt,position:nt,style:ot,children:st})=>{let ft=tt.height?Ae$1(tt.position||nt||"top-center",tt.visible):{opacity:0},ht=reactExports.createElement(M$1,{toast:tt}),gt=reactExports.createElement(Se$1,{...tt.ariaProps},T$1(tt.message,tt));return reactExports.createElement(be$1,{className:tt.className,style:{...ft,...ot,...tt.style}},typeof st=="function"?st({icon:ht,message:gt}):reactExports.createElement(reactExports.Fragment,null,ht,gt))});m$1(reactExports.createElement);var Ee$1=({id:tt,className:nt,style:ot,onHeightUpdate:st,children:ft})=>{let ht=reactExports.useCallback(gt=>{if(gt){let yt=()=>{let vt=gt.getBoundingClientRect().height;st(tt,vt)};yt(),new MutationObserver(yt).observe(gt,{subtree:!0,childList:!0,characterData:!0})}},[tt,st]);return reactExports.createElement("div",{ref:ht,className:nt,style:ot},ft)},Re$1=(tt,nt)=>{let ot=tt.includes("top"),st=ot?{top:0}:{bottom:0},ft=tt.includes("center")?{justifyContent:"center"}:tt.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${nt*(ot?1:-1)}px)`,...st,...ft}},ve$1=u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O$1=16,Ie$1=({reverseOrder:tt,position:nt="top-center",toastOptions:ot,gutter:st,children:ft,containerStyle:ht,containerClassName:gt})=>{let{toasts:yt,handlers:vt}=D$1(ot);return reactExports.createElement("div",{style:{position:"fixed",zIndex:9999,top:O$1,left:O$1,right:O$1,bottom:O$1,pointerEvents:"none",...ht},className:gt,onMouseEnter:vt.startPause,onMouseLeave:vt.endPause},yt.map(xt=>{let Et=xt.position||nt,wt=vt.calculateOffset(xt,{reverseOrder:tt,gutter:st,defaultPosition:nt}),kt=Re$1(Et,wt);return reactExports.createElement(Ee$1,{id:xt.id,key:xt.id,onHeightUpdate:vt.updateHeight,className:xt.visible?ve$1:"",style:kt},xt.type==="custom"?T$1(xt.message,xt):ft?ft(xt):reactExports.createElement(F$1,{toast:xt,position:Et}))}))},_t=n;const PACKET_TYPES=Object.create(null);PACKET_TYPES.open="0";PACKET_TYPES.close="1";PACKET_TYPES.ping="2";PACKET_TYPES.pong="3";PACKET_TYPES.message="4";PACKET_TYPES.upgrade="5";PACKET_TYPES.noop="6";const PACKET_TYPES_REVERSE=Object.create(null);Object.keys(PACKET_TYPES).forEach(tt=>{PACKET_TYPES_REVERSE[PACKET_TYPES[tt]]=tt});const ERROR_PACKET={type:"error",data:"parser error"},withNativeBlob$1=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",withNativeArrayBuffer$2=typeof ArrayBuffer=="function",isView$1=tt=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(tt):tt&&tt.buffer instanceof ArrayBuffer,encodePacket=({type:tt,data:nt},ot,st)=>withNativeBlob$1&&nt instanceof Blob?ot?st(nt):encodeBlobAsBase64(nt,st):withNativeArrayBuffer$2&&(nt instanceof ArrayBuffer||isView$1(nt))?ot?st(nt):encodeBlobAsBase64(new Blob([nt]),st):st(PACKET_TYPES[tt]+(nt||"")),encodeBlobAsBase64=(tt,nt)=>{const ot=new FileReader;return ot.onload=function(){const st=ot.result.split(",")[1];nt("b"+(st||""))},ot.readAsDataURL(tt)};function toArray(tt){return tt instanceof Uint8Array?tt:tt instanceof ArrayBuffer?new Uint8Array(tt):new Uint8Array(tt.buffer,tt.byteOffset,tt.byteLength)}let TEXT_ENCODER;function encodePacketToBinary(tt,nt){if(withNativeBlob$1&&tt.data instanceof Blob)return tt.data.arrayBuffer().then(toArray).then(nt);if(withNativeArrayBuffer$2&&(tt.data instanceof ArrayBuffer||isView$1(tt.data)))return nt(toArray(tt.data));encodePacket(tt,!1,ot=>{TEXT_ENCODER||(TEXT_ENCODER=new TextEncoder),nt(TEXT_ENCODER.encode(ot))})}const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup$1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let tt=0;tt<chars.length;tt++)lookup$1[chars.charCodeAt(tt)]=tt;const decode$1=tt=>{let nt=tt.length*.75,ot=tt.length,st,ft=0,ht,gt,yt,vt;tt[tt.length-1]==="="&&(nt--,tt[tt.length-2]==="="&&nt--);const xt=new ArrayBuffer(nt),Et=new Uint8Array(xt);for(st=0;st<ot;st+=4)ht=lookup$1[tt.charCodeAt(st)],gt=lookup$1[tt.charCodeAt(st+1)],yt=lookup$1[tt.charCodeAt(st+2)],vt=lookup$1[tt.charCodeAt(st+3)],Et[ft++]=ht<<2|gt>>4,Et[ft++]=(gt&15)<<4|yt>>2,Et[ft++]=(yt&3)<<6|vt&63;return xt},withNativeArrayBuffer$1=typeof ArrayBuffer=="function",decodePacket=(tt,nt)=>{if(typeof tt!="string")return{type:"message",data:mapBinary(tt,nt)};const ot=tt.charAt(0);return ot==="b"?{type:"message",data:decodeBase64Packet(tt.substring(1),nt)}:PACKET_TYPES_REVERSE[ot]?tt.length>1?{type:PACKET_TYPES_REVERSE[ot],data:tt.substring(1)}:{type:PACKET_TYPES_REVERSE[ot]}:ERROR_PACKET},decodeBase64Packet=(tt,nt)=>{if(withNativeArrayBuffer$1){const ot=decode$1(tt);return mapBinary(ot,nt)}else return{base64:!0,data:tt}},mapBinary=(tt,nt)=>{switch(nt){case"blob":return tt instanceof Blob?tt:new Blob([tt]);case"arraybuffer":default:return tt instanceof ArrayBuffer?tt:tt.buffer}},SEPARATOR="",encodePayload=(tt,nt)=>{const ot=tt.length,st=new Array(ot);let ft=0;tt.forEach((ht,gt)=>{encodePacket(ht,!1,yt=>{st[gt]=yt,++ft===ot&&nt(st.join(SEPARATOR))})})},decodePayload=(tt,nt)=>{const ot=tt.split(SEPARATOR),st=[];for(let ft=0;ft<ot.length;ft++){const ht=decodePacket(ot[ft],nt);if(st.push(ht),ht.type==="error")break}return st};function createPacketEncoderStream(){return new TransformStream({transform(tt,nt){encodePacketToBinary(tt,ot=>{const st=ot.length;let ft;if(st<126)ft=new Uint8Array(1),new DataView(ft.buffer).setUint8(0,st);else if(st<65536){ft=new Uint8Array(3);const ht=new DataView(ft.buffer);ht.setUint8(0,126),ht.setUint16(1,st)}else{ft=new Uint8Array(9);const ht=new DataView(ft.buffer);ht.setUint8(0,127),ht.setBigUint64(1,BigInt(st))}tt.data&&typeof tt.data!="string"&&(ft[0]|=128),nt.enqueue(ft),nt.enqueue(ot)})}})}let TEXT_DECODER;function totalLength(tt){return tt.reduce((nt,ot)=>nt+ot.length,0)}function concatChunks(tt,nt){if(tt[0].length===nt)return tt.shift();const ot=new Uint8Array(nt);let st=0;for(let ft=0;ft<nt;ft++)ot[ft]=tt[0][st++],st===tt[0].length&&(tt.shift(),st=0);return tt.length&&st<tt[0].length&&(tt[0]=tt[0].slice(st)),ot}function createPacketDecoderStream(tt,nt){TEXT_DECODER||(TEXT_DECODER=new TextDecoder);const ot=[];let st=0,ft=-1,ht=!1;return new TransformStream({transform(gt,yt){for(ot.push(gt);;){if(st===0){if(totalLength(ot)<1)break;const vt=concatChunks(ot,1);ht=(vt[0]&128)===128,ft=vt[0]&127,ft<126?st=3:ft===126?st=1:st=2}else if(st===1){if(totalLength(ot)<2)break;const vt=concatChunks(ot,2);ft=new DataView(vt.buffer,vt.byteOffset,vt.length).getUint16(0),st=3}else if(st===2){if(totalLength(ot)<8)break;const vt=concatChunks(ot,8),xt=new DataView(vt.buffer,vt.byteOffset,vt.length),Et=xt.getUint32(0);if(Et>Math.pow(2,21)-1){yt.enqueue(ERROR_PACKET);break}ft=Et*Math.pow(2,32)+xt.getUint32(4),st=3}else{if(totalLength(ot)<ft)break;const vt=concatChunks(ot,ft);yt.enqueue(decodePacket(ht?vt:TEXT_DECODER.decode(vt),nt)),st=0}if(ft===0||ft>tt){yt.enqueue(ERROR_PACKET);break}}}})}const protocol$1=4;function Emitter(tt){if(tt)return mixin(tt)}function mixin(tt){for(var nt in Emitter.prototype)tt[nt]=Emitter.prototype[nt];return tt}Emitter.prototype.on=Emitter.prototype.addEventListener=function(tt,nt){return this._callbacks=this._callbacks||{},(this._callbacks["$"+tt]=this._callbacks["$"+tt]||[]).push(nt),this};Emitter.prototype.once=function(tt,nt){function ot(){this.off(tt,ot),nt.apply(this,arguments)}return ot.fn=nt,this.on(tt,ot),this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(tt,nt){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var ot=this._callbacks["$"+tt];if(!ot)return this;if(arguments.length==1)return delete this._callbacks["$"+tt],this;for(var st,ft=0;ft<ot.length;ft++)if(st=ot[ft],st===nt||st.fn===nt){ot.splice(ft,1);break}return ot.length===0&&delete this._callbacks["$"+tt],this};Emitter.prototype.emit=function(tt){this._callbacks=this._callbacks||{};for(var nt=new Array(arguments.length-1),ot=this._callbacks["$"+tt],st=1;st<arguments.length;st++)nt[st-1]=arguments[st];if(ot){ot=ot.slice(0);for(var st=0,ft=ot.length;st<ft;++st)ot[st].apply(this,nt)}return this};Emitter.prototype.emitReserved=Emitter.prototype.emit;Emitter.prototype.listeners=function(tt){return this._callbacks=this._callbacks||{},this._callbacks["$"+tt]||[]};Emitter.prototype.hasListeners=function(tt){return!!this.listeners(tt).length};const nextTick=typeof Promise=="function"&&typeof Promise.resolve=="function"?nt=>Promise.resolve().then(nt):(nt,ot)=>ot(nt,0),globalThisShim=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),defaultBinaryType="arraybuffer";function createCookieJar(){}function pick(tt,...nt){return nt.reduce((ot,st)=>(tt.hasOwnProperty(st)&&(ot[st]=tt[st]),ot),{})}const NATIVE_SET_TIMEOUT=globalThisShim.setTimeout,NATIVE_CLEAR_TIMEOUT=globalThisShim.clearTimeout;function installTimerFunctions(tt,nt){nt.useNativeTimers?(tt.setTimeoutFn=NATIVE_SET_TIMEOUT.bind(globalThisShim),tt.clearTimeoutFn=NATIVE_CLEAR_TIMEOUT.bind(globalThisShim)):(tt.setTimeoutFn=globalThisShim.setTimeout.bind(globalThisShim),tt.clearTimeoutFn=globalThisShim.clearTimeout.bind(globalThisShim))}const BASE64_OVERHEAD=1.33;function byteLength(tt){return typeof tt=="string"?utf8Length(tt):Math.ceil((tt.byteLength||tt.size)*BASE64_OVERHEAD)}function utf8Length(tt){let nt=0,ot=0;for(let st=0,ft=tt.length;st<ft;st++)nt=tt.charCodeAt(st),nt<128?ot+=1:nt<2048?ot+=2:nt<55296||nt>=57344?ot+=3:(st++,ot+=4);return ot}function randomString(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function encode(tt){let nt="";for(let ot in tt)tt.hasOwnProperty(ot)&&(nt.length&&(nt+="&"),nt+=encodeURIComponent(ot)+"="+encodeURIComponent(tt[ot]));return nt}function decode(tt){let nt={},ot=tt.split("&");for(let st=0,ft=ot.length;st<ft;st++){let ht=ot[st].split("=");nt[decodeURIComponent(ht[0])]=decodeURIComponent(ht[1])}return nt}class TransportError extends Error{constructor(nt,ot,st){super(nt),this.description=ot,this.context=st,this.type="TransportError"}}class Transport extends Emitter{constructor(nt){super(),this.writable=!1,installTimerFunctions(this,nt),this.opts=nt,this.query=nt.query,this.socket=nt.socket,this.supportsBinary=!nt.forceBase64}onError(nt,ot,st){return super.emitReserved("error",new TransportError(nt,ot,st)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(nt){this.readyState==="open"&&this.write(nt)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(nt){const ot=decodePacket(nt,this.socket.binaryType);this.onPacket(ot)}onPacket(nt){super.emitReserved("packet",nt)}onClose(nt){this.readyState="closed",super.emitReserved("close",nt)}pause(nt){}createUri(nt,ot={}){return nt+"://"+this._hostname()+this._port()+this.opts.path+this._query(ot)}_hostname(){const nt=this.opts.hostname;return nt.indexOf(":")===-1?nt:"["+nt+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(nt){const ot=encode(nt);return ot.length?"?"+ot:""}}class Polling extends Transport{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(nt){this.readyState="pausing";const ot=()=>{this.readyState="paused",nt()};if(this._polling||!this.writable){let st=0;this._polling&&(st++,this.once("pollComplete",function(){--st||ot()})),this.writable||(st++,this.once("drain",function(){--st||ot()}))}else ot()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(nt){const ot=st=>{if(this.readyState==="opening"&&st.type==="open"&&this.onOpen(),st.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(st)};decodePayload(nt,this.socket.binaryType).forEach(ot),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const nt=()=>{this.write([{type:"close"}])};this.readyState==="open"?nt():this.once("open",nt)}write(nt){this.writable=!1,encodePayload(nt,ot=>{this.doWrite(ot,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const nt=this.opts.secure?"https":"http",ot=this.query||{};return this.opts.timestampRequests!==!1&&(ot[this.opts.timestampParam]=randomString()),!this.supportsBinary&&!ot.sid&&(ot.b64=1),this.createUri(nt,ot)}}let value=!1;try{value=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const hasCORS=value;function empty(){}class BaseXHR extends Polling{constructor(nt){if(super(nt),typeof location<"u"){const ot=location.protocol==="https:";let st=location.port;st||(st=ot?"443":"80"),this.xd=typeof location<"u"&&nt.hostname!==location.hostname||st!==nt.port}}doWrite(nt,ot){const st=this.request({method:"POST",data:nt});st.on("success",ot),st.on("error",(ft,ht)=>{this.onError("xhr post error",ft,ht)})}doPoll(){const nt=this.request();nt.on("data",this.onData.bind(this)),nt.on("error",(ot,st)=>{this.onError("xhr poll error",ot,st)}),this.pollXhr=nt}}let Request$1=class sn extends Emitter{constructor(nt,ot,st){super(),this.createRequest=nt,installTimerFunctions(this,st),this._opts=st,this._method=st.method||"GET",this._uri=ot,this._data=st.data!==void 0?st.data:null,this._create()}_create(){var nt;const ot=pick(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");ot.xdomain=!!this._opts.xd;const st=this._xhr=this.createRequest(ot);try{st.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){st.setDisableHeaderCheck&&st.setDisableHeaderCheck(!0);for(let ft in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(ft)&&st.setRequestHeader(ft,this._opts.extraHeaders[ft])}}catch{}if(this._method==="POST")try{st.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{st.setRequestHeader("Accept","*/*")}catch{}(nt=this._opts.cookieJar)===null||nt===void 0||nt.addCookies(st),"withCredentials"in st&&(st.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(st.timeout=this._opts.requestTimeout),st.onreadystatechange=()=>{var ft;st.readyState===3&&((ft=this._opts.cookieJar)===null||ft===void 0||ft.parseCookies(st.getResponseHeader("set-cookie"))),st.readyState===4&&(st.status===200||st.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof st.status=="number"?st.status:0)},0))},st.send(this._data)}catch(ft){this.setTimeoutFn(()=>{this._onError(ft)},0);return}typeof document<"u"&&(this._index=sn.requestsCount++,sn.requests[this._index]=this)}_onError(nt){this.emitReserved("error",nt,this._xhr),this._cleanup(!0)}_cleanup(nt){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=empty,nt)try{this._xhr.abort()}catch{}typeof document<"u"&&delete sn.requests[this._index],this._xhr=null}}_onLoad(){const nt=this._xhr.responseText;nt!==null&&(this.emitReserved("data",nt),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Request$1.requestsCount=0;Request$1.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",unloadHandler);else if(typeof addEventListener=="function"){const tt="onpagehide"in globalThisShim?"pagehide":"unload";addEventListener(tt,unloadHandler,!1)}}function unloadHandler(){for(let tt in Request$1.requests)Request$1.requests.hasOwnProperty(tt)&&Request$1.requests[tt].abort()}const hasXHR2=function(){const tt=newRequest({xdomain:!1});return tt&&tt.responseType!==null}();class XHR extends BaseXHR{constructor(nt){super(nt);const ot=nt&&nt.forceBase64;this.supportsBinary=hasXHR2&&!ot}request(nt={}){return Object.assign(nt,{xd:this.xd},this.opts),new Request$1(newRequest,this.uri(),nt)}}function newRequest(tt){const nt=tt.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!nt||hasCORS))return new XMLHttpRequest}catch{}if(!nt)try{return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const isReactNative=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class BaseWS extends Transport{get name(){return"websocket"}doOpen(){const nt=this.uri(),ot=this.opts.protocols,st=isReactNative?{}:pick(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(st.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(nt,ot,st)}catch(ft){return this.emitReserved("error",ft)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=nt=>this.onClose({description:"websocket connection closed",context:nt}),this.ws.onmessage=nt=>this.onData(nt.data),this.ws.onerror=nt=>this.onError("websocket error",nt)}write(nt){this.writable=!1;for(let ot=0;ot<nt.length;ot++){const st=nt[ot],ft=ot===nt.length-1;encodePacket(st,this.supportsBinary,ht=>{try{this.doWrite(st,ht)}catch{}ft&&nextTick(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const nt=this.opts.secure?"wss":"ws",ot=this.query||{};return this.opts.timestampRequests&&(ot[this.opts.timestampParam]=randomString()),this.supportsBinary||(ot.b64=1),this.createUri(nt,ot)}}const WebSocketCtor=globalThisShim.WebSocket||globalThisShim.MozWebSocket;class WS extends BaseWS{createSocket(nt,ot,st){return isReactNative?new WebSocketCtor(nt,ot,st):ot?new WebSocketCtor(nt,ot):new WebSocketCtor(nt)}doWrite(nt,ot){this.ws.send(ot)}}class WT extends Transport{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(nt){return this.emitReserved("error",nt)}this._transport.closed.then(()=>{this.onClose()}).catch(nt=>{this.onError("webtransport error",nt)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(nt=>{const ot=createPacketDecoderStream(Number.MAX_SAFE_INTEGER,this.socket.binaryType),st=nt.readable.pipeThrough(ot).getReader(),ft=createPacketEncoderStream();ft.readable.pipeTo(nt.writable),this._writer=ft.writable.getWriter();const ht=()=>{st.read().then(({done:yt,value:vt})=>{yt||(this.onPacket(vt),ht())}).catch(yt=>{})};ht();const gt={type:"open"};this.query.sid&&(gt.data=`{"sid":"${this.query.sid}"}`),this._writer.write(gt).then(()=>this.onOpen())})})}write(nt){this.writable=!1;for(let ot=0;ot<nt.length;ot++){const st=nt[ot],ft=ot===nt.length-1;this._writer.write(st).then(()=>{ft&&nextTick(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var nt;(nt=this._transport)===null||nt===void 0||nt.close()}}const transports={websocket:WS,webtransport:WT,polling:XHR},re$1=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function parse$1(tt){if(tt.length>8e3)throw"URI too long";const nt=tt,ot=tt.indexOf("["),st=tt.indexOf("]");ot!=-1&&st!=-1&&(tt=tt.substring(0,ot)+tt.substring(ot,st).replace(/:/g,";")+tt.substring(st,tt.length));let ft=re$1.exec(tt||""),ht={},gt=14;for(;gt--;)ht[parts[gt]]=ft[gt]||"";return ot!=-1&&st!=-1&&(ht.source=nt,ht.host=ht.host.substring(1,ht.host.length-1).replace(/;/g,":"),ht.authority=ht.authority.replace("[","").replace("]","").replace(/;/g,":"),ht.ipv6uri=!0),ht.pathNames=pathNames(ht,ht.path),ht.queryKey=queryKey(ht,ht.query),ht}function pathNames(tt,nt){const ot=/\/{2,9}/g,st=nt.replace(ot,"/").split("/");return(nt.slice(0,1)=="/"||nt.length===0)&&st.splice(0,1),nt.slice(-1)=="/"&&st.splice(st.length-1,1),st}function queryKey(tt,nt){const ot={};return nt.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(st,ft,ht){ft&&(ot[ft]=ht)}),ot}const withEventListeners=typeof addEventListener=="function"&&typeof removeEventListener=="function",OFFLINE_EVENT_LISTENERS=[];withEventListeners&&addEventListener("offline",()=>{OFFLINE_EVENT_LISTENERS.forEach(tt=>tt())},!1);class SocketWithoutUpgrade extends Emitter{constructor(nt,ot){if(super(),this.binaryType=defaultBinaryType,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,nt&&typeof nt=="object"&&(ot=nt,nt=null),nt){const st=parse$1(nt);ot.hostname=st.host,ot.secure=st.protocol==="https"||st.protocol==="wss",ot.port=st.port,st.query&&(ot.query=st.query)}else ot.host&&(ot.hostname=parse$1(ot.host).host);installTimerFunctions(this,ot),this.secure=ot.secure!=null?ot.secure:typeof location<"u"&&location.protocol==="https:",ot.hostname&&!ot.port&&(ot.port=this.secure?"443":"80"),this.hostname=ot.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=ot.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},ot.transports.forEach(st=>{const ft=st.prototype.name;this.transports.push(ft),this._transportsByName[ft]=st}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},ot),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=decode(this.opts.query)),withEventListeners&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(nt){const ot=Object.assign({},this.opts.query);ot.EIO=protocol$1,ot.transport=nt,this.id&&(ot.sid=this.id);const st=Object.assign({},this.opts,{query:ot,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[nt]);return new this._transportsByName[nt](st)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const nt=this.opts.rememberUpgrade&&SocketWithoutUpgrade.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const ot=this.createTransport(nt);ot.open(),this.setTransport(ot)}setTransport(nt){this.transport&&this.transport.removeAllListeners(),this.transport=nt,nt.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",ot=>this._onClose("transport close",ot))}onOpen(){this.readyState="open",SocketWithoutUpgrade.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(nt){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",nt),this.emitReserved("heartbeat"),nt.type){case"open":this.onHandshake(JSON.parse(nt.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const ot=new Error("server error");ot.code=nt.data,this._onError(ot);break;case"message":this.emitReserved("data",nt.data),this.emitReserved("message",nt.data);break}}onHandshake(nt){this.emitReserved("handshake",nt),this.id=nt.sid,this.transport.query.sid=nt.sid,this._pingInterval=nt.pingInterval,this._pingTimeout=nt.pingTimeout,this._maxPayload=nt.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const nt=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+nt,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},nt),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const nt=this._getWritablePackets();this.transport.send(nt),this._prevBufferLen=nt.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let ot=1;for(let st=0;st<this.writeBuffer.length;st++){const ft=this.writeBuffer[st].data;if(ft&&(ot+=byteLength(ft)),st>0&&ot>this._maxPayload)return this.writeBuffer.slice(0,st);ot+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const nt=Date.now()>this._pingTimeoutTime;return nt&&(this._pingTimeoutTime=0,nextTick(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),nt}write(nt,ot,st){return this._sendPacket("message",nt,ot,st),this}send(nt,ot,st){return this._sendPacket("message",nt,ot,st),this}_sendPacket(nt,ot,st,ft){if(typeof ot=="function"&&(ft=ot,ot=void 0),typeof st=="function"&&(ft=st,st=null),this.readyState==="closing"||this.readyState==="closed")return;st=st||{},st.compress=st.compress!==!1;const ht={type:nt,data:ot,options:st};this.emitReserved("packetCreate",ht),this.writeBuffer.push(ht),ft&&this.once("flush",ft),this.flush()}close(){const nt=()=>{this._onClose("forced close"),this.transport.close()},ot=()=>{this.off("upgrade",ot),this.off("upgradeError",ot),nt()},st=()=>{this.once("upgrade",ot),this.once("upgradeError",ot)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?st():nt()}):this.upgrading?st():nt()),this}_onError(nt){if(SocketWithoutUpgrade.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",nt),this._onClose("transport error",nt)}_onClose(nt,ot){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),withEventListeners&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const st=OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);st!==-1&&OFFLINE_EVENT_LISTENERS.splice(st,1)}this.readyState="closed",this.id=null,this.emitReserved("close",nt,ot),this.writeBuffer=[],this._prevBufferLen=0}}}SocketWithoutUpgrade.protocol=protocol$1;class SocketWithUpgrade extends SocketWithoutUpgrade{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let nt=0;nt<this._upgrades.length;nt++)this._probe(this._upgrades[nt])}_probe(nt){let ot=this.createTransport(nt),st=!1;SocketWithoutUpgrade.priorWebsocketSuccess=!1;const ft=()=>{st||(ot.send([{type:"ping",data:"probe"}]),ot.once("packet",wt=>{if(!st)if(wt.type==="pong"&&wt.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",ot),!ot)return;SocketWithoutUpgrade.priorWebsocketSuccess=ot.name==="websocket",this.transport.pause(()=>{st||this.readyState!=="closed"&&(Et(),this.setTransport(ot),ot.send([{type:"upgrade"}]),this.emitReserved("upgrade",ot),ot=null,this.upgrading=!1,this.flush())})}else{const kt=new Error("probe error");kt.transport=ot.name,this.emitReserved("upgradeError",kt)}}))};function ht(){st||(st=!0,Et(),ot.close(),ot=null)}const gt=wt=>{const kt=new Error("probe error: "+wt);kt.transport=ot.name,ht(),this.emitReserved("upgradeError",kt)};function yt(){gt("transport closed")}function vt(){gt("socket closed")}function xt(wt){ot&&wt.name!==ot.name&&ht()}const Et=()=>{ot.removeListener("open",ft),ot.removeListener("error",gt),ot.removeListener("close",yt),this.off("close",vt),this.off("upgrading",xt)};ot.once("open",ft),ot.once("error",gt),ot.once("close",yt),this.once("close",vt),this.once("upgrading",xt),this._upgrades.indexOf("webtransport")!==-1&&nt!=="webtransport"?this.setTimeoutFn(()=>{st||ot.open()},200):ot.open()}onHandshake(nt){this._upgrades=this._filterUpgrades(nt.upgrades),super.onHandshake(nt)}_filterUpgrades(nt){const ot=[];for(let st=0;st<nt.length;st++)~this.transports.indexOf(nt[st])&&ot.push(nt[st]);return ot}}let Socket$1=class extends SocketWithUpgrade{constructor(nt,ot={}){const st=typeof nt=="object"?nt:ot;(!st.transports||st.transports&&typeof st.transports[0]=="string")&&(st.transports=(st.transports||["polling","websocket","webtransport"]).map(ft=>transports[ft]).filter(ft=>!!ft)),super(nt,st)}};function url(tt,nt="",ot){let st=tt;ot=ot||typeof location<"u"&&location,tt==null&&(tt=ot.protocol+"//"+ot.host),typeof tt=="string"&&(tt.charAt(0)==="/"&&(tt.charAt(1)==="/"?tt=ot.protocol+tt:tt=ot.host+tt),/^(https?|wss?):\/\//.test(tt)||(typeof ot<"u"?tt=ot.protocol+"//"+tt:tt="https://"+tt),st=parse$1(tt)),st.port||(/^(http|ws)$/.test(st.protocol)?st.port="80":/^(http|ws)s$/.test(st.protocol)&&(st.port="443")),st.path=st.path||"/";const ht=st.host.indexOf(":")!==-1?"["+st.host+"]":st.host;return st.id=st.protocol+"://"+ht+":"+st.port+nt,st.href=st.protocol+"://"+ht+(ot&&ot.port===st.port?"":":"+st.port),st}const withNativeArrayBuffer=typeof ArrayBuffer=="function",isView=tt=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(tt):tt.buffer instanceof ArrayBuffer,toString=Object.prototype.toString,withNativeBlob=typeof Blob=="function"||typeof Blob<"u"&&toString.call(Blob)==="[object BlobConstructor]",withNativeFile=typeof File=="function"||typeof File<"u"&&toString.call(File)==="[object FileConstructor]";function isBinary(tt){return withNativeArrayBuffer&&(tt instanceof ArrayBuffer||isView(tt))||withNativeBlob&&tt instanceof Blob||withNativeFile&&tt instanceof File}function hasBinary(tt,nt){if(!tt||typeof tt!="object")return!1;if(Array.isArray(tt)){for(let ot=0,st=tt.length;ot<st;ot++)if(hasBinary(tt[ot]))return!0;return!1}if(isBinary(tt))return!0;if(tt.toJSON&&typeof tt.toJSON=="function"&&arguments.length===1)return hasBinary(tt.toJSON(),!0);for(const ot in tt)if(Object.prototype.hasOwnProperty.call(tt,ot)&&hasBinary(tt[ot]))return!0;return!1}function deconstructPacket(tt){const nt=[],ot=tt.data,st=tt;return st.data=_deconstructPacket(ot,nt),st.attachments=nt.length,{packet:st,buffers:nt}}function _deconstructPacket(tt,nt){if(!tt)return tt;if(isBinary(tt)){const ot={_placeholder:!0,num:nt.length};return nt.push(tt),ot}else if(Array.isArray(tt)){const ot=new Array(tt.length);for(let st=0;st<tt.length;st++)ot[st]=_deconstructPacket(tt[st],nt);return ot}else if(typeof tt=="object"&&!(tt instanceof Date)){const ot={};for(const st in tt)Object.prototype.hasOwnProperty.call(tt,st)&&(ot[st]=_deconstructPacket(tt[st],nt));return ot}return tt}function reconstructPacket(tt,nt){return tt.data=_reconstructPacket(tt.data,nt),delete tt.attachments,tt}function _reconstructPacket(tt,nt){if(!tt)return tt;if(tt&&tt._placeholder===!0){if(typeof tt.num=="number"&&tt.num>=0&&tt.num<nt.length)return nt[tt.num];throw new Error("illegal attachments")}else if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++)tt[ot]=_reconstructPacket(tt[ot],nt);else if(typeof tt=="object")for(const ot in tt)Object.prototype.hasOwnProperty.call(tt,ot)&&(tt[ot]=_reconstructPacket(tt[ot],nt));return tt}const RESERVED_EVENTS$1=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],protocol=5;var PacketType;(function(tt){tt[tt.CONNECT=0]="CONNECT",tt[tt.DISCONNECT=1]="DISCONNECT",tt[tt.EVENT=2]="EVENT",tt[tt.ACK=3]="ACK",tt[tt.CONNECT_ERROR=4]="CONNECT_ERROR",tt[tt.BINARY_EVENT=5]="BINARY_EVENT",tt[tt.BINARY_ACK=6]="BINARY_ACK"})(PacketType||(PacketType={}));class Encoder{constructor(nt){this.replacer=nt}encode(nt){return(nt.type===PacketType.EVENT||nt.type===PacketType.ACK)&&hasBinary(nt)?this.encodeAsBinary({type:nt.type===PacketType.EVENT?PacketType.BINARY_EVENT:PacketType.BINARY_ACK,nsp:nt.nsp,data:nt.data,id:nt.id}):[this.encodeAsString(nt)]}encodeAsString(nt){let ot=""+nt.type;return(nt.type===PacketType.BINARY_EVENT||nt.type===PacketType.BINARY_ACK)&&(ot+=nt.attachments+"-"),nt.nsp&&nt.nsp!=="/"&&(ot+=nt.nsp+","),nt.id!=null&&(ot+=nt.id),nt.data!=null&&(ot+=JSON.stringify(nt.data,this.replacer)),ot}encodeAsBinary(nt){const ot=deconstructPacket(nt),st=this.encodeAsString(ot.packet),ft=ot.buffers;return ft.unshift(st),ft}}function isObject(tt){return Object.prototype.toString.call(tt)==="[object Object]"}class Decoder extends Emitter{constructor(nt){super(),this.reviver=nt}add(nt){let ot;if(typeof nt=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");ot=this.decodeString(nt);const st=ot.type===PacketType.BINARY_EVENT;st||ot.type===PacketType.BINARY_ACK?(ot.type=st?PacketType.EVENT:PacketType.ACK,this.reconstructor=new BinaryReconstructor(ot),ot.attachments===0&&super.emitReserved("decoded",ot)):super.emitReserved("decoded",ot)}else if(isBinary(nt)||nt.base64)if(this.reconstructor)ot=this.reconstructor.takeBinaryData(nt),ot&&(this.reconstructor=null,super.emitReserved("decoded",ot));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+nt)}decodeString(nt){let ot=0;const st={type:Number(nt.charAt(0))};if(PacketType[st.type]===void 0)throw new Error("unknown packet type "+st.type);if(st.type===PacketType.BINARY_EVENT||st.type===PacketType.BINARY_ACK){const ht=ot+1;for(;nt.charAt(++ot)!=="-"&&ot!=nt.length;);const gt=nt.substring(ht,ot);if(gt!=Number(gt)||nt.charAt(ot)!=="-")throw new Error("Illegal attachments");st.attachments=Number(gt)}if(nt.charAt(ot+1)==="/"){const ht=ot+1;for(;++ot&&!(nt.charAt(ot)===","||ot===nt.length););st.nsp=nt.substring(ht,ot)}else st.nsp="/";const ft=nt.charAt(ot+1);if(ft!==""&&Number(ft)==ft){const ht=ot+1;for(;++ot;){const gt=nt.charAt(ot);if(gt==null||Number(gt)!=gt){--ot;break}if(ot===nt.length)break}st.id=Number(nt.substring(ht,ot+1))}if(nt.charAt(++ot)){const ht=this.tryParse(nt.substr(ot));if(Decoder.isPayloadValid(st.type,ht))st.data=ht;else throw new Error("invalid payload")}return st}tryParse(nt){try{return JSON.parse(nt,this.reviver)}catch{return!1}}static isPayloadValid(nt,ot){switch(nt){case PacketType.CONNECT:return isObject(ot);case PacketType.DISCONNECT:return ot===void 0;case PacketType.CONNECT_ERROR:return typeof ot=="string"||isObject(ot);case PacketType.EVENT:case PacketType.BINARY_EVENT:return Array.isArray(ot)&&(typeof ot[0]=="number"||typeof ot[0]=="string"&&RESERVED_EVENTS$1.indexOf(ot[0])===-1);case PacketType.ACK:case PacketType.BINARY_ACK:return Array.isArray(ot)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class BinaryReconstructor{constructor(nt){this.packet=nt,this.buffers=[],this.reconPack=nt}takeBinaryData(nt){if(this.buffers.push(nt),this.buffers.length===this.reconPack.attachments){const ot=reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),ot}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const parser=Object.freeze(Object.defineProperty({__proto__:null,Decoder,Encoder,get PacketType(){return PacketType},protocol},Symbol.toStringTag,{value:"Module"}));function on(tt,nt,ot){return tt.on(nt,ot),function(){tt.off(nt,ot)}}const RESERVED_EVENTS=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Socket extends Emitter{constructor(nt,ot,st){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=nt,this.nsp=ot,st&&st.auth&&(this.auth=st.auth),this._opts=Object.assign({},st),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const nt=this.io;this.subs=[on(nt,"open",this.onopen.bind(this)),on(nt,"packet",this.onpacket.bind(this)),on(nt,"error",this.onerror.bind(this)),on(nt,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...nt){return nt.unshift("message"),this.emit.apply(this,nt),this}emit(nt,...ot){var st,ft,ht;if(RESERVED_EVENTS.hasOwnProperty(nt))throw new Error('"'+nt.toString()+'" is a reserved event name');if(ot.unshift(nt),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(ot),this;const gt={type:PacketType.EVENT,data:ot};if(gt.options={},gt.options.compress=this.flags.compress!==!1,typeof ot[ot.length-1]=="function"){const Et=this.ids++,wt=ot.pop();this._registerAckCallback(Et,wt),gt.id=Et}const yt=(ft=(st=this.io.engine)===null||st===void 0?void 0:st.transport)===null||ft===void 0?void 0:ft.writable,vt=this.connected&&!(!((ht=this.io.engine)===null||ht===void 0)&&ht._hasPingExpired());return this.flags.volatile&&!yt||(vt?(this.notifyOutgoingListeners(gt),this.packet(gt)):this.sendBuffer.push(gt)),this.flags={},this}_registerAckCallback(nt,ot){var st;const ft=(st=this.flags.timeout)!==null&&st!==void 0?st:this._opts.ackTimeout;if(ft===void 0){this.acks[nt]=ot;return}const ht=this.io.setTimeoutFn(()=>{delete this.acks[nt];for(let yt=0;yt<this.sendBuffer.length;yt++)this.sendBuffer[yt].id===nt&&this.sendBuffer.splice(yt,1);ot.call(this,new Error("operation has timed out"))},ft),gt=(...yt)=>{this.io.clearTimeoutFn(ht),ot.apply(this,yt)};gt.withError=!0,this.acks[nt]=gt}emitWithAck(nt,...ot){return new Promise((st,ft)=>{const ht=(gt,yt)=>gt?ft(gt):st(yt);ht.withError=!0,ot.push(ht),this.emit(nt,...ot)})}_addToQueue(nt){let ot;typeof nt[nt.length-1]=="function"&&(ot=nt.pop());const st={id:this._queueSeq++,tryCount:0,pending:!1,args:nt,flags:Object.assign({fromQueue:!0},this.flags)};nt.push((ft,...ht)=>st!==this._queue[0]?void 0:(ft!==null?st.tryCount>this._opts.retries&&(this._queue.shift(),ot&&ot(ft)):(this._queue.shift(),ot&&ot(null,...ht)),st.pending=!1,this._drainQueue())),this._queue.push(st),this._drainQueue()}_drainQueue(nt=!1){if(!this.connected||this._queue.length===0)return;const ot=this._queue[0];ot.pending&&!nt||(ot.pending=!0,ot.tryCount++,this.flags=ot.flags,this.emit.apply(this,ot.args))}packet(nt){nt.nsp=this.nsp,this.io._packet(nt)}onopen(){typeof this.auth=="function"?this.auth(nt=>{this._sendConnectPacket(nt)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(nt){this.packet({type:PacketType.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},nt):nt})}onerror(nt){this.connected||this.emitReserved("connect_error",nt)}onclose(nt,ot){this.connected=!1,delete this.id,this.emitReserved("disconnect",nt,ot),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(nt=>{if(!this.sendBuffer.some(st=>String(st.id)===nt)){const st=this.acks[nt];delete this.acks[nt],st.withError&&st.call(this,new Error("socket has been disconnected"))}})}onpacket(nt){if(nt.nsp===this.nsp)switch(nt.type){case PacketType.CONNECT:nt.data&&nt.data.sid?this.onconnect(nt.data.sid,nt.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case PacketType.EVENT:case PacketType.BINARY_EVENT:this.onevent(nt);break;case PacketType.ACK:case PacketType.BINARY_ACK:this.onack(nt);break;case PacketType.DISCONNECT:this.ondisconnect();break;case PacketType.CONNECT_ERROR:this.destroy();const st=new Error(nt.data.message);st.data=nt.data.data,this.emitReserved("connect_error",st);break}}onevent(nt){const ot=nt.data||[];nt.id!=null&&ot.push(this.ack(nt.id)),this.connected?this.emitEvent(ot):this.receiveBuffer.push(Object.freeze(ot))}emitEvent(nt){if(this._anyListeners&&this._anyListeners.length){const ot=this._anyListeners.slice();for(const st of ot)st.apply(this,nt)}super.emit.apply(this,nt),this._pid&&nt.length&&typeof nt[nt.length-1]=="string"&&(this._lastOffset=nt[nt.length-1])}ack(nt){const ot=this;let st=!1;return function(...ft){st||(st=!0,ot.packet({type:PacketType.ACK,id:nt,data:ft}))}}onack(nt){const ot=this.acks[nt.id];typeof ot=="function"&&(delete this.acks[nt.id],ot.withError&&nt.data.unshift(null),ot.apply(this,nt.data))}onconnect(nt,ot){this.id=nt,this.recovered=ot&&this._pid===ot,this._pid=ot,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(nt=>this.emitEvent(nt)),this.receiveBuffer=[],this.sendBuffer.forEach(nt=>{this.notifyOutgoingListeners(nt),this.packet(nt)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(nt=>nt()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:PacketType.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(nt){return this.flags.compress=nt,this}get volatile(){return this.flags.volatile=!0,this}timeout(nt){return this.flags.timeout=nt,this}onAny(nt){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(nt),this}prependAny(nt){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(nt),this}offAny(nt){if(!this._anyListeners)return this;if(nt){const ot=this._anyListeners;for(let st=0;st<ot.length;st++)if(nt===ot[st])return ot.splice(st,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(nt){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(nt),this}prependAnyOutgoing(nt){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(nt),this}offAnyOutgoing(nt){if(!this._anyOutgoingListeners)return this;if(nt){const ot=this._anyOutgoingListeners;for(let st=0;st<ot.length;st++)if(nt===ot[st])return ot.splice(st,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(nt){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const ot=this._anyOutgoingListeners.slice();for(const st of ot)st.apply(this,nt.data)}}}function Backoff(tt){tt=tt||{},this.ms=tt.min||100,this.max=tt.max||1e4,this.factor=tt.factor||2,this.jitter=tt.jitter>0&&tt.jitter<=1?tt.jitter:0,this.attempts=0}Backoff.prototype.duration=function(){var tt=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var nt=Math.random(),ot=Math.floor(nt*this.jitter*tt);tt=Math.floor(nt*10)&1?tt+ot:tt-ot}return Math.min(tt,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(tt){this.ms=tt};Backoff.prototype.setMax=function(tt){this.max=tt};Backoff.prototype.setJitter=function(tt){this.jitter=tt};class Manager extends Emitter{constructor(nt,ot){var st;super(),this.nsps={},this.subs=[],nt&&typeof nt=="object"&&(ot=nt,nt=void 0),ot=ot||{},ot.path=ot.path||"/socket.io",this.opts=ot,installTimerFunctions(this,ot),this.reconnection(ot.reconnection!==!1),this.reconnectionAttempts(ot.reconnectionAttempts||1/0),this.reconnectionDelay(ot.reconnectionDelay||1e3),this.reconnectionDelayMax(ot.reconnectionDelayMax||5e3),this.randomizationFactor((st=ot.randomizationFactor)!==null&&st!==void 0?st:.5),this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(ot.timeout==null?2e4:ot.timeout),this._readyState="closed",this.uri=nt;const ft=ot.parser||parser;this.encoder=new ft.Encoder,this.decoder=new ft.Decoder,this._autoConnect=ot.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(nt){return arguments.length?(this._reconnection=!!nt,nt||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(nt){return nt===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=nt,this)}reconnectionDelay(nt){var ot;return nt===void 0?this._reconnectionDelay:(this._reconnectionDelay=nt,(ot=this.backoff)===null||ot===void 0||ot.setMin(nt),this)}randomizationFactor(nt){var ot;return nt===void 0?this._randomizationFactor:(this._randomizationFactor=nt,(ot=this.backoff)===null||ot===void 0||ot.setJitter(nt),this)}reconnectionDelayMax(nt){var ot;return nt===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=nt,(ot=this.backoff)===null||ot===void 0||ot.setMax(nt),this)}timeout(nt){return arguments.length?(this._timeout=nt,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(nt){if(~this._readyState.indexOf("open"))return this;this.engine=new Socket$1(this.uri,this.opts);const ot=this.engine,st=this;this._readyState="opening",this.skipReconnect=!1;const ft=on(ot,"open",function(){st.onopen(),nt&&nt()}),ht=yt=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",yt),nt?nt(yt):this.maybeReconnectOnOpen()},gt=on(ot,"error",ht);if(this._timeout!==!1){const yt=this._timeout,vt=this.setTimeoutFn(()=>{ft(),ht(new Error("timeout")),ot.close()},yt);this.opts.autoUnref&&vt.unref(),this.subs.push(()=>{this.clearTimeoutFn(vt)})}return this.subs.push(ft),this.subs.push(gt),this}connect(nt){return this.open(nt)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const nt=this.engine;this.subs.push(on(nt,"ping",this.onping.bind(this)),on(nt,"data",this.ondata.bind(this)),on(nt,"error",this.onerror.bind(this)),on(nt,"close",this.onclose.bind(this)),on(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(nt){try{this.decoder.add(nt)}catch(ot){this.onclose("parse error",ot)}}ondecoded(nt){nextTick(()=>{this.emitReserved("packet",nt)},this.setTimeoutFn)}onerror(nt){this.emitReserved("error",nt)}socket(nt,ot){let st=this.nsps[nt];return st?this._autoConnect&&!st.active&&st.connect():(st=new Socket(this,nt,ot),this.nsps[nt]=st),st}_destroy(nt){const ot=Object.keys(this.nsps);for(const st of ot)if(this.nsps[st].active)return;this._close()}_packet(nt){const ot=this.encoder.encode(nt);for(let st=0;st<ot.length;st++)this.engine.write(ot[st],nt.options)}cleanup(){this.subs.forEach(nt=>nt()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(nt,ot){var st;this.cleanup(),(st=this.engine)===null||st===void 0||st.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",nt,ot),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const nt=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const ot=this.backoff.duration();this._reconnecting=!0;const st=this.setTimeoutFn(()=>{nt.skipReconnect||(this.emitReserved("reconnect_attempt",nt.backoff.attempts),!nt.skipReconnect&&nt.open(ft=>{ft?(nt._reconnecting=!1,nt.reconnect(),this.emitReserved("reconnect_error",ft)):nt.onreconnect()}))},ot);this.opts.autoUnref&&st.unref(),this.subs.push(()=>{this.clearTimeoutFn(st)})}}onreconnect(){const nt=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",nt)}}const cache={};function lookup(tt,nt){typeof tt=="object"&&(nt=tt,tt=void 0),nt=nt||{};const ot=url(tt,nt.path||"/socket.io"),st=ot.source,ft=ot.id,ht=ot.path,gt=cache[ft]&&ht in cache[ft].nsps,yt=nt.forceNew||nt["force new connection"]||nt.multiplex===!1||gt;let vt;return yt?vt=new Manager(st,nt):(cache[ft]||(cache[ft]=new Manager(st,nt)),vt=cache[ft]),ot.query&&!nt.query&&(nt.query=ot.queryKey),vt.socket(ot.path,nt)}Object.assign(lookup,{Manager,Socket,io:lookup,connect:lookup});const BASE_URL="/",useAuthStore=create((tt,nt)=>({authUser:null,isSigningUp:!1,isLoggingIn:!1,isUpdatingProfile:!1,isCheckingAuth:!0,onlineUsers:[],socket:null,checkAuth:async()=>{try{const ot=await axiosInstance.get("/auth/check");tt({authUser:ot.data}),nt().connectSocket()}catch(ot){console.log("Error in checkAuth:",ot),tt({authUser:null})}finally{tt({isCheckingAuth:!1})}},signup:async ot=>{tt({isSigningUp:!0});try{const st=await axiosInstance.post("/auth/signup",ot);tt({authUser:st.data}),_t.success("Account created successfully"),nt().connectSocket()}catch(st){_t.error(st.response.data.message)}finally{tt({isSigningUp:!1})}},login:async ot=>{tt({isLoggingIn:!0});try{const st=await axiosInstance.post("/auth/login",ot);tt({authUser:st.data}),_t.success("Logged in successfully"),nt().connectSocket()}catch(st){_t.error(st.response.data.message)}finally{tt({isLoggingIn:!1})}},logout:async()=>{try{await axiosInstance.post("/auth/logout"),tt({authUser:null}),_t.success("Logged out successfully"),nt().disconnectSocket()}catch(ot){_t.error(ot.response.data.message)}},updateProfile:async ot=>{tt({isUpdatingProfile:!0});try{const st=await axiosInstance.put("/auth/update-profile",ot);tt({authUser:st.data}),_t.success("Profile updated successfully")}catch(st){console.log("error in update profile:",st),_t.error(st.response.data.message)}finally{tt({isUpdatingProfile:!1})}},connectSocket:()=>{var ft;const{authUser:ot}=nt();if(!ot||(ft=nt().socket)!=null&&ft.connected)return;const st=lookup(BASE_URL,{query:{userId:ot._id}});st.connect(),tt({socket:st}),st.on("getOnlineUsers",ht=>{tt({onlineUsers:ht})})},disconnectSocket:()=>{var ot;(ot=nt().socket)!=null&&ot.connected&&nt().socket.disconnect()}}));/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase=tt=>tt.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mergeClasses=(...tt)=>tt.filter((nt,ot,st)=>!!nt&&nt.trim()!==""&&st.indexOf(nt)===ot).join(" ").trim();/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon=reactExports.forwardRef(({color:tt="currentColor",size:nt=24,strokeWidth:ot=2,absoluteStrokeWidth:st,className:ft="",children:ht,iconNode:gt,...yt},vt)=>reactExports.createElement("svg",{ref:vt,...defaultAttributes,width:nt,height:nt,stroke:tt,strokeWidth:st?Number(ot)*24/Number(nt):ot,className:mergeClasses("lucide",ft),...yt},[...gt.map(([xt,Et])=>reactExports.createElement(xt,Et)),...Array.isArray(ht)?ht:[ht]]));/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon=(tt,nt)=>{const ot=reactExports.forwardRef(({className:st,...ft},ht)=>reactExports.createElement(Icon,{ref:ht,iconNode:nt,className:mergeClasses(`lucide-${toKebabCase(tt)}`,st),...ft}));return ot.displayName=`${tt}`,ot};/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ArrowDownToLine=createLucideIcon("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Camera=createLucideIcon("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EyeOff=createLucideIcon("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eye=createLucideIcon("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LoaderCircle=createLucideIcon("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Loader=createLucideIcon("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lock=createLucideIcon("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LogOut=createLucideIcon("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mail=createLucideIcon("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MessageSquare=createLucideIcon("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Paperclip=createLucideIcon("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Send=createLucideIcon("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const User=createLucideIcon("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Users=createLucideIcon("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X$1=createLucideIcon("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Navbar=()=>{const{logout:tt,authUser:nt}=useAuthStore();return jsxRuntimeExports.jsx("header",{className:`bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80`,children:jsxRuntimeExports.jsx("div",{className:"container mx-auto px-4 h-16",children:jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between h-full",children:[jsxRuntimeExports.jsx("div",{className:"flex items-center gap-8",children:jsxRuntimeExports.jsxs(Link,{to:"/",className:"flex items-center gap-2.5 hover:opacity-80 transition-all",children:[jsxRuntimeExports.jsx("div",{className:"size-9 rounded-lg bg-primary/10 flex items-center justify-center",children:jsxRuntimeExports.jsx(MessageSquare,{className:"w-5 h-5 text-primary"})}),jsxRuntimeExports.jsx("h1",{className:"text-lg font-bold",children:"ChatBox"})]})}),jsxRuntimeExports.jsx("div",{className:"flex items-center gap-2",children:nt&&jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("button",{className:"flex gap-2 items-center",onClick:tt,children:[jsxRuntimeExports.jsx(LogOut,{className:"size-5"}),jsxRuntimeExports.jsx("span",{className:"hidden sm:inline",children:"Logout"})]})})})]})})})},useChatStore=create((tt,nt)=>({messages:[],users:[],selectedUser:null,isUsersLoading:!1,isMessagesLoading:!1,isMessagesSending:!1,getUsers:async()=>{tt({isUsersLoading:!0});try{const ot=await axiosInstance.get("/messages/users");tt({users:ot.data})}catch(ot){_t.error(ot.response.data.message)}finally{tt({isUsersLoading:!1})}},getMessages:async ot=>{tt({isMessagesLoading:!0});try{const st=await axiosInstance.get(`/messages/${ot}`);tt({messages:st.data})}catch(st){_t.error(st.response.data.message)}finally{tt({isMessagesLoading:!1})}},sendMessage:async ot=>{tt({isMessagesSending:!0});const{selectedUser:st,messages:ft}=nt();try{const ht=await axiosInstance.post(`/messages/send/${st._id}`,ot);tt({messages:[...ft,ht.data]})}catch(ht){_t.error(ht.response.data.message)}finally{tt({isMessagesSending:!1})}},subscribeToMessages:()=>{const{selectedUser:ot}=nt();if(!ot)return;useAuthStore.getState().socket.on("newMessage",ft=>{ft.senderId===ot._id&&tt({messages:[...nt().messages,ft]})})},unsubscribeFromMessages:()=>{useAuthStore.getState().socket.off("newMessage")},setSelectedUser:ot=>tt({selectedUser:ot})})),SidebarSkeleton=()=>{const tt=Array(8).fill(null);return jsxRuntimeExports.jsxs("aside",{className:`h-full w-20 lg:w-72 border-r border-base-300 
    flex flex-col transition-all duration-200`,children:[jsxRuntimeExports.jsx("div",{className:"border-b border-base-300 w-full p-5",children:jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2",children:[jsxRuntimeExports.jsx(Users,{className:"w-6 h-6"}),jsxRuntimeExports.jsx("span",{className:"font-medium hidden lg:block",children:"Contacts"})]})}),jsxRuntimeExports.jsx("div",{className:"overflow-y-auto w-full py-3",children:tt.map((nt,ot)=>jsxRuntimeExports.jsxs("div",{className:"w-full p-3 flex items-center gap-3",children:[jsxRuntimeExports.jsx("div",{className:"relative mx-auto lg:mx-0",children:jsxRuntimeExports.jsx("div",{className:"skeleton size-12 rounded-full"})}),jsxRuntimeExports.jsxs("div",{className:"hidden lg:block text-left min-w-0 flex-1",children:[jsxRuntimeExports.jsx("div",{className:"skeleton h-4 w-32 mb-2"}),jsxRuntimeExports.jsx("div",{className:"skeleton h-3 w-16"})]})]},ot))})]})},Sidebar=()=>{const{getUsers:tt,users:nt,selectedUser:ot,setSelectedUser:st,isUsersLoading:ft}=useChatStore(),{onlineUsers:ht}=useAuthStore(),[gt,yt]=reactExports.useState(!1);reactExports.useEffect(()=>{tt()},[tt]);const vt=gt?nt.filter(xt=>ht.includes(xt._id)):nt;return ft?jsxRuntimeExports.jsx(SidebarSkeleton,{}):jsxRuntimeExports.jsxs("aside",{className:"h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200",children:[jsxRuntimeExports.jsxs("div",{className:"border-b border-base-300 w-full p-5",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2",children:[jsxRuntimeExports.jsx(Users,{className:"size-6"}),jsxRuntimeExports.jsx("span",{className:"font-medium hidden lg:block",children:"Contacts"})]}),jsxRuntimeExports.jsxs("div",{className:"mt-3 hidden lg:flex items-center gap-2",children:[jsxRuntimeExports.jsxs("label",{className:"cursor-pointer flex items-center gap-2",children:[jsxRuntimeExports.jsx("input",{type:"checkbox",checked:gt,onChange:xt=>yt(xt.target.checked),className:"checkbox checkbox-sm"}),jsxRuntimeExports.jsx("span",{className:"text-sm",children:"Show online only"})]}),jsxRuntimeExports.jsxs("span",{className:"text-xs text-zinc-500",children:["(",ht.length-1," online)"]})]})]}),jsxRuntimeExports.jsxs("div",{className:"overflow-y-auto w-full py-3",children:[vt.map(xt=>jsxRuntimeExports.jsxs("button",{onClick:()=>st(xt),className:`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${(ot==null?void 0:ot._id)===xt._id?"bg-base-300 ring-1 ring-base-300":""}
            `,children:[jsxRuntimeExports.jsxs("div",{className:"relative mx-auto lg:mx-0",children:[jsxRuntimeExports.jsx("img",{src:xt.profilePic||"/avatar.png",alt:xt.name,className:"size-12 object-cover rounded-full"}),ht.includes(xt._id)&&jsxRuntimeExports.jsx("span",{className:`absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900`})]}),jsxRuntimeExports.jsxs("div",{className:"hidden lg:block text-left min-w-0",children:[jsxRuntimeExports.jsx("div",{className:"font-medium truncate",children:xt.fullName}),jsxRuntimeExports.jsx("div",{className:"text-sm text-zinc-400",children:ht.includes(xt._id)?"Online":"Offline"})]})]},xt._id)),vt.length===0&&jsxRuntimeExports.jsx("div",{className:"text-center text-zinc-500 py-4",children:"No online users"})]})]})},NoChatSelected=()=>jsxRuntimeExports.jsx("div",{className:"w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50",children:jsxRuntimeExports.jsxs("div",{className:"max-w-md text-center space-y-6",children:[jsxRuntimeExports.jsx("div",{className:"flex justify-center gap-4 mb-4",children:jsxRuntimeExports.jsx("div",{className:"relative",children:jsxRuntimeExports.jsx("div",{className:`w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce`,children:jsxRuntimeExports.jsx(MessageSquare,{className:"w-8 h-8 text-primary "})})})}),jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold",children:"Welcome to ChatBox!"}),jsxRuntimeExports.jsx("p",{className:"text-base-content/60",children:"Select a conversation from the sidebar to start chatting"})]})});var __assign=function(){return __assign=Object.assign||function(nt){for(var ot,st=1,ft=arguments.length;st<ft;st++){ot=arguments[st];for(var ht in ot)Object.prototype.hasOwnProperty.call(ot,ht)&&(nt[ht]=ot[ht])}return nt},__assign.apply(this,arguments)};function __spreadArray(tt,nt,ot){if(ot||arguments.length===2)for(var st=0,ft=nt.length,ht;st<ft;st++)(ht||!(st in nt))&&(ht||(ht=Array.prototype.slice.call(nt,0,st)),ht[st]=nt[st]);return tt.concat(ht||Array.prototype.slice.call(nt))}typeof SuppressedError=="function"&&SuppressedError;var MS="-ms-",MOZ="-moz-",WEBKIT="-webkit-",COMMENT="comm",RULESET="rule",DECLARATION="decl",IMPORT="@import",KEYFRAMES="@keyframes",LAYER="@layer",abs=Math.abs,from=String.fromCharCode,assign=Object.assign;function hash(tt,nt){return charat(tt,0)^45?(((nt<<2^charat(tt,0))<<2^charat(tt,1))<<2^charat(tt,2))<<2^charat(tt,3):0}function trim(tt){return tt.trim()}function match(tt,nt){return(tt=nt.exec(tt))?tt[0]:tt}function replace(tt,nt,ot){return tt.replace(nt,ot)}function indexof(tt,nt,ot){return tt.indexOf(nt,ot)}function charat(tt,nt){return tt.charCodeAt(nt)|0}function substr(tt,nt,ot){return tt.slice(nt,ot)}function strlen(tt){return tt.length}function sizeof(tt){return tt.length}function append(tt,nt){return nt.push(tt),tt}function combine(tt,nt){return tt.map(nt).join("")}function filter(tt,nt){return tt.filter(function(ot){return!match(ot,nt)})}var line=1,column=1,length=0,position=0,character=0,characters="";function node(tt,nt,ot,st,ft,ht,gt,yt){return{value:tt,root:nt,parent:ot,type:st,props:ft,children:ht,line,column,length:gt,return:"",siblings:yt}}function copy(tt,nt){return assign(node("",null,null,"",null,null,0,tt.siblings),tt,{length:-tt.length},nt)}function lift(tt){for(;tt.root;)tt=copy(tt.root,{children:[tt]});append(tt,tt.siblings)}function char(){return character}function prev(){return character=position>0?charat(characters,--position):0,column--,character===10&&(column=1,line--),character}function next(){return character=position<length?charat(characters,position++):0,column++,character===10&&(column=1,line++),character}function peek(){return charat(characters,position)}function caret(){return position}function slice(tt,nt){return substr(characters,tt,nt)}function token(tt){switch(tt){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function alloc(tt){return line=column=1,length=strlen(characters=tt),position=0,[]}function dealloc(tt){return characters="",tt}function delimit(tt){return trim(slice(position-1,delimiter(tt===91?tt+2:tt===40?tt+1:tt)))}function whitespace(tt){for(;(character=peek())&&character<33;)next();return token(tt)>2||token(character)>3?"":" "}function escaping(tt,nt){for(;--nt&&next()&&!(character<48||character>102||character>57&&character<65||character>70&&character<97););return slice(tt,caret()+(nt<6&&peek()==32&&next()==32))}function delimiter(tt){for(;next();)switch(character){case tt:return position;case 34:case 39:tt!==34&&tt!==39&&delimiter(character);break;case 40:tt===41&&delimiter(tt);break;case 92:next();break}return position}function commenter(tt,nt){for(;next()&&tt+character!==57;)if(tt+character===84&&peek()===47)break;return"/*"+slice(nt,position-1)+"*"+from(tt===47?tt:next())}function identifier(tt){for(;!token(peek());)next();return slice(tt,position)}function compile(tt){return dealloc(parse("",null,null,null,[""],tt=alloc(tt),0,[0],tt))}function parse(tt,nt,ot,st,ft,ht,gt,yt,vt){for(var xt=0,Et=0,wt=gt,kt=0,Ct=0,bt=0,jt=1,Pt=1,St=1,$t=0,Rt="",Tt=ft,Nt=ht,At=st,Ot=Rt;Pt;)switch(bt=$t,$t=next()){case 40:if(bt!=108&&charat(Ot,wt-1)==58){indexof(Ot+=replace(delimit($t),"&","&\f"),"&\f",abs(xt?yt[xt-1]:0))!=-1&&(St=-1);break}case 34:case 39:case 91:Ot+=delimit($t);break;case 9:case 10:case 13:case 32:Ot+=whitespace(bt);break;case 92:Ot+=escaping(caret()-1,7);continue;case 47:switch(peek()){case 42:case 47:append(comment(commenter(next(),caret()),nt,ot,vt),vt);break;default:Ot+="/"}break;case 123*jt:yt[xt++]=strlen(Ot)*St;case 125*jt:case 59:case 0:switch($t){case 0:case 125:Pt=0;case 59+Et:St==-1&&(Ot=replace(Ot,/\f/g,"")),Ct>0&&strlen(Ot)-wt&&append(Ct>32?declaration(Ot+";",st,ot,wt-1,vt):declaration(replace(Ot," ","")+";",st,ot,wt-2,vt),vt);break;case 59:Ot+=";";default:if(append(At=ruleset(Ot,nt,ot,xt,Et,ft,yt,Rt,Tt=[],Nt=[],wt,ht),ht),$t===123)if(Et===0)parse(Ot,nt,At,At,Tt,ht,wt,yt,Nt);else switch(kt===99&&charat(Ot,3)===110?100:kt){case 100:case 108:case 109:case 115:parse(tt,At,At,st&&append(ruleset(tt,At,At,0,0,ft,yt,Rt,ft,Tt=[],wt,Nt),Nt),ft,Nt,wt,yt,st?Tt:Nt);break;default:parse(Ot,At,At,At,[""],Nt,0,yt,Nt)}}xt=Et=Ct=0,jt=St=1,Rt=Ot="",wt=gt;break;case 58:wt=1+strlen(Ot),Ct=bt;default:if(jt<1){if($t==123)--jt;else if($t==125&&jt++==0&&prev()==125)continue}switch(Ot+=from($t),$t*jt){case 38:St=Et>0?1:(Ot+="\f",-1);break;case 44:yt[xt++]=(strlen(Ot)-1)*St,St=1;break;case 64:peek()===45&&(Ot+=delimit(next())),kt=peek(),Et=wt=strlen(Rt=Ot+=identifier(caret())),$t++;break;case 45:bt===45&&strlen(Ot)==2&&(jt=0)}}return ht}function ruleset(tt,nt,ot,st,ft,ht,gt,yt,vt,xt,Et,wt){for(var kt=ft-1,Ct=ft===0?ht:[""],bt=sizeof(Ct),jt=0,Pt=0,St=0;jt<st;++jt)for(var $t=0,Rt=substr(tt,kt+1,kt=abs(Pt=gt[jt])),Tt=tt;$t<bt;++$t)(Tt=trim(Pt>0?Ct[$t]+" "+Rt:replace(Rt,/&\f/g,Ct[$t])))&&(vt[St++]=Tt);return node(tt,nt,ot,ft===0?RULESET:yt,vt,xt,Et,wt)}function comment(tt,nt,ot,st){return node(tt,nt,ot,COMMENT,from(char()),substr(tt,2,-2),0,st)}function declaration(tt,nt,ot,st,ft){return node(tt,nt,ot,DECLARATION,substr(tt,0,st),substr(tt,st+1,-1),st,ft)}function prefix(tt,nt,ot){switch(hash(tt,nt)){case 5103:return WEBKIT+"print-"+tt+tt;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return WEBKIT+tt+tt;case 4789:return MOZ+tt+tt;case 5349:case 4246:case 4810:case 6968:case 2756:return WEBKIT+tt+MOZ+tt+MS+tt+tt;case 5936:switch(charat(tt,nt+11)){case 114:return WEBKIT+tt+MS+replace(tt,/[svh]\w+-[tblr]{2}/,"tb")+tt;case 108:return WEBKIT+tt+MS+replace(tt,/[svh]\w+-[tblr]{2}/,"tb-rl")+tt;case 45:return WEBKIT+tt+MS+replace(tt,/[svh]\w+-[tblr]{2}/,"lr")+tt}case 6828:case 4268:case 2903:return WEBKIT+tt+MS+tt+tt;case 6165:return WEBKIT+tt+MS+"flex-"+tt+tt;case 5187:return WEBKIT+tt+replace(tt,/(\w+).+(:[^]+)/,WEBKIT+"box-$1$2"+MS+"flex-$1$2")+tt;case 5443:return WEBKIT+tt+MS+"flex-item-"+replace(tt,/flex-|-self/g,"")+(match(tt,/flex-|baseline/)?"":MS+"grid-row-"+replace(tt,/flex-|-self/g,""))+tt;case 4675:return WEBKIT+tt+MS+"flex-line-pack"+replace(tt,/align-content|flex-|-self/g,"")+tt;case 5548:return WEBKIT+tt+MS+replace(tt,"shrink","negative")+tt;case 5292:return WEBKIT+tt+MS+replace(tt,"basis","preferred-size")+tt;case 6060:return WEBKIT+"box-"+replace(tt,"-grow","")+WEBKIT+tt+MS+replace(tt,"grow","positive")+tt;case 4554:return WEBKIT+replace(tt,/([^-])(transform)/g,"$1"+WEBKIT+"$2")+tt;case 6187:return replace(replace(replace(tt,/(zoom-|grab)/,WEBKIT+"$1"),/(image-set)/,WEBKIT+"$1"),tt,"")+tt;case 5495:case 3959:return replace(tt,/(image-set\([^]*)/,WEBKIT+"$1$`$1");case 4968:return replace(replace(tt,/(.+:)(flex-)?(.*)/,WEBKIT+"box-pack:$3"+MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+WEBKIT+tt+tt;case 4200:if(!match(tt,/flex-|baseline/))return MS+"grid-column-align"+substr(tt,nt)+tt;break;case 2592:case 3360:return MS+replace(tt,"template-","")+tt;case 4384:case 3616:return ot&&ot.some(function(st,ft){return nt=ft,match(st.props,/grid-\w+-end/)})?~indexof(tt+(ot=ot[nt].value),"span",0)?tt:MS+replace(tt,"-start","")+tt+MS+"grid-row-span:"+(~indexof(ot,"span",0)?match(ot,/\d+/):+match(ot,/\d+/)-+match(tt,/\d+/))+";":MS+replace(tt,"-start","")+tt;case 4896:case 4128:return ot&&ot.some(function(st){return match(st.props,/grid-\w+-start/)})?tt:MS+replace(replace(tt,"-end","-span"),"span ","")+tt;case 4095:case 3583:case 4068:case 2532:return replace(tt,/(.+)-inline(.+)/,WEBKIT+"$1$2")+tt;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(strlen(tt)-1-nt>6)switch(charat(tt,nt+1)){case 109:if(charat(tt,nt+4)!==45)break;case 102:return replace(tt,/(.+:)(.+)-([^]+)/,"$1"+WEBKIT+"$2-$3$1"+MOZ+(charat(tt,nt+3)==108?"$3":"$2-$3"))+tt;case 115:return~indexof(tt,"stretch",0)?prefix(replace(tt,"stretch","fill-available"),nt,ot)+tt:tt}break;case 5152:case 5920:return replace(tt,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(st,ft,ht,gt,yt,vt,xt){return MS+ft+":"+ht+xt+(gt?MS+ft+"-span:"+(yt?vt:+vt-+ht)+xt:"")+tt});case 4949:if(charat(tt,nt+6)===121)return replace(tt,":",":"+WEBKIT)+tt;break;case 6444:switch(charat(tt,charat(tt,14)===45?18:11)){case 120:return replace(tt,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+WEBKIT+(charat(tt,14)===45?"inline-":"")+"box$3$1"+WEBKIT+"$2$3$1"+MS+"$2box$3")+tt;case 100:return replace(tt,":",":"+MS)+tt}break;case 5719:case 2647:case 2135:case 3927:case 2391:return replace(tt,"scroll-","scroll-snap-")+tt}return tt}function serialize(tt,nt){for(var ot="",st=0;st<tt.length;st++)ot+=nt(tt[st],st,tt,nt)||"";return ot}function stringify(tt,nt,ot,st){switch(tt.type){case LAYER:if(tt.children.length)break;case IMPORT:case DECLARATION:return tt.return=tt.return||tt.value;case COMMENT:return"";case KEYFRAMES:return tt.return=tt.value+"{"+serialize(tt.children,st)+"}";case RULESET:if(!strlen(tt.value=tt.props.join(",")))return""}return strlen(ot=serialize(tt.children,st))?tt.return=tt.value+"{"+ot+"}":""}function middleware(tt){var nt=sizeof(tt);return function(ot,st,ft,ht){for(var gt="",yt=0;yt<nt;yt++)gt+=tt[yt](ot,st,ft,ht)||"";return gt}}function rulesheet(tt){return function(nt){nt.root||(nt=nt.return)&&tt(nt)}}function prefixer(tt,nt,ot,st){if(tt.length>-1&&!tt.return)switch(tt.type){case DECLARATION:tt.return=prefix(tt.value,tt.length,ot);return;case KEYFRAMES:return serialize([copy(tt,{value:replace(tt.value,"@","@"+WEBKIT)})],st);case RULESET:if(tt.length)return combine(ot=tt.props,function(ft){switch(match(ft,st=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lift(copy(tt,{props:[replace(ft,/:(read-\w+)/,":"+MOZ+"$1")]})),lift(copy(tt,{props:[ft]})),assign(tt,{props:filter(ot,st)});break;case"::placeholder":lift(copy(tt,{props:[replace(ft,/:(plac\w+)/,":"+WEBKIT+"input-$1")]})),lift(copy(tt,{props:[replace(ft,/:(plac\w+)/,":"+MOZ+"$1")]})),lift(copy(tt,{props:[replace(ft,/:(plac\w+)/,MS+"input-$1")]})),lift(copy(tt,{props:[ft]})),assign(tt,{props:filter(ot,st)});break}return""})}}var unitlessKeys={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},define_process_env_default={},f=typeof process<"u"&&define_process_env_default!==void 0&&(define_process_env_default.REACT_APP_SC_ATTR||define_process_env_default.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.13",g=`/*!sc*/
`,S=typeof window<"u"&&"HTMLElement"in window,w=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&define_process_env_default!==void 0&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!==""?define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&define_process_env_default!==void 0&&define_process_env_default.SC_DISABLE_SPEEDY!==void 0&&define_process_env_default.SC_DISABLE_SPEEDY!==""&&define_process_env_default.SC_DISABLE_SPEEDY!=="false"&&define_process_env_default.SC_DISABLE_SPEEDY),_=Object.freeze([]),C=Object.freeze({});function I(tt,nt,ot){return ot===void 0&&(ot=C),tt.theme!==ot.theme&&tt.theme||nt||ot.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(tt){return tt.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(tt){return String.fromCharCode(tt+(tt>25?39:97))};function x(tt){var nt,ot="";for(nt=Math.abs(tt);nt>k;nt=nt/k|0)ot=j(nt%k)+ot;return(j(nt%k)+ot).replace(T,"$1-$2")}var V,F=5381,M=function(tt,nt){for(var ot=nt.length;ot;)tt=33*tt^nt.charCodeAt(--ot);return tt},z=function(tt){return M(F,tt)};function $(tt){return x(z(tt)>>>0)}function B(tt){return tt.displayName||tt.name||"Component"}function L(tt){return typeof tt=="string"&&!0}var G=typeof Symbol=="function"&&Symbol.for,Y=G?Symbol.for("react.memo"):60115,W=G?Symbol.for("react.forward_ref"):60112,q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[W]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(tt){return("type"in(nt=tt)&&nt.type.$$typeof)===Y?U:"$$typeof"in tt?J[tt.$$typeof]:q;var nt}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(tt,nt,ot){if(typeof nt!="string"){if(ne){var st=te(nt);st&&st!==ne&&oe(tt,st,ot)}var ft=K(nt);Q&&(ft=ft.concat(Q(nt)));for(var ht=X(tt),gt=X(nt),yt=0;yt<ft.length;++yt){var vt=ft[yt];if(!(vt in H||ot&&ot[vt]||gt&&vt in gt||ht&&vt in ht)){var xt=ee(nt,vt);try{Z(tt,vt,xt)}catch{}}}}return tt}function re(tt){return typeof tt=="function"}function se(tt){return typeof tt=="object"&&"styledComponentId"in tt}function ie(tt,nt){return tt&&nt?"".concat(tt," ").concat(nt):tt||nt||""}function ae(tt,nt){if(tt.length===0)return"";for(var ot=tt[0],st=1;st<tt.length;st++)ot+=tt[st];return ot}function ce(tt){return tt!==null&&typeof tt=="object"&&tt.constructor.name===Object.name&&!("props"in tt&&tt.$$typeof)}function le(tt,nt,ot){if(ot===void 0&&(ot=!1),!ot&&!ce(tt)&&!Array.isArray(tt))return nt;if(Array.isArray(nt))for(var st=0;st<nt.length;st++)tt[st]=le(tt[st],nt[st]);else if(ce(nt))for(var st in nt)tt[st]=le(tt[st],nt[st]);return tt}function ue(tt,nt){Object.defineProperty(tt,"toString",{value:nt})}function he(tt){for(var nt=[],ot=1;ot<arguments.length;ot++)nt[ot-1]=arguments[ot];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(tt," for more information.").concat(nt.length>0?" Args: ".concat(nt.join(", ")):""))}var fe=function(){function tt(nt){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=nt}return tt.prototype.indexOfGroup=function(nt){for(var ot=0,st=0;st<nt;st++)ot+=this.groupSizes[st];return ot},tt.prototype.insertRules=function(nt,ot){if(nt>=this.groupSizes.length){for(var st=this.groupSizes,ft=st.length,ht=ft;nt>=ht;)if((ht<<=1)<0)throw he(16,"".concat(nt));this.groupSizes=new Uint32Array(ht),this.groupSizes.set(st),this.length=ht;for(var gt=ft;gt<ht;gt++)this.groupSizes[gt]=0}for(var yt=this.indexOfGroup(nt+1),vt=(gt=0,ot.length);gt<vt;gt++)this.tag.insertRule(yt,ot[gt])&&(this.groupSizes[nt]++,yt++)},tt.prototype.clearGroup=function(nt){if(nt<this.length){var ot=this.groupSizes[nt],st=this.indexOfGroup(nt),ft=st+ot;this.groupSizes[nt]=0;for(var ht=st;ht<ft;ht++)this.tag.deleteRule(st)}},tt.prototype.getGroup=function(nt){var ot="";if(nt>=this.length||this.groupSizes[nt]===0)return ot;for(var st=this.groupSizes[nt],ft=this.indexOfGroup(nt),ht=ft+st,gt=ft;gt<ht;gt++)ot+="".concat(this.tag.getRule(gt)).concat(g);return ot},tt}(),ye=new Map,ve=new Map,ge=1,Se=function(tt){if(ye.has(tt))return ye.get(tt);for(;ve.has(ge);)ge++;var nt=ge++;return ye.set(tt,nt),ve.set(nt,tt),nt},we=function(tt,nt){ge=nt+1,ye.set(tt,nt),ve.set(nt,tt)},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(tt,nt,ot){for(var st,ft=ot.split(","),ht=0,gt=ft.length;ht<gt;ht++)(st=ft[ht])&&tt.registerName(nt,st)},Pe=function(tt,nt){for(var ot,st=((ot=nt.textContent)!==null&&ot!==void 0?ot:"").split(g),ft=[],ht=0,gt=st.length;ht<gt;ht++){var yt=st[ht].trim();if(yt){var vt=yt.match(Ee);if(vt){var xt=0|parseInt(vt[1],10),Et=vt[2];xt!==0&&(we(Et,xt),Ne(tt,Et,vt[3]),tt.getTag().insertRules(xt,ft)),ft.length=0}else ft.push(yt)}}},_e=function(tt){for(var nt=document.querySelectorAll(be),ot=0,st=nt.length;ot<st;ot++){var ft=nt[ot];ft&&ft.getAttribute(f)!==m&&(Pe(tt,ft),ft.parentNode&&ft.parentNode.removeChild(ft))}};function Ce(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ie=function(tt){var nt=document.head,ot=tt||nt,st=document.createElement("style"),ft=function(yt){var vt=Array.from(yt.querySelectorAll("style[".concat(f,"]")));return vt[vt.length-1]}(ot),ht=ft!==void 0?ft.nextSibling:null;st.setAttribute(f,m),st.setAttribute(y,v);var gt=Ce();return gt&&st.setAttribute("nonce",gt),ot.insertBefore(st,ht),st},Ae=function(){function tt(nt){this.element=Ie(nt),this.element.appendChild(document.createTextNode("")),this.sheet=function(ot){if(ot.sheet)return ot.sheet;for(var st=document.styleSheets,ft=0,ht=st.length;ft<ht;ft++){var gt=st[ft];if(gt.ownerNode===ot)return gt}throw he(17)}(this.element),this.length=0}return tt.prototype.insertRule=function(nt,ot){try{return this.sheet.insertRule(ot,nt),this.length++,!0}catch{return!1}},tt.prototype.deleteRule=function(nt){this.sheet.deleteRule(nt),this.length--},tt.prototype.getRule=function(nt){var ot=this.sheet.cssRules[nt];return ot&&ot.cssText?ot.cssText:""},tt}(),Oe=function(){function tt(nt){this.element=Ie(nt),this.nodes=this.element.childNodes,this.length=0}return tt.prototype.insertRule=function(nt,ot){if(nt<=this.length&&nt>=0){var st=document.createTextNode(ot);return this.element.insertBefore(st,this.nodes[nt]||null),this.length++,!0}return!1},tt.prototype.deleteRule=function(nt){this.element.removeChild(this.nodes[nt]),this.length--},tt.prototype.getRule=function(nt){return nt<this.length?this.nodes[nt].textContent:""},tt}(),De=function(){function tt(nt){this.rules=[],this.length=0}return tt.prototype.insertRule=function(nt,ot){return nt<=this.length&&(this.rules.splice(nt,0,ot),this.length++,!0)},tt.prototype.deleteRule=function(nt){this.rules.splice(nt,1),this.length--},tt.prototype.getRule=function(nt){return nt<this.length?this.rules[nt]:""},tt}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function tt(nt,ot,st){nt===void 0&&(nt=C),ot===void 0&&(ot={});var ft=this;this.options=__assign(__assign({},Te),nt),this.gs=ot,this.names=new Map(st),this.server=!!nt.isServer,!this.server&&S&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(ht){for(var gt=ht.getTag(),yt=gt.length,vt="",xt=function(wt){var kt=function(St){return ve.get(St)}(wt);if(kt===void 0)return"continue";var Ct=ht.names.get(kt),bt=gt.getGroup(wt);if(Ct===void 0||!Ct.size||bt.length===0)return"continue";var jt="".concat(f,".g").concat(wt,'[id="').concat(kt,'"]'),Pt="";Ct!==void 0&&Ct.forEach(function(St){St.length>0&&(Pt+="".concat(St,","))}),vt+="".concat(bt).concat(jt,'{content:"').concat(Pt,'"}').concat(g)},Et=0;Et<yt;Et++)xt(Et);return vt}(ft)})}return tt.registerId=function(nt){return Se(nt)},tt.prototype.rehydrate=function(){!this.server&&S&&_e(this)},tt.prototype.reconstructWithOptions=function(nt,ot){return ot===void 0&&(ot=!0),new tt(__assign(__assign({},this.options),nt),this.gs,ot&&this.names||void 0)},tt.prototype.allocateGSInstance=function(nt){return this.gs[nt]=(this.gs[nt]||0)+1},tt.prototype.getTag=function(){return this.tag||(this.tag=(nt=function(ot){var st=ot.useCSSOMInjection,ft=ot.target;return ot.isServer?new De(ft):st?new Ae(ft):new Oe(ft)}(this.options),new fe(nt)));var nt},tt.prototype.hasNameForId=function(nt,ot){return this.names.has(nt)&&this.names.get(nt).has(ot)},tt.prototype.registerName=function(nt,ot){if(Se(nt),this.names.has(nt))this.names.get(nt).add(ot);else{var st=new Set;st.add(ot),this.names.set(nt,st)}},tt.prototype.insertRules=function(nt,ot,st){this.registerName(nt,ot),this.getTag().insertRules(Se(nt),st)},tt.prototype.clearNames=function(nt){this.names.has(nt)&&this.names.get(nt).clear()},tt.prototype.clearRules=function(nt){this.getTag().clearGroup(Se(nt)),this.clearNames(nt)},tt.prototype.clearTag=function(){this.tag=void 0},tt}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(tt,nt){return tt.map(function(ot){return ot.type==="rule"&&(ot.value="".concat(nt," ").concat(ot.value),ot.value=ot.value.replaceAll(",",",".concat(nt," ")),ot.props=ot.props.map(function(st){return"".concat(nt," ").concat(st)})),Array.isArray(ot.children)&&ot.type!=="@keyframes"&&(ot.children=Ve(ot.children,nt)),ot})}function Fe(tt){var nt,ot,st,ft=C,ht=ft.options,gt=ht===void 0?C:ht,yt=ft.plugins,vt=yt===void 0?_:yt,xt=function(kt,Ct,bt){return bt.startsWith(ot)&&bt.endsWith(ot)&&bt.replaceAll(ot,"").length>0?".".concat(nt):kt},Et=vt.slice();Et.push(function(kt){kt.type===RULESET&&kt.value.includes("&")&&(kt.props[0]=kt.props[0].replace(je,ot).replace(st,xt))}),gt.prefix&&Et.push(prefixer),Et.push(stringify);var wt=function(kt,Ct,bt,jt){Ct===void 0&&(Ct=""),bt===void 0&&(bt=""),jt===void 0&&(jt="&"),nt=jt,ot=Ct,st=new RegExp("\\".concat(ot,"\\b"),"g");var Pt=kt.replace(xe,""),St=compile(bt||Ct?"".concat(bt," ").concat(Ct," { ").concat(Pt," }"):Pt);gt.namespace&&(St=Ve(St,gt.namespace));var $t=[];return serialize(St,middleware(Et.concat(rulesheet(function(Rt){return $t.push(Rt)})))),$t};return wt.hash=vt.length?vt.reduce(function(kt,Ct){return Ct.name||he(15),M(kt,Ct.name)},F).toString():"",wt}var Me=new ke,ze=Fe(),$e=o$1.createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze});$e.Consumer;o$1.createContext(void 0);function Ge(){return reactExports.useContext($e)}var We=function(){function tt(nt,ot){var st=this;this.inject=function(ft,ht){ht===void 0&&(ht=ze);var gt=st.name+ht.hash;ft.hasNameForId(st.id,gt)||ft.insertRules(st.id,gt,ht(st.rules,gt,"@keyframes"))},this.name=nt,this.id="sc-keyframes-".concat(nt),this.rules=ot,ue(this,function(){throw he(12,String(st.name))})}return tt.prototype.getName=function(nt){return nt===void 0&&(nt=ze),this.name+nt.hash},tt}(),qe=function(tt){return tt>="A"&&tt<="Z"};function He(tt){for(var nt="",ot=0;ot<tt.length;ot++){var st=tt[ot];if(ot===1&&st==="-"&&tt[0]==="-")return tt;qe(st)?nt+="-"+st.toLowerCase():nt+=st}return nt.startsWith("ms-")?"-"+nt:nt}var Ue=function(tt){return tt==null||tt===!1||tt===""},Je=function(tt){var nt,ot,st=[];for(var ft in tt){var ht=tt[ft];tt.hasOwnProperty(ft)&&!Ue(ht)&&(Array.isArray(ht)&&ht.isCss||re(ht)?st.push("".concat(He(ft),":"),ht,";"):ce(ht)?st.push.apply(st,__spreadArray(__spreadArray(["".concat(ft," {")],Je(ht),!1),["}"],!1)):st.push("".concat(He(ft),": ").concat((nt=ft,(ot=ht)==null||typeof ot=="boolean"||ot===""?"":typeof ot!="number"||ot===0||nt in unitlessKeys||nt.startsWith("--")?String(ot).trim():"".concat(ot,"px")),";")))}return st};function Xe(tt,nt,ot,st){if(Ue(tt))return[];if(se(tt))return[".".concat(tt.styledComponentId)];if(re(tt)){if(!re(ht=tt)||ht.prototype&&ht.prototype.isReactComponent||!nt)return[tt];var ft=tt(nt);return Xe(ft,nt,ot,st)}var ht;return tt instanceof We?ot?(tt.inject(ot,st),[tt.getName(st)]):[tt]:ce(tt)?Je(tt):Array.isArray(tt)?Array.prototype.concat.apply(_,tt.map(function(gt){return Xe(gt,nt,ot,st)})):[tt.toString()]}function Ze(tt){for(var nt=0;nt<tt.length;nt+=1){var ot=tt[nt];if(re(ot)&&!se(ot))return!1}return!0}var Ke=z(v),Qe=function(){function tt(nt,ot,st){this.rules=nt,this.staticRulesId="",this.isStatic=(st===void 0||st.isStatic)&&Ze(nt),this.componentId=ot,this.baseHash=M(Ke,ot),this.baseStyle=st,ke.registerId(ot)}return tt.prototype.generateAndInjectStyles=function(nt,ot,st){var ft=this.baseStyle?this.baseStyle.generateAndInjectStyles(nt,ot,st):"";if(this.isStatic&&!st.hash)if(this.staticRulesId&&ot.hasNameForId(this.componentId,this.staticRulesId))ft=ie(ft,this.staticRulesId);else{var ht=ae(Xe(this.rules,nt,ot,st)),gt=x(M(this.baseHash,ht)>>>0);if(!ot.hasNameForId(this.componentId,gt)){var yt=st(ht,".".concat(gt),void 0,this.componentId);ot.insertRules(this.componentId,gt,yt)}ft=ie(ft,gt),this.staticRulesId=gt}else{for(var vt=M(this.baseHash,st.hash),xt="",Et=0;Et<this.rules.length;Et++){var wt=this.rules[Et];if(typeof wt=="string")xt+=wt;else if(wt){var kt=ae(Xe(wt,nt,ot,st));vt=M(vt,kt+Et),xt+=kt}}if(xt){var Ct=x(vt>>>0);ot.hasNameForId(this.componentId,Ct)||ot.insertRules(this.componentId,Ct,st(xt,".".concat(Ct),void 0,this.componentId)),ft=ie(ft,Ct)}}return ft},tt}(),et=o$1.createContext(void 0);et.Consumer;var rt={};function it(tt,nt,ot){var st=se(tt),ft=tt,ht=!L(tt),gt=nt.attrs,yt=gt===void 0?_:gt,vt=nt.componentId,xt=vt===void 0?function(Tt,Nt){var At=typeof Tt!="string"?"sc":R(Tt);rt[At]=(rt[At]||0)+1;var Ot="".concat(At,"-").concat($(v+At+rt[At]));return Nt?"".concat(Nt,"-").concat(Ot):Ot}(nt.displayName,nt.parentComponentId):vt,Et=nt.displayName,wt=Et===void 0?function(Tt){return L(Tt)?"styled.".concat(Tt):"Styled(".concat(B(Tt),")")}(tt):Et,kt=nt.displayName&&nt.componentId?"".concat(R(nt.displayName),"-").concat(nt.componentId):nt.componentId||xt,Ct=st&&ft.attrs?ft.attrs.concat(yt).filter(Boolean):yt,bt=nt.shouldForwardProp;if(st&&ft.shouldForwardProp){var jt=ft.shouldForwardProp;if(nt.shouldForwardProp){var Pt=nt.shouldForwardProp;bt=function(Tt,Nt){return jt(Tt,Nt)&&Pt(Tt,Nt)}}else bt=jt}var St=new Qe(ot,kt,st?ft.componentStyle:void 0);function $t(Tt,Nt){return function(At,Ot,It){var Ut=At.attrs,Ft=At.componentStyle,Vt=At.defaultProps,Xt=At.foldedComponentIds,Qt=At.styledComponentId,nn=At.target,an=o$1.useContext(et),en=Ge(),Gt=At.shouldForwardProp||en.shouldForwardProp,Lt=I(Ot,an,Vt)||C,Dt=function(Yt,Wt,Kt){for(var tn,Zt=__assign(__assign({},Wt),{className:void 0,theme:Kt}),ln=0;ln<Yt.length;ln+=1){var rn=re(tn=Yt[ln])?tn(Zt):tn;for(var qt in rn)Zt[qt]=qt==="className"?ie(Zt[qt],rn[qt]):qt==="style"?__assign(__assign({},Zt[qt]),rn[qt]):rn[qt]}return Wt.className&&(Zt.className=ie(Zt.className,Wt.className)),Zt}(Ut,Ot,Lt),Mt=Dt.as||nn,Bt={};for(var zt in Dt)Dt[zt]===void 0||zt[0]==="$"||zt==="as"||zt==="theme"&&Dt.theme===Lt||(zt==="forwardedAs"?Bt.as=Dt.forwardedAs:Gt&&!Gt(zt,Mt)||(Bt[zt]=Dt[zt]));var Jt=function(Yt,Wt){var Kt=Ge(),tn=Yt.generateAndInjectStyles(Wt,Kt.styleSheet,Kt.stylis);return tn}(Ft,Dt),Ht=ie(Xt,Qt);return Jt&&(Ht+=" "+Jt),Dt.className&&(Ht+=" "+Dt.className),Bt[L(Mt)&&!A.has(Mt)?"class":"className"]=Ht,Bt.ref=It,reactExports.createElement(Mt,Bt)}(Rt,Tt,Nt)}$t.displayName=wt;var Rt=o$1.forwardRef($t);return Rt.attrs=Ct,Rt.componentStyle=St,Rt.displayName=wt,Rt.shouldForwardProp=bt,Rt.foldedComponentIds=st?ie(ft.foldedComponentIds,ft.styledComponentId):"",Rt.styledComponentId=kt,Rt.target=st?ft.target:tt,Object.defineProperty(Rt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Tt){this._foldedDefaultProps=st?function(Nt){for(var At=[],Ot=1;Ot<arguments.length;Ot++)At[Ot-1]=arguments[Ot];for(var It=0,Ut=At;It<Ut.length;It++)le(Nt,Ut[It],!0);return Nt}({},ft.defaultProps,Tt):Tt}}),ue(Rt,function(){return".".concat(Rt.styledComponentId)}),ht&&oe(Rt,tt,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Rt}function at(tt,nt){for(var ot=[tt[0]],st=0,ft=nt.length;st<ft;st+=1)ot.push(nt[st],tt[st+1]);return ot}var ct=function(tt){return Object.assign(tt,{isCss:!0})};function lt(tt){for(var nt=[],ot=1;ot<arguments.length;ot++)nt[ot-1]=arguments[ot];if(re(tt)||ce(tt))return ct(Xe(at(_,__spreadArray([tt],nt,!0))));var st=tt;return nt.length===0&&st.length===1&&typeof st[0]=="string"?Xe(st):ct(Xe(at(st,nt)))}function ut(tt,nt,ot){if(ot===void 0&&(ot=C),!nt)throw he(1,nt);var st=function(ft){for(var ht=[],gt=1;gt<arguments.length;gt++)ht[gt-1]=arguments[gt];return tt(nt,ot,lt.apply(void 0,__spreadArray([ft],ht,!1)))};return st.attrs=function(ft){return ut(tt,nt,__assign(__assign({},ot),{attrs:Array.prototype.concat(ot.attrs,ft).filter(Boolean)}))},st.withConfig=function(ft){return ut(tt,nt,__assign(__assign({},ot),ft))},st}var pt=function(tt){return ut(it,tt)},dt=pt;A.forEach(function(tt){dt[tt]=pt(tt)});function mt(tt){for(var nt=[],ot=1;ot<arguments.length;ot++)nt[ot-1]=arguments[ot];var st=ae(lt.apply(void 0,__spreadArray([tt],nt,!1))),ft=$(st);return new We(ft,st)}const $84fda1e7e33cfd28$export$6bfda33bcd6c2d18={"aria-busy":!0,role:"progressbar"};dt.div`
  display: ${tt=>tt.$visible?"flex":"none"};
`;const $ad60b992c945fdb5$var$len=242.776657104492,$ad60b992c945fdb5$var$time=1.6,$ad60b992c945fdb5$var$anim=mt`
12.5% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len*.14}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len*.11}px;
}
43.75% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len*.35}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len*.35}px;
}
100% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len*.01}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len*.99}px;
}
`;dt.path`
  stroke-dasharray: ${$ad60b992c945fdb5$var$len*.01}px, ${$ad60b992c945fdb5$var$len};
  stroke-dashoffset: 0;
  animation: ${$ad60b992c945fdb5$var$anim} ${$ad60b992c945fdb5$var$time}s linear infinite;
`;const $5819da83a926266a$var$spin=mt`
to {
   transform: rotate(360deg);
 }
`;dt.svg`
  animation: ${$5819da83a926266a$var$spin} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;dt.polyline`
  stroke-width: ${tt=>tt.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const $afa12dd3e98f740f$var$dash=mt`
to {
   stroke-dashoffset: 136;
 }
`;dt.polygon`
  stroke-dasharray: 17;
  animation: ${$afa12dd3e98f740f$var$dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;dt.svg`
  transform-origin: 50% 65%;
`;const $7097090906378a5b$export$dc036a5afb9ca26f=({visible:tt=!0,width:nt="80",height:ot="80",colors:st=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],wrapperClass:ft="",wrapperStyle:ht={},ariaLabel:gt="color-ring-loading"})=>tt?jsxRuntimeExports.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:nt,height:ot,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:ft,style:ht,"aria-label":gt,"data-testid":"color-ring-svg",...$84fda1e7e33cfd28$export$6bfda33bcd6c2d18,children:[jsxRuntimeExports.jsx("defs",{children:jsxRuntimeExports.jsx("mask",{id:"ldio-4offds5dlws-mask",children:jsxRuntimeExports.jsx("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)",children:jsxRuntimeExports.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})})})}),jsxRuntimeExports.jsxs("g",{mask:"url(#ldio-4offds5dlws-mask)",children:[jsxRuntimeExports.jsx("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:st[0],children:jsxRuntimeExports.jsx("animate",{attributeName:"fill",values:st.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})}),jsxRuntimeExports.jsx("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:st[1],children:jsxRuntimeExports.jsx("animate",{attributeName:"fill",values:st.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})}),jsxRuntimeExports.jsx("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:st[2],children:jsxRuntimeExports.jsx("animate",{attributeName:"fill",values:st.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})}),jsxRuntimeExports.jsx("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:st[3],children:jsxRuntimeExports.jsx("animate",{attributeName:"fill",values:st.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})}),jsxRuntimeExports.jsx("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:st[4],children:jsxRuntimeExports.jsx("animate",{attributeName:"fill",values:st.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})})]})]}):null;var build={exports:{}};(function(module){module.exports=function(tt){var nt={};function ot(st){if(nt[st])return nt[st].exports;var ft=nt[st]={i:st,l:!1,exports:{}};return tt[st].call(ft.exports,ft,ft.exports,ot),ft.l=!0,ft.exports}return ot.m=tt,ot.c=nt,ot.d=function(st,ft,ht){ot.o(st,ft)||Object.defineProperty(st,ft,{enumerable:!0,get:ht})},ot.r=function(st){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(st,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(st,"__esModule",{value:!0})},ot.t=function(st,ft){if(ft&1&&(st=ot(st)),ft&8||ft&4&&typeof st=="object"&&st&&st.__esModule)return st;var ht=Object.create(null);if(ot.r(ht),Object.defineProperty(ht,"default",{enumerable:!0,value:st}),ft&2&&typeof st!="string")for(var gt in st)ot.d(ht,gt,(function(yt){return st[yt]}).bind(null,gt));return ht},ot.n=function(st){var ft=st&&st.__esModule?function(){return st.default}:function(){return st};return ot.d(ft,"a",ft),ft},ot.o=function(st,ft){return Object.prototype.hasOwnProperty.call(st,ft)},ot.p="",ot(ot.s="./src/index.js")}({"./node_modules/object-assign/index.js":function(module,exports,__webpack_require__){eval(`/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


//# sourceURL=webpack:///./node_modules/object-assign/index.js?`)},"./node_modules/prop-types/checkPropTypes.js":function(module,exports,__webpack_require__){eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type \`' + typeSpecName + '\` is invalid; ' +
              'it must be a function, usually from the \`prop-types\` package, but received \`' + typeof typeSpecs[typeSpecName] + '\`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' \`' + typeSpecName + '\` is invalid; the type checker ' +
            'function must return \`null\` or an \`Error\` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?`)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(module,exports,__webpack_require__){eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?`)},"./node_modules/react/cjs/react.development.js":function(module,exports,__webpack_require__){eval(`/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to \`this.state\` directly or define a \`state = {};\` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but \`setState\` was not called.
   *
   * This will not invoke \`shouldComponentUpdate\`, but it will invoke
   * \`componentWillUpdate\` and \`componentDidUpdate\`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or \`setState\` to mutate state.
   * You should treat \`this.state\` as immutable.
   *
   * There is no guarantee that \`this.state\` will be immediately updated, so
   * accessing \`this.state\` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat \`this.state\` as immutable.
 *
 * There is no guarantee that \`this.state\` will be immediately updated, so
 * accessing \`this.state\` after calling this method may return the old value.
 *
 * There is no guarantee that calls to \`setState\` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but \`setState\` was not called.
 *
 * This will not invoke \`shouldComponentUpdate\`, but it will invoke
 * \`componentWillUpdate\` and \`componentDidUpdate\`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: \`key\` is not a prop. Trying to access it will result ' + 'in \`undefined\` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: \`ref\` is not a prop. Trying to access it will result ' + 'in \`undefined\` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where \`this\` is
 * different from the \`owner\` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string \`ref\`s with arrow
 * functions, and as long as \`this\` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if \`object\` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as \`props.children\`, but
 * might also be specified through attributes:
 *
 * - \`traverseAllChildren(this.props.children, ...)\`
 * - \`traverseAllChildren(this.props.leftPanelChildren, ...)\`
 *
 * The \`traverseContext\` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as \`props.children\`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as \`props.children\`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * \`props.children\`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as \`props.children\`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only \`ReactElement\` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign \`defaultProps\` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign \`propTypes\` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a \`memo\` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\\n\\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\\n\\nCheck the render method of \`' + name + '\`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\\n\\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared \`PropTypes\` instead of \`propTypes\`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named \`defaultProps\` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop \`%s\` supplied to \`React.Fragment\`. ' + 'React.Fragment can only have \`key\` and \`children\` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute \`ref\` supplied to \`React.Fragment\`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


//# sourceURL=webpack:///./node_modules/react/cjs/react.development.js?`)},"./node_modules/react/index.js":function(module,exports,__webpack_require__){eval(`

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


//# sourceURL=webpack:///./node_modules/react/index.js?`)},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var invalidFileExtensions = ["exe", "scr", "msi", "bat", "sh", "cmd", "com", "dll", "pif", "scr", "vb", "vbe", "vbs", "ws", "wsc", "wsf", "wsh"];
var divStyle = {
  flexDirection: "column",
  backgroundColor: "#fff",
  border: "1px solid #c4cdd6",
  borderRadius: "4px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  padding: "10px"
};
var svgStyle = {
  position: "relative",
  userSelect: "none",
  display: "inline-block",
  height: "42px",
  fill: "grey",
  paddingLeft: "35px"
};
var spanPreviewStyle = {
  color: "rgb(128, 144, 162)",
  fontSize: "12px"
};

function getFileUrl(_ref) {
  var type = _ref.type,
      url = _ref.url,
      file = _ref.file,
      onError = _ref.onError;
  url = url ? url : "";

  if (type === "file" && file) {
    try {
      var fileExtension = file.name.split(".").pop();

      if (file.type === "" || invalidFileExtensions.includes(fileExtension) || file.type.includes("application") && file.type !== "application/pdf") {
        var msg = "".concat(file.name, " is not a valid file.");

        if (onError) {
          onError(msg);
        } else {
          alert(msg);
        }
      } else {
        url = URL.createObjectURL(file);
      }
    } catch (err) {
      if (onError) {
        onError(err);
      } else {
        alert(err);
      }
    }
  }

  return {
    url: url,
    preview: url !== "" ? "imgPreview" : "noURL"
  };
}

var FilePreview = /*#__PURE__*/function (_Component) {
  _inherits(FilePreview, _Component);

  var _super = _createSuper(FilePreview);

  function FilePreview(props) {
    var _this;

    _classCallCheck(this, FilePreview);

    _this = _super.call(this);

    var _getFileUrl = getFileUrl(props),
        url = _getFileUrl.url,
        preview = _getFileUrl.preview;

    var width = props.width,
        height = props.height;

    if (!width) {
      width = "424px";
    }

    if (!height) {
      height = "424px";
    }

    _this.objPreviewStyle = {
      width: "100%",
      height: height
    };
    _this.width = width;
    _this.height = height;
    _this.state = {
      preview: preview,
      type: props.type,
      file: props.file,
      url: url
    };
    return _this;
  }

  _createClass(FilePreview, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          preview = _this$state.preview,
          url = _this$state.url;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread(_objectSpread({}, divStyle), {}, {
          width: this.width
        })
      }, preview === "imgPreview" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: url,
        onError: function onError() {
          return _this2.setState({
            preview: "docPreview"
          });
        },
        style: this.objPreviewStyle
      }) : preview === "docPreview" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("object", {
        style: this.objPreviewStyle,
        data: url
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread(_objectSpread({}, this.objPreviewStyle), {}, {
          paddingLeft: "35%",
          paddingTop: "12em"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "inline-grid"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        color: "grey",
        viewBox: "0 0 24 24",
        style: svgStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.25 24A2.252 2.252 0 0 1 0 21.75V2.25A2.252 2.252 0 0 1 2.25 0h19.5A2.252 2.252 0 0 1 24 2.25v19.5A2.252 2.252 0 0 1 21.75 24H2.25zm0-22.5a.75.75 0 0 0-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75H2.25z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16.5 11.25c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25zM15.655 19.858a.746.746 0 0 1-.699-.478 7.507 7.507 0 0 0-1.132-1.96l-.021-.026a7.364 7.364 0 0 0-3.819-2.495 7.485 7.485 0 0 0-1.979-.268 7.442 7.442 0 0 0-3.674.98.754.754 0 0 1-1.023-.281.751.751 0 0 1 .28-1.023 8.936 8.936 0 0 1 4.415-1.177 8.97 8.97 0 0 1 2.376.322 8.892 8.892 0 0 1 4.1 2.441 5.243 5.243 0 0 1 2.902-.879c1.219 0 2.402.427 3.331 1.204a.743.743 0 0 1 .266.509.743.743 0 0 1-.172.548.747.747 0 0 1-1.056.094 3.699 3.699 0 0 0-2.369-.855c-.692 0-1.375.195-1.957.555a8.833 8.833 0 0 1 .928 1.769.747.747 0 0 1-.697 1.02z"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: spanPreviewStyle
      }, "No Preview Available"))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.type === "file" && props.file !== state.file || props.type === "url" && props.url !== state.url) {
        var _getFileUrl2 = getFileUrl(props),
            url = _getFileUrl2.url,
            preview = _getFileUrl2.preview;

        return {
          preview: preview,
          file: props.file,
          url: url,
          type: props.type
        };
      }

      return null;
    }
  }]);

  return FilePreview;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilePreview);

//# sourceURL=webpack:///./src/index.js?`)}})})(build);var buildExports=build.exports;const FilePreview=getDefaultExportFromCjs(buildExports),ChatHeader=()=>{const{selectedUser:tt,setSelectedUser:nt}=useChatStore(),{onlineUsers:ot}=useAuthStore();return jsxRuntimeExports.jsx("div",{className:"p-2.5 border-b border-base-300",children:jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3",children:[jsxRuntimeExports.jsx("div",{className:"avatar",children:jsxRuntimeExports.jsx("div",{className:"size-10 rounded-full relative",children:jsxRuntimeExports.jsx("img",{src:tt.profilePic||"/avatar.png",alt:tt.fullName})})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"font-medium",children:tt.fullName}),jsxRuntimeExports.jsx("p",{className:"text-sm text-base-content/70",children:ot.includes(tt._id)?"Online":"Offline"})]})]}),jsxRuntimeExports.jsx("button",{onClick:()=>nt(null),children:jsxRuntimeExports.jsx(X$1,{})})]})})},MessageInput=()=>{const[tt,nt]=reactExports.useState(""),[ot,st]=reactExports.useState(null),[ft,ht]=reactExports.useState(null),gt=reactExports.useRef(null),{sendMessage:yt,isMessagesSending:vt}=useChatStore(),xt=kt=>{const Ct=kt.target.files[0];ht(Ct);const bt=new FileReader;bt.onloadend=()=>{st(bt.result)},bt.readAsDataURL(Ct)},Et=()=>{st(null),gt.current&&(gt.current.value="")},wt=async kt=>{if(kt.preventDefault(),!tt.trim()&&!ot)return;const Ct=new FormData;Ct.append("image",ft),Ct.append("text",tt.trim());try{nt(""),st(null),ht(null),await yt(Ct),gt.current&&(gt.current.value="")}catch(bt){console.error("Failed to send message:",bt)}};return jsxRuntimeExports.jsxs("div",{className:"p-4 w-full",children:[ot&&jsxRuntimeExports.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx(FilePreview,{type:"file",file:ft,width:"150px",height:"auto"}),jsxRuntimeExports.jsx("button",{onClick:Et,className:`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center`,type:"button",children:jsxRuntimeExports.jsx(X$1,{className:"size-3"})})]}),jsxRuntimeExports.jsx("p",{children:ft.name.slice(-20)})]}),jsxRuntimeExports.jsxs("form",{onSubmit:wt,className:"flex items-center gap-2",children:[jsxRuntimeExports.jsxs("div",{className:"flex-1 flex gap-2",children:[jsxRuntimeExports.jsx("input",{type:"text",className:"w-full input input-bordered rounded-lg input-sm sm:input-md",placeholder:"Type a message...",value:tt,onChange:kt=>nt(kt.target.value)}),jsxRuntimeExports.jsx("input",{type:"file",className:"hidden",ref:gt,onChange:xt}),jsxRuntimeExports.jsx("button",{type:"button",className:`hidden sm:flex btn btn-circle
                     ${ot?"text-emerald-500":"text-zinc-400"}`,onClick:()=>{var kt;return(kt=gt.current)==null?void 0:kt.click()},children:jsxRuntimeExports.jsx(Paperclip,{size:22})})]}),jsxRuntimeExports.jsx("button",{type:"submit",className:"btn btn-sm btn-circle",disabled:!tt.trim()&&!ot,children:jsxRuntimeExports.jsx(Send,{size:22})})]})]})},MessageSkeleton=()=>{const tt=Array(6).fill(null);return jsxRuntimeExports.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:tt.map((nt,ot)=>jsxRuntimeExports.jsxs("div",{className:`chat ${ot%2===0?"chat-start":"chat-end"}`,children:[jsxRuntimeExports.jsx("div",{className:"chat-image avatar",children:jsxRuntimeExports.jsx("div",{className:"size-10 rounded-full",children:jsxRuntimeExports.jsx("div",{className:"skeleton w-full h-full rounded-full"})})}),jsxRuntimeExports.jsx("div",{className:"chat-header mb-1",children:jsxRuntimeExports.jsx("div",{className:"skeleton h-4 w-16"})}),jsxRuntimeExports.jsx("div",{className:"chat-bubble bg-transparent p-0",children:jsxRuntimeExports.jsx("div",{className:"skeleton h-16 w-[200px]"})})]},ot))})};function formatMessageTime(tt){return new Date(tt).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})}const VideoPlayer=({videoUrl:tt})=>{const[nt,ot]=reactExports.useState(!1),st=reactExports.useRef(null),ft=()=>{nt?st.current.pause():st.current.play(),ot(!nt)};return jsxRuntimeExports.jsx("div",{className:"relative max-w-80",children:nt?jsxRuntimeExports.jsx("video",{ref:st,className:"object-cover rounded-lg",controls:!0,autoPlay:!0,children:jsxRuntimeExports.jsx("source",{src:tt,type:"video/mp4"})}):jsxRuntimeExports.jsxs("div",{className:"cursor-pointer transition-all",onClick:ft,children:[jsxRuntimeExports.jsx("video",{ref:st,className:" object-cover rounded-lg",muted:!0,loop:!0,children:jsxRuntimeExports.jsx("source",{src:tt,type:"video/mp4"})}),jsxRuntimeExports.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg",children:jsxRuntimeExports.jsx("button",{className:"text-white text-2xl",children:"▶️"})})]})})},ChatContainer=()=>{const{messages:tt,getMessages:nt,isMessagesLoading:ot,isMessagesSending:st,selectedUser:ft,subscribeToMessages:ht,unsubscribeFromMessages:gt}=useChatStore(),{authUser:yt}=useAuthStore(),vt=reactExports.useRef(null);reactExports.useEffect(()=>(nt(ft._id),ht(),()=>gt()),[ft._id,nt,ht,gt]);const xt=wt=>[".jpg",".jpeg",".png",".gif",".bmp",".webp"].some(Ct=>wt.toLowerCase().endsWith(Ct)),Et=wt=>[".mp4",".mkv",".webm",".avi",".mov",".flv",".wmv",".mpeg",".mpg"].some(Ct=>wt.toLowerCase().endsWith(Ct));return reactExports.useEffect(()=>{vt.current&&tt&&vt.current.scrollIntoView({behavior:"smooth"})},[tt]),ot?jsxRuntimeExports.jsxs("div",{className:"flex-1 flex flex-col overflow-auto",children:[jsxRuntimeExports.jsx(ChatHeader,{}),jsxRuntimeExports.jsx(MessageSkeleton,{}),jsxRuntimeExports.jsx(MessageInput,{})]}):jsxRuntimeExports.jsxs("div",{className:"flex-1 flex flex-col overflow-auto",children:[jsxRuntimeExports.jsx(ChatHeader,{}),jsxRuntimeExports.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:tt.map(wt=>jsxRuntimeExports.jsxs("div",{className:`chat ${wt.senderId===yt._id?"chat-end":"chat-start"}`,ref:vt,children:[jsxRuntimeExports.jsx("div",{className:" chat-image avatar",children:jsxRuntimeExports.jsx("div",{className:"size-10 rounded-full border",children:jsxRuntimeExports.jsx("img",{src:wt.senderId===yt._id?yt.profilePic||"/avatar.png":ft.profilePic||"/avatar.png",alt:"profile pic"})})}),jsxRuntimeExports.jsx("div",{className:"chat-header mb-1",children:jsxRuntimeExports.jsx("time",{className:"text-xs opacity-50 ml-1",children:formatMessageTime(wt.createdAt)})}),jsxRuntimeExports.jsxs("div",{className:"chat-bubble flex flex-col",children:[wt.image&&jsxRuntimeExports.jsxs("div",{className:"relative",children:[xt(wt.image)?jsxRuntimeExports.jsx("img",{src:wt.image,alt:"Attachment",className:"sm:max-w-[200px] rounded-md mb-2"}):Et(wt.image)?jsxRuntimeExports.jsx(VideoPlayer,{videoUrl:wt.image}):jsxRuntimeExports.jsx("div",{className:"pr-5 font-bold",children:jsxRuntimeExports.jsx("p",{children:wt.image.slice(-20)})}),wt.image&&jsxRuntimeExports.jsx("a",{href:wt.image.replace("/upload/","/upload/fl_attachment/"),download:"",className:"absolute -bottom-2 -right-2",children:jsxRuntimeExports.jsx("button",{children:jsxRuntimeExports.jsx(ArrowDownToLine,{})})})]}),wt.text&&jsxRuntimeExports.jsx("p",{children:wt.text})]})]},wt._id))}),jsxRuntimeExports.jsx("div",{className:"chat-end",children:st&&jsxRuntimeExports.jsx($7097090906378a5b$export$dc036a5afb9ca26f,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),jsxRuntimeExports.jsx(MessageInput,{})]})},HomePage=()=>{const{selectedUser:tt}=useChatStore();return jsxRuntimeExports.jsx("div",{className:"h-screen bg-base-200",children:jsxRuntimeExports.jsx("div",{className:"flex items-center justify-center pt-20 px-4",children:jsxRuntimeExports.jsx("div",{className:"bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]",children:jsxRuntimeExports.jsxs("div",{className:"flex h-full rounded-lg overflow-hidden",children:[jsxRuntimeExports.jsx(Sidebar,{}),tt?jsxRuntimeExports.jsx(ChatContainer,{}):jsxRuntimeExports.jsx(NoChatSelected,{})]})})})})},AuthImagePattern=({title:tt,subtitle:nt})=>jsxRuntimeExports.jsx("div",{className:"hidden lg:flex items-center justify-center bg-base-200 p-12",children:jsxRuntimeExports.jsxs("div",{className:"max-w-md text-center",children:[jsxRuntimeExports.jsx("div",{className:"grid grid-cols-3 gap-3 mb-8",children:[...Array(9)].map((ot,st)=>jsxRuntimeExports.jsx("div",{className:`aspect-square rounded-2xl bg-primary/10 ${st%2===0?"animate-pulse":""}`},st))}),jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold mb-4",children:tt}),jsxRuntimeExports.jsx("p",{className:"text-base-content/60",children:nt})]})}),SignUpPage=()=>{const[tt,nt]=reactExports.useState(!1),[ot,st]=reactExports.useState({fullName:"",email:"",password:""}),{signup:ft,isSigningUp:ht}=useAuthStore(),gt=()=>ot.fullName.trim()?ot.email.trim()?/\S+@\S+\.\S+/.test(ot.email)?ot.password?ot.password.length<6?_t.error("Password must be at least 6 characters"):!0:_t.error("Password is required"):_t.error("Invalid email format"):_t.error("Email is required"):_t.error("Full name is required"),yt=vt=>{vt.preventDefault(),gt()===!0&&ft(ot)};return jsxRuntimeExports.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[jsxRuntimeExports.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:jsxRuntimeExports.jsxs("div",{className:"w-full max-w-md space-y-8",children:[jsxRuntimeExports.jsx("div",{className:"text-center mb-8",children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[jsxRuntimeExports.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors`,children:jsxRuntimeExports.jsx(MessageSquare,{className:"size-6 text-primary"})}),jsxRuntimeExports.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Create Account"}),jsxRuntimeExports.jsx("p",{className:"text-base-content/60",children:"Get started with your free account"})]})}),jsxRuntimeExports.jsxs("form",{onSubmit:yt,className:"space-y-6",children:[jsxRuntimeExports.jsxs("div",{className:"form-control",children:[jsxRuntimeExports.jsx("label",{className:"label",children:jsxRuntimeExports.jsx("span",{className:"label-text font-medium",children:"Full Name"})}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:jsxRuntimeExports.jsx(User,{className:"size-5 text-base-content/40"})}),jsxRuntimeExports.jsx("input",{type:"text",className:"input input-bordered w-full pl-10",placeholder:"John Doe",value:ot.fullName,onChange:vt=>st({...ot,fullName:vt.target.value})})]})]}),jsxRuntimeExports.jsxs("div",{className:"form-control",children:[jsxRuntimeExports.jsx("label",{className:"label",children:jsxRuntimeExports.jsx("span",{className:"label-text font-medium",children:"Email"})}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:jsxRuntimeExports.jsx(Mail,{className:"size-5 text-base-content/40"})}),jsxRuntimeExports.jsx("input",{type:"email",className:"input input-bordered w-full pl-10",placeholder:"you@example.com",value:ot.email,onChange:vt=>st({...ot,email:vt.target.value})})]})]}),jsxRuntimeExports.jsxs("div",{className:"form-control",children:[jsxRuntimeExports.jsx("label",{className:"label",children:jsxRuntimeExports.jsx("span",{className:"label-text font-medium",children:"Password"})}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:jsxRuntimeExports.jsx(Lock,{className:"size-5 text-base-content/40"})}),jsxRuntimeExports.jsx("input",{type:tt?"text":"password",className:"input input-bordered w-full pl-10",placeholder:"••••••••",value:ot.password,onChange:vt=>st({...ot,password:vt.target.value})}),jsxRuntimeExports.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>nt(!tt),children:tt?jsxRuntimeExports.jsx(EyeOff,{className:"size-5 text-base-content/40"}):jsxRuntimeExports.jsx(Eye,{className:"size-5 text-base-content/40"})})]})]}),jsxRuntimeExports.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:ht,children:ht?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(LoaderCircle,{className:"size-5 animate-spin"}),"Loading..."]}):"Create Account"})]}),jsxRuntimeExports.jsx("div",{className:"text-center",children:jsxRuntimeExports.jsxs("p",{className:"text-base-content/60",children:["Already have an account?"," ",jsxRuntimeExports.jsx(Link,{to:"/login",className:"link link-primary",children:"Sign in"})]})})]})}),jsxRuntimeExports.jsx(AuthImagePattern,{title:"Join our community",subtitle:"Connect with friends, share moments, and stay in touch with your loved ones."})]})},LoginPage=()=>{const[tt,nt]=reactExports.useState(!1),[ot,st]=reactExports.useState({email:"",password:""}),{login:ft,isLoggingIn:ht}=useAuthStore(),gt=async yt=>{yt.preventDefault(),ft(ot)};return jsxRuntimeExports.jsxs("div",{className:"h-screen grid lg:grid-cols-2",children:[jsxRuntimeExports.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:jsxRuntimeExports.jsxs("div",{className:"w-full max-w-md space-y-8",children:[jsxRuntimeExports.jsx("div",{className:"text-center mb-8",children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[jsxRuntimeExports.jsx("div",{className:`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors`,children:jsxRuntimeExports.jsx(MessageSquare,{className:"w-6 h-6 text-primary"})}),jsxRuntimeExports.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Welcome Back"}),jsxRuntimeExports.jsx("p",{className:"text-base-content/60",children:"Sign in to your account"})]})}),jsxRuntimeExports.jsxs("form",{onSubmit:gt,className:"space-y-6",children:[jsxRuntimeExports.jsxs("div",{className:"form-control",children:[jsxRuntimeExports.jsx("label",{className:"label",children:jsxRuntimeExports.jsx("span",{className:"label-text font-medium",children:"Email"})}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:jsxRuntimeExports.jsx(Mail,{className:"h-5 w-5 text-base-content/40"})}),jsxRuntimeExports.jsx("input",{type:"email",className:"input input-bordered w-full pl-10",placeholder:"you@example.com",value:ot.email,onChange:yt=>st({...ot,email:yt.target.value})})]})]}),jsxRuntimeExports.jsxs("div",{className:"form-control",children:[jsxRuntimeExports.jsx("label",{className:"label",children:jsxRuntimeExports.jsx("span",{className:"label-text font-medium",children:"Password"})}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:jsxRuntimeExports.jsx(Lock,{className:"h-5 w-5 text-base-content/40"})}),jsxRuntimeExports.jsx("input",{type:tt?"text":"password",className:"input input-bordered w-full pl-10",placeholder:"••••••••",value:ot.password,onChange:yt=>st({...ot,password:yt.target.value})}),jsxRuntimeExports.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>nt(!tt),children:tt?jsxRuntimeExports.jsx(EyeOff,{className:"h-5 w-5 text-base-content/40"}):jsxRuntimeExports.jsx(Eye,{className:"h-5 w-5 text-base-content/40"})})]})]}),jsxRuntimeExports.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:ht,children:ht?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(LoaderCircle,{className:"h-5 w-5 animate-spin"}),"Loading..."]}):"Sign in"})]}),jsxRuntimeExports.jsx("div",{className:"text-center",children:jsxRuntimeExports.jsxs("p",{className:"text-base-content/60",children:["Don't have an account?"," ",jsxRuntimeExports.jsx(Link,{to:"/signup",className:"link link-primary",children:"Create account"})]})})]})}),jsxRuntimeExports.jsx(AuthImagePattern,{title:"Welcome back!",subtitle:"Sign in to continue your conversations and catch up with your messages."})]})},THEMES=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],useThemeStore=create(tt=>({theme:localStorage.getItem("chat-theme")||"light",setTheme:nt=>{localStorage.setItem("chat-theme",nt),tt({theme:nt})}})),PREVIEW_MESSAGES=[{id:1,content:"Hey! How's it going?",isSent:!1},{id:2,content:"I'm doing great! Just working on some new features.",isSent:!0}],SettingsPage=()=>{const{theme:tt,setTheme:nt}=useThemeStore();return jsxRuntimeExports.jsx("div",{className:"h-screen container mx-auto px-4 pt-20 max-w-5xl",children:jsxRuntimeExports.jsxs("div",{className:"space-y-6",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-1",children:[jsxRuntimeExports.jsx("h2",{className:"text-lg font-semibold",children:"Theme"}),jsxRuntimeExports.jsx("p",{className:"text-sm text-base-content/70",children:"Choose a theme for your chat interface"})]}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2",children:THEMES.map(ot=>jsxRuntimeExports.jsxs("button",{className:`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${tt===ot?"bg-base-200":"hover:bg-base-200/50"}
              `,onClick:()=>nt(ot),children:[jsxRuntimeExports.jsx("div",{className:"relative h-8 w-full rounded-md overflow-hidden","data-theme":ot,children:jsxRuntimeExports.jsxs("div",{className:"absolute inset-0 grid grid-cols-4 gap-px p-1",children:[jsxRuntimeExports.jsx("div",{className:"rounded bg-primary"}),jsxRuntimeExports.jsx("div",{className:"rounded bg-secondary"}),jsxRuntimeExports.jsx("div",{className:"rounded bg-accent"}),jsxRuntimeExports.jsx("div",{className:"rounded bg-neutral"})]})}),jsxRuntimeExports.jsx("span",{className:"text-[11px] font-medium truncate w-full text-center",children:ot.charAt(0).toUpperCase()+ot.slice(1)})]},ot))}),jsxRuntimeExports.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Preview"}),jsxRuntimeExports.jsx("div",{className:"rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg",children:jsxRuntimeExports.jsx("div",{className:"p-4 bg-base-200",children:jsxRuntimeExports.jsx("div",{className:"max-w-lg mx-auto",children:jsxRuntimeExports.jsxs("div",{className:"bg-base-100 rounded-xl shadow-sm overflow-hidden",children:[jsxRuntimeExports.jsx("div",{className:"px-4 py-3 border-b border-base-300 bg-base-100",children:jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3",children:[jsxRuntimeExports.jsx("div",{className:"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium",children:"J"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"font-medium text-sm",children:"John Doe"}),jsxRuntimeExports.jsx("p",{className:"text-xs text-base-content/70",children:"Online"})]})]})}),jsxRuntimeExports.jsx("div",{className:"p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100",children:PREVIEW_MESSAGES.map(ot=>jsxRuntimeExports.jsx("div",{className:`flex ${ot.isSent?"justify-end":"justify-start"}`,children:jsxRuntimeExports.jsxs("div",{className:`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${ot.isSent?"bg-primary text-primary-content":"bg-base-200"}
                        `,children:[jsxRuntimeExports.jsx("p",{className:"text-sm",children:ot.content}),jsxRuntimeExports.jsx("p",{className:`
                            text-[10px] mt-1.5
                            ${ot.isSent?"text-primary-content/70":"text-base-content/70"}
                          `,children:"12:00 PM"})]})},ot.id))}),jsxRuntimeExports.jsx("div",{className:"p-4 border-t border-base-300 bg-base-100",children:jsxRuntimeExports.jsxs("div",{className:"flex gap-2",children:[jsxRuntimeExports.jsx("input",{type:"text",className:"input input-bordered flex-1 text-sm h-10",placeholder:"Type a message...",value:"This is a preview",readOnly:!0}),jsxRuntimeExports.jsx("button",{className:"btn btn-primary h-10 min-h-0",children:jsxRuntimeExports.jsx(Send,{size:18})})]})})]})})})})]})})},ProfilePage=()=>{var gt;const{authUser:tt,isUpdatingProfile:nt,updateProfile:ot}=useAuthStore(),[st,ft]=reactExports.useState(null),ht=async yt=>{const vt=yt.target.files[0];if(!vt)return;const xt=new FormData;xt.append("profilePic",vt);try{await ot(xt)}catch(Et){console.error("Error uploading image:",Et)}};return jsxRuntimeExports.jsx("div",{className:"h-screen pt-20",children:jsxRuntimeExports.jsx("div",{className:"max-w-2xl mx-auto p-4 py-8",children:jsxRuntimeExports.jsxs("div",{className:"bg-base-300 rounded-xl p-6 space-y-8",children:[jsxRuntimeExports.jsxs("div",{className:"text-center",children:[jsxRuntimeExports.jsx("h1",{className:"text-2xl font-semibold ",children:"Profile"}),jsxRuntimeExports.jsx("p",{className:"mt-2",children:"Your profile information"})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-4",children:[jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("img",{src:st||tt.profilePic||"/avatar.png",alt:"Profile",className:"size-32 rounded-full object-cover border-4 "}),jsxRuntimeExports.jsxs("label",{htmlFor:"avatar-upload",className:`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${nt?"animate-pulse pointer-events-none":""}
                `,children:[jsxRuntimeExports.jsx(Camera,{className:"w-5 h-5 text-base-200"}),jsxRuntimeExports.jsx("input",{type:"file",id:"avatar-upload",className:"hidden",accept:"image/*",onChange:ht,disabled:nt})]})]}),jsxRuntimeExports.jsx("p",{className:"text-sm text-zinc-400",children:nt?"Uploading...":"Click the camera icon to update your photo"})]}),jsxRuntimeExports.jsxs("div",{className:"space-y-6",children:[jsxRuntimeExports.jsxs("div",{className:"space-y-1.5",children:[jsxRuntimeExports.jsxs("div",{className:"text-sm text-zinc-400 flex items-center gap-2",children:[jsxRuntimeExports.jsx(User,{className:"w-4 h-4"}),"Full Name"]}),jsxRuntimeExports.jsx("p",{className:"px-4 py-2.5 bg-base-200 rounded-lg border",children:tt==null?void 0:tt.fullName})]}),jsxRuntimeExports.jsxs("div",{className:"space-y-1.5",children:[jsxRuntimeExports.jsxs("div",{className:"text-sm text-zinc-400 flex items-center gap-2",children:[jsxRuntimeExports.jsx(Mail,{className:"w-4 h-4"}),"Email Address"]}),jsxRuntimeExports.jsx("p",{className:"px-4 py-2.5 bg-base-200 rounded-lg border",children:tt==null?void 0:tt.email})]})]}),jsxRuntimeExports.jsxs("div",{className:"mt-6 bg-base-300 rounded-xl p-6",children:[jsxRuntimeExports.jsx("h2",{className:"text-lg font-medium  mb-4",children:"Account Information"}),jsxRuntimeExports.jsxs("div",{className:"space-y-3 text-sm",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-zinc-700",children:[jsxRuntimeExports.jsx("span",{children:"Member Since"}),jsxRuntimeExports.jsx("span",{children:(gt=tt.createdAt)==null?void 0:gt.split("T")[0]})]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between py-2",children:[jsxRuntimeExports.jsx("span",{children:"Account Status"}),jsxRuntimeExports.jsx("span",{className:"text-green-500",children:"Active"})]})]})]})]})})})},App=()=>{const{authUser:tt,checkAuth:nt,isCheckingAuth:ot,onlineUsers:st}=useAuthStore(),{theme:ft}=useThemeStore();return console.log({onlineUsers:st}),reactExports.useEffect(()=>{nt()},[nt]),console.log({authUser:tt}),ot&&!tt?jsxRuntimeExports.jsx("div",{className:"flex items-center justify-center h-screen",children:jsxRuntimeExports.jsx(Loader,{className:"size-10 animate-spin"})}):jsxRuntimeExports.jsxs("div",{"data-theme":ft,children:[jsxRuntimeExports.jsx(Navbar,{}),jsxRuntimeExports.jsxs(Routes,{children:[jsxRuntimeExports.jsx(Route,{path:"/",element:tt?jsxRuntimeExports.jsx(HomePage,{}):jsxRuntimeExports.jsx(Navigate,{to:"/login"})}),jsxRuntimeExports.jsx(Route,{path:"/signup",element:tt?jsxRuntimeExports.jsx(Navigate,{to:"/"}):jsxRuntimeExports.jsx(SignUpPage,{})}),jsxRuntimeExports.jsx(Route,{path:"/login",element:tt?jsxRuntimeExports.jsx(Navigate,{to:"/"}):jsxRuntimeExports.jsx(LoginPage,{})}),jsxRuntimeExports.jsx(Route,{path:"/settings",element:jsxRuntimeExports.jsx(SettingsPage,{})}),jsxRuntimeExports.jsx(Route,{path:"/profile",element:tt?jsxRuntimeExports.jsx(ProfilePage,{}):jsxRuntimeExports.jsx(Navigate,{to:"/login"})})]}),jsxRuntimeExports.jsx(Ie$1,{})]})};createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(BrowserRouter,{children:jsxRuntimeExports.jsx(App,{})}));
