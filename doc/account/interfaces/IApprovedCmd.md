[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IApprovedCmd

# Interface: IApprovedCmd

## Hierarchy

- `Instance`<typeof [`ApprovedCmd`](../modules.md#approvedcmd)\>

  ↳ **`IApprovedCmd`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IApprovedCmd.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IApprovedCmd.md#[$statetreenodetype])
- [amount](IApprovedCmd.md#amount)
- [is](IApprovedCmd.md#is)

### Methods

- [clear](IApprovedCmd.md#clear)
- [clearErrors](IApprovedCmd.md#clearerrors)
- [done](IApprovedCmd.md#done)
- [failed](IApprovedCmd.md#failed)
- [prepare](IApprovedCmd.md#prepare)
- [start](IApprovedCmd.md#start)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### amount

• **amount**: `string`

#### Inherited from

Instance.amount

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

dev/stores/account.ts:435

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

Instance.start

#### Defined in

dev/stores/account.ts:159
