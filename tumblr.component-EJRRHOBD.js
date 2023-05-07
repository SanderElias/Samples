import{a as Y}from"./chunk-RPS3TBGS.js";import{i as H,k as J}from"./chunk-GR2PXCGU.js";import{B as g,C as I,Eb as q,G as L,Ga as j,Gb as w,Hb as T,L as k,R as N,Sa as D,T as $,V as P,Wa as u,Ya as M,ab as U,cb as h,db as f,eb as y,f as b,fb as O,h as A,ha as B,i as E,jb as z,mb as K,nb as S,o as m,pa as G,qa as R,rb as V,w as F}from"./chunk-X5MK5QQ4.js";import"./chunk-G5KKTNWD.js";function W(s,r){if(s&1){let d=z();f(0,"article",3),K("click",function(){let e=G(d).index,c=S();return R(c.switch(e))}),O(1,"img",4),y()}if(s&2){let d=r.$implicit,t=r.index,n=S();V("large",n.largePositions[t]===1)("super",n.largePositions[t]===2),u(1),h("src",d.images[0]==null?null:d.images[0].link,j)}}var Q="e972ca06cc4b961",ne=(()=>{let r=class{constructor(t,n){this.http=t,this.ref=n,this.largePositions=Array.from({length:250},()=>Math.random()<.2?1:0),this.searchKey$=new b("kitten"),this.results$=this.searchKey$.pipe(g(e=>!!e),P(e=>this.http.get(`https://api.imgur.com/3/gallery/t/${e}`,{headers:{Authorization:`Client-ID ${Q}`}}).pipe(I(c=>A))),N("data","items"),g(e=>!!e),m(e=>e.filter(c=>[o.ImageJPEG,o.ImagePNG].includes(c.images&&c.images[0].type))),$(1))}setSearch(t){console.log(t)}switch(t){this.largePositions[t]+=1,this.largePositions[t]>2&&(this.largePositions[t]=0)}ngOnInit(){let t=this.ref.nativeElement;if(t){let n=t.getElementsByTagName("input")[0];E(import("./main.module-5JV3JPN4.js")).pipe(m(({wrapGrid:e})=>e(t.querySelector("#grid"))),P(()=>F(n,"input")),m(e=>e.target.value),L(400),k(),g(e=>e.length>0)).subscribe(this.searchKey$)}}},s=r;return(()=>{r.\u0275fac=function(n){return new(n||r)(M(Y),M(D))}})(),(()=>{r.\u0275cmp=B({type:r,selectors:[["app-tumblr"]],standalone:!0,features:[q],decls:6,vars:6,consts:[["type","search",3,"value"],["id","grid"],[3,"large","super","click",4,"ngFor","ngForOf"],[3,"click"],["loading","lazy",3,"src"]],template:function(n,e){n&1&&(f(0,"div"),O(1,"input",0),w(2,"async"),y(),f(3,"div",1),U(4,W,2,5,"article",2),w(5,"async"),y()),n&2&&(u(1),h("value",T(2,2,e.searchKey$)),u(3),h("ngForOf",T(5,4,e.results$)))},dependencies:[H,J],styles:[`root[_ngcontent-%COMP%] {
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
  }`]})})(),s})();var a=(()=>(a=a||{},a.Album="album",a.Gallery="gallery",a.InGallery="in_gallery",a.SixthModSafe="sixth_mod_safe",a))(),l=(()=>(l=l||{},l.OnsfwModUnsafe="onsfw_mod_unsafe",l.SixthModUnsafe="sixth_mod_unsafe",l.Under10="under_10",l))(),v=(()=>(v=v||{},v.Completed="completed",v))(),o=(()=>(o=o||{},o.ImageGIF="image/gif",o.ImageJPEG="image/jpeg",o.ImagePNG="image/png",o.VideoMp4="video/mp4",o))(),_=(()=>(_=_||{},_.Blog="blog",_))(),x=(()=>(x=x||{},x.Hidden="hidden",x))(),p=(()=>(p=p||{},p.Empty="",p.Oddlysatisfying="oddlysatisfying",p.Test="test",p))(),C=(()=>(C=C||{},C.NoTopic="No Topic",C))(),i=(()=>(i=i||{},i.April112020="April 11 2020",i.BrushesLinesColor="brushes, lines, color",i.CreativeCreations="creative creations",i.CuteAndAdorable="cute and adorable",i.Empty="",i.FelineFriends="feline friends",i.FoodAndRecipes="food and recipes",i.HumanSBestFriend="human's best friend",i.LOLsROFLsLMAOS="LOLs, ROFLs, LMAOs",i.LightRoastOrDark="light roast or dark?",i.MotorheadsUnite="Motorheads unite!",i.NeatAndAmazing="neat and amazing",i.ThatSNoMooOhWaitYepThatSAMoon="That's no moo- oh, wait. Yep, that's a moon.",i.VideosWithSound="videos with sound",i))();export{i as Description,_ as Layout,x as Privacy,a as SafeFlag,p as Section,v as Status,C as Topic,ne as TumblrComponent,o as Type,l as UnsafeFlag};
