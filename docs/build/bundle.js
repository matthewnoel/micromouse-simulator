var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){t.parentNode&&t.parentNode.removeChild(t)}let u;function a(t){u=t}const f=[],i=[];let l=[];const d=[],p=Promise.resolve();let $=!1;function h(t){l.push(t)}const g=new Set;let m=0;function y(){if(0!==m)return;const t=u;do{try{for(;m<f.length;){const t=f[m];m++,a(t),_(t.$$)}}catch(t){throw f.length=0,m=0,t}for(a(null),f.length=0,m=0;i.length;)i.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];g.has(n)||(g.add(n),n())}l.length=0}while(f.length);for(;d.length;)d.pop()();$=!1,g.clear(),a(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const b=new Set;function x(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];l.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),l=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function k(t,n){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(c,f,i,l,d,p,$,g=[-1]){const m=u;a(c);const _=c.$$={fragment:null,ctx:[],props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:f.target||m.$$.root};$&&$(_.root);let x=!1;if(_.ctx=i?i(c,f.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return _.ctx&&d(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),x&&k(c,t)),n})):[],_.update(),x=!0,o(_.before_update),_.fragment=!!l&&l(_.ctx),f.target){if(f.hydrate){const t=function(t){return Array.from(t.childNodes)}(f.target);_.fragment&&_.fragment.l(t),t.forEach(s)}else _.fragment&&_.fragment.c();f.intro&&((E=c.$$.fragment)&&E.i&&(b.delete(E),E.i(v))),function(t,e,c,s){const{fragment:u,after_update:a}=t.$$;u&&u.m(e,c),s||h((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(h)}(c,f.target,f.anchor,f.customElement),y()}var E,v;a(m)}class v{$destroy(){x(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function w(n){let e;return{c(){var t;t="p",e=document.createElement(t),e.innerHTML='Hello <span class="svelte-17yzm6g">World</span>'},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}return new class extends v{constructor(t){super(),E(this,t,null,w,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
