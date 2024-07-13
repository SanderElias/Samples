import{i as O}from"./chunk-GOJFU6NU.js";import{Gb as s,J as g,Ob as p,Pb as S,Wa as a,Xb as M,Zb as T,_b as k,ha as u,lb as h,mb as _,q as d,rb as v,tb as C,ua as m,ub as x,vb as P,wb as c,xb as l,yb as y,z as f}from"./chunk-XM75YRED.js";import"./chunk-KAT7YFEL.js";function F(e,o){if(e&1&&(m(),y(0,"circle")),e&2){let t=o.$implicit,n=o.$index,r=s(),i=s();_("r",i.radiusFromPosition(n))("stroke",t)("stroke-dasharray",i.dashArray(r,i.radiusFromPosition(n)))}}function $(e,o){if(e&1&&(m(),c(0,"svg",0),x(1,F,1,3,":svg:circle",null,C),c(3,"text",1),p(4),l()()),e&2){let t=s();a(),P(t.strokeColors),a(3),S(60-o)}}var w=Math.PI*2,b=e=>w*e,E=(()=>{class e{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)","#3dd656"],this.timer$=f(0,250).pipe(g(60),d(t=>t+1))}radiusFromPosition(t){return 44-t*6}minuteToAngle(t,n){return t/60*b(n)}dashArray(t,n){return`${this.minuteToAngle(t,n)} ${b(n)}`}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=u({type:e,selectors:[["app-svg-timer"]],standalone:!0,features:[M],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100"],["dominant-baseline","central","text-anchor","middle"]],template:function(n,r){if(n&1&&(c(0,"h1"),p(1,"SVG timer sample"),l(),h(2,$,5,1,":svg:svg",0),T(3,"async")),n&2){let i;a(2),v((i=k(3,1,r.timer$))?2:-1,i)}},dependencies:[O],styles:[`[_nghost-%COMP%] {
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
  }`]})}}return e})();export{E as SvgTimerComponent};
