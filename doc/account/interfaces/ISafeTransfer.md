[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ISafeTransfer

# Interface: ISafeTransfer

## Hierarchy

- `Instance`<typeof [`SafeTransfer`](../modules.md#safetransfer)\>

  ↳ **`ISafeTransfer`**

## Table of contents

### Properties

- [[$nonEmptyObject]](ISafeTransfer.md#[$nonemptyobject])
- [[$stateTreeNodeType]](ISafeTransfer.md#[$statetreenodetype])
- [address](ISafeTransfer.md#address)
- [fees](ISafeTransfer.md#fees)
- [feesFormula](ISafeTransfer.md#feesformula)
- [reward](ISafeTransfer.md#reward)
- [rewardFormula](ISafeTransfer.md#rewardformula)
- [synced](ISafeTransfer.md#synced)

### Methods

- [setData](ISafeTransfer.md#setdata)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

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

### fees

• **fees**: (`_value`: `string`) => ``"0"``

#### Type declaration

▸ (`_value`): ``"0"``

##### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

##### Returns

``"0"``

#### Inherited from

Instance.fees

___

### feesFormula

• **feesFormula**: `string`

#### Inherited from

Instance.feesFormula

___

### reward

• **reward**: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``

#### Type declaration

▸ (`_value`, `_stakingValue`, `_fees`): ``"0"``

##### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |
| `_stakingValue` | `string` |
| `_fees` | `string` |

##### Returns

``"0"``

#### Inherited from

Instance.reward

___

### rewardFormula

• **rewardFormula**: `string`

#### Inherited from

Instance.rewardFormula

___

### synced

• **synced**: `boolean`

#### Inherited from

Instance.synced

## Methods

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ISafeTransferItem`](ISafeTransferItem.md) |

#### Returns

`void`

#### Inherited from

Instance.setData

#### Defined in

dev/stores/account.ts:232
