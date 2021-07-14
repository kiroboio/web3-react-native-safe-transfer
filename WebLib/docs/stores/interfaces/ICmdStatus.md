---
id: "ICmdStatus"
title: "Interface: ICmdStatus"
sidebar_label: "ICmdStatus"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`CmdStatus`](../modules.md#cmdstatus)\>

  ↳ **`ICmdStatus`**

## Properties

### done

• **done**: `boolean`

#### Inherited from

MobxClearInstance.done

___

### failed

• **failed**: `boolean`

#### Inherited from

MobxClearInstance.failed

___

### ready

• **ready**: `boolean`

#### Inherited from

MobxClearInstance.ready

___

### running

• **running**: `boolean`

#### Inherited from

MobxClearInstance.running

___

### withFailMessage

• **withFailMessage**: `string`

#### Inherited from

MobxClearInstance.withFailMessage

___

### withId

• **withId**: `number`

#### Inherited from

MobxClearInstance.withId

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clear

___

### finished

▸ **finished**(`err?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `Object` |
| `err.err` | `Object` |
| `err.err.message` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.finished

___

### prepared

▸ **prepared**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepared

___

### started

▸ **started**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.started
