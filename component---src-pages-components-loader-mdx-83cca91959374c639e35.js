(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return p});var a=n(167),r=n.n(a),o=n(0),i=n.n(o),d=n(161),c=n(162),l=n(165);t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(d.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(d.MDXTag,{name:"h2",components:t},"Loader"),i.a.createElement(l.f,null),i.a.createElement(d.MDXTag,{name:"pre",components:t},i.a.createElement(d.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},"<Loader />\n")))};var p={}},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),d=n(153),c=n.n(d);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return d.withPrefix}),n.d(t,"navigate",function(){return d.navigate}),n.d(t,"push",function(){return d.push}),n.d(t,"replace",function(){return d.replace}),n.d(t,"navigateTo",function(){return d.navigateTo});var l=n(155),p=n.n(l);n.d(t,"PageRenderer",function(){return p.a});var s=n(35);n.d(t,"parsePath",function(){return s.a});var u=r.a.createContext({}),f=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},156:function(e,t,n){"use strict";var a=n(152),r=a.a.button.withConfig({displayName:"button__Button",componentId:"oz2z1s-0"})(["background:",";color:",";font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"],function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),o=Object(a.a)(r).withConfig({displayName:"button__TomatoButton",componentId:"oz2z1s-1"})(["color:tomato;border-color:tomato;"]);n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},157:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),o=n(0),i=n.n(o),d=n(4),c=n.n(d),l=n(50),p=n(2),s=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},159:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"c55f9dba-3a13-521a-891a-5f6b8cee7980",frontmatter:{title:"Avatar",path:"/components/avatar/"}}},{node:{id:"e76a5c69-8b61-5e20-afff-0dc871728579",frontmatter:{title:"Breadcrumb",path:"/components/breadcrumb/"}}},{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"92ef5dae-2339-576a-82f5-2123e5a921ef",frontmatter:{title:"Loader",path:"/components/loader/"}}},{node:{id:"6111b2f8-d8fa-56a4-8a35-8d47cf2c9d05",frontmatter:{title:"Pagination",path:"/components/pagination/"}}},{node:{id:"48eb8f32-417a-53ce-8eba-524f013e7097",frontmatter:{title:"Progress",path:"/components/progress/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}},{node:{id:"cb825d0e-a361-5c96-a72a-e44852243c01",frontmatter:{title:"Table",path:"/components/table/"}}}]}}}},160:function(e,t,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),d=n.n(i),c=n(166),l=n.n(c),p=n(154),s=n(152),u=(n(49),n(159)),f=s.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),m=s.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=s.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),b=function(e){var t=e.siteTitle;return o.a.createElement(p.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(f,{style:{margin:0}},o.a.createElement(p.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(m,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:u})},g=s.a.div.withConfig({displayName:"layout__App",componentId:"wwrb0b-0"})(["font-family:monospace;"]),x=s.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-1"})(["margin-left:300px;padding:50px;max-width:1000px;"]),y=function(e){var t=e.children;return o.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(g,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(x,null,t))},data:a})};y.propTypes={children:d.a.node.isRequired};t.a=y},162:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),d=n(160),c=n(4),l=n.n(c),p=n(161),s=(n(75),n(49),n(168),n(170)),u=n(169),f=n.n(u),m=n(152).a.pre.withConfig({displayName:"syntaxHighligther__Pre",componentId:"va3h5c-0"})(["padding:30px;border-radius:3px;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.a,Object.assign({},s.b,{code:this.props.children.trim(),language:"jsx",theme:f.a}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement(m,{className:t+" syntax-highlight",style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);h.propTypes={children:l.a.string};var b={};b.code=h;var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(p.MDXProvider,{components:b},this.props.children)},t}(i.a.PureComponent);g.propTypes={children:l.a.node},n.d(t,"a",function(){return x});var x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,null,i.a.createElement(g,null,this.props.children))},t}(o.Component)},163:function(e,t,n){var a=n(6);a(a.P,"Function",{bind:n(164)})},164:function(e,t,n){"use strict";var a=n(18),r=n(11),o=n(76),i=[].slice,d={};e.exports=Function.bind||function(e){var t=a(this),n=i.call(arguments,1),c=function(){var a=n.concat(i.call(arguments));return this instanceof c?function(e,t,n){if(!(t in d)){for(var a=[],r=0;r<t;r++)a[r]="a["+r+"]";d[t]=Function("F,a","return new F("+a.join(",")+")")}return d[t](e,n)}(t,a.length,a):o(t,a,e)};return r(t.prototype)&&(c.prototype=t.prototype),c}},165:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),d=n(152),c=d.a.div.withConfig({displayName:"select__SelectElement",componentId:"t1bebx-0"})(['position:relative;max-width:370px;height:50px;&:after{content:"";width:10px;height:10px;border-bottom:1px solid #000;border-right:1px solid #000;transform:rotate(45deg);top:10px;right:10px;position:absolute;display:inline-block;}']),l=d.a.select.withConfig({displayName:"select__SelectOption",componentId:"t1bebx-1"})(['left:0;position:absolute;width:100%;border-radius:2px;border:none;background-color:"red";-webkit-appearance:none;outline:none;font-size:1rem;padding:10px 25px;padding-right:35px;color:#000;']),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c,null,i.a.createElement(l,{defaultValue:this.props.defaultValue},this.props.children))},t}(o.Component),s=d.a.div.withConfig({displayName:"checkbox__CheckboxElement",componentId:"wmubq4-0"})(["display:inline-block;> input{opacity:0;}> input + label{position:relative;padding-left:25px;cursor:pointer;&:before{content:'';position:absolute;left:0;top:1px;width:17px;height:17px;border:1px solid #aaa;background:#f8f8f8;border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}&:after{content:'✔';position:absolute;top:-1px;left:2px;font-size:16px;color:#09ad7e;transition:all .2s;}}> input:not(:checked) + label{&:after{opacity:0;transform:scale(0);}}> input:disabled:not(:checked) + label{&:before{box-shadow:none;border-color:#bbb;background-color:#ddd;}}> input:checked + label{&:after{opacity:1;transform:scale(1);}}> input:disabled:checked + label{&:after{color:#999;}}> input:disabled + label{color:#aaa;}> input:checked:focus + label,input:not(:checked):focus + label{&:before{border:1px dotted blue;}}"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(s,{onClick:function(){return e.props.onChange(!e.props.checked)}},i.a.createElement("input",{type:"checkbox",checked:this.props.checked,disabled:this.props.disabled}),i.a.createElement("label",null,this.props.label))},t}(o.Component),f=n(156),m=d.a.div.withConfig({displayName:"chips__Chips",componentId:"n1epbm-0"})(["background:#5f27cd;display:inline-block;color:#ffffff;padding:10px 15px;border-radius:20px;margin-left:10px;"]),h=d.a.table.withConfig({displayName:"table__Table",componentId:"gu31ym-0"})(['margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}']),b=d.a.img.withConfig({displayName:"avatar__Avatar",componentId:"xnskd3-0"})(["background:#dedede;border-radius:100%;width:100px;height:100px;border:5px solid #dedede;"]),g=d.a.ul.withConfig({displayName:"breadcrumb__Breadcrumb",componentId:"lp04vq-0"})(['padding:10px 16px;list-style:none;li{display:inline;}li+li:before{padding:3px;color:black;content:"/\0a0";}']),x=d.a.div.withConfig({displayName:"loaders__LoaderContainer",componentId:"sc-15b72tr-0"})(["width:60px;height:60px;padding-left:60px;"]),y=d.a.div.withConfig({displayName:"loaders__Load",componentId:"sc-15b72tr-1"})(["width:30px;height:30px;border-top-right-radius:30px;border:5px solid #5f27cd;border-left:0;border-bottom:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;animation:spin 1s linear infinite;transform-origin:0% 100%;@-moz-keyframes spin{100%{-moz-transform:rotate(360deg);}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"]),v=function(){return i.a.createElement(x,null,i.a.createElement(y,null))},w=d.a.div.withConfig({displayName:"progress__Progress",componentId:"sc-1ywdo2w-0"})(['background:#f1f2f6;width:200px;height:10px;position:relative;&::after{content:"";position:absolute;background:#5f27cd;width:',";;height:100%;}"],function(e){return e.percentage?e.percentage+"%":"10%"}),k=(n(49),n(163),n(51)),C=n.n(k),E=d.a.ul.withConfig({displayName:"pagination__PaginationLinks",componentId:"tjvmuc-0"})(["padding:0;list-style:none;display:inline;li{display:inline;padding:10px;&.active{background:#5f27cd;color:#ffffff;}}"]),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).itemClick=n.itemClick.bind(C()(C()(n))),n}r()(t,e);var n=t.prototype;return n.itemClick=function(e){this.props.onItemClick(e)},n.render=function(){var e=this,t=this.props.currentpage;return i.a.createElement("div",null,i.a.createElement("a",{onClick:function(){e.itemClick(t-1)}},"previous"),i.a.createElement(E,null,this.props.pages.map(function(n){return i.a.createElement("li",{key:n,className:n===t?"active":"",onClick:function(){e.itemClick(n)}},n)})),i.a.createElement("a",{onClick:function(){e.itemClick(t+1)}},"next"))},t}(i.a.Component);n.d(t,"i",function(){return p}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return f.a}),n.d(t,"e",function(){return m}),n.d(t,"j",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return g}),n.d(t,"f",function(){return v}),n.d(t,"h",function(){return w}),n.d(t,"g",function(){return _})}}]);
//# sourceMappingURL=component---src-pages-components-loader-mdx-83cca91959374c639e35.js.map