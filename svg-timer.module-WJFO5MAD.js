import{l as C}from"./chunk-P3TXNOF4.js";import{l as b,m as k,n as T,q as D}from"./chunk-I27LS666.js";import{$a as h,Gb as w,Hb as N,J as P,Va as a,_a as O,bb as v,ca as c,cb as p,db as M,eb as S,ja as F,ka as m,nb as d,p as y,sa as u,sb as x,tb as I,y as _}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";function B(o,e){if(o&1&&(u(),S(0,"circle")),o&2){let t=e.$implicit,n=e.index,J=d().ngIf,g=d();O("r",g.radiusFromPosition(n))("stroke",t)("stroke-dasharray",g.dashArray(J,g.radiusFromPosition(n)))}}function G(o,e){if(o&1&&(u(),p(0,"svg",1),h(1,B,1,3,"circle",2),p(2,"text",3),x(3),M()()),o&2){let t=e.ngIf,n=d();a(1),v("ngForOf",n.strokeColors),a(2),I(60-t)}}var R=Math.PI*2,A=o=>R*o,s=class{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)","#3dd656"],this.timer$=_(0,250).pipe(P(60),y(e=>e+1))}radiusFromPosition(e){return 44-e*6}minuteToAngle(e,t){return e/60*A(t)}dashArray(e,t){return`${this.minuteToAngle(e,t)} ${A(t)}`}},f=s;(()=>{s.\u0275fac=function(t){return new(t||s)}})(),(()=>{s.\u0275cmp=F({type:s,selectors:[["app-svg-timer"]],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"]],template:function(t,n){t&1&&(p(0,"h1"),x(1,"SVG timer sample"),M(),h(2,G,4,2,"svg",0),w(3,"async")),t&2&&(a(2),v("ngIf",N(3,1,n.timer$)))},dependencies:[b,k,T],styles:[`[_nghost-%COMP%] {
    display: block;
  }

  svg[_ngcontent-%COMP%] {
    
    transform: rotate(-0.25turn);
    max-height: 90vh;
    ;
  }

  circle[_ngcontent-%COMP%] {
    fill: none;
    stroke-width: 6;
  }

  text[_ngcontent-%COMP%] {
    transform: rotate(0.25turn);
    
    font-size: 2em;
    font-weight: bold;
    fill: #fff;
  }

  
  circle[_ngcontent-%COMP%]:nth-child(2) {
    transform: scaleY(-1);
  }

  circle[_ngcontent-%COMP%]:nth-child(3) {
    transform: scaleX(-1);
  }

  circle[_ngcontent-%COMP%]:nth-child(4) {
    transform: rotate(-0.25turn);
  }`]})})();var E=[{path:"",component:f}],i=class{},l=i;(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275mod=m({type:i})})(),(()=>{i.\u0275inj=c({imports:[C.forChild(E),C]})})();var r=class{},j=r;(()=>{r.\u0275fac=function(t){return new(t||r)}})(),(()=>{r.\u0275mod=m({type:r})})(),(()=>{r.\u0275inj=c({imports:[D,l]})})();export{j as SvgTimerModule};
