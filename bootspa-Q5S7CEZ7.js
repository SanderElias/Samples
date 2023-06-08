import{a as fr,b as ur,c as ne,d as mr,e as pr,f as Lt,g as dr,h as hr,i as vr}from"./chunk-KE477OW5.js";import{a as lr,b as cr}from"./chunk-3CI5XCVV.js";import{a as te,b as ee}from"./chunk-EX27PMDL.js";import{d as qe,j as or,k as sr}from"./chunk-7UTYY7SV.js";import{$ as Be,B as Gn,Ga as Zn,Gb as Qt,Hb as N,Ia as Kn,Ib as tr,Jb as er,Ka as Jn,Pb as nr,Qb as rr,Sa as Ge,Sb as ir,W as qn,Wa as L,Yb as ar,Za as lt,_ as He,cb as Qn,da as G,eb as P,fb as k,ga as Rt,gb as O,ha as Ve,hb as bt,o as We,p as Vn,ra as Xn,ub as T}from"./chunk-VWKE6EEO.js";import{a as Kt,b as Jt,c as Hn,d as Bn,h as Mt}from"./chunk-G5KKTNWD.js";var Ci=Hn(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var gi="fas",yi="pause",xi=320,wi=512,Cn=[9208],Si="f04c",_i="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z";D.definition={prefix:gi,iconName:yi,icon:[xi,wi,Cn,Si,_i]};D.faPause=D.definition;D.prefix=gi;D.iconName=yi;D.width=xi;D.height=wi;D.ligatures=Cn;D.unicode=Si;D.svgPathData=_i;D.aliases=Cn});var Ii=Hn(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var ki="fas",Ei="play",Oi=384,Ai=512,kn=[9654],Pi="f04b",Ti="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z";z.definition={prefix:ki,iconName:Ei,icon:[Oi,Ai,kn,Pi,Ti]};z.faPlay=z.definition;z.prefix=ki;z.iconName=Ei;z.width=Oi;z.height=Ai;z.ligatures=kn;z.unicode=Pi;z.svgPathData=Ti;z.aliases=kn});function br(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?br(Object(n),!0).forEach(function(r){A(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function de(t){return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(t)}function ya(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xa(t,e,n){return e&&gr(t.prototype,e),n&&gr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function un(t,e){return Sa(t)||Ca(t,e)||Wr(t,e)||Ea()}function Wt(t){return wa(t)||_a(t)||Wr(t)||ka()}function wa(t){if(Array.isArray(t))return Qe(t)}function Sa(t){if(Array.isArray(t))return t}function _a(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ca(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Wr(t,e){if(t){if(typeof t=="string")return Qe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(t,e)}}function Qe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ka(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yr=function(){},mn={},Hr={},Br=null,Vr={mark:yr,measure:yr};try{typeof window<"u"&&(mn=window),typeof document<"u"&&(Hr=document),typeof MutationObserver<"u"&&(Br=MutationObserver),typeof performance<"u"&&(Vr=performance)}catch{}var Oa=mn.navigator||{},xr=Oa.userAgent,wr=xr===void 0?"":xr,rt=mn,g=Hr,Sr=Br,re=Vr,Fs=!!rt.document,Q=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Gr=~wr.indexOf("MSIE")||~wr.indexOf("Trident/"),ie,ae,oe,se,le,Z="___FONT_AWESOME___",tn=16,qr="fa",Xr="svg-inline--fa",ut="data-fa-i2svg",en="data-fa-pseudo-element",Aa="data-fa-pseudo-element-pending",pn="data-prefix",dn="data-icon",_r="fontawesome-i2svg",Pa="async",Ta=["HTML","HEAD","STYLE","SCRIPT"],Zr=function(){try{return!0}catch{return!1}}(),b="classic",x="sharp",hn=[b,x];function Ht(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[b]}})}var Dt=Ht((ie={},A(ie,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),A(ie,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ie)),zt=Ht((ae={},A(ae,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),A(ae,x,{solid:"fass",regular:"fasr",light:"fasl"}),ae)),Ut=Ht((oe={},A(oe,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),A(oe,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),oe)),Ia=Ht((se={},A(se,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),A(se,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),se)),Ma=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Kr="fa-layers-text",Ra=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,La=Ht((le={},A(le,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),A(le,x,{900:"fass",400:"fasr",300:"fasl"}),le)),Jr=[1,2,3,4,5,6,7,8,9,10],Na=Jr.concat([11,12,13,14,15,16,17,18,19,20]),Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$t=new Set;Object.keys(zt[b]).map($t.add.bind($t));Object.keys(zt[x]).map($t.add.bind($t));var ja=[].concat(hn,Wt($t),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Jr.map(function(t){return"".concat(t,"x")})).concat(Na.map(function(t){return"w-".concat(t)})),Ft=rt.FontAwesomeConfig||{};function Da(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function za(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(Cr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Cr.forEach(function(t){var e=un(t,2),n=e[0],r=e[1],i=za(Da(n));i!=null&&(Ft[r]=i)}));var Cr,Qr={styleDefault:"solid",familyDefault:"classic",cssPrefix:qr,replacementClass:Xr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ft.familyPrefix&&(Ft.cssPrefix=Ft.familyPrefix);var wt=m(m({},Qr),Ft);wt.autoReplaceSvg||(wt.observeMutations=!1);var p={};Object.keys(Qr).forEach(function(t){Object.defineProperty(p,t,{enumerable:!0,set:function(n){wt[t]=n,jt.forEach(function(r){return r(p)})},get:function(){return wt[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){wt.cssPrefix=e,jt.forEach(function(n){return n(p)})},get:function(){return wt.cssPrefix}});rt.FontAwesomeConfig=p;var jt=[];function Ua(t){return jt.push(t),function(){jt.splice(jt.indexOf(t),1)}}var nt=tn,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $a(t){if(!(!t||!Q)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return g.head.insertBefore(e,r),t}}var Ya="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var t=12,e="";t-- >0;)e+=Ya[Math.random()*62|0];return e}function St(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vn(t){return t.classList?St(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ti(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ti(t[n]),'" ')},"").trim()}function be(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bn(t){return t.size!==q.size||t.x!==q.x||t.y!==q.y||t.rotate!==q.rotate||t.flipX||t.flipY}function Ha(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Ba(t){var e=t.transform,n=t.width,r=n===void 0?tn:n,i=t.height,a=i===void 0?tn:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Gr?l+="translate(".concat(e.x/nt-r/2,"em, ").concat(e.y/nt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/nt,"em), calc(-50% + ").concat(e.y/nt,"em)) "):l+="translate(".concat(e.x/nt,"em, ").concat(e.y/nt,"em) "),l+="scale(".concat(e.size/nt*(e.flipX?-1:1),", ").concat(e.size/nt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Va=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ei(){var t=qr,e=Xr,n=p.cssPrefix,r=p.replacementClass,i=Va;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var kr=!1;function Xe(){p.autoAddCss&&!kr&&($a(ei()),kr=!0)}var Ga={mixout:function(){return{dom:{css:ei,insertCss:Xe}}},hooks:function(){return{beforeDOMElementCreation:function(){Xe()},beforeI2svg:function(){Xe()}}}},K=rt||{};K[Z]||(K[Z]={});K[Z].styles||(K[Z].styles={});K[Z].hooks||(K[Z].hooks={});K[Z].shims||(K[Z].shims=[]);var W=K[Z],ni=[],qa=function t(){g.removeEventListener("DOMContentLoaded",t),he=1,ni.map(function(e){return e()})},he=!1;Q&&(he=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),he||g.addEventListener("DOMContentLoaded",qa));function Xa(t){Q&&(he?setTimeout(t,0):ni.push(t))}function Bt(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?ti(t):"<".concat(e," ").concat(Wa(r),">").concat(a.map(Bt).join(""),"</").concat(e,">")}function Er(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Za=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},Ze=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?Za(n,i):n,l,c,f;for(r===void 0?(l=1,f=e[a[0]]):(l=0,f=r);l<o;l++)c=a[l],f=s(f,e[c],c,e);return f};function Ka(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function nn(t){var e=Ka(t);return e.length===1?e[0].toString(16):null}function Ja(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Or(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function rn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Or(e);typeof W.hooks.addPack=="function"&&!i?W.hooks.addPack(t,Or(e)):W.styles[t]=m(m({},W.styles[t]||{}),a),t==="fas"&&rn("fa",e)}var ce,fe,ue,gt=W.styles,Qa=W.shims,to=(ce={},A(ce,b,Object.values(Ut[b])),A(ce,x,Object.values(Ut[x])),ce),gn=null,ri={},ii={},ai={},oi={},si={},eo=(fe={},A(fe,b,Object.keys(Dt[b])),A(fe,x,Object.keys(Dt[x])),fe);function no(t){return~ja.indexOf(t)}function ro(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!no(i)?i:null}var li=function(){var e=function(a){return Ze(gt,function(o,s,l){return o[l]=Ze(s,a,{}),o},{})};ri=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ii=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),si=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in gt||p.autoFetchSvg,r=Ze(Qa,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});ai=r.names,oi=r.unicodes,gn=ge(p.styleDefault,{family:p.familyDefault})};Ua(function(t){gn=ge(t.styleDefault,{family:p.familyDefault})});li();function yn(t,e){return(ri[t]||{})[e]}function io(t,e){return(ii[t]||{})[e]}function ft(t,e){return(si[t]||{})[e]}function ci(t){return ai[t]||{prefix:null,iconName:null}}function ao(t){var e=oi[t],n=yn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return gn}var xn=function(){return{prefix:null,iconName:null,rest:[]}};function ge(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?b:n,i=Dt[r][t],a=zt[r][t]||zt[r][i],o=t in W.styles?t:null;return a||o||null}var Ar=(ue={},A(ue,b,Object.keys(Ut[b])),A(ue,x,Object.keys(Ut[x])),ue);function ye(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},A(e,b,"".concat(p.cssPrefix,"-").concat(b)),A(e,x,"".concat(p.cssPrefix,"-").concat(x)),e),o=null,s=b;(t.includes(a[b])||t.some(function(c){return Ar[b].includes(c)}))&&(s=b),(t.includes(a[x])||t.some(function(c){return Ar[x].includes(c)}))&&(s=x);var l=t.reduce(function(c,f){var u=ro(p.cssPrefix,f);if(gt[f]?(f=to[s].includes(f)?Ia[s][f]:f,o=f,c.prefix=f):eo[s].indexOf(f)>-1?(o=f,c.prefix=ge(f,{family:s})):u?c.iconName=u:f!==p.replacementClass&&f!==a[b]&&f!==a[x]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var d=o==="fa"?ci(c.iconName):{},h=ft(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||h||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!gt.far&&gt.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},xn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(gt.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=it()||"fas"),l}var oo=function(){function t(){ya(this,t),this.definitions={}}return xa(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),rn(s,o[s]);var l=Ut[b][s];l&&rn(l,o[s]),li()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),t}(),Pr=[],yt={},xt={},so=Object.keys(xt);function lo(t,e){var n=e.mixoutsTo;return Pr=t,yt={},Object.keys(xt).forEach(function(r){so.indexOf(r)===-1&&delete xt[r]}),Pr.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),de(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(a[o])})}r.provides&&r.provides(xt)}),n}function an(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=yt[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function mt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=yt[t]||[];i.forEach(function(a){a.apply(null,n)})}function J(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return xt[t]?xt[t].apply(null,e):void 0}function on(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||it();if(e)return e=ft(n,e)||e,Er(fi.definitions,n,e)||Er(W.styles,n,e)}var fi=new oo,co=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,mt("noAuto")},fo={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(mt("beforeI2svg",e),J("pseudoElements2svg",e),J("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Xa(function(){mo({autoReplaceSvgRoot:n}),mt("watch",e)})}},uo={icon:function(e){if(e===null)return null;if(de(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ft(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ge(e[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(Ma))){var i=ye(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||it(),iconName:ft(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=it();return{prefix:a,iconName:ft(a,e)||e}}}},j={noAuto:co,config:p,dom:fo,parse:uo,library:fi,findIconDefinition:on,toHtml:Bt},mo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?g:n;(Object.keys(W.styles).length>0||p.autoFetchSvg)&&Q&&p.autoReplaceSvg&&j.dom.i2svg({node:r})};function xe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Bt(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Q){var r=g.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function po(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(bn(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=be(m(m({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ho(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:o}),children:r}]}]}function wn(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,d=t.watchable,h=d===void 0?!1:d,w=r.found?r:n,C=w.width,R=w.height,I=i==="fak",S=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(function(et){return u.classes.indexOf(et)===-1}).filter(function(et){return et!==""||!!et}).concat(u.classes).join(" "),M={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(R)})},V=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(C/R*16*.0625,"em")}:{};h&&(M.attributes[ut]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||Yt())},children:[l]}),delete M.attributes.title);var F=m(m({},M),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:m(m({},V),u.styles)}),ot=r.found&&n.found?J("generateAbstractMask",F)||{children:[],attributes:{}}:J("generateAbstractIcon",F)||{children:[],attributes:{}},st=ot.children,Ye=ot.attributes;return F.children=st,F.attributes=Ye,s?ho(F):po(F)}function Tr(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[ut]="");var f=m({},o.styles);bn(i)&&(f.transform=Ba({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=be(f);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function vo(t){var e=t.content,n=t.title,r=t.extra,i=m(m(m({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=be(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ke=W.styles;function sn(t){var e=t[0],n=t[1],r=t.slice(4),i=un(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var bo={found:!1,width:512,height:512};function go(t,e){!Zr&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ln(t,e){var n=e;return e==="fa"&&p.styleDefault!==null&&(e=it()),new Promise(function(r,i){var a={found:!1,width:512,height:512,icon:J("missingIconAbstract")||{}};if(n==="fa"){var o=ci(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ke[e]&&Ke[e][t]){var s=Ke[e][t];return r(sn(s))}go(t,e),r(m(m({},bo),{},{icon:p.showMissingIcons&&t?J("missingIconAbstract")||{}:{}}))})}var Ir=function(){},cn=p.measurePerformance&&re&&re.mark&&re.measure?re:{mark:Ir,measure:Ir},Nt='FA "6.4.0"',yo=function(e){return cn.mark("".concat(Nt," ").concat(e," begins")),function(){return ui(e)}},ui=function(e){cn.mark("".concat(Nt," ").concat(e," ends")),cn.measure("".concat(Nt," ").concat(e),"".concat(Nt," ").concat(e," begins"),"".concat(Nt," ").concat(e," ends"))},Sn={begin:yo,end:ui},me=function(){};function Mr(t){var e=t.getAttribute?t.getAttribute(ut):null;return typeof e=="string"}function xo(t){var e=t.getAttribute?t.getAttribute(pn):null,n=t.getAttribute?t.getAttribute(dn):null;return e&&n}function wo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function So(){if(p.autoReplaceSvg===!0)return pe.replace;var t=pe[p.autoReplaceSvg];return t||pe.replace}function _o(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Co(t){return g.createElement(t)}function mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?_o:Co:n;if(typeof t=="string")return g.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(mi(o,{ceFn:r}))}),i}function ko(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var pe={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(mi(i),n)}),n.getAttribute(ut)===null&&p.keepOriginalSource){var r=g.createComment(ko(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~vn(n).indexOf(p.replacementClass))return pe.replace(e);var i=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Bt(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function Rr(t){t()}function pi(t,e){var n=typeof e=="function"?e:me;if(t.length===0)n();else{var r=Rr;p.mutateApproach===Pa&&(r=rt.requestAnimationFrame||Rr),r(function(){var i=So(),a=Sn.begin("mutate");t.map(i),a(),n()})}}var _n=!1;function di(){_n=!0}function fn(){_n=!1}var ve=null;function Lr(t){if(Sr&&p.observeMutations){var e=t.treeCallback,n=e===void 0?me:e,r=t.nodeCallback,i=r===void 0?me:r,a=t.pseudoElementsCallback,o=a===void 0?me:a,s=t.observeMutationsRoot,l=s===void 0?g:s;ve=new Sr(function(c){if(!_n){var f=it();St(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Mr(u.addedNodes[0])&&(p.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Mr(u.target)&&~Fa.indexOf(u.attributeName))if(u.attributeName==="class"&&xo(u.target)){var d=ye(vn(u.target)),h=d.prefix,w=d.iconName;u.target.setAttribute(pn,h||f),w&&u.target.setAttribute(dn,w)}else wo(u.target)&&i(u.target)})}}),Q&&ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Eo(){ve&&ve.disconnect()}function Oo(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ao(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ye(vn(t));return i.prefix||(i.prefix=it()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=io(i.prefix,t.innerText)||yn(i.prefix,nn(t.innerText))),!i.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Po(t){var e=St(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||Yt()):(e["aria-hidden"]="true",e.focusable="false")),e}function To(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ao(t),r=n.iconName,i=n.prefix,a=n.rest,o=Po(t),s=an("parseNodeAttributes",{},t),l=e.styleParser?Oo(t):[];return m({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Io=W.styles;function hi(t){var e=p.autoReplaceSvg==="nest"?Nr(t,{styleParser:!1}):Nr(t);return~e.extra.classes.indexOf(Kr)?J("generateLayersText",t,e):J("generateSvgReplacementMutation",t,e)}var at=new Set;hn.map(function(t){at.add("fa-".concat(t))});Object.keys(Dt[b]).map(at.add.bind(at));Object.keys(Dt[x]).map(at.add.bind(at));at=Wt(at);function Fr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var n=g.documentElement.classList,r=function(u){return n.add("".concat(_r,"-").concat(u))},i=function(u){return n.remove("".concat(_r,"-").concat(u))},a=p.autoFetchSvg?at:hn.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Io));a.includes("fa")||a.push("fa");var o=[".".concat(Kr,":not([").concat(ut,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Sn.begin("onTree"),c=s.reduce(function(f,u){try{var d=hi(u);d&&f.push(d)}catch(h){Zr||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(d){pi(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),u(d)})})}function Mo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hi(t).then(function(n){n&&pi([n],e)})}function Ro(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:on(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:on(i||{})),t(r,m(m({},n),{},{mask:i}))}}var Lo=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?q:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,d=u===void 0?null:u,h=n.titleId,w=h===void 0?null:h,C=n.classes,R=C===void 0?[]:C,I=n.attributes,S=I===void 0?{}:I,M=n.styles,V=M===void 0?{}:M;if(e){var F=e.prefix,ot=e.iconName,st=e.icon;return xe(m({type:"icon"},e),function(){return mt("beforeDOMElementCreation",{iconDefinition:e,params:n}),p.autoA11y&&(d?S["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(w||Yt()):(S["aria-hidden"]="true",S.focusable="false")),wn({icons:{main:sn(st),mask:l?sn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:ot,transform:m(m({},q),i),symbol:o,title:d,maskId:f,titleId:w,extra:{attributes:S,styles:V,classes:R}})})}},No={mixout:function(){return{icon:Ro(Lo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fr,n.nodeCallback=Mo,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?g:r,a=n.callback,o=a===void 0?function(){}:a;return Fr(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,d=r.extra;return new Promise(function(h,w){Promise.all([ln(i,s),f.iconName?ln(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var R=un(C,2),I=R[0],S=R[1];h([n,wn({icons:{main:I,mask:S},prefix:s,iconName:i,transform:l,symbol:c,maskId:u,title:a,titleId:o,extra:d,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=be(s);l.length>0&&(i.style=l);var c;return bn(o)&&(c=J("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Fo={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return xe({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(Wt(a)).join(" ")},children:o}]})}}}},jo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return xe({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),vo({content:n.toString(),title:a,extra:{attributes:c,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(Wt(s))}})})}}}},Do={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?q:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,d=r.styles,h=d===void 0?{}:d;return xe({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),Tr({content:n,transform:m(m({},q),a),title:s,extra:{attributes:u,styles:h,classes:["".concat(p.cssPrefix,"-layers-text")].concat(Wt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Gr){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return p.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Tr({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},zo=new RegExp('"',"ug"),jr=[1105920,1112319];function Uo(t){var e=t.replace(zo,""),n=Ja(e,0),r=n>=jr[0]&&n<=jr[1],i=e.length===2?e[0]===e[1]:!1;return{value:nn(i?e[0]:e),isSecondary:r||i}}function Dr(t,e){var n="".concat(Aa).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=St(t.children),o=a.filter(function(st){return st.getAttribute(en)===e})[0],s=rt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Ra),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?x:b,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?zt[d][l[2].toLowerCase()]:La[d][c],w=Uo(u),C=w.value,R=w.isSecondary,I=l[0].startsWith("FontAwesome"),S=yn(h,C),M=S;if(I){var V=ao(C);V.iconName&&V.prefix&&(S=V.iconName,h=V.prefix)}if(S&&!R&&(!o||o.getAttribute(pn)!==h||o.getAttribute(dn)!==M)){t.setAttribute(n,M),o&&t.removeChild(o);var F=To(),ot=F.extra;ot.attributes[en]=e,ln(S,h).then(function(st){var Ye=wn(m(m({},F),{},{icons:{main:st,mask:xn()},prefix:h,iconName:M,extra:ot,watchable:!0})),et=g.createElement("svg");e==="::before"?t.insertBefore(et,t.firstChild):t.appendChild(et),et.outerHTML=Ye.map(function(ga){return Bt(ga)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $o(t){return Promise.all([Dr(t,"::before"),Dr(t,"::after")])}function Yo(t){return t.parentNode!==document.head&&!~Ta.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(en)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zr(t){if(Q)return new Promise(function(e,n){var r=St(t.querySelectorAll("*")).filter(Yo).map($o),i=Sn.begin("searchPseudoElements");di(),Promise.all(r).then(function(){i(),fn(),e()}).catch(function(){i(),fn(),n()})})}var Wo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zr,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?g:r;p.searchPseudoElements&&zr(i)}}},Ur=!1,Ho={mixout:function(){return{dom:{unwatch:function(){di(),Ur=!0}}}},hooks:function(){return{bootstrap:function(){Lr(an("mutationObserverCallbacks",{}))},noAuto:function(){Eo()},watch:function(n){var r=n.observeMutationsRoot;Ur?fn():Lr(an("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$r=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Bo={mixout:function(){return{parse:{transform:function(n){return $r(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=$r(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:u,path:d};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),h.path)}]}]}}}},Je={x:0,y:0,width:"100%",height:"100%"};function Yr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vo(t){return t.tag==="g"?t.children:[t]}var Go={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ye(i.split(" ").map(function(o){return o.trim()})):xn();return a.prefix||(a.prefix=it()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,f=a.icon,u=o.width,d=o.icon,h=Ha({transform:l,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:m(m({},Je),{},{fill:"white"})},C=f.children?{children:f.children.map(Yr)}:{},R={tag:"g",attributes:m({},h.inner),children:[Yr(m({tag:f.tag,attributes:m(m({},f.attributes),h.path)},C))]},I={tag:"g",attributes:m({},h.outer),children:[R]},S="mask-".concat(s||Yt()),M="clip-".concat(s||Yt()),V={tag:"mask",attributes:m(m({},Je),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,I]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Vo(d)},V]};return r.push(F,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(S,")")},Je)}),{children:r,attributes:i}}}},qo={provides:function(e){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:m(m({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:m(m({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Xo={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zo=[Ga,No,Fo,jo,Do,Wo,Ho,Bo,Go,qo,Xo];lo(Zo,{mixoutsTo:j});var js=j.noAuto,Ds=j.config,vi=j.library,bi=j.dom,zs=j.parse,Us=j.findIconDefinition,$s=j.toHtml,Ys=j.icon,Ws=j.layer,Hs=j.text,Bs=j.counter;var va=Bn(Ci(),1),ba=Bn(Ii(),1);function v(t){return typeof t=="function"}function _t(t){let n=t(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var we=_t(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Vt(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var U=class{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let a of n)a.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(v(r))try{r()}catch(a){e=a instanceof we?a.errors:[a]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let a of i)try{Mi(a)}catch(o){e=e??[],o instanceof we?e=[...e,...o.errors]:e.push(o)}}if(e)throw new we(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Mi(e);else{if(e instanceof U){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&Vt(n,e)}remove(e){let{_finalizers:n}=this;n&&Vt(n,e),e instanceof U&&e._removeParent(this)}};U.EMPTY=(()=>{let t=new U;return t.closed=!0,t})();var En=U.EMPTY;function Se(t){return t instanceof U||t&&"closed"in t&&v(t.remove)&&v(t.add)&&v(t.unsubscribe)}function Mi(t){v(t)?t():t.unsubscribe()}var H={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ct={setTimeout(t,e,...n){let{delegate:r}=Ct;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=Ct;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function _e(t){Ct.setTimeout(()=>{let{onUnhandledError:e}=H;if(e)e(t);else throw t})}function Gt(){}var Ri=(()=>On("C",void 0,void 0))();function Li(t){return On("E",void 0,t)}function Ni(t){return On("N",t,void 0)}function On(t,e,n){return{kind:t,value:e,error:n}}var pt=null;function kt(t){if(H.useDeprecatedSynchronousErrorHandling){let e=!pt;if(e&&(pt={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:r}=pt;if(pt=null,n)throw r}}else t()}function Fi(t){H.useDeprecatedSynchronousErrorHandling&&pt&&(pt.errorThrown=!0,pt.error=t)}var dt=class extends U{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Se(e)&&e.add(this)):this.destination=Qo}static create(e,n,r){return new B(e,n,r)}next(e){this.isStopped?Pn(Ni(e),this):this._next(e)}error(e){this.isStopped?Pn(Li(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Pn(Ri,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Ko=Function.prototype.bind;function An(t,e){return Ko.call(t,e)}var Tn=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Ce(r)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Ce(r)}else Ce(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Ce(n)}}},B=class extends dt{constructor(e,n,r){super();let i;if(v(e)||!e)i={next:e??void 0,error:n??void 0,complete:r??void 0};else{let a;this&&H.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&An(e.next,a),error:e.error&&An(e.error,a),complete:e.complete&&An(e.complete,a)}):i=e}this.destination=new Tn(i)}};function Ce(t){H.useDeprecatedSynchronousErrorHandling?Fi(t):_e(t)}function Jo(t){throw t}function Pn(t,e){let{onStoppedNotification:n}=H;n&&Ct.setTimeout(()=>n(t,e))}var Qo={closed:!0,next:Gt,error:Jo,complete:Gt};var Et=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function Ot(t){return t}function ji(t){return t.length===0?Ot:t.length===1?t[0]:function(n){return t.reduce((r,i)=>i(r),n)}}var E=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,i){let a=es(n)?n:new B(n,r,i);return kt(()=>{let{operator:o,source:s}=this;a.add(o?o.call(a,s):s?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Di(r),new r((i,a)=>{let o=new B({next:s=>{try{n(s)}catch(l){a(l),o.unsubscribe()}},error:a,complete:i});this.subscribe(o)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Et](){return this}pipe(...n){return ji(n)(this)}toPromise(n){return n=Di(n),new n((r,i)=>{let a;this.subscribe(o=>a=o,o=>i(o),()=>r(a))})}}return t.create=e=>new t(e),t})();function Di(t){var e;return(e=t??H.Promise)!==null&&e!==void 0?e:Promise}function ts(t){return t&&v(t.next)&&v(t.error)&&v(t.complete)}function es(t){return t&&t instanceof dt||ts(t)&&Se(t)}function ns(t){return v(t?.lift)}function y(t){return e=>{if(ns(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function _(t,e,n,r,i){return new In(t,e,n,r,i)}var In=class extends dt{constructor(e,n,r,i,a,o){super(e),this.onFinalize=a,this.shouldUnsubscribe=o,this._next=n?function(s){try{n(s)}catch(l){e.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){e.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var zi=_t(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ht=(()=>{class t extends E{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new ke(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new zi}next(n){kt(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){kt(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){kt(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:i,observers:a}=this;return r||i?En:(this.currentObservers=null,a.push(n),new U(()=>{this.currentObservers=null,Vt(a,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:i,isStopped:a}=this;r?n.error(i):a&&n.complete()}asObservable(){let n=new E;return n.source=this,n}}return t.create=(e,n)=>new ke(e,n),t})(),ke=class extends ht{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)}error(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:En}};var At=class extends ht{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var Mn={now(){return(Mn.delegate||Date).now()},delegate:void 0};var qt=class extends ht{constructor(e=1/0,n=1/0,r=Mn){super(),this._bufferSize=e,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,n)}next(e){let{isStopped:n,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:a,_windowTime:o}=this;n||(r.push(e),!i&&r.push(a.now()+o)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(e),{_infiniteTimeWindow:r,_buffer:i}=this,a=i.slice();for(let o=0;o<a.length&&!e.closed;o+=r?1:2)e.next(a[o]);return this._checkFinalizedStatuses(e),n}_trimBuffer(){let{_bufferSize:e,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:i}=this,a=(i?1:2)*e;if(e<1/0&&a<r.length&&r.splice(0,r.length-a),!i){let o=n.now(),s=0;for(let l=1;l<r.length&&r[l]<=o;l+=2)s=l;s&&r.splice(0,s+1)}}};var Ui=new E(t=>t.complete());function $i(t){return t&&v(t.schedule)}function rs(t){return t[t.length-1]}function Yi(t){return $i(rs(t))?t.pop():void 0}function Hi(t,e,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(f){try{c(r.next(f))}catch(u){o(u)}}function l(f){try{c(r.throw(f))}catch(u){o(u)}}function c(f){f.done?a(f.value):i(f.value).then(s,l)}c((r=r.apply(t,e||[])).next())})}function Wi(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function vt(t){return this instanceof vt?(this.v=t,this):new vt(t)}function Bi(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,a=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(h){return new Promise(function(w,C){a.push([d,h,w,C])>1||s(d,h)})})}function s(d,h){try{l(r[d](h))}catch(w){u(a[0][3],w)}}function l(d){d.value instanceof vt?Promise.resolve(d.value.v).then(c,f):u(a[0][2],d)}function c(d){s("next",d)}function f(d){s("throw",d)}function u(d,h){d(h),a.shift(),a.length&&s(a[0][0],a[0][1])}}function Vi(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Wi=="function"?Wi(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(a){n[a]=t[a]&&function(o){return new Promise(function(s,l){o=t[a](o),i(s,l,o.done,o.value)})}}function i(a,o,s,l){Promise.resolve(l).then(function(c){a({value:c,done:s})},o)}}var Ee=t=>t&&typeof t.length=="number"&&typeof t!="function";function Oe(t){return v(t?.then)}function Ae(t){return v(t[Et])}function Pe(t){return Symbol.asyncIterator&&v(t?.[Symbol.asyncIterator])}function Te(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function is(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ie=is();function Me(t){return v(t?.[Ie])}function Re(t){return Bi(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:r,done:i}=yield vt(n.read());if(i)return yield vt(void 0);yield yield vt(r)}}finally{n.releaseLock()}})}function Le(t){return v(t?.getReader)}function $(t){if(t instanceof E)return t;if(t!=null){if(Ae(t))return as(t);if(Ee(t))return os(t);if(Oe(t))return ss(t);if(Pe(t))return Gi(t);if(Me(t))return ls(t);if(Le(t))return cs(t)}throw Te(t)}function as(t){return new E(e=>{let n=t[Et]();if(v(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function os(t){return new E(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function ss(t){return new E(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,_e)})}function ls(t){return new E(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function Gi(t){return new E(e=>{fs(t,e).catch(n=>e.error(n))})}function cs(t){return Gi(Re(t))}function fs(t,e){var n,r,i,a;return Hi(this,void 0,void 0,function*(){try{for(n=Vi(t);r=yield n.next(),!r.done;){let o=r.value;if(e.next(o),e.closed)return}}catch(o){i={error:o}}finally{try{r&&!r.done&&(a=n.return)&&(yield a.call(n))}finally{if(i)throw i.error}}e.complete()})}function X(t,e,n,r=0,i=!1){let a=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(a),!i)return a}function Ne(t,e=0){return y((n,r)=>{n.subscribe(_(r,i=>X(r,t,()=>r.next(i),e),()=>X(r,t,()=>r.complete(),e),i=>X(r,t,()=>r.error(i),e)))})}function Fe(t,e=0){return y((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function qi(t,e){return $(t).pipe(Fe(e),Ne(e))}function Xi(t,e){return $(t).pipe(Fe(e),Ne(e))}function Zi(t,e){return new E(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Ki(t,e){return new E(n=>{let r;return X(n,e,()=>{r=t[Ie](),X(n,e,()=>{let i,a;try{({value:i,done:a}=r.next())}catch(o){n.error(o);return}a?n.complete():n.next(i)},0,!0)}),()=>v(r?.return)&&r.return()})}function je(t,e){if(!t)throw new Error("Iterable cannot be null");return new E(n=>{X(n,e,()=>{let r=t[Symbol.asyncIterator]();X(n,e,()=>{r.next().then(i=>{i.done?n.complete():n.next(i.value)})},0,!0)})})}function Ji(t,e){return je(Re(t),e)}function Qi(t,e){if(t!=null){if(Ae(t))return qi(t,e);if(Ee(t))return Zi(t,e);if(Oe(t))return Xi(t,e);if(Pe(t))return je(t,e);if(Me(t))return Ki(t,e);if(Le(t))return Ji(t,e)}throw Te(t)}function ta(t,e){return e?Qi(t,e):$(t)}function De(...t){let e=Yi(t);return ta(t,e)}var Pt=_t(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Tt(t,e){let n=typeof e=="object";return new Promise((r,i)=>{let a=new B({next:o=>{r(o),a.unsubscribe()},error:i,complete:()=>{n?r(e.defaultValue):i(new Pt)}});t.subscribe(a)})}function Xt(t,e){return y((n,r)=>{let i=0;n.subscribe(_(r,a=>{r.next(t.call(e,a,i++))}))})}var Rn=new E(Gt);function tt(t,e){return y((n,r)=>{let i=0;n.subscribe(_(r,a=>t.call(e,a,i++)&&r.next(a)))})}function ze(t){return y((e,n)=>{let r=null,i=!1,a;r=e.subscribe(_(n,void 0,void 0,o=>{a=$(t(o,ze(t)(e))),r?(r.unsubscribe(),r=null,a.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,a.subscribe(n))})}function ea(t){return y((e,n)=>{let r=!1;e.subscribe(_(n,i=>{r=!0,n.next(i)},()=>{r||n.next(t),n.complete()}))})}function na(t){return t<=0?()=>Ui:y((e,n)=>{let r=0;e.subscribe(_(n,i=>{++r<=t&&(n.next(i),t<=r&&n.complete())}))})}function ra(t=us){return y((e,n)=>{let r=!1;e.subscribe(_(n,i=>{r=!0,n.next(i)},()=>r?n.complete():n.error(t())))})}function us(){return new Pt}function Ln(t,e){let n=arguments.length>=2;return r=>r.pipe(t?tt((i,a)=>t(i,a,r)):Ot,na(1),n?ea(e):ra(()=>new Pt))}function Ue(...t){let e=t.length;if(e===0)throw new Error("list of properties cannot be empty.");return Xt(n=>{let r=n;for(let i=0;i<e;i++){let a=r?.[t[i]];if(typeof a<"u")r=a;else return}return r})}function ia(t={}){let{connector:e=()=>new ht,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return a=>{let o,s,l,c=0,f=!1,u=!1,d=()=>{s?.unsubscribe(),s=void 0},h=()=>{d(),o=l=void 0,f=u=!1},w=()=>{let C=o;h(),C?.unsubscribe()};return y((C,R)=>{c++,!u&&!f&&d();let I=l=l??e();R.add(()=>{c--,c===0&&!u&&!f&&(s=Nn(w,i))}),I.subscribe(R),!o&&c>0&&(o=new B({next:S=>I.next(S),error:S=>{u=!0,d(),s=Nn(h,n,S),I.error(S)},complete:()=>{f=!0,d(),s=Nn(h,r),I.complete()}}),$(C).subscribe(o))})(a)}}function Nn(t,e,...n){if(e===!0){t();return}if(e===!1)return;let r=new B({next:()=>{r.unsubscribe(),t()}});return $(e(...n)).subscribe(r)}function Fn(t,e,n){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:e=1/0,refCount:i=!1,scheduler:n}=t:r=t??1/0,ia({connector:()=>new qt(r,e,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Zt(t,e){return y((n,r)=>{let i=null,a=0,o=!1,s=()=>o&&!i&&r.complete();n.subscribe(_(r,l=>{i?.unsubscribe();let c=0,f=a++;$(t(l,f)).subscribe(i=_(r,u=>r.next(e?e(l,u,f,c++):u),()=>{i=null,s()}))},()=>{o=!0,s()}))})}function jn(t,e=!1){return y((n,r)=>{let i=0;n.subscribe(_(r,a=>{let o=t(a,i++);(o||e)&&r.next(a),!o&&r.complete()}))})}function It(t,e,n){let r=v(t)||e||n?{next:t,error:e,complete:n}:t;return r?y((i,a)=>{var o;(o=r.subscribe)===null||o===void 0||o.call(r);let s=!0;i.subscribe(_(a,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),a.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),a.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),a.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Ot}var $e={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},fa=new Kn("scullyLibConfig",{factory:()=>$e}),Dn=t=>(t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t),Wn=()=>window&&window.ScullyIO==="running",zn=()=>window&&window.ScullyIO==="generated";function aa(t,e){return t=t??"",t.endsWith("/")&&e.startsWith("/")?`${t}${e.substr(1)}`:!t.endsWith("/")&&!e.startsWith("/")?`${t}/${e}`:`${t}${e}`}var Un="ScullyIO-transfer-state",$n="/** ___SCULLY_STATE_START___ */",Yn="/** ___SCULLY_STATE_END___ */",ps="__done__with__Initial__navigation__",ds=(()=>{class t{constructor(n,r,i){this.document=n,this.router=r,this.http=i,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new At({}),this.state$=this.stateBS.pipe(tt(a=>a!==void 0)),this.nextUrl=this.router.events.pipe(tt(a=>a instanceof fr),Zt(a=>Dn(this.initialUrl)===Dn(a.url)?(this.initialUrl=ps,Rn):De(a)),It(()=>this.stateBS.next(void 0)),Zt(a=>this.router.events.pipe(tt(o=>o instanceof ne&&o.url===a.url),Ln())),Xt(a=>Dn(a.urlAfterRedirects||a.url)),Fn(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(Wn()){this.injectScript();let n=window["ScullyIO-exposed"]||{};n.transferState&&(this.stateBS.next(n.transferState),this.saveState(n.transferState))}else this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl=this.initialUrl!=="/"&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,zn()&&this.stateBS.next(window&&window[Un]||{})}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",Un);let n=this.document.body.lastChild;for(;n.previousSibling.nodeName==="SCRIPT";)n=n.previousSibling;this.document.body.insertBefore(this.script,n)}getState(n){return this.fetchTransferState(),this.state$.pipe(Ue(n))}stateHasKey(n){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(n)}stateKeyHasValue(n){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(n)&&this.stateBS.value[n]!=null}setState(n,r){let i=Jt(Kt({},this.stateBS.value),{[n]:r});this.stateBS.next(i),this.saveState(i)}saveState(n){Wn()&&(this.script.textContent=`{window['${Un}']=_u(\`${$n}${hs(JSON.stringify(n))}${Yn}\`);function _u(t){t=t.split('${$n}')[1].split('${Yn}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`)}setupStartNavMonitoring(){zn()&&this.nextUrl.subscribe()}useScullyTransferState(n,r){return zn()?this.getState(n):r.pipe(It(i=>this.setState(n,i)))}fetchTransferState(){return Mt(this,null,function*(){let n=a=>a.split("/").filter(o=>o.trim()!=="")[0];yield new Promise(a=>setTimeout(a,0));let r=yield Tt(this.nextUrl),i=n(r);this.currentBaseUrl!==i&&(this.currentBaseUrl=i,this.nextUrl.pipe(jn(a=>n(a)===this.currentBaseUrl),Zt(a=>this.inlineOnly?this.readFromIndex(a):this.readFromJson(a)),ze(a=>(console.warn("Error while loading of parsing Scully state:",a),De({}))),It(a=>{this.stateBS.next(a)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(n){return Tt(this.http.get(oa(aa(n,"/data.json"))))}readFromIndex(n){return Tt(this.http.get(oa(aa(n,"/index.html")),{responseType:"text"})).then(r=>{let i=r.split($n)[1].split(Yn)[0];return JSON.parse(vs(i))})}}return t.\u0275fac=function(n){return new(n||t)(G(qe),G(Lt),G(te))},t.\u0275prov=He({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function oa(t){return t.startsWith("/")?t.slice(1):t}function hs(t){let e={"'":"_~q~",$:"_~o~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return t.replace(/[\$`'<>\/]/g,n=>e[n]).replace(/\\\"/g,"_~d~")}function vs(t){let e={"_~q~":"'","_~b~":"`","_~o~":"$","_~s~":"/","_~l~":"<","_~g~":">"};return t.replace(/_~d~/g,'\\"').replace(/_~[^]~/g,n=>e[n]).replace(/\n/g,"\\n").replace(/\r/g,"\\r")}var bs=(()=>{class t{constructor(n,r,i,a,o){this.zone=n,this.router=r,this.document=a,this.initialUrl=gs(window&&window.location&&window.location.pathname)||"",this.imState=new At({idle:!1,timeOut:5*1e3}),this.idle$=this.imState.pipe(Ue("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},$e,i);let l=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||Wn())&&(this.document.dispatchEvent(this.initApp),this.router.events.pipe(tt(c=>c instanceof ur&&c.urlAfterRedirects!==void 0),tt(c=>l?c.urlAfterRedirects!==this.initialUrl:!0),It(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&this.document.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}fireManualMyAppReadyEvent(){return Mt(this,null,function*(){return this.document.dispatchEvent(this.appReady)})}init(){return Tt(this.idle$)}zoneIdleCheck(){return Mt(this,null,function*(){if(Zone===void 0)return this.simpleTimeout();let n=Zone.current.get("TaskTrackingZone");if(n===void 0)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let r,i=0,a=Date.now(),o=()=>{if(clearTimeout(r),Date.now()-a>30*1e3){this.document.dispatchEvent(this.appTimeout);return}if(n.macroTasks.length>0&&n.macroTasks.find(s=>s.source.includes("XMLHttpRequest"))!==void 0||i<1){r=setTimeout(()=>{i+=1,o()},50);return}this.zone.run(()=>{setTimeout(()=>{this.document.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};o()})})}simpleTimeout(){return Mt(this,null,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(n=>setTimeout(n,this.imState.value.timeOut)),this.document.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(n){this.imState.next(Jt(Kt({},this.imState.value),{timeOut:n}))}setState(n,r){this.imState.next(Jt(Kt({},this.imState.value),{[n]:r}))}}return t.\u0275fac=function(n){return new(n||t)(G(ar),G(Lt),G(fa),G(qe),G(ds))},t.\u0275prov=He({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function gs(t){return t.endsWith("/")?t.slice(0,-1):t}var sa=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Ve({type:t}),t.\u0275inj=Be({}),t})(),ua=(()=>{class t{constructor(n){this.idle=n}static forRoot(n=$e){return n=Object.assign({},$e,n),{ngModule:t,providers:[{provide:fa,useValue:n}]}}}return t.\u0275fac=function(n){return new(n||t)(G(bs))},t.\u0275mod=Ve({type:t}),t.\u0275inj=Be({imports:[[sa,ee],sa]}),t})();function ys(t,e){if(t&1&&(k(0,"a",1),Xn(),k(1,"svg",2)(2,"g"),bt(3,"path",3),O()(),T(4," View Source "),O()),t&2){let n=e.ngIf;P("href",n,Zn)}}var ma=(()=>{let e=class{constructor(r,i){this.router=r,this.http=i,this.path$=this.router.events.pipe(Gn(ws),We(a=>a.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo$=Vn({route:this.routes$,path:this.path$}).pipe(We(({route:a,path:o})=>a.find(s=>s.path.startsWith(o))),qn(xs))}},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)(lt(Lt),lt(te))}})(),(()=>{e.\u0275cmp=Rt({type:e,selectors:[["app-show-source"]],standalone:!0,features:[Qt],decls:2,vars:3,consts:[["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(i,a){if(i&1&&(Qn(0,ys,5,1,"a",0),tr(1,"async")),i&2){let o;P("ngIf",(o=er(1,1,a.routeInfo$))==null?null:o.gitFolder)}},dependencies:[or,sr],styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{padding-top:8px;width:24px;height:24px}"]})})(),t})();function xs(t){if(t?.path){let e="https://samples.selias.dev",n=t.description||`Angular Sample page for ${t.path}
    sourcecode: ${t.gitFolder}
    demo: ${`${e}${t.path}`}`;Y("og:type","website"),Y("og:title",t.title),Y("og:description",n),Y("description",n),Y("og:image",`${e}${t.largeImage}`),Y("og:url",window.location.href),Y("twitter:title",t.title),Y("twitter:description",n),Y("twitter:card","summary_large_image"),Y("twitter:domain",e),Y("twitter:image",`${e}${t.largeImage}`),Y("twitter:url",window.location.href);let r=document.querySelector("head");if(r){let i=r.querySelector("title");if(i)i.textContent=t.title;else{let a=document.createElement("title");a.textContent=t.title,r.appendChild(a)}}}}function Y(t,e){let n=document.querySelector(`meta[property="${t}"]`);if(n)n.setAttribute("content",e);else{let r=document.createElement("meta");r.setAttribute("property",t),r.setAttribute("content",e),document.head.appendChild(r)}}function ws(t){return t instanceof ne}var Ss=["menuToggle"],_s=function(){return["home"]},Cs=function(){return["filterSamp"]},ks=function(){return["modalSamp"]},Es=function(){return["DirectiveSamp"]},Os=function(){return["mixinSamp"]},As=function(){return["htmlLoad"]},Ps=function(){return["requiredAttributes"]},Ts=function(){return["viewModel","user"]},Is=function(){return["viewModel","theGood"]},Ms=function(){return["viewModel","theBad"]},Rs=function(){return["complexAPI"]},Ls=function(){return["observableState"]},Ns=function(){return["dynhtml"]},pa=(()=>{let e=class{set _toggle(r){r&&!this.checked&&(this.checked=r.nativeElement)}constructor(r,i){this.elmRef=r,this.r=i,this.title="samples",window.ar=i}ngAfterContentInit(){let r=this.elmRef.nativeElement;r&&r.querySelectorAll("#menu a").forEach(i=>i.addEventListener("click",()=>{this.checked.checked=!1}))}},t=e;return(()=>{e.\u0275fac=function(i){return new(i||e)(lt(Ge),lt(mr))}})(),(()=>{e.\u0275cmp=Rt({type:e,selectors:[["app-root"]],viewQuery:function(i,a){if(i&1&&rr(Ss,7),i&2){let o;nr(o=ir())&&(a._toggle=o.first)}},standalone:!0,features:[Qt],decls:53,vars:26,consts:[["id","menuToggle"],["type","checkbox"],["menuToggle",""],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(i,a){i&1&&(k(0,"nav")(1,"div",0),bt(2,"input",1,2)(4,"span")(5,"span")(6,"span"),k(7,"ul",3)(8,"a",4)(9,"li"),T(10,"Home"),O()(),k(11,"a",4)(12,"li"),T(13,"Filter Sample"),O()(),k(14,"a",4)(15,"li"),T(16,"Modal Sample"),O()(),k(17,"a",4)(18,"li"),T(19,"Directive Sample"),O()(),k(20,"a",4)(21,"li"),T(22,"Mixin Sample"),O()(),k(23,"a",4)(24,"li"),T(25,"Html load"),O()(),k(26,"a",5)(27,"li"),T(28,"Required attributes"),O()(),k(29,"li"),T(30," Reactive viewmodel "),k(31,"ul")(32,"a",4)(33,"li"),T(34," User list "),O()(),k(35,"a",4)(36,"li"),T(37," The Good "),O()(),k(38,"a",4)(39,"li"),T(40," The bad "),O()()()(),k(41,"a",5)(42,"li"),T(43,"Complex API"),O()(),k(44,"a",5)(45,"li"),T(46,"Observable State"),O()(),k(47,"a",5)(48,"li"),T(49,"Dynamic HTML"),O()()()(),bt(50,"app-show-source"),O(),k(51,"div",6),bt(52,"router-outlet"),O()),i&2&&(L(8),P("routerLink",N(13,_s)),L(3),P("routerLink",N(14,Cs)),L(3),P("routerLink",N(15,ks)),L(3),P("routerLink",N(16,Es)),L(3),P("routerLink",N(17,Os)),L(3),P("routerLink",N(18,As)),L(3),P("routerLink",N(19,Ps)),L(6),P("routerLink",N(20,Ts)),L(3),P("routerLink",N(21,Is)),L(3),P("routerLink",N(22,Ms)),L(3),P("routerLink",N(23,Rs)),L(3),P("routerLink",N(24,Ls)),L(3),P("routerLink",N(25,Ns)))},dependencies:[hr,dr,ma,pr],styles:[`[_nghost-%COMP%] {
    display: grid;
    grid-template-rows: 40px 1fr ;
    grid-row-gap: 4px;
    min-height: 99vh;
  }

  #popup[_ngcontent-%COMP%] {
    display: none  -;
    margin: 0 3rem;
    border: 2px solid green;
  }

  #outlet[_ngcontent-%COMP%] {
    margin: 0 3rem;
  }

  a[_ngcontent-%COMP%] {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  a[_ngcontent-%COMP%]:hover {
    color: tomato;
  }

  a.active-link[_ngcontent-%COMP%] {
    color: darkblue;
  }

  #menuToggle[_ngcontent-%COMP%] {
    display: block;
    position: relative;
    top: 10px;
    left: 10px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; 
    z-index: 2; 

    -webkit-touch-callout: none;
  }

  
  #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    display: block;
    width: 24px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  
  #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%] {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  
  #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  
  #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  
  #menu[_ngcontent-%COMP%] {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 95px;
    min-height: 99vh;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    padding: 10px 0;
    font-size: 22px;
  }

  #menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    list-style-type: none;

  }

  
  #menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {
    transform: none;
  }`]})})(),t})();var da={production:!0};var ha=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-USLQ7Z7V.js").then(t=>t.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-G3CFVS4R.js").then(t=>t.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-QWBCPJQR.js").then(t=>t.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-CB4CYCV6.js").then(t=>t.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-B54VGG4Y.js").then(t=>t.RequiredAttributesComponent)},{path:"viewModel",loadChildren:()=>import("./view-model.routes-OKSARXN7.js").then(t=>t.routes)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-4YCNU7BV.js").then(t=>t.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-N5HMFUPR.js").then(t=>t.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-74IZ6Y2U.js").then(t=>t.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-OJ6LBHAR.js").then(t=>t.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-GEQDZJYH.js").then(t=>t.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-JRM4SHUB.js").then(t=>t.routes)},{path:"home",loadComponent:()=>import("./home.component-3LJYRCVY.js").then(t=>t.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-QFFKHWWS.js").then(t=>t.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-KHJYDK6Y.js").then(t=>t.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-LU5Z3YYI.js").then(t=>t.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-KSWIHS66.js").then(t=>t.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-VS7ZTIF3.js").then(t=>t.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-HL5CN7JA.js").then(t=>t.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-YQO2ZA7N.js").then(t=>t.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-3EWSLCXG.js").then(t=>t.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-RD754UPD.js").then(t=>t.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-PXR6LCES.js").then(t=>t.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-RTWP5DOP.js").then(t=>t.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-FD3KPYOW.js").then(t=>t.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-4FV5H7TH.js").then(t=>t.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-S5ZJVSNW.js").then(t=>t.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-HFASQ67H.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-IXWDHDUK.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-IXWDHDUK.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-T7BPCAEQ.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-ER47FDW6.js").then(t=>t.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-ZEKKIOTL.js").then(t=>t.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-JY7LXKSW.js").then(t=>t.ResizablePanelsComponent)},{path:"signalsForms",loadComponent:()=>import("./signals-form.component-VHLX5D46.js").then(t=>t.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-QGNMVVA4.js").then(t=>t.CardComponent)},{path:"**",redirectTo:"card"}];vi.add(ba.faPlay,va.faPause);bi.watch();da.production&&void 0;lr(pa,{providers:[Jn(cr,ee,ua),vr(ha)]}).catch(t=>console.error(t));
