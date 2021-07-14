---
id: "IDepositCmd"
title: "Interface: IDepositCmd"
sidebar_label: "IDepositCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`DepositCmd`](../modules.md#depositcmd)\>

  ↳ **`IDepositCmd`**

## Properties

### from

• **from**: `string`

#### Inherited from

MobxClearInstance.from

___

### is

• **is**: [`ICmdStatus`](ICmdStatus.md)

#### Overrides

MobxClearInstance.is

#### Defined in

dev/stores/account.ts:491

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

#### Defined in

dev/stores/account.ts:171

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearErrors

#### Defined in

dev/stores/account.ts:167

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.done

#### Defined in

dev/stores/account.ts:161

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

#### Defined in

dev/stores/account.ts:164

___

### prepare

▸ **prepare**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DepositCmdParams`](DepositCmdParams.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:476

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:158
