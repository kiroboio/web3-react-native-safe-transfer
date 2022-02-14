"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[6084],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),g=o,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"index",title:"@kiroboio/web3-react-native-safe-transfer",slug:"/Debugging/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},u=void 0,l={unversionedId:"Debugging/index",id:"Debugging/index",title:"@kiroboio/web3-react-native-safe-transfer",description:"Debugging",source:"@site/docs/Debugging/index.md",sourceDirName:"Debugging",slug:"/Debugging/",permalink:"/web3-react-native-safe-transfer/docs/Debugging/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@kiroboio/web3-react-native-safe-transfer",slug:"/Debugging/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/web3-react-native-safe-transfer/docs/intro"},next:{title:"Exports",permalink:"/web3-react-native-safe-transfer/docs/Debugging/modules"}},s=[{value:"Debugging",id:"debugging",children:[],level:3}],p={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"For view ",(0,i.kt)("inlineCode",{parentName:"p"},"Safe Transfer")," state & actions install and configure ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"Reactotron")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Configure reactotron on app component did mount")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useEffect } from 'react'\nimport { configureReactotronDebugging, useAccount, observer, Connectors  } from '@kiroboio/web3-react-native-safe-transfer'\nimport { Wallet } from \"./Wallet\"\n\nexport const App = observer(() => {\n  const {\n    connect,\n  } = useAccount()\n  \n  const handleLogin = () => {\n      connect(Connectors.Injected)\n  }\n  \n  useEffect(() => {\n      configureReactotronDebugging()\n  }, [])\n    \n  return <Wallet onLogin={handleLogin} />\n})\n")))}f.isMDXComponent=!0}}]);