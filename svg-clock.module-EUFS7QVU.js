import{l as _}from"./chunk-ELRT2GQ7.js";import{l as N,m as T,n as D,q as $}from"./chunk-WA577VHR.js";import{$a as f,Eb as O,Fb as b,Ta as c,Ya as x,Za as l,aa as m,ab as g,bb as y,cb as C,ha as w,ia as d,lb as a,o as P,qa as p,qb as M,ub as I,x as S}from"./chunk-MHRY5PTC.js";import"./chunk-G5KKTNWD.js";function G(n,e){if(n&1&&(p(),C(0,"circle",5)),n&2){let t=e.index,o=a(2);x("r",o.radiusFromPosition(t))}}function J(n,e){if(n&1&&(p(),C(0,"circle")),n&2){let t=e.$implicit,o=e.index,F=a().ngIf,h=a();x("r",h.radiusFromPosition(o))("stroke",t)("stroke-dasharray",h.dashArray(F[o],o))}}function V(n,e){if(n&1&&(p(),g(0,"svg",1),l(1,G,1,1,"circle",2),l(2,J,1,3,"circle",3),g(3,"text",4),M(4),y()()),n&2){let t=e.ngIf,o=a();c(1),f("ngForOf",o.strokeColors),c(1),f("ngForOf",o.strokeColors),c(2),I("",o.zerod(t[0]),":",o.zerod(t[1]),":",o.zerod(t[2]),"")}}var B=Math.PI*2,k=n=>B*n,s=class{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)"],this.time$=S(0,500).pipe(P(e=>{let t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()]}))}radiusFromPosition(e){return 44-e*6}minuteToAngle(e,t){return e/60*k(t)}dashArray(e,t){let o=this.radiusFromPosition(t);return`${t===0?(j=>j%12/12*k(o))(e):this.minuteToAngle(e,o)} ${k(o)}`}zerod(e){return e<10?`0${e}`:e}},u=s;(()=>{s.\u0275fac=function(t){return new(t||s)}})(),(()=>{s.\u0275cmp=w({type:s,selectors:[["app-svg-clock"]],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],["stroke","lightgray","style","stroke-width:2;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"],["stroke","lightgray",2,"stroke-width","2"]],template:function(t,o){t&1&&(g(0,"h1"),M(1,"SVG Clock sample"),y(),l(2,V,5,5,"svg",0),O(3,"async")),t&2&&(c(2),f("ngIf",b(3,1,o.time$)))},dependencies:[N,T,D],styles:[`[_nghost-%COMP%] {
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
  }`]})})();var E=[{path:"",component:u}],i=class{},v=i;(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275mod=d({type:i})})(),(()=>{i.\u0275inj=m({imports:[_.forChild(E),_]})})();var r=class{},A=r;(()=>{r.\u0275fac=function(t){return new(t||r)}})(),(()=>{r.\u0275mod=d({type:r})})(),(()=>{r.\u0275inj=m({imports:[$,v]})})();export{A as SvgClockModule};
