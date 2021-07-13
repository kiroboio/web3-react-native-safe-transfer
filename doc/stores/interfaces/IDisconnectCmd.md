[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IDisconnectCmd

# Interface: IDisconnectCmd

## Hierarchy

- `MobxClearInstance`<typeof [`DisconnectCmd`](../modules.md#disconnectcmd)\>

  ↳ **`IDisconnectCmd`**

## Table of contents

### Properties

- [is](IDisconnectCmd.md#is)

### Methods

- [clear](IDisconnectCmd.md#clear)
- [clearErrors](IDisconnectCmd.md#clearerrors)
- [done](IDisconnectCmd.md#done)
- [failed](IDisconnectCmd.md#failed)
- [prepare](IDisconnectCmd.md#prepare)
- [start](IDisconnectCmd.md#start)

## Properties

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

dev/stores/account.ts:206

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
