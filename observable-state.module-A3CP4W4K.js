import{a as k,b as se}from"./chunk-WXJXXYGD.js";import{e as ae}from"./chunk-SVNCLU5C.js";import"./chunk-XZCHICF6.js";import{b as Z,d as ee,i as te,n as ie,v as ne}from"./chunk-DZVNC4F7.js";import{a as oe,d as re}from"./chunk-E7FUOAHB.js";import{l as Y}from"./chunk-P3TXNOF4.js";import{l as K,m as C,n as w,p as Q,q as X}from"./chunk-I27LS666.js";import{$a as d,Gb as v,H as P,Hb as y,P as R,Rb as q,U as A,V as L,Va as s,W as V,Xa as H,Y as x,Za as J,ab as z,bb as p,ca as j,cb as r,db as n,eb as f,f as D,fb as G,gb as U,ib as W,ja as _,ka as B,mb as T,nb as S,p as N,qa as $,ra as E,sb as a,tb as h}from"./chunk-CXFJOMNY.js";import{a as F,b as O,h as l}from"./chunk-G5KKTNWD.js";function ce(o){function t(e){return l(this,null,function*(){let i=yield o.pipe(R()).toPromise();return e?Array.isArray(e)?e.reduce((c,M)=>O(F({},c),{[M]:i[M]}),{}):i[e]:i})}return t}function de(o,t){if(o&1){let e=W();r(0,"main")(1,"section",1)(2,"button",2),T("click",function(){$(e);let c=S();return E(c.down())}),a(3,"-"),n(),r(4,"h3"),a(5),n(),r(6,"button",2),T("click",function(){$(e);let c=S();return E(c.up())}),a(7,"+"),n(),f(8,"br"),n(),r(9,"h1"),a(10),n(),f(11,"br")(12,"br"),r(13,"p"),a(14,"The raw viewModel:"),n(),f(15,"hr"),r(16,"pre")(17,"code"),a(18),v(19,"json"),n()()()}if(o&2){let e=t.ngIf;s(2),p("disabled",e.underMin),s(3),h(e.count),s(1),p("disabled",e.overMax),s(4),h(e.msg),s(8),h(y(19,5,e))}}var u=class{constructor(){this.state$=new D({count:5,msg:"",overMax:!1,underMin:!1,max:10,min:2}),this.updateMessage=t=>{let e=t.overMax?"too high!":t.underMin?"too low!":"";this.setState("msg",e)},this.viewModel$=this.state$.pipe(P(5),x(t=>this.checkState()),x(this.updateMessage)),this.setState=se(this.state$),this.getState=ce(this.state$)}checkState(){return l(this,null,function*(){let{count:t,min:e,max:i,overMax:c,underMin:M}=yield this.getState();t>i!==c&&this.setState("overMax",t>i),t<e!==M&&this.setState("underMin",t<e)})}up(){return l(this,null,function*(){let t=yield this.getState("count");this.setState("count",t+1)})}down(){return l(this,null,function*(){let t=yield this.getState("count");this.setState("count",t-1),this.setState({min:3,max:5})})}ngOnInit(){}},b=u;(()=>{u.\u0275fac=function(e){return new(e||u)}})(),(()=>{u.\u0275cmp=_({type:u,selectors:[["app-observable-state"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"display"],[3,"disabled","click"]],template:function(e,i){e&1&&(r(0,"h1"),a(1,"Observable state"),n(),d(2,de,20,7,"main",0),v(3,"async")),e&2&&(s(2),p("ngIf",y(3,1,i.viewModel$)))},dependencies:[C,w,Q],styles:[`section[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 150px 150px 150px;
  }
  section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    text-align: center;
    font-size: 30px;
  }`],changeDetection:0})})();function fe(o,t){if(o&1&&(r(0,"li"),a(1),n()),o&2){let e=t.$implicit;s(1),h(e.name)}}function he(o,t){if(o&1&&(G(0),f(1,"input",2),r(2,"ul"),d(3,fe,2,1,"li",3),n(),U()),o&2){let e=t.ngIf,i=S();s(1),p("formControl",i.search),s(2),p("ngForOf",e.search===""?e.allShips:e.result)}}function ue(o,t){o&1&&(r(0,"div"),a(1,"Loading..."),n())}var g=class extends re(oe(class{})){constructor(t){super(),this.swapi=t,this.search=new te,this.searchText$=this.search.valueChanges.pipe(L("")),this.starships$=this.seOnInit$.pipe(V(()=>this.swapi.getAllRows("starships")),A({refCount:!0,bufferSize:1})),this.filteredShips$=k({ships:this.starships$,s:this.searchText$}).pipe(N(e=>e.ships.filter(i=>i.name.includes(e.s))),x(e=>console.log(e))),this.viewModel$=k({allShips:this.starships$,result:this.filteredShips$,search:this.searchText$})}},I=g;(()=>{g.\u0275fac=function(e){return new(e||g)(H(ae))}})(),(()=>{g.\u0275cmp=_({type:g,selectors:[["app-lifeycle-hooks-sample"]],features:[J],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["type","text",3,"formControl"],[4,"ngFor","ngForOf"]],template:function(e,i){if(e&1&&(d(0,he,4,2,"ng-container",0),v(1,"async"),d(2,ue,2,0,"ng-template",null,1,q)),e&2){let c=z(3);p("ngIf",y(1,2,i.viewModel$))("ngIfElse",c)}},dependencies:[K,C,Z,ee,ie,w],encapsulation:2})})();var ge=[{path:"",component:b},{path:"hook",component:I},{path:"**",redirectTo:""}],m=class{},me=m;(()=>{m.\u0275fac=function(e){return new(e||m)}})(),(()=>{m.\u0275mod=B({type:m})})(),(()=>{m.\u0275inj=j({imports:[X,Y.forChild(ge),ne]})})();export{me as ObservableStateModule,ge as routes};