(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||c;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<c;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(10),s=n(117),o=n(8);const i=Object(r.createContext)({collectLink:()=>{}});var u=n(116);t.a=function({isNavLink:e,to:t,href:n,activeClassName:l,isActive:p,"data-noBrokenLinkCheck":d,autoAddBaseUrl:b=!0,...m}){var f;const{withBaseUrl:O}=Object(u.b)(),j=Object(r.useContext)(i),g=t||n,v=Object(s.a)(g),h=null==g?void 0:g.replace("pathname://",""),y=void 0!==h?(w=h,b&&(e=>e.startsWith("/"))(w)?O(w):w):void 0;var w;const S=Object(r.useRef)(!1),N=e?c.e:c.c,x=o.a.canUseIntersectionObserver;let C;Object(r.useEffect)((()=>(!x&&v&&null!=y&&window.docusaurus.prefetch(y),()=>{x&&C&&C.disconnect()})),[y,x,v]);const k=null!==(f=null==y?void 0:y.startsWith("#"))&&void 0!==f&&f,E=!y||!v||k;return y&&v&&!k&&!d&&j.collectLink(y),E?a.a.createElement("a",Object.assign({href:y},g&&!v&&{target:"_blank",rel:"noopener noreferrer"},m)):a.a.createElement(N,Object.assign({},m,{onMouseEnter:()=>{S.current||null==y||(window.docusaurus.preload(y),S.current=!0)},innerRef:e=>{var t,n;x&&e&&v&&(t=e,n=()=>{null!=y&&window.docusaurus.prefetch(y)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:y||""},e&&{isActive:p,activeClassName:l}))}},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(17),a=n(117);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(t,e,n,r)}}function s(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},117:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(111)),s=n(115),o={title:"\u72b6\u6001\u7ba1\u7406"},i={unversionedId:"state-management",id:"state-management",isDocsHomePage:!1,title:"\u72b6\u6001\u7ba1\u7406",description:"ConciseJS \u63d0\u4f9b\u4e86\u4e00\u79cd\u57fa\u4e8e Redux \u7684 JavaScript \u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u6781\u5927\u7a0b\u5ea6\u7684\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u548c\u903b\u8f91\u7ba1\u7406\u3002",source:"@site/docs/state-management.mdx",sourceDirName:".",slug:"/state-management",permalink:"/en/docs/state-management",version:"current",frontMatter:{title:"\u72b6\u6001\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u83b7\u53d6\u6570\u636e",permalink:"/en/docs/fetching-data"},next:{title:"\u8fd0\u884c\u6d4b\u8bd5",permalink:"/en/docs/running-tests"}},u=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"model",id:"model",children:[{value:"name",id:"name",children:[]},{value:"initialState",id:"initialstate",children:[]},{value:"reducers",id:"reducers",children:[]},{value:"effects",id:"effects",children:[]}]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ConciseJS \u63d0\u4f9b\u4e86\u4e00\u79cd\u57fa\u4e8e Redux \u7684 JavaScript \u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u6781\u5927\u7a0b\u5ea6\u7684\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u548c\u903b\u8f91\u7ba1\u7406\u3002"),Object(c.b)("p",null,"\u5c3d\u7ba1 ConciseJS \u7b80\u5316\u4e86\u5e94\u7528\u5171\u4eab\u72b6\u6001\u7ba1\u7406\uff0c\u4f46\u662f\u5e76\u4e0d\u662f\u6240\u6709\u7684\u5e94\u7528\u573a\u666f\u90fd\u9700\u8981\u5b83\uff0c\u901a\u5e38\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u67d0\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u9700\u8981\u5171\u4eab"),Object(c.b)("li",{parentName:"ul"},"\u5d4c\u5957\u591a\u5c42\u7684\u7ec4\u4ef6\u95f4\u7684\u4f20\u503c"),Object(c.b)("li",{parentName:"ul"},"\u754c\u9762\u64cd\u4f5c\u5341\u5206\u590d\u6742")),Object(c.b)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(c.b)("p",null,"\u5728\u524d\u9762",Object(c.b)(s.a,{to:"/docs/directory-structure",mdxType:"Link"},"\u76ee\u5f55\u7ed3\u6784"),"\u7ae0\u8282\uff0c\u6211\u4eec\u4e86\u89e3\u5230 ConciseJS \u9879\u76ee\u7684\u72b6\u6001\u7ba1\u7406\u76ee\u5f55\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"src/models/")," \u4e0b\uff0c\u8fd9\u548c\u4ee5\u5f80\u9879\u76ee\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"store")," \u76ee\u5f55\u5927\u4e0d\u76f8\u540c\uff0c\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\uff0c\u4e0d\u518d\u9700\u8981\u62c6\u5206 ",Object(c.b)("inlineCode",{parentName:"p"},"actions.js")," \u3001 ",Object(c.b)("inlineCode",{parentName:"p"},"reducers.js")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"store.js")," \u6587\u4ef6\uff0c\u800c\u662f\u5c06\u4e00\u7ec4",Object(c.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u548c\u903b\u8f91"),"\u653e\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002"),Object(c.b)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u72b6\u6001\u7ba1\u7406\u7684\u793a\u4f8b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/models/user.js"',title:'"src/models/user.js"'},"import {login} from '@/services/common'\n\nconst initialUser = localStorage.getItem('user') ?\n  JSON.parse(localStorage.getItem('user')) :\n  {}\n\nconst user = {\n  name: 'user',\n  initialState: {\n    /**\n     * @param {Object} user \u7528\u6237\u4fe1\u606f\n     * @param {String} user.name \u7528\u6237\u540d\n     * @param {String} user.uid \u7528\u6237 ID\n     * @param {String} user.text \u59d3\u540d\n     * @param {String} user.phone \u624b\u673a\u53f7\n     */\n    user: initialUser\n  },\n  reducers: {\n    loginSuccess: (state, action) => {\n      state.user = action.payload\n      localStorage.setItem('user', JSON.stringify(action.payload))\n      // return {...state, user: action.payload || {}}\n    },\n    logoutSuccess: (state, action) => {\n      state.user = null\n      localStorage.removeItem('user')\n      // return {...state, user: {}}\n    },\n    say: (state, action) => {\n      console.log('reducer\\'s `say` .')\n      // return state\n    }\n  },\n  effects: {\n    doLogin: async({getState, dispatch}, {payload}) => {\n      // the example usage of `getState`\n      const state = getState()\n      console.log('state.user.user:', state.user.user)\n      // the example usage of `dispatch`\n      dispatch({\n        type: 'user/say'\n      })\n      // effect\n      // payload = {username, password}\n      const mockLoginRes = await login(payload)\n      // the example usage of `dispatch`\n      dispatch({\n        type: 'user/loginSuccess',\n        payload: mockLoginRes.data\n      })\n    }\n  }\n}\n\nexport default user\n")),Object(c.b)("p",null,"\u6211\u4eec\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"src/models")," \u6587\u4ef6\u5939\u4e2d\u5b9a\u4e49\u4e86 model \u4ee5\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u9875\u9762\u4e2d\u4f7f\u7528 hooks \u6765\u64cd\u4f5c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/pages/Login.jsx"',title:'"src/pages/Login.jsx"'},'import {useDispatch, useSelector} from \'concisejs\'\n\nexport default function Login(props) {\n  const dispatch = useDispatch()\n  const {user} = useSelector(state => state.user)\n  // \u8fd9\u91cc\u76f8\u5f53\u4e8e\u662f\n  // const userAllState = useSelector(state => state.user)\n  // const user = userAllState.user\n\n  const handleLogin = async () => {\n    const username = document.querySelector(\'#username\').value\n    const password = document.querySelector(\'#password\').value\n    await dispatch({\n      type: \'user/doLogin\',\n      payload: {username, password}\n    })\n  }\n\n  return (\n    <div>\n      <input type="text" name="username" id="username" placeholder="\u8bf7\u8f93\u5165\u7528\u6237\u540d" />\n      <input type="password" name="password" id="password" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801" />\n      <button type="button" onClick={handleLogin}>\u767b\u5f55</button>\n    </div>\n  )\n}\n')),Object(c.b)("h2",{id:"model"},"model"),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"model \u7684\u540d\u79f0\uff0c\u8fd9\u662f\u5b83\u5728\u5168\u5c40 state \u4e0a\u7684\u5c5e\u6027\u540d\uff0c\u53ea\u80fd\u7528\u5b57\u7b26\u4e32\u3002\u4e00\u4e2a\u9879\u76ee\u4e2d\u4e0d\u80fd\u6709\u91cd\u590d\u540d\u79f0\u7684 model \uff0c\u5efa\u8bae\u5c06\u6587\u4ef6\u540d\u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"name")," \u503c\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u5c31\u80fd\u76f4\u63a5\u7684\u901a\u8fc7\u6587\u4ef6\u547d\u540d\u6765\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"),Object(c.b)("h3",{id:"initialstate"},"initialState"),Object(c.b)("p",null,"\u5f53\u524d state \u7684\u521d\u59cb\u503c\u3002"),Object(c.b)("h3",{id:"reducers"},"reducers"),Object(c.b)("p",null,"reducers \u662f reducer \u7684\u96c6\u5408\u3002 reducer \u4e5f\u53eb reducing function ",Object(c.b)("a",{parentName:"p",href:"#refer1"},Object(c.b)("sup",null,"[1]"))," \uff0c\u901a\u5e38 reducer \u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u7eaf\u51fd\u6570\u91cc",Object(c.b)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer"},"\u4e0d\u80fd\u6539\u53d8 state")," \uff0c\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5bf9\u8c61\u3002\u4f46\u662f ConcsieJS \u5728\u5185\u90e8\u4f7f\u7528 ",Object(c.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer"},"Immer")," \u6765\u5141\u8bb8\u4fee\u6539 state \uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u4fee\u6539\u6570\u636e\u800c\u4e0e\u6570\u636e\u8fdb\u884c\u4ea4\u4e92\uff0c\u540c\u65f6\u4fdd\u7559\u4e0d\u53ef\u53d8\u6570\u636e\u7684\u6240\u6709\u4f18\u70b9\u3002"),Object(c.b)("p",null,"reducers \u662f\u552f\u4e00\u53ef\u4ee5\u4fee\u6539 state \u7684\u5730\u65b9\u3002"),Object(c.b)("h3",{id:"effects"},"effects"),Object(c.b)("p",null,"effects \u662f effect \u7684\u96c6\u5408\u3002 effect \u88ab\u79f0\u4e3a\u526f\u4f5c\u7528\uff0c\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u548c\u4e1a\u52a1\u903b\u8f91\u3002\u4e0e reducer \u4e00\u6837\uff0c\u7531 action \u89e6\u53d1\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5\u4fee\u6539 state \uff0c\u53ef\u4ee5\u89e6\u53d1 action \uff0c\u53ef\u4ee5\u83b7\u53d6 state \u3002"),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u540d\u8bcd\u89e3\u91ca\uff1a")),Object(c.b)("div",{id:"refer1"},"[1] reducing function \uff1a reducer \u4e5f\u53eb reducing function \uff0c\u5f53\u72b6\u6001\u5bb9\u5668\u6536\u5230 action \u4ee5\u540e\uff0c\u5fc5\u987b\u7ed9\u51fa\u4e00\u4e2a\u65b0\u7684 state \uff0c\u8fd9\u6837 view \u624d\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u79cd state \u7684\u8ba1\u7b97\u8fc7\u7a0b\u5c31\u53eb\u505a reducer \u3002\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u63a5\u53d7 action \u548c\u5f53\u524d state \u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 state \u3002"))}p.isMDXComponent=!0}}]);