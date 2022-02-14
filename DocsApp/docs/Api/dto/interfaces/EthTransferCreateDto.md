---
id: "EthTransferCreateDto"
title: "Interface: EthTransferCreateDto"
sidebar_label: "EthTransferCreateDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferCreateRequestDto`](EthTransferCreateRequestDto)

  ↳ **`EthTransferCreateDto`**

  ↳↳ [`EthTransferUpdateRequestDto`](EthTransferUpdateRequestDto)

  ↳↳ [`EthTransferData`](EthTransferData)

## Properties

### createdAt

• **createdAt**: `Date`

create date-time

___

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[deposit](EthTransferCreateRequestDto#deposit)

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

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[fees](EthTransferCreateRequestDto#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[from](EthTransferCreateRequestDto#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[message](EthTransferCreateRequestDto#message)

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[salt](EthTransferCreateRequestDto#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[secretHash](EthTransferCreateRequestDto#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules#ethtransferstate)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[state](EthTransferCreateRequestDto#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[swap](EthTransferCreateRequestDto#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[to](EthTransferCreateRequestDto#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[token](EthTransferCreateRequestDto#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[txid](EthTransferCreateRequestDto#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

**`tjs-type`** Date

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[updatedAt](EthTransferCreateRequestDto#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto).[value](EthTransferCreateRequestDto#value)
