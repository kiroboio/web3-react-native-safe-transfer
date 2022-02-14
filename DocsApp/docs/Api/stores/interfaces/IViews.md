---
id: "IViews"
title: "Interface: IViews"
sidebar_label: "IViews"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`IViews`**

  ↳ [`IAccount`](IAccount)

## Properties

### ERC20TokensContract

• **ERC20TokensContract**: [`IERC20TokenItem`](IERC20TokenItem)[]

___

### gasPriceMap

• **gasPriceMap**: `Map`<`string`, `string`\>

___

### kiroTokenContract

• **kiroTokenContract**: `undefined` \| [`IKiroToken`](IKiroToken)

___

### safeTransferContract

• **safeTransferContract**: `undefined` \| [`ISafeTransfer`](ISafeTransfer)

___

### stakingContract

• **stakingContract**: `undefined` \| [`IStaking`](IStaking)

## Methods

### getERC20TokenList

▸ **getERC20TokenList**(`chainName`): [`IERC20TokenItem`](IERC20TokenItem)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

[`IERC20TokenItem`](IERC20TokenItem)[]
