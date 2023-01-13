import{a as H}from"./chunk-5EMPD2D5.js";import{l as _}from"./chunk-P3TXNOF4.js";import{l as U,n as V,q}from"./chunk-I27LS666.js";import{$a as G,C as c,D as I,Gb as w,H as N,Hb as O,Ka as $,M as T,Ra as B,S as L,U as j,Va as u,W as M,Xa as x,bb as g,ca as p,cb as f,db as h,eb as C,f as b,h as S,ib as J,j as A,ja as k,ka as m,mb as z,nb as P,p as l,qa as F,ra as R,rb as K,x as E}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";function Z(n,t){if(n&1){let i=J();f(0,"article",3),z("click",function(){let Q=F(i).index,X=P();return R(X.switch(Q))}),C(1,"img",4),h()}if(n&2){let i=t.$implicit,e=t.index,o=P();K("large",o.largePositions[e]===1)("super",o.largePositions[e]===2),u(1),g("src",i.images[0]==null?null:i.images[0].link,$)}}var D="e972ca06cc4b961",s=class{constructor(t,i){this.http=t,this.ref=i,this.largePositions=Array.from({length:250},()=>Math.random()<.2?1:0),this.searchKey$=new b("kitten"),this.results$=this.searchKey$.pipe(c(e=>!!e),M(e=>this.http.get(`https://api.imgur.com/3/gallery/t/${e}`,{headers:{Authorization:`Client-ID ${D}`}}).pipe(I(o=>S))),L("data","items"),c(e=>!!e),l(e=>e.filter(o=>[d.ImageJPEG,d.ImagePNG].includes(o.images&&o.images[0].type))),j(1))}setSearch(t){console.log(t)}switch(t){this.largePositions[t]+=1,this.largePositions[t]>2&&(this.largePositions[t]=0)}ngOnInit(){let t=this.ref.nativeElement;if(t){let i=t.getElementsByTagName("input")[0];A(import("./main-JFPFPTQM.js")).pipe(l(({wrapGrid:e})=>e(t.querySelector("#grid"))),M(()=>E(i,"input")),l(e=>e.target.value),N(400),T(),c(e=>e.length>0)).subscribe(this.searchKey$)}}},y=s;(()=>{s.\u0275fac=function(i){return new(i||s)(x(H),x(B))}})(),(()=>{s.\u0275cmp=k({type:s,selectors:[["app-tumblr"]],decls:6,vars:6,consts:[["type","search",3,"value"],["id","grid"],[3,"large","super","click",4,"ngFor","ngForOf"],[3,"click"],["loading","lazy",3,"src"]],template:function(i,e){i&1&&(f(0,"div"),C(1,"input",0),w(2,"async"),h(),f(3,"div",1),G(4,Z,2,5,"article",2),w(5,"async"),h()),i&2&&(u(1),g("value",O(2,2,e.searchKey$)),u(3),g("ngForOf",O(5,4,e.results$)))},dependencies:[U,V],styles:[`root[_ngcontent-%COMP%] {
    --image-nth: 3;
  }
  [_nghost-%COMP%] {
    display: block;
    height: 100%;
  }
  #grid[_ngcontent-%COMP%] {
    display: grid;
    height: 87vh;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    grid-auto-flow: dense;
    overflow-x: auto;
    gap: 4px;
  }

  .large[_ngcontent-%COMP%] {
    grid-column: span 2;
    grid-row: span 2;
  }
  .super[_ngcontent-%COMP%] {
    grid-column: span 4;
    grid-row: span 4;
  }

  img[_ngcontent-%COMP%] {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }`]})})();var d=(()=>(function(n){n.ImageGIF="image/gif",n.ImageJPEG="image/jpeg",n.ImagePNG="image/png",n.VideoMp4="video/mp4"}(d||(d={})),d))();var te=[{path:"",component:y}],r=class{},v=r;(()=>{r.\u0275fac=function(i){return new(i||r)}})(),(()=>{r.\u0275mod=m({type:r})})(),(()=>{r.\u0275inj=p({imports:[_.forChild(te),_]})})();var a=class{},W=a;(()=>{a.\u0275fac=function(i){return new(i||a)}})(),(()=>{a.\u0275mod=m({type:a})})(),(()=>{a.\u0275inj=p({imports:[q,v]})})();export{W as TumblrModule};
