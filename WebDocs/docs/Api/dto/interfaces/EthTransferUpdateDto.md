---
id: "EthTransferUpdateDto"
title: "Interface: EthTransferUpdateDto"
sidebar_label: "EthTransferUpdateDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferUpdateRequestDto`](EthTransferUpdateRequestDto.md)

  ↳ **`EthTransferUpdateDto`**

## Properties

### \_id

• **\_id**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[_id](EthTransferUpdateRequestDto.md#_id)

___

### collect

• **collect**: `EthCollectInfo`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[collect](EthTransferUpdateRequestDto.md#collect)

___

### createdAt

• **createdAt**: `Date`

create date-time

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[createdAt](EthTransferUpdateRequestDto.md#createdat)

___

### deposit

• **deposit**: `EthDepositInfo`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[deposit](EthTransferUpdateRequestDto.md#deposit)

___

### expires

• **expires**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | `Date` |
| `block?` | `number` |

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[expires](EthTransferUpdateRequestDto.md#expires)

___

### fees

• **fees**: `string`

the transfer fees in wei

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[fees](EthTransferUpdateRequestDto.md#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[from](EthTransferUpdateRequestDto.md#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[message](EthTransferUpdateRequestDto.md#message)

___

### retrieve

• **retrieve**: `EthRetrieveInfo`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[retrieve](EthTransferUpdateRequestDto.md#retrieve)

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[salt](EthTransferUpdateRequestDto.md#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[secretHash](EthTransferUpdateRequestDto.md#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules.md#ethtransferstate)

transfer state

#### Overrides

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[state](EthTransferUpdateRequestDto.md#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo.md)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[swap](EthTransferUpdateRequestDto.md#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[to](EthTransferUpdateRequestDto.md#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo.md)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[token](EthTransferUpdateRequestDto.md#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[txid](EthTransferUpdateRequestDto.md#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

#### Overrides

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[updatedAt](EthTransferUpdateRequestDto.md#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto.md).[value](EthTransferUpdateRequestDto.md#value)
