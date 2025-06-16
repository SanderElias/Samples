import{a as x}from"./chunk-ZDGDS7Z3.js";import{b as ae,c as q}from"./chunk-TJ5FK3VG.js";import"./chunk-QOLW2KZO.js";import"./chunk-6QC3C6AT.js";import{Aa as Y,Ac as m,C as K,Cc as oe,D as X,Gb as te,Hb as I,I as Z,Ib as j,Ic as w,Jb as p,Kb as c,Lb as d,Lc as ie,M as Q,Mb as f,Qc as se,Tb as _,U as R,Va as a,Z as H,aa as T,c as J,f as U,fa as g,fc as u,gc as O,h as B,hb as b,hc as C,i as N,q as G,rb as ee,rc as re,ta as $,z as W,zc as ne}from"./chunk-CETW4QL6.js";import{c as F}from"./chunk-DAQOROHW.js";var M=(()=>{class o{constructor(){this.mqtt=import("./mqtt.esm-6I4VX64K.js"),this.client=this.mqtt.then(e=>e.default.connectAsync("ws://10.0.0.100:1884")),this.bt="zigbee2mqtt",this.messages$=new J(e=>{let t=(r,n)=>{try{e.next({topic:r,message:JSON.parse(n.toString())})}catch{e.next({topic:r,message:n.toString()})}};return this.client.then(r=>{console.log("start listening for MQTT messages"),r.on("message",t)}),()=>{this.client.then(r=>{r.off("message",t),r.end(),console.log("MQTT client disconnected")})}}).pipe(R({connector:()=>new U,resetOnComplete:!0})),this.activeTopics=new Map}listenFor(e){let t=this.client;if(typeof e!="string")return console.warn("listenFor expects a string topic, got",e),N;e=e.startsWith(this.bt)?e:`${this.bt}/${e}`;let r=this.activeTopics;if(r.has(e))return console.log("already listening for",e),r.get(e);t.then(i=>{i.subscribe([e])});let n=this.messages$.pipe(X(({topic:i})=>Array.isArray(i)?i.includes(e):i===e),G(({message:i})=>i),Z(100),Q(x),R({connector:()=>new B(1),resetOnComplete:!0,resetOnRefCountZero:()=>W(500)}),H({error(){t.then(i=>i.unsubscribe(e)),r.delete(e),console.log("stopped listening due of error for",e)},complete(){t.then(i=>i.unsubscribe(e)),r.delete(e),console.log("stopped listening for",e)}}));return this.activeTopics.set(e,n),n}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var A=(()=>{class o{constructor(){this.mqtt=g(M),this.devices=ae(this.mqtt.listenFor("bridge/devices"),{initialValue:[]}),this.getDeviceInfo=e=>m(()=>this.#e(e()),{equal:x}),this.getDeviceStatus=e=>q({params:()=>this.#e(e()),stream:({params:t})=>t&&t.friendly_name?this.mqtt.listenFor(`zigbee2mqtt/${t.friendly_name}`):K}),this.publish=(e,t)=>new Promise((r,n)=>{typeof t!="string"&&(t=JSON.stringify(t)),this.mqtt.client.then(i=>{i.publish(e,t,void 0,s=>{s?(console.error("Error publishing to MQTT:",s),n(s)):r()})})}),this.#e=e=>ne(this.devices).find(t=>t.ieee_address===e||t.friendly_name===e)}#e;static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var le=(()=>{class o{constructor(){this.toggleOnText=w("Aan"),this.toggleOffText=w("Uit"),this.value=ie.required()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["se-toggle"]],inputs:{toggleOnText:[1,"toggleOnText"],toggleOffText:[1,"toggleOffText"],value:[1,"value"]},outputs:{value:"valueChange"},decls:5,vars:2,consts:[["type","checkbox",3,"change","checked"],[1,"slider-btn"]],template:function(t,r){t&1&&(c(0,"label")(1,"input",0),_("change",function(){return r.value.set(!r.value())}),d(),f(2,"span",1),c(3,"span"),u(4),d()()),t&2&&(a(),p("checked",r.value()),a(3),O(r.value()?r.toggleOnText():r.toggleOffText()))},styles:['[_nghost-%COMP%]{display:block}label[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;gap:.25rem}input[_ngcontent-%COMP%]{display:none}.slider-btn[_ngcontent-%COMP%]{position:relative}.slider-btn[_ngcontent-%COMP%]:before, .slider-btn[_ngcontent-%COMP%]:after{bottom:0;content:"";display:inline-block;margin:auto}.slider-btn[_ngcontent-%COMP%]:before{background-color:#90ee90;border-radius:.75rem;top:0;height:1.5rem;width:2.75em}.slider-btn[_ngcontent-%COMP%]:after{background-color:green;border-radius:50%;position:absolute;top:-.125rem;left:.125rem;transition:.4s;inline-size:1.25rem;block-size:1.25rem}label[_ngcontent-%COMP%]:has(input:not(:checked))   .slider-btn[_ngcontent-%COMP%]:before{background-color:#ffa07a}label[_ngcontent-%COMP%]:has(input:not(:checked))   .slider-btn[_ngcontent-%COMP%]:after{background-color:maroon;transform:translate(1.25rem)}']})}}return o})();var ce=(()=>{class o{constructor(){this.z2m=g(A),this.ieeeAddress=w.required(),this.deviceResource=this.z2m.getDeviceStatus(this.ieeeAddress),this.deviceStatus=this.deviceResource.value,this.deviceInfo=this.z2m.getDeviceInfo(this.ieeeAddress),this.name=m(()=>this.deviceInfo()?.friendly_name||this.ieeeAddress()),this.isPoweredOn=m(()=>this.deviceStatus()?.state==="ON"),this.toggle=()=>{let e=this.isPoweredOn()?"OFF":"ON";this.z2m.publish(`zigbee2mqtt/${this.name()}/set`,{state:e})},this._=ee(()=>{this.z2m.publish(`zigbee2mqtt/${this.name()}/get`,{state:""})})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["power-meter"]],inputs:{ieeeAddress:[1,"ieeeAddress"]},decls:11,vars:6,consts:[[3,"valueChange","value"]],template:function(t,r){if(t&1&&(c(0,"h4"),u(1),d(),u(2),f(3,"br"),u(4),f(5,"br"),u(6),f(7,"br"),u(8),f(9,"br"),c(10,"se-toggle",0),_("valueChange",function(){return r.toggle()}),d()),t&2){let n,i,s,v,y;a(),C("Power Meter for ",(n=r.deviceInfo())==null?null:n.friendly_name),a(),C(" power: ",(i=r.deviceStatus())==null?null:i.power," W"),a(2),C(" voltage: ",(s=r.deviceStatus())==null?null:s.voltage," V"),a(2),C(" current: ",(v=r.deviceStatus())==null?null:v.current," A"),a(2),C(" energy: ",(y=r.deviceStatus())==null?null:y.energy," kWh"),a(2),p("value",r.isPoweredOn())}},dependencies:[le],styles:["[_nghost-%COMP%]{display:block}"]})}}return o})();var L,D=class extends Error{constructor(l){super(l),this.name="PrettyJSONError"}},V=(()=>{class o extends HTMLElement{#e;#t;static get observedAttributes(){return["expand","key","truncate-string"]}static{this.DEFAULT_VARIABLES={light:{keyColor:"#cc0000",arrowColor:"#737373",braceColor:"#0030f0",bracketColor:"#0030f0",stringColor:"#009900",numberColor:"#0000ff",nullColor:"#666666",booleanColor:"#d23c91",commaColor:"#666666",ellipsisColor:"#666666",indent:"2rem",fontSize:"1rem",fontFamily:"monospace"},dark:{keyColor:"#f73d3d",arrowColor:"#6c6c6c",braceColor:"#0690bc",bracketColor:"#0690bc",stringColor:"#21c521",numberColor:"#0078b3",nullColor:"#8c8888",booleanColor:"#c737b3",commaColor:"#848181",ellipsisColor:"#c2c2c2",indent:"2rem",fontSize:"1rem",fontFamily:"monospace"}}}#o(){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?L.DEFAULT_VARIABLES.dark:L.DEFAULT_VARIABLES.light;if(!this.shadowRoot)return t;let r=getComputedStyle(this.shadowRoot.host);return{keyColor:r.getPropertyValue("--key-color")||t.keyColor,arrowColor:r.getPropertyValue("--arrow-color")||t.arrowColor,braceColor:r.getPropertyValue("--brace-color")||t.braceColor,bracketColor:r.getPropertyValue("--bracket-color")||t.bracketColor,stringColor:r.getPropertyValue("--string-color")||t.stringColor,numberColor:r.getPropertyValue("--number-color")||t.numberColor,nullColor:r.getPropertyValue("--null-color")||t.nullColor,booleanColor:r.getPropertyValue("--boolean-color")||t.booleanColor,commaColor:r.getPropertyValue("--comma-color")||t.commaColor,ellipsisColor:r.getPropertyValue("--ellipsis-color")||t.ellipsisColor,indent:r.getPropertyValue("--indent")||t.indent,fontSize:r.getPropertyValue("--font-size")||t.fontSize,fontFamily:r.getPropertyValue("--font-family")||t.fontFamily}}get#m(){let e=this.#o();return`/* css */
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
  `}constructor(){super(),this.#t=!0,this.attachShadow({mode:"open"})}get#i(){let e=this.getAttribute("expand");if(e===null)return 1;let t=Number.parseInt(e);return isNaN(t)||t<0?0:t}get#r(){let t=this.getAttribute("truncate-string");if(t===null)return 500;let r=Number.parseInt(t);return isNaN(r)||r<0?0:r}#s(){this.#t=!this.#t,this.setAttribute("expand",this.#t?String(this.#i+1):"0"),this.#n()}#u(e,t,r){if(this.#a(e)){let n=this.#c();return n.appendChild(this.#l(e)),n}return this.#h(e)}#a(e){return typeof e!="object"||e===null}#p(){try{return new URL(this.#e),!0}catch{return!1}}#l(e){let t=document.createElement("div"),r=typeof e=="object"?"null":typeof e;if(t.className=`primitive value ${r}`,typeof e=="string")if(this.#p()){let n=document.createElement("a");n.className="url",n.href=this.#e,n.target="_blank",n.textContent=e,t.append('"',n,'"')}else e.length>this.#r?t.appendChild(this.#f(e)):t.textContent=JSON.stringify(e);else t.textContent=JSON.stringify(e);return t}#f(e){let t=document.createElement("div");t.dataset.expandedTimes="1",t.className="truncated string";let r=document.createElement("button");return r.className="ellipsis",r.addEventListener("click",()=>{let n=Number.parseInt(t.dataset.expandedTimes??"1");t.dataset.expandedTimes=String(n+1);let i=e.slice(0,(n+1)*this.#r),s=t.childNodes[1];t.replaceChild(document.createTextNode(i),s)}),t.append('"',e.slice(0,this.#r),r,'"'),t}#c(){let e=document.createElement("div");return e.className="container",e}#h(e){let t=Array.isArray(e),r=this.getAttribute("key"),n=this.#i,i=this.#r,s=this.#c();if(s.classList.add(t?"array":"object"),r){s.classList.add("row");let h=this.#d(r,{withArrow:!0,expanded:this.#t});h.addEventListener("click",this.#s.bind(this)),s.appendChild(h)}let v=document.createElement("span");v.className="open brace",v.textContent=t?"[":"{",s.appendChild(v);let y=document.createElement("span");if(y.className="close brace",y.textContent=t?"]":"}",!this.#t){let h=document.createElement("button");return h.className="ellipsis",s.appendChild(h),h.addEventListener("click",this.#s.bind(this)),s.appendChild(y),s}return Object.entries(e).forEach(([h,z],ue)=>{if(this.#a(z)){let E=document.createElement("div");if(E.className="row",!t){let S=this.#d(h);E.appendChild(S)}if(E.appendChild(this.#l(z)),s.appendChild(E),!(ue===Object.keys(e).length-1)){let S=document.createElement("span");S.className="comma",S.textContent=",",E.appendChild(S)}return}let k=document.createElement("pretty-json");k.textContent=JSON.stringify(z),k.setAttribute("expand",String(n-1)),k.setAttribute("truncate-string",String(i)),k.setAttribute("key",h),s.appendChild(k)}),s.appendChild(y),s}#g({expanded:e=!1}={}){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("width","100"),t.setAttribute("height","100"),t.setAttribute("viewBox","0 0 100 100"),t.setAttribute("class","arrow");let r=document.createElementNS("http://www.w3.org/2000/svg","polygon");return r.setAttribute("class","triangle"),r.setAttribute("points","0,0 100,50 0,100"),e&&r.setAttribute("transform","rotate(90 50 50)"),t.appendChild(r),t}#d(e,{withArrow:t=!1,expanded:r=!1}={}){let n=document.createElement(t?"button":"span");if(n.className="key",t){let v=this.#g({expanded:r});n.appendChild(v)}let i=document.createElement("span");i.className="key-name",i.textContent=JSON.stringify(e),n.appendChild(i);let s=document.createElement("span");return s.className="colon",s.textContent=":",n.appendChild(s),n}#n(){if(!this.shadowRoot)throw new D("Shadow root not available");if(this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(this.#u(this.#e,this.#i,void 0)),this.shadowRoot.querySelector("[data-pretty-json]"))return;let e=document.createElement("style");e.setAttribute("data-pretty-json",""),e.textContent=this.#m,this.shadowRoot.appendChild(e)}attributeChangedCallback(e,t,r){if(e==="expand"){if(r===null)this.#t=!1;else{let n=Number.parseInt(r);this.#t=!isNaN(n)&&n>0}this.#n()}}connectedCallback(){try{this.#e=JSON.parse(this.textContent??"")}catch(e){let t=`Error parsing JSON: ${e instanceof Error?e.message:"Unknown error"}`;throw new D(t)}this.#n()}update(e){this.#e=e,this.#n()}}return o})();L=V;var de=(()=>{class o{#e;#t;#o;constructor(){this.#e=g(Y).nativeElement,this.json=w(),this.#t=m(()=>{let e=this.json();try{JSON.stringify(e)}catch{e={error:"Invalid JSON"}}return e}),this.#o=se({write:()=>{this.#e.update(this.#t())}}),typeof customElements<"u"&&(this.#e.innerText="{}",customElements.get("pretty-json")||customElements.define("pretty-json",V))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["pretty-json"]],inputs:{json:[1,"json"]},decls:0,vars:0,template:function(t,r){},styles:["[_nghost-%COMP%]{display:block}"]})}}return o})();var pe=(o,l)=>l.name,fe=(o,l)=>l[0];function he(o,l){if(o&1&&(c(0,"option",1),u(1),d()),o&2){let e=l.$implicit;p("value",e.name),a(),O(e.name)}}function ge(o,l){if(o&1&&(c(0,"option",1),u(1),d()),o&2){let e=l.$implicit;p("value",e[0]),a(),O(e[1])}}function ve(o,l){if(o&1&&f(0,"power-meter",5),o&2){let e=l.$implicit;p("ieeeAddress",e.ieee_address)}}var Qe=(()=>{class o{constructor(){this.mqtt=g(M),this.z2m=g(A),this.state=$({}),this.cleanState=m(()=>me(this.state())),this.selected=oe((...e)=>{let t=this.devices(),r=this.filter();if(!(!t||t.length===0)&&r){let n=t.find(i=>i.definition?.model===r);if(n)return n.friendly_name||n.ieee_address}}),this.filter=$(void 0),this.deviceList=m(()=>{let e=this.devices(),t=this.filter();return e?.filter(r=>t?r.definition?.model===t:!0).map(r=>({name:r.friendly_name||r.ieee_address})).sort()},{equal:x}),this.deviceTypes=m(()=>this.devices()?.reduce((r,n)=>{let i=n.definition?.model||"";return i&&!r.find(s=>s[0]===i)&&r.push([i,n.definition?.description||""]),r},[]).sort(),{equal:x}),this.powerMeters=m(()=>this.devices()?.filter(t=>t.definition?.exposes?.some(r=>r.property==="power"&&r.type==="numeric"))),this.selectedDetails=m(()=>{let e=this.devices(),t=this.selected();if(!t)return;let r=e?.find(n=>n.friendly_name===t||n.ieee_address===t);if(r)return r}),this.devices=this.z2m.devices,this.selectedDevice=q({params:this.selected,stream:e=>{let t=e.params;return t?(console.log("selectedDevice",t),this.mqtt.listenFor(t)):N}})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["se-mqtt"]],features:[re([M,A])],decls:13,vars:3,consts:[[3,"change"],[3,"value"],[1,"grid"],[3,"json"],[1,"devGrid"],[3,"ieeeAddress"]],template:function(t,r){t&1&&(c(0,"select",0),_("change",function(i){return r.selected.set(i.target.value)}),I(1,he,2,2,"option",1,pe),d(),c(3,"select",0),_("change",function(i){return r.filter.set(i.target.value)}),I(4,ge,2,2,"option",1,fe),d(),u(6),c(7,"div",2),f(8,"pretty-json",3)(9,"pretty-json",3),d(),c(10,"div",4),I(11,ve,1,1,"power-meter",5,te),d()),t&2&&(a(),j(r.deviceList()),a(3),j(r.deviceTypes()),a(2),C(" ",r.selected()," "),a(2),p("json",r.selectedDevice.value()),a(),p("json",r.selectedDetails()),a(2),j(r.powerMeters()))},dependencies:[de,ce],styles:["[_nghost-%COMP%]{display:block;padding:1rem}div.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:30rem 1fr;gap:10px}div.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{background:var(--surface-3);border-radius:1rem;min-inline-size:30rem;min-block-size:30lh;padding:1rem;overflow:auto}div.devGrid[_ngcontent-%COMP%]{margin-block-start:1rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));gap:.5rem}div.devGrid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{background:var(--surface-3);border-radius:1rem;padding:1rem;overflow:auto}"]})}}return o})(),me=(o,l="")=>{let r=o,{value:e}=r,t=F(r,["value"]);return Object.keys(t).length===0?e:Object.fromEntries(Object.entries(o).map(([n,i])=>[n,typeof i=="object"?me(i):i]))};export{Qe as MqttComponent};
