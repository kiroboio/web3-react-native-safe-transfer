---
id: "IRetrieveCmd"
title: "Interface: IRetrieveCmd"
sidebar_label: "IRetrieveCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`RetrieveCmd`](../modules#retrieve)\>

  ↳ **`IRetrieveCmd`**

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
| `params` | [`RetrieveCmdParams`](RetrieveParams) |

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
