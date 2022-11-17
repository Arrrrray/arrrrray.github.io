"use strict";(self.webpackChunkmy_docusaurus_website=self.webpackChunkmy_docusaurus_website||[]).push([[6423],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?o.createElement(v,i(i({ref:r},p),{},{components:t})):o.createElement(v,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(4250),n=(t(9496),t(9613));const a={sidebar_position:2},i="27. \u5de5\u4f5c\u8005\u7ebf\u7a0b",s={unversionedId:"readingNotes/ProfessionalJavaScriptForWebDevelopers/27",id:"readingNotes/ProfessionalJavaScriptForWebDevelopers/27",title:"27. \u5de5\u4f5c\u8005\u7ebf\u7a0b",description:"\u5de5\u4f5c\u8005\u7ebf\u7a0b\u7b80\u4ecb",source:"@site/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/27.md",sourceDirName:"readingNotes/ProfessionalJavaScriptForWebDevelopers",slug:"/readingNotes/ProfessionalJavaScriptForWebDevelopers/27",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/27",draft:!1,editUrl:"https://github.com/Arrrrray/arrrrray.github.io/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/27.md",tags:[],version:"current",lastUpdatedBy:"Junchao",lastUpdatedAt:1668672652,formattedLastUpdatedAt:"2022\u5e7411\u670817\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"26. \u6a21\u5757",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/26"},next:{title:"28. \u6700\u4f73\u5b9e\u8df5",permalink:"/docs/readingNotes/ProfessionalJavaScriptForWebDevelopers/28"}},l={},c=[{value:"\u5de5\u4f5c\u8005\u7ebf\u7a0b\u7b80\u4ecb",id:"\u5de5\u4f5c\u8005\u7ebf\u7a0b\u7b80\u4ecb",level:2},{value:"\u4e13\u7528\u5de5\u4f5c\u8005\u7ebf\u7a0b",id:"\u4e13\u7528\u5de5\u4f5c\u8005\u7ebf\u7a0b",level:2},{value:"\u5171\u4eab\u5de5\u4f5c\u8005\u7ebf\u7a0b",id:"\u5171\u4eab\u5de5\u4f5c\u8005\u7ebf\u7a0b",level:2},{value:"\u670d\u52a1\u5de5\u4f5c\u8005\u7ebf\u7a0b",id:"\u670d\u52a1\u5de5\u4f5c\u8005\u7ebf\u7a0b",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"27-\u5de5\u4f5c\u8005\u7ebf\u7a0b"},"27. \u5de5\u4f5c\u8005\u7ebf\u7a0b"),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u8005\u7ebf\u7a0b\u7b80\u4ecb"},"\u5de5\u4f5c\u8005\u7ebf\u7a0b\u7b80\u4ecb"),(0,n.kt)("h2",{id:"\u4e13\u7528\u5de5\u4f5c\u8005\u7ebf\u7a0b"},"\u4e13\u7528\u5de5\u4f5c\u8005\u7ebf\u7a0b"),(0,n.kt)("h2",{id:"\u5171\u4eab\u5de5\u4f5c\u8005\u7ebf\u7a0b"},"\u5171\u4eab\u5de5\u4f5c\u8005\u7ebf\u7a0b"),(0,n.kt)("h2",{id:"\u670d\u52a1\u5de5\u4f5c\u8005\u7ebf\u7a0b"},"\u670d\u52a1\u5de5\u4f5c\u8005\u7ebf\u7a0b"),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"))}u.isMDXComponent=!0}}]);