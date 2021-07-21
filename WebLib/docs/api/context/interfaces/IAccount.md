---
id: "IAccount"
title: "Interface: IAccount"
sidebar_label: "IAccount"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearAccount`

- `ILists`

- `ICommands`

- `IViews`

  ↳ **`IAccount`**

## Properties

### ERC20TokensContract

• **ERC20TokensContract**: `IERC20TokenItem`[]

#### Inherited from

IViews.ERC20TokensContract

___

### ERC20TokensMap

• **ERC20TokensMap**: `Map`<`string`, `IERC20TokenItem`\>

___

### active

• **active**: `boolean`

#### Inherited from

MobxClearAccount.active

___

### address

• **address**: `string`

#### Inherited from

MobxClearAccount.address

___

### allowance

• **allowance**: `string`

#### Inherited from

MobxClearAccount.allowance

___

### approvedCmd

• **approvedCmd**: `IApprovedCmd`

#### Inherited from

ICommands.approvedCmd

___

### balance

• **balance**: `string`

#### Inherited from

MobxClearAccount.balance

___

### block

• **block**: `number`

#### Inherited from

MobxClearAccount.block

___

### chainId

• **chainId**: `number`

#### Inherited from

MobxClearAccount.chainId

___

### collectCmd

• **collectCmd**: `ICollectCmd`

#### Inherited from

ICommands.collectCmd

___

### connectCmd

• **connectCmd**: `IConnectCmd`

#### Inherited from

ICommands.connectCmd

___

### currency

• **currency**: `IERC20TokenItem`

___

### depositCmd

• **depositCmd**: `IDepositCmd`

#### Inherited from

ICommands.depositCmd

___

### deviceInfo

• **deviceInfo**: `IDeviceInfo`

___

### disconnectCmd

• **disconnectCmd**: `IDisconnectCmd`

#### Inherited from

ICommands.disconnectCmd

___

### factor

• **factor**: `number`

#### Inherited from

MobxClearAccount.factor

___

### gasPrice

• **gasPrice**: `string`

#### Inherited from

MobxClearAccount.gasPrice

___

### gasPriceMap

• **gasPriceMap**: `Map`<`string`, `string`\>

#### Inherited from

IViews.gasPriceMap

___

### incoming

• **incoming**: `ITransferItems`

#### Inherited from

ILists.incoming

___

### kiroTokenContract

• **kiroTokenContract**: `undefined` \| `IKiroToken`

#### Inherited from

IViews.kiroTokenContract

___

### kiroTokenMap

• **kiroTokenMap**: `Map`<`string`, `IKiroToken`\>

___

### left

• **left**: `number`

#### Inherited from

MobxClearAccount.left

___

### maxRewards

• **maxRewards**: `number`

#### Inherited from

MobxClearAccount.maxRewards

___

### outgoing

• **outgoing**: `ITransferItems`

#### Inherited from

ILists.outgoing

___

### rate

• **rate**: `number`

#### Inherited from

MobxClearAccount.rate

___

### retrieveCmd

• **retrieveCmd**: `IRetrieveCmd`

#### Inherited from

ICommands.retrieveCmd

___

### safeTransferContract

• **safeTransferContract**: `undefined` \| `ISafeTransfer`

#### Inherited from

IViews.safeTransferContract

___

### safeTransferMap

• **safeTransferMap**: `Map`<`string`, `ISafeTransfer`\>

___

### stakingBalance

• **stakingBalance**: `string`

#### Inherited from

MobxClearAccount.stakingBalance

___

### stakingContract

• **stakingContract**: `undefined` \| `IStaking`

#### Inherited from

IViews.stakingContract

___

### stakingMap

• **stakingMap**: `Map`<`string`, `IStaking`\>

___

### tokenBalance

• **tokenBalance**: `string`

#### Inherited from

MobxClearAccount.tokenBalance

___

### transfers

• **transfers**: `ITransferItems`

#### Inherited from

ILists.transfers

___

### wallet

• **wallet**: `IWallet`

## Methods

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearAccount.approve

___

### approveToken

▸ **approveToken**(`symbol`, `amount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `amount` | `string` |

#### Returns

`boolean`

#### Inherited from

MobxClearAccount.approveToken

___

### clearERC20TokenBalances

▸ **clearERC20TokenBalances**(`chainName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName?` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.clearERC20TokenBalances

___

### collect

▸ **collect**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id` | `string` |
| `__namedParameters.passcode` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.collect

___

### connect

▸ **connect**(`connector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `Connectors` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.connect

___

### deposit

▸ **deposit**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.message?` | `string` |
| `__namedParameters.passcode` | `string` |
| `__namedParameters.to` | `string` |
| `__namedParameters.value` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.deposit

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearAccount.disconnect

___

### getERC20TokenList

▸ **getERC20TokenList**(`chainName`): `IERC20TokenItem`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

`IERC20TokenItem`[]

#### Inherited from

IViews.getERC20TokenList

___

### retrieve

▸ **retrieve**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.retrieve

___

### setActive

▸ **setActive**(`newActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newActive` | `boolean` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setActive

___

### setAddress

▸ **setAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setAddress

___

### setAllowance

▸ **setAllowance**(`allowance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setAllowance

___

### setBalance

▸ **setBalance**(`balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setBalance

___

### setBlock

▸ **setBlock**(`block`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setBlock

___

### setChainId

▸ **setChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setChainId

___

### setCurrency

▸ **setCurrency**(`currency`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `IERC20TokenItem` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setCurrency

___

### setCurrencyBalance

▸ **setCurrencyBalance**(`balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setCurrencyBalance

___

### setDeviceInfo

▸ **setDeviceInfo**(`deviceInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceInfo` | `DeviceInfoData` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setDeviceInfo

___

### setERC20TokenBalance

▸ **setERC20TokenBalance**(`chainName`, `address`, `balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `address` | `string` |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setERC20TokenBalance

___

### setERC20TokenContract

▸ **setERC20TokenContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | `IERC20TokenItem`[] |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setERC20TokenContract

___

### setErc20TokenRate

▸ **setErc20TokenRate**(`chainName`, `address`, `rate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `address` | `string` |
| `rate` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setErc20TokenRate

___

### setGasPrice

▸ **setGasPrice**(`chainName`, `gasPrice`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `gasPrice` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setGasPrice

___

### setKiroTokenContract

▸ **setKiroTokenContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | `IKiroTokenItem` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setKiroTokenContract

___

### setMaxRewards

▸ **setMaxRewards**(`maxRewards`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxRewards` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setMaxRewards

___

### setRate

▸ **setRate**(`newRate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRate` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setRate

___

### setRewardsParams

▸ **setRewardsParams**(`factor`, `left`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |
| `left` | `number` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setRewardsParams

___

### setSafeTransferContract

▸ **setSafeTransferContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | `ISafeTransferItem` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setSafeTransferContract

___

### setStakingBalance

▸ **setStakingBalance**(`balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setStakingBalance

___

### setStakingContract

▸ **setStakingContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | `IStakingItem` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setStakingContract

___

### setTokenBalance

▸ **setTokenBalance**(`balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setTokenBalance

___

### transferFees

▸ **transferFees**(`amount`): ``""`` \| ``"0"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

``""`` \| ``"0"``

#### Inherited from

MobxClearAccount.transferFees

___

### transferReward

▸ **transferReward**(`amount`, `fees`): `number` \| ``""``

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `fees` | `string` |

#### Returns

`number` \| ``""``

#### Inherited from

MobxClearAccount.transferReward