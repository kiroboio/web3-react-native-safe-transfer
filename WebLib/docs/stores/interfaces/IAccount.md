---
id: "IAccount"
title: "Interface: IAccount"
sidebar_label: "IAccount"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearAccount`

  ↳ **`IAccount`**

## Properties

### ERC20TokensContract

• **ERC20TokensContract**: [`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Defined in

dev/stores/account.ts:1094

___

### ERC20TokensMap

• **ERC20TokensMap**: `Map`<`string`, [`IERC20TokenItem`](IERC20TokenItem.md)\>

#### Defined in

dev/stores/account.ts:1091

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

• **approvedCmd**: [`IApprovedCmd`](IApprovedCmd.md)

#### Overrides

MobxClearAccount.approvedCmd

#### Defined in

dev/stores/account.ts:1079

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

• **collectCmd**: [`ICollectCmd`](ICollectCmd.md)

#### Overrides

MobxClearAccount.collectCmd

#### Defined in

dev/stores/account.ts:1082

___

### connectCmd

• **connectCmd**: [`IConnectCmd`](IConnectCmd.md)

#### Overrides

MobxClearAccount.connectCmd

#### Defined in

dev/stores/account.ts:1083

___

### currency

• **currency**: [`IERC20TokenItem`](IERC20TokenItem.md)

#### Defined in

dev/stores/account.ts:1092

___

### depositCmd

• **depositCmd**: [`IDepositCmd`](IDepositCmd.md)

#### Overrides

MobxClearAccount.depositCmd

#### Defined in

dev/stores/account.ts:1080

___

### deviceInfo

• **deviceInfo**: [`IDeviceInfo`](IDeviceInfo.md)

#### Overrides

MobxClearAccount.deviceInfo

#### Defined in

dev/stores/account.ts:1093

___

### disconnectCmd

• **disconnectCmd**: [`IDisconnectCmd`](IDisconnectCmd.md)

#### Overrides

MobxClearAccount.disconnectCmd

#### Defined in

dev/stores/account.ts:1084

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

• **gasPriceMap**: `IMSTMap`<`ISimpleType`<`string`\>\> & `IStateTreeNode`<`IMapType`<`ISimpleType`<`string`\>\>\>

#### Inherited from

MobxClearAccount.gasPriceMap

___

### incoming

• **incoming**: [`ITransferItems`](ITransferItems.md)

#### Overrides

MobxClearAccount.incoming

#### Defined in

dev/stores/account.ts:1077

___

### kiroTokenContract

• **kiroTokenContract**: `undefined` \| [`IKiroToken`](IKiroToken.md)

#### Defined in

dev/stores/account.ts:1090

___

### kiroTokenMap

• **kiroTokenMap**: `Map`<`string`, [`IKiroToken`](IKiroToken.md)\>

#### Defined in

dev/stores/account.ts:1089

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

• **outgoing**: [`ITransferItems`](ITransferItems.md)

#### Overrides

MobxClearAccount.outgoing

#### Defined in

dev/stores/account.ts:1078

___

### rate

• **rate**: `number`

#### Inherited from

MobxClearAccount.rate

___

### retrieveCmd

• **retrieveCmd**: [`IRetrieveCmd`](IRetrieveCmd.md)

#### Overrides

MobxClearAccount.retrieveCmd

#### Defined in

dev/stores/account.ts:1081

___

### safeTransferContract

• **safeTransferContract**: `undefined` \| [`ISafeTransfer`](ISafeTransfer.md)

#### Defined in

dev/stores/account.ts:1086

___

### safeTransferMap

• **safeTransferMap**: `Map`<`string`, [`ISafeTransfer`](ISafeTransfer.md)\>

#### Defined in

dev/stores/account.ts:1085

___

### stakingBalance

• **stakingBalance**: `string`

#### Inherited from

MobxClearAccount.stakingBalance

___

### stakingContract

• **stakingContract**: `undefined` \| [`IStaking`](IStaking.md)

#### Defined in

dev/stores/account.ts:1088

___

### stakingMap

• **stakingMap**: `Map`<`string`, [`IStaking`](IStaking.md)\>

#### Defined in

dev/stores/account.ts:1087

___

### tokenBalance

• **tokenBalance**: `string`

#### Inherited from

MobxClearAccount.tokenBalance

___

### transfers

• **transfers**: [`ITransferItems`](ITransferItems.md)

#### Overrides

MobxClearAccount.transfers

#### Defined in

dev/stores/account.ts:1076

___

### wallet

• **wallet**: [`IWallet`](IWallet.md)

#### Overrides

MobxClearAccount.wallet

#### Defined in

dev/stores/account.ts:1075

## Methods

### ERC20TokenList

▸ **ERC20TokenList**(`chainName`): [`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

[`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Defined in

dev/stores/account.ts:1095

___

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearAccount.approve

#### Defined in

dev/stores/account.ts:888

___

### approvedToken

▸ **approvedToken**(`symbol`, `amount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `amount` | `string` |

#### Returns

`boolean`

#### Inherited from

MobxClearAccount.approvedToken

#### Defined in

dev/stores/account.ts:849

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

#### Defined in

dev/stores/account.ts:1037

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

#### Defined in

dev/stores/account.ts:935

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

#### Defined in

dev/stores/account.ts:942

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

#### Defined in

dev/stores/account.ts:900

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearAccount.disconnect

#### Defined in

dev/stores/account.ts:945

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

#### Defined in

dev/stores/account.ts:932

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

#### Defined in

dev/stores/account.ts:951

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

#### Defined in

dev/stores/account.ts:948

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

#### Defined in

dev/stores/account.ts:978

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

#### Defined in

dev/stores/account.ts:957

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

#### Defined in

dev/stores/account.ts:966

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

#### Defined in

dev/stores/account.ts:954

___

### setCurrency

▸ **setCurrency**(`currency`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | [`IERC20TokenItem`](IERC20TokenItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setCurrency

#### Defined in

dev/stores/account.ts:972

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

#### Defined in

dev/stores/account.ts:975

___

### setDeviceInfo

▸ **setDeviceInfo**(`deviceInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceInfo` | [`DeviceInfoData`](DeviceInfoData.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setDeviceInfo

#### Defined in

dev/stores/account.ts:981

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

#### Defined in

dev/stores/account.ts:1031

___

### setERC20TokenContract

▸ **setERC20TokenContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | [`IERC20TokenItem`](IERC20TokenItem.md)[] |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setERC20TokenContract

#### Defined in

dev/stores/account.ts:1017

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

#### Defined in

dev/stores/account.ts:1034

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

#### Defined in

dev/stores/account.ts:1049

___

### setKiroTokenContract

▸ **setKiroTokenContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | [`IKiroTokenItem`](IKiroTokenItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setKiroTokenContract

#### Defined in

dev/stores/account.ts:1009

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

#### Defined in

dev/stores/account.ts:1046

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

#### Defined in

dev/stores/account.ts:969

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

#### Defined in

dev/stores/account.ts:1042

___

### setSafeTransferContract

▸ **setSafeTransferContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | [`ISafeTransferItem`](ISafeTransferItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setSafeTransferContract

#### Defined in

dev/stores/account.ts:984

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

#### Defined in

dev/stores/account.ts:963

___

### setStakingContract

▸ **setStakingContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | [`IStakingItem`](IStakingItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setStakingContract

#### Defined in

dev/stores/account.ts:1001

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

#### Defined in

dev/stores/account.ts:960

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

#### Defined in

dev/stores/account.ts:857

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

#### Defined in

dev/stores/account.ts:865
