(self.webpackChunkweb_lib=self.webpackChunkweb_lib||[]).push([[9671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7842:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],c={title:"Getting Started",sidebar_position:1,sidebar_label:"Getting Started"},i=void 0,l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"Install",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/web3-lib/docs/intro",version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"notMyAutogeneratedSidebar",next:{title:"Readme",permalink:"/web3-lib/docs/Guides/connect"}},p=[{value:"Install",id:"install",children:[]},{value:"Context",id:"context",children:[]},{value:"Debugging",id:"debugging",children:[]},{value:"Main concepts",id:"main-concepts",children:[{value:"State",id:"state",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Views",id:"views",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Observer",id:"observer",children:[]}]},{value:"Connect",id:"connect",children:[]},{value:"Transactions",id:"transactions",children:[{value:"Deposit",id:"deposit",children:[]},{value:"Retrieve",id:"retrieve",children:[]},{value:"Collect",id:"collect",children:[]},{value:"Web3 Methods",id:"web3-methods",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx i --save @kiroboio/web3-react-safe-transfer\n# or\nyarn add @kiroboio/web3-react-safe-transfer\n")),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("h4",{id:"kirobo-provider"},"Kirobo Provider"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KiroboProvider"),"  wrap all children with ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountContext")," and implement all actions related to ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," ,",(0,o.kt)("inlineCode",{parentName:"p"},"retrieve")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"collect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"swap")," transaction after invoking appropriate action from ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountProvider")),(0,o.kt)("h4",{id:"use-account"},"Use Account"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount"},"Account Store Interface"))),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," store wrap application ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"KiroboProvider")," context"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"KiroboProvider Application Wrapper")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { KiroboProvider } from './kirobo'\n\nReactDOM.render(\n  <KiroboProvider>\n    <App />\n  </KiroboProvider>,\n  document.getElementById('root')\n)\n\n")),(0,o.kt)("p",null,"Account store use ",(0,o.kt)("inlineCode",{parentName:"p"},"mobx-state-tree")," lib for  ",(0,o.kt)("a",{parentName:"p",href:"https://mobx-state-tree.js.org/intro/welcome"},"reactive state management "),". To re-render react component on account state change use ",(0,o.kt)("a",{parentName:"p",href:"https://mobx-state-tree.js.org/intro/getting-started#getting-to-the-ui"},"observer")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Each ",(0,o.kt)("inlineCode",{parentName:"em"},"observer")," declaration will enable the React component to only re-render if any of it's observed data changes.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Connect with metamask")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const App = observer(() => {\n  const {\n    connect,\n  } = useAccount()\n  \n  const handleLogin = () => {\n      connect(Connectors.Injected)\n  }\n  \n  return <Wallet onLogin={handleLogin} />\n})\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Account Store States")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react'\nimport { Wallet } from \"./Wallet\"\nimport { useAccount, observer } from '@kiroboio/web3-react-safe-transfer'\n\nexport const Wallet = observer(() => {\n  const {\n    address,\n    balance,\n  } = useAccount()\n    \n  return (\n      <div className=\"wallet\">\n        address: { address }\n        balance: { balance }                 \n      </div>\n    )\n})\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Account Store States & Deposit Action")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react'\nimport { Button } from \"./Button\"\nimport { useAccount, observer, Connectors, currencyValueToWei } from '@kiroboio/web3-react-safe-transfer'\n\n\nexport const DepositButton = observer(() => {\n    const {\n        address,\n        deposit,\n        currency,\n    } = useAccount()\n\n    const handleDeposit = ({\n            to,\n            value,\n            passcode,\n            message,\n        }: DepositParams) => {\n\n        deposit.run({\n            to,\n            value: currencyValueToWei(value, currency.decimals),\n            passcode,\n            message,\n        })\n    }\n    \n    return <Button title=\"Send\" onClick={handleDeposit} />\n})\n")),(0,o.kt)("h3",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"For view ",(0,o.kt)("inlineCode",{parentName:"p"},"Safe Transfer")," state & actions install and configure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"Reactotron")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Configure reactotron on app component did mount")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useEffect } from 'react'\nimport { configureReactotronDebugging, useAccount, observer, Connectors  } from '@kiroboio/web3-react-safe-transfer'\nimport { Wallet } from \"./Wallet\"\n\n\nexport const App = observer(() => {\n  const {\n    connect,\n  } = useAccount()\n  \n  const handleLogin = () => {\n      connect(Connectors.Injected)\n  }\n  \n  useEffect(() => {\n      configureReactotronDebugging()\n  }, [])\n    \n  return <Wallet onLogin={handleLogin} />\n})\n")),(0,o.kt)("h2",{id:"main-concepts"},"Main concepts"),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#properties"},"Account States"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Get ",(0,o.kt)("inlineCode",{parentName:"em"},"Safe Transfer")," current state with ",(0,o.kt)("inlineCode",{parentName:"em"},"useAccount")," hook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    address,\n    balance,\n  } = useAccount()\n")),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#methods"},"Account Methods"))),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    address,\n    deposit,\n    currency,\n} = useAccount()\n  \nconst setDeposit = ({\n        to,\n        value,\n        passcode,\n        message,\n    }: DepositParams) => {\n    \n    deposit({\n        from: address,\n        to,\n        value: currencyValueToWei(value, currency.decimals),\n        passcode,\n        message,\n    })\n}\n")),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ICommands"},"Account Commands Interface"))),(0,o.kt)("h3",{id:"views"},"Views"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mobx-state-tree.js.org/concepts/views"},"mobx-state-tree views concept")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"./stores/docs/Api/stores/interfaces/IViews"},"Account Views Interface"))),(0,o.kt)("h3",{id:"lists"},"Lists"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ILists"},"Account Lists\xa0Interface"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Get all Safe Transfers related to current address (limit 40)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { transfers } = useAccount()\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Get next ",(0,o.kt)("inlineCode",{parentName:"em"},"limit")," transfers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const limit = 100\n\ntransfers.fetch(limit)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ITransferItems#list"},"Get list values"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"transfers.list\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Get outgoing, incoming and swap Transfers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { incoming, outgoing, swaps } = useAccount()\n")),(0,o.kt)("h3",{id:"observer"},"Observer"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Use ",(0,o.kt)("inlineCode",{parentName:"em"},"observer")," for enabling the React component to re-render if any of it's observed data changes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { observer } from '@kiroboio/web3-react-safe-transfer'\n\nexport const Address = observer(() => {\n    const {\n        address,\n    } = useAccount()\n    \n    return address\n})\n")),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)("p",null,"Before start to use ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#connect"},"Connect"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Connect with MetaMask")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const App = observer(() => {\n  const {\n    connect,\n  } = useAccount()\n  \n  const handleLogin = () => {\n      connect(Connectors.Injected)\n  }\n  \n  return <Wallet onLogin={handleLogin} />\n})\n")),(0,o.kt)("h5",{id:"status"},"Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    connect,\n  } = useAccount()\n")),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ICmdStatus"},"connect.is"),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("h3",{id:"deposit"},"Deposit"),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#deposit"},"Deposit"),(0,o.kt)("p",null,"To create a retrievable transfer that can be collected use:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"const { deposit } = useAccount()")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useAccount, currencyValueToWei } from '@kiroboio/web3-react-safe-transfer\n\nconst {\n    address,\n    deposit,\n    currency,\n} = useAccount()\n\nconst setDeposit = ({\n        to,\n        value,\n        passcode,\n        message,\n    }: DepositParams) => {\n    \n    deposit.set({\n        from: address,\n        to,\n        value: currencyValueToWei(value, currency.decimals),\n        passcode,\n        message,\n    })\n}\n")),(0,o.kt)("h5",{id:"status-1"},"Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    deposit,\n  } = useAccount()\n")),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ICmdStatus"},"deposit.is"),(0,o.kt)("h3",{id:"retrieve"},"Retrieve"),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#retrieve"},"Retrieve"),(0,o.kt)("p",null,"To retrieve transfer use: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"const { retrieve } = useAccount()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useAccount } from '@kiroboio/web3-react-safe-transfer\n\nconst {\n    retrieve,\n} = useAccount()\n\nconst { transfer } = props;\n\nconst setCollect = ({\n        id,\n    }: RetrieveParams) => {\n    \n   retrieve({ id: transfer.id })\n}\n")),(0,o.kt)("h5",{id:"status-2"},"Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    retrieve,\n  } = useAccount()\n")),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ICmdStatus"},"retrieve.is"),(0,o.kt)("h3",{id:"collect"},"Collect"),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/IAccount#collect"},"Collect"),(0,o.kt)("p",null,"To collect transfer use:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"const { collect } = useAccount()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useAccount } from '@kiroboio/web3-react-safe-transfer'\n\nconst {\n    collect,\n} = useAccount()\n\nconst { transfer } = props;\n\nconst setCollect = ({\n        id,\n        passcode,\n    }: CollectParams) => {\n    \n   collect({ id: transfer.id, passcode })\n}\n")),(0,o.kt)("h5",{id:"status-3"},"Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n    collect,\n  } = useAccount()\n")),(0,o.kt)("a",{href:"/docs/Api/stores/interfaces/ICmdStatus"},"collect.is"),(0,o.kt)("h1",{id:"utils"},"Utils"),(0,o.kt)("h3",{id:"web3-methods"},"Web3 Methods"),(0,o.kt)("p",null,"Helpers for convert & format currency values"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{href:"/docs/api/utils/modules#currencyvaluetowei"},"Currency Value To Wei"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{href:"/docs/api/utils/modules#weitocurrencyvalue"},"Wei To Currency Value"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{href:"/docs/api/utils/modules#formatcurrencyvalue"},"Format Currency Value")))))}d.isMDXComponent=!0}}]);