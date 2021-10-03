---
id: "IAccount"
title: "Interface: IAccount"
sidebar_label: "IAccount"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearAccount`

- [`ILists`](ILists.md)

- [`ICommands`](ICommands.md)

- [`IViews`](IViews.md)

  ↳ **`IAccount`**

## Properties

### ERC20TokensContract

• **ERC20TokensContract**: [`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Inherited from

[IViews](IViews.md).[ERC20TokensContract](IViews.md#erc20tokenscontract)

___

### ERC20TokensMainContract

• **ERC20TokensMainContract**: { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Inherited from

MobxClearAccount.ERC20TokensMainContract

___

### ERC20TokensMap

• **ERC20TokensMap**: `Map`<`string`, [`IERC20TokenItem`](IERC20TokenItem.md)\>

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

### approve

• **approve**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`IApproveData`](IApproveData.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`contractAddress`: `string`) => `void` |

#### Inherited from

MobxClearAccount.approve

___

### approvedCmd

• **approvedCmd**: [`IApprovedCmd`](IApprovedCmd.md)

#### Inherited from

[ICommands](ICommands.md).[approvedCmd](ICommands.md#approvedcmd)

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

### canGetRewards

• **canGetRewards**: `boolean`

#### Inherited from

MobxClearAccount.canGetRewards

___

### chainId

• **chainId**: `number`

#### Inherited from

MobxClearAccount.chainId

___

### collect

• **collect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`CollectCmdParams`](CollectCmdParams.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` |

#### Inherited from

MobxClearAccount.collect

___

### collectCmd

• **collectCmd**: [`ICollectCmd`](ICollectCmd.md)

#### Inherited from

[ICommands](ICommands.md).[collectCmd](ICommands.md#collectcmd)

___

### connect

• **connect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`IConnectData`](IConnectData.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`connector`: `Connectors`) => `void` |

#### Inherited from

MobxClearAccount.connect

___

### connectCmd

• **connectCmd**: [`IConnectCmd`](IConnectCmd.md)

#### Inherited from

[ICommands](ICommands.md).[connectCmd](ICommands.md#connectcmd)

___

### currency

• **currency**: [`IERC20TokenItem`](IERC20TokenItem.md)

___

### deposit

• **deposit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`DepositCmdParams`](DepositCmdParams.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` |

#### Inherited from

MobxClearAccount.deposit

___

### depositCmd

• **depositCmd**: [`IDepositCmd`](IDepositCmd.md)

#### Inherited from

[ICommands](ICommands.md).[depositCmd](ICommands.md#depositcmd)

___

### desiredCurrency

• **desiredCurrency**: [`IERC20TokenItem`](IERC20TokenItem.md)

___

### deviceInfo

• **deviceInfo**: [`IDeviceInfo`](IDeviceInfo.md)

___

### disconnect

• **disconnect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | () => `void` |

#### Inherited from

MobxClearAccount.disconnect

___

### disconnectCmd

• **disconnectCmd**: [`IDisconnectCmd`](IDisconnectCmd.md)

#### Inherited from

[ICommands](ICommands.md).[disconnectCmd](ICommands.md#disconnectcmd)

___

### exportHistory

• **exportHistory**: { `address`: `string` ; `count`: `number` ; `exportCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetchCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetched`: `number` ; `firstFetchedBlockNumber`: `number` ; `lastFetchedBlockNumber`: `number` ; `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `name`: `string`  } & `NonEmptyObject` & { `export`:  ; `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `addFetchedAmount`: (`amount`: `number`) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setCount`: (`count`: `number`) => `void` ; `setFetched`: (`count`: `number`) => `void` ; `setFirstFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setLastFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setName`: (`__namedParameters`: { `name`: `string`  }) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `export`:  ; `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `addFetchedAmount`: (`amount`: `number`) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setCount`: (`count`: `number`) => `void` ; `setFetched`: (`count`: `number`) => `void` ; `setFirstFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setLastFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setName`: (`__namedParameters`: { `name`: `string`  }) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearAccount.exportHistory

___

### factor

• **factor**: `number`

#### Inherited from

MobxClearAccount.factor

___

### formType

• **formType**: `string`

#### Inherited from

MobxClearAccount.formType

___

### gasPrice

• **gasPrice**: `string`

#### Inherited from

MobxClearAccount.gasPrice

___

### gasPriceMap

• **gasPriceMap**: `Map`<`string`, `string`\>

#### Inherited from

[IViews](IViews.md).[gasPriceMap](IViews.md#gaspricemap)

___

### history

• **history**: [`ITransferItems`](ITransferItems.md)

#### Inherited from

[ILists](ILists.md).[history](ILists.md#history)

___

### incoming

• **incoming**: [`ITransferItems`](ITransferItems.md)

#### Inherited from

[ILists](ILists.md).[incoming](ILists.md#incoming)

___

### kiroTokenContract

• **kiroTokenContract**: `undefined` \| [`IKiroToken`](IKiroToken.md)

#### Inherited from

[IViews](IViews.md).[kiroTokenContract](IViews.md#kirotokencontract)

___

### kiroTokenMap

• **kiroTokenMap**: `Map`<`string`, [`IKiroToken`](IKiroToken.md)\>

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

#### Inherited from

[ILists](ILists.md).[outgoing](ILists.md#outgoing)

___

### rate

• **rate**: `number`

#### Inherited from

MobxClearAccount.rate

___

### retrieve

• **retrieve**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`IRetrieveData`](IRetrieveData.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: [`IRetrieveData`](IRetrieveData.md)) => `void` |

#### Inherited from

MobxClearAccount.retrieve

___

### retrieveCmd

• **retrieveCmd**: [`IRetrieveCmd`](IRetrieveCmd.md)

#### Inherited from

[ICommands](ICommands.md).[retrieveCmd](ICommands.md#retrievecmd)

___

### safeSwapContract

• **safeSwapContract**: `undefined` \| { `address`: `string` ; `feesFormula`: `string` ; `rewardFormula`: `string` ; `synced`: `boolean`  } & `NonEmptyObject` & { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>

#### Inherited from

MobxClearAccount.safeSwapContract

___

### safeSwapMap

• **safeSwapMap**: `IMSTMap`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

MobxClearAccount.safeSwapMap

___

### safeTransferContract

• **safeTransferContract**: `undefined` \| [`ISafeTransfer`](ISafeTransfer.md)

#### Inherited from

[IViews](IViews.md).[safeTransferContract](IViews.md#safetransfercontract)

___

### safeTransferMap

• **safeTransferMap**: `Map`<`string`, [`ISafeTransfer`](ISafeTransfer.md)\>

___

### sendCmd

• **sendCmd**: { `from`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `to`: `string` ; `value`: `string`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`SendCmdParams`](SendCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`SendCmdParams`](SendCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearAccount.sendCmd

___

### stakingBalance

• **stakingBalance**: `string`

#### Inherited from

MobxClearAccount.stakingBalance

___

### stakingContract

• **stakingContract**: `undefined` \| [`IStaking`](IStaking.md)

#### Inherited from

[IViews](IViews.md).[stakingContract](IViews.md#stakingcontract)

___

### stakingMap

• **stakingMap**: `Map`<`string`, [`IStaking`](IStaking.md)\>

___

### swap

• **swap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`CollectCmdParams`](CollectCmdParams.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` |

#### Inherited from

MobxClearAccount.swap

___

### swapCmd

• **swapCmd**: [`ICollectCmd`](ICollectCmd.md)

#### Inherited from

[ICommands](ICommands.md).[swapCmd](ICommands.md#swapcmd)

___

### swapDeposit

• **swapDeposit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`DepositCmdParams`](DepositCmdParams.md) & { `desiredValue`: `string`  }` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: { `desiredValue`: `string` ; `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` |

#### Inherited from

MobxClearAccount.swapDeposit

___

### swapDepositCmd

• **swapDepositCmd**: [`ISwapDepositCmd`](ISwapDepositCmd.md)

#### Inherited from

[ICommands](ICommands.md).[swapDepositCmd](ICommands.md#swapdepositcmd)

___

### swapRates

• **swapRates**: { `currentCurrencyUsdRateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; symbol: string; rate: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void` ; `setRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `rate`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void` ; `setRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `desiredCurrencyUsdRateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; symbol: string; rate: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void` ; `setRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `rate`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `symbol`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void` ; `setRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `swapCompareCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; inputTokenAddress: string; outputTokenAddress: string; input... & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `inputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `inputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `uniswapOutputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `swapOutputRateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; inputTokenAddress: string; outputTokenAddress: string; input... & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `inputAmount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `inputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputRate`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `outputTokenAddress`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`IUpdateSwapCompareCmdParams`](IUpdateSwapCompareCmdParams.md)) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `updateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `compare`:  ; `currencyUsdRate`:  ; `desiredCurrencyUsdRate`:  ; `rate`:   } & { `setCurrentCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setDesiredCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `compare`:  ; `currencyUsdRate`:  ; `desiredCurrencyUsdRate`:  ; `rate`:   } & { `setCurrentCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setDesiredCurrencyUsdRate`: (`__namedParameters`: { `rate`: `string` ; `symbol`: `string`  }) => `void` ; `setOutputAmount`: (`outputAmount`: `string`) => `void` ; `setOutputRate`: (`rate`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearAccount.swapRates

___

### swapRetrieve

• **swapRetrieve**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **data**(): [`IRetrieveData`](IRetrieveData.md)` | `Object` |
| ``get` **is**(): [`ICommand`](ICommand.md)` | `Object` |
| `run` | (`__namedParameters`: [`IRetrieveData`](IRetrieveData.md)) => `void` |

#### Inherited from

MobxClearAccount.swapRetrieve

___

### swapRetrieveCmd

• **swapRetrieveCmd**: [`IRetrieveCmd`](IRetrieveCmd.md)

#### Inherited from

[ICommands](ICommands.md).[swapRetrieveCmd](ICommands.md#swapretrievecmd)

___

### swapperAddress

• **swapperAddress**: `string`

#### Inherited from

MobxClearAccount.swapperAddress

___

### swapperBalance

• **swapperBalance**: `string`

#### Inherited from

MobxClearAccount.swapperBalance

___

### swaps

• **swaps**: [`ITransferItems`](ITransferItems.md)

#### Inherited from

[ILists](ILists.md).[swaps](ILists.md#swaps)

___

### tokenBalance

• **tokenBalance**: `string`

#### Inherited from

MobxClearAccount.tokenBalance

___

### transactions

• **transactions**: { `address`: `string` ; `count`: `number` ; `exportCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetchCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetched`: `number` ; `firstFetchedBlockNumber`: `number` ; `lastFetchedBlockNumber`: `number` ; `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `name`: `string`  } & `NonEmptyObject` & { `export`:  ; `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `addFetchedAmount`: (`amount`: `number`) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setCount`: (`count`: `number`) => `void` ; `setFetched`: (`count`: `number`) => `void` ; `setFirstFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setLastFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setName`: (`__namedParameters`: { `name`: `string`  }) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `export`:  ; `fetch`:  ; `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `addFetchedAmount`: (`amount`: `number`) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setCount`: (`count`: `number`) => `void` ; `setFetched`: (`count`: `number`) => `void` ; `setFirstFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setLastFetchedBlockNumber`: (`blockNumber`: `string` \| `number`) => `void` ; `setName`: (`__namedParameters`: { `name`: `string`  }) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearAccount.transactions

___

### transfers

• **transfers**: [`ITransferItems`](ITransferItems.md)

#### Inherited from

[ILists](ILists.md).[transfers](ILists.md#transfers)

___

### wallet

• **wallet**: [`IWallet`](IWallet.md)

## Methods

### ERC20TokenList

▸ **ERC20TokenList**(`chainName`): { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

{ `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`IERC20TokenItem`](IERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Inherited from

MobxClearAccount.ERC20TokenList

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

### getERC20TokenList

▸ **getERC20TokenList**(`chainName`): [`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

[`IERC20TokenItem`](IERC20TokenItem.md)[]

#### Inherited from

[IViews](IViews.md).[getERC20TokenList](IViews.md#geterc20tokenlist)

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

### setCanGetRewards

▸ **setCanGetRewards**(`canGetRewards`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canGetRewards` | `boolean` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setCanGetRewards

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
| `currency` | [`ERC20TokenItem`](ERC20TokenItem.md) |

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

### setDesiredCurrency

▸ **setDesiredCurrency**(`currency`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | [`ERC20TokenItem`](ERC20TokenItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setDesiredCurrency

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
| `data` | [`ERC20TokenItem`](ERC20TokenItem.md)[] |

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

### setFormType

▸ **setFormType**(`formType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formType` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setFormType

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
| `data` | [`IKiroTokenItem`](IKiroTokenItem.md) |

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

### setSafeSwapContract

▸ **setSafeSwapContract**(`chainName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `data` | [`ISafeTransferItem`](ISafeTransferItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setSafeSwapContract

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
| `data` | [`IStakingItem`](IStakingItem.md) |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setStakingContract

___

### setSwapperAddress

▸ **setSwapperAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setSwapperAddress

___

### setSwapperBalance

▸ **setSwapperBalance**(`balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearAccount.setSwapperBalance

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
