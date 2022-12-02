import{a as Zt,b as Jt}from"./chunk-Q4XIZLZR.js";import{a as er,b as nr,d as rr,e as We,f as ir,g as ar,h as or,i as jt,j as sr,k as lr,l as He}from"./chunk-YHXAY3DU.js";import{d as Ye,m as Qn,n as tr}from"./chunk-JUPB3CFF.js";import{B as Un,Eb as P,Fb as Gn,Gb as qn,Ja as Bn,Mb as Xn,Nb as Zn,Pb as Jn,Qa as Ue,Ua as I,Wa as at,X as Yn,_a as Vn,_b as Kn,aa as $e,ab as A,ba as nt,bb as b,cb as y,db as vt,fa as U,ia as rt,ja as it,o as ze,p as $n,ra as Wn,rb as g,ua as Hn}from"./chunk-FSDOJMUS.js";import{a as qt,b as Xt,c as Dn,d as zn,h as Nt}from"./chunk-G5KKTNWD.js";var bi=Dn(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var fi="fas",ui="pause",mi=448,pi=512,di=[],hi="f04c",vi="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z";j.definition={prefix:fi,iconName:ui,icon:[mi,pi,di,hi,vi]};j.faPause=j.definition;j.prefix=fi;j.iconName=ui;j.width=mi;j.height=pi;j.ligatures=di;j.unicode=hi;j.svgPathData=vi});var Ci=Dn(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});var gi="fas",yi="play",xi=448,wi=512,Si=[],_i="f04b",ki="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z";F.definition={prefix:gi,iconName:yi,icon:[xi,wi,Si,_i,ki]};F.faPlay=F.definition;F.prefix=gi;F.iconName=yi;F.width=xi;F.height=wi;F.ligatures=Si;F.unicode=_i;F.svgPathData=ki});function cr(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?cr(Object(e),!0).forEach(function(r){la(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):cr(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function ne(t){return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ne(t)}function oa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function fr(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sa(t,n,e){return n&&fr(t.prototype,n),e&&fr(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function la(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function sn(t,n){return fa(t)||ma(t,n)||Lr(t,n)||da()}function oe(t){return ca(t)||ua(t)||Lr(t)||pa()}function ca(t){if(Array.isArray(t))return Xe(t)}function fa(t){if(Array.isArray(t))return t}function ua(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ma(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r=[],i=!0,a=!1,o,s;try{for(e=e.call(t);!(i=(o=e.next()).done)&&(r.push(o.value),!(n&&r.length===n));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(a)throw s}}return r}}function Lr(t,n){if(!!t){if(typeof t=="string")return Xe(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Xe(t,n)}}function Xe(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function da(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ur=function(){},ln={},Nr={},jr=null,Fr={mark:ur,measure:ur};try{typeof window<"u"&&(ln=window),typeof document<"u"&&(Nr=document),typeof MutationObserver<"u"&&(jr=MutationObserver),typeof performance<"u"&&(Fr=performance)}catch{}var ha=ln.navigator||{},mr=ha.userAgent,pr=mr===void 0?"":mr,tt=ln,x=Nr,dr=jr,Kt=Fr,As=!!tt.document,X=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Dr=~pr.indexOf("MSIE")||~pr.indexOf("Trident/"),V="___FONT_AWESOME___",Ze=16,zr="fa",$r="svg-inline--fa",st="data-fa-i2svg",Je="data-fa-pseudo-element",va="data-fa-pseudo-element-pending",cn="data-prefix",fn="data-icon",hr="fontawesome-i2svg",ba="async",ga=["HTML","HEAD","STYLE","SCRIPT"],Ur=function(){try{return!0}catch{return!1}}(),un={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},re={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Yr={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ya={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},xa=/fa[srltdbk\-\ ]/,Wr="fa-layers-text",wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Sa={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Hr=[1,2,3,4,5,6,7,8,9,10],_a=Hr.concat([11,12,13,14,15,16,17,18,19,20]),ka=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ca=[].concat(oe(Object.keys(re)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Hr.map(function(t){return"".concat(t,"x")})).concat(_a.map(function(t){return"w-".concat(t)})),Br=tt.FontAwesomeConfig||{};function Ea(t){var n=x.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Oa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&(vr=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],vr.forEach(function(t){var n=sn(t,2),e=n[0],r=n[1],i=Oa(Ea(e));i!=null&&(Br[r]=i)}));var vr,Aa={familyPrefix:zr,styleDefault:"solid",replacementClass:$r,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Dt=m(m({},Aa),Br);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var d={};Object.keys(Dt).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){Dt[t]=e,Qt.forEach(function(r){return r(d)})},get:function(){return Dt[t]}})});tt.FontAwesomeConfig=d;var Qt=[];function Ta(t){return Qt.push(t),function(){Qt.splice(Qt.indexOf(t),1)}}var Q=Ze,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ma(t){if(!(!t||!X)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=x.head.childNodes,r=null,i=e.length-1;i>-1;i--){var a=e[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return x.head.insertBefore(n,r),t}}var Ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $t(){for(var t=12,n="";t-- >0;)n+=Ia[Math.random()*62|0];return n}function xt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function mn(t){return t.classList?xt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Vr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pa(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Vr(t[e]),'" ')},"").trim()}function se(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function pn(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function Ra(t){var n=t.transform,e=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(e/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function La(t){var n=t.transform,e=t.width,r=e===void 0?Ze:e,i=t.height,a=i===void 0?Ze:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Dr?l+="translate(".concat(n.x/Q-r/2,"em, ").concat(n.y/Q-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/Q,"em), calc(-50% + ").concat(n.y/Q,"em)) "):l+="translate(".concat(n.x/Q,"em, ").concat(n.y/Q,"em) "),l+="scale(".concat(n.size/Q*(n.flipX?-1:1),", ").concat(n.size/Q*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Na=`:root, :host {
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
}`;function Gr(){var t=zr,n=$r,e=d.familyPrefix,r=d.replacementClass,i=Na;if(e!==t||r!==n){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");i=i.replace(a,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(r))}return i}var br=!1;function Be(){d.autoAddCss&&!br&&(Ma(Gr()),br=!0)}var ja={mixout:function(){return{dom:{css:Gr,insertCss:Be}}},hooks:function(){return{beforeDOMElementCreation:function(){Be()},beforeI2svg:function(){Be()}}}},G=tt||{};G[V]||(G[V]={});G[V].styles||(G[V].styles={});G[V].hooks||(G[V].hooks={});G[V].shims||(G[V].shims=[]);var z=G[V],qr=[],Fa=function t(){x.removeEventListener("DOMContentLoaded",t),ie=1,qr.map(function(n){return n()})},ie=!1;X&&(ie=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ie||x.addEventListener("DOMContentLoaded",Fa));function Da(t){!X||(ie?setTimeout(t,0):qr.push(t))}function Ut(t){var n=t.tag,e=t.attributes,r=e===void 0?{}:e,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?Vr(t):"<".concat(n," ").concat(Pa(r),">").concat(a.map(Ut).join(""),"</").concat(n,">")}function gr(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var za=function(n,e){return function(r,i,a,o){return n.call(e,r,i,a,o)}},Ve=function(n,e,r,i){var a=Object.keys(n),o=a.length,s=i!==void 0?za(e,i):e,l,c,f;for(r===void 0?(l=1,f=n[a[0]]):(l=0,f=r);l<o;l++)c=a[l],f=s(f,n[c],c,n);return f};function $a(t){for(var n=[],e=0,r=t.length;e<r;){var i=t.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var a=t.charCodeAt(e++);(a&64512)==56320?n.push(((i&1023)<<10)+(a&1023)+65536):(n.push(i),e--)}else n.push(i)}return n}function Ke(t){var n=$a(t);return n.length===1?n[0].toString(16):null}function Ua(t,n){var e=t.length,r=t.charCodeAt(n),i;return r>=55296&&r<=56319&&e>n+1&&(i=t.charCodeAt(n+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yr(t){return Object.keys(t).reduce(function(n,e){var r=t[e],i=!!r.icon;return i?n[r.iconName]=r.icon:n[e]=r,n},{})}function Qe(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,a=yr(n);typeof z.hooks.addPack=="function"&&!i?z.hooks.addPack(t,yr(n)):z.styles[t]=m(m({},z.styles[t]||{}),a),t==="fas"&&Qe("fa",n)}var zt=z.styles,Ya=z.shims,Wa=Object.values(Yr),dn=null,Xr={},Zr={},Jr={},Kr={},Qr={},Ha=Object.keys(un);function Ba(t){return~Ca.indexOf(t)}function Va(t,n){var e=n.split("-"),r=e[0],i=e.slice(1).join("-");return r===t&&i!==""&&!Ba(i)?i:null}var ti=function(){var n=function(a){return Ve(zt,function(o,s,l){return o[l]=Ve(s,a,{}),o},{})};Xr=n(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Zr=n(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Qr=n(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var e="far"in zt||d.autoFetchSvg,r=Ve(Ya,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Jr=r.names,Kr=r.unicodes,dn=le(d.styleDefault)};Ta(function(t){dn=le(t.styleDefault)});ti();function hn(t,n){return(Xr[t]||{})[n]}function Ga(t,n){return(Zr[t]||{})[n]}function bt(t,n){return(Qr[t]||{})[n]}function ei(t){return Jr[t]||{prefix:null,iconName:null}}function qa(t){var n=Kr[t],e=hn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function et(){return dn}var vn=function(){return{prefix:null,iconName:null,rest:[]}};function le(t){var n=un[t],e=re[t]||re[n],r=t in z.styles?t:null;return e||r||null}function ce(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=null,a=t.reduce(function(o,s){var l=Va(d.familyPrefix,s);if(zt[s]?(s=Wa.includes(s)?ya[s]:s,i=s,o.prefix=s):Ha.indexOf(s)>-1?(i=s,o.prefix=le(s)):l?o.iconName=l:s!==d.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=i==="fa"?ei(o.iconName):{},f=bt(o.prefix,o.iconName);c.prefix&&(i=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!zt.far&&zt.fas&&!d.autoFetchSvg&&(o.prefix="fas")}return o},vn());return(a.prefix==="fa"||i==="fa")&&(a.prefix=et()||"fas"),a}var Xa=function(){function t(){oa(this,t),this.definitions={}}return sa(t,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),Qe(s,o[s]);var l=Yr[s];l&&Qe(l,o[s]),ti()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];e[s]||(e[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(e[s][u]=c)}),e[s][l]=c}),e}}]),t}(),xr=[],gt={},yt={},Za=Object.keys(yt);function Ja(t,n){var e=n.mixoutsTo;return xr=t,gt={},Object.keys(yt).forEach(function(r){Za.indexOf(r)===-1&&delete yt[r]}),xr.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(e[o]=i[o]),ne(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(a[o])})}r.provides&&r.provides(yt)}),e}function tn(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var a=gt[t]||[];return a.forEach(function(o){n=o.apply(null,[n].concat(r))}),n}function lt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var i=gt[t]||[];i.forEach(function(a){a.apply(null,e)})}function q(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return yt[t]?yt[t].apply(null,n):void 0}function en(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||et();if(!!n)return n=bt(e,n)||n,gr(ni.definitions,e,n)||gr(z.styles,e,n)}var ni=new Xa,Ka=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,lt("noAuto")},Qa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(lt("beforeI2svg",n),q("pseudoElements2svg",n),q("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Da(function(){eo({autoReplaceSvgRoot:e}),lt("watch",n)})}},to={icon:function(n){if(n===null)return null;if(ne(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:bt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=le(n[0]);return{prefix:r,iconName:bt(r,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(xa))){var i=ce(n.split(" "),{skipLookups:!0});return{prefix:i.prefix||et(),iconName:bt(i.prefix,i.iconName)||i.iconName}}if(typeof n=="string"){var a=et();return{prefix:a,iconName:bt(a,n)||n}}}},L={noAuto:Ka,config:d,dom:Qa,parse:to,library:ni,findIconDefinition:en,toHtml:Ut},eo=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,r=e===void 0?x:e;(Object.keys(z.styles).length>0||d.autoFetchSvg)&&X&&d.autoReplaceSvg&&L.dom.i2svg({node:r})};function fe(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ut(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!X){var r=x.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function no(t){var n=t.children,e=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(pn(o)&&e.found&&!r.found){var s=e.width,l=e.height,c={x:s/l/2,y:.5};i.style=se(m(m({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:n}]}function ro(t){var n=t.prefix,e=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:o}),children:r}]}]}function bn(t){var n=t.icons,e=n.main,r=n.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,p=t.watchable,h=p===void 0?!1:p,S=r.found?r:e,E=S.width,M=S.height,O=i==="fak",k=[d.replacementClass,a?"".concat(d.familyPrefix,"-").concat(a):""].filter(function(ht){return u.classes.indexOf(ht)===-1}).filter(function(ht){return ht!==""||!!ht}).concat(u.classes).join(" "),T={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":i,"data-icon":a,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(M)})},J=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(E/M*16*.0625,"em")}:{};h&&(T.attributes[st]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||$t())},children:[l]}),delete T.attributes.title);var R=m(m({},T),{},{prefix:i,iconName:a,main:e,mask:r,maskId:c,transform:o,symbol:s,styles:m(m({},J),u.styles)}),K=r.found&&e.found?q("generateAbstractMask",R)||{children:[],attributes:{}}:q("generateAbstractIcon",R)||{children:[],attributes:{}},Rt=K.children,Lt=K.attributes;return R.children=Rt,R.attributes=Lt,s?ro(R):no(R)}function wr(t){var n=t.content,e=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[st]="");var f=m({},o.styles);pn(i)&&(f.transform=La({transform:i,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var u=se(f);u.length>0&&(c.style=u);var p=[];return p.push({tag:"span",attributes:c,children:[n]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function io(t){var n=t.content,e=t.title,r=t.extra,i=m(m(m({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),a=se(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Ge=z.styles;function nn(t){var n=t[0],e=t[1],r=t.slice(4),i=sn(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:o}}var ao={found:!1,width:512,height:512};function oo(t,n){!Ur&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function rn(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=et()),new Promise(function(r,i){var a={found:!1,width:512,height:512,icon:q("missingIconAbstract")||{}};if(e==="fa"){var o=ei(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Ge[n]&&Ge[n][t]){var s=Ge[n][t];return r(nn(s))}oo(t,n),r(m(m({},ao),{},{icon:d.showMissingIcons&&t?q("missingIconAbstract")||{}:{}}))})}var Sr=function(){},an=d.measurePerformance&&Kt&&Kt.mark&&Kt.measure?Kt:{mark:Sr,measure:Sr},Ft='FA "6.0.0"',so=function(n){return an.mark("".concat(Ft," ").concat(n," begins")),function(){return ri(n)}},ri=function(n){an.mark("".concat(Ft," ").concat(n," ends")),an.measure("".concat(Ft," ").concat(n),"".concat(Ft," ").concat(n," begins"),"".concat(Ft," ").concat(n," ends"))},gn={begin:so,end:ri},te=function(){};function _r(t){var n=t.getAttribute?t.getAttribute(st):null;return typeof n=="string"}function lo(t){var n=t.getAttribute?t.getAttribute(cn):null,e=t.getAttribute?t.getAttribute(fn):null;return n&&e}function co(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function fo(){if(d.autoReplaceSvg===!0)return ee.replace;var t=ee[d.autoReplaceSvg];return t||ee.replace}function uo(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function mo(t){return x.createElement(t)}function ii(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,r=e===void 0?t.tag==="svg"?uo:mo:e;if(typeof t=="string")return x.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(ii(o,{ceFn:r}))}),i}function po(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ee={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(i){e.parentNode.insertBefore(ii(i),e)}),e.getAttribute(st)===null&&d.keepOriginalSource){var r=x.createComment(po(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(n){var e=n[0],r=n[1];if(~mn(e).indexOf(d.replacementClass))return ee.replace(n);var i=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ut(s)}).join(`
`);e.setAttribute(st,""),e.innerHTML=o}};function kr(t){t()}function ai(t,n){var e=typeof n=="function"?n:te;if(t.length===0)e();else{var r=kr;d.mutateApproach===ba&&(r=tt.requestAnimationFrame||kr),r(function(){var i=fo(),a=gn.begin("mutate");t.map(i),a(),e()})}}var yn=!1;function oi(){yn=!0}function on(){yn=!1}var ae=null;function Cr(t){if(!!dr&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?te:n,r=t.nodeCallback,i=r===void 0?te:r,a=t.pseudoElementsCallback,o=a===void 0?te:a,s=t.observeMutationsRoot,l=s===void 0?x:s;ae=new dr(function(c){if(!yn){var f=et();xt(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!_r(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&_r(u.target)&&~ka.indexOf(u.attributeName))if(u.attributeName==="class"&&lo(u.target)){var p=ce(mn(u.target)),h=p.prefix,S=p.iconName;u.target.setAttribute(cn,h||f),S&&u.target.setAttribute(fn,S)}else co(u.target)&&i(u.target)})}}),X&&ae.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ho(){!ae||ae.disconnect()}function vo(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),e}function bo(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ce(mn(t));return i.prefix||(i.prefix=et()),n&&e&&(i.prefix=n,i.iconName=e),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=Ga(i.prefix,t.innerText)||hn(i.prefix,Ke(t.innerText))),i}function go(t){var n=xt(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),e=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(r||$t()):(n["aria-hidden"]="true",n.focusable="false")),n}function yo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Er(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bo(t),r=e.iconName,i=e.prefix,a=e.rest,o=go(t),s=tn("parseNodeAttributes",{},t),l=n.styleParser?vo(t):[];return m({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var xo=z.styles;function si(t){var n=d.autoReplaceSvg==="nest"?Er(t,{styleParser:!1}):Er(t);return~n.extra.classes.indexOf(Wr)?q("generateLayersText",t,n):q("generateSvgReplacementMutation",t,n)}function Or(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var e=x.documentElement.classList,r=function(u){return e.add("".concat(hr,"-").concat(u))},i=function(u){return e.remove("".concat(hr,"-").concat(u))},a=d.autoFetchSvg?Object.keys(un):Object.keys(xo),o=[".".concat(Wr,":not([").concat(st,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(st,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=xt(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=gn.begin("onTree"),c=s.reduce(function(f,u){try{var p=si(u);p&&f.push(p)}catch(h){Ur||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(p){ai(p,function(){r("active"),r("complete"),i("pending"),typeof n=="function"&&n(),l(),f()})}).catch(function(p){l(),u(p)})})}function wo(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;si(t).then(function(e){e&&ai([e],n)})}function So(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:en(n||{}),i=e.mask;return i&&(i=(i||{}).icon?i:en(i||{})),t(r,m(m({},e),{},{mask:i}))}}var _o=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Y:r,a=e.symbol,o=a===void 0?!1:a,s=e.mask,l=s===void 0?null:s,c=e.maskId,f=c===void 0?null:c,u=e.title,p=u===void 0?null:u,h=e.titleId,S=h===void 0?null:h,E=e.classes,M=E===void 0?[]:E,O=e.attributes,k=O===void 0?{}:O,T=e.styles,J=T===void 0?{}:T;if(!!n){var R=n.prefix,K=n.iconName,Rt=n.icon;return fe(m({type:"icon"},n),function(){return lt("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(p?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(S||$t()):(k["aria-hidden"]="true",k.focusable="false")),bn({icons:{main:nn(Rt),mask:l?nn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:K,transform:m(m({},Y),i),symbol:o,title:p,maskId:f,titleId:S,extra:{attributes:k,styles:J,classes:M}})})}},ko={mixout:function(){return{icon:So(_o)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Or,e.nodeCallback=wo,e}}},provides:function(n){n.i2svg=function(e){var r=e.node,i=r===void 0?x:r,a=e.callback,o=a===void 0?function(){}:a;return Or(i,o)},n.generateSvgReplacementMutation=function(e,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,p=r.extra;return new Promise(function(h,S){Promise.all([rn(i,s),f.iconName?rn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var M=sn(E,2),O=M[0],k=M[1];h([e,bn({icons:{main:O,mask:k},prefix:s,iconName:i,transform:l,symbol:c,maskId:u,title:a,titleId:o,extra:p,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,a=e.main,o=e.transform,s=e.styles,l=se(s);l.length>0&&(i.style=l);var c;return pn(o)&&(c=q("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Co={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return fe({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:e,params:r});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(oe(a)).join(" ")},children:o}]})}}}},Eo={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return fe({type:"counter",content:e},function(){return lt("beforeDOMElementCreation",{content:e,params:r}),io({content:e.toString(),title:a,extra:{attributes:c,styles:u,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(oe(s))}})})}}}},Oo={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Y:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,p=r.styles,h=p===void 0?{}:p;return fe({type:"text",content:e},function(){return lt("beforeDOMElementCreation",{content:e,params:r}),wr({content:e,transform:m(m({},Y),a),title:s,extra:{attributes:u,styles:h,classes:["".concat(d.familyPrefix,"-layers-text")].concat(oe(c))}})})}}},provides:function(n){n.generateLayersText=function(e,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Dr){var c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,wr({content:e.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Ao=new RegExp('"',"ug"),Ar=[1105920,1112319];function To(t){var n=t.replace(Ao,""),e=Ua(n,0),r=e>=Ar[0]&&e<=Ar[1],i=n.length===2?n[0]===n[1]:!1;return{value:Ke(i?n[0]:n),isSecondary:r||i}}function Tr(t,n){var e="".concat(va).concat(n.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(e)!==null)return r();var a=xt(t.children),o=a.filter(function(K){return K.getAttribute(Je)===n})[0],s=tt.getComputedStyle(t,n),l=s.getPropertyValue("font-family").match(wa),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?re[l[2].toLowerCase()]:Sa[c],h=To(u),S=h.value,E=h.isSecondary,M=l[0].startsWith("FontAwesome"),O=hn(p,S),k=O;if(M){var T=qa(S);T.iconName&&T.prefix&&(O=T.iconName,p=T.prefix)}if(O&&!E&&(!o||o.getAttribute(cn)!==p||o.getAttribute(fn)!==k)){t.setAttribute(e,k),o&&t.removeChild(o);var J=yo(),R=J.extra;R.attributes[Je]=n,rn(O,p).then(function(K){var Rt=bn(m(m({},J),{},{icons:{main:K,mask:vn()},prefix:p,iconName:k,extra:R,watchable:!0})),Lt=x.createElement("svg");n==="::before"?t.insertBefore(Lt,t.firstChild):t.appendChild(Lt),Lt.outerHTML=Rt.map(function(ht){return Ut(ht)}).join(`
`),t.removeAttribute(e),r()}).catch(i)}else r()}else r()})}function Mo(t){return Promise.all([Tr(t,"::before"),Tr(t,"::after")])}function Io(t){return t.parentNode!==document.head&&!~ga.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Je)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mr(t){if(!!X)return new Promise(function(n,e){var r=xt(t.querySelectorAll("*")).filter(Io).map(Mo),i=gn.begin("searchPseudoElements");oi(),Promise.all(r).then(function(){i(),on(),n()}).catch(function(){i(),on(),e()})})}var Po={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Mr,e}}},provides:function(n){n.pseudoElements2svg=function(e){var r=e.node,i=r===void 0?x:r;d.searchPseudoElements&&Mr(i)}}},Ir=!1,Ro={mixout:function(){return{dom:{unwatch:function(){oi(),Ir=!0}}}},hooks:function(){return{bootstrap:function(){Cr(tn("mutationObserverCallbacks",{}))},noAuto:function(){ho()},watch:function(e){var r=e.observeMutationsRoot;Ir?on():Cr(tn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pr=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},e)},Lo={mixout:function(){return{parse:{transform:function(e){return Pr(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-transform");return i&&(e.transform=Pr(i)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var r=e.main,i=e.transform,a=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:u,path:p};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),h.path)}]}]}}}},qe={x:0,y:0,width:"100%",height:"100%"};function Rr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function No(t){return t.tag==="g"?t.children:[t]}var jo={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-mask"),a=i?ce(i.split(" ").map(function(o){return o.trim()})):vn();return a.prefix||(a.prefix=et()),e.mask=a,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var r=e.children,i=e.attributes,a=e.main,o=e.mask,s=e.maskId,l=e.transform,c=a.width,f=a.icon,u=o.width,p=o.icon,h=Ra({transform:l,containerWidth:u,iconWidth:c}),S={tag:"rect",attributes:m(m({},qe),{},{fill:"white"})},E=f.children?{children:f.children.map(Rr)}:{},M={tag:"g",attributes:m({},h.inner),children:[Rr(m({tag:f.tag,attributes:m(m({},f.attributes),h.path)},E))]},O={tag:"g",attributes:m({},h.outer),children:[M]},k="mask-".concat(s||$t()),T="clip-".concat(s||$t()),J={tag:"mask",attributes:m(m({},qe),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,O]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:No(p)},J]};return r.push(R,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(k,")")},qe)}),{children:r,attributes:i}}}},Fo={provides:function(n){var e=!1;tt.matchMedia&&(e=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:m(m({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:m(m({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Do={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return e.symbol=a,e}}}},zo=[ja,ko,Co,Eo,Oo,Po,Ro,Lo,jo,Fo,Do];Ja(zo,{mixoutsTo:L});var Ts=L.noAuto,Ms=L.config,li=L.library,ci=L.dom,Is=L.parse,Ps=L.findIconDefinition,Rs=L.toHtml,Ls=L.icon,Ns=L.layer,js=L.text,Fs=L.counter;var ia=zn(bi()),aa=zn(Ci());var wt=class{constructor(){}ngOnInit(){}},ue=wt;(()=>{wt.\u0275fac=function(e){return new(e||wt)}})(),(()=>{wt.\u0275cmp=rt({type:wt,selectors:[["app-home"]],decls:18,vars:0,consts:[[2,"text-align","center"],["target","_blank","href","https://github.com/SanderElias/Samples"],["target","_blank","href","https://stackblitz.com/github/SanderElias/Samples"],["target","_blank","href","https://mobile.twitter.com/ericsimons40"]],template:function(e,r){e&1&&(b(0,"div",0)(1,"h1"),g(2,"Welcome to Sanders samples!"),y(),b(3,"p"),g(4,' This is the "home" page of my samples app. Take a look arround. thereis not much of interest on this page, but you might want to check out one of the modules. '),y(),b(5,"p"),g(6," The source of those samples is on "),b(7,"a",1),g(8,"GitHub"),y()(),b(9,"P"),g(10," You can see it in action on "),b(11,"a",2),g(12,"StackBlitz"),y()(),b(13,"p"),g(14," Thanks to "),b(15,"a",3),g(16,"Eric"),y(),g(17," this repo now works correctly in StackBlitz "),y()())},encapsulation:2})})();var Uo=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadChildren:()=>import("./filter-samp.module-MJKALBVZ.js").then(t=>t.FilterSampModule)},{path:"modalSamp",loadChildren:()=>import("./modal-samp.module-J5PAZIV5.js").then(t=>t.ModalSampModule)},{path:"mixinSamp",loadChildren:()=>import("./mixins.module-SA34SZ3C.js").then(t=>t.MixinsModule)},{path:"htmlLoad",loadChildren:()=>import("./html-load.module-XOCY7XEX.js").then(t=>t.HtmlLoadModule)},{path:"requiredAttributes",loadChildren:()=>import("./required-attributes.module-UOONFM7H.js").then(t=>t.RequiredAttributesModule)},{path:"viewModel",loadChildren:()=>import("./view-model.module-DXBPNUPQ.js").then(t=>t.ViewModelModule)},{path:"complexAPI",loadChildren:()=>import("./complex-api.module-3POYLRGI.js").then(t=>t.ComplexAPIModule)},{path:"pokeAPI",loadChildren:()=>import("./poke-api.module-NGQ7NJY2.js").then(t=>t.PokeApiModule)},{path:"observableState",loadChildren:()=>import("./observable-state.module-ARZW3TPH.js").then(t=>t.ObservableStateModule)},{path:"DirectiveSamp",loadChildren:()=>import("./directives.module-3XZ7XY2D.js").then(t=>t.DirectivesModule)},{path:"svg",loadChildren:()=>import("./svg-calendar.module-4E4SOSRO.js").then(t=>t.SvgCalendarModule)},{path:"testOb",loadChildren:()=>import("./test.module-XCRBG35Q.js").then(t=>t.TestModule)},{path:"home",component:ue},{path:"dynhtml",loadChildren:()=>import("./dynamichtml.module-6NEDNI2J.js").then(t=>t.DynamichtmlModule)},{path:"snow",loadChildren:()=>import("./snow.module-JXL42RLI.js").then(t=>t.SnowModule)},{path:"tumblr",loadChildren:()=>import("./tumblr.module-6TEXFO4P.js").then(t=>t.TumblrModule)},{path:"bigData",loadChildren:()=>import("./big-data.module-IWFGSYXW.js").then(t=>t.BigDataModule)},{path:"svgTest",loadChildren:()=>import("./svg-test.module-LJHU6WWO.js").then(t=>t.SvgTestModule)},{path:"pannel",loadChildren:()=>import("./pannel-stuff.module-AY7DZXEV.js").then(t=>t.PannelStuffModule)},{path:"clock",loadChildren:()=>import("./analog-clock.module-25BTK6JH.js").then(t=>t.AnalogClockModule)},{path:"gridThings",loadChildren:()=>import("./gridthings.module-WZ34POXU.js").then(t=>t.GridthingsModule)},{path:"bintree",loadChildren:()=>import("./bintree.module-4BJAWNMM.js").then(t=>t.BintreeModule)},{path:"localState",loadChildren:()=>import("./local-state.module-GJ3TXJ3X.js").then(t=>t.LocalStateModule)},{path:"lazyComponents",loadChildren:()=>import("./lazy-component.module-YJEQABID.js").then(t=>t.LazyComponentModule)},{path:"svgTimer",loadChildren:()=>import("./svg-timer.module-BR3CIHBZ.js").then(t=>t.SvgTimerModule)},{path:"svgClock",loadChildren:()=>import("./svg-clock.module-27EGS5GZ.js").then(t=>t.SvgClockModule)},{path:"dynForm",loadChildren:()=>import("./dyn-form-routing-SLS5Z74E.js").then(t=>t.routes)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-D7IBBEXQ.js").then(t=>t.RxjstestComponent)},{path:"**",redirectTo:"rxjsTest"}],ct=class{},me=ct;(()=>{ct.\u0275fac=function(e){return new(e||ct)}})(),(()=>{ct.\u0275mod=it({type:ct})})(),(()=>{ct.\u0275inj=nt({imports:[He.forRoot(Uo,{}),He]})})();function Wo(t,n){if(t&1&&(b(0,"a",1),Wn(),b(1,"svg",2)(2,"g"),vt(3,"path",3),y()(),g(4," View Source "),y()),t&2){let e=n.ngIf;A("href",e,Bn)}}var St=class{constructor(n,e){this.router=n,this.http=e,this.path$=this.router.events.pipe(Un(Bo),ze(r=>r.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo$=$n({route:this.routes$,path:this.path$}).pipe(ze(({route:r,path:i})=>r.find(a=>i===a.path)),Yn(Ho))}},pe=St;(()=>{St.\u0275fac=function(e){return new(e||St)(at(jt),at(Zt))}})(),(()=>{St.\u0275cmp=rt({type:St,selectors:[["app-show-source"]],decls:2,vars:3,consts:[["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(e,r){if(e&1&&(Vn(0,Wo,5,1,"a",0),Gn(1,"async")),e&2){let i;A("ngIf",(i=qn(1,1,r.routeInfo$))==null?null:i.gitFolder)}},dependencies:[Qn,tr],styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{padding-top:8px;width:24px;height:24px}"]})})();function Ho(t){if(t?.path){let n="https://samples.selias.dev",e=t.description||`Angular Sample page for ${t.path}
    sourcecode: ${t.gitFolder}
    demo: ${`${n}${t.path}`}`;D("og:type","website"),D("og:title",t.title),D("og:description",e),D("description",e),D("og:image",`${n}${t.largeImage}`),D("og:url",window.location.href),D("twitter:title",t.title),D("twitter:description",e),D("twitter:card","summary_large_image"),D("twitter:domain",n),D("twitter:image",`${n}${t.largeImage}`),D("twitter:url",window.location.href);let r=document.querySelector("head");if(r){let i=r.querySelector("title");if(i)i.textContent=t.title;else{let a=document.createElement("title");a.textContent=t.title,r.appendChild(a)}}}}function D(t,n){let e=document.querySelector(`meta[property="${t}"]`);if(e)e.setAttribute("content",n);else{let r=document.createElement("meta");r.setAttribute("property",t),r.setAttribute("content",n),document.head.appendChild(r)}}function Bo(t){return t instanceof ir}var Go=["menuToggle"],qo=function(){return["home"]},Xo=function(){return["filterSamp"]},Zo=function(){return["modalSamp"]},Jo=function(){return["DirectiveSamp"]},Ko=function(){return["mixinSamp"]},Qo=function(){return["htmlLoad"]},ts=function(){return["requiredAttributes"]},es=function(){return["viewModel","user"]},ns=function(){return["viewModel","theGood"]},rs=function(){return["viewModel","theBad"]},is=function(){return["complexAPI"]},as=function(){return["observableState"]},os=function(){return["dynhtml"]},_t=class{constructor(n,e){this.elmRef=n,this.r=e,this.title="samples",window.ar=e}set _toggle(n){n&&!this.checked&&(this.checked=n.nativeElement)}ngAfterContentInit(){let n=this.elmRef.nativeElement;n&&n.querySelectorAll("#menu a").forEach(e=>e.addEventListener("click",()=>{this.checked.checked=!1}))}},de=_t;(()=>{_t.\u0275fac=function(e){return new(e||_t)(at(Ue),at(ar))}})(),(()=>{_t.\u0275cmp=rt({type:_t,selectors:[["app-root"]],viewQuery:function(e,r){if(e&1&&Zn(Go,7),e&2){let i;Xn(i=Jn())&&(r._toggle=i.first)}},decls:53,vars:26,consts:[["id","menuToggle"],["type","checkbox"],["menuToggle",""],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(e,r){e&1&&(b(0,"nav")(1,"div",0),vt(2,"input",1,2)(4,"span")(5,"span")(6,"span"),b(7,"ul",3)(8,"a",4)(9,"li"),g(10,"Home"),y()(),b(11,"a",4)(12,"li"),g(13,"Filter Sample"),y()(),b(14,"a",4)(15,"li"),g(16,"Modal Sample"),y()(),b(17,"a",4)(18,"li"),g(19,"Directive Sample"),y()(),b(20,"a",4)(21,"li"),g(22,"Mixin Sample"),y()(),b(23,"a",4)(24,"li"),g(25,"Html load"),y()(),b(26,"a",5)(27,"li"),g(28,"Required attributes"),y()(),b(29,"li"),g(30," Reactive viewmodel "),b(31,"ul")(32,"a",4)(33,"li"),g(34," User list "),y()(),b(35,"a",4)(36,"li"),g(37," The Good "),y()(),b(38,"a",4)(39,"li"),g(40," The bad "),y()()()(),b(41,"a",5)(42,"li"),g(43,"Complex API"),y()(),b(44,"a",5)(45,"li"),g(46,"Observable State"),y()(),b(47,"a",5)(48,"li"),g(49,"Dynamic HTML"),y()()()(),vt(50,"app-show-source"),y(),b(51,"div",6),vt(52,"router-outlet"),y()),e&2&&(I(8),A("routerLink",P(13,qo)),I(3),A("routerLink",P(14,Xo)),I(3),A("routerLink",P(15,Zo)),I(3),A("routerLink",P(16,Jo)),I(3),A("routerLink",P(17,Ko)),I(3),A("routerLink",P(18,Qo)),I(3),A("routerLink",P(19,ts)),I(6),A("routerLink",P(20,es)),I(3),A("routerLink",P(21,ns)),I(3),A("routerLink",P(22,rs)),I(3),A("routerLink",P(23,is)),I(3),A("routerLink",P(24,as)),I(3),A("routerLink",P(25,os)))},dependencies:[or,sr,lr,pe],styles:[`[_nghost-%COMP%] {
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
  }`]})})();function v(t){return typeof t=="function"}function kt(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var he=kt(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Wt(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var N=class{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let a of e)a.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(v(r))try{r()}catch(a){n=a instanceof he?a.errors:[a]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let a of i)try{Oi(a)}catch(o){n=n??[],o instanceof he?n=[...n,...o.errors]:n.push(o)}}if(n)throw new he(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Oi(n);else{if(n instanceof N){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Wt(e,n)}remove(n){let{_finalizers:e}=this;e&&Wt(e,n),n instanceof N&&n._removeParent(this)}};N.EMPTY=(()=>{let t=new N;return t.closed=!0,t})();var xn=N.EMPTY;function ve(t){return t instanceof N||t&&"closed"in t&&v(t.remove)&&v(t.add)&&v(t.unsubscribe)}function Oi(t){v(t)?t():t.unsubscribe()}var $={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ct={setTimeout(t,n,...e){let{delegate:r}=Ct;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ct;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function be(t){Ct.setTimeout(()=>{let{onUnhandledError:n}=$;if(n)n(t);else throw t})}function Ht(){}var Ai=(()=>wn("C",void 0,void 0))();function Ti(t){return wn("E",void 0,t)}function Mi(t){return wn("N",t,void 0)}function wn(t,n,e){return{kind:t,value:n,error:e}}var ft=null;function Et(t){if($.useDeprecatedSynchronousErrorHandling){let n=!ft;if(n&&(ft={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=ft;if(ft=null,e)throw r}}else t()}function Ii(t){$.useDeprecatedSynchronousErrorHandling&&ft&&(ft.errorThrown=!0,ft.error=t)}var ut=class extends N{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ve(n)&&n.add(this)):this.destination=cs}static create(n,e,r){return new W(n,e,r)}next(n){this.isStopped?_n(Mi(n),this):this._next(n)}error(n){this.isStopped?_n(Ti(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?_n(Ai,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ss=Function.prototype.bind;function Sn(t,n){return ss.call(t,n)}var kn=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){ge(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){ge(r)}else ge(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){ge(e)}}},W=class extends ut{constructor(n,e,r){super();let i;if(v(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let a;this&&$.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Sn(n.next,a),error:n.error&&Sn(n.error,a),complete:n.complete&&Sn(n.complete,a)}):i=n}this.destination=new kn(i)}};function ge(t){$.useDeprecatedSynchronousErrorHandling?Ii(t):be(t)}function ls(t){throw t}function _n(t,n){let{onStoppedNotification:e}=$;e&&Ct.setTimeout(()=>e(t,n))}var cs={closed:!0,next:Ht,error:ls,complete:Ht};var Ot=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function At(t){return t}function Pi(t){return t.length===0?At:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var C=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new t;return r.source=this,r.operator=e,r}subscribe(e,r,i){let a=us(e)?e:new W(e,r,i);return Et(()=>{let{operator:o,source:s}=this;a.add(o?o.call(a,s):s?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=Ri(r),new r((i,a)=>{let o=new W({next:s=>{try{e(s)}catch(l){a(l),o.unsubscribe()}},error:a,complete:i});this.subscribe(o)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[Ot](){return this}pipe(...e){return Pi(e)(this)}toPromise(e){return e=Ri(e),new e((r,i)=>{let a;this.subscribe(o=>a=o,o=>i(o),()=>r(a))})}}return t.create=n=>new t(n),t})();function Ri(t){var n;return(n=t??$.Promise)!==null&&n!==void 0?n:Promise}function fs(t){return t&&v(t.next)&&v(t.error)&&v(t.complete)}function us(t){return t&&t instanceof ut||fs(t)&&ve(t)}function ms(t){return v(t?.lift)}function w(t){return n=>{if(ms(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function _(t,n,e,r,i){return new Cn(t,n,e,r,i)}var Cn=class extends ut{constructor(n,e,r,i,a,o){super(n),this.onFinalize=a,this.shouldUnsubscribe=o,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Li=kt(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var mt=(()=>{class t extends C{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new ye(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new Li}next(e){Et(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){Et(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){Et(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:a}=this;return r||i?xn:(this.currentObservers=null,a.push(e),new N(()=>{this.currentObservers=null,Wt(a,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:a}=this;r?e.error(i):a&&e.complete()}asObservable(){let e=new C;return e.source=this,e}}return t.create=(n,e)=>new ye(n,e),t})(),ye=class extends mt{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:xn}};var Tt=class extends mt{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var En={now(){return(En.delegate||Date).now()},delegate:void 0};var Bt=class extends mt{constructor(n=1/0,e=1/0,r=En){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:a,_windowTime:o}=this;e||(r.push(n),!i&&r.push(a.now()+o)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,a=i.slice();for(let o=0;o<a.length&&!n.closed;o+=r?1:2)n.next(a[o]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,a=(i?1:2)*n;if(n<1/0&&a<r.length&&r.splice(0,r.length-a),!i){let o=e.now(),s=0;for(let l=1;l<r.length&&r[l]<=o;l+=2)s=l;s&&r.splice(0,s+1)}}};var Ni=new C(t=>t.complete());function ji(t){return t&&v(t.schedule)}function ps(t){return t[t.length-1]}function Fi(t){return ji(ps(t))?t.pop():void 0}function zi(t,n,e,r){function i(a){return a instanceof e?a:new e(function(o){o(a)})}return new(e||(e=Promise))(function(a,o){function s(f){try{c(r.next(f))}catch(u){o(u)}}function l(f){try{c(r.throw(f))}catch(u){o(u)}}function c(f){f.done?a(f.value):i(f.value).then(s,l)}c((r=r.apply(t,n||[])).next())})}function Di(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function pt(t){return this instanceof pt?(this.v=t,this):new pt(t)}function $i(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,a=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(p){r[p]&&(i[p]=function(h){return new Promise(function(S,E){a.push([p,h,S,E])>1||s(p,h)})})}function s(p,h){try{l(r[p](h))}catch(S){u(a[0][3],S)}}function l(p){p.value instanceof pt?Promise.resolve(p.value.v).then(c,f):u(a[0][2],p)}function c(p){s("next",p)}function f(p){s("throw",p)}function u(p,h){p(h),a.shift(),a.length&&s(a[0][0],a[0][1])}}function Ui(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Di=="function"?Di(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(a){e[a]=t[a]&&function(o){return new Promise(function(s,l){o=t[a](o),i(s,l,o.done,o.value)})}}function i(a,o,s,l){Promise.resolve(l).then(function(c){a({value:c,done:s})},o)}}var xe=t=>t&&typeof t.length=="number"&&typeof t!="function";function we(t){return v(t?.then)}function Se(t){return v(t[Ot])}function _e(t){return Symbol.asyncIterator&&v(t?.[Symbol.asyncIterator])}function ke(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ds(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ce=ds();function Ee(t){return v(t?.[Ce])}function Oe(t){return $i(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield pt(e.read());if(i)return yield pt(void 0);yield yield pt(r)}}finally{e.releaseLock()}})}function Ae(t){return v(t?.getReader)}function H(t){if(t instanceof C)return t;if(t!=null){if(Se(t))return hs(t);if(xe(t))return vs(t);if(we(t))return bs(t);if(_e(t))return Yi(t);if(Ee(t))return gs(t);if(Ae(t))return ys(t)}throw ke(t)}function hs(t){return new C(n=>{let e=t[Ot]();if(v(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function vs(t){return new C(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function bs(t){return new C(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,be)})}function gs(t){return new C(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Yi(t){return new C(n=>{xs(t,n).catch(e=>n.error(e))})}function ys(t){return Yi(Oe(t))}function xs(t,n){var e,r,i,a;return zi(this,void 0,void 0,function*(){try{for(e=Ui(t);r=yield e.next(),!r.done;){let o=r.value;if(n.next(o),n.closed)return}}catch(o){i={error:o}}finally{try{r&&!r.done&&(a=e.return)&&(yield a.call(e))}finally{if(i)throw i.error}}n.complete()})}function B(t,n,e,r=0,i=!1){let a=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(a),!i)return a}function Te(t,n=0){return w((e,r)=>{e.subscribe(_(r,i=>B(r,t,()=>r.next(i),n),()=>B(r,t,()=>r.complete(),n),i=>B(r,t,()=>r.error(i),n)))})}function Me(t,n=0){return w((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function Wi(t,n){return H(t).pipe(Me(n),Te(n))}function Hi(t,n){return H(t).pipe(Me(n),Te(n))}function Bi(t,n){return new C(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Vi(t,n){return new C(e=>{let r;return B(e,n,()=>{r=t[Ce](),B(e,n,()=>{let i,a;try{({value:i,done:a}=r.next())}catch(o){e.error(o);return}a?e.complete():e.next(i)},0,!0)}),()=>v(r?.return)&&r.return()})}function Ie(t,n){if(!t)throw new Error("Iterable cannot be null");return new C(e=>{B(e,n,()=>{let r=t[Symbol.asyncIterator]();B(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function Gi(t,n){return Ie(Oe(t),n)}function qi(t,n){if(t!=null){if(Se(t))return Wi(t,n);if(xe(t))return Bi(t,n);if(we(t))return Hi(t,n);if(_e(t))return Ie(t,n);if(Ee(t))return Vi(t,n);if(Ae(t))return Gi(t,n)}throw ke(t)}function Pe(t,n){return n?qi(t,n):H(t)}function Re(...t){let n=Fi(t);return Pe(t,n)}var Mt=kt(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function It(t,n){let e=typeof n=="object";return new Promise((r,i)=>{let a=new W({next:o=>{r(o),a.unsubscribe()},error:i,complete:()=>{e?r(n.defaultValue):i(new Mt)}});t.subscribe(a)})}function Vt(t,n){return w((e,r)=>{let i=0;e.subscribe(_(r,a=>{r.next(t.call(n,a,i++))}))})}var On=new C(Ht);function Z(t,n){return w((e,r)=>{let i=0;e.subscribe(_(r,a=>t.call(n,a,i++)&&r.next(a)))})}function Le(t){return w((n,e)=>{let r=null,i=!1,a;r=n.subscribe(_(e,void 0,void 0,o=>{a=H(t(o,Le(t)(n))),r?(r.unsubscribe(),r=null,a.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,a.subscribe(e))})}function Xi(t){return w((n,e)=>{let r=!1;n.subscribe(_(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function Ne(t){return t<=0?()=>Ni:w((n,e)=>{let r=0;n.subscribe(_(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function Zi(t=ws){return w((n,e)=>{let r=!1;n.subscribe(_(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function ws(){return new Mt}function An(t,n){let e=arguments.length>=2;return r=>r.pipe(t?Z((i,a)=>t(i,a,r)):At,Ne(1),e?Xi(n):Zi(()=>new Mt))}function je(...t){let n=t.length;if(n===0)throw new Error("list of properties cannot be empty.");return Vt(e=>{let r=e;for(let i=0;i<n;i++){let a=r?.[t[i]];if(typeof a<"u")r=a;else return}return r})}function Ji(t={}){let{connector:n=()=>new mt,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return a=>{let o=null,s=null,l=null,c=0,f=!1,u=!1,p=()=>{s?.unsubscribe(),s=null},h=()=>{p(),o=l=null,f=u=!1},S=()=>{let E=o;h(),E?.unsubscribe()};return w((E,M)=>{c++,!u&&!f&&p();let O=l=l??n();M.add(()=>{c--,c===0&&!u&&!f&&(s=Tn(S,i))}),O.subscribe(M),o||(o=new W({next:k=>O.next(k),error:k=>{u=!0,p(),s=Tn(h,e,k),O.error(k)},complete:()=>{f=!0,p(),s=Tn(h,r),O.complete()}}),Pe(E).subscribe(o))})(a)}}function Tn(t,n,...e){return n===!0?(t(),null):n===!1?null:n(...e).pipe(Ne(1)).subscribe(()=>t())}function Mn(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,Ji({connector:()=>new Bt(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Gt(t,n){return w((e,r)=>{let i=null,a=0,o=!1,s=()=>o&&!i&&r.complete();e.subscribe(_(r,l=>{i?.unsubscribe();let c=0,f=a++;H(t(l,f)).subscribe(i=_(r,u=>r.next(n?n(l,u,f,c++):u),()=>{i=null,s()}))},()=>{o=!0,s()}))})}function In(t,n=!1){return w((e,r)=>{let i=0;e.subscribe(_(r,a=>{let o=t(a,i++);(o||n)&&r.next(a),!o&&r.complete()}))})}function Pt(t,n,e){let r=v(t)||n||e?{next:t,error:n,complete:e}:t;return r?w((i,a)=>{var o;(o=r.subscribe)===null||o===void 0||o.call(r);let s=!0;i.subscribe(_(a,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),a.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),a.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),a.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):At}var Fe={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},ea=new Hn("scullyLibConfig",{factory:()=>Fe}),Pn=t=>(t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t),Fn=()=>window&&window.ScullyIO==="running",Rn=()=>window&&window.ScullyIO==="generated";function Ki(t,n){return t=t??"",t.endsWith("/")&&n.startsWith("/")?`${t}${n.substr(1)}`:!t.endsWith("/")&&!n.startsWith("/")?`${t}/${n}`:`${t}${n}`}var Ln="ScullyIO-transfer-state",Nn="/** ___SCULLY_STATE_START___ */",jn="/** ___SCULLY_STATE_END___ */",Ss="__done__with__Initial__navigation__",_s=(()=>{class t{constructor(e,r,i){this.document=e,this.router=r,this.http=i,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new Tt({}),this.state$=this.stateBS.pipe(Z(a=>a!==void 0)),this.nextUrl=this.router.events.pipe(Z(a=>a instanceof rr),Gt(a=>Pn(this.initialUrl)===Pn(a.url)?(this.initialUrl=Ss,On):Re(a)),Pt(()=>this.stateBS.next(void 0)),Gt(a=>this.router.events.pipe(Z(o=>o instanceof We&&o.url===a.url),An())),Vt(a=>Pn(a.urlAfterRedirects||a.url)),Mn(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(Fn()){this.injectScript();let e=window["ScullyIO-exposed"]||{};e.transferState&&(this.stateBS.next(e.transferState),this.saveState(e.transferState))}else Rn()&&(this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl=this.initialUrl!=="/"&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,this.stateBS.next(window&&window[Ln]||{}))}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",Ln);let e=this.document.body.lastChild;for(;e.previousSibling.nodeName==="SCRIPT";)e=e.previousSibling;this.document.body.insertBefore(this.script,e)}getState(e){return this.fetchTransferState(),this.state$.pipe(je(e))}stateHasKey(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)}stateKeyHasValue(e){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(e)&&this.stateBS.value[e]!=null}setState(e,r){let i=Xt(qt({},this.stateBS.value),{[e]:r});this.stateBS.next(i),this.saveState(i)}saveState(e){Fn()&&(this.script.textContent=`{window['${Ln}']=_u(\`${Nn}${ks(JSON.stringify(e))}${jn}\`);function _u(t){t=t.split('${Nn}')[1].split('${jn}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`)}setupStartNavMonitoring(){!Rn()||this.nextUrl.subscribe()}useScullyTransferState(e,r){return Rn()?this.getState(e):r.pipe(Pt(i=>this.setState(e,i)))}fetchTransferState(){return Nt(this,null,function*(){let e=a=>a.split("/").filter(o=>o.trim()!=="")[0];yield new Promise(a=>setTimeout(a,0));let r=yield It(this.nextUrl),i=e(r);this.currentBaseUrl!==i&&(this.currentBaseUrl=i,this.nextUrl.pipe(In(a=>e(a)===this.currentBaseUrl),Gt(a=>this.inlineOnly?this.readFromIndex(a):this.readFromJson(a)),Le(a=>(console.warn("Error while loading of parsing Scully state:",a),Re({}))),Pt(a=>{this.stateBS.next(a)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(e){return It(this.http.get(Qi(Ki(e,"/data.json"))))}readFromIndex(e){return It(this.http.get(Qi(Ki(e,"/index.html")),{responseType:"text"})).then(r=>{let i=r.split(Nn)[1].split(jn)[0];return JSON.parse(Cs(i))})}}return t.\u0275fac=function(e){return new(e||t)(U(Ye),U(jt),U(Zt))},t.\u0275prov=$e({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Qi(t){return t.startsWith("/")?t.slice(1):t}function ks(t){let n={"'":"_~q~",$:"_~o~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return t.replace(/[\$`'<>\/]/g,e=>n[e]).replace(/\\\"/g,"_~d~")}function Cs(t){let n={"_~q~":"'","_~b~":"`","_~o~":"$","_~s~":"/","_~l~":"<","_~g~":">"};return t.replace(/_~d~/g,'\\"').replace(/_~[^]~/g,e=>n[e]).replace(/\n/g,"\\n").replace(/\r/g,"\\r")}var Es=(()=>{class t{constructor(e,r,i,a,o){this.zone=e,this.router=r,this.document=a,this.initialUrl=Os(window&&window.location&&window.location.pathname)||"",this.imState=new Tt({idle:!1,timeOut:5*1e3}),this.idle$=this.imState.pipe(je("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},Fe,i);let l=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||Fn())&&(this.document.dispatchEvent(this.initApp),this.router.events.pipe(Z(c=>c instanceof We&&c.urlAfterRedirects!==void 0),Z(c=>l?c.urlAfterRedirects!==this.initialUrl:!0),Pt(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&this.document.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}fireManualMyAppReadyEvent(){return Nt(this,null,function*(){return this.document.dispatchEvent(this.appReady)})}init(){return It(this.idle$)}zoneIdleCheck(){return Nt(this,null,function*(){if(Zone===void 0)return this.simpleTimeout();let e=Zone.current.get("TaskTrackingZone");if(e===void 0)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let r,i=0,a=Date.now(),o=()=>{if(clearTimeout(r),Date.now()-a>30*1e3){this.document.dispatchEvent(this.appTimeout);return}if(e.macroTasks.length>0&&e.macroTasks.find(s=>s.source.includes("XMLHttpRequest"))!==void 0||i<1){r=setTimeout(()=>{i+=1,o()},50);return}this.zone.run(()=>{setTimeout(()=>{this.document.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};o()})})}simpleTimeout(){return Nt(this,null,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(e=>setTimeout(e,this.imState.value.timeOut)),this.document.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(e){this.imState.next(Xt(qt({},this.imState.value),{timeOut:e}))}setState(e,r){this.imState.next(Xt(qt({},this.imState.value),{[e]:r}))}}return t.\u0275fac=function(e){return new(e||t)(U(Kn),U(jt),U(ea),U(Ye),U(_s))},t.\u0275prov=$e({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Os(t){return t.endsWith("/")?t.slice(0,-1):t}var ta=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=it({type:t}),t.\u0275inj=nt({}),t})(),na=(()=>{class t{constructor(e){this.idle=e}static forRoot(e=Fe){return e=Object.assign({},Fe,e),{ngModule:t,providers:[{provide:ea,useValue:e}]}}}return t.\u0275fac=function(e){return new(e||t)(U(Es))},t.\u0275mod=it({type:t}),t.\u0275inj=nt({imports:[[ta,Jt],ta]}),t})();var dt=class{},De=dt;(()=>{dt.\u0275fac=function(e){return new(e||dt)}})(),(()=>{dt.\u0275mod=it({type:dt,bootstrap:[de]})})(),(()=>{dt.\u0275inj=nt({imports:[nr,me,Jt,na]})})();var ra={production:!0};li.add(aa.faPlay,ia.faPause);ci.watch();ra.production&&void 0;er().bootstrapModule(De).catch(t=>console.error(t));
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
