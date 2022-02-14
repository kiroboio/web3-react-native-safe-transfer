"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[5667],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={id:"EthDepositInfo",title:"Interface: EthDepositInfo",sidebar_label:"EthDepositInfo",sidebar_position:0,custom_edit_url:null},c=void 0,l={unversionedId:"Api/dto/interfaces/EthDepositInfo",id:"Api/dto/interfaces/EthDepositInfo",title:"Interface: EthDepositInfo",description:"Properties",source:"@site/docs/Api/dto/interfaces/EthDepositInfo.md",sourceDirName:"Api/dto/interfaces",slug:"/Api/dto/interfaces/EthDepositInfo",permalink:"/web3-react-native-safe-transfer/docs/Api/dto/interfaces/EthDepositInfo",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EthDepositInfo",title:"Interface: EthDepositInfo",sidebar_label:"EthDepositInfo",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EthCollectInfo",permalink:"/web3-react-native-safe-transfer/docs/Api/dto/interfaces/EthCollectInfo"},next:{title:"EthErc20ResponseDto",permalink:"/web3-react-native-safe-transfer/docs/Api/dto/interfaces/EthErc20ResponseDto"}},s=[{value:"Properties",id:"properties",children:[{value:"broadcasted",id:"broadcasted",children:[],level:3},{value:"confirmed",id:"confirmed",children:[],level:3},{value:"txid",id:"txid",children:[],level:3}],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"broadcasted"},"broadcasted"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"broadcasted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"blockchain height"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"tjs-type"))," number"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"confirmed"},"confirmed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"confirmed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"block number of confirmed transaction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"tjs-type"))," number"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"txid"},"txid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"txid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"the tx id of the transaction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"tjs-type"))," string"))}f.isMDXComponent=!0}}]);