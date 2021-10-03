---
id: "modules"
title: "@kiroboio/web3-react-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [THEMES](enums/THEMES.md)

## Interfaces

- [CollectCmdParams](interfaces/CollectCmdParams.md)
- [DepositCmdParams](interfaces/DepositCmdParams.md)
- [DeviceInfoData](interfaces/DeviceInfoData.md)
- [ERC20TokenItem](interfaces/ERC20TokenItem.md)
- [FetchCmdParams](interfaces/FetchCmdParams.md)
- [IAccount](interfaces/IAccount.md)
- [IAddress](interfaces/IAddress.md)
- [IApproveData](interfaces/IApproveData.md)
- [IApprovedCmd](interfaces/IApprovedCmd.md)
- [ICSVAddress](interfaces/ICSVAddress.md)
- [ICmdActions](interfaces/ICmdActions.md)
- [ICmdBase](interfaces/ICmdBase.md)
- [ICmdStatus](interfaces/ICmdStatus.md)
- [ICollectCmd](interfaces/ICollectCmd.md)
- [ICommand](interfaces/ICommand.md)
- [ICommands](interfaces/ICommands.md)
- [IConnectCmd](interfaces/IConnectCmd.md)
- [IConnectData](interfaces/IConnectData.md)
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
- [IRetrieveData](interfaces/IRetrieveData.md)
- [ISafeTransfer](interfaces/ISafeTransfer.md)
- [ISafeTransferItem](interfaces/ISafeTransferItem.md)
- [ISendCmdCmd](interfaces/ISendCmdCmd.md)
- [IStaking](interfaces/IStaking.md)
- [IStakingItem](interfaces/IStakingItem.md)
- [ISwapDepositCmd](interfaces/ISwapDepositCmd.md)
- [ITransfer](interfaces/ITransfer.md)
- [ITransferItem](interfaces/ITransferItem.md)
- [ITransferItems](interfaces/ITransferItems.md)
- [ITransferToken](interfaces/ITransferToken.md)
- [IUpdateSwapCompareCmdParams](interfaces/IUpdateSwapCompareCmdParams.md)
- [IUpdateSwapRateParams](interfaces/IUpdateSwapRateParams.md)
- [IViews](interfaces/IViews.md)
- [IWallet](interfaces/IWallet.md)
- [IWalletAddressCmd](interfaces/IWalletAddressCmd.md)
- [RetrieveCmdParams](interfaces/RetrieveCmdParams.md)
- [SendCmdParams](interfaces/SendCmdParams.md)
- [swapDepositCmdParams](interfaces/swapDepositCmdParams.md)

## Type aliases

### Currency

Ƭ **Currency**: ``"ETH"`` \| ``"KIRO"`` \| ``"USDT"`` \| ``"BNB"`` \| ``"UNI"`` \| ``"LINK"`` \| ``"SUSHI"`` \| ``"USDC"`` \| ``"WBTC"`` \| ``"DAI"``

___

### ITransfers

Ƭ **ITransfers**: [`ITransferItems`](interfaces/ITransferItems.md)

___

### Theme

Ƭ **Theme**: [`THEMES`](enums/THEMES.md)

## Variables

### Account

• `Const` **Account**: `IModelType`<`Object`, { `ERC20TokensContract`:  ; `ERC20TokensMainContract`:  ; `approve`:  ; `collect`:  ; `connect`:  ; `deposit`:  ; `disconnect`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `retrieve`:  ; `safeSwapContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `swap`:  ; `swapDeposit`:  ; `swapRetrieve`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](interfaces/IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setCanGetRewards`: (`canGetRewards`: `boolean`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDesiredCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setFormType`: (`formType`: `string`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeSwapContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setSwapperAddress`: (`address`: `string`) => `void` ; `setSwapperBalance`: (`balance`: `string`) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### AddressBookModel

• `Const` **AddressBookModel**: `IModelType`<`Object`, { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>

___

### ApprovedCmd

• `Const` **ApprovedCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `contractAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`contractAddress`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### CmdAddManyBase

• `Const` **CmdAddManyBase**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### CmdBase

• `Const` **CmdBase**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

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

### RateCmd

• `Const` **RateCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `rate`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void` ; `setRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### RetrieveCmd

• `Const` **RetrieveCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](interfaces/RetrieveCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### SafeTransfer

• `Const` **SafeTransfer**: `IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### SendCmd

• `Const` **SendCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`SendCmdParams`](interfaces/SendCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### Staking

• `Const` **Staking**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Swap

• `Const` **Swap**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### SwapCompareCmd

• `Const` **SwapCompareCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `inputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `inputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `uniswapOutputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](interfaces/IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### SwapOutputRateCmd

• `Const` **SwapOutputRateCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `inputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `inputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputRate`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](interfaces/IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### SwapRates

• `Const` **SwapRates**: `IModelType`<`Object`, { `compare`:  ; `currencyUsdRate`:  ; `desiredCurrencyUsdRate`:  ; `rate`:   } & { `setCurrentCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setDesiredCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### Token

• `Const` **Token**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfer

• `Const` **Transfer**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

___

### Transfers

• `Const` **Transfers**: `IModelType`<`Object`, { `export`:  ; `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `addFetchedAmount`: (`amount`: `number`) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setCount`: (`count`: `number`) => `void` ; `setFetched`: (`count`: `number`) => `void` ; `setFirstFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setLastFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setName`: (`__namedParameters`: { `name`: `string`  }) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>

___

### UI

• `Const` **UI**: `IModelType`<`Object`, { `setTheme`: (`theme`: [`THEMES`](enums/THEMES.md)) => `void` ; `toggleTheme`: () => `void`  } & { `isDarkTheme`:   }, `_NotCustomized`, `_NotCustomized`\>

___

### accountStore

• `Const` **accountStore**: [`IAccount`](interfaces/IAccount.md)

___

### addressBookStore

• `Const` **addressBookStore**: { `addCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: { ...; } & ... 1 more ... & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addManyCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; replace: boolean; mergeAnyway: boolean; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; addresses: IMSTArray<...\> & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  } & { `mergeAnyway`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `replace`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `addresses`: `IOptionalIType`<`IArrayType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addresses`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `removeAllCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `removeCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `setCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `updateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>\>

___

### swapDepositCmd

• `Const` **swapDepositCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `desiredValue`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`swapDepositCmdParams`](interfaces/swapDepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

___

### tokens

• `Const` **tokens**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BNB` | `Object` |
| `BNB.address` | `Object` |
| `BNB.address.1` | `string` |
| `BNB.address.4` | `string` |
| `BNB.decimals` | `number` |
| `BNB.label` | `string` |
| `BNB.symbol` | `string` |
| `DAI` | `Object` |
| `DAI.address` | `Object` |
| `DAI.address.1` | `string` |
| `DAI.address.4` | `string` |
| `DAI.decimals` | `number` |
| `DAI.label` | `string` |
| `DAI.symbol` | `string` |
| `KIRO` | `Object` |
| `KIRO.address` | `Object` |
| `KIRO.address.1` | `string` |
| `KIRO.address.4` | `string` |
| `KIRO.decimals` | `number` |
| `KIRO.label` | `string` |
| `KIRO.symbol` | `string` |
| `LINK` | `Object` |
| `LINK.address` | `Object` |
| `LINK.address.1` | `string` |
| `LINK.address.4` | `string` |
| `LINK.decimals` | `number` |
| `LINK.label` | `string` |
| `LINK.symbol` | `string` |
| `MANA` | `Object` |
| `MANA.address` | `Object` |
| `MANA.address.1` | `string` |
| `MANA.address.4` | `string` |
| `MANA.decimals` | `number` |
| `MANA.label` | `string` |
| `MANA.symbol` | `string` |
| `SUSHI` | `Object` |
| `SUSHI.address` | `Object` |
| `SUSHI.address.1` | `string` |
| `SUSHI.address.4` | `string` |
| `SUSHI.decimals` | `number` |
| `SUSHI.label` | `string` |
| `SUSHI.symbol` | `string` |
| `UNI` | `Object` |
| `UNI.address` | `Object` |
| `UNI.address.1` | `string` |
| `UNI.address.4` | `string` |
| `UNI.decimals` | `number` |
| `UNI.label` | `string` |
| `UNI.symbol` | `string` |
| `USDC` | `Object` |
| `USDC.address` | `Object` |
| `USDC.address.1` | `string` |
| `USDC.address.4` | `string` |
| `USDC.decimals` | `number` |
| `USDC.label` | `string` |
| `USDC.symbol` | `string` |
| `USDT` | `Object` |
| `USDT.address` | `Object` |
| `USDT.address.1` | `string` |
| `USDT.address.4` | `string` |
| `USDT.decimals` | `number` |
| `USDT.label` | `string` |
| `USDT.symbol` | `string` |
| `WBTC` | `Object` |
| `WBTC.address` | `Object` |
| `WBTC.address.1` | `string` |
| `WBTC.address.4` | `string` |
| `WBTC.decimals` | `number` |
| `WBTC.label` | `string` |
| `WBTC.symbol` | `string` |

___

### uiStore

• `Const` **uiStore**: { `theme`: `number`  } & `NonEmptyObject` & { `setTheme`: (`theme`: [`THEMES`](enums/THEMES.md)) => `void` ; `toggleTheme`: () => `void`  } & { `isDarkTheme`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `setTheme`: (`theme`: [`THEMES`](enums/THEMES.md)) => `void` ; `toggleTheme`: () => `void`  } & { `isDarkTheme`:   }, `_NotCustomized`, `_NotCustomized`\>\>

## Functions

### CmdActions

▸ `Const` **CmdActions**(`self`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `Object` |
| `self.is` | `MobxClearInstance`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `clearErrors` | () => `void` |
| `done` | () => `void` |
| `failed` | (`__namedParameters`: { `message`: `string`  }) => `void` |
| `start` | () => `void` |

___

### createCommand

▸ `Const` **createCommand**(`is`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| ``get` **done**(): `boolean`` | `Object` |
| ``get` **failed**(): `boolean`` | `Object` |
| ``get` **ready**(): `boolean`` | `Object` |
| ``get` **running**(): `boolean`` | `Object` |
| ``get` **withFailMessage**(): `string`` | `Object` |
| ``get` **withId**(): `number`` | `Object` |

___

### getChainName

▸ `Const` **getChainName**(`chainId`): ``"main"`` \| ``"rinkeby"`` \| ``""``

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `undefined` \| `number` |

#### Returns

``"main"`` \| ``"rinkeby"`` \| ``""``
