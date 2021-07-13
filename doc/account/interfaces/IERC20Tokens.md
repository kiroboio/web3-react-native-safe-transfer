[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IERC20Tokens

# Interface: IERC20Tokens

## Hierarchy

- `MobxClearInstance`<typeof [`ERC20Tokens`](../modules.md#erc20tokens)\>

  ↳ **`IERC20Tokens`**

## Table of contents

### Properties

- [list](IERC20Tokens.md#list)
- [map](IERC20Tokens.md#map)

### Methods

- [addToken](IERC20Tokens.md#addtoken)
- [clearBalances](IERC20Tokens.md#clearbalances)
- [setBalance](IERC20Tokens.md#setbalance)
- [setRate](IERC20Tokens.md#setrate)

## Properties

### list

• **list**: { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Inherited from

MobxClearInstance.list

___

### map

• **map**: `IMSTMap`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

MobxClearInstance.map

## Methods

### addToken

▸ **addToken**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ERC20TokenItem`](ERC20TokenItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearInstance.addToken

#### Defined in

dev/stores/account.ts:355

___

### clearBalances

▸ **clearBalances**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearBalances

#### Defined in

dev/stores/account.ts:371

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

dev/stores/account.ts:368

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

dev/stores/account.ts:374
