import{i as P,j as S,k as w}from"./chunk-GR2PXCGU.js";import{$a as p,Eb as y,Gb as k,Hb as F,Wa as s,ab as l,cb as m,db as g,eb as d,fb as f,ha as x,nb as c,o as v,ra as a,sb as u,wb as C,x as h}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";function b(n,o){if(n&1&&(a(),f(0,"circle",5)),n&2){let i=o.index,e=c(2);p("r",e.radiusFromPosition(i))}}function M(n,o){if(n&1&&(a(),f(0,"circle")),n&2){let i=o.$implicit,e=o.index,t=c().ngIf,r=c();p("r",r.radiusFromPosition(e))("stroke",i)("stroke-dasharray",r.dashArray(t[e],e))}}function T(n,o){if(n&1&&(a(),g(0,"svg",1),l(1,b,1,1,"circle",2),l(2,M,1,3,"circle",3),g(3,"text",4),u(4),d()()),n&2){let i=o.ngIf,e=c();s(1),m("ngForOf",e.strokeColors),s(1),m("ngForOf",e.strokeColors),s(2),C("",e.zerod(i[0]),":",e.zerod(i[1]),":",e.zerod(i[2]),"")}}var I=Math.PI*2,_=n=>I*n,B=(()=>{let o=class{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)"],this.time$=h(0,500).pipe(v(e=>{let t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()]}))}radiusFromPosition(e){return 44-e*6}minuteToAngle(e,t){return e/60*_(t)}dashArray(e,t){let r=this.radiusFromPosition(t);return`${t===0?(O=>O%12/12*_(r))(e):this.minuteToAngle(e,r)} ${_(r)}`}zerod(e){return e<10?`0${e}`:e}},n=o;return(()=>{o.\u0275fac=function(t){return new(t||o)}})(),(()=>{o.\u0275cmp=x({type:o,selectors:[["app-svg-clock"]],standalone:!0,features:[y],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],["stroke","lightgray","style","stroke-width:2;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"],["stroke","lightgray",2,"stroke-width","2"]],template:function(t,r){t&1&&(g(0,"h1"),u(1,"SVG Clock sample"),d(),l(2,T,5,5,"svg",0),k(3,"async")),t&2&&(s(2),m("ngIf",F(3,1,r.time$)))},dependencies:[S,P,w],styles:[`[_nghost-%COMP%] {
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
