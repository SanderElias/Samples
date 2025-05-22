import{K as i,Mb as c,Nb as m,_ as s,da as n,fc as d,l as r,lb as a,za as l}from"./chunk-WBYBMP4K.js";import"./chunk-DAQOROHW.js";var p=(()=>{class t{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(e).pipe(i(1e3))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var x=(()=>{class t{constructor(){this.html=n(p),this.elm=n(l).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{if(typeof document>"u")return;let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(e,u){e&1&&(c(0,"p"),d(1,"Loading"),m())},styles:["[_nghost-%COMP%]{display:block}"]})}}return t})();export{x as HtmlloadComponent};
