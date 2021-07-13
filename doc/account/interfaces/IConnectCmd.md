[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IConnectCmd

# Interface: IConnectCmd

## Hierarchy

- `Instance`<typeof [`ConnectCmd`](../modules.md#connectcmd)\>

  ↳ **`IConnectCmd`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IConnectCmd.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IConnectCmd.md#[$statetreenodetype])
- [connector](IConnectCmd.md#connector)
- [is](IConnectCmd.md#is)
- [isConnected](IConnectCmd.md#isconnected)

### Methods

- [clear](IConnectCmd.md#clear)
- [clearErrors](IConnectCmd.md#clearerrors)
- [done](IConnectCmd.md#done)
- [failed](IConnectCmd.md#failed)
- [prepare](IConnectCmd.md#prepare)
- [start](IConnectCmd.md#start)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `connector`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `isConnected`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### connector

• **connector**: `string`

#### Inherited from

Instance.connector

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.is

___

### isConnected

• **isConnected**: `boolean`

#### Inherited from

Instance.isConnected

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

▸ **prepare**(`connector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `undefined` \| `Connectors` |

#### Returns

`void`

#### Inherited from

Instance.prepare

#### Defined in

dev/stores/account.ts:187

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

Instance.start

#### Defined in

dev/stores/account.ts:159
