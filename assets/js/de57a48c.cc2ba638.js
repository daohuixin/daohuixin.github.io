"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,u(u({ref:t},p),{},{components:a})):n.createElement(k,u({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,u=new Array(r);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,u[1]=s;for(var o=2;o<r;o++)u[o]=a[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={},u="\u786c\u4ef6\u64cd\u4f5c",s={unversionedId:"bash-tutorial/archives/hardware",id:"bash-tutorial/archives/hardware",title:"\u786c\u4ef6\u64cd\u4f5c",description:"df",source:"@site/docs/bash-tutorial/archives/hardware.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/hardware",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/hardware",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/hardware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6\u7cfb\u7edf",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/file"},next:{title:"\u4e3b\u673a\u7ba1\u7406",permalink:"/daohuixin/daohuixin.github.io/docs/bash-tutorial/archives/host"}},i={},o=[{value:"df",id:"df",level:2},{value:"free",id:"free",level:2},{value:"\u786c\u76d8",id:"\u786c\u76d8",level:2},{value:"mount",id:"mount",level:2},{value:"umount",id:"umount",level:2},{value:"fdisk",id:"fdisk",level:2},{value:"mkfs",id:"mkfs",level:2},{value:"fsck",id:"fsck",level:2},{value:"dd",id:"dd",level:2},{value:"dmidecode",id:"dmidecode",level:2},{value:"lspci",id:"lspci",level:2},{value:"lsusb",id:"lsusb",level:2}],p={toc:o};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u786c\u4ef6\u64cd\u4f5c"},"\u786c\u4ef6\u64cd\u4f5c"),(0,l.kt)("h2",{id:"df"},"df"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"df"),"\u547d\u4ee4\u67e5\u770b\u786c\u76d8\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ df\nFilesystem 1K-blocks Used Available Use% Mounted on\n/dev/sda2 15115452 5012392 9949716 34% /\n/dev/sda5 59631908 26545424 30008432 47% /home\n/dev/sda1 147764 17370 122765 13% /boot\n")),(0,l.kt)("h2",{id:"free"},"free"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"free"),"\u547d\u4ee4\u67e5\u770b\u5185\u5b58\u5360\u7528\u60c5\u51b5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ free\n total used free shared buffers cached\nMem: 513712 503976 9736 0 5312 122916\n-/+ buffers/cache: 375748 137964\nSwap: 1052248 104712 947536\n")),(0,l.kt)("h2",{id:"\u786c\u76d8"},"\u786c\u76d8"),(0,l.kt)("p",null,"\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),"\u914d\u7f6e\u7cfb\u7edf\u542f\u52a8\u65f6\u8981\u6302\u8f7d\u7684\u8bbe\u5907\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LABEL=/12               /               ext3        defaults        1   1\nLABEL=/home             /home           ext3        defaults        1   2\nLABEL=/boot             /boot           ext3        defaults        1   2\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e00\u5171\u67096\u4e2a\u5b57\u6bb5\uff0c\u542b\u4e49\u4f9d\u6b21\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u540d\uff1a\u4e0e\u7269\u7406\u8bbe\u5907\u76f8\u5173\u8054\u7684\u8bbe\u5907\u6587\u4ef6\uff08\u6216\u8bbe\u5907\u6807\u7b7e\uff09\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u8bf4",(0,l.kt)("inlineCode",{parentName:"li"},"/dev/hda1"),"\uff08\u7b2c\u4e00\u4e2a IDE \u901a\u9053\u4e0a\u7b2c\u4e00\u4e2a\u4e3b\u8bbe\u5907\u5206\u533a\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u70b9\uff1a\u8bbe\u5907\u6240\u8fde\u63a5\u5230\u7684\u6587\u4ef6\u7cfb\u7edf\u6811\u7684\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff1aLinux \u5141\u8bb8\u6302\u8f7d\u8bb8\u591a\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u9879\uff1a\u6587\u4ef6\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u5404\u79cd\u5404\u6837\u7684\u9009\u9879\u6765\u6302\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9891\u7387\uff1a\u4e00\u4f4d\u6570\u5b57\uff0c\u6307\u5b9a\u662f\u5426\u548c\u5728\u4ec0\u4e48\u65f6\u95f4\u7528 dump \u547d\u4ee4\u6765\u5907\u4efd\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b21\u5e8f\uff1a\u4e00\u4f4d\u6570\u5b57\uff0c\u6307\u5b9a fsck \u547d\u4ee4\u6309\u7167\u4ec0\u4e48\u6b21\u5e8f\u6765\u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf\u3002")),(0,l.kt)("h2",{id:"mount"},"mount"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mount"),"\u4e0d\u5e26\u53c2\u6570\u65f6\uff0c\u663e\u793a\u5f53\u524d\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mount\n/dev/sda2 on / type ext3 (rw)\nproc on /proc type proc (rw)\nsysfs on /sys type sysfs (rw)\ndevpts on /dev/pts type devpts (rw,gid=5,mode=620)\n/dev/sda5 on /home type ext3 (rw)\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5217\u8868\u7684\u683c\u5f0f\u662f\uff1a\u8bbe\u5907 on \u6302\u8f7d\u70b9 type \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff08\u53ef\u9009\u7684\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mount"),"\u5e26\u53c2\u6570\u65f6\uff0c\u7528\u4e8e\u5c06\u8bbe\u5907\u6587\u4ef6\u6302\u8f7d\u5230\u6302\u8f7d\u70b9\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-t"),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mount -t iso9660 /dev/hdc /mnt/cdrom\n\n# \u6302\u8f7d\u4e00\u4e2aiso\u6587\u4ef6\n$ mount -t iso9660 -o loop image.iso /mnt/iso_image\n")),(0,l.kt)("h2",{id:"umount"},"umount"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"umount"),"\u547d\u4ee4\u7528\u6765\u5378\u8f7d\u8bbe\u5907\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ umount [\u8bbe\u5907\u540d]\n\n$ umount /dev/hdc\n")),(0,l.kt)("h2",{id:"fdisk"},"fdisk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fdisk"),"\u547d\u4ee4\u7528\u4e8e\u683c\u5f0f\u5316\u78c1\u76d8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo umount /dev/sdb1\n$ sudo fdisk /dev/sdb\n")),(0,l.kt)("h2",{id:"mkfs"},"mkfs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mkfs"),"\u547d\u4ee4\u7528\u4e8e\u5728\u4e00\u4e2a\u8bbe\u5907\u4e0a\u65b0\u5efa\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mkfs -t ext3 /dev/sdb1\n$ sudo mkfs -t vfat /dev/sdb1\n")),(0,l.kt)("h2",{id:"fsck"},"fsck"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fsck"),"\u547d\u4ee4\u7528\u4e8e\u68c0\u67e5\uff08\u4fee\u590d\uff09\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo fsck /dev/sdb1\n")),(0,l.kt)("h2",{id:"dd"},"dd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dd"),"\u547d\u4ee4\u7528\u4e8e\u5c06\u5927\u578b\u6570\u636e\u5757\uff0c\u4ece\u4e00\u4e2a\u78c1\u76d8\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u78c1\u76d8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ dd if=input_file of=output_file [bs=block_size [count=blocks]]\n\n# \u5c06 /dev/sdb \u7684\u6240\u6709\u6570\u636e\u590d\u5236\u5230 /dev/sdc\n$ dd if=/dev/sdb of=/dev/sdc\n\n# \u5c06 /dev/sdb \u7684\u6240\u6709\u6570\u636e\u62f7\u8d1d\u5230\u4e00\u4e2a\u955c\u50cf\u6587\u4ef6\n$ dd if=/dev/sdb of=flash_drive.img\n\n# \u4ececdrom\u5236\u4f5c\u4e00\u4e2aiso\u6587\u4ef6\n$ dd if=/dev/cdrom of=ubuntu.iso\n")),(0,l.kt)("h2",{id:"dmidecode"},"dmidecode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dmidecode"),"\u547d\u4ee4\u7528\u4e8e\u8f93\u51faBIOS\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo dmidecode\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u8f93\u51fa\u5168\u90e8BIOS\u4fe1\u606f\u3002\u4e3a\u4e86\u4fbf\u4e8e\u67e5\u770b\uff0c\u5f80\u5f80\u9700\u8981\u6307\u5b9a\u6240\u9700\u4fe1\u606f\u7684\u7c7b\u522b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 BIOS"),(0,l.kt)("li",{parentName:"ul"},"1 System"),(0,l.kt)("li",{parentName:"ul"},"2 Base Board"),(0,l.kt)("li",{parentName:"ul"},"3 Chassis 4 Processor"),(0,l.kt)("li",{parentName:"ul"},"5 Memory Controller"),(0,l.kt)("li",{parentName:"ul"},"6 Memory Module"),(0,l.kt)("li",{parentName:"ul"},"7 Cache"),(0,l.kt)("li",{parentName:"ul"},"8 Port Connector"),(0,l.kt)("li",{parentName:"ul"},"9 System Slots"),(0,l.kt)("li",{parentName:"ul"},"10 On Board Devices"),(0,l.kt)("li",{parentName:"ul"},"11 OEM Strings"),(0,l.kt)("li",{parentName:"ul"},"12 System Configuration Options"),(0,l.kt)("li",{parentName:"ul"},"13 BIOS Language"),(0,l.kt)("li",{parentName:"ul"},"14 Group Associations"),(0,l.kt)("li",{parentName:"ul"},"15 System Event Log"),(0,l.kt)("li",{parentName:"ul"},"16 Physical Memory Array"),(0,l.kt)("li",{parentName:"ul"},"17 Memory Device"),(0,l.kt)("li",{parentName:"ul"},"18 32-bit Memory Error"),(0,l.kt)("li",{parentName:"ul"},"19 Memory Array Mapped Address"),(0,l.kt)("li",{parentName:"ul"},"20 Memory Device Mapped Address"),(0,l.kt)("li",{parentName:"ul"},"21 Built-in Pointing Device"),(0,l.kt)("li",{parentName:"ul"},"22 Portable Battery"),(0,l.kt)("li",{parentName:"ul"},"23 System Reset"),(0,l.kt)("li",{parentName:"ul"},"24 Hardware Security"),(0,l.kt)("li",{parentName:"ul"},"25 System Power Controls"),(0,l.kt)("li",{parentName:"ul"},"26 Voltage Probe"),(0,l.kt)("li",{parentName:"ul"},"27 Cooling Device"),(0,l.kt)("li",{parentName:"ul"},"28 Temperature Probe"),(0,l.kt)("li",{parentName:"ul"},"29 Electrical Current Probe"),(0,l.kt)("li",{parentName:"ul"},"30 Out-of-band Remote Access"),(0,l.kt)("li",{parentName:"ul"},"31 Boot Integrity Services"),(0,l.kt)("li",{parentName:"ul"},"32 System Boot"),(0,l.kt)("li",{parentName:"ul"},"33 64-bit Memory Error"),(0,l.kt)("li",{parentName:"ul"},"34 Management Device"),(0,l.kt)("li",{parentName:"ul"},"35 Management Device Component"),(0,l.kt)("li",{parentName:"ul"},"36 Management Device Threshold Data"),(0,l.kt)("li",{parentName:"ul"},"37 Memory Channel"),(0,l.kt)("li",{parentName:"ul"},"38 IPMI Device"),(0,l.kt)("li",{parentName:"ul"},"39 Power Supply")),(0,l.kt)("p",null,"\u67e5\u770b\u5185\u5b58\u4fe1\u606f\u7684\u547d\u4ee4\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo dmidecode -t 17\n# \u6216\u8005\n$ dmidecode --type 17\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770bBIOS\u4fe1\u606f\n$ sudo dmidecode \u2013t 0\n\n# \u67e5\u770bCPU\u4fe1\u606f\n$ sudo dmidecode -t 4\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dmidecode"),"\u4e5f\u652f\u6301\u5173\u952e\u8bcd\u67e5\u770b\uff0c\u5173\u952e\u8bcd\u4e0e\u7c7b\u522b\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bios 0, 13"),(0,l.kt)("li",{parentName:"ul"},"system 1, 12, 15, 23, 32"),(0,l.kt)("li",{parentName:"ul"},"baseboard 2, 10"),(0,l.kt)("li",{parentName:"ul"},"chassis 3"),(0,l.kt)("li",{parentName:"ul"},"processor 4"),(0,l.kt)("li",{parentName:"ul"},"memory 5, 6, 16, 17"),(0,l.kt)("li",{parentName:"ul"},"cache 7"),(0,l.kt)("li",{parentName:"ul"},"connector 8"),(0,l.kt)("li",{parentName:"ul"},"slot 9")),(0,l.kt)("p",null,"\u67e5\u770b\u7cfb\u7edf\u4fe1\u606f\u7684\u547d\u4ee4\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo dmidecode -t system\n")),(0,l.kt)("h2",{id:"lspci"},"lspci"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lspci"),"\u547d\u4ee4\u5217\u51fa\u672c\u673a\u7684\u6240\u6709PCI\u8bbe\u5907\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lspci\n")),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u8f93\u51fa\u4fe1\u606f\u7684\u683c\u5f0f\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"03:00.0 Unassigned class [ff00]: Realtek Semiconductor Co., Ltd. RTS5209 PCI Express Card Reader (rev 01)\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4fe1\u606f\u4e00\u5171\u5206\u6210\u4e09\u4e2a\u5b57\u6bb5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Field 1\uff1aPCI bus slot \u7684\u7f16\u53f7"),(0,l.kt)("li",{parentName:"ul"},"Field 2\uff1aPCI slot\u7684\u540d\u5b57"),(0,l.kt)("li",{parentName:"ul"},"Field 3\uff1a\u8bbe\u5907\u540d\u548c\u5382\u5546\u540d")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u67e5\u770b\u66f4\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lspci -vmm\n")),(0,l.kt)("h2",{id:"lsusb"},"lsusb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lsusb"),"\u547d\u4ee4\u7528\u4e8e\u64cd\u4f5cUSB\u7aef\u53e3\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u547d\u4ee4\u5217\u51fa\u672c\u673a\u6240\u6709USB\u7aef\u53e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsusb\n")),(0,l.kt)("p",null,"\u5b83\u7684\u8f93\u51fa\u683c\u5f0f\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Bus 002 Device 003: ID 0781:5567 SanDisk Corp. Cruzer Blade\n")),(0,l.kt)("p",null,"\u5404\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bus 002 : bus\u7f16\u53f7"),(0,l.kt)("li",{parentName:"ul"},"Device 003\uff1abus 002\u8fde\u63a5\u7684\u7b2c\u4e09\u4e2a\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"ID 0781:5567\uff1a\u5f53\u524d\u8bbe\u5907\u7684\u7f16\u53f7\uff0c\u5192\u53f7\u524d\u662f\u5382\u5546\u7f16\u53f7\uff0c\u5192\u53f7\u540e\u662f\u8bbe\u5907\u7f16\u53f7"),(0,l.kt)("li",{parentName:"ul"},"SanDisk Corp. Cruzer Blade\uff1a\u5382\u5546\u548c\u8bbe\u5907\u540d")),(0,l.kt)("p",null,"\u627e\u51fa\u672c\u673a\u6709\u591a\u5c11\u4e2aUSB\u63a5\u53e3\u53ef\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ find /dev/bus/\n/dev/bus/\n/dev/bus/usb\n/dev/bus/usb/002\n/dev/bus/usb/002/006\n/dev/bus/usb/002/005\n/dev/bus/usb/002/004\n/dev/bus/usb/002/002\n/dev/bus/usb/002/001\n/dev/bus/usb/001\n/dev/bus/usb/001/007\n/dev/bus/usb/001/003\n/dev/bus/usb/001/002\n/dev/bus/usb/001/001\n")),(0,l.kt)("p",null,"\u67e5\u770b\u67d0\u4e2aUSB\u8bbe\u5907\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsusb -D /dev/bus/usb/002/005\n")),(0,l.kt)("p",null,"\u67e5\u770b\u6240\u6709\u8bbe\u5907\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsusb -v\n")),(0,l.kt)("p",null,"\u67e5\u770bUSB\u7aef\u53e3\u7684\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsusb -v | grep -i bcdusb\n")))}d.isMDXComponent=!0}}]);