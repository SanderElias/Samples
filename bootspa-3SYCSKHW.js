import{c as pe}from"./chunk-YCUAPCM2.js";import"./chunk-3OQQRVZI.js";import"./chunk-YWSMVCSR.js";import{c as ce,g as de,h as me}from"./chunk-KY7AFETJ.js";import{a as oe,e as fe,f as ue}from"./chunk-A2TZKTNJ.js";import{e as ie,f as se,g as le}from"./chunk-N6XXPM5M.js";import"./chunk-6CI7QCZM.js";import"./chunk-YXYYIOOJ.js";import{Zb as re,aa as ee,fa as ae,l as te,sb as ne}from"./chunk-XM6TYFHN.js";import{d as Qt,e as Zt}from"./chunk-C6Q5SG76.js";var nn=Qt(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});var qa="fas",Qa="pause",Za=384,tn=512,Kt=[9208],en="f04c",an="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z";k.definition={prefix:qa,iconName:Qa,icon:[Za,tn,Kt,en,an]};k.faPause=k.definition;k.prefix=qa;k.iconName=Qa;k.width=Za;k.height=tn;k.ligatures=Kt;k.unicode=en;k.svgPathData=an;k.aliases=Kt});var cn=Qt(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var rn="fas",on="play",sn=448,ln=512,qt=[9654],fn="f04b",un="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z";I.definition={prefix:rn,iconName:on,icon:[sn,ln,qt,fn,un]};I.faPlay=I.definition;I.prefix=rn;I.iconName=on;I.width=sn;I.height=ln;I.ligatures=qt;I.unicode=fn;I.svgPathData=un;I.aliases=qt});function wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function Sn(t){if(Array.isArray(t))return t}function wn(t){if(Array.isArray(t))return wt(t)}function An(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function he(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Be(n.key),n)}}function kn(t,e,a){return e&&he(t.prototype,e),a&&he(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Rt(t))||e&&t&&typeof t.length=="number"){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function p(t,e,a){return(e=Be(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function In(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pn(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function En(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(a),!0).forEach(function(n){p(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ve(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function ft(t,e){return Sn(t)||Pn(t,e)||Rt(t,e)||En()}function F(t){return wn(t)||In(t)||Rt(t)||Fn()}function On(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Be(t){var e=On(t,"string");return typeof e=="symbol"?e:e+""}function it(t){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(t)}function Rt(t,e){if(t){if(typeof t=="string")return wt(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?wt(t,e):void 0}}var ge=function(){},Lt={},Ve={},Je=null,Ke={mark:ge,measure:ge};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(Ve=document),typeof MutationObserver<"u"&&(Je=MutationObserver),typeof performance<"u"&&(Ke=performance)}catch{}var Nn=Lt.navigator||{},be=Nn.userAgent,ye=be===void 0?"":be,D=Lt,g=Ve,xe=Je,et=Ke,zi=!!D.document,M=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",qe=~ye.indexOf("MSIE")||~ye.indexOf("Trident/"),vt,Tn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,jn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Qe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ze=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",q="duotone",ta="sharp",ea="sharp-duotone",aa="chisel",na="etch",ra="graphite",oa="jelly",ia="jelly-duo",sa="jelly-fill",la="notdog",fa="notdog-duo",ua="slab",ca="slab-press",da="thumbprint",ma="utility",pa="utility-duo",ha="utility-fill",va="whiteboard",_n="Classic",Dn="Duotone",$n="Sharp",Rn="Sharp Duotone",Ln="Chisel",zn="Etch",Wn="Graphite",Un="Jelly",Hn="Jelly Duo",Yn="Jelly Fill",Gn="Notdog",Xn="Notdog Duo",Bn="Slab",Vn="Slab Press",Jn="Thumbprint",Kn="Utility",qn="Utility Duo",Qn="Utility Fill",Zn="Whiteboard",ga=[C,q,ta,ea,aa,na,ra,oa,ia,sa,la,fa,ua,ca,da,ma,pa,ha,va],Wi=(vt={},p(p(p(p(p(p(p(p(p(p(vt,C,_n),q,Dn),ta,$n),ea,Rn),aa,Ln),na,zn),ra,Wn),oa,Un),ia,Hn),sa,Yn),p(p(p(p(p(p(p(p(p(vt,la,Gn),fa,Xn),ua,Bn),ca,Vn),da,Jn),ma,Kn),pa,qn),ha,Qn),va,Zn)),tr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},er={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ar=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),nr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ba=["fak","fa-kit","fakd","fa-kit-duotone"],Ce={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rr=["kit"],or="kit",ir="kit-duotone",sr="Kit",lr="Kit Duotone",Ui=p(p({},or,sr),ir,lr),fr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ur={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},cr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt,at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],mr="classic",pr="duotone",hr="sharp",vr="sharp-duotone",gr="chisel",br="etch",yr="graphite",xr="jelly",Cr="jelly-duo",Sr="jelly-fill",wr="notdog",Ar="notdog-duo",kr="slab",Ir="slab-press",Pr="thumbprint",Er="utility",Fr="utility-duo",Or="utility-fill",Nr="whiteboard",Tr="Classic",jr="Duotone",Mr="Sharp",_r="Sharp Duotone",Dr="Chisel",$r="Etch",Rr="Graphite",Lr="Jelly",zr="Jelly Duo",Wr="Jelly Fill",Ur="Notdog",Hr="Notdog Duo",Yr="Slab",Gr="Slab Press",Xr="Thumbprint",Br="Utility",Vr="Utility Duo",Jr="Utility Fill",Kr="Whiteboard",Hi=(gt={},p(p(p(p(p(p(p(p(p(p(gt,mr,Tr),pr,jr),hr,Mr),vr,_r),gr,Dr),br,$r),yr,Rr),xr,Lr),Cr,zr),Sr,Wr),p(p(p(p(p(p(p(p(p(gt,wr,Ur),Ar,Hr),kr,Yr),Ir,Gr),Pr,Xr),Er,Br),Fr,Vr),Or,Jr),Nr,Kr)),qr="kit",Qr="kit-duotone",Zr="Kit",to="Kit Duotone",Yi=p(p({},qr,Zr),Qr,to),eo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},ao={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},no=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ya=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(dr,no),ro=["solid","regular","light","thin","duotone","brands","semibold"],xa=[1,2,3,4,5,6,7,8,9,10],oo=xa.concat([11,12,13,14,15,16,17,18,19,20]),io=["aw","fw","pull-left","pull-right"],so=[].concat(F(Object.keys(ao)),ro,io,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(xa.map(function(t){return"".concat(t,"x")})).concat(oo.map(function(t){return"w-".concat(t)})),lo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",kt=16,Ca="fa",Sa="svg-inline--fa",z="data-fa-i2svg",It="data-fa-pseudo-element",fo="data-fa-pseudo-element-pending",zt="data-prefix",Wt="data-icon",we="fontawesome-i2svg",uo="async",co=["HTML","HEAD","STYLE","SCRIPT"],wa=["::before","::after",":before",":after"],Aa=(function(){try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[C]}})}var ka=f({},Qe);ka[C]=f(f(f(f({},{"fa-duotone":"duotone"}),Qe[C]),Ce.kit),Ce["kit-duotone"]);var mo=Q(ka),Pt=f({},nr);Pt[C]=f(f(f(f({},{duotone:"fad"}),Pt[C]),Se.kit),Se["kit-duotone"]);var Ae=Q(Pt),Et=f({},At);Et[C]=f(f({},Et[C]),cr.kit);var Ut=Q(Et),Ft=f({},eo);Ft[C]=f(f({},Ft[C]),fr.kit);var Gi=Q(Ft),po=Tn,Ia="fa-layers-text",ho=jn,vo=f({},tr),Xi=Q(vo),go=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt=Mn,bo=[].concat(F(rr),F(so)),V=D.FontAwesomeConfig||{};function yo(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(ke=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],ke.forEach(function(t){var e=ft(t,2),a=e[0],n=e[1],r=xo(yo(a));r!=null&&(V[n]=r)}));var ke,Pa={styleDefault:"solid",familyDefault:C,cssPrefix:Ca,replacementClass:Sa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var G=f(f({},Pa),V);G.autoReplaceSvg||(G.observeMutations=!1);var d={};Object.keys(Pa).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){G[t]=a,J.forEach(function(n){return n(d)})},get:function(){return G[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){G.cssPrefix=e,J.forEach(function(a){return a(d)})},get:function(){return G.cssPrefix}});D.FontAwesomeConfig=d;var J=[];function Co(t){return J.push(t),function(){J.splice(J.indexOf(t),1)}}var _=kt,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function So(t){if(!(!t||!M)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=g.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return g.head.insertBefore(e,n),t}}var wo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ie(){for(var t=12,e="";t-- >0;)e+=wo[Math.random()*62|0];return e}function X(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Ht(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ea(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ao(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(Ea(t[a]),'" ')},"").trim()}function ut(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function Yt(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function ko(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Io(t){var e=t.transform,a=t.width,n=a===void 0?kt:a,r=t.height,i=r===void 0?kt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&qe?l+="translate(".concat(e.x/_-n/2,"em, ").concat(e.y/_-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):l+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),l+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Po=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
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
    animation: none !important;
    transition: none !important;
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Fa(){var t=Ca,e=Sa,a=d.cssPrefix,n=d.replacementClass,r=Po;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Pe=!1;function yt(){d.autoAddCss&&!Pe&&(So(Fa()),Pe=!0)}var Eo={mixout:function(){return{dom:{css:Fa,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},j=D||{};j[T]||(j[T]={});j[T].styles||(j[T].styles={});j[T].hooks||(j[T].hooks={});j[T].shims||(j[T].shims=[]);var E=j[T],Oa=[],Na=function(){g.removeEventListener("DOMContentLoaded",Na),st=1,Oa.map(function(e){return e()})},st=!1;M&&(st=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),st||g.addEventListener("DOMContentLoaded",Na));function Fo(t){M&&(st?setTimeout(t,0):Oa.push(t))}function Z(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ea(t):"<".concat(e," ").concat(Ao(n),">").concat(i.map(Z).join(""),"</").concat(e,">")}function Ee(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Oo=function(e,a){return function(n,r,i,o){return e.call(a,n,r,i,o)}},xt=function(e,a,n,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Oo(a,r):a,l,u,m;for(n===void 0?(l=1,m=e[i[0]]):(l=0,m=n);l<o;l++)u=i[l],m=s(m,e[u],u,e);return m};function Ta(t){return F(t).length!==1?null:t.codePointAt(0).toString(16)}function Fe(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Ot(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Fe(e);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,Fe(e)):E.styles[t]=f(f({},E.styles[t]||{}),i),t==="fas"&&Ot("fa",e)}var K=E.styles,No=E.shims,ja=Object.keys(Ut),To=ja.reduce(function(t,e){return t[e]=Object.keys(Ut[e]),t},{}),Gt=null,Ma={},_a={},Da={},$a={},Ra={};function jo(t){return~bo.indexOf(t)}function Mo(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!jo(r)?r:null}var La=function(){var e=function(i){return xt(K,function(o,s,l){return o[l]=xt(s,i,{}),o},{})};Ma=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),_a=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Ra=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in K||d.autoFetchSvg,n=xt(No,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Da=n.names,$a=n.unicodes,Gt=ct(d.styleDefault,{family:d.familyDefault})};Co(function(t){Gt=ct(t.styleDefault,{family:d.familyDefault})});La();function Xt(t,e){return(Ma[t]||{})[e]}function _o(t,e){return(_a[t]||{})[e]}function L(t,e){return(Ra[t]||{})[e]}function za(t){return Da[t]||{prefix:null,iconName:null}}function Do(t){var e=$a[t],a=Xt("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function $(){return Gt}var Wa=function(){return{prefix:null,iconName:null,rest:[]}};function $o(t){var e=C,a=ja.reduce(function(n,r){return n[r]="".concat(d.cssPrefix,"-").concat(r),n},{});return ga.forEach(function(n){(t.includes(a[n])||t.some(function(r){return To[n].includes(r)}))&&(e=n)}),e}function ct(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?C:a,r=mo[n][t];if(n===q&&!t)return"fad";var i=Ae[n][t]||Ae[n][r],o=t in E.styles?t:null,s=i||o||null;return s}function Ro(t){var e=[],a=null;return t.forEach(function(n){var r=Mo(d.cssPrefix,n);r?a=r:n&&e.push(n)}),{iconName:a,rest:e}}function Oe(t){return t.sort().filter(function(e,a,n){return n.indexOf(e)===a})}var Ne=ya.concat(ba);function dt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,i=Oe(t.filter(function(h){return Ne.includes(h)})),o=Oe(t.filter(function(h){return!Ne.includes(h)})),s=i.filter(function(h){return r=h,!Ze.includes(h)}),l=ft(s,1),u=l[0],m=u===void 0?null:u,c=$o(i),v=f(f({},Ro(o)),{},{prefix:ct(m,{family:c})});return f(f(f({},v),Uo({values:t,family:c,styles:K,config:d,canonical:v,givenPrefix:r})),Lo(n,r,v))}function Lo(t,e,a){var n=a.prefix,r=a.iconName;if(t||!n||!r)return{prefix:n,iconName:r};var i=e==="fa"?za(r):{},o=L(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var zo=ga.filter(function(t){return t!==C||t!==q}),Wo=Object.keys(At).filter(function(t){return t!==C}).map(function(t){return Object.keys(At[t])}).flat();function Uo(t){var e=t.values,a=t.family,n=t.canonical,r=t.givenPrefix,i=r===void 0?"":r,o=t.styles,s=o===void 0?{}:o,l=t.config,u=l===void 0?{}:l,m=a===q,c=e.includes("fa-duotone")||e.includes("fad"),v=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(c||v||h)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&zo.includes(a)){var y=Object.keys(s).find(function(S){return Wo.includes(S)});if(y||u.autoFetchSvg){var b=ar.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=L(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=$()||"fas"),n}var Ho=(function(){function t(){An(this,t),this.definitions={}}return kn(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Ot(s,o[s]);var l=Ut[C][s];l&&Ot(l,o[s]),La()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,m=u[2];a[s]||(a[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),Te=[],H={},Y={},Yo=Object.keys(Y);function Go(t,e){var a=e.mixoutsTo;return Te=t,H={},Object.keys(Y).forEach(function(n){Yo.indexOf(n)===-1&&delete Y[n]}),Te.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),it(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}n.provides&&n.provides(Y)}),a}function Nt(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=H[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function W(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=H[t]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||$();if(e)return e=L(a,e)||e,Ee(Ua.definitions,a,e)||Ee(E.styles,a,e)}var Ua=new Ho,Xo=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,W("noAuto")},Bo={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(W("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Fo(function(){Jo({autoReplaceSvgRoot:a}),W("watch",e)})}},Vo={icon:function(e){if(e===null)return null;if(it(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:L(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ct(e[0]);return{prefix:n,iconName:L(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(po))){var r=dt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:L(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=$();return{prefix:i,iconName:L(i,e)||e}}}},A={noAuto:Xo,config:d,dom:Bo,parse:Vo,library:Ua,findIconDefinition:Tt,toHtml:Z},Jo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?g:a;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&A.dom.i2svg({node:n})};function mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Z(n)})}}),Object.defineProperty(t,"node",{get:function(){if(M){var n=g.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Ko(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Yt(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=ut(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function qo(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function Qo(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in t})}function Bt(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,u=t.extra,m=t.watchable,c=m===void 0?!1:m,v=n.found?n:a,h=v.width,y=v.height,b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(N){return u.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!Qo(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[z]="");var x=f(f({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),w=n.found&&a.found?R("generateAbstractMask",x)||{children:[],attributes:{}}:R("generateAbstractIcon",x)||{children:[],attributes:{}},P=w.children,U=w.attributes;return x.children=P,x.attributes=U,s?qo(x):Ko(x)}function je(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[z]="");var u=f({},i.styles);Yt(r)&&(u.transform=Io({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var m=ut(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),c}function Zo(t){var e=t.content,a=t.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=ut(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),i}var Ct=E.styles;function jt(t){var e=t[0],a=t[1],n=t.slice(4),r=ft(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var ti={found:!1,width:512,height:512};function ei(t,e){!Aa&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mt(t,e){var a=e;return e==="fa"&&d.styleDefault!==null&&(e=$()),new Promise(function(n,r){if(a==="fa"){var i=za(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ct[e]&&Ct[e][t]){var o=Ct[e][t];return n(jt(o))}ei(t,e),n(f(f({},ti),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var Me=function(){},_t=d.measurePerformance&&et&&et.mark&&et.measure?et:{mark:Me,measure:Me},B='FA "7.2.0"',ai=function(e){return _t.mark("".concat(B," ").concat(e," begins")),function(){return Ha(e)}},Ha=function(e){_t.mark("".concat(B," ").concat(e," ends")),_t.measure("".concat(B," ").concat(e),"".concat(B," ").concat(e," begins"),"".concat(B," ").concat(e," ends"))},Vt={begin:ai,end:Ha},rt=function(){};function _e(t){var e=t.getAttribute?t.getAttribute(z):null;return typeof e=="string"}function ni(t){var e=t.getAttribute?t.getAttribute(zt):null,a=t.getAttribute?t.getAttribute(Wt):null;return e&&a}function ri(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function oi(){if(d.autoReplaceSvg===!0)return ot.replace;var t=ot[d.autoReplaceSvg];return t||ot.replace}function ii(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function si(t){return g.createElement(t)}function Ya(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?ii:si:a;if(typeof t=="string")return g.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ya(o,{ceFn:n}))}),r}function li(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ot={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Ya(r),a)}),a.getAttribute(z)===null&&d.keepOriginalSource){var n=g.createComment(li(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Ht(a).indexOf(d.replacementClass))return ot.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return Z(s)}).join(`
`);a.setAttribute(z,""),a.innerHTML=o}};function De(t){t()}function Ga(t,e){var a=typeof e=="function"?e:rt;if(t.length===0)a();else{var n=De;d.mutateApproach===uo&&(n=D.requestAnimationFrame||De),n(function(){var r=oi(),i=Vt.begin("mutate");t.map(r),i(),a()})}}var Jt=!1;function Xa(){Jt=!0}function Dt(){Jt=!1}var lt=null;function $e(t){if(xe&&d.observeMutations){var e=t.treeCallback,a=e===void 0?rt:e,n=t.nodeCallback,r=n===void 0?rt:n,i=t.pseudoElementsCallback,o=i===void 0?rt:i,s=t.observeMutationsRoot,l=s===void 0?g:s;lt=new xe(function(u){if(!Jt){var m=$();X(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!_e(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&_e(c.target)&&~go.indexOf(c.attributeName))if(c.attributeName==="class"&&ni(c.target)){var v=dt(Ht(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(zt,h||m),y&&c.target.setAttribute(Wt,y)}else ri(c.target)&&r(c.target)})}}),M&&lt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fi(){lt&&lt.disconnect()}function ui(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function ci(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=dt(Ht(t));return r.prefix||(r.prefix=$()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=_o(r.prefix,t.innerText)||Xt(r.prefix,Ta(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function di(t){var e=X(t.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return e}function mi(){return{iconName:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ci(t),n=a.iconName,r=a.prefix,i=a.rest,o=di(t),s=Nt("parseNodeAttributes",{},t),l=e.styleParser?ui(t):[];return f({iconName:n,prefix:r,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var pi=E.styles;function Ba(t){var e=d.autoReplaceSvg==="nest"?Re(t,{styleParser:!1}):Re(t);return~e.extra.classes.indexOf(Ia)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function hi(){return[].concat(F(ba),F(ya))}function Le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=g.documentElement.classList,n=function(c){return a.add("".concat(we,"-").concat(c))},r=function(c){return a.remove("".concat(we,"-").concat(c))},i=d.autoFetchSvg?hi():Ze.concat(Object.keys(pi));i.includes("fa")||i.push("fa");var o=[".".concat(Ia,":not([").concat(z,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=X(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Vt.begin("onTree"),u=s.reduce(function(m,c){try{var v=Ba(c);v&&m.push(v)}catch(h){Aa||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(v){Ga(v,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(function(v){l(),c(v)})})}function vi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ba(t).then(function(a){a&&Ga([a],e)})}function gi(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Tt(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Tt(r||{})),t(n,f(f({},a),{},{mask:r}))}}var bi=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?O:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,m=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,h=a.attributes,y=h===void 0?{}:h,b=a.styles,S=b===void 0?{}:b;if(e){var x=e.prefix,w=e.iconName,P=e.icon;return mt(f({type:"icon"},e),function(){return W("beforeDOMElementCreation",{iconDefinition:e,params:a}),Bt({icons:{main:jt(P),mask:l?jt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:w,transform:f(f({},O),r),symbol:o,maskId:m,extra:{attributes:y,styles:S,classes:v}})})}},yi={mixout:function(){return{icon:gi(bi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Le,a.nodeCallback=vi,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?g:n,i=a.callback,o=i===void 0?function(){}:i;return Le(r,o)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,m=n.extra;return new Promise(function(c,v){Promise.all([Mt(r,i),l.iconName?Mt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=ft(h,2),b=y[0],S=y[1];c([a,Bt({icons:{main:b,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ut(s);l.length>0&&(r.style=l);var u;return Yt(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},xi={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return mt({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},Ci={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,m=n.styles,c=m===void 0?{}:m;return mt({type:"counter",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),Zo({content:a.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(F(s))}})})}}}},Si={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?O:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,m=n.styles,c=m===void 0?{}:m;return mt({type:"text",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),je({content:a,transform:f(f({},O),i),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(qe){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,je({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Va=new RegExp('"',"ug"),ze=[1105920,1112319],We=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),er),lo),ur),$t=Object.keys(We).reduce(function(t,e){return t[e.toLowerCase()]=We[e],t},{}),wi=Object.keys($t).reduce(function(t,e){var a=$t[e];return t[e]=a[900]||F(Object.entries(a))[0][1],t},{});function Ai(t){var e=t.replace(Va,"");return Ta(F(e)[0]||"")}function ki(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),a=t.getPropertyValue("content"),n=a.replace(Va,""),r=n.codePointAt(0),i=r>=ze[0]&&r<=ze[1],o=n.length===2?n[0]===n[1]:!1;return i||o||e}function Ii(t,e){var a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),r=isNaN(n)?"normal":n;return($t[a]||{})[r]||wi[a]}function Ue(t,e){var a="".concat(fo).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=X(t.children),o=i.filter(function(pt){return pt.getAttribute(It)===e})[0],s=D.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(ho),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),n();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Ii(l,m),y=Ai(v),b=u[0].startsWith("FontAwesome"),S=ki(s),x=Xt(h,y),w=x;if(b){var P=Do(y);P.iconName&&P.prefix&&(x=P.iconName,h=P.prefix)}if(x&&!S&&(!o||o.getAttribute(zt)!==h||o.getAttribute(Wt)!==w)){t.setAttribute(a,w),o&&t.removeChild(o);var U=mi(),N=U.extra;N.attributes[It]=e,Mt(x,h).then(function(pt){var xn=Bt(f(f({},U),{},{icons:{main:pt,mask:Wa()},prefix:h,iconName:w,extra:N,watchable:!0})),ht=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ht,t.firstChild):t.appendChild(ht),ht.outerHTML=xn.map(function(Cn){return Z(Cn)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Pi(t){return Promise.all([Ue(t,"::before"),Ue(t,"::after")])}function Ei(t){return t.parentNode!==document.head&&!~co.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(It)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Fi=function(e){return!!e&&wa.some(function(a){return e.includes(a)})},Oi=function(e){if(!e)return[];var a=new Set,n=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=nt(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Fi(o)){var s=wa.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function He(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(e)a=t;else if(d.searchPseudoElementsFullScan)a=t.querySelectorAll("*");else{var n=new Set,r=nt(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=nt(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=Oi(u.selectorText),c=nt(m),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;n.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var y=Array.from(n).join(", ");try{a=t.querySelectorAll(y)}catch{}}return new Promise(function(b,S){var x=X(a).filter(Ei).map(Pi),w=Vt.begin("searchPseudoElements");Xa(),Promise.all(x).then(function(){w(),Dt(),b()}).catch(function(){w(),Dt(),S()})})}}var Ni={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=He,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?g:n;d.searchPseudoElements&&He(r)}}},Ye=!1,Ti={mixout:function(){return{dom:{unwatch:function(){Xa(),Ye=!0}}}},hooks:function(){return{bootstrap:function(){$e(Nt("mutationObserverCallbacks",{}))},noAuto:function(){fi()},watch:function(a){var n=a.observeMutationsRoot;Ye?Dt():$e(Nt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ge=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},ji={mixout:function(){return{parse:{transform:function(a){return Ge(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ge(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},St={x:0,y:0,width:"100%",height:"100%"};function Xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Mi(t){return t.tag==="g"?t.children:[t]}var _i={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?dt(r.split(" ").map(function(o){return o.trim()})):Wa();return i.prefix||(i.prefix=$()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,m=i.icon,c=o.width,v=o.icon,h=ko({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},St),{},{fill:"white"})},b=m.children?{children:m.children.map(Xe)}:{},S={tag:"g",attributes:f({},h.inner),children:[Xe(f({tag:m.tag,attributes:f(f({},m.attributes),h.path)},b))]},x={tag:"g",attributes:f({},h.outer),children:[S]},w="mask-".concat(s||Ie()),P="clip-".concat(s||Ie()),U={tag:"mask",attributes:f(f({},St),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Mi(v)},U]};return n.push(N,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},St)}),{children:n,attributes:r}}}},Di={provides:function(e){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$i={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Ri=[Eo,yi,xi,Ci,Si,Ni,Ti,ji,_i,Di,$i];Go(Ri,{mixoutsTo:A});var Bi=A.noAuto,Vi=A.config,Ja=A.library,Ka=A.dom,Ji=A.parse,Ki=A.findIconDefinition,qi=A.toHtml,Qi=A.icon,Zi=A.layer,ts=A.text,es=A.counter;var bn=Zt(nn(),1),yn=Zt(cn(),1);var tt=class{};function dn(){return ae(tt)}var mn=(()=>{class t{constructor(){this.currentRouteInfo$=te(void 0)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=ee({token:t,factory:t.\u0275fac})}}return t})();var pn=(()=>{class t{#t=dn();static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=ne({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){n&1&&re(0,"router-outlet")},dependencies:[ce],encapsulation:2})}}return t})();var hn=[{path:"blog",loadComponent:()=>import("./blogs.component-TEIRXI26.js").then(t=>t.BlogsComponent)},{path:"blog/:id",loadComponent:()=>import("./blogs.component-TEIRXI26.js").then(t=>t.BlogsComponent)},{path:"",loadComponent:()=>import("./demo.component-GKKWCRZB.js").then(t=>t.DemoComponent),children:[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-M3UIONVG.js").then(t=>t.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-RNVBN5SI.js").then(t=>t.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-4FIMBTHG.js").then(t=>t.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-BGFDYJBD.js").then(t=>t.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-LECDLZ3N.js").then(t=>t.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-H2C3ZUKM.js").then(t=>t.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-L5GA5HGN.js").then(t=>t.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-BKPHI3KM.js").then(t=>t.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-UONGIDLM.js").then(t=>t.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-ZFUWOJRD.js").then(t=>t.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-ND5A4UCO.js").then(t=>t.routes)},{path:"home",redirectTo:"routeList"},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-JVEQFWKC.js").then(t=>t.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-QM2IVPV5.js").then(t=>t.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-3JBPHADV.js").then(t=>t.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-6OSDNUCG.js").then(t=>t.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-5WETJLFO.js").then(t=>t.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-FHFW6J4S.js").then(t=>t.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-CD5BTIPV.js").then(t=>t.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-KIBZWEJ5.js").then(t=>t.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-KPLJCB63.js").then(t=>t.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-V2LQB5XP.js").then(t=>t.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-QZMF6NXO.js").then(t=>t.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-HVMHMH2M.js").then(t=>t.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-J72S2P4Z.js").then(t=>t.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-ICLTFS2O.js").then(t=>t.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-HAAGSZO7.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-PTY5XGYK.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-PTY5XGYK.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-2HHFIVOG.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-MWDFDWTM.js").then(t=>t.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-TWBGXZIN.js").then(t=>t.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-ZON5DSEG.js").then(t=>t.ResizablePanelsComponent)},{path:"signalsInForm",loadComponent:()=>import("./signals-form.component-7QUF5V6C.js").then(t=>t.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-GMUZWM7U.js").then(t=>t.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-ME6HDEKB.js").then(t=>t.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-W7EHAXFW.js").then(t=>t.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-B32WYHQS.js").then(t=>t.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-LG42UMPX.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-Q2M65MBU.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-XSO6LRKC.js").then(t=>t.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-FQTI7V4R.js")},{path:"eventedOutputs",loadComponent:()=>import("./evented-outputs.component-ZRUYI5SX.js").then(t=>t.EventedOutputsComponent)},{path:"indexDb",loadComponent:()=>import("./indexdb.component-ID4GSEAX.js").then(t=>t.IndexdbComponent),title:"IndexDb sample"},{path:"acnhorPosition",loadComponent:()=>import("./anchor-pos.component-OWUUAIAT.js").then(t=>t.AnchorPosComponent),title:"Anchor Position demo"},{path:"outOfOrder",loadComponent:()=>import("./out-of-order.component-TF73VYDS.js").then(t=>t.OutOfOrderComponent)},{path:"stepper",loadComponent:()=>import("./stepper.component-5IXK55HE.js").then(t=>t.StepperComponent)},{path:"iconSprite",loadComponent:()=>import("./icon-sprite.component-SDRI4WGT.js").then(t=>t.IconSpriteComponent)},{path:"reusableDialog",loadComponent:()=>import("./reusable-dialog.component-P4RHFQFX.js").then(t=>t.ReusableDialogComponent)},{path:"tableHover",loadComponent:()=>import("./table-hover.component-5Y6ZK4GQ.js").then(t=>t.TableHoverComponent)},{path:"signalDebounce",loadComponent:()=>import("./signal-debounce.component-HFHTBOXL.js").then(t=>t.SignalDebounce)},{path:"crudStuff",loadComponent:()=>import("./crud-stuff.component-534OA5V5.js").then(t=>t.CrudStuffComponent)},{path:"customNativeForm",loadComponent:()=>import("./custom-native-form.component-MSQDQF2Q.js").then(t=>t.CustomNativeFormComponent)},{path:"inputHostExperiment",loadComponent:()=>import("./input-host-experiment.component-U6FD6KMD.js").then(t=>t.InputHostExperimentComponent)},{path:"meteredView",loadComponent:()=>import("./metered-view.component-54TUUZHW.js").then(t=>t.MeteredViewComponent)},{path:"mqtt",loadChildren:()=>import("./routes-35F2FIQJ.js")},{path:"signalForms",loadComponent:()=>import("./signal-forms-experiment.component-NCVKH7F6.js").then(t=>t.SignalFormsExperimentComponent)},{path:"signalForms/tree",loadComponent:()=>import("./signal-tree.component-ZR6AA6CM.js").then(t=>t.SignalTreeComponent)},{path:"signalForms/dynamic",loadComponent:()=>import("./dynamic.component-D7RMREBO.js").then(t=>t.DynamicComponent)},{path:"toh",loadComponent:()=>import("./toh.component-7J2OJLCF.js").then(t=>t.TohComponent)},{path:"toh/cdk",loadComponent:()=>import("./toh-cdk.component-CFDVRUF2.js").then(t=>t.TohCdkComponent)},{path:"vt",loadComponent:()=>import("./view-transitions.component-LKCYRO5C.js").then(t=>t.ViewTransitionsComponent)},{path:"inMem",loadComponent:()=>import("./in-mem-sample.component-G2TIHGEP.js").then(t=>t.InMemSampleComponent)},{path:"dynSignalForm",loadComponent:()=>import("./dynsignal-form.component-H5JV32BI.js").then(t=>t.DynsignalFormComponent)},{path:"dyn-route",loadChildren:()=>import("./dyn-routes.routes-BWU7JWNG.js").then(t=>t.dynRoutes)},{path:"timer",loadComponent:()=>import("./timer.component-Z5JL4H3N.js").then(t=>t.TimerComponent)},{path:"temporal",loadComponent:()=>import("./temporal.component-TJGZHVXX.js").then(t=>t.TemporalComponent)},{path:"gridPlay",loadComponent:()=>import("./grid-play.component-GBXFIFRT.js").then(t=>t.GridPlayComponent)},{path:"**",redirectTo:"routeList"}]}];var vn={providers:[de(hn,me()),ie(le(),se([pe])),ue(fe()),{provide:tt,useClass:mn}]};var gn={production:!0};Ja.add(yn.faPlay,bn.faPause);Ka.watch();gn.production&&void 0;oe(pn,vn).catch(t=>console.error(t));
