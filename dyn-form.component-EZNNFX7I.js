import{a as G}from"./chunk-OGPXMZS2.js";import{b as z,d as J,e as K,g as U,j as X,k as Y,y as Z}from"./chunk-QDTWEGOC.js";import{i as R,m as H}from"./chunk-GOJFU6NU.js";import{$ as x,C,Cb as T,Gb as u,Kb as V,Lb as I,Mb as L,Ob as p,Rb as A,Tb as N,Ub as E,V as w,Vb as W,W as b,Wa as l,Xb as B,Y as v,Zb as Q,_b as q,ea as F,fa as M,g as h,ha as $,lb as c,nb as k,p as y,q as r,r as _,rb as f,sa as D,ta as S,tb as j,ub as O,vb as P,wb as s,xb as d}from"./chunk-XM75YRED.js";import"./chunk-KAT7YFEL.js";var te=(()=>{class t{constructor(e){this.http=e,this.addresses$=this.http.get("assets/addresses.csv",{responseType:"text"}).pipe(r(n=>n.split("\r").map(i=>i.split(","))),r(([n,...i])=>i.map((o,m)=>o.reduce((g,ne,ie)=>(g[ee(n[ie])]=ee(ne),g),{id:m}))))}static{this.\u0275fac=function(n){return new(n||t)(F(G))}}static{this.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ee(t){return t?.replace(/^"(.*)"$/,"$1")}var re=["myForm"];function ae(t,a){t&1&&(s(0,"p"),p(1,"Do not change"),d())}function se(t,a){if(t&1){let e=T();s(0,"label"),p(1),s(2,"div")(3,"input",4),W("ngModelChange",function(i){let o=D(e).$implicit,m=u();return E(m.person[o.name],i)||(m.person[o.name]=i),S(i)}),d(),c(4,ae,2,0,"p"),d()()}if(t&2){let e=a.$implicit,n=u();l(),A(" ",e.name," ",e.type," "),l(2),k("name",e.name)("type",e.type),N("ngModel",n.person[e.name]),l(),f(e.name==="id"?4:-1)}}function me(t,a){t&1&&(s(0,"dialog")(1,"form",1,0),O(3,se,5,6,"label",null,j),s(5,"div",2)(6,"button",3),p(7,"Submit"),d()()()()),t&2&&(l(3),P(a.fields))}var le=t=>{let a=(t.constructor.name||"unknown").toLowerCase();return t==null?"hidden":a==="string"?"text":a},ve=(()=>{class t{constructor(){this.adr=M(te),this.person$=new h({}),this.fieldData$=this.person$.pipe(r(e=>Object.entries(e).map(([n,i])=>({name:n,value:i,type:le(i)}))),r(e=>e.filter(n=>n.type!=="Array"))),this.addresses$=this.adr.addresses$,this.vm$=_({person:this.person$,fields:this.fieldData$,addresses:this.addresses$}).pipe(r(({person:e,fields:n,addresses:i})=>({person:e,fields:n,addresses:i,names:Object.keys(i[0])})))}ngAfterViewInit(){this.formList.changes.pipe(w(void 0),r(()=>this.formList.first),C(e=>e!==void 0),b(e=>e.valueChanges),v(e=>console.log("form value changed",e))).subscribe(),this.adr.addresses$}async openWith(e){if(e){let n=document.querySelector("dialog"),o=(await y(this.addresses$)).find(m=>m.id===e);this.person$.next(o),n.showModal()}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=$({type:t,selectors:[["app-dyn-form"]],viewQuery:function(n,i){if(n&1&&V(re,5),n&2){let o;I(o=L())&&(i.formList=o)}},standalone:!0,features:[B],decls:4,vars:3,consts:[["myForm","ngForm"],["method","dialog"],[1,"labelRow"],["type","submit"],[3,"ngModelChange","name","type","ngModel"]],template:function(n,i){if(n&1&&(s(0,"h1"),p(1,"Dynamic form sample"),d(),c(2,me,8,0,"dialog"),Q(3,"async")),n&2){let o;l(2),f((o=q(3,1,i.vm$))?2:-1,o)}},dependencies:[H,R,Z,Y,z,J,K,X,U],styles:[`dialog[_ngcontent-%COMP%]::backdrop {
    background: rgba(30, 20, 35, 0.45);
  }

  .tableHolder[_ngcontent-%COMP%] {
    height: 80vh;
    overflow: auto;
    width: 100rem;
    border-collapse: collapse;
  }

  tr[_ngcontent-%COMP%]:nth-child(even) {
    background-color: rgb(42, 41, 41);
  }

  form[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
  }
  label[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 7rem 1fr;
    align-items: center;
    gap: 0.4rem;
  }
  input[_ngcontent-%COMP%] {
    margin-bottom: 5px;
    width: 20rem;
  }`]})}}return t})();export{ve as DynFormComponent};
