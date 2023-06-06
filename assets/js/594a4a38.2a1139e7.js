"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="file",c={unversionedId:"bash-tutorial/archives/commands/file",id:"bash-tutorial/archives/commands/file",title:"file",description:"file\u547d\u4ee4\u7528\u6765\u67e5\u770b\u67d0\u4e2a\u6587\u4ef6\u7684\u7c7b\u578b\u3002",source:"@site/docs/bash-tutorial/archives/commands/file.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/file",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/commands/file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"export",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/commands/export"},next:{title:"find",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/commands/find"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file"},"file"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"file"),"\u547d\u4ee4\u7528\u6765\u67e5\u770b\u67d0\u4e2a\u6587\u4ef6\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ file index.html\n index.html: HTML document, ASCII text\n")),(0,a.kt)("p",null,"file \u5de5\u5177\u53ef\u4ee5\u5bf9\u6240\u7ed9\u7684\u6587\u4ef6\u8f93\u51fa\u4e00\u884c\u7b80\u77ed\u7684\u4ecb\u7ecd\uff0c\u5b83\u7528\u6587\u4ef6\u540e\u7f00\u3001\u5934\u90e8\u4fe1\u606f\u548c\u4e00\u4e9b\u5176\u4ed6\u7684\u7ebf\u7d22\u6765\u5224\u65ad\u6587\u4ef6\u3002\u4f60\u5728\u68c0\u67e5\u4e00\u5806\u4f60\u4e0d\u719f\u6089\u7684\u6587\u4ef6\u65f6\u4f7f\u7528 find \u975e\u5e38\u65b9\u4fbf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find -exec file {} \\;\n.:            directory\n./hanoi:      Perl script, ASCII text executable\n./.hanoi.swp: Vim swap file, version 7.3\n./factorial:  Perl script, ASCII text executable\n./bits.c:     C source, ASCII text\n./bits:       ELF 32-bit LSB executable, Intel 80386, version ...\n")))}p.isMDXComponent=!0}}]);