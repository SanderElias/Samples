import{a as V}from"./chunk-3NTL6VWE.js";import{a as A,b as H,c as z,d as Y}from"./chunk-KCC5TYCW.js";import"./chunk-KJKGJ6N4.js";import{$b as R,A as b,F as g,G as v,H as C,Ib as c,Jb as p,Lb as j,Mb as I,O as k,Ob as $,Rb as E,V as L,Ya as f,Z as s,_a as D,aa as x,ac as m,bc as T,cb as O,ga as n,j as d,l,lb as M,na as w,nb as P,o as u,oa as y,r as a,rb as S,rc as F,yb as _}from"./chunk-7PPZN5LC.js";import"./chunk-KAT7YFEL.js";var B=(()=>{class i{set seLet(e){this.assign(e)}set seLetObserve(e){this.assign(e)}set seLetOn(e){this.assign(e)}assign(e){this.sub&&this.sub.unsubscribe(),u(e)?this.sub=e.pipe(s(()=>this.cdr.markForCheck())).subscribe(t=>{this.context.$implicit=t,this.context.seLet=t}):(this.context.$implicit=e,this.context.seLet=e)}constructor(){this.templateRef=n(D),this.viewContainer=n(O),this.cdr=n(F),this.context={$implicit:void 0,seLet:void 0},this.assign=this.assign.bind(this)}ngOnInit(){this.viewContainer.createEmbeddedView(this.templateRef,this.context)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=P({type:i,selectors:[["","seLet",""]],inputs:{seLet:"seLet",seLetObserve:"seLetObserve",seLetOn:"seLetOn"}})}}return i})();var G=(()=>{class i{constructor(){this.http=n(V),this.base="https://pokeapi.co/api/v2"}async load(e){if(await A(),!z(e)){let t=await fetch(e).then(o=>o.json()).catch(o=>{});await H(e,t)}return Y(e)}init(){console.log("ps init"),this.load(this.base).then(e=>{console.log(e),l(Object.entries(e)).pipe(s(t=>console.log("url",t)),C(([t,o])=>this.getAllPagedData(o).pipe(g((r,h)=>r.concat(h.results),[]),a(r=>({name:t,baseUrl:o,data:r})))),v(),s(t=>console.log(t))).subscribe()})}getAllPagedData(e){return l(this.load(`${e}`)).pipe(k(t=>t.next?this.load(t.next):d))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function N(i,J){if(i&1&&(j(0),c(1,"h1"),m(2),p(),I()),i&2){let e=J.$implicit;f(2),T(e)}}var de=(()=>{class i{constructor(){this.pa=n(G),this.fakePost$=b(1500).pipe(s(()=>console.log("done")),a(()=>"hello world"),L({refCount:!0,bufferSize:1}))}ngOnInit(){console.log("pokeMain")}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-pokemain"]],decls:6,vars:1,consts:[["save",""],[3,"click"],[4,"seLet","seLetObserve"]],template:function(t,o){if(t&1){let r=$();c(0,"p"),m(1,"pokemain works!"),p(),c(2,"button",1,0),E("click",function(){w(r);let K=R(3);return y(K.goSave=!0)}),m(4,"Save"),p(),S(5,N,3,1,"ng-container",2)}t&2&&(f(5),_("seLetObserve",o.fakePost$))},dependencies:[B],encapsulation:2})}}return i})();export{de as PokeMainComponent};