[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ISafeTransfer

# Interface: ISafeTransfer

## Hierarchy

- `MobxClearInstance`<typeof [`SafeTransfer`](../modules.md#safetransfer)\>

  ↳ **`ISafeTransfer`**

## Table of contents

### Properties

- [address](ISafeTransfer.md#address)
- [fees](ISafeTransfer.md#fees)
- [feesFormula](ISafeTransfer.md#feesformula)
- [reward](ISafeTransfer.md#reward)
- [rewardFormula](ISafeTransfer.md#rewardformula)
- [synced](ISafeTransfer.md#synced)

### Methods

- [setData](ISafeTransfer.md#setdata)

## Properties

### address

• **address**: `string`

#### Inherited from

MobxClearInstance.address

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

MobxClearInstance.fees

___

### feesFormula

• **feesFormula**: `string`

#### Inherited from

MobxClearInstance.feesFormula

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

MobxClearInstance.reward

___

### rewardFormula

• **rewardFormula**: `string`

#### Inherited from

MobxClearInstance.rewardFormula

___

### synced

• **synced**: `boolean`

#### Inherited from

MobxClearInstance.synced

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

MobxClearInstance.setData

#### Defined in

dev/stores/account.ts:234
