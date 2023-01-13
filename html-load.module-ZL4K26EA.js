import{l as y}from"./chunk-P3TXNOF4.js";import{q as M}from"./chunk-I27LS666.js";import{L as d,Ra as u,Xa as c,ba as a,ca as l,cb as h,db as g,ja as p,k as s,ka as f,sb as v}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";var o=class{constructor(){}load(e){let t=`
    <h1> loaded from ${e}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return s(t).pipe(d(1e3))}},r=o;(()=>{o.\u0275fac=function(t){return new(t||o)}})(),(()=>{o.\u0275prov=a({token:o,factory:o.\u0275fac,providedIn:"root"})})();var n=class{constructor(e,t){this.html=e,this.elmRef=t,this.elm=this.elmRef.nativeElement}ngOnInit(){this.html.load("Some url provided").subscribe(e=>{let t=document.createRange().createContextualFragment(e);this.elm.innerHTML="",this.elm.appendChild(t)})}},m=n;(()=>{n.\u0275fac=function(t){return new(t||n)(c(r),c(u))}})(),(()=>{n.\u0275cmp=p({type:n,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(t,D){t&1&&(h(0,"p"),v(1,` Loading
`),g())},styles:["[_nghost-%COMP%]{display:block}"]})})();var j=[{path:"",component:m}],i=class{},x=i;(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275mod=f({type:i})})(),(()=>{i.\u0275inj=l({imports:[M,y.forChild(j)]})})();export{x as HtmlLoadModule,j as routes};
