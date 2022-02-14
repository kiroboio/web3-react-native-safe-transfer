---
id: "IFetchCmd"
title: "Interface: IFetchCmd"
sidebar_label: "IFetchCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`FetchCmd`](../modules#fetch)\>

  ↳ **`IFetchCmd`**

## Properties

### amount

• **amount**: `number`

#### Inherited from

MobxClearInstance.amount

___

### is

• **is**: [`ICmdStatus`](IStatus)

#### Overrides

MobxClearInstance.is

___

### list

• **list**: `string`

#### Inherited from

MobxClearInstance.list

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
| `params` | [`FetchCmdParams`](FetchParams) |

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
