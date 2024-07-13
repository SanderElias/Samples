import{$ as a,Aa as l,L as i,Ob as d,Xb as p,fa as n,ha as s,l as r,wb as c,xb as m}from"./chunk-XM75YRED.js";import"./chunk-KAT7YFEL.js";var f=(()=>{class t{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(e).pipe(i(1e3))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var S=(()=>{class t{constructor(){this.html=n(f),this.elm=n(l).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{if(typeof document>"u")return;let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-htmlload"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,h){e&1&&(c(0,"p"),d(1,"Loading"),m())},styles:["[_nghost-%COMP%]{display:block}"]})}}return t})();export{S as HtmlloadComponent};
