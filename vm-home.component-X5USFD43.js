import{a as q,b as H,c as D,d as F,e as N,f as L}from"./chunk-VUNOFEYR.js";import{a as _}from"./chunk-PUMJTBDU.js";import"./chunk-3CI5XCVV.js";import"./chunk-EX27PMDL.js";import{j as M,k as V}from"./chunk-7UTYY7SV.js";import{A as $,B as Q,Gb as j,Ib as n,Jb as a,Pb as v,Qb as k,R as O,S,Sa as C,Sb as b,U as w,V as c,W as R,Wa as t,Za as B,cb as y,eb as s,fb as r,ga as A,gb as l,hb as d,j as f,o as I,p as P,pb as x,ub as u,wb as E,x as T}from"./chunk-VWKE6EEO.js";import"./chunk-G5KKTNWD.js";var W=["ba"],z=["bq"],G=["speed"];function J(m,o){if(m&1&&(r(0,"small"),u(1),n(2,"async"),l()),m&2){let i=x();t(1),E(" Art is updated in ",a(2,1,i.countDown$)," seconds.")}}function K(m,o){m&1&&(r(0,"small"),u(1," Art updates are paused."),l())}function U(m,o){if(m&1&&(r(0,"small"),u(1),n(2,"async"),l()),m&2){let i=x();t(1),E(" Quotes updates every ",a(2,1,i.speed$)," seconds")}}function X(m,o){m&1&&(r(0,"small"),u(1," Quotes are paused"),l())}var h=class{constructor(o,i){this.raki=o,this.q=i,this.artClick$=f(),this.quoteClick$=f(),this.speedChange$=f(),this.art$=this.raki.randomImage$.pipe(Q(Boolean)),this.baClicks$=this.toToggleStream(this.artClick$),this.bqClicks$=this.toToggleStream(this.quoteClick$),this.speed$=this.speedChange$.pipe(O("target","value"),I(e=>+e),w(3.5),R(e=>console.log("speed",e))),this.quote$=this.speed$.pipe(c(e=>this.q.RandomQuoteOnIntervalObs(e*1e3).pipe(Q(Boolean)))),this.pauseQuote$=this.bqClicks$.pipe(c(e=>e?$:this.quote$)),this.pausedArt$=this.baClicks$.pipe(c(e=>e?$:this.art$)),this.countDown$=this.pausedArt$.pipe(c(()=>P([this.baClicks$,T(0,1e3)])),c(([e,p])=>e?$:f(p)),S((e,p)=>20-p,1)),setTimeout(()=>{console.log(this.artClick$)},100)}toToggleStream(o){return o.pipe(S(i=>!i,!1),w(!1))}},g=h;(()=>{h.\u0275fac=function(i){return new(i||h)(B(N),B(L))}})(),(()=>{h.\u0275cmp=A({type:h,selectors:[["vm-home"]],viewQuery:function(i,e){if(i&1&&(k(W,5,C),k(z,5,C),k(G,5,C)),i&2){let p;v(p=b())&&(e.artClick$=p),v(p=b())&&(e.quoteClick$=p),v(p=b())&&(e.speedChange$=p)}},standalone:!0,features:[j],decls:31,vars:27,consts:[[1,"hold"],[1,"row"],[4,"ngIf"],[3,"art"],[3,"quote"],[3,"isPaused"],["ba",""],["bq",""],["type","range","min","0.5","max","30","step",".5",3,"value"],["speed",""]],template:function(i,e){i&1&&(r(0,"div",0)(1,"section")(2,"h1"),u(3,"Need some inspiration?"),l()(),r(4,"section")(5,"div",1),y(6,J,3,3,"small",2),n(7,"async"),y(8,K,2,0,"small",2),n(9,"async"),y(10,U,3,3,"small",2),n(11,"async"),y(12,X,2,0,"small",2),n(13,"async"),l(),r(14,"div",1),d(15,"painting",3),n(16,"async"),d(17,"quote",4),n(18,"async"),l(),r(19,"div",1),d(20,"play-button",5,6),n(22,"async"),d(23,"play-button",5,7),n(25,"async"),l(),r(26,"div",1),d(27,"span")(28,"input",8,9),n(30,"async"),l()()()),i&2&&(t(6),s("ngIf",!a(7,9,e.baClicks$)),t(2),s("ngIf",a(9,11,e.baClicks$)),t(2),s("ngIf",!a(11,13,e.bqClicks$)),t(2),s("ngIf",a(13,15,e.bqClicks$)),t(3),s("art",a(16,17,e.pausedArt$)),t(2),s("quote",a(18,19,e.pauseQuote$)),t(3),s("isPaused",a(22,21,e.baClicks$)),t(3),s("isPaused",a(25,23,e.bqClicks$)),t(5),s("value",a(30,25,e.speed$)))},dependencies:[M,F,D,H,V],styles:[`[_nghost-%COMP%] {
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
  }`],changeDetection:0})})();_([q("click")],g.prototype,"artClick$",void 0);_([q("click")],g.prototype,"quoteClick$",void 0);_([q("change")],g.prototype,"speedChange$",void 0);export{g as VmHomeComponent};
