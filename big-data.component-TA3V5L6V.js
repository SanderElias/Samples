import{a as Y}from"./chunk-NVSQVI33.js";import{i as N,j as A,k as j}from"./chunk-COT5DIUW.js";import{I as V,Ib as L,Kb as O,L as C,Lb as U,V as E,X as B,Xa as p,_a as I,eb as b,f as P,gb as x,ha as D,hb as r,ib as s,jb as T,nb as F,o as f,p as S,q as k,qa as u,qb as _,ra as d,rb as g,wb as o,xb as h,y,zb as M}from"./chunk-IWWGYS2Z.js";import{a as w,b as $}from"./chunk-G5KKTNWD.js";function q(l,a){if(l&1&&(r(0,"tr")(1,"td"),o(2),s(),r(3,"td"),o(4),s(),r(5,"td"),o(6),s()()),l&2){let n=a.$implicit;p(2),h(n.id),p(2),h(n.username),p(2),h(n.email)}}function G(l,a){if(l&1){let n=F();r(0,"section"),o(1),T(2,"br"),r(3,"label"),o(4,"Search "),r(5,"input",1),_("input",function(t){u(n);let e=g();return d(e.setProp("search",t))}),s()(),r(6,"div",2)(7,"button",3),_("click",function(t){u(n);let e=g();return d(e.setProp("sort",t))}),o(8,"none"),s(),r(9,"button",4),_("click",function(t){u(n);let e=g();return d(e.setProp("sort",t))}),o(10,"username"),s(),r(11,"button",5),_("click",function(t){u(n);let e=g();return d(e.setProp("sort",t))}),o(12,"email"),s(),r(13,"button",6),_("click",function(t){u(n);let e=g();return d(e.setProp("sort",t))}),o(14,"id"),s()(),r(15,"div",7)(16,"input",8),_("input",function(t){u(n);let e=g();return d(e.setProp("position",t))}),s(),r(17,"table")(18,"tbody"),b(19,q,7,3,"tr",9),s()()()()}if(l&2){let n=a.ngIf;p(1),M(" Available users:",n.users.length," (Loading done:",n.done,"%)"),p(15),x("max",n.users.length/n.state.pageSize),p(3),x("ngForOf",n.page)}}var W=(()=>{let a=class{constructor(i){this.user=i,this.state$=new P({pageSize:20,position:0,search:"",sort:""}),this.users$=this.state$.pipe(f(t=>t.sort),C(),E(t=>this.user.allUsers$.pipe(f(e=>t===""?e:e.sort((m,c)=>m[t]<c[t]?-1:1))))),this.doneLoadingPer$=y(100).pipe(V(1e3),B(()=>this.user.addUsers(500)),f(t=>Math.ceil(t/1e3*100))),this.curPage$=this.state$.pipe(C(),k(t=>this.users$.pipe(f(e=>this.findFirst(e,t))))),this.vm$=S({users:this.users$,state:this.state$,page:this.curPage$,done:this.doneLoadingPer$})}findFirst(i,{position:t,pageSize:e,search:m}){if(!m)return i.slice(t*e,t*e+e);let c=0,v=[];for(;c<i.length&&v.length<e;)i[c].username.toLowerCase().includes(m.toLowerCase())&&v.push(i[c]),c+=1;return v}setProp(i,t){let e=t.target,m=this.state$.value,c=typeof m[i]=="number";this.state$.next($(w({},m),{[i]:c?e.valueAsNumber:e.value}))}},l=a;return(()=>{a.\u0275fac=function(t){return new(t||a)(I(Y))}})(),(()=>{a.\u0275cmp=D({type:a,selectors:[["app-big-data"]],standalone:!0,features:[L],decls:4,vars:3,consts:[[4,"ngIf"],[3,"input"],["id","buttons"],["value","",3,"click"],["value","username",3,"click"],["value","email",3,"click"],["value","id",3,"click"],["id","scroll"],["type","range",3,"max","input"],[4,"ngFor","ngForOf"]],template:function(t,e){t&1&&(r(0,"h1"),o(1,"Big data and performance demo"),s(),b(2,G,20,4,"section",0),O(3,"async")),t&2&&(p(2),x("ngIf",U(3,1,e.vm$)))},dependencies:[j,A,N],styles:[`

      #scroll[_ngcontent-%COMP%] {
        display: grid;
        grid-template-columns: 40px 1fr;
      }
      #buttons[_ngcontent-%COMP%] {
        display: grid;
        grid-template-columns: repeat(auto-fit, 154px);
      }
      #scroll[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {
        transform: translateY(-100%) rotate(90deg); 

        transform-origin: left bottom;
        width: 20rem; 

        height: 40px; 

      }`]})})(),l})();export{W as BigDataComponent};
