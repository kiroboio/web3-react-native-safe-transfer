---
id: "index"
title: "web-lib"
slug: "/guides/transfers"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

#### Transfers

<a href="/docs/api/stores/interfaces/ILists">ILists</a>

##### Getting new transfers (incoming & outgoing, swaps not included)
```
export const TransfersList = observer(() => {
  const {
    transfers,
  } = useAccount()

  return transfers.list.map((transfer: ITransfer) => transfer)
}
```
<a href="/docs/api/stores/interfaces/ITransfer">ITransfer</a>

##### Getting new Swaps
```
export const SwapsList = observer(() => {
  const {
    swaps,
  } = useAccount()

  return swaps.list.map((transfer: ITransfer) => transfer)
}
```

##### Getting transfers history (incoming & outgoing & swaps)
```
export const HistoryList = observer(() => {
  const {
    history,
  } = useAccount()

  return history.list.map((transfer: ITransfer) => transfer)
}
```

##### Getting incoming & outgoing
```
export const HistoryList = observer(() => {
  const {
    incoming,
    outgoing,
  } = useAccount()

  return (
      <div>
        <Incoming transfers={incoming.list.map((transfer: ITransfer) => transfer)} />
        <Outgoing transfers={outgoing.list.map((transfer: ITransfer) => transfer)} />
      </div>
    )
}
```
