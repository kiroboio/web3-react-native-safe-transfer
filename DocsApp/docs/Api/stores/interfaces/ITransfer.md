---
id: "ITransfer"
title: "Interface: ITransfer"
sidebar_label: "ITransfer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`Transfer`](../modules#transfer)\>

  ↳ **`ITransfer`**

## Properties

### confirmedBlock

• **confirmedBlock**: `number` = `types.number`

#### Inherited from

MobxClearInstance.confirmedBlock

___

### fees

• **fees**: `string` = `types.string`

#### Inherited from

MobxClearInstance.fees

___

### from

• **from**: `string` = `types.string`

#### Inherited from

MobxClearInstance.from

___

### id

• **id**: `string` = `types.identifier`

#### Inherited from

MobxClearInstance.id

___

### message

• **message**: `string` = `types.string`

#### Inherited from

MobxClearInstance.message

___

### salt

• **salt**: `string` = `types.string`

#### Inherited from

MobxClearInstance.salt

___

### secretHash

• **secretHash**: `string` = `types.string`

#### Inherited from

MobxClearInstance.secretHash

___

### state

• **state**: `EthTransferState` = `StatePrimitive`

#### Inherited from

MobxClearInstance.state

___

### swap

• **swap**: { `fees`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `decimals`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `type`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, {}, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `value`: `string`  } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `fees`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `token`: `IOptionalIType`<`IModelType`<{ `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `decimals`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `type`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, {}, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, {}, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.swap

___

### to

• **to**: `string` = `types.string`

#### Inherited from

MobxClearInstance.to

___

### token

• **token**: { `address`: `string` ; `decimals`: `number` ; `symbol`: `string` ; `type`: `string`  } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `decimals`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `type`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, {}, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.token

___

### txid

• **txid**: `string` = `types.string`

#### Inherited from

MobxClearInstance.txid

___

### updatedAt

• **updatedAt**: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> = `types.Date`

#### Inherited from

MobxClearInstance.updatedAt

___

### value

• **value**: `string` = `types.string`

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
