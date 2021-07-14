---
id: "index"
title: "@kiroboio/web3-react-safe-transfer"
slug: "/stores"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# Docs

## Getting Started

### Install

```sh
npx i --save @kiroboio/web3-react-safe-transfer
# or
yarn add @kiroboio/web3-react-safe-transfer
```

#### Peer Dependencies

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

## Main concepts

### State

Get `Safe Transfer` current state with `useAccount` hook

```typescript
const {
    address,
    balance,
  } = useAccount()
```

### Actions

Change `Safe Transfer`  state with **actions**

```typescript
const {
    connect,
    disconnect,
  } = useAccount(
```
### Observer

Use `observer` for enabling the React component to re-render if any of it's observed data changes. 

```typescript
import { observer } from '@kiroboio/web3-react-safe-transfer'

export const Address = observer(() => {
    const {
    	address,
  	} = useAccount()
    
    return address
})
```

### Web3 Actions

Run `web3` actions with `name.set()`

```typescript
const {
    address,
    deposit,
    currency,
} = useAccount()
  
const setDeposit = ({
        to,
        value,
        passcode,
        message,
    }: DepositParams) => {
    
    deposit.set({
        from: address,
        to,
        value: etherToWei(value, currency.decimals),
        passcode,
        message,
    })
}
```

### Web3 Action Status

Check `web3` action status `name.is`

```typescript
is: {  
 	ready: boolean;
    running: boolean;
    done: boolean;
    failed: boolean;
    withFailMessage: string;
    withId: number;
}
```

```typescript
const { deposit } = useAccount()

return <Spinner isLoading={deposit.is.running} />
```

### Lists

 Lists of transactions 

```
const {
  transfers,
  incoming,
  outgoing,
 = useAccount()
```

## Connect

## Disconnect

## Transactions

### Deposit

To create a retrievable transfer that can be collected use:

`const { deposit } = useAccount()`

#### Set

```typescript
deposit.set: ({ from, to, value, passcode, message, }: {
    from: string;
    to: string;
    value: string;
    passcode: string;
    message?: string | undefined;
}) => void

@param from — ethereum address from

@param to — ethereum address to

@param value — value to send in wei

@param passcode — secure code to collect transaction

@param message — optional message to send

@returns
void

After setting the values deposit transaction will be started
```

```typescript
import { useAccount, etherToWei } from '@kiroboio/web3-react-safe-transfer

const {
    address,
    deposit,
    currency,
} = useAccount()

const setDeposit = ({
        to,
        value,
        passcode,
        message,
    }: DepositParams) => {
    
    deposit.set({
        from: address,
        to,
        value: etherToWei(value, currency.decimals),
        passcode,
        message,
    })
}
```

#### Status

[deposit.is](#Web3 Action Status)

### Retrieve

To retrieve transfer use: 

`const { retrieve } = useAccount()`

#### Set

id: [transfer.id](#Transfers)

```typescript
retrieve.set: ({ id }: {
    id: string;
}) => void

@param id — id of retrievable transfer

@returns
void

After setting the values retrieve transaction will be started
```

```typescript
import { useAccount } from '@kiroboio/web3-react-safe-transfer

const {
    retrieve,
} = useAccount()

const { transfer } = props;

const setCollect = ({
        id,
    }: RetrieveParams) => {
    
   retrieve({ id: transfer.id })
}
```

#### Status

[retrieve.is](#Web3 Action Status)

### Collect

To collect transfer use:

`const { collect } = useAccount()`

#### Set

id: [transfer.id](#Transfers)

```typescript
collect.set: ({ id }: {
    id: string;
    passcode: string;
}) => void

@param id — id of retrievable transfer

@param passcode — secure code to collect transaction

@returns
void

After setting the values collect transaction will be started
```

```typescript
import { useAccount } from '@kiroboio/web3-react-safe-transfer

const {
    collect,
} = useAccount()

const { transfer } = props;

const setCollect = ({
        id,
        passcode,
    }: CollectParams) => {
    
   collect({ id: transfer.id, passcode })
}
```

#### Status

[collect.is](#Web3 Action Status)

### Swap

## Lists

### Transfers

#### Transfer State

```
  | 'waiting-for-deposit'
  | 'retrieving'
  | 'retrieved'
  | 'ready'
  | 'collecting'
  | 'collected'
  | 'rejected'
  | 'invalid'
  | 'new'
  | 'creating'
  | 'unknown'
```

#### Transfer

[transferState]: (#Transfer State)

```typescript
{
    id: string,
    txid: string,
    from: string,
    to: string,
    value: string,
    fees: string,
    salt: string,
    secretHash: string,
    state: <pre><a href="my-url">Something</a></pre>,
    updatedAt: Date | number,
    confirmedBlock: number,
    message: string,
    token?: types.optional(Token, {}),
}
```

### Incoming

### Outgoing

### Swaps

### History

## Utils
