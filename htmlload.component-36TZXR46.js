import{$b as m,Ea as a,L as i,_b as l,ba as s,ga as n,l as r,wb as c,xc as d}from"./chunk-JAGZLAFF.js";import"./chunk-C6Q5SG76.js";var p=(()=>{class t{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(e).pipe(i(1e3))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var D=(()=>{class t{constructor(){this.html=n(p),this.elm=n(a).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{if(typeof document>"u")return;let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(e,u){e&1&&(l(0,"p"),d(1,"Loading"),m())},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:1})}}return t})();export{D as HtmlloadComponent};
