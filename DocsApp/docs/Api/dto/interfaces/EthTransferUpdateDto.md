---
id: "EthTransferUpdateDto"
title: "Interface: EthTransferUpdateDto"
sidebar_label: "EthTransferUpdateDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferUpdateRequestDto`](EthTransferUpdateRequestDto)

  ↳ **`EthTransferUpdateDto`**

## Properties

### \_id

• **\_id**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[_id](EthTransferUpdateRequestDto#_id)

___

### collect

• **collect**: [`EthCollectInfo`](EthCollectInfo)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[collect](EthTransferUpdateRequestDto#collect)

___

### createdAt

• **createdAt**: `Date`

create date-time

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[createdAt](EthTransferUpdateRequestDto#createdat)

___

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[deposit](EthTransferUpdateRequestDto#deposit)

___

### expires

• **expires**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at?` | `Date` |
| `block?` | `number` |

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[expires](EthTransferUpdateRequestDto#expires)

___

### fees

• **fees**: `string`

the transfer fees in wei

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[fees](EthTransferUpdateRequestDto#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[from](EthTransferUpdateRequestDto#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[message](EthTransferUpdateRequestDto#message)

___

### retrieve

• **retrieve**: [`EthRetrieveInfo`](EthRetrieveInfo)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[retrieve](EthTransferUpdateRequestDto#retrieve)

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[salt](EthTransferUpdateRequestDto#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[secretHash](EthTransferUpdateRequestDto#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules#ethtransferstate)

transfer state

#### Overrides

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[state](EthTransferUpdateRequestDto#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[swap](EthTransferUpdateRequestDto#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[to](EthTransferUpdateRequestDto#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo)

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[token](EthTransferUpdateRequestDto#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[txid](EthTransferUpdateRequestDto#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

#### Overrides

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[updatedAt](EthTransferUpdateRequestDto#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferUpdateRequestDto](EthTransferUpdateRequestDto).[value](EthTransferUpdateRequestDto#value)
