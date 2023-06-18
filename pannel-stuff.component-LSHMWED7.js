import{k as R,l as j}from"./chunk-COT5DIUW.js";import{Ib as d,Kb as y,Lb as B,Mb as I,Nb as g,Ta as v,Xa as S,_a as c,gb as b,ha as p,hb as i,ib as r,ja as f,jb as u,o as x,qb as h,sb as E,tb as C,wb as s,y as w}from"./chunk-IWWGYS2Z.js";import"./chunk-G5KKTNWD.js";var P=["*"],m=(()=>{let e=class{constructor(t){this.elmRef=t,this.shadowRoot=this.elmRef.nativeElement?.shadowRoot}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(v))}})(),(()=>{e.\u0275cmp=p({type:e,selectors:[["app-pannel"]],standalone:!0,features:[d],ngContentSelectors:P,decls:5,vars:0,consts:[[1,"pannel"]],template:function(n,a){n&1&&(E(),i(0,"div",0),u(1,"header"),i(2,"main"),C(3),r(),u(4,"footer"),r())},styles:[`
  .pannel {
    display:grid;
    grid-template-rows: 0 1fr 0;
    position: relative;
    width: 40vw;
    background-color: dimgray;
    height: 200px;
    border-radius: 10px;
    padding:10px;
    margin-top: 5px;
  }

  .pannel.footer {
    grid-template-rows: 0 1fr 40px;
  }
  .pannel.header {
    grid-template-rows: 40px 1fr 0;
  }
  .pannel.header.footer {
    grid-template-rows: 40px 1fr 40px;
  }

  .pannel.header>header, .pannel.footer>footer {
    border-top: 1px solid white;
    display:grid;
    align-content: center;
    justify-content: center;
  }


  /** css trickery to create a cross, removes all style from the button first.*/
  #closeButton {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: absolute;
    right: 10px;
    top: -5px;
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }
  #closeButton:hover {
    opacity: 1;
  }
  #closeButton:before, #closeButton:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: rgb(243, 238, 238);
  }
  #closeButton:before {
    transform: rotate(45deg);
  }
  #closeButton:after {
    transform: rotate(-45deg);
  }
`],encapsulation:3,changeDetection:0})})(),o})();var k=(()=>{let e=class{constructor(t){this.pannel=t,this.root=this.pannel.shadowRoot,this.close=new g}ngOnInit(){if(this.root){let t=this.root.querySelector(".pannel"),n=this.root.querySelector("main"),a=document.createElement("button"),l=()=>{t.style.display="none",this.close.emit(),a.removeEventListener("click",l)};a.id="closeButton",a.addEventListener("click",l),n.appendChild(a)}}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(m,1))}})(),(()=>{e.\u0275dir=f({type:e,selectors:[["app-pannel","close",""]],outputs:{close:"close"},standalone:!0})})(),o})();var D=(()=>{let e=class{set footerContent(t){if(typeof t=="string"){let n=this.root.querySelector("footer");n.innerText=t}}constructor(t){this.panel=t,this.root=this.panel.shadowRoot,this.footer=new g}ngOnInit(){this.root&&this.root.querySelector(".pannel").classList.add("footer")}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(m,1))}})(),(()=>{e.\u0275dir=f({type:e,selectors:[["app-pannel","footer",""]],inputs:{footerContent:["footer","footerContent"]},outputs:{footer:"footer"},standalone:!0})})(),o})();var $=(()=>{let e=class{constructor(){this.time$=w(1e3).pipe(x(()=>new Date))}ngOnInit(){}alert(t){alert(t)}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=p({type:e,selectors:[["app-pannel-stuff"]],standalone:!0,features:[d],decls:19,vars:6,consts:[[3,"close"],[3,"footer","close"]],template:function(n,a){n&1&&(i(0,"h1"),s(1,"Pannel composition"),r(),i(2,"app-pannel")(3,"h1"),s(4,"Basic no frills pannel"),r(),i(5,"p"),s(6,"You might want to add some styling to the base pannel."),r()(),i(7,"app-pannel",0),h("close",function(){return a.alert("bye")}),i(8,"h1"),s(9,"Closable pannel"),r(),i(10,"p"),s(11,"the directive adds a close emitter, so you can react on close."),r()(),i(12,"app-pannel",1),h("close",function(){return a.alert("bye")}),y(13,"date"),y(14,"async"),i(15,"h1"),s(16,"Closable pannel with footer"),r(),i(17,"p"),s(18,"the directive adds a close emitter, so you can react on close."),r()()),n&2&&(S(12),b("footer",I(13,1,B(14,4,a.time$),"HH:mm:ss")))},dependencies:[m,k,D,R,j],encapsulation:2})})(),o})();export{$ as PannelStuffComponent};
