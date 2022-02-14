---
id: "ITransferItems"
title: "Interface: ITransferItems"
sidebar_label: "ITransferItems"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearTransferItems`

  ↳ **`ITransferItems`**

## Properties

### activeCount

• **activeCount**: `number`

#### Inherited from

MobxClearTransferItems.activeCount

___

### address

• **address**: `string`

#### Inherited from

MobxClearTransferItems.address

___

### count

• **count**: `number`

#### Inherited from

MobxClearTransferItems.count

___

### export

• **export**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **is**(): `Object`` | {} |
| ``get` **progress**(): `number`` | {} |
| `run` | () => `void` |

#### Inherited from

MobxClearTransferItems.export

___

### exportCmd

• **exportCmd**: { `amount`: `number` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `list`: `string`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchParams)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchParams)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearTransferItems.exportCmd

___

### fetch

• **fetch**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **is**(): `Object`` | {} |
| `run` | (`amount`: `number`) => `void` |

#### Inherited from

MobxClearTransferItems.fetch

___

### fetchCmd

• **fetchCmd**: [`IFetchCmd`](IFetch)

___

### fetched

• **fetched**: `number`

#### Inherited from

MobxClearTransferItems.fetched

___

### firstFetchedBlockNumber

• **firstFetchedBlockNumber**: `number`

#### Inherited from

MobxClearTransferItems.firstFetchedBlockNumber

___

### lastFetchedBlockNumber

• **lastFetchedBlockNumber**: `number`

#### Inherited from

MobxClearTransferItems.lastFetchedBlockNumber

___

### list

• **list**: [`ITransfer`](ITransfer)[]

___

### map

• **map**: `Map`<`string`, [`ITransfer`](ITransfer)\>

___

### name

• **name**: `string` = `types.string`

#### Inherited from

MobxClearTransferItems.name

## Methods

### add

▸ **add**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.address` | `string` |
| `__namedParameters.count` | `number` |
| `__namedParameters.transfers` | [`ITransferItem`](ITransferItem)[] |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.add

___

### addFetchedAmount

▸ **addFetchedAmount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.addFetchedAmount

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.clear

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

MobxClearTransferItems.delete

___

### remove

▸ **remove**(`address`, `filter`): [`ITransferItem`](ITransferItem)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `filter` | (`item`: [`ITransferItem`](ITransferItem)) => `boolean` |

#### Returns

[`ITransferItem`](ITransferItem)[]

#### Inherited from

MobxClearTransferItems.remove

___

### setCount

▸ **setCount**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.setCount

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

MobxClearTransferItems.setFetched

___

### setFirstFetchedBlockNumber

▸ **setFirstFetchedBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `string` \| `number` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.setFirstFetchedBlockNumber

___

### setLastFetchedBlockNumber

▸ **setLastFetchedBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `string` \| `number` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.setLastFetchedBlockNumber

___

### setName

▸ **setName**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.name` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.setName

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

MobxClearTransferItems.update

___

### upsert

▸ **upsert**(`address`, `transfer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `transfer` | [`ITransferItem`](ITransferItem) |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.upsert
