"use strict";(self.webpackChunkmy_docusaurus_website=self.webpackChunkmy_docusaurus_website||[]).push([[4608],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var i=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),v=a,f=u["".concat(s,".").concat(v)]||u[v]||d[v]||o;return t?i.createElement(f,n(n({ref:r},c),{},{components:t})):i.createElement(f,n({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,n=new Array(o);n[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var p=2;p<o;p++)n[p]=t[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},466:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(1163),a=(t(9496),t(9613));const o={sidebar_position:2},n="20. JavaScript API",l={unversionedId:"readingNotes/ProfessionalJavaScriptForWebDevelopers/20",id:"readingNotes/ProfessionalJavaScriptForWebDevelopers/20",title:"20. JavaScript API",description:"Atomics \u4e0e SharedArrayBuffer",source:"@site/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/20.md",sourceDirName:"readingNotes/ProfessionalJavaScriptForWebDevelopers",slug:"/readingNotes/ProfessionalJavaScriptForWebDevelopers/20",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/20",draft:!1,editUrl:"https://github.com/Arrrrray/arrrrray.github.io/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/20.md",tags:[],version:"current",lastUpdatedBy:"Junchao",lastUpdatedAt:1668672652,formattedLastUpdatedAt:"2022\u5e7411\u670817\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"19. \u8868\u5355\u811a\u672c",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/19"},next:{title:"21. \u9519\u8bef\u5904\u7406\u4e0e\u8c03\u8bd5",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/21"}},s={},p=[{value:"Atomics \u4e0e SharedArrayBuffer",id:"atomics-\u4e0e-sharedarraybuffer",level:2},{value:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",id:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f",level:2},{value:"Encoding API",id:"encoding-api",level:2},{value:"File API\u4e0eBlob API",id:"file-api\u4e0eblob-api",level:2},{value:"\u5a92\u4f53\u5143\u7d20",id:"\u5a92\u4f53\u5143\u7d20",level:2},{value:"\u539f\u751f\u62d6\u653e",id:"\u539f\u751f\u62d6\u653e",level:2},{value:"Notifications API",id:"notifications-api",level:2},{value:"Page Visibility API",id:"page-visibility-api",level:2},{value:"Streams API",id:"streams-api",level:2},{value:"\u8ba1\u65f6 API",id:"\u8ba1\u65f6-api",level:2},{value:"Web \u7ec4\u4ef6",id:"web-\u7ec4\u4ef6",level:2},{value:"Web Cryptography API",id:"web-cryptography-api",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"20-javascript-api"},"20. JavaScript API"),(0,a.kt)("h2",{id:"atomics-\u4e0e-sharedarraybuffer"},"Atomics \u4e0e SharedArrayBuffer"),(0,a.kt)("h2",{id:"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f"},"\u8de8\u4e0a\u4e0b\u6587\u6d88\u606f"),(0,a.kt)("h2",{id:"encoding-api"},"Encoding API"),(0,a.kt)("h2",{id:"file-api\u4e0eblob-api"},"File API\u4e0eBlob API"),(0,a.kt)("h2",{id:"\u5a92\u4f53\u5143\u7d20"},"\u5a92\u4f53\u5143\u7d20"),(0,a.kt)("h2",{id:"\u539f\u751f\u62d6\u653e"},"\u539f\u751f\u62d6\u653e"),(0,a.kt)("h2",{id:"notifications-api"},"Notifications API"),(0,a.kt)("h2",{id:"page-visibility-api"},"Page Visibility API"),(0,a.kt)("h2",{id:"streams-api"},"Streams API"),(0,a.kt)("h2",{id:"\u8ba1\u65f6-api"},"\u8ba1\u65f6 API"),(0,a.kt)("h2",{id:"web-\u7ec4\u4ef6"},"Web \u7ec4\u4ef6"),(0,a.kt)("h2",{id:"web-cryptography-api"},"Web Cryptography API"),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"))}d.isMDXComponent=!0}}]);