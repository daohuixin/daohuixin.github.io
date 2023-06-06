"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3065],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=c;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9088:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const o={},s="selenium",a={unversionedId:"selenium",id:"selenium",title:"selenium",description:"selenium",source:"@site/notes/python/selenium.md",sourceDirName:".",slug:"/selenium",permalink:"/notes/python/selenium",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pip",permalink:"/notes/python/pip"},next:{title:"settings.py",permalink:"/notes/python/settings"}},p={},u=[{value:"selenium",id:"selenium-1",level:3},{value:"selenium-wire",id:"selenium-wire",level:3}],l={toc:u};function m(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"selenium"},"selenium"),(0,i.kt)("h3",{id:"selenium-1"},"selenium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import random\nfrom selenium import webdriver\nfrom time import sleep\nfrom bs4 import BeautifulSoup as BS\n\n\noptions = webdriver.ChromeOptions()\nUA = \'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36\'\noptions.add_argument(f\'user-agent={UA}\')\n\noptions.add_experimental_option("excludeSwitches", ["enable-automation"])\noptions.add_experimental_option(\'useAutomationExtension\', False)\n\n# \u6ca1\u6709\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u8bdd\u9700\u8981\u586b\u5199Chromedriver\u7684\u8def\u5f84\uff1awebdriver.Chrome(executable_path="***")\ndriver = webdriver.Chrome(options=options)\ndriver.maximize_window()\n\n# \u53bb\u6389window.navigator.webdriver\u5b57\u6bb5\uff0c\u9632\u6b62\u88ab\u68c0\u6d4b\u51fa\u662f\u4f7f\u7528selenium\ndriver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {\n  "source": """\n    Object.defineProperty(navigator, \'webdriver\', {\n      get: () => undefined\n    })\n  """\n})\n')),(0,i.kt)("h3",{id:"selenium-wire"},"selenium-wire"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport time\nimport random\nfrom urllib.parse import quote\n\nfrom seleniumwire.utils import decode\nfrom seleniumwire import webdriver\nfrom user_agent import generate_user_agent\n\n\nfrom loguru import logger\n\n\ndef selenium_wire_search(shopname, city):\n    if os.path.exists(f"logs/{city}/{shopname}.json"):\n        print(f"crawled {shopname} {city}")\n        return False\n\n    cities = {"beijing": "2", "shanghai": "1", "guangzhou": "4", "shenzhen": "7"}\n\n    # driver = webdriver.Chrome()\n\n    options = webdriver.ChromeOptions()\n    UA = generate_user_agent(device_type="smartphone")\n    options.add_argument(f"user-agent={UA}")\n    driver = webdriver.Chrome(chrome_options=options)\n\n    # Go to the Google home page\n    shopname_url = quote(shopname, "utf-8")\n    url = f"https://m.dianping.com/shoplist/{cities[city]}/search?from=m_search&keyword={shopname_url}"\n    driver.get(url)\n\n    # Access requests via the `requests` attribute\n    for request in driver.requests:\n        if request.response:\n            if "module" in request.url:\n                print(request.response.status_code)\n                print(request.params, request.body)\n                print(request.response.headers)\n                # print(request.ws_messages)\n                # print(request.body)\n                data = request.response.body\n                try:\n                    if "Content-Encoding" not in request.response.headers.keys():\n                        logger.warning("this request is error")\n                        continue\n                    body = decode(data, request.response.headers.get("Content-Encoding", "gzip"))\n                    print(len(body))\n                    if not os.path.exists(f"logs/{city}"):\n                        os.mkdir(f"logs/{city}")\n\n                    with open(f"logs/{city}/{shopname}.json", "w") as file:\n                        file.write(body.decode("utf-8"))\n                    logger.info(f"save success {shopname} {city}")\n                    break\n                except Exception as err:\n                    logger.error(err)\n\n    driver.quit()\n    return True\n\n\ndef main():\n    with open("logs/dianping_shops.txt", "r", encoding="utf-8") as file:\n        shops = [s.strip() for s in file.readlines()]\n\n    cities = {"beijing": "2", "shanghai": "1", "guangzhou": "4", "shenzhen": "7"}\n    for shopname in shops:\n        print(shopname)\n        for city in list(cities.keys()):\n            temp = selenium_wire_search(shopname, city)\n            if temp:\n                time_sleep = random.randint(5, 10)\n            else:\n                time_sleep = 0\n            print(time_sleep)\n            time.sleep(time_sleep)\n\n\nif __name__ == "__main__":\n    main()\n')))}m.isMDXComponent=!0}}]);