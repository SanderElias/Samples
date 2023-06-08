import{d as V}from"./chunk-KE477OW5.js";import{a as A}from"./chunk-LIWNICRR.js";import"./chunk-3CI5XCVV.js";import"./chunk-EX27PMDL.js";import{b as k,c as x}from"./chunk-JK5LZKDD.js";import{i as D,j,k as L}from"./chunk-7UTYY7SV.js";import{G as C,Gb as T,Ib as F,Jb as P,L as S,R as u,W as $,Wa as l,Za as h,cb as f,eb as g,f as _,fb as t,ga as v,gb as n,ib as b,jb as w,lb as I,o as p,ob as y,pa as E,pb as M,qa as U,ub as s,vb as d,yb as O}from"./chunk-VWKE6EEO.js";import"./chunk-G5KKTNWD.js";function R(a,i){if(a&1&&(t(0,"tr")(1,"td"),s(2),n(),t(3,"td"),s(4),n(),t(5,"td"),s(6),n()()),a&2){let r=i.$implicit;l(2),d(r.id),l(2),d(r.username),l(2),d(r.email)}}function q(a,i){if(a&1){let r=I();b(0),t(1,"input",1),y("input",function(o){E(r);let e=M();return U(e.setState("searchText",o.target.value))}),n(),t(2,"span"),s(3),n(),t(4,"table")(5,"thead")(6,"th"),s(7,"#"),n(),t(8,"th"),s(9,"state"),n(),t(10,"th"),s(11,"name"),n(),t(12,"th"),s(13,"email"),n()(),t(14,"tbody"),f(15,R,7,3,"tr",2),n()(),w()}if(a&2){let r=i.ngIf;l(3),O("",r.total," found: ",r.found," ",r.pages,""),l(12),g("ngForOf",r.foundUsers)}}var X=(()=>{let i=class{constructor(m,o){this.us=m,this.route=o,this.state$=new _({searchText:""}),this.users$=this.us.allUsers$,this.userCount$=this.users$.pipe(p(e=>e.length)),this.setState=k(this.state$),this.foundUsers$=x({users:this.users$,search:this.state$.pipe(u("searchText"),S(),C(250))}).pipe(p(({users:e,search:B})=>e.filter(c=>c.username.toLowerCase().includes(B.toLowerCase())).sort((c,N)=>c.username<N.username?-1:1))),this.searchCount$=this.foundUsers$.pipe(p(e=>e.length)),this.viewModel$=x({foundUsers:this.foundUsers$.pipe(p(e=>e.slice(0,25))),state:this.state$,total:this.userCount$,found:this.searchCount$,pages:this.searchCount$.pipe(p(e=>Math.ceil(e/25)))})}ngOnInit(){this.route.params.pipe(u("id"),$(m=>console.log("params",m))).subscribe()}},a=i;return(()=>{i.\u0275fac=function(o){return new(o||i)(h(A),h(V))}})(),(()=>{i.\u0275cmp=v({type:i,selectors:[["app-demo-user"]],standalone:!0,features:[T],decls:4,vars:3,consts:[[4,"ngIf"],["type","text",3,"input"],[4,"ngFor","ngForOf"]],template:function(o,e){o&1&&(t(0,"h1"),s(1,"User list demo"),n(),f(2,q,16,4,"ng-container",0),F(3,"async")),o&2&&(l(2),g("ngIf",P(3,1,e.viewModel$)))},dependencies:[j,D,L],styles:[`tr[_ngcontent-%COMP%]:nth-child(odd) {
  background-color: #444849;
}
table[_ngcontent-%COMP%] {
  width: 90vw;
  margin: 1rem;
  padding:0;
  border: 1px solid #404040;
  border-collapse: collapse;

}
td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {
  border-right: 1px solid #404040;
  text-align: left;
  padding:4px;
}`]})})(),a})();export{X as DemoUserComponent};
