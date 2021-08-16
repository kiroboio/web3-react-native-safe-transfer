---
id: "EthTransferCreateDto"
title: "Interface: EthTransferCreateDto"
sidebar_label: "EthTransferCreateDto"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`EthTransferCreateRequestDto`](EthTransferCreateRequestDto.md)

  ↳ **`EthTransferCreateDto`**

  ↳↳ [`EthTransferUpdateRequestDto`](EthTransferUpdateRequestDto.md)

  ↳↳ [`EthTransferData`](EthTransferData.md)

## Properties

### createdAt

• **createdAt**: `Date`

create date-time

___

### deposit

• **deposit**: `EthDepositInfo`

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[deposit](EthTransferCreateRequestDto.md#deposit)

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

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[fees](EthTransferCreateRequestDto.md#fees)

___

### from

• **from**: `string`

senders address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[from](EthTransferCreateRequestDto.md#from)

___

### message

• **message**: `string`

free text to be attached to this transfer

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[message](EthTransferCreateRequestDto.md#message)

___

### salt

• **salt**: `string`

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[salt](EthTransferCreateRequestDto.md#salt)

___

### secretHash

• **secretHash**: `string`

hash use to verify recipient pass code

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[secretHash](EthTransferCreateRequestDto.md#secrethash)

___

### state

• **state**: [`EthTransferState`](../modules.md#ethtransferstate)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[state](EthTransferCreateRequestDto.md#state)

___

### swap

• `Optional` **swap**: [`EthSwapInfo`](EthSwapInfo.md)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[swap](EthTransferCreateRequestDto.md#swap)

___

### to

• **to**: `string`

the destination address

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[to](EthTransferCreateRequestDto.md#to)

___

### token

• `Optional` **token**: [`EthTokenInfo`](EthTokenInfo.md)

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[token](EthTransferCreateRequestDto.md#token)

___

### txid

• **txid**: `string`

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[txid](EthTransferCreateRequestDto.md#txid)

___

### updatedAt

• **updatedAt**: `Date`

update date-time

**`tjs-type`** Date

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[updatedAt](EthTransferCreateRequestDto.md#updatedat)

___

### value

• **value**: `string`

the transfer amount in wei

**`tjs-type`** string

#### Inherited from

[EthTransferCreateRequestDto](EthTransferCreateRequestDto.md).[value](EthTransferCreateRequestDto.md#value)
