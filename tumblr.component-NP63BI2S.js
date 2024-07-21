import{a as z}from"./chunk-WGEFQRCY.js";import{a as V}from"./chunk-5YM77BOM.js";import{i as F}from"./chunk-IN7EUNJS.js";import{Aa as $,C as u,Cb as G,D as M,Fb as l,Gb as _,H as O,M as k,Ob as m,Ta as I,U as w,W as p,Wa as d,Xb as j,Zb as y,_b as v,fa as g,g as C,ha as E,i as x,k as T,nb as h,pb as L,q as s,sa as A,ta as S,tb as R,ub as B,vb as N,wb as r,xb as o,y as P,yb as f}from"./chunk-BFR4IEYA.js";import"./chunk-KAT7YFEL.js";function K(e,b){if(e&1){let t=G();r(0,"article",2),l("click",function(){let n=A(t).$index,a=_();return S(a.switch(n))}),f(1,"img",5),o()}if(e&2){let t=b.$implicit,i=b.$index,n=_();L("large",n.largePositions[i]===1)("super",n.largePositions[i]===2),d(),h("src",t.images==null||t.images[0]==null?null:t.images[0].link,I)}}var U="e972ca06cc4b961",se=(()=>{class e{constructor(){this.#e=g(z),this.#t=g($).nativeElement,this.largePositions=this.allRandom(),this.searchKey$=new C("kitten"),this.results$=this.searchKey$.pipe(u(t=>!!t),p(t=>this.#e.get(`https://api.imgur.com/3/gallery/t/${t}`,{headers:{Authorization:`Client-ID ${U}`}}).pipe(M(i=>x))),s(t=>t?.data?.items),u(t=>!!t),s(t=>t.filter(i=>[c.ImageJPEG,c.ImagePNG].includes(i?.images?.[0].type||c.VideoMp4))),w(1))}#e;#t;allTo(t){this.largePositions=this.largePositions.map(()=>t)}allRandom(){return this.largePositions=Array.from({length:250},()=>{let t=Math.random();return t<.2?1:t>.8?2:0})}switch(t){this.largePositions[t]+=1,this.largePositions[t]>2&&(this.largePositions[t]=0)}ngOnInit(){let t=this.#t;if(!(typeof document>"u")&&t){let i=t.getElementsByTagName("input")[0];T(import("./main.module-H2JXWCUJ.js")).pipe(s(({wrapGrid:n})=>n(t.querySelector("#grid"))),p(()=>P(i,"input")),s(n=>n.target.value),O(400),k(),u(n=>n.length>0),V()).subscribe(this.searchKey$)}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=E({type:e,selectors:[["app-tumblr"]],standalone:!0,features:[j],decls:15,vars:5,consts:[[1,"tools"],["type","search",3,"value"],[3,"click"],["id","grid"],[3,"large","super"],["loading","lazy",3,"src"]],template:function(i,n){i&1&&(r(0,"div",0),f(1,"input",1),y(2,"async"),r(3,"button",2),l("click",function(){return n.allTo(0)}),m(4,"all small"),o(),r(5,"button",2),l("click",function(){return n.allTo(1)}),m(6,"all med"),o(),r(7,"button",2),l("click",function(){return n.allTo(2)}),m(8,"all large"),o(),r(9,"button",2),l("click",function(){return n.allRandom()}),m(10,"all random"),o()(),r(11,"div",3),B(12,K,2,5,"article",4,R),y(14,"async"),o()),i&2&&(d(),h("value",v(2,1,n.searchKey$)),d(11),N(v(14,3,n.results$)))},dependencies:[F],styles:[`root[_ngcontent-%COMP%] {
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
  }`]})}}return e})(),q=function(e){return e.Album="album",e.Gallery="gallery",e.InGallery="in_gallery",e.SixthModSafe="sixth_mod_safe",e}(q||{}),H=function(e){return e.OnsfwModUnsafe="onsfw_mod_unsafe",e.SixthModUnsafe="sixth_mod_unsafe",e.Under10="under_10",e}(H||{}),J=function(e){return e.Completed="completed",e}(J||{}),c=function(e){return e.ImageGIF="image/gif",e.ImageJPEG="image/jpeg",e.ImagePNG="image/png",e.VideoMp4="video/mp4",e}(c||{}),Y=function(e){return e.Blog="blog",e}(Y||{}),W=function(e){return e.Hidden="hidden",e}(W||{}),Q=function(e){return e.Empty="",e.Oddlysatisfying="oddlysatisfying",e.Test="test",e}(Q||{}),X=function(e){return e.NoTopic="No Topic",e}(X||{}),Z=function(e){return e.April112020="April 11 2020",e.BrushesLinesColor="brushes, lines, color",e.CreativeCreations="creative creations",e.CuteAndAdorable="cute and adorable",e.Empty="",e.FelineFriends="feline friends",e.FoodAndRecipes="food and recipes",e.HumanSBestFriend="human's best friend",e.LOLsROFLsLMAOS="LOLs, ROFLs, LMAOs",e.LightRoastOrDark="light roast or dark?",e.MotorheadsUnite="Motorheads unite!",e.NeatAndAmazing="neat and amazing",e.ThatSNoMooOhWaitYepThatSAMoon="That's no moo- oh, wait. Yep, that's a moon.",e.VideosWithSound="videos with sound",e}(Z||{});export{Z as Description,Y as Layout,W as Privacy,q as SafeFlag,Q as Section,J as Status,X as Topic,se as TumblrComponent,c as Type,H as UnsafeFlag};
