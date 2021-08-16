(self.webpackChunkweb_lib=self.webpackChunkweb_lib||[]).push([[4731],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=s,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1158:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=t(2122),s=t(9756),i=(t(7294),t(3905)),o=["components"],a={id:"index",title:"web-lib",slug:"/Guides/transfers",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},c=void 0,u={unversionedId:"Guides/transfers/index",id:"Guides/transfers/index",isDocsHomePage:!1,title:"web-lib",description:"Transfers",source:"@site/docs/Guides/transfers/index.md",sourceDirName:"Guides/transfers",slug:"/Guides/transfers",permalink:"/web3-lib/docs/Guides/transfers",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"web-lib",slug:"/Guides/transfers",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"notMyAutogeneratedSidebar",previous:{title:"Exports",permalink:"/web3-lib/docs/Guides/deposit/modules"},next:{title:"Exports",permalink:"/web3-lib/docs/Guides/transfers/modules"}},l=[],p={toc:l};function f(e){var n=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"transfers"},"Transfers"),(0,i.kt)("a",{href:"/docs/api/stores/interfaces/ILists"},"ILists"),(0,i.kt)("h5",{id:"getting-new-transfers-incoming--outgoing-swaps-not-included"},"Getting new transfers (incoming & outgoing, swaps not included)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const TransfersList = observer(() => {\n  const {\n    transfers,\n  } = useAccount()\n\n  return transfers.list.map((transfer: ITransfer) => transfer)\n}\n")),(0,i.kt)("a",{href:"/docs/api/stores/interfaces/ITransfer"},"ITransfer"),(0,i.kt)("h5",{id:"getting-new-swaps"},"Getting new Swaps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const SwapsList = observer(() => {\n  const {\n    swaps,\n  } = useAccount()\n\n  return swaps.list.map((transfer: ITransfer) => transfer)\n}\n")),(0,i.kt)("h5",{id:"getting-transfers-history-incoming--outgoing--swaps"},"Getting transfers history (incoming & outgoing & swaps)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const HistoryList = observer(() => {\n  const {\n    history,\n  } = useAccount()\n\n  return history.list.map((transfer: ITransfer) => transfer)\n}\n")),(0,i.kt)("h5",{id:"getting-incoming--outgoing"},"Getting incoming & outgoing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const List = observer(() => {\n  const {\n    incoming,\n    outgoing,\n  } = useAccount()\n\n  return (\n      <div>\n        <Incoming transfers={incoming.list.map((transfer: ITransfer) => transfer)} />\n        <Outgoing transfers={outgoing.list.map((transfer: ITransfer) => transfer)} />\n      </div>\n    )\n}\n")))}f.isMDXComponent=!0}}]);