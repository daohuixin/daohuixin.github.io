"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[253],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6445:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},c="code server",s={unversionedId:"code_server",id:"code_server",title:"code server",description:"docker-compose.yml",source:"@site/notes/docker/code_server.md",sourceDirName:".",slug:"/code_server",permalink:"/notes/docker/code_server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cloudreve minIO alist",permalink:"/notes/docker/cloudreve"},next:{title:"ddns",permalink:"/notes/docker/ddns"}},i={},l=[{value:"docker-compose.yml",id:"docker-composeyml",level:2}],p={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-server"},"code server"),(0,o.kt)("h2",{id:"docker-composeyml"},"docker-compose.yml"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linuxserver/docker-code-server"},"address"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nversion: "2.1"\nservices:\n  code-server:\n    image: lscr.io/linuxserver/code-server:latest\n    container_name: code-server\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Asia/Shanghai\n      - PASSWORD=cpgroup #optional\n      - HASHED_PASSWORD= #optional\n      - SUDO_PASSWORD=cpgroup #optional\n      - SUDO_PASSWORD_HASH= #optional\n      - PROXY_DOMAIN=code-server.my.domain #optional\n      - DEFAULT_WORKSPACE=/spider_manage_websites_data #optional\n    volumes:\n      - ./data/code_server/config:/config\n      - /home/cp/spider_manage_websites_data:/spider_manage_websites_data\n    ports:\n      - 192.168.32.4:8443:8443\n    restart: unless-stopped\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n')))}d.isMDXComponent=!0}}]);