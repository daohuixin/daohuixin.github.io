"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8669],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:e},p),{},{components:t})):r.createElement(f,o({ref:e},p))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},737:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:0},o="python",l={unversionedId:"index",id:"index",title:"python",description:"basic",source:"@site/notes/python/index.md",sourceDirName:".",slug:"/",permalink:"/daohuixin/daohuixin.github.io/notes/python/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"celery",permalink:"/daohuixin/daohuixin.github.io/notes/python/celery"}},s={},c=[{value:"basic",id:"basic",level:3},{value:"decorator try",id:"decorator-try",level:3},{value:"datetime",id:"datetime",level:3},{value:"read big file",id:"read-big-file",level:3},{value:"csv",id:"csv",level:3},{value:"execl",id:"execl",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"xmljson",id:"xmljson",level:3},{value:"mysql",id:"mysql",level:3},{value:"\u8f6c\u7801",id:"\u8f6c\u7801",level:3},{value:"\u7701\u5e02\u5206\u5272",id:"\u7701\u5e02\u5206\u5272",level:3}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python"},"python"),(0,a.kt)("h3",{id:"basic"},"basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# json\njson.dumps(item, ensure_ascii=False, indent=4)\n\n# jmespath\nhttps://jmespath.org/tutorial.html\n\n# random\nrandom.shuffle(_list)\n\n# \u5bf9\u5b57\u5178\u6392\u5e8f\nsorted(_dict.items(), key=lambda d: d[1], reverse=False)\n\n# unicode replace\nrepr()\n\n### http server\npy2 python -m SimpleHTTPServer 8000\npy3 python -m http.server 8000\n\n# \u683c\u5f0f\u5316\u8f93\u51fa\nprint(\"{:02d}\".format(1))\nprint(f\"{1:02d}\")\n\n# \u4e58\u6cd5\u8868\nprint ('\\n'.join([' '.join(['%s*%s=%-2s' % (y,x,x*y) for y in range(1,x+1)]) for x in range(1,10)]))\n")),(0,a.kt)("h3",{id:"decorator-try"},"decorator try"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import functools\n\ndef decorator_try(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as err:\n            print(err)\n            return err\n\n    return wrapper\n")),(0,a.kt)("h3",{id:"datetime"},(0,a.kt)("a",{parentName:"h3",href:"https://docs.python.org/zh-cn/3/library/datetime.html#datetime.timezone"},"datetime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pip install python-dateutil\n\n# yestoday\nfrom datetime import datetime, timedelta\n\n# days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0\nyestoday = datetime.today() - timedelta(days=1)\nprint(yestoday)\n\nfrom datetime import datetime\nfrom dateutil import parser\n\nformat_time = datetime.now().strftime(\"%m/%d/%Y, %H:%M:%S\")\n\nt = \"Thu, 9 Sep 2021 00:17:59\"\nresult = parser.parse(t)\nprint(result)\nprint(type(result))\n\nnow = datetime.now()\nprint((now - result).days)\n\n>>> import arrow\n>>> arrow.get('2013-05-11T21:23:58.970460+07:00')\n<Arrow [2013-05-11T21:23:58.970460+07:00]>\n\n>>> utc = arrow.utcnow()\n>>> utc\n<Arrow [2013-05-11T21:23:58.970460+00:00]>\n\n>>> utc = utc.shift(hours=-1)\n>>> utc\n<Arrow [2013-05-11T20:23:58.970460+00:00]>\n\n>>> local = utc.to('US/Pacific')\n>>> local\n<Arrow [2013-05-11T13:23:58.970460-07:00]>\n\n>>> local.timestamp()\n1368303838.970460\n\n>>> local.format()\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.format('YYYY-MM-DD HH:mm:ss ZZ')\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.humanize()\n'an hour ago'\n\n>>> local.humanize(locale='ko-kr')\n'\ud55c\uc2dc\uac04 \uc804'\n")),(0,a.kt)("h3",{id:"read-big-file"},"read big file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("log.txt") as infile:\n    for line in infile:\n        do_something_with(line)\n')),(0,a.kt)("h3",{id:"csv"},"csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import csv\n\n# read\nresult = []\ninput_file = csv.DictReader(open("result.csv"))\nfor row in input_file:\n    result.append(row)\nprint(result)\n\n\n# write dict\nmy_dict = {"test": 1, "testing": 2}\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, my_dict.keys())\n    w.writeheader()\n    w.writerow(my_dict)\n\n# write list\nresult = [{"test": 1, "testing": 2}, {"test": 1, "testing": 2}]\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, result[0].keys())\n    w.writeheader()\n    w.writerows(result)\n')),(0,a.kt)("h3",{id:"execl"},"execl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# write\npip install pandas openpyxl\n\n# dict\nimport pandas as pd\ndf = pd.DataFrame.from_dict({'Column1':[1,2,3,4],'Column2':[5,6,7,8]})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# list\nimport pandas as pd\nColumn1 = [1,2,3,4]\nColumn2 = [5,6,7,8]\ndf = pd.DataFrame.from_dict({'Column1':Column1,'Column2':Column2})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# read\nimport pandas as pd\n\ndf = pd.read_excel(\"example.xlsx\", index_col=0)\ndata_dict = df.to_dict(\"records\")\nprint(data_dict)\n")),(0,a.kt)("h3",{id:"asyncio"},"asyncio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport time\n\ndef now(): return time.time()\n\nasync def do_some_work(x):\n    print('Waiting: ', x)\n\n    await asyncio.sleep(x)\n    return 'Done after {}s'.format(x)\n\nstart = now()\n\ncoroutine1 = do_some_work(1)\ncoroutine2 = do_some_work(2)\ncoroutine3 = do_some_work(4)\n\ntasks = [\n    asyncio.ensure_future(coroutine1),\n    asyncio.ensure_future(coroutine2),\n    asyncio.ensure_future(coroutine3)\n]\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(asyncio.wait(tasks))\n\nfor task in tasks:\n    print('Task ret: ', task.result())\n\nprint('TIME: ', now() - start)\n\n\n# yield\ndef create_generator(_range):\n    for i in range(_range):\n        yield i\n\nresult = create_generator(5)\nfor i in result:\n    print(i)\n")),(0,a.kt)("h3",{id:"xmljson"},"xmljson"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import xmljson\nfrom lxml.etree import  fromstring,tostring\n\njson.loads(json.dumps(xmljson.badgerfish.data(fromstring(con.encode()))))\n")),(0,a.kt)("h3",{id:"mysql"},"mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# install mysql-clients\n\n# in archlinux\nsudo pacman --noconfirm -S mysql-clients gcc\npip install mysqlclient\n\n# mac\nbrew install mysql-client\necho \'export PATH="/usr/local/opt/mysql-client/bin:$PATH"\' >> ~/.bash_profile\nexport PATH="/usr/local/opt/mysql-client/bin:$PATH"\npip install mysqlclient\n')),(0,a.kt)("h3",{id:"\u8f6c\u7801"},"\u8f6c\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport chardet\n\n\ndef trans(filename):\n    print("file=====", filename)\n    with open(f"txt/{filename}", "rb") as file:\n        con = file.read()\n    _char = chardet.detect(con)["encoding"]\n    print("char is ", _char)\n\n    if "utf-8" in _char or "UTF-8" in _char:\n        cmd = f"mv txt/{filename} result/{filename}"\n    else:\n        cmd = f"iconv -c -f {_char} -t UTF-8 txt/{filename} > result/{filename}"\n    print(cmd)\n    os.system(cmd)\n\n\ndef main():\n    txts = os.listdir("txt")\n    for txt in txts:\n        if ".txt" not in txt:\n            print(txt)\n            continue\n        try:\n            trans(txt)\n        except Exception as err:\n            print(err)\n        continue\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"\u7701\u5e02\u5206\u5272"},"\u7701\u5e02\u5206\u5272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'pip install cpca\nresult = cpca.transform("xx\u7701xx\u5e02xx\u533a", pos_sensitive=True).to_dict("list")\n')))}d.isMDXComponent=!0}}]);