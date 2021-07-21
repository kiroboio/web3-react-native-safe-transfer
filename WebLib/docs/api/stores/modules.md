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
- [FetchCmdParams](interfaces/FetchCmdParams.md)
- [IAccount](interfaces/IAccount.md)
- [IApprovedCmd](interfaces/IApprovedCmd.md)
- [ICmdActions](interfaces/ICmdActions.md)
- [ICmdBase](interfaces/ICmdBase.md)
- [ICmdStatus](interfaces/ICmdStatus.md)
- [ICollectCmd](interfaces/ICollectCmd.md)
- [ICommands](interfaces/ICommands.md)
- [IConnectCmd](interfaces/IConnectCmd.md)
- [IDepositCmd](interfaces/IDepositCmd.md)
- [IDeviceInfo](interfaces/IDeviceInfo.md)
- [IDisconnectCmd](interfaces/IDisconnectCmd.md)
- [IERC20TokenItem](interfaces/IERC20TokenItem.md)
- [IERC20Tokens](interfaces/IERC20Tokens.md)
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
- [ITransfer](interfaces/ITransfer.md)
- [ITransferItem](interfaces/ITransferItem.md)
- [ITransferItems](interfaces/ITransferItems.md)
- [ITransferToken](interfaces/ITransferToken.md)
- [IViews](interfaces/IViews.md)
- [IWallet](interfaces/IWallet.md)
- [IWalletAddressCmd](interfaces/IWalletAddressCmd.md)
- [RetrieveCmdParams](interfaces/RetrieveCmdParams.md)

## Type aliases

### Currency

Ƭ **Currency**: ``"ETH"`` \| ``"KIRO"`` \| ``"USDT"`` \| ``"BNB"`` \| ``"UNI"`` \| ``"LINK"`` \| ``"SUSHI"`` \| ``"USDC"`` \| ``"WBTC"`` \| ``"DAI"``

## Variables

### Account

• `Const` **Account**: `IModelType`<`Object`, { `ERC20TokensContract`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `approveToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `getERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `approve`: () => `void` ; `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `collect`: (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` ; `connect`: (`connector`: `Connectors`) => `void` ; `deposit`: (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` ; `disconnect`: () => `void` ; `retrieve`: (`__namedParameters`: { `id`: `string`  }) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### ApprovedCmd

• `Const` **ApprovedCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>

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

### Token

• `Const` **Token**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfer

• `Const` **Transfer**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfers

• `Const` **Transfers**: `IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>

___

### accountStore

• `Const` **accountStore**: [`IAccount`](interfaces/IAccount.md)
