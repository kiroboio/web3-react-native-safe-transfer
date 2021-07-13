[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IFetchCmd

# Interface: IFetchCmd

## Hierarchy

- `MobxClearInstance`<typeof [`FetchCmd`](../modules.md#fetchcmd)\>

  ↳ **`IFetchCmd`**

## Table of contents

### Properties

- [amount](IFetchCmd.md#amount)
- [is](IFetchCmd.md#is)
- [list](IFetchCmd.md#list)

### Methods

- [clear](IFetchCmd.md#clear)
- [clearErrors](IFetchCmd.md#clearerrors)
- [done](IFetchCmd.md#done)
- [failed](IFetchCmd.md#failed)
- [prepare](IFetchCmd.md#prepare)
- [start](IFetchCmd.md#start)

## Properties

### amount

• **amount**: `number`

#### Inherited from

MobxClearInstance.amount

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

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

▸ **prepare**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetchCmdParams`](FetchCmdParams.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:492

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
