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

• **list**: { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Inherited from

MobxClearInstance.list

___

### map

• **map**: `Map`<`string`, [`IERC20TokenItem`](IERC20TokenItem.md)\>

#### Defined in

dev/stores/account.ts:388

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

#### Defined in

dev/stores/account.ts:361

___

### clearBalances

▸ **clearBalances**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearBalances

#### Defined in

dev/stores/account.ts:377

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

#### Defined in

dev/stores/account.ts:374

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

#### Defined in

dev/stores/account.ts:380
