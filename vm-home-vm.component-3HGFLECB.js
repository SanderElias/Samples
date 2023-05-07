import{a as b,b as U,c as W,d as z,e as G,f as J}from"./chunk-ORAASBN6.js";import{a as $}from"./chunk-3TBQPOQT.js";import"./chunk-JY2GUBAW.js";import"./chunk-RPS3TBGS.js";import{c as K}from"./chunk-K26RW6XA.js";import{j as N,k as L}from"./chunk-GR2PXCGU.js";import{A as h,B as x,Eb as A,G as P,Gb as j,Hb as B,L as M,Nb as y,Ob as _,Qb as C,R as D,Rb as F,S as q,Sa as v,U as k,V as c,W as w,Wa as o,Ya as I,ab as p,bb as R,cb as s,db as r,eb as l,fb as g,ha as O,j as u,nb as T,o as E,p as Q,qb as H,sb as m,ub as S,x as V}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";var X=["ba"],Y=["bq"],Z=["speed"];function ee(i,n){if(i&1&&(r(0,"small"),m(1),l()),i&2){let e=T().ngIf;o(1),S(" Art is updated in ",e.countDown," seconds.")}}function te(i,n){i&1&&(r(0,"small"),m(1," Art updates are paused."),l())}function ie(i,n){if(i&1&&(r(0,"small"),m(1),l()),i&2){let e=T().ngIf;o(1),S(" Quotes updates every ",e.speed," seconds")}}function ne(i,n){i&1&&(r(0,"small"),m(1," Quotes are paused"),l())}function oe(i,n){if(i&1&&(r(0,"div",2)(1,"section")(2,"h1"),m(3,"Need better inspiration?"),l()(),r(4,"section")(5,"div",3),p(6,ee,2,1,"small",4),p(7,te,2,0,"small",4),p(8,ie,2,1,"small",4),p(9,ne,2,0,"small",4),l(),r(10,"div",3),g(11,"painting",5)(12,"quote",6),l(),r(13,"div",3),g(14,"play-button",7,8)(16,"play-button",7,9),l(),r(18,"div",3),g(19,"span")(20,"input",10,11),l()()()),i&2){let e=n.ngIf;o(6),s("ngIf",!e.baToggle),o(1),s("ngIf",e.baToggle),o(1),s("ngIf",!e.bqToggle),o(1),s("ngIf",e.bqToggle),o(2),s("art",e.art),o(1),s("quote",e.quote),o(2),s("isPaused",e.baToggle),o(2),s("isPaused",e.bqToggle),o(4),s("value",e.speed)}}function ae(i,n){i&1&&(r(0,"div",2),g(1,"div",12),r(2,"div",13)(3,"h2"),m(4,"Hold on loading the data!"),l()()()),i&2&&(o(3),H("color","white"))}var d=class{constructor(n,e){this.raki=n,this.q=e,this.artClick$=u(),this.quoteClick$=u(),this.speedChange$=u(),this.art$=this.raki.randomImage$.pipe(x(Boolean)),this.baClicks$=this.toToggleStream(this.artClick$),this.bqClicks$=this.toToggleStream(this.quoteClick$),this.speed$=this.speedChange$.pipe(D("target","value"),E(t=>+t),k(3.5),w(t=>console.log("speed",t))),this.quote$=this.speed$.pipe(c(t=>this.q.RandomQuoteOnIntervalObs(t*1e3).pipe(x(Boolean)))),this.pauseQuote$=this.bqClicks$.pipe(c(t=>t?h:this.quote$)),this.pausedArt$=this.baClicks$.pipe(c(t=>t?h:this.art$)),this.countDown$=this.pausedArt$.pipe(c(()=>Q([this.baClicks$,V(0,1e3)])),c(([t,a])=>t?h:u(a)),q((t,a)=>20-a,1)),this.vm$=K({art:this.pausedArt$,quote:this.pauseQuote$,countDown:this.countDown$,baToggle:this.baClicks$.pipe(M()),bqToggle:this.bqClicks$,speed:this.speed$}).pipe(P(4),w(t=>this.viewModal=t))}toToggleStream(n){return n.pipe(q(e=>!e,!1),k(!1))}},f=d;(()=>{d.\u0275fac=function(e){return new(e||d)(I(G),I(J))}})(),(()=>{d.\u0275cmp=O({type:d,selectors:[["vm-home-vm"]],viewQuery:function(e,t){if(e&1&&(_(X,5,v),_(Y,5,v),_(Z,5,v)),e&2){let a;y(a=C())&&(t.artClick$=a),y(a=C())&&(t.quoteClick$=a),y(a=C())&&(t.speedChange$=a)}},standalone:!0,features:[A],decls:4,vars:4,consts:[["class","hold",4,"ngIf","ngIfElse"],["loading",""],[1,"hold"],[1,"row"],[4,"ngIf"],[3,"art"],[3,"quote"],[3,"isPaused"],["ba",""],["bq",""],["type","range","min","0.5","max","30","step",".5",3,"value"],["speed",""],[1,"dummy"],[1,"wait"]],template:function(e,t){if(e&1&&(p(0,oe,22,9,"div",0),j(1,"async"),p(2,ae,5,2,"ng-template",null,1,F)),e&2){let a=R(3);s("ngIf",B(1,2,t.vm$))("ngIfElse",a)}},dependencies:[N,z,W,U,L],styles:[`[_nghost-%COMP%] {
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
  }`],changeDetection:0})})();$([b("click")],f.prototype,"artClick$",void 0);$([b("click")],f.prototype,"quoteClick$",void 0);$([b("change")],f.prototype,"speedChange$",void 0);export{f as VmHomeVmComponent};
