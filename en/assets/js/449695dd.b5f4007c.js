(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},j=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),j=r,d=u["".concat(c,".").concat(j)]||u[j]||s[j]||a;return t?i.a.createElement(d,o(o({ref:n},b),{},{components:t})):i.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=j;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<a;b++)c[b]=t[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(111)),c={title:"\u9879\u76ee\u914d\u7f6e"},o={unversionedId:"project-configuration",id:"project-configuration",isDocsHomePage:!1,title:"\u9879\u76ee\u914d\u7f6e",description:"ConciseJS \u9879\u76ee\u7684\u914d\u7f6e\u9879\u653e\u5728\u4e86 package.json \u7684 conciseConfig.Application \u9009\u9879\u4e2d\u3002",source:"@site/docs/project-configuration.md",sourceDirName:".",slug:"/project-configuration",permalink:"/en/docs/project-configuration",version:"current",frontMatter:{title:"\u9879\u76ee\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/en/docs/directory-structure"},next:{title:"\u914d\u7f6e\u5f0f\u8def\u7531",permalink:"/en/docs/configuration-routing"}},l=[{value:"port",id:"port",children:[]},{value:"baseUrl",id:"baseurl",children:[]},{value:"buildDir",id:"builddir",children:[]},{value:"releaseEnable",id:"releaseenable",children:[]},{value:"proxy",id:"proxy",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ConciseJS \u9879\u76ee\u7684\u914d\u7f6e\u9879\u653e\u5728\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"conciseConfig.Application")," \u9009\u9879\u4e2d\u3002"),Object(a.b)("p",null,"ConciseJS \u5e0c\u671b\u5c3d\u53ef\u80fd\u5730\u51cf\u5c11\u5f00\u53d1\u8005\u5bf9\u6846\u67b6\u7684\u5b66\u4e60\u6210\u672c\uff0c\u6240\u4ee5\u5e76\u6ca1\u6709\u5bf9\u5916\u66b4\u9732\u5927\u91cf\u7684\u914d\u7f6e\u9879\uff0c\u4e5f\u6ca1\u6709\u63d0\u4f9b\u4e00\u4e2a\u5355\u72ec\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u5b9e\u9645\u4e1a\u52a1\u4e2d\u5f80\u5f80\u6709\u4e00\u4e9b\u9700\u8981\u989d\u5916\u914d\u7f6e\u6216\u4fee\u6539\u7684\u914d\u7f6e\u9879\uff0c\u5982\u679c\u6709\u8fd9\u4e2a\u9700\u6c42\uff0c\u53ef\u4ee5\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"conciseConfig.Application")," \u9009\u9879\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.josn"',title:'"package.josn"'},'{\n    // ...\n    "dependencies": {\n        "concisejs": "^0.7.2"\n    },\n    "conciseConfig": {\n        "Application": {\n            "port": 8080,\n            "baseUrl": "/\u9879\u76ee\u540d/",\n            "buildDir": "dist/Web/\u9879\u76ee\u540d",\n            "releaseEnable": true,\n            "proxy": {}\n        }\n    }\n}\n')),Object(a.b)("p",null,"\u4e0b\u9762\uff0c\u5bf9\u5e38\u7528\u5230\u7684\u914d\u7f6e\u9879\u505a\u7b80\u5355\u7684\u4ecb\u7ecd\u3002"),Object(a.b)("h2",{id:"port"},"port"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u7684\u7aef\u53e3\u53f7"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Number/String")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"8080"))),Object(a.b)("h2",{id:"baseurl"},"baseUrl"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6253\u5305\u90e8\u7f72\u65f6\u7684\u57fa\u672c URL"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"String")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"/\u9879\u76ee\u540d/"),"\uff0c\u6bd4\u5982\u4eba\u8138\u9879\u76ee ",Object(a.b)("inlineCode",{parentName:"li"},"/Face/"))),Object(a.b)("h2",{id:"builddir"},"buildDir"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6253\u5305\u76ee\u5f55"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"String")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"dist/Web/\u9879\u76ee\u540d"),"\uff0c\u6bd4\u5982\u4eba\u8138\u9879\u76ee ",Object(a.b)("inlineCode",{parentName:"li"},"dist/Web/Face"))),Object(a.b)("h2",{id:"releaseenable"},"releaseEnable"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5141\u8bb8\u5199\u5165 ",Object(a.b)("inlineCode",{parentName:"li"},"release")," \u6587\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Boolean")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"true"))),Object(a.b)("h2",{id:"proxy"},"proxy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8bbe\u7f6e\u4ee3\u7406"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"Object")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"{}"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u4ee3\u7406\u662f\u65e0\u6cd5\u751f\u6548\u7684\uff0c\u6240\u4ee5\u672c\u9879\u8bbe\u7f6e\u53ea\u9488\u5bf9\u5f00\u53d1\u73af\u5883\u3002")),Object(a.b)("p",null,"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u7528\u5230\u6a21\u62df\u63a5\u53e3\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u914d\u7f6e\u4ee3\u7406\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.josn"',title:'"package.josn"'},'{\n    // ...\n    "dependencies": {\n        "concisejs": "^0.7.2"\n    },\n    "conciseConfig": {\n        "Application": {\n            "proxy": {\n                "/api": {\n                    "target": "http://192.168.1.36:3001/mock/147" // \u8bf7\u6c42 Yapi \u63a5\u53e3\n                }\n            }\n        }\n    }\n}\n')),Object(a.b)("p",null,"\u589e\u52a0 ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," \u914d\u7f6e\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u53bb\u6389\u539f ",Object(a.b)("inlineCode",{parentName:"p"},"public/config.js")," \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u3002\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," \u540e\uff0c\u5f00\u53d1\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u6b63\u786e\u8bf7\u6c42\u6a21\u62df\u63a5\u53e3\uff1b\u9879\u76ee\u653e\u5230\u90e8\u7f72\u73af\u5883\u540e\uff0c ConciseJS \u4f1a\u5c06\u63a5\u53e3\u8bf7\u6c42 ",Object(a.b)("inlineCode",{parentName:"p"},"/api/xxx")," \u5904\u7406\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"http://host:port/\u9879\u76ee\u540d/api/xxx")," \uff0c\u5982\u679c API \u4e0e\u524d\u7aef\u5e94\u7528\u4e0d\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\uff0c\u5219\u914d\u7f6e nginx \u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"/\u9879\u76ee\u540d/api")," \u4ee3\u7406\u5230\u9700\u8981\u7684\u670d\u52a1\u5668\u4e0a\u3002"))}p.isMDXComponent=!0}}]);