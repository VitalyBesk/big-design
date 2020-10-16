_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"0unP":function(e,n,t){"use strict";t.r(n);var r=t("VtSi"),a=t.n(r),o=t("QsI/"),i=t("lebv"),l=t("Jb5e"),d=t("ERkP"),c=t.n(d),s=t("lIm4"),u=t("GsAr"),p=t("cxan"),f=t("R5dR"),h=t("nFRM"),m=c.a.createElement,y=[{name:"iconless",types:"boolean",description:"Hides/shows all icons on the tree."},{name:"initialNodes",types:m(f.a,{href:"#tree-node-prop-table"},"TreeNode[]"),description:m(c.a.Fragment,null,"Initial set of nodes to render. If you modify ",m(s.a,{primary:!0},"initialNodes"),", the component will not rerender. Use ",m(s.a,{primary:!0},"onCollapse")," or ",m(s.a,{primary:!0},"onSelect")," to mutate nodes. See"," ",m(f.a,{href:"#tree-node-prop-table"},"below")," for usage."),required:!0},{name:"onCollapse",types:"(node: TreeNode) => TreeNodeRef | void",description:"Function that will get called when a tree node is collapsed. You can modify the children by returning an object with children as a key/value pair."},{name:"onExpand",types:"(node: TreeNode) => TreeNodeRef | void",description:"Function that will get called when a tree node is expanded. You can modify the children by returning an object with children as a key/value pair."},{name:"onSelect",types:"(value: T[] | T) => void",description:m(c.a.Fragment,null,"Function that will get called when a tree node is collapsed. Based on the ",m(s.a,{primary:!0},"selectable")," prop, it'll return either an array of values, or a single value.")},{name:"selectable",types:["multi","radio"],description:"Function that will get called when a tree node is expanded."}],g=function(e){return m(h.a,Object(p.a)({title:"Tree",propList:y},e))},b=[{name:"children",types:"TreeNode[]",description:"Children for the current node."},{name:"disabled",types:"boolean",description:"Determines if the TreeNode is disabled."},{name:"expanded",types:"boolean",description:"Determines if the TreeNode is expanded by default."},{name:"icon",types:m(f.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:"Custom icon, in place of the folder icon."},{name:"id",types:["string","number"],description:"TreeNode identifier, must be unique.",required:!0},{name:"label",types:"string",description:"Label for the tree node.",required:!0},{name:"selected",types:"string",description:"Determines if the TreeNode is selected by default."},{name:"value",types:"T",description:m(c.a.Fragment,null,"Value of the selected node. A checkbox or radio will not appear if ",m(s.a,{primary:!0},"value")," and"," ",m(s.a,{primary:!0},"selectable")," is not defined.")}],v=function(e){return m(h.a,Object(p.a)({title:"Tree[TreeNode]",propList:b},e))},w=c.a.createElement,x=function(){var e=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return void 0!==n?setTimeout((function(){return e([{id:3,label:"Category"}])}),2e3):t(void 0)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return w(c.a.Fragment,null,w(i.a,null,"Tree"),w(i.m,null,"The ",w(s.a,{primary:!0},"Tree")," component is used to display a tree of items. Useful for defining a tree of categories or subcollections."),w(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      value: 0,\n      label: 'Category',\n      expanded: true,\n      children: [\n        {\n          id: 5,\n          value: 5,\n          expanded: true,\n          label: 'Category',\n          children: [{ id: 9, value: 9, selected: true, label: 'Category' }],\n        },\n      ],\n    },\n    {\n      id: 1,\n      value: 1,\n      label: 'Category',\n      disabled: true,\n      expanded: true,\n      children: [{ id: 6, value: 6, label: 'Category' }],\n    },\n    { id: 2, value: 2, label: 'Category' },\n    {\n      id: 3,\n      value: 3,\n      label: 'Category',\n      selected: true,\n      children: [{ id: 7, value: 7, selected: true, label: 'Category' }],\n    },\n    { id: 4, value: 4, label: 'Category', children: [{ id: 8, value: 8, label: 'Category' }] },\n  ];\n\n  return <Tree selectable=\"multi\" initialNodes={nodes} />;\n}"),w(i.b,null,"API"),w(l.a,{header:"API Usuage",type:"warning",messages:[{text:"This API is currently experimental and is subject to change."}],marginBottom:"xLarge"}),w(g,null),w(v,{id:"tree-node-prop-table"}),w(i.b,null,"Examples"),w(i.c,null,"Radio"),w(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      value: 0,\n      label: 'Category',\n      expanded: true,\n      disabled: true,\n      children: [{ id: 3, value: 3, label: 'Subcategory' }],\n    },\n    { id: 1, value: 1, label: 'Category' },\n    { id: 2, value: 2, label: 'Category', disabled: true },\n  ];\n\n  return <Tree selectable=\"radio\" initialNodes={nodes} />;\n}"),w(i.c,null,"Custom Icons"),w(i.m,null,"You can replace the folder icon with a custom icon of your choice."),w(l.a,{type:"warning",messages:[{text:"If you use the iconless prop, ALL icons with be hidden (including custom ones)."}],marginBottom:"medium"}),w(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      icon: <StoreIcon color=\"primary\" />,\n      label: 'Storefront - US',\n      expanded: true,\n      children: [{ id: 3, label: 'Subcategory' }],\n    },\n    { id: 1, icon: <LanguageIcon color=\"primary\" />, label: 'Storefront - CA' },\n    { id: 2, icon: <AssignmentIcon color=\"primary\" />, label: 'Storefront - EU' },\n  ];\n\n  return <Tree initialNodes={nodes} />;\n}"),w(i.c,null,"Modifying Children"),w(i.m,null,"By returning a object containing new children nodes, you have the freedom of modifying/replacing children nodes. This is useful when you need to asyncronously load in child nodes. We don't recommend modifying the nodes passed into the Tree prop, as it rerenders the entire tree."),w(u.a,{scope:{fetchChildren:x}},"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      label: 'Category',\n      children: [],\n    },\n    { id: 1, label: 'Category' },\n    { id: 2, label: 'Category' },\n  ];\n\n  async function handleOnExpand(node: TreeNodeProps<undefined>) {\n    const children = node.id === 0 ? await fetchChildren(node.id) : node.children;\n\n    return { children };\n  }\n\n  return <Tree initialNodes={nodes} onExpand={handleOnExpand} />;\n}"))}},"5l7A":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tree/TreePage",function(){return t("0unP")}])},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),a=t("pONU");n.__esModule=!0,n.default=void 0;var o,i=a(t("ERkP")),l=t("L9lV"),d=(t("fvxO"),t("7xIC")),c=new Map,s=window.IntersectionObserver,u={};var p=function(e,n){var t=o||(s?o=new s((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function f(e,n,t,r){(0,l.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),u[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=i.default.useState(),a=r(t,2),o=a[0],c=a[1],h=(0,d.useRouter)(),m=h&&h.pathname||"/",y=i.default.useMemo((function(){var n=(0,l.resolveHref)(m,e.href);return{href:n,as:e.as?(0,l.resolveHref)(m,e.as):n}}),[m,e.href,e.as]),g=y.href,b=y.as;i.default.useEffect((function(){if(n&&s&&o&&o.tagName&&(0,l.isLocalURL)(g)&&!u[g+"%"+b])return p(o,(function(){f(h,g,b)}))}),[n,o,g,b,h]);var v=e.children,w=e.replace,x=e.shallow,E=e.scroll;"string"===typeof v&&(v=i.default.createElement("a",null,v));var T=i.Children.only(v),C={ref:function(e){e&&c(e),T&&"object"===typeof T&&T.ref&&("function"===typeof T.ref?T.ref(e):"object"===typeof T.ref&&(T.ref.current=e))},onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,b,w,x,E)}};return n&&(C.onMouseEnter=function(e){(0,l.isLocalURL)(g)&&(T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),f(h,g,b,{priority:!0}))}),!e.passHref&&("a"!==T.type||"href"in T.props)||(C.href=(0,l.addBasePath)(b)),i.default.cloneElement(T,C)};n.default=h},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("Fhg5"),a=t("jvFD"),o=t.n(a),i=t("ERkP"),l=t.n(i).a.createElement;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){return"/big-design"+e}}var c=function(e){var n=e.as,t=e.children,a=e.href;return l(o.a,{href:a,as:d(n),passHref:!0},"string"===typeof t?l(r.a,null,t):t)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("lebv"),a=t("XPf/"),o=t("BtTX"),i=t("ERkP"),l=t.n(i),d=t("ZUh6"),c=t("j/s1"),s=Object(c.e)(d.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,p=function(e){var n=e.children,t=e.title,l=Object(i.useState)(!0),d=l[0],c=l[1],p=function(){return c(!d)};return u("div",null,u(s,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},d?u(a.a,{title:"Expand"}):u(o.a,{title:"Collapse"}),u(r.m,null,t)),!d&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),l=a.a.createElement,d=function(e){return l(i,e)};d.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("yGqs"),a=t("lebv"),o=t("Fhg5"),i=t("ERkP"),l=t.n(i),d=t("lIm4"),c=t("c2K2"),s=l.a.createElement,u=function(e){var n=e.collapsible,t=e.id,o=e.propList,i=e.title,u=function(){return s(r.b,{marginBottom:"xLarge"},s(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(l.a.Fragment,null,s(d.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(d.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(a.m,null,n)}}],items:o}),s(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(c.a,{title:"".concat(i," Props")},u()):s(l.a.Fragment,null,s(a.c,{id:t},i),u())},p=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(l.a.Fragment,{key:e},e.type===o.a?s(d.a,{highlight:!1},e):s(d.a,null,e),t<n.length-1?" | ":null)})):n.type===o.a?s(d.a,{highlight:!1},n):s(d.a,null,n)}}},[["5l7A",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);