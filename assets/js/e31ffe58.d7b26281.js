"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,g=c["".concat(a,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(g,s(s({ref:n},f),{},{components:t})):r.createElement(g,s({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=c;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const l={},s="settings.py",i={unversionedId:"settings",id:"settings",title:"settings.py",description:"settings.py example",source:"@site/notes/python/settings.md",sourceDirName:".",slug:"/settings",permalink:"/notes/python/settings",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"selenium",permalink:"/notes/python/selenium"}},a={},p=[{value:"settings.py example",id:"settingspy-example",level:2},{value:"settings.py(old)",id:"settingspyold",level:2}],f={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"settingspy"},"settings.py"),(0,o.kt)("h2",{id:"settingspy-example"},"settings.py example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# settings.py\n# pip install dynaconf loguru\nimport os\n\nfrom loguru import logger\nfrom dynaconf import Dynaconf\n\nBASE_DIR = os.path.abspath(os.path.dirname(__file__)).rstrip("/common")\n\nlog_file_path = os.path.join(BASE_DIR, "logs/stdout.log")\nerr_log_file_path = os.path.join(BASE_DIR, "logs/error.log")\n\nlogger.add(\n    log_file_path,\n    format="{process} {thread} {time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",\n    rotation="100 MB",\n    colorize=True,\n    enqueue=True,\n    backtrace=True,\n    diagnose=True,\n    level="INFO",\n)\nlogger.add(\n    err_log_file_path,\n    format="{time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",\n    rotation="100 MB",\n    level="ERROR",\n    colorize=True,\n    enqueue=True,\n    backtrace=True,\n    diagnose=True,\n)\n\n\nConfig = Dynaconf(settings_files=[".secrets.toml"])\n\nprint(Config.__dict__)\nprint(Config.redis_ip)\n')),(0,o.kt)("h2",{id:"settingspyold"},"settings.py(old)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# pip install python-dotenv pyyaml loguru\nimport os\nimport sys\n\nimport toml\nimport yaml\nfrom loguru import logger\nfrom dotenv import load_dotenv\n\nBASE_DIR = os.path.abspath(os.path.dirname(__file__)).rstrip("/common")\n\nlog_file_path = os.path.join(BASE_DIR, "logs/stdout.log")\nerr_log_file_path = os.path.join(BASE_DIR, "logs/error.log")\n\nlogger.add(\n    log_file_path,\n    format="{process} {thread} {time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",\n    rotation="100 MB",\n    colorize=True,\n    enqueue=True,\n    backtrace=True,\n    diagnose=True,\n    level="INFO",\n)\nlogger.add(\n    err_log_file_path,\n    format="{time:YYYY.MM.DD HH.mm.ss} {level}.{file}.{name}.{module}.{line} {message}",\n    rotation="100 MB",\n    level="ERROR",\n    colorize=True,\n    enqueue=True,\n    backtrace=True,\n    diagnose=True,\n)\n\n\nclass SettingsMeta:\n    def __init__(self, _file=None):\n        self.file = _file\n\n    # read config.yaml\n    def read_yaml(self, key, file="settings.yaml"):\n        if os.path.exists(file):\n            with open(file, "r") as f:\n                con = yaml.safe_load(f)\n            if con:\n                #  logger.debug(con)\n                return con.get(key)\n\n    # read .secrets.toml\n    def read_toml(self, key, file=".secrets.toml"):\n        if os.path.exists(file):\n            con = toml.load(file)\n            if con:\n                #  logger.debug(con)\n                return con.get(key)\n\n    # read .env\n    def read_env(self, key):\n        load_dotenv()\n        return os.getenv(key)\n\n    def __getattr__(self, key):\n        result = None\n\n        file_function = {\n            "yaml": self.read_yaml,\n            "toml": self.read_toml,\n            "env": self.read_env,\n        }\n\n        if self.file:\n            file_type = self.file.split(".")\n            func = file_function.get(file_type[-1])\n            if func:\n                return func(key)\n            else:\n                return\n\n        functions = [self.read_yaml, self.read_toml, self.read_env]\n        for ft in functions:\n            result = ft(key)\n            if result:\n                return result\n        return result\n\n\nsettings = SettingsMeta()\n')))}u.isMDXComponent=!0}}]);