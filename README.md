# Docs



## Getting Started



### Install

```sh
npx i --save @kiroboio/web3-react-safe-transfer
# or
yarn add @kiroboio/web3-react-safe-transfer
```



###  Peer Dependencies

```json
{
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "reactotron-core-client": "^2.8.10",
    "reactotron-mst": "^3.1.3",
    "reactotron-react-js": "^3.3.7",
    "typescript": "4.2"
}
```



### Use

```typescript
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { KiroboProvider } from '@kiroboio/web3-react-safe-transfer'

ReactDOM.render(
  <KiroboProvider>
    <App />
  </KiroboProvider>,
  document.getElementById('root')
)

```

```typescript
import React from 'react'
import { Wallet } from "./Wallet"
import { useAccount, observer, Connectors } from '@kiroboio/web3-react-safe-transfer/lib'


export const App = observer(() => {
  const {
    connect,
  } = useAccount()
  
  const handleLogin = () => {
      connect(Connectors.Injected)
  }
    
  return <Wallet onLogin={handleLogin} />
})
```

```typescript
import React from 'react'
import { Wallet } from "./Wallet"
import { useAccount, observer } from '@kiroboio/web3-react-safe-transfer/lib'

export const Wallet = observer(() => {
  const {
    address,
    balance,
  } = useAccount()
    
  return (
      <div className="wallet">
      	address: { address }
        balance: { balance }                 
      </div>
   	)
})
```



### Debugging

For view `Safe Transfer` state & actions install and configure [Reactotron]: https://github.com/infinitered/reactotron



```typescript
import React, { useEffect } from 'react'
import { configureReactotronDebugging, useAccount, observer, Connectors  } from '@kiroboio/web3-react-safe-transfer'
import { Wallet } from "./Wallet"


export const App = observer(() => {
  const {
    connect,
  } = useAccount()
  
  const handleLogin = () => {
      connect(Connectors.Injected)
  }
  
  useEffect(() => {
      configureReactotronDebugging()
  }, [])
    
  return <Wallet onLogin={handleLogin} />
})
```

Since our App component was observing everything, it was re-rendering whenever you changed something.![](![image-20210711155028840](/home/sergey/.config/Typora/typora-user-images/image-20210711155028840.png)



## Introduction

For state management we use [Mobx State Tree]: https://mobx-state-tree.js.org/intro/welcome

### Main concepts

#### State

Get `Safe Transfer` current state with `useAccount` hook

```typescript
const {
    address,
    balance,
  } = useAccount()
```

#### Actions

Change `Safe Transfer`  state with **actions**

```typescript
const {
    connect,
    disconnect,
  } = useAccount(
```

#### Commands

Run `web3` actions with `cmd` commands

```typescript
const {
    deposit,
    depositCmd,
  } = useAccount()
  

useEffect(() => {
    if (!depositCmd.is.ready || depositCmd.is.running) return;
    deposit({
      to,
      value,
      passcode,
      message,
    })
}, [depositCmd.is.ready])
```

#### Observer

Use `observer` for enabling the React component to re-render if any of it's observed data changes. 

```typescript
import { observer } from '@kiroboio/web3-react-safe-transfer'

export const App = observer(() => {
    const {
    	address,
  	} = useAccount()
    return address
})
```

