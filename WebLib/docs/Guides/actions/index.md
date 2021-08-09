---
id: "index"
title: "web-lib"
slug: "/Guides/actions"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

#### Transfer Actions

##### Retrieving
```typescript
export const List = observer(() => {
  const {
    retrieve,
    swapRetrieve,
    outgoing,
    swaps,
  } = useAccount()

  const handleRetrieve = (transfer: ITransfer) => {
      retrieve.run({ id: transfer.id })
  }

  const handleSwapRetrieve = (transfer: ITransfer) => {
      swapRetrieve.run({ id: transfer.id })
  }
  return (
    <div>
        <Outgoing 
          transfers={outgoing.list.map((transfer: ITransfer) => <Transfer transfer={transfer} onRetrieve={handleRetrieve} /> )} 
        />
        <Swaps 
          transfers={swaps.list.map((transfer: ITransfer) => <Transfer transfer={transfer} onRetrieve={handleSwapRetrieve} />)}
        />
    </div>
}
```

<a href="/docs/api/stores/interfaces/ILists">ILists</a>
<br />
<a href="/docs/api/stores/interfaces/ITransfer">ITransfer</a>
<br />
<a href="/docs/api/stores/interfaces/IAccount#retrieve">IRetrieve</a>
<br />
<a href="/docs/api/stores/interfaces/IAccount#swapretrieve">ISwapRetrieve</a>

##### Collecting
```typescript
export const List = observer(() => {
  const {
    collect,
    swap,
    incoming,
  } = useAccount()

  const handleCollect = (transfer: ITransfer, passcode: string) => {
      if(transfer.swap?) {
        return swap.run({ id: transfer.id, passcode })
      }
      return collect.run({ id: transfer.id, passcode })
  }

  return <Incoming transfers={incoming.list.map((transfer: ITransfer) => <Transfer transfer={transfer} onCollect={handleCollect} />} />
   
}
```

<a href="/docs/api/stores/interfaces/IAccount#collect">ICollect</a>
<br />
<a href="/docs/api/stores/interfaces/IAccount#swap">ISwap</a>
