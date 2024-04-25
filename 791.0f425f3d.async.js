!(function(){"use strict";var wt=Object.defineProperty,Pt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var Ze=(y,g,s)=>g in y?wt(y,g,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[g]=s,u=(y,g)=>{for(var s in g||(g={}))Ie.call(g,s)&&Ze(y,s,g[s]);if(ie)for(var s of ie(g))Ne.call(g,s)&&Ze(y,s,g[s]);return y},x=(y,g)=>Pt(y,At(g));var ve=(y,g)=>{var s={};for(var d in y)Ie.call(y,d)&&g.indexOf(d)<0&&(s[d]=y[d]);if(y!=null&&ie)for(var d of ie(y))g.indexOf(d)<0&&Ne.call(y,d)&&(s[d]=y[d]);return s};(self.webpackChunkreact_barcode_scanner=self.webpackChunkreact_barcode_scanner||[]).push([[791],{48791:function(y,g,s){s.r(g),s.d(g,{default:function(){return $t}});var d=s(50959),j=s(91533),W=s(68185),m=s(35194),F=s(36658),b=s(18273),w=s(37543),C=s(24843),M=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function X(e){return(0,C.Kn)(e)?M.every(o=>Object.prototype.hasOwnProperty.call(e,o)):!1}var O=s(81138);function R(e){return typeof e=="function"}function oe(...e){return o=>e.reduce((r,t)=>t(r),o)}var Z=e=>function(...r){let t=[...r],n=r[r.length-1];return X(n)&&t.length>1?t=t.slice(0,t.length-1):n=e,oe(...t.map(i=>a=>R(i)?i(a):A(a,i)))(n)},N=Z(b.rS),P=Z(b.wE);function A(...e){return O({},...e,E)}function E(e,o,r,t){if((R(e)||R(o))&&Object.prototype.hasOwnProperty.call(t,r))return(...n)=>{const i=R(e)?e(...n):e,a=R(o)?o(...n):o;return O({},i,a,E)}}var D=s(74523),c=s(11527),Y=String.raw,q=Y`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,ne=()=>(0,c.jsx)(D.xB,{styles:q}),_=({scope:e=""})=>(0,c.jsx)(D.xB,{styles:Y`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${q}
    `}),Et=null,De=s(99222),fe=s(23796),re={light:"chakra-ui-light",dark:"chakra-ui-dark"};function Le(e={}){const{preventTransition:o=!0}=e,r={setDataset:t=>{const n=o?r.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,n==null||n()},setClassName(t){document.body.classList.add(t?re.dark:re.light),document.body.classList.remove(t?re.light:re.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(t){var n;return((n=r.query().matches)!=null?n:t==="dark")?"dark":"light"},addListener(t){const n=r.query(),i=a=>{t(a.matches?"dark":"light")};return typeof n.addListener=="function"?n.addListener(i):n.addEventListener("change",i),()=>{typeof n.removeListener=="function"?n.removeListener(i):n.removeEventListener("change",i)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(t)})})}}};return r}var se="chakra-ui-color-mode";function Oe(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let r;try{r=localStorage.getItem(e)||o}catch(t){}return r||o},set(o){try{localStorage.setItem(e,o)}catch(r){}}}}var Re=Oe(se);function ge(e,o){const r=e.match(new RegExp(`(^| )${o}=([^;]+)`));return r==null?void 0:r[2]}function ye(e,o){return{ssr:!!o,type:"cookie",get(r){return o?ge(o,e):globalThis!=null&&globalThis.document&&ge(document.cookie,e)||r},set(r){document.cookie=`${e}=${r}; max-age=31536000; path=/`}}}var zt=ye(se),Zt=e=>ye(se,e),Be=s(27187),H=()=>{};function xe(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function be(e){const{value:o,children:r,options:{useSystemColorMode:t,initialColorMode:n,disableTransitionOnChange:i}={},colorModeManager:a=Re}=e,l=n==="dark"?"dark":"light",[v,h]=(0,d.useState)(()=>xe(a,l)),[f,T]=(0,d.useState)(()=>xe(a)),{getSystemTheme:k,setClassName:$,setDataset:S,addListener:B}=(0,d.useMemo)(()=>Le({preventTransition:i}),[i]),z=n==="system"&&!v?f:v,p=(0,d.useCallback)(L=>{const G=L==="system"?k():L;h(G),$(G==="dark"),S(G),a.set(G)},[a,k,$,S]);(0,Be.G)(()=>{n==="system"&&T(k())},[]),(0,d.useEffect)(()=>{const L=a.get();if(L){p(L);return}if(n==="system"){p("system");return}p(l)},[a,l,n,p]);const V=(0,d.useCallback)(()=>{p(z==="dark"?"light":"dark")},[z,p]);(0,d.useEffect)(()=>{if(t)return B(p)},[t,B,p]);const te=(0,d.useMemo)(()=>({colorMode:o!=null?o:z,toggleColorMode:o?H:V,setColorMode:o?H:p,forced:o!==void 0}),[z,V,p,o]);return(0,c.jsx)(w.kc.Provider,{value:te,children:r})}be.displayName="ColorModeProvider";function Ve(e){const o=(0,d.useMemo)(()=>({colorMode:"dark",toggleColorMode:H,setColorMode:H,forced:!0}),[]);return(0,c.jsx)(w.kc.Provider,u({value:o},e))}Ve.displayName="DarkMode";function We(e){const o=(0,d.useMemo)(()=>({colorMode:"light",toggleColorMode:H,setColorMode:H,forced:!0}),[]);return(0,c.jsx)(w.kc.Provider,u({value:o},e))}We.displayName="LightMode";var Ge=s(1298),Ke=e=>{const{children:o,colorModeManager:r,portalZIndex:t,resetScope:n,resetCSS:i=!0,theme:a={},environment:l,cssVarsRoot:v,disableEnvironment:h,disableGlobalStyle:f}=e,T=(0,c.jsx)(Ge.u,{environment:l,disabled:h,children:o});return(0,c.jsx)(fe.f6,{theme:a,cssVarsRoot:v,children:(0,c.jsxs)(be,{colorModeManager:r,options:a.config,children:[i?(0,c.jsx)(_,{scope:n}):(0,c.jsx)(ne,{}),!f&&(0,c.jsx)(fe.ZL,{}),t?(0,c.jsx)(De.h,{zIndex:t,children:T}):T]})})},Ue=(e,o)=>e.find(r=>r.id===o);function pe(e,o){const r=ae(e,o),t=r?e[r].findIndex(n=>n.id===o):-1;return{position:r,index:t}}function ae(e,o){for(const[r,t]of Object.entries(e))if(Ue(t,o))return r}var It=(e,o)=>!!ae(e,o);function Fe(e){const o=e.includes("right"),r=e.includes("left");let t="center";return o&&(t="flex-end"),r&&(t="flex-start"),{display:"flex",flexDirection:"column",alignItems:t}}function He(e){const r=e==="top"||e==="bottom"?"0 auto":void 0,t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,n=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,i=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",a=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:r,top:t,bottom:n,right:i,left:a}}var Qe=s(56517);function Je(e,o){const r=(0,Qe.W)(e);(0,d.useEffect)(()=>{if(o==null)return;let t=null;return t=window.setTimeout(()=>{r()},o),()=>{t&&window.clearTimeout(t)}},[o,r])}var Se=s(57452),Xe=s(10157),Ye=s(63061),Q=s(58719),qe={initial:e=>{const{position:o}=e,r=["top","bottom"].includes(o)?"y":"x";let t=["top-right","bottom-right"].includes(o)?1:-1;return o==="bottom"&&(t=1),{opacity:0,[r]:t*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},Ce=(0,d.memo)(e=>{const{id:o,message:r,onCloseComplete:t,onRequestRemove:n,requestClose:i=!1,position:a="bottom",duration:l=5e3,containerStyle:v,motionVariants:h=qe,toastSpacing:f="0.5rem"}=e,[T,k]=(0,d.useState)(l),$=(0,Xe.hO)();(0,Se.r)(()=>{$||t==null||t()},[$]),(0,Se.r)(()=>{k(l)},[l]);const S=()=>k(null),B=()=>k(l),z=()=>{$&&n()};(0,d.useEffect)(()=>{$&&i&&n()},[$,i,n]),Je(z,T);const p=(0,d.useMemo)(()=>u({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:f},v),[v,f]),V=(0,d.useMemo)(()=>Fe(a),[a]);return(0,c.jsx)(Ye.E.div,{layout:!0,className:"chakra-toast",variants:h,initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:B,custom:{position:a},style:V,children:(0,c.jsx)(Q.m.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:p,children:(0,C.Pu)(r,{id:o,onClose:z})})})});Ce.displayName="ToastComponent";var le=s(50084);function _e(e){return(0,c.jsx)(le.J,x(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}))}function et(e){return(0,c.jsx)(le.J,x(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})}))}function Me(e){return(0,c.jsx)(le.J,x(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))}var ce=s(41235),tt=s(56035),[ot,de]=(0,ce.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[nt,ue]=(0,ce.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),ke={info:{icon:et,colorScheme:"blue"},warning:{icon:Me,colorScheme:"orange"},success:{icon:_e,colorScheme:"green"},error:{icon:Me,colorScheme:"red"},loading:{icon:tt.$,colorScheme:"blue"}};function rt(e){return ke[e].colorScheme}function it(e){return ke[e].icon}var me=s(94843),st=s(96741),at=s(9530),Te=(0,me.G)(function(o,r){var t;const f=(0,st.Lr)(o),{status:n="info",addRole:i=!0}=f,a=ve(f,["status","addRole"]),l=(t=o.colorScheme)!=null?t:rt(n),v=(0,at.jC)("Alert",x(u({},o),{colorScheme:l})),h=u({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},v.container);return(0,c.jsx)(ot,{value:{status:n},children:(0,c.jsx)(nt,{value:v,children:(0,c.jsx)(Q.m.div,x(u({"data-status":n,role:i?"alert":void 0,ref:r},a),{className:(0,C.cx)("chakra-alert",o.className),__css:h}))})})});Te.displayName="Alert";function $e(e){const{status:o}=de(),r=it(o),t=ue(),n=o==="loading"?t.spinner:t.icon;return(0,c.jsx)(Q.m.span,x(u({display:"inherit","data-status":o},e),{className:(0,C.cx)("chakra-alert__icon",e.className),__css:n,children:e.children||(0,c.jsx)(r,{h:"100%",w:"100%"})}))}$e.displayName="AlertIcon";var je=(0,me.G)(function(o,r){const t=ue(),{status:n}=de();return(0,c.jsx)(Q.m.div,x(u({ref:r,"data-status":n},o),{className:(0,C.cx)("chakra-alert__title",o.className),__css:t.title}))});je.displayName="AlertTitle";var we=(0,me.G)(function(o,r){const t=ue(),{status:n}=de(),i=u({display:"inline"},t.description);return(0,c.jsx)(Q.m.div,x(u({ref:r,"data-status":n},o),{className:(0,C.cx)("chakra-alert__desc",o.className),__css:i}))});we.displayName="AlertDescription";var lt=s(586),ct={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},I=dt(ct);function dt(e){let o=e;const r=new Set,t=n=>{o=n(o),r.forEach(i=>i())};return{getState:()=>o,subscribe:n=>(r.add(n),()=>{t(()=>e),r.delete(n)}),removeToast:(n,i)=>{t(a=>x(u({},a),{[i]:a[i].filter(l=>l.id!=n)}))},notify:(n,i)=>{const a=ut(n,i),{position:l,id:v}=a;return t(h=>{var f,T;const $=l.includes("top")?[a,...(f=h[l])!=null?f:[]]:[...(T=h[l])!=null?T:[],a];return x(u({},h),{[l]:$})}),v},update:(n,i)=>{n&&t(a=>{const l=u({},a),{position:v,index:h}=pe(l,n);return v&&h!==-1&&(l[v][h]=x(u(u({},l[v][h]),i),{message:Ae(i)})),l})},closeAll:({positions:n}={})=>{t(i=>{const a=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(n!=null?n:a).reduce((v,h)=>(v[h]=i[h].map(f=>x(u({},f),{requestClose:!0})),v),u({},i))})},close:n=>{t(i=>{const a=ae(i,n);return a?x(u({},i),{[a]:i[a].map(l=>l.id==n?x(u({},l),{requestClose:!0}):l)}):i})},isActive:n=>!!pe(I.getState(),n).position}}var Pe=0;function ut(e,o={}){var r,t;Pe+=1;const n=(r=o.id)!=null?r:Pe,i=(t=o.position)!=null?t:"bottom";return{id:n,message:e,position:i,duration:o.duration,onCloseComplete:o.onCloseComplete,onRequestRemove:()=>I.removeToast(String(n),i),status:o.status,requestClose:!1,containerStyle:o.containerStyle}}var mt=e=>{const{status:o,variant:r="solid",id:t,title:n,isClosable:i,onClose:a,description:l,colorScheme:v,icon:h}=e,f=t?{root:`toast-${t}`,title:`toast-${t}-title`,description:`toast-${t}-description`}:void 0;return(0,c.jsxs)(Te,{addRole:!1,status:o,variant:r,id:f==null?void 0:f.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:v,children:[(0,c.jsx)($e,{children:h}),(0,c.jsxs)(Q.m.div,{flex:"1",maxWidth:"100%",children:[n&&(0,c.jsx)(je,{id:f==null?void 0:f.title,children:n}),l&&(0,c.jsx)(we,{id:f==null?void 0:f.description,display:"block",children:l})]}),i&&(0,c.jsx)(lt.P,{size:"sm",onClick:a,position:"absolute",insetEnd:1,top:1})]})};function Ae(e={}){const{render:o,toastComponent:r=mt}=e;return n=>typeof o=="function"?o(u(u({},n),e)):(0,c.jsx)(r,u(u({},n),e))}function Nt(e,o){const r=n=>{var i;return x(u(u({},o),n),{position:getToastPlacement((i=n==null?void 0:n.position)!=null?i:o==null?void 0:o.position,e)})},t=n=>{const i=r(n),a=Ae(i);return I.notify(a,i)};return t.update=(n,i)=>{I.update(n,r(i))},t.promise=(n,i)=>{const a=t(x(u({},i.loading),{status:"loading",duration:null}));n.then(l=>t.update(a,u({status:"success",duration:5e3},runIfFn(i.success,l)))).catch(l=>t.update(a,u({status:"error",duration:5e3},runIfFn(i.error,l))))},t.closeAll=I.closeAll,t.close=I.close,t.isActive=I.isActive,t}var ht=s(41843),vt=s(33058),[ft,Dt]=(0,ce.k)({name:"ToastOptionsContext",strict:!1}),gt=e=>{const o=(0,d.useSyncExternalStore)(I.subscribe,I.getState,I.getState),{motionVariants:r,component:t=Ce,portalProps:n}=e,a=Object.keys(o).map(l=>{const v=o[l];return(0,c.jsx)("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${l}`,id:`chakra-toast-manager-${l}`,style:He(l),children:(0,c.jsx)(ht.M,{initial:!1,children:v.map(h=>(0,c.jsx)(t,u({motionVariants:r},h),h.id))})},l)});return(0,c.jsx)(vt.h,x(u({},n),{children:a}))},Ee=e=>function(a){var l=a,{children:r,theme:t=e,toastOptions:n}=l,i=ve(l,["children","theme","toastOptions"]);return(0,c.jsxs)(Ke,x(u({theme:t},i),{children:[(0,c.jsx)(ft,{value:n==null?void 0:n.defaultOptions,children:r}),(0,c.jsx)(gt,u({},n))]}))},yt=Ee(b.rS),Lt=Ee(b.wE),xt=s(15269),bt=s(30693),ee=s(24453),pt=function(o){return{".markdown":{a:{color:(0,ee.x)("brand.500","brand.300")(o)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:(0,ee.x)("gray.50","gray.800")(o),color:(0,ee.x)("brand.500","brand.300")(o),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:(0,ee.x)("gray.600","gray.400")(o)},"th, td":{borderColor:(0,ee.x)("gray.100","gray.700")(o)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},St=pt,Ct=function(o){var r=o.children,t=o.config,n=o.brand,i=n===void 0?b.rS.colors.purple:n,a=(0,w.If)(),l=a.colorMode,v=(0,d.useState)(i),h=(0,F.Z)(v,2),f=h[0],T=h[1],k=(0,d.useMemo)(function(){var S,B,z,p,V,te,L;return N((0,m.Z)((0,m.Z)({initialColorMode:l!=null?l:"system",useSystemColorMode:!1,styles:(0,m.Z)((0,m.Z)((0,m.Z)({},b.rS.styles),(S=t==null?void 0:t.styles)!==null&&S!==void 0?S:{}),{},{global:function(he){var K,U,J;return(0,m.Z)((0,m.Z)((0,m.Z)({},(K=b.rS.styles.global)!==null&&K!==void 0?K:{}),(U=t==null||(J=t.styles)===null||J===void 0?void 0:J.global)!==null&&U!==void 0?U:{}),{},{body:{p:0}},St(he))}})},t!=null?t:{}),{},{fonts:Object.entries(b.rS.fonts).reduce(function(G,he){var K,U,J=(0,F.Z)(he,2),ze=J[0],jt=J[1];return(0,m.Z)((0,m.Z)({},G),{},(0,W.Z)({},ze,"Inter Variable, "+((K=t==null||(U=t.fonts)===null||U===void 0?void 0:U[ze])!==null&&K!==void 0?K:jt)))},b.rS.fonts),colors:(0,m.Z)({brand:f},(B=t==null?void 0:t.colors)!==null&&B!==void 0?B:{}),space:(0,m.Z)((0,m.Z)((0,m.Z)({},b.rS.space),(z=t==null?void 0:t.space)!==null&&z!==void 0?z:{}),{},{18:"4.5rem"}),sizes:(0,m.Z)((0,m.Z)((0,m.Z)({},b.rS.sizes),(p=t==null?void 0:t.sizes)!==null&&p!==void 0?p:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:(0,m.Z)((0,m.Z)((0,m.Z)({},b.rS.sizes.container),(V=t==null||(te=t.sizes)===null||te===void 0?void 0:te.container)!==null&&V!==void 0?V:{}),{},{xxl:"1392px"})}),breakpoints:(0,m.Z)((0,m.Z)((0,m.Z)({},b.rS.breakpoints),(L=t==null?void 0:t.breakpoints)!==null&&L!==void 0?L:{}),{},{xxl:"1392px"})}))},[t,l,f]),$=(0,d.useCallback)(function(S){(0,bt.Kn)(S)&&T(S),typeof S=="string"&&S in k.colors&&T(k.colors[S])},[t]);return d.createElement(yt,{theme:k},d.createElement(xt.f,{value:{brand:f,changeBrand:$,config:k}},r))},Mt=Ct,kt=s(22902),Tt=function(){var o,r=(0,j.pC)(),t=(o=(0,kt.Z)())!==null&&o!==void 0?o:{},n=t.brand,i=t.config;return r&&d.createElement(Mt,{brand:n,config:i},r)},$t=Tt},1298:function(y,g,s){s.d(g,{O:function(){return F},u:function(){return b}});var d=s(27187),j=s(50959),W=s(11527),m=(0,j.createContext)({getDocument(){return document},getWindow(){return window}});m.displayName="EnvironmentContext";function F({defer:w}={}){const[,C]=(0,j.useReducer)(M=>M+1,0);return(0,d.G)(()=>{w&&C()},[w]),(0,j.useContext)(m)}function b(w){const{children:C,environment:M,disabled:X}=w,O=(0,j.useRef)(null),R=(0,j.useMemo)(()=>M||{getDocument:()=>{var Z,N;return(N=(Z=O.current)==null?void 0:Z.ownerDocument)!=null?N:document},getWindow:()=>{var Z,N;return(N=(Z=O.current)==null?void 0:Z.ownerDocument.defaultView)!=null?N:window}},[M]),oe=!X||!M;return(0,W.jsxs)(m.Provider,{value:R,children:[C,oe&&(0,W.jsx)("span",{id:"__chakra_env",hidden:!0,ref:O})]})}b.displayName="EnvironmentProvider"},23796:function(y,g,s){s.d(g,{ZL:function(){return N},f6:function(){return X},eC:function(){return Z}});var d=s(37543),j=s(50959);function W(P={}){const{strict:A=!0,errorMessage:E="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:D}=P,c=(0,j.createContext)(void 0);c.displayName=D;function Y(){var q;const ne=(0,j.useContext)(c);if(!ne&&A){const _=new Error(E);throw _.name="ContextError",(q=Error.captureStackTrace)==null||q.call(Error,_,Y),_}return ne}return[c.Provider,Y,c]}var m=s(96741),F=s(65405),b=s(26788),w=s(61246),C=s(74523),M=s(11527);function X(P){const{cssVarsRoot:A,theme:E,children:D}=P,c=(0,j.useMemo)(()=>(0,m.c0)(E),[E]);return(0,M.jsxs)(w.a,{theme:c,children:[(0,M.jsx)(O,{root:A}),D]})}function O({root:P=":host, :root"}){const A=[P,"[data-theme]"].join(",");return(0,M.jsx)(C.xB,{styles:E=>({[A]:E.__cssVars})})}var[R,oe]=W({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function Z(P){return W({name:`${P}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${P} />" `})}function N(){const{colorMode:P}=(0,d.If)();return(0,M.jsx)(C.xB,{styles:A=>{const E=(0,F.Wf)(A,"styles.global"),D=(0,b.Pu)(E,{theme:A,colorMode:P});return D?(0,m.iv)(D)(A):void 0}})}}}]);
}());