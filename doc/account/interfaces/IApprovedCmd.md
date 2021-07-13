[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IApprovedCmd

# Interface: IApprovedCmd

## Hierarchy

- `MobxClearInstance`<typeof [`ApprovedCmd`](../modules.md#approvedcmd)\>

  ↳ **`IApprovedCmd`**

## Table of contents

### Properties

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

### amount

• **amount**: `string`

#### Inherited from

MobxClearInstance.amount

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.is

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clear

#### Defined in

dev/stores/account.ts:174

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearErrors

#### Defined in

dev/stores/account.ts:170

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.done

#### Defined in

dev/stores/account.ts:164

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

dev/stores/account.ts:167

___

### prepare

▸ **prepare**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:437

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
