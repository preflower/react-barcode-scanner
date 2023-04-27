!(function(){"use strict";var $t=Object.defineProperty,Et=Object.defineProperties;var jt=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Ae=(y,g,s)=>g in y?$t(y,g,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[g]=s,u=(y,g)=>{for(var s in g||(g={}))ze.call(g,s)&&Ae(y,s,g[s]);if(oe)for(var s of oe(g))Le.call(g,s)&&Ae(y,s,g[s]);return y},b=(y,g)=>Et(y,jt(g));var he=(y,g)=>{var s={};for(var d in y)ze.call(y,d)&&g.indexOf(d)<0&&(s[d]=y[d]);if(y!=null&&oe)for(var d of oe(y))g.indexOf(d)<0&&Le.call(y,d)&&(s[d]=y[d]);return s};(self.webpackChunkreact_barcode_scanner=self.webpackChunkreact_barcode_scanner||[]).push([[32],{79991:function(y,g,s){s.r(g),s.d(g,{default:function(){return kt}});var d=s(50959),M=s(91667),m=s(75782),L=s(91600),x=s(99988),$=s(56873),C=s(24843),N=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function k(e){return(0,C.Kn)(e)?N.every(o=>Object.prototype.hasOwnProperty.call(e,o)):!1}var U=s(81138);function P(e){return typeof e=="function"}function X(...e){return o=>e.reduce((r,t)=>t(r),o)}var G=e=>function(...r){let t=[...r],n=r[r.length-1];return k(n)&&t.length>1?t=t.slice(0,t.length-1):n=e,X(...t.map(i=>a=>P(i)?i(a):E(a,i)))(n)},R=G(x.rS),B=G(x.wE);function E(...e){return U({},...e,j)}function j(e,o,r,t){if((P(e)||P(o))&&Object.prototype.hasOwnProperty.call(t,r))return(...n)=>{const i=P(e)?e(...n):e,a=P(o)?o(...n):o;return U({},i,a,j)}}var A=s(56287),c=s(11527),Z=String.raw,H=Z`
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
`,q=()=>(0,c.jsx)(A.xB,{styles:H}),_=({scope:e=""})=>(0,c.jsx)(A.xB,{styles:Z`
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

      ${H}
    `}),ee=null,Ze=s(28861),fe=s(87981),te={light:"chakra-ui-light",dark:"chakra-ui-dark"};function De(e={}){const{preventTransition:o=!0}=e,r={setDataset:t=>{const n=o?r.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,n==null||n()},setClassName(t){document.body.classList.add(t?te.dark:te.light),document.body.classList.remove(t?te.light:te.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(t){var n;return((n=r.query().matches)!=null?n:t==="dark")?"dark":"light"},addListener(t){const n=r.query(),i=a=>{t(a.matches?"dark":"light")};return typeof n.addListener=="function"?n.addListener(i):n.addEventListener("change",i),()=>{typeof n.removeListener=="function"?n.removeListener(i):n.removeEventListener("change",i)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(t)})})}}};return r}var ne="chakra-ui-color-mode";function Ne(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let r;try{r=localStorage.getItem(e)||o}catch(t){}return r||o},set(o){try{localStorage.setItem(e,o)}catch(r){}}}}var Re=Ne(ne);function ve(e,o){const r=e.match(new RegExp(`(^| )${o}=([^;]+)`));return r==null?void 0:r[2]}function ge(e,o){return{ssr:!!o,type:"cookie",get(r){return o?ve(o,e):globalThis!=null&&globalThis.document&&ve(document.cookie,e)||r},set(r){document.cookie=`${e}=${r}; max-age=31536000; path=/`}}}var wt=ge(ne),Pt=e=>ge(ne,e),Ie=s(72158),F=()=>{};function ye(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function xe(e){const{value:o,children:r,options:{useSystemColorMode:t,initialColorMode:n,disableTransitionOnChange:i}={},colorModeManager:a=Re}=e,l=n==="dark"?"dark":"light",[v,h]=(0,d.useState)(()=>ye(a,l)),[f,I]=(0,d.useState)(()=>ye(a)),{getSystemTheme:T,setClassName:w,setDataset:S,addListener:V}=(0,d.useMemo)(()=>De({preventTransition:i}),[i]),z=n==="system"&&!v?f:v,p=(0,d.useCallback)(O=>{const Q=O==="system"?T():O;h(Q),w(Q==="dark"),S(Q),a.set(Q)},[a,T,w,S]);(0,Ie.G)(()=>{n==="system"&&I(T())},[]),(0,d.useEffect)(()=>{const O=a.get();if(O){p(O);return}if(n==="system"){p("system");return}p(l)},[a,l,n,p]);const W=(0,d.useCallback)(()=>{p(z==="dark"?"light":"dark")},[z,p]);(0,d.useEffect)(()=>{if(t)return V(p)},[t,V,p]);const Y=(0,d.useMemo)(()=>({colorMode:o!=null?o:z,toggleColorMode:o?F:W,setColorMode:o?F:p,forced:o!==void 0}),[z,W,p,o]);return(0,c.jsx)($.kc.Provider,{value:Y,children:r})}xe.displayName="ColorModeProvider";function Oe(e){const o=(0,d.useMemo)(()=>({colorMode:"dark",toggleColorMode:F,setColorMode:F,forced:!0}),[]);return(0,c.jsx)($.kc.Provider,u({value:o},e))}Oe.displayName="DarkMode";function Be(e){const o=(0,d.useMemo)(()=>({colorMode:"light",toggleColorMode:F,setColorMode:F,forced:!0}),[]);return(0,c.jsx)($.kc.Provider,u({value:o},e))}Be.displayName="LightMode";var Ve=s(35579),We=e=>{const{children:o,colorModeManager:r,portalZIndex:t,resetScope:n,resetCSS:i=!0,theme:a={},environment:l,cssVarsRoot:v,disableEnvironment:h}=e,f=(0,c.jsx)(Ve.u,{environment:l,disabled:h,children:o});return(0,c.jsx)(fe.f6,{theme:a,cssVarsRoot:v,children:(0,c.jsxs)(xe,{colorModeManager:r,options:a.config,children:[i?(0,c.jsx)(_,{scope:n}):(0,c.jsx)(q,{}),(0,c.jsx)(fe.ZL,{}),t?(0,c.jsx)(Ze.h,{zIndex:t,children:f}):f]})})},Ue=(e,o)=>e.find(r=>r.id===o);function be(e,o){const r=re(e,o),t=r?e[r].findIndex(n=>n.id===o):-1;return{position:r,index:t}}function re(e,o){for(const[r,t]of Object.entries(e))if(Ue(t,o))return r}var At=(e,o)=>!!re(e,o);function Fe(e){const o=e.includes("right"),r=e.includes("left");let t="center";return o&&(t="flex-end"),r&&(t="flex-start"),{display:"flex",flexDirection:"column",alignItems:t}}function Ke(e){const r=e==="top"||e==="bottom"?"0 auto":void 0,t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,n=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,i=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",a=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:r,top:t,bottom:n,right:i,left:a}}var Ge=s(17347);function He(e,o){const r=(0,Ge.W)(e);(0,d.useEffect)(()=>{if(o==null)return;let t=null;return t=window.setTimeout(()=>{r()},o),()=>{t&&window.clearTimeout(t)}},[o,r])}var pe=s(65601),Je=s(10157),Ye=s(63061),K=s(35804),Qe={initial:e=>{const{position:o}=e,r=["top","bottom"].includes(o)?"y":"x";let t=["top-right","bottom-right"].includes(o)?1:-1;return o==="bottom"&&(t=1),{opacity:0,[r]:t*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},Ce=(0,d.memo)(e=>{const{id:o,message:r,onCloseComplete:t,onRequestRemove:n,requestClose:i=!1,position:a="bottom",duration:l=5e3,containerStyle:v,motionVariants:h=Qe,toastSpacing:f="0.5rem"}=e,[I,T]=(0,d.useState)(l),w=(0,Je.hO)();(0,pe.r)(()=>{w||t==null||t()},[w]),(0,pe.r)(()=>{T(l)},[l]);const S=()=>T(null),V=()=>T(l),z=()=>{w&&n()};(0,d.useEffect)(()=>{w&&i&&n()},[w,i,n]),He(z,I);const p=(0,d.useMemo)(()=>u({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:f},v),[v,f]),W=(0,d.useMemo)(()=>Fe(a),[a]);return(0,c.jsx)(Ye.E.div,{layout:!0,className:"chakra-toast",variants:h,initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:V,custom:{position:a},style:W,children:(0,c.jsx)(K.m.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:p,children:(0,C.Pu)(r,{id:o,onClose:z})})})});Ce.displayName="ToastComponent";var ie=s(96488);function Xe(e){return(0,c.jsx)(ie.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}))}function qe(e){return(0,c.jsx)(ie.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})}))}function Se(e){return(0,c.jsx)(ie.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))}var se=s(15981),_e=s(1551),[et,ae]=(0,se.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[tt,le]=(0,se.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),Me={info:{icon:qe,colorScheme:"blue"},warning:{icon:Se,colorScheme:"orange"},success:{icon:Xe,colorScheme:"green"},error:{icon:Se,colorScheme:"red"},loading:{icon:_e.$,colorScheme:"blue"}};function ot(e){return Me[e].colorScheme}function nt(e){return Me[e].icon}var ce=s(76226),rt=s(53668),it=s(476),ke=(0,ce.G)(function(o,r){var t;const f=(0,rt.Lr)(o),{status:n="info",addRole:i=!0}=f,a=he(f,["status","addRole"]),l=(t=o.colorScheme)!=null?t:ot(n),v=(0,it.jC)("Alert",b(u({},o),{colorScheme:l})),h=u({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},v.container);return(0,c.jsx)(et,{value:{status:n},children:(0,c.jsx)(tt,{value:v,children:(0,c.jsx)(K.m.div,b(u({"data-status":n,role:i?"alert":void 0,ref:r},a),{className:(0,C.cx)("chakra-alert",o.className),__css:h}))})})});ke.displayName="Alert";function Te(e){const{status:o}=ae(),r=nt(o),t=le(),n=o==="loading"?t.spinner:t.icon;return(0,c.jsx)(K.m.span,b(u({display:"inherit","data-status":o},e),{className:(0,C.cx)("chakra-alert__icon",e.className),__css:n,children:e.children||(0,c.jsx)(r,{h:"100%",w:"100%"})}))}Te.displayName="AlertIcon";var $e=(0,ce.G)(function(o,r){const t=le(),{status:n}=ae();return(0,c.jsx)(K.m.div,b(u({ref:r,"data-status":n},o),{className:(0,C.cx)("chakra-alert__title",o.className),__css:t.title}))});$e.displayName="AlertTitle";var Ee=(0,ce.G)(function(o,r){const t=le(),{status:n}=ae(),i=u({display:"inline"},t.description);return(0,c.jsx)(K.m.div,b(u({ref:r,"data-status":n},o),{className:(0,C.cx)("chakra-alert__desc",o.className),__css:i}))});Ee.displayName="AlertDescription";var st=s(66433),at={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},D=lt(at);function lt(e){let o=e;const r=new Set,t=n=>{o=n(o),r.forEach(i=>i())};return{getState:()=>o,subscribe:n=>(r.add(n),()=>{t(()=>e),r.delete(n)}),removeToast:(n,i)=>{t(a=>b(u({},a),{[i]:a[i].filter(l=>l.id!=n)}))},notify:(n,i)=>{const a=ct(n,i),{position:l,id:v}=a;return t(h=>{var f,I;const w=l.includes("top")?[a,...(f=h[l])!=null?f:[]]:[...(I=h[l])!=null?I:[],a];return b(u({},h),{[l]:w})}),v},update:(n,i)=>{n&&t(a=>{const l=u({},a),{position:v,index:h}=be(l,n);return v&&h!==-1&&(l[v][h]=b(u(u({},l[v][h]),i),{message:we(i)})),l})},closeAll:({positions:n}={})=>{t(i=>{const a=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(n!=null?n:a).reduce((v,h)=>(v[h]=i[h].map(f=>b(u({},f),{requestClose:!0})),v),u({},i))})},close:n=>{t(i=>{const a=re(i,n);return a?b(u({},i),{[a]:i[a].map(l=>l.id==n?b(u({},l),{requestClose:!0}):l)}):i})},isActive:n=>Boolean(be(D.getState(),n).position)}}var je=0;function ct(e,o={}){var r,t;je+=1;const n=(r=o.id)!=null?r:je,i=(t=o.position)!=null?t:"bottom";return{id:n,message:e,position:i,duration:o.duration,onCloseComplete:o.onCloseComplete,onRequestRemove:()=>D.removeToast(String(n),i),status:o.status,requestClose:!1,containerStyle:o.containerStyle}}var dt=e=>{const{status:o,variant:r="solid",id:t,title:n,isClosable:i,onClose:a,description:l,colorScheme:v,icon:h}=e,f=t?{root:`toast-${t}`,title:`toast-${t}-title`,description:`toast-${t}-description`}:void 0;return(0,c.jsxs)(ke,{addRole:!1,status:o,variant:r,id:f==null?void 0:f.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:v,children:[(0,c.jsx)(Te,{children:h}),(0,c.jsxs)(K.m.div,{flex:"1",maxWidth:"100%",children:[n&&(0,c.jsx)($e,{id:f==null?void 0:f.title,children:n}),l&&(0,c.jsx)(Ee,{id:f==null?void 0:f.description,display:"block",children:l})]}),i&&(0,c.jsx)(st.P,{size:"sm",onClick:a,position:"absolute",insetEnd:1,top:1})]})};function we(e={}){const{render:o,toastComponent:r=dt}=e;return n=>typeof o=="function"?o(u(u({},n),e)):(0,c.jsx)(r,u(u({},n),e))}function zt(e,o){const r=n=>{var i;return b(u(u({},o),n),{position:getToastPlacement((i=n==null?void 0:n.position)!=null?i:o==null?void 0:o.position,e)})},t=n=>{const i=r(n),a=we(i);return D.notify(a,i)};return t.update=(n,i)=>{D.update(n,r(i))},t.promise=(n,i)=>{const a=t(b(u({},i.loading),{status:"loading",duration:null}));n.then(l=>t.update(a,u({status:"success",duration:5e3},runIfFn(i.success,l)))).catch(l=>t.update(a,u({status:"error",duration:5e3},runIfFn(i.error,l))))},t.closeAll=D.closeAll,t.close=D.close,t.isActive=D.isActive,t}var ut=s(41843),mt=s(72773),[ht,Lt]=(0,se.k)({name:"ToastOptionsContext",strict:!1}),ft=e=>{const o=(0,d.useSyncExternalStore)(D.subscribe,D.getState,D.getState),{motionVariants:r,component:t=Ce,portalProps:n}=e,a=Object.keys(o).map(l=>{const v=o[l];return(0,c.jsx)("div",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:Ke(l),children:(0,c.jsx)(ut.M,{initial:!1,children:v.map(h=>(0,c.jsx)(t,u({motionVariants:r},h),h.id))})},l)});return(0,c.jsx)(mt.h,b(u({},n),{children:a}))},Pe=e=>function(a){var l=a,{children:r,theme:t=e,toastOptions:n}=l,i=he(l,["children","theme","toastOptions"]);return(0,c.jsxs)(We,b(u({theme:t},i),{children:[(0,c.jsx)(ht,{value:n==null?void 0:n.defaultOptions,children:r}),(0,c.jsx)(ft,u({},n))]}))},vt=Pe(x.rS),Zt=Pe(x.wE),gt=s(63527),yt=s(62118);function J(e,o){return r=>r.colorMode==="dark"?o:e}function Dt(e){const{orientation:o,vertical:r,horizontal:t}=e;return o?o==="vertical"?r:t:{}}var xt=function(o){return{".markdown":{a:{color:J("brand.500","brand.300")(o)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:J("gray.50","gray.800")(o),color:J("brand.500","brand.300")(o),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:J("gray.600","gray.400")(o)},"th, td":{borderColor:J("gray.100","gray.700")(o)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},bt=xt,pt=function(o){var r=o.children,t=o.config,n=o.brand,i=n===void 0?x.rS.colors.purple:n,a=(0,$.If)(),l=a.colorMode,v=(0,d.useState)(i),h=(0,L.Z)(v,2),f=h[0],I=h[1],T=(0,d.useMemo)(function(){var S,V,z,p,W,Y,O;return R((0,m.Z)((0,m.Z)({initialColorMode:l!=null?l:"system",useSystemColorMode:!1,styles:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.styles),(S=t==null?void 0:t.styles)!==null&&S!==void 0?S:{}),{},{global:function(Tt){var de,ue,me;return(0,m.Z)((0,m.Z)((0,m.Z)({},(de=x.rS.styles.global)!==null&&de!==void 0?de:{}),(ue=t==null||(me=t.styles)===null||me===void 0?void 0:me.global)!==null&&ue!==void 0?ue:{}),{},{body:{p:0}},bt(Tt))}})},t!=null?t:{}),{},{colors:(0,m.Z)({brand:f},(V=t==null?void 0:t.colors)!==null&&V!==void 0?V:{}),space:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.space),(z=t==null?void 0:t.space)!==null&&z!==void 0?z:{}),{},{18:"4.5rem"}),sizes:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.sizes),(p=t==null?void 0:t.sizes)!==null&&p!==void 0?p:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.sizes.container),(W=t==null||(Y=t.sizes)===null||Y===void 0?void 0:Y.container)!==null&&W!==void 0?W:{}),{},{xxl:"1392px"})}),breakpoints:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.breakpoints),(O=t==null?void 0:t.breakpoints)!==null&&O!==void 0?O:{}),{},{xxl:"1392px"})}))},[t,l,f]),w=(0,d.useCallback)(function(S){(0,yt.Kn)(S)&&I(S),typeof S=="string"&&S in T.colors&&I(T.colors[S])},[t]);return d.createElement(vt,{theme:T},d.createElement(gt.f,{value:{brand:f,changeBrand:w,config:T}},r))},Ct=pt,St=s(22002),Mt=function(){var o,r=(0,M.pC)(),t=(o=(0,St.Z)())!==null&&o!==void 0?o:{},n=t.brand,i=t.config;return r&&d.createElement(Ct,{brand:n,config:i},r)},kt=Mt},35579:function(y,g,s){s.d(g,{O:function(){return x},u:function(){return $}});var d=s(72158),M=s(50959),m=s(11527),L=(0,M.createContext)({getDocument(){return document},getWindow(){return window}});L.displayName="EnvironmentContext";function x({defer:C}={}){const[,N]=(0,M.useReducer)(k=>k+1,0);return(0,d.G)(()=>{C&&N()},[C]),(0,M.useContext)(L)}function $(C){const{children:N,environment:k,disabled:U}=C,P=(0,M.useRef)(null),X=(0,M.useMemo)(()=>k||{getDocument:()=>{var R,B;return(B=(R=P.current)==null?void 0:R.ownerDocument)!=null?B:document},getWindow:()=>{var R,B;return(B=(R=P.current)==null?void 0:R.ownerDocument.defaultView)!=null?B:window}},[k]),G=!U||!k;return(0,m.jsxs)(L.Provider,{value:X,children:[N,G&&(0,m.jsx)("span",{id:"__chakra_env",hidden:!0,ref:P})]})}$.displayName="EnvironmentProvider"},65601:function(y,g,s){s.d(g,{r:function(){return M}});var d=s(50959);function M(m,L){const x=(0,d.useRef)(!1),$=(0,d.useRef)(!1);(0,d.useEffect)(()=>{if(x.current&&$.current)return m();$.current=!0},L),(0,d.useEffect)(()=>(x.current=!0,()=>{x.current=!1}),[])}},87981:function(y,g,s){s.d(g,{ZL:function(){return B},f6:function(){return U},eC:function(){return R}});var d=s(56873),M=s(50959);function m(E={}){const{strict:j=!0,errorMessage:A="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:c}=E,Z=(0,M.createContext)(void 0);Z.displayName=c;function H(){var q;const _=(0,M.useContext)(Z);if(!_&&j){const ee=new Error(A);throw ee.name="ContextError",(q=Error.captureStackTrace)==null||q.call(Error,ee,H),ee}return _}return[Z.Provider,H,Z]}var L=s(53668),x=s(65405),$=s(26788),C=s(68049),N=s(56287),k=s(11527);function U(E){const{cssVarsRoot:j,theme:A,children:c}=E,Z=(0,M.useMemo)(()=>(0,L.c0)(A),[A]);return(0,k.jsxs)(C.a,{theme:Z,children:[(0,k.jsx)(P,{root:j}),c]})}function P({root:E=":host, :root"}){const j=[E,"[data-theme]"].join(",");return(0,k.jsx)(N.xB,{styles:A=>({[j]:A.__cssVars})})}var[X,G]=m({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function R(E){return m({name:`${E}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${E} />" `})}function B(){const{colorMode:E}=(0,d.If)();return(0,k.jsx)(N.xB,{styles:j=>{const A=(0,x.Wf)(j,"styles.global"),c=(0,$.Pu)(A,{theme:j,colorMode:E});return c?(0,L.iv)(c)(j):void 0}})}}}]);
}());