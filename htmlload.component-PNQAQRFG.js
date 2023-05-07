import{$ as l,Eb as p,K as a,Sa as s,Ya as i,db as d,eb as m,ha as c,j as r,sb as f}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";var u=(()=>{let e=class{constructor(){}load(o){let t=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(t).pipe(a(1e3))}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)}})(),(()=>{e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})})(),n})();var I=(()=>{let e=class{constructor(o,t){this.html=o,this.elmRef=t,this.elm=this.elmRef.nativeElement}ngOnInit(){this.html.load("Some url provided").subscribe(o=>{let t=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(t)})}},n=e;return(()=>{e.\u0275fac=function(t){return new(t||e)(i(u),i(s))}})(),(()=>{e.\u0275cmp=c({type:e,selectors:[["app-htmlload"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,g){t&1&&(d(0,"p"),f(1,` Loading
`),m())},styles:["[_nghost-%COMP%]{display:block}"]})})(),n})();export{I as HtmlloadComponent};
