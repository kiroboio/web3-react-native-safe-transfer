---
id: "ICollectCmd"
title: "Interface: ICollectCmd"
sidebar_label: "ICollectCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`CollectCmd`](../modules#collect)\>

  ↳ **`ICollectCmd`**

## Properties

### id

• **id**: `string`

#### Inherited from

MobxClearInstance.id

___

### is

• **is**: [`ICmdStatus`](IStatus)

#### Overrides

MobxClearInstance.is

___

### key

• **key**: `string`

#### Inherited from

MobxClearInstance.key

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
| `params` | [`CollectCmdParams`](CollectParams) |

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
