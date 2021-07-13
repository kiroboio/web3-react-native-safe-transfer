[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IDisconnectCmd

# Interface: IDisconnectCmd

## Hierarchy

- `Instance`<typeof [`DisconnectCmd`](../modules.md#disconnectcmd)\>

  ↳ **`IDisconnectCmd`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IDisconnectCmd.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IDisconnectCmd.md#[$statetreenodetype])
- [is](IDisconnectCmd.md#is)

### Methods

- [clear](IDisconnectCmd.md#clear)
- [clearErrors](IDisconnectCmd.md#clearerrors)
- [done](IDisconnectCmd.md#done)
- [failed](IDisconnectCmd.md#failed)
- [prepare](IDisconnectCmd.md#prepare)
- [start](IDisconnectCmd.md#start)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.is

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clear

#### Defined in

dev/stores/account.ts:172

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clearErrors

#### Defined in

dev/stores/account.ts:168

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

Instance.done

#### Defined in

dev/stores/account.ts:162

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

Instance.failed

#### Defined in

dev/stores/account.ts:165

___

### prepare

▸ **prepare**(): `void`

#### Returns

`void`

#### Inherited from

Instance.prepare

#### Defined in

dev/stores/account.ts:204

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

Instance.start

#### Defined in

dev/stores/account.ts:159
