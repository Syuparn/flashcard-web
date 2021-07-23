var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(s(n,e))}function i(t){return null==t?"":t}function l(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let b;function k(t){b=t}function y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const x=[],v=[],W=[],_=[],w=Promise.resolve();let E=!1;function A(t){W.push(t)}let O=!1;const q=new Set;function N(){if(!O){O=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];k(n),j(n.$$)}for(k(null),x.length=0;v.length;)v.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];q.has(n)||(q.add(n),n())}W.length=0}while(x.length);for(;_.length;)_.pop()();E=!1,O=!1,q.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const C=new Set;function S(t,n){t&&t.i&&(C.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function L(t){t&&t.c()}function T(t,e,c,s){const{fragment:u,on_mount:i,on_destroy:l,after_update:f}=t.$$;u&&u.m(e,c),s||A((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(A)}function F(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,n){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function P(n,r,c,s,u,i,l,f=[-1]){const d=b;k(n);const $=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};l&&l($.root);let p=!1;if($.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&u($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),p&&M(n,t)),e})):[],$.update(),p=!0,o($.before_update),$.fragment=!!s&&s($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();r.intro&&S(n.$$.fragment),T(n,r.target,r.anchor,r.customElement),N()}k(d)}class z{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function G(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!D.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),D.push(e,n)}if(t){for(let t=0;t<D.length;t+=2)D[t][0](D[t+1]);D.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.push(i),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const H=G([{frontWord:"hello",backWord:"こんにちは"},{frontWord:"apple",backWord:"りんご"}]),I=function(n,e,c){const u=!Array.isArray(n),i=u?[n]:n,l=e.length<2;return{subscribe:G(c,(n=>{let c=!1;const f=[];let a=0,d=t;const $=()=>{if(a)return;d();const o=e(u?f[0]:f,n);l?n(o):d=r(o)?o:t},p=i.map(((t,n)=>s(t,(t=>{f[n]=t,a&=~(1<<n),c&&$()}),(()=>{a|=1<<n}))));return c=!0,$(),function(){o(p),d()}})).subscribe}}(H,(t=>t.length));function J(n){let e,o,r,c,s,u=(n[2]?n[1]:n[0])+"";return{c(){e=d("button"),o=$(u),m(e,"class",r=i(n[2]?"back-card":"front-card")+" svelte-ec25i1")},m(t,r){f(t,e,r),l(e,o),c||(s=h(e,"click",n[3]),c=!0)},p(t,[n]){7&n&&u!==(u=(t[2]?t[1]:t[0])+"")&&g(o,u),4&n&&r!==(r=i(t[2]?"back-card":"front-card")+" svelte-ec25i1")&&m(e,"class",r)},i:t,o:t,d(t){t&&a(e),c=!1,s()}}}function K(t,n,e){let{frontWord:o}=n,{backWord:r}=n,c=!1;return t.$$set=t=>{"frontWord"in t&&e(0,o=t.frontWord),"backWord"in t&&e(1,r=t.backWord)},[o,r,c,function(){e(2,c=!c)}]}class Q extends z{constructor(t){super(),P(this,t,K,J,c,{frontWord:0,backWord:1})}}function R(n){let e,o,r,c;return{c(){e=d("button"),o=$(n[0]),m(e,"class","svelte-1i5d73p")},m(t,s){f(t,e,s),l(e,o),r||(c=h(e,"click",n[1]),r=!0)},p(t,[n]){1&n&&g(o,t[0])},i:t,o:t,d(t){t&&a(e),r=!1,c()}}}function U(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o,function(n){y.call(this,t,n)}]}class V extends z{constructor(t){super(),P(this,t,U,R,c,{name:0})}}function X(n){let e;return{c(){e=d("header"),e.textContent="Simple Online Flashcard",m(e,"class","svelte-1thm4bh")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class Y extends z{constructor(t){super(),P(this,t,null,X,c,{})}}function Z(t){let n,e,o,r,c,s,u,i,$,h,g;return e=new Y({}),c=new V({props:{name:"Back"}}),c.$on("click",t[3]),i=new V({props:{name:"Next"}}),i.$on("click",t[2]),h=new Q({props:{frontWord:t[1][t[0]].frontWord,backWord:t[1][t[0]].backWord}}),{c(){n=d("main"),L(e.$$.fragment),o=p(),r=d("div"),L(c.$$.fragment),s=p(),u=d("div"),L(i.$$.fragment),$=p(),L(h.$$.fragment),m(r,"class","left svelte-vktqpl"),m(u,"class","right svelte-vktqpl"),m(n,"class","svelte-vktqpl")},m(t,a){f(t,n,a),T(e,n,null),l(n,o),l(n,r),T(c,r,null),l(n,s),l(n,u),T(i,u,null),l(n,$),T(h,n,null),g=!0},p(t,[n]){const e={};3&n&&(e.frontWord=t[1][t[0]].frontWord),3&n&&(e.backWord=t[1][t[0]].backWord),h.$set(e)},i(t){g||(S(e.$$.fragment,t),S(c.$$.fragment,t),S(i.$$.fragment,t),S(h.$$.fragment,t),g=!0)},o(t){B(e.$$.fragment,t),B(c.$$.fragment,t),B(i.$$.fragment,t),B(h.$$.fragment,t),g=!1},d(t){t&&a(n),F(e),F(c),F(i),F(h)}}}function tt(t,n,e){let o,r;u(t,I,(t=>e(4,o=t))),u(t,H,(t=>e(1,r=t)));let c=0;return[c,r,function(){e(0,c=(c+1)%o)},function(){e(0,c=(c+o-1)%o)}]}return new class extends z{constructor(t){super(),P(this,t,tt,Z,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
