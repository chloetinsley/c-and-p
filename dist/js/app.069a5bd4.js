(function(){"use strict";var n={6955:function(n,e,t){var r=t(9242),o=t(3396),u=t.p+"img/logo.497d3772.jpeg";const i={class:"nav-item"},l=(0,o._)("img",{alt:"logo",src:u,class:"logo"},null,-1),a={class:"nav-item"},c=(0,o._)("footer",null,null,-1);function s(n,e,t,r,u,s){const m=(0,o.up)("router-link"),p=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("header",null,[(0,o._)("nav",null,[(0,o._)("ul",null,[(0,o._)("li",i,[(0,o.Wm)(m,{to:{name:"Home"}},{default:(0,o.w5)((()=>[l,(0,o.Uk)(" home ")])),_:1})]),(0,o._)("li",a,[(0,o.Wm)(m,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("contact")])),_:1})])])])]),(0,o.Wm)(p),c])}var m={name:"App"},p=t(89);const d=(0,p.Z)(m,[["render",s]]);var f=d,v=t(2483),h=t(7139);const y=n=>((0,o.dD)("data-v-535b68e9"),n=n(),(0,o.Cn)(),n),b={class:"home"},_=y((()=>(0,o._)("h1",null,"Phebe and Chloe web design",-1))),g=y((()=>(0,o._)("p",null,"Our services",-1)));function w(n,e,t,r,u,i){return(0,o.wg)(),(0,o.iD)("div",b,[_,(0,o._)("div",null,[g,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.services,(n=>((0,o.wg)(),(0,o.iD)("li",{key:n},(0,h.zw)(n),1)))),128))])])])}var O={name:"HomePage",props:{msg:String},components:{},data(){return{services:["Service 1","Service 2","Service 3"]}}};const k=(0,p.Z)(O,[["render",w],["__scopeId","data-v-535b68e9"]]);var j=k;const x={action:"#",method:"POST"},C=(0,o._)("h2",null,"Get in touch",-1);function D(n,e,t,u,i,l){return(0,o.wg)(),(0,o.iD)("form",x,[C,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>i.name=n),onKeyup:e[1]||(e[1]=(0,r.D2)(((...e)=>n.test&&n.test(...e)),["enter"])),placeholder:"name"},null,544),[[r.nr,i.name,void 0,{lazy:!0,trim:!0}]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=n=>i.email=n),placeholder:"email"},null,512),[[r.nr,i.email,void 0,{lazy:!0,trim:!0}]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=n=>i.number=n),placeholder:"number"},null,512),[[r.nr,i.number,void 0,{lazy:!0,number:!0}]])]),(0,o._)("div",null,[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[4]||(e[4]=n=>i.query=n),placeholder:"query"},null,512),[[r.nr,i.query,void 0,{lazy:!0,trim:!0}]])]),(0,o._)("button",{type:"submit",onClick:e[5]||(e[5]=(0,r.iM)((n=>l.submitForm()),["prevent"]))},"Submit")])}var q={name:"ContactPage",data(){return{name:"",email:"",number:"",query:""}},methods:{submitForm(){this.query?alert(this.query):alert("enter summin then")}}};const P=(0,p.Z)(q,[["render",D]]);var S=P,U=(0,v.p7)({history:(0,v.r5)(),routes:[{path:"/",name:"Home",component:j},{path:"/contact",name:"Contact",component:S}]});(0,r.ri)(f).use(U).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r].call(u.exports,u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var l=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(l=!1,u<i&&(i=u));if(l){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/c-and-p/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,i=r[0],l=r[1],a=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(a)var s=a(t)}for(e&&e(r);c<i.length;c++)u=i[c],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},r=self["webpackChunksite"]=self["webpackChunksite"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6955)}));r=t.O(r)})();
//# sourceMappingURL=app.069a5bd4.js.map