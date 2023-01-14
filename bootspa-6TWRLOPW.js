import"./chunk-4TJ7YKPC.js";import{a as Mt,b as At}from"./chunk-5EMPD2D5.js";import{a as tn,b as en,d as nn,e as an,f as _t,g as rn,h as on,i as vt,j as sn,k as ln,l as Qt}from"./chunk-P3TXNOF4.js";import{d as Kt,m as Ke,n as Qe}from"./chunk-I27LS666.js";import{$a as We,$b as Je,B as De,C as H,D as Fe,Fb as _,Gb as Ge,Hb as Ve,Ka as Be,Nb as qe,Ob as Xe,P as $e,Qb as Ze,Ra as Jt,S as Xt,U as ze,Va as S,W as St,X as Ue,Xa as Z,Y as V,ba as Zt,bb as y,ca as q,cb as g,db as b,eb as at,f as Vt,ga as R,ja as ht,k as qt,ka as X,o as dt,p as pt,q as je,sa as Ye,sb as w,va as He}from"./chunk-CXFJOMNY.js";import{a as xt,b as Ct,c as Le,d as Re,h as mt}from"./chunk-G5KKTNWD.js";var ga=Le(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var ua="fas",fa="pause",ma=448,da=512,pa=[],ha="f04c",va="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z";O.definition={prefix:ua,iconName:fa,icon:[ma,da,pa,ha,va]};O.faPause=O.definition;O.prefix=ua;O.iconName=fa;O.width=ma;O.height=da;O.ligatures=pa;O.unicode=ha;O.svgPathData=va});var _a=Le(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});var ba="fas",ya="play",wa=448,ka=512,xa=[],Ca="f04b",Sa="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z";T.definition={prefix:ba,iconName:ya,icon:[wa,ka,xa,Ca,Sa]};T.faPlay=T.definition;T.prefix=ba;T.iconName=ya;T.width=wa;T.height=ka;T.ligatures=xa;T.unicode=Ca;T.svgPathData=Sa});function cn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(e),!0).forEach(function(a){Fa(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):cn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function It(t){return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},It(t)}function ja(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function un(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Da(t,n,e){return n&&un(t.prototype,n),e&&un(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fa(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function he(t,n){return za(t)||Ya(t,n)||Ln(t,n)||Ba()}function jt(t){return $a(t)||Ua(t)||Ln(t)||Ha()}function $a(t){if(Array.isArray(t))return re(t)}function za(t){if(Array.isArray(t))return t}function Ua(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ya(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Ln(t,n){if(t){if(typeof t=="string")return re(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return re(t,n)}}function re(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fn=function(){},ve={},Rn={},jn=null,Dn={mark:fn,measure:fn};try{typeof window<"u"&&(ve=window),typeof document<"u"&&(Rn=document),typeof MutationObserver<"u"&&(jn=MutationObserver),typeof performance<"u"&&(Dn=performance)}catch{}var Wa=ve.navigator||{},mn=Wa.userAgent,dn=mn===void 0?"":mn,W=ve,h=Rn,pn=jn,Et=Dn,Ui=!!W.document,z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Fn=~dn.indexOf("MSIE")||~dn.indexOf("Trident/"),D="___FONT_AWESOME___",ie=16,$n="fa",zn="svg-inline--fa",K="data-fa-i2svg",oe="data-fa-pseudo-element",Ga="data-fa-pseudo-element-pending",ge="data-prefix",be="data-icon",hn="fontawesome-i2svg",Va="async",qa=["HTML","HEAD","STYLE","SCRIPT"],Un=function(){try{return!0}catch{return!1}}(),ye={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Nt={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Yn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Xa={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Za=/fa[srltdbk\-\ ]/,Hn="fa-layers-text",Ja=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ka={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Bn=[1,2,3,4,5,6,7,8,9,10],Qa=Bn.concat([11,12,13,14,15,16,17,18,19,20]),tr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},er=[].concat(jt(Object.keys(Nt)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(Bn.map(function(t){return"".concat(t,"x")})).concat(Qa.map(function(t){return"w-".concat(t)})),Wn=W.FontAwesomeConfig||{};function nr(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ar(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&(vn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],vn.forEach(function(t){var n=he(t,2),e=n[0],a=n[1],r=ar(nr(e));r!=null&&(Wn[a]=r)}));var vn,rr={familyPrefix:$n,styleDefault:"solid",replacementClass:zn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},bt=c(c({},rr),Wn);bt.autoReplaceSvg||(bt.observeMutations=!1);var d={};Object.keys(bt).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){bt[t]=e,Ot.forEach(function(a){return a(d)})},get:function(){return bt[t]}})});W.FontAwesomeConfig=d;var Ot=[];function ir(t){return Ot.push(t),function(){Ot.splice(Ot.indexOf(t),1)}}var B=ie,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function or(t){if(!(!t||!z)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var sr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){for(var t=12,n="";t-- >0;)n+=sr[Math.random()*62|0];return n}function st(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function we(t){return t.classList?st(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lr(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Gn(t[e]),'" ')},"").trim()}function Dt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function ke(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function cr(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:m}}function ur(t){var n=t.transform,e=t.width,a=e===void 0?ie:e,r=t.height,i=r===void 0?ie:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Fn?l+="translate(".concat(n.x/B-a/2,"em, ").concat(n.y/B-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/B,"em), calc(-50% + ").concat(n.y/B,"em)) "):l+="translate(".concat(n.x/B,"em, ").concat(n.y/B,"em) "),l+="scale(".concat(n.size/B*(n.flipX?-1:1),", ").concat(n.size/B*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var fr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
    transition-delay: 0s;
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
}`;function Vn(){var t=$n,n=zn,e=d.familyPrefix,a=d.replacementClass,r=fr;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var gn=!1;function te(){d.autoAddCss&&!gn&&(or(Vn()),gn=!0)}var mr={mixout:function(){return{dom:{css:Vn,insertCss:te}}},hooks:function(){return{beforeDOMElementCreation:function(){te()},beforeI2svg:function(){te()}}}},F=W||{};F[D]||(F[D]={});F[D].styles||(F[D].styles={});F[D].hooks||(F[D].hooks={});F[D].shims||(F[D].shims=[]);var L=F[D],qn=[],dr=function t(){h.removeEventListener("DOMContentLoaded",t),Lt=1,qn.map(function(n){return n()})},Lt=!1;z&&(Lt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Lt||h.addEventListener("DOMContentLoaded",dr));function pr(t){z&&(Lt?setTimeout(t,0):qn.push(t))}function kt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Gn(t):"<".concat(n," ").concat(lr(a),">").concat(i.map(kt).join(""),"</").concat(n,">")}function bn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var hr=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},ee=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?hr(e,r):e,l,m,u;for(a===void 0?(l=1,u=n[i[0]]):(l=0,u=a);l<o;l++)m=i[l],u=s(u,n[m],m,n);return u};function vr(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function se(t){var n=vr(t);return n.length===1?n[0].toString(16):null}function gr(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function yn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function le(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=yn(n);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(t,yn(n)):L.styles[t]=c(c({},L.styles[t]||{}),i),t==="fas"&&le("fa",n)}var yt=L.styles,br=L.shims,yr=Object.values(Yn),xe=null,Xn={},Zn={},Jn={},Kn={},Qn={},wr=Object.keys(ye);function kr(t){return~er.indexOf(t)}function xr(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!kr(r)?r:null}var ta=function(){var n=function(i){return ee(yt,function(o,s,l){return o[l]=ee(s,i,{}),o},{})};Xn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Zn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Qn=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var e="far"in yt||d.autoFetchSvg,a=ee(br,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Jn=a.names,Kn=a.unicodes,xe=Ft(d.styleDefault)};ir(function(t){xe=Ft(t.styleDefault)});ta();function Ce(t,n){return(Xn[t]||{})[n]}function Cr(t,n){return(Zn[t]||{})[n]}function rt(t,n){return(Qn[t]||{})[n]}function ea(t){return Jn[t]||{prefix:null,iconName:null}}function Sr(t){var n=Kn[t],e=Ce("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function G(){return xe}var Se=function(){return{prefix:null,iconName:null,rest:[]}};function Ft(t){var n=ye[t],e=Nt[t]||Nt[n],a=t in L.styles?t:null;return e||a||null}function $t(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,i=t.reduce(function(o,s){var l=xr(d.familyPrefix,s);if(yt[s]?(s=yr.includes(s)?Xa[s]:s,r=s,o.prefix=s):wr.indexOf(s)>-1?(r=s,o.prefix=Ft(s)):l?o.iconName=l:s!==d.replacementClass&&o.rest.push(s),!a&&o.prefix&&o.iconName){var m=r==="fa"?ea(o.iconName):{},u=rt(o.prefix,o.iconName);m.prefix&&(r=null),o.iconName=m.iconName||u||o.iconName,o.prefix=m.prefix||o.prefix,o.prefix==="far"&&!yt.far&&yt.fas&&!d.autoFetchSvg&&(o.prefix="fas")}return o},Se());return(i.prefix==="fa"||r==="fa")&&(i.prefix=G()||"fas"),i}var _r=function(){function t(){ja(this,t),this.definitions={}}return Da(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),le(s,o[s]);var l=Yn[s];l&&le(l,o[s]),ta()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,m=o.icon,u=m[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(e[s][f]=m)}),e[s][l]=m}),e}}]),t}(),wn=[],it={},ot={},Mr=Object.keys(ot);function Ar(t,n){var e=n.mixoutsTo;return wn=t,it={},Object.keys(ot).forEach(function(a){Mr.indexOf(a)===-1&&delete ot[a]}),wn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){it[o]||(it[o]=[]),it[o].push(i[o])})}a.provides&&a.provides(ot)}),e}function ce(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=it[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=it[t]||[];r.forEach(function(i){i.apply(null,e)})}function $(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return ot[t]?ot[t].apply(null,n):void 0}function ue(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||G();if(n)return n=rt(e,n)||n,bn(na.definitions,e,n)||bn(L.styles,e,n)}var na=new _r,Er=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},Or={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Q("beforeI2svg",n),$("pseudoElements2svg",n),$("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,pr(function(){Pr({autoReplaceSvgRoot:e}),Q("watch",n)})}},Tr={icon:function(n){if(n===null)return null;if(It(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:rt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ft(n[0]);return{prefix:a,iconName:rt(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(Za))){var r=$t(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:rt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=G();return{prefix:i,iconName:rt(i,n)||n}}}},E={noAuto:Er,config:d,dom:Or,parse:Tr,library:na,findIconDefinition:ue,toHtml:kt},Pr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(L.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&E.dom.i2svg({node:a})};function zt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return kt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ir(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ke(o)&&e.found&&!a.found){var s=e.width,l=e.height,m={x:s/l/2,y:.5};r.style=Dt(c(c({},i),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Nr(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function _e(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,m=t.maskId,u=t.titleId,f=t.extra,p=t.watchable,v=p===void 0?!1:p,x=a.found?a:e,I=x.width,N=x.height,M=r==="fak",C=[d.replacementClass,i?"".concat(d.familyPrefix,"-").concat(i):""].filter(function(nt){return f.classes.indexOf(nt)===-1}).filter(function(nt){return nt!==""||!!nt}).concat(f.classes).join(" "),k={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})},U=M&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};v&&(k.attributes[K]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||wt())},children:[l]}),delete k.attributes.title);var A=c(c({},k),{},{prefix:r,iconName:i,main:e,mask:a,maskId:m,transform:o,symbol:s,styles:c(c({},U),f.styles)}),Y=a.found&&e.found?$("generateAbstractMask",A)||{children:[],attributes:{}}:$("generateAbstractIcon",A)||{children:[],attributes:{}},ut=Y.children,ft=Y.attributes;return A.children=ut,A.attributes=ft,s?Nr(A):Ir(A)}function kn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,m=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(m[K]="");var u=c({},o.styles);ke(r)&&(u.transform=ur({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var f=Dt(u);f.length>0&&(m.style=f);var p=[];return p.push({tag:"span",attributes:m,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Lr(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Dt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var ne=L.styles;function fe(t){var n=t[0],e=t[1],a=t.slice(4),r=he(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Rr={found:!1,width:512,height:512};function jr(t,n){!Un&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function me(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=G()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(e==="fa"){var o=ea(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&ne[n]&&ne[n][t]){var s=ne[n][t];return a(fe(s))}jr(t,n),a(c(c({},Rr),{},{icon:d.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}var xn=function(){},de=d.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:xn,measure:xn},gt='FA "6.0.0"',Dr=function(n){return de.mark("".concat(gt," ").concat(n," begins")),function(){return aa(n)}},aa=function(n){de.mark("".concat(gt," ").concat(n," ends")),de.measure("".concat(gt," ").concat(n),"".concat(gt," ").concat(n," begins"),"".concat(gt," ").concat(n," ends"))},Me={begin:Dr,end:aa},Tt=function(){};function Cn(t){var n=t.getAttribute?t.getAttribute(K):null;return typeof n=="string"}function Fr(t){var n=t.getAttribute?t.getAttribute(ge):null,e=t.getAttribute?t.getAttribute(be):null;return n&&e}function $r(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function zr(){if(d.autoReplaceSvg===!0)return Pt.replace;var t=Pt[d.autoReplaceSvg];return t||Pt.replace}function Ur(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Yr(t){return h.createElement(t)}function ra(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ur:Yr:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ra(o,{ceFn:a}))}),r}function Hr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Pt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ra(r),e)}),e.getAttribute(K)===null&&d.keepOriginalSource){var a=h.createComment(Hr(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~we(e).indexOf(d.replacementClass))return Pt.replace(n);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return kt(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function Sn(t){t()}function ia(t,n){var e=typeof n=="function"?n:Tt;if(t.length===0)e();else{var a=Sn;d.mutateApproach===Va&&(a=W.requestAnimationFrame||Sn),a(function(){var r=zr(),i=Me.begin("mutate");t.map(r),i(),e()})}}var Ae=!1;function oa(){Ae=!0}function pe(){Ae=!1}var Rt=null;function _n(t){if(pn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?Tt:n,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,l=s===void 0?h:s;Rt=new pn(function(m){if(!Ae){var u=G();st(m).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Cn(f.addedNodes[0])&&(d.searchPseudoElements&&o(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&d.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Cn(f.target)&&~tr.indexOf(f.attributeName))if(f.attributeName==="class"&&Fr(f.target)){var p=$t(we(f.target)),v=p.prefix,x=p.iconName;f.target.setAttribute(ge,v||u),x&&f.target.setAttribute(be,x)}else $r(f.target)&&r(f.target)})}}),z&&Rt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Br(){Rt&&Rt.disconnect()}function Wr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Gr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=$t(we(t));return r.prefix||(r.prefix=G()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Cr(r.prefix,t.innerText)||Ce(r.prefix,se(t.innerText))),r}function Vr(t){var n=st(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||wt()):(n["aria-hidden"]="true",n.focusable="false")),n}function qr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Gr(t),a=e.iconName,r=e.prefix,i=e.rest,o=Vr(t),s=ce("parseNodeAttributes",{},t),l=n.styleParser?Wr(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Xr=L.styles;function sa(t){var n=d.autoReplaceSvg==="nest"?Mn(t,{styleParser:!1}):Mn(t);return~n.extra.classes.indexOf(Hn)?$("generateLayersText",t,n):$("generateSvgReplacementMutation",t,n)}function An(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var e=h.documentElement.classList,a=function(f){return e.add("".concat(hn,"-").concat(f))},r=function(f){return e.remove("".concat(hn,"-").concat(f))},i=d.autoFetchSvg?Object.keys(ye):Object.keys(Xr),o=[".".concat(Hn,":not([").concat(K,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=st(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Me.begin("onTree"),m=s.reduce(function(u,f){try{var p=sa(f);p&&u.push(p)}catch(v){Un||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,f){Promise.all(m).then(function(p){ia(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),u()})}).catch(function(p){l(),f(p)})})}function Zr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sa(t).then(function(e){e&&ia([e],n)})}function Jr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:ue(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:ue(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Kr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?j:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,m=e.maskId,u=m===void 0?null:m,f=e.title,p=f===void 0?null:f,v=e.titleId,x=v===void 0?null:v,I=e.classes,N=I===void 0?[]:I,M=e.attributes,C=M===void 0?{}:M,k=e.styles,U=k===void 0?{}:k;if(n){var A=n.prefix,Y=n.iconName,ut=n.icon;return zt(c({type:"icon"},n),function(){return Q("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(p?C["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||wt()):(C["aria-hidden"]="true",C.focusable="false")),_e({icons:{main:fe(ut),mask:l?fe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Y,transform:c(c({},j),r),symbol:o,title:p,maskId:u,titleId:x,extra:{attributes:C,styles:U,classes:N}})})}},Qr={mixout:function(){return{icon:Jr(Kr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=An,e.nodeCallback=Zr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return An(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,m=a.symbol,u=a.mask,f=a.maskId,p=a.extra;return new Promise(function(v,x){Promise.all([me(r,s),u.iconName?me(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var N=he(I,2),M=N[0],C=N[1];v([e,_e({icons:{main:M,mask:C},prefix:s,iconName:r,transform:l,symbol:m,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,l=Dt(s);l.length>0&&(r.style=l);var m;return ke(o)&&(m=$("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(m||i.icon),{children:a,attributes:r}}}},ti={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(jt(i)).join(" ")},children:o}]})}}}},ei={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,m=l===void 0?{}:l,u=a.styles,f=u===void 0?{}:u;return zt({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),Lr({content:e.toString(),title:i,extra:{attributes:m,styles:f,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(jt(s))}})})}}}},ni={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,m=l===void 0?[]:l,u=a.attributes,f=u===void 0?{}:u,p=a.styles,v=p===void 0?{}:p;return zt({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),kn({content:e,transform:c(c({},j),i),title:s,extra:{attributes:f,styles:v,classes:["".concat(d.familyPrefix,"-layers-text")].concat(jt(m))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Fn){var m=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/m,l=u.height/m}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,kn({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},ai=new RegExp('"',"ug"),En=[1105920,1112319];function ri(t){var n=t.replace(ai,""),e=gr(n,0),a=e>=En[0]&&e<=En[1],r=n.length===2?n[0]===n[1]:!1;return{value:se(r?n[0]:n),isSecondary:a||r}}function On(t,n){var e="".concat(Ga).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=st(t.children),o=i.filter(function(Y){return Y.getAttribute(oe)===n})[0],s=W.getComputedStyle(t,n),l=s.getPropertyValue("font-family").match(Ja),m=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Nt[l[2].toLowerCase()]:Ka[m],v=ri(f),x=v.value,I=v.isSecondary,N=l[0].startsWith("FontAwesome"),M=Ce(p,x),C=M;if(N){var k=Sr(x);k.iconName&&k.prefix&&(M=k.iconName,p=k.prefix)}if(M&&!I&&(!o||o.getAttribute(ge)!==p||o.getAttribute(be)!==C)){t.setAttribute(e,C),o&&t.removeChild(o);var U=qr(),A=U.extra;A.attributes[oe]=n,me(M,p).then(function(Y){var ut=_e(c(c({},U),{},{icons:{main:Y,mask:Se()},prefix:p,iconName:C,extra:A,watchable:!0})),ft=h.createElement("svg");n==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=ut.map(function(nt){return kt(nt)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ii(t){return Promise.all([On(t,"::before"),On(t,"::after")])}function oi(t){return t.parentNode!==document.head&&!~qa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(oe)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tn(t){if(z)return new Promise(function(n,e){var a=st(t.querySelectorAll("*")).filter(oi).map(ii),r=Me.begin("searchPseudoElements");oa(),Promise.all(a).then(function(){r(),pe(),n()}).catch(function(){r(),pe(),e()})})}var si={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Tn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;d.searchPseudoElements&&Tn(r)}}},Pn=!1,li={mixout:function(){return{dom:{unwatch:function(){oa(),Pn=!0}}}},hooks:function(){return{bootstrap:function(){_n(ce("mutationObserverCallbacks",{}))},noAuto:function(){Br()},watch:function(e){var a=e.observeMutationsRoot;Pn?pe():_n(ce("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},In=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ci={mixout:function(){return{parse:{transform:function(e){return In(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=In(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(m," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:f,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),v.path)}]}]}}}},ae={x:0,y:0,width:"100%",height:"100%"};function Nn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function ui(t){return t.tag==="g"?t.children:[t]}var fi={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?$t(r.split(" ").map(function(o){return o.trim()})):Se();return i.prefix||(i.prefix=G()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,m=i.width,u=i.icon,f=o.width,p=o.icon,v=cr({transform:l,containerWidth:f,iconWidth:m}),x={tag:"rect",attributes:c(c({},ae),{},{fill:"white"})},I=u.children?{children:u.children.map(Nn)}:{},N={tag:"g",attributes:c({},v.inner),children:[Nn(c({tag:u.tag,attributes:c(c({},u.attributes),v.path)},I))]},M={tag:"g",attributes:c({},v.outer),children:[N]},C="mask-".concat(s||wt()),k="clip-".concat(s||wt()),U={tag:"mask",attributes:c(c({},ae),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,M]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:ui(p)},U]};return a.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(C,")")},ae)}),{children:a,attributes:r}}}},mi={provides:function(n){var e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},di={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},pi=[mr,Qr,ti,ei,ni,si,li,ci,fi,mi,di];Ar(pi,{mixoutsTo:E});var Yi=E.noAuto,Hi=E.config,la=E.library,ca=E.dom,Bi=E.parse,Wi=E.findIconDefinition,Gi=E.toHtml,Vi=E.icon,qi=E.layer,Xi=E.text,Zi=E.counter;var La=Re(ga(),1),Ra=Re(_a(),1);var Ma=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadChildren:()=>import("./filter-samp.module-45LPULEY.js").then(t=>t.FilterSampModule)},{path:"modalSamp",loadChildren:()=>import("./modal-samp.module-QRHMSVVT.js").then(t=>t.ModalSampModule)},{path:"mixinSamp",loadChildren:()=>import("./mixins.module-CETT6LDP.js").then(t=>t.MixinsModule)},{path:"htmlLoad",loadChildren:()=>import("./html-load.module-ZL4K26EA.js").then(t=>t.HtmlLoadModule)},{path:"requiredAttributes",loadChildren:()=>import("./required-attributes.module-YQS3Q2HD.js").then(t=>t.RequiredAttributesModule)},{path:"viewModel",loadChildren:()=>import("./view-model.module-FLSRP3FW.js").then(t=>t.ViewModelModule)},{path:"complexAPI",loadChildren:()=>import("./complex-api.module-CDDBYATZ.js").then(t=>t.ComplexAPIModule)},{path:"pokeAPI",loadChildren:()=>import("./poke-api.module-EKE6TMA3.js").then(t=>t.PokeApiModule)},{path:"observableState",loadChildren:()=>import("./observable-state.module-A3CP4W4K.js").then(t=>t.ObservableStateModule)},{path:"DirectiveSamp",loadChildren:()=>import("./directives.module-L65ELW6G.js").then(t=>t.DirectivesModule)},{path:"svg",loadChildren:()=>import("./svg-calendar.module-WKPQZIGQ.js").then(t=>t.SvgCalendarModule)},{path:"testOb",loadChildren:()=>import("./test.module-IFVG4K77.js").then(t=>t.TestModule)},{path:"home",loadComponent:()=>import("./home.component-4OKMDETM.js").then(t=>t.HomeComponent)},{path:"dynhtml",loadChildren:()=>import("./dynamichtml.module-HMT6S3N7.js").then(t=>t.DynamichtmlModule)},{path:"snow",loadChildren:()=>import("./snow.module-KMQIC3IO.js").then(t=>t.SnowModule)},{path:"tumblr",loadChildren:()=>import("./tumblr.module-HVHTMUL5.js").then(t=>t.TumblrModule)},{path:"bigData",loadChildren:()=>import("./big-data.module-7434UERT.js").then(t=>t.BigDataModule)},{path:"svgTest",loadChildren:()=>import("./svg-test.module-LNWTQ7TC.js").then(t=>t.SvgTestModule)},{path:"pannel",loadChildren:()=>import("./pannel-stuff.module-TD7LDX3S.js").then(t=>t.PannelStuffModule)},{path:"clock",loadChildren:()=>import("./analog-clock.module-6DP46PFO.js").then(t=>t.AnalogClockModule)},{path:"gridThings",loadChildren:()=>import("./gridthings.module-S7253P62.js").then(t=>t.GridthingsModule)},{path:"bintree",loadChildren:()=>import("./bintree.module-AXOVLMJJ.js").then(t=>t.BintreeModule)},{path:"localState",loadChildren:()=>import("./local-state.module-IDEWBLV6.js").then(t=>t.LocalStateModule)},{path:"lazyComponents",loadChildren:()=>import("./lazy-component.module-JORBPWZV.js").then(t=>t.LazyComponentModule)},{path:"svgTimer",loadChildren:()=>import("./svg-timer.module-WJFO5MAD.js").then(t=>t.SvgTimerModule)},{path:"svgClock",loadChildren:()=>import("./svg-clock.module-U7IN2BXD.js").then(t=>t.SvgClockModule)},{path:"dynForm",loadChildren:()=>import("./dyn-form-routing-ER27QVOA.js").then(t=>t.routes)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-IBDOJ5AK.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-GUWQ3KZB.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-GUWQ3KZB.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-IWTD2IUP.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-S3YKJXXS.js").then(t=>t.GridCalenderComponent)},{path:"**",redirectTo:"gridCalender"}];var tt=class{},Ut=tt;(()=>{tt.\u0275fac=function(e){return new(e||tt)}})(),(()=>{tt.\u0275mod=X({type:tt})})(),(()=>{tt.\u0275inj=q({imports:[Qt.forRoot(Ma,{}),Qt]})})();function gi(t,n){if(t&1&&(g(0,"a",1),Ye(),g(1,"svg",2)(2,"g"),at(3,"path",3),b()(),w(4," View Source "),b()),t&2){let e=n.ngIf;y("href",e,Be)}}var lt=class{constructor(n,e){this.router=n,this.http=e,this.path$=this.router.events.pipe(H(yi),pt(a=>a.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo$=je({route:this.routes$,path:this.path$}).pipe(pt(({route:a,path:r})=>a.find(i=>i.path.startsWith(r))),V(bi))}},Ht=lt;(()=>{lt.\u0275fac=function(e){return new(e||lt)(Z(vt),Z(Mt))}})(),(()=>{lt.\u0275cmp=ht({type:lt,selectors:[["app-show-source"]],decls:2,vars:3,consts:[["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(e,a){if(e&1&&(We(0,gi,5,1,"a",0),Ge(1,"async")),e&2){let r;y("ngIf",(r=Ve(1,1,a.routeInfo$))==null?null:r.gitFolder)}},dependencies:[Ke,Qe],styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{padding-top:8px;width:24px;height:24px}"]})})();function bi(t){if(t?.path){let n="https://samples.selias.dev",e=t.description||`Angular Sample page for ${t.path}
    sourcecode: ${t.gitFolder}
    demo: ${`${n}${t.path}`}`;P("og:type","website"),P("og:title",t.title),P("og:description",e),P("description",e),P("og:image",`${n}${t.largeImage}`),P("og:url",window.location.href),P("twitter:title",t.title),P("twitter:description",e),P("twitter:card","summary_large_image"),P("twitter:domain",n),P("twitter:image",`${n}${t.largeImage}`),P("twitter:url",window.location.href);let a=document.querySelector("head");if(a){let r=a.querySelector("title");if(r)r.textContent=t.title;else{let i=document.createElement("title");i.textContent=t.title,a.appendChild(i)}}}}function P(t,n){let e=document.querySelector(`meta[property="${t}"]`);if(e)e.setAttribute("content",n);else{let a=document.createElement("meta");a.setAttribute("property",t),a.setAttribute("content",n),document.head.appendChild(a)}}function yi(t){return t instanceof _t}var ki=["menuToggle"],xi=function(){return["home"]},Ci=function(){return["filterSamp"]},Si=function(){return["modalSamp"]},_i=function(){return["DirectiveSamp"]},Mi=function(){return["mixinSamp"]},Ai=function(){return["htmlLoad"]},Ei=function(){return["requiredAttributes"]},Oi=function(){return["viewModel","user"]},Ti=function(){return["viewModel","theGood"]},Pi=function(){return["viewModel","theBad"]},Ii=function(){return["complexAPI"]},Ni=function(){return["observableState"]},Li=function(){return["dynhtml"]},ct=class{constructor(n,e){this.elmRef=n,this.r=e,this.title="samples",window.ar=e}set _toggle(n){n&&!this.checked&&(this.checked=n.nativeElement)}ngAfterContentInit(){let n=this.elmRef.nativeElement;n&&n.querySelectorAll("#menu a").forEach(e=>e.addEventListener("click",()=>{this.checked.checked=!1}))}},Bt=ct;(()=>{ct.\u0275fac=function(e){return new(e||ct)(Z(Jt),Z(rn))}})(),(()=>{ct.\u0275cmp=ht({type:ct,selectors:[["app-root"]],viewQuery:function(e,a){if(e&1&&Xe(ki,7),e&2){let r;qe(r=Ze())&&(a._toggle=r.first)}},decls:53,vars:26,consts:[["id","menuToggle"],["type","checkbox"],["menuToggle",""],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(e,a){e&1&&(g(0,"nav")(1,"div",0),at(2,"input",1,2)(4,"span")(5,"span")(6,"span"),g(7,"ul",3)(8,"a",4)(9,"li"),w(10,"Home"),b()(),g(11,"a",4)(12,"li"),w(13,"Filter Sample"),b()(),g(14,"a",4)(15,"li"),w(16,"Modal Sample"),b()(),g(17,"a",4)(18,"li"),w(19,"Directive Sample"),b()(),g(20,"a",4)(21,"li"),w(22,"Mixin Sample"),b()(),g(23,"a",4)(24,"li"),w(25,"Html load"),b()(),g(26,"a",5)(27,"li"),w(28,"Required attributes"),b()(),g(29,"li"),w(30," Reactive viewmodel "),g(31,"ul")(32,"a",4)(33,"li"),w(34," User list "),b()(),g(35,"a",4)(36,"li"),w(37," The Good "),b()(),g(38,"a",4)(39,"li"),w(40," The bad "),b()()()(),g(41,"a",5)(42,"li"),w(43,"Complex API"),b()(),g(44,"a",5)(45,"li"),w(46,"Observable State"),b()(),g(47,"a",5)(48,"li"),w(49,"Dynamic HTML"),b()()()(),at(50,"app-show-source"),b(),g(51,"div",6),at(52,"router-outlet"),b()),e&2&&(S(8),y("routerLink",_(13,xi)),S(3),y("routerLink",_(14,Ci)),S(3),y("routerLink",_(15,Si)),S(3),y("routerLink",_(16,_i)),S(3),y("routerLink",_(17,Mi)),S(3),y("routerLink",_(18,Ai)),S(3),y("routerLink",_(19,Ei)),S(6),y("routerLink",_(20,Oi)),S(3),y("routerLink",_(21,Ti)),S(3),y("routerLink",_(22,Pi)),S(3),y("routerLink",_(23,Ii)),S(3),y("routerLink",_(24,Ni)),S(3),y("routerLink",_(25,Li)))},dependencies:[on,sn,ln,Ht],styles:[`[_nghost-%COMP%] {
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
  }`]})})();var Wt={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},Pa=new He("scullyLibConfig",{factory:()=>Wt}),Ee=t=>(t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t),Ne=()=>window&&window.ScullyIO==="running",Oe=()=>window&&window.ScullyIO==="generated";function Ea(t,n){return t=t??"",t.endsWith("/")&&n.startsWith("/")?`${t}${n.substr(1)}`:!t.endsWith("/")&&!n.startsWith("/")?`${t}/${n}`:`${t}${n}`}var Te="ScullyIO-transfer-state",Pe="/** ___SCULLY_STATE_START___ */",Ie="/** ___SCULLY_STATE_END___ */",Ri="__done__with__Initial__navigation__",ji=(()=>{class t{constructor(e,a,r){this.document=e,this.router=a,this.http=r,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new Vt({}),this.state$=this.stateBS.pipe(H(i=>i!==void 0)),this.nextUrl=this.router.events.pipe(H(i=>i instanceof nn),St(i=>Ee(this.initialUrl)===Ee(i.url)?(this.initialUrl=Ri,De):qt(i)),V(()=>this.stateBS.next(void 0)),St(i=>this.router.events.pipe(H(o=>o instanceof _t&&o.url===i.url),$e())),pt(i=>Ee(i.urlAfterRedirects||i.url)),ze(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(Ne()){this.injectScript();let e=window["ScullyIO-exposed"]||{};e.transferState&&(this.stateBS.next(e.transferState),this.saveState(e.transferState))}else this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl=this.initialUrl!=="/"&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,Oe()&&this.stateBS.next(window&&window[Te]||{})}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",Te);let e=this.document.body.lastChild;for(;e.previousSibling.nodeName==="SCRIPT";)e=e.previousSibling;this.document.body.insertBefore(this.script,e)}getState(e){return this.fetchTransferState(),this.state$.pipe(Xt(e))}stateHasKey(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)}stateKeyHasValue(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)&&this.stateBS.value[e]!=null}setState(e,a){let r=Ct(xt({},this.stateBS.value),{[e]:a});this.stateBS.next(r),this.saveState(r)}saveState(e){Ne()&&(this.script.textContent=`{window['${Te}']=_u(\`${Pe}${Di(JSON.stringify(e))}${Ie}\`);function _u(t){t=t.split('${Pe}')[1].split('${Ie}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`)}setupStartNavMonitoring(){Oe()&&this.nextUrl.subscribe()}useScullyTransferState(e,a){return Oe()?this.getState(e):a.pipe(V(r=>this.setState(e,r)))}fetchTransferState(){return mt(this,null,function*(){let e=i=>i.split("/").filter(o=>o.trim()!=="")[0];yield new Promise(i=>setTimeout(i,0));let a=yield dt(this.nextUrl),r=e(a);this.currentBaseUrl!==r&&(this.currentBaseUrl=r,this.nextUrl.pipe(Ue(i=>e(i)===this.currentBaseUrl),St(i=>this.inlineOnly?this.readFromIndex(i):this.readFromJson(i)),Fe(i=>(console.warn("Error while loading of parsing Scully state:",i),qt({}))),V(i=>{this.stateBS.next(i)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(e){return dt(this.http.get(Oa(Ea(e,"/data.json"))))}readFromIndex(e){return dt(this.http.get(Oa(Ea(e,"/index.html")),{responseType:"text"})).then(a=>{let r=a.split(Pe)[1].split(Ie)[0];return JSON.parse(Fi(r))})}}return t.\u0275fac=function(e){return new(e||t)(R(Kt),R(vt),R(Mt))},t.\u0275prov=Zt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Oa(t){return t.startsWith("/")?t.slice(1):t}function Di(t){let n={"'":"_~q~",$:"_~o~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return t.replace(/[\$`'<>\/]/g,e=>n[e]).replace(/\\\"/g,"_~d~")}function Fi(t){let n={"_~q~":"'","_~b~":"`","_~o~":"$","_~s~":"/","_~l~":"<","_~g~":">"};return t.replace(/_~d~/g,'\\"').replace(/_~[^]~/g,e=>n[e]).replace(/\n/g,"\\n").replace(/\r/g,"\\r")}var $i=(()=>{class t{constructor(e,a,r,i,o){this.zone=e,this.router=a,this.document=i,this.initialUrl=zi(window&&window.location&&window.location.pathname)||"",this.imState=new Vt({idle:!1,timeOut:5*1e3}),this.idle$=this.imState.pipe(Xt("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},Wt,r);let l=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||Ne())&&(this.document.dispatchEvent(this.initApp),this.router.events.pipe(H(m=>m instanceof an&&m.urlAfterRedirects!==void 0),H(m=>l?m.urlAfterRedirects!==this.initialUrl:!0),V(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&this.document.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}fireManualMyAppReadyEvent(){return mt(this,null,function*(){return this.document.dispatchEvent(this.appReady)})}init(){return dt(this.idle$)}zoneIdleCheck(){return mt(this,null,function*(){if(Zone===void 0)return this.simpleTimeout();let e=Zone.current.get("TaskTrackingZone");if(e===void 0)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let a,r=0,i=Date.now(),o=()=>{if(clearTimeout(a),Date.now()-i>30*1e3){this.document.dispatchEvent(this.appTimeout);return}if(e.macroTasks.length>0&&e.macroTasks.find(s=>s.source.includes("XMLHttpRequest"))!==void 0||r<1){a=setTimeout(()=>{r+=1,o()},50);return}this.zone.run(()=>{setTimeout(()=>{this.document.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};o()})})}simpleTimeout(){return mt(this,null,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(e=>setTimeout(e,this.imState.value.timeOut)),this.document.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(e){this.imState.next(Ct(xt({},this.imState.value),{timeOut:e}))}setState(e,a){this.imState.next(Ct(xt({},this.imState.value),{[e]:a}))}}return t.\u0275fac=function(e){return new(e||t)(R(Je),R(vt),R(Pa),R(Kt),R(ji))},t.\u0275prov=Zt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function zi(t){return t.endsWith("/")?t.slice(0,-1):t}var Ta=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=X({type:t}),t.\u0275inj=q({}),t})(),Ia=(()=>{class t{constructor(e){this.idle=e}static forRoot(e=Wt){return e=Object.assign({},Wt,e),{ngModule:t,providers:[{provide:Pa,useValue:e}]}}}return t.\u0275fac=function(e){return new(e||t)(R($i))},t.\u0275mod=X({type:t}),t.\u0275inj=q({imports:[[Ta,At],Ta]}),t})();var et=class{},Gt=et;(()=>{et.\u0275fac=function(e){return new(e||et)}})(),(()=>{et.\u0275mod=X({type:et,bootstrap:[Bt]})})(),(()=>{et.\u0275inj=q({imports:[en,Ut,At,Ia]})})();var Na={production:!0};la.add(Ra.faPlay,La.faPause);ca.watch();Na.production&&void 0;tn().bootstrapModule(Gt).catch(t=>console.error(t));
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.es.js:
  (*!
   * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2022 Fonticons, Inc.
   *)
*/
