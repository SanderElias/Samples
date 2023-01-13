import{a as te}from"./chunk-5EMPD2D5.js";import{b as J,d as K,e as U,g as X,j as Y,k as Z,u as ee}from"./chunk-DZVNC4F7.js";import{l as H,m as W,n as G,q as z}from"./chunk-I27LS666.js";import{$a as u,C as x,Eb as L,Gb as A,Hb as Q,Nb as q,Ob as R,Qb as B,V as M,Va as l,W as $,Xa as j,Y as F,ba as D,bb as c,cb as a,db as p,f as b,fb as N,ga as I,gb as V,ib as P,ja as S,mb as T,nb as _,o as v,p as r,q as w,qa as O,ra as k,sb as f,vb as E}from"./chunk-CXFJOMNY.js";import{h as C}from"./chunk-G5KKTNWD.js";var s=class{constructor(t){this.http=t,this.addresses$=this.http.get("assets/addresses.csv",{responseType:"text"}).pipe(r(e=>e.split("\r").map(n=>n.split(","))),r(([e,...n])=>n.map(i=>i.reduce((m,y,g)=>(m.id=g*133,m[ne(e[g])]=ne(y),m),{}))))}},h=s;(()=>{s.\u0275fac=function(e){return new(e||s)(I(te))}})(),(()=>{s.\u0275prov=D({token:s,factory:s.\u0275fac,providedIn:"root"})})();function ne(o){return o?.replace(/^"(.*)"$/,"$1")}var ae=["myForm"];function se(o,t){o&1&&(a(0,"p"),f(1,"Do not change"),p())}function me(o,t){if(o&1){let e=P();a(0,"label"),f(1),a(2,"div")(3,"input",6),T("ngModelChange",function(i){let y=O(e).$implicit,g=_().ngIf;return k(g.person[y.name]=i)}),p(),u(4,se,2,0,"p",0),p()()}if(o&2){let e=t.$implicit,n=_().ngIf;l(1),E(" ",e.name," ",e.type," "),l(2),c("name",e.name)("type",e.type)("ngModel",n.person[e.name]),l(1),c("ngIf",e.name==="id")}}function le(o,t){if(o&1&&(N(0),a(1,"dialog")(2,"form",1,2),u(4,me,5,6,"label",3),a(5,"div",4)(6,"button",5),f(7,"Submit"),p()()()(),V()),o&2){let e=t.ngIf;l(4),c("ngForOf",e.fields)}}var _e={id:"1",type:"contact",name:"Luke Skywalker",number:12,dateAdded:new Date,phone:"+1 (555) 555-5555",email:"luke@rd2.org",tags:["starwars","jedi"]},pe=o=>{let t=(o.constructor.name||"unknown").toLowerCase();return console.log(t),o==null?"hidden":t==="string"?"text":t},d=class{constructor(t){this.adr=t,this.person$=new b({}),this.fieldData$=this.person$.pipe(r(e=>Object.entries(e).map(([n,i])=>({name:n,value:i,type:pe(i)}))),r(e=>e.filter(n=>n.type!=="Array"))),this.addresses$=this.adr.addresses$,this.vm$=w({person:this.person$,fields:this.fieldData$,addresses:this.addresses$}).pipe(r(({person:e,fields:n,addresses:i})=>({person:e,fields:n,addresses:i,names:Object.keys(i[0])})))}ngAfterViewInit(){this.formList.changes.pipe(M(void 0),r(()=>this.formList.first),x(t=>t!==void 0),$(t=>t.valueChanges),F(t=>console.log("form value changed",t))).subscribe(),this.adr.addresses$}openWith(t){return C(this,null,function*(){if(t){let e=document.querySelector("dialog"),i=(yield v(this.addresses$)).find(m=>m.id===t);this.person$.next(i),e.showModal()}})}},ie=d;(()=>{d.\u0275fac=function(e){return new(e||d)(j(h))}})(),(()=>{d.\u0275cmp=S({type:d,selectors:[["app-dyn-form"]],viewQuery:function(e,n){if(e&1&&R(ae,5),e&2){let i;q(i=B())&&(n.formList=i)}},standalone:!0,features:[L],decls:4,vars:3,consts:[[4,"ngIf"],["method","dialog"],["myForm","ngForm"],[4,"ngFor","ngForOf"],[1,"labelRow"],["type","submit"],[3,"name","type","ngModel","ngModelChange"]],template:function(e,n){e&1&&(a(0,"h1"),f(1,"Dynamic form sample"),p(),u(2,le,8,1,"ng-container",0),A(3,"async")),e&2&&(l(2),c("ngIf",Q(3,1,n.vm$)))},dependencies:[z,H,W,G,ee,Z,J,K,U,Y,X],styles:[`dialog[_ngcontent-%COMP%]::backdrop {
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
  }`]})})();export{ie as DynFormComponent};
