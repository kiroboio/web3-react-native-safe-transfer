---
id: "ITransferItems"
title: "Interface: ITransferItems"
sidebar_label: "ITransferItems"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof [`Transfers`](../modules.md#transfers)\>

  ↳ **`ITransferItems`**

## Properties

### activeCount

• **activeCount**: `number`

#### Inherited from

MobxClearInstance.activeCount

___

### address

• **address**: `string`

#### Inherited from

MobxClearInstance.address

___

### count

• **count**: `number`

#### Inherited from

MobxClearInstance.count

___

### fetchCmd

• **fetchCmd**: { `amount`: `number` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `list`: `string`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.fetchCmd

___

### fetched

• **fetched**: `number`

#### Inherited from

MobxClearInstance.fetched

___

### list

• **list**: { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>[] & (`undefined` \| `number` \| [`any`] \| () => `string` & () => `string` \| () => `void` \| (`key`: `string`) => `boolean` \| (`key`: `string`) => `boolean` \| () => `IterableIterator`<`string`\> \| ``"Map"`` \| () => `IterableIterator`<{ `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> \| (`callbackfn`: (`value`: { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>, `key`: `string`, `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>) => `void`, `thisArg?`: `any`) => `void` \| (`key`: `string`) => `undefined` \| { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> \| (`key`: `string`, `value`: `ExtractCSTWithSTN`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>) => `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> \| (`value`: `ExtractCSTWithSTN`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>) => { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> \| () => `IterableIterator`<[`string`, { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>]\> \| (`other`: `any`) => `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> \| (`values`: `any`) => `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> \| () => `IKeyValueMap`<`ModelSnapshotType`<`Object`\>\> \| () => `IKeyValueMap`<`ModelSnapshotType`<`Object`\>\> \| () => `Map`<`string`, { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> \| (`listener`: (`changes`: `IMapDidChange`<`string`, { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>) => `void`, `fireImmediately?`: `boolean`) => `Lambda` \| (`handler`: `IInterceptor`<`IMapWillChange`<`string`, { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>\>) => `Lambda` \| () => `IterableIterator`<[`string`, { `confirmedBlock`: `number` ; `fees`: `string` ; `from`: `string` ; `id`: `string` ; `message`: `string` ; `salt`: `string` ; `secretHash`: `string` ; `state`: `EthTransferState` ; `to`: `string` ; `token`: { address: string; decimals: number; symbol: string; type: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `txid`: `string` ; `updatedAt`: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\> ; `value`: `string`  } & `NonEmptyObject` & { `update`: (`state`: `EthTransferState`, `txid?`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>]\> \| [`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>])[]

#### Inherited from

MobxClearInstance.list

___

### map

• **map**: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

MobxClearInstance.map

___

### name

• **name**: `string`

#### Inherited from

MobxClearInstance.name

## Methods

### add

▸ **add**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.address` | `string` |
| `__namedParameters.count` | `number` |
| `__namedParameters.transfers` | [`ITransferItem`](ITransferItem.md)[] |

#### Returns

`void`

#### Inherited from

MobxClearInstance.add

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clear

___

### delete

▸ **delete**(`address`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.delete

___

### fetch

▸ **fetch**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.fetch

___

### remove

▸ **remove**(`address`, `filter`): [`ITransferItem`](ITransferItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `filter` | (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean` |

#### Returns

[`ITransferItem`](ITransferItem.md)[]

#### Inherited from

MobxClearInstance.remove

___

### setFetched

▸ **setFetched**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setFetched

___

### update

▸ **update**(`address`, `transfer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `transfer` | `Object` |
| `transfer.id` | `string` |
| `transfer.state` | `EthTransferState` |
| `transfer.txid?` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.update

___

### upsert

▸ **upsert**(`address`, `transfer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `transfer` | [`ITransferItem`](ITransferItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.upsert
