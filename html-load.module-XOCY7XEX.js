import{l as y}from"./chunk-YHXAY3DU.js";import{q as M}from"./chunk-JUPB3CFF.js";import{K as d,Qa as u,Wa as c,aa as a,ba as l,bb as h,cb as g,ia as f,j as s,ja as p,rb as v}from"./chunk-FSDOJMUS.js";import"./chunk-G5KKTNWD.js";var o=class{constructor(){}load(e){let t=`
    <h1> loaded from ${e}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return s(t).pipe(d(1e3))}},r=o;(()=>{o.\u0275fac=function(t){return new(t||o)}})(),(()=>{o.\u0275prov=a({token:o,factory:o.\u0275fac,providedIn:"root"})})();var n=class{constructor(e,t){this.html=e,this.elmRef=t,this.elm=this.elmRef.nativeElement}ngOnInit(){this.html.load("Some url provided").subscribe(e=>{let t=document.createRange().createContextualFragment(e);this.elm.innerHTML="",this.elm.appendChild(t)})}},m=n;(()=>{n.\u0275fac=function(t){return new(t||n)(c(r),c(u))}})(),(()=>{n.\u0275cmp=f({type:n,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(t,D){t&1&&(h(0,"p"),v(1,` Loading
`),g())},styles:["[_nghost-%COMP%]{display:block}"]})})();var j=[{path:"",component:m}],i=class{},x=i;(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275mod=p({type:i})})(),(()=>{i.\u0275inj=l({imports:[M,y.forChild(j)]})})();export{x as HtmlLoadModule};