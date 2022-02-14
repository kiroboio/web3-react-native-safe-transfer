---
id: "EthTransferResponseDto"
title: "Interface: EthTransferResponseDto"
sidebar_label: "EthTransferResponseDto"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### collect

• **collect**: [`EthCollectInfo`](EthCollectInfo)

___

### createdAt

• **createdAt**: `Date`

create date-time

___

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo)

___

### expires

• **expires**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | `Date` |
| `block?` | `number` |

___

### fees

• **fees**: `string`

the transfer fees in wei

**`tjs-type`** string

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

___

### id

• **id**: `string`

hints for the id generator in the format 'algorithm;data'

**`tjs-type`** string

___

### interchange

• `Optional` **interchange**: [`EthSwapInfo`](EthSwapInfo)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

___

### retrieve

• **retrieve**: [`EthRetrieveInfo`](EthRetrieveInfo)

___

### salt

• **salt**: `string`

salt use to encrypt collect transaction

**`tjs-type`** string

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

___

### state

• **state**: [`EthTransferState`](../modules#ethtransferstate)

___

### swap

• **swap**: [`EthCollectInfo`](EthCollectInfo)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo)

the coin used (wei if not exist)

___

### txid

• **txid**: `string`

___

### updatedAt

• **updatedAt**: `Date`

update date-time

**`tjs-type`** Date

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string
