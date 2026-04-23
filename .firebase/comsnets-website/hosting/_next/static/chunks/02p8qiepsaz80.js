(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var a in t)Object.defineProperty(n,a,{enumerable:!0,get:t[a]});function o(e){let r={};for(let[n,t]of e.entries()){let e=r[n];void 0===e?r[n]=t:Array.isArray(e)?e.push(t):r[n]=[e,t]}return r}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[n,t]of Object.entries(e))if(Array.isArray(t))for(let e of t)r.append(n,i(e));else r.set(n,i(t));return r}function l(e,...r){for(let n of r){for(let r of n.keys())e.delete(r);for(let[r,t]of n.entries())e.append(r,t)}return e}},18967,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return j},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return N}};for(var a in t)Object.defineProperty(n,a,{enumerable:!0,get:t[a]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,n=!1;return(...t)=>(n||(n=!0,r=e(...t)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:r,port:n}=window.location;return`${e}//${r}${n?":"+n:""}`}function d(){let{href:e}=window.location,r=c();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function h(e,r){let n=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await h(r.Component,r.ctx)}:{};let t=await e.getInitialProps(r);if(n&&p(n))return t;if(!t)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${t}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return t}let m="u">typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class j extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},33525,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},95057,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in t)Object.defineProperty(n,a,{enumerable:!0,get:t[a]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:n}=e,t=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:n&&(c=r+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return t&&!t.endsWith(":")&&(t+=":"),e.slashes||(!t||i.test(t))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${t}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return a}});let t=e.r(71645);function a(e,r){let n=(0,t.useRef)(null),a=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=n.current;e&&(n.current=null,e());let r=a.current;r&&(a.current=null,r())}else e&&(n.current=o(e,t)),r&&(a.current=o(r,t))},[e,r])}function o(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let n=e(r);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),r.exports=n.default)},73668,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let t=e.r(18967),a=e.r(52817);function o(e){if(!(0,t.isAbsoluteUrl)(e))return!0;try{let r=(0,t.getLocationOrigin)(),n=new URL(e,r);return n.origin===r&&(0,a.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},22016,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={default:function(){return g},useLinkStatus:function(){return v}};for(var a in t)Object.defineProperty(n,a,{enumerable:!0,get:t[a]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),h=e.r(91949),m=e.r(73668),x=e.r(9396);function g(r){var n,t;let a,o,g,[v,j]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:N,as:_,children:w,prefetch:k=null,passHref:P,replace:S,shallow:C,scroll:O,onClick:E,onMouseEnter:T,onTouchStart:R,legacyBehavior:A=!1,onNavigate:$,transitionTypes:M,ref:I,unstable_dynamicOnHover:L,...U}=r;a=w,A&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let D=s.default.useContext(c.AppRouterContext),F=!1!==k,z=!1!==k?null===(t=k)||"auto"===t?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,B="string"==typeof(n=_||N)?n:(0,l.formatUrl)(n);if(A){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(a)}let K=A?o&&"object"==typeof o&&o.ref:I,V=s.default.useCallback(e=>(null!==D&&(y.current=(0,h.mountLinkInstance)(e,B,D,z,F,j)),()=>{y.current&&((0,h.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,B,D,z,j]),W={ref:(0,d.useMergedRef)(V,K),onClick(r){A||"function"!=typeof E||E(r),A&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(r),!D||r.defaultPrevented||function(r,n,t,a,o,i,l){if("u">typeof window){let c,{nodeName:d}=r.currentTarget;if("A"===d.toUpperCase()&&((c=r.currentTarget.getAttribute("target"))&&"_self"!==c||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){a&&(r.preventDefault(),location.replace(n));return}if(r.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(n,a?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,t.current,l)})}}(r,B,y,S,O,$,M)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),D&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){A||"function"!=typeof R||R(e),A&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),D&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,u.isAbsoluteUrl)(B)?W.href=B:A&&!P&&("a"!==o.type||"href"in o.props)||(W.href=(0,p.addBasePath)(B)),g=A?s.default.cloneElement(o,W):(0,i.jsx)("a",{...U,...W,children:a}),(0,i.jsx)(b.Provider,{value:v,children:g})}e.r(84508);let b=(0,s.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),r.exports=n.default)},18566,(e,r,n)=>{r.exports=e.r(76562)},45678,e=>{"use strict";var r=e.i(43476),n=e.i(71645),t=e.i(22016),a=e.i(18566);e.s(["default",0,function(){let e=(0,a.usePathname)(),[o,i]=(0,n.useState)(null),[s,l]=(0,n.useState)(!1),c=(e,r)=>{r.preventDefault(),i(o===e?null:e)},d=r=>e===r?"active":"";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
                /* === MODERN CENTERED NAVBAR — COMSNETS 2027 === */
                #main-menu-container {
                    position: fixed !important;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    max-width: none;
                    margin: 0;
                    z-index: 2147483647 !important;
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                }
                #navbar-primary .navbar {
                    border-radius: 0;
                    border: none;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    background: var(--nav-bg, #0a1628) !important;
                    min-height: 70px;
                    padding: 15px 20px;
                    font-family: 'Inter', 'Outfit', 'Segoe UI', sans-serif;
                    transition: background-color 0.3s ease;
                }
                .navbar-inverse {
                    background-color: transparent;
                    border-color: transparent;
                }
                #navbar-primary .navbar-collapse {
                    text-align: center;
                    width: 100% !important;
                }
                #navbar-primary .navbar-nav {
                    display: inline-flex !important;
                    align-items: center !important;
                    float: none !important;
                    margin: 0 auto !important;
                    padding: 0 !important;
                    list-style: none !important;
                }
                @media (min-width: 768px) {
                    #navbar-primary .navbar-collapse.collapse {
                        display: block !important;
                        height: auto !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                    .navbar-toggle {
                        display: none !important;
                    }
                }
                #navbar-primary .navbar-nav > li > a {
                    padding: 12px 18px;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    color: rgba(255,255,255,0.95) !important;
                    border-radius: 4px;
                    transition: all 0.25s ease;
                    margin: 0 2px;
                    line-height: 1.4;
                    display: block !important;
                    text-decoration: none !important;
                }
                #navbar-primary .navbar-nav > li {
                    display: inline-block !important;
                    float: none !important;
                }
                #navbar-primary .navbar-nav > li > a:hover,
                #navbar-primary .navbar-nav > .open > a {
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff !important;
                }
                #navbar-primary .navbar-nav > .active > a,
                #navbar-primary .navbar-nav > .active > a:hover,
                #navbar-primary .navbar-nav > .active > a:focus {
                    background: #ffffff !important;
                    color: #0a1628 !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                .dropdown-menu {
                    border-radius: 16px;
                    border: 1px solid var(--border, rgba(0,0,0,0.08));
                    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
                    margin-top: 8px;
                    padding: 8px 0;
                    font-size: 14px;
                    min-width: 220px;
                    background: var(--dropdown-bg, #fff);
                    transition: background-color 0.3s ease;
                    overflow: hidden;
                    display: none;
                    position: absolute;
                    text-align: left;
                }
                .open > .dropdown-menu {
                    display: block;
                }
                .dropdown-menu > li > a {
                    padding: 9px 20px;
                    color: var(--dropdown-text, #333) !important;
                    font-weight: 500;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    display: block;
                }
                .dropdown-menu > li > a:hover {
                    background: var(--dropdown-hover, #f5f5f5) !important;
                    padding-left: 24px;
                }
                .dropdown-header {
                    font-weight: bold;
                    color: var(--primary, #123456);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding: 10px 20px 5px;
                    font-family: 'Outfit', 'Inter', sans-serif;
                }
                .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 2px;
                    vertical-align: middle;
                    border-top: 4px dashed;
                    border-right: 4px solid transparent;
                    border-left: 4px solid transparent;
                }
                .divider {
                    height: 1px;
                    margin: 9px 0;
                    overflow: hidden;
                    background-color: #e5e5e5;
                }
            `}}),(0,r.jsx)("div",{className:"navbar-sm",id:"main-menu-container",children:(0,r.jsx)("div",{className:"navbar-primary",id:"navbar-primary",children:(0,r.jsx)("nav",{className:"navbar navbar-inverse",role:"navigation","aria-label":"Main Navigation",children:(0,r.jsxs)("div",{className:"container-fluid",style:{padding:"0 10px"},children:[(0,r.jsx)("div",{className:"navbar-header",children:(0,r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed",onClick:()=>l(!s),"aria-label":"Toggle navigation menu",children:[(0,r.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,r.jsx)("span",{className:"icon-bar",style:{display:"block",width:"22px",height:"2px",backgroundColor:"#fff",borderRadius:"1px",marginTop:"4px"}}),(0,r.jsx)("span",{className:"icon-bar",style:{display:"block",width:"22px",height:"2px",backgroundColor:"#fff",borderRadius:"1px",marginTop:"4px"}}),(0,r.jsx)("span",{className:"icon-bar",style:{display:"block",width:"22px",height:"2px",backgroundColor:"#fff",borderRadius:"1px",marginTop:"4px"}})]})}),(0,r.jsx)("div",{className:`collapse navbar-collapse ${s?"in":""}`,id:"bs-example-navbar-collapse-2",children:(0,r.jsxs)("ul",{className:"nav navbar-nav",children:[(0,r.jsx)("li",{className:"/"===e?"active":"",children:(0,r.jsx)(t.default,{href:"/",children:"Home"})}),(0,r.jsxs)("li",{className:`dropdown ${"about"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("about",e),children:["About",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[(0,r.jsx)("li",{className:d("/organizing_committee"),children:(0,r.jsx)(t.default,{href:"/organizing_committee#head",children:"Organizing Committee"})}),(0,r.jsx)("li",{className:d("/technical_program_committee"),children:(0,r.jsx)(t.default,{href:"/technical_program_committee#head",children:"Program Committee"})}),(0,r.jsx)("li",{role:"separator",className:"divider"}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"http://www.comsnets-association.org/",target:"_blank",rel:"noopener noreferrer",children:"COMSNETS Association"})}),(0,r.jsx)("li",{className:d("/contact"),children:(0,r.jsx)(t.default,{href:"/contact#head",children:"Contact Us"})})]})]}),(0,r.jsxs)("li",{className:`dropdown ${"conference"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("conference",e),children:["Conference",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[(0,r.jsx)("li",{className:"dropdown-header",children:"Speakers"}),(0,r.jsx)("li",{className:d("/keynote_speakers"),children:(0,r.jsx)(t.default,{href:"/keynote_speakers#head",children:"Keynote Speakers"})}),(0,r.jsx)("li",{className:d("/invited_speakers"),children:(0,r.jsx)(t.default,{href:"/invited_speakers#head",children:"Invited Speakers"})}),(0,r.jsx)("li",{role:"separator",className:"divider"}),(0,r.jsx)("li",{className:"dropdown-header",children:"Tracks"}),(0,r.jsx)("li",{className:d("/panel_discussions"),children:(0,r.jsx)(t.default,{href:"/panel_discussions#head",children:"Panel Discussions"})}),(0,r.jsx)("li",{className:d("/demos_exhibits"),children:(0,r.jsx)(t.default,{href:"/demos_exhibits#head",children:"Demos & Exhibits"})}),(0,r.jsx)("li",{className:d("/poster_session"),children:(0,r.jsx)(t.default,{href:"/poster_session#head",children:"Poster Session"})}),(0,r.jsx)("li",{className:d("/graduate_forum"),children:(0,r.jsx)(t.default,{href:"/graduate_forum#head",children:"Graduate Forum"})})]})]}),(0,r.jsxs)("li",{className:`dropdown ${"calls"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("calls",e),children:["Calls",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[(0,r.jsx)("li",{className:d("/call_for_papers"),children:(0,r.jsx)(t.default,{href:"/call_for_papers#head",children:"Call for Papers"})}),(0,r.jsx)("li",{className:d("/call_for_participation"),children:(0,r.jsx)(t.default,{href:"/call_for_participation#head",children:"Call for Participation"})}),(0,r.jsx)("li",{className:d("/call_for_workshop_proposal"),children:(0,r.jsx)(t.default,{href:"/call_for_workshop_proposal#head",children:"Workshop Proposals"})})]})]}),(0,r.jsxs)("li",{className:`dropdown ${"sponsors"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("sponsors",e),children:["Sponsors",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[(0,r.jsx)("li",{className:d("/sponsorship_opportunities"),children:(0,r.jsx)(t.default,{href:"/sponsorship_opportunities#head",children:"Become a Sponsor"})}),(0,r.jsx)("li",{className:d("/sponsored_events"),children:(0,r.jsx)(t.default,{href:"/sponsored_events#head",children:"Events we Support"})}),(0,r.jsx)("li",{className:d("/trees_14"),children:(0,r.jsx)(t.default,{href:"/trees_14#head",children:"14 Trees Foundation"})})]})]}),(0,r.jsxs)("li",{className:`dropdown ${"attending"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("attending",e),children:["Attending",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",children:[(0,r.jsx)("li",{className:d("/registration"),children:(0,r.jsx)(t.default,{href:"/registration#head",children:(0,r.jsx)("strong",{children:"Registration"})})}),(0,r.jsx)("li",{className:d("/schedule"),children:(0,r.jsx)(t.default,{href:"/schedule#head",children:"Schedule"})}),(0,r.jsx)("li",{role:"separator",className:"divider"}),(0,r.jsx)("li",{className:d("/conference_venue"),children:(0,r.jsx)(t.default,{href:"/conference_venue#head",children:"Conference Venue"})}),(0,r.jsx)("li",{className:d("/accommodation"),children:(0,r.jsx)(t.default,{href:"/accommodation#head",children:"Accommodation"})}),(0,r.jsx)("li",{className:d("/visa"),children:(0,r.jsx)(t.default,{href:"/visa#head",children:"Visa Request"})}),(0,r.jsx)("li",{className:d("/travel_grants"),children:(0,r.jsx)(t.default,{href:"/travel_grants#head",children:"Travel Grants"})})]})]}),(0,r.jsx)("li",{className:"/photos"===e?"active":"",children:(0,r.jsx)(t.default,{href:"/photos",children:"Photos"})}),(0,r.jsxs)("li",{className:`dropdown ${"archive"===o?"open":""}`,children:[(0,r.jsxs)("a",{href:"#",className:"dropdown-toggle",onClick:e=>c("archive",e),children:["Archive",(0,r.jsx)("span",{className:"caret"})]}),(0,r.jsxs)("ul",{className:"dropdown-menu",role:"menu",style:{minWidth:"150px",maxHeight:"300px",overflowY:"auto"},children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.default,{href:"/archive/2026/",children:"2026"})}),Array.from({length:13},(e,r)=>2021-r).map(e=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:`https://www.comsnets.org/archive/${e}`,target:"_blank",rel:"noopener noreferrer",children:e})},e))]})]})]})})]})})})})]})}])}]);