---
id: "ISendCmdCmd"
title: "Interface: ISendCmdCmd"
sidebar_label: "ISendCmdCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`SendCmd`](../modules.md#sendcmd)\>

  ↳ **`ISendCmdCmd`**

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
| `params` | [`SendCmdParams`](SendCmdParams.md) |

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
