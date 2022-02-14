---
title: Getting Started
sidebar_position: 1
sidebar_label: "Getting Started"
---

### Install

```sh
npx i --save @kiroboio/web3-react-native-safe-transfer
# or
yarn add @kiroboio/web3-react-native-safe-transfer
```

{@include: ../../dev/context/README.md}

{@include: ../../dev/debugging/README.md}

## Main concepts

### State

*<a href="/docs/Api/stores/interfaces/IAccount#properties">Account States</a>*



------

*Get `Safe Transfer` current state with `useAccount` hook*

```typescript
const {
    address,
    balance,
  } = useAccount()
```

### Methods

*<a href="/docs/Api/stores/interfaces/IAccount#methods">Account Methods</a>*


------

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
    
    deposit({
        from: address,
        to,
        value: currencyValueToWei(value, currency.decimals),
        passcode,
        message,
    })
}
```

### Commands

*<a href="/docs/Api/stores/interfaces/ICommands">Account Commands Interface</a>*


### Views

[mobx-state-tree views concept](https://mobx-state-tree.js.org/concepts/views)

*<a href="./stores/docs/Api/stores/interfaces/IViews">Account Views Interface</a>*


### Lists

*<a href="/docs/Api/stores/interfaces/ILists">Account Lists Interface</a>*

------

*Get all Safe Transfers related to current address (limit 40)*

```typescript
const { transfers } = useAccount()
```

*Get next `limit` transfers*

```typescript
const limit = 100

transfers.fetch(limit)
```

*<a href="/docs/Api/stores/interfaces/ITransferItems#list">Get list values</a>*

```
transfers.list
```



*Get outgoing, incoming and swap Transfers*

```typescript
const { incoming, outgoing, swaps } = useAccount()
```

### Observer

------

*Use `observer` for enabling the React component to re-render if any of it's observed data changes.*

```typescript
import { observer } from '@kiroboio/web3-react-native-safe-transfer'

export const Address = observer(() => {
    const {
    	address,
  	} = useAccount()
    
    return address
})
```

## Connect

Before start to use `web3` you have to `connect`

<a href="/docs/Api/stores/interfaces/IAccount#connect">Connect</a>

------

*Connect with MetaMask*

```typescript
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

##### Status

```typescript
const {
    connect,
  } = useAccount()
```

<a href="/docs/Api/stores/interfaces/ICmdStatus">connect.is</a>



## Transactions

### Deposit

<a href="/docs/Api/stores/interfaces/IAccount#deposit">Deposit</a>

To create a retrievable transfer that can be collected use:

`const { deposit } = useAccount()`

------



```typescript
import { useAccount, currencyValueToWei } from '@kiroboio/web3-react-native-safe-transfer

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
        value: currencyValueToWei(value, currency.decimals),
        passcode,
        message,
    })
}
```

##### Status

```typescript
const {
    deposit,
  } = useAccount()
```

<a href="/docs/Api/stores/interfaces/ICmdStatus">deposit.is</a>



### Retrieve

<a href="/docs/Api/stores/interfaces/IAccount#retrieve">Retrieve</a>

To retrieve transfer use: 

`const { retrieve } = useAccount()`


```typescript
import { useAccount } from '@kiroboio/web3-react-native-safe-transfer

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

##### Status

```typescript
const {
    retrieve,
  } = useAccount()
```

<a href="/docs/Api/stores/interfaces/ICmdStatus">retrieve.is</a>



### Collect

<a href="/docs/Api/stores/interfaces/IAccount#collect">Collect</a>

To collect transfer use:

`const { collect } = useAccount()`


```typescript
import { useAccount } from '@kiroboio/web3-react-native-safe-transfer'

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
##### Status

```typescript
const {
    collect,
  } = useAccount()
```

<a href="/docs/Api/stores/interfaces/ICmdStatus">collect.is</a>



{@include: ../../dev/utils/README.md}

