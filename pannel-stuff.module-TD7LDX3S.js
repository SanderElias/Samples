import{l as B}from"./chunk-P3TXNOF4.js";import{n as O,o as H,q as L}from"./chunk-I27LS666.js";import{Gb as b,Hb as q,Ib as J,Jb as E,Ra as P,Va as F,Xa as y,bb as k,ca as u,cb as n,db as o,eb as D,ja as h,ka as g,la as C,mb as S,ob as N,p as I,pb as T,sb as r,z as R}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";var A=["*"],p=class{constructor(e){this.elmRef=e,this.shadowRoot=this.elmRef.nativeElement?.shadowRoot}},d=p;(()=>{p.\u0275fac=function(t){return new(t||p)(y(P))}})(),(()=>{p.\u0275cmp=h({type:p,selectors:[["app-pannel"]],ngContentSelectors:A,decls:5,vars:0,consts:[[1,"pannel"]],template:function(t,i){t&1&&(N(),n(0,"div",0),D(1,"header"),n(2,"main"),T(3),o(),D(4,"footer"),o())},styles:[`
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
`],encapsulation:3,changeDetection:0})})();var c=class{constructor(e){this.pannel=e,this.root=this.pannel.shadowRoot,this.close=new E}ngOnInit(){if(this.root){let e=this.root.querySelector(".pannel"),t=this.root.querySelector("main"),i=document.createElement("button"),f=()=>{e.style.display="none",this.close.emit(),i.removeEventListener("click",f)};i.id="closeButton",i.addEventListener("click",f),t.appendChild(i)}}},v=c;(()=>{c.\u0275fac=function(t){return new(t||c)(y(d,1))}})(),(()=>{c.\u0275dir=C({type:c,selectors:[["app-pannel","close",""]],outputs:{close:"close"}})})();var l=class{constructor(e){this.panel=e,this.root=this.panel.shadowRoot,this.footer=new E}set footerContent(e){if(typeof e=="string"){let t=this.root.querySelector("footer");t.innerText=e}}ngOnInit(){this.root&&this.root.querySelector(".pannel").classList.add("footer")}},x=l;(()=>{l.\u0275fac=function(t){return new(t||l)(y(d,1))}})(),(()=>{l.\u0275dir=C({type:l,selectors:[["app-pannel","footer",""]],inputs:{footerContent:["footer","footerContent"]},outputs:{footer:"footer"}})})();var m=class{constructor(){this.time$=R(1e3).pipe(I(()=>new Date))}ngOnInit(){}alert(e){alert(e)}},w=m;(()=>{m.\u0275fac=function(t){return new(t||m)}})(),(()=>{m.\u0275cmp=h({type:m,selectors:[["app-pannel-stuff"]],decls:19,vars:6,consts:[[3,"close"],[3,"footer","close"]],template:function(t,i){t&1&&(n(0,"h1"),r(1,"Pannel composition"),o(),n(2,"app-pannel")(3,"h1"),r(4,"Basic no frills pannel"),o(),n(5,"p"),r(6,"You might want to add some styling to the base pannel."),o()(),n(7,"app-pannel",0),S("close",function(){return i.alert("bye")}),n(8,"h1"),r(9,"Closable pannel"),o(),n(10,"p"),r(11,"the directive adds a close emitter, so you can react on close."),o()(),n(12,"app-pannel",1),S("close",function(){return i.alert("bye")}),b(13,"date"),b(14,"async"),n(15,"h1"),r(16,"Closable pannel with footer"),o(),n(17,"p"),r(18,"the directive adds a close emitter, so you can react on close."),o()()),t&2&&(F(12),k("footer",J(13,1,q(14,4,i.time$),"HH:mm:ss")))},dependencies:[d,v,x,O,H],encapsulation:2})})();var z=[{path:"",component:w}],s=class{},M=s;(()=>{s.\u0275fac=function(t){return new(t||s)}})(),(()=>{s.\u0275mod=g({type:s})})(),(()=>{s.\u0275inj=u({imports:[B.forChild(z),B]})})();var a=class{},$=a;(()=>{a.\u0275fac=function(t){return new(t||a)}})(),(()=>{a.\u0275mod=g({type:a})})(),(()=>{a.\u0275inj=u({imports:[L,M]})})();export{$ as PannelStuffModule};
