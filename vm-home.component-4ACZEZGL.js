import{a as q,b as j,c as H,d as F,e as N,f as L}from"./chunk-ORAASBN6.js";import{a as _}from"./chunk-3TBQPOQT.js";import"./chunk-JY2GUBAW.js";import"./chunk-RPS3TBGS.js";import{j as D,k as V}from"./chunk-GR2PXCGU.js";import{A as C,B as S,Eb as A,Gb as n,Hb as o,Nb as $,Ob as k,Qb as b,R as M,S as w,Sa as v,U as Q,V as c,W as O,Wa as i,Ya as B,ab as y,cb as s,db as r,eb as l,fb as d,ha as R,j as f,nb as x,o as I,p as P,sb as u,ub as E,x as T}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";var W=["ba"],z=["bq"],G=["speed"];function J(m,a){if(m&1&&(r(0,"small"),u(1),n(2,"async"),l()),m&2){let t=x();i(1),E(" Art is updated in ",o(2,1,t.countDown$)," seconds.")}}function K(m,a){m&1&&(r(0,"small"),u(1," Art updates are paused."),l())}function U(m,a){if(m&1&&(r(0,"small"),u(1),n(2,"async"),l()),m&2){let t=x();i(1),E(" Quotes updates every ",o(2,1,t.speed$)," seconds")}}function X(m,a){m&1&&(r(0,"small"),u(1," Quotes are paused"),l())}var h=class{constructor(a,t){this.raki=a,this.q=t,this.artClick$=f(),this.quoteClick$=f(),this.speedChange$=f(),this.art$=this.raki.randomImage$.pipe(S(Boolean)),this.baClicks$=this.toToggleStream(this.artClick$),this.bqClicks$=this.toToggleStream(this.quoteClick$),this.speed$=this.speedChange$.pipe(M("target","value"),I(e=>+e),Q(3.5),O(e=>console.log("speed",e))),this.quote$=this.speed$.pipe(c(e=>this.q.RandomQuoteOnIntervalObs(e*1e3).pipe(S(Boolean)))),this.pauseQuote$=this.bqClicks$.pipe(c(e=>e?C:this.quote$)),this.pausedArt$=this.baClicks$.pipe(c(e=>e?C:this.art$)),this.countDown$=this.pausedArt$.pipe(c(()=>P([this.baClicks$,T(0,1e3)])),c(([e,p])=>e?C:f(p)),w((e,p)=>20-p,1)),setTimeout(()=>{console.log(this.artClick$)},100)}toToggleStream(a){return a.pipe(w(t=>!t,!1),Q(!1))}},g=h;(()=>{h.\u0275fac=function(t){return new(t||h)(B(N),B(L))}})(),(()=>{h.\u0275cmp=R({type:h,selectors:[["vm-home"]],viewQuery:function(t,e){if(t&1&&(k(W,5,v),k(z,5,v),k(G,5,v)),t&2){let p;$(p=b())&&(e.artClick$=p),$(p=b())&&(e.quoteClick$=p),$(p=b())&&(e.speedChange$=p)}},standalone:!0,features:[A],decls:31,vars:27,consts:[[1,"hold"],[1,"row"],[4,"ngIf"],[3,"art"],[3,"quote"],[3,"isPaused"],["ba",""],["bq",""],["type","range","min","0.5","max","30","step",".5",3,"value"],["speed",""]],template:function(t,e){t&1&&(r(0,"div",0)(1,"section")(2,"h1"),u(3,"Need some inspiration?"),l()(),r(4,"section")(5,"div",1),y(6,J,3,3,"small",2),n(7,"async"),y(8,K,2,0,"small",2),n(9,"async"),y(10,U,3,3,"small",2),n(11,"async"),y(12,X,2,0,"small",2),n(13,"async"),l(),r(14,"div",1),d(15,"painting",3),n(16,"async"),d(17,"quote",4),n(18,"async"),l(),r(19,"div",1),d(20,"play-button",5,6),n(22,"async"),d(23,"play-button",5,7),n(25,"async"),l(),r(26,"div",1),d(27,"span")(28,"input",8,9),n(30,"async"),l()()()),t&2&&(i(6),s("ngIf",!o(7,9,e.baClicks$)),i(2),s("ngIf",o(9,11,e.baClicks$)),i(2),s("ngIf",!o(11,13,e.bqClicks$)),i(2),s("ngIf",o(13,15,e.bqClicks$)),i(3),s("art",o(16,17,e.pausedArt$)),i(2),s("quote",o(18,19,e.pauseQuote$)),i(3),s("isPaused",o(22,21,e.baClicks$)),i(3),s("isPaused",o(25,23,e.bqClicks$)),i(5),s("value",o(30,25,e.speed$)))},dependencies:[D,F,H,j,V],styles:[`[_nghost-%COMP%] {
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
