import{$ as a,Ib as u,K as s,Ta as c,fa as n,ha as l,hb as m,ib as p,j as i,wb as d}from"./chunk-IWWGYS2Z.js";import"./chunk-G5KKTNWD.js";var f=(()=>{let t=class{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return i(e).pipe(s(1e3))}},r=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})})(),r})();var F=(()=>{let t=class{constructor(){this.html=n(f),this.elm=n(c).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}},r=t;return(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275cmp=l({type:t,selectors:[["app-htmlload"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,y){e&1&&(m(0,"p"),d(1,` Loading
`),p())},styles:["[_nghost-%COMP%]{display:block}"]})})(),r})();export{F as HtmlloadComponent};
