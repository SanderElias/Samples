import{i as F,j as S,k as M}from"./chunk-COT5DIUW.js";import{I as h,Ib as P,Kb as y,Lb as O,Xa as o,db as v,eb as l,gb as p,ha as u,hb as s,ib as f,jb as x,o as d,rb as c,sa as m,wb as g,x as _,xb as C}from"./chunk-IWWGYS2Z.js";import"./chunk-G5KKTNWD.js";function k(n,e){if(n&1&&(m(),x(0,"circle")),n&2){let a=e.$implicit,t=e.index,i=c().ngIf,r=c();v("r",r.radiusFromPosition(t))("stroke",a)("stroke-dasharray",r.dashArray(i,r.radiusFromPosition(t)))}}function I(n,e){if(n&1&&(m(),s(0,"svg",1),l(1,k,1,3,"circle",2),s(2,"text",3),g(3),f()()),n&2){let a=e.ngIf,t=c();o(1),p("ngForOf",t.strokeColors),o(2),C(60-a)}}var T=Math.PI*2,b=n=>T*n,G=(()=>{let e=class{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)","#3dd656"],this.timer$=_(0,250).pipe(h(60),d(t=>t+1))}radiusFromPosition(t){return 44-t*6}minuteToAngle(t,i){return t/60*b(i)}dashArray(t,i){return`${this.minuteToAngle(t,i)} ${b(i)}`}},n=e;return(()=>{e.\u0275fac=function(i){return new(i||e)}})(),(()=>{e.\u0275cmp=u({type:e,selectors:[["app-svg-timer"]],standalone:!0,features:[P],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"]],template:function(i,r){i&1&&(s(0,"h1"),g(1,"SVG timer sample"),f(),l(2,I,4,2,"svg",0),y(3,"async")),i&2&&(o(2),p("ngIf",O(3,1,r.timer$)))},dependencies:[S,F,M],styles:[`[_nghost-%COMP%] {
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
  }`]})})(),n})();export{G as SvgTimerComponent};
