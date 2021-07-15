---
id: "EthTransferData"
title: "Interface: EthTransferData"
sidebar_label: "EthTransferData"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferCreateDto`](EthTransferCreateDto.md)

  ↳ **`EthTransferData`**

## Properties

### \_id

• **\_id**: `string`

___

### collect

• **collect**: [`EthCollectInfo`](EthCollectInfo.md)

___

### createdAt

• **createdAt**: `Date`

create date-time

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[createdAt](EthTransferCreateDto.md#createdat)

___

### deposit

• **deposit**: [`EthDepositInfo`](EthDepositInfo.md)

#### Overrides

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

• **retrieve**: [`EthRetrieveInfo`](EthRetrieveInfo.md)

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

#### Inherited from

[EthTransferCreateDto](EthTransferCreateDto.md).[state](EthTransferCreateDto.md#state)

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
