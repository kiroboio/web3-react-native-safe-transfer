(self.webpackChunkweb_lib=self.webpackChunkweb_lib||[]).push([[3500],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},235:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),i=["components"],a={id:"index",title:"web-lib",slug:"/Guides/connect",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,u={unversionedId:"Guides/connect/index",id:"Guides/connect/index",isDocsHomePage:!1,title:"web-lib",description:"Connect",source:"@site/docs/Guides/connect/index.md",sourceDirName:"Guides/connect",slug:"/Guides/connect",permalink:"/web3-lib/docs/Guides/connect",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"web-lib",slug:"/Guides/connect",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"notMyAutogeneratedSidebar",previous:{title:"Getting Started",permalink:"/web3-lib/docs/intro"},next:{title:"Exports",permalink:"/web3-lib/docs/Guides/connect/modules"}},s=[],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"connect"},"Connect"),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"KiroboProvider Application Wrapper")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { KiroboProvider } from './kirobo'\n\nReactDOM.render(\n  <KiroboProvider>\n    <App />\n  </KiroboProvider>,\n  document.getElementById('root')\n)\n\n")),(0,c.kt)("a",{href:"/docs/api/stores/interfaces/IAccount"},"Account Store"),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Connect with metamask")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"export const App = observer(() => {\n  const {\n    connect,\n  } = useAccount()\n  \n  const handleLogin = () => {\n      connect(Connectors.Injected)\n  }\n  \n  return <Wallet onLogin={handleLogin} />\n})\n")),(0,c.kt)("a",{href:"/docs/api/stores/interfaces/IAccount#connect"},"IConnect"),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Wallet Information")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react'\nimport { Wallet } from \"./Wallet\"\nimport { useAccount, observer } from '@kiroboio/web3-react-safe-transfer/lib'\n\nexport const Wallet = observer(() => {\n  const {\n    address,\n    balance,\n  } = useAccount()\n    \n  return (\n      <div className=\"wallet\">\n        address: { address }\n        balance: { balance }                 \n      </div>\n    )\n})\n")))}d.isMDXComponent=!0}}]);