(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Space Documentation"),r.a.createElement("p",null,"Space is a minimal react ui library"))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(144),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(146),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var s=n(35);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},149:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),o=n.n(i),c=n(4),d=n.n(c),l=n(50),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};s.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){},151:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}}]}}}},152:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),d=n(154),l=n.n(d),u=n(145),s=n(147),p=(n(150),n(49),n(151)),m=s.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),f=s.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;"]),h=s.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),y=function(e){var t=e.siteTitle;return i.a.createElement(u.StaticQuery,{query:"522128430",render:function(e){return i.a.createElement(h,null,i.a.createElement(m,{style:{margin:0}},i.a.createElement(u.Link,{to:"/"},t)),i.a.createElement("div",null,"Components"),i.a.createElement(f,null,e.allMdx.edges.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:p})},g=s.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-0"})(["margin-left:300px;padding:50px;max-width:1000px;"]),b=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(g,null,t))},data:a})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-ad63d3de7ae3068bca37.js.map