"use strict";(self.webpackChunkmy_docusaurus_website=self.webpackChunkmy_docusaurus_website||[]).push([[7863],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),o=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=o(n),k=r,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,s(s({ref:e},p),{},{components:n})):a.createElement(d,s({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8458:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},s="4. \u6808",i={unversionedId:"readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04",id:"readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04",title:"4. \u6808",description:"\u6808\u6570\u636e\u7ed3\u6784",source:"@site/docs/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04.md",sourceDirName:"readingNotes/LearningJavaScriptDataStructuresAndAgorithms3",slug:"/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04",permalink:"/docs/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04",draft:!1,editUrl:"https://github.com/Arrrrray/arrrrray.github.io/docs/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/04.md",tags:[],version:"current",lastUpdatedBy:"arrrrray",lastUpdatedAt:1684406419,formattedLastUpdatedAt:"2023\u5e745\u670818\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3. \u6570\u7ec4",permalink:"/docs/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/03"},next:{title:"5. \u961f\u5217\u548c\u53cc\u7aef\u961f\u5217",permalink:"/docs/readingNotes/LearningJavaScriptDataStructuresAndAgorithms3/05"}},c={},o=[{value:"\u6808\u6570\u636e\u7ed3\u6784",id:"\u6808\u6570\u636e\u7ed3\u6784",level:2},{value:"\u4f7f\u7528 Stack \u7c7b",id:"\u4f7f\u7528-stack-\u7c7b",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e JavaScript \u5bf9\u8c61\u7684 Stack \u7c7b",id:"\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e-javascript-\u5bf9\u8c61\u7684-stack-\u7c7b",level:2},{value:"\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20",id:"\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20",level:3},{value:"\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a\u548c\u5b83\u7684\u5927\u5c0f",id:"\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a\u548c\u5b83\u7684\u5927\u5c0f",level:3},{value:"\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20",id:"\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20",level:3},{value:"\u67e5\u770b\u6808\u9876\u7684\u503c\u5e76\u5c06\u6808\u6e05\u7a7a",id:"\u67e5\u770b\u6808\u9876\u7684\u503c\u5e76\u5c06\u6808\u6e05\u7a7a",level:3},{value:"\u521b\u5efa toString \u65b9\u6cd5",id:"\u521b\u5efa-tostring-\u65b9\u6cd5",level:3},{value:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20",id:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20",level:2},{value:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a",id:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a",level:3},{value:"\u7528 ES2015 \u7684\u9650\u5b9a\u4f5c\u7528\u57df Symbol \u5b9e\u73b0\u7c7b",id:"\u7528-es2015-\u7684\u9650\u5b9a\u4f5c\u7528\u57df-symbol-\u5b9e\u73b0\u7c7b",level:3},{value:"\u7528 ES2015 \u7684 WeakMap \u5b9e\u73b0\u7c7b",id:"\u7528-es2015-\u7684-weakmap-\u5b9e\u73b0\u7c7b",level:3},{value:"\u7528\u6808\u89e3\u51b3\u95ee\u9898",id:"\u7528\u6808\u89e3\u51b3\u95ee\u9898",level:2},{value:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236",id:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236",level:3},{value:"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5",id:"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5",level:3}],p={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-\u6808"},"4. \u6808"),(0,r.kt)("h2",{id:"\u6808\u6570\u636e\u7ed3\u6784"},"\u6808\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"\u6808\u662f\u4e00\u79cd\u9075\u4ece\u540e\u8fdb\u5148\u51fa\uff08LIFO\uff09\u539f\u5219\u7684\u6709\u5e8f\u96c6\u5408\u3002\u65b0\u6dfb\u52a0\u6216\u5f85\u5220\u9664\u7684\u5143\u7d20\u90fd\u4fdd\u5b58\u5728\u6808\u7684\u540c\u4e00\u7aef\uff0c\u79f0\u4f5c\u6808\u9876\uff0c\u53e6\u4e00\u7aef\u5c31\u53eb\u6808\u5e95\u3002\u5728\u6808\u91cc\uff0c\u65b0\u5143\u7d20\u90fd\u9760\u8fd1\u6808\u9876\uff0c\u65e7\u5143\u7d20\u90fd\u63a5\u8fd1\u6808\u5e95\u3002"),(0,r.kt)("p",null,"\u6808\u4e5f\u88ab\u7528\u5728\u7f16\u7a0b\u8bed\u8a00\u7684\u7f16\u8bd1\u5668\u548c\u5185\u5b58\u4e2d\u4fdd\u5b58\u53d8\u91cf\u3001\u65b9\u6cd5\u8c03\u7528\u7b49\uff0c\u4e5f\u88ab\u7528\u4e8e\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\uff08\u6d4f\u89c8\u5668\u7684\u8fd4\u56de\u6309\u94ae\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u4e00\u4e2a\u6808\nclass Stack {\n  constructor() {\n    this.items = []; // {1}\n  }\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u79cd\u6570\u636e\u7ed3\u6784\u6765\u4fdd\u5b58\u6808\u91cc\u7684\u5143\u7d20\u3002\u53ef\u4ee5\u9009\u62e9\u6570\u7ec4\uff08\u884c{1}\uff09\u3002\u6570\u7ec4\u5141\u8bb8\u6211\u4eec\u5728\u4efb\u4f55\u4f4d\u7f6e\u6dfb\u52a0\u6216\u5220\u9664\u5143\u7d20\u3002\u7531\u4e8e\u6808\u9075\u5faa LIFO \u539f\u5219\uff0c\u9700\u8981\u5bf9\u5143\u7d20\u7684\u63d2\u5165\u548c\u5220\u9664\u529f\u80fd\u8fdb\u884c\u9650\u5236\u3002\u63a5\u4e0b\u6765\uff0c\u8981\u4e3a\u6808\u58f0\u660e\u4e00\u4e9b\u65b9\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"push(element(s))\uff1a\u6dfb\u52a0\u4e00\u4e2a\uff08\u6216\u51e0\u4e2a\uff09\u65b0\u5143\u7d20\u5230\u6808\u9876\u3002"),(0,r.kt)("li",{parentName:"ul"},"pop()\uff1a\u79fb\u9664\u6808\u9876\u7684\u5143\u7d20\uff0c\u540c\u65f6\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},"peek()\uff1a\u8fd4\u56de\u6808\u9876\u7684\u5143\u7d20\uff0c\u4e0d\u5bf9\u6808\u505a\u4efb\u4f55\u4fee\u6539\uff08\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u79fb\u9664\u6808\u9876\u7684\u5143\u7d20\uff0c\u4ec5\u4ec5\u8fd4\u56de\u5b83\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"isEmpty()\uff1a\u5982\u679c\u6808\u91cc\u6ca1\u6709\u4efb\u4f55\u5143\u7d20\u5c31\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002"),(0,r.kt)("li",{parentName:"ul"},"clear()\uff1a\u79fb\u9664\u6808\u91cc\u7684\u6240\u6709\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},"size()\uff1a\u8fd4\u56de\u6808\u91cc\u7684\u5143\u7d20\u4e2a\u6570\u3002\u8be5\u65b9\u6cd5\u548c\u6570\u7ec4\u7684 length \u5c5e\u6027\u5f88\u7c7b\u4f3c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Stack {\n  constructor() {\n    this.items = []; // \u5b9a\u4e49\u4e00\u4e2a\u6808\n  }\n\n  // \u5f80\u6808\u91cc\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\uff0c\u8be5\u65b9\u6cd5\u53ea\u6dfb\u52a0\u5143\u7d20\u5230\u6808\u9876\uff0c\u4e5f\u5c31\u662f\u6808\u7684\u672b\u5c3e\u3002\n  push(element) {\n    this.items.push(element);\n  }\n\n  // \u79fb\u9664\u6808\u91cc\u7684\u5143\u7d20\uff0c\u6808\u9075\u4eceLIFO\u539f\u5219\uff0c\u56e0\u6b64\u79fb\u51fa\u7684\u662f\u6700\u540e\u6dfb\u52a0\u8fdb\u53bb\u7684\u5143\u7d20\u3002\n  pop() {\n    return this.items.pop();\n  }\n\n  // \u67e5\u770b\u6808\u9876\u5143\u7d20\uff0c\u56e0\u4e3a\u7c7b\u5185\u90e8\u662f\u7528\u6570\u7ec4\u4fdd\u5b58\u5143\u7d20\u7684\uff0c\u6240\u4ee5\u8bbf\u95ee\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u53ef\u4ee5\u7528length -1\u3002\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n\n  // \u68c0\u67e5\u6808\u662f\u5426\u4e3a\u7a7a\n  isEmpty() {\n    return this.items.length === 0;\n  }\n\n  // \u8fd4\u56de\u6808\u7684\u957f\u5ea6\n  size() {\n    return this.items.length;\n  }\n\n  // \u6e05\u7a7a\u6808\u5143\u7d20\n  clear() {\n    this.items = [];\n  }\n}\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-stack-\u7c7b"},"\u4f7f\u7528 Stack \u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u9996\u5148\u9700\u8981\u521d\u59cb\u5316Stack\u7c7b\uff0c\u7136\u540e\u9a8c\u8bc1\u4e00\u4e0b\u6808\u662f\u5426\u4e3a\u7a7a\nconst stack = new Stack();\nconsole.log(stack.isEmpty()); // \u8f93\u51fa\u4e3atrue\n// \u63a5\u4e0b\u6765\uff0c\u5f80\u6808\u91cc\u6dfb\u52a0\u4e00\u4e9b\u5143\u7d20\nstack.push(5); // [5]\nstack.push(8); // [8, 5]\n\n// \u67e5\u770b\u6808\u9876\u5143\u7d20\nconsole.log(stack.peek()); // \u8f93\u51fa8\n\n// \u518d\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\nstack.push(11); // [11, 8, 5]\nconsole.log(stack.size()); // \u8f93\u51fa3\nconsole.log(stack.isEmpty()); // \u8f93\u51fafalse\n\n// \u6dfb\u52a0\u5143\u7d20\nstack.push(15); // [15, 11, 8, 5]\n// \u79fb\u9664\u5143\u7d20\nstack.pop(); // [11, 8, 5]\nstack.pop(); // [8, 5]\nconsole.log(stack.size()); // \u8f93\u51fa2\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e-javascript-\u5bf9\u8c61\u7684-stack-\u7c7b"},"\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e JavaScript \u5bf9\u8c61\u7684 Stack \u7c7b"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Stack \u7c7b\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u4f7f\u7528\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u50a8\u5176\u5143\u7d20\u3002\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\uff08\u8fd9\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u9879\u76ee\u91cc\u5f88\u5e38\u89c1\uff09\uff0c\u6211\u4eec\u540c\u6837\u9700\u8981\u8bc4\u4f30\u5982\u4f55\u64cd\u4f5c\u6570\u636e\u662f\u6700\u9ad8\u6548\u7684\u3002\u5728\u4f7f\u7528\u6570\u7ec4\u65f6\uff0c\u5927\u90e8\u5206\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\u3002\u7b2c 15 \u7ae0\u6211\u4eec\u5c06\u5b66\u4e60\u5230\u66f4\u591a\u6709\u5173\u7b97\u6cd5\u590d\u6742\u5ea6\u7684\u77e5\u8bc6\u3002O(n)\u7684\u610f\u601d\u662f\uff0c\u6211\u4eec\u9700\u8981\u8fed\u4ee3\u6574\u4e2a\u6570\u7ec4\u76f4\u5230\u627e\u5230\u8981\u627e\u7684\u90a3\u4e2a\u5143\u7d20\uff0c\u5728\u6700\u574f\u7684\u60c5\u51b5\u4e0b\u9700\u8981\u8fed\u4ee3\u6570\u7ec4\u7684\u6240\u6709\u4f4d\u7f6e\uff0c\u5176\u4e2d\u7684 n \u4ee3\u8868\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u5982\u679c\u6570\u7ec4\u6709\u66f4\u591a\u5143\u7d20\u7684\u8bdd\uff0c\u6240\u9700\u7684\u65f6\u95f4\u4f1a\u66f4\u957f\u3002\u53e6\u5916\uff0c\u6570\u7ec4\u662f\u5143\u7d20\u7684\u4e00\u4e2a\u6709\u5e8f\u96c6\u5408\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5143\u7d20\u6392\u5217\u6709\u5e8f\uff0c\u5b83\u4f1a\u5360\u7528\u66f4\u591a\u7684\u5185\u5b58\u7a7a\u95f4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u80fd\u76f4\u63a5\u83b7\u53d6\u5143\u7d20\uff0c\u5360\u7528\u8f83\u5c11\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u5e76\u4e14\u4ecd\u7136\u4fdd\u8bc1\u6240\u6709\u5143\u7d20\u6309\u7167\u6211\u4eec\u7684\u9700\u8981\u6392\u5217\uff0c\u90a3\u4e0d\u662f\u66f4\u597d\u5417\uff1f\u5bf9\u4e8e\u4f7f\u7528 JavaScript \u8bed\u8a00\u5b9e\u73b0\u6808\u6570\u636e\u7ed3\u6784\u7684\u573a\u666f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a JavaScript \u5bf9\u8c61\u6765\u5b58\u50a8\u6240\u6709\u7684\u6808\u5143\u7d20\uff0c\u4fdd\u8bc1\u5b83\u4eec\u7684\u987a\u5e8f\u5e76\u4e14\u9075\u5faa LIFO \u539f\u5219\u3002\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u5b9e\u73b0\u8fd9\u6837\u7684\u884c\u4e3a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Stack {\n  constructor() {\n    this.count = 0;\n    this.items = {};\n  }\n  // \u65b9\u6cd5\n}\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u7248\u672c\u7684 Stack \u7c7b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e00\u4e2a count \u5c5e\u6027\u6765\u5e2e\u52a9\u6211\u4eec\u8bb0\u5f55\u6808\u7684\u5927\u5c0f\uff08\u4e5f\u80fd\u5e2e\u52a9\u6211\u4eec\u4ece\u6570\u636e\u7ed3\u6784\u4e2d\u6dfb\u52a0\u548c\u5220\u9664\u5143\u7d20\uff09\u3002"),(0,r.kt)("h3",{id:"\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20"},"\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20"),(0,r.kt)("p",null,"\u5728\u57fa\u4e8e\u6570\u7ec4\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u5411 Stack \u7c7b\u4e2d\u6dfb\u52a0\u591a\u4e2a\u5143\u7d20\u3002\u7531\u4e8e\u73b0\u5728\u4f7f\u7528\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u7248\u672c\u7684 push \u65b9\u6cd5\u53ea\u5141\u8bb8\u6211\u4eec\u4e00\u6b21\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\u3002\u4e0b\u9762\u662f push \u65b9\u6cd5\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"push(element) {\n  this.items[this.count] = element;\n  this.count++;\n}\n")),(0,r.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u5bf9\u8c61\u662f\u4e00\u7cfb\u5217\u952e\u503c\u5bf9\u7684\u96c6\u5408\u3002\u8981\u5411\u6808\u4e2d\u6dfb\u52a0\u5143\u7d20\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 count \u53d8\u91cf\u4f5c\u4e3a items \u5bf9\u8c61\u7684\u952e\u540d\uff0c\u63d2\u5165\u7684\u5143\u7d20\u5219\u662f\u5b83\u7684\u503c\u3002\u5728\u5411\u6808\u63d2\u5165\u5143\u7d20\u540e\uff0c\u6211\u4eec\u9012\u589e count \u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5ef6\u7528\u4e4b\u524d\u7684\u793a\u4f8b\u6765\u4f7f\u7528 Stack \u7c7b\uff0c\u5e76\u5411\u5176\u4e2d\u63d2\u5165\u5143\u7d20 5 \u548c 8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stack = new Stack();\nstack.push(5);\nstack.push(8);\n")),(0,r.kt)("p",null,"\u5728\u5185\u90e8\uff0citems \u5305\u542b\u7684\u503c\u548c count \u5c5e\u6027\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"items = {\n  0: 5,\n  1: 8,\n};\ncount = 2;\n")),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a\u548c\u5b83\u7684\u5927\u5c0f"},"\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a\u548c\u5b83\u7684\u5927\u5c0f"),(0,r.kt)("p",null,"count \u5c5e\u6027\u4e5f\u8868\u793a\u6808\u7684\u5927\u5c0f\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u8fd4\u56de count \u5c5e\u6027\u7684\u503c\u6765\u5b9e\u73b0 size \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u8981\u9a8c\u8bc1\u6808\u662f\u5426\u4e3a\u7a7a\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u5224\u65ad count \u7684\u503c\u662f\u5426\u4e3a 0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6\u6808\u7684\u5927\u5c0f\nsize() {\n    return this.count;\n}\n// \u9a8c\u8bc1\u6808\u662f\u5426\u4e3a\u7a7a\nisEmpty() {\n    return this.count === 0;\n}\n")),(0,r.kt)("h3",{id:"\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20"},"\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u6ca1\u6709\u4f7f\u7528\u6570\u7ec4\u6765\u5b58\u50a8\u5143\u7d20\uff0c\u9700\u8981\u624b\u52a8\u5b9e\u73b0\u79fb\u9664\u5143\u7d20\u7684\u903b\u8f91\u3002pop \u65b9\u6cd5\u540c\u6837\u8fd4\u56de\u4e86\u4ece\u6808\u4e2d\u79fb\u9664\u7684\u5143\u7d20\uff0c\u5b83\u7684\u5b9e\u73b0\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20\npop() {\n    if (this.isEmpty()) { // {1}\n        return undefined;\n    }\n    this.count--; // {2}\n    const result = this.items[this.count]; // {3}\n    delete this.items[this.count]; // {4}\n    return result; // {5}\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u68c0\u9a8c\u6808\u662f\u5426\u4e3a\u7a7a\uff08\u884c{1}\uff09\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u5c31\u8fd4\u56de undefined\u3002\u5982\u679c\u6808\u4e0d\u4e3a\u7a7a\u7684\u8bdd\uff0c\u6211\u4eec\u4f1a\u5c06 count \u5c5e\u6027\u51cf 1\uff08\u884c{2}\uff09\uff0c\u5e76\u4fdd\u5b58\u6808\u9876\u7684\u503c\uff08\u884c{3}\uff09\uff0c\u4ee5\u4fbf\u5728\u5220\u9664\u5b83\uff08\u884c{4}\uff09\u4e4b\u540e\u5c06\u5b83\u8fd4\u56de\uff08\u884c{5}\uff09\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u7684\u662f JavaScript \u5bf9\u8c61\uff0c\u53ef\u4ee5\u7528 JavaScript \u7684 delete \u8fd0\u7b97\u7b26\u4ece\u5bf9\u8c61\u4e2d\u5220\u9664\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\u3002\u6211\u4eec\u4f7f\u7528\u5982\u4e0b\u5185\u90e8\u7684\u503c\u6765\u6a21\u62df pop \u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u5982\u4e0b\u5185\u90e8\u7684\u503c\u6765\u6a21\u62df pop \u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"items = {\n  0: 5,\n  1: 8,\n};\ncount = 2;\n")),(0,r.kt)("p",null,"\u8981\u8bbf\u95ee\u5230\u6808\u9876\u7684\u5143\u7d20\uff08\u5373\u6700\u540e\u6dfb\u52a0\u7684\u5143\u7d20 8\uff09\uff0c\u6211\u4eec\u9700\u8981\u8bbf\u95ee\u952e\u503c\u4e3a 1 \u7684\u4f4d\u7f6e\u3002\u56e0\u6b64\u6211\u4eec\u5c06 count \u53d8\u91cf\u4ece 2 \u51cf\u4e3a 1\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u8bbf\u95ee items","[1]","\uff0c\u5220\u9664\u5b83\uff0c\u5e76\u5c06\u5b83\u7684\u503c\u8fd4\u56de\u4e86\u3002"),(0,r.kt)("h3",{id:"\u67e5\u770b\u6808\u9876\u7684\u503c\u5e76\u5c06\u6808\u6e05\u7a7a"},"\u67e5\u770b\u6808\u9876\u7684\u503c\u5e76\u5c06\u6808\u6e05\u7a7a"),(0,r.kt)("p",null,"\u4e0a\u4e00\u8282\u6211\u4eec\u5b66\u4e60\u4e86\uff0c\u8981\u8bbf\u95ee\u6808\u9876\u5143\u7d20\uff0c\u9700\u8981\u5c06 count \u5c5e\u6027\u51cf 1\u3002\u90a3\u4e48\u6211\u4eec\u6765\u770b\u770b peek \u65b9\u6cd5\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"peek() {\n  if (this.isEmpty()) {\n    return undefined;\n  }\n  return this.items[this.count -1];\n}\n")),(0,r.kt)("p",null,"\u8981\u6e05\u7a7a\u8be5\u6808\uff0c\u53ea\u9700\u8981\u5c06\u5b83\u7684\u503c\u590d\u539f\u4e3a\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u503c\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"clear() {\n  this.items = {};\n  this.count = 0;\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u9075\u5faa LIFO \u539f\u5219\uff0c\u4f7f\u7528\u4e0b\u9762\u7684\u903b\u8f91\u6765\u79fb\u9664\u6808\u4e2d\u6240\u6709\u7684\u5143\u7d20\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"while (!this.isEmpty()) {\n  this.pop();\n}\n")),(0,r.kt)("h3",{id:"\u521b\u5efa-tostring-\u65b9\u6cd5"},"\u521b\u5efa toString \u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728\u6570\u7ec4\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5173\u5fc3 toString \u65b9\u6cd5\u7684\u5b9e\u73b0\uff0c\u56e0\u4e3a\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6570\u7ec4\u5df2\u7ecf\u63d0\u4f9b\u7684 toString \u65b9\u6cd5\u3002\u5bf9\u4e8e\u4f7f\u7528\u5bf9\u8c61\u7684\u7248\u672c\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a toString \u65b9\u6cd5\u6765\u50cf\u6570\u7ec4\u4e00\u6837\u6253\u5370\u51fa\u6808\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    toString() {\n      if (this.isEmpty()) {\n        return '';\n      }\n      let objString = `${this.items[0]}`; // {1}\n      for (let i = 1; i < this.count; i++) { // {2}\n        objString = `${objString}, ${this.items[i]}`; // {3}\n      }\n      return objString;\n    }\n")),(0,r.kt)("p",null,"\u5982\u679c\u6808\u662f\u7a7a\u7684\uff0c\u6211\u4eec\u53ea\u9700\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef\u3002\u5982\u679c\u5b83\u4e0d\u662f\u7a7a\u7684\uff0c\u5c31\u9700\u8981\u7528\u5b83\u5e95\u90e8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f5c\u4e3a\u5b57\u7b26\u4e32\u7684\u521d\u59cb\u503c\uff08\u884c{1}\uff09\uff0c\u7136\u540e\u8fed\u4ee3\u6574\u4e2a\u6808\u7684\u952e\uff08\u884c{2}\uff09\uff0c\u4e00\u76f4\u5230\u6808\u9876\uff0c\u6dfb\u52a0\u4e00\u4e2a\u9017\u53f7\uff08,\uff09\u4ee5\u53ca\u4e0b\u4e00\u4e2a\u5143\u7d20\uff08\u884c{3}\uff09\u3002\u5982\u679c\u6808\u53ea\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff0c\u884c{2}\u548c\u884c{3}\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e86 toString \u65b9\u6cd5\u540e\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u8fd9\u4e2a\u7248\u672c\u7684 Stack \u7c7b\u3002\u8fd9\u4e5f\u662f\u4e00\u4e2a\u7528\u4e0d\u540c\u65b9\u5f0f\u5199\u4ee3\u7801\u7684\u4f8b\u5b50\u3002\u5bf9\u4e8e\u4f7f\u7528 Stack \u7c7b\u7684\u5f00\u53d1\u8005\uff0c\u9009\u62e9\u4f7f\u7528\u57fa\u4e8e\u6570\u7ec4\u6216\u662f\u57fa\u4e8e\u5bf9\u8c61\u7684\u7248\u672c\u5e76\u4e0d\u91cd\u8981\uff0c\u4e24\u8005\u90fd\u63d0\u4f9b\u4e86\u76f8\u540c\u7684\u529f\u80fd\uff0c\u53ea\u662f\u5185\u90e8\u5b9e\u73b0\u5f88\u4e0d\u4e00\u6837\u3002"),(0,r.kt)("h2",{id:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20"},"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u522b\u7684\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7684\u6570\u636e\u7ed3\u6784\u6216\u5bf9\u8c61\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u4fdd\u62a4\u5185\u90e8\u7684\u5143\u7d20\uff0c\u53ea\u6709\u6211\u4eec\u66b4\u9732\u51fa\u7684\u65b9\u6cd5\u624d\u80fd\u4fee\u6539\u5185\u90e8\u7ed3\u6784\u3002\u5bf9\u4e8e Stack \u7c7b\u6765\u8bf4\uff0c\u8981\u786e\u4fdd\u5143\u7d20\u53ea\u4f1a\u88ab\u6dfb\u52a0\u5230\u6808\u9876\uff0c\u800c\u4e0d\u662f\u6808\u5e95\u6216\u5176\u4ed6\u4efb\u610f\u4f4d\u7f6e\uff08\u6bd4\u5982\u6808\u7684\u4e2d\u95f4\uff09\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u6211\u4eec\u5728 Stack \u7c7b\u4e2d\u58f0\u660e\u7684 items \u548c count \u5c5e\u6027\u5e76\u6ca1\u6709\u5f97\u5230\u4fdd\u62a4\uff0c\u56e0\u4e3a JavaScript \u7684\u7c7b\u5c31\u662f\u8fd9\u6837\u5de5\u4f5c\u7684\u3002"),(0,r.kt)("p",null,"\u8bd5\u7740\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stack = new Stack();\nconsole.log(Object.getOwnPropertyNames(stack)); // {1}\nconsole.log(Object.keys(stack)); // {2}\nconsole.log(stack.items); // {3}\n")),(0,r.kt)("p",null,"\u884c{1}\u548c\u884c{2}\u7684\u8f93\u51fa\u7ed3\u679c\u662f",'["count", "items"]',"\u3002\u8fd9\u8868\u793a count \u548c items \u5c5e\u6027\u662f\u516c\u5f00\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u884c{3}\u90a3\u6837\u76f4\u63a5\u8bbf\u95ee\u5b83\u4eec\u3002\u6839\u636e\u8fd9\u79cd\u884c\u4e3a\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u8fd9\u4e24\u4e2a\u5c5e\u6027\u8d4b\u65b0\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u672c\u7ae0\u4f7f\u7528 ES2015\uff08ES6\uff09\u8bed\u6cd5\u521b\u5efa\u4e86 Stack \u7c7b\u3002ES2015 \u7c7b\u662f\u57fa\u4e8e\u539f\u578b\u7684\u3002\u5c3d\u7ba1\u57fa\u4e8e\u539f\u578b\u7684\u7c7b\u80fd\u8282\u7701\u5185\u5b58\u7a7a\u95f4\u5e76\u5728\u6269\u5c55\u65b9\u9762\u4f18\u4e8e\u57fa\u4e8e\u51fd\u6570\u7684\u7c7b\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u80fd\u58f0\u660e\u79c1\u6709\u5c5e\u6027\uff08\u53d8\u91cf\uff09\u6216\u65b9\u6cd5\u3002\u53e6\u5916\uff0c\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b Stack \u7c7b\u7684\u7528\u6237\u53ea\u80fd\u8bbf\u95ee\u6211\u4eec\u5728\u7c7b\u4e2d\u66b4\u9732\u7684\u65b9\u6cd5\u3002\u4e0b\u9762\u6765\u770b\u770b\u5176\u4ed6\u4f7f\u7528 JavaScript \u6765\u5b9e\u73b0\u79c1\u6709\u5c5e\u6027\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a"},"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a"),(0,r.kt)("p",null,"\u4e00\u90e8\u5206\u5f00\u53d1\u8005\u559c\u6b22\u5728 JavaScript \u4e2d\u4f7f\u7528\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a\u6765\u6807\u8bb0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u79c1\u6709\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Stack {\n  constructor() {\n    this._count = 0;\n    this._items = {};\n  }\n}\n")),(0,r.kt)("p",null,"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a\u5c31\u662f\u5728\u5c5e\u6027\u540d\u79f0\u4e4b\u524d\u52a0\u4e0a\u4e00\u4e2a\u4e0b\u5212\u7ebf\uff08","_","\uff09\u3002\u4e0d\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ea\u662f\u4e00\u79cd\u7ea6\u5b9a\uff0c\u5e76\u4e0d\u80fd\u4fdd\u62a4\u6570\u636e\uff0c\u800c\u4e14\u53ea\u80fd\u4f9d\u8d56\u4e8e\u4f7f\u7528\u6211\u4eec\u4ee3\u7801\u7684\u5f00\u53d1\u8005\u6240\u5177\u5907\u7684\u5e38\u8bc6\u3002"),(0,r.kt)("h3",{id:"\u7528-es2015-\u7684\u9650\u5b9a\u4f5c\u7528\u57df-symbol-\u5b9e\u73b0\u7c7b"},"\u7528 ES2015 \u7684\u9650\u5b9a\u4f5c\u7528\u57df Symbol \u5b9e\u73b0\u7c7b"),(0,r.kt)("p",null,"ES2015 \u65b0\u589e\u4e86\u4e00\u79cd\u53eb\u4f5c Symbol \u7684\u57fa\u672c\u7c7b\u578b\uff0c\u5b83\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u53ef\u4ee5\u7528\u4f5c\u5bf9\u8c61\u7684\u5c5e\u6027\u3002\u770b\u770b\u600e\u4e48\u7528\u5b83\u5728 Stack \u7c7b\u4e2d\u58f0\u660e items \u5c5e\u6027\uff08\u6211\u4eec\u5c06\u4f7f\u7528\u6570\u7ec4\u6765\u5b58\u50a8\u5143\u7d20\u4ee5\u7b80\u5316\u4ee3\u7801\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const _items = Symbol("stackItems"); // {1}\nclass Stack {\n  constructor() {\n    this[_items] = []; // {2}\n  }\n  // \u6808\u7684\u65b9\u6cd5\n}\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u58f0\u660e\u4e86 Symbol \u7c7b\u578b\u7684\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"_items"),"\uff08\u884c{1}\uff09\uff0c\u5728\u7c7b\u7684 constructor \u51fd\u6570\u4e2d\u521d\u59cb\u5316\u5b83\u7684\u503c\uff08\u884c{2}\uff09\u3002\u8981\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"_items"),"\uff0c\u53ea\u9700\u8981\u628a\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.items")," \u90fd\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"this[_items]"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u521b\u5efa\u4e86\u4e00\u4e2a\u5047\u7684\u79c1\u6709\u5c5e\u6027\uff0c\u56e0\u4e3a ES2015 \u65b0\u589e\u7684 Object.getOwnProperty-Symbols \u65b9\u6cd5\u80fd\u591f\u53d6\u5230\u7c7b\u91cc\u9762\u58f0\u660e\u7684\u6240\u6709 Symbols \u5c5e\u6027\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7834\u574f Stack \u7c7b\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stack = new Stack();\nstack.push(5);\nstack.push(8);\nlet objectSymbols = Object.getOwnPropertySymbols(stack);\nconsole.log(objectSymbols.length); // \u8f93\u51fa1\nconsole.log(objectSymbols); // [Symbol()]\nconsole.log(objectSymbols[0]); // Symbol()\nstack[objectSymbols[0]].push(1);\nstack.print(); // \u8f93\u51fa5, 8, 1\n")),(0,r.kt)("p",null,"\u4ece\u4ee5\u4e0a\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"stack[objectSymbols[0]]"),"\u662f\u53ef\u4ee5\u5f97\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"_items")," \u7684\u3002\u5e76\u4e14\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"_items")," \u5c5e\u6027\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u8fdb\u884c\u4efb\u610f\u7684\u6570\u7ec4\u64cd\u4f5c\uff0c\u6bd4\u5982\u4ece\u4e2d\u95f4\u5220\u9664\u6216\u6dfb\u52a0\u5143\u7d20\uff08\u4f7f\u7528\u5bf9\u8c61\u8fdb\u884c\u5b58\u50a8\u4e5f\u662f\u4e00\u6837\u7684\uff09\u3002\u4f46\u6211\u4eec\u64cd\u4f5c\u7684\u662f\u6808\uff0c\u4e0d\u5e94\u8be5\u51fa\u73b0\u8fd9\u79cd\u884c\u4e3a\u3002\u8fd8\u6709\u7b2c\u4e09\u4e2a\u65b9\u6848\u3002"),(0,r.kt)("h3",{id:"\u7528-es2015-\u7684-weakmap-\u5b9e\u73b0\u7c7b"},"\u7528 ES2015 \u7684 WeakMap \u5b9e\u73b0\u7c7b"),(0,r.kt)("p",null,"\u6709\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u786e\u4fdd\u5c5e\u6027\u662f\u79c1\u6709\u7684\uff0c\u8fd9\u5c31\u662f WeakMap\u3002\u6211\u4eec\u4f1a\u5728\u7b2c 8 \u7ae0\u6df1\u5165\u63a2\u8ba8 Map \u8fd9\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u73b0\u5728\u53ea\u9700\u8981\u77e5\u9053 WeakMap \u53ef\u4ee5\u5b58\u50a8\u952e\u503c\u5bf9\uff0c\u5176\u4e2d\u952e\u662f\u5bf9\u8c61\uff0c\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528 WeakMap \u6765\u5b58\u50a8 items \u5c5e\u6027\uff08\u6570\u7ec4\u7248\u672c\uff09, Stack \u7c7b\u5c31\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const items = new WeakMap(); // {1}\nclass Stack {\n  constructor() {\n    items.set(this, []); // {2}\n  }\n  push(element) {\n    const s = items.get(this); // {3}\n    s.push(element);\n  }\n  pop() {\n    const s = items.get(this);\n    const r = s.pop();\n    return r;\n  }\n  // \u5176\u4ed6\u65b9\u6cd5\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u89e3\u91ca\u5982\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u884c{1}\uff0c\u58f0\u660e\u4e00\u4e2a WeakMap \u7c7b\u578b\u7684\u53d8\u91cf items\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u884c{2}\uff0c\u5728 constructor \u4e2d\uff0c\u4ee5 this\uff08Stack \u7c7b\u81ea\u5df1\u7684\u5f15\u7528\uff09\u4e3a\u952e\uff0c\u628a\u4ee3\u8868\u6808\u7684\u6570\u7ec4\u5b58\u5165 items\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u884c{3}\uff0c\u4ece WeakMap \u4e2d\u53d6\u51fa\u503c\uff0c\u5373\u4ee5 this \u4e3a\u952e\uff08\u884c{2}\u8bbe\u7f6e\u7684\uff09\u4ece items \u4e2d\u53d6\u503c\u3002")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u77e5\u9053\u4e86\uff0citems \u5728 Stack \u7c7b\u91cc\u662f\u771f\u6b63\u7684\u79c1\u6709\u5c5e\u6027\u3002\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u4e0d\u5f3a\uff0c\u800c\u4e14\u5728\u6269\u5c55\u8be5\u7c7b\u65f6\u65e0\u6cd5\u7ee7\u627f\u79c1\u6709\u5c5e\u6027\u3002\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\uff01"),(0,r.kt)("h2",{id:"\u7528\u6808\u89e3\u51b3\u95ee\u9898"},"\u7528\u6808\u89e3\u51b3\u95ee\u9898"),(0,r.kt)("p",null,"\u6808\u7684\u5b9e\u9645\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\u3002\u5728\u56de\u6eaf\u95ee\u9898\u4e2d\uff0c\u5b83\u53ef\u4ee5\u5b58\u50a8\u8bbf\u95ee\u8fc7\u7684\u4efb\u52a1\u6216\u8def\u5f84\u3001\u64a4\u9500\u7684\u64cd\u4f5c\uff08\u540e\u9762\u7684\u7ae0\u8282\u8ba8\u8bba\u56fe\u548c\u56de\u6eaf\u95ee\u9898\u65f6\uff0c\u6211\u4eec\u4f1a\u5b66\u4e60\u5982\u4f55\u5e94\u7528\u8fd9\u4e2a\u4f8b\u5b50\uff09\u3002Java \u548c C#\u7528\u6808\u6765\u5b58\u50a8\u53d8\u91cf\u548c\u65b9\u6cd5\u8c03\u7528\uff0c\u7279\u522b\u662f\u5904\u7406\u9012\u5f52\u7b97\u6cd5\u65f6\uff0c\u6709\u53ef\u80fd\u629b\u51fa\u4e00\u4e2a\u6808\u6ea2\u51fa\u5f02\u5e38\uff08\u540e\u9762\u7684\u7ae0\u8282\u4e5f\u4f1a\u4ecb\u7ecd\uff09\u3002"),(0,r.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86 Stack \u7c7b\u7684\u7528\u6cd5\uff0c\u4e0d\u59a8\u7528\u5b83\u6765\u89e3\u51b3\u4e00\u4e9b\u8ba1\u7b97\u673a\u79d1\u5b66\u95ee\u9898\u3002\u672c\u8282\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u5341\u8fdb\u5236\u8f6c\u4e8c\u8fdb\u5236\u95ee\u9898\uff0c\u4ee5\u53ca\u4efb\u610f\u8fdb\u5236\u8f6c\u6362\u7684\u7b97\u6cd5\u3002"),(0,r.kt)("h3",{id:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236"},"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236"),(0,r.kt)("p",null,"\u73b0\u5b9e\u751f\u6d3b\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u5341\u8fdb\u5236\u3002\u4f46\u5728\u8ba1\u7b97\u79d1\u5b66\u4e2d\uff0c\u4e8c\u8fdb\u5236\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u8ba1\u7b97\u673a\u91cc\u7684\u6240\u6709\u5185\u5bb9\u90fd\u662f\u7528\u4e8c\u8fdb\u5236\u6570\u5b57\u8868\u793a\u7684\uff080 \u548c 1\uff09\u3002\u6ca1\u6709\u5341\u8fdb\u5236\u548c\u4e8c\u8fdb\u5236\u76f8\u4e92\u8f6c\u5316\u7684\u80fd\u529b\uff0c\u4e0e\u8ba1\u7b97\u673a\u4ea4\u6d41\u5c31\u5f88\u56f0\u96be\u3002"),(0,r.kt)("p",null,"\u8981\u628a\u5341\u8fdb\u5236\u8f6c\u5316\u6210\u4e8c\u8fdb\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8be5\u5341\u8fdb\u5236\u6570\u9664\u4ee5 2\uff08\u4e8c\u8fdb\u5236\u662f\u6ee1\u4e8c\u8fdb\u4e00\uff09\u5e76\u5bf9\u5546\u53d6\u6574\uff0c\u76f4\u5230\u7ed3\u679c\u662f 0 \u4e3a\u6b62\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u628a\u5341\u8fdb\u5236\u7684\u6570 10 \u8f6c\u5316\u6210\u4e8c\u8fdb\u5236\u7684\u6570\u5b57\uff0c\u8fc7\u7a0b\u5927\u6982\u662f\u5982\u4e0b\u8fd9\u6837\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://res.weread.qq.com/wrepub/epub_26211966_88",alt:"image"})),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5bf9\u5e94\u7684\u7b97\u6cd5\u63cf\u8ff0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function decimalToBinary(decNumber) {\n  const remStack = new Stack();\n  let number = decNumber;\n  let rem;\n  let binaryString = "";\n\n  while (number > 0) {\n    // {1}\n    rem = Math.floor(number % 2); // {2}\n    remStack.push(rem); // {3}\n    number = Math.floor(number / 2); // {4}\n  }\n\n  while (!remStack.isEmpty()) {\n    // {5}\n    binaryString += remStack.pop().toString();\n  }\n  return binaryString;\n}\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u6bb5\u4ee3\u7801\u91cc\uff0c\u5f53\u9664\u6cd5\u7684\u7ed3\u679c\u4e0d\u4e3a 0 \u65f6\uff08\u884c{1}\uff09\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u4e00\u4e2a\u4f59\u6570\uff0c\u5e76\u653e\u5230\u6808\u91cc\uff08\u884c{2}\u3001\u884c{3}\uff09\u3002\u7136\u540e\u8ba9\u7ed3\u679c\u7ee7\u7eed\u9664\u4ee5 2\uff08\u884c{4}\uff09\u3002\u53e6\u5916\u8bf7\u6ce8\u610f\uff1aJavaScript \u6709\u6570\u503c\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u4e0d\u4f1a\u533a\u5206\u6574\u6570\u548c\u6d6e\u70b9\u6570\u3002\u56e0\u6b64\uff0c\u8981\u4f7f\u7528 Math.floor \u51fd\u6570\u4ec5\u8fd4\u56de\u9664\u6cd5\u8fd0\u7b97\u7ed3\u679c\u7684\u6574\u6570\u90e8\u5206\u3002\u6700\u540e\uff0c\u7528 pop \u65b9\u6cd5\u628a\u6808\u4e2d\u7684\u5143\u7d20\u90fd\u79fb\u9664\uff0c\u628a\u51fa\u6808\u7684\u5143\u7d20\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\uff08\u884c{5}\uff09\u3002"),(0,r.kt)("h3",{id:"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5"},"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u4e4b\u524d\u7684\u7b97\u6cd5\uff0c\u4f7f\u4e4b\u80fd\u628a\u5341\u8fdb\u5236\u8f6c\u6362\u6210\u57fa\u6570\u4e3a 2 \uff5e 36 \u7684\u4efb\u610f\u8fdb\u5236\u3002\u9664\u4e86\u628a\u5341\u8fdb\u5236\u6570\u9664\u4ee5 2 \u8f6c\u6210\u4e8c\u8fdb\u5236\u6570\uff0c\u8fd8\u53ef\u4ee5\u4f20\u5165\u5176\u4ed6\u4efb\u610f\u8fdb\u5236\u7684\u57fa\u6570\u4e3a\u53c2\u6570\uff0c\u5c31\u50cf\u4e0b\u9762\u7684\u7b97\u6cd5\u8fd9\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function baseConverter(decNumber, base) {\n  const remStack = new Stack();\n  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // {6}\n  let number = decNumber;\n  let rem;\n  let baseString = "";\n\n  if (!(base >= 2 && base <= 36)) {\n    return "";\n  }\n\n  while (number > 0) {\n    rem = Math.floor(number % base);\n    remStack.push(rem);\n    number = Math.floor(number / base);\n  }\n  while (!remStack.isEmpty()) {\n    baseString += digits[remStack.pop()]; // {7}\n  }\n\n  return baseString;\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u6539\u53d8\u4e00\u4e2a\u5730\u65b9\u3002\u5728\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u4e8c\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f 0 \u6216 1\uff1b\u5728\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u516b\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f 0 \uff5e 7\uff1b\u4f46\u662f\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u5341\u516d\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f 0 \uff5e 9 \u52a0\u4e0a A\u3001B\u3001C\u3001D\u3001E \u548c F\uff08\u5bf9\u5e94 10\u300111\u300112\u300113\u300114 \u548c 15\uff09\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u6808\u4e2d\u7684\u6570\u5b57\u505a\u4e2a\u8f6c\u5316\u624d\u53ef\u4ee5\uff08\u884c{6}\u548c\u884c{7}\uff09\u3002\u56e0\u6b64\uff0c\u4ece\u5341\u4e00\u8fdb\u5236\u5f00\u59cb\uff0c\u5b57\u6bcd\u8868\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bcd\u5c06\u8868\u793a\u76f8\u5e94\u7684\u57fa\u6570\u3002\u5b57\u6bcd A \u4ee3\u8868\u57fa\u6570 11, B \u4ee3\u8868\u57fa\u6570 12\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"))}u.isMDXComponent=!0}}]);