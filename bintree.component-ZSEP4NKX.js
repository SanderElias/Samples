import{b as z}from"./chunk-XZCHICF6.js";import{j as V,k as B}from"./chunk-GR2PXCGU.js";import{Eb as S,Gb as _,Hb as v,Wa as g,ab as N,cb as s,db as c,e as R,eb as d,fb as y,g as A,gb as F,ha as w,hb as H,mb as C,nb as M,o as k,sb as h,ub as L}from"./chunk-X5MK5QQ4.js";import{a as p,b as m,h as T}from"./chunk-G5KKTNWD.js";var O=()=>String.fromCharCode(Math.floor(Math.random()*26)+97),Q=()=>Date.now().toString(36)+"-"+O()+O()+O(),f=new Map,E=(e,t,i,n)=>{let r={id:Q(),parentId:t,value:e,left:i,right:n};return f.set(r.id,r),r},o=e=>f.get(e);var a=()=>[...f.values()].find(e=>e.parentId===void 0),q=()=>{f.clear()};function D(e,t=a()){if(t===void 0)return e;if(e.value<t.value)return t.left===void 0?(t.left=e.id,e.parentId=t.id,e):D(e,o(t.left));if(e.value>t.value)return t.right===void 0?(t.right=e.id,e.parentId=t.id,e):D(e,o(t.right));e.value===t.value&&(console.warn("thrown away duplicate value"),f.delete(e.id))}function G(){console.table([...f.values()].sort((e,t)=>e.value<t.value?-1:1).map(e=>m(p({},e),{leftVal:o(e.left)?.value,cur:e.value,rightVal:o(e.right)?.value})))}function $(e=a()){let t=o(e.parentId),i=o(e.right);if(i===void 0)return e;i.parentId=t?.id,t!==void 0&&(t.left===e.id?t.left=i.id:t.right=i.id);let n=o(i.left);return i.left=e.id,e.parentId=i.id,n!==void 0?(e.right=n.id,n.parentId=e.id):e.right=void 0,i}var j=()=>[...f.values()].sort((e,t)=>e.value<t.value?-1:1);function P(e=a()){let t=o(e.parentId),i=o(e.left);if(i===void 0)return e;i.parentId=t?.id,t!==void 0&&(t.left===e.id?t.left=i.id:t.right=i.id);let n=o(i.right);return i.right=e.id,e.parentId=i.id,n!==void 0?(e.left=n.id,n.parentId=e.id):e.left=void 0,i}function u(e){if(e===void 0)return 0;let t=Math.max(u(o(e.left)),u(o(e.right)));return e.height=t+1,e.height}function b(e){if(e===void 0)return 0;let t=i=>o(i)?.height||0;return e.balance=t(e.left)-t(e.right),e.balance}function J(){let e=100;for(I();;){let t=[...f.values()].find(i=>Math.abs(b(i))>1);if(console.log(f.size,t?.value,b(t)),t===void 0||!--e)break;I(t)}}function I(e=a()){if(e===void 0)return;let t=b(e);if(t<-1){let n=o(e.right);n&&b(n)>0&&P(n);let r=$(e);return u(a()),I(r)}if(t>1){let n=o(e.left);n&&n.balance<0&&$(n);let r=P(e);return u(a()),I(r)}let i=n=>{let r=b(n);Math.abs(n?.balance)>1&&I(n)};i(o(e.left)),i(o(e.right))}function W(e,t){if(e&1&&(c(0,"span",3),h(1),d()),e&2){let i=M().ngIf,n=M(),r;s("title",n.title(i)),g(1),L(" ",(r=i==null?null:i.value)!==null&&r!==void 0?r:"-"," ")}}function X(e,t){if(e&1&&(c(0,"div",4),y(1,"b-node",5),_(2,"async"),y(3,"b-node",6),_(4,"async"),d()),e&2){let i=M(2);g(1),s("bNode",v(2,2,i.left$)),g(2),s("bNode",v(4,4,i.right$))}}function Y(e,t){if(e&1&&(F(0),c(1,"div"),N(2,W,2,2,"span",1),d(),N(3,X,5,6,"div",2),H()),e&2){let i=t.ngIf,n;g(2),s("ngIf",(n=i==null?null:i.value)!==null&&n!==void 0?n:void 0),g(1),s("ngIf",(i==null?null:i.left)||(i==null?null:i.right))}}var K=(()=>{let t=class{set bNode(n){setTimeout(()=>this.node$.next(m(p({},n),{time:Date.now()})),10)}constructor(){this.node$=new A,this.left$=this.node$.pipe(k(n=>m(p({},o(n.left)),{time:Date.now()}))),this.right$=this.node$.pipe(k(n=>m(p({},o(n.right)),{time:Date.now()}))),this.height=u,this.balance=b}title(n){return`Height: ${n.height} balance: ${b(n)}`}},e=t;return(()=>{t.\u0275fac=function(r){return new(r||t)}})(),(()=>{t.\u0275cmp=w({type:t,selectors:[["b-node"]],inputs:{bNode:"bNode"},standalone:!0,features:[S],decls:2,vars:3,consts:[[4,"ngIf"],[3,"title",4,"ngIf"],["class","row",4,"ngIf"],[3,"title"],[1,"row"],[1,"left",3,"bNode"],[1,"right",3,"bNode"]],template:function(r,l){r&1&&(N(0,Y,4,2,"ng-container",0),_(1,"async")),r&2&&s("ngIf",v(1,1,l.node$))},dependencies:[t,V,B],styles:[`[_nghost-%COMP%] {
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
  }`],changeDetection:0})})(),e})();var ge=(()=>{let t=class{constructor(){this.count=31,this.root$=new R,this.nodes=j(),this.dump=()=>{G(),this.refresh()},this.deb=null}ngOnInit(){this.reset()}reset(){return T(this,null,function*(){q();let[n,...r]=yield te(),l=E(n);r.forEach(x=>D(E(x),l)),u(l),setTimeout(()=>this.root$.next(l),20),this.nodes=j()})}refresh(){this.deb&&clearTimeout(this.deb),this.deb=setTimeout(()=>{this.root$.next(m(p({},a()),{time:Date.now()}))},0),u(a())}rl(n=a()){$(n),this.refresh()}rr(n=a()){P(n),this.refresh()}rb(n=a()){J(),this.refresh()}},e=t;return(()=>{t.\u0275fac=function(r){return new(r||t)}})(),(()=>{t.\u0275cmp=w({type:t,selectors:[["app-bintree"]],standalone:!0,features:[S],decls:13,vars:3,consts:[[1,"button-bar"],[3,"click"],[3,"bNode"]],template:function(r,l){r&1&&(c(0,"h1"),h(1,"Binary tree"),d(),c(2,"div",0)(3,"button",1),C("click",function(){return l.rl()}),h(4,"rl"),d(),c(5,"button",1),C("click",function(){return l.rr()}),h(6,"rr"),d(),c(7,"button",1),C("click",function(){return l.rb()}),h(8,"rb"),d(),c(9,"button",1),C("click",function(){return l.dump()}),h(10,"dump"),d()(),y(11,"b-node",2),_(12,"async")),r&2&&(g(11),s("bNode",v(12,1,l.root$)))},dependencies:[K,B],styles:[`.button-bar[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    max-width: 100vw;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(10,1fr);
  }`],changeDetection:0})})(),e})();var Z=(e=2e3)=>Math.floor(Math.random()*e),ee=e=>[...new Set(Array.from({length:e},()=>Z()))];function te(){return T(this,null,function*(){let e;return e||(e=ee(100),z("binTreeSampleData",e)),e})}export{ge as BintreeComponent};
