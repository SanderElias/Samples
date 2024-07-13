import{b as O,d as E,i as U,n as B,x as R,z as V}from"./chunk-QDTWEGOC.js";import{i as D}from"./chunk-GOJFU6NU.js";import{$ as b,D as v,Gb as N,H as y,M as x,Ob as d,Qb as T,Ta as $,U as F,V as _,Wa as r,Xb as j,Zb as z,_b as A,fa as S,ha as M,k as h,l as C,lb as m,nb as c,q as o,r as g,rb as w,tb as P,ub as I,vb as L,wb as a,xb as l,yb as p}from"./chunk-XM75YRED.js";import{a as f}from"./chunk-KAT7YFEL.js";var W=(()=>{class e{constructor(){this.fakerModule=import("./esm-IECKAQ7R.js"),this.userCards$=this.users(25)}users(t){return h(this.fakerModule).pipe(o(n=>{let{faker:i}=n;return Array.from({length:t},()=>f({},G(i)))}),F(1),v(n=>C([])))}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function G(e){return{name:e.person.fullName(),username:e.internet.userName(),email:e.internet.email(),avatar:e.image.avatar(),address:{street:e.location.street(),suite:e.location.secondaryAddress(),city:e.location.city(),zipcode:e.location.zipCode(),geo:{lat:e.location.latitude(),lng:e.location.longitude()}},phone:e.phone.number(),website:e.internet.domainName(),company:{name:e.company.name(),catchPhrase:e.company.catchPhrase(),bs:e.company.buzzPhrase()}}}function H(e,s){if(e&1&&(a(0,"li"),p(1,"img",2),d(2),l()),e&2){let t=s.$implicit;r(),c("src",t.avatar,$),r(),T(" ",t.name," ")}}function J(e,s){if(e&1&&(a(0,"div"),p(1,"input",1),a(2,"ul"),I(3,H,3,2,"li",null,P),l()()),e&2){let t=N();r(),c("formControl",t.nameFilter),r(2),L(s.users)}}function K(e,s){e&1&&(a(0,"div",0)(1,"div")(2,"h2"),d(3,"Loading..."),l()()())}var me=(()=>{class e{constructor(){this.us=S(W),this.nameFilter=new U(""),this.filter$=this.nameFilter.valueChanges.pipe(y(500),x(),_(""),o(t=>t.trim().toLocaleLowerCase())),this.users$=this.us.userCards$,this.vm$=g([this.users$,this.filter$]).pipe(o(([t,n])=>({users:t.filter(i=>n?i.name.toLocaleLowerCase().includes(n):!0)})))}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=M({type:e,selectors:[["app-filter-sample"]],standalone:!0,features:[j],decls:3,vars:3,consts:[[1,"backDrop"],["type","text",3,"formControl"],["alt","",3,"src"]],template:function(n,i){if(n&1&&(m(0,J,5,1,"div"),z(1,"async"),m(2,K,4,0,"div",0)),n&2){let u;w((u=A(1,1,i.vm$))?0:2,u)}},dependencies:[R,O,E,V,B,D],styles:[`ul[_ngcontent-%COMP%] {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 5px;
    overflow: auto;
    max-height: 83dvh;
    padding-right: 0.5rem;
  }
  li[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    background-color: #444242;
    padding: 0;
    gap: 0.5rem;
    border-radius: 0.25rem;
  }

  li[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 0.25rem 0.25rem 0 0;
    object-fit: cover;
  }`]})}}return e})();export{me as FilterSampleComponent};
