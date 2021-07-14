---
id: "IConnectCmd"
title: "Interface: IConnectCmd"
sidebar_label: "IConnectCmd"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`ConnectCmd`](../modules.md#connectcmd)\>

  ↳ **`IConnectCmd`**

## Properties

### connector

• **connector**: `string`

#### Inherited from

MobxClearInstance.connector

___

### is

• **is**: [`ICmdStatus`](ICmdStatus.md)

#### Overrides

MobxClearInstance.is

#### Defined in

dev/stores/account.ts:205

___

### isConnected

• **isConnected**: `boolean`

#### Inherited from

MobxClearInstance.isConnected

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

▸ **prepare**(`connector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `undefined` \| `Connectors` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:190

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:158
