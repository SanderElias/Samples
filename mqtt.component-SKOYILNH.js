import{a as g}from"./chunk-ZDGDS7Z3.js";import{b as ae,c as k}from"./chunk-TJ5FK3VG.js";import"./chunk-QOLW2KZO.js";import"./chunk-6QC3C6AT.js";import{Aa as Y,Ac as m,C as K,Cc as oe,D as X,Hb as z,I as Z,Ib as R,Ic as S,Jb as p,Kb as d,Lb as l,Lc as ie,M as Q,Mb as w,Qc as se,Tb as x,U as q,Va as a,Z as H,aa as N,c as F,f as U,fa as h,fc as f,gc as E,h as B,hb as v,hc as te,i as M,q as G,rb as ee,rc as ne,ta as D,z as W,zc as re}from"./chunk-CETW4QL6.js";import{c as J}from"./chunk-DAQOROHW.js";var O=(()=>{class o{constructor(){this.mqtt=import("./mqtt.esm-6I4VX64K.js"),this.client=this.mqtt.then(e=>e.default.connectAsync("ws://10.0.0.100:1884")),this.bt="zigbee2mqtt",this.messages$=new F(e=>{let t=(n,r)=>{try{e.next({topic:n,message:JSON.parse(r.toString())})}catch{e.next({topic:n,message:r.toString()})}};return this.client.then(n=>{console.log("start listening for MQTT messages"),n.on("message",t)}),()=>{this.client.then(n=>{n.off("message",t),n.end(),console.log("MQTT client disconnected")})}}).pipe(q({connector:()=>new U,resetOnComplete:!0})),this.activeTopics=new Map}listenFor(e){let t=this.client;if(typeof e!="string")return console.warn("listenFor expects a string topic, got",e),M;e=e.startsWith(this.bt)?e:`${this.bt}/${e}`;let n=this.activeTopics;if(n.has(e))return console.log("already listening for",e),n.get(e);t.then(i=>{i.subscribe([e])});let r=this.messages$.pipe(X(({topic:i})=>Array.isArray(i)?i.includes(e):i===e),G(({message:i})=>i),Z(100),Q(g),q({connector:()=>new B(1),resetOnComplete:!0,resetOnRefCountZero:()=>W(500)}),H({error(){t.then(i=>i.unsubscribe(e)),n.delete(e),console.log("stopped listening due of error for",e)},complete(){t.then(i=>i.unsubscribe(e)),n.delete(e),console.log("stopped listening for",e)}}));return this.activeTopics.set(e,r),r}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var T=(()=>{class o{constructor(){this.mqtt=h(O),this.devices=ae(this.mqtt.listenFor("bridge/devices"),{initialValue:[]}),this.getDeviceInfo=e=>m(()=>this.#e(e()),{equal:g}),this.getDeviceStatus=e=>k({params:()=>this.#e(e()),stream:({params:t})=>t&&t.friendly_name?this.mqtt.listenFor(`zigbee2mqtt/${t.friendly_name}`):K}),this.getStatus=e=>k({params:()=>typeof e=="string"?e:e(),stream:({params:t})=>this.mqtt.listenFor(t)}),this.publish=(e,t)=>new Promise((n,r)=>{typeof t!="string"&&(t=JSON.stringify(t)),this.mqtt.client.then(i=>{i.publish(e,t,void 0,s=>{s?(console.error("Error publishing to MQTT:",s),r(s)):n()})})}),this.#e=e=>re(this.devices).find(t=>t.ieee_address===e||t.friendly_name===e)}#e;static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var L=(()=>{class o{constructor(){this.toggleOnText=S("Aan"),this.toggleOffText=S("Uit"),this.value=ie.required()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=v({type:o,selectors:[["se-toggle"]],inputs:{toggleOnText:[1,"toggleOnText"],toggleOffText:[1,"toggleOffText"],value:[1,"value"]},outputs:{value:"valueChange"},decls:5,vars:2,consts:[["type","checkbox",3,"change","checked"],[1,"slider-btn"]],template:function(t,n){t&1&&(d(0,"label")(1,"input",0),x("change",function(){return n.value.set(!n.value())}),l(),w(2,"span",1),d(3,"span"),f(4),l()()),t&2&&(a(),p("checked",n.value()),a(3),E(n.value()?n.toggleOnText():n.toggleOffText()))},styles:['[_nghost-%COMP%]{display:block}label[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;gap:.25rem}input[_ngcontent-%COMP%]{display:none}.slider-btn[_ngcontent-%COMP%]{position:relative}.slider-btn[_ngcontent-%COMP%]:before, .slider-btn[_ngcontent-%COMP%]:after{bottom:0;content:"";display:inline-block;margin:auto}.slider-btn[_ngcontent-%COMP%]:before{background-color:#90ee90;border-radius:.75rem;top:0;height:1.5rem;width:2.75em}.slider-btn[_ngcontent-%COMP%]:after{background-color:green;border-radius:50%;position:absolute;top:-.125rem;left:.125rem;transition:.4s;inline-size:1.25rem;block-size:1.25rem}label[_ngcontent-%COMP%]:has(input:not(:checked))   .slider-btn[_ngcontent-%COMP%]:before{background-color:#ffa07a}label[_ngcontent-%COMP%]:has(input:not(:checked))   .slider-btn[_ngcontent-%COMP%]:after{background-color:maroon;transform:translate(1.25rem)}']})}}return o})();var V,I=class extends Error{constructor(c){super(c),this.name="PrettyJSONError"}},$=(()=>{class o extends HTMLElement{#e;#t;static get observedAttributes(){return["expand","key","truncate-string"]}static{this.DEFAULT_VARIABLES={light:{keyColor:"#cc0000",arrowColor:"#737373",braceColor:"#0030f0",bracketColor:"#0030f0",stringColor:"#009900",numberColor:"#0000ff",nullColor:"#666666",booleanColor:"#d23c91",commaColor:"#666666",ellipsisColor:"#666666",indent:"2rem",fontSize:"1rem",fontFamily:"monospace"},dark:{keyColor:"#f73d3d",arrowColor:"#6c6c6c",braceColor:"#0690bc",bracketColor:"#0690bc",stringColor:"#21c521",numberColor:"#0078b3",nullColor:"#8c8888",booleanColor:"#c737b3",commaColor:"#848181",ellipsisColor:"#c2c2c2",indent:"2rem",fontSize:"1rem",fontFamily:"monospace"}}}#o(){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?V.DEFAULT_VARIABLES.dark:V.DEFAULT_VARIABLES.light;if(!this.shadowRoot)return t;let n=getComputedStyle(this.shadowRoot.host);return{keyColor:n.getPropertyValue("--key-color")||t.keyColor,arrowColor:n.getPropertyValue("--arrow-color")||t.arrowColor,braceColor:n.getPropertyValue("--brace-color")||t.braceColor,bracketColor:n.getPropertyValue("--bracket-color")||t.bracketColor,stringColor:n.getPropertyValue("--string-color")||t.stringColor,numberColor:n.getPropertyValue("--number-color")||t.numberColor,nullColor:n.getPropertyValue("--null-color")||t.nullColor,booleanColor:n.getPropertyValue("--boolean-color")||t.booleanColor,commaColor:n.getPropertyValue("--comma-color")||t.commaColor,ellipsisColor:n.getPropertyValue("--ellipsis-color")||t.ellipsisColor,indent:n.getPropertyValue("--indent")||t.indent,fontSize:n.getPropertyValue("--font-size")||t.fontSize,fontFamily:n.getPropertyValue("--font-family")||t.fontFamily}}get#m(){let e=this.#o();return`/* css */
    :host {
      --key-color: ${e.keyColor};
      --arrow-color: ${e.arrowColor};
      --brace-color: ${e.braceColor};
      --bracket-color: ${e.bracketColor};
      --string-color: ${e.stringColor};
      --number-color: ${e.numberColor};
      --null-color: ${e.nullColor};
      --boolean-color: ${e.booleanColor};
      --comma-color: ${e.commaColor};
      --ellipsis-color: ${e.ellipsisColor};
      --indent: ${e.indent};
      --font-size: ${e.fontSize};
      --font-family: ${e.fontFamily};
    }
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      font-size: var(--font-size);
      vertical-align: text-bottom;
    }
    .container {
      font-family: var(--font-family);
      font-size: var(--font-size);
    }
    .key {
      color: var(--key-color);
      margin-right: 0.5rem;
      padding: 0;
    }
    .key .arrow {
      width: 1rem;
      height: 0.75rem;
      margin-left: -1.25rem;
      padding-right: 0.25rem;
      vertical-align: baseline;
    }
    .arrow .triangle {
      fill: var(--arrow-color);
    }
    .comma {
      color: var(--comma-color);
    }
    .brace {
      color: var(--brace-color);
    }
    .string,
    .url {
      color: var(--string-color);
    }
    .number,
    .bigint {
      color: var(--number-color);
    }
    .null {
      color: var(--null-color);
    }
    .boolean {
      color: var(--boolean-color);
    }

    .ellipsis {
      width: 1rem;
      padding: 0;
      color: var(--ellipsis-color);
    }
    .ellipsis::after {
      content: "\u2026";
    }
    .string .ellipsis::after {
      color: var(--string-color);
    }
    .triangle {
      fill: black;
      stroke: black;
      stroke-width: 0;
    }
    .row {
      padding-left: var(--indent);
    }
    .row .row {
      display: block;
    }
    .row > div,
    .row > span {
      display: inline-block;
    }
  `}constructor(){super(),this.#t=!0,this.attachShadow({mode:"open"})}get#i(){let e=this.getAttribute("expand");if(e===null)return 1;let t=Number.parseInt(e);return isNaN(t)||t<0?0:t}get#n(){let t=this.getAttribute("truncate-string");if(t===null)return 500;let n=Number.parseInt(t);return isNaN(n)||n<0?0:n}#s(){this.#t=!this.#t,this.setAttribute("expand",this.#t?String(this.#i+1):"0"),this.#r()}#u(e,t,n){if(this.#a(e)){let r=this.#c();return r.appendChild(this.#l(e)),r}return this.#h(e)}#a(e){return typeof e!="object"||e===null}#p(){try{return new URL(this.#e),!0}catch{return!1}}#l(e){let t=document.createElement("div"),n=typeof e=="object"?"null":typeof e;if(t.className=`primitive value ${n}`,typeof e=="string")if(this.#p()){let r=document.createElement("a");r.className="url",r.href=this.#e,r.target="_blank",r.textContent=e,t.append('"',r,'"')}else e.length>this.#n?t.appendChild(this.#f(e)):t.textContent=JSON.stringify(e);else t.textContent=JSON.stringify(e);return t}#f(e){let t=document.createElement("div");t.dataset.expandedTimes="1",t.className="truncated string";let n=document.createElement("button");return n.className="ellipsis",n.addEventListener("click",()=>{let r=Number.parseInt(t.dataset.expandedTimes??"1");t.dataset.expandedTimes=String(r+1);let i=e.slice(0,(r+1)*this.#n),s=t.childNodes[1];t.replaceChild(document.createTextNode(i),s)}),t.append('"',e.slice(0,this.#n),n,'"'),t}#c(){let e=document.createElement("div");return e.className="container",e}#h(e){let t=Array.isArray(e),n=this.getAttribute("key"),r=this.#i,i=this.#n,s=this.#c();if(s.classList.add(t?"array":"object"),n){s.classList.add("row");let u=this.#d(n,{withArrow:!0,expanded:this.#t});u.addEventListener("click",this.#s.bind(this)),s.appendChild(u)}let b=document.createElement("span");b.className="open brace",b.textContent=t?"[":"{",s.appendChild(b);let P=document.createElement("span");if(P.className="close brace",P.textContent=t?"]":"}",!this.#t){let u=document.createElement("button");return u.className="ellipsis",s.appendChild(u),u.addEventListener("click",this.#s.bind(this)),s.appendChild(P),s}return Object.entries(e).forEach(([u,j],de)=>{if(this.#a(j)){let C=document.createElement("div");if(C.className="row",!t){let _=this.#d(u);C.appendChild(_)}if(C.appendChild(this.#l(j)),s.appendChild(C),!(de===Object.keys(e).length-1)){let _=document.createElement("span");_.className="comma",_.textContent=",",C.appendChild(_)}return}let y=document.createElement("pretty-json");y.textContent=JSON.stringify(j),y.setAttribute("expand",String(r-1)),y.setAttribute("truncate-string",String(i)),y.setAttribute("key",u),s.appendChild(y)}),s.appendChild(P),s}#g({expanded:e=!1}={}){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("width","100"),t.setAttribute("height","100"),t.setAttribute("viewBox","0 0 100 100"),t.setAttribute("class","arrow");let n=document.createElementNS("http://www.w3.org/2000/svg","polygon");return n.setAttribute("class","triangle"),n.setAttribute("points","0,0 100,50 0,100"),e&&n.setAttribute("transform","rotate(90 50 50)"),t.appendChild(n),t}#d(e,{withArrow:t=!1,expanded:n=!1}={}){let r=document.createElement(t?"button":"span");if(r.className="key",t){let b=this.#g({expanded:n});r.appendChild(b)}let i=document.createElement("span");i.className="key-name",i.textContent=JSON.stringify(e),r.appendChild(i);let s=document.createElement("span");return s.className="colon",s.textContent=":",r.appendChild(s),r}#r(){if(!this.shadowRoot)throw new I("Shadow root not available");if(this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(this.#u(this.#e,this.#i,void 0)),this.shadowRoot.querySelector("[data-pretty-json]"))return;let e=document.createElement("style");e.setAttribute("data-pretty-json",""),e.textContent=this.#m,this.shadowRoot.appendChild(e)}attributeChangedCallback(e,t,n){if(e==="expand"){if(n===null)this.#t=!1;else{let r=Number.parseInt(n);this.#t=!isNaN(r)&&r>0}this.#r()}}connectedCallback(){try{this.#e=JSON.parse(this.textContent??"")}catch(e){let t=`Error parsing JSON: ${e instanceof Error?e.message:"Unknown error"}`;throw new I(t)}this.#r()}update(e){this.#e=e,this.#r()}}return o})();V=$;var le=(()=>{class o{#e;#t;#o;constructor(){this.#e=h(Y).nativeElement,this.json=S(),this.#t=m(()=>{let e=this.json();try{JSON.stringify(e)}catch{e={error:"Invalid JSON"}}return e}),this.#o=se({write:()=>{this.#e.update(this.#t())}}),typeof customElements<"u"&&(this.#e.innerText="{}",customElements.get("pretty-json")||customElements.define("pretty-json",$))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=v({type:o,selectors:[["pretty-json"]],inputs:{json:[1,"json"]},decls:0,vars:0,template:function(t,n){},styles:["[_nghost-%COMP%]{display:block}"]})}}return o})();var me=(o,c)=>c.name,ue=(o,c)=>c[0];function pe(o,c){if(o&1&&(d(0,"option",1),f(1),l()),o&2){let e=c.$implicit;p("value",e.name),a(),E(e.name)}}function fe(o,c){if(o&1&&(d(0,"option",1),f(1),l()),o&2){let e=c.$implicit;p("value",e[0]),a(),E(e[1])}}var Ke=(()=>{class o{constructor(){this.mqtt=h(O),this.z2m=h(T),this.state=D({}),this.cleanState=m(()=>ce(this.state())),this.selected=oe((...e)=>{let t=this.devices(),n=this.filter();if(!(!t||t.length===0)&&n){let r=t.find(i=>i.definition?.model===n);if(r)return r.friendly_name||r.ieee_address}}),this.filter=D(void 0),this.deviceList=m(()=>{let e=this.devices(),t=this.filter();return e?.filter(n=>t?n.definition?.model===t:!0).map(n=>({name:n.friendly_name||n.ieee_address})).sort()},{equal:g}),this.allowJoinRS=this.z2m.getStatus("zigbee2mqtt/bridge/response/permit_join"),this.allowJoin=m(()=>{let e=this.allowJoinRS.value();return console.log("allowJoin",e),e?.data?.time||!1}),this._=ee(()=>{this.z2m.publish("zigbee2mqtt/bridge/request/permit_join",{value:!0,time:15})}),this.deviceTypes=m(()=>this.devices()?.reduce((n,r)=>{let i=r.definition?.model||"";return i&&!n.find(s=>s[0]===i)&&n.push([i,r.definition?.description||""]),n},[]).sort(),{equal:g}),this.powerMeters=m(()=>this.devices()?.filter(t=>t.definition?.exposes?.some(n=>n.property==="power"&&n.type==="numeric"))),this.selectedDetails=m(()=>{let e=this.devices(),t=this.selected();if(!t)return;let n=e?.find(r=>r.friendly_name===t||r.ieee_address===t);if(n)return n}),this.devices=this.z2m.devices,this.selectedDevice=k({params:this.selected,stream:e=>{let t=e.params;return t?(console.log("selectedDevice",t),this.mqtt.listenFor(t)):M}})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=v({type:o,selectors:[["se-mqtt"]],features:[ne([O,T])],decls:18,vars:4,consts:[[1,"devGrid"],[3,"value"],[3,"change"],[1,"grid"],[3,"json"]],template:function(t,n){t&1&&(d(0,"div",0)(1,"div")(2,"h4"),f(3,"Aanmelden"),l(),w(4,"se-toggle",1),l()(),d(5,"details")(6,"summary"),f(7,"Select Device"),l(),d(8,"select",2),x("change",function(i){return n.selected.set(i.target.value)}),z(9,pe,2,2,"option",1,me),l(),d(11,"select",2),x("change",function(i){return n.filter.set(i.target.value)}),z(12,fe,2,2,"option",1,ue),l(),f(14),d(15,"div",3),w(16,"pretty-json",4)(17,"pretty-json",4),l()()),t&2&&(a(4),p("value",n.allowJoin()),a(5),R(n.deviceList()),a(3),R(n.deviceTypes()),a(2),te(" ",n.selected()," "),a(2),p("json",n.selectedDevice.value()),a(),p("json",n.selectedDetails()))},dependencies:[le,L],styles:["[_nghost-%COMP%]{display:block;padding:1rem}div.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:30rem 1fr;gap:10px}div.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{background:var(--surface-3);border-radius:1rem;min-inline-size:30rem;min-block-size:30lh;padding:1rem;overflow:auto}div.devGrid[_ngcontent-%COMP%]{margin-block-end:1rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));gap:1rem}div.devGrid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{background:var(--surface-3);border-radius:1rem;padding:1rem;overflow:auto}"]})}}return o})(),ce=(o,c="")=>{let n=o,{value:e}=n,t=J(n,["value"]);return Object.keys(t).length===0?e:Object.fromEntries(Object.entries(o).map(([r,i])=>[r,typeof i=="object"?ce(i):i]))};export{Ke as MqttComponent};
