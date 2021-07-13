[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ITransfer

# Interface: ITransfer

## Hierarchy

- `MobxClearInstance`<typeof [`Transfer`](../modules.md#transfer)\>

  ↳ **`ITransfer`**

## Table of contents

### Properties

- [confirmedBlock](ITransfer.md#confirmedblock)
- [fees](ITransfer.md#fees)
- [from](ITransfer.md#from)
- [id](ITransfer.md#id)
- [message](ITransfer.md#message)
- [salt](ITransfer.md#salt)
- [secretHash](ITransfer.md#secrethash)
- [state](ITransfer.md#state)
- [to](ITransfer.md#to)
- [token](ITransfer.md#token)
- [txid](ITransfer.md#txid)
- [updatedAt](ITransfer.md#updatedat)
- [value](ITransfer.md#value)

### Methods

- [update](ITransfer.md#update)

## Properties

### confirmedBlock

• **confirmedBlock**: `number`

#### Inherited from

MobxClearInstance.confirmedBlock

___

### fees

• **fees**: `string`

#### Inherited from

MobxClearInstance.fees

___

### from

• **from**: `string`

#### Inherited from

MobxClearInstance.from

___

### id

• **id**: `string`

#### Inherited from

MobxClearInstance.id

___

### message

• **message**: `string`

#### Inherited from

MobxClearInstance.message

___

### salt

• **salt**: `string`

#### Inherited from

MobxClearInstance.salt

___

### secretHash

• **secretHash**: `string`

#### Inherited from

MobxClearInstance.secretHash

___

### state

• **state**: `EthTransferState`

#### Inherited from

MobxClearInstance.state

___

### to

• **to**: `string`

#### Inherited from

MobxClearInstance.to

___

### token

• **token**: { `address`: `string` ; `decimals`: `number` ; `symbol`: `string` ; `type`: `string`  } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.token

___

### txid

• **txid**: `string`

#### Inherited from

MobxClearInstance.txid

___

### updatedAt

• **updatedAt**: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\>

#### Inherited from

MobxClearInstance.updatedAt

___

### value

• **value**: `string`

#### Inherited from

MobxClearInstance.value

## Methods

### update

▸ **update**(`state`, `txid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `EthTransferState` |
| `txid?` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.update

#### Defined in

dev/stores/account.ts:98
