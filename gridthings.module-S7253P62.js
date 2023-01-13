import{l as C}from"./chunk-P3TXNOF4.js";import{l as S,q as I}from"./chunk-I27LS666.js";import{$a as v,Va as d,bb as m,ca as f,cb as o,db as i,ja as g,ka as u,nb as b,ob as F,pb as O,qb as D,sb as r,tb as M}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";var k=["*"],a=class{constructor(){}ngOnInit(){}},y=a;(()=>{a.\u0275fac=function(e){return new(e||a)}})(),(()=>{a.\u0275cmp=g({type:a,selectors:[["app-cell"]],hostVars:4,hostBindings:function(e,n){e&2&&D("grid-column-start",n.x)("grid-row-start",n.y)},inputs:{x:"x",y:"y"},ngContentSelectors:k,decls:1,vars:0,template:function(e,n){e&1&&(F(),O(0))},styles:["[_nghost-%COMP%]{display:grid;box-sizing:border-box;width:100%;height:100%;border-radius:15px;align-items:center;justify-items:center;background-color:#00cc0020;overflow:none}"]})})();function E(c,t){if(c&1&&(o(0,"app-cell",6)(1,"h1"),r(2),i()()),c&2){let e=t.$implicit;m("x",e),d(2),M(e)}}function _(c,t){if(c&1&&(o(0,"app-cell",7)(1,"h1"),r(2),i()()),c&2){let e=t.$implicit,n=b();m("y",n.x),d(2),M(e)}}var l=class{constructor(){this.labels=Array.from({length:10},(t,e)=>e+1)}ngOnInit(){}},h=l;(()=>{l.\u0275fac=function(e){return new(e||l)}})(),(()=>{l.\u0275cmp=g({type:l,selectors:[["app-gridthings"]],decls:10,vars:2,consts:[["x","3","y","5"],["x","4","y","6"],["x","8","y","9"],["x","9","y","10"],["y","1",3,"x",4,"ngFor","ngForOf"],["x","1",3,"y",4,"ngFor","ngForOf"],["y","1",3,"x"],["x","1",3,"y"]],template:function(e,n){e&1&&(o(0,"app-cell",0),r(1," Hello,"),i(),o(2,"app-cell",1),r(3," Dark"),i(),o(4,"app-cell",2),r(5," I'm"),i(),o(6,"app-cell",3),r(7," here"),i(),v(8,E,3,2,"app-cell",4),v(9,_,3,2,"app-cell",5)),e&2&&(d(8),m("ngForOf",n.labels),d(1),m("ngForOf",n.labels.slice(1,n.labels.length)))},dependencies:[S,y],styles:[`[_ngcontent-%COMP%]:root {
    --cols: 10;
    --rows: 10;
  }

  [_nghost-%COMP%] {
    --cols: 10;
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    grid-template-columns: repeat(var(--cols), calc(100% / var(--cols)));
    grid-template-rows: repeat(var(--rows), calc(100% / var(--rows)));


    background: linear-gradient(90deg, transparent calc(100% - 1px), white 1px);
    background-size: calc(100% / var(--cols));
  }

  [_nghost-%COMP%]::after {
    --rows: 10;
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-image: linear-gradient(transparent 50%, #ffffff30 50%);
    background-size: 100% calc(100% / (var(--rows) /2));
  }`]})})();var J=[{path:"",component:h}],p=class{},x=p;(()=>{p.\u0275fac=function(e){return new(e||p)}})(),(()=>{p.\u0275mod=u({type:p})})(),(()=>{p.\u0275inj=f({imports:[C.forChild(J),C]})})();var s=class{},j=s;(()=>{s.\u0275fac=function(e){return new(e||s)}})(),(()=>{s.\u0275mod=u({type:s})})(),(()=>{s.\u0275inj=f({imports:[I,x]})})();export{j as GridthingsModule};
