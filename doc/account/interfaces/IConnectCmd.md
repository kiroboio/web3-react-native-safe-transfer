[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IConnectCmd

# Interface: IConnectCmd

## Hierarchy

- `MobxClearInstance`<typeof [`ConnectCmd`](../modules.md#connectcmd)\>

  ↳ **`IConnectCmd`**

## Table of contents

### Properties

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

### connector

• **connector**: `string`

#### Inherited from

MobxClearInstance.connector

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.is

___

### isConnected

• **isConnected**: `boolean`

#### Inherited from

MobxClearInstance.isConnected

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

▸ **prepare**(`connector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `undefined` \| `Connectors` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:189

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
