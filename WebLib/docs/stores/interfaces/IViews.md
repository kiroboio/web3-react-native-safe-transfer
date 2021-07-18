---
id: "IViews"
title: "Interface: IViews"
sidebar_label: "IViews"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`IViews`**

  ↳ [`IAccount`](IAccount.md)

## Properties

### ERC20TokensContract

• **ERC20TokensContract**: [`IERC20TokenItem`](IERC20TokenItem.md)[]

___

### gasPriceMap

• **gasPriceMap**: `Map`<`string`, `string`\>

___

### kiroTokenContract

• **kiroTokenContract**: `undefined` \| [`IKiroToken`](IKiroToken.md)

___

### safeTransferContract

• **safeTransferContract**: `undefined` \| [`ISafeTransfer`](ISafeTransfer.md)

___

### stakingContract

• **stakingContract**: `undefined` \| [`IStaking`](IStaking.md)

## Methods

### getERC20TokenList

▸ **getERC20TokenList**(`chainName`): [`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

[`IERC20TokenItem`](IERC20TokenItem.md)[]
