"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[502],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"\u72b6\u6001\u7ba1\u7406 API",id:"state-management-api"},u=void 0,s={unversionedId:"state-management-api",id:"state-management-api",title:"\u72b6\u6001\u7ba1\u7406 API",description:"useDispatch",source:"@site/api/state-management-api.md",sourceDirName:".",slug:"/state-management-api",permalink:"/api/state-management-api",tags:[],version:"current",frontMatter:{title:"\u72b6\u6001\u7ba1\u7406 API",id:"state-management-api"},sidebar:"docs",previous:{title:"\u83b7\u53d6\u6570\u636e API",permalink:"/api/fetching-data-api"},next:{title:"\u989d\u5916\u7684 API",permalink:"/api/additional-api"}},p={},l=[{value:"useDispatch",id:"usedispatch",level:2},{value:"useSelector",id:"useselector",level:2}],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usedispatch"},"useDispatch"),(0,o.kt)("p",null,"\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u7684\u5f15\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {useDispatch} from \'concisejs\'\n\nexport default function Login() {\n  const dispatch = useDispatch()\n\n  const handleLogin = async () => {\n    const username = document.querySelector(\'#username\').value\n    const password = document.querySelector(\'#password\').value\n    await dispatch({\n      type: \'user/doLogin\',\n      payload: {username, password}\n    })\n  }\n\n  return (\n    <div>\n      <input type="text" name="username" id="username" placeholder="\u8bf7\u8f93\u5165\u7528\u6237\u540d" />\n      <input type="password" name="password" id="password" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801" />\n      <button type="button" onClick={handleLogin}>\u767b\u5f55</button>\n    </div>\n  )\n}\n')),(0,o.kt)("h2",{id:"useselector"},"useSelector"),(0,o.kt)("p",null,"\u5141\u8bb8\u60a8\u4f7f\u7528\u9009\u62e9\u5668\u529f\u80fd\u4ece\u72b6\u6001\u4ed3\u5e93\u4e2d\u63d0\u53d6\u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useSelector} from 'concisejs'\n\nexport default function Example() {\n  const {user} = useSelector(state => state.user)\n\n  if (user) {\n    return <div>Hello, {user.name}!</div>\n  }\n  return <div>\u672a\u767b\u5f55</div>\n}\n")))}d.isMDXComponent=!0}}]);