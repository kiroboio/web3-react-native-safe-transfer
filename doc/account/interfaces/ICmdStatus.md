[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ICmdStatus

# Interface: ICmdStatus

## Hierarchy

- `MobxClearInstance`<typeof [`CmdStatus`](../modules.md#cmdstatus)\>

  ↳ **`ICmdStatus`**

## Table of contents

### Properties

- [done](ICmdStatus.md#done)
- [failed](ICmdStatus.md#failed)
- [ready](ICmdStatus.md#ready)
- [running](ICmdStatus.md#running)
- [withFailMessage](ICmdStatus.md#withfailmessage)
- [withId](ICmdStatus.md#withid)

### Methods

- [clear](ICmdStatus.md#clear)
- [finished](ICmdStatus.md#finished)
- [prepared](ICmdStatus.md#prepared)
- [started](ICmdStatus.md#started)

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

#### Defined in

dev/stores/account.ts:117

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

#### Defined in

dev/stores/account.ts:138

___

### prepared

▸ **prepared**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepared

#### Defined in

dev/stores/account.ts:125

___

### started

▸ **started**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.started

#### Defined in

dev/stores/account.ts:133
