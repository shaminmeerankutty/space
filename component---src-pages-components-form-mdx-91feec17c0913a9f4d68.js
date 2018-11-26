(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t);var a=n(158),r=n.n(a),o=n(0),i=n.n(o),c=n(155),u=n(156),l=n(7),p=n.n(l),d=n(147).a.input.attrs({type:function(e){return e.type}}).withConfig({displayName:"textinput__Input",componentId:"u50t9s-0"})(["::placeholder{color:gray;}"]),s=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return i.a.createElement(d,this.props)},t}(o.Component);n.d(t,"_frontmatter",function(){return m});t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:u.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Select"),i.a.createElement(s,{type:"text",placeholder:"Text input"}),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},'//Text Input\n<TextInput type="text" placeholder="Text input" />\n')))};var m={}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(146),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(149),p=n.n(l);n.d(t,"PageRenderer",function(){return p.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},151:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),c=n(4),u=n.n(c),l=n(50),p=n(2),d=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};d.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=d},152:function(e,t,n){},153:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}},{node:{id:"cb825d0e-a361-5c96-a72a-e44852243c01",frontmatter:{title:"Table",path:"/components/table/"}}}]}}}},154:function(e,t,n){"use strict";var a=n(150),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(157),l=n.n(u),p=n(148),d=n(147),s=(n(152),n(49),n(153)),m=d.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),f=d.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=d.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),y=function(e){var t=e.siteTitle;return o.a.createElement(p.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(m,{style:{margin:0}},o.a.createElement(p.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(f,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:s})},g=d.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-0"})(["margin-left:300px;padding:50px;max-width:1000px;"]),x=function(e){var t=e.children;return o.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(g,null,t))},data:a})};x.propTypes={children:c.a.node.isRequired};t.a=x},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(154),u=n(4),l=n.n(u),p=n(155),d=(n(75),n(49),n(162),n(164)),s=n(163),m=n.n(s),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,Object.assign({},d.b,{code:this.props.children.trim(),language:"jsx",theme:m.a}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t+" syntax-highlight",style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);f.propTypes={children:l.a.string};var h={};h.code=f;var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(p.MDXProvider,{components:h},this.props.children)},t}(i.a.PureComponent);y.propTypes={children:l.a.node},n.d(t,"a",function(){return g});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c.a,null,i.a.createElement(y,null,this.props.children))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-components-form-mdx-91feec17c0913a9f4d68.js.map