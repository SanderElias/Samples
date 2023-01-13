import{a as Ue}from"./chunk-OEYBYFXG.js";import{a as Le}from"./chunk-5EMPD2D5.js";import{a as Ae,b as Re}from"./chunk-WXJXXYGD.js";import{c as He,g as Ve,l as Fe}from"./chunk-P3TXNOF4.js";import{l as Be,m as N,n as z,q as Qe}from"./chunk-I27LS666.js";import{$a as f,B as k,C as V,D as Ce,Gb as h,H as F,Hb as g,Kb as Pe,L as Se,M as pe,Nb as E,Ob as _,Qb as I,Ra as S,Rb as Te,S as O,T as L,U as de,V as A,Va as r,W as l,Xa as b,Y as C,ab as Ee,b as ye,ba as me,bb as p,ca as we,cb as o,db as a,e as se,eb as u,f as ve,fb as _e,ga as $e,gb as Ie,hc as De,i as $,ib as je,ja as v,k as d,ka as ke,m as be,mb as Me,nb as x,p as c,q as H,qa as xe,qb as R,r as le,ra as qe,rb as ce,sb as m,tb as q,ub as U,wb as Oe,y as w}from"./chunk-CXFJOMNY.js";import{a as ge,b as fe}from"./chunk-G5KKTNWD.js";var re=Symbol("ObsFromEvent");function j(n){return(i,e)=>({get(){return Ne(this,e).pipe(F(4))},set(t){if(!(t instanceof Pe)){De()&&console.warn(`obsFromEvent called with ${t.constructor.name} instead of queryList`);return}let s=Ne(this,e);t.forEach(y=>{if(!(y instanceof S))throw new Error("ObsFromEvent expects a QueryList<ElementRef>");let ae=y.nativeElement;ae[re]||(ae.addEventListener(n,tt=>s.next(tt)),ae[re]=re)})}})}function Ne(n,i){let e=n[re]=n[re]||{};return e[i]||(e[i]=new se),e[i]}var ze="4a3Fxmua",We=n=>Object.keys(n).reduce((i,e)=>i+=`${e}=${encodeURIComponent(n[e])}&`,""),ue=n=>`https://www.rijksmuseum.nl/api/en/collection/?${We(n)}key=${ze}&format=json`,it=n=>`https://www.rijksmuseum.nl/api/en/collection/${n}?key=${ze}&format=json`,P=class{constructor(i){this.http=i,this.artCount=4e3,this.detailNumber=new se,this.detail$=this.detailNumber.pipe(l(e=>e?this.http.get(it(e)).pipe(c(t=>[t.artObject])):d([]))),this.selection={p:0,ps:1,type:"painting"},this.randomImage$=this.http.get(ue(this.selection)).pipe(C(e=>this.artCount=e.count),l(()=>w(0,2e4)),l(()=>this.getArtObject$),l(e=>this.preload(e.webImage.url))),this.getArtObject$=ye.create(e=>{e.next(fe(ge({},this.selection),{p:Math.floor(Math.random()*this.artCount)})),e.complete()}).pipe(l(e=>this.http.get(ue(e)).pipe(c(t=>t.artObjects[0]),Ce(()=>w(500).pipe(l(()=>this.getArtObject$))))),l(e=>e.webImage&&e.webImage.url?d(e):this.getArtObject$))}loadDetail(i){this.detailNumber.next(i)}artist(i){return console.log(i,We({q:i})),this.http.get(ue({q:i})).pipe(c(e=>e.artObjects),c(e=>e.reduce((t,s)=>s.hasImage?t.concat(s):t,[])),C(e=>console.log(e)))}preload(i){return new Promise((e,t)=>{let s=()=>e(`url(${i})`),y=document.createElement("img");y.addEventListener("load",s),y.addEventListener("error",t),y.src=i})}},W=P;(()=>{P.\u0275fac=function(e){return new(e||P)($e(Le))}})(),(()=>{P.\u0275prov=me({token:P,factory:P.\u0275fac,providedIn:"root"})})();var T=class{constructor(){this.quotes$=d(nt()).pipe(Se(2500),de(1)),this.quoteLength$=this.quotes$.pipe(c(i=>i.length),de(1)),this.quoteObs=i=>this.quotes$.pipe(c(e=>e[i])),this.RandomQuoteOnIntervalObs=i=>w(0,i).pipe(le(()=>this.quoteLength$),c(e=>Math.floor(Math.random()*e)),le(this.quoteObs))}},G=T;(()=>{T.\u0275fac=function(e){return new(e||T)}})(),(()=>{T.\u0275prov=me({token:T,factory:T.\u0275fac,providedIn:"root"})})();function nt(){return[{quote:"A noble spirit embiggens the smallest man.",author:"Jebadiah Springfield",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E16/94194.jpg"},{quote:"My eyes! The goggles do nothing!",author:"Rainier Wolfcastle",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E02/966381.jpg"},{quote:"But Marge, valets. For once, maybe someone will call me 'sir' without adding, 'you're making a scene.'",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E14/1162928.jpg"},{quote:"Um... how can I put this delicately? I don't got enough booze in this place to make you look good.",author:"Moe Szyslak",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S14E09/1093551.jpg"},{quote:"Why must i fail in every attempt at masonry?",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S10E19/313846.jpg"},{quote:"It's all over, people! we don't have a prayer!",author:"Reverend Lovejoy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E14/780879.jpg"},{quote:"Look, buddy, your car was upside down when we got here. And as for your grandma, she shouldn't have mouthed off like that!",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S05E11/701950.jpg"},{quote:"You know the courts might not work anymore but as long as everybody is videotaping everyone else justice will be done.",author:"Marge Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E09/1223154.jpg"},{quote:"Mmm. Alcohol and night swimming. It's a winning combination.",author:"Lenny Leonard",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S12E01/890848.jpg"},{quote:"No, Flanders. It's, uh...a meeting of gay witches for abortion. You wouldn't be interested.",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S16E19/676427.jpg"},{quote:"Well, all i remember about the last two months is giving a guest lecture at villanova -or maybe it was a street corner.",author:"Barney Gumble",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S09E01/252101.jpg"},{quote:"Look! A blue-collar bar. Oh, Smithers, let's go slumming.",author:"Mr Burns",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E11/1085359.jpg"},{quote:"Ah, the mirthless laugh of the damned. Hold your nose, Smithers. We're going in.",author:"Mr Burns",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E11/1109416.jpg"},{quote:"I'll have you know the contents of that dumpster are private. You stick your nose in, you'll be violating attorney-dumpster confidentiality.",author:"Lionel Hutz",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E23/561410.jpg"},{quote:"You got the brains and talent to go as far as you want and when you do I'll be right there to borrow money.",author:"Bart Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S03E18/1287978.jpg"},{quote:"Stop. We have reached the limits of what rectal probing can teach us.",author:"Kodos",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S08E01/868033.jpg"},{quote:"I've said it before, and i'll say it again: Democracy simply doesn't work.",author:"Kent Brockman",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E14/866081.jpg"},{quote:"Ned, have you thought about one of the other major religions? They're all pretty much the same.",author:"Reverend Lovejoy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E03/1086634.jpg"},{quote:"Son, we are about to break the surly bonds of gravity and punch the face of God.",author:"Homer Simpson",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S13E06/329871.jpg"},{quote:"Otto, why don't you get some more gas? Here's the credit card.",author:"Seymour Skinner",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S06E21/124907.jpg"},{quote:"Ooh, your powers of deduction are exceptional. I simply can't allow you to waste them here when there are so many crimes going unsolved at this very moment. Go! Go! For the good of the city.",author:"Comic Store Guy",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E18/195461.jpg"},{quote:"The Simpsons have come a long way since an old drunk made humans out of his rabbit characters to pay off his gambling debts.",author:"Troy Maclure",cat:"simpsons",imgSrc:"https://frinkiac.com/img/S07E10/1301249.jpg"}]}var Y=class{constructor(i){this.san=i,this.shadow=!0}set art(i){i&&(this.url=this.san.bypassSecurityTrustStyle(i))}},J=Y;(()=>{Y.\u0275fac=function(e){return new(e||Y)(b(He))}})(),(()=>{Y.\u0275cmp=v({type:Y,selectors:[["painting"]],hostVars:2,hostBindings:function(e,t){e&2&&ce("z2",t.shadow)},inputs:{art:"art"},decls:1,vars:2,consts:[[1,"painting"]],template:function(e,t){e&1&&u(0,"div",0),e&2&&R("background-image",t.url)},styles:[`[_nghost-%COMP%] {
    display: block;
    margin: 10px;
    width: 400px;
    height: 400px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(42, 228, 228);
  }
  .painting[_ngcontent-%COMP%] {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }`],changeDetection:0})})();var X=class{constructor(){this.shadow=!0}},Z=X;(()=>{X.\u0275fac=function(e){return new(e||X)}})(),(()=>{X.\u0275cmp=v({type:X,selectors:[["quote"]],hostVars:2,hostBindings:function(e,t){e&2&&ce("z2",t.shadow)},inputs:{quote:"quote"},decls:5,vars:4,consts:[[1,"quote"],[1,"text"],[1,"who"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"p",1),m(2),a(),o(3,"p",2),m(4),a()()),e&2&&(R("background-image","url("+(t.quote==null?null:t.quote.imgSrc)+")"),r(2),q(t.quote==null?null:t.quote.quote),r(2),q(t.quote==null?null:t.quote.author))},styles:[`[_nghost-%COMP%] {
    display: block;
    margin: 10px;
    width: 400px;
    height: 400px;
    padding: 10px;
    background-color: rgba(171, 201, 53, 0.76);
    border-radius: 10px;
    overflow: hidden;
  }

  .who[_ngcontent-%COMP%] {
    font-style: italic;
    color: white
  }

  .text[_ngcontent-%COMP%] {
    font-weight: bolder;
    color:whitesmoke
  }

  .quote[_ngcontent-%COMP%] {
    height: 100%;
    width: 100%;
    padding: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }`],changeDetection:0})})();var K=class{},ee=K;(()=>{K.\u0275fac=function(e){return new(e||K)}})(),(()=>{K.\u0275cmp=v({type:K,selectors:[["play-button"]],inputs:{isPaused:"isPaused"},decls:5,vars:2,consts:[[3,"hidden"],[1,"fas","fa-fw","fa-pause"],[1,"fas","fa-fw","fa-play"]],template:function(e,t){e&1&&(o(0,"button")(1,"span",0),u(2,"i",1),a(),o(3,"span",0),u(4,"i",2),a()()),e&2&&(r(1),p("hidden",t.isPaused),r(2),p("hidden",!t.isPaused))},encapsulation:2,changeDetection:0})})();var ot=["ba"],at=["bq"],rt=["speed"];function st(n,i){if(n&1&&(o(0,"small"),m(1),h(2,"async"),a()),n&2){let e=x();r(1),U(" Art is updated in ",g(2,1,e.countDown$)," seconds.")}}function pt(n,i){n&1&&(o(0,"small"),m(1," Art updates are paused."),a())}function mt(n,i){if(n&1&&(o(0,"small"),m(1),h(2,"async"),a()),n&2){let e=x();r(1),U(" Quotes updates every ",g(2,1,e.speed$)," seconds")}}function ct(n,i){n&1&&(o(0,"small"),m(1," Quotes are paused"),a())}var te=class{constructor(i,e){this.raki=i,this.q=e,this.artClick$=d(),this.quoteClick$=d(),this.speedChange$=d(),this.art$=this.raki.randomImage$.pipe(V(Boolean)),this.baClicks$=this.toToggleStream(this.artClick$),this.bqClicks$=this.toToggleStream(this.quoteClick$),this.speed$=this.speedChange$.pipe(O("target","value"),c(t=>+t),A(3.5),C(t=>console.log("speed",t))),this.quote$=this.speed$.pipe(l(t=>this.q.RandomQuoteOnIntervalObs(t*1e3).pipe(V(Boolean)))),this.pauseQuote$=this.bqClicks$.pipe(l(t=>t?k:this.quote$)),this.pausedArt$=this.baClicks$.pipe(l(t=>t?k:this.art$)),this.countDown$=this.pausedArt$.pipe(l(()=>H([this.baClicks$,w(0,1e3)])),l(([t,s])=>t?k:d(s)),L((t,s)=>20-s,1)),setTimeout(()=>{console.log(this.artClick$)},100)}toToggleStream(i){return i.pipe(L(e=>!e,!1),A(!1))}},D=te;(()=>{te.\u0275fac=function(e){return new(e||te)(b(W),b(G))}})(),(()=>{te.\u0275cmp=v({type:te,selectors:[["vm-home"]],viewQuery:function(e,t){if(e&1&&(_(ot,5,S),_(at,5,S),_(rt,5,S)),e&2){let s;E(s=I())&&(t.artClick$=s),E(s=I())&&(t.quoteClick$=s),E(s=I())&&(t.speedChange$=s)}},decls:31,vars:27,consts:[[1,"hold"],[1,"row"],[4,"ngIf"],[3,"art"],[3,"quote"],[3,"isPaused"],["ba",""],["bq",""],["type","range","min","0.5","max","30","step",".5",3,"value"],["speed",""]],template:function(e,t){e&1&&(o(0,"div",0)(1,"section")(2,"h1"),m(3,"Need some inspiration?"),a()(),o(4,"section")(5,"div",1),f(6,st,3,3,"small",2),h(7,"async"),f(8,pt,2,0,"small",2),h(9,"async"),f(10,mt,3,3,"small",2),h(11,"async"),f(12,ct,2,0,"small",2),h(13,"async"),a(),o(14,"div",1),u(15,"painting",3),h(16,"async"),u(17,"quote",4),h(18,"async"),a(),o(19,"div",1),u(20,"play-button",5,6),h(22,"async"),u(23,"play-button",5,7),h(25,"async"),a(),o(26,"div",1),u(27,"span")(28,"input",8,9),h(30,"async"),a()()()),e&2&&(r(6),p("ngIf",!g(7,9,t.baClicks$)),r(2),p("ngIf",g(9,11,t.baClicks$)),r(2),p("ngIf",!g(11,13,t.bqClicks$)),r(2),p("ngIf",g(13,15,t.bqClicks$)),r(3),p("art",g(16,17,t.pausedArt$)),r(2),p("quote",g(18,19,t.pauseQuote$)),r(3),p("isPaused",g(22,21,t.baClicks$)),r(3),p("isPaused",g(25,23,t.bqClicks$)),r(5),p("value",g(30,25,t.speed$)))},dependencies:[N,J,Z,ee,z],styles:[`[_nghost-%COMP%] {
    color:black;
  }
  .hold[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    
    background-color: rgb(226, 243, 238);
    padding: 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 40px 1fr;
  }

  input[type=range][_ngcontent-%COMP%] {
    width: calc(100% - 40px);
  }

  .row[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-bottom: 20px;
  }`],changeDetection:0})})();$([j("click")],D.prototype,"artClick$",void 0);$([j("click")],D.prototype,"quoteClick$",void 0);$([j("change")],D.prototype,"speedChange$",void 0);var lt=["ba"],dt=["bq"],ut=["speed"];function ht(n,i){if(n&1&&(o(0,"small"),m(1),a()),n&2){let e=x().ngIf;r(1),U(" Art is updated in ",e.countDown," seconds.")}}function gt(n,i){n&1&&(o(0,"small"),m(1," Art updates are paused."),a())}function ft(n,i){if(n&1&&(o(0,"small"),m(1),a()),n&2){let e=x().ngIf;r(1),U(" Quotes updates every ",e.speed," seconds")}}function yt(n,i){n&1&&(o(0,"small"),m(1," Quotes are paused"),a())}function vt(n,i){if(n&1&&(o(0,"div",2)(1,"section")(2,"h1"),m(3,"Need better inspiration?"),a()(),o(4,"section")(5,"div",3),f(6,ht,2,1,"small",4),f(7,gt,2,0,"small",4),f(8,ft,2,1,"small",4),f(9,yt,2,0,"small",4),a(),o(10,"div",3),u(11,"painting",5)(12,"quote",6),a(),o(13,"div",3),u(14,"play-button",7,8)(16,"play-button",7,9),a(),o(18,"div",3),u(19,"span")(20,"input",10,11),a()()()),n&2){let e=i.ngIf;r(6),p("ngIf",!e.baToggle),r(1),p("ngIf",e.baToggle),r(1),p("ngIf",!e.bqToggle),r(1),p("ngIf",e.bqToggle),r(2),p("art",e.art),r(1),p("quote",e.quote),r(2),p("isPaused",e.baToggle),r(2),p("isPaused",e.bqToggle),r(4),p("value",e.speed)}}function bt(n,i){n&1&&(o(0,"div",2),u(1,"div",12),o(2,"div",13)(3,"h2"),m(4,"Hold on loading the data!"),a()()()),n&2&&(r(3),R("color","white"))}var ie=class{constructor(i,e){this.raki=i,this.q=e,this.artClick$=d(),this.quoteClick$=d(),this.speedChange$=d(),this.art$=this.raki.randomImage$.pipe(V(Boolean)),this.baClicks$=this.toToggleStream(this.artClick$),this.bqClicks$=this.toToggleStream(this.quoteClick$),this.speed$=this.speedChange$.pipe(O("target","value"),c(t=>+t),A(3.5),C(t=>console.log("speed",t))),this.quote$=this.speed$.pipe(l(t=>this.q.RandomQuoteOnIntervalObs(t*1e3).pipe(V(Boolean)))),this.pauseQuote$=this.bqClicks$.pipe(l(t=>t?k:this.quote$)),this.pausedArt$=this.baClicks$.pipe(l(t=>t?k:this.art$)),this.countDown$=this.pausedArt$.pipe(l(()=>H([this.baClicks$,w(0,1e3)])),l(([t,s])=>t?k:d(s)),L((t,s)=>20-s,1)),this.vm$=Ae({art:this.pausedArt$,quote:this.pauseQuote$,countDown:this.countDown$,baToggle:this.baClicks$.pipe(pe()),bqToggle:this.bqClicks$,speed:this.speed$}).pipe(F(4),C(t=>this.viewModal=t))}toToggleStream(i){return i.pipe(L(e=>!e,!1),A(!1))}},B=ie;(()=>{ie.\u0275fac=function(e){return new(e||ie)(b(W),b(G))}})(),(()=>{ie.\u0275cmp=v({type:ie,selectors:[["vm-home-vm"]],viewQuery:function(e,t){if(e&1&&(_(lt,5,S),_(dt,5,S),_(ut,5,S)),e&2){let s;E(s=I())&&(t.artClick$=s),E(s=I())&&(t.quoteClick$=s),E(s=I())&&(t.speedChange$=s)}},decls:4,vars:4,consts:[["class","hold",4,"ngIf","ngIfElse"],["loading",""],[1,"hold"],[1,"row"],[4,"ngIf"],[3,"art"],[3,"quote"],[3,"isPaused"],["ba",""],["bq",""],["type","range","min","0.5","max","30","step",".5",3,"value"],["speed",""],[1,"dummy"],[1,"wait"]],template:function(e,t){if(e&1&&(f(0,vt,22,9,"div",0),h(1,"async"),f(2,bt,5,2,"ng-template",null,1,Te)),e&2){let s=Ee(3);p("ngIf",g(1,2,t.vm$))("ngIfElse",s)}},dependencies:[N,J,Z,ee,z],styles:[`[_nghost-%COMP%] {
    color:black
  }
  .hold[_ngcontent-%COMP%] {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    
    background-color: rgb(226, 243, 238);
    padding: 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 40px 1fr;
  }

  .row[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-bottom: 20px;
    ;
  }

  input[type=range][_ngcontent-%COMP%] {
    width: calc(100% - 40px);
  }

  .wait[_ngcontent-%COMP%] {
    padding: 15px;
    border-radius: 15px;
    height: 100px;
    width: 300px;
    background-color: #1f1f1f;
    color:white;
  }`],changeDetection:0})})();$([j("click")],B.prototype,"artClick$",void 0);$([j("click")],B.prototype,"quoteClick$",void 0);$([j("change")],B.prototype,"speedChange$",void 0);function he(n){let i=Object.values(n).map(e=>be(e)?e:d(e));return H(i).pipe(c(e=>Object.keys(n).reduce((t,s,y)=>(t[s]=e[y],t),{})))}function Ct(n,i){if(n&1&&(o(0,"tr")(1,"td"),m(2),a(),o(3,"td"),m(4),a(),o(5,"td"),m(6),a(),o(7,"td"),m(8),a()()),n&2){let e=i.$implicit;r(2),q(e.id),r(2),q(e.lineState),r(2),q(e.username),r(2),q(e.email)}}function St(n,i){if(n&1){let e=je();_e(0),o(1,"input",1),Me("input",function(s){xe(e);let y=x();return qe(y.setState("searchText",s.target.value))}),a(),o(2,"span"),m(3),a(),o(4,"table")(5,"thead")(6,"th"),m(7,"#"),a(),o(8,"th"),m(9,"state"),a(),o(10,"th"),m(11,"name"),a(),o(12,"th"),m(13,"email"),a()(),o(14,"tbody"),f(15,Ct,9,4,"tr",2),a()(),Ie()}if(n&2){let e=i.ngIf;r(3),Oe("",e.total," found: ",e.found," ",e.pages,""),r(12),p("ngForOf",e.foundUsers)}}var ne=class{constructor(i,e){this.us=i,this.route=e,this.state$=new ve({searchText:""}),this.users$=this.us.allUsers$,this.userCount$=this.users$.pipe(c(t=>t.length)),this.setState=Re(this.state$),this.foundUsers$=he({users:this.users$,search:this.state$.pipe(O("searchText"),pe(),F(250))}).pipe(c(({users:t,search:s})=>t.filter(y=>y.username.toLowerCase().includes(s.toLowerCase())).sort((y,ae)=>y.username<ae.username?-1:1))),this.searchCount$=this.foundUsers$.pipe(c(t=>t.length)),this.viewModel$=he({foundUsers:this.foundUsers$.pipe(c(t=>t.slice(0,25))),state:this.state$,total:this.userCount$,found:this.searchCount$,pages:this.searchCount$.pipe(c(t=>Math.ceil(t/25)))})}ngOnInit(){this.route.params.pipe(O("id"),C(i=>console.log("params",i))).subscribe()}},oe=ne;(()=>{ne.\u0275fac=function(e){return new(e||ne)(b(Ue),b(Ve))}})(),(()=>{ne.\u0275cmp=v({type:ne,selectors:[["app-demo-user"]],decls:4,vars:3,consts:[[4,"ngIf"],["type","text",3,"input"],[4,"ngFor","ngForOf"]],template:function(e,t){e&1&&(o(0,"h1"),m(1,"User list demo"),a(),f(2,St,16,4,"ng-container",0),h(3,"async")),e&2&&(r(2),p("ngIf",g(3,1,t.viewModel$)))},dependencies:[Be,N,z],styles:[`tr[_ngcontent-%COMP%]:nth-child(odd) {
  background-color: #444849;
}
table[_ngcontent-%COMP%] {
  width: 90vw;
  margin: 1rem;
  padding:0;
  border: 1px solid #404040;
  border-collapse: collapse;

}
td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {
  border-right: 1px solid #404040;
  text-align: left;
  padding:4px;
}`]})})();var wt=[{path:"theBad",component:D},{path:"theGood",component:B},{path:"user",component:oe},{path:"user/:id",component:oe,data:{fetchListFrom:"https://jsonplaceholder.typicode.com/users",idProperty:"id"}},{path:"/user/:id/related/:friendCode",component:oe},{path:"**",redirectTo:"theGood"}],Q=class{},et=Q;(()=>{Q.\u0275fac=function(e){return new(e||Q)}})(),(()=>{Q.\u0275mod=ke({type:Q})})(),(()=>{Q.\u0275inj=we({imports:[Qe,Fe.forChild(wt)]})})();export{et as ViewModelModule,wt as routes};
