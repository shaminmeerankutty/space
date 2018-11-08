(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(150),r=n.n(a),o=n(0),i=n.n(o),u=n(151),c=n(7),l=n.n(c),s=n(147),p=n(4),m=n.n(p),d=(n(75),n(50),n(163),n(177)),f=n(168),h=n.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,Object.assign({},d.b,{code:this.props.children.trim(),language:"jsx",theme:h.a}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t+" syntax-highlight",style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);g.propTypes={children:m.a.string};var y={};y.code=g;var v=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement(u.MDXProvider,{components:y},this.props.children)},t}(i.a.PureComponent);v.propTypes={children:m.a.node};var E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement(s.a,null,i.a.createElement(v,null,this.props.children))},t}(o.Component),b=n(169),T=n.n(b),w=n(170);function x(){var e=T()(["\n  color: tomato;\n  border-color: tomato;\n"]);return x=function(){return e},e}function k(){var e=T()(["\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return k=function(){return e},e}var q=w.a.button(k(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),P=Object(w.a)(q)(x());n.d(t,"_frontmatter",function(){return B});t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(u.MDXTag,{name:"wrapper",Layout:E,layoutProps:n,components:t},i.a.createElement(u.MDXTag,{name:"h2",components:t},"Introduction"),i.a.createElement(u.MDXTag,{name:"p",components:t},"Added a button component"),i.a.createElement(q,null,"Hello Button"),i.a.createElement(P,null,"Hello Tomato Button"),i.a.createElement(u.MDXTag,{name:"pre",components:t},i.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},"//Simple button\n<Button>Hello Button</Button>\n\n//Tomato style button\n<TomatoButton>Hello Tomato Button</TomatoButton>\n")))};var B={}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(141),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(143),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Space Documentation"}}}}},145:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),o=n(0),i=n.n(o),u=n(4),c=n.n(u),l=n(49),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},146:function(e,t,n){},147:function(e,t,n){"use strict";var a=n(144),r=n(0),o=n.n(r),i=n(4),u=n.n(i),c=n(148),l=n.n(c),s=n(142),p=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h4",{style:{margin:0}},o.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(146),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:u.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-components-button-mdx-76887a6298e327448d03.js.map