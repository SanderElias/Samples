import{a as te}from"./chunk-QHB5QIAT.js";import{a as ee}from"./chunk-CXEYGQD6.js";import{i as X,k as Z}from"./chunk-4XL46QIM.js";import{B as _,C as G,G as U,Ha as q,Hb as Q,Jb as L,Kb as I,L as j,T as z,Ta as H,V as w,Xa as y,db as J,f as R,fa as E,fb as v,gb as s,h as N,ha as D,hb as m,i as $,ib as A,mb as Y,o as h,pb as d,qa as K,qb as F,ra as V,ub as W,vb as f,w as B}from"./chunk-ZWPQDWQV.js";import{e as O,f as M,g as k}from"./chunk-G5KKTNWD.js";function ne(p,l){if(p&1){let r=Y();s(0,"article",2),d("click",function(){let e=K(r).index,n=F();return V(n.switch(e))}),A(1,"img",5),m()}if(p&2){let r=l.$implicit,o=l.index,P=F();W("large",P.largePositions[o]===1)("super",P.largePositions[o]===2),y(1),v("src",r.images[0]==null?null:r.images[0].link,q)}}var ie="e972ca06cc4b961",pe=(()=>{var l,r;let o=class{constructor(){M(this,l,void 0);M(this,r,void 0);k(this,l,E(ee)),k(this,r,E(H).nativeElement),this.largePositions=this.allRandom(),this.searchKey$=new R("kitten"),this.results$=this.searchKey$.pipe(_(e=>!!e),w(e=>O(this,l).get(`https://api.imgur.com/3/gallery/t/${e}`,{headers:{Authorization:`Client-ID ${ie}`}}).pipe(G(n=>N))),h(e=>e?.data?.items),_(e=>!!e),h(e=>e.filter(n=>[a.ImageJPEG,a.ImagePNG].includes(n.images&&n.images[0].type))),z(1))}allTo(e){this.largePositions=this.largePositions.map(()=>e)}allRandom(){return this.largePositions=Array.from({length:250},()=>{let e=Math.random();return e<.2?1:e>.8?2:0})}switch(e){this.largePositions[e]+=1,this.largePositions[e]>2&&(this.largePositions[e]=0)}ngOnInit(){let e=O(this,r);if(e){let n=e.getElementsByTagName("input")[0];$(import("./main.module-5JV3JPN4.js")).pipe(h(({wrapGrid:i})=>i(e.querySelector("#grid"))),w(()=>B(n,"input")),h(i=>i.target.value),U(400),j(),_(i=>i.length>0),te()).subscribe(this.searchKey$)}}},p=o;return l=new WeakMap,r=new WeakMap,(()=>{o.\u0275fac=function(n){return new(n||o)}})(),(()=>{o.\u0275cmp=D({type:o,selectors:[["app-tumblr"]],standalone:!0,features:[Q],decls:14,vars:6,consts:[[1,"tools"],["type","search",3,"value"],[3,"click"],["id","grid"],[3,"large","super","click",4,"ngFor","ngForOf"],["loading","lazy",3,"src"]],template:function(n,i){n&1&&(s(0,"div",0),A(1,"input",1),L(2,"async"),s(3,"button",2),d("click",function(){return i.allTo(0)}),f(4,"all small"),m(),s(5,"button",2),d("click",function(){return i.allTo(1)}),f(6,"all med"),m(),s(7,"button",2),d("click",function(){return i.allTo(2)}),f(8,"all large"),m(),s(9,"button",2),d("click",function(){return i.allRandom()}),f(10,"all random"),m()(),s(11,"div",3),J(12,ne,2,5,"article",4),L(13,"async"),m()),n&2&&(y(1),v("value",I(2,2,i.searchKey$)),y(11),v("ngForOf",I(13,4,i.results$)))},dependencies:[X,Z],styles:[`root[_ngcontent-%COMP%] {
    --image-nth: 3;
  }
  [_nghost-%COMP%] {
    display: block;
    height: 100%;
  }
  #grid[_ngcontent-%COMP%] {
    display: grid;
    height: 87vh;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    grid-auto-flow: dense;
    overflow-x: auto;
    gap: 4px;
  }

  .large[_ngcontent-%COMP%] {
    grid-column: span 2;
    grid-row: span 2;
  }
  .super[_ngcontent-%COMP%] {
    grid-column: span 4;
    grid-row: span 4;
  }

  img[_ngcontent-%COMP%] {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tools[_ngcontent-%COMP%] {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
  }`]})})(),p})();var c=(()=>(c=c||{},c.Album="album",c.Gallery="gallery",c.InGallery="in_gallery",c.SixthModSafe="sixth_mod_safe",c))(),u=(()=>(u=u||{},u.OnsfwModUnsafe="onsfw_mod_unsafe",u.SixthModUnsafe="sixth_mod_unsafe",u.Under10="under_10",u))(),T=(()=>(T=T||{},T.Completed="completed",T))(),a=(()=>(a=a||{},a.ImageGIF="image/gif",a.ImageJPEG="image/jpeg",a.ImagePNG="image/png",a.VideoMp4="video/mp4",a))(),b=(()=>(b=b||{},b.Blog="blog",b))(),x=(()=>(x=x||{},x.Hidden="hidden",x))(),g=(()=>(g=g||{},g.Empty="",g.Oddlysatisfying="oddlysatisfying",g.Test="test",g))(),C=(()=>(C=C||{},C.NoTopic="No Topic",C))(),t=(()=>(t=t||{},t.April112020="April 11 2020",t.BrushesLinesColor="brushes, lines, color",t.CreativeCreations="creative creations",t.CuteAndAdorable="cute and adorable",t.Empty="",t.FelineFriends="feline friends",t.FoodAndRecipes="food and recipes",t.HumanSBestFriend="human's best friend",t.LOLsROFLsLMAOS="LOLs, ROFLs, LMAOs",t.LightRoastOrDark="light roast or dark?",t.MotorheadsUnite="Motorheads unite!",t.NeatAndAmazing="neat and amazing",t.ThatSNoMooOhWaitYepThatSAMoon="That's no moo- oh, wait. Yep, that's a moon.",t.VideosWithSound="videos with sound",t))();export{t as Description,b as Layout,x as Privacy,c as SafeFlag,g as Section,T as Status,C as Topic,pe as TumblrComponent,a as Type,u as UnsafeFlag};
