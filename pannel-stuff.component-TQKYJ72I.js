import{i as P,j as B}from"./chunk-IN7EUNJS.js";import{$b as D,A as v,Aa as x,Ca as m,Fb as h,Hb as C,Ib as b,Ob as a,Wa as w,Xa as p,Xb as c,Zb as y,_b as E,ha as l,ja as f,nb as S,q as g,wb as o,xb as i,yb as u}from"./chunk-BFR4IEYA.js";import"./chunk-KAT7YFEL.js";var R=["*"],d=(()=>{class e{constructor(t){this.elmRef=t,this.shadowRoot=this.elmRef.nativeElement?.shadowRoot}static{this.\u0275fac=function(n){return new(n||e)(p(x))}}static{this.\u0275cmp=l({type:e,selectors:[["app-pannel"]],standalone:!0,features:[c],ngContentSelectors:R,decls:5,vars:0,consts:[[1,"pannel"]],template:function(n,r){n&1&&(C(),o(0,"div",0),u(1,"header"),o(2,"main"),b(3),i(),u(4,"footer"),i())},styles:[`
  .pannel {
    display: grid;
    grid-template-rows: 0 1fr 0;
    position: relative;
    width: 40vw;
    background-color: dimgray;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
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

  .pannel.header > header,
  .pannel.footer > footer {
    border-top: 1px solid white;
    display: grid;
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
  #closeButton:before,
  #closeButton:after {
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
`],encapsulation:3,changeDetection:0})}}return e})(),_=(()=>{class e{constructor(t){this.pannel=t,this.root=this.pannel.shadowRoot,this.close=new m}ngOnInit(){if(!(typeof document>"u")&&this.root){let t=this.root.querySelector(".pannel"),n=this.root.querySelector("main"),r=document.createElement("button"),s=()=>{t.style.display="none",this.close.emit(),r.removeEventListener("click",s)};r.id="closeButton",r.addEventListener("click",s),n.appendChild(r)}}static{this.\u0275fac=function(n){return new(n||e)(p(d,1))}}static{this.\u0275dir=f({type:e,selectors:[["app-pannel","close",""]],outputs:{close:"close"},standalone:!0})}}return e})(),F=(()=>{class e{set footerContent(t){if(typeof t=="string"){if(typeof document>"u")return;let n=this.root.querySelector("footer");n.innerText=t}}constructor(t){this.panel=t,this.root=this.panel.shadowRoot,this.footer=new m}ngOnInit(){typeof document>"u"||this.root&&this.root.querySelector(".pannel").classList.add("footer")}static{this.\u0275fac=function(n){return new(n||e)(p(d,1))}}static{this.\u0275dir=f({type:e,selectors:[["app-pannel","footer",""]],inputs:{footerContent:[0,"footer","footerContent"]},outputs:{footer:"footer"},standalone:!0})}}return e})();var G=(()=>{class e{constructor(){this.time$=v(1e3).pipe(g(()=>new Date))}ngOnInit(){}alert(t){alert(t)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-pannel-stuff"]],standalone:!0,features:[c],decls:19,vars:6,consts:[[3,"close"],[3,"close","footer"]],template:function(n,r){n&1&&(o(0,"h1"),a(1,"Pannel composition"),i(),o(2,"app-pannel")(3,"h1"),a(4,"Basic no frills pannel"),i(),o(5,"p"),a(6,"You might want to add some styling to the base pannel."),i()(),o(7,"app-pannel",0),h("close",function(){return r.alert("bye")}),o(8,"h1"),a(9,"Closable pannel"),i(),o(10,"p"),a(11,"the directive adds a close emitter, so you can react on close."),i()(),o(12,"app-pannel",1),y(13,"async"),y(14,"date"),h("close",function(){return r.alert("bye")}),o(15,"h1"),a(16,"Closable pannel with footer"),i(),o(17,"p"),a(18,"the directive adds a close emitter, so you can react on close."),i()()),n&2&&(w(12),S("footer",D(14,3,E(13,1,r.time$),"HH:mm:ss")))},dependencies:[d,_,F,P,B],encapsulation:2})}}return e})();export{G as PannelStuffComponent};
