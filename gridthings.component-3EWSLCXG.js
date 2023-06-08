import{i as x}from"./chunk-7UTYY7SV.js";import{Gb as m,Wa as c,cb as g,eb as p,fb as r,ga as d,gb as o,qb as u,rb as h,sb as y,ub as a,vb as f}from"./chunk-VWKE6EEO.js";import"./chunk-G5KKTNWD.js";var v=["*"],b=(()=>{let e=class{constructor(){}ngOnInit(){}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=d({type:e,selectors:[["app-cell"]],hostVars:4,hostBindings:function(n,i){n&2&&y("grid-column-start",i.x)("grid-row-start",i.y)},inputs:{x:"x",y:"y"},standalone:!0,features:[m],ngContentSelectors:v,decls:1,vars:0,template:function(n,i){n&1&&(u(),h(0))},styles:["[_nghost-%COMP%]{display:grid;box-sizing:border-box;width:100%;height:100%;border-radius:15px;align-items:center;justify-items:center;background-color:#00cc0020;overflow:none}"]})})(),t})();function C(t,e){if(t&1&&(r(0,"app-cell",6)(1,"h1"),a(2),o()()),t&2){let l=e.$implicit;p("x",l),c(2),f(l)}}function _(t,e){if(t&1&&(r(0,"app-cell",7)(1,"h1"),a(2),o()()),t&2){let l=e.$implicit;p("y",l),c(2),f(l)}}var k=(()=>{let e=class{constructor(){this.labels=Array.from({length:10},(s,n)=>n+1)}ngOnInit(){}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=d({type:e,selectors:[["app-gridthings"]],standalone:!0,features:[m],decls:10,vars:2,consts:[["x","3","y","5"],["x","4","y","6"],["x","8","y","9"],["x","9","y","10"],["y","1",3,"x",4,"ngFor","ngForOf"],["x","1",3,"y",4,"ngFor","ngForOf"],["y","1",3,"x"],["x","1",3,"y"]],template:function(n,i){n&1&&(r(0,"app-cell",0),a(1," Hello,"),o(),r(2,"app-cell",1),a(3," Dark"),o(),r(4,"app-cell",2),a(5," I'm"),o(),r(6,"app-cell",3),a(7," here"),o(),g(8,C,3,2,"app-cell",4),g(9,_,3,2,"app-cell",5)),n&2&&(c(8),p("ngForOf",i.labels),c(1),p("ngForOf",i.labels.slice(1,i.labels.length)))},dependencies:[b,x],styles:[`[_ngcontent-%COMP%]:root {
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
  }`]})})(),t})();export{k as GridthingsComponent};
