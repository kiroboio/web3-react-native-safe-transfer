---
id: "EthTransferUpdateRequestDto"
title: "Interface: EthTransferUpdateRequestDto"
sidebar_label: "EthTransferUpdateRequestDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferCreateDto`](EthTransferCreateDto.md)

  ↳ **`EthTransferUpdateRequestDto`**

  ↳↳ [`EthTransferUpdateDto`](EthTransferUpdateDto.md)

## Properties

### \_id

• **\_id**: `string`

___

### collect

• **collect**: `EthCollectInfo`

___

### createdAt

• **createdAt**: `Date`

create date-time

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[createdAt](EthTransferCreateDto.md#createdat)

___

### deposit

• **deposit**: `EthDepositInfo`

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[deposit](EthTransferCreateDto.md#deposit)

___

### expires

• **expires**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | `Date` |
| `block?` | `number` |

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[expires](EthTransferCreateDto.md#expires)

___

### fees

• **fees**: `string`

the transfer fees in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[fees](EthTransferCreateDto.md#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[from](EthTransferCreateDto.md#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[message](EthTransferCreateDto.md#message)

___

### retrieve

• **retrieve**: `EthRetrieveInfo`

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[salt](EthTransferCreateDto.md#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[secretHash](EthTransferCreateDto.md#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules.md#ethtransferstate)

transfer state

**`tjs-type`** EthTransferState

#### Overrides

[EthTransferCreateDto](EthTransferCreateDto.md).[state](EthTransferCreateDto.md#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo.md)

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[swap](EthTransferCreateDto.md#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[to](EthTransferCreateDto.md#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo.md)

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[token](EthTransferCreateDto.md#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[txid](EthTransferCreateDto.md#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

**`tjs-type`** Date

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[updatedAt](EthTransferCreateDto.md#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[value](EthTransferCreateDto.md#value)
