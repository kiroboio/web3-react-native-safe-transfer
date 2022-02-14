---
id: "IDepositCmd"
title: "Interface: IDepositCmd"
sidebar_label: "IDepositCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`DepositCmd`](../modules#deposit)\>

  ↳ **`IDepositCmd`**

## Properties

### from

• **from**: `string`

#### Inherited from

MobxClearInstance.from

___

### is

• **is**: [`ICmdStatus`](IStatus)

#### Overrides

MobxClearInstance.is

___

### message

• **message**: `string`

#### Inherited from

MobxClearInstance.message

___

### privateSalt

• **privateSalt**: `string`

#### Inherited from

MobxClearInstance.privateSalt

___

### publicSalt

• **publicSalt**: `string`

#### Inherited from

MobxClearInstance.publicSalt

___

### secretHash

• **secretHash**: `string`

#### Inherited from

MobxClearInstance.secretHash

___

### to

• **to**: `string`

#### Inherited from

MobxClearInstance.to

___

### value

• **value**: `string`

#### Inherited from

MobxClearInstance.value

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clear

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearErrors

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.done

___

### failed

▸ **failed**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.message` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.failed

___

### prepare

▸ **prepare**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DepositCmdParams`](DepositParams) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start
