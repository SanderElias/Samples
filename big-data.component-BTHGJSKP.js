import{a as q}from"./chunk-OPAWIDLX.js";import{i as Y}from"./chunk-GOJFU6NU.js";import{A as P,Cb as U,Fb as d,Gb as u,J as S,M as h,Ob as a,Pb as g,Rb as N,W as k,Wa as c,Xa as D,Xb as O,Y as y,Zb as A,_b as j,g as b,ha as B,lb as V,nb as E,q as _,r as w,rb as T,s as $,sa as p,ta as m,tb as M,ub as I,vb as F,wb as r,xb as o,yb as L}from"./chunk-XM75YRED.js";import{a as C,b as v}from"./chunk-KAT7YFEL.js";function G(s,x){if(s&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),a(6),o()()),s&2){let t=x.$implicit;c(2),g(t.id),c(2),g(t.username),c(2),g(t.email)}}function H(s,x){if(s&1){let t=U();r(0,"section"),a(1),L(2,"br"),r(3,"label"),a(4,"Search "),r(5,"input",0),d("input",function(e){p(t);let n=u();return m(n.setProp("search",e))}),o()(),r(6,"div",1)(7,"button",2),d("click",function(e){p(t);let n=u();return m(n.setProp("sort",e))}),a(8,"none"),o(),r(9,"button",3),d("click",function(e){p(t);let n=u();return m(n.setProp("sort",e))}),a(10,"username"),o(),r(11,"button",4),d("click",function(e){p(t);let n=u();return m(n.setProp("sort",e))}),a(12,"email"),o(),r(13,"button",5),d("click",function(e){p(t);let n=u();return m(n.setProp("sort",e))}),a(14,"id"),o()(),r(15,"div",6)(16,"input",7),d("input",function(e){p(t);let n=u();return m(n.setProp("position",e))}),o(),r(17,"table")(18,"tbody"),I(19,G,7,3,"tr",null,M),o()()()()}if(s&2){let t=x;c(),N(" Available users:",t.users.length," (Loading done:",t.done,"%)"),c(15),E("max",t.users.length/t.state.pageSize),c(3),F(t.page)}}var z=(()=>{class s{constructor(t){this.user=t,this.state$=new b({pageSize:20,position:0,search:"",sort:""}),this.users$=this.state$.pipe(_(i=>i.sort),h(),k(i=>this.user.allUsers$.pipe(_(e=>i===""?e:e.sort((n,l)=>n[i]<l[i]?-1:1))))),this.doneLoadingPer$=P(100).pipe(S(1e3),y(()=>this.user.addUsers(500)),_(i=>Math.ceil(i/1e3*100))),this.curPage$=this.state$.pipe(h(),$(i=>this.users$.pipe(_(e=>this.findFirst(e,i))))),this.vm$=w({users:this.users$,state:this.state$,page:this.curPage$,done:this.doneLoadingPer$})}findFirst(t,{position:i,pageSize:e,search:n}){if(!n)return t.slice(i*e,i*e+e);let l=0,f=[];for(;l<t.length&&f.length<e;)t[l].username.toLowerCase().includes(n.toLowerCase())&&f.push(t[l]),l+=1;return f}setProp(t,i){let e=i.target,n=this.state$.value,l=typeof n[t]=="number";this.state$.next(v(C({},n),{[t]:l?e.valueAsNumber:e.value}))}static{this.\u0275fac=function(i){return new(i||s)(D(q))}}static{this.\u0275cmp=B({type:s,selectors:[["app-big-data"]],standalone:!0,features:[O],decls:4,vars:3,consts:[[3,"input"],["id","buttons"],["value","",3,"click"],["value","username",3,"click"],["value","email",3,"click"],["value","id",3,"click"],["id","scroll"],["type","range",3,"input","max"]],template:function(i,e){if(i&1&&(r(0,"h1"),a(1,"Big data and performance demo"),o(),V(2,H,21,3,"section"),A(3,"async")),i&2){let n;c(2),T((n=j(3,1,e.vm$))?2:-1,n)}},dependencies:[Y],styles:[`

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

      }`]})}}return s})();export{z as BigDataComponent};
