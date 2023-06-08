import{Gb as f,K as a,Sa as c,Za as o,_ as l,fb as m,ga as s,gb as d,j as n,ub as p}from"./chunk-VWKE6EEO.js";import"./chunk-G5KKTNWD.js";var h=(()=>{let t=class{constructor(){}load(i){let e=`
    <h1> loaded from ${i}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return n(e).pipe(a(1e3))}},r=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})})(),r})();var I=(()=>{let t=class{constructor(i,e){this.html=i,this.elmRef=e,this.elm=this.elmRef.nativeElement}ngOnInit(){this.html.load("Some url provided").subscribe(i=>{let e=document.createRange().createContextualFragment(i);this.elm.innerHTML="",this.elm.appendChild(e)})}},r=t;return(()=>{t.\u0275fac=function(e){return new(e||t)(o(h),o(c))}})(),(()=>{t.\u0275cmp=s({type:t,selectors:[["app-htmlload"]],standalone:!0,features:[f],decls:2,vars:0,template:function(e,g){e&1&&(m(0,"p"),p(1,` Loading
`),d())},styles:["[_nghost-%COMP%]{display:block}"]})})(),r})();export{I as HtmlloadComponent};
