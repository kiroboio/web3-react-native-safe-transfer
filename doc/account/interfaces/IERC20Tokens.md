[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IERC20Tokens

# Interface: IERC20Tokens

## Hierarchy

- `Instance`<typeof [`ERC20Tokens`](../modules.md#erc20tokens)\>

  ↳ **`IERC20Tokens`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IERC20Tokens.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IERC20Tokens.md#[$statetreenodetype])
- [map](IERC20Tokens.md#map)

### Accessors

- [list](IERC20Tokens.md#list)

### Methods

- [addToken](IERC20Tokens.md#addtoken)
- [clearBalances](IERC20Tokens.md#clearbalances)
- [setBalance](IERC20Tokens.md#setbalance)
- [setRate](IERC20Tokens.md#setrate)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### map

• **map**: `IMSTMap`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

Instance.map

## Accessors

### list

• `get` **list**(): { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Returns

{ `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Defined in

dev/stores/account.ts:348

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

Instance.addToken

#### Defined in

dev/stores/account.ts:353

___

### clearBalances

▸ **clearBalances**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clearBalances

#### Defined in

dev/stores/account.ts:369

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

Instance.setBalance

#### Defined in

dev/stores/account.ts:366

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

Instance.setRate

#### Defined in

dev/stores/account.ts:372
