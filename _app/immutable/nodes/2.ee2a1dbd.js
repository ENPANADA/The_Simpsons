import{s as ce,f as W,n as V,r as ee}from"../chunks/scheduler.63274e7e.js";import{S as ue,i as fe,g as d,m as R,s as T,e as $,h as m,j as I,n as A,f as u,c as w,k as v,a as b,x as p,y as x,o as F,z as S,A as ne,t as Y,b as _e,d as Q,p as he,B as pe,r as de,u as me,v as ve,w as be}from"../chunks/index.34ec87e8.js";import"../chunks/paths.1f5662c3.js";function oe(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function ae(a){let e,l,s,t=a[0].Nombre+"",n,o,i,r,g,k,q=a[0].Ocupacion+"",y,h,f,_=a[0].Historia+"",B,N,j,D,J,L,M="Volver",K,X;function z(E,H){return E[0].Estado=="Vivo"?Ee:E[0].Estado=="Fallecido"?Ce:E[0].Estado=="Ficticio"?ke:ge}let P=z(a),c=P(a);function C(E,H){return E[0].Genero=="Masculino"?Ie:Ne}let U=C(a),G=U(a);return{c(){e=d("section"),l=d("div"),s=d("h2"),n=R(t),o=T(),i=d("img"),g=T(),k=d("h3"),y=R(q),h=T(),f=d("p"),B=R(_),N=T(),j=d("p"),c.c(),D=T(),G.c(),J=T(),L=d("button"),L.textContent=M,this.h()},l(E){e=m(E,"SECTION",{class:!0});var H=I(e);l=m(H,"DIV",{class:!0});var O=I(l);s=m(O,"H2",{});var te=I(s);n=A(te,t),te.forEach(u),o=w(O),i=m(O,"IMG",{src:!0,alt:!0}),g=w(O),k=m(O,"H3",{});var le=I(k);y=A(le,q),le.forEach(u),h=w(O),f=m(O,"P",{});var se=I(f);B=A(se,_),se.forEach(u),N=w(O),j=m(O,"P",{class:!0});var Z=I(j);c.l(Z),D=w(Z),G.l(Z),Z.forEach(u),J=w(O),L=m(O,"BUTTON",{"data-svelte-h":!0}),S(L)!=="svelte-5yh4h"&&(L.textContent=M),O.forEach(u),H.forEach(u),this.h()},h(){W(i.src,r=a[0].Imagen)||v(i,"src",r),v(i,"alt",""),v(j,"class","flex"),v(l,"class","contenido"),v(e,"class","info")},m(E,H){b(E,e,H),p(e,l),p(l,s),p(s,n),p(l,o),p(l,i),p(l,g),p(l,k),p(k,y),p(l,h),p(l,f),p(f,B),p(l,N),p(l,j),c.m(j,null),p(j,D),G.m(j,null),p(l,J),p(l,L),K||(X=[x(L,"click",a[3]),x(e,"click",a[4])],K=!0)},p(E,H){H&1&&t!==(t=E[0].Nombre+"")&&F(n,t),H&1&&!W(i.src,r=E[0].Imagen)&&v(i,"src",r),H&1&&q!==(q=E[0].Ocupacion+"")&&F(y,q),H&1&&_!==(_=E[0].Historia+"")&&F(B,_),P===(P=z(E))&&c?c.p(E,H):(c.d(1),c=P(E),c&&(c.c(),c.m(j,D))),U===(U=C(E))&&G?G.p(E,H):(G.d(1),G=U(E),G&&(G.c(),G.m(j,null)))},d(E){E&&u(e),c.d(),G.d(),K=!1,ee(X)}}}function ge(a){let e,l=a[0].Estado+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Desconocido")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Estado+"")&&F(s,l)},d(t){t&&u(e)}}}function ke(a){let e,l=a[0].Estado+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Ficticio")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Estado+"")&&F(s,l)},d(t){t&&u(e)}}}function Ce(a){let e,l=a[0].Estado+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Fallecido")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Estado+"")&&F(s,l)},d(t){t&&u(e)}}}function Ee(a){let e,l=a[0].Estado+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Vivo")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Estado+"")&&F(s,l)},d(t){t&&u(e)}}}function Ne(a){let e,l=a[0].Genero+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Femenino")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Genero+"")&&F(s,l)},d(t){t&&u(e)}}}function Ie(a){let e,l=a[0].Genero+"",s;return{c(){e=d("p"),s=R(l),this.h()},l(t){e=m(t,"P",{class:!0});var n=I(e);s=A(n,l),n.forEach(u),this.h()},h(){v(e,"class","etiqueta Masculino")},m(t,n){b(t,e,n),p(e,s)},p(t,n){n&1&&l!==(l=t[0].Genero+"")&&F(s,l)},d(t){t&&u(e)}}}function Pe(a){let e,l,s=a[0].Nombre+"",t,n,o,i,r,g,k,q,y,h=a[1]==!0&&ae(a);return{c(){e=d("section"),l=d("h2"),t=R(s),n=T(),o=d("img"),g=T(),h&&h.c(),k=$(),this.h()},l(f){e=m(f,"SECTION",{class:!0});var _=I(e);l=m(_,"H2",{});var B=I(l);t=A(B,s),B.forEach(u),n=w(_),o=m(_,"IMG",{src:!0,alt:!0}),_.forEach(u),g=w(f),h&&h.l(f),k=$(),this.h()},h(){W(o.src,i=a[0].Imagen)||v(o,"src",i),v(o,"alt",r=a[0].Nombre),v(e,"class","card")},m(f,_){b(f,e,_),p(e,l),p(l,t),p(e,n),p(e,o),b(f,g,_),h&&h.m(f,_),b(f,k,_),q||(y=x(e,"click",a[2]),q=!0)},p(f,[_]){_&1&&s!==(s=f[0].Nombre+"")&&F(t,s),_&1&&!W(o.src,i=f[0].Imagen)&&v(o,"src",i),_&1&&r!==(r=f[0].Nombre)&&v(o,"alt",r),f[1]==!0?h?h.p(f,_):(h=ae(f),h.c(),h.m(k.parentNode,k)):h&&(h.d(1),h=null)},i:V,o:V,d(f){f&&(u(e),u(g),u(k)),h&&h.d(f),q=!1,y()}}}function je(a,e,l){let{personaje:s}=e,t=!1;const n=()=>l(1,t=!t),o=()=>l(1,t=!t),i=()=>l(1,t=!t);return a.$$set=r=>{"personaje"in r&&l(0,s=r.personaje)},[s,t,n,o,i]}class Te extends ue{constructor(e){super(),fe(this,e,je,Pe,ce,{personaje:0})}}const we=""+new URL("../assets/rosquilla.313dd902.png",import.meta.url).href,qe=""+new URL("../assets/moe-triste.83fad603.png",import.meta.url).href;function re(a,e,l){const s=a.slice();return s[13]=e[l],s}function ye(a){let e,l,s=oe(a[0]),t=[];for(let o=0;o<s.length;o+=1)t[o]=ie(re(a,s,o));const n=o=>Y(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=$()},l(o){for(let i=0;i<t.length;i+=1)t[i].l(o);e=$()},m(o,i){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(o,i);b(o,e,i),l=!0},p(o,i){if(i&1){s=oe(o[0]);let r;for(r=0;r<s.length;r+=1){const g=re(o,s,r);t[r]?(t[r].p(g,i),Q(t[r],1)):(t[r]=ie(g),t[r].c(),Q(t[r],1),t[r].m(e.parentNode,e))}for(he(),r=s.length;r<t.length;r+=1)n(r);_e()}},i(o){if(!l){for(let i=0;i<s.length;i+=1)Q(t[i]);l=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)Y(t[i]);l=!1},d(o){o&&u(e),pe(t,o)}}}function Be(a){let e,l="No se encontraron coincidencias :(",s,t,n;return{c(){e=d("h3"),e.textContent=l,s=T(),t=d("img"),this.h()},l(o){e=m(o,"H3",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1yiacn8"&&(e.textContent=l),s=w(o),t=m(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){v(e,"class","failed"),W(t.src,n=qe)||v(t,"src",n),v(t,"alt","Moe awitado"),v(t,"class","failed-img")},m(o,i){b(o,e,i),b(o,s,i),b(o,t,i)},p:V,i:V,o:V,d(o){o&&(u(e),u(s),u(t))}}}function Ge(a){let e,l;return{c(){e=d("img"),this.h()},l(s){e=m(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,l=we)||v(e,"src",l),v(e,"alt","Rosquilla"),v(e,"class","loading")},m(s,t){b(s,e,t)},p:V,i:V,o:V,d(s){s&&u(e)}}}function ie(a){let e,l;return e=new Te({props:{personaje:a[13]}}),{c(){de(e.$$.fragment)},l(s){me(e.$$.fragment,s)},m(s,t){ve(e,s,t),l=!0},p(s,t){const n={};t&1&&(n.personaje=s[13]),e.$set(n)},i(s){l||(Q(e.$$.fragment,s),l=!0)},o(s){Y(e.$$.fragment,s),l=!1},d(s){be(e,s)}}}function He(a){let e,l="Volver",s,t;return{c(){e=d("button"),e.textContent=l},l(n){e=m(n,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-12qsit7"&&(e.textContent=l)},m(n,o){b(n,e,o),s||(t=x(e,"click",a[7]),s=!0)},p:V,d(n){n&&u(e),s=!1,t()}}}function Oe(a){let e,l="Previous",s,t,n="Next",o,i;return{c(){e=d("button"),e.textContent=l,s=T(),t=d("button"),t.textContent=n},l(r){e=m(r,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-1wopa04"&&(e.textContent=l),s=w(r),t=m(r,"BUTTON",{"data-svelte-h":!0}),S(t)!=="svelte-8cfp7c"&&(t.textContent=n)},m(r,g){b(r,e,g),b(r,s,g),b(r,t,g),o||(i=[x(e,"click",a[4]),x(t,"click",a[5])],o=!0)},p:V,d(r){r&&(u(e),u(s),u(t)),o=!1,ee(i)}}}function Me(a){let e,l="Cargando...";return{c(){e=d("h2"),e.textContent=l},l(s){e=m(s,"H2",{"data-svelte-h":!0}),S(e)!=="svelte-16bgan1"&&(e.textContent=l)},m(s,t){b(s,e,t)},p:V,d(s){s&&u(e)}}}function Ue(a){let e,l="Los Simpsons",s,t,n,o="Nombre:",i,r,g,k,q="Buscar",y,h,f,_,B,N,j,D,J;const L=[Ge,Be,ye],M=[];function K(c,C){return c[1]?0:c[0].length==0?1:2}f=K(a),_=M[f]=L[f](a);function X(c,C){return c[1]?Me:c[2]?He:Oe}let z=X(a),P=z(a);return{c(){e=d("h1"),e.textContent=l,s=T(),t=d("div"),n=d("label"),n.textContent=o,i=T(),r=d("input"),g=T(),k=d("button"),k.textContent=q,y=T(),h=d("article"),_.c(),B=T(),N=d("div"),P.c(),this.h()},l(c){e=m(c,"H1",{"data-svelte-h":!0}),S(e)!=="svelte-139m8ou"&&(e.textContent=l),s=w(c),t=m(c,"DIV",{class:!0});var C=I(t);n=m(C,"LABEL",{for:!0,"data-svelte-h":!0}),S(n)!=="svelte-h4sv61"&&(n.textContent=o),i=w(C),r=m(C,"INPUT",{type:!0,id:!0,placeholder:!0}),g=w(C),k=m(C,"BUTTON",{"data-svelte-h":!0}),S(k)!=="svelte-wlljcw"&&(k.textContent=q),C.forEach(u),y=w(c),h=m(c,"ARTICLE",{class:!0});var U=I(h);_.l(U),U.forEach(u),B=w(c),N=m(c,"DIV",{class:!0});var G=I(N);P.l(G),G.forEach(u),this.h()},h(){v(n,"for","buscar"),v(r,"type","text"),v(r,"id","buscar"),v(r,"placeholder","Homero"),v(t,"class","flex buscador"),v(h,"class","flex"),v(N,"class","flex")},m(c,C){b(c,e,C),b(c,s,C),b(c,t,C),p(t,n),p(t,i),p(t,r),ne(r,a[3]),p(t,g),p(t,k),b(c,y,C),b(c,h,C),M[f].m(h,null),b(c,B,C),b(c,N,C),P.m(N,null),j=!0,D||(J=[x(r,"input",a[8]),x(k,"click",a[6])],D=!0)},p(c,[C]){C&8&&r.value!==c[3]&&ne(r,c[3]);let U=f;f=K(c),f===U?M[f].p(c,C):(he(),Y(M[U],1,1,()=>{M[U]=null}),_e(),_=M[f],_?_.p(c,C):(_=M[f]=L[f](c),_.c()),Q(_,1),_.m(h,null)),z===(z=X(c))&&P?P.p(c,C):(P.d(1),P=z(c),P&&(P.c(),P.m(N,null)))},i(c){j||(Q(_),j=!0)},o(c){Y(_),j=!1},d(c){c&&(u(e),u(s),u(t),u(y),u(h),u(B),u(N)),M[f].d(),P.d(),D=!1,ee(J)}}}function Ve(a,e,l){let s=1,t=[],n=!1,o=!1,i=!1,r=!1,g="";async function k(){l(1,n=!0);const N=await(await fetch("https://apisimpsons.fly.dev/api/personajes?limit=20&page="+s)).json();console.log(N),l(0,t=N.docs),i=N.hasNextPage,r=N.hasPrevPage,s=N.page,l(1,n=!1)}k();function q(){r&&(s-=1,k())}function y(){i&&(s+=1,k())}async function h(){if(g.length!=0){l(1,n=!0);const N=await(await fetch("https://apisimpsons.fly.dev/api/personajes/find/"+g)).json();console.log(N),l(0,t=N.result),i=!1,r=!1,l(1,n=!1),l(2,o=!0)}}function f(){l(2,o=!o),k()}function _(){g=this.value,l(3,g)}return[t,n,o,g,q,y,h,f,_]}class Fe extends ue{constructor(e){super(),fe(this,e,Ve,Ue,ce,{})}}export{Fe as component};
