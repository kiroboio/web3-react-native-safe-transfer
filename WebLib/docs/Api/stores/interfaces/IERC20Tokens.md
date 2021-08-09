---
id: "IERC20Tokens"
title: "Interface: IERC20Tokens"
sidebar_label: "IERC20Tokens"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<`MobxClearERC20Tokens`\>

  ↳ **`IERC20Tokens`**

## Properties

### list

• **list**: [`IERC20TokenItem`](IERC20TokenItem.md)[]

___

### map

• **map**: `Map`<`string`, [`IERC20TokenItem`](IERC20TokenItem.md)\>

## Methods

### addToken

▸ **addToken**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IERC20TokenItem`](IERC20TokenItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.addToken

___

### clearBalances

▸ **clearBalances**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearBalances

___

### setBalance

▸ **setBalance**(`address`, `balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setBalance

___

### setRate

▸ **setRate**(`address`, `rate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `rate` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setRate
