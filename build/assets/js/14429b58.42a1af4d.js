"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7812],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={slug:"/"},u="\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",s={unversionedId:"\u4ecb\u7ecd/01whychoose",id:"\u4ecb\u7ecd/01whychoose",isDocsHomePage:!1,title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",description:"\u52a8\u673a",source:"@site/docs/01-\u4ecb\u7ecd/01whychoose.md",sourceDirName:"01-\u4ecb\u7ecd",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/01-\u4ecb\u7ecd/01whychoose.md",tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"myAutogeneratedSidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/\u4ecb\u7ecd/02quickstart"}},l=[{value:"\u52a8\u673a",id:"\u52a8\u673a",children:[]},{value:"\u4e3a\u4ec0\u4e48 RocketMQ",id:"\u4e3a\u4ec0\u4e48-rocketmq",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9rocketmq"},"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ"),(0,c.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,c.kt)("p",null,"\u5728\u65e9\u671f\u9636\u6bb5\uff0c\u6211\u4eec\u6784\u5efa\u4e86\u57fa\u4e8eActiveMQ 5.x\uff085.3\u4e4b\u524d\uff09\u7684\u5206\u5e03\u5f0f\u6d88\u606f\u4f20\u9012\u4e2d\u95f4\u4ef6\u3002\u6211\u4eec\u7684\u4f01\u4e1a\u5c06\u5176\u7528\u4e8e\u5f02\u6b65\u901a\u4fe1\u3001\u641c\u7d22\u3001\u793e\u4ea4\u7f51\u7edc\u6d3b\u52a8\u6d41\u3001\u6570\u636e\u7ba1\u9053\uff0c\u751a\u81f3\u5728\u5176\u8d38\u6613\u6d41\u7a0b\u4e2d\u3002\u968f\u7740\u6211\u4eec\u7684\u8d38\u6613\u4e1a\u52a1\u541e\u5410\u91cf\u7684\u4e0a\u5347\uff0c\u6e90\u81ea\u6211\u4eec\u7684\u6d88\u606f\u4f20\u9012\u96c6\u7fa4\u7684\u538b\u529b\u4e5f\u53d8\u5f97\u7d27\u8feb\u3002"),(0,c.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-rocketmq"},"\u4e3a\u4ec0\u4e48 RocketMQ"),(0,c.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u7814\u7a76\uff0c\u968f\u7740\u961f\u5217\u548c\u865a\u62df\u4e3b\u9898\u4f7f\u7528\u7684\u589e\u52a0\uff0cActiveMQ IO\u6a21\u5757\u8fbe\u5230\u4e86\u4e00\u4e2a\u74f6\u9888\u3002\u6211\u4eec\u5c3d\u529b\u901a\u8fc7\u8282\u6d41\u3001\u65ad\u8def\u5668\u6216\u964d\u7ea7\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u6548\u679c\u5e76\u4e0d\u7406\u60f3\u3002\u4e8e\u662f\u6211\u4eec\u5f00\u59cb\u5173\u6ce8\u5f53\u65f6\u6d41\u884c\u7684\u6d88\u606f\u4f20\u9012\u89e3\u51b3\u65b9\u6848Kafka\u3002\u4e0d\u5e78\u7684\u662f\uff0cKafka\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u7279\u522b\u662f\u5728\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u53ef\u9760\u6027\u65b9\u9762\uff0c\u8be6\u89c1\u8fd9\u91cc\u3002"),(0,c.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u51b3\u5b9a\u53d1\u660e\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u4f20\u9012\u5f15\u64ce\u6765\u5904\u7406\u66f4\u5e7f\u6cdb\u7684\u7528\u4f8b\uff0c\u4ece\u4f20\u7edf\u7684pub/sub\u573a\u666f\u5230\u9ad8\u5bb9\u91cf\u7684\u5b9e\u65f6\u96f6\u635f\u5931\u5bb9\u5fcd\u4ea4\u6613\u7cfb\u7edf\u3002\u6211\u4eec\u76f8\u4fe1\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\u662f\u6709\u76ca\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u60f3\u628a\u5b83\u5f00\u6e90\u7ed9\u793e\u533a\u3002\u4eca\u5929\uff0c\u6709100\u591a\u5bb6\u516c\u53f8\u5728\u5176\u4e1a\u52a1\u4e2d\u4f7f\u7528RocketMQ\u7684\u5f00\u6e90\u7248\u672c\u3002"),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u4e0b\u8868\u663e\u793a\u4e86RocketMQ\u3001ActiveMQ\u548cKafka\u4e4b\u95f4\u7684\u6bd4\u8f83 "))))}m.isMDXComponent=!0}}]);