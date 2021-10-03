---
id: "EthTransferCreateRequestDto"
title: "Interface: EthTransferCreateRequestDto"
sidebar_label: "EthTransferCreateRequestDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`EthTransferCreateRequestDto`**

  ↳ [`EthTransferCreateDto`](EthTransferCreateDto.md)

## Properties

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo.md)

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

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

___

### salt

• **salt**: `string`

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

___

### state

• **state**: [`EthTransferState`](../modules.md#ethtransferstate)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo.md)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo.md)

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
