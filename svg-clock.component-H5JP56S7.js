import{i as F}from"./chunk-GOJFU6NU.js";import{Gb as a,Ob as _,Sb as S,Wa as s,Xb as P,Zb as T,_b as $,ha as x,lb as k,mb as m,q as v,rb as y,tb as d,ua as c,ub as p,vb as g,wb as l,xb as u,yb as C,z as h}from"./chunk-XM75YRED.js";import"./chunk-KAT7YFEL.js";function w(n,i){if(n&1&&(c(),C(0,"circle",1)),n&2){let t=i.$index,e=a(2);m("r",e.radiusFromPosition(t))}}function M(n,i){if(n&1&&(c(),C(0,"circle")),n&2){let t=i.$implicit,e=i.$index,o=a(),r=a();m("r",r.radiusFromPosition(e))("stroke",t)("stroke-dasharray",r.dashArray(o[e],e))}}function z(n,i){if(n&1&&(c(),l(0,"svg",0),p(1,w,1,1,":svg:circle",1,d),p(3,M,1,3,":svg:circle",null,d),l(5,"text",2),_(6),u()()),n&2){let t=i,e=a();s(),g(e.strokeColors),s(2),g(e.strokeColors),s(3),S("",e.zerod(t[0]),":",e.zerod(t[1]),":",e.zerod(t[2]),"")}}var A=Math.PI*2,f=n=>A*n,E=(()=>{class n{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)"],this.time$=h(0,500).pipe(v(t=>{let e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()]}))}radiusFromPosition(t){return 44-t*6}minuteToAngle(t,e){return t/60*f(e)}dashArray(t,e){let o=this.radiusFromPosition(e);return`${e===0?(b=>b%12/12*f(o))(t):this.minuteToAngle(t,o)} ${f(o)}`}zerod(t){return t<10?`0${t}`:t}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=x({type:n,selectors:[["app-svg-clock"]],standalone:!0,features:[P],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100"],["stroke","lightgray",2,"stroke-width","2"],["dominant-baseline","central","text-anchor","middle"]],template:function(e,o){if(e&1&&(l(0,"h1"),_(1,"SVG Clock sample"),u(),k(2,z,7,3,":svg:svg",0),T(3,"async")),e&2){let r;s(2),y((r=$(3,1,o.time$))?2:-1,r)}},dependencies:[F],styles:[`[_nghost-%COMP%] {
    display: block;
  }

  svg[_ngcontent-%COMP%] {
    

    transform: rotate(-0.25turn);
    max-height: 90vh;
  }

  circle[_ngcontent-%COMP%] {
    fill: none;
    stroke-width: 6;
  }

  text[_ngcontent-%COMP%] {
    transform: rotate(0.25turn);
    

    font-size: 0.5rem;
    font-weight: bold;
    fill: lightgray;
  }`]})}}return n})();export{E as SvgClockComponent};
