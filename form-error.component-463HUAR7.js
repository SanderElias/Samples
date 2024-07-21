import{b as D,d as P,e as W,g as u,j,k as A,l as O,t as q,u as B,v as I,w as L,y as T}from"./chunk-IHVCJKVN.js";import{k as N,m as c}from"./chunk-IN7EUNJS.js";import{Aa as b,Cb as x,Hb as F,Ib as V,Nb as v,Ob as a,Qb as y,Tb as C,Ub as w,Vb as M,Wa as l,Xb as p,Zb as S,_b as E,fa as f,ha as d,nb as _,sa as g,ta as h,wb as e,xb as t}from"./chunk-BFR4IEYA.js";import"./chunk-KAT7YFEL.js";var G=["*"],k=(()=>{class i{#t=f(u);#e=f(b).nativeElement;#n=this.#t.form.statusChanges.subscribe({next:()=>{let m=this.#t.form,n=this.#e.parentElement?.querySelector("[name]")?.name,o=m.get(n);if(o==null){m.touched&&console.warn(`Field with name: "${n}" not found`);return}o?.pristine||(o?.errors!=null?this.#e.style.display="block":this.#e.style.display="none")}});ngOnDestroy(){this.#n.unsubscribe()}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=d({type:i,selectors:[["se-show-error"]],standalone:!0,features:[p],ngContentSelectors:G,decls:1,vars:0,template:function(r,n){r&1&&(F(),V(0))},dependencies:[c],styles:["[_nghost-%COMP%]{display:none;color:red}"]})}}return i})();var ne=(()=>{class i{constructor(){this.name="",this.age=0}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=d({type:i,selectors:[["se-form-error"]],standalone:!0,features:[p],decls:26,vars:9,consts:[["form","ngForm"],["type","text","name","name","required","","minlength","2",3,"ngModelChange","ngModel"],["type","number","name","age","min","10","max","130","required","",3,"ngModelChange","ngModel"],[3,"disabled"]],template:function(r,n){if(r&1){let o=x();e(0,"h1"),a(1,"Form with error shown"),t(),e(2,"form",null,0)(4,"label")(5,"span"),a(6,"Name"),t(),e(7,"input",1),M("ngModelChange",function(s){return g(o),w(n.name,s)||(n.name=s),h(s)}),t(),e(8,"se-show-error"),a(9,"Name is mandatory and at least 2 long"),t()(),e(10,"label")(11,"span"),a(12,"Age"),t(),e(13,"input",2),M("ngModelChange",function(s){return g(o),w(n.age,s)||(n.age=s),h(s)}),t(),e(14,"se-show-error"),a(15,"Age must be between 10 and 130"),t()(),e(16,"button",3),a(17,"Submit"),t()(),e(18,"pre")(19,"code"),a(20),S(21,"json"),t()(),e(22,"pre")(23,"code"),a(24),S(25,"json"),t()()}if(r&2){let o=v(3);l(7),C("ngModel",n.name),l(6),C("ngModel",n.age),l(3),_("disabled",o.status==="INVALID"),l(4),y("",E(21,5,o.value),`
`),l(4),y("",E(25,7,o.status),`
`)}},dependencies:[c,N,T,A,D,O,P,W,I,L,B,q,j,u,k],styles:["[_nghost-%COMP%]{display:block}",`form[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 5rem 20rem;

    & se-show-error {
      grid-column: 2/3;
    }

    & :has([ng-invalid]) span:after {
      content: '*';
      color: red;
    }
  }`]})}}return i})();export{ne as default};
