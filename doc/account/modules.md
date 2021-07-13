[@kiroboio/web3-react-safe-transfer](README.md) / Exports

# @kiroboio/web3-react-safe-transfer

## Table of contents

### Interfaces

- [CollectCmdParams](interfaces/CollectCmdParams.md)
- [DepositCmdParams](interfaces/DepositCmdParams.md)
- [DeviceInfoData](interfaces/DeviceInfoData.md)
- [ERC20TokenItem](interfaces/ERC20TokenItem.md)
- [FetchCmdParams](interfaces/FetchCmdParams.md)
- [IAccount](interfaces/IAccount.md)
- [IApprovedCmd](interfaces/IApprovedCmd.md)
- [ICmdActions](interfaces/ICmdActions.md)
- [ICmdStatus](interfaces/ICmdStatus.md)
- [ICollectCmd](interfaces/ICollectCmd.md)
- [IConnectCmd](interfaces/IConnectCmd.md)
- [IDepositCmd](interfaces/IDepositCmd.md)
- [IDeviceInfo](interfaces/IDeviceInfo.md)
- [IDisconnectCmd](interfaces/IDisconnectCmd.md)
- [IERC20Tokens](interfaces/IERC20Tokens.md)
- [IFetchCmd](interfaces/IFetchCmd.md)
- [IKiroToken](interfaces/IKiroToken.md)
- [IKiroTokenItem](interfaces/IKiroTokenItem.md)
- [ISafeTransfer](interfaces/ISafeTransfer.md)
- [ISafeTransferItem](interfaces/ISafeTransferItem.md)
- [IStaking](interfaces/IStaking.md)
- [IStakingItem](interfaces/IStakingItem.md)
- [ITransfer](interfaces/ITransfer.md)
- [ITransferItem](interfaces/ITransferItem.md)
- [ITransferToken](interfaces/ITransferToken.md)
- [IWallet](interfaces/IWallet.md)
- [IWeb3Provider](interfaces/IWeb3Provider.md)
- [RetrieveCmdParams](interfaces/RetrieveCmdParams.md)

### Type aliases

- [Currency](modules.md#currency)
- [ITransfers](modules.md#itransfers)

### Variables

- [Account](modules.md#account)
- [ApprovedCmd](modules.md#approvedcmd)
- [CmdStatus](modules.md#cmdstatus)
- [CollectCmd](modules.md#collectcmd)
- [ConnectCmd](modules.md#connectcmd)
- [DepositCmd](modules.md#depositcmd)
- [DeviceInfo](modules.md#deviceinfo)
- [DisconnectCmd](modules.md#disconnectcmd)
- [ERC20Token](modules.md#erc20token)
- [ERC20Tokens](modules.md#erc20tokens)
- [FetchCmd](modules.md#fetchcmd)
- [KiroToken](modules.md#kirotoken)
- [RetrieveCmd](modules.md#retrievecmd)
- [SafeTransfer](modules.md#safetransfer)
- [Staking](modules.md#staking)
- [Token](modules.md#token)
- [Transfer](modules.md#transfer)
- [Transfers](modules.md#transfers)
- [Web3Provider](modules.md#web3provider)
- [accountStore](modules.md#accountstore)
- [web3ProviderStore](modules.md#web3providerstore)

## Type aliases

### Currency

Ƭ **Currency**: ``"ETH"`` \| ``"KIRO"`` \| ``"USDT"`` \| ``"BNB"`` \| ``"UNI"`` \| ``"LINK"`` \| ``"SUSHI"`` \| ``"USDC"`` \| ``"WBTC"`` \| ``"DAI"``

#### Defined in

dev/stores/account.ts:37

___

### ITransfers

Ƭ **ITransfers**: `Instance`<typeof [`Transfers`](modules.md#transfers)\>

#### Defined in

dev/stores/account.ts:1025

## Variables

### Account

• `Const` **Account**: `IModelType`<`Object`, { `ERC20TokensContract`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `approve`: () => `void` ; `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `collect`: (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` ; `connect`: (`connector`: `Connectors`) => `void` ; `deposit`: (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` ; `disconnect`: () => `void` ; `retrieve`: (`__namedParameters`: { `id`: `string`  }) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:749

___

### ApprovedCmd

• `Const` **ApprovedCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:427

___

### CmdStatus

• `Const` **CmdStatus**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:105

___

### CollectCmd

• `Const` **CollectCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](interfaces/CollectCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:522

___

### ConnectCmd

• `Const` **ConnectCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `connector`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `isConnected`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:181

___

### DepositCmd

• `Const` **DepositCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](interfaces/DepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:453

___

### DeviceInfo

• `Const` **DeviceInfo**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:386

___

### DisconnectCmd

• `Const` **DisconnectCmd**: `IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:203

___

### ERC20Token

• `Const` **ERC20Token**: `IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:310

___

### ERC20Tokens

• `Const` **ERC20Tokens**: `IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:343

___

### FetchCmd

• `Const` **FetchCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](interfaces/FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:484

___

### KiroToken

• `Const` **KiroToken**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:289

___

### RetrieveCmd

• `Const` **RetrieveCmd**: `IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](interfaces/RetrieveCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:504

___

### SafeTransfer

• `Const` **SafeTransfer**: `IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:220

___

### Staking

• `Const` **Staking**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:273

___

### Token

• `Const` **Token**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:70

___

### Transfer

• `Const` **Transfer**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:79

___

### Transfers

• `Const` **Transfers**: `IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:538

___

### Web3Provider

• `Const` **Web3Provider**: `IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>

#### Defined in

dev/stores/account.ts:657

___

### accountStore

• `Const` **accountStore**: { `ERC20TokensMap`: `IMSTMap`<`IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\> ; `active`: `boolean` ; `address`: `string` ; `allowance`: `string` ; `approvedCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; amount: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `balance`: `string` ; `block`: `number` ; `chainId`: `number` ; `collectCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; id: string; key: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](interfaces/CollectCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](interfaces/CollectCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `connectCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; connector: string; isConnected: boolean; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `connector`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `isConnected`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `currency`: { address: string; name: string; symbol: string; decimals: number; balance: string; rate: number; } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `depositCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; ... 6 more ...; message: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](interfaces/DepositCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](interfaces/DepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `deviceInfo`: { isMobile: boolean; haveMetaMask: boolean; ethereumProvider: boolean; loggedIn: boolean; } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `disconnectCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `factor`: `number` ; `gasPriceMap`: `IMSTMap`<`ISimpleType`<`string`\>\> & `IStateTreeNode`<`IMapType`<`ISimpleType`<`string`\>\>\> ; `incoming`: { name: string; map: IMSTMap<IModelType<{ id: ISimpleType<string\>; txid: ISimpleType<string\>; from: ISimpleType<string\>; to: ISimpleType<string\>; ... 8 more ...; token: IOptionalIType<...\>; }, { ...; }, \_NotCustomized, \_NotCustomized\>\> & IStateTreeNode<...\>; count: number; fetched: number; address: string; fetchCmd:... & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `kiroTokenMap`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `left`: `number` ; `maxRewards`: `number` ; `outgoing`: { name: string; map: IMSTMap<IModelType<{ id: ISimpleType<string\>; txid: ISimpleType<string\>; from: ISimpleType<string\>; to: ISimpleType<string\>; ... 8 more ...; token: IOptionalIType<...\>; }, { ...; }, \_NotCustomized, \_NotCustomized\>\> & IStateTreeNode<...\>; count: number; fetched: number; address: string; fetchCmd:... & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `rate`: `number` ; `retrieveCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; id: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](interfaces/RetrieveCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](interfaces/RetrieveCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `safeTransferMap`: `IMSTMap`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\> ; `stakingBalance`: `string` ; `stakingMap`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `tokenBalance`: `string` ; `transfers`: { name: string; map: IMSTMap<IModelType<{ id: ISimpleType<string\>; txid: ISimpleType<string\>; from: ISimpleType<string\>; to: ISimpleType<string\>; ... 8 more ...; token: IOptionalIType<...\>; }, { ...; }, \_NotCustomized, \_NotCustomized\>\> & IStateTreeNode<...\>; count: number; fetched: number; address: string; fetchCmd:... & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](interfaces/ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](interfaces/ITransferItem.md)) => `boolean`) => [`ITransferItem`](interfaces/ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](interfaces/ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `wallet`: { mnemonic: { data: string; clearCmd: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; removeCmd: { ...; } & ... 2 more ... & IStateTreeNode<...\>... & `NonEmptyObject` & { `addWalletAddress`: () => `void` ; `changeMnemonic`: (`mnemonic`: `string`) => `void` ; `clearMnemonic`: () => `void` ; `generateMnemonic`: () => `void` ; `getMnemonic`: () => `string` ; `removeMnemonic`: () => `void` ; `removeWalletAddress`: (`address`: `string`) => `void` ; `setAccounts`: (`accounts`: `string`[]) => `void` ; `setActiveAccount`: (`activeAccount`: `undefined` \| `string`) => `void` ; `setMnemonic`: (`mnemonic?`: `string`) => `void` ; `tryRestoreMnemonicFromStorage`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `ERC20TokensContract`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `approve`: () => `void` ; `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `collect`: (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` ; `connect`: (`connector`: `Connectors`) => `void` ; `deposit`: (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` ; `disconnect`: () => `void` ; `retrieve`: (`__namedParameters`: { `id`: `string`  }) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `ERC20TokensContract`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `approve`: () => `void` ; `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `collect`: (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` ; `connect`: (`connector`: `Connectors`) => `void` ; `deposit`: (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` ; `disconnect`: () => `void` ; `retrieve`: (`__namedParameters`: { `id`: `string`  }) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](interfaces/DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](interfaces/ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](interfaces/IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](interfaces/ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](interfaces/IStakingItem.md)) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>

#### Defined in

dev/stores/account.ts:1017

___

### web3ProviderStore

• `Const` **web3ProviderStore**: { `balance`: `string` ; `block`: `number`  } & `NonEmptyObject` & { `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>

#### Defined in

dev/stores/account.ts:1018
