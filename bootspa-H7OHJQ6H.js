import{c as oe,g as ie,h as se}from"./chunk-G53A6TZ3.js";import{a as ae}from"./chunk-2GFDFODG.js";import{b as ne,c as re}from"./chunk-SS5WEMF4.js";import"./chunk-BNPMP4OE.js";import"./chunk-RZPOXGEJ.js";import{Nc as ee,Wb as te,pb as Zt}from"./chunk-3K2AM3PM.js";import{d as qt,f as Qt}from"./chunk-DAQOROHW.js";var Ja=qt(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});var Ya="fas",Ha="pause",Ga=384,Ba=512,Jt=[9208],Xa="f04c",Va="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z";k.definition={prefix:Ya,iconName:Ha,icon:[Ga,Ba,Jt,Xa,Va]};k.faPause=k.definition;k.prefix=Ya;k.iconName=Ha;k.width=Ga;k.height=Ba;k.ligatures=Jt;k.unicode=Xa;k.svgPathData=Va;k.aliases=Jt});var an=qt(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var Ka="fas",qa="play",Qa=448,Za=512,Kt=[9654],tn="f04b",en="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z";P.definition={prefix:Ka,iconName:qa,icon:[Qa,Za,Kt,tn,en]};P.faPlay=P.definition;P.prefix=Ka;P.iconName=qa;P.width=Qa;P.height=Za;P.ligatures=Kt;P.unicode=tn;P.svgPathData=en;P.aliases=Kt});function Ct(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function dn(t){if(Array.isArray(t))return t}function mn(t){if(Array.isArray(t))return Ct(t)}function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function le(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,ze(n.key),n)}}function hn(t,e,a){return e&&le(t.prototype,e),a&&le(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=$t(t))||e&&t&&typeof t.length=="number"){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function p(t,e,a){return(e=ze(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function vn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gn(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(a),!0).forEach(function(n){p(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function lt(t,e){return dn(t)||gn(t,e)||$t(t,e)||bn()}function F(t){return mn(t)||vn(t)||$t(t)||yn()}function xn(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ze(t){var e=xn(t,"string");return typeof e=="symbol"?e:e+""}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function $t(t,e){if(t){if(typeof t=="string")return Ct(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ct(t,e):void 0}}var ue=function(){},Lt={},We={},Ue=null,Ye={mark:ue,measure:ue};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(Ue=MutationObserver),typeof performance<"u"&&(Ye=performance)}catch{}var Sn=Lt.navigator||{},ce=Sn.userAgent,de=ce===void 0?"":ce,D=Lt,g=We,me=Ue,tt=Ye,Pi=!!D.document,_=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",He=~de.indexOf("MSIE")||~de.indexOf("Trident/"),ht,Cn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Ge={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},An={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],S="classic",q="duotone",Xe="sharp",Ve="sharp-duotone",Je="chisel",Ke="etch",qe="jelly",Qe="jelly-duo",Ze="jelly-fill",ta="notdog",ea="notdog-duo",aa="slab",na="slab-press",ra="thumbprint",oa="utility",ia="utility-duo",sa="utility-fill",la="whiteboard",kn="Classic",Pn="Duotone",In="Sharp",En="Sharp Duotone",Fn="Chisel",On="Etch",Nn="Jelly",Tn="Jelly Duo",jn="Jelly Fill",_n="Notdog",Mn="Notdog Duo",Dn="Slab",$n="Slab Press",Ln="Thumbprint",Rn="Utility",zn="Utility Duo",Wn="Utility Fill",Un="Whiteboard",fa=[S,q,Xe,Ve,Je,Ke,qe,Qe,Ze,ta,ea,aa,na,ra,oa,ia,sa,la],Ii=(ht={},p(p(p(p(p(p(p(p(p(p(ht,S,kn),q,Pn),Xe,In),Ve,En),Je,Fn),Ke,On),qe,Nn),Qe,Tn),Ze,jn),ta,_n),p(p(p(p(p(p(p(p(ht,ea,Mn),aa,Dn),na,$n),ra,Ln),oa,Rn),ia,zn),sa,Wn),la,Un)),Yn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Hn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Gn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Bn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ua=["fak","fa-kit","fakd","fa-kit-duotone"],pe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xn=["kit"],Vn="kit",Jn="kit-duotone",Kn="Kit",qn="Kit Duotone",Ei=p(p({},Vn,Kn),Jn,qn),Qn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Zn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},he={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vt,et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},er=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ar="classic",nr="duotone",rr="sharp",or="sharp-duotone",ir="chisel",sr="etch",lr="jelly",fr="jelly-duo",ur="jelly-fill",cr="notdog",dr="notdog-duo",mr="slab",pr="slab-press",hr="thumbprint",vr="utility",gr="utility-duo",br="utility-fill",yr="whiteboard",xr="Classic",Sr="Duotone",Cr="Sharp",wr="Sharp Duotone",Ar="Chisel",kr="Etch",Pr="Jelly",Ir="Jelly Duo",Er="Jelly Fill",Fr="Notdog",Or="Notdog Duo",Nr="Slab",Tr="Slab Press",jr="Thumbprint",_r="Utility",Mr="Utility Duo",Dr="Utility Fill",$r="Whiteboard",Fi=(vt={},p(p(p(p(p(p(p(p(p(p(vt,ar,xr),nr,Sr),rr,Cr),or,wr),ir,Ar),sr,kr),lr,Pr),fr,Ir),ur,Er),cr,Fr),p(p(p(p(p(p(p(p(vt,dr,Or),mr,Nr),pr,Tr),hr,jr),vr,_r),gr,Mr),br,Dr),yr,$r)),Lr="kit",Rr="kit-duotone",zr="Kit",Wr="Kit Duotone",Oi=p(p({},Lr,zr),Rr,Wr),Ur={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Yr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},wt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Hr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ca=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(er,Hr),Gr=["solid","regular","light","thin","duotone","brands","semibold"],da=[1,2,3,4,5,6,7,8,9,10],Br=da.concat([11,12,13,14,15,16,17,18,19,20]),Xr=["aw","fw","pull-left","pull-right"],Vr=[].concat(F(Object.keys(Yr)),Gr,Xr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(da.map(function(t){return"".concat(t,"x")})).concat(Br.map(function(t){return"w-".concat(t)})),Jr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",At=16,ma="fa",pa="svg-inline--fa",z="data-fa-i2svg",kt="data-fa-pseudo-element",Kr="data-fa-pseudo-element-pending",Rt="data-prefix",zt="data-icon",ve="fontawesome-i2svg",qr="async",Qr=["HTML","HEAD","STYLE","SCRIPT"],ha=["::before","::after",":before",":after"],va=(function(){try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[S]}})}var ga=f({},Ge);ga[S]=f(f(f(f({},{"fa-duotone":"duotone"}),Ge[S]),pe.kit),pe["kit-duotone"]);var Zr=Q(ga),Pt=f({},Bn);Pt[S]=f(f(f(f({},{duotone:"fad"}),Pt[S]),he.kit),he["kit-duotone"]);var ge=Q(Pt),It=f({},wt);It[S]=f(f({},It[S]),tr.kit);var Wt=Q(It),Et=f({},Ur);Et[S]=f(f({},Et[S]),Qn.kit);var Ni=Q(Et),to=Cn,ba="fa-layers-text",eo=wn,ao=f({},Yn),Ti=Q(ao),no=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=An,ro=[].concat(F(Xn),F(Vr)),V=D.FontAwesomeConfig||{};function oo(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function io(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(be=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],be.forEach(function(t){var e=lt(t,2),a=e[0],n=e[1],r=io(oo(a));r!=null&&(V[n]=r)}));var be,ya={styleDefault:"solid",familyDefault:S,cssPrefix:ma,replacementClass:pa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var G=f(f({},ya),V);G.autoReplaceSvg||(G.observeMutations=!1);var d={};Object.keys(ya).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){G[t]=a,J.forEach(function(n){return n(d)})},get:function(){return G[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){G.cssPrefix=e,J.forEach(function(a){return a(d)})},get:function(){return G.cssPrefix}});D.FontAwesomeConfig=d;var J=[];function so(t){return J.push(t),function(){J.splice(J.indexOf(t),1)}}var M=At,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lo(t){if(!(!t||!_)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=g.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return g.head.insertBefore(e,n),t}}var fo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ye(){for(var t=12,e="";t-- >0;)e+=fo[Math.random()*62|0];return e}function B(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Ut(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uo(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(xa(t[a]),'" ')},"").trim()}function ft(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function Yt(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function co(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function mo(t){var e=t.transform,a=t.width,n=a===void 0?At:a,r=t.height,i=r===void 0?At:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&He?l+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):l+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),l+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var po=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
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
}`;function Sa(){var t=ma,e=pa,a=d.cssPrefix,n=d.replacementClass,r=po;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var xe=!1;function bt(){d.autoAddCss&&!xe&&(lo(Sa()),xe=!0)}var ho={mixout:function(){return{dom:{css:Sa,insertCss:bt}}},hooks:function(){return{beforeDOMElementCreation:function(){bt()},beforeI2svg:function(){bt()}}}},j=D||{};j[T]||(j[T]={});j[T].styles||(j[T].styles={});j[T].hooks||(j[T].hooks={});j[T].shims||(j[T].shims=[]);var E=j[T],Ca=[],wa=function(){g.removeEventListener("DOMContentLoaded",wa),it=1,Ca.map(function(e){return e()})},it=!1;_&&(it=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),it||g.addEventListener("DOMContentLoaded",wa));function vo(t){_&&(it?setTimeout(t,0):Ca.push(t))}function Z(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?xa(t):"<".concat(e," ").concat(uo(n),">").concat(i.map(Z).join(""),"</").concat(e,">")}function Se(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var go=function(e,a){return function(n,r,i,o){return e.call(a,n,r,i,o)}},yt=function(e,a,n,r){var i=Object.keys(e),o=i.length,s=r!==void 0?go(a,r):a,l,u,m;for(n===void 0?(l=1,m=e[i[0]]):(l=0,m=n);l<o;l++)u=i[l],m=s(m,e[u],u,e);return m};function Aa(t){return F(t).length!==1?null:t.codePointAt(0).toString(16)}function Ce(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Ft(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Ce(e);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,Ce(e)):E.styles[t]=f(f({},E.styles[t]||{}),i),t==="fas"&&Ft("fa",e)}var K=E.styles,bo=E.shims,ka=Object.keys(Wt),yo=ka.reduce(function(t,e){return t[e]=Object.keys(Wt[e]),t},{}),Ht=null,Pa={},Ia={},Ea={},Fa={},Oa={};function xo(t){return~ro.indexOf(t)}function So(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!xo(r)?r:null}var Na=function(){var e=function(i){return yt(K,function(o,s,l){return o[l]=yt(s,i,{}),o},{})};Pa=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Ia=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Oa=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in K||d.autoFetchSvg,n=yt(bo,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Ea=n.names,Fa=n.unicodes,Ht=ut(d.styleDefault,{family:d.familyDefault})};so(function(t){Ht=ut(t.styleDefault,{family:d.familyDefault})});Na();function Gt(t,e){return(Pa[t]||{})[e]}function Co(t,e){return(Ia[t]||{})[e]}function R(t,e){return(Oa[t]||{})[e]}function Ta(t){return Ea[t]||{prefix:null,iconName:null}}function wo(t){var e=Fa[t],a=Gt("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function $(){return Ht}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function Ao(t){var e=S,a=ka.reduce(function(n,r){return n[r]="".concat(d.cssPrefix,"-").concat(r),n},{});return fa.forEach(function(n){(t.includes(a[n])||t.some(function(r){return yo[n].includes(r)}))&&(e=n)}),e}function ut(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?S:a,r=Zr[n][t];if(n===q&&!t)return"fad";var i=ge[n][t]||ge[n][r],o=t in E.styles?t:null,s=i||o||null;return s}function ko(t){var e=[],a=null;return t.forEach(function(n){var r=So(d.cssPrefix,n);r?a=r:n&&e.push(n)}),{iconName:a,rest:e}}function we(t){return t.sort().filter(function(e,a,n){return n.indexOf(e)===a})}var Ae=ca.concat(ua);function ct(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,i=we(t.filter(function(h){return Ae.includes(h)})),o=we(t.filter(function(h){return!Ae.includes(h)})),s=i.filter(function(h){return r=h,!Be.includes(h)}),l=lt(s,1),u=l[0],m=u===void 0?null:u,c=Ao(i),v=f(f({},ko(o)),{},{prefix:ut(m,{family:c})});return f(f(f({},v),Fo({values:t,family:c,styles:K,config:d,canonical:v,givenPrefix:r})),Po(n,r,v))}function Po(t,e,a){var n=a.prefix,r=a.iconName;if(t||!n||!r)return{prefix:n,iconName:r};var i=e==="fa"?Ta(r):{},o=R(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Io=fa.filter(function(t){return t!==S||t!==q}),Eo=Object.keys(wt).filter(function(t){return t!==S}).map(function(t){return Object.keys(wt[t])}).flat();function Fo(t){var e=t.values,a=t.family,n=t.canonical,r=t.givenPrefix,i=r===void 0?"":r,o=t.styles,s=o===void 0?{}:o,l=t.config,u=l===void 0?{}:l,m=a===q,c=e.includes("fa-duotone")||e.includes("fad"),v=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(c||v||h)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Io.includes(a)){var y=Object.keys(s).find(function(C){return Eo.includes(C)});if(y||u.autoFetchSvg){var b=Gn.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=R(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=$()||"fas"),n}var Oo=(function(){function t(){pn(this,t),this.definitions={}}return hn(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Ft(s,o[s]);var l=Wt[S][s];l&&Ft(l,o[s]),Na()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,m=u[2];a[s]||(a[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),ke=[],Y={},H={},No=Object.keys(H);function To(t,e){var a=e.mixoutsTo;return ke=t,Y={},Object.keys(H).forEach(function(n){No.indexOf(n)===-1&&delete H[n]}),ke.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),ot(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Y[o]||(Y[o]=[]),Y[o].push(i[o])})}n.provides&&n.provides(H)}),a}function Ot(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Y[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function W(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=Y[t]||[];r.forEach(function(i){i.apply(null,a)})}function L(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Nt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||$();if(e)return e=R(a,e)||e,Se(_a.definitions,a,e)||Se(E.styles,a,e)}var _a=new Oo,jo=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,W("noAuto")},_o={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(W("beforeI2svg",e),L("pseudoElements2svg",e),L("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,vo(function(){Do({autoReplaceSvgRoot:a}),W("watch",e)})}},Mo={icon:function(e){if(e===null)return null;if(ot(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:R(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ut(e[0]);return{prefix:n,iconName:R(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(to))){var r=ct(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:R(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=$();return{prefix:i,iconName:R(i,e)||e}}}},A={noAuto:jo,config:d,dom:_o,parse:Mo,library:_a,findIconDefinition:Nt,toHtml:Z},Do=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?g:a;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&_&&d.autoReplaceSvg&&A.dom.i2svg({node:n})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Z(n)})}}),Object.defineProperty(t,"node",{get:function(){if(_){var n=g.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function $o(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Yt(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=ft(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Lo(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function Ro(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in t})}function Bt(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,u=t.extra,m=t.watchable,c=m===void 0?!1:m,v=n.found?n:a,h=v.width,y=v.height,b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(N){return u.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(u.classes).join(" "),C={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!Ro(u.attributes)&&!u.attributes["aria-hidden"]&&(C.attributes["aria-hidden"]="true"),c&&(C.attributes[z]="");var x=f(f({},C),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),w=n.found&&a.found?L("generateAbstractMask",x)||{children:[],attributes:{}}:L("generateAbstractIcon",x)||{children:[],attributes:{}},I=w.children,U=w.attributes;return x.children=I,x.attributes=U,s?Lo(x):$o(x)}function Pe(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[z]="");var u=f({},i.styles);Yt(r)&&(u.transform=mo({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var m=ft(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),c}function zo(t){var e=t.content,a=t.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=ft(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),i}var xt=E.styles;function Tt(t){var e=t[0],a=t[1],n=t.slice(4),r=lt(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var Wo={found:!1,width:512,height:512};function Uo(t,e){!va&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jt(t,e){var a=e;return e==="fa"&&d.styleDefault!==null&&(e=$()),new Promise(function(n,r){if(a==="fa"){var i=Ta(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xt[e]&&xt[e][t]){var o=xt[e][t];return n(Tt(o))}Uo(t,e),n(f(f({},Wo),{},{icon:d.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Ie=function(){},_t=d.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:Ie,measure:Ie},X='FA "7.1.0"',Yo=function(e){return _t.mark("".concat(X," ").concat(e," begins")),function(){return Ma(e)}},Ma=function(e){_t.mark("".concat(X," ").concat(e," ends")),_t.measure("".concat(X," ").concat(e),"".concat(X," ").concat(e," begins"),"".concat(X," ").concat(e," ends"))},Xt={begin:Yo,end:Ma},nt=function(){};function Ee(t){var e=t.getAttribute?t.getAttribute(z):null;return typeof e=="string"}function Ho(t){var e=t.getAttribute?t.getAttribute(Rt):null,a=t.getAttribute?t.getAttribute(zt):null;return e&&a}function Go(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Bo(){if(d.autoReplaceSvg===!0)return rt.replace;var t=rt[d.autoReplaceSvg];return t||rt.replace}function Xo(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Vo(t){return g.createElement(t)}function Da(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?Xo:Vo:a;if(typeof t=="string")return g.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Da(o,{ceFn:n}))}),r}function Jo(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rt={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Da(r),a)}),a.getAttribute(z)===null&&d.keepOriginalSource){var n=g.createComment(Jo(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Ut(a).indexOf(d.replacementClass))return rt.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return Z(s)}).join(`
`);a.setAttribute(z,""),a.innerHTML=o}};function Fe(t){t()}function $a(t,e){var a=typeof e=="function"?e:nt;if(t.length===0)a();else{var n=Fe;d.mutateApproach===qr&&(n=D.requestAnimationFrame||Fe),n(function(){var r=Bo(),i=Xt.begin("mutate");t.map(r),i(),a()})}}var Vt=!1;function La(){Vt=!0}function Mt(){Vt=!1}var st=null;function Oe(t){if(me&&d.observeMutations){var e=t.treeCallback,a=e===void 0?nt:e,n=t.nodeCallback,r=n===void 0?nt:n,i=t.pseudoElementsCallback,o=i===void 0?nt:i,s=t.observeMutationsRoot,l=s===void 0?g:s;st=new me(function(u){if(!Vt){var m=$();B(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Ee(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&Ee(c.target)&&~no.indexOf(c.attributeName))if(c.attributeName==="class"&&Ho(c.target)){var v=ct(Ut(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(Rt,h||m),y&&c.target.setAttribute(zt,y)}else Go(c.target)&&r(c.target)})}}),_&&st.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ko(){st&&st.disconnect()}function qo(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Qo(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=ct(Ut(t));return r.prefix||(r.prefix=$()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Co(r.prefix,t.innerText)||Gt(r.prefix,Aa(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Zo(t){var e=B(t.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return e}function ti(){return{iconName:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Qo(t),n=a.iconName,r=a.prefix,i=a.rest,o=Zo(t),s=Ot("parseNodeAttributes",{},t),l=e.styleParser?qo(t):[];return f({iconName:n,prefix:r,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ei=E.styles;function Ra(t){var e=d.autoReplaceSvg==="nest"?Ne(t,{styleParser:!1}):Ne(t);return~e.extra.classes.indexOf(ba)?L("generateLayersText",t,e):L("generateSvgReplacementMutation",t,e)}function ai(){return[].concat(F(ua),F(ca))}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=g.documentElement.classList,n=function(c){return a.add("".concat(ve,"-").concat(c))},r=function(c){return a.remove("".concat(ve,"-").concat(c))},i=d.autoFetchSvg?ai():Be.concat(Object.keys(ei));i.includes("fa")||i.push("fa");var o=[".".concat(ba,":not([").concat(z,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=B(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Xt.begin("onTree"),u=s.reduce(function(m,c){try{var v=Ra(c);v&&m.push(v)}catch(h){va||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(v){$a(v,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(function(v){l(),c(v)})})}function ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ra(t).then(function(a){a&&$a([a],e)})}function ri(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Nt(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Nt(r||{})),t(n,f(f({},a),{},{mask:r}))}}var oi=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?O:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,m=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,h=a.attributes,y=h===void 0?{}:h,b=a.styles,C=b===void 0?{}:b;if(e){var x=e.prefix,w=e.iconName,I=e.icon;return dt(f({type:"icon"},e),function(){return W("beforeDOMElementCreation",{iconDefinition:e,params:a}),Bt({icons:{main:Tt(I),mask:l?Tt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:w,transform:f(f({},O),r),symbol:o,maskId:m,extra:{attributes:y,styles:C,classes:v}})})}},ii={mixout:function(){return{icon:ri(oi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Te,a.nodeCallback=ni,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?g:n,i=a.callback,o=i===void 0?function(){}:i;return Te(r,o)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,m=n.extra;return new Promise(function(c,v){Promise.all([jt(r,i),l.iconName?jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=lt(h,2),b=y[0],C=y[1];c([a,Bt({icons:{main:b,mask:C},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ft(s);l.length>0&&(r.style=l);var u;return Yt(o)&&(u=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},si={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return dt({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},li={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,m=n.styles,c=m===void 0?{}:m;return dt({type:"counter",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),zo({content:a.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(F(s))}})})}}}},fi={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?O:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,m=n.styles,c=m===void 0?{}:m;return dt({type:"text",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),Pe({content:a,transform:f(f({},O),i),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(He){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,Pe({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},za=new RegExp('"',"ug"),je=[1105920,1112319],_e=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Hn),Jr),Zn),Dt=Object.keys(_e).reduce(function(t,e){return t[e.toLowerCase()]=_e[e],t},{}),ui=Object.keys(Dt).reduce(function(t,e){var a=Dt[e];return t[e]=a[900]||F(Object.entries(a))[0][1],t},{});function ci(t){var e=t.replace(za,"");return Aa(F(e)[0]||"")}function di(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),a=t.getPropertyValue("content"),n=a.replace(za,""),r=n.codePointAt(0),i=r>=je[0]&&r<=je[1],o=n.length===2?n[0]===n[1]:!1;return i||o||e}function mi(t,e){var a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),r=isNaN(n)?"normal":n;return(Dt[a]||{})[r]||ui[a]}function Me(t,e){var a="".concat(Kr).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=B(t.children),o=i.filter(function(mt){return mt.getAttribute(kt)===e})[0],s=D.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(eo),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),n();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=mi(l,m),y=ci(v),b=u[0].startsWith("FontAwesome"),C=di(s),x=Gt(h,y),w=x;if(b){var I=wo(y);I.iconName&&I.prefix&&(x=I.iconName,h=I.prefix)}if(x&&!C&&(!o||o.getAttribute(Rt)!==h||o.getAttribute(zt)!==w)){t.setAttribute(a,w),o&&t.removeChild(o);var U=ti(),N=U.extra;N.attributes[kt]=e,jt(x,h).then(function(mt){var un=Bt(f(f({},U),{},{icons:{main:mt,mask:ja()},prefix:h,iconName:w,extra:N,watchable:!0})),pt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(pt,t.firstChild):t.appendChild(pt),pt.outerHTML=un.map(function(cn){return Z(cn)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function pi(t){return Promise.all([Me(t,"::before"),Me(t,"::after")])}function hi(t){return t.parentNode!==document.head&&!~Qr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var vi=function(e){return!!e&&ha.some(function(a){return e.includes(a)})},gi=function(e){if(!e)return[];var a=new Set,n=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=at(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(vi(o)){var s=ha.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function De(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var a;if(e)a=t;else if(d.searchPseudoElementsFullScan)a=t.querySelectorAll("*");else{var n=new Set,r=at(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=at(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=gi(u.selectorText),c=at(m),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;n.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var y=Array.from(n).join(", ");try{a=t.querySelectorAll(y)}catch{}}return new Promise(function(b,C){var x=B(a).filter(hi).map(pi),w=Xt.begin("searchPseudoElements");La(),Promise.all(x).then(function(){w(),Mt(),b()}).catch(function(){w(),Mt(),C()})})}}var bi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=De,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?g:n;d.searchPseudoElements&&De(r)}}},$e=!1,yi={mixout:function(){return{dom:{unwatch:function(){La(),$e=!0}}}},hooks:function(){return{bootstrap:function(){Oe(Ot("mutationObserverCallbacks",{}))},noAuto:function(){Ko()},watch:function(a){var n=a.observeMutationsRoot;$e?Mt():Oe(Ot("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Le=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},xi={mixout:function(){return{parse:{transform:function(a){return Le(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Le(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},St={x:0,y:0,width:"100%",height:"100%"};function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Si(t){return t.tag==="g"?t.children:[t]}var Ci={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?ct(r.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=$()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,m=i.icon,c=o.width,v=o.icon,h=co({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},St),{},{fill:"white"})},b=m.children?{children:m.children.map(Re)}:{},C={tag:"g",attributes:f({},h.inner),children:[Re(f({tag:m.tag,attributes:f(f({},m.attributes),h.path)},b))]},x={tag:"g",attributes:f({},h.outer),children:[C]},w="mask-".concat(s||ye()),I="clip-".concat(s||ye()),U={tag:"mask",attributes:f(f({},St),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Si(v)},U]};return n.push(N,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(w,")")},St)}),{children:n,attributes:r}}}},wi={provides:function(e){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ai={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},ki=[ho,ii,si,li,fi,bi,yi,xi,Ci,wi,Ai];To(ki,{mixoutsTo:A});var ji=A.noAuto,_i=A.config,Wa=A.library,Ua=A.dom,Mi=A.parse,Di=A.findIconDefinition,$i=A.toHtml,Li=A.icon,Ri=A.layer,zi=A.text,Wi=A.counter;var ln=Qt(Ja(),1),fn=Qt(an(),1);var nn=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=Zt({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){n&1&&te(0,"router-outlet")},dependencies:[oe],encapsulation:2})}}return t})();var rn=[{path:"blog",loadComponent:()=>import("./blogs.component-OYDQBU4D.js").then(t=>t.BlogsComponent)},{path:"blog/:id",loadComponent:()=>import("./blogs.component-OYDQBU4D.js").then(t=>t.BlogsComponent)},{path:"",loadComponent:()=>import("./demo.component-M2S33D63.js").then(t=>t.DemoComponent),children:[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-R3DMULW4.js").then(t=>t.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-HU4C6TAD.js").then(t=>t.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-TI3EBJRF.js").then(t=>t.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-PI4D4YJO.js").then(t=>t.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-MMXAQB4V.js").then(t=>t.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-C2WNLN4F.js").then(t=>t.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-US3JH673.js").then(t=>t.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-RXARUVJ7.js").then(t=>t.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-SZDUZU6L.js").then(t=>t.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-OZZMWL2J.js").then(t=>t.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-SRZXQCUY.js").then(t=>t.routes)},{path:"home",loadComponent:()=>import("./home.component-J33TPW5L.js").then(t=>t.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-GES242IH.js").then(t=>t.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-44DCGYFF.js").then(t=>t.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-ZDWPCHLV.js").then(t=>t.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-6NPXC7ER.js").then(t=>t.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-RNPMHCG4.js").then(t=>t.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-OAOZ6Y5V.js").then(t=>t.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-UIZTFXUH.js").then(t=>t.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-HYQRB7SP.js").then(t=>t.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-7LFX2TCM.js").then(t=>t.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-ODYHUEGT.js").then(t=>t.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-ZTOC7HES.js").then(t=>t.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-M224UJJB.js").then(t=>t.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-VD2DR67P.js").then(t=>t.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-KFNUWD3C.js").then(t=>t.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-MH3VIJWS.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-6AI5YFL3.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-6AI5YFL3.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-CBLN54MC.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-P7OEIERO.js").then(t=>t.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-RU45RRC7.js").then(t=>t.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-F7EIYPWQ.js").then(t=>t.ResizablePanelsComponent)},{path:"signalsForms",loadComponent:()=>import("./signals-form.component-BSB2VEO5.js").then(t=>t.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-LIG7KNHF.js").then(t=>t.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-NR2EDXRA.js").then(t=>t.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-FF2QCJBB.js").then(t=>t.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-6B24LSSN.js").then(t=>t.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-EITYUZ72.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-NA6QXTLC.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-56QX5AW2.js").then(t=>t.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-JT3FZIOL.js")},{path:"eventedOutputs",loadComponent:()=>import("./evented-outputs.component-6WFNGU6Y.js").then(t=>t.EventedOutputsComponent)},{path:"indexDb",loadComponent:()=>import("./indexdb.component-T2PID6RX.js").then(t=>t.IndexdbComponent),title:"IndexDb sample"},{path:"acnhorPosition",loadComponent:()=>import("./anchor-pos.component-RBI5RNZA.js").then(t=>t.AnchorPosComponent),title:"Anchor Position demo"},{path:"outOfOrder",loadComponent:()=>import("./out-of-order.component-KFPYJFFN.js").then(t=>t.OutOfOrderComponent)},{path:"stepper",loadComponent:()=>import("./stepper.component-EXZ4EHFH.js").then(t=>t.StepperComponent)},{path:"iconSprite",loadComponent:()=>import("./icon-sprite.component-5SV5DXXV.js").then(t=>t.IconSpriteComponent)},{path:"reusableDialog",loadComponent:()=>import("./reusable-dialog.component-UCNWYTQK.js").then(t=>t.ReusableDialogComponent)},{path:"tableHover",loadComponent:()=>import("./table-hover.component-IZKYZRW2.js").then(t=>t.TableHoverComponent)},{path:"signalDebounce",loadComponent:()=>import("./signal-debounce.component-TNJSP7OV.js").then(t=>t.SignalDebounce)},{path:"crudStuff",loadComponent:()=>import("./crud-stuff.component-HQS7PCIG.js").then(t=>t.CrudStuffComponent)},{path:"customNativeForm",loadComponent:()=>import("./custom-native-form.component-MZJ3N4SS.js").then(t=>t.CustomNativeFormComponent)},{path:"inputHostExperiment",loadComponent:()=>import("./input-host-experiment.component-LVEWE6O7.js").then(t=>t.InputHostExperimentComponent)},{path:"meteredView",loadComponent:()=>import("./metered-view.component-6QCWFSWT.js").then(t=>t.MeteredViewComponent)},{path:"mqtt",loadChildren:()=>import("./routes-2WEPDQIW.js")},{path:"signalForms",loadComponent:()=>import("./signal-forms-experiment.component-N3OSR6L5.js").then(t=>t.SignalFormsExperimentComponent)},{path:"signalForms/tree",loadComponent:()=>import("./signal-tree.component-LEHIUIQO.js").then(t=>t.SignalTreeComponent)},{path:"signalForms/dynamic",loadComponent:()=>import("./dynamic.component-LNWRXXD6.js").then(t=>t.DynamicComponent)},{path:"toh",loadComponent:()=>import("./toh.component-JVUNNB7H.js").then(t=>t.TohComponent)},{path:"toh/cdk",loadComponent:()=>import("./toh-cdk.component-IRJMBIG3.js").then(t=>t.TohCdkComponent)},{path:"vt",loadComponent:()=>import("./view-transitions.component-3L63LTUU.js").then(t=>t.ViewTransitionsComponent)},{path:"inMem",loadComponent:()=>import("./in-mem-sample.component-PTQRRIUA.js").then(t=>t.InMemSampleComponent)},{path:"dynSignalForm",loadComponent:()=>import("./dynsignal-form.component-UHIU5QCF.js").then(t=>t.DynsignalFormComponent)},{path:"**",redirectTo:"dynSignalForm"}]}];var on={providers:[ie(rn,se()),ne(re()),ee()]};var sn={production:!0};Wa.add(fn.faPlay,ln.faPause);Ua.watch();sn.production&&void 0;ae(nn,on).catch(t=>console.error(t));
