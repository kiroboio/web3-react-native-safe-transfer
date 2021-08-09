
#### Transfer Actions

##### Retrieving
```
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
        <Outgoing onRetrieve={handleRetrieve} transfers={outgoing.list.map((transfer: ITransfer) => transfer)} />
        <Swaps onRetrieve={handleSwapRetrieve} transfers={swaps.list.map((transfer: ITransfer) => transfer)} />
    </div>
}
```

<a href="/docs/api/stores/interfaces/ILists">ILists</a>
<a href="/docs/api/stores/interfaces/ITransfer">ITransfer</a>
<a href="/docs/api/stores/interfaces/IAccount#retrieve">IRetrieve</a>
<a href="/docs/api/stores/interfaces/IAccount#swapretrieve">ISwapRetrieve</a>