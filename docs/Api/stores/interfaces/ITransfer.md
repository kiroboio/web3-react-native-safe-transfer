---
id: "ITransfer"
title: "Interface: ITransfer"
sidebar_label: "ITransfer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`Transfer`](../modules.md#transfer)\>

  ↳ **`ITransfer`**

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

### swap

• **swap**: { `fees`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `value`: `string`  } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.swap

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
