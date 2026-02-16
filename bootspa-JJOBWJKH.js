import{c as me}from"./chunk-BVYHASPJ.js";import"./chunk-HBEG3PPE.js";import"./chunk-VO5H3I6X.js";import{c as ue,g as ce,h as de}from"./chunk-7DHOQ6G4.js";import{a as re,e as le,f as fe}from"./chunk-XLHYX6VJ.js";import{e as oe,f as ie,g as se}from"./chunk-BDIKAETI.js";import"./chunk-I4JZAKN6.js";import"./chunk-QTD7QFMO.js";import{Zb as ae,aa as te,fa as ee,sb as ne}from"./chunk-VNOCNMFG.js";import{d as Qt,e as Zt}from"./chunk-C6Q5SG76.js";var na=Qt(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});var Kn="fas",qn="pause",Qn=384,Zn=512,Kt=[9208],ta="f04c",ea="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z";k.definition={prefix:Kn,iconName:qn,icon:[Qn,Zn,Kt,ta,ea]};k.faPause=k.definition;k.prefix=Kn;k.iconName=qn;k.width=Qn;k.height=Zn;k.ligatures=Kt;k.unicode=ta;k.svgPathData=ea;k.aliases=Kt});var fa=Qt(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var aa="fas",ra="play",oa=448,ia=512,qt=[9654],sa="f04b",la="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z";I.definition={prefix:aa,iconName:ra,icon:[oa,ia,qt,sa,la]};I.faPlay=I.definition;I.prefix=aa;I.iconName=ra;I.width=oa;I.height=ia;I.ligatures=qt;I.unicode=sa;I.svgPathData=la;I.aliases=qt});function wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function xa(t){if(Array.isArray(t))return t}function Ca(t){if(Array.isArray(t))return wt(t)}function Sa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,Be(a.key),a)}}function wa(t,e,n){return e&&pe(t.prototype,e),n&&pe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Rt(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw i}}}}function p(t,e,n){return(e=Be(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Aa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ka(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,i,o,s=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(s.push(a.value),s.length!==e);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Ia(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?he(Object(n),!0).forEach(function(a){p(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ft(t,e){return xa(t)||ka(t,e)||Rt(t,e)||Ia()}function F(t){return Ca(t)||Aa(t)||Rt(t)||Pa()}function Ea(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Be(t){var e=Ea(t,"string");return typeof e=="symbol"?e:e+""}function it(t){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(t)}function Rt(t,e){if(t){if(typeof t=="string")return wt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wt(t,e):void 0}}var ve=function(){},Lt={},Xe={},Ve=null,Je={mark:ve,measure:ve};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(Xe=document),typeof MutationObserver<"u"&&(Ve=MutationObserver),typeof performance<"u"&&(Je=performance)}catch{}var Fa=Lt.navigator||{},ge=Fa.userAgent,be=ge===void 0?"":ge,D=Lt,g=Xe,ye=Ve,et=Je,_i=!!D.document,M=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Ke=~be.indexOf("MSIE")||~be.indexOf("Trident/"),vt,Oa=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Na=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,qe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ta={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",q="duotone",Ze="sharp",tn="sharp-duotone",en="chisel",nn="etch",an="jelly",rn="jelly-duo",on="jelly-fill",sn="notdog",ln="notdog-duo",fn="slab",un="slab-press",cn="thumbprint",dn="utility",mn="utility-duo",pn="utility-fill",hn="whiteboard",ja="Classic",Ma="Duotone",_a="Sharp",Da="Sharp Duotone",$a="Chisel",Ra="Etch",La="Jelly",za="Jelly Duo",Wa="Jelly Fill",Ua="Notdog",Ha="Notdog Duo",Ya="Slab",Ga="Slab Press",Ba="Thumbprint",Xa="Utility",Va="Utility Duo",Ja="Utility Fill",Ka="Whiteboard",vn=[C,q,Ze,tn,en,nn,an,rn,on,sn,ln,fn,un,cn,dn,mn,pn,hn],Di=(vt={},p(p(p(p(p(p(p(p(p(p(vt,C,ja),q,Ma),Ze,_a),tn,Da),en,$a),nn,Ra),an,La),rn,za),on,Wa),sn,Ua),p(p(p(p(p(p(p(p(vt,ln,Ha),fn,Ya),un,Ga),cn,Ba),dn,Xa),mn,Va),pn,Ja),hn,Ka)),qa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Qa={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Za=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),tr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},gn=["fak","fa-kit","fakd","fa-kit-duotone"],xe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},er=["kit"],nr="kit",ar="kit-duotone",rr="Kit",or="Kit Duotone",$i=p(p({},nr,rr),ar,or),ir={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},sr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},lr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt,nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],ur="classic",cr="duotone",dr="sharp",mr="sharp-duotone",pr="chisel",hr="etch",vr="jelly",gr="jelly-duo",br="jelly-fill",yr="notdog",xr="notdog-duo",Cr="slab",Sr="slab-press",wr="thumbprint",Ar="utility",kr="utility-duo",Ir="utility-fill",Pr="whiteboard",Er="Classic",Fr="Duotone",Or="Sharp",Nr="Sharp Duotone",Tr="Chisel",jr="Etch",Mr="Jelly",_r="Jelly Duo",Dr="Jelly Fill",$r="Notdog",Rr="Notdog Duo",Lr="Slab",zr="Slab Press",Wr="Thumbprint",Ur="Utility",Hr="Utility Duo",Yr="Utility Fill",Gr="Whiteboard",Ri=(gt={},p(p(p(p(p(p(p(p(p(p(gt,ur,Er),cr,Fr),dr,Or),mr,Nr),pr,Tr),hr,jr),vr,Mr),gr,_r),br,Dr),yr,$r),p(p(p(p(p(p(p(p(gt,xr,Rr),Cr,Lr),Sr,zr),wr,Wr),Ar,Ur),kr,Hr),Ir,Yr),Pr,Gr)),Br="kit",Xr="kit-duotone",Vr="Kit",Jr="Kit Duotone",Li=p(p({},Br,Vr),Xr,Jr),Kr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},qr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Qr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],bn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(fr,Qr),Zr=["solid","regular","light","thin","duotone","brands","semibold"],yn=[1,2,3,4,5,6,7,8,9,10],to=yn.concat([11,12,13,14,15,16,17,18,19,20]),eo=["aw","fw","pull-left","pull-right"],no=[].concat(F(Object.keys(qr)),Zr,eo,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY]).concat(yn.map(function(t){return"".concat(t,"x")})).concat(to.map(function(t){return"w-".concat(t)})),ao={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",kt=16,xn="fa",Cn="svg-inline--fa",z="data-fa-i2svg",It="data-fa-pseudo-element",ro="data-fa-pseudo-element-pending",zt="data-prefix",Wt="data-icon",Se="fontawesome-i2svg",oo="async",io=["HTML","HEAD","STYLE","SCRIPT"],Sn=["::before","::after",":before",":after"],wn=(function(){try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[C]}})}var An=f({},qe);An[C]=f(f(f(f({},{"fa-duotone":"duotone"}),qe[C]),xe.kit),xe["kit-duotone"]);var so=Q(An),Pt=f({},tr);Pt[C]=f(f(f(f({},{duotone:"fad"}),Pt[C]),Ce.kit),Ce["kit-duotone"]);var we=Q(Pt),Et=f({},At);Et[C]=f(f({},Et[C]),lr.kit);var Ut=Q(Et),Ft=f({},Kr);Ft[C]=f(f({},Ft[C]),ir.kit);var zi=Q(Ft),lo=Oa,kn="fa-layers-text",fo=Na,uo=f({},qa),Wi=Q(uo),co=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt=Ta,mo=[].concat(F(er),F(no)),V=D.FontAwesomeConfig||{};function po(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ho(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(Ae=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ae.forEach(function(t){var e=ft(t,2),n=e[0],a=e[1],r=ho(po(n));r!=null&&(V[a]=r)}));var Ae,In={styleDefault:"solid",familyDefault:C,cssPrefix:xn,replacementClass:Cn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var G=f(f({},In),V);G.autoReplaceSvg||(G.observeMutations=!1);var d={};Object.keys(In).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){G[t]=n,J.forEach(function(a){return a(d)})},get:function(){return G[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){G.cssPrefix=e,J.forEach(function(n){return n(d)})},get:function(){return G.cssPrefix}});D.FontAwesomeConfig=d;var J=[];function vo(t){return J.push(t),function(){J.splice(J.indexOf(t),1)}}var _=kt,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function go(t){if(!(!t||!M)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var bo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ke(){for(var t=12,e="";t-- >0;)e+=bo[Math.random()*62|0];return e}function B(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ht(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Pn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Pn(t[n]),'" ')},"").trim()}function ut(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Yt(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function xo(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Co(t){var e=t.transform,n=t.width,a=n===void 0?kt:n,r=t.height,i=r===void 0?kt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ke?l+="translate(".concat(e.x/_-a/2,"em, ").concat(e.y/_-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):l+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),l+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var So=`:root, :host {
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
}`;function En(){var t=xn,e=Cn,n=d.cssPrefix,a=d.replacementClass,r=So;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ie=!1;function yt(){d.autoAddCss&&!Ie&&(go(En()),Ie=!0)}var wo={mixout:function(){return{dom:{css:En,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},j=D||{};j[T]||(j[T]={});j[T].styles||(j[T].styles={});j[T].hooks||(j[T].hooks={});j[T].shims||(j[T].shims=[]);var E=j[T],Fn=[],On=function(){g.removeEventListener("DOMContentLoaded",On),st=1,Fn.map(function(e){return e()})},st=!1;M&&(st=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),st||g.addEventListener("DOMContentLoaded",On));function Ao(t){M&&(st?setTimeout(t,0):Fn.push(t))}function Z(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Pn(t):"<".concat(e," ").concat(yo(a),">").concat(i.map(Z).join(""),"</").concat(e,">")}function Pe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ko=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},xt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?ko(n,r):n,l,u,m;for(a===void 0?(l=1,m=e[i[0]]):(l=0,m=a);l<o;l++)u=i[l],m=s(m,e[u],u,e);return m};function Nn(t){return F(t).length!==1?null:t.codePointAt(0).toString(16)}function Ee(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ot(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ee(e);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,Ee(e)):E.styles[t]=f(f({},E.styles[t]||{}),i),t==="fas"&&Ot("fa",e)}var K=E.styles,Io=E.shims,Tn=Object.keys(Ut),Po=Tn.reduce(function(t,e){return t[e]=Object.keys(Ut[e]),t},{}),Gt=null,jn={},Mn={},_n={},Dn={},$n={};function Eo(t){return~mo.indexOf(t)}function Fo(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Eo(r)?r:null}var Rn=function(){var e=function(i){return xt(K,function(o,s,l){return o[l]=xt(s,i,{}),o},{})};jn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Mn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),$n=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in K||d.autoFetchSvg,a=xt(Io,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});_n=a.names,Dn=a.unicodes,Gt=ct(d.styleDefault,{family:d.familyDefault})};vo(function(t){Gt=ct(t.styleDefault,{family:d.familyDefault})});Rn();function Bt(t,e){return(jn[t]||{})[e]}function Oo(t,e){return(Mn[t]||{})[e]}function L(t,e){return($n[t]||{})[e]}function Ln(t){return _n[t]||{prefix:null,iconName:null}}function No(t){var e=Dn[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return Gt}var zn=function(){return{prefix:null,iconName:null,rest:[]}};function To(t){var e=C,n=Tn.reduce(function(a,r){return a[r]="".concat(d.cssPrefix,"-").concat(r),a},{});return vn.forEach(function(a){(t.includes(n[a])||t.some(function(r){return Po[a].includes(r)}))&&(e=a)}),e}function ct(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?C:n,r=so[a][t];if(a===q&&!t)return"fad";var i=we[a][t]||we[a][r],o=t in E.styles?t:null,s=i||o||null;return s}function jo(t){var e=[],n=null;return t.forEach(function(a){var r=Fo(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Fe(t){return t.sort().filter(function(e,n,a){return a.indexOf(e)===n})}var Oe=bn.concat(gn);function dt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,r=null,i=Fe(t.filter(function(h){return Oe.includes(h)})),o=Fe(t.filter(function(h){return!Oe.includes(h)})),s=i.filter(function(h){return r=h,!Qe.includes(h)}),l=ft(s,1),u=l[0],m=u===void 0?null:u,c=To(i),v=f(f({},jo(o)),{},{prefix:ct(m,{family:c})});return f(f(f({},v),$o({values:t,family:c,styles:K,config:d,canonical:v,givenPrefix:r})),Mo(a,r,v))}function Mo(t,e,n){var a=n.prefix,r=n.iconName;if(t||!a||!r)return{prefix:a,iconName:r};var i=e==="fa"?Ln(r):{},o=L(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var _o=vn.filter(function(t){return t!==C||t!==q}),Do=Object.keys(At).filter(function(t){return t!==C}).map(function(t){return Object.keys(At[t])}).flat();function $o(t){var e=t.values,n=t.family,a=t.canonical,r=t.givenPrefix,i=r===void 0?"":r,o=t.styles,s=o===void 0?{}:o,l=t.config,u=l===void 0?{}:l,m=n===q,c=e.includes("fa-duotone")||e.includes("fad"),v=u.familyDefault==="duotone",h=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(c||v||h)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&_o.includes(n)){var y=Object.keys(s).find(function(S){return Do.includes(S)});if(y||u.autoFetchSvg){var b=Za.get(n).defaultShortPrefixId;a.prefix=b,a.iconName=L(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||i==="fa")&&(a.prefix=$()||"fas"),a}var Ro=(function(){function t(){Sa(this,t),this.definitions={}}return wa(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=f(f({},n.definitions[s]||{}),o[s]),Ot(s,o[s]);var l=Ut[C][s];l&&Ot(l,o[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,m=u[2];n[s]||(n[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(n[s][c]=u)}),n[s][l]=u}),n}}])})(),Ne=[],H={},Y={},Lo=Object.keys(Y);function zo(t,e){var n=e.mixoutsTo;return Ne=t,H={},Object.keys(Y).forEach(function(a){Lo.indexOf(a)===-1&&delete Y[a]}),Ne.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),it(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}a.provides&&a.provides(Y)}),n}function Nt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=H[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=H[t]||[];r.forEach(function(i){i.apply(null,n)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||$();if(e)return e=L(n,e)||e,Pe(Wn.definitions,n,e)||Pe(E.styles,n,e)}var Wn=new Ro,Wo=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,W("noAuto")},Uo={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(W("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ao(function(){Yo({autoReplaceSvgRoot:n}),W("watch",e)})}},Ho={icon:function(e){if(e===null)return null;if(it(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:L(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ct(e[0]);return{prefix:a,iconName:L(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(lo))){var r=dt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:L(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=$();return{prefix:i,iconName:L(i,e)||e}}}},A={noAuto:Wo,config:d,dom:Uo,parse:Ho,library:Wn,findIconDefinition:Tt,toHtml:Z},Yo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&A.dom.i2svg({node:a})};function mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Z(a)})}}),Object.defineProperty(t,"node",{get:function(){if(M){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Go(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Yt(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=ut(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Bo(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:a}]}]}function Xo(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Xt(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,u=t.extra,m=t.watchable,c=m===void 0?!1:m,v=a.found?a:n,h=v.width,y=v.height,b=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(N){return u.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!Xo(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[z]="");var x=f(f({},S),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),w=a.found&&n.found?R("generateAbstractMask",x)||{children:[],attributes:{}}:R("generateAbstractIcon",x)||{children:[],attributes:{}},P=w.children,U=w.attributes;return x.children=P,x.attributes=U,s?Bo(x):Go(x)}function Te(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[z]="");var u=f({},i.styles);Yt(r)&&(u.transform=Co({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var m=ut(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),c}function Vo(t){var e=t.content,n=t.extra,a=f(f({},n.attributes),{},{class:n.classes.join(" ")}),r=ut(n.styles);r.length>0&&(a.style=r);var i=[];return i.push({tag:"span",attributes:a,children:[e]}),i}var Ct=E.styles;function jt(t){var e=t[0],n=t[1],a=t.slice(4),r=ft(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Jo={found:!1,width:512,height:512};function Ko(t,e){!wn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=$()),new Promise(function(a,r){if(n==="fa"){var i=Ln(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ct[e]&&Ct[e][t]){var o=Ct[e][t];return a(jt(o))}Ko(t,e),a(f(f({},Jo),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var je=function(){},_t=d.measurePerformance&&et&&et.mark&&et.measure?et:{mark:je,measure:je},X='FA "7.1.0"',qo=function(e){return _t.mark("".concat(X," ").concat(e," begins")),function(){return Un(e)}},Un=function(e){_t.mark("".concat(X," ").concat(e," ends")),_t.measure("".concat(X," ").concat(e),"".concat(X," ").concat(e," begins"),"".concat(X," ").concat(e," ends"))},Vt={begin:qo,end:Un},rt=function(){};function Me(t){var e=t.getAttribute?t.getAttribute(z):null;return typeof e=="string"}function Qo(t){var e=t.getAttribute?t.getAttribute(zt):null,n=t.getAttribute?t.getAttribute(Wt):null;return e&&n}function Zo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ti(){if(d.autoReplaceSvg===!0)return ot.replace;var t=ot[d.autoReplaceSvg];return t||ot.replace}function ei(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ni(t){return g.createElement(t)}function Hn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ei:ni:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Hn(o,{ceFn:a}))}),r}function ai(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ot={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Hn(r),n)}),n.getAttribute(z)===null&&d.keepOriginalSource){var a=g.createComment(ai(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ht(n).indexOf(d.replacementClass))return ot.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Z(s)}).join(`
`);n.setAttribute(z,""),n.innerHTML=o}};function _e(t){t()}function Yn(t,e){var n=typeof e=="function"?e:rt;if(t.length===0)n();else{var a=_e;d.mutateApproach===oo&&(a=D.requestAnimationFrame||_e),a(function(){var r=ti(),i=Vt.begin("mutate");t.map(r),i(),n()})}}var Jt=!1;function Gn(){Jt=!0}function Dt(){Jt=!1}var lt=null;function De(t){if(ye&&d.observeMutations){var e=t.treeCallback,n=e===void 0?rt:e,a=t.nodeCallback,r=a===void 0?rt:a,i=t.pseudoElementsCallback,o=i===void 0?rt:i,s=t.observeMutationsRoot,l=s===void 0?g:s;lt=new ye(function(u){if(!Jt){var m=$();B(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Me(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&Me(c.target)&&~co.indexOf(c.attributeName))if(c.attributeName==="class"&&Qo(c.target)){var v=dt(Ht(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(zt,h||m),y&&c.target.setAttribute(Wt,y)}else Zo(c.target)&&r(c.target)})}}),M&&lt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ri(){lt&&lt.disconnect()}function oi(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function ii(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=dt(Ht(t));return r.prefix||(r.prefix=$()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Oo(r.prefix,t.innerText)||Bt(r.prefix,Nn(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function si(t){var e=B(t.attributes).reduce(function(n,a){return n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n},{});return e}function li(){return{iconName:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $e(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ii(t),a=n.iconName,r=n.prefix,i=n.rest,o=si(t),s=Nt("parseNodeAttributes",{},t),l=e.styleParser?oi(t):[];return f({iconName:a,prefix:r,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fi=E.styles;function Bn(t){var e=d.autoReplaceSvg==="nest"?$e(t,{styleParser:!1}):$e(t);return~e.extra.classes.indexOf(kn)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function ui(){return[].concat(F(gn),F(bn))}function Re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var n=g.documentElement.classList,a=function(c){return n.add("".concat(Se,"-").concat(c))},r=function(c){return n.remove("".concat(Se,"-").concat(c))},i=d.autoFetchSvg?ui():Qe.concat(Object.keys(fi));i.includes("fa")||i.push("fa");var o=[".".concat(kn,":not([").concat(z,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=B(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Vt.begin("onTree"),u=s.reduce(function(m,c){try{var v=Bn(c);v&&m.push(v)}catch(h){wn||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(v){Yn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(function(v){l(),c(v)})})}function ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bn(t).then(function(n){n&&Yn([n],e)})}function di(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Tt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tt(r||{})),t(a,f(f({},n),{},{mask:r}))}}var mi=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?O:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,m=u===void 0?null:u,c=n.classes,v=c===void 0?[]:c,h=n.attributes,y=h===void 0?{}:h,b=n.styles,S=b===void 0?{}:b;if(e){var x=e.prefix,w=e.iconName,P=e.icon;return mt(f({type:"icon"},e),function(){return W("beforeDOMElementCreation",{iconDefinition:e,params:n}),Xt({icons:{main:jt(P),mask:l?jt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:w,transform:f(f({},O),r),symbol:o,maskId:m,extra:{attributes:y,styles:S,classes:v}})})}},pi={mixout:function(){return{icon:di(mi)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Re,n.nodeCallback=ci,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return Re(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.prefix,o=a.transform,s=a.symbol,l=a.mask,u=a.maskId,m=a.extra;return new Promise(function(c,v){Promise.all([Mt(r,i),l.iconName?Mt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=ft(h,2),b=y[0],S=y[1];c([n,Xt({icons:{main:b,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ut(s);l.length>0&&(r.style=l);var u;return Yt(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},hi={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return mt({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},vi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return mt({type:"counter",content:n},function(){return W("beforeDOMElementCreation",{content:n,params:a}),Vo({content:n.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(F(s))}})})}}}},gi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?O:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return mt({type:"text",content:n},function(){return W("beforeDOMElementCreation",{content:n,params:a}),Te({content:n,transform:f(f({},O),i),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.transform,i=a.extra,o=null,s=null;if(Ke){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([n,Te({content:n.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Xn=new RegExp('"',"ug"),Le=[1105920,1112319],ze=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Qa),ao),sr),$t=Object.keys(ze).reduce(function(t,e){return t[e.toLowerCase()]=ze[e],t},{}),bi=Object.keys($t).reduce(function(t,e){var n=$t[e];return t[e]=n[900]||F(Object.entries(n))[0][1],t},{});function yi(t){var e=t.replace(Xn,"");return Nn(F(e)[0]||"")}function xi(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),a=n.replace(Xn,""),r=a.codePointAt(0),i=r>=Le[0]&&r<=Le[1],o=a.length===2?a[0]===a[1]:!1;return i||o||e}function Ci(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return($t[n]||{})[r]||bi[n]}function We(t,e){var n="".concat(ro).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=B(t.children),o=i.filter(function(pt){return pt.getAttribute(It)===e})[0],s=D.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(fo),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return t.removeChild(o),a();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Ci(l,m),y=yi(v),b=u[0].startsWith("FontAwesome"),S=xi(s),x=Bt(h,y),w=x;if(b){var P=No(y);P.iconName&&P.prefix&&(x=P.iconName,h=P.prefix)}if(x&&!S&&(!o||o.getAttribute(zt)!==h||o.getAttribute(Wt)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var U=li(),N=U.extra;N.attributes[It]=e,Mt(x,h).then(function(pt){var ba=Xt(f(f({},U),{},{icons:{main:pt,mask:zn()},prefix:h,iconName:w,extra:N,watchable:!0})),ht=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ht,t.firstChild):t.appendChild(ht),ht.outerHTML=ba.map(function(ya){return Z(ya)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Si(t){return Promise.all([We(t,"::before"),We(t,"::after")])}function wi(t){return t.parentNode!==document.head&&!~io.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(It)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Ai=function(e){return!!e&&Sn.some(function(n){return e.includes(n)})},ki=function(e){if(!e)return[];var n=new Set,a=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=at(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Ai(o)){var s=Sn.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&n.add(s)}}}catch(l){r.e(l)}finally{r.f()}return n};function Ue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var n;if(e)n=t;else if(d.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var a=new Set,r=at(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=at(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=ki(u.selectorText),c=at(m),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;a.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!a.size)return;var y=Array.from(a).join(", ");try{n=t.querySelectorAll(y)}catch{}}return new Promise(function(b,S){var x=B(n).filter(wi).map(Si),w=Vt.begin("searchPseudoElements");Gn(),Promise.all(x).then(function(){w(),Dt(),b()}).catch(function(){w(),Dt(),S()})})}}var Ii={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ue,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;d.searchPseudoElements&&Ue(r)}}},He=!1,Pi={mixout:function(){return{dom:{unwatch:function(){Gn(),He=!0}}}},hooks:function(){return{bootstrap:function(){De(Nt("mutationObserverCallbacks",{}))},noAuto:function(){ri()},watch:function(n){var a=n.observeMutationsRoot;He?Dt():De(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ye=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ei={mixout:function(){return{parse:{transform:function(n){return Ye(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ye(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),h.path)}]}]}}}},St={x:0,y:0,width:"100%",height:"100%"};function Ge(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Fi(t){return t.tag==="g"?t.children:[t]}var Oi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?dt(r.split(" ").map(function(o){return o.trim()})):zn();return i.prefix||(i.prefix=$()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,m=i.icon,c=o.width,v=o.icon,h=xo({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},St),{},{fill:"white"})},b=m.children?{children:m.children.map(Ge)}:{},S={tag:"g",attributes:f({},h.inner),children:[Ge(f({tag:m.tag,attributes:f(f({},m.attributes),h.path)},b))]},x={tag:"g",attributes:f({},h.outer),children:[S]},w="mask-".concat(s||ke()),P="clip-".concat(s||ke()),U={tag:"mask",attributes:f(f({},St),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Fi(v)},U]};return a.push(N,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},St)}),{children:a,attributes:r}}}},Ni={provides:function(e){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ti={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ji=[wo,pi,hi,vi,gi,Ii,Pi,Ei,Oi,Ni,Ti];zo(ji,{mixoutsTo:A});var Ui=A.noAuto,Hi=A.config,Vn=A.library,Jn=A.dom,Yi=A.parse,Gi=A.findIconDefinition,Bi=A.toHtml,Xi=A.icon,Vi=A.layer,Ji=A.text,Ki=A.counter;var va=Zt(na(),1),ga=Zt(fa(),1);var tt=class{};function ua(){let t=ee(tt);return t.updateMetaTags(),t}var ca=(()=>{class t{currentRouteInfo(){}updateMetaTags(){}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=te({token:t,factory:t.\u0275fac})}}return t})();var da=(()=>{class t{#t=ua();static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=ne({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(a,r){a&1&&ae(0,"router-outlet")},dependencies:[ue],encapsulation:2})}}return t})();var ma=[{path:"blog",loadComponent:()=>import("./blogs.component-FIQS24VA.js").then(t=>t.BlogsComponent)},{path:"blog/:id",loadComponent:()=>import("./blogs.component-FIQS24VA.js").then(t=>t.BlogsComponent)},{path:"",loadComponent:()=>import("./demo.component-CKGHE5LZ.js").then(t=>t.DemoComponent),children:[{path:"filterSamp",data:{completeStatic:!0,listOrigin:"https://jsonplaceholder.typicode.com/users"},loadComponent:()=>import("./filter-sample.component-DK7O6G2Y.js").then(t=>t.FilterSampleComponent)},{path:"modalSamp",loadComponent:()=>import("./modal-demo.component-UWORJEZC.js").then(t=>t.ModalDemoComponent)},{path:"mixinSamp",loadComponent:()=>import("./mixins.component-7EXTKSAO.js").then(t=>t.MixinsComponent)},{path:"htmlLoad",loadComponent:()=>import("./htmlload.component-C64PEYSQ.js").then(t=>t.HtmlloadComponent)},{path:"requiredAttributes",loadComponent:()=>import("./required-attributes.component-UL7QKJVO.js").then(t=>t.RequiredAttributesComponent)},{path:"complexAPI",loadComponent:()=>import("./apisample.component-HYU5E2LP.js").then(t=>t.APISampleComponent)},{path:"pokeAPI",loadComponent:()=>import("./pokemain.component-MGE5WTO5.js").then(t=>t.PokeMainComponent)},{path:"observableState",loadChildren:()=>import("./observable-state.routes-LKCKKNUW.js").then(t=>t.routes)},{path:"DirectiveSamp",loadComponent:()=>import("./directives-sample.component-4DK2V5JF.js").then(t=>t.DirectivesSampleComponent)},{path:"svg",loadComponent:()=>import("./svg-calender.component-OWMOZGMS.js").then(t=>t.SvgCalenderComponent)},{path:"testOb",loadChildren:()=>import("./test.routes-HVES7DAY.js").then(t=>t.routes)},{path:"home",loadComponent:()=>import("./home.component-K4RH2WCW.js").then(t=>t.HomeComponent)},{path:"dynhtml",loadComponent:()=>import("./dynamichtml.component-QY6U5CCW.js").then(t=>t.DynamicHtmlComponent)},{path:"snow",loadComponent:()=>import("./snow.component-OQA3WKEG.js").then(t=>t.SnowComponent)},{path:"tumblr",loadComponent:()=>import("./tumblr.component-NW3FDHLW.js").then(t=>t.TumblrComponent)},{path:"bigData",loadComponent:()=>import("./big-data.component-ILDFCB2U.js").then(t=>t.BigDataComponent)},{path:"svgTest",loadComponent:()=>import("./svg-test.component-XK25KYXK.js").then(t=>t.SvgTestComponent)},{path:"pannel",loadComponent:()=>import("./pannel-stuff.component-H2UABSXN.js").then(t=>t.PannelStuffComponent)},{path:"clock",loadComponent:()=>import("./analog-clock.component-VNY3QHKL.js").then(t=>t.AnalogClockComponent)},{path:"gridThings",loadComponent:()=>import("./gridthings.component-ADDBFO7D.js").then(t=>t.GridthingsComponent)},{path:"bintree",loadComponent:()=>import("./bintree.component-WGCNCSEV.js").then(t=>t.BintreeComponent)},{path:"localState",loadChildren:()=>import("./local-state.routes-7JQE24H3.js").then(t=>t.routes)},{path:"lazyComponents",loadComponent:()=>import("./lazy-component.component-RKWJZ7UB.js").then(t=>t.LazyComponentComponent)},{path:"svgTimer",loadComponent:()=>import("./svg-timer.component-3WZNQCV2.js").then(t=>t.SvgTimerComponent)},{path:"svgClock",loadComponent:()=>import("./svg-clock.component-ZZTCQCK3.js").then(t=>t.SvgClockComponent)},{path:"dynForm",loadComponent:()=>import("./dyn-form.component-NFWAP6IC.js").then(t=>t.DynFormComponent)},{path:"rxjsTest",loadComponent:()=>import("./rxjstest.component-RDBGRD4P.js").then(t=>t.RxjstestComponent)},{path:"unsubSample",loadComponent:()=>import("./unsub-sample.component-7XO52DUZ.js").then(t=>t.UnsubSampleComponent)},{path:"unsubSample/:id",loadComponent:()=>import("./unsub-sample.component-7XO52DUZ.js").then(t=>t.UnsubSampleComponent)},{path:"rvt",loadChildren:()=>import("./routes-ZZNX23ES.js")},{path:"gridCalender",loadComponent:()=>import("./grid-calender.component-PXXVXWCH.js").then(t=>t.GridCalenderComponent)},{path:"summary",loadComponent:()=>import("./html-summary.component-MU5FAXUM.js").then(t=>t.HtmlSummaryComponent)},{path:"resizePanel",loadComponent:()=>import("./resizable-panels.component-IOA4JPL5.js").then(t=>t.ResizablePanelsComponent)},{path:"signalsInForm",loadComponent:()=>import("./signals-form.component-LR36577Q.js").then(t=>t.SignalsFormsComponent)},{path:"card",loadComponent:()=>import("./card.component-QDR7AKVQ.js").then(t=>t.CardComponent)},{path:"cells",loadComponent:()=>import("./cells.component-PAN2E2WC.js").then(t=>t.CellsComponent)},{path:"cellsRaw",loadComponent:()=>import("./cell-raw.component-J6TPOIN5.js").then(t=>t.CellRawComponent)},{path:"routeList",loadComponent:()=>import("./route-list.component-U3OLF6AZ.js").then(t=>t.RouteListComponent)},{path:"formErrors",loadComponent:()=>import("./form-error.component-34RGJIVK.js")},{path:"dialog",loadComponent:()=>import("./dialog.component-EZMNLLYS.js")},{path:"signalInputMusings",loadComponent:()=>import("./signal-input-musings.component-LOQNMJVS.js").then(t=>t.SignalInputMusingsComponent)},{path:"signalPlay",loadComponent:()=>import("./signal-play.component-LK3BOZIM.js")},{path:"eventedOutputs",loadComponent:()=>import("./evented-outputs.component-DDYFRS7U.js").then(t=>t.EventedOutputsComponent)},{path:"indexDb",loadComponent:()=>import("./indexdb.component-6L2Z52ST.js").then(t=>t.IndexdbComponent),title:"IndexDb sample"},{path:"acnhorPosition",loadComponent:()=>import("./anchor-pos.component-UYPYBJEH.js").then(t=>t.AnchorPosComponent),title:"Anchor Position demo"},{path:"outOfOrder",loadComponent:()=>import("./out-of-order.component-JFLKKKNS.js").then(t=>t.OutOfOrderComponent)},{path:"stepper",loadComponent:()=>import("./stepper.component-JDTTYK7Z.js").then(t=>t.StepperComponent)},{path:"iconSprite",loadComponent:()=>import("./icon-sprite.component-2SHQ4NXJ.js").then(t=>t.IconSpriteComponent)},{path:"reusableDialog",loadComponent:()=>import("./reusable-dialog.component-XSDIA3MQ.js").then(t=>t.ReusableDialogComponent)},{path:"tableHover",loadComponent:()=>import("./table-hover.component-C5HBUU3D.js").then(t=>t.TableHoverComponent)},{path:"signalDebounce",loadComponent:()=>import("./signal-debounce.component-YDWFEOR5.js").then(t=>t.SignalDebounce)},{path:"crudStuff",loadComponent:()=>import("./crud-stuff.component-CSXG44GD.js").then(t=>t.CrudStuffComponent)},{path:"customNativeForm",loadComponent:()=>import("./custom-native-form.component-3HCMGECJ.js").then(t=>t.CustomNativeFormComponent)},{path:"inputHostExperiment",loadComponent:()=>import("./input-host-experiment.component-ZKWVUUVQ.js").then(t=>t.InputHostExperimentComponent)},{path:"meteredView",loadComponent:()=>import("./metered-view.component-PWELUA2W.js").then(t=>t.MeteredViewComponent)},{path:"mqtt",loadChildren:()=>import("./routes-PC4G4XJK.js")},{path:"signalForms",loadComponent:()=>import("./signal-forms-experiment.component-TRJCXTFU.js").then(t=>t.SignalFormsExperimentComponent)},{path:"signalForms/tree",loadComponent:()=>import("./signal-tree.component-GA7NRZMV.js").then(t=>t.SignalTreeComponent)},{path:"signalForms/dynamic",loadComponent:()=>import("./dynamic.component-2KXQ3EYM.js").then(t=>t.DynamicComponent)},{path:"toh",loadComponent:()=>import("./toh.component-6VIULEAG.js").then(t=>t.TohComponent)},{path:"toh/cdk",loadComponent:()=>import("./toh-cdk.component-D2CVYTZL.js").then(t=>t.TohCdkComponent)},{path:"vt",loadComponent:()=>import("./view-transitions.component-EIA7B775.js").then(t=>t.ViewTransitionsComponent)},{path:"inMem",loadComponent:()=>import("./in-mem-sample.component-XXEUBGIM.js").then(t=>t.InMemSampleComponent)},{path:"dynSignalForm",loadComponent:()=>import("./dynsignal-form.component-QYF44RHD.js").then(t=>t.DynsignalFormComponent)},{path:"dyn-route",loadChildren:()=>import("./dyn-routes.routes-M7S7EXOD.js").then(t=>t.dynRoutes)},{path:"timer",loadComponent:()=>import("./timer.component-OLUAEDR3.js").then(t=>t.TimerComponent)},{path:"temporal",loadComponent:()=>import("./temporal.component-JLAE2DTH.js").then(t=>t.TemporalComponent)},{path:"gridPlay",loadComponent:()=>import("./grid-play.component-HDYBRNPF.js").then(t=>t.GridPlayComponent)},{path:"**",redirectTo:"temporal"}]}];var pa={providers:[ce(ma,de()),oe(se(),ie([me])),fe(le()),{provide:tt,useClass:ca}]};var ha={production:!0};Vn.add(ga.faPlay,va.faPause);Jn.watch();ha.production&&void 0;re(da,pa).catch(t=>console.error(t));
