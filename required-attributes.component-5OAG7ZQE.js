import{i as T}from"./chunk-JQ6I7NYP.js";import{A as u,Db as C,Fb as I,Gb as q,Hb as y,Ib as i,Jb as p,K as f,Kb as g,Ya as n,Z as h,ac as s,dc as P,g as d,kc as v,lb as m,lc as F,rb as c,yb as _}from"./chunk-AULJCTBB.js";import"./chunk-KAT7YFEL.js";function M(e,a){if(e&1&&(i(0,"li"),s(1),p()),e&2){let t=a.$implicit;n(),P("",t.propName," - ",t.value,"")}}function W(e,a){e&1&&(i(0,"ul"),q(1,M,2,2,"li",null,I),p()),e&2&&(n(),y(a))}function w(e,a){e&1&&(i(0,"h2"),s(1,"Loading ..."),p())}var b=(()=>{class e{constructor(){this.requiredProps=[],this.goodToGo$=new d}set _someVar(t){this.someVar=t}set prop1(t){t&&this.setIt("prop1",t)}set prop2(t){t&&this.setIt("prop2",t)}set prop3(t){t&&this.setIt("prop3",t)}setIt(t,o){this.requiredProps.push({propName:t,value:o}),this.requiredProps.length===3&&this.goodToGo$.next(this.requiredProps)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-wait-for-it"]],inputs:{_someVar:[0,"someVar","_someVar"],prop1:"prop1",prop2:"prop2",prop3:"prop3"},decls:3,vars:3,template:function(o,r){if(o&1&&(c(0,W,3,0,"ul"),v(1,"async"),c(2,w,2,0,"h2")),o&2){let l;C((l=F(1,1,r.goodToGo$))?0:2,l)}},dependencies:[T],encapsulation:2})}}return e})();var G=(()=>{class e{constructor(){this.reqProps=[],this.fillthem=u(1e3,1e3).pipe(f(4),h(t=>this.reqProps.push("prop 1"+Math.ceil(Math.random()*100)))).subscribe()}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-required-attributes"]],decls:3,vars:3,consts:[[3,"prop1","prop2","prop3"]],template:function(o,r){o&1&&(i(0,"h1"),s(1,"Host for actual components"),p(),g(2,"app-wait-for-it",0)),o&2&&(n(2),_("prop1",r.reqProps[0])("prop2",r.reqProps[1])("prop3",r.reqProps[2]))},dependencies:[b],encapsulation:2})}}return e})();export{G as RequiredAttributesComponent};