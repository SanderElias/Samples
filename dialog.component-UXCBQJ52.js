import{m as c}from"./chunk-KJKGJ6N4.js";import{Ca as u,Ib as n,Ja as g,Jb as o,Rb as d,Tb as C,Ub as w,Ya as m,ac as r,bc as v,db as p,ga as l,lb as a,sa as f,xc as D,yb as h}from"./chunk-7PPZN5LC.js";import"./chunk-KAT7YFEL.js";function _(e){let E=l(f);g(()=>D(e,{injector:E}))}var x=["*"],y=(()=>{class e{constructor(){this.elm=l(u).nativeElement,_(()=>{let i=this.elm.firstElementChild;this.shown()?i.showModal():i.close()})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["se-dialog"]],inputs:{shown:"shown"},ngContentSelectors:x,decls:2,vars:0,template:function(t,s){t&1&&(C(),n(0,"dialog"),w(1),o())},dependencies:[c],styles:["[_ngcontent-%COMP%]::backdrop{background-image:linear-gradient(45deg,#f0f,#639,#1e90ff,green);opacity:.75}"]})}}return e})();var W=(()=>{class e{constructor(){this.shown=p(!1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:9,vars:2,consts:[[3,"click"],[3,"shown"],["autofocus","",3,"click"]],template:function(t,s){t&1&&(n(0,"H1"),r(1,"Dialog doesn't need a service"),o(),n(2,"button",0),d("click",function(){return s.shown.set(!s.shown())}),r(3),o(),n(4,"se-dialog",1)(5,"p"),r(6,"This modal dialog has a groovy backdrop!"),o(),n(7,"button",2),d("click",function(){return s.shown.set(!1)}),r(8,"Close"),o()()),t&2&&(m(3),v(s.shown()?"hide":"show"),m(),h("shown",s.shown))},dependencies:[c,y],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();export{W as default};