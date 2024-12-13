/*! For license information please see main.88a2ae55.js.LICENSE.txt */
(()=>{"use strict";var e={432:(e,t,r)=>{var n=r(643);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},a=Symbol.for("react.portal");var l=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:a,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=l.T,r=s.p;try{if(l.T=null,s.p=2,e)return e()}finally{l.T=t,s.p=r,s.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,s.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&s.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?s.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&s.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=c(t.as,t.crossOrigin);s.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&s.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=c(r,t.crossOrigin);s.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=c(t.as,t.crossOrigin);s.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else s.d.m(e)},t.requestFormReset=function(e){s.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return l.H.useFormState(e,t,r)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.0.0"},766:(e,t,r)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(432)},935:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:o,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=o,t.jsxs=o},152:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=b.prototype=new v;w.constructor=b,y(w,g.prototype),w.isPureReactComponent=!0;var _=Array.isArray,S={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function x(e,t,n,o,i,s){return n=s.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:s}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(){}function R(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(a){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0;break;case f:return R((u=e._init)(e._payload),t,o,i,s)}}if(u)return s=s(e),u=""===i?"."+O(e,0):i,_(s)?(o="",null!=u&&(o=u.replace(T,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(l=s,c=o+(null==s.key||e&&e.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+u,s=x(l.type,c,void 0,0,0,l.props)),t.push(s)),1;u=0;var d,h=""===i?".":i+":";if(_(e))for(var y=0;y<e.length;y++)u+=R(i=e[y],t,o,a=h+O(i,y),s);else if("function"===typeof(y=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=y.call(e),y=0;!(i=e.next()).done;)u+=R(i=i.value,t,o,a=h+O(i,y++),s);else if("object"===a){if("function"===typeof e.then)return R(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(k,k):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function I(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function A(){}t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=y({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!j.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var s=Array(i),a=0;a<i;a++)s[a]=arguments[a+2];n.children=s}return x(e.type,o,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:a,_context:e},e},t.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return x(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,r={};S.T=r;try{var n=e(),o=S.S;null!==o&&o(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(A,D)}catch(i){D(i)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,r){return S.H.useActionState(e,t,r)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,r){return S.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return S.H.useReducer(e,t,r)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return S.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return S.H.useTransition()},t.version="19.0.0"},643:(e,t,r)=>{e.exports=r(152)},507:(e,t,r)=>{e.exports=r(935)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n=r(643),o=r(766),i=r(507);const s=()=>{const[e,t]=n.useState("");return(0,i.jsxs)("div",{className:"contact-form",children:[(0,i.jsx)("h2",{children:"Contact Me"}),(0,i.jsxs)("form",{action:"hhttps://formspree.io/f/mbljebna",method:"POST",onSubmit:e=>{e.preventDefault(),t("Sending...")},children:[(0,i.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",required:!0}),(0,i.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",required:!0}),(0,i.jsx)("textarea",{name:"message",placeholder:"Your Message",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Send Message"})]}),e&&(0,i.jsx)("p",{children:e})]})},a=()=>(0,i.jsxs)("div",{className:"home",children:[(0,i.jsx)("p",{children:"Hi there! I'm Ali Mujtaba, a passionate student who loves solving real-world problems through code. My journey in tech began with a deep interest in how the digital world connects us, and over time, I've honed my skills in various technologies to become well-versed in the realms of software development."}),(0,i.jsx)("p",{children:"Here specifically, I will guide you through my journey of learning Mobile Development, throughout the INFT3101 Course in my fifth semester at DC. We got to explore different technologies, such as Android Studio, Kotlin, and Dart. We gained the perfect mix of theoretical knowledge, as well as hands-on experience through a combination of research reports, app development assignments, and in-class exercises. Our final project put all this knowledge to the test, challenging us with the creation of a full-stack app in Flutter."}),(0,i.jsx)("p",{children:"When I'm not coding, you can find me experimenting with new web technologies, learning about emerging trends, or exploring the outdoors. I'm always eager to learn, grow, and take on new challenges in both the tech world and in life."}),(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Flutter, Dart, Kotlin"}),(0,i.jsx)("li",{children:"HTML, CSS, React, Redux, and Front-End Frameworks"}),(0,i.jsx)("li",{children:"Version Control with Git and GitHub"}),(0,i.jsx)("li",{children:"Responsive App Design"}),(0,i.jsx)("li",{children:"APIs and Integrating Third-Party Services"}),(0,i.jsx)("li",{children:"Node.js & Express (Backend Development)"}),(0,i.jsx)("li",{children:"Database Management (MongoDB, MySQL)"})]})]}),l=()=>{const e=[{title:"Classwork",items:[{title:"Classwork 1",description:"Learning Android Studio",details:"In our first Classwork, we learnt the basics of a new IDE (Android Studio) while using Kotlin to develop a basic 'Hello World' type app."},{title:"Classwork 2",description:"Flutter: The Basics",details:"In our second classwork, we were tasked with getting accustomed to Flutter, since it is quite different from Kotlin with all the nesting. To learn this, we recreated the app from CW1, in Flutter."},{title:"Classwork 3",description:"Incomplete",details:"Unfortunately, I was not able to complete CW3."}]},{title:"Labs",items:[{title:"Lab 1",description:"What was the Mobile Revolution?",details:"This lab was a research paper that explored the rise of mobile computing, a technology that, despite its recent development, has become mainstream. It traced the timeline of key innovations that made mobile devices portable and accessible to everyone, from early machines like the Osborne 1 to today's smartphones and laptops. The paper also prompted me to reflect on my personal experiences with mobile technology, considering its pros, cons, and the impact it has had on our lives. Read the full report <a href='Reports/lab-1.docx' download>here</a>."},{title:"Lab 2",description:"XML and DTD's",details:"In this lab, we learnt how to build DTD's for XML documents. We learnt what <code>&lt;!ELEMENT&gt;</code>'s were, and how to give them constraints with <code>&lt;!ATTLIST&gt;</code>. <code>&lt;!ATTLIST&gt;</code> is predominantly used to specify attribute types, such as <code>CDATA</code> for character data, <code>ID</code> for unique identifiers, <code>NMTOKEN</code> for tokens, as well as default values such as <code>#REQUIRED</code>, <code>#IMPLIED</code>, or <code>#FIXED</code>. Then, we populated an XML schema using our DTD"},{title:"Lab 3",description:"Incomplete",details:"Unfortunately, I was not able to complete Lab 3."},{title:"Lab 4",description:"Objects in Dart",details:" In this lab, I got the chance to revisit an Oject-Oriented Programming Staple, the Object. This lab was fairly simple, all it did was re-iterate what objects were, how they differ in Dart from other langauges, and provide some use cases. Read the full report <a href='/Reports/lab-4.docx' download>here</a>."},{title:"Lab 5",description:"Gestures in Dart",details:"In this lab, I did research on a core feature to flutter, the gesture. I learnt how gestures, such as <code>&lt;OnTap&gt;</code>; and <code>&lt;OnSwipe&gt;</code> work, as well as how they interact with widgets to create an immersive user experience. Read the whole report <a href='/Reports/lab-5.docx' download>here</a>."}]},{title:"Final Project",items:[{title:"Full Stack Application",description:"Flappy Bird Clone",details:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"For the final, I worked with a group of 3 to create a Flappy Bird clone, and to make it full-stack, I decided to take the role of backend developer and integrate Firebase into the project. This added a cloud-based backend, enabling us to have a leaderboard for the app."}),(0,i.jsx)("p",{children:"Here is a video demo of some app gameplay:"}),(0,i.jsx)("div",{children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://youtube.com/shorts/cXFxLfleH4A?feature=share",title:"Video demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}]}];return(0,i.jsxs)("div",{className:"portfolio",children:[(0,i.jsx)("h2",{children:"My Portfolio"}),e.map(((e,t)=>(0,i.jsxs)("div",{className:"portfolio-section",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("div",{className:"portfolio-items",children:e.items.map(((e,t)=>(0,i.jsxs)("div",{className:"portfolio-card",children:[(0,i.jsx)("h4",{children:e.title}),(0,i.jsx)("p",{children:e.description}),(0,i.jsx)("div",{className:"details",children:e.details})]},t)))})]},t)))]})};const c=function(){return(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)(a,{}),(0,i.jsx)(l,{}),(0,i.jsx)(s,{})]})},u=e=>{console.log(e)};o.render((0,i.jsxs)(n.StrictMode,{children:[(0,i.jsx)(c,{}),"  "]}),document.getElementById("root")),u()})();
//# sourceMappingURL=main.88a2ae55.js.map