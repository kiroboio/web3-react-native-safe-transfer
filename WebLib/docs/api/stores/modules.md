---
id: "modules"
title: "@kiroboio/web3-react-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [CollectCmdParams](interfaces/CollectCmdParams.md)
- [DepositCmdParams](interfaces/DepositCmdParams.md)
- [DeviceInfoData](interfaces/DeviceInfoData.md)
- [ERC20TokenItem](interfaces/ERC20TokenItem.md)
- [FetchCmdParams](interfaces/FetchCmdParams.md)
- [IAccount](interfaces/IAccount.md)
- [IApprovedCmd](interfaces/IApprovedCmd.md)
- [ICmdActions](interfaces/ICmdActions.md)
- [ICmdBase](interfaces/ICmdBase.md)
- [ICmdStatus](interfaces/ICmdStatus.md)
- [ICollectCmd](interfaces/ICollectCmd.md)
- [ICommand](interfaces/ICommand.md)
- [ICommands](interfaces/ICommands.md)
- [IConnectCmd](interfaces/IConnectCmd.md)
- [IDepositCmd](interfaces/IDepositCmd.md)
- [IDeviceInfo](interfaces/IDeviceInfo.md)
- [IDisconnectCmd](interfaces/IDisconnectCmd.md)
- [IERC20TokenItem](interfaces/IERC20TokenItem.md)
- [IERC20Tokens](interfaces/IERC20Tokens.md)
- [IEthAddressPrimitive](interfaces/IEthAddressPrimitive.md)
- [IFetchCmd](interfaces/IFetchCmd.md)
- [IKiroToken](interfaces/IKiroToken.md)
- [IKiroTokenItem](interfaces/IKiroTokenItem.md)
- [ILists](interfaces/ILists.md)
- [IMnemonic](interfaces/IMnemonic.md)
- [IRetrieveCmd](interfaces/IRetrieveCmd.md)
- [ISafeTransfer](interfaces/ISafeTransfer.md)
- [ISafeTransferItem](interfaces/ISafeTransferItem.md)
- [IStaking](interfaces/IStaking.md)
- [IStakingItem](interfaces/IStakingItem.md)
- [ISwapDepositCmd](interfaces/ISwapDepositCmd.md)
- [ITransfer](interfaces/ITransfer.md)
- [ITransferItem](interfaces/ITransferItem.md)
- [ITransferItems](interfaces/ITransferItems.md)
- [ITransferToken](interfaces/ITransferToken.md)
- [IViews](interfaces/IViews.md)
- [IWallet](interfaces/IWallet.md)
- [IWalletAddressCmd](interfaces/IWalletAddressCmd.md)
- [RetrieveCmdParams](interfaces/RetrieveCmdParams.md)
- [swapDepositCmdParams](interfaces/swapDepositCmdParams.md)

## Type aliases

### Currency

Ƭ **Currency**: ``"ETH"`` \| ``"KIRO"`` \| ``"USDT"`` \| ``"BNB"`` \| ``"UNI"`` \| ``"LINK"`` \| ``"SUSHI"`` \| ``"USDC"`` \| ``"WBTC"`` \| ``"DAI"``

___

### IConnectData

Ƭ **IConnectData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `connector` | `Connectors` |
| `isConnected` | `boolean` |

## Variables

### Account

• `Const` **Account**: `IModelType`<`Object`, { `ERC20TokensContract`:  ; `approve`:  ; `collect`:  ; `connect`:  ; `deposit`:  ; `disconnect`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `retrieve`:  ; `safeSwapContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `swap`:  ; `swapDeposit`:  ; `swapRetrieve`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setCanGetRewards`: (`canGetRewards`: `boolean`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDesiredCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setFormType`: (`formType`: `string`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeSwapContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setSwapperAddress`: (`address`: `string`) => `void` ; `setSwapperBalance`: (`balance`: `string`) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### ApprovedCmd

• `Const` **ApprovedCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `contractAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`contractAddress`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### CmdStatus

• `Const` **CmdStatus**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### CollectCmd

• `Const` **CollectCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](interfaces/CollectCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### ConnectCmd

• `Const` **ConnectCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `connector`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `isConnected`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### DepositCmd

• `Const` **DepositCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](interfaces/DepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### DeviceInfo

• `Const` **DeviceInfo**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### DisconnectCmd

• `Const` **DisconnectCmd**: `IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### ERC20Token

• `Const` **ERC20Token**: `IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### ERC20Tokens

• `Const` **ERC20Tokens**: `IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### FetchCmd

• `Const` **FetchCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](interfaces/FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### KiroToken

• `Const` **KiroToken**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### RetrieveCmd

• `Const` **RetrieveCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](interfaces/RetrieveCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### SafeTransfer

• `Const` **SafeTransfer**: `IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### Staking

• `Const` **Staking**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Swap

• `Const` **Swap**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Token

• `Const` **Token**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfer

• `Const` **Transfer**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfers

• `Const` **Transfers**: `IModelType`<`Object`, { `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>

___

### accountStore

• `Const` **accountStore**: [`IAccount`](interfaces/IAccount.md)

___

### swapDepositCmd

• `Const` **swapDepositCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `desiredValue`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`swapDepositCmdParams`](interfaces/swapDepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>
