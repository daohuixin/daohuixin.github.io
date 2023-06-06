"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},i="django",p={unversionedId:"django",id:"django",title:"django",description:"cors",source:"@site/notes/python/django.md",sourceDirName:".",slug:"/django",permalink:"/daohuixin/daohuixin.github.io/notes/python/django",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"database",permalink:"/daohuixin/daohuixin.github.io/notes/python/databases"},next:{title:"fastapi",permalink:"/daohuixin/daohuixin.github.io/notes/python/fastapi"}},c={},s=[{value:"cors",id:"cors",level:3}],l={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"django"},"django"),(0,o.kt)("h3",{id:"cors"},"cors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install django-cors-headers\n\nINSTALLED_APPS = (\n    ...\n    'corsheaders',\n    ...\n)\n\nMIDDLEWARE = [\n    ...\n    'corsheaders.middleware.CorsMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    ...\n]\n\nCORS_ALLOW_CREDENTIALS = True\nCORS_ORIGIN_ALLOW_ALL = True\n# CORS_ORIGIN_WHITELIST = ('*')\nCORS_ALLOW_METHODS = (\n    'DELETE',\n    'GET',\n    'OPTIONS',\n    'PATCH',\n    'POST',\n    'PUT',\n    'VIEW',\n)\n\nCORS_ALLOW_HEADERS = (\n    'XMLHttpRequest',\n    'X_FILENAME',\n    'accept-encoding',\n    'authorization',\n    'content-type',\n    'dnt',\n    'origin',\n    'user-agent',\n    'x-csrftoken',\n    'x-requested-with',\n    'Pragma',\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport django\nfrom proxyip.models import ProxyIP\n\nos.environ['DJANGO_SETTINGS_MODULE'] = 'dj_project.settings'\ndjango.setup()\n\np = ProxyIP(ip='192.168.50.1')\np.save()\nprint(ProxyIP.objects.all())\n\npython manage.py shell < main.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python manage.py dumpdata (myapp) > myapp.json\n\npython manage.py loaddata myapp.json\n")))}u.isMDXComponent=!0}}]);