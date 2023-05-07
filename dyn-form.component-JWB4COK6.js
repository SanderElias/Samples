import{a as G}from"./chunk-RPS3TBGS.js";import{b as z,d as J,e as K,g as U,j as X,k as Y,v as Z}from"./chunk-H5OL5AAF.js";import{i as R,j as B,k as H,n as W}from"./chunk-GR2PXCGU.js";import{$ as F,B as b,Eb as T,Gb as E,Hb as L,Nb as A,Ob as Q,Qb as q,U as w,V as x,W as M,Wa as p,Ya as O,ab as u,cb as c,db as l,ea as $,eb as d,f as _,gb as k,ha as D,hb as j,jb as N,mb as V,n as C,nb as g,o as s,p as v,pa as I,qa as S,sb as f,vb as P}from"./chunk-X5MK5QQ4.js";import{h as y}from"./chunk-G5KKTNWD.js";var te=(()=>{let e=class{constructor(i){this.http=i,this.addresses$=this.http.get("assets/addresses.csv",{responseType:"text"}).pipe(s(t=>t.split("\r").map(o=>o.split(","))),s(([t,...o])=>o.map(r=>r.reduce((m,ne,h)=>(m.id=h*133,m[ee(t[h])]=ee(ne),m),{}))))}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)($(G))}})(),(()=>{e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})})(),n})();function ee(n){return n?.replace(/^"(.*)"$/,"$1")}var re=["myForm"];function ae(n,e){n&1&&(l(0,"p"),f(1,"Do not change"),d())}function se(n,e){if(n&1){let a=N();l(0,"label"),f(1),l(2,"div")(3,"input",6),V("ngModelChange",function(t){let r=I(a).$implicit,m=g().ngIf;return S(m.person[r.name]=t)}),d(),u(4,ae,2,0,"p",0),d()()}if(n&2){let a=e.$implicit,i=g().ngIf;p(1),P(" ",a.name," ",a.type," "),p(2),c("name",a.name)("type",a.type)("ngModel",i.person[a.name]),p(1),c("ngIf",a.name==="id")}}function me(n,e){if(n&1&&(k(0),l(1,"dialog")(2,"form",1,2),u(4,se,5,6,"label",3),l(5,"div",4)(6,"button",5),f(7,"Submit"),d()()()(),j()),n&2){let a=e.ngIf;p(4),c("ngForOf",a.fields)}}var le=n=>{let e=(n.constructor.name||"unknown").toLowerCase();return console.log(e),n==null?"hidden":e==="string"?"text":e},ye=(()=>{let e=class{constructor(i){this.adr=i,this.person$=new _({}),this.fieldData$=this.person$.pipe(s(t=>Object.entries(t).map(([o,r])=>({name:o,value:r,type:le(r)}))),s(t=>t.filter(o=>o.type!=="Array"))),this.addresses$=this.adr.addresses$,this.vm$=v({person:this.person$,fields:this.fieldData$,addresses:this.addresses$}).pipe(s(({person:t,fields:o,addresses:r})=>({person:t,fields:o,addresses:r,names:Object.keys(r[0])})))}ngAfterViewInit(){this.formList.changes.pipe(w(void 0),s(()=>this.formList.first),b(i=>i!==void 0),x(i=>i.valueChanges),M(i=>console.log("form value changed",i))).subscribe(),this.adr.addresses$}openWith(i){return y(this,null,function*(){if(i){let t=document.querySelector("dialog"),r=(yield C(this.addresses$)).find(m=>m.id===i);this.person$.next(r),t.showModal()}})}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)(O(te))}})(),(()=>{e.\u0275cmp=D({type:e,selectors:[["app-dyn-form"]],viewQuery:function(t,o){if(t&1&&Q(re,5),t&2){let r;A(r=q())&&(o.formList=r)}},standalone:!0,features:[T],decls:4,vars:3,consts:[[4,"ngIf"],["method","dialog"],["myForm","ngForm"],[4,"ngFor","ngForOf"],[1,"labelRow"],["type","submit"],[3,"name","type","ngModel","ngModelChange"]],template:function(t,o){t&1&&(l(0,"h1"),f(1,"Dynamic form sample"),d(),u(2,me,8,1,"ng-container",0),E(3,"async")),t&2&&(p(2),c("ngIf",L(3,1,o.vm$)))},dependencies:[W,R,B,H,Z,Y,z,J,K,X,U],styles:[`dialog[_ngcontent-%COMP%]::backdrop {
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
    gap:.4rem;
  }
  input[_ngcontent-%COMP%] {
    margin-bottom: 5px;
    width: 20rem;
  }`]})})(),n})();export{ye as DynFormComponent};
