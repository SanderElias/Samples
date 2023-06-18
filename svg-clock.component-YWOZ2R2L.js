import{i as P,j as S,k as w}from"./chunk-COT5DIUW.js";import{Ab as C,Ib as k,Kb as y,Lb as F,Xa as s,db as p,eb as l,gb as m,ha as x,hb as g,ib as d,jb as _,o as h,rb as c,sa as a,wb as f,x as v}from"./chunk-IWWGYS2Z.js";import"./chunk-G5KKTNWD.js";function b(n,o){if(n&1&&(a(),_(0,"circle",5)),n&2){let i=o.index,t=c(2);p("r",t.radiusFromPosition(i))}}function T(n,o){if(n&1&&(a(),_(0,"circle")),n&2){let i=o.$implicit,t=o.index,e=c().ngIf,r=c();p("r",r.radiusFromPosition(t))("stroke",i)("stroke-dasharray",r.dashArray(e[t],t))}}function I(n,o){if(n&1&&(a(),g(0,"svg",1),l(1,b,1,1,"circle",2),l(2,T,1,3,"circle",3),g(3,"text",4),f(4),d()()),n&2){let i=o.ngIf,t=c();s(1),m("ngForOf",t.strokeColors),s(1),m("ngForOf",t.strokeColors),s(2),C("",t.zerod(i[0]),":",t.zerod(i[1]),":",t.zerod(i[2]),"")}}var M=Math.PI*2,u=n=>M*n,B=(()=>{let o=class{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)"],this.time$=v(0,500).pipe(h(t=>{let e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()]}))}radiusFromPosition(t){return 44-t*6}minuteToAngle(t,e){return t/60*u(e)}dashArray(t,e){let r=this.radiusFromPosition(e);return`${e===0?(O=>O%12/12*u(r))(t):this.minuteToAngle(t,r)} ${u(r)}`}zerod(t){return t<10?`0${t}`:t}},n=o;return(()=>{o.\u0275fac=function(e){return new(e||o)}})(),(()=>{o.\u0275cmp=x({type:o,selectors:[["app-svg-clock"]],standalone:!0,features:[k],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],["stroke","lightgray","style","stroke-width:2;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"],["stroke","lightgray",2,"stroke-width","2"]],template:function(e,r){e&1&&(g(0,"h1"),f(1,"SVG Clock sample"),d(),l(2,I,5,5,"svg",0),y(3,"async")),e&2&&(s(2),m("ngIf",F(3,1,r.time$)))},dependencies:[S,P,w],styles:[`[_nghost-%COMP%] {
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
    

    font-size: .5rem;
    font-weight: bold;
    fill: lightgray;
  }`]})})(),n})();export{B as SvgClockComponent};
