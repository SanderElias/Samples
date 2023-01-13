import{b as Y}from"./chunk-XZCHICF6.js";import{l as J}from"./chunk-P3TXNOF4.js";import{m as W,n as P,q as X}from"./chunk-I27LS666.js";import{$a as B,Gb as y,Hb as _,Va as m,bb as c,ca as w,cb as l,db as d,e as q,eb as M,fb as K,g as G,gb as Q,ja as S,ka as D,mb as N,nb as $,p as F,sb as g,ub as U}from"./chunk-CXFJOMNY.js";import{a as p,b as u,h as A}from"./chunk-G5KKTNWD.js";var H=()=>String.fromCharCode(Math.floor(Math.random()*26)+97),ie=()=>Date.now().toString(36)+"-"+H()+H()+H(),s=new Map,L=(e,t,n,i)=>{let o={id:ie(),parentId:t,value:e,left:n,right:i};return s.set(o.id,o),o},r=e=>s.get(e);var a=()=>[...s.values()].find(e=>e.parentId===void 0),Z=()=>{s.clear()};function T(e,t=a()){if(t===void 0)return e;if(e.value<t.value)return t.left===void 0?(t.left=e.id,e.parentId=t.id,e):T(e,r(t.left));if(e.value>t.value)return t.right===void 0?(t.right=e.id,e.parentId=t.id,e):T(e,r(t.right));e.value===t.value&&(console.warn("thrown away duplicate value"),s.delete(e.id))}function ee(){console.table([...s.values()].sort((e,t)=>e.value<t.value?-1:1).map(e=>u(p({},e),{leftVal:r(e.left)?.value,cur:e.value,rightVal:r(e.right)?.value})))}function k(e=a()){let t=r(e.parentId),n=r(e.right);if(n===void 0)return e;n.parentId=t?.id,t!==void 0&&(t.left===e.id?t.left=n.id:t.right=n.id);let i=r(n.left);return n.left=e.id,e.parentId=n.id,i!==void 0?(e.right=i.id,i.parentId=e.id):e.right=void 0,n}var V=()=>[...s.values()].sort((e,t)=>e.value<t.value?-1:1);function O(e=a()){let t=r(e.parentId),n=r(e.left);if(n===void 0)return e;n.parentId=t?.id,t!==void 0&&(t.left===e.id?t.left=n.id:t.right=n.id);let i=r(n.right);return n.right=e.id,e.parentId=n.id,i!==void 0?(e.left=i.id,i.parentId=e.id):e.left=void 0,n}function f(e){if(e===void 0)return 0;let t=Math.max(f(r(e.left)),f(r(e.right)));return e.height=t+1,e.height}function h(e){if(e===void 0)return 0;let t=n=>r(n)?.height||0;return e.balance=t(e.left)-t(e.right),e.balance}function te(){let e=100;for(I();;){let t=[...s.values()].find(n=>Math.abs(h(n))>1);if(console.log(s.size,t?.value,h(t)),t===void 0||!--e)break;I(t)}}function I(e=a()){if(e===void 0)return;let t=h(e);if(t<-1){let i=r(e.right);i&&h(i)>0&&O(i);let o=k(e);return f(a()),I(o)}if(t>1){let i=r(e.left);i&&i.balance<0&&k(i);let o=O(e);return f(a()),I(o)}let n=i=>{let o=h(i);Math.abs(i?.balance)>1&&I(i)};n(r(e.left)),n(r(e.right))}function oe(e,t){if(e&1&&(l(0,"span",3),g(1),d()),e&2){let n=$().ngIf,i=$(),o;c("title",i.title(n)),m(1),U(" ",(o=n==null?null:n.value)!==null&&o!==void 0?o:"-"," ")}}function ae(e,t){if(e&1&&(l(0,"div",4),M(1,"b-node",5),y(2,"async"),M(3,"b-node",6),y(4,"async"),d()),e&2){let n=$(2);m(1),c("bNode",_(2,2,n.left$)),m(2),c("bNode",_(4,4,n.right$))}}function le(e,t){if(e&1&&(K(0),l(1,"div"),B(2,oe,2,2,"span",1),d(),B(3,ae,5,6,"div",2),Q()),e&2){let n=t.ngIf,i;m(2),c("ngIf",(i=n==null?null:n.value)!==null&&i!==void 0?i:void 0),m(1),c("ngIf",(n==null?null:n.left)||(n==null?null:n.right))}}var b=class{constructor(){this.node$=new G,this.left$=this.node$.pipe(F(t=>u(p({},r(t.left)),{time:Date.now()}))),this.right$=this.node$.pipe(F(t=>u(p({},r(t.right)),{time:Date.now()}))),this.height=f,this.balance=h}set bNode(t){setTimeout(()=>this.node$.next(u(p({},t),{time:Date.now()})),10)}title(t){return`Height: ${t.height} balance: ${h(t)}`}},E=b;(()=>{b.\u0275fac=function(n){return new(n||b)}})(),(()=>{b.\u0275cmp=S({type:b,selectors:[["b-node"]],inputs:{bNode:"bNode"},decls:2,vars:3,consts:[[4,"ngIf"],[3,"title",4,"ngIf"],["class","row",4,"ngIf"],[3,"title"],[1,"row"],[1,"left",3,"bNode"],[1,"right",3,"bNode"]],template:function(n,i){n&1&&(B(0,le,4,2,"ng-container",0),y(1,"async")),n&2&&c("ngIf",_(1,1,i.node$))},dependencies:[W,b,P],styles:[`[_nghost-%COMP%] {
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

  .left[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child {
    background-color: rgba(0, 0, 255);
  }

  .right[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child {
    background-color: rgba(0, 128, 0);
  }`],changeDetection:0})})();var C=class{constructor(){this.count=31,this.root$=new q,this.nodes=V(),this.dump=()=>{ee(),this.refresh()},this.deb=null}ngOnInit(){this.reset()}reset(){return A(this,null,function*(){Z();let[t,...n]=yield fe(),i=L(t);n.forEach(o=>T(L(o),i)),f(i),setTimeout(()=>this.root$.next(i),20),this.nodes=V()})}refresh(){this.deb&&clearTimeout(this.deb),this.deb=setTimeout(()=>{this.root$.next(u(p({},a()),{time:Date.now()}))},0),f(a())}rl(t=a()){k(t),this.refresh()}rr(t=a()){O(t),this.refresh()}rb(t=a()){te(),this.refresh()}},j=C;(()=>{C.\u0275fac=function(n){return new(n||C)}})(),(()=>{C.\u0275cmp=S({type:C,selectors:[["app-bintree"]],decls:13,vars:3,consts:[[1,"button-bar"],[3,"click"],[3,"bNode"]],template:function(n,i){n&1&&(l(0,"h1"),g(1,"Binary tree"),d(),l(2,"div",0)(3,"button",1),N("click",function(){return i.rl()}),g(4,"rl"),d(),l(5,"button",1),N("click",function(){return i.rr()}),g(6,"rr"),d(),l(7,"button",1),N("click",function(){return i.rb()}),g(8,"rb"),d(),l(9,"button",1),N("click",function(){return i.dump()}),g(10,"dump"),d()(),M(11,"b-node",2),y(12,"async")),n&2&&(m(11),c("bNode",_(12,1,i.root$)))},dependencies:[E,P],styles:[`.button-bar[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    max-width: 100vw;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(10,1fr);
  }`],changeDetection:0})})();var ce=(e=2e3)=>Math.floor(Math.random()*e),se=e=>[...new Set(Array.from({length:e},()=>ce()))];function fe(){return A(this,null,function*(){let e;return e||(e=se(100),Y("binTreeSampleData",e)),e})}var ue=[{path:"",component:j}],v=class{},R=v;(()=>{v.\u0275fac=function(n){return new(n||v)}})(),(()=>{v.\u0275mod=D({type:v})})(),(()=>{v.\u0275inj=w({imports:[J.forChild(ue),J]})})();var x=class{},ne=x;(()=>{x.\u0275fac=function(n){return new(n||x)}})(),(()=>{x.\u0275mod=D({type:x})})(),(()=>{x.\u0275inj=w({imports:[X,R]})})();export{ne as BintreeModule};
