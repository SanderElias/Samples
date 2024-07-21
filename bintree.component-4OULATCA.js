import{i as S}from"./chunk-IN7EUNJS.js";import{Fb as C,Gb as B,Ob as h,Qb as A,Wa as m,Xb as I,Zb as _,_b as v,f as j,h as R,ha as N,lb as w,nb as b,q as k,rb as M,wb as l,xb as d,yb as x}from"./chunk-BFR4IEYA.js";import{a as u,b as p}from"./chunk-KAT7YFEL.js";var T=()=>String.fromCharCode(Math.floor(Math.random()*26)+97),z=()=>Date.now().toString(36)+"-"+T()+T()+T(),c=new Map,O=(e,n,t,i)=>{let r={id:z(),parentId:n,value:e,left:t,right:i};return c.set(r.id,r),r},o=e=>c.get(e);var a=()=>[...c.values()].find(e=>e.parentId===void 0),F=()=>{c.clear()};function $(e,n=a()){if(n===void 0)return e;if(e.value<n.value)return n.left===void 0?(n.left=e.id,e.parentId=n.id,e):$(e,o(n.left));if(e.value>n.value)return n.right===void 0?(n.right=e.id,e.parentId=n.id,e):$(e,o(n.right));e.value===n.value&&(console.warn("thrown away duplicate value"),c.delete(e.id))}function H(){console.table([...c.values()].sort((e,n)=>e.value<n.value?-1:1).map(e=>p(u({},e),{leftVal:o(e.left)?.value,cur:e.value,rightVal:o(e.right)?.value})))}function D(e=a()){let n=o(e.parentId),t=o(e.right);if(t===void 0)return e;t.parentId=n?.id,n!==void 0&&(n.left===e.id?n.left=t.id:n.right=t.id);let i=o(t.left);return t.left=e.id,e.parentId=t.id,i!==void 0?(e.right=i.id,i.parentId=e.id):e.right=void 0,t}var E=()=>[...c.values()].sort((e,n)=>e.value<n.value?-1:1);function P(e=a()){let n=o(e.parentId),t=o(e.left);if(t===void 0)return e;t.parentId=n?.id,n!==void 0&&(n.left===e.id?n.left=t.id:n.right=t.id);let i=o(t.right);return t.right=e.id,e.parentId=t.id,i!==void 0?(e.left=i.id,i.parentId=e.id):e.left=void 0,t}function s(e){if(e===void 0)return 0;let n=Math.max(s(o(e.left)),s(o(e.right)));return e.height=n+1,e.height}function g(e){if(e===void 0)return 0;let n=t=>o(t)?.height||0;return e.balance=n(e.left)-n(e.right),e.balance}function L(){let e=100;for(y();;){let n=[...c.values()].find(t=>Math.abs(g(t))>1);if(console.log(c.size,n?.value,g(n)),n===void 0||!--e)break;y(n)}}function y(e=a()){if(e===void 0)return;let n=g(e);if(n<-1){let i=o(e.right);i&&g(i)>0&&P(i);let r=D(e);return s(a()),y(r)}if(n>1){let i=o(e.left);i&&i.balance<0&&D(i);let r=P(e);return s(a()),y(r)}let t=i=>{let r=g(i);Math.abs(i?.balance)>1&&y(i)};t(o(e.left)),t(o(e.right))}function G(e,n){if(e&1&&(l(0,"span",0),h(1),d()),e&2){let t,i=B(),r=B();b("title",r.title(i)),m(),A(" ",(t=i==null?null:i.value)!==null&&t!==void 0?t:"-"," ")}}function J(e,n){if(e&1&&(l(0,"div",1),x(1,"b-node",2),_(2,"async"),x(3,"b-node",3),_(4,"async"),d()),e&2){let t=B(2);m(),b("bNode",v(2,2,t.left$)),m(2),b("bNode",v(4,4,t.right$))}}function K(e,n){if(e&1&&(l(0,"div"),w(1,G,2,2,"span",0),d(),w(2,J,5,6,"div",1)),e&2){let t,i=n;m(),M((t=i==null?null:i.value)!==null&&t!==void 0&&t?1:-1),m(),M(i!=null&&i.left||i!=null&&i.right?2:-1)}}var V=(()=>{class e{set bNode(t){setTimeout(()=>this.node$.next(p(u({},t),{time:Date.now()})),10)}constructor(){this.node$=new R,this.left$=this.node$.pipe(k(t=>p(u({},o(t.left)),{time:Date.now()}))),this.right$=this.node$.pipe(k(t=>p(u({},o(t.right)),{time:Date.now()}))),this.height=s,this.balance=g}title(t){return`Height: ${t.height} balance: ${g(t)}`}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=N({type:e,selectors:[["b-node"]],inputs:{bNode:"bNode"},standalone:!0,features:[I],decls:2,vars:3,consts:[[3,"title"],[1,"row"],[1,"left",3,"bNode"],[1,"right",3,"bNode"]],template:function(i,r){if(i&1&&(w(0,K,3,2),_(1,"async")),i&2){let f;M((f=v(1,1,r.node$))?0:-1,f)}},dependencies:[e,S],styles:[`[_nghost-%COMP%] {
    display: grid;
    width: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr;
    justify-content: center;
    align-content: center;
    gap: 2px;
    margin: 4px;
    padding: 2px;
    border: 1px solid rgba(255, 255, 255, 0.774);
  }

  div[_ngcontent-%COMP%] {
    text-align: center;
  }

  div.row[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  div[_ngcontent-%COMP%]:first-child {
    padding: 9px;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
    background-color: rgba(93, 14, 93);
  }

  .left[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {
    background-color: rgba(0, 0, 255);
  }

  .right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {
    background-color: rgba(0, 128, 0);
  }`],changeDetection:0})}}return e})();var se=(()=>{class e{constructor(){this.count=31,this.root$=new j,this.nodes=E(),this.dump=()=>{H(),this.refresh()},this.deb=null}ngOnInit(){this.reset()}async reset(){F();let[t,...i]=await W(),r=O(t);i.forEach(f=>$(O(f),r)),s(r),setTimeout(()=>this.root$.next(r),20),this.nodes=E()}refresh(){this.deb&&clearTimeout(this.deb),this.deb=setTimeout(()=>{this.root$.next(p(u({},a()),{time:Date.now()}))},0),s(a())}rl(t=a()){D(t),this.refresh()}rr(t=a()){P(t),this.refresh()}rb(t=a()){L(),this.refresh()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=N({type:e,selectors:[["app-bintree"]],standalone:!0,features:[I],decls:13,vars:3,consts:[[1,"button-bar"],[3,"click"],[3,"bNode"]],template:function(i,r){i&1&&(l(0,"h1"),h(1,"Binary tree"),d(),l(2,"div",0)(3,"button",1),C("click",function(){return r.rl()}),h(4,"rl"),d(),l(5,"button",1),C("click",function(){return r.rr()}),h(6,"rr"),d(),l(7,"button",1),C("click",function(){return r.rb()}),h(8,"rb"),d(),l(9,"button",1),C("click",function(){return r.dump()}),h(10,"dump"),d()(),x(11,"b-node",2),_(12,"async")),i&2&&(m(11),b("bNode",v(12,1,r.root$)))},dependencies:[V,S],styles:[`.button-bar[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 100vw;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }`],changeDetection:0})}}return e})(),Q=(e=2e3)=>Math.floor(Math.random()*e),U=e=>[...new Set(Array.from({length:e},()=>Q()))];async function W(){let e;return e||(e=U(100)),e}export{se as BintreeComponent};
