---
sidebar_position: 1
sidebar_label: "How To Use"
---
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

{@include: ../../dev/context/README.md}

{@include: ../../dev/debugging/README.md}

## Main concepts

### State

*<a href="./stores/interfaces/IAccount#properties">Account States</a>*



##### Example

------

*Get `Safe Transfer` current state with `useAccount` hook*

```typescript
const {
    address,
    balance,
  } = useAccount()
```

### Actions

*<a href="./stores/interfaces/IAccount#methods">Account Actions</a>*



##### Example

------

*Change `Safe Transfer`  state with **actions***

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
        value: etherToWei(value, currency.decimals),
        passcode,
        message,
    })
}
```


### Transfers

*<a href="./stores/interfaces/ITransferItems">Transfers Interface</a>*

#### Example

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

*Get outgoing, incoming and swap Transfers*

```typescript
const { incoming, outgoing, swaps } = useAccount()
```

### Observer

##### Example

------

*Use `observer` for enabling the React component to re-render if any of it's observed data changes.*

```typescript
import { observer } from '@kiroboio/web3-react-safe-transfer'

export const Address = observer(() => {
    const {
    	address,
  	} = useAccount()
    
    return address
})
```

## Connect

Before start to use `web3` you have to `connect`

<a href="./stores/interfaces/IAccount#connect">Connect</a>

##### Example 

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
    connectCmd,
  } = useAccount()
```

<a href="./stores/interfaces/ICmdStatus">connectCmd.is</a>

## Transactions

### Deposit

<a href="./stores/interfaces/IAccount#deposit">Deposit</a>

To create a retrievable transfer that can be collected use:

`const { deposit } = useAccount()`

##### Example

------



```typescript
import { useAccount, currencyValueToWei } from '@kiroboio/web3-react-safe-transfer

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
    depositCmd,
  } = useAccount()
```

<a href="./stores/interfaces/ICmdStatus">depositCmd.is</a>



### Retrieve

<a href="./stores/interfaces/IAccount#retrieve">Retrieve</a>

To retrieve transfer use: 

`const { retrieve } = useAccount()`


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

##### Status

```typescript
const {
    retrieveCmd,
  } = useAccount()
```

<a href="./stores/interfaces/ICmdStatus">retrieveCmd.is</a>



### Collect

<a href="./stores/interfaces/IAccount#collect">Collect</a>

To collect transfer use:

`const { collect } = useAccount()`


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
##### Status

```typescript
const {
    collectCmd,
  } = useAccount()
```

<a href="./stores/interfaces/ICmdStatus">collectCmd.is</a>



{@include: ../../dev/utils/README.md}

