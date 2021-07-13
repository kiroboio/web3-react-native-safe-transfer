[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ICmdStatus

# Interface: ICmdStatus

## Hierarchy

- `Instance`<typeof [`CmdStatus`](../modules.md#cmdstatus)\>

  ↳ **`ICmdStatus`**

## Table of contents

### Properties

- [[$nonEmptyObject]](ICmdStatus.md#[$nonemptyobject])
- [[$stateTreeNodeType]](ICmdStatus.md#[$statetreenodetype])
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

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### done

• **done**: `boolean`

#### Inherited from

Instance.done

___

### failed

• **failed**: `boolean`

#### Inherited from

Instance.failed

___

### ready

• **ready**: `boolean`

#### Inherited from

Instance.ready

___

### running

• **running**: `boolean`

#### Inherited from

Instance.running

___

### withFailMessage

• **withFailMessage**: `string`

#### Inherited from

Instance.withFailMessage

___

### withId

• **withId**: `number`

#### Inherited from

Instance.withId

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clear

#### Defined in

dev/stores/account.ts:115

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

Instance.finished

#### Defined in

dev/stores/account.ts:136

___

### prepared

▸ **prepared**(): `void`

#### Returns

`void`

#### Inherited from

Instance.prepared

#### Defined in

dev/stores/account.ts:123

___

### started

▸ **started**(): `void`

#### Returns

`void`

#### Inherited from

Instance.started

#### Defined in

dev/stores/account.ts:131
