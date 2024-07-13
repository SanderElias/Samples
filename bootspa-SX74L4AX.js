import{a as Hn,b as Un,c as Wn,d as Gn,e as Bn,f as Xn,g as Vn,h as qn}from"./chunk-PXOSFZTA.js";import{a as Yn}from"./chunk-CWFHXJ7A.js";import{a as zn,b as jn,c as $n}from"./chunk-OGPXMZS2.js";import{i as Dn}from"./chunk-GOJFU6NU.js";import{Aa as An,C as wn,Kb as Mn,Lb as Tn,Mb as In,Ob as w,Ta as Pn,Wa as O,Xa as Yt,Xb as kt,Y as Cn,Yb as E,Zb as Nn,_b as Ln,ab as On,fa as st,gc as Rn,ha as yt,ic as Fn,lb as En,nb as S,q as $t,r as xn,rb as _n,ua as Sn,wb as y,xb as k,yb as nt}from"./chunk-XM75YRED.js";import{c as yn,d as kn}from"./chunk-KAT7YFEL.js";var aa=yn(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});var Ke="fas",Qe="pause",Je=320,ta=512,hn=[9208],na="f04c",ea="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z";T.definition={prefix:Ke,iconName:Qe,icon:[Je,ta,hn,na,ea]};T.faPause=T.definition;T.prefix=Ke;T.iconName=Qe;T.width=Je;T.height=ta;T.ligatures=hn;T.unicode=na;T.svgPathData=ea;T.aliases=hn});var ca=yn(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var ra="fas",ia="play",oa=384,sa=512,bn=[9654],la="f04b",fa="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z";I.definition={prefix:ra,iconName:ia,icon:[oa,sa,bn,la,fa]};I.faPlay=I.definition;I.prefix=ra;I.iconName=ia;I.width=oa;I.height=sa;I.ligatures=bn;I.unicode=la;I.svgPathData=fa;I.aliases=bn});function Zn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Zn(Object(e),!0).forEach(function(a){x(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Zn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},It(t)}function ya(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Kn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ka(t,n,e){return n&&Kn(t.prototype,n),e&&Kn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function an(t,n){return wa(t)||Sa(t,n)||we(t,n)||Pa()}function gt(t){return xa(t)||Ca(t)||we(t)||Aa()}function xa(t){if(Array.isArray(t))return Bt(t)}function wa(t){if(Array.isArray(t))return t}function Ca(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sa(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function we(t,n){if(t){if(typeof t=="string")return Bt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Bt(t,n)}}function Bt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Aa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qn=function(){},rn={},Ce={},Se=null,Ae={mark:Qn,measure:Qn};try{typeof window<"u"&&(rn=window),typeof document<"u"&&(Ce=document),typeof MutationObserver<"u"&&(Se=MutationObserver),typeof performance<"u"&&(Ae=performance)}catch{}var Oa=rn.navigator||{},Jn=Oa.userAgent,te=Jn===void 0?"":Jn,B=rn,h=Ce,ne=Se,xt=Ae,pi=!!B.document,U=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Pe=~te.indexOf("MSIE")||~te.indexOf("Trident/"),wt,Ct,St,At,Pt,$="___FONT_AWESOME___",Xt=16,Oe="fa",Ee="svg-inline--fa",J="data-fa-i2svg",Vt="data-fa-pseudo-element",Ea="data-fa-pseudo-element-pending",on="data-prefix",sn="data-icon",ee="fontawesome-i2svg",_a="async",Ma=["HTML","HEAD","STYLE","SCRIPT"],_e=function(){try{return!0}catch{return!1}}(),g="classic",b="sharp",ln=[g,b];function ht(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var ut=ht((wt={},x(wt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(wt,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),wt)),mt=ht((Ct={},x(Ct,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(Ct,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ct)),dt=ht((St={},x(St,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(St,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),St)),Ta=ht((At={},x(At,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(At,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),At)),Ia=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Me="fa-layers-text",Na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,La=ht((Pt={},x(Pt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(Pt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pt)),Te=[1,2,3,4,5,6,7,8,9,10],Ra=Te.concat([11,12,13,14,15,16,17,18,19,20]),Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pt=new Set;Object.keys(mt[g]).map(pt.add.bind(pt));Object.keys(mt[b]).map(pt.add.bind(pt));var Da=[].concat(ln,gt(pt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(Te.map(function(t){return"".concat(t,"x")})).concat(Ra.map(function(t){return"w-".concat(t)})),ft=B.FontAwesomeConfig||{};function za(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ja(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&(ae=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],ae.forEach(function(t){var n=an(t,2),e=n[0],a=n[1],r=ja(za(e));r!=null&&(ft[a]=r)}));var ae,Ie={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oe,replacementClass:Ee,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ft.familyPrefix&&(ft.cssPrefix=ft.familyPrefix);var it=c(c({},Ie),ft);it.autoReplaceSvg||(it.observeMutations=!1);var m={};Object.keys(Ie).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){it[t]=e,ct.forEach(function(a){return a(m)})},get:function(){return it[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){it.cssPrefix=n,ct.forEach(function(e){return e(m)})},get:function(){return it.cssPrefix}});B.FontAwesomeConfig=m;var ct=[];function $a(t){return ct.push(t),function(){ct.splice(ct.indexOf(t),1)}}var G=Xt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ya(t){if(!(!t||!U)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var Ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var t=12,n="";t-- >0;)n+=Ha[Math.random()*62|0];return n}function ot(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function fn(t){return t.classList?ot(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Ne(t[e]),'" ')},"").trim()}function Rt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function cn(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function Wa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Ga(t){var n=t.transform,e=t.width,a=e===void 0?Xt:e,r=t.height,i=r===void 0?Xt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Pe?l+="translate(".concat(n.x/G-a/2,"em, ").concat(n.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/G,"em), calc(-50% + ").concat(n.y/G,"em)) "):l+="translate(".concat(n.x/G,"em, ").concat(n.y/G,"em) "),l+="scale(".concat(n.size/G*(n.flipX?-1:1),", ").concat(n.size/G*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Le(){var t=Oe,n=Ee,e=m.cssPrefix,a=m.replacementClass,r=Ba;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var re=!1;function Ht(){m.autoAddCss&&!re&&(Ya(Le()),re=!0)}var Xa={mixout:function(){return{dom:{css:Le,insertCss:Ht}}},hooks:function(){return{beforeDOMElementCreation:function(){Ht()},beforeI2svg:function(){Ht()}}}},Y=B||{};Y[$]||(Y[$]={});Y[$].styles||(Y[$].styles={});Y[$].hooks||(Y[$].hooks={});Y[$].shims||(Y[$].shims=[]);var F=Y[$],Re=[],Va=function t(){h.removeEventListener("DOMContentLoaded",t),Nt=1,Re.map(function(n){return n()})},Nt=!1;U&&(Nt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Nt||h.addEventListener("DOMContentLoaded",Va));function qa(t){U&&(Nt?setTimeout(t,0):Re.push(t))}function bt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ne(t):"<".concat(n," ").concat(Ua(a),">").concat(i.map(bt).join(""),"</").concat(n,">")}function ie(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Za=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Ut=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Za(e,r):e,l,u,f;for(a===void 0?(l=1,f=n[i[0]]):(l=0,f=a);l<o;l++)u=i[l],f=s(f,n[u],u,n);return f};function Ka(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function qt(t){var n=Ka(t);return n.length===1?n[0].toString(16):null}function Qa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function oe(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Zt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=oe(n);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,oe(n)):F.styles[t]=c(c({},F.styles[t]||{}),i),t==="fas"&&Zt("fa",n)}var Ot,Et,_t,et=F.styles,Ja=F.shims,tr=(Ot={},x(Ot,g,Object.values(dt[g])),x(Ot,b,Object.values(dt[b])),Ot),un=null,Fe={},De={},ze={},je={},$e={},nr=(Et={},x(Et,g,Object.keys(ut[g])),x(Et,b,Object.keys(ut[b])),Et);function er(t){return~Da.indexOf(t)}function ar(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!er(r)?r:null}var Ye=function(){var n=function(i){return Ut(et,function(o,s,l){return o[l]=Ut(s,i,{}),o},{})};Fe=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),De=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),$e=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var e="far"in et||m.autoFetchSvg,a=Ut(Ja,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});ze=a.names,je=a.unicodes,un=Ft(m.styleDefault,{family:m.familyDefault})};$a(function(t){un=Ft(t.styleDefault,{family:m.familyDefault})});Ye();function mn(t,n){return(Fe[t]||{})[n]}function rr(t,n){return(De[t]||{})[n]}function Q(t,n){return($e[t]||{})[n]}function He(t){return ze[t]||{prefix:null,iconName:null}}function ir(t){var n=je[t],e=mn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function X(){return un}var dn=function(){return{prefix:null,iconName:null,rest:[]}};function Ft(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=ut[a][t],i=mt[a][t]||mt[a][r],o=t in F.styles?t:null;return i||o||null}var se=(_t={},x(_t,g,Object.keys(dt[g])),x(_t,b,Object.keys(dt[b])),_t);function Dt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},x(n,g,"".concat(m.cssPrefix,"-").concat(g)),x(n,b,"".concat(m.cssPrefix,"-").concat(b)),n),o=null,s=g;(t.includes(i[g])||t.some(function(u){return se[g].includes(u)}))&&(s=g),(t.includes(i[b])||t.some(function(u){return se[b].includes(u)}))&&(s=b);var l=t.reduce(function(u,f){var d=ar(m.cssPrefix,f);if(et[f]?(f=tr[s].includes(f)?Ta[s][f]:f,o=f,u.prefix=f):nr[s].indexOf(f)>-1?(o=f,u.prefix=Ft(f,{family:s})):d?u.iconName=d:f!==m.replacementClass&&f!==i[g]&&f!==i[b]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var p=o==="fa"?He(u.iconName):{},v=Q(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!et.far&&et.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},dn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===b&&(et.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Q(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=X()||"fas"),l}var or=function(){function t(){ya(this,t),this.definitions={}}return ka(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),Zt(s,o[s]);var l=dt[g][s];l&&Zt(l,o[s]),Ye()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];e[s]||(e[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(e[s][d]=u)}),e[s][l]=u}),e}}]),t}(),le=[],at={},rt={},sr=Object.keys(rt);function lr(t,n){var e=n.mixoutsTo;return le=t,at={},Object.keys(rt).forEach(function(a){sr.indexOf(a)===-1&&delete rt[a]}),le.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){at[o]||(at[o]=[]),at[o].push(i[o])})}a.provides&&a.provides(rt)}),e}function Kt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=at[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function tt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=at[t]||[];r.forEach(function(i){i.apply(null,e)})}function H(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return rt[t]?rt[t].apply(null,n):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||X();if(n)return n=Q(e,n)||n,ie(Ue.definitions,e,n)||ie(F.styles,e,n)}var Ue=new or,fr=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,tt("noAuto")},cr={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(tt("beforeI2svg",n),H("pseudoElements2svg",n),H("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,qa(function(){mr({autoReplaceSvgRoot:e}),tt("watch",n)})}},ur={icon:function(n){if(n===null)return null;if(It(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ft(n[0]);return{prefix:a,iconName:Q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Ia))){var r=Dt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=X();return{prefix:i,iconName:Q(i,n)||n}}}},M={noAuto:fr,config:m,dom:cr,parse:ur,library:Ue,findIconDefinition:Qt,toHtml:bt},mr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&U&&m.autoReplaceSvg&&M.dom.i2svg({node:a})};function zt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return bt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(U){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function dr(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(cn(o)&&e.found&&!a.found){var s=e.width,l=e.height,u={x:s/l/2,y:.5};r.style=Rt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function pr(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function pn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,f=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,A=a.found?a:e,N=A.width,R=A.height,D=r==="fak",C=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),P={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(R)})},z=D&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/R*16*.0625,"em")}:{};v&&(P.attributes[J]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||vt())},children:[l]}),delete P.attributes.title);var _=c(c({},P),{},{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},z),d.styles)}),q=a.found&&e.found?H("generateAbstractMask",_)||{children:[],attributes:{}}:H("generateAbstractIcon",_)||{children:[],attributes:{}},Z=q.children,jt=q.attributes;return _.children=Z,_.attributes=jt,s?pr(_):dr(_)}function fe(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[J]="");var f=c({},o.styles);cn(r)&&(f.transform=Ga({transform:r,startCentered:!0,width:e,height:a}),f["-webkit-transform"]=f.transform);var d=Rt(f);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function vr(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Rt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Wt=F.styles;function Jt(t){var n=t[0],e=t[1],a=t.slice(4),r=an(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var gr={found:!1,width:512,height:512};function hr(t,n){!_e&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function tn(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=X()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:H("missingIconAbstract")||{}};if(e==="fa"){var o=He(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Wt[n]&&Wt[n][t]){var s=Wt[n][t];return a(Jt(s))}hr(t,n),a(c(c({},gr),{},{icon:m.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}var ce=function(){},nn=m.measurePerformance&&xt&&xt.mark&&xt.measure?xt:{mark:ce,measure:ce},lt='FA "6.5.2"',br=function(n){return nn.mark("".concat(lt," ").concat(n," begins")),function(){return We(n)}},We=function(n){nn.mark("".concat(lt," ").concat(n," ends")),nn.measure("".concat(lt," ").concat(n),"".concat(lt," ").concat(n," begins"),"".concat(lt," ").concat(n," ends"))},vn={begin:br,end:We},Mt=function(){};function ue(t){var n=t.getAttribute?t.getAttribute(J):null;return typeof n=="string"}function yr(t){var n=t.getAttribute?t.getAttribute(on):null,e=t.getAttribute?t.getAttribute(sn):null;return n&&e}function kr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function xr(){if(m.autoReplaceSvg===!0)return Tt.replace;var t=Tt[m.autoReplaceSvg];return t||Tt.replace}function wr(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Cr(t){return h.createElement(t)}function Ge(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?wr:Cr:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ge(o,{ceFn:a}))}),r}function Sr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Tt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Ge(r),e)}),e.getAttribute(J)===null&&m.keepOriginalSource){var a=h.createComment(Sr(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~fn(e).indexOf(m.replacementClass))return Tt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return bt(s)}).join(`
`);e.setAttribute(J,""),e.innerHTML=o}};function me(t){t()}function Be(t,n){var e=typeof n=="function"?n:Mt;if(t.length===0)e();else{var a=me;m.mutateApproach===_a&&(a=B.requestAnimationFrame||me),a(function(){var r=xr(),i=vn.begin("mutate");t.map(r),i(),e()})}}var gn=!1;function Xe(){gn=!0}function en(){gn=!1}var Lt=null;function de(t){if(ne&&m.observeMutations){var n=t.treeCallback,e=n===void 0?Mt:n,a=t.nodeCallback,r=a===void 0?Mt:a,i=t.pseudoElementsCallback,o=i===void 0?Mt:i,s=t.observeMutationsRoot,l=s===void 0?h:s;Lt=new ne(function(u){if(!gn){var f=X();ot(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ue(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ue(d.target)&&~Fa.indexOf(d.attributeName))if(d.attributeName==="class"&&yr(d.target)){var p=Dt(fn(d.target)),v=p.prefix,A=p.iconName;d.target.setAttribute(on,v||f),A&&d.target.setAttribute(sn,A)}else kr(d.target)&&r(d.target)})}}),U&&Lt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ar(){Lt&&Lt.disconnect()}function Pr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Or(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Dt(fn(t));return r.prefix||(r.prefix=X()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=rr(r.prefix,t.innerText)||mn(r.prefix,qt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Er(t){var n=ot(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||vt()):(n["aria-hidden"]="true",n.focusable="false")),n}function _r(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Or(t),a=e.iconName,r=e.prefix,i=e.rest,o=Er(t),s=Kt("parseNodeAttributes",{},t),l=n.styleParser?Pr(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mr=F.styles;function Ve(t){var n=m.autoReplaceSvg==="nest"?pe(t,{styleParser:!1}):pe(t);return~n.extra.classes.indexOf(Me)?H("generateLayersText",t,n):H("generateSvgReplacementMutation",t,n)}var V=new Set;ln.map(function(t){V.add("fa-".concat(t))});Object.keys(ut[g]).map(V.add.bind(V));Object.keys(ut[b]).map(V.add.bind(V));V=gt(V);function ve(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=h.documentElement.classList,a=function(d){return e.add("".concat(ee,"-").concat(d))},r=function(d){return e.remove("".concat(ee,"-").concat(d))},i=m.autoFetchSvg?V:ln.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Mr));i.includes("fa")||i.push("fa");var o=[".".concat(Me,":not([").concat(J,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(J,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ot(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=vn.begin("onTree"),u=s.reduce(function(f,d){try{var p=Ve(d);p&&f.push(p)}catch(v){_e||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(p){Be(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),f()})}).catch(function(p){l(),d(p)})})}function Tr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ve(t).then(function(e){e&&Be([e],n)})}function Ir(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Qt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Nr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?j:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,u=e.maskId,f=u===void 0?null:u,d=e.title,p=d===void 0?null:d,v=e.titleId,A=v===void 0?null:v,N=e.classes,R=N===void 0?[]:N,D=e.attributes,C=D===void 0?{}:D,P=e.styles,z=P===void 0?{}:P;if(n){var _=n.prefix,q=n.iconName,Z=n.icon;return zt(c({type:"icon"},n),function(){return tt("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(p?C["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(A||vt()):(C["aria-hidden"]="true",C.focusable="false")),pn({icons:{main:Jt(Z),mask:l?Jt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:q,transform:c(c({},j),r),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:C,styles:z,classes:R}})})}},Lr={mixout:function(){return{icon:Ir(Nr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ve,e.nodeCallback=Tr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return ve(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,d=a.maskId,p=a.extra;return new Promise(function(v,A){Promise.all([tn(r,s),f.iconName?tn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var R=an(N,2),D=R[0],C=R[1];v([e,pn({icons:{main:D,mask:C},prefix:s,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,l=Rt(s);l.length>0&&(r.style=l);var u;return cn(o)&&(u=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Rr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){tt("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(gt(i)).join(" ")},children:o}]})}}}},Fr={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,f=a.styles,d=f===void 0?{}:f;return zt({type:"counter",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:a}),vr({content:e.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},Dr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,f=a.attributes,d=f===void 0?{}:f,p=a.styles,v=p===void 0?{}:p;return zt({type:"text",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:a}),fe({content:e,transform:c(c({},j),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(gt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Pe){var u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,fe({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},zr=new RegExp('"',"ug"),ge=[1105920,1112319];function jr(t){var n=t.replace(zr,""),e=Qa(n,0),a=e>=ge[0]&&e<=ge[1],r=n.length===2?n[0]===n[1]:!1;return{value:qt(r?n[0]:n),isSecondary:a||r}}function he(t,n){var e="".concat(Ea).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=ot(t.children),o=i.filter(function(Z){return Z.getAttribute(Vt)===n})[0],s=B.getComputedStyle(t,n),l=s.getPropertyValue("font-family").match(Na),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?b:g,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mt[p][l[2].toLowerCase()]:La[p][u],A=jr(d),N=A.value,R=A.isSecondary,D=l[0].startsWith("FontAwesome"),C=mn(v,N),P=C;if(D){var z=ir(N);z.iconName&&z.prefix&&(C=z.iconName,v=z.prefix)}if(C&&!R&&(!o||o.getAttribute(on)!==v||o.getAttribute(sn)!==P)){t.setAttribute(e,P),o&&t.removeChild(o);var _=_r(),q=_.extra;q.attributes[Vt]=n,tn(C,v).then(function(Z){var jt=pn(c(c({},_),{},{icons:{main:Z,mask:dn()},prefix:v,iconName:P,extra:q,watchable:!0})),W=h.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=jt.map(function(ba){return bt(ba)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function $r(t){return Promise.all([he(t,"::before"),he(t,"::after")])}function Yr(t){return t.parentNode!==document.head&&!~Ma.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function be(t){if(U)return new Promise(function(n,e){var a=ot(t.querySelectorAll("*")).filter(Yr).map($r),r=vn.begin("searchPseudoElements");Xe(),Promise.all(a).then(function(){r(),en(),n()}).catch(function(){r(),en(),e()})})}var Hr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=be,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;m.searchPseudoElements&&be(r)}}},ye=!1,Ur={mixout:function(){return{dom:{unwatch:function(){Xe(),ye=!0}}}},hooks:function(){return{bootstrap:function(){de(Kt("mutationObserverCallbacks",{}))},noAuto:function(){Ar()},watch:function(e){var a=e.observeMutationsRoot;ye?en():de(Kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ke=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Wr={mixout:function(){return{parse:{transform:function(e){return ke(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ke(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),v.path)}]}]}}}},Gt={x:0,y:0,width:"100%",height:"100%"};function xe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Gr(t){return t.tag==="g"?t.children:[t]}var Br={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Dt(r.split(" ").map(function(o){return o.trim()})):dn();return i.prefix||(i.prefix=X()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,u=i.width,f=i.icon,d=o.width,p=o.icon,v=Wa({transform:l,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:c(c({},Gt),{},{fill:"white"})},N=f.children?{children:f.children.map(xe)}:{},R={tag:"g",attributes:c({},v.inner),children:[xe(c({tag:f.tag,attributes:c(c({},f.attributes),v.path)},N))]},D={tag:"g",attributes:c({},v.outer),children:[R]},C="mask-".concat(s||vt()),P="clip-".concat(s||vt()),z={tag:"mask",attributes:c(c({},Gt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,D]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Gr(p)},z]};return a.push(_,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(C,")")},Gt)}),{children:a,attributes:r}}}},Xr={provides:function(n){var e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Vr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},qr=[Xa,Lr,Rr,Fr,Dr,Hr,Ur,Wr,Br,Xr,Vr];lr(qr,{mixoutsTo:M});var vi=M.noAuto,gi=M.config,qe=M.library,Ze=M.dom,hi=M.parse,bi=M.findIconDefinition,yi=M.toHtml,ki=M.icon,xi=M.layer,wi=M.text,Ci=M.counter;var ga=kn(aa(),1),ha=kn(ca(),1);function Kr(t,n){t&1&&(y(0,"a",0),Sn(),y(1,"svg",1)(2,"g"),nt(3,"path",2),k()(),w(4," View Source "),k()),t&2&&S("href",n,Pn)}var ua=(()=>{class t{constructor(e,a){this.router=e,this.http=a,this.path$=this.router.events.pipe(wn(Jr),$t(r=>r.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo$=xn({routes:this.routes$,path:this.path$}).pipe($t(({routes:r,path:i})=>r.find(o=>o.path.startsWith(i))),Cn(Qr))}static{this.\u0275fac=function(a){return new(a||t)(Yt(Gn),Yt(zn))}}static{this.\u0275cmp=yt({type:t,selectors:[["app-show-source"]],standalone:!0,features:[kt],decls:2,vars:3,consts:[["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(a,r){if(a&1&&(En(0,Kr,5,1,"a",0),Nn(1,"async")),a&2){let i;_n((i=(i=Ln(1,1,r.routeInfo$))==null?null:i.gitFolder)?0:-1,i)}},dependencies:[Dn],styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{padding-top:8px;width:24px;height:24px}"]})}}return t})();function Qr(t){if(!(typeof window>"u")&&!(typeof document>"u")&&t?.path){let n="https://samples.selias.dev",e=t.description||`Angular Sample page for ${t.path}
    sourcecode: ${t.gitFolder}
    demo: ${`${n}${t.path}`}`;L("og:type","website"),L("og:title",t.title),L("og:description",e),L("description",e),L("og:image",`${n}${t.largeImage}`),L("og:url",window.location.href),L("twitter:title",t.title),L("twitter:description",e),L("twitter:card","summary_large_image"),L("twitter:domain",n),L("twitter:image",`${n}${t.largeImage}`),L("twitter:url",window.location.href);let a=document.querySelector("head");if(a){let r=a.querySelector("title");if(r)r.textContent=t.title;else{let i=document.createElement("title");i.textContent=t.title,a.appendChild(i)}}}}function L(t,n){if(typeof document>"u")return;let e=document.querySelector(`meta[property="${t}"]`);if(e)e.setAttribute("content",n);else{let a=document.createElement("meta");a.setAttribute("property",t),a.setAttribute("content",n),document.head.appendChild(a)}}function Jr(t){return t instanceof Hn}var ti=["menuToggle"],ni=()=>["home"],ei=()=>["filterSamp"],ai=()=>["modalSamp"],ri=()=>["DirectiveSamp"],ii=()=>["mixinSamp"],oi=()=>["htmlLoad"],si=()=>["requiredAttributes"],li=()=>["viewModel","user"],fi=()=>["viewModel","theGood"],ci=()=>["viewModel","theBad"],ui=()=>["complexAPI"],mi=()=>["observableState"],di=()=>["dynhtml"],ma=(()=>{class t{set _toggle(e){e&&!this.checked&&(this.checked=e.nativeElement)}ngAfterContentInit(){let e=this.elmRef.nativeElement;e&&e.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>{this.checked.checked=!1}))}constructor(){this.title="samples",this.cdr=st(Fn),this.zone=st(On),this.r=st(Un),this.elmRef=st(An)}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=yt({type:t,selectors:[["app-root"]],viewQuery:function(a,r){if(a&1&&Mn(ti,7),a&2){let i;Tn(i=In())&&(r._toggle=i.first)}},standalone:!0,features:[kt],decls:53,vars:26,consts:[["menuToggle",""],["id","menuToggle"],["type","checkbox"],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(a,r){a&1&&(y(0,"nav")(1,"div",1),nt(2,"input",2,0)(4,"span")(5,"span")(6,"span"),y(7,"ul",3)(8,"a",4)(9,"li"),w(10,"Home"),k()(),y(11,"a",4)(12,"li"),w(13,"Filter Sample"),k()(),y(14,"a",4)(15,"li"),w(16,"Modal Sample"),k()(),y(17,"a",4)(18,"li"),w(19,"Directive Sample"),k()(),y(20,"a",4)(21,"li"),w(22,"Mixin Sample"),k()(),y(23,"a",4)(24,"li"),w(25,"Html load"),k()(),y(26,"a",5)(27,"li"),w(28,"Required attributes"),k()(),y(29,"li"),w(30," Reactive viewmodel "),y(31,"ul")(32,"a",4)(33,"li"),w(34,"User list"),k()(),y(35,"a",4)(36,"li"),w(37,"The Good"),k()(),y(38,"a",4)(39,"li"),w(40,"The bad"),k()()()(),y(41,"a",5)(42,"li"),w(43,"Complex API"),k()(),y(44,"a",5)(45,"li"),w(46,"Observable State"),k()(),y(47,"a",5)(48,"li"),w(49,"Dynamic HTML"),k()()()(),nt(50,"app-show-source"),k(),y(51,"div",6),nt(52,"router-outlet"),k()),a&2&&(O(8),S("routerLink",E(13,ni)),O(3),S("routerLink",E(14,ei)),O(3),S("routerLink",E(15,ai)),O(3),S("routerLink",E(16,ri)),O(3),S("routerLink",E(17,ii)),O(3),S("routerLink",E(18,oi)),O(3),S("routerLink",E(19,si)),O(6),S("routerLink",E(20,li)),O(3),S("routerLink",E(21,fi)),O(3),S("routerLink",E(22,ci)),O(3),S("routerLink",E(23,ui)),O(3),S("routerLink",E(24,mi)),O(3),S("routerLink",E(25,di)))},dependencies:[Xn,Bn,ua,Wn],styles:[`[_nghost-%COMP%] {
    display: grid;
    grid-template-rows: 40px 1fr;
    grid-row-gap: 4px;
    min-height: 99vh;
  }

  #popup[_ngcontent-%COMP%] {
    display: none -;
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

    transition:
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
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
  }`]})}}return t})();var da={production:!0};var pa=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-PNKVRXQP.js").then(t=>t.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-GXPPSLGO.js").then(t=>t.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-6NP4TQ75.js").then(t=>t.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-E25JGLVI.js").then(t=>t.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-7AY5WGFJ.js").then(t=>t.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-UXIV65GV.js").then(t=>t.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-EQBT2ZMB.js").then(t=>t.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-55FYLKC3.js").then(t=>t.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-WVN2CBPE.js").then(t=>t.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-RXYDQVAA.js").then(t=>t.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-XXUAQ33R.js").then(t=>t.routes)},{path:"home",loadComponent:()=>import("./home.component-N6RGB4E5.js").then(t=>t.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-2JISTXWH.js").then(t=>t.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-WZW3HALS.js").then(t=>t.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-XPLLAU52.js").then(t=>t.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-BTHGJSKP.js").then(t=>t.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-4XX5QPIG.js").then(t=>t.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-B6CUCPBT.js").then(t=>t.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-7FI3OFAC.js").then(t=>t.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-4E63CHVJ.js").then(t=>t.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-TM7L3TPP.js").then(t=>t.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-IUJ4LH2Q.js").then(t=>t.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-OMUG576I.js").then(t=>t.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-6JRB347R.js").then(t=>t.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-H5JP56S7.js").then(t=>t.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-EZNNFX7I.js").then(t=>t.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-RHWCR7PD.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-2HVOE4YI.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-2HVOE4YI.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-KDH7XYDP.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-CG3WE7VI.js").then(t=>t.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-QTT6OFXO.js").then(t=>t.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-E7VDQUQR.js").then(t=>t.ResizablePanelsComponent)},{path:"signalsForms",loadComponent:()=>import("./signals-form.component-L2GJXXK2.js").then(t=>t.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-5DABVUX2.js").then(t=>t.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-2BQVUM4M.js").then(t=>t.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-K2L5L7C5.js").then(t=>t.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-6BKLJJI4.js").then(t=>t.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-AT42WBVU.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-LUNYWRGU.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-65AUONWX.js").then(t=>t.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-BDNDCZ3L.js")},{path:"signalPlay/:id",loadComponent:()=>import("./signal-play.component-BDNDCZ3L.js")},{path:"**",redirectTo:"routeList"}];var va={providers:[Vn(pa,qn()),jn($n()),Rn()]};qe.add(ha.faPlay,ga.faPause);Ze.watch();da.production&&void 0;Yn(ma,va).catch(t=>console.error(t));
