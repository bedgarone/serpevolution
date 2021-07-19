(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{1271:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});var i=n(5893);n(5675);function t(){return(0,i.jsxs)("div",{className:"topBar",children:[(0,i.jsxs)("div",{className:"titleRow d-flex flex-row",children:[(0,i.jsx)("div",{children:"Web"}),(0,i.jsxs)("div",{className:"searchWord d-flex flex-row",children:[(0,i.jsx)("div",{style:{color:"#fff"},children:"S"}),(0,i.jsx)("div",{style:{color:"#EA4335"},children:"e"}),(0,i.jsx)("div",{style:{color:"#FBBC05"},children:"a"}),(0,i.jsx)("div",{style:{color:"#fff"},children:"r"}),(0,i.jsx)("div",{style:{color:"#34A853"},children:"c"}),(0,i.jsx)("div",{style:{color:"#EA4335"},children:"h"})]}),(0,i.jsx)("div",{children:"Engines"})]}),(0,i.jsxs)("div",{className:"queryBar d-flex flex-row",children:[(0,i.jsx)("div",{children:"A study on the evolution of user interfaces"}),(0,i.jsx)("img",{src:"/serpevolution/assets/cross-search.png",alt:"search"})]})]})}},8197:function(e,s,n){"use strict";var i=n(5893),t=n(7294),a=n(9544),r=n(5614),l=n(627),c=n(7243),o=n(3999),d=n(8008);s.Z=function(e){var s=e.pagename,n=(0,t.useState)(!1),m=n[0],h=n[1];return(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{color:"light",light:!0,expand:"md",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(r.Z,{onClick:function(){return h(!m)}}),(0,i.jsx)(l.Z,{isOpen:m,navbar:!0,children:(0,i.jsx)(c.Z,{className:"mr-auto",navbar:!0,children:[["Home","/serpevolution"],["Elements","/serpevolution/elements"],["Patterns","/serpevolution/patterns"],["Timeline","/serpevolution/timeline"],["Layout","/serpevolution/layout"],["Design","/serpevolution/design"],["Dataset","/serpevolution/dataset"],["About","/serpevolution/about"]].map((function(e,n){return(0,i.jsx)(o.Z,{children:(0,i.jsx)(d.Z,{className:s==e[0]?"nav-selected":"",href:e[1],children:e[0]})},n)}))})})]})})})}},8318:function(e,s,n){"use strict";var i=n(5893);n(7294);s.Z=function(e){for(var s=e.present,n=[],t=2e3;t<2021;t++)n.push(t);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"d-flex yearline",children:n.map((function(e,n){return(0,i.jsx)("a",{href:"/serpevolution/timeline/"+e,children:(0,i.jsx)("button",{className:"btn "+(s.find((function(s){return s==e}))?"btn-secondary":"btn-link")+" yearbtn",children:e})},n)}))})})}},6922:function(e,s){"use strict";s.Z={mtabs:{name:"Module Tabs",shortname:"mtabs",css_image:"assets/patterns/mtabs.png",images:["mtabs1.png"],description:"Used when content is groupable and there is no room for everything. Modules of content are divided in small tabbed areas with only one visible at a time, the user being able to click on tabs to reveal other modules."},bread:{name:"Breadcrumbs",shortname:"bread",css_image:"assets/patterns/bread.png",images:["bread1.png"],description:"They linearly specify hierarchy levels leading to the current page. However, in SERP, Breadcrumbs are associated with content elements, not with the page itself, and may specify different types of hierarchies."},accord:{name:"Accordion",shortname:"accord",css_image:"assets/patterns/accord.png",images:["accord1.png"],description:"Used to stack modules of similar content, permitting the user to open and close each module independently, freeing up space and allowing the user to access the content only if interested."},carousel:{name:"Carousel",shortname:"carousel",css_image:"assets/patterns/carousel.png",images:["carousel1.png"],description:"Consists of a horizontal strip of simple cards, letting the user to scroll horizontally to view them and encouraging the inspection of the items that are to come."},cards:{name:"Cards",shortname:"cards",css_image:"assets/patterns/cards.png",images:["cards1.png"],description:"Used to display content composed of distinct elements, normally about a single subject, to form one coherent piece of content. Thus, it is usual for cards to be closer to other cards."},disclose:{name:"Progressive Disclosure",shortname:"disclose",css_image:"assets/patterns/disclose.png",images:["disclose1.png"],description:"Used when the user is exploring information or proceeding with different actions. The interface is being revealed (disclosured) as the user proceeds."},categ:{name:"Categorization",shortname:"categ",css_image:"assets/patterns/categ.png",images:["categ1.png"],description:"Provides the user with categories different from each other, helping suggest what content is to be found."},news:{name:"News Stream",shortname:"news",css_image:"assets/patterns/news.png",images:["news1.png"],description:"Used to list time-sensitive items chronologically, combining the sources in one place."},thumb:{name:"Thumbnail",shortname:"thumb",css_image:"assets/patterns/thumb.png",images:["thumb1.png"],description:"Used when the user is provided with an overview of pictures without downloading each in full size."},grid:{name:"Grid of Equals",shortname:"grid",css_image:"assets/patterns/grid.png",images:["grid1.png"],description:"Used to display items in a grid or matrix, each following a common template, linking to respective pages."}}},7162:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return g},default:function(){return x}});var i=n(5893),t=n(7294),a=n(9008),r=n(1271),l=n(8197);function c(e){var s=e.title,n=e.type;return(0,i.jsx)("div",{className:"elementtitlerow",children:(0,i.jsx)("div",{className:"elementtitle "+n,children:s})})}var o=n(8318);function d(e){var s=e.serpelement;return(0,i.jsx)("ul",{className:"timeline centered-containter",children:s.evolution.map((function(e,n){var t=e.substring(0,4);return(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"badge rounded-pill bg-secondary timeline-year",children:t}),(0,i.jsx)("div",{className:"timeline-image",children:(0,i.jsx)("img",{src:"../assets/elements/"+s.engine+"/"+s.shortname+"/"+e})})]},n)}))})}function m(e){var s=e.shortname,n=e.engine;return e.available?(0,i.jsxs)("div",{className:"centered-containter",children:[(0,i.jsx)("img",{className:"positioning model",src:"../assets/test_serptop.png"}),(0,i.jsx)("img",{className:"positioning result",src:"../assets/elements/"+n+"/"+s+"/pos.png"})]}):(0,i.jsx)("p",{children:"No positioning results due to lack of considerable presences."})}var h=n(6922);function u(e){var s=e.elm_patterns;return s.length?(0,i.jsx)("div",{className:"d-flex flex-wrap",children:s.map((function(e,s){var n=Object.entries(h.Z).find((function(s){return s[0]==e})),t="url(../"+n[1].css_image+")";return(0,i.jsx)("a",{href:"/serpevolution/patterns/"+n[1].shortname,children:(0,i.jsx)("div",{className:"applied-pattern d-flex",style:{backgroundImage:t,backgroundSize:"cover"},children:n[1].name})},s)}))}):(0,i.jsx)("p",{children:"There are no patterns applied to this element."})}function p(e){var s=e.identifiers;return s.length?(0,i.jsx)("div",{className:"wrap-container",children:s.map((function(e,s){return(0,i.jsxs)("div",{className:"id-box",children:[(0,i.jsx)("div",{className:"id-code",children:e[0]}),(0,i.jsx)("div",{className:"id-years",children:e[1]})]},s)}))}):(0,i.jsx)("p",{children:"There are no code identifiers for this element."})}n(2238);var g=!0;function x(e){var s=e.element_google,n=e.element_bing,h=(0,t.useState)(s||n),g=h[0],x=h[1],v=(0,t.useState)(s?"G":"B"),j=v[0],f=v[1];(0,t.useEffect)((function(){x("G"==j?s:n)}),[j]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"SERP Evolution"}),(0,i.jsx)("meta",{name:"A study on the evolution of user interfaces",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(l.Z,{pagename:"Elements"}),(0,i.jsxs)("div",{className:"container mt-3 mb-3 desktop-element",children:[(0,i.jsx)("div",{className:"d-flex flex-column align-items-center",children:(0,i.jsx)(c,{title:g.name,type:g.type})}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:(0,i.jsx)("div",{className:"d-flex flex-column align-items-center",children:(0,i.jsx)("div",{className:"element-engine",children:(0,i.jsx)("img",{src:"../assets/google.png"})})})}),(0,i.jsx)("div",{className:"col-6",children:(0,i.jsx)("div",{className:"d-flex flex-column align-items-center",children:(0,i.jsx)("div",{className:"element-engine",children:(0,i.jsx)("img",{src:"../assets/bing.png"})})})})]}),(0,i.jsx)("div",{className:"sectiontitle",children:"Visual Evolution"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:s?(0,i.jsx)(d,{serpelement:s}):"This element is exclusive to Bing"}),(0,i.jsx)("div",{className:"col-6",children:n?(0,i.jsx)(d,{serpelement:n}):"This element is exclusive to Google"})]}),(0,i.jsx)("div",{className:"sectiontitle",children:"Positioning"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:s?(0,i.jsx)(m,{shortname:s.shortname,engine:s.engine,available:s.positioning}):""}),(0,i.jsx)("div",{className:"col-6",children:n?(0,i.jsx)(m,{shortname:n.shortname,engine:n.engine,available:n.positioning}):""})]}),(0,i.jsx)("div",{className:"sectiontitle",children:"Presence timeline"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:s?(0,i.jsx)(o.Z,{present:s.presence}):""}),(0,i.jsx)("div",{className:"col-6",children:n?(0,i.jsx)(o.Z,{present:n.presence}):""})]}),(0,i.jsx)("div",{className:"sectiontitle mt-3",children:"HTML Identifiers"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6 pr-2",children:s?(0,i.jsx)(p,{identifiers:s.identifiers}):""}),(0,i.jsx)("div",{className:"col-6 pl-2",children:n?(0,i.jsx)(p,{identifiers:n.identifiers}):""})]}),(0,i.jsx)("div",{className:"sectiontitle mt-3",children:"Design Patterns"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:s?(0,i.jsx)(u,{elm_patterns:s.patterns}):""}),(0,i.jsx)("div",{className:"col-6",children:n?(0,i.jsx)(u,{elm_patterns:n.patterns}):""})]})]}),(0,i.jsxs)("div",{className:"container mt-3 mb-3 mobile-element",children:[(0,i.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,i.jsx)("div",{className:"element-engine",children:(0,i.jsx)("img",{src:"../assets/"+("G"==j?"google":"bing")+".png"})}),(0,i.jsx)(c,{title:g.name,type:g.type}),(0,i.jsx)("button",{onClick:function(){f("G"==j?"B":"G")},type:"button",className:"btn btn-light mb-2",disabled:!s||!n,children:s&&n?"Change engine":"Exclusive element"})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,i.jsx)("div",{className:"sectiontitle",children:"Visual Evolution"}),(0,i.jsx)(d,{serpelement:g})]}),(0,i.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,i.jsx)("div",{className:"sectiontitle",children:"Positioning"}),(0,i.jsx)(m,{shortname:g.shortname,engine:g.engine,available:g.positioning}),(0,i.jsx)("div",{className:"sectiontitle mt-4",children:"Presence timeline"}),(0,i.jsx)(o.Z,{present:g.presence}),(0,i.jsx)("div",{className:"sectiontitle mt-4",children:"HTML Identifiers"}),(0,i.jsx)(p,{identifiers:g.identifiers}),(0,i.jsx)("div",{className:"sectiontitle mt-4",children:"Design Patterns"}),(0,i.jsx)(u,{elm_patterns:g.patterns})]})]})]})]})}},2043:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/[elname]",function(){return n(7162)}])}},function(e){e.O(0,[774,381,238,888,179],(function(){return s=2043,e(e.s=s);var s}));var s=e.O();_N_E=s}]);