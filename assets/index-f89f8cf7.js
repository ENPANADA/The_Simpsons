var we=Object.defineProperty;var Ee=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var x=(t,e,n)=>(Ee(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function j(){}function de(t){return t()}function oe(){return Object.create(null)}function F(t){t.forEach(de)}function _e(t){return typeof t=="function"}function pe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Y;function J(t,e){return t===e?!0:(Y||(Y=document.createElement("a")),Y.href=e,t===Y.href)}function Ne(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function je(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function N(){return O(" ")}function me(){return O("")}function B(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ce(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function re(t,e){t.value=e??""}let le;function Q(t){le=t}const U=[],ie=[];let z=[];const se=[],Oe=Promise.resolve();let te=!1;function qe(){te||(te=!0,Oe.then(he))}function ne(t){z.push(t)}const ee=new Set;let T=0;function he(){if(T!==0)return;const t=le;do{try{for(;T<U.length;){const e=U[T];T++,Q(e),Pe(e.$$)}}catch(e){throw U.length=0,T=0,e}for(Q(null),U.length=0,T=0;ie.length;)ie.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];ee.has(n)||(ee.add(n),n())}z.length=0}while(U.length);for(;se.length;)se.pop()();te=!1,ee.clear(),Q(t)}function Pe(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ne)}}function Ie(t){const e=[],n=[];z.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),z=e}const Z=new Set;let V;function ge(){V={r:0,c:[],p:V}}function be(){V.r||F(V.c),V=V.p}function R(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),V.c.push(()=>{Z.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function ce(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Le(t){t&&t.c()}function ve(t,e,n){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),ne(()=>{const r=t.$$.on_mount.map(de).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...r):F(r),t.$$.on_mount=[]}),l.forEach(ne)}function ye(t,e){const n=t.$$;n.fragment!==null&&(Ie(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(t,e){t.$$.dirty[0]===-1&&(U.push(t),qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,o,l,r,i=null,s=[-1]){const c=le;Q(t);const f=t.$$={fragment:null,ctx:[],props:r,update:j,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:oe(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};i&&i(f.root);let k=!1;if(f.ctx=n?n(t,e.props||{},(h,g,...a)=>{const p=a.length?a[0]:g;return f.ctx&&l(f.ctx[h],f.ctx[h]=p)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](p),k&&Ae(t,h)),g}):[],f.update(),k=!0,F(f.before_update),f.fragment=o?o(f.ctx):!1,e.target){if(e.hydrate){const h=Ce(e.target);f.fragment&&f.fragment.l(h),h.forEach(v)}else f.fragment&&f.fragment.c();e.intro&&R(t.$$.fragment),ve(t,e.target,e.anchor),he()}Q(c)}class $e{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){ye(this,1),this.$destroy=j}$on(e,n){if(!_e(n))return j;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Se);function ue(t){let e,n,o,l=t[0].Nombre+"",r,i,s,c,f,k,h=t[0].Ocupacion+"",g,a,p,b=t[0].Historia+"",I,E,q,H,P,M,D,G;function C($,A){return $[0].Estado=="Vivo"?Ge:$[0].Estado=="Fallecido"?Me:$[0].Estado=="Ficticio"?Fe:Be}let m=C(t),w=m(t);function K($,A){return $[0].Genero=="Masculino"?Re:Ve}let X=K(t),L=X(t);return{c(){e=d("section"),n=d("div"),o=d("h2"),r=O(l),i=N(),s=d("img"),f=N(),k=d("h3"),g=O(h),a=N(),p=d("p"),I=O(b),E=N(),q=d("p"),w.c(),H=N(),L.c(),P=N(),M=d("button"),M.textContent="Volver",J(s.src,c=t[0].Imagen)||_(s,"src",c),_(s,"alt",""),_(q,"class","flex"),_(n,"class","contenido"),_(e,"class","info")},m($,A){y($,e,A),u(e,n),u(n,o),u(o,r),u(n,i),u(n,s),u(n,f),u(n,k),u(k,g),u(n,a),u(n,p),u(p,I),u(n,E),u(n,q),w.m(q,null),u(q,H),L.m(q,null),u(n,P),u(n,M),D||(G=[B(M,"click",t[3]),B(e,"click",t[4])],D=!0)},p($,A){A&1&&l!==(l=$[0].Nombre+"")&&S(r,l),A&1&&!J(s.src,c=$[0].Imagen)&&_(s,"src",c),A&1&&h!==(h=$[0].Ocupacion+"")&&S(g,h),A&1&&b!==(b=$[0].Historia+"")&&S(I,b),m===(m=C($))&&w?w.p($,A):(w.d(1),w=m($),w&&(w.c(),w.m(q,H))),X===(X=K($))&&L?L.p($,A):(L.d(1),L=X($),L&&(L.c(),L.m(q,null)))},d($){$&&v(e),w.d(),L.d(),D=!1,F(G)}}}function Be(t){let e,n=t[0].Estado+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Desconocido")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Estado+"")&&S(o,n)},d(l){l&&v(e)}}}function Fe(t){let e,n=t[0].Estado+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Ficticio")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Estado+"")&&S(o,n)},d(l){l&&v(e)}}}function Me(t){let e,n=t[0].Estado+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Fallecido")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Estado+"")&&S(o,n)},d(l){l&&v(e)}}}function Ge(t){let e,n=t[0].Estado+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Vivo")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Estado+"")&&S(o,n)},d(l){l&&v(e)}}}function Ve(t){let e,n=t[0].Genero+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Femenino")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Genero+"")&&S(o,n)},d(l){l&&v(e)}}}function Re(t){let e,n=t[0].Genero+"",o;return{c(){e=d("p"),o=O(n),_(e,"class","etiqueta Masculino")},m(l,r){y(l,e,r),u(e,o)},p(l,r){r&1&&n!==(n=l[0].Genero+"")&&S(o,n)},d(l){l&&v(e)}}}function He(t){let e,n,o=t[0].Nombre+"",l,r,i,s,c,f,k,h,g,a=t[1]==!0&&ue(t);return{c(){e=d("section"),n=d("h2"),l=O(o),r=N(),i=d("img"),f=N(),a&&a.c(),k=me(),J(i.src,s=t[0].Imagen)||_(i,"src",s),_(i,"alt",c=t[0].Nombre),_(e,"class","card")},m(p,b){y(p,e,b),u(e,n),u(n,l),u(e,r),u(e,i),y(p,f,b),a&&a.m(p,b),y(p,k,b),h||(g=B(e,"click",t[2]),h=!0)},p(p,[b]){b&1&&o!==(o=p[0].Nombre+"")&&S(l,o),b&1&&!J(i.src,s=p[0].Imagen)&&_(i,"src",s),b&1&&c!==(c=p[0].Nombre)&&_(i,"alt",c),p[1]==!0?a?a.p(p,b):(a=ue(p),a.c(),a.m(k.parentNode,k)):a&&(a.d(1),a=null)},i:j,o:j,d(p){p&&(v(e),v(f),v(k)),a&&a.d(p),h=!1,g()}}}function De(t,e,n){let{personaje:o}=e,l=!1;const r=()=>n(1,l=!l),i=()=>n(1,l=!l),s=()=>n(1,l=!l);return t.$$set=c=>{"personaje"in c&&n(0,o=c.personaje)},[o,l,r,i,s]}class Ke extends $e{constructor(e){super(),ke(this,e,De,He,pe,{personaje:0})}}const Te="/assets/rosquilla-313dd902.png",Ue="/assets/moe-triste-83fad603.png";function fe(t,e,n){const o=t.slice();return o[13]=e[n],o}function ze(t){let e,n,o=ce(t[0]),l=[];for(let i=0;i<o.length;i+=1)l[i]=ae(fe(t,o,i));const r=i=>W(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=me()},m(i,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,s);y(i,e,s),n=!0},p(i,s){if(s&1){o=ce(i[0]);let c;for(c=0;c<o.length;c+=1){const f=fe(i,o,c);l[c]?(l[c].p(f,s),R(l[c],1)):(l[c]=ae(f),l[c].c(),R(l[c],1),l[c].m(e.parentNode,e))}for(ge(),c=o.length;c<l.length;c+=1)r(c);be()}},i(i){if(!n){for(let s=0;s<o.length;s+=1)R(l[s]);n=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)W(l[s]);n=!1},d(i){i&&v(e),je(l,i)}}}function Je(t){let e,n,o,l;return{c(){e=d("h3"),e.textContent="No se encontraron coincidencias :(",n=N(),o=d("img"),_(e,"class","failed"),J(o.src,l=Ue)||_(o,"src",l),_(o,"alt","Moe awitado"),_(o,"class","failed-img")},m(r,i){y(r,e,i),y(r,n,i),y(r,o,i)},p:j,i:j,o:j,d(r){r&&(v(e),v(n),v(o))}}}function Qe(t){let e,n;return{c(){e=d("img"),J(e.src,n=Te)||_(e,"src",n),_(e,"alt","Rosquilla"),_(e,"class","loading")},m(o,l){y(o,e,l)},p:j,i:j,o:j,d(o){o&&v(e)}}}function ae(t){let e,n;return e=new Ke({props:{personaje:t[13]}}),{c(){Le(e.$$.fragment)},m(o,l){ve(e,o,l),n=!0},p(o,l){const r={};l&1&&(r.personaje=o[13]),e.$set(r)},i(o){n||(R(e.$$.fragment,o),n=!0)},o(o){W(e.$$.fragment,o),n=!1},d(o){ye(e,o)}}}function We(t){let e,n,o;return{c(){e=d("button"),e.textContent="Volver"},m(l,r){y(l,e,r),n||(o=B(e,"click",t[7]),n=!0)},p:j,d(l){l&&v(e),n=!1,o()}}}function Xe(t){let e,n,o,l,r;return{c(){e=d("button"),e.textContent="Previous",n=N(),o=d("button"),o.textContent="Next"},m(i,s){y(i,e,s),y(i,n,s),y(i,o,s),l||(r=[B(e,"click",t[4]),B(o,"click",t[5])],l=!0)},p:j,d(i){i&&(v(e),v(n),v(o)),l=!1,F(r)}}}function Ye(t){let e;return{c(){e=d("h2"),e.textContent="Cargando..."},m(n,o){y(n,e,o)},p:j,d(n){n&&v(e)}}}function Ze(t){let e,n,o,l,r,i,s,c,f,k,h,g,a,p,b,I,E,q;const H=[Qe,Je,ze],P=[];function M(m,w){return m[1]?0:m[0].length==0?1:2}g=M(t),a=P[g]=H[g](t);function D(m,w){return m[1]?Ye:m[2]?We:Xe}let G=D(t),C=G(t);return{c(){e=d("main"),n=d("h1"),n.textContent="Los Simpsons",o=N(),l=d("div"),r=d("label"),r.textContent="Nombre:",i=N(),s=d("input"),c=N(),f=d("button"),f.textContent="Buscar",k=N(),h=d("article"),a.c(),p=N(),b=d("div"),C.c(),_(r,"for","buscar"),_(s,"type","text"),_(s,"id","buscar"),_(s,"placeholder","Homero"),_(l,"class","flex buscador"),_(h,"class","flex"),_(b,"class","flex")},m(m,w){y(m,e,w),u(e,n),u(e,o),u(e,l),u(l,r),u(l,i),u(l,s),re(s,t[3]),u(l,c),u(l,f),u(e,k),u(e,h),P[g].m(h,null),u(e,p),u(e,b),C.m(b,null),I=!0,E||(q=[B(s,"input",t[8]),B(f,"click",t[6])],E=!0)},p(m,[w]){w&8&&s.value!==m[3]&&re(s,m[3]);let K=g;g=M(m),g===K?P[g].p(m,w):(ge(),W(P[K],1,1,()=>{P[K]=null}),be(),a=P[g],a?a.p(m,w):(a=P[g]=H[g](m),a.c()),R(a,1),a.m(h,null)),G===(G=D(m))&&C?C.p(m,w):(C.d(1),C=G(m),C&&(C.c(),C.m(b,null)))},i(m){I||(R(a),I=!0)},o(m){W(a),I=!1},d(m){m&&v(e),P[g].d(),C.d(),E=!1,F(q)}}}function xe(t,e,n){let o=1,l=[],r=!1,i=!1,s=!1,c=!1,f="";async function k(){n(1,r=!0);const E=await(await fetch("https://apisimpsons.fly.dev/api/personajes?limit=20&page="+o)).json();console.log(E),n(0,l=E.docs),s=E.hasNextPage,c=E.hasPrevPage,o=E.page,n(1,r=!1)}k();function h(){c&&(o-=1,k())}function g(){s&&(o+=1,k())}async function a(){if(f.length!=0){n(1,r=!0);const E=await(await fetch("https://apisimpsons.fly.dev/api/personajes/find/"+f)).json();console.log(E),n(0,l=E.result),s=!1,c=!1,n(1,r=!1),n(2,i=!0)}}function p(){n(2,i=!i),k()}function b(){f=this.value,n(3,f)}return[l,r,i,f,h,g,a,p,b]}class et extends $e{constructor(e){super(),ke(this,e,xe,Ze,pe,{})}}new et({target:document.getElementById("app")});
