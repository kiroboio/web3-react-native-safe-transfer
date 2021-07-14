---
id: "ICollectCmd"
title: "Interface: ICollectCmd"
sidebar_label: "ICollectCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`CollectCmd`](../modules.md#collectcmd)\>

  ↳ **`ICollectCmd`**

## Properties

### id

• **id**: `string`

#### Inherited from

MobxClearInstance.id

___

### is

• **is**: [`ICmdStatus`](ICmdStatus.md)

#### Overrides

MobxClearInstance.is

#### Defined in

dev/stores/account.ts:556

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
| `params` | [`CollectCmdParams`](CollectCmdParams.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:546

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:158
