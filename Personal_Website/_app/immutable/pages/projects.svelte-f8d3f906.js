import{S as Z,i as x,s as ee,J as ge,e as k,c as S,a as w,d as p,b as d,g as j,K as me,L as _e,M as de,q as _,o as $,w as O,x as U,y as K,B as N,k as A,t as B,m as W,h as V,F as v,n as H,p as q,j as Y,Y as ue,X as z,E as be,O as ve,l as se,Z as $e,v as ke,W as Se}from"../chunks/index-19ddfbb4.js";import{B as fe}from"../chunks/Button-eab4a6d2.js";import{a as we}from"../chunks/index-77673a6d.js";function je(l){let e,i;const t=l[1].default,a=ge(t,l,l[0],null);return{c(){e=k("div"),a&&a.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var u=w(e);a&&a.l(u),u.forEach(p),this.h()},h(){d(e,"class","svelte-1suyqjr")},m(s,u){j(s,e,u),a&&a.m(e,null),i=!0},p(s,[u]){a&&a.p&&(!i||u&1)&&me(a,t,s,s[0],i?de(t,s[0],u,null):_e(s[0]),null)},i(s){i||(_(a,s),i=!0)},o(s){$(a,s),i=!1},d(s){s&&p(e),a&&a.d(s)}}}function Le(l,e,i){let{$$slots:t={},$$scope:a}=e;return l.$$set=s=>{"$$scope"in s&&i(0,a=s.$$scope)},[a,t]}class Pe extends Z{constructor(e){super(),x(this,e,Le,je,ee,{})}}function ie(l,e,i){const t=l.slice();return t[2]=e[i],t}function De(l){let e,i,t;return{c(){e=k("img"),this.h()},l(a){e=S(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){z(e.src,i=l[0].imageRoute)||d(e,"src",i),d(e,"alt",t=l[0].imageAlt),d(e,"class","svelte-1i4hrmd")},m(a,s){j(a,e,s)},p(a,s){s&1&&!z(e.src,i=a[0].imageRoute)&&d(e,"src",i),s&1&&t!==(t=a[0].imageAlt)&&d(e,"alt",t)},d(a){a&&p(e)}}}function Ee(l){let e,i,t;return{c(){e=k("video"),i=k("source"),this.h()},l(a){e=S(a,"VIDEO",{width:!0,height:!0});var s=w(e);i=S(s,"SOURCE",{src:!0,type:!0}),s.forEach(p),this.h()},h(){z(i.src,t=l[0].imageRoute)||d(i,"src",t),d(i,"type","video/mp4"),d(e,"width","100%"),d(e,"height","100%"),e.controls=!0},m(a,s){j(a,e,s),v(e,i)},p(a,s){s&1&&!z(i.src,t=a[0].imageRoute)&&d(i,"src",t)},d(a){a&&p(e)}}}function Re(l){let e=l[2]+"",i;return{c(){i=B(e)},l(t){i=V(t,e)},m(t,a){j(t,i,a)},p(t,a){a&1&&e!==(e=t[2]+"")&&Y(i,e)},d(t){t&&p(i)}}}function le(l){let e,i;return e=new Pe({props:{$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){K(e,t,a),i=!0},p(t,a){const s={};a&33&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){i||(_(e.$$.fragment,t),i=!0)},o(t){$(e.$$.fragment,t),i=!1},d(t){N(e,t)}}}function Te(l){let e;return{c(){e=B("Github")},l(i){e=V(i,"Github")},m(i,t){j(i,e,t)},d(i){i&&p(e)}}}function ne(l){let e,i;return e=new fe({props:{width:"40%",link:l[0].liveLink,target:"_blank",$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){K(e,t,a),i=!0},p(t,a){const s={};a&1&&(s.link=t[0].liveLink),a&32&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){i||(_(e.$$.fragment,t),i=!0)},o(t){$(e.$$.fragment,t),i=!1},d(t){N(e,t)}}}function ye(l){let e;return{c(){e=B("Live")},l(i){e=V(i,"Live")},m(i,t){j(i,e,t)},d(i){i&&p(e)}}}function Ie(l){let e,i,t,a,s,u,o,h=l[0].projectTitle+"",r,T,y,G=l[0].projectDescription+"",J,Q,P,D,F,I;function he(n,c){return n[1]==="mp4"?Ee:De}let C=he(l)(l),E=l[0].languages,f=[];for(let n=0;n<E.length;n+=1)f[n]=le(ie(l,E,n));const pe=n=>$(f[n],1,1,()=>{f[n]=null});D=new fe({props:{width:"40%",link:l[0].githubLink,target:"_blank",$$slots:{default:[Te]},$$scope:{ctx:l}}});let g=l[0].liveLink&&ne(l);return{c(){e=k("div"),C.c(),i=A(),t=k("div"),a=k("div");for(let n=0;n<f.length;n+=1)f[n].c();s=A(),u=k("div"),o=k("h1"),r=B(h),T=A(),y=k("p"),J=B(G),Q=A(),P=k("div"),O(D.$$.fragment),F=A(),g&&g.c(),this.h()},l(n){e=S(n,"DIV",{class:!0});var c=w(e);C.l(c),i=W(c),t=S(c,"DIV",{class:!0});var b=w(t);a=S(b,"DIV",{class:!0});var m=w(a);for(let X=0;X<f.length;X+=1)f[X].l(m);m.forEach(p),s=W(b),u=S(b,"DIV",{});var R=w(u);o=S(R,"H1",{});var te=w(o);r=V(te,h),te.forEach(p),T=W(R),y=S(R,"P",{class:!0});var ae=w(y);J=V(ae,G),ae.forEach(p),R.forEach(p),Q=W(b),P=S(b,"DIV",{class:!0});var M=w(P);U(D.$$.fragment,M),F=W(M),g&&g.l(M),M.forEach(p),b.forEach(p),c.forEach(p),this.h()},h(){d(a,"class","pill-container"),d(y,"class","svelte-1i4hrmd"),d(P,"class","button-container svelte-1i4hrmd"),d(t,"class","content-container svelte-1i4hrmd"),d(e,"class","container svelte-1i4hrmd")},m(n,c){j(n,e,c),C.m(e,null),v(e,i),v(e,t),v(t,a);for(let b=0;b<f.length;b+=1)f[b].m(a,null);v(t,s),v(t,u),v(u,o),v(o,r),v(u,T),v(u,y),v(y,J),v(t,Q),v(t,P),K(D,P,null),v(P,F),g&&g.m(P,null),I=!0},p(n,[c]){if(C.p(n,c),c&1){E=n[0].languages;let m;for(m=0;m<E.length;m+=1){const R=ie(n,E,m);f[m]?(f[m].p(R,c),_(f[m],1)):(f[m]=le(R),f[m].c(),_(f[m],1),f[m].m(a,null))}for(H(),m=E.length;m<f.length;m+=1)pe(m);q()}(!I||c&1)&&h!==(h=n[0].projectTitle+"")&&Y(r,h),(!I||c&1)&&G!==(G=n[0].projectDescription+"")&&Y(J,G);const b={};c&1&&(b.link=n[0].githubLink),c&32&&(b.$$scope={dirty:c,ctx:n}),D.$set(b),n[0].liveLink?g?(g.p(n,c),c&1&&_(g,1)):(g=ne(n),g.c(),_(g,1),g.m(P,null)):g&&(H(),$(g,1,1,()=>{g=null}),q())},i(n){if(!I){for(let c=0;c<E.length;c+=1)_(f[c]);_(D.$$.fragment,n),_(g),I=!0}},o(n){f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)$(f[c]);$(D.$$.fragment,n),$(g),I=!1},d(n){n&&p(e),C.d(),ue(f,n),N(D),g&&g.d()}}}function Ae(l,e,i){let{cardInfo:t}=e,a=t.imageRoute.split(".").pop();return l.$$set=s=>{"cardInfo"in s&&i(0,t=s.cardInfo)},[t,a]}class We extends Z{constructor(e){super(),x(this,e,Ae,Ie,ee,{cardInfo:0})}}var Ge="/Personal_Website/Personal_Website/_app/immutable/assets/Game-58b01d2c.png",Ce="/Personal_Website/Personal_Website/_app/immutable/assets/Vulkan-52d2caa9.png",Be="/Personal_Website/Personal_Website/_app/immutable/assets/MatchEnd-292f937a.png",Ve="/Personal_Website/Personal_Website/_app/immutable/assets/RagkarDemo-63136159.mp4",Je="/Personal_Website/Personal_Website/_app/immutable/assets/EcologicDemo-ff252775.mp4",Me="/Personal_Website/Personal_Website/_app/immutable/assets/CromaScreenshot-b06c6de6.png",He="/Personal_Website/Personal_Website/_app/immutable/assets/IsalaScreenshot-19d90e72.png",qe="/Personal_Website/Personal_Website/_app/immutable/assets/GStainScreenshot-95322325.png";const L=[];L.push({imageRoute:Ve,imageAlt:'Image of the "Ragkar"',languages:["Python","C","MQTT","HTML","CSS","Javascript","Websockets","RTSP","PI","ESP32"],projectTitle:"Ragkar",projectDescription:"A small car, which can be controlled from a website. The website also has a video stream, which streams a first person view of the car.",githubLink:"https://github.com/AnnoyingDog99/Ragkar"});L.push({imageRoute:Je,imageAlt:"Screenshot of Ecologic",languages:["Unity","C#","HLSL","Shadergraph","CG"],projectTitle:"Ecologic",projectDescription:"An ecosystem simulation build with Unity, with generated terrain and organisms that interact with each other.",githubLink:"https://github.com/AnnoyingDog99/Ecosystem-simulation"});L.push({imageRoute:Ge,imageAlt:"Gboggle game screen",languages:["Svelte","Node","Typescript","HTML","SCSS","Rollup","Express","Redis","Socket.io"],projectTitle:"GBoggle",projectDescription:"GBoggle is a web application based on the board game Boggle.",githubLink:"https://github.com/Jitzek/GBoggle"});L.push({imageRoute:Be,imageAlt:"Darts app screenshot",languages:["SvelteKit","Typescript","SCSS","Jest","HTML","Vite"],projectTitle:"Badminton",projectDescription:"Badminton is a web application for keeping track of your darts matches. ",githubLink:"https://github.com/JorunnO/Badminton"});L.push({imageRoute:Ce,imageAlt:"Screenshot render engine",languages:["Vulkan","C++","CMake","GLSL"],projectTitle:"Vulkan graphics engine",projectDescription:"Gengine is a custom game engine made with Vulkan",githubLink:"https://github.com/AnnoyingDog99/GEngine"});L.push({imageRoute:Me,imageAlt:"Screenshot robotics website",languages:["HTML","Css","Javascript","Websockets","Python"],projectTitle:"Robotics website",projectDescription:"A site made for info about our robot for the robotics tournament",githubLink:"https://github.com/Jitzek/TCS-Simulation",liveLink:"https://jitzek.github.io/croma-web-site/home.html"});L.push({imageRoute:He,imageAlt:"Screenshot homepage Isala",languages:["HTML","Css","Javascript","PHP","LDAP","MySQL"],projectTitle:"Isala",projectDescription:`A website created for Isala to monitor diabetus patients. 
	Website was made for a project based on security, where students tried to find vulnerabilities in eachothers websites.`,githubLink:"https://github.com/Jitzek/isala-web-app"});L.push({imageRoute:qe,imageAlt:"Screenshot Gstain",languages:["Java","Javafx"],projectTitle:"Gstain",projectDescription:"A drawing app that tries to copy Adobe Illustrator. This project was made to learn about design patterns.",githubLink:"https://github.com/Jitzek/GStain"});function oe(l,e,i){const t=l.slice();return t[1]=e[i],t}function re(l){let e,i,t,a=L,s=[];for(let o=0;o<a.length;o+=1)s[o]=ce(oe(l,a,o));const u=o=>$(s[o],1,1,()=>{s[o]=null});return{c(){e=k("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var h=w(e);for(let r=0;r<s.length;r+=1)s[r].l(h);h.forEach(p),this.h()},h(){d(e,"class","card-container svelte-1g4kscd")},m(o,h){j(o,e,h);for(let r=0;r<s.length;r+=1)s[r].m(e,null);t=!0},p(o,h){if(h&0){a=L;let r;for(r=0;r<a.length;r+=1){const T=oe(o,a,r);s[r]?(s[r].p(T,h),_(s[r],1)):(s[r]=ce(T),s[r].c(),_(s[r],1),s[r].m(e,null))}for(H(),r=a.length;r<s.length;r+=1)u(r);q()}},i(o){if(!t){for(let h=0;h<a.length;h+=1)_(s[h]);i||ve(()=>{i=Se(e,we,{delay:100}),i.start()}),t=!0}},o(o){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)$(s[h]);t=!1},d(o){o&&p(e),ue(s,o)}}}function ce(l){let e,i;return e=new We({props:{cardInfo:l[1]}}),{c(){O(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){K(e,t,a),i=!0},p:be,i(t){i||(_(e.$$.fragment,t),i=!0)},o(t){$(e.$$.fragment,t),i=!1},d(t){N(e,t)}}}function ze(l){let e,i,t,a=l[0]&&re(l);return{c(){e=A(),a&&a.c(),i=se(),this.h()},l(s){$e('[data-svelte="svelte-5oeyam"]',document.head).forEach(p),e=W(s),a&&a.l(s),i=se(),this.h()},h(){document.title="Projects"},m(s,u){j(s,e,u),a&&a.m(s,u),j(s,i,u),t=!0},p(s,[u]){s[0]?a?(a.p(s,u),u&1&&_(a,1)):(a=re(s),a.c(),_(a,1),a.m(i.parentNode,i)):a&&(H(),$(a,1,1,()=>{a=null}),q())},i(s){t||(_(a),t=!0)},o(s){$(a),t=!1},d(s){s&&p(e),a&&a.d(s),s&&p(i)}}}function Oe(l,e,i){let t=!1;return ke(()=>{i(0,t=!0)}),[t]}class Fe extends Z{constructor(e){super(),x(this,e,Oe,ze,ee,{})}}export{Fe as default};
