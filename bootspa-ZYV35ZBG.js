import{a as Et,b as Ot}from"./chunk-OGGYRCFZ.js";import{a as nn,b as an,d as rn,e as on,f as At,g as sn,h as ln,i as gt,j as cn,k as un,l as ee}from"./chunk-XXMNHACE.js";import{d as te,m as tn,n as en}from"./chunk-EG23FQ2C.js";import{$a as Ve,$b as Qe,B as $e,C as H,D as ze,Fb as _,Gb as qe,Hb as Xe,Ka as Ge,Nb as Ze,Ob as Je,P as Ue,Qb as Ke,Ra as Qt,S as Jt,U as Ye,Va as C,W as Mt,X as He,Xa as J,Y as V,ba as Kt,bb as w,ca as q,cb as h,db as g,eb as rt,f as Xt,ga as R,ja as X,k as Zt,ka as Z,o as ht,p as vt,q as Fe,sa as Be,sb as v,va as We}from"./chunk-IYW2E5HB.js";import{a as Ct,b as _t,c as De,d as je,h as pt}from"./chunk-G5KKTNWD.js";var ya=De(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var ma="fas",da="pause",pa=448,ha=512,va=[],ga="f04c",ba="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z";O.definition={prefix:ma,iconName:da,icon:[pa,ha,va,ga,ba]};O.faPause=O.definition;O.prefix=ma;O.iconName=da;O.width=pa;O.height=ha;O.ligatures=va;O.unicode=ga;O.svgPathData=ba});var Aa=De(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});var wa="fas",ka="play",xa=448,Sa=512,Ca=[],_a="f04b",Ma="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z";T.definition={prefix:wa,iconName:ka,icon:[xa,Sa,Ca,_a,Ma]};T.faPlay=T.definition;T.prefix=wa;T.iconName=ka;T.width=xa;T.height=Sa;T.ligatures=Ca;T.unicode=_a;T.svgPathData=Ma});function fn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?fn(Object(e),!0).forEach(function(a){$a(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):fn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Lt(t){return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Lt(t)}function ja(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function mn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Fa(t,n,e){return n&&mn(t.prototype,n),e&&mn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function $a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ge(t,n){return Ua(t)||Ha(t,n)||Dn(t,n)||Wa()}function Ft(t){return za(t)||Ya(t)||Dn(t)||Ba()}function za(t){if(Array.isArray(t))return oe(t)}function Ua(t){if(Array.isArray(t))return t}function Ya(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ha(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Dn(t,n){if(!!t){if(typeof t=="string")return oe(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return oe(t,n)}}function oe(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ba(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dn=function(){},be={},jn={},Fn=null,$n={mark:dn,measure:dn};try{typeof window<"u"&&(be=window),typeof document<"u"&&(jn=document),typeof MutationObserver<"u"&&(Fn=MutationObserver),typeof performance<"u"&&($n=performance)}catch{}var Ga=be.navigator||{},pn=Ga.userAgent,hn=pn===void 0?"":pn,W=be,b=jn,vn=Fn,Tt=$n,Hi=!!W.document,z=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",zn=~hn.indexOf("MSIE")||~hn.indexOf("Trident/"),j="___FONT_AWESOME___",se=16,Un="fa",Yn="svg-inline--fa",Q="data-fa-i2svg",le="data-fa-pseudo-element",Va="data-fa-pseudo-element-pending",ye="data-prefix",we="data-icon",gn="fontawesome-i2svg",qa="async",Xa=["HTML","HEAD","STYLE","SCRIPT"],Hn=function(){try{return!0}catch{return!1}}(),ke={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Rt={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Bn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Za={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ja=/fa[srltdbk\-\ ]/,Wn="fa-layers-text",Ka=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Qa={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Gn=[1,2,3,4,5,6,7,8,9,10],tr=Gn.concat([11,12,13,14,15,16,17,18,19,20]),er=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nr=[].concat(Ft(Object.keys(Rt)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(Gn.map(function(t){return"".concat(t,"x")})).concat(tr.map(function(t){return"w-".concat(t)})),Vn=W.FontAwesomeConfig||{};function ar(t){var n=b.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function rr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}b&&typeof b.querySelector=="function"&&(bn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],bn.forEach(function(t){var n=ge(t,2),e=n[0],a=n[1],r=rr(ar(e));r!=null&&(Vn[a]=r)}));var bn,ir={familyPrefix:Un,styleDefault:"solid",replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},yt=c(c({},ir),Vn);yt.autoReplaceSvg||(yt.observeMutations=!1);var d={};Object.keys(yt).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){yt[t]=e,Pt.forEach(function(a){return a(d)})},get:function(){return yt[t]}})});W.FontAwesomeConfig=d;var Pt=[];function or(t){return Pt.push(t),function(){Pt.splice(Pt.indexOf(t),1)}}var B=se,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sr(t){if(!(!t||!z)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=b.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return b.head.insertBefore(n,a),t}}var lr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,n="";t-- >0;)n+=lr[Math.random()*62|0];return n}function lt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function xe(t){return t.classList?lt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function qn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cr(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(qn(t[e]),'" ')},"").trim()}function $t(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Se(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function ur(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:m}}function fr(t){var n=t.transform,e=t.width,a=e===void 0?se:e,r=t.height,i=r===void 0?se:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&zn?l+="translate(".concat(n.x/B-a/2,"em, ").concat(n.y/B-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/B,"em), calc(-50% + ").concat(n.y/B,"em)) "):l+="translate(".concat(n.x/B,"em, ").concat(n.y/B,"em) "),l+="scale(".concat(n.size/B*(n.flipX?-1:1),", ").concat(n.size/B*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var mr=`:root, :host {
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
}`;function Xn(){var t=Un,n=Yn,e=d.familyPrefix,a=d.replacementClass,r=mr;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var yn=!1;function ne(){d.autoAddCss&&!yn&&(sr(Xn()),yn=!0)}var dr={mixout:function(){return{dom:{css:Xn,insertCss:ne}}},hooks:function(){return{beforeDOMElementCreation:function(){ne()},beforeI2svg:function(){ne()}}}},F=W||{};F[j]||(F[j]={});F[j].styles||(F[j].styles={});F[j].hooks||(F[j].hooks={});F[j].shims||(F[j].shims=[]);var L=F[j],Zn=[],pr=function t(){b.removeEventListener("DOMContentLoaded",t),Dt=1,Zn.map(function(n){return n()})},Dt=!1;z&&(Dt=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),Dt||b.addEventListener("DOMContentLoaded",pr));function hr(t){!z||(Dt?setTimeout(t,0):Zn.push(t))}function xt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?qn(t):"<".concat(n," ").concat(cr(a),">").concat(i.map(xt).join(""),"</").concat(n,">")}function wn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var vr=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},ae=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?vr(e,r):e,l,m,u;for(a===void 0?(l=1,u=n[i[0]]):(l=0,u=a);l<o;l++)m=i[l],u=s(u,n[m],m,n);return u};function gr(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function ce(t){var n=gr(t);return n.length===1?n[0].toString(16):null}function br(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function kn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function ue(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=kn(n);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(t,kn(n)):L.styles[t]=c(c({},L.styles[t]||{}),i),t==="fas"&&ue("fa",n)}var wt=L.styles,yr=L.shims,wr=Object.values(Bn),Ce=null,Jn={},Kn={},Qn={},ta={},ea={},kr=Object.keys(ke);function xr(t){return~nr.indexOf(t)}function Sr(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!xr(r)?r:null}var na=function(){var n=function(i){return ae(wt,function(o,s,l){return o[l]=ae(s,i,{}),o},{})};Jn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Kn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ea=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var e="far"in wt||d.autoFetchSvg,a=ae(yr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Qn=a.names,ta=a.unicodes,Ce=zt(d.styleDefault)};or(function(t){Ce=zt(t.styleDefault)});na();function _e(t,n){return(Jn[t]||{})[n]}function Cr(t,n){return(Kn[t]||{})[n]}function it(t,n){return(ea[t]||{})[n]}function aa(t){return Qn[t]||{prefix:null,iconName:null}}function _r(t){var n=ta[t],e=_e("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function G(){return Ce}var Me=function(){return{prefix:null,iconName:null,rest:[]}};function zt(t){var n=ke[t],e=Rt[t]||Rt[n],a=t in L.styles?t:null;return e||a||null}function Ut(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,i=t.reduce(function(o,s){var l=Sr(d.familyPrefix,s);if(wt[s]?(s=wr.includes(s)?Za[s]:s,r=s,o.prefix=s):kr.indexOf(s)>-1?(r=s,o.prefix=zt(s)):l?o.iconName=l:s!==d.replacementClass&&o.rest.push(s),!a&&o.prefix&&o.iconName){var m=r==="fa"?aa(o.iconName):{},u=it(o.prefix,o.iconName);m.prefix&&(r=null),o.iconName=m.iconName||u||o.iconName,o.prefix=m.prefix||o.prefix,o.prefix==="far"&&!wt.far&&wt.fas&&!d.autoFetchSvg&&(o.prefix="fas")}return o},Me());return(i.prefix==="fa"||r==="fa")&&(i.prefix=G()||"fas"),i}var Mr=function(){function t(){ja(this,t),this.definitions={}}return Fa(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),ue(s,o[s]);var l=Bn[s];l&&ue(l,o[s]),na()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,m=o.icon,u=m[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(e[s][f]=m)}),e[s][l]=m}),e}}]),t}(),xn=[],ot={},st={},Ar=Object.keys(st);function Er(t,n){var e=n.mixoutsTo;return xn=t,ot={},Object.keys(st).forEach(function(a){Ar.indexOf(a)===-1&&delete st[a]}),xn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Lt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ot[o]||(ot[o]=[]),ot[o].push(i[o])})}a.provides&&a.provides(st)}),e}function fe(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=ot[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function tt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=ot[t]||[];r.forEach(function(i){i.apply(null,e)})}function $(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return st[t]?st[t].apply(null,n):void 0}function me(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||G();if(!!n)return n=it(e,n)||n,wn(ra.definitions,e,n)||wn(L.styles,e,n)}var ra=new Mr,Or=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,tt("noAuto")},Tr={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(tt("beforeI2svg",n),$("pseudoElements2svg",n),$("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,hr(function(){Ir({autoReplaceSvgRoot:e}),tt("watch",n)})}},Pr={icon:function(n){if(n===null)return null;if(Lt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:it(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=zt(n[0]);return{prefix:a,iconName:it(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(Ja))){var r=Ut(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:it(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=G();return{prefix:i,iconName:it(i,n)||n}}}},E={noAuto:Or,config:d,dom:Tr,parse:Pr,library:ra,findIconDefinition:me,toHtml:xt},Ir=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?b:e;(Object.keys(L.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&E.dom.i2svg({node:a})};function Yt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return xt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!z){var a=b.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Nr(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Se(o)&&e.found&&!a.found){var s=e.width,l=e.height,m={x:s/l/2,y:.5};r.style=$t(c(c({},i),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Lr(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function Ae(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,m=t.maskId,u=t.titleId,f=t.extra,p=t.watchable,y=p===void 0?!1:p,x=a.found?a:e,I=x.width,N=x.height,M=r==="fak",S=[d.replacementClass,i?"".concat(d.familyPrefix,"-").concat(i):""].filter(function(at){return f.classes.indexOf(at)===-1}).filter(function(at){return at!==""||!!at}).concat(f.classes).join(" "),k={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})},U=M&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};y&&(k.attributes[Q]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||kt())},children:[l]}),delete k.attributes.title);var A=c(c({},k),{},{prefix:r,iconName:i,main:e,mask:a,maskId:m,transform:o,symbol:s,styles:c(c({},U),f.styles)}),Y=a.found&&e.found?$("generateAbstractMask",A)||{children:[],attributes:{}}:$("generateAbstractIcon",A)||{children:[],attributes:{}},mt=Y.children,dt=Y.attributes;return A.children=mt,A.attributes=dt,s?Lr(A):Nr(A)}function Sn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,m=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(m[Q]="");var u=c({},o.styles);Se(r)&&(u.transform=fr({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var f=$t(u);f.length>0&&(m.style=f);var p=[];return p.push({tag:"span",attributes:m,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Rr(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=$t(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var re=L.styles;function de(t){var n=t[0],e=t[1],a=t.slice(4),r=ge(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Dr={found:!1,width:512,height:512};function jr(t,n){!Hn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function pe(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=G()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(e==="fa"){var o=aa(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&re[n]&&re[n][t]){var s=re[n][t];return a(de(s))}jr(t,n),a(c(c({},Dr),{},{icon:d.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}var Cn=function(){},he=d.measurePerformance&&Tt&&Tt.mark&&Tt.measure?Tt:{mark:Cn,measure:Cn},bt='FA "6.0.0"',Fr=function(n){return he.mark("".concat(bt," ").concat(n," begins")),function(){return ia(n)}},ia=function(n){he.mark("".concat(bt," ").concat(n," ends")),he.measure("".concat(bt," ").concat(n),"".concat(bt," ").concat(n," begins"),"".concat(bt," ").concat(n," ends"))},Ee={begin:Fr,end:ia},It=function(){};function _n(t){var n=t.getAttribute?t.getAttribute(Q):null;return typeof n=="string"}function $r(t){var n=t.getAttribute?t.getAttribute(ye):null,e=t.getAttribute?t.getAttribute(we):null;return n&&e}function zr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ur(){if(d.autoReplaceSvg===!0)return Nt.replace;var t=Nt[d.autoReplaceSvg];return t||Nt.replace}function Yr(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function Hr(t){return b.createElement(t)}function oa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Yr:Hr:e;if(typeof t=="string")return b.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(oa(o,{ceFn:a}))}),r}function Br(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Nt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(oa(r),e)}),e.getAttribute(Q)===null&&d.keepOriginalSource){var a=b.createComment(Br(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~xe(e).indexOf(d.replacementClass))return Nt.replace(n);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return xt(s)}).join(`
`);e.setAttribute(Q,""),e.innerHTML=o}};function Mn(t){t()}function sa(t,n){var e=typeof n=="function"?n:It;if(t.length===0)e();else{var a=Mn;d.mutateApproach===qa&&(a=W.requestAnimationFrame||Mn),a(function(){var r=Ur(),i=Ee.begin("mutate");t.map(r),i(),e()})}}var Oe=!1;function la(){Oe=!0}function ve(){Oe=!1}var jt=null;function An(t){if(!!vn&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?It:n,a=t.nodeCallback,r=a===void 0?It:a,i=t.pseudoElementsCallback,o=i===void 0?It:i,s=t.observeMutationsRoot,l=s===void 0?b:s;jt=new vn(function(m){if(!Oe){var u=G();lt(m).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_n(f.addedNodes[0])&&(d.searchPseudoElements&&o(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&d.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&_n(f.target)&&~er.indexOf(f.attributeName))if(f.attributeName==="class"&&$r(f.target)){var p=Ut(xe(f.target)),y=p.prefix,x=p.iconName;f.target.setAttribute(ye,y||u),x&&f.target.setAttribute(we,x)}else zr(f.target)&&r(f.target)})}}),z&&jt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wr(){!jt||jt.disconnect()}function Gr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Vr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ut(xe(t));return r.prefix||(r.prefix=G()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Cr(r.prefix,t.innerText)||_e(r.prefix,ce(t.innerText))),r}function qr(t){var n=lt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||kt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Xr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function En(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Vr(t),a=e.iconName,r=e.prefix,i=e.rest,o=qr(t),s=fe("parseNodeAttributes",{},t),l=n.styleParser?Gr(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Zr=L.styles;function ca(t){var n=d.autoReplaceSvg==="nest"?En(t,{styleParser:!1}):En(t);return~n.extra.classes.indexOf(Wn)?$("generateLayersText",t,n):$("generateSvgReplacementMutation",t,n)}function On(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var e=b.documentElement.classList,a=function(f){return e.add("".concat(gn,"-").concat(f))},r=function(f){return e.remove("".concat(gn,"-").concat(f))},i=d.autoFetchSvg?Object.keys(ke):Object.keys(Zr),o=[".".concat(Wn,":not([").concat(Q,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=lt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Ee.begin("onTree"),m=s.reduce(function(u,f){try{var p=ca(f);p&&u.push(p)}catch(y){Hn||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,f){Promise.all(m).then(function(p){sa(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),u()})}).catch(function(p){l(),f(p)})})}function Jr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ca(t).then(function(e){e&&sa([e],n)})}function Kr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:me(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:me(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Qr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?D:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,m=e.maskId,u=m===void 0?null:m,f=e.title,p=f===void 0?null:f,y=e.titleId,x=y===void 0?null:y,I=e.classes,N=I===void 0?[]:I,M=e.attributes,S=M===void 0?{}:M,k=e.styles,U=k===void 0?{}:k;if(!!n){var A=n.prefix,Y=n.iconName,mt=n.icon;return Yt(c({type:"icon"},n),function(){return tt("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(p?S["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||kt()):(S["aria-hidden"]="true",S.focusable="false")),Ae({icons:{main:de(mt),mask:l?de(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Y,transform:c(c({},D),r),symbol:o,title:p,maskId:u,titleId:x,extra:{attributes:S,styles:U,classes:N}})})}},ti={mixout:function(){return{icon:Kr(Qr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=On,e.nodeCallback=Jr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?b:a,i=e.callback,o=i===void 0?function(){}:i;return On(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,m=a.symbol,u=a.mask,f=a.maskId,p=a.extra;return new Promise(function(y,x){Promise.all([pe(r,s),u.iconName?pe(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var N=ge(I,2),M=N[0],S=N[1];y([e,Ae({icons:{main:M,mask:S},prefix:s,iconName:r,transform:l,symbol:m,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,l=$t(s);l.length>0&&(r.style=l);var m;return Se(o)&&(m=$("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(m||i.icon),{children:a,attributes:r}}}},ei={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Yt({type:"layer"},function(){tt("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(Ft(i)).join(" ")},children:o}]})}}}},ni={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,m=l===void 0?{}:l,u=a.styles,f=u===void 0?{}:u;return Yt({type:"counter",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:a}),Rr({content:e.toString(),title:i,extra:{attributes:m,styles:f,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(Ft(s))}})})}}}},ai={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?D:r,o=a.title,s=o===void 0?null:o,l=a.classes,m=l===void 0?[]:l,u=a.attributes,f=u===void 0?{}:u,p=a.styles,y=p===void 0?{}:p;return Yt({type:"text",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:a}),Sn({content:e,transform:c(c({},D),i),title:s,extra:{attributes:f,styles:y,classes:["".concat(d.familyPrefix,"-layers-text")].concat(Ft(m))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(zn){var m=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/m,l=u.height/m}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Sn({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},ri=new RegExp('"',"ug"),Tn=[1105920,1112319];function ii(t){var n=t.replace(ri,""),e=br(n,0),a=e>=Tn[0]&&e<=Tn[1],r=n.length===2?n[0]===n[1]:!1;return{value:ce(r?n[0]:n),isSecondary:a||r}}function Pn(t,n){var e="".concat(Va).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=lt(t.children),o=i.filter(function(Y){return Y.getAttribute(le)===n})[0],s=W.getComputedStyle(t,n),l=s.getPropertyValue("font-family").match(Ka),m=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Rt[l[2].toLowerCase()]:Qa[m],y=ii(f),x=y.value,I=y.isSecondary,N=l[0].startsWith("FontAwesome"),M=_e(p,x),S=M;if(N){var k=_r(x);k.iconName&&k.prefix&&(M=k.iconName,p=k.prefix)}if(M&&!I&&(!o||o.getAttribute(ye)!==p||o.getAttribute(we)!==S)){t.setAttribute(e,S),o&&t.removeChild(o);var U=Xr(),A=U.extra;A.attributes[le]=n,pe(M,p).then(function(Y){var mt=Ae(c(c({},U),{},{icons:{main:Y,mask:Me()},prefix:p,iconName:S,extra:A,watchable:!0})),dt=b.createElement("svg");n==="::before"?t.insertBefore(dt,t.firstChild):t.appendChild(dt),dt.outerHTML=mt.map(function(at){return xt(at)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function oi(t){return Promise.all([Pn(t,"::before"),Pn(t,"::after")])}function si(t){return t.parentNode!==document.head&&!~Xa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(le)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function In(t){if(!!z)return new Promise(function(n,e){var a=lt(t.querySelectorAll("*")).filter(si).map(oi),r=Ee.begin("searchPseudoElements");la(),Promise.all(a).then(function(){r(),ve(),n()}).catch(function(){r(),ve(),e()})})}var li={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=In,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?b:a;d.searchPseudoElements&&In(r)}}},Nn=!1,ci={mixout:function(){return{dom:{unwatch:function(){la(),Nn=!0}}}},hooks:function(){return{bootstrap:function(){An(fe("mutationObserverCallbacks",{}))},noAuto:function(){Wr()},watch:function(e){var a=e.observeMutationsRoot;Nn?ve():An(fe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ln=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ui={mixout:function(){return{parse:{transform:function(e){return Ln(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Ln(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(m," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:f,path:p};return{tag:"g",attributes:c({},y.outer),children:[{tag:"g",attributes:c({},y.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),y.path)}]}]}}}},ie={x:0,y:0,width:"100%",height:"100%"};function Rn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function fi(t){return t.tag==="g"?t.children:[t]}var mi={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ut(r.split(" ").map(function(o){return o.trim()})):Me();return i.prefix||(i.prefix=G()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,m=i.width,u=i.icon,f=o.width,p=o.icon,y=ur({transform:l,containerWidth:f,iconWidth:m}),x={tag:"rect",attributes:c(c({},ie),{},{fill:"white"})},I=u.children?{children:u.children.map(Rn)}:{},N={tag:"g",attributes:c({},y.inner),children:[Rn(c({tag:u.tag,attributes:c(c({},u.attributes),y.path)},I))]},M={tag:"g",attributes:c({},y.outer),children:[N]},S="mask-".concat(s||kt()),k="clip-".concat(s||kt()),U={tag:"mask",attributes:c(c({},ie),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,M]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:fi(p)},U]};return a.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},ie)}),{children:a,attributes:r}}}},di={provides:function(n){var e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},pi={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},hi=[dr,ti,ei,ni,ai,li,ci,ui,mi,di,pi];Er(hi,{mixoutsTo:E});var Bi=E.noAuto,Wi=E.config,ua=E.library,fa=E.dom,Gi=E.parse,Vi=E.findIconDefinition,qi=E.toHtml,Xi=E.icon,Zi=E.layer,Ji=E.text,Ki=E.counter;var Ra=je(ya()),Da=je(Aa());var ct=class{constructor(){}ngOnInit(){}},Ht=ct;(()=>{ct.\u0275fac=function(e){return new(e||ct)}})(),(()=>{ct.\u0275cmp=X({type:ct,selectors:[["app-home"]],decls:18,vars:0,consts:[[2,"text-align","center"],["target","_blank","href","https://github.com/SanderElias/Samples"],["target","_blank","href","https://stackblitz.com/github/SanderElias/Samples"],["target","_blank","href","https://mobile.twitter.com/ericsimons40"]],template:function(e,a){e&1&&(h(0,"div",0)(1,"h1"),v(2,"Welcome to Sanders samples!"),g(),h(3,"p"),v(4,' This is the "home" page of my samples app. Take a look arround. thereis not much of interest on this page, but you might want to check out one of the modules. '),g(),h(5,"p"),v(6," The source of those samples is on "),h(7,"a",1),v(8,"GitHub"),g()(),h(9,"P"),v(10," You can see it in action on "),h(11,"a",2),v(12,"StackBlitz"),g()(),h(13,"p"),v(14," Thanks to "),h(15,"a",3),v(16,"Eric"),g(),v(17," this repo now works correctly in StackBlitz "),g()())},encapsulation:2})})();var gi=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadChildren:()=>import("./filter-samp.module-J66KGZBB.js").then(t=>t.FilterSampModule)},{path:"modalSamp",loadChildren:()=>import("./modal-samp.module-UMZ3NN6R.js").then(t=>t.ModalSampModule)},{path:"mixinSamp",loadChildren:()=>import("./mixins.module-H7ML4AEU.js").then(t=>t.MixinsModule)},{path:"htmlLoad",loadChildren:()=>import("./html-load.module-VR5R6Y74.js").then(t=>t.HtmlLoadModule)},{path:"requiredAttributes",loadChildren:()=>import("./required-attributes.module-GGTGEMUQ.js").then(t=>t.RequiredAttributesModule)},{path:"viewModel",loadChildren:()=>import("./view-model.module-4ZVHLV7E.js").then(t=>t.ViewModelModule)},{path:"complexAPI",loadChildren:()=>import("./complex-api.module-MQIPJF6A.js").then(t=>t.ComplexAPIModule)},{path:"pokeAPI",loadChildren:()=>import("./poke-api.module-XZVFG3JM.js").then(t=>t.PokeApiModule)},{path:"observableState",loadChildren:()=>import("./observable-state.module-IWPOE7CL.js").then(t=>t.ObservableStateModule)},{path:"DirectiveSamp",loadChildren:()=>import("./directives.module-XBAXZNAI.js").then(t=>t.DirectivesModule)},{path:"svg",loadChildren:()=>import("./svg-calendar.module-JTFB3LWR.js").then(t=>t.SvgCalendarModule)},{path:"testOb",loadChildren:()=>import("./test.module-RYB7FR6W.js").then(t=>t.TestModule)},{path:"home",component:Ht},{path:"dynhtml",loadChildren:()=>import("./dynamichtml.module-SCM573RQ.js").then(t=>t.DynamichtmlModule)},{path:"snow",loadChildren:()=>import("./snow.module-EZLRHTVE.js").then(t=>t.SnowModule)},{path:"tumblr",loadChildren:()=>import("./tumblr.module-5TZAFV67.js").then(t=>t.TumblrModule)},{path:"bigData",loadChildren:()=>import("./big-data.module-6XHVRHI4.js").then(t=>t.BigDataModule)},{path:"svgTest",loadChildren:()=>import("./svg-test.module-GTS7DW5V.js").then(t=>t.SvgTestModule)},{path:"pannel",loadChildren:()=>import("./pannel-stuff.module-ACYZ5NJX.js").then(t=>t.PannelStuffModule)},{path:"clock",loadChildren:()=>import("./analog-clock.module-25MYDEE3.js").then(t=>t.AnalogClockModule)},{path:"gridThings",loadChildren:()=>import("./gridthings.module-DISAXT4Y.js").then(t=>t.GridthingsModule)},{path:"bintree",loadChildren:()=>import("./bintree.module-FQZRO2N2.js").then(t=>t.BintreeModule)},{path:"localState",loadChildren:()=>import("./local-state.module-LMKS5KJ2.js").then(t=>t.LocalStateModule)},{path:"lazyComponents",loadChildren:()=>import("./lazy-component.module-GX3FWSLL.js").then(t=>t.LazyComponentModule)},{path:"svgTimer",loadChildren:()=>import("./svg-timer.module-ZAXQ65FO.js").then(t=>t.SvgTimerModule)},{path:"svgClock",loadChildren:()=>import("./svg-clock.module-HYNHN3LG.js").then(t=>t.SvgClockModule)},{path:"dynForm",loadChildren:()=>import("./dyn-form-routing-Q2A437Y6.js").then(t=>t.routes)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-72YH3R37.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-PRBNPDTW.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-PRBNPDTW.js").then(t=>t.UnsubSampleComponent)},{path:"**",redirectTo:"unsubSample/2"}],et=class{},Bt=et;(()=>{et.\u0275fac=function(e){return new(e||et)}})(),(()=>{et.\u0275mod=Z({type:et})})(),(()=>{et.\u0275inj=q({imports:[ee.forRoot(gi,{}),ee]})})();function yi(t,n){if(t&1&&(h(0,"a",1),Be(),h(1,"svg",2)(2,"g"),rt(3,"path",3),g()(),v(4," View Source "),g()),t&2){let e=n.ngIf;w("href",e,Ge)}}var ut=class{constructor(n,e){this.router=n,this.http=e,this.path$=this.router.events.pipe(H(ki),vt(a=>a.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo$=Fe({route:this.routes$,path:this.path$}).pipe(vt(({route:a,path:r})=>a.find(i=>r===i.path)),V(wi))}},Wt=ut;(()=>{ut.\u0275fac=function(e){return new(e||ut)(J(gt),J(Et))}})(),(()=>{ut.\u0275cmp=X({type:ut,selectors:[["app-show-source"]],decls:2,vars:3,consts:[["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(e,a){if(e&1&&(Ve(0,yi,5,1,"a",0),qe(1,"async")),e&2){let r;w("ngIf",(r=Xe(1,1,a.routeInfo$))==null?null:r.gitFolder)}},dependencies:[tn,en],styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{padding-top:8px;width:24px;height:24px}"]})})();function wi(t){if(t?.path){let n="https://samples.selias.dev",e=t.description||`Angular Sample page for ${t.path}
    sourcecode: ${t.gitFolder}
    demo: ${`${n}${t.path}`}`;P("og:type","website"),P("og:title",t.title),P("og:description",e),P("description",e),P("og:image",`${n}${t.largeImage}`),P("og:url",window.location.href),P("twitter:title",t.title),P("twitter:description",e),P("twitter:card","summary_large_image"),P("twitter:domain",n),P("twitter:image",`${n}${t.largeImage}`),P("twitter:url",window.location.href);let a=document.querySelector("head");if(a){let r=a.querySelector("title");if(r)r.textContent=t.title;else{let i=document.createElement("title");i.textContent=t.title,a.appendChild(i)}}}}function P(t,n){let e=document.querySelector(`meta[property="${t}"]`);if(e)e.setAttribute("content",n);else{let a=document.createElement("meta");a.setAttribute("property",t),a.setAttribute("content",n),document.head.appendChild(a)}}function ki(t){return t instanceof At}var Si=["menuToggle"],Ci=function(){return["home"]},_i=function(){return["filterSamp"]},Mi=function(){return["modalSamp"]},Ai=function(){return["DirectiveSamp"]},Ei=function(){return["mixinSamp"]},Oi=function(){return["htmlLoad"]},Ti=function(){return["requiredAttributes"]},Pi=function(){return["viewModel","user"]},Ii=function(){return["viewModel","theGood"]},Ni=function(){return["viewModel","theBad"]},Li=function(){return["complexAPI"]},Ri=function(){return["observableState"]},Di=function(){return["dynhtml"]},ft=class{constructor(n,e){this.elmRef=n,this.r=e,this.title="samples",window.ar=e}set _toggle(n){n&&!this.checked&&(this.checked=n.nativeElement)}ngAfterContentInit(){let n=this.elmRef.nativeElement;n&&n.querySelectorAll("#menu a").forEach(e=>e.addEventListener("click",()=>{this.checked.checked=!1}))}},Gt=ft;(()=>{ft.\u0275fac=function(e){return new(e||ft)(J(Qt),J(sn))}})(),(()=>{ft.\u0275cmp=X({type:ft,selectors:[["app-root"]],viewQuery:function(e,a){if(e&1&&Je(Si,7),e&2){let r;Ze(r=Ke())&&(a._toggle=r.first)}},decls:53,vars:26,consts:[["id","menuToggle"],["type","checkbox"],["menuToggle",""],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(e,a){e&1&&(h(0,"nav")(1,"div",0),rt(2,"input",1,2)(4,"span")(5,"span")(6,"span"),h(7,"ul",3)(8,"a",4)(9,"li"),v(10,"Home"),g()(),h(11,"a",4)(12,"li"),v(13,"Filter Sample"),g()(),h(14,"a",4)(15,"li"),v(16,"Modal Sample"),g()(),h(17,"a",4)(18,"li"),v(19,"Directive Sample"),g()(),h(20,"a",4)(21,"li"),v(22,"Mixin Sample"),g()(),h(23,"a",4)(24,"li"),v(25,"Html load"),g()(),h(26,"a",5)(27,"li"),v(28,"Required attributes"),g()(),h(29,"li"),v(30," Reactive viewmodel "),h(31,"ul")(32,"a",4)(33,"li"),v(34," User list "),g()(),h(35,"a",4)(36,"li"),v(37," The Good "),g()(),h(38,"a",4)(39,"li"),v(40," The bad "),g()()()(),h(41,"a",5)(42,"li"),v(43,"Complex API"),g()(),h(44,"a",5)(45,"li"),v(46,"Observable State"),g()(),h(47,"a",5)(48,"li"),v(49,"Dynamic HTML"),g()()()(),rt(50,"app-show-source"),g(),h(51,"div",6),rt(52,"router-outlet"),g()),e&2&&(C(8),w("routerLink",_(13,Ci)),C(3),w("routerLink",_(14,_i)),C(3),w("routerLink",_(15,Mi)),C(3),w("routerLink",_(16,Ai)),C(3),w("routerLink",_(17,Ei)),C(3),w("routerLink",_(18,Oi)),C(3),w("routerLink",_(19,Ti)),C(6),w("routerLink",_(20,Pi)),C(3),w("routerLink",_(21,Ii)),C(3),w("routerLink",_(22,Ni)),C(3),w("routerLink",_(23,Li)),C(3),w("routerLink",_(24,Ri)),C(3),w("routerLink",_(25,Di)))},dependencies:[ln,cn,un,Wt],styles:[`[_nghost-%COMP%] {
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
  }`]})})();var Vt={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},Ia=new We("scullyLibConfig",{factory:()=>Vt}),Te=t=>(t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t),Re=()=>window&&window.ScullyIO==="running",Pe=()=>window&&window.ScullyIO==="generated";function Oa(t,n){return t=t??"",t.endsWith("/")&&n.startsWith("/")?`${t}${n.substr(1)}`:!t.endsWith("/")&&!n.startsWith("/")?`${t}/${n}`:`${t}${n}`}var Ie="ScullyIO-transfer-state",Ne="/** ___SCULLY_STATE_START___ */",Le="/** ___SCULLY_STATE_END___ */",ji="__done__with__Initial__navigation__",Fi=(()=>{class t{constructor(e,a,r){this.document=e,this.router=a,this.http=r,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new Xt({}),this.state$=this.stateBS.pipe(H(i=>i!==void 0)),this.nextUrl=this.router.events.pipe(H(i=>i instanceof rn),Mt(i=>Te(this.initialUrl)===Te(i.url)?(this.initialUrl=ji,$e):Zt(i)),V(()=>this.stateBS.next(void 0)),Mt(i=>this.router.events.pipe(H(o=>o instanceof At&&o.url===i.url),Ue())),vt(i=>Te(i.urlAfterRedirects||i.url)),Ye(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(Re()){this.injectScript();let e=window["ScullyIO-exposed"]||{};e.transferState&&(this.stateBS.next(e.transferState),this.saveState(e.transferState))}else this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl=this.initialUrl!=="/"&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,Pe()&&this.stateBS.next(window&&window[Ie]||{})}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",Ie);let e=this.document.body.lastChild;for(;e.previousSibling.nodeName==="SCRIPT";)e=e.previousSibling;this.document.body.insertBefore(this.script,e)}getState(e){return this.fetchTransferState(),this.state$.pipe(Jt(e))}stateHasKey(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)}stateKeyHasValue(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)&&this.stateBS.value[e]!=null}setState(e,a){let r=_t(Ct({},this.stateBS.value),{[e]:a});this.stateBS.next(r),this.saveState(r)}saveState(e){Re()&&(this.script.textContent=`{window['${Ie}']=_u(\`${Ne}${$i(JSON.stringify(e))}${Le}\`);function _u(t){t=t.split('${Ne}')[1].split('${Le}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`)}setupStartNavMonitoring(){!Pe()||this.nextUrl.subscribe()}useScullyTransferState(e,a){return Pe()?this.getState(e):a.pipe(V(r=>this.setState(e,r)))}fetchTransferState(){return pt(this,null,function*(){let e=i=>i.split("/").filter(o=>o.trim()!=="")[0];yield new Promise(i=>setTimeout(i,0));let a=yield ht(this.nextUrl),r=e(a);this.currentBaseUrl!==r&&(this.currentBaseUrl=r,this.nextUrl.pipe(He(i=>e(i)===this.currentBaseUrl),Mt(i=>this.inlineOnly?this.readFromIndex(i):this.readFromJson(i)),ze(i=>(console.warn("Error while loading of parsing Scully state:",i),Zt({}))),V(i=>{this.stateBS.next(i)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(e){return ht(this.http.get(Ta(Oa(e,"/data.json"))))}readFromIndex(e){return ht(this.http.get(Ta(Oa(e,"/index.html")),{responseType:"text"})).then(a=>{let r=a.split(Ne)[1].split(Le)[0];return JSON.parse(zi(r))})}}return t.\u0275fac=function(e){return new(e||t)(R(te),R(gt),R(Et))},t.\u0275prov=Kt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Ta(t){return t.startsWith("/")?t.slice(1):t}function $i(t){let n={"'":"_~q~",$:"_~o~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return t.replace(/[\$`'<>\/]/g,e=>n[e]).replace(/\\\"/g,"_~d~")}function zi(t){let n={"_~q~":"'","_~b~":"`","_~o~":"$","_~s~":"/","_~l~":"<","_~g~":">"};return t.replace(/_~d~/g,'\\"').replace(/_~[^]~/g,e=>n[e]).replace(/\n/g,"\\n").replace(/\r/g,"\\r")}var Ui=(()=>{class t{constructor(e,a,r,i,o){this.zone=e,this.router=a,this.document=i,this.initialUrl=Yi(window&&window.location&&window.location.pathname)||"",this.imState=new Xt({idle:!1,timeOut:5*1e3}),this.idle$=this.imState.pipe(Jt("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},Vt,r);let l=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||Re())&&(this.document.dispatchEvent(this.initApp),this.router.events.pipe(H(m=>m instanceof on&&m.urlAfterRedirects!==void 0),H(m=>l?m.urlAfterRedirects!==this.initialUrl:!0),V(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&this.document.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}fireManualMyAppReadyEvent(){return pt(this,null,function*(){return this.document.dispatchEvent(this.appReady)})}init(){return ht(this.idle$)}zoneIdleCheck(){return pt(this,null,function*(){if(Zone===void 0)return this.simpleTimeout();let e=Zone.current.get("TaskTrackingZone");if(e===void 0)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let a,r=0,i=Date.now(),o=()=>{if(clearTimeout(a),Date.now()-i>30*1e3){this.document.dispatchEvent(this.appTimeout);return}if(e.macroTasks.length>0&&e.macroTasks.find(s=>s.source.includes("XMLHttpRequest"))!==void 0||r<1){a=setTimeout(()=>{r+=1,o()},50);return}this.zone.run(()=>{setTimeout(()=>{this.document.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};o()})})}simpleTimeout(){return pt(this,null,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(e=>setTimeout(e,this.imState.value.timeOut)),this.document.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(e){this.imState.next(_t(Ct({},this.imState.value),{timeOut:e}))}setState(e,a){this.imState.next(_t(Ct({},this.imState.value),{[e]:a}))}}return t.\u0275fac=function(e){return new(e||t)(R(Qe),R(gt),R(Ia),R(te),R(Fi))},t.\u0275prov=Kt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Yi(t){return t.endsWith("/")?t.slice(0,-1):t}var Pa=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z({type:t}),t.\u0275inj=q({}),t})(),Na=(()=>{class t{constructor(e){this.idle=e}static forRoot(e=Vt){return e=Object.assign({},Vt,e),{ngModule:t,providers:[{provide:Ia,useValue:e}]}}}return t.\u0275fac=function(e){return new(e||t)(R(Ui))},t.\u0275mod=Z({type:t}),t.\u0275inj=q({imports:[[Pa,Ot],Pa]}),t})();var nt=class{},qt=nt;(()=>{nt.\u0275fac=function(e){return new(e||nt)}})(),(()=>{nt.\u0275mod=Z({type:nt,bootstrap:[Gt]})})(),(()=>{nt.\u0275inj=q({imports:[an,Bt,Ot,Na]})})();var La={production:!0};ua.add(Da.faPlay,Ra.faPause);fa.watch();La.production&&void 0;nn().bootstrapModule(qt).catch(t=>console.error(t));
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
