(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t);var a=n(157),r=n.n(a),o=n(0),i=n.n(o),c=n(154),l=n(155),p=(n(161),n(163),n(162),n(7)),d=n.n(p),u=n(147).a.div.withConfig({displayName:"chips__ChipsElement",componentId:"nov4v5-0"})(["background:tomato;display:inline-block;color:#ffffff;padding:5px 10px;border-radius:20px;"]),s=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return i.a.createElement(u,null,this.props.children)},t}(o.Component);n.d(t,"_frontmatter",function(){return m});t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h2",components:t},"Chips"),i.a.createElement(s,null,"Chip"),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},"//Simple chip\n<Chips>Chip</Chips>\n")))};var m={}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var p=n(148),d=n.n(p);n.d(t,"PageRenderer",function(){return d.a});var u=n(35);n.d(t,"parsePath",function(){return u.a});var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},150:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),c=n(4),l=n.n(c),p=n(50),d=n(2),u=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(p.a,r()({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,n){},152:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}}]}}}},153:function(e,t,n){"use strict";var a=n(149),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(156),p=n.n(l),d=n(146),u=n(147),s=(n(151),n(49),n(152)),m=u.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),f=u.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=u.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),b=function(e){var t=e.siteTitle;return o.a.createElement(d.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(m,{style:{margin:0}},o.a.createElement(d.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(f,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:s})},g=u.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-0"})(["margin-left:300px;padding:50px;max-width:1000px;"]),y=function(e){var t=e.children;return o.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(g,null,t))},data:a})};y.propTypes={children:c.a.node.isRequired};t.a=y},155:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(153),l=n(4),p=n.n(l),d=n(154),u=(n(75),n(49),n(158),n(160)),s=n(159),m=n.n(s),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,Object.assign({},u.b,{code:this.props.children.trim(),language:"jsx",theme:m.a}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t+" syntax-highlight",style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);f.propTypes={children:p.a.string};var h={};h.code=f;var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d.MDXProvider,{components:h},this.props.children)},t}(i.a.PureComponent);b.propTypes={children:p.a.node},n.d(t,"a",function(){return g});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c.a,null,i.a.createElement(b,null,this.props.children))},t}(o.Component)},161:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(147),l=c.a.div.withConfig({displayName:"select__SelectElement",componentId:"kl0do7-0"})(['position:relative;max-width:370px;height:50px;&:after{content:"";width:10px;height:10px;border-bottom:1px solid #000;border-right:1px solid #000;transform:rotate(45deg);top:10px;right:10px;position:absolute;display:inline-block;}']),p=c.a.select.withConfig({displayName:"select__SelectOption",componentId:"kl0do7-1"})(["left:0;position:absolute;width:100%;border-radius:2px;border:none;background-color:'red';-webkit-appearance:none;outline:none;font-size:1rem;padding:10px 25px;padding-right:35px;color:#000;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l,null,i.a.createElement(p,null,i.a.createElement("option",{value:"volvo"},"Volvo"),i.a.createElement("option",{value:"saab"},"Saab"),i.a.createElement("option",{value:"mercedes"},"Mercedes"),i.a.createElement("option",{value:"audi"},"Audi")))},t}(o.Component);n.d(t,"a",function(){return d})},162:function(e,t,n){"use strict";var a=n(147),r=a.a.button.withConfig({displayName:"button__Button",componentId:"sc-1gn995a-0"})(["background:",";color:",";font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"],function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),o=Object(a.a)(r).withConfig({displayName:"button__TomatoButton",componentId:"sc-1gn995a-1"})(["color:tomato;border-color:tomato;"]);n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(147).a.div.withConfig({displayName:"checkbox__CheckboxElement",componentId:"sc-1cs9k8m-0"})(["display:inline-block;> input{opacity:0;}> input + label{position:relative;padding-left:25px;cursor:pointer;&:before{content:'';position:absolute;left:0;top:1px;width:17px;height:17px;border:1px solid #aaa;background:#f8f8f8;border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}&:after{content:'✔';position:absolute;top:-1px;left:2px;font-size:16px;color:#09ad7e;transition:all .2s;}}> input:not(:checked) + label{&:after{opacity:0;transform:scale(0);}}> input:disabled:not(:checked) + label{&:before{box-shadow:none;border-color:#bbb;background-color:#ddd;}}> input:checked + label{&:after{opacity:1;transform:scale(1);}}> input:disabled:checked + label{&:after{color:#999;}}> input:disabled + label{color:#aaa;}> input:checked:focus + label,input:not(:checked):focus + label{&:before{border:1px dotted blue;}}"]),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(c,{onClick:function(){return e.props.onChange(!e.props.checked)}},i.a.createElement("input",{type:"checkbox",checked:this.props.checked,disabled:this.props.disabled}),i.a.createElement("label",null,this.props.label))},t}(o.Component);n.d(t,"a",function(){return l})}}]);
//# sourceMappingURL=component---src-pages-components-chips-mdx-62b29b730b288f6401d2.js.map