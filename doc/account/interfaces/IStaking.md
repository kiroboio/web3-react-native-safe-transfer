[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IStaking

# Interface: IStaking

## Hierarchy

- `Instance`<typeof [`Staking`](../modules.md#staking)\>

  ↳ **`IStaking`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IStaking.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IStaking.md#[$statetreenodetype])
- [address](IStaking.md#address)
- [balance](IStaking.md#balance)

### Methods

- [setData](IStaking.md#setdata)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### address

• **address**: `string`

#### Inherited from

Instance.address

___

### balance

• **balance**: `string`

#### Inherited from

Instance.balance

## Methods

### setData

▸ **setData**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IStakingItem`](IStakingItem.md) |

#### Returns

`void`

#### Inherited from

Instance.setData

#### Defined in

dev/stores/account.ts:279
