"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{895:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return s},vc:function(){return i.a},rx:function(){return c},qo:function(){return m},Hk:function(){return u},Iz:function(){return d}});var a=n(1336),l=n.n(a),o=n(813),i=n.n(o);n(892)(l()),n(1728).w(l()),n(4182)(l());var r=["en","zh"],s=!1,c="7f634de0",m=8,u=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},9360:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),l=n(1217),o=n(8665),i=n(8561),r=n(5999),s=n(9960);var c=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(s.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=n(2822),u=n(1575);var d=function(e){var t,n=e.content,r=e.sidebar,s=n.frontMatter,d=n.assets,v=n.metadata,g=v.title,p=v.description,_=v.nextItem,f=v.prevItem,b=v.date,h=v.tags,N=v.authors,k=s.hide_table_of_contents,E=s.keywords,C=s.toc_min_heading_level,Z=s.toc_max_heading_level,w=null!=(t=d.image)?t:s.image;return a.createElement(o.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:r,toc:!k&&n.toc&&n.toc.length>0?a.createElement(u.Z,{toc:n.toc,minHeadingLevel:C,maxHeadingLevel:Z}):void 0},a.createElement(l.Z,{title:g,description:p,keywords:E,image:w},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:b}),N.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),h.length>0&&a.createElement("meta",{property:"article:tag",content:h.map((function(e){return e.label})).join(",")})),a.createElement(i.Z,{frontMatter:s,assets:d,metadata:v,isBlogPostPage:!0},a.createElement(n,null)),(_||f)&&a.createElement(c,{nextItem:_,prevItem:f}))}},5002:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),l=n(3366),o=n(7294),i=n(2822),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,a=e.linkClassName,l=e.isChild;return t.length?o.createElement("ul",{className:l?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,p=e.maxHeadingLevel,_=(0,l.Z)(e,r),f=(0,i.LU)(),b=null!=g?g:f.tableOfContents.minHeadingLevel,h=null!=p?p:f.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:h}),k=(0,o.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:h}}),[u,v,b,h]);return(0,i.Si)(k),o.createElement(s,(0,a.Z)({toc:N,className:c,linkClassName:u},_))}},1575:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),l=n(3366),o=n(7294),i=n(6010),r=n(5002),s="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,n=(0,l.Z)(e,c);return o.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},o.createElement(r.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);