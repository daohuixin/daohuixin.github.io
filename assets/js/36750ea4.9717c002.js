"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6230],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,p=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return t?r.createElement(p,i(i({ref:n},m),{},{components:t})):r.createElement(p,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={},i="mongo",a={unversionedId:"mongo",id:"mongo",title:"mongo",description:"MongoDB \u8bed\u6cd5",source:"@site/notes/python/mongo.md",sourceDirName:".",slug:"/mongo",permalink:"/daohuixin/daohuixin.github.io/notes/python/mongo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mitmproxy",permalink:"/daohuixin/daohuixin.github.io/notes/python/mitmproxy"},next:{title:"multiprocessing",permalink:"/daohuixin/daohuixin.github.io/notes/python/multiprocessing"}},l={},u=[{value:"MongoDB \u8bed\u6cd5",id:"mongodb-\u8bed\u6cd5",level:2},{value:"Mac \u4e0a\u5bfc\u51fa MongoDB \u6570\u636e",id:"mac-\u4e0a\u5bfc\u51fa-mongodb-\u6570\u636e",level:2},{value:"Python \u8c03\u7528 MongoDB",id:"python-\u8c03\u7528-mongodb",level:2}],m={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongo"},"mongo"),(0,o.kt)("h2",{id:"mongodb-\u8bed\u6cd5"},"MongoDB \u8bed\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'db.users.find({ create_at: { $exists: true } })\ndb.users.find() select * from users\ndb.users.find({"age" : 27}) select * from users where age = 27\ndb.users.find({"username" : "joe", "age" : 27}) select * from users where "username" = "joe" and age = 27\ndb.users.find({}, {"username" : 1, "email" : 1}) select username, email from users\ndb.users.find({}, {"username" : 1, "_id" : 0}) // no case  // \u5373\u65f6\u52a0\u4e0a\u4e86\u5217\u7b5b\u9009\uff0c_id\u4e5f\u4f1a\u8fd4\u56de\uff1b\u5fc5\u987b\u663e\u5f0f\u7684\u963b\u6b62_id\u8fd4\u56de\ndb.users.find({"age" : {"$gte" : 18, "$lte" : 30}}) select * from users where age >=18 and age <= 30 // $lt(<) $lte(<=) $gt(>) $gte(>=)\ndb.users.find({"username" : {"$ne" : "joe"}}) select * from users where username <> "joe"\ndb.users.find({"ticket_no" : {"$in" : [725, 542, 390]}}) select * from users where ticket_no in (725, 542, 390)\ndb.users.find({"ticket_no" : {"$nin" : [725, 542, 390]}}) select * from users where ticket_no not in (725, 542, 390)\ndb.users.find({"$or" : [{"ticket_no" : 725}, {"winner" : true}]}) select * form users where ticket_no = 725 or winner = true\ndb.users.find({"id_num" : {"$mod" : [5, 1]}}) select * from users where (id_num mod 5) = 1\ndb.users.find({"$not": {"age" : 27}}) select * from users where not (age = 27)\ndb.users.find({"username" : {"$in" : [null], "$exists" : true}}) select * from users where username is null // \u5982\u679c\u76f4\u63a5\u901a\u8fc7find({"username" : null})\u8fdb\u884c\u67e5\u8be2\uff0c\u90a3\u4e48\u8fde\u5e26"\u6ca1\u6709username"\u7684\u7eaa\u5f55\u4e00\u5e76\u7b5b\u9009\u51fa\u6765\ndb.users.find({"name" : /joey?/i}) // \u6b63\u5219\u67e5\u8be2\uff0cvalue\u662f\u7b26\u5408PCRE\u7684\u8868\u8fbe\u5f0f\ndb.food.find({fruit : {$all : ["apple", "banana"]}}) // \u5bf9\u6570\u7ec4\u7684\u67e5\u8be2, \u5b57\u6bb5fruit\u4e2d\uff0c\u65e2\u5305\u542b"apple",\u53c8\u5305\u542b"banana"\u7684\u7eaa\u5f55\ndb.food.find({"fruit.2" : "peach"}) // \u5bf9\u6570\u7ec4\u7684\u67e5\u8be2, \u5b57\u6bb5fruit\u4e2d\uff0c\u7b2c3\u4e2a(\u4ece0\u5f00\u59cb)\u5143\u7d20\u662fpeach\u7684\u7eaa\u5f55\ndb.food.find({"fruit" : {"$size" : 3}}) // \u5bf9\u6570\u7ec4\u7684\u67e5\u8be2, \u67e5\u8be2\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u662f3\u7684\u8bb0\u5f55\uff0c$size\u524d\u9762\u65e0\u6cd5\u548c\u5176\u4ed6\u7684\u64cd\u4f5c\u7b26\u590d\u5408\u4f7f\u7528\ndb.users.findOne(criteria, {"comments" : {"$slice" : 10}}) // \u5bf9\u6570\u7ec4\u7684\u67e5\u8be2\uff0c\u53ea\u8fd4\u56de\u6570\u7ec4comments\u4e2d\u7684\u524d\u5341\u6761\uff0c\u8fd8\u53ef\u4ee5{"$slice" : -10}\uff0c {"$slice" : [23, 10]}; \u5206\u522b\u8fd4\u56de\u6700\u540e10\u6761\uff0c\u548c\u4e2d\u95f410\u6761\ndb.people.find({"name.first" : "Joe", "name.last" : "Schmoe"})  // \u5d4c\u5957\u67e5\u8be2\ndb.blog.find({"comments" : {"$elemMatch" : {"author" : "joe", "score" : {"$gte" : 5}}}}) // \u5d4c\u5957\u67e5\u8be2\uff0c\u4ec5\u5f53\u5d4c\u5957\u7684\u5143\u7d20\u662f\u6570\u7ec4\u65f6\u4f7f\u7528,\ndb.foo.find({"$where" : "this.x + this.y == 10"}) // \u590d\u6742\u7684\u67e5\u8be2\uff0c$where\u5f53\u7136\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u4f46\u6548\u7387\u4f4e\u4e0b\u3002\u5bf9\u4e8e\u590d\u6742\u67e5\u8be2\uff0c\u8003\u8651\u7684\u987a\u5e8f\u5e94\u5f53\u662f \u6b63\u5219 -> MapReduce -> $where\ndb.foo.find({"$where" : "function() { return this.x + this.y == 10; }"}) // $where\u53ef\u4ee5\u652f\u6301javascript\u51fd\u6570\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\ndb.foo.find().sort({"x" : 1}).limit(1).skip(10); // \u8fd4\u56de\u7b2c(10, 11]\u6761\uff0c\u6309"x"\u8fdb\u884c\u6392\u5e8f; \u4e09\u4e2alimit\u7684\u987a\u5e8f\u662f\u4efb\u610f\u7684\uff0c\u5e94\u8be5\u5c3d\u91cf\u907f\u514dskip\u4e2d\u4f7f\u7528large-number\n')),(0,o.kt)("h2",{id:"mac-\u4e0a\u5bfc\u51fa-mongodb-\u6570\u636e"},"Mac \u4e0a\u5bfc\u51fa MongoDB \u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Mac install mongo tools\nbrew tap mongodb/brew\nbrew install mongodb-database-tools\n# in arch: yay -S --noconfirm mongodb-tools-bin\n\n## export\nmongoexport --host 127.0.0.1:27017 -u user -p passwd --authenticationDatabase admin --db dbname -c cname --forceTableScan  -o res.json\nmongoexport --uri=mongodb://username:password@host:27017/ --authenticationDatabase=admin -d db -c collection -o result.json\n## import\nmongoimport --uri=mongodb://username:password@host:27017/ --authenticationDatabase=admin -d db -c collection --file=result.json\n")),(0,o.kt)("h2",{id:"python-\u8c03\u7528-mongodb"},"Python \u8c03\u7528 MongoDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pymongo\n\ndef connect_mongo(uri, db, tablename):\n    myclient = pymongo.MongoClient(uri)\n    mydb = myclient[db]\n    mycol = mydb[tablename]\n    return mycol, myclient\n\n\nclass MongoAPI:\n    def __init__(self, db="db", tablename="tablename"):\n        self.uri = \u201cmongodb://user:password@host:27017/\u201d\n        self.myclient = pymongo.MongoClient(self.uri)\n        mydb = self.myclient[db]\n        self.mycol = mydb[tablename]\n\n    # values = {"abr": 1}\n \xa0 \xa0def query(self, myquery={"name": "somename"}, values=None, _limit=10):\n        if _limit:\n            result = [q for q in self.mycol.find(query, values).limit(_limit)]\n        else:\n            result = [q for q in self.mycol.find(query, values)]\n        return result\n\n    def save(self, data):\n        try:\n            self.mycol.insert_one(data)\n            return True\n        except Exception as err:\n            if "duplicate key error collection" in str(err):\n                print("saved ", data["_id"])\n            else:\n                print(err)\n                return False\n\n    #  myquery = {"asin": "B07K36J4VP"}\n    #  myquery = { "name": { "$regex": "^F" } }\n    #  newvalues = {"$set": {"comments": "values"}}\n    def update(self, myquery, newvalues):\n        self.mycol.update_one(myquery, newvalues, upsert=False)\n        logger.info(f"update success {myquery}")\n        return True\n\n    def quit(self):\n        self.myclient.close()\n')))}c.isMDXComponent=!0}}]);