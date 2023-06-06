"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},c="which",i={unversionedId:"bash-tutorial/archives/commands/which",id:"bash-tutorial/archives/commands/which",title:"which",description:"which\u547d\u4ee4\u6839\u636ePATH\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684\u987a\u5e8f\uff0c\u8fd4\u56de\u6700\u65e9\u53d1\u73b0\u67d0\u4e2a\u547d\u4ee4\u7684\u4f4d\u7f6e\u3002\u5373\u4e0d\u6307\u5b9a\u8def\u5f84\u65f6\uff0c\u5b9e\u9645\u6267\u884c\u7684\u547d\u4ee4\u7684\u5b8c\u6574\u8def\u5f84\u3002",source:"@site/docs/bash-tutorial/archives/commands/which.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/which",permalink:"/docs/bash-tutorial/archives/commands/which",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/which.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"whereis",permalink:"/docs/bash-tutorial/archives/commands/whereis"},next:{title:"who",permalink:"/docs/bash-tutorial/archives/commands/who"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"which"},"which"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"which"),"\u547d\u4ee4\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684\u987a\u5e8f\uff0c\u8fd4\u56de\u6700\u65e9\u53d1\u73b0\u67d0\u4e2a\u547d\u4ee4\u7684\u4f4d\u7f6e\u3002\u5373\u4e0d\u6307\u5b9a\u8def\u5f84\u65f6\uff0c\u5b9e\u9645\u6267\u884c\u7684\u547d\u4ee4\u7684\u5b8c\u6574\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ which node\n/usr/bin/node\n")))}p.isMDXComponent=!0}}]);