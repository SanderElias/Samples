import{a as xt,c as St,d as Mt,e as kt,f as wt,g as At,h as Pt}from"./chunk-3EKSXGNN.js";import{a as gt,b as bt,c as Ct}from"./chunk-NYAX3ASD.js";import{a as ht,b as yt,c as vt}from"./chunk-MUPYOVCP.js";import{b as Ot}from"./chunk-M4CRFEE4.js";import"./chunk-Q36CS5UM.js";import"./chunk-BJIBN36K.js";import{$b as ut,Ab as b,C as ot,Fb as ct,Hb as ft,Mb as h,Nb as y,Ob as V,X as rt,Xa as lt,Za as S,ac as dt,bc as mt,da as H,fc as v,la as it,lb as ie,oc as M,q as be,r as at,tc as pt,za as st}from"./chunk-WBYBMP4K.js";import{d as tt,f as nt}from"./chunk-DAQOROHW.js";var $n=tt(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var zn="fas",jn="pause",Yn=320,Un=512,Je=[9208],Hn="f04c",Wn="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z";A.definition={prefix:zn,iconName:jn,icon:[Yn,Un,Je,Hn,Wn]};A.faPause=A.definition;A.prefix=zn;A.iconName=jn;A.width=Yn;A.height=Un;A.ligatures=Je;A.unicode=Hn;A.svgPathData=Wn;A.aliases=Je});var Zn=tt(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var Gn="fas",Bn="play",Xn=384,Vn=512,et=[9654],qn="f04b",Kn="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z";P.definition={prefix:Gn,iconName:Bn,icon:[Xn,Vn,et,qn,Kn]};P.faPlay=P.definition;P.prefix=Gn;P.iconName=Bn;P.width=Xn;P.height=Vn;P.ligatures=et;P.unicode=qn;P.svgPathData=Kn;P.aliases=et});function sa(e,t,n){return(t=ca(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(n),!0).forEach(function(a){sa(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function la(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ca(e){var t=la(e,"string");return typeof t=="symbol"?t:t+""}var Nt=()=>{},He={},nn={},an=null,on={mark:Nt,measure:Nt};try{typeof window<"u"&&(He=window),typeof document<"u"&&(nn=document),typeof MutationObserver<"u"&&(an=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}var{userAgent:_t=""}=He.navigator||{},z=He,g=nn,Tt=an,se=on,Ar=!!z.document,L=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",rn=~_t.indexOf("MSIE")||~_t.indexOf("Trident/"),fa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ua=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,sn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",me="duotone",ma="sharp",pa="sharp-duotone",cn=[C,me,ma,pa],ga={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ha={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ya=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),va={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ba=["fak","fa-kit","fakd","fa-kit-duotone"],Ft={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ca=["kit"],xa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Sa=["fak","fakd"],Ma={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},It={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],wa=["fak","fa-kit","fakd","fa-kit-duotone"],Aa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Oa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},we={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ea=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ae=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ka,...Ea],Na=["solid","regular","light","thin","duotone","brands"],fn=[1,2,3,4,5,6,7,8,9,10],_a=fn.concat([11,12,13,14,15,16,17,18,19,20]),Ta=[...Object.keys(Oa),...Na,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY].concat(fn.map(e=>"".concat(e,"x"))).concat(_a.map(e=>"w-".concat(e))),Fa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F="___FONT_AWESOME___",Pe=16,un="fa",dn="svg-inline--fa",$="data-fa-i2svg",Oe="data-fa-pseudo-element",Ia="data-fa-pseudo-element-pending",We="data-prefix",$e="data-icon",Lt="fontawesome-i2svg",La="async",Da=["HTML","HEAD","STYLE","SCRIPT"],mn=(()=>{try{return!0}catch{return!1}})();function oe(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[C]}})}var pn=s({},sn);pn[C]=s(s(s(s({},{"fa-duotone":"duotone"}),sn[C]),Ft.kit),Ft["kit-duotone"]);var Ra=oe(pn),Ee=s({},va);Ee[C]=s(s(s(s({},{duotone:"fad"}),Ee[C]),It.kit),It["kit-duotone"]);var Dt=oe(Ee),Ne=s({},we);Ne[C]=s(s({},Ne[C]),Ma.kit);var Ge=oe(Ne),_e=s({},Pa);_e[C]=s(s({},_e[C]),xa.kit);var Pr=oe(_e),za=fa,gn="fa-layers-text",ja=ua,Ya=s({},ga),Or=oe(Ya),Ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ce=da,Ha=[...Ca,...Ta],ee=z.FontAwesomeConfig||{};function Wa(e){var t=g.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $a(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t,o=$a(Wa(n));o!=null&&(ee[a]=o)});var hn={styleDefault:"solid",familyDefault:C,cssPrefix:un,replacementClass:dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ee.familyPrefix&&(ee.cssPrefix=ee.familyPrefix);var Z=s(s({},hn),ee);Z.autoReplaceSvg||(Z.observeMutations=!1);var c={};Object.keys(hn).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(t){Z[e]=t,te.forEach(n=>n(c))},get:function(){return Z[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){Z.cssPrefix=e,te.forEach(t=>t(c))},get:function(){return Z.cssPrefix}});z.FontAwesomeConfig=c;var te=[];function Ga(e){return te.push(e),()=>{te.splice(te.indexOf(e),1)}}var R=Pe,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ba(e){if(!e||!L)return;let t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=g.head.childNodes,a=null;for(let o=n.length-1;o>-1;o--){let r=n[o],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=r)}return g.head.insertBefore(t,a),e}var Xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ne(){let e=12,t="";for(;e-- >0;)t+=Xa[Math.random()*62|0];return t}function Q(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Be(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function yn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Va(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(yn(e[n]),'" '),"").trim()}function pe(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Xe(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function qa(e){let{transform:t,containerWidth:n,iconWidth:a}=e,o={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(r," ").concat(i," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:u,path:f}}function Ka(e){let{transform:t,width:n=Pe,height:a=Pe,startCentered:o=!1}=e,r="";return o&&rn?r+="translate(".concat(t.x/R-n/2,"em, ").concat(t.y/R-a/2,"em) "):o?r+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):r+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),r+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),r+="rotate(".concat(t.rotate,"deg) "),r}var Za=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
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
}`;function vn(){let e=un,t=dn,n=c.cssPrefix,a=c.replacementClass,o=Za;if(n!==e||a!==t){let r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");o=o.replace(r,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return o}var Rt=!1;function xe(){c.autoAddCss&&!Rt&&(Ba(vn()),Rt=!0)}var Qa={mixout(){return{dom:{css:vn,insertCss:xe}}},hooks(){return{beforeDOMElementCreation(){xe()},beforeI2svg(){xe()}}}},I=z||{};I[F]||(I[F]={});I[F].styles||(I[F].styles={});I[F].hooks||(I[F].hooks={});I[F].shims||(I[F].shims=[]);var _=I[F],bn=[],Cn=function(){g.removeEventListener("DOMContentLoaded",Cn),ue=1,bn.map(e=>e())},ue=!1;L&&(ue=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ue||g.addEventListener("DOMContentLoaded",Cn));function Ja(e){L&&(ue?setTimeout(e,0):bn.push(e))}function re(e){let{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?yn(e):"<".concat(t," ").concat(Va(n),">").concat(a.map(re).join(""),"</").concat(t,">")}function zt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eo=function(t,n){return function(a,o,r,i){return t.call(n,a,o,r,i)}},Se=function(t,n,a,o){var r=Object.keys(t),i=r.length,l=o!==void 0?eo(n,o):n,u,f,d;for(a===void 0?(u=1,d=t[r[0]]):(u=0,d=a);u<i;u++)f=r[u],d=l(d,t[f],f,t);return d};function to(e){let t=[],n=0,a=e.length;for(;n<a;){let o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((o&1023)<<10)+(r&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Te(e){let t=to(e);return t.length===1?t[0].toString(16):null}function no(e,t){let n=e.length,a=e.charCodeAt(t),o;return a>=55296&&a<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function jt(e){return Object.keys(e).reduce((t,n)=>{let a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Fe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,o=jt(t);typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(e,jt(t)):_.styles[e]=s(s({},_.styles[e]||{}),o),e==="fas"&&Fe("fa",t)}var{styles:ae,shims:ao}=_,xn=Object.keys(Ge),oo=xn.reduce((e,t)=>(e[t]=Object.keys(Ge[t]),e),{}),Ve=null,Sn={},Mn={},kn={},wn={},An={};function ro(e){return~Ha.indexOf(e)}function io(e,t){let n=t.split("-"),a=n[0],o=n.slice(1).join("-");return a===e&&o!==""&&!ro(o)?o:null}var Pn=()=>{let e=a=>Se(ae,(o,r,i)=>(o[i]=Se(r,a,{}),o),{});Sn=e((a,o,r)=>(o[3]&&(a[o[3]]=r),o[2]&&o[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),Mn=e((a,o,r)=>(a[r]=r,o[2]&&o[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),An=e((a,o,r)=>{let i=o[2];return a[r]=r,i.forEach(l=>{a[l]=r}),a});let t="far"in ae||c.autoFetchSvg,n=Se(ao,(a,o)=>{let r=o[0],i=o[1],l=o[2];return i==="far"&&!t&&(i="fas"),typeof r=="string"&&(a.names[r]={prefix:i,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:i,iconName:l}),a},{names:{},unicodes:{}});kn=n.names,wn=n.unicodes,Ve=ge(c.styleDefault,{family:c.familyDefault})};Ga(e=>{Ve=ge(e.styleDefault,{family:c.familyDefault})});Pn();function qe(e,t){return(Sn[e]||{})[t]}function so(e,t){return(Mn[e]||{})[t]}function W(e,t){return(An[e]||{})[t]}function On(e){return kn[e]||{prefix:null,iconName:null}}function lo(e){let t=wn[e],n=qe("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function j(){return Ve}var En=()=>({prefix:null,iconName:null,rest:[]});function co(e){let t=C,n=xn.reduce((a,o)=>(a[o]="".concat(c.cssPrefix,"-").concat(o),a),{});return cn.forEach(a=>{(e.includes(n[a])||e.some(o=>oo[a].includes(o)))&&(t=a)}),t}function ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=C}=t,a=Ra[n][e];if(n===me&&!e)return"fad";let o=Dt[n][e]||Dt[n][a],r=e in _.styles?e:null;return o||r||null}function fo(e){let t=[],n=null;return e.forEach(a=>{let o=io(c.cssPrefix,a);o?n=o:a&&t.push(a)}),{iconName:n,rest:t}}function Yt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function he(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,a=null,o=Ae.concat(wa),r=Yt(e.filter(p=>o.includes(p))),i=Yt(e.filter(p=>!Ae.includes(p))),l=r.filter(p=>(a=p,!ln.includes(p))),[u=null]=l,f=co(r),d=s(s({},fo(i)),{},{prefix:ge(u,{family:f})});return s(s(s({},d),go({values:e,family:f,styles:ae,config:c,canonical:d,givenPrefix:a})),uo(n,a,d))}function uo(e,t,n){let{prefix:a,iconName:o}=n;if(e||!a||!o)return{prefix:a,iconName:o};let r=t==="fa"?On(o):{},i=W(a,o);return o=r.iconName||i||o,a=r.prefix||a,a==="far"&&!ae.far&&ae.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}var mo=cn.filter(e=>e!==C||e!==me),po=Object.keys(we).filter(e=>e!==C).map(e=>Object.keys(we[e])).flat();function go(e){let{values:t,family:n,canonical:a,givenPrefix:o="",styles:r={},config:i={}}=e,l=n===me,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&mo.includes(n)&&(Object.keys(r).find(m=>po.includes(m))||i.autoFetchSvg)){let m=ya.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=j()||"fas"),a}var Ie=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];let o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(r=>{this.definitions[r]=s(s({},this.definitions[r]||{}),o[r]),Fe(r,o[r]);let i=Ge[C][r];i&&Fe(i,o[r]),Pn()})}reset(){this.definitions={}}_pullDefinitions(t,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{let{prefix:r,iconName:i,icon:l}=a[o],u=l[2];t[r]||(t[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[r][f]=l)}),t[r][i]=l}),t}},Ut=[],q={},K={},ho=Object.keys(K);function yo(e,t){let{mixoutsTo:n}=t;return Ut=e,q={},Object.keys(K).forEach(a=>{ho.indexOf(a)===-1&&delete K[a]}),Ut.forEach(a=>{let o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(r=>{typeof o[r]=="function"&&(n[r]=o[r]),typeof o[r]=="object"&&Object.keys(o[r]).forEach(i=>{n[r]||(n[r]={}),n[r][i]=o[r][i]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(i=>{q[i]||(q[i]=[]),q[i].push(r[i])})}a.provides&&a.provides(K)}),n}function Le(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return(q[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(q[e]||[]).forEach(r=>{r.apply(null,n)})}function Y(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||j();if(t)return t=W(n,t)||t,zt(Nn.definitions,n,t)||zt(_.styles,n,t)}var Nn=new Ie,vo=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,G("noAuto")},bo={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(G("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Ja(()=>{xo({autoReplaceSvgRoot:t}),G("watch",e)})}},Co={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ge(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(za))){let t=he(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||j(),iconName:W(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=j();return{prefix:t,iconName:W(t,e)||e}}}},w={noAuto:vo,config:c,dom:bo,parse:Co,library:Nn,findIconDefinition:De,toHtml:re},xo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=g}=e;(Object.keys(_.styles).length>0||c.autoFetchSvg)&&L&&c.autoReplaceSvg&&w.dom.i2svg({node:t})};function ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>re(n))}}),Object.defineProperty(e,"node",{get:function(){if(!L)return;let n=g.createElement("div");return n.innerHTML=e.html,n.children}}),e}function So(e){let{children:t,main:n,mask:a,attributes:o,styles:r,transform:i}=e;if(Xe(i)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};o.style=pe(s(s({},r),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Mo(e){let{prefix:t,iconName:n,children:a,attributes:o,symbol:r}=e,i=r===!0?"".concat(t,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},o),{},{id:i}),children:a}]}]}function Ke(e){let{icons:{main:t,mask:n},prefix:a,iconName:o,transform:r,symbol:i,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=e,{width:m,height:x}=n.found?n:t,D=Sa.includes(a),U=[c.replacementClass,o?"".concat(c.cssPrefix,"-").concat(o):""].filter(X=>d.classes.indexOf(X)===-1).filter(X=>X!==""||!!X).concat(d.classes).join(" "),O={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":o,class:U,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(x)})},T=D&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/x*16*.0625,"em")}:{};p&&(O.attributes[$]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||ne())},children:[l]}),delete O.attributes.title);let k=s(s({},O),{},{prefix:a,iconName:o,main:t,mask:n,maskId:u,transform:r,symbol:i,styles:s(s({},T),d.styles)}),{children:E,attributes:B}=n.found&&t.found?Y("generateAbstractMask",k)||{children:[],attributes:{}}:Y("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=E,k.attributes=B,i?Mo(k):So(k)}function Ht(e){let{content:t,width:n,height:a,transform:o,title:r,extra:i,watchable:l=!1}=e,u=s(s(s({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});l&&(u[$]="");let f=s({},i.styles);Xe(o)&&(f.transform=Ka({transform:o,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=pe(f);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[t]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function ko(e){let{content:t,title:n,extra:a}=e,o=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=pe(a.styles);r.length>0&&(o.style=r);let i=[];return i.push({tag:"span",attributes:o,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var{styles:Me}=_;function Re(e){let t=e[0],n=e[1],[a]=e.slice(4),o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(Ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var wo={found:!1,width:512,height:512};function Ao(e,t){!mn&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ze(e,t){let n=t;return t==="fa"&&c.styleDefault!==null&&(t=j()),new Promise((a,o)=>{if(n==="fa"){let r=On(e)||{};e=r.iconName||e,t=r.prefix||t}if(e&&t&&Me[t]&&Me[t][e]){let r=Me[t][e];return a(Re(r))}Ao(e,t),a(s(s({},wo),{},{icon:c.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var Wt=()=>{},je=c.measurePerformance&&se&&se.mark&&se.measure?se:{mark:Wt,measure:Wt},J='FA "6.7.2"',Po=e=>(je.mark("".concat(J," ").concat(e," begins")),()=>_n(e)),_n=e=>{je.mark("".concat(J," ").concat(e," ends")),je.measure("".concat(J," ").concat(e),"".concat(J," ").concat(e," begins"),"".concat(J," ").concat(e," ends"))},Ze={begin:Po,end:_n},ce=()=>{};function $t(e){return typeof(e.getAttribute?e.getAttribute($):null)=="string"}function Oo(e){let t=e.getAttribute?e.getAttribute(We):null,n=e.getAttribute?e.getAttribute($e):null;return t&&n}function Eo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function No(){return c.autoReplaceSvg===!0?fe.replace:fe[c.autoReplaceSvg]||fe.replace}function _o(e){return g.createElementNS("http://www.w3.org/2000/svg",e)}function To(e){return g.createElement(e)}function Tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?_o:To}=t;if(typeof e=="string")return g.createTextNode(e);let a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(r){a.setAttribute(r,e.attributes[r])}),(e.children||[]).forEach(function(r){a.appendChild(Tn(r,{ceFn:n}))}),a}function Fo(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var fe={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Tn(n),t)}),t.getAttribute($)===null&&c.keepOriginalSource){let n=g.createComment(Fo(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~Be(t).indexOf(c.replacementClass))return fe.replace(e);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((i,l)=>(l===c.replacementClass||l.match(a)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}let o=n.map(r=>re(r)).join(`
`);t.setAttribute($,""),t.innerHTML=o}};function Gt(e){e()}function Fn(e,t){let n=typeof t=="function"?t:ce;if(e.length===0)n();else{let a=Gt;c.mutateApproach===La&&(a=z.requestAnimationFrame||Gt),a(()=>{let o=No(),r=Ze.begin("mutate");e.map(o),r(),n()})}}var Qe=!1;function In(){Qe=!0}function Ye(){Qe=!1}var de=null;function Bt(e){if(!Tt||!c.observeMutations)return;let{treeCallback:t=ce,nodeCallback:n=ce,pseudoElementsCallback:a=ce,observeMutationsRoot:o=g}=e;de=new Tt(r=>{if(Qe)return;let i=j();Q(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!$t(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&$t(l.target)&&~Ua.indexOf(l.attributeName))if(l.attributeName==="class"&&Oo(l.target)){let{prefix:u,iconName:f}=he(Be(l.target));l.target.setAttribute(We,u||i),f&&l.target.setAttribute($e,f)}else Eo(l.target)&&n(l.target)})}),L&&de.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Io(){de&&de.disconnect()}function Lo(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((a,o)=>{let r=o.split(":"),i=r[0],l=r.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function Do(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",o=he(Be(e));return o.prefix||(o.prefix=j()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=so(o.prefix,e.innerText)||qe(o.prefix,Te(e.innerText))),!o.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function Ro(e){let t=Q(e.attributes).reduce((o,r)=>(o.name!=="class"&&o.name!=="style"&&(o[r.name]=r.value),o),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return c.autoA11y&&(n?t["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||ne()):(t["aria-hidden"]="true",t.focusable="false")),t}function zo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:o}=Do(e),r=Ro(e),i=Le("parseNodeAttributes",{},e),l=t.styleParser?Lo(e):[];return s({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:r}},i)}var{styles:jo}=_;function Ln(e){let t=c.autoReplaceSvg==="nest"?Xt(e,{styleParser:!1}):Xt(e);return~t.extra.classes.indexOf(gn)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function Yo(){return[...ba,...Ae]}function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();let n=g.documentElement.classList,a=d=>n.add("".concat(Lt,"-").concat(d)),o=d=>n.remove("".concat(Lt,"-").concat(d)),r=c.autoFetchSvg?Yo():ln.concat(Object.keys(jo));r.includes("fa")||r.push("fa");let i=[".".concat(gn,":not([").concat($,"])")].concat(r.map(d=>".".concat(d,":not([").concat($,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=Q(e.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),o("complete");else return Promise.resolve();let u=Ze.begin("onTree"),f=l.reduce((d,p)=>{try{let m=Ln(p);m&&d.push(m)}catch(m){mn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{Fn(m,()=>{a("active"),a("complete"),o("pending"),typeof t=="function"&&t(),u(),d()})}).catch(m=>{u(),p(m)})})}function Uo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ln(e).then(n=>{n&&Fn([n],t)})}function Ho(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:De(t||{}),{mask:o}=n;return o&&(o=(o||{}).icon?o:De(o||{})),e(a,s(s({},n),{},{mask:o}))}}var Wo=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=N,symbol:a=!1,mask:o=null,maskId:r=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=t;if(!e)return;let{prefix:p,iconName:m,icon:x}=e;return ye(s({type:"icon"},e),()=>(G("beforeDOMElementCreation",{iconDefinition:e,params:t}),c.autoA11y&&(i?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||ne()):(f["aria-hidden"]="true",f.focusable="false")),Ke({icons:{main:Re(x),mask:o?Re(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:s(s({},N),n),symbol:a,title:i,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},$o={mixout(){return{icon:Ho(Wo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Vt,e.nodeCallback=Uo,e}}},provides(e){e.i2svg=function(t){let{node:n=g,callback:a=()=>{}}=t;return Vt(n,a)},e.generateSvgReplacementMutation=function(t,n){let{iconName:a,title:o,titleId:r,prefix:i,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,x)=>{Promise.all([ze(a,i),f.iconName?ze(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[U,O]=D;m([t,Ke({icons:{main:U,mask:O},prefix:i,iconName:a,transform:l,symbol:u,maskId:d,title:o,titleId:r,extra:p,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:o,transform:r,styles:i}=t,l=pe(i);l.length>0&&(a.style=l);let u;return Xe(r)&&(u=Y("generateAbstractTransformGrouping",{main:o,transform:r,containerWidth:o.width,iconWidth:o.width})),n.push(u||o.icon),{children:n,attributes:a}}}},Go={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return ye({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(o=>{Array.isArray(o)?o.map(r=>{a=a.concat(r.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Bo={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:o={},styles:r={}}=t;return ye({type:"counter",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:t}),ko({content:e.toString(),title:n,extra:{attributes:o,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},Xo={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=N,title:a=null,classes:o=[],attributes:r={},styles:i={}}=t;return ye({type:"text",content:e},()=>(G("beforeDOMElementCreation",{content:e,params:t}),Ht({content:e,transform:s(s({},N),n),title:a,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-text"),...o]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:a,transform:o,extra:r}=n,i=null,l=null;if(rn){let u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,Ht({content:t.innerHTML,width:i,height:l,transform:o,title:a,extra:r,watchable:!0})])}}},Vo=new RegExp('"',"ug"),qt=[1105920,1112319],Kt=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),ha),Fa),Aa),Ue=Object.keys(Kt).reduce((e,t)=>(e[t.toLowerCase()]=Kt[t],e),{}),qo=Object.keys(Ue).reduce((e,t)=>{let n=Ue[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Ko(e){let t=e.replace(Vo,""),n=no(t,0),a=n>=qt[0]&&n<=qt[1],o=t.length===2?t[0]===t[1]:!1;return{value:Te(o?t[0]:t),isSecondary:a||o}}function Zo(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),o=isNaN(a)?"normal":a;return(Ue[n]||{})[o]||qo[n]}function Zt(e,t){let n="".concat(Ia).concat(t.replace(":","-"));return new Promise((a,o)=>{if(e.getAttribute(n)!==null)return a();let i=Q(e.children).filter(m=>m.getAttribute(Oe)===t)[0],l=z.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(ja),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),a();if(f&&p!=="none"&&p!==""){let m=l.getPropertyValue("content"),x=Zo(u,d),{value:D,isSecondary:U}=Ko(m),O=f[0].startsWith("FontAwesome"),T=qe(x,D),k=T;if(O){let E=lo(D);E.iconName&&E.prefix&&(T=E.iconName,x=E.prefix)}if(T&&!U&&(!i||i.getAttribute(We)!==x||i.getAttribute($e)!==k)){e.setAttribute(n,k),i&&e.removeChild(i);let E=zo(),{extra:B}=E;B.attributes[Oe]=t,ze(T,x).then(X=>{let ra=Ke(s(s({},E),{},{icons:{main:X,mask:En()},prefix:x,iconName:k,extra:B,watchable:!0})),ve=g.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ra.map(ia=>re(ia)).join(`
`),e.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function Qo(e){return Promise.all([Zt(e,"::before"),Zt(e,"::after")])}function Jo(e){return e.parentNode!==document.head&&!~Da.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qt(e){if(L)return new Promise((t,n)=>{let a=Q(e.querySelectorAll("*")).filter(Jo).map(Qo),o=Ze.begin("searchPseudoElements");In(),Promise.all(a).then(()=>{o(),Ye(),t()}).catch(()=>{o(),Ye(),n()})})}var er={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Qt,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=g}=t;c.searchPseudoElements&&Qt(n)}}},Jt=!1,tr={mixout(){return{dom:{unwatch(){In(),Jt=!0}}}},hooks(){return{bootstrap(){Bt(Le("mutationObserverCallbacks",{}))},noAuto(){Io()},watch(e){let{observeMutationsRoot:t}=e;Jt?Ye():Bt(Le("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},en=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{let o=a.toLowerCase().split("-"),r=o[0],i=o.slice(1).join("-");if(r&&i==="h")return n.flipX=!0,n;if(r&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(r){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)},nr={mixout(){return{parse:{transform:e=>en(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=en(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:o,iconWidth:r}=t,i={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:i,inner:d,path:p};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ar(e){return e.tag==="g"?e.children:[e]}var or={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),a=n?he(n.split(" ").map(o=>o.trim())):En();return a.prefix||(a.prefix=j()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:o,mask:r,maskId:i,transform:l}=t,{width:u,icon:f}=o,{width:d,icon:p}=r,m=qa({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:s(s({},ke),{},{fill:"white"})},D=f.children?{children:f.children.map(tn)}:{},U={tag:"g",attributes:s({},m.inner),children:[tn(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},D))]},O={tag:"g",attributes:s({},m.outer),children:[U]},T="mask-".concat(i||ne()),k="clip-".concat(i||ne()),E={tag:"mask",attributes:s(s({},ke),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,O]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:ar(p)},E]};return n.push(B,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(T,")")},ke)}),{children:n,attributes:a}}}},rr={provides(e){let t=!1;z.matchMedia&&(t=z.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=s(s({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:s(s({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:s(s({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ir={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},sr=[Qa,$o,Go,Bo,Xo,er,tr,nr,or,rr,ir];yo(sr,{mixoutsTo:w});var Er=w.noAuto,Nr=w.config,Dn=w.library,Rn=w.dom,_r=w.parse,Tr=w.findIconDefinition,Fr=w.toHtml,Ir=w.icon,Lr=w.layer,Dr=w.text,Rr=w.counter;var aa=nt($n(),1),oa=nt(Zn(),1);function cr(e,t){e&1&&(h(0,"a",0),it(),h(1,"svg",1)(2,"g"),V(3,"path",2),y()(),v(4," View Source "),y()),e&2&&b("href",t,lt)}var Qn=(()=>{class e{constructor(){this.router=H(Mt),this.http=H(ht),this.meta=H(bt),this.title=H(Ct),this.path$=this.router.events.pipe(ot(ur),be(n=>n.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo=Ot(at({routes:this.routes$,path:this.path$}).pipe(be(({routes:n,path:a})=>n.find(o=>o.path.startsWith(a))),rt(fr(this.meta,this.title))))}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=ie({type:e,selectors:[["app-show-source"]],decls:1,vars:1,consts:[["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(a,o){if(a&1&&ct(0,cr,5,1,"a",0),a&2){let r;ft((r=(r=o.routeInfo())==null?null:r.gitFolder)?0:-1,r)}},styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}svg[_ngcontent-%COMP%]{display:inline-block;padding:0;width:28px;height:28px}"]})}}return e})(),fr=(e,t)=>n=>{if(n?.path){let a="https://samples.selias.dev",o=n.description||`Angular Sample page for ${n.path}
    sourcecode: ${n.gitFolder}
    demo: ${`${a}${n.path}`}`,r=(l,u)=>{e.getTag(`property="${l}"`)?e.updateTag({property:l,content:u}):e.addTag({property:l,content:u})},i=new URL(a+n.path);r("og:type","website"),r("og:title",n.title),r("og:description",o),r("description",o),r("og:image",`${a}${n.largeImage}`),r("og:url",i.href),r("twitter:title",n.title),r("twitter:description",o),r("twitter:card","summary_large_image"),r("twitter:domain",a),r("twitter:image",`${a}${n.largeImage}`),r("twitter:url",i.href),t.setTitle(n.title)}};function ur(e){return e instanceof xt}var dr=["menuToggle"],mr=()=>["home"],pr=()=>["filterSamp"],gr=()=>["modalSamp"],hr=()=>["DirectiveSamp"],yr=()=>["mixinSamp"],vr=()=>["htmlLoad"],br=()=>["requiredAttributes"],Cr=()=>["viewModel","user"],xr=()=>["viewModel","theGood"],Sr=()=>["viewModel","theBad"],Mr=()=>["complexAPI"],kr=()=>["observableState"],wr=()=>["dynhtml"],Jn=(()=>{class e{constructor(){this.title="samples",this.elmRef=H(st)}set _toggle(n){n&&!this.checked&&(this.checked=n.nativeElement)}ngAfterContentInit(){let n=this.elmRef.nativeElement;n&&n.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>{this.checked.checked=!1}))}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=ie({type:e,selectors:[["app-root"]],viewQuery:function(a,o){if(a&1&&ut(dr,7),a&2){let r;dt(r=mt())&&(o._toggle=r.first)}},decls:55,vars:26,consts:[["menuToggle",""],["id","menuToggle"],["for","menutoggle"],["id","menutoggle","type","checkbox"],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(a,o){a&1&&(h(0,"nav")(1,"div",1)(2,"label",2),v(3,"menuButton"),y(),V(4,"input",3,0)(6,"span")(7,"span")(8,"span"),h(9,"ul",4)(10,"li")(11,"a",5),v(12,"Home"),y()(),h(13,"li")(14,"a",5),v(15,"Filter Sample"),y()(),h(16,"li")(17,"a",5),v(18,"Modal Sample"),y()(),h(19,"li")(20,"a",5),v(21,"Directive Sample"),y()(),h(22,"li")(23,"a",5),v(24,"Mixin Sample"),y()(),h(25,"li")(26,"a",5),v(27,"Html load"),y()(),h(28,"li")(29,"a",6),v(30,"Required attributes"),y()(),h(31,"li"),v(32," Reactive viewmodel "),h(33,"ul")(34,"li")(35,"a",5),v(36,"User list"),y()(),h(37,"li")(38,"a",5),v(39,"The Good"),y()(),h(40,"li")(41,"a",5),v(42,"The bad"),y()()()(),h(43,"li")(44,"a",6),v(45,"Complex API"),y()(),h(46,"li")(47,"a",6),v(48,"Observable State"),y()(),h(49,"li")(50,"a",6),v(51,"Dynamic HTML"),y()()()(),V(52,"app-show-source"),y(),h(53,"div",7),V(54,"router-outlet"),y()),a&2&&(S(11),b("routerLink",M(13,mr)),S(3),b("routerLink",M(14,pr)),S(3),b("routerLink",M(15,gr)),S(3),b("routerLink",M(16,hr)),S(3),b("routerLink",M(17,yr)),S(3),b("routerLink",M(18,vr)),S(3),b("routerLink",M(19,br)),S(6),b("routerLink",M(20,Cr)),S(3),b("routerLink",M(21,xr)),S(3),b("routerLink",M(22,Sr)),S(3),b("routerLink",M(23,Mr)),S(3),b("routerLink",M(24,kr)),S(3),b("routerLink",M(25,wr)))},dependencies:[wt,kt,Qn,St],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:40px 1fr;grid-row-gap:4px;min-height:99vh}nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#popup[_ngcontent-%COMP%]{display:none -;margin:0 3rem;border:2px solid green}#outlet[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none;color:#232323;transition:color .3s ease}a[_ngcontent-%COMP%]:hover{color:tomato}a.active-link[_ngcontent-%COMP%]{color:#00008b}#menuToggle[_ngcontent-%COMP%]{display:block;position:relative;top:10px;left:10px;z-index:1;-webkit-user-select:none;user-select:none}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:24px;height:2px;margin-bottom:5px;position:relative;background:#cdcdcd;border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{transform-origin:0% 0%}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2){transform-origin:0% 100%}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#232323}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]:nth-last-child(3){opacity:0;transform:rotate(0) scale(.2)}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]:nth-last-child(2){transform:rotate(-45deg) translateY(-1px)}#menu[_ngcontent-%COMP%]{position:absolute;width:300px;margin:-100px 0 0 -50px;padding:95px 50px 50px;min-height:99vh;background:#ededed;list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(-100%);transition:transform .5s cubic-bezier(.77,.2,.05,1)}#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0;font-size:22px}#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ ul[_ngcontent-%COMP%]{transform:none}"]})}}return e})();var ea=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-S35RNITD.js").then(e=>e.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-KLK3YM4M.js").then(e=>e.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-IPLLY2GB.js").then(e=>e.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-SG2OHSXP.js").then(e=>e.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-R4DG6J3Q.js").then(e=>e.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-JOYTWZD3.js").then(e=>e.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-PL4ID3CI.js").then(e=>e.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-GK7DJ3L7.js").then(e=>e.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-JE4J5IKH.js").then(e=>e.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-LY5KE5YX.js").then(e=>e.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-V4GJQDFM.js").then(e=>e.routes)},{path:"home",loadComponent:()=>import("./home.component-MBOSYHE3.js").then(e=>e.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-FSMINSEE.js").then(e=>e.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-CMDQFKDZ.js").then(e=>e.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-ZVHDUNYH.js").then(e=>e.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-QWCW7U5N.js").then(e=>e.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-5FWBNT3Y.js").then(e=>e.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-PAOJ7CKY.js").then(e=>e.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-QEOVM64J.js").then(e=>e.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-MUAMP4F7.js").then(e=>e.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-UBU4CWCN.js").then(e=>e.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-WBL2VY4B.js").then(e=>e.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-JFVQXJBE.js").then(e=>e.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-AVAMO4KE.js").then(e=>e.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-7DPMGMX6.js").then(e=>e.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-26YNKJ7F.js").then(e=>e.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-2DFQHXQQ.js").then(e=>e.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-GWGLUZ6L.js").then(e=>e.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-GWGLUZ6L.js").then(e=>e.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-62BXDH5H.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-ATHQGH6P.js").then(e=>e.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-GHW7DJHV.js").then(e=>e.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-BGAXDJBQ.js").then(e=>e.ResizablePanelsComponent)},{path:"signalsForms",loadComponent:()=>import("./signals-form.component-47CZATZP.js").then(e=>e.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-24V3BC6T.js").then(e=>e.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-JTMPGXQZ.js").then(e=>e.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-MWQAO6QY.js").then(e=>e.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-4KNIJKCO.js").then(e=>e.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-IMD46GAD.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-YN6ARD6U.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-SL562PFG.js").then(e=>e.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-BBJFHJAC.js")},{path:"eventedOutputs",loadComponent:()=>import("./evented-outputs.component-NC2ENHUD.js").then(e=>e.EventedOutputsComponent)},{path:"indexDb",loadComponent:()=>import("./indexdb.component-2IW6YBT4.js").then(e=>e.IndexdbComponent),title:"IndexDb sample"},{path:"acnhorPosition",loadComponent:()=>import("./anchor-pos.component-OP6T64QT.js").then(e=>e.AnchorPosComponent),title:"Anchor Position demo"},{path:"outOfOrder",loadComponent:()=>import("./out-of-order.component-H2CS76OD.js").then(e=>e.OutOfOrderComponent)},{path:"stepper",loadComponent:()=>import("./stepper.component-6XERMAZU.js").then(e=>e.StepperComponent)},{path:"iconSprite",loadComponent:()=>import("./icon-sprite.component-XU5IJ67Y.js").then(e=>e.IconSpriteComponent)},{path:"blog",loadComponent:()=>import("./blogs.component-AXJU2IFM.js").then(e=>e.BlogsComponent)},{path:"blog/:id",loadComponent:()=>import("./blogs.component-AXJU2IFM.js").then(e=>e.BlogsComponent)},{path:"reusableDialog",loadComponent:()=>import("./reusable-dialog.component-UTIKM2DG.js").then(e=>e.ReusableDialogComponent)},{path:"tableHover",loadComponent:()=>import("./table-hover.component-YB7GTBOQ.js").then(e=>e.TableHoverComponent)},{path:"signalDebounce",loadComponent:()=>import("./signal-debounce.component-OPS5XPSZ.js").then(e=>e.SignalDebounce)},{path:"crudStuff",loadComponent:()=>import("./crud-stuff.component-TGFUDQNY.js").then(e=>e.CrudStuffComponent)},{path:"customNativeForm",loadComponent:()=>import("./custom-native-form.component-UUQLEPUK.js").then(e=>e.CustomNativeFormComponent)},{path:"**",redirectTo:"routeList"}];var ta={providers:[At(ea,Pt()),yt(vt()),pt()]};var na={production:!0};Dn.add(oa.faPlay,aa.faPause);Rn.watch();na.production&&void 0;gt(Jn,ta).catch(e=>console.error(e));
