_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{KeDb:function(n,e,t){"use strict";var a=t("x3oR"),r=t("pONU");e.__esModule=!0,e.default=void 0;var i,o=r(t("ERkP")),s=t("L9lV"),l=t("7xIC"),c=new Map,u=window.IntersectionObserver,d={};var p=function(n,e){var t=i||(u?i=new u((function(n){n.forEach((function(n){if(c.has(n.target)){var e=c.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(i.unobserve(n.target),c.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(n),c.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}c.delete(n)}):function(){}};function f(n,e,t,a){(0,s.isLocalURL)(e)&&(n.prefetch(e,t,a).catch((function(n){0})),d[e+"%"+t]=!0)}var g=function(n){var e=!1!==n.prefetch,t=o.default.useState(),r=a(t,2),i=r[0],c=r[1],g=(0,l.useRouter)(),m=g&&g.pathname||"/",h=o.default.useMemo((function(){var e=(0,s.resolveHref)(m,n.href,!0),t=a(e,2),r=t[0],i=t[1];return{href:r,as:n.as?(0,s.resolveHref)(m,n.as):i||r}}),[m,n.href,n.as]),y=h.href,b=h.as;o.default.useEffect((function(){if(e&&u&&i&&i.tagName&&(0,s.isLocalURL)(y)&&!d[y+"%"+b])return p(i,(function(){f(g,y,b)}))}),[e,i,y,b,g]);var v=n.children,w=n.replace,B=n.shallow,P=n.scroll;"string"===typeof v&&(v=o.default.createElement("a",null,v));var I=o.Children.only(v),L={ref:function(n){n&&c(n),I&&"object"===typeof I&&I.ref&&("function"===typeof I.ref?I.ref(n):"object"===typeof I.ref&&(I.ref.current=n))},onClick:function(n){I.props&&"function"===typeof I.props.onClick&&I.props.onClick(n),n.defaultPrevented||function(n,e,t,a,r,i,o){("A"!==n.currentTarget.nodeName||!function(n){var e=n.currentTarget.target;return e&&"_self"!==e||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,s.isLocalURL)(t))&&(n.preventDefault(),null==o&&(o=a.indexOf("#")<0),e[r?"replace":"push"](t,a,{shallow:i}).then((function(n){n&&o&&(window.scrollTo(0,0),document.body.focus())})))}(n,g,y,b,w,B,P)}};return e&&(L.onMouseEnter=function(n){(0,s.isLocalURL)(y)&&(I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(n),f(g,y,b,{priority:!0}))}),(n.passHref||"a"===I.type&&!("href"in I.props))&&(L.href=(0,s.addBasePath)(b)),o.default.cloneElement(I,L)};e.default=g},R5dR:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t("Fhg5"),r=t("jvFD"),i=t.n(r),o=t("ERkP"),s=t.n(o).a.createElement;function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(n){var e="/big-design";return e+n}}var c=function(n){var e=n.as,t=n.children,r=n.href;return s(i.a,{href:r,as:l(e),passHref:!0},"string"===typeof t?s(a.a,null,t):t)}},akZe:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("cxan"),r=t("ERkP"),i=t.n(r),o=t("R5dR"),s=t("nFRM"),l=i.a.createElement,c=[{name:"margin",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(n){return l(s.a,Object(a.a)({title:"Margin",propList:c},n))}},c2K2:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var a=t("lebv"),r=t("XPf/"),i=t("BtTX"),o=t("ERkP"),s=t.n(o),l=t("ZUh6"),c=t("j/s1"),u=Object(c.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),d=s.a.createElement,p=function(n){var e=n.children,t=n.title,s=Object(o.useState)(!0),l=s[0],c=s[1],p=function(){return c(!l)};return d("div",null,d(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(n){"Enter"!==n.key&&" "!==n.key||p()},tabIndex:0},l?d(r.a,{title:"Expand"}):d(i.a,{title:"Collapse"}),d(a.m,null,t)),!l&&e)}},jvFD:function(n,e,t){n.exports=t("KeDb")},lIm4:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t("ERkP"),r=t.n(a),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(n){return n.theme.colors.secondary70}),(function(n){var e=n.highlight,t=n.primary,a=n.theme;return e&&!t&&Object(i.d)(["background-color:",";padding:",";"],a.colors.warning10,a.spacing.xxSmall)}),(function(n){var e=n.primary,t=n.theme;return e&&Object(i.d)(["color:",";"],t.colors.primary70)})),s=r.a.createElement,l=function(n){return s(o,n)};l.defaultProps={highlight:!0}},nFRM:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("yGqs"),r=t("lebv"),i=t("Fhg5"),o=t("ERkP"),s=t.n(o),l=t("lIm4"),c=t("c2K2"),u=s.a.createElement,d=function(n){var e=n.collapsible,t=n.id,i=n.propList,o=n.title,d=function(){return u(a.b,{marginBottom:"xLarge"},u(a.a,{columns:[{header:"Prop Name",hash:"propName",render:function(n){var e=n.name,t=n.required;return u(s.a.Fragment,null,u(l.a,{primary:!0},e),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(n){var e=n.types;return u(p,{types:e})}},{header:"Default",hash:"default",render:function(n){var e=n.defaultValue;return u(l.a,{highlight:!1},e)}},{header:"Description",hash:"description",width:"50%",render:function(n){var e=n.description;return u(r.m,null,e)}}],items:i}),u(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return e?u(c.a,{title:"".concat(o," Props")},d()):u(s.a.Fragment,null,u(r.c,{id:t},o),d())},p=function(n){var e=n.types;return Array.isArray(e)?e.map((function(n,t){return u(s.a.Fragment,{key:n},n.type===i.a?u(l.a,{highlight:!1},n):u(l.a,null,n),t<e.length-1?" | ":null)})):e.type===i.a?u(l.a,{highlight:!1},e):u(l.a,null,e)}},pg6R:function(n,e,t){"use strict";t.r(e);var a=t("lebv"),r=t("Fhg5"),i=t("ERkP"),o=t.n(i),s=t("GsAr"),l=t("lIm4"),c=t("cxan"),u=t("R5dR"),d=t("nFRM"),p=o.a.createElement,f=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your button's action is of normal or destructive nature."},{name:"iconLeft",types:p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(o.a.Fragment,null,"Pass in an"," ",p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"iconOnly",types:p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(o.a.Fragment,null,"Pass in an"," ",p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to replace content with an icon.")},{name:"iconRight",types:p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(o.a.Fragment,null,"Pass in an"," ",p(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the right of the text.")},{name:"isLoading",types:"boolean",defaultValue:"false",description:"Used to determine if component is in a loading state."},{name:"mobileWidth",types:["auto","100%"],defaultValue:"100%",description:"Determines the width in mobile viewport."},{name:"variant",types:["primary","secondary","subtle"],defaultValue:"primary",description:"Determines which style of button to display."}],g=function(n){return p(d.a,Object(c.a)({title:"Button",propList:f},n))},m=t("akZe"),h=o.a.createElement;e.default=function(){return h(o.a.Fragment,null,h(a.a,null,"Buttons"),h(a.m,null,"Buttons are calls to action used throughout the product experience."," ",h(r.a,{href:"https://design.bigcommerce.com/components/buttons",target:"_blank"},"Buttons Design Guidelines"),"."),h(s.a,null,'<Button actionType="normal" isLoading={false} variant="primary">\n  Label\n</Button>'),h(a.b,null,"API"),h(g,null),h(a.c,null,"Inherited Props"),h(m.a,{collapsible:!0}),h(a.b,null,"Variants"),h(a.m,null,"There are three types of variants to choose from: ",h(l.a,null,"primary"),", ",h(l.a,null,"secondary"),", and"," ",h(l.a,null,"subtle"),". You can determine what type of variant by using the ",h(l.a,{primary:!0},"variant")," prop."),h(s.a,null,'<>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="subtle">Subtle</Button>\n</>'),h(a.b,null,"Action Types"),h(a.m,null,"There are two action types: ",h(l.a,null,"normal")," & ",h(l.a,null,"destructive"),". They are used to indicate the nature of the action when clicking on the button."),h(s.a,null,'<>\n  <Button actionType="normal">Normal</Button>\n  <Button actionType="destructive">Destructive</Button>\n</>'),h(a.b,null,"States"),h(a.c,null,"Loading"),h(a.m,null,"The loading state is used when clicking a button will perform a asyncronous action."),h(s.a,null,'function LoadingButton() {\n  const [isLoading, setLoading] = useState(false);\n\n  function simulateNetworkRequest() {\n    return new Promise((resolve) => setTimeout(resolve, 2000));\n  }\n\n  useEffect(() => {\n    if (isLoading) {\n      simulateNetworkRequest().then(() => {\n        setLoading(false);\n      });\n    }\n  }, [isLoading]);\n\n  const handleClick = () => setLoading(true);\n\n  return (\n    <Button variant="primary" isLoading={isLoading} onClick={!isLoading ? handleClick : () => null}>\n      Click to load\n    </Button>\n  );\n}'),h(a.c,null,"Disabled"),h(a.m,null,"A disabled state is used to indicate no action can be done using the button by passing a"," ",h(l.a,{primary:!0},"disabled")," prop."),h(s.a,null,'<>\n  <Button disabled>Disabled</Button>\n  <Button disabled variant="secondary">\n    Disabled\n  </Button>\n  <Button disabled variant="subtle">\n    Disabled\n  </Button>\n</>'),h(a.b,null,"Icons"),h(a.m,null,"A button can also include icons on either side of the text (or both). When using ",h(l.a,{primary:!0},"iconOnly"),", the ",h(l.a,{primary:!0},"iconLeft")," & ",h(l.a,{primary:!0},"iconRight")," components will be removed."),h(s.a,null,'<>\n  <Button iconOnly={<AddIcon title="add" />} />\n  <Button iconLeft={<AddIcon />}>Label</Button>\n  <Button iconLeft={<AddIcon />} iconRight={<ArrowDropDownIcon />}>\n    Label\n  </Button>\n  <Button iconRight={<ArrowDropDownIcon />}>Label</Button>\n</>'))}},wXfe:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Button/ButtonPage",function(){return t("pg6R")}])}},[["wXfe",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);