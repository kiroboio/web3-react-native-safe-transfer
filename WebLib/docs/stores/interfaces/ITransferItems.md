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

### fetchCmd

• **fetchCmd**: [`IFetchCmd`](IFetchCmd.md)

___

### fetched

• **fetched**: `number`

#### Inherited from

MobxClearTransferItems.fetched

___

### list

• **list**: [`ITransfer`](ITransfer.md)[]

___

### map

• **map**: `Map`<`string`, [`ITransfer`](ITransfer.md)\>

___

### name

• **name**: `string`

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
| `__namedParameters.transfers` | [`ITransferItem`](ITransferItem.md)[] |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.add

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

### fetch

▸ **fetch**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.fetch

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

MobxClearTransferItems.remove

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
| `transfer` | [`ITransferItem`](ITransferItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearTransferItems.upsert
