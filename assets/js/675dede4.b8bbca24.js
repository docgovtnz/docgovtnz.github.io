"use strict";(self.webpackChunkdocgovtnz=self.webpackChunkdocgovtnz||[]).push([[780],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6270:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Dusky (K\u0101k\u0101p\u014d DB)",slug:"/projects/dusky"},c=void 0,l={unversionedId:"projects/dusky",id:"projects/dusky",isDocsHomePage:!1,title:"Dusky (K\u0101k\u0101p\u014d DB)",description:"Background",source:"@site/docs/projects/dusky.md",sourceDirName:"projects",slug:"/projects/dusky",permalink:"/docs/projects/dusky",editUrl:"https://github.com/docgovtnz/docgovtnz.github.io/edit/main/docs/projects/dusky.md",tags:[],version:"current",frontMatter:{title:"Dusky (K\u0101k\u0101p\u014d DB)",slug:"/projects/dusky"},sidebar:"someSidebar",previous:{title:"Publishing Existing Code",permalink:"/docs/publishing-existing"},next:{title:"FALCON (Bird Banding DB)",permalink:"/docs/projects/falcon"}},d=[{value:"Background",id:"background",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Code",id:"code",children:[],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The national K\u0101k\u0101p\u014d Database (Dusky) was developed in 2018 to replace an Access database solution that had reached the end of its life. Being a critically endangered parrot, k\u0101k\u0101p\u014d are confined to pest-free offshore islands which may not have a reliable internet connection. Thus, the challenge of Dusky was enabling offline use, whilst still maintaining consistency of data across the different islands."),(0,o.kt)("p",null,'To do this, a solution employing Couchbase and Couchbase Sync Gateway was implemented. A copy of Dusky is run in "the cloud", and various laptops have the database loaded locally. The laptops are able to be used offline, and when they are connected to the internet Dusky will synchronise any changes made (bi-directionally).'),(0,o.kt)("p",null,"In addition to Couchbase and Couchbase Sync Gateway, Dusky uses the Angular and Spring Boot frameworks for the front-end and back-end respectively."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The data captured by Dusky is quite specific to the needs of k\u0101k\u0101p\u014d conservation. In this instance, every single k\u0101k\u0101p\u014d is known and tracked which means there is a large amount of information known about a relatively small number of individuals\u2014compared to other bird data projects, where a little bit of information is known about a relatively large population."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dusky in action, showing a test bird&#39;s weight graph",src:n(8191).Z})),(0,o.kt)("p",null,"As such, the database is built to capture lots of different types of information including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bird details (morphometrics, weight, health, transmitters, microchips/identifiers)"),(0,o.kt)("li",{parentName:"ul"},"Egg/chick weights, egg fertility/infertility, embryo development"),(0,o.kt)("li",{parentName:"ul"},"Transmitter changes and types (different birds wear different types of transmitters depending on sex/time of year)"),(0,o.kt)("li",{parentName:"ul"},"Supplementary feeding"),(0,o.kt)("li",{parentName:"ul"},'"Snark" stations capture automatic information about bird whereabouts based on transmitters (e.g. if a bird accessed a certain food hopper)'),(0,o.kt)("li",{parentName:"ul"},"Nest information"),(0,o.kt)("li",{parentName:"ul"},"Population demographics"),(0,o.kt)("li",{parentName:"ul"},"Biological samples and laboratory results"),(0,o.kt)("li",{parentName:"ul"},'"NoraNet", a network of devices that recieve information from the transmitters carried by the birds'),(0,o.kt)("li",{parentName:"ul"},"Geospatial information")),(0,o.kt)("p",null,"Direct data exports from the database are provided to the k\u0101k\u0101p\u014d team on an hourly basis, enabling them to build automatically-updating reporting tools with the latest datasets."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Fun Fact")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The (in)famous ",(0,o.kt)("a",{parentName:"p",href:"https://cultofthepartyparrot.com/"},"Party Parrot")," is based on the k\u0101k\u0101p\u014d Sirocco\u2014New Zealand's official Spokesbird for Conservation. "),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"Party Parrot",src:n(378).Z})))),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/docgovtnz/dusky"},"https://github.com/docgovtnz/dusky"),": Monorepo with front-end and back-end")),(0,o.kt)("p",null,"The source code is provided as-is, with certain sections redacted/removed for security reasons. "),(0,o.kt)("p",null,"The normal process for a DOC developer would involve setting up their local machine to synchronise with a remote gateway containing the data\u2014being a NoSQL type architecture, there are assumptions built into the code about certain data structures being present. However, due to the sensitive nature of some of the k\u0101k\u0101p\u014d data it is not possible to provide a copy of this dataset."))}u.isMDXComponent=!0},8191:function(e,t,n){t.Z=n.p+"assets/images/dusky-3956db9ba621e2ef07a1286d8f04fc27.png"},378:function(e,t){t.Z="data:image/gif;base64,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"}}]);