import{c as kt,d as er}from"./chunk-KAT7YFEL.js";var bt=kt(($n,yt)=>{"use strict";var gt="Expected a function",mt=NaN,fr="[object Symbol]",sr=/^\s+|\s+$/g,cr=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,vr=/^0o[0-7]+$/i,dr=parseInt,pr=typeof global=="object"&&global&&global.Object===Object&&global,mr=typeof self=="object"&&self&&self.Object===Object&&self,hr=pr||mr||Function("return this")(),gr=Object.prototype,yr=gr.toString,br=Math.max,wr=Math.min,Ve=function(){return hr.Date.now()};function xr(e,t,r){var n,a,i,o,f,s,u=0,v=!1,p=!1,y=!0;if(typeof e!="function")throw new TypeError(gt);t=ht(t)||0,ye(r)&&(v=!!r.leading,p="maxWait"in r,i=p?br(ht(r.maxWait)||0,t):i,y="trailing"in r?!!r.trailing:y);function x(c){var l=n,O=a;return n=a=void 0,u=c,o=e.apply(O,l),o}function P(c){return u=c,f=setTimeout(m,t),v?x(c):o}function E(c){var l=c-s,O=c-u,M=t-l;return p?wr(M,i-O):M}function h(c){var l=c-s,O=c-u;return s===void 0||l>=t||l<0||p&&O>=i}function m(){var c=Ve();if(h(c))return d(c);f=setTimeout(m,E(c))}function d(c){return f=void 0,y&&n?x(c):(n=a=void 0,o)}function b(){f!==void 0&&clearTimeout(f),u=0,n=s=a=f=void 0}function S(){return f===void 0?o:d(Ve())}function g(){var c=Ve(),l=h(c);if(n=arguments,a=this,s=c,l){if(f===void 0)return P(s);if(p)return f=setTimeout(m,t),x(s)}return f===void 0&&(f=setTimeout(m,t)),o}return g.cancel=b,g.flush=S,g}function Or(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(gt);return ye(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),xr(e,t,{leading:n,maxWait:t,trailing:a})}function ye(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Sr(e){return!!e&&typeof e=="object"}function Tr(e){return typeof e=="symbol"||Sr(e)&&yr.call(e)==fr}function ht(e){if(typeof e=="number")return e;if(Tr(e))return mt;if(ye(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ye(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(sr,"");var r=lr.test(e);return r||vr.test(e)?dr(e.slice(2),r?2:8):cr.test(e)?mt:+e}yt.exports=Or});var st=1.525,ee=function(e){return function(t){return 1-e(1-t)}},de=function(e){return function(t){return t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2}},ct=ee;var lt=function(e){return function(t){return Math.pow(t,e)}},Ee=function(e){return function(t){return t*t*((e+1)*t-e)}},vt=function(e){var t=Ee(e);return function(r){return(r*=2)<1?.5*t(r):.5*(2-Math.pow(2,-10*(r-1)))}},te=function(e){return e},re=lt(2),ne=ee(re),pe=de(re),me=function(e){return 1-Math.sin(Math.acos(e))},he=ee(me),Pe=de(he),ae=Ee(st),Ae=ee(ae),Ce=de(ae),Ie=vt(st),On=4/11,Sn=8/11,Tn=9/10,_n=4356/361,En=35442/1805,Pn=16061/1805;var tr=11,An=1/(tr-1);var Me=16.666666666666668,nr=typeof performance<"u"?()=>performance.now():()=>Date.now(),Re=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(nr()),Me);function dt(e){let t=[],r=[],n=0,a=!1,i=!1,o=new WeakSet,f={schedule:(s,u=!1,v=!1)=>{let p=v&&a,y=p?t:r;return u&&o.add(s),y.indexOf(s)===-1&&(y.push(s),p&&a&&(n=t.length)),s},cancel:s=>{let u=r.indexOf(s);u!==-1&&r.splice(u,1),o.delete(s)},process:s=>{if(a){i=!0;return}if(a=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let u=0;u<n;u++){let v=t[u];v(s),o.has(v)&&(f.schedule(v),e())}a=!1,i&&(i=!1,f.process(s))}};return f}var ar=40,Fe=!0,oe=!1,De=!1,ie={delta:0,timestamp:0},ue=["read","update","preRender","render","postRender"],ge=ue.reduce((e,t)=>(e[t]=dt(()=>oe=!0),e),{}),ir=ue.reduce((e,t)=>{let r=ge[t];return e[t]=(n,a=!1,i=!1)=>(oe||ur(),r.schedule(n,a,i)),e},{}),Fn=ue.reduce((e,t)=>(e[t]=ge[t].cancel,e),{}),Dn=ue.reduce((e,t)=>(e[t]=()=>ge[t].process(ie),e),{}),or=e=>ge[e].process(ie),pt=e=>{oe=!1,ie.delta=Fe?Me:Math.max(Math.min(e-ie.timestamp,ar),1),ie.timestamp=e,De=!0,ue.forEach(or),De=!1,oe&&(Fe=!1,Re(pt))},ur=()=>{oe=!0,Fe=!0,De||Re(pt)};var fe=ir;var ft=er(bt());var $e=function(e,t){return $e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a])},$e(e,t)};function wt(e,t){$e(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var I=function(){return I=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},I.apply(this,arguments)};function be(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function xt(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,f=i.length;o<f;o++,a++)n[a]=i[o];return n}var F=function(){return F=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},F.apply(this,arguments)};var St=function(e,t){return function(r){return Math.max(Math.min(r,t),e)}},se=function(e){return e%1?Number(e.toFixed(5)):e},je=/(-)?(\d[\d\.]*)/g,we=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Tt=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,w={test:function(e){return typeof e=="number"},parse:parseFloat,transform:function(e){return e}},Ue=F(F({},w),{transform:St(0,1)}),_r=F(F({},w),{default:1}),ce=function(e){return{test:function(t){return typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1},parse:parseFloat,transform:function(t){return""+t+e}}},Ge=ce("deg"),H=ce("%"),He=ce("px"),_t=ce("vh"),Et=ce("vw"),Er=F(F({},H),{parse:function(e){return H.parse(e)/100},transform:function(e){return H.transform(e*100)}}),Pr=function(e){return e.substring(e.indexOf("(")+1,e.lastIndexOf(")"))},Ar=St(0,255),Be=function(e){return e.red!==void 0},We=function(e){return e.hue!==void 0};function Cr(e){return Pr(e).replace(/(,|\/)/g," ").split(/ \s*/)}var Pt=function(e){return function(t){if(typeof t!="string")return t;for(var r={},n=Cr(t),a=0;a<4;a++)r[e[a]]=n[a]!==void 0?parseFloat(n[a]):1;return r}},Ir=function(e){var t=e.red,r=e.green,n=e.blue,a=e.alpha,i=a===void 0?1:a;return"rgba("+t+", "+r+", "+n+", "+i+")"},Mr=function(e){var t=e.hue,r=e.saturation,n=e.lightness,a=e.alpha,i=a===void 0?1:a;return"hsla("+t+", "+r+", "+n+", "+i+")"},Le=F(F({},w),{transform:function(e){return Math.round(Ar(e))}});function Ye(e,t){return e.startsWith(t)&&Tt.test(e)}var q={test:function(e){return typeof e=="string"?Ye(e,"rgb"):Be(e)},parse:Pt(["red","green","blue","alpha"]),transform:function(e){var t=e.red,r=e.green,n=e.blue,a=e.alpha,i=a===void 0?1:a;return Ir({red:Le.transform(t),green:Le.transform(r),blue:Le.transform(n),alpha:se(Ue.transform(i))})}},X={test:function(e){return typeof e=="string"?Ye(e,"hsl"):We(e)},parse:Pt(["hue","saturation","lightness","alpha"]),transform:function(e){var t=e.hue,r=e.saturation,n=e.lightness,a=e.alpha,i=a===void 0?1:a;return Mr({hue:Math.round(t),saturation:H.transform(se(r)),lightness:H.transform(se(n)),alpha:se(Ue.transform(i))})}},xe=F(F({},q),{test:function(e){return typeof e=="string"&&Ye(e,"#")},parse:function(e){var t="",r="",n="";return e.length>4?(t=e.substr(1,2),r=e.substr(3,2),n=e.substr(5,2)):(t=e.substr(1,1),r=e.substr(2,1),n=e.substr(3,1),t+=t,r+=r,n+=n),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:1}}}),Y={test:function(e){return typeof e=="string"&&Tt.test(e)||Be(e)||We(e)},parse:function(e){return q.test(e)?q.parse(e):X.test(e)?X.parse(e):xe.test(e)?xe.parse(e):e},transform:function(e){return Be(e)?q.transform(e):We(e)?X.transform(e):e}},Ne="${c}",Ot="${n}",Rr=function(e){return typeof e=="number"?0:e},z={test:function(e){if(typeof e!="string"||!isNaN(e))return!1;var t=0,r=e.match(je),n=e.match(we);return r&&(t+=r.length),n&&(t+=n.length),t>0},parse:function(e){var t=e,r=[],n=t.match(we);n&&(t=t.replace(we,Ne),r.push.apply(r,n.map(Y.parse)));var a=t.match(je);return a&&r.push.apply(r,a.map(w.parse)),r},createTransformer:function(e){var t=e,r=0,n=e.match(we),a=n?n.length:0;if(n)for(var i=0;i<a;i++)t=t.replace(n[i],Ne),r++;var o=t.match(je),f=o?o.length:0;if(o)for(var i=0;i<f;i++)t=t.replace(o[i],Ot),r++;return function(s){for(var u=t,v=0;v<r;v++)u=u.replace(v<a?Ne:Ot,v<a?Y.transform(s[v]):se(s[v]));return u}},getAnimatableNone:function(e){var t=z.parse(e),r=z.createTransformer(e);return r(t.map(Rr))}};var j=function(){};var ze=0,Un=typeof window<"u"&&window.requestAnimationFrame!==void 0?function(e){return window.requestAnimationFrame(e)}:function(e){var t=Date.now(),r=Math.max(0,16.7-(t-ze));ze=t+r,setTimeout(function(){return e(ze)},r)};var Gn=1/60*1e3;var Mt=function(e){return typeof e=="number"};var Xe=function(e){return function(t,r,n){return n!==void 0?e(t,r,n):function(a){return e(t,r,a)}}},Dr=function(e,t,r){return Math.min(Math.max(r,e),t)},Oe=Xe(Dr);var Rt=function(e,t,r){var n=t-e;return n===0?1:(r-e)/n},Z=function(e,t,r){return-r*e+r*t+e};var qe=function(){return qe=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},qe.apply(this,arguments)},Vr=function(e,t,r){var n=e*e,a=t*t;return Math.sqrt(Math.max(0,r*(a-n)+n))},$r=[xe,q,X],At=function(e){return $r.find(function(t){return t.test(e)})},Ct=function(e){return"'"+e+"' is not an animatable color. Use the equivalent color code instead."},Ze=function(e,t){var r=At(e),n=At(t);j(!!r,Ct(e)),j(!!n,Ct(t)),j(r.transform===n.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var a=r.parse(e),i=n.parse(t),o=qe({},a),f=r===X?Z:Vr;return function(s){for(var u in o)u!=="alpha"&&(o[u]=f(a[u],i[u],s));return o.alpha=Z(a.alpha,i.alpha,s),r.transform(o)}},jr=function(e,t){return function(r){return t(e(r))}},Ke=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(jr)};function Lr(e,t){return Mt(e)?function(r){return Z(e,t,r)}:Y.test(e)?Ze(e,t):Je(e,t)}var Ft=function(e,t){var r=e.slice(),n=r.length,a=e.map(function(i,o){return Lr(i,t[o])});return function(i){for(var o=0;o<n;o++)r[o]=a[o](i);return r}};function It(e){for(var t=z.parse(e),r=t.length,n=0,a=0,i=0,o=0;o<r;o++)n||typeof t[o]=="number"?n++:t[o].hue!==void 0?i++:a++;return{parsed:t,numNumbers:n,numRGB:a,numHSL:i}}var Je=function(e,t){var r=z.createTransformer(t),n=It(e),a=It(t);return j(n.numHSL===a.numHSL&&n.numRGB===a.numRGB&&n.numNumbers>=a.numNumbers,"Complex values '"+e+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),Ke(Ft(n.parsed,a.parsed),r)};var Nr=function(e){return e},Qe=function(e){return e===void 0&&(e=Nr),Xe(function(t,r,n){var a=r-n,i=-(0-t+1)*(0-e(Math.abs(a)));return a<=0?r+i:r-i})},Br=Qe(),Wr=Qe(Math.sqrt),Se=function(e,t){return Mt(e)?e/(1e3/t):0},ke=function(e,t){return t?e*(1e3/t):0},Ur=function(e,t,r){var n=t-e;return((r-e)%n+n)%n+e},Gr=Xe(Ur),pa=Oe(0,1);var et=0,Vt=typeof window<"u"&&window.requestAnimationFrame!==void 0?function(e){return window.requestAnimationFrame(e)}:function(e){var t=Date.now(),r=Math.max(0,16.7-(t-et));et=t+r,setTimeout(function(){return e(et)},r)},Hr=function(e){var t=[],r=[],n=0,a=!1,i=0,o=new WeakSet,f=new WeakSet,s={cancel:function(u){var v=r.indexOf(u);o.add(u),v!==-1&&r.splice(v,1)},process:function(u){var v;if(a=!0,v=[r,t],t=v[0],r=v[1],r.length=0,n=t.length,n){var p;for(i=0;i<n;i++)p=t[i],p(u),f.has(p)===!0&&!o.has(p)&&(s.schedule(p),e(!0))}a=!1},schedule:function(u,v,p){v===void 0&&(v=!1),p===void 0&&(p=!1),j(typeof u=="function","Argument must be a function");var y=p&&a,x=y?t:r;o.delete(u),v&&f.add(u),x.indexOf(u)===-1&&(x.push(u),y&&(n=t.length))}};return s},Yr=40,Dt=1/60*1e3,Te=!0,le=!1,tt=!1,K={delta:0,timestamp:0},_e=["read","update","preRender","render","postRender"],zr=function(e){return le=e},rt=_e.reduce(function(e,t){return e[t]=Hr(zr),e},{}),qr=_e.reduce(function(e,t){var r=rt[t];return e[t]=function(n,a,i){return a===void 0&&(a=!1),i===void 0&&(i=!1),le||Zr(),r.schedule(n,a,i),n},e},{}),N=_e.reduce(function(e,t){return e[t]=rt[t].cancel,e},{}),Xr=function(e){return rt[e].process(K)},$t=function(e){le=!1,K.delta=Te?Dt:Math.max(Math.min(e-K.timestamp,Yr),1),Te||(Dt=K.delta),K.timestamp=e,tt=!0,_e.forEach(Xr),tt=!1,le&&(Te=!1,Vt($t))},Zr=function(){le=!0,Te=!0,tt||Vt($t)},jt=function(){return K},B=qr;var nt=0,wa=typeof window<"u"&&window.requestAnimationFrame!==void 0?function(e){return window.requestAnimationFrame(e)}:function(e){var t=Date.now(),r=Math.max(0,16.7-(t-nt));nt=t+r,setTimeout(function(){return e(nt)},r)};var xa=1/60*1e3;var Kr=["Webkit","Moz","O","ms",""],Pa=Kr.length;var Qr=function(){function e(t){t===void 0&&(t={}),this.props=t}return e.prototype.applyMiddleware=function(t){return this.create(I(I({},this.props),{middleware:this.props.middleware?xt([t],this.props.middleware):[t]}))},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t.length===1?t[0]:Ke.apply(void 0,t);return this.applyMiddleware(function(a){return function(i){return a(n(i))}})},e.prototype.while=function(t){return this.applyMiddleware(function(r,n){return function(a){return t(a)?r(a):n()}})},e.prototype.filter=function(t){return this.applyMiddleware(function(r){return function(n){return t(n)&&r(n)}})},e}(),Lt=function(){function e(t,r){var n=this,a=t.middleware,i=t.onComplete;this.isActive=!0,this.update=function(o){n.observer.update&&n.updateObserver(o)},this.complete=function(){n.observer.complete&&n.isActive&&n.observer.complete(),n.onComplete&&n.onComplete(),n.isActive=!1},this.error=function(o){n.observer.error&&n.isActive&&n.observer.error(o),n.isActive=!1},this.observer=r,this.updateObserver=function(o){return r.update(o)},this.onComplete=i,r.update&&a&&a.length&&a.forEach(function(o){return n.updateObserver=o(n.updateObserver,n.complete)})}return e}(),kr=function(e,t,r){var n=t.middleware;return typeof e=="function"?new Lt({middleware:n,onComplete:r},{update:e}):new Lt({middleware:n,onComplete:r},e)},en=function(e){wt(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.create=function(r){return new t(r)},t.prototype.start=function(r){r===void 0&&(r={});var n=!1,a={stop:function(){}},i=this.props,o=i.init,f=be(i,["init"]),s=kr(r,f,function(){n=!0,a.stop()}),u=o(s);return a=u?I(I({},a),u):a,r.registerParent&&r.registerParent(a),n&&a.stop(),a},t}(Qr),U=function(e){return new en({init:e})};var Ht=function(e){var t=e.getCount,r=e.getFirst,n=e.getOutput,a=e.mapApi,i=e.setProp,o=e.startActions;return function(f){return U(function(s){var u=s.update,v=s.complete,p=s.error,y=t(f),x=n(),P=function(){return u(x)},E=0,h=o(f,function(m,d){var b=!1;return m.start({complete:function(){b||(b=!0,E++,E===y&&B.update(v))},error:p,update:function(S){i(x,d,S),B.update(P,!1,!0)}})});return Object.keys(r(h)).reduce(function(m,d){return m[d]=a(h,d),m},{})})}},tn=Ht({getOutput:function(){return{}},getCount:function(e){return Object.keys(e).length},getFirst:function(e){return e[Object.keys(e)[0]]},mapApi:function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return Object.keys(e).reduce(function(a,i){var o;return e[i][t]&&(r[0]&&r[0][i]!==void 0?a[i]=e[i][t](r[0][i]):a[i]=(o=e[i])[t].apply(o,r)),a},{})}},setProp:function(e,t,r){return e[t]=r},startActions:function(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=t(e[n],n),r},{})}}),rn=Ht({getOutput:function(){return[]},getCount:function(e){return e.length},getFirst:function(e){return e[0]},mapApi:function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.map(function(a,i){if(a[t])return Array.isArray(r[0])?a[t](r[0][i]):a[t].apply(a,r)})}},setProp:function(e,t,r){return e[t]=r},startActions:function(e,t){return e.map(function(r,n){return t(r,n)})}}),nn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return rn(e)},an=function(e){var t=Object.keys(e),r=function(i,o){return i!==void 0&&!e[o](i)},n=function(i){return t.reduce(function(o,f){return r(i[f],f)&&o.push(f),o},[])},a=function(i){return i&&t.some(function(o){return r(i[o],o)})};return{getVectorKeys:n,testVectorProps:a}},on=[He,H,Ge,_t,Et],at=function(e){return on.find(function(t){return t.test(e)})},un=function(e){return!!at(e)},Nt=function(e,t){return e(t)},fn=function(e){return function(t,r){return t[r]=t[r][e],t}},sn=function(e,t,r){var n=r[0],a=t[n].map(function(i,o){var f=r.reduce(fn(o),I({},t));return it(i)(e,f)});return nn.apply(void 0,a)},cn=function(e){return function(t,r){return t[r]=t[r][e],t}},ln=function(e,t,r){var n=r[0],a=Object.keys(t[n]).reduce(function(i,o){var f=r.reduce(cn(o),I({},t));return i[o]=it(t[n][o])(e,f),i},{});return tn(a)},vn=function(e,t){var r=t.from,n=t.to,a=be(t,["from","to"]),i=at(r)||at(n),o=i.transform,f=i.parse;return e(I(I({},a),{from:typeof r=="string"?f(r):r,to:typeof n=="string"?f(n):n})).pipe(o)},Yt=function(e){return function(t,r){var n=r.from,a=r.to,i=be(r,["from","to"]);return t(I(I({},i),{from:0,to:1})).pipe(e(n,a))}},dn=Yt(Ze),pn=Yt(Je),ve=function(e,t){var r=an(t),n=r.testVectorProps,a=r.getVectorKeys,i=function(o){var f=n(o);if(!f)return e(o);var s=a(o),u=s[0],v=o[u];return it(v)(e,o,s)};return i},it=function(e){return typeof e=="number"?Nt:Array.isArray(e)?sn:un(e)?vn:Y.test(e)?dn:z.test(e)?pn:typeof e=="object"?ln:Nt},zt=function(e){return e===void 0&&(e={}),U(function(t){var r=t.complete,n=t.update,a=e.velocity,i=a===void 0?0:a,o=e.from,f=o===void 0?0:o,s=e.power,u=s===void 0?.8:s,v=e.timeConstant,p=v===void 0?350:v,y=e.restDelta,x=y===void 0?.5:y,P=e.modifyTarget,E=0,h=u*i,m=f+h,d=typeof P>"u"?m:P(m);d!==m&&(h=d-f);var b=B.update(function(S){var g=S.delta;E+=g;var c=-h*Math.exp(-E/p),l=c>x||c<-x,O=l?d+c:d;n(O),l||(N.update(b),r())},!0);return{stop:function(){return N.update(b)}}})},Ka=ve(zt,{from:w.test,modifyTarget:function(e){return typeof e=="function"},velocity:w.test}),qt=function(e){return e===void 0&&(e={}),U(function(t){var r=t.update,n=t.complete,a=e.velocity,i=a===void 0?0:a,o=e.from,f=o===void 0?0:o,s=e.to,u=s===void 0?0:s,v=e.stiffness,p=v===void 0?100:v,y=e.damping,x=y===void 0?10:y,P=e.mass,E=P===void 0?1:P,h=e.restSpeed,m=h===void 0?.01:h,d=e.restDelta,b=d===void 0?.01:d,S=i?-(i/1e3):0,g=0,c=u-f,l=f,O=l,M=B.update(function(L){var V=L.delta;g+=V;var A=x/(2*Math.sqrt(p*E)),C=Math.sqrt(p/E)/1e3;if(O=l,A<1){var R=Math.exp(-A*C*g),T=C*Math.sqrt(1-A*A);l=u-R*((S+A*C*c)/T*Math.sin(T*g)+c*Math.cos(T*g))}else{var R=Math.exp(-C*g);l=u-R*(c+(S+C*c)*g)}i=ke(l-O,V);var $=Math.abs(i)<=m,_=Math.abs(u-l)<=b;$&&_?(l=u,r(l),N.update(M),n()):r(l)},!0);return{stop:function(){return N.update(M)}}})},Ja=ve(qt,{from:w.test,to:w.test,stiffness:w.test,damping:w.test,mass:w.test,velocity:w.test}),mn=function(e){var t=e.from,r=t===void 0?0:t,n=e.velocity,a=n===void 0?0:n,i=e.min,o=e.max,f=e.power,s=f===void 0?.8:f,u=e.timeConstant,v=u===void 0?700:u,p=e.bounceStiffness,y=p===void 0?500:p,x=e.bounceDamping,P=x===void 0?10:x,E=e.restDelta,h=E===void 0?1:E,m=e.modifyTarget;return U(function(d){var b=d.update,S=d.complete,g=r,c=r,l,O=function(_){return i!==void 0&&_<i||o!==void 0&&_>o},M=function(_){return Math.abs(i-_)<Math.abs(o-_)?i:o},L=function(_,G){l&&l.stop(),l=_.start({update:b,complete:function(){if(G){G();return}S()}})},V=function(_){L(qt(I(I({},_),{stiffness:y,damping:P,restDelta:h})))};if(O(r))V({from:r,velocity:a,to:M(r)});else{var A=s*a+r;typeof m<"u"&&(A=m(A),m=void 0,a=(A-r)/s);var C=zt({from:r,velocity:a,timeConstant:v,power:s,restDelta:h,modifyTarget:m}),R=void 0;if(O(A)){var T=M(A),$=T==i?-1:1;C=C.while(function(_){return g=c,a=ke(_-g,jt().delta),c=_,T-_*$>0}),R=function(){return V({from:c,to:T,velocity:a})}}L(C,R)}return{stop:function(){return l&&l.stop()}}})},Qa=ve(mn,{from:w.test,velocity:w.test,min:w.test,max:w.test,damping:w.test,stiffness:w.test,modifyTarget:function(e){return typeof e=="function"}});var hn=function(e){var t=e.from,r=t===void 0?0:t,n=e.to,a=n===void 0?1:n,i=e.ease,o=i===void 0?te:i,f=e.reverseEase,s=f===void 0?!1:f;return s&&(o=ct(o)),U(function(u){var v=u.update;return{seek:function(p){return v(p)}}}).pipe(o,function(u){return Z(r,a,u)})},Bt=ve(hn,{ease:function(e){return typeof e=="function"},from:w.test,to:w.test}),gn=Oe(0,1),Xt=function(e){return e===void 0&&(e={}),U(function(t){var r=t.update,n=t.complete,a=e.duration,i=a===void 0?300:a,o=e.ease,f=o===void 0?ne:o,s=e.flip,u=s===void 0?0:s,v=e.loop,p=v===void 0?0:v,y=e.yoyo,x=y===void 0?0:y,P=e.repeatDelay,E=P===void 0?0:P,h=e.from,m=h===void 0?0:h,d=e.to,b=d===void 0?1:d,S=e.elapsed,g=S===void 0?0:S,c=e.flipCount,l=c===void 0?0:c,O=e.yoyoCount,M=O===void 0?0:O,L=e.loopCount,V=L===void 0?0:L,A=Bt({from:m,to:b,ease:f}).start(r),C=0,R,T=!1,$=function(D){var k;D===void 0&&(D=!1),k=[b,m],m=k[0],b=k[1],A=Bt({from:m,to:b,ease:f,reverseEase:D}).start(r)},_=function(){var D=T&&g>i+E;return D?D&&!p&&!u&&!x?!0:(g=i-(g-E),p&&V<p?(V++,!1):u&&l<u?(l++,$(),!1):x&&M<x?(M++,$(M%2!==0),!1):!0):!1},G=function(){C=gn(Rt(0,i,g)),A.seek(C)},Q=function(){T=!0,R=B.update(function(D){var k=D.delta;g+=k,G(),_()&&(N.update(R),n&&B.update(n,!1,!0))},!0)},W=function(){T=!1,R&&N.update(R)};return Q(),{isActive:function(){return T},getElapsed:function(){return Oe(0,i,g)},getProgress:function(){return C},stop:function(){W()},pause:function(){return W(),this},resume:function(){return T||Q(),this},seek:function(D){return g=Z(0,i,D),B.update(G,!1,!0),this},reverse:function(){return $(),this}}})};var yn=function(e){return e===void 0&&(e={}),U(function(t){var r=t.complete,n=t.update,a=e.acceleration,i=a===void 0?0:a,o=e.friction,f=o===void 0?0:o,s=e.velocity,u=s===void 0?0:s,v=e.springStrength,p=e.to,y=e.restSpeed,x=y===void 0?.001:y,P=e.from,E=P===void 0?0:P,h=E,m=B.update(function(d){var b=d.delta,S=Math.max(b,16);if(i&&(u+=Se(i,S)),f&&(u*=Math.pow(1-f,S/100)),v!==void 0&&p!==void 0){var g=p-h;u+=g*Se(v,S)}h+=Se(u,S),n(h);var c=x!==!1&&(!u||Math.abs(u)<=x);c&&(N.update(m),r())},!0);return{set:function(d){return h=d,this},setAcceleration:function(d){return i=d,this},setFriction:function(d){return f=d,this},setSpringStrength:function(d){return v=d,this},setSpringTarget:function(d){return p=d,this},setVelocity:function(d){return u=d,this},stop:function(){return N.update(m)}}})},ka=ve(yn,{acceleration:w.test,friction:w.test,velocity:w.test,from:w.test,to:w.test,springStrength:w.test});var Zt=function(e,t,r){return U(function(n){var a=n.update,i=t.split(" ").map(function(o){return e.addEventListener(o,a,r),o});return{stop:function(){return i.forEach(function(o){return e.removeEventListener(o,a,r)})}}})},ot=function(){return{clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}},Kt=function(e,t){return t===void 0&&(t=ot()),t.clientX=t.x=e.clientX,t.clientY=t.y=e.clientY,t.pageX=e.pageX,t.pageY=e.pageY,t},Wt=[ot()],bn=!1;typeof document<"u"&&(Ut=function(e){var t=e.touches;bn=!0;var r=t.length;Wt.length=0;for(var n=0;n<r;n++){var a=t[n];Wt.push(Kt(a))}},Zt(document,"touchstart touchmove",{passive:!0,capture:!0}).start(Ut));var Ut;var wn=ot(),xn=!1;typeof document<"u"&&(Gt=function(e){xn=!0,Kt(e,wn)},Zt(document,"mousedown mousemove",!0).start(Gt));var Gt;var Jt={anticipate:Ie,backIn:ae,backInOut:Ce,backOut:Ae,circIn:me,circInOut:Pe,circOut:he,easeIn:re,easeInOut:pe,easeOut:ne,linear:te},J="animateGridId",ut=(e,t)=>{let{top:r,left:n,width:a,height:i}=t.getBoundingClientRect(),o={top:r,left:n,width:a,height:i};return o.top-=e.top,o.left-=e.left,o.top=Math.max(o.top,0),o.left=Math.max(o.left,0),o},Qt=(e,{translateX:t,translateY:r,scaleX:n,scaleY:a},{immediate:i}={})=>{let o=t===0&&r===0&&n===1&&a===1,f=()=>{e.style.transform=o?"":`translateX(${t}px) translateY(${r}px) scaleX(${n}) scaleY(${a})`};i?f():fe.render(f);let s=e.children[0];if(s){let u=()=>{s.style.transform=o?"":`scaleX(${1/n}) scaleY(${1/a})`};i?u():fe.render(u)}},ii=(e,{duration:t=250,stagger:r=0,easing:n="easeInOut",onStart:a=()=>{},onEnd:i=()=>{}}={})=>{if(!Jt[n])throw new Error(`${n} is not a valid easing name`);let o=!1,f=h=>{o=!0,h(),setTimeout(()=>{o=!1},0)},s={},u=h=>{let m=e.getBoundingClientRect();Array.from(h).forEach(d=>{if(typeof d.getBoundingClientRect!="function")return;if(!d.dataset[J]){let g=`${Math.random()}`;d.dataset[J]=g}let b=d.dataset[J];s[b]||(s[b]={});let S=ut(m,d);s[b].rect=S,s[b].gridBoundingClientRect=m})};u(e.children);let v=(0,ft.default)(()=>{let h=document.querySelector("body"),m=h&&!h.contains(e);(!e||m)&&window.removeEventListener("resize",v),u(e.children)},250);window.addEventListener("resize",v);let p=(0,ft.default)(()=>{u(e.children)},20);e.addEventListener("scroll",p);let y=h=>{if(h!=="forceGridAnimation"&&(!h.filter(l=>l.attributeName==="class"||l.addedNodes.length||l.removedNodes.length).length||o))return;let m=e.getBoundingClientRect(),d=Array.from(e.children);d.filter(c=>{let l=s[c.dataset[J]];if(l&&l.stopTween)return l.stopTween(),delete l.stopTween,!0}).forEach(c=>{c.style.transform="";let l=c.children[0];l&&(l.style.transform="")});let b=d.map(c=>({childCoords:{},el:c,boundingClientRect:ut(m,c)})).filter(({el:c,boundingClientRect:l})=>{let O=s[c.dataset[J]];if(O){if(l.top===O.rect.top&&l.left===O.rect.left&&l.width===O.rect.width&&l.height===O.rect.height)return!1}else return u([c]),!1;return!0});if(b.forEach(({el:c})=>{if(Array.from(c.children).length>1)throw new Error("Make sure every grid item has a single container element surrounding its children")}),!b.length)return;let S=b.map(({el:c})=>c);f(()=>a(S));let g=[];b.map(c=>{let l=c.el.children[0];return l&&(c.childCoords=ut(m,l)),c}).forEach(({el:c,boundingClientRect:{top:l,left:O,width:M,height:L},childCoords:{top:V,left:A}},C)=>{let R=c.children[0],T=s[c.dataset[J]],$={scaleX:T.rect.width/M,scaleY:T.rect.height/L,translateX:T.rect.left-O,translateY:T.rect.top-l};c.style.transformOrigin="0 0",R&&A===O&&V===l&&(R.style.transformOrigin="0 0");let _,G=new Promise(W=>{_=W});g.push(G),Qt(c,$,{immediate:!0});let Q=()=>{let{stop:W}=Xt({from:$,to:{translateX:0,translateY:0,scaleX:1,scaleY:1},duration:t,ease:Jt[n]}).start({update:D=>{Qt(c,D),fe.postRender(()=>u([c]))},complete:_});T.stopTween=W};if(typeof r!="number")Q();else{let W=setTimeout(()=>{fe.update(Q)},r*C);T.stopTween=()=>clearTimeout(W)}}),Promise.all(g).then(()=>{i(S)})},x=new MutationObserver(y);return x.observe(e,{childList:!0,attributes:!0,subtree:!0,attributeFilter:["class"]}),{unwrapGrid:()=>{window.removeEventListener("resize",v),e.removeEventListener("scroll",p),x.disconnect()},forceGridAnimation:()=>y("forceGridAnimation")}};export{ii as wrapGrid};