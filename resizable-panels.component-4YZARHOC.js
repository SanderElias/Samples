import{m as x}from"./chunk-JQ6I7NYP.js";import{Ca as a,Fb as f,Gb as g,Hb as b,Ib as p,Ja as m,Jb as h,Rb as y,Tb as v,Ub as _,Ya as l,ac as w,cc as C,db as d,ga as r,lb as o,ta as c,xc as z,yb as u}from"./chunk-AULJCTBB.js";import"./chunk-KAT7YFEL.js";var A=["*"],P=(()=>{class t{constructor(){this.elm=r(a).nativeElement,this.des=r(c),this.name=D(this.elm),this.resHandler=e=>{let[{borderBoxSize:[{inlineSize:n,blockSize:i}]}]=e;this.elm.style.setProperty("--_panel-width",`${n}px`),this.elm.style.setProperty("--_panel-height",`${i}px`)},m(()=>{this.resObs=new ResizeObserver($(this.resHandler,250)),this.resObs.observe(this.elm),this.des.onDestroy(()=>this.resObs.unobserve(this.elm))})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=o({type:t,selectors:[["se-resizable-panel"]],ngContentSelectors:A,decls:1,vars:0,template:function(n,i){n&1&&(v(),_(0))},dependencies:[x],styles:["[_nghost-%COMP%]{display:inline-block;--_panel-width: var(--panel-width, 300px);--_panel-height: var(--panel-height, 300px);margin:calc(var(--panel-gap) / 2);width:var(--_panel-width);height:var(--_panel-height);min-height:1.5rem;min-width:4rem;resize:both;overflow:auto;border:1px solid white}"]})}}return t})();function $(t,s){let e;return(...n)=>{clearTimeout(e),e=setTimeout(()=>t(...n),s)}}function D(t){let s=[];for(;t.parentNode;){let e=[t.tagName.toLowerCase(),t.hasAttribute("class")?t.getAttribute("class"):"",t.hasAttribute("id")?t.getAttribute("id"):"",t.hasAttribute("name")?t.getAttribute("name"):"",t.hasAttribute("type")?t.getAttribute("type"):"",0];for(let i=0;i<e.length;i++)e[i]=typeof e[i]=="string"?e[i].trim():e[i];e[1]!=""&&(e[1]="."+e[1].split(" ").join(".")),e[2]!=""&&(e[2]="#"+e[2]),e[3]!=""&&(e[3]='[name="'+e[3]+'"]'),e[4]!=""&&(e[4]='[type="'+e[4]+'"]');let n=t;for(;n;)e[5]++,n=n.previousElementSibling;e[5]=e[5]!=""?":nth-child("+e[5]+")":":only-child",n="";for(let i=0;i<e.length;i++)n+=e[i];s.unshift(n),t=t.parentNode}return s.join(">")}function E(t,s){if(t&1&&(p(0,"se-resizable-panel")(1,"h3"),w(2),h()()),t&2){let e=s.$implicit;l(2),C("Panel ",e,"")}}var H=(()=>{class t{constructor(){this.$range=d(1.5),this.elm=r(a).nativeElement,this.panels=["One","Three","Two","Four"],z(()=>{let e=this.$range();this.elm.style.setProperty("--panel-gap",`${e}px`)})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=o({type:t,selectors:[["se-resizable-panels"]],decls:3,vars:1,consts:[["type","range",3,"change","value"]],template:function(n,i){n&1&&(p(0,"input",0),y("change",function(R){return i.$range.set(R.target.value)}),h(),g(1,E,3,1,"se-resizable-panel",null,f)),n&2&&(u("value",i.$range()),l(),b(i.panels))},dependencies:[P],styles:["[_nghost-%COMP%]{display:block;border:1px solid yellow;min-height:100%;--panel-width: 300px;--panel-height: 300px;--panel-gap: 1.5rem}"]})}}return t})();export{H as ResizablePanelsComponent};