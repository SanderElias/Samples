import{a as It,c as Ft,d as _t,e as Tt,f as jt,g as $t,h as Dt}from"./chunk-WYZ4RNKB.js";import{a as Mt,b as Nt,c as Ot}from"./chunk-GHDGTY5K.js";import{b as Lt}from"./chunk-NT2DNIFW.js";import{a as At,b as Pt,c as Et}from"./chunk-Q7HKI3MB.js";import"./chunk-NE3XWMKB.js";import"./chunk-QF5K4MHH.js";import{Ca as gt,Cc as N,D as dt,Hb as vt,Hc as kt,Jb as yt,Ob as E,Pb as C,Qb as w,Rb as le,Sb as Me,Tb as Ae,Ub as bt,Va as ht,Xa as P,Y as mt,Zb as St,ea as G,gc as xt,hc as Ct,ic as wt,kb as se,la as pt,pc as S,q as ke,r as ct}from"./chunk-JMJSAENN.js";import{d as ft,f as ut}from"./chunk-DAQOROHW.js";var Pa=ft(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var xa="fas",Ca="pause",wa=384,ka=512,st=[9208],Ma="f04c",Aa="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z";I.definition={prefix:xa,iconName:Ca,icon:[wa,ka,st,Ma,Aa]};I.faPause=I.definition;I.prefix=xa;I.iconName=Ca;I.width=wa;I.height=ka;I.ligatures=st;I.unicode=Ma;I.svgPathData=Aa;I.aliases=st});var Ta=ft(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});var Ea="fas",Na="play",Oa=448,Ia=512,lt=[9654],Fa="f04b",_a="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z";F.definition={prefix:Ea,iconName:Na,icon:[Oa,Ia,lt,Fa,_a]};F.faPlay=F.definition;F.prefix=Ea;F.iconName=Na;F.width=Oa;F.height=Ia;F.ligatures=lt;F.unicode=Fa;F.svgPathData=_a;F.aliases=lt});function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function Ya(e){if(Array.isArray(e))return e}function Ga(e){if(Array.isArray(e))return Te(e)}function Ba(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,yn(a.key),a)}}function Xa(e,t,n){return t&&Rt(e.prototype,t),n&&Rt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=qe(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||n.return==null||n.return()}finally{if(s)throw o}}}}function p(e,t,n){return(t=yn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Va(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qa(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,i,s=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=o.call(n)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return s}}function Ja(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ka(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zt(Object(n),!0).forEach(function(a){p(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ve(e,t){return Ya(e)||qa(e,t)||qe(e,t)||Ja()}function j(e){return Ga(e)||Va(e)||qe(e)||Ka()}function Za(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yn(e){var t=Za(e,"string");return typeof t=="symbol"?t:t+""}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(e)}function qe(e,t){if(e){if(typeof e=="string")return Te(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}var Wt=function(){},Je={},bn={},Sn=null,xn={mark:Wt,measure:Wt};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(bn=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(xn=performance)}catch{}var Qa=Je.navigator||{},Ut=Qa.userAgent,Ht=Ut===void 0?"":Ut,U=Je,v=bn,Yt=Sn,fe=xn,Cs=!!U.document,z=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",Cn=~Ht.indexOf("MSIE")||~Ht.indexOf("Trident/"),Pe,er=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},nr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],k="classic",re="duotone",Mn="sharp",An="sharp-duotone",Pn="chisel",En="etch",Nn="jelly",On="jelly-duo",In="jelly-fill",Fn="notdog",_n="notdog-duo",Tn="slab",jn="slab-press",$n="thumbprint",Dn="utility",Ln="utility-duo",Rn="utility-fill",zn="whiteboard",ar="Classic",rr="Duotone",or="Sharp",ir="Sharp Duotone",sr="Chisel",lr="Etch",fr="Jelly",ur="Jelly Duo",cr="Jelly Fill",dr="Notdog",mr="Notdog Duo",pr="Slab",gr="Slab Press",hr="Thumbprint",vr="Utility",yr="Utility Duo",br="Utility Fill",Sr="Whiteboard",Wn=[k,re,Mn,An,Pn,En,Nn,On,In,Fn,_n,Tn,jn,$n,Dn,Ln,Rn,zn],ws=(Pe={},p(p(p(p(p(p(p(p(p(p(Pe,k,ar),re,rr),Mn,or),An,ir),Pn,sr),En,lr),Nn,fr),On,ur),In,cr),Fn,dr),p(p(p(p(p(p(p(p(Pe,_n,mr),Tn,pr),jn,gr),$n,hr),Dn,vr),Ln,yr),Rn,br),zn,Sr)),xr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Cr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},wr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),kr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Un=["fak","fa-kit","fakd","fa-kit-duotone"],Gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mr=["kit"],Ar="kit",Pr="kit-duotone",Er="Kit",Nr="Kit Duotone",ks=p(p({},Ar,Er),Pr,Nr),Or={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ir={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Bt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ee,ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Tr="classic",jr="duotone",$r="sharp",Dr="sharp-duotone",Lr="chisel",Rr="etch",zr="jelly",Wr="jelly-duo",Ur="jelly-fill",Hr="notdog",Yr="notdog-duo",Gr="slab",Br="slab-press",Xr="thumbprint",Vr="utility",qr="utility-duo",Jr="utility-fill",Kr="whiteboard",Zr="Classic",Qr="Duotone",eo="Sharp",to="Sharp Duotone",no="Chisel",ao="Etch",ro="Jelly",oo="Jelly Duo",io="Jelly Fill",so="Notdog",lo="Notdog Duo",fo="Slab",uo="Slab Press",co="Thumbprint",mo="Utility",po="Utility Duo",go="Utility Fill",ho="Whiteboard",Ms=(Ee={},p(p(p(p(p(p(p(p(p(p(Ee,Tr,Zr),jr,Qr),$r,eo),Dr,to),Lr,no),Rr,ao),zr,ro),Wr,oo),Ur,io),Hr,so),p(p(p(p(p(p(p(p(Ee,Yr,lo),Gr,fo),Br,uo),Xr,co),Vr,mo),qr,po),Jr,go),Kr,ho)),vo="kit",yo="kit-duotone",bo="Kit",So="Kit Duotone",As=p(p({},vo,bo),yo,So),xo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Co={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},je={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},wo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Hn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(_r,wo),ko=["solid","regular","light","thin","duotone","brands","semibold"],Yn=[1,2,3,4,5,6,7,8,9,10],Mo=Yn.concat([11,12,13,14,15,16,17,18,19,20]),Ao=["aw","fw","pull-left","pull-right"],Po=[].concat(j(Object.keys(Co)),ko,Ao,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(Yn.map(function(e){return"".concat(e,"x")})).concat(Mo.map(function(e){return"w-".concat(e)})),Eo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",$e=16,Gn="fa",Bn="svg-inline--fa",X="data-fa-i2svg",De="data-fa-pseudo-element",No="data-fa-pseudo-element-pending",Ke="data-prefix",Ze="data-icon",Xt="fontawesome-i2svg",Oo="async",Io=["HTML","HEAD","STYLE","SCRIPT"],Xn=["::before","::after",":before",":after"],Vn=(function(){try{return!0}catch{return!1}})();function oe(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[k]}})}var qn=f({},wn);qn[k]=f(f(f(f({},{"fa-duotone":"duotone"}),wn[k]),Gt.kit),Gt["kit-duotone"]);var Fo=oe(qn),Le=f({},kr);Le[k]=f(f(f(f({},{duotone:"fad"}),Le[k]),Bt.kit),Bt["kit-duotone"]);var Vt=oe(Le),Re=f({},je);Re[k]=f(f({},Re[k]),Fr.kit);var Qe=oe(Re),ze=f({},xo);ze[k]=f(f({},ze[k]),Or.kit);var Ps=oe(ze),_o=er,Jn="fa-layers-text",To=tr,jo=f({},xr),Es=oe(jo),$o=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ne=nr,Do=[].concat(j(Mr),j(Po)),te=U.FontAwesomeConfig||{};function Lo(e){var t=v.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ro(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}v&&typeof v.querySelector=="function"&&(qt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],qt.forEach(function(e){var t=ve(e,2),n=t[0],a=t[1],r=Ro(Lo(n));r!=null&&(te[a]=r)}));var qt,Kn={styleDefault:"solid",familyDefault:k,cssPrefix:Gn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var Z=f(f({},Kn),te);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(Kn).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){Z[e]=n,ne.forEach(function(a){return a(d)})},get:function(){return Z[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,ne.forEach(function(n){return n(d)})},get:function(){return Z.cssPrefix}});U.FontAwesomeConfig=d;var ne=[];function zo(e){return ne.push(e),function(){ne.splice(ne.indexOf(e),1)}}var W=$e,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wo(e){if(!(!e||!z)){var t=v.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=v.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return v.head.insertBefore(t,a),e}}var Uo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jt(){for(var e=12,t="";e-- >0;)t+=Uo[Math.random()*62|0];return t}function Q(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function et(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ho(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zn(e[n]),'" ')},"").trim()}function ye(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function tt(e){return e.size!==$.size||e.x!==$.x||e.y!==$.y||e.rotate!==$.rotate||e.flipX||e.flipY}function Yo(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Go(e){var t=e.transform,n=e.width,a=n===void 0?$e:n,r=e.height,o=r===void 0?$e:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&Cn?l+="translate(".concat(t.x/W-a/2,"em, ").concat(t.y/W-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/W,"em), calc(-50% + ").concat(t.y/W,"em)) "):l+="translate(".concat(t.x/W,"em, ").concat(t.y/W,"em) "),l+="scale(".concat(t.size/W*(t.flipX?-1:1),", ").concat(t.size/W*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Bo=`:root, :host {
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
}`;function Qn(){var e=Gn,t=Bn,n=d.cssPrefix,a=d.replacementClass,r=Bo;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Kt=!1;function Oe(){d.autoAddCss&&!Kt&&(Wo(Qn()),Kt=!0)}var Xo={mixout:function(){return{dom:{css:Qn,insertCss:Oe}}},hooks:function(){return{beforeDOMElementCreation:function(){Oe()},beforeI2svg:function(){Oe()}}}},R=U||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var T=R[L],ea=[],ta=function(){v.removeEventListener("DOMContentLoaded",ta),ge=1,ea.map(function(t){return t()})},ge=!1;z&&(ge=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),ge||v.addEventListener("DOMContentLoaded",ta));function Vo(e){z&&(ge?setTimeout(e,0):ea.push(e))}function ie(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Zn(e):"<".concat(t," ").concat(Ho(a),">").concat(o.map(ie).join(""),"</").concat(t,">")}function Zt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qo=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Ie=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?qo(n,r):n,l,u,m;for(a===void 0?(l=1,m=t[o[0]]):(l=0,m=a);l<i;l++)u=o[l],m=s(m,t[u],u,t);return m};function na(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function Qt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function We(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=Qt(t);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(e,Qt(t)):T.styles[e]=f(f({},T.styles[e]||{}),o),e==="fas"&&We("fa",t)}var ae=T.styles,Jo=T.shims,aa=Object.keys(Qe),Ko=aa.reduce(function(e,t){return e[t]=Object.keys(Qe[t]),e},{}),nt=null,ra={},oa={},ia={},sa={},la={};function Zo(e){return~Do.indexOf(e)}function Qo(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Zo(r)?r:null}var fa=function(){var t=function(o){return Ie(ae,function(i,s,l){return i[l]=Ie(s,o,{}),i},{})};ra=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),oa=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),la=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in ae||d.autoFetchSvg,a=Ie(Jo,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});ia=a.names,sa=a.unicodes,nt=be(d.styleDefault,{family:d.familyDefault})};zo(function(e){nt=be(e.styleDefault,{family:d.familyDefault})});fa();function at(e,t){return(ra[e]||{})[t]}function ei(e,t){return(oa[e]||{})[t]}function B(e,t){return(la[e]||{})[t]}function ua(e){return ia[e]||{prefix:null,iconName:null}}function ti(e){var t=sa[e],n=at("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return nt}var ca=function(){return{prefix:null,iconName:null,rest:[]}};function ni(e){var t=k,n=aa.reduce(function(a,r){return a[r]="".concat(d.cssPrefix,"-").concat(r),a},{});return Wn.forEach(function(a){(e.includes(n[a])||e.some(function(r){return Ko[a].includes(r)}))&&(t=a)}),t}function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?k:n,r=Fo[a][e];if(a===re&&!e)return"fad";var o=Vt[a][e]||Vt[a][r],i=e in T.styles?e:null,s=o||i||null;return s}function ai(e){var t=[],n=null;return e.forEach(function(a){var r=Qo(d.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function en(e){return e.sort().filter(function(t,n,a){return a.indexOf(t)===n})}var tn=Hn.concat(Un);function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,a=n===void 0?!1:n,r=null,o=en(e.filter(function(g){return tn.includes(g)})),i=en(e.filter(function(g){return!tn.includes(g)})),s=o.filter(function(g){return r=g,!kn.includes(g)}),l=ve(s,1),u=l[0],m=u===void 0?null:u,c=ni(o),h=f(f({},ai(i)),{},{prefix:be(m,{family:c})});return f(f(f({},h),si({values:e,family:c,styles:ae,config:d,canonical:h,givenPrefix:r})),ri(a,r,h))}function ri(e,t,n){var a=n.prefix,r=n.iconName;if(e||!a||!r)return{prefix:a,iconName:r};var o=t==="fa"?ua(r):{},i=B(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!ae.far&&ae.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var oi=Wn.filter(function(e){return e!==k||e!==re}),ii=Object.keys(je).filter(function(e){return e!==k}).map(function(e){return Object.keys(je[e])}).flat();function si(e){var t=e.values,n=e.family,a=e.canonical,r=e.givenPrefix,o=r===void 0?"":r,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,m=n===re,c=t.includes("fa-duotone")||t.includes("fad"),h=u.familyDefault==="duotone",g=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(c||h||g)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&oi.includes(n)){var b=Object.keys(s).find(function(M){return ii.includes(M)});if(b||u.autoFetchSvg){var y=wr.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=B(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||o==="fa")&&(a.prefix=H()||"fas"),a}var li=(function(){function e(){Ba(this,e),this.definitions={}}return Xa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=f(f({},n.definitions[s]||{}),i[s]),We(s,i[s]);var l=Qe[k][s];l&&We(l,i[s]),fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,m=u[2];n[s]||(n[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(n[s][c]=u)}),n[s][l]=u}),n}}])})(),nn=[],J={},K={},fi=Object.keys(K);function ui(e,t){var n=t.mixoutsTo;return nn=e,J={},Object.keys(K).forEach(function(a){fi.indexOf(a)===-1&&delete K[a]}),nn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),pe(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){J[i]||(J[i]=[]),J[i].push(o[i])})}a.provides&&a.provides(K)}),n}function Ue(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=J[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=J[e]||[];r.forEach(function(o){o.apply(null,n)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||H();if(t)return t=B(n,t)||t,Zt(da.definitions,n,t)||Zt(T.styles,n,t)}var da=new li,ci=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,V("noAuto")},di={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(V("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Vo(function(){pi({autoReplaceSvgRoot:n}),V("watch",t)})}},mi={icon:function(t){if(t===null)return null;if(pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:B(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=be(t[0]);return{prefix:a,iconName:B(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(_o))){var r=Se(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=H();return{prefix:o,iconName:B(o,t)||t}}}},O={noAuto:ci,config:d,dom:di,parse:mi,library:da,findIconDefinition:He,toHtml:ie},pi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?v:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&O.dom.i2svg({node:a})};function xe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ie(a)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var a=v.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function gi(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(tt(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=ye(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function hi(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function vi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function rt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,m=e.watchable,c=m===void 0?!1:m,h=a.found?a:n,g=h.width,b=h.height,y=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),M={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(b)})};!vi(u.attributes)&&!u.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),c&&(M.attributes[X]="");var x=f(f({},M),{},{prefix:r,iconName:o,main:n,mask:a,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),A=a.found&&n.found?Y("generateAbstractMask",x)||{children:[],attributes:{}}:Y("generateAbstractIcon",x)||{children:[],attributes:{}},_=A.children,q=A.attributes;return x.children=_,x.attributes=q,s?hi(x):gi(x)}function an(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[X]="");var u=f({},o.styles);tt(r)&&(u.transform=Go({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var m=ye(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function yi(e){var t=e.content,n=e.extra,a=f(f({},n.attributes),{},{class:n.classes.join(" ")}),r=ye(n.styles);r.length>0&&(a.style=r);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),o}var Fe=T.styles;function Ye(e){var t=e[0],n=e[1],a=e.slice(4),r=ve(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ne.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ne.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var bi={found:!1,width:512,height:512};function Si(e,t){!Vn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ge(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=H()),new Promise(function(a,r){if(n==="fa"){var o=ua(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Fe[t]&&Fe[t][e]){var i=Fe[t][e];return a(Ye(i))}Si(e,t),a(f(f({},bi),{},{icon:d.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var rn=function(){},Be=d.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:rn,measure:rn},ee='FA "7.1.0"',xi=function(t){return Be.mark("".concat(ee," ").concat(t," begins")),function(){return ma(t)}},ma=function(t){Be.mark("".concat(ee," ").concat(t," ends")),Be.measure("".concat(ee," ").concat(t),"".concat(ee," ").concat(t," begins"),"".concat(ee," ").concat(t," ends"))},ot={begin:xi,end:ma},de=function(){};function on(e){var t=e.getAttribute?e.getAttribute(X):null;return typeof t=="string"}function Ci(e){var t=e.getAttribute?e.getAttribute(Ke):null,n=e.getAttribute?e.getAttribute(Ze):null;return t&&n}function wi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function ki(){if(d.autoReplaceSvg===!0)return me.replace;var e=me[d.autoReplaceSvg];return e||me.replace}function Mi(e){return v.createElementNS("http://www.w3.org/2000/svg",e)}function Ai(e){return v.createElement(e)}function pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Mi:Ai:n;if(typeof e=="string")return v.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(pa(i,{ceFn:a}))}),r}function Pi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var me={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(pa(r),n)}),n.getAttribute(X)===null&&d.keepOriginalSource){var a=v.createComment(Pi(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~et(n).indexOf(d.replacementClass))return me.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return ie(s)}).join(`
`);n.setAttribute(X,""),n.innerHTML=i}};function sn(e){e()}function ga(e,t){var n=typeof t=="function"?t:de;if(e.length===0)n();else{var a=sn;d.mutateApproach===Oo&&(a=U.requestAnimationFrame||sn),a(function(){var r=ki(),o=ot.begin("mutate");e.map(r),o(),n()})}}var it=!1;function ha(){it=!0}function Xe(){it=!1}var he=null;function ln(e){if(Yt&&d.observeMutations){var t=e.treeCallback,n=t===void 0?de:t,a=e.nodeCallback,r=a===void 0?de:a,o=e.pseudoElementsCallback,i=o===void 0?de:o,s=e.observeMutationsRoot,l=s===void 0?v:s;he=new Yt(function(u){if(!it){var m=H();Q(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!on(c.addedNodes[0])&&(d.searchPseudoElements&&i(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&on(c.target)&&~$o.indexOf(c.attributeName))if(c.attributeName==="class"&&Ci(c.target)){var h=Se(et(c.target)),g=h.prefix,b=h.iconName;c.target.setAttribute(Ke,g||m),b&&c.target.setAttribute(Ze,b)}else wi(c.target)&&r(c.target)})}}),z&&he.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ei(){he&&he.disconnect()}function Ni(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Oi(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Se(et(e));return r.prefix||(r.prefix=H()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ei(r.prefix,e.innerText)||at(r.prefix,na(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ii(e){var t=Q(e.attributes).reduce(function(n,a){return n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n},{});return t}function Fi(){return{iconName:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Oi(e),a=n.iconName,r=n.prefix,o=n.rest,i=Ii(e),s=Ue("parseNodeAttributes",{},e),l=t.styleParser?Ni(e):[];return f({iconName:a,prefix:r,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var _i=T.styles;function va(e){var t=d.autoReplaceSvg==="nest"?fn(e,{styleParser:!1}):fn(e);return~t.extra.classes.indexOf(Jn)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function Ti(){return[].concat(j(Un),j(Hn))}function un(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=v.documentElement.classList,a=function(c){return n.add("".concat(Xt,"-").concat(c))},r=function(c){return n.remove("".concat(Xt,"-").concat(c))},o=d.autoFetchSvg?Ti():kn.concat(Object.keys(_i));o.includes("fa")||o.push("fa");var i=[".".concat(Jn,":not([").concat(X,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(X,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Q(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ot.begin("onTree"),u=s.reduce(function(m,c){try{var h=va(c);h&&m.push(h)}catch(g){Vn||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(h){ga(h,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),m()})}).catch(function(h){l(),c(h)})})}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;va(e).then(function(n){n&&ga([n],t)})}function $i(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:He(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:He(r||{})),e(a,f(f({},n),{},{mask:r}))}}var Di=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?$:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,m=u===void 0?null:u,c=n.classes,h=c===void 0?[]:c,g=n.attributes,b=g===void 0?{}:g,y=n.styles,M=y===void 0?{}:y;if(t){var x=t.prefix,A=t.iconName,_=t.icon;return xe(f({type:"icon"},t),function(){return V("beforeDOMElementCreation",{iconDefinition:t,params:n}),rt({icons:{main:Ye(_),mask:l?Ye(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:f(f({},$),r),symbol:i,maskId:m,extra:{attributes:b,styles:M,classes:h}})})}},Li={mixout:function(){return{icon:$i(Di)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=un,n.nodeCallback=ji,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?v:a,o=n.callback,i=o===void 0?function(){}:o;return un(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.prefix,i=a.transform,s=a.symbol,l=a.mask,u=a.maskId,m=a.extra;return new Promise(function(c,h){Promise.all([Ge(r,o),l.iconName?Ge(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var b=ve(g,2),y=b[0],M=b[1];c([n,rt({icons:{main:y,mask:M},prefix:o,iconName:r,transform:i,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=ye(s);l.length>0&&(r.style=l);var u;return tt(i)&&(u=Y("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Ri={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return xe({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(j(o)).join(" ")},children:i}]})}}}},zi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return xe({type:"counter",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),yi({content:n.toString(),title:o,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(j(s))}})})}}}},Wi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?$:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return xe({type:"text",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),an({content:n,transform:f(f({},$),o),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.transform,o=a.extra,i=null,s=null;if(Cn){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([n,an({content:n.innerHTML,width:i,height:s,transform:r,extra:o,watchable:!0})])}}},ya=new RegExp('"',"ug"),cn=[1105920,1112319],dn=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Cr),Eo),Ir),Ve=Object.keys(dn).reduce(function(e,t){return e[t.toLowerCase()]=dn[t],e},{}),Ui=Object.keys(Ve).reduce(function(e,t){var n=Ve[t];return e[t]=n[900]||j(Object.entries(n))[0][1],e},{});function Hi(e){var t=e.replace(ya,"");return na(j(t)[0]||"")}function Yi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),a=n.replace(ya,""),r=a.codePointAt(0),o=r>=cn[0]&&r<=cn[1],i=a.length===2?a[0]===a[1]:!1;return o||i||t}function Gi(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Ve[n]||{})[r]||Ui[n]}function mn(e,t){var n="".concat(No).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=Q(e.children),i=o.filter(function(Ce){return Ce.getAttribute(De)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(To),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),a();if(u&&c!=="none"&&c!==""){var h=s.getPropertyValue("content"),g=Gi(l,m),b=Hi(h),y=u[0].startsWith("FontAwesome"),M=Yi(s),x=at(g,b),A=x;if(y){var _=ti(b);_.iconName&&_.prefix&&(x=_.iconName,g=_.prefix)}if(x&&!M&&(!i||i.getAttribute(Ke)!==g||i.getAttribute(Ze)!==A)){e.setAttribute(n,A),i&&e.removeChild(i);var q=Fi(),D=q.extra;D.attributes[De]=t,Ge(x,g).then(function(Ce){var Ua=rt(f(f({},q),{},{icons:{main:Ce,mask:ca()},prefix:g,iconName:A,extra:D,watchable:!0})),we=v.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=Ua.map(function(Ha){return ie(Ha)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Bi(e){return Promise.all([mn(e,"::before"),mn(e,"::after")])}function Xi(e){return e.parentNode!==document.head&&!~Io.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(De)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Vi=function(t){return!!t&&Xn.some(function(n){return t.includes(n)})},qi=function(t){if(!t)return[];var n=new Set,a=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=ce(a),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(Vi(i)){var s=Xn.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&n.add(s)}}}catch(l){r.e(l)}finally{r.f()}return n};function pn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var n;if(t)n=e;else if(d.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var a=new Set,r=ce(document.styleSheets),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;try{var s=ce(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=qi(u.selectorText),c=ce(m),h;try{for(c.s();!(h=c.n()).done;){var g=h.value;a.add(g)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!a.size)return;var b=Array.from(a).join(", ");try{n=e.querySelectorAll(b)}catch{}}return new Promise(function(y,M){var x=Q(n).filter(Xi).map(Bi),A=ot.begin("searchPseudoElements");ha(),Promise.all(x).then(function(){A(),Xe(),y()}).catch(function(){A(),Xe(),M()})})}}var Ji={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?v:a;d.searchPseudoElements&&pn(r)}}},gn=!1,Ki={mixout:function(){return{dom:{unwatch:function(){ha(),gn=!0}}}},hooks:function(){return{bootstrap:function(){ln(Ue("mutationObserverCallbacks",{}))},noAuto:function(){Ei()},watch:function(n){var a=n.observeMutationsRoot;gn?Xe():ln(Ue("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},hn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Zi={mixout:function(){return{parse:{transform:function(n){return hn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=hn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},h={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:c,path:h};return{tag:"g",attributes:f({},g.outer),children:[{tag:"g",attributes:f({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),g.path)}]}]}}}},_e={x:0,y:0,width:"100%",height:"100%"};function vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qi(e){return e.tag==="g"?e.children:[e]}var es={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?Se(r.split(" ").map(function(i){return i.trim()})):ca();return o.prefix||(o.prefix=H()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,m=o.icon,c=i.width,h=i.icon,g=Yo({transform:l,containerWidth:c,iconWidth:u}),b={tag:"rect",attributes:f(f({},_e),{},{fill:"white"})},y=m.children?{children:m.children.map(vn)}:{},M={tag:"g",attributes:f({},g.inner),children:[vn(f({tag:m.tag,attributes:f(f({},m.attributes),g.path)},y))]},x={tag:"g",attributes:f({},g.outer),children:[M]},A="mask-".concat(s||Jt()),_="clip-".concat(s||Jt()),q={tag:"mask",attributes:f(f({},_e),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Qi(h)},q]};return a.push(D,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(A,")")},_e)}),{children:a,attributes:r}}}},ts={provides:function(t){var n=!1;U.matchMedia&&(n=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ns={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},as=[Xo,Li,Ri,zi,Wi,Ji,Ki,Zi,es,ts,ns];ui(as,{mixoutsTo:O});var Ns=O.noAuto,Os=O.config,ba=O.library,Sa=O.dom,Is=O.parse,Fs=O.findIconDefinition,_s=O.toHtml,Ts=O.icon,js=O.layer,$s=O.text,Ds=O.counter;var za=ut(Pa(),1),Wa=ut(Ta(),1);function os(e,t){e&1&&(Me(0,"a",0),pt(),Me(1,"svg",1)(2,"g"),bt(3,"path",2),Ae()(),S(4," View Source "),Ae()),e&2&&St("href",t,ht)}var ja=(()=>{class e{constructor(){this.router=G(_t),this.http=G(At),this.meta=G(Nt),this.title=G(Ot),this.path$=this.router.events.pipe(dt(ss),ke(n=>n.url)),this.routes$=this.http.get("/assets/routes.json"),this.routeInfo=Lt(ct({routes:this.routes$,path:this.path$}).pipe(ke(({routes:n,path:a})=>n.find(r=>r.path.startsWith(a))),mt(is(this.meta,this.title))))}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=se({type:e,selectors:[["app-show-source"]],decls:1,vars:1,consts:[["target","_blank",3,"href"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","256px","height","250px","viewBox","0 0 256 250","version","1.1","preserveAspectRatio","xMidYMid"],["d","M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z","fill","#161614"]],template:function(a,r){if(a&1&&vt(0,os,5,1,"a",0),a&2){let o;yt((o=(o=r.routeInfo())==null?null:o.gitFolder)?0:-1,o)}},styles:["[_nghost-%COMP%]{display:block;position:absolute;top:10px;right:10px}a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:6px;border-radius:6px;background-color:#f0f0f0;text-decoration:none;cursor:pointer;color:#333}svg[_ngcontent-%COMP%]{display:inline-block;padding:0;width:28px;height:28px}"]})}}return e})(),is=(e,t)=>n=>{if(n?.path){let a="https://samples.selias.dev",r=n.description||`Angular Sample page for ${n.path}
    sourcecode: ${n.gitFolder}
    demo: ${`${a}${n.path}`}`,o=(s,l)=>{e.getTag(`property="${s}"`)?e.updateTag({property:s,content:l}):e.addTag({property:s,content:l})},i=new URL(a+n.path);o("og:type","website"),o("og:title",n.title),o("og:description",r),o("description",r),o("og:image",`${a}${n.largeImage}`),o("og:url",i.href),o("twitter:title",n.title),o("twitter:description",r),o("twitter:card","summary_large_image"),o("twitter:domain",a),o("twitter:image",`${a}${n.largeImage}`),o("twitter:url",i.href),t.setTitle(n.title)}};function ss(e){return e instanceof It}var ls=["menuToggle"],fs=()=>["home"],us=()=>["filterSamp"],cs=()=>["modalSamp"],ds=()=>["DirectiveSamp"],ms=()=>["mixinSamp"],ps=()=>["htmlLoad"],gs=()=>["requiredAttributes"],hs=()=>["viewModel","user"],vs=()=>["viewModel","theGood"],ys=()=>["viewModel","theBad"],bs=()=>["complexAPI"],Ss=()=>["observableState"],xs=()=>["dynhtml"],$a=(()=>{class e{constructor(){this.title="samples",this.elmRef=G(gt)}set _toggle(n){n&&!this.checked&&(this.checked=n.nativeElement)}ngAfterContentInit(){let n=this.elmRef.nativeElement;n&&n.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>{this.checked.checked=!1}))}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=se({type:e,selectors:[["app-root"]],viewQuery:function(a,r){if(a&1&&xt(ls,7),a&2){let o;Ct(o=wt())&&(r._toggle=o.first)}},decls:55,vars:26,consts:[["menuToggle",""],["id","menuToggle"],["for","menutoggle"],["id","menutoggle","type","checkbox"],["id","menu"],["routerLinkActive","active-link",3,"routerLink"],[3,"routerLink"],["id","outlet"]],template:function(a,r){a&1&&(C(0,"nav")(1,"div",1)(2,"label",2),S(3,"menuButton"),w(),le(4,"input",3,0)(6,"span")(7,"span")(8,"span"),C(9,"ul",4)(10,"li")(11,"a",5),S(12,"Home"),w()(),C(13,"li")(14,"a",5),S(15,"Filter Sample"),w()(),C(16,"li")(17,"a",5),S(18,"Modal Sample"),w()(),C(19,"li")(20,"a",5),S(21,"Directive Sample"),w()(),C(22,"li")(23,"a",5),S(24,"Mixin Sample"),w()(),C(25,"li")(26,"a",5),S(27,"Html load"),w()(),C(28,"li")(29,"a",6),S(30,"Required attributes"),w()(),C(31,"li"),S(32," Reactive viewmodel "),C(33,"ul")(34,"li")(35,"a",5),S(36,"User list"),w()(),C(37,"li")(38,"a",5),S(39,"The Good"),w()(),C(40,"li")(41,"a",5),S(42,"The bad"),w()()()(),C(43,"li")(44,"a",6),S(45,"Complex API"),w()(),C(46,"li")(47,"a",6),S(48,"Observable State"),w()(),C(49,"li")(50,"a",6),S(51,"Dynamic HTML"),w()()()(),le(52,"app-show-source"),w(),C(53,"div",7),le(54,"router-outlet"),w()),a&2&&(P(11),E("routerLink",N(13,fs)),P(3),E("routerLink",N(14,us)),P(3),E("routerLink",N(15,cs)),P(3),E("routerLink",N(16,ds)),P(3),E("routerLink",N(17,ms)),P(3),E("routerLink",N(18,ps)),P(3),E("routerLink",N(19,gs)),P(6),E("routerLink",N(20,hs)),P(3),E("routerLink",N(21,vs)),P(3),E("routerLink",N(22,ys)),P(3),E("routerLink",N(23,bs)),P(3),E("routerLink",N(24,Ss)),P(3),E("routerLink",N(25,xs)))},dependencies:[jt,Tt,ja,Ft],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:40px 1fr;grid-row-gap:4px;min-height:99vh;max-inline-size:99vw}nav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#popup[_ngcontent-%COMP%]{display:none -;margin:0 3rem;border:2px solid green}#outlet[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none;color:#232323;transition:color .3s ease}a[_ngcontent-%COMP%]:hover{color:tomato}a.active-link[_ngcontent-%COMP%]{color:#00008b}#menuToggle[_ngcontent-%COMP%]{display:block;position:relative;top:10px;left:10px;z-index:1;-webkit-user-select:none;user-select:none}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:24px;height:2px;margin-bottom:5px;position:relative;background:#cdcdcd;border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),opacity .55s ease}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{transform-origin:0% 0%}#menuToggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-last-child(2){transform-origin:0% 100%}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]{opacity:1;transform:rotate(45deg) translate(-2px,-1px);background:#232323}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]:nth-last-child(3){opacity:0;transform:rotate(0) scale(.2)}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%]:nth-last-child(2){transform:rotate(-45deg) translateY(-1px)}#menu[_ngcontent-%COMP%]{position:absolute;width:300px;margin:-100px 0 0 -50px;padding:95px 50px 50px;min-height:99vh;background:#ededed;list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(-100%);transition:transform .5s cubic-bezier(.77,.2,.05,1)}#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0;font-size:22px}#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}#menuToggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ ul[_ngcontent-%COMP%]{transform:none}"]})}}return e})();var Da=[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-A3SKF2FH.js").then(e=>e.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-CPYQMS4W.js").then(e=>e.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-ZW6AKC3K.js").then(e=>e.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-NP7BS6QT.js").then(e=>e.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-5UEZ6GTP.js").then(e=>e.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-NNHCBTLC.js").then(e=>e.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-2JFV7HG5.js").then(e=>e.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-G53HV2WK.js").then(e=>e.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-KYDA62R7.js").then(e=>e.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-S7MFKKJ5.js").then(e=>e.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-PGIMQXYU.js").then(e=>e.routes)},{path:"home",loadComponent:()=>import("./home.component-ZZILIAMA.js").then(e=>e.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-654M5M5H.js").then(e=>e.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-UMWAF63B.js").then(e=>e.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-PMMQW2AH.js").then(e=>e.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-GAZJBDVW.js").then(e=>e.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-U3EQD6XL.js").then(e=>e.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-2GLFCVJU.js").then(e=>e.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-G535JH2O.js").then(e=>e.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-F2GTA4YU.js").then(e=>e.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-4XS7IUGU.js").then(e=>e.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-VXOAFFRJ.js").then(e=>e.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-PIQFFS2R.js").then(e=>e.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-OLNOSG6F.js").then(e=>e.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-EZ523HKZ.js").then(e=>e.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-6LYZSPCU.js").then(e=>e.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-TARBI7GZ.js").then(e=>e.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-3FMAWIT4.js").then(e=>e.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-3FMAWIT4.js").then(e=>e.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-JC3EQRGV.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-YV7GYGLX.js").then(e=>e.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-EIX5ESKA.js").then(e=>e.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-AG77QMIU.js").then(e=>e.ResizablePanelsComponent)},{path:"signalsForms",loadComponent:()=>import("./signals-form.component-XIA4UZLV.js").then(e=>e.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-LOVVERQ2.js").then(e=>e.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-ZWBANFTV.js").then(e=>e.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-T6KQ6Y5H.js").then(e=>e.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-EBWNTFU2.js").then(e=>e.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-H6PO32KQ.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-ALDNP5XI.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-J3TB6W23.js").then(e=>e.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-HGVTFBL7.js")},{path:"eventedOutputs",loadComponent:()=>import("./evented-outputs.component-7ZUF5VWN.js").then(e=>e.EventedOutputsComponent)},{path:"indexDb",loadComponent:()=>import("./indexdb.component-EC3Q2LI5.js").then(e=>e.IndexdbComponent),title:"IndexDb sample"},{path:"acnhorPosition",loadComponent:()=>import("./anchor-pos.component-JDY3XXPW.js").then(e=>e.AnchorPosComponent),title:"Anchor Position demo"},{path:"outOfOrder",loadComponent:()=>import("./out-of-order.component-IIIUJFHP.js").then(e=>e.OutOfOrderComponent)},{path:"stepper",loadComponent:()=>import("./stepper.component-LLVRLFPG.js").then(e=>e.StepperComponent)},{path:"iconSprite",loadComponent:()=>import("./icon-sprite.component-WIQX6Q33.js").then(e=>e.IconSpriteComponent)},{path:"blog",loadComponent:()=>import("./blogs.component-TYOKJWWS.js").then(e=>e.BlogsComponent)},{path:"blog/:id",loadComponent:()=>import("./blogs.component-TYOKJWWS.js").then(e=>e.BlogsComponent)},{path:"reusableDialog",loadComponent:()=>import("./reusable-dialog.component-GBPTHDTI.js").then(e=>e.ReusableDialogComponent)},{path:"tableHover",loadComponent:()=>import("./table-hover.component-QXV4TVJF.js").then(e=>e.TableHoverComponent)},{path:"signalDebounce",loadComponent:()=>import("./signal-debounce.component-L3OEZDBC.js").then(e=>e.SignalDebounce)},{path:"crudStuff",loadComponent:()=>import("./crud-stuff.component-W7KIBW2Y.js").then(e=>e.CrudStuffComponent)},{path:"customNativeForm",loadComponent:()=>import("./custom-native-form.component-JHT2MJVO.js").then(e=>e.CustomNativeFormComponent)},{path:"inputHostExperiment",loadComponent:()=>import("./input-host-experiment.component-PWZYIXKW.js").then(e=>e.InputHostExperimentComponent)},{path:"meteredView",loadComponent:()=>import("./metered-view.component-T7ZB2XMI.js").then(e=>e.MeteredViewComponent)},{path:"mqtt",loadChildren:()=>import("./routes-LIB3EEOV.js")},{path:"signalForms",loadComponent:()=>import("./signal-forms-experiment.component-RAYJG2M7.js").then(e=>e.SignalFormsExperimentComponent)},{path:"signalForms/tree",loadComponent:()=>import("./signal-tree.component-EEMCABLE.js").then(e=>e.SignalTreeComponent)},{path:"signalForms/dynamic",loadComponent:()=>import("./dynamic.component-6RJZ7Y3I.js").then(e=>e.DynamicComponent)},{path:"toh",loadComponent:()=>import("./toh.component-M5SCKWI3.js").then(e=>e.TohComponent)},{path:"toh/cdk",loadComponent:()=>import("./toh-cdk.component-TFMMSUJ5.js").then(e=>e.TohCdkComponent)},{path:"**",redirectTo:"signalForms"}];var La={providers:[$t(Da,Dt()),Pt(Et()),kt()]};var Ra={production:!0};ba.add(Wa.faPlay,za.faPause);Sa.watch();Ra.production&&void 0;Mt($a,La).catch(e=>console.error(e));
