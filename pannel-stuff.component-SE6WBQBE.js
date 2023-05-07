import{k as I,l as M}from"./chunk-GR2PXCGU.js";import{Eb as d,Gb as g,Hb as C,Ib as B,Jb as y,Sa as w,Wa as S,Ya as c,cb as b,db as i,eb as r,fb as u,ha as p,ja as m,mb as h,o as v,ob as E,pb as D,sb as s,y as x}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";var F=["*"],f=(()=>{let e=class{constructor(t){this.elmRef=t,this.shadowRoot=this.elmRef.nativeElement?.shadowRoot}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(w))}})(),(()=>{e.\u0275cmp=p({type:e,selectors:[["app-pannel"]],standalone:!0,features:[d],ngContentSelectors:F,decls:5,vars:0,consts:[[1,"pannel"]],template:function(n,a){n&1&&(E(),i(0,"div",0),u(1,"header"),i(2,"main"),D(3),r(),u(4,"footer"),r())},styles:[`
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
`],encapsulation:3,changeDetection:0})})(),o})();var R=(()=>{let e=class{constructor(t){this.pannel=t,this.root=this.pannel.shadowRoot,this.close=new y}ngOnInit(){if(this.root){let t=this.root.querySelector(".pannel"),n=this.root.querySelector("main"),a=document.createElement("button"),l=()=>{t.style.display="none",this.close.emit(),a.removeEventListener("click",l)};a.id="closeButton",a.addEventListener("click",l),n.appendChild(a)}}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(f,1))}})(),(()=>{e.\u0275dir=m({type:e,selectors:[["app-pannel","close",""]],outputs:{close:"close"},standalone:!0})})(),o})();var j=(()=>{let e=class{set footerContent(t){if(typeof t=="string"){let n=this.root.querySelector("footer");n.innerText=t}}constructor(t){this.panel=t,this.root=this.panel.shadowRoot,this.footer=new y}ngOnInit(){this.root&&this.root.querySelector(".pannel").classList.add("footer")}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)(c(f,1))}})(),(()=>{e.\u0275dir=m({type:e,selectors:[["app-pannel","footer",""]],inputs:{footerContent:["footer","footerContent"]},outputs:{footer:"footer"},standalone:!0})})(),o})();var J=(()=>{let e=class{constructor(){this.time$=x(1e3).pipe(v(()=>new Date))}ngOnInit(){}alert(t){alert(t)}},o=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=p({type:e,selectors:[["app-pannel-stuff"]],standalone:!0,features:[d],decls:19,vars:6,consts:[[3,"close"],[3,"footer","close"]],template:function(n,a){n&1&&(i(0,"h1"),s(1,"Pannel composition"),r(),i(2,"app-pannel")(3,"h1"),s(4,"Basic no frills pannel"),r(),i(5,"p"),s(6,"You might want to add some styling to the base pannel."),r()(),i(7,"app-pannel",0),h("close",function(){return a.alert("bye")}),i(8,"h1"),s(9,"Closable pannel"),r(),i(10,"p"),s(11,"the directive adds a close emitter, so you can react on close."),r()(),i(12,"app-pannel",1),h("close",function(){return a.alert("bye")}),g(13,"date"),g(14,"async"),i(15,"h1"),s(16,"Closable pannel with footer"),r(),i(17,"p"),s(18,"the directive adds a close emitter, so you can react on close."),r()()),n&2&&(S(12),b("footer",B(13,1,C(14,4,a.time$),"HH:mm:ss")))},dependencies:[f,R,j,I,M],encapsulation:2})})(),o})();export{J as PannelStuffComponent};
