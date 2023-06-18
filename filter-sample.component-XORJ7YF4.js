import{b as A,d as z,i as D,n as R,u as U,w as B}from"./chunk-ENWP5MNA.js";import{i as N,j as T,k as j}from"./chunk-4XL46QIM.js";import{$ as b,G as y,Ha as S,Hb as P,Jb as E,Kb as L,L as v,T as C,U as x,Ub as M,X as F,Xa as a,db as c,eb as $,fa as _,fb as s,gb as l,ha as I,hb as p,i as g,ib as d,o,p as h,qb as w,vb as u,xb as O}from"./chunk-ZWPQDWQV.js";import{a as f}from"./chunk-G5KKTNWD.js";var V=(()=>{let t=class{constructor(){this.userCards$=this.users(25)}users(i){return g(import("./esm-U43HWJIS.js")).pipe(o(n=>{let{faker:r}=n;return Array.from({length:i},()=>f({},G(r)))}),F(n=>console.dir(n)),C(1))}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})})(),e})();function G(e){return{name:e.person.fullName(),username:e.internet.userName(),email:e.internet.email(),avatar:e.image.avatar(),address:{street:e.location.street(),suite:e.location.secondaryAddress(),city:e.location.city(),zipcode:e.location.zipCode(),geo:{lat:e.location.latitude(),lng:e.location.longitude()}},phone:e.phone.number(),website:e.internet.domainName(),company:{name:e.company.name(),catchPhrase:e.company.catchPhrase(),bs:e.company.bs()}}}function H(e,t){if(e&1&&(l(0,"li"),d(1,"img",4),u(2),p()),e&2){let m=t.$implicit;a(1),s("src",m.avatar,S),a(1),O(" ",m.name," ")}}function J(e,t){if(e&1&&(l(0,"div"),d(1,"input",2),l(2,"ul"),c(3,H,3,2,"li",3),p()()),e&2){let m=t.ngIf,i=w();a(1),s("formControl",i.nameFilter),a(2),s("ngForOf",m.users)}}function K(e,t){e&1&&(l(0,"div",5)(1,"div")(2,"h2"),u(3,"Loading..."),p()()())}var ae=(()=>{let t=class{constructor(){this.us=_(V),this.nameFilter=new D(""),this.filter$=this.nameFilter.valueChanges.pipe(y(500),v(),x(""),o(i=>i.trim().toLocaleLowerCase())),this.users$=this.us.userCards$,this.vm$=h([this.users$,this.filter$]).pipe(o(([i,n])=>({users:i.filter(r=>n?r.name.toLocaleLowerCase().includes(n):!0)})))}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=I({type:t,selectors:[["app-filter-sample"]],standalone:!0,features:[P],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["type","text",3,"formControl"],[4,"ngFor","ngForOf"],["alt","",3,"src"],[1,"backDrop"]],template:function(n,r){if(n&1&&(c(0,J,4,2,"div",0),E(1,"async"),c(2,K,4,0,"ng-template",null,1,M)),n&2){let W=$(3);s("ngIf",L(1,2,r.vm$))("ngIfElse",W)}},dependencies:[T,U,A,z,B,R,N,j],styles:[`ul[_ngcontent-%COMP%] {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 5px;
    overflow: auto;
    max-height: 83dvh;
    padding-right: .5rem;
  }
  li[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    background-color: #444242;
    padding: 0;
    gap: .5rem;
    border-radius: .25rem;
  }

  li[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {
    width: 100%;
    aspect-ratio: 1;
    border-radius: .25rem .25rem 0 0;
    object-fit: cover;
  }`]})})(),e})();export{ae as FilterSampleComponent};
