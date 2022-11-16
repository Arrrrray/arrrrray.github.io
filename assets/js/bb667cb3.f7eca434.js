"use strict";(self.webpackChunkmy_docusaurus_website=self.webpackChunkmy_docusaurus_website||[]).push([[8981],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(4250),a=(r(9496),r(9613));const o={sidebar_position:2},l="\u4ec0\u4e48\u662fJavascript",i={unversionedId:"readingNotes/ProfessionalJavaScriptForWebDevelopers/01",id:"readingNotes/ProfessionalJavaScriptForWebDevelopers/01",title:"\u4ec0\u4e48\u662fJavascript",description:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM)",source:"@site/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/01.md",sourceDirName:"readingNotes/ProfessionalJavaScriptForWebDevelopers",slug:"/readingNotes/ProfessionalJavaScriptForWebDevelopers/01",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/01",draft:!1,editUrl:"https://github.com/Arrrrray/arrrrray.github.io/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/01.md",tags:[],version:"current",lastUpdatedBy:"Junchao",lastUpdatedAt:1668578156,formattedLastUpdatedAt:"2022\u5e7411\u670816\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/"},next:{title:"Tools",permalink:"/docs/tools/"}},p={},s=[{value:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM)",id:"\u6587\u6863\u5bf9\u8c61\u6a21\u578bdom",level:2},{value:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",id:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578bbom",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ec0\u4e48\u662fjavascript"},"\u4ec0\u4e48\u662fJavascript"),(0,a.kt)("h2",{id:"\u6587\u6863\u5bf9\u8c61\u6a21\u578bdom"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM)"),(0,a.kt)("p",null,"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM, Document Object Model\uff09\u662f\u4e00\u4e2a\u5e94\u7528\u7f16\u7a0b\u63a5\u53e3\uff08API\uff09\uff0c\u7528\u4e8e\u5728HTML\u4e2d\u4f7f\u7528\u6269\u5c55\u7684XML\u3002DOM\u5c06\u6574\u4e2a\u9875\u9762\u62bd\u8c61\u4e3a\u4e00\u7ec4\u5206\u5c42\u8282\u70b9\u3002HTML\u6216XML\u9875\u9762\u7684\u6bcf\u4e2a\u7ec4\u6210\u90e8\u5206\u90fd\u662f\u4e00\u79cd\u8282\u70b9\uff0c\u5305\u542b\u4e0d\u540c\u7684\u6570\u636e\u3002\u6bd4\u5982\u4e0b\u9762\u7684HTML\u9875\u9762\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n    <head>\n        <title>Sample Page</title>\n    </head>\n    <body>\n        <p> Hello World! </p>\n    </body>\n</html>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Arrrrray/ansel-gallery/5d103fc0b72a5baf710f657728c7306a56c593d1/uPic/2022/11/uzbbEy.png?token=AGHRNVUGL5L2PNJ7CYZIM43DORUZ6",alt:"\u56fe\u7247"})),(0,a.kt)("p",null,"DOM\u901a\u8fc7\u521b\u5efa\u8868\u793a\u6587\u6863\u7684\u6811\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u968f\u5fc3\u6240\u6b32\u5730\u63a7\u5236\u7f51\u9875\u7684\u5185\u5bb9\u548c\u7ed3\u6784\u3002\u4f7f\u7528DOM API\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5220\u9664\u3001\u6dfb\u52a0\u3001\u66ff\u6362\u3001\u4fee\u6539\u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578bbom"},"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09"),(0,a.kt)("p",null,"BOM\u4e3b\u8981\u9488\u5bf9\u6d4f\u89c8\u5668\u7a97\u53e3\u548c\u5b50\u7a97\u53e3\uff08frame\uff09\uff0c\u4e0d\u8fc7\u4eba\u4eec\u901a\u5e38\u4f1a\u628a\u4efb\u4f55\u7279\u5b9a\u4e8e\u6d4f\u89c8\u5668\u7684\u6269\u5c55\u90fd\u5f52\u5728BOM\u7684\u8303\u7574\u5185\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f39\u51fa\u65b0\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u80fd\u529b\uff1b\u2751 \u79fb\u52a8\u3001\u7f29\u653e\u548c\u5173\u95ed\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u80fd\u529b\uff1b"),(0,a.kt)("li",{parentName:"ul"},"navigator\u5bf9\u8c61\uff0c\u63d0\u4f9b\u5173\u4e8e\u6d4f\u89c8\u5668\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"location\u5bf9\u8c61\uff0c\u63d0\u4f9b\u6d4f\u89c8\u5668\u52a0\u8f7d\u9875\u9762\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"screen\u5bf9\u8c61\uff0c\u63d0\u4f9b\u5173\u4e8e\u7528\u6237\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"performance\u5bf9\u8c61\uff0c\u63d0\u4f9b\u6d4f\u89c8\u5668\u5185\u5b58\u5360\u7528\u3001\u5bfc\u822a\u884c\u4e3a\u548c\u65f6\u95f4\u7edf\u8ba1\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9cookie\u7684\u652f\u6301\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u81ea\u5b9a\u4e49\u5bf9\u8c61\uff0c\u5982XMLHttpRequest\u548cIE\u7684ActiveXObject\u3002")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript\u662f\u4e00\u95e8\u7528\u6765\u4e0e\u7f51\u9875\u4ea4\u4e92\u7684\u811a\u672c\u8bed\u8a00"),"\uff0c\u5305\u542b\u4ee5\u4e0b\u4e09\u4e2a\u7ec4\u6210\u90e8\u5206\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ECMAScript\uff1a\u7531ECMA-262\u5b9a\u4e49\u5e76\u63d0\u4f9b\u6838\u5fc3\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09\uff1a\u63d0\u4f9b\u4e0e\u7f51\u9875\u5185\u5bb9\u4ea4\u4e92\u7684\u65b9\u6cd5\u548c\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09\uff1a\u63d0\u4f9b\u4e0e\u6d4f\u89c8\u5668\u4ea4\u4e92\u7684\u65b9\u6cd5\u548c\u63a5\u53e3\u3002")))}u.isMDXComponent=!0}}]);