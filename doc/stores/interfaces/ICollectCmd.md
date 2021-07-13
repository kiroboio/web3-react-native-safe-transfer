[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ICollectCmd

# Interface: ICollectCmd

## Hierarchy

- `MobxClearInstance`<typeof [`CollectCmd`](../modules.md#collectcmd)\>

  ↳ **`ICollectCmd`**

## Table of contents

### Properties

- [id](ICollectCmd.md#id)
- [is](ICollectCmd.md#is)
- [key](ICollectCmd.md#key)

### Methods

- [clear](ICollectCmd.md#clear)
- [clearErrors](ICollectCmd.md#clearerrors)
- [done](ICollectCmd.md#done)
- [failed](ICollectCmd.md#failed)
- [prepare](ICollectCmd.md#prepare)
- [start](ICollectCmd.md#start)

## Properties

### id

• **id**: `string`

#### Inherited from

MobxClearInstance.id

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.is

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
| `params` | [`CollectCmdParams`](CollectCmdParams.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:530

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
