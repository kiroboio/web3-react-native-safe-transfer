---
id: "EthTransferUpdateRequestDto"
title: "Interface: EthTransferUpdateRequestDto"
sidebar_label: "EthTransferUpdateRequestDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferCreateDto`](EthTransferCreateDto)

  ↳ **`EthTransferUpdateRequestDto`**

  ↳↳ [`EthTransferUpdateDto`](EthTransferUpdateDto)

## Properties

### \_id

• **\_id**: `string`

___

### collect

• **collect**: [`EthCollectInfo`](EthCollectInfo)

___

### createdAt

• **createdAt**: `Date`

create date-time

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[createdAt](EthTransferCreateDto#createdat)

___

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo)

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[deposit](EthTransferCreateDto#deposit)

___

### expires

• **expires**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | `Date` |
| `block?` | `number` |

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[expires](EthTransferCreateDto#expires)

___

### fees

• **fees**: `string`

the transfer fees in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[fees](EthTransferCreateDto#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[from](EthTransferCreateDto#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[message](EthTransferCreateDto#message)

___

### retrieve

• **retrieve**: [`EthRetrieveInfo`](EthRetrieveInfo)

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[salt](EthTransferCreateDto#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[secretHash](EthTransferCreateDto#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules#ethtransferstate)

transfer state

**`tjs-type`** EthTransferState

#### Overrides

[EthTransferCreateDto](EthTransferCreateDto).[state](EthTransferCreateDto#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo)

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[swap](EthTransferCreateDto#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[to](EthTransferCreateDto#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo)

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[token](EthTransferCreateDto#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[txid](EthTransferCreateDto#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

**`tjs-type`** Date

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[updatedAt](EthTransferCreateDto#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto).[value](EthTransferCreateDto#value)
