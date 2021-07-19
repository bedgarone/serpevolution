(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{1271:function(e,n,s){"use strict";s.d(n,{Z:function(){return l}});var i=s(5893);s(5675);function l(){return(0,i.jsxs)("div",{className:"topBar",children:[(0,i.jsxs)("div",{className:"titleRow d-flex flex-row",children:[(0,i.jsx)("div",{children:"Web"}),(0,i.jsxs)("div",{className:"searchWord d-flex flex-row",children:[(0,i.jsx)("div",{style:{color:"#fff"},children:"S"}),(0,i.jsx)("div",{style:{color:"#EA4335"},children:"e"}),(0,i.jsx)("div",{style:{color:"#FBBC05"},children:"a"}),(0,i.jsx)("div",{style:{color:"#fff"},children:"r"}),(0,i.jsx)("div",{style:{color:"#34A853"},children:"c"}),(0,i.jsx)("div",{style:{color:"#EA4335"},children:"h"})]}),(0,i.jsx)("div",{children:"Engines"})]}),(0,i.jsxs)("div",{className:"queryBar d-flex flex-row",children:[(0,i.jsx)("div",{children:"A study on the evolution of user interfaces"}),(0,i.jsx)("img",{src:"/serpevolution/assets/cross-search.png",alt:"search"})]})]})}},8197:function(e,n,s){"use strict";var i=s(5893),l=s(7294),r=s(9544),t=s(5614),c=s(627),o=s(7243),a=s(3999),d=s(8008);n.Z=function(e){var n=e.pagename,s=(0,l.useState)(!1),g=s[0],u=s[1];return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{color:"light",light:!0,expand:"md",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(t.Z,{onClick:function(){return u(!g)}}),(0,i.jsx)(c.Z,{isOpen:g,navbar:!0,children:(0,i.jsx)(o.Z,{className:"mr-auto",navbar:!0,children:[["Home","/serpevolution"],["Elements","/serpevolution/elements"],["Patterns","/serpevolution/patterns"],["Timeline","/serpevolution/timeline"],["Layout","/serpevolution/layout"],["Design","/serpevolution/design"],["Dataset","/serpevolution/dataset"],["About","/serpevolution/about"]].map((function(e,s){return(0,i.jsx)(a.Z,{children:(0,i.jsx)(d.Z,{className:n==e[0]?"nav-selected":"",href:e[1],children:e[0]})},s)}))})})]})})})}},726:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return x},dynamicTimeline:function(){return p}});var i=s(5893),l=s(7294),r=s(9008),t=s(1271),c=s(8197);function o(e){var n=e.entries,s=e.path;return(0,i.jsx)("ul",{className:"timeline centered-containter design-timeline",children:n.map((function(e,n){var l=e.substring(0,4);return(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"badge rounded-pill bg-secondary timeline-year",children:l}),(0,i.jsx)("div",{className:"timeline-image interface",children:(0,i.jsx)("img",{src:"./assets/"+s+"/"+e})})]},n)}))})}var a={google_fd:["2000.png"],google_sd:["2011.png","2013.png","2015.png"],bing:["2013.png","2016.png","2018.png","2020.png"]},d={google_fd:["2000.png","2004.png","2006.png"],google_sd:["2011.png","2013.png","2020.png"],bing:["2010.png","2013.png","2018.png","2020.png"]},g={google_fd:["2006.png"],google_sd:["2012.png","2017.png","2020.png"],bing:["2010.png","2013.png","2016.png","2018.png"]},u={google_fd:["20001.png","20002.png","2006.png"],google_sd:["2010.png","2012.png","2014.png","2015.png","2018.png"],bing:["2010.png","2013.png","2016.png","2018.png","2020.png"]};function p(e,n,s){var l="G"==n?[1==s?u.google_fd:u.google_sd,1==s?a.google_fd:a.google_sd,1==s?d.google_fd:d.google_sd,1==s?g.google_fd:g.google_sd]:[u.bing,a.bing,d.bing,g.bing];switch(e){case"o":return(0,i.jsx)(o,{entries:l[0],path:"interfaces/"+n});case"i":return(0,i.jsx)(o,{entries:l[1],path:"identity/"+n});case"s":return(0,i.jsx)(o,{entries:l[2],path:"searchstatistics/"+n});case"n":return(0,i.jsx)(o,{entries:l[3],path:"navigation/"+n})}}function x(){var e=(0,l.useState)("o"),n=e[0],s=e[1],o=[["Overall Interfaces","#5388ad","o"],["Identity","#e10b0b","i"],["Search Statistics","#b8b8b8","s"],["Navigation & User Inputs","#e6952d","n"]];o.find((function(e){return e[2]==n}));return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"SERP Evolution - Design"}),(0,i.jsx)("meta",{name:"A study on the evolution of user interfaces",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(t.Z,{}),(0,i.jsx)(c.Z,{pagename:"Design"}),(0,i.jsx)("div",{className:"container mt-3 mb-3",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"main-title text-center",children:"Overall Interface Design"}),(0,i.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center flex-wrap mt-3 mb-2",children:o.map((function(e,l){return(0,i.jsx)("div",{className:"category-badge "+(n==e[2]?"selected":""),style:{backgroundColor:e[1]},onClick:function(){return s(e[2])},children:e[0]},l)}))}),(0,i.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,i.jsx)("div",{className:"d-flex flex-column align-items-center",children:(0,i.jsx)("div",{className:"element-engine",children:(0,i.jsx)("img",{src:"./assets/google.png"})})}),p(n,"G",1)]}),(0,i.jsx)("div",{className:"col-12 col-lg-6",children:(0,i.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,i.jsx)("div",{className:"element-engine",children:(0,i.jsx)("img",{src:"./assets/bing.png"})}),"o"==n?(0,i.jsx)("div",{className:"bornyet",children:"Not born yet!"}):null]})}),(0,i.jsx)("div",{className:"col-12 col-lg-6",children:p(n,"G",2)}),(0,i.jsx)("div",{className:"col-12 col-lg-6",children:p(n,"B")})]})})]})}},8958:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design",function(){return s(726)}])}},function(e){e.O(0,[774,381,888,179],(function(){return n=8958,e(e.s=n);var n}));var n=e.O();_N_E=n}]);