(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(154),i=a(160);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(153),d=a.n(c);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(155),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var s=a(35);a.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),o=a(0),i=a.n(o),c=a(4),d=a.n(c),l=a(50),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:a},a.json))};s.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},159:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"c55f9dba-3a13-521a-891a-5f6b8cee7980",frontmatter:{title:"Avatar",path:"/components/avatar/"}}},{node:{id:"e76a5c69-8b61-5e20-afff-0dc871728579",frontmatter:{title:"Breadcrumb",path:"/components/breadcrumb/"}}},{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"92ef5dae-2339-576a-82f5-2123e5a921ef",frontmatter:{title:"Loader",path:"/components/loader/"}}},{node:{id:"6111b2f8-d8fa-56a4-8a35-8d47cf2c9d05",frontmatter:{title:"Pagination",path:"/components/pagination/"}}},{node:{id:"48eb8f32-417a-53ce-8eba-524f013e7097",frontmatter:{title:"Progress",path:"/components/progress/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}},{node:{id:"cb825d0e-a361-5c96-a72a-e44852243c01",frontmatter:{title:"Table",path:"/components/table/"}}}]}}}},160:function(e,t,a){"use strict";var n=a(158),r=a(0),o=a.n(r),i=a(4),c=a.n(i),d=a(166),l=a.n(d),u=a(154),s=a(152),p=(a(49),a(159)),m=s.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),f=s.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=s.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),g=function(e){var t=e.siteTitle;return o.a.createElement(u.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(m,{style:{margin:0}},o.a.createElement(u.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(f,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:p})},b=s.a.div.withConfig({displayName:"layout__App",componentId:"wwrb0b-0"})(["font-family:monospace;"]),y=s.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-1"})(["margin-left:300px;padding:50px;max-width:1000px;"]),w=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(b,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(y,null,t))},data:n})};w.propTypes={children:c.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-page-2-js-2bb85c768f4e10cf0056.js.map