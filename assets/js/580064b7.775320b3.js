"use strict";(self.webpackChunkdocgovtnz=self.webpackChunkdocgovtnz||[]).push([[747],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"Publishing Existing Projects",slug:"/existing-projects"},l=void 0,c={unversionedId:"processesExistingProject",id:"processesExistingProject",isDocsHomePage:!1,title:"Publishing Existing Projects",description:"The following page contains some informal suggestions for the publishing of legacy/pre-existing code bases.",source:"@site/docs/processesExistingProject.md",sourceDirName:".",slug:"/existing-projects",permalink:"/docs/existing-projects",editUrl:"https://github.com/docgovtnz/docgovtnz.github.io/edit/main/docs/processesExistingProject.md",tags:[],version:"current",frontMatter:{title:"Publishing Existing Projects",slug:"/existing-projects"},sidebar:"someSidebar",previous:{title:"Starting New Projects",permalink:"/docs/new-projects"},next:{title:"Dusky (K\u0101k\u0101p\u014d DB)",permalink:"/docs/projects/dusky"}},u=[{value:"Considerations",id:"considerations",children:[],level:2},{value:"Code scanning tools",id:"code-scanning-tools",children:[],level:2},{value:"What else?",id:"what-else",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following page contains some informal suggestions for the publishing of legacy/pre-existing code bases."),(0,r.kt)("p",null,"With new projects that are ",(0,r.kt)("em",{parentName:"p"},"open by default"),", it is immediately obvious that the code published will be public therefore certain considerations may be made by developers before pushing code (e.g. using environment variables, keeping DOC-specific configuration out of the repository). However, for pre-existing code bases a thorough audit of the code should be performed before its open sourcing to ensure the security and privacy of those involved in the development\u2014even if there was always an intention to open source the code."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure the git history is removed or audited for any private information.\nSimply removing information by a standard git commit will still mean there is a copy retained in the history!"))),(0,r.kt)("p",null,"Make sure that the following information is excluded from the repo. Note that these types of things should not live in the code repository, irrespective of whether it is open source or not."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there any SQL/JSON/data migration dumps?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Try looking for files with names similar to ",(0,r.kt)("inlineCode",{parentName:"li"},".sql"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".dump"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".n1ql")))),(0,r.kt)("li",{parentName:"ul"},"Is there any private or user-identifying information?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. email addresses in commits/data"),(0,r.kt)("li",{parentName:"ul"},"Try searching for ",(0,r.kt)("inlineCode",{parentName:"li"},"doc.govt.nz")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," across the code base; similarly search for any names of people involved in the project"))),(0,r.kt)("li",{parentName:"ul"},"Are there any environment files, log files, certificates, private keys or key stores?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Try looking for files with names containing ",(0,r.kt)("inlineCode",{parentName:"li"},"env"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".p12"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".pem"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".log")," etc"))),(0,r.kt)("li",{parentName:"ul"},"Is there any DOC-specific cloud configuration? (e.g. references to AWS account numbers, ARNs, DOC network configurations, synthesised CloudFormation stacks)"),(0,r.kt)("li",{parentName:"ul"},"Random strings of characters may suggest a secret key or similar credentials. Automated tools can be used to help find these.")),(0,r.kt)("h2",{id:"code-scanning-tools"},"Code scanning tools"),(0,r.kt)("p",null,"There are a number of automated tools that can be used to scan the code for secrets. The following have been used successfully."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Yelp/detect-secrets"},"https://github.com/Yelp/detect-secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/awslabs/git-secrets"},"https://github.com/awslabs/git-secrets"))),(0,r.kt)("h2",{id:"what-else"},"What else?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that the project has an updated ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md"),", also including the open source licence that has been attributed. The README should also make mention of our Contributing Guidelines, which in turn refer to our Code of Conduct."),(0,r.kt)("li",{parentName:"ul"},"The open source licence must be included in the repository. There are slight variations on the naming, but our convention is using the filename ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENCE.md"),"."),(0,r.kt)("li",{parentName:"ul"},"The repository should include a ",(0,r.kt)("inlineCode",{parentName:"li"},"SECURITY.md")," with information on our Responsible Disclosure Guidelines.")))}d.isMDXComponent=!0}}]);