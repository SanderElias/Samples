import{$ as s,Ca as l,M as i,Sb as a,Tb as c,ea as n,kb as m,l as r,pc as d}from"./chunk-JMJSAENN.js";import"./chunk-DAQOROHW.js";var p=(()=>{class t{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(e).pipe(i(1e3))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var x=(()=>{class t{constructor(){this.html=n(p),this.elm=n(l).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{if(typeof document>"u")return;let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(e,u){e&1&&(a(0,"p"),d(1,"Loading"),c())},styles:["[_nghost-%COMP%]{display:block}"]})}}return t})();export{x as HtmlloadComponent};
