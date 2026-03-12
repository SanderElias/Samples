import{Bb as l,Cc as d,Ka as a,L as i,ba as s,dc as m,ec as c,ga as n,l as r}from"./chunk-4DYKPJVH.js";import"./chunk-C6Q5SG76.js";var p=(()=>{class t{constructor(){}load(o){let e=`
    <h1> loaded from ${o}</h1>
    <div id="start"></div>
    <script>
       document.querySelector('#start').innerText='hello world';
       console.log('Hello from inner page')
    <\/script>

    `;return r(e).pipe(i(1e3))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var E=(()=>{class t{constructor(){this.html=n(p),this.elm=n(a).nativeElement,this.sub=this.html.load("Some url provided").subscribe(o=>{if(typeof document>"u")return;let e=document.createRange().createContextualFragment(o);this.elm.innerHTML="",this.elm.appendChild(e)})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-htmlload"]],decls:2,vars:0,template:function(e,u){e&1&&(m(0,"p"),d(1,"Loading"),c())},styles:["[_nghost-%COMP%]{display:block}"]})}}return t})();export{E as HtmlloadComponent};
