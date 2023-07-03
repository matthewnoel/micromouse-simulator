var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function $(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function b(t){const e=t.querySelector(":checked");return e&&e.__value}let x;function v(t){x=t}const _=[],w=[];let k=[];const M=[],E=Promise.resolve();let N=!1;function A(t){k.push(t)}const O=new Set;let S=0;function j(){if(0!==S)return;const t=x;do{try{for(;S<_.length;){const t=_[S];S++,v(t),C(t.$$)}}catch(t){throw _.length=0,S=0,t}for(v(null),_.length=0,S=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(_.length);for(;M.length;)M.pop()();N=!1,O.clear(),v(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const P=new Set;let J;function L(t,e){t&&t.i&&(P.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),J.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function D(t){t&&t.c()}function T(t,n,l,c){const{fragment:s,after_update:u}=t.$$;s&&s.m(n,l),c||A((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(A)}function q(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];k.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),k=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(_.push(t),N||(N=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,l,c,s,u,a,f=[-1]){const d=x;v(e);const h=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(h.root);let m=!1;if(h.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&B(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();r.intro&&L(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),j()}v(d)}class R{$destroy(){q(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U=[];function I(e,n=t){let o;const r=new Set;function c(t){if(l(e,t)&&(e=t,o)){const t=!U.length;for(const t of r)t[1](),U.push(t,e);if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(l,s=t){const u=[l,s];return r.add(u),1===r.size&&(o=n(c)||t),l(e),()=>{r.delete(u),0===r.size&&o&&(o(),o=null)}}}}const F=I({length:4,width:4,start:{x:0,y:3},end:{x:3,y:0},walls:[{x1:0,y1:1,x2:1,y2:1},{x1:2,y1:2,x2:2,y2:3}]}),G=(t,e,n,o,r)=>{const l=Math.abs(e-o)/Math.abs(t-n);return l==Math.abs(r.y1-r.y2)/Math.abs(r.x1-r.x2)&&(0===l&&e===r.y1?Math.min(t,n)>=Math.min(r.x1,r.x2)&&Math.max(t,n)<=Math.max(r.x1,r.x2):l===1/0&&t===r.x1&&(Math.min(e,o)>=Math.min(r.y1,r.y2)&&Math.max(e,o)<=Math.max(r.y1,r.y2)))},K=I(0),Q=I(0),V=I({front:"",right:"",back:"",left:"",center:""}),W=(t,e,n,o,r)=>{if(null==n||null==o||null==r)return;if(n<0||n>r.width-1||o<0||o>r.length-1)return void console.log("Hit outer wall");if(Math.abs(t-n)+Math.abs(e-o)!==1)return void console.log("Non incremental movement");const l={x1:null,x2:null,y1:null,y2:null};if(t-n==-1)l.x1=t+1,l.y1=e,l.x2=t+1,l.y2=e+1;else if(t-n==1)l.x1=t,l.y1=e,l.x2=t,l.y2=e+1;else if(e-o==-1)l.x1=t,l.y1=e+1,l.x2=t+1,l.y2=e+1;else{if(e-o!=1)return;l.x1=t,l.y1=e,l.x2=t+1,l.y2=e}for(const t of r.walls)if(G(l.x1,l.y1,l.x2,l.y2,t))return void console.log("Hit wall");K.set(n),Q.set(o)};function X(t,e,n){const o=t.slice();return o[6]=e[n],o}function Y(t,e,n){const o=t.slice();return o[9]=e[n],o}function Z(t){let e,n,o;return{c(){e=f("span"),n=d("🟨"),g(e,"style",o=t[5](t[9],t[6])),g(e,"class","svelte-1db1myu")},m(t,o){u(t,e,o),s(e,n)},p(t,n){1&n&&o!==(o=t[5](t[9],t[6]))&&g(e,"style",o)},d(t){t&&i(e)}}}function tt(t){let e,n,o;return{c(){e=f("span"),n=d("🟩"),g(e,"style",o=t[5](t[9],t[6])),g(e,"class","svelte-1db1myu")},m(t,o){u(t,e,o),s(e,n)},p(t,n){1&n&&o!==(o=t[5](t[9],t[6]))&&g(e,"style",o)},d(t){t&&i(e)}}}function et(t){let e,n,o;return{c(){e=f("span"),n=d("🟪"),g(e,"style",o=t[5](t[9],t[6])),g(e,"class","svelte-1db1myu")},m(t,o){u(t,e,o),s(e,n)},p(t,n){1&n&&o!==(o=t[5](t[9],t[6]))&&g(e,"style",o)},d(t){t&&i(e)}}}function nt(t){let e,n,o;return{c(){e=f("span"),n=d("🐭"),g(e,"style",o=t[5](t[9],t[6])),g(e,"class","svelte-1db1myu")},m(t,o){u(t,e,o),s(e,n)},p(t,n){1&n&&o!==(o=t[5](t[9],t[6]))&&g(e,"style",o)},d(t){t&&i(e)}}}function ot(t){let e;function n(t,e){return t[2]===t[9]&&t[1]===t[6]?nt:t[0].start.x===t[9]&&t[0].start.y===t[6]?et:t[0].end.x===t[9]&&t[0].end.y===t[6]?tt:Z}let o=n(t),r=o(t);return{c(){r.c(),e=d("")},m(t,n){r.m(t,n),u(t,e,n)},p(t,l){o===(o=n(t))&&r?r.p(t,l):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&i(e)}}}function rt(t){let e,n,o,r=[...Array(t[0].width).keys()],l=[];for(let e=0;e<r.length;e+=1)l[e]=ot(Y(t,r,e));return{c(){e=f("p");for(let t=0;t<l.length;t+=1)l[t].c();n=h(),o=f("br"),g(e,"class","svelte-1db1myu")},m(t,r){u(t,e,r);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);u(t,n,r),u(t,o,r)},p(t,n){if(39&n){let o;for(r=[...Array(t[0].width).keys()],o=0;o<r.length;o+=1){const c=Y(t,r,o);l[o]?l[o].p(c,n):(l[o]=ot(c),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}},d(t){t&&i(e),a(l,t),t&&i(n),t&&i(o)}}}function lt(e){let n,o,r,l,c,m,y,$,b,x,v=[...Array(e[0].length).keys()],_=[];for(let t=0;t<v.length;t+=1)_[t]=rt(X(e,v,t));return{c(){for(let t=0;t<_.length;t+=1)_[t].c();n=h(),o=f("p"),r=d("Maze: "),l=d(e[4]),c=h(),m=f("br"),y=h(),$=f("p"),b=d("Mouse: "),x=d(e[3]),g(o,"class","svelte-1db1myu"),g($,"class","svelte-1db1myu")},m(t,e){for(let n=0;n<_.length;n+=1)_[n]&&_[n].m(t,e);u(t,n,e),u(t,o,e),s(o,r),s(o,l),u(t,c,e),u(t,m,e),u(t,y,e),u(t,$,e),s($,b),s($,x)},p(t,[e]){if(39&e){let o;for(v=[...Array(t[0].length).keys()],o=0;o<v.length;o+=1){const r=X(t,v,o);_[o]?_[o].p(r,e):(_[o]=rt(r),_[o].c(),_[o].m(n.parentNode,n))}for(;o<_.length;o+=1)_[o].d(1);_.length=v.length}16&e&&p(l,t[4]),8&e&&p(x,t[3])},i:t,o:t,d(t){a(_,t),t&&i(n),t&&i(o),t&&i(c),t&&i(m),t&&i(y),t&&i($)}}}function ct(t,e,n){let o,r,l,s,u;c(t,F,(t=>n(0,l=t))),c(t,Q,(t=>n(1,s=t))),c(t,K,(t=>n(2,u=t)));return t.$$.update=()=>{1&t.$$.dirty&&n(4,o=JSON.stringify({length:l.length,width:l.width,start:l.start,end:l.end,walls:l.walls})),6&t.$$.dirty&&n(3,r=JSON.stringify({x:u,y:s}))},[l,s,u,r,o,(t,e)=>{let n="";const o=[];for(const n of l.walls)G(t,e,t+1,e,n)&&o.push("border-top"),G(t+1,e,t+1,e+1,n)&&o.push("border-right"),G(t,e+1,t+1,e+1,n)&&o.push("border-bottom"),G(t,e,t,e+1,n)&&o.push("border-left");return o.length>0&&(n=o.map((t=>`${t}: 1px solid black;`)).join("")),n}]}class st extends R{constructor(t){super(),H(this,t,ct,lt,l,{})}}let ut,it;K.subscribe((t=>{ut=t})),Q.subscribe((t=>{it=t}));const at={name:"Allocentric Movement Controller",methods:{moveUp:t=>{W(ut,it,ut,it-1,t)},moveRight:t=>{W(ut,it,ut+1,it,t)},moveDown:t=>{W(ut,it,ut,it+1,t)},moveLeft:t=>{W(ut,it,ut-1,it,t)}},locations:["center"]},ft=(t,e,n)=>{const o=Object.values(n);var r,l;r=e.start.x,l=e.start.y,K.set(r),Q.set(l);for(const n of t)switch(console.log(n),n){case"^":if(!o.includes(at.name))break;at.methods.moveUp(e);break;case">":if(!o.includes(at.name))break;at.methods.moveRight(e);break;case"v":if(!o.includes(at.name))break;at.methods.moveDown(e);break;case"<":if(!o.includes(at.name))break;at.methods.moveLeft(e)}};function dt(e){let n,r,l,c,a,$,b,x,v;return{c(){n=f("p"),r=d("Program:"),l=d(e[0]),c=h(),a=f("textarea"),$=h(),b=f("input"),g(a,"name","Program"),g(a,"id","program"),g(a,"cols","30"),g(a,"rows","10"),g(b,"type","button"),b.value="Execute"},m(t,o){u(t,n,o),s(n,r),s(n,l),u(t,c,o),u(t,a,o),y(a,e[0]),u(t,$,o),u(t,b,o),x||(v=[m(a,"input",e[3]),m(b,"click",e[4])],x=!0)},p(t,[e]){1&e&&p(l,t[0]),1&e&&y(a,t[0])},i:t,o:t,d(t){t&&i(n),t&&i(c),t&&i(a),t&&i($),t&&i(b),x=!1,o(v)}}}function ht(t,e,n){let o,r;c(t,F,(t=>n(1,o=t))),c(t,V,(t=>n(2,r=t)));let l="^>^>^>v<^>";return[l,o,r,function(){l=this.value,n(0,l)},()=>ft(l,o,r)]}class mt extends R{constructor(t){super(),H(this,t,ht,dt,l,{})}}const gt={name:"Egocentric Movement Controller",methods:{},locations:["center"]},pt={name:"Touch Sensor",methods:{},locations:["front","right","back","left"]};function yt(t,e,n){const o=t.slice();return o[9]=e[n],o}function $t(t,e,n){const o=t.slice();return o[12]=e[n],o}function bt(e){let n,o,r,l=e[12].name+"";return{c(){n=f("option"),o=d(l),r=h(),n.__value=e[12],n.value=n.__value},m(t,e){u(t,n,e),s(n,o),s(n,r)},p:t,d(t){t&&i(n)}}}function xt(t){let e,n,o,r=t[2],l=[];for(let e=0;e<r.length;e+=1)l[e]=vt(yt(t,r,e));return{c(){e=f("select");for(let t=0;t<l.length;t+=1)l[t].c();void 0===t[1]&&A((()=>t[8].call(e)))},m(r,c){u(r,e,c);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);$(e,t[1],!0),n||(o=m(e,"change",t[8]),n=!0)},p(t,n){if(4&n){let o;for(r=t[2],o=0;o<r.length;o+=1){const c=yt(t,r,o);l[o]?l[o].p(c,n):(l[o]=vt(c),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}6&n&&$(e,t[1])},d(t){t&&i(e),a(l,t),n=!1,o()}}}function vt(t){let e,n,o,r,l=t[9]+"";return{c(){e=f("option"),n=d(l),o=h(),e.__value=r=t[9],e.value=e.__value},m(t,r){u(t,e,r),s(e,n),s(e,o)},p(t,o){4&o&&l!==(l=t[9]+"")&&p(n,l),4&o&&r!==(r=t[9])&&(e.__value=r,e.value=e.__value)},d(t){t&&i(e)}}}function _t(e){let n,r,l,c,y,b,x,v,_,w,k,M,E,N,O=JSON.stringify(e[3])+"",S=e[4],j=[];for(let t=0;t<S.length;t+=1)j[t]=bt($t(e,S,t));let C=e[2].length>0&&xt(e);return{c(){n=f("h1"),n.textContent="Builder Tool",r=h(),l=f("p"),c=d(O),y=h(),b=f("form"),x=f("select");for(let t=0;t<j.length;t+=1)j[t].c();v=h(),C&&C.c(),_=h(),w=f("button"),k=d("Add Part"),void 0===e[0]&&A((()=>e[6].call(x))),w.disabled=M=!e[0]||e[0]===e[4][0],g(w,"type","submit")},m(t,o){u(t,n,o),u(t,r,o),u(t,l,o),s(l,c),u(t,y,o),u(t,b,o),s(b,x);for(let t=0;t<j.length;t+=1)j[t]&&j[t].m(x,null);var i;$(x,e[0],!0),s(b,v),C&&C.m(b,null),s(b,_),s(b,w),s(w,k),E||(N=[m(x,"change",e[6]),m(x,"change",e[7]),m(b,"submit",(i=e[5],function(t){return t.preventDefault(),i.call(this,t)}))],E=!0)},p(t,[e]){if(8&e&&O!==(O=JSON.stringify(t[3])+"")&&p(c,O),16&e){let n;for(S=t[4],n=0;n<S.length;n+=1){const o=$t(t,S,n);j[n]?j[n].p(o,e):(j[n]=bt(o),j[n].c(),j[n].m(x,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=S.length}17&e&&$(x,t[0]),t[2].length>0?C?C.p(t,e):(C=xt(t),C.c(),C.m(b,_)):C&&(C.d(1),C=null),17&e&&M!==(M=!t[0]||t[0]===t[4][0])&&(w.disabled=M)},i:t,o:t,d(t){t&&i(n),t&&i(r),t&&i(l),t&&i(y),t&&i(b),a(j,t),C&&C.d(),E=!1,o(N)}}}function wt(t,e,n){let o,r;c(t,V,(t=>n(3,r=t)));const l=[{name:"Choose Part"},at,gt,pt];let s,u;return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=s?.locations??[])},[s,u,o,r,l,function(){var t,e;t=s.name,["front","right","back","left","center"].includes(e=u)&&V.update((n=>Object.assign(n,{[e]:t})))},function(){s=b(this),n(0,s),n(4,l)},()=>n(1,u=s.locations?.[0]),function(){u=b(this),n(1,u),n(2,o),n(0,s)}]}class kt extends R{constructor(t){super(),H(this,t,wt,_t,l,{})}}function Mt(e){let n,o,r,l,c,s;return n=new st({}),r=new mt({}),c=new kt({}),{c(){D(n.$$.fragment),o=h(),D(r.$$.fragment),l=h(),D(c.$$.fragment)},m(t,e){T(n,t,e),u(t,o,e),T(r,t,e),u(t,l,e),T(c,t,e),s=!0},p:t,i(t){s||(L(n.$$.fragment,t),L(r.$$.fragment,t),L(c.$$.fragment,t),s=!0)},o(t){z(n.$$.fragment,t),z(r.$$.fragment,t),z(c.$$.fragment,t),s=!1},d(t){q(n,t),t&&i(o),q(r,t),t&&i(l),q(c,t)}}}return new class extends R{constructor(t){super(),H(this,t,null,Mt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
