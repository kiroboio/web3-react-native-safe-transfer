[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IAccount

# Interface: IAccount

## Hierarchy

- `Instance`<typeof [`Account`](../modules.md#account)\>

  ↳ **`IAccount`**

## Table of contents

### Properties

- [ERC20TokensMap](IAccount.md#erc20tokensmap)
- [[$nonEmptyObject]](IAccount.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IAccount.md#[$statetreenodetype])
- [active](IAccount.md#active)
- [address](IAccount.md#address)
- [allowance](IAccount.md#allowance)
- [approvedCmd](IAccount.md#approvedcmd)
- [balance](IAccount.md#balance)
- [block](IAccount.md#block)
- [chainId](IAccount.md#chainid)
- [collectCmd](IAccount.md#collectcmd)
- [connectCmd](IAccount.md#connectcmd)
- [currency](IAccount.md#currency)
- [depositCmd](IAccount.md#depositcmd)
- [deviceInfo](IAccount.md#deviceinfo)
- [disconnectCmd](IAccount.md#disconnectcmd)
- [factor](IAccount.md#factor)
- [gasPriceMap](IAccount.md#gaspricemap)
- [incoming](IAccount.md#incoming)
- [kiroTokenMap](IAccount.md#kirotokenmap)
- [left](IAccount.md#left)
- [maxRewards](IAccount.md#maxrewards)
- [outgoing](IAccount.md#outgoing)
- [rate](IAccount.md#rate)
- [retrieveCmd](IAccount.md#retrievecmd)
- [safeTransferMap](IAccount.md#safetransfermap)
- [stakingBalance](IAccount.md#stakingbalance)
- [stakingMap](IAccount.md#stakingmap)
- [tokenBalance](IAccount.md#tokenbalance)
- [transfers](IAccount.md#transfers)
- [wallet](IAccount.md#wallet)

### Accessors

- [ERC20TokensContract](IAccount.md#erc20tokenscontract)
- [gasPrice](IAccount.md#gasprice)
- [kiroTokenContract](IAccount.md#kirotokencontract)
- [safeTransferContract](IAccount.md#safetransfercontract)
- [stakingContract](IAccount.md#stakingcontract)

### Methods

- [ERC20TokenList](IAccount.md#erc20tokenlist)
- [approve](IAccount.md#approve)
- [approvedToken](IAccount.md#approvedtoken)
- [clearERC20TokenBalances](IAccount.md#clearerc20tokenbalances)
- [collect](IAccount.md#collect)
- [connect](IAccount.md#connect)
- [deposit](IAccount.md#deposit)
- [disconnect](IAccount.md#disconnect)
- [retrieve](IAccount.md#retrieve)
- [setActive](IAccount.md#setactive)
- [setAddress](IAccount.md#setaddress)
- [setAllowance](IAccount.md#setallowance)
- [setBalance](IAccount.md#setbalance)
- [setBlock](IAccount.md#setblock)
- [setChainId](IAccount.md#setchainid)
- [setCurrency](IAccount.md#setcurrency)
- [setCurrencyBalance](IAccount.md#setcurrencybalance)
- [setDeviceInfo](IAccount.md#setdeviceinfo)
- [setERC20TokenBalance](IAccount.md#seterc20tokenbalance)
- [setERC20TokenContract](IAccount.md#seterc20tokencontract)
- [setErc20TokenRate](IAccount.md#seterc20tokenrate)
- [setGasPrice](IAccount.md#setgasprice)
- [setKiroTokenContract](IAccount.md#setkirotokencontract)
- [setMaxRewards](IAccount.md#setmaxrewards)
- [setRate](IAccount.md#setrate)
- [setRewardsParams](IAccount.md#setrewardsparams)
- [setSafeTransferContract](IAccount.md#setsafetransfercontract)
- [setStakingBalance](IAccount.md#setstakingbalance)
- [setStakingContract](IAccount.md#setstakingcontract)
- [setTokenBalance](IAccount.md#settokenbalance)
- [transferFees](IAccount.md#transferfees)
- [transferReward](IAccount.md#transferreward)

## Properties

### ERC20TokensMap

• **ERC20TokensMap**: `IMSTMap`<`IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `list`:   } & { `addToken`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `clearBalances`: () => `void` ; `setBalance`: (`address`: `string`, `balance`: `string`) => `void` ; `setRate`: (`address`: `string`, `rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

Instance.ERC20TokensMap

___

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, { `ERC20TokensContract`:  ; `gasPrice`:  ; `kiroTokenContract`:  ; `safeTransferContract`:  ; `stakingContract`:  ; `ERC20TokenList`: (`chainName`: `string`) => { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[] ; `approvedToken`: (`symbol`: `string`, `amount`: `string`) => `boolean` ; `transferFees`: (`amount`: `string`) => ``""`` \| ``"0"`` ; `transferReward`: (`amount`: `string`, `fees`: `string`) => `number` \| ``""``  } & { `approve`: () => `void` ; `clearERC20TokenBalances`: (`chainName?`: `string`) => `void` ; `collect`: (`__namedParameters`: { `id`: `string` ; `passcode`: `string`  }) => `void` ; `connect`: (`connector`: `Connectors`) => `void` ; `deposit`: (`__namedParameters`: { `message?`: `string` ; `passcode`: `string` ; `to`: `string` ; `value`: `string`  }) => `void` ; `disconnect`: () => `void` ; `retrieve`: (`__namedParameters`: { `id`: `string`  }) => `void` ; `setActive`: (`newActive`: `boolean`) => `void` ; `setAddress`: (`address`: `string`) => `void` ; `setAllowance`: (`allowance`: `string`) => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setBlock`: (`block`: `number`) => `void` ; `setChainId`: (`chainId`: `number`) => `void` ; `setCurrency`: (`currency`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setCurrencyBalance`: (`balance`: `string`) => `void` ; `setDeviceInfo`: (`deviceInfo`: [`DeviceInfoData`](DeviceInfoData.md)) => `void` ; `setERC20TokenBalance`: (`chainName`: `string`, `address`: `string`, `balance`: `string`) => `void` ; `setERC20TokenContract`: (`chainName`: `string`, `data`: [`ERC20TokenItem`](ERC20TokenItem.md)[]) => `void` ; `setErc20TokenRate`: (`chainName`: `string`, `address`: `string`, `rate`: `number`) => `void` ; `setGasPrice`: (`chainName`: `string`, `gasPrice`: `string`) => `void` ; `setKiroTokenContract`: (`chainName`: `string`, `data`: [`IKiroTokenItem`](IKiroTokenItem.md)) => `void` ; `setMaxRewards`: (`maxRewards`: `number`) => `void` ; `setRate`: (`newRate`: `number`) => `void` ; `setRewardsParams`: (`factor`: `number`, `left`: `number`) => `void` ; `setSafeTransferContract`: (`chainName`: `string`, `data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void` ; `setStakingBalance`: (`balance`: `string`) => `void` ; `setStakingContract`: (`chainName`: `string`, `data`: [`IStakingItem`](IStakingItem.md)) => `void` ; `setTokenBalance`: (`balance`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### active

• **active**: `boolean`

#### Inherited from

Instance.active

___

### address

• **address**: `string`

#### Inherited from

Instance.address

___

### allowance

• **allowance**: `string`

#### Inherited from

Instance.allowance

___

### approvedCmd

• **approvedCmd**: { `amount`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.approvedCmd

___

### balance

• **balance**: `string`

#### Inherited from

Instance.balance

___

### block

• **block**: `number`

#### Inherited from

Instance.block

___

### chainId

• **chainId**: `number`

#### Inherited from

Instance.chainId

___

### collectCmd

• **collectCmd**: { `id`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `key`: `string`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](CollectCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`CollectCmdParams`](CollectCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.collectCmd

___

### connectCmd

• **connectCmd**: { `connector`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `isConnected`: `boolean`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `connector`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `isConnected`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`connector`: `undefined` \| `Connectors`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.connectCmd

___

### currency

• **currency**: { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.currency

___

### depositCmd

• **depositCmd**: { `from`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `message`: `string` ; `privateSalt`: `string` ; `publicSalt`: `string` ; `secretHash`: `string` ; `to`: `string` ; `value`: `string`  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](DepositCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](DepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.depositCmd

___

### deviceInfo

• **deviceInfo**: { `ethereumProvider`: `boolean` ; `haveMetaMask`: `boolean` ; `isMobile`: `boolean` ; `loggedIn`: `boolean`  } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`DeviceInfoData`](DeviceInfoData.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.deviceInfo

___

### disconnectCmd

• **disconnectCmd**: { `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.disconnectCmd

___

### factor

• **factor**: `number`

#### Inherited from

Instance.factor

___

### gasPriceMap

• **gasPriceMap**: `IMSTMap`<`ISimpleType`<`string`\>\> & `IStateTreeNode`<`IMapType`<`ISimpleType`<`string`\>\>\>

#### Inherited from

Instance.gasPriceMap

___

### incoming

• **incoming**: { `address`: `string` ; `count`: `number` ; `fetchCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetched`: `number` ; `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `name`: `string`  } & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.incoming

___

### kiroTokenMap

• **kiroTokenMap**: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

Instance.kiroTokenMap

___

### left

• **left**: `number`

#### Inherited from

Instance.left

___

### maxRewards

• **maxRewards**: `number`

#### Inherited from

Instance.maxRewards

___

### outgoing

• **outgoing**: { `address`: `string` ; `count`: `number` ; `fetchCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetched`: `number` ; `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `name`: `string`  } & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.outgoing

___

### rate

• **rate**: `number`

#### Inherited from

Instance.rate

___

### retrieveCmd

• **retrieveCmd**: { `id`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](RetrieveCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `id`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`RetrieveCmdParams`](RetrieveCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.retrieveCmd

___

### safeTransferMap

• **safeTransferMap**: `IMSTMap`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

Instance.safeTransferMap

___

### stakingBalance

• **stakingBalance**: `string`

#### Inherited from

Instance.stakingBalance

___

### stakingMap

• **stakingMap**: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\>

#### Inherited from

Instance.stakingMap

___

### tokenBalance

• **tokenBalance**: `string`

#### Inherited from

Instance.tokenBalance

___

### transfers

• **transfers**: { `address`: `string` ; `count`: `number` ; `fetchCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; list: string; amount: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `amount`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\> ; `list`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`FetchCmdParams`](FetchCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `fetched`: `number` ; `map`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `name`: `string`  } & `NonEmptyObject` & { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `list`:   } & { `add`: (`__namedParameters`: { `address`: `string` ; `count`: `number` ; `transfers`: [`ITransferItem`](ITransferItem.md)[]  }) => `void` ; `clear`: () => `void` ; `delete`: (`address`: `string`, `id`: `string`) => `void` ; `fetch`: (`amount`: `number`) => `void` ; `remove`: (`address`: `string`, `filter`: (`item`: [`ITransferItem`](ITransferItem.md)) => `boolean`) => [`ITransferItem`](ITransferItem.md)[] ; `setFetched`: (`count`: `number`) => `void` ; `update`: (`address`: `string`, `transfer`: { `id`: `string` ; `state`: `EthTransferState` ; `txid?`: `string`  }) => `void` ; `upsert`: (`address`: `string`, `transfer`: [`ITransferItem`](ITransferItem.md)) => `void`  } & { `activeCount`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.transfers

___

### wallet

• **wallet**: { `accounts`: `any` ; `activeAccount`: `string` ; `addAddressCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `mnemonic`: { data: string; clearCmd: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & NonEmptyObject & { ...; } & IS... & `NonEmptyObject` & { `clear`: () => `void` ; `remove`: () => `void` ; `restore`: () => `void` ; `set`: (`mnemonic?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `removeAddressCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `addWalletAddress`: () => `void` ; `changeMnemonic`: (`mnemonic`: `string`) => `void` ; `clearMnemonic`: () => `void` ; `generateMnemonic`: () => `void` ; `getMnemonic`: () => `string` ; `removeMnemonic`: () => `void` ; `removeWalletAddress`: (`address`: `string`) => `void` ; `setAccounts`: (`accounts`: `string`[]) => `void` ; `setActiveAccount`: (`activeAccount`: `undefined` \| `string`) => `void` ; `setMnemonic`: (`mnemonic?`: `string`) => `void` ; `tryRestoreMnemonicFromStorage`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.wallet

## Accessors

### ERC20TokensContract

• `get` **ERC20TokensContract**(): { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Returns

{ `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Defined in

dev/stores/account.ts:794

___

### gasPrice

• `get` **gasPrice**(): `string`

#### Returns

`string`

#### Defined in

dev/stores/account.ts:804

___

### kiroTokenContract

• `get` **kiroTokenContract**(): `undefined` \| { `address`: `string`  } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`IKiroTokenItem`](IKiroTokenItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>

#### Returns

`undefined` \| { `address`: `string`  } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`IKiroTokenItem`](IKiroTokenItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>

#### Defined in

dev/stores/account.ts:791

___

### safeTransferContract

• `get` **safeTransferContract**(): `undefined` \| { `address`: `string` ; `feesFormula`: `string` ; `rewardFormula`: `string` ; `synced`: `boolean`  } & `NonEmptyObject` & { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>

#### Returns

`undefined` \| { `address`: `string` ; `feesFormula`: `string` ; `rewardFormula`: `string` ; `synced`: `boolean`  } & `NonEmptyObject` & { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `fees`: (`_value`: `string`) => ``"0"`` ; `reward`: (`_value`: `string`, `_stakingValue`: `string`, `_fees`: `string`) => ``"0"``  } & { `setData`: (`data`: [`ISafeTransferItem`](ISafeTransferItem.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>

#### Defined in

dev/stores/account.ts:788

___

### stakingContract

• `get` **stakingContract**(): `undefined` \| { `address`: `string` ; `balance`: `string`  } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`IStakingItem`](IStakingItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>

#### Returns

`undefined` \| { `address`: `string` ; `balance`: `string`  } & `NonEmptyObject` & { `setData`: (`__namedParameters`: [`IStakingItem`](IStakingItem.md)) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>

#### Defined in

dev/stores/account.ts:801

## Methods

### ERC20TokenList

▸ **ERC20TokenList**(`chainName`): { `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |

#### Returns

{ `address`: `string` ; `balance`: `string` ; `decimals`: `number` ; `name`: `string` ; `rate`: `number` ; `symbol`: `string`  } & `NonEmptyObject` & { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, { `tokenBalance`:   } & { `clearBalance`: () => `void` ; `setBalance`: (`balance`: `string`) => `void` ; `setData`: (`__namedParameters`: [`ERC20TokenItem`](ERC20TokenItem.md)) => `void` ; `setRate`: (`rate`: `number`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>\>[]

#### Inherited from

Instance.ERC20TokenList

#### Defined in

dev/stores/account.ts:844

___

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Inherited from

Instance.approve

#### Defined in

dev/stores/account.ts:850

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

Instance.approvedToken

#### Defined in

dev/stores/account.ts:811

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

Instance.clearERC20TokenBalances

#### Defined in

dev/stores/account.ts:1000

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

Instance.collect

#### Defined in

dev/stores/account.ts:897

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

Instance.connect

#### Defined in

dev/stores/account.ts:904

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

Instance.deposit

#### Defined in

dev/stores/account.ts:862

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

Instance.disconnect

#### Defined in

dev/stores/account.ts:908

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

Instance.retrieve

#### Defined in

dev/stores/account.ts:894

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

Instance.setActive

#### Defined in

dev/stores/account.ts:914

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

Instance.setAddress

#### Defined in

dev/stores/account.ts:911

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

Instance.setAllowance

#### Defined in

dev/stores/account.ts:941

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

Instance.setBalance

#### Defined in

dev/stores/account.ts:920

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

Instance.setBlock

#### Defined in

dev/stores/account.ts:929

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

Instance.setChainId

#### Defined in

dev/stores/account.ts:917

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

Instance.setCurrency

#### Defined in

dev/stores/account.ts:935

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

Instance.setCurrencyBalance

#### Defined in

dev/stores/account.ts:938

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

Instance.setDeviceInfo

#### Defined in

dev/stores/account.ts:944

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

Instance.setERC20TokenBalance

#### Defined in

dev/stores/account.ts:994

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

Instance.setERC20TokenContract

#### Defined in

dev/stores/account.ts:980

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

Instance.setErc20TokenRate

#### Defined in

dev/stores/account.ts:997

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

Instance.setGasPrice

#### Defined in

dev/stores/account.ts:1012

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

Instance.setKiroTokenContract

#### Defined in

dev/stores/account.ts:972

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

Instance.setMaxRewards

#### Defined in

dev/stores/account.ts:1009

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

Instance.setRate

#### Defined in

dev/stores/account.ts:932

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

Instance.setRewardsParams

#### Defined in

dev/stores/account.ts:1005

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

Instance.setSafeTransferContract

#### Defined in

dev/stores/account.ts:947

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

Instance.setStakingBalance

#### Defined in

dev/stores/account.ts:926

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

Instance.setStakingContract

#### Defined in

dev/stores/account.ts:964

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

Instance.setTokenBalance

#### Defined in

dev/stores/account.ts:923

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

Instance.transferFees

#### Defined in

dev/stores/account.ts:819

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

Instance.transferReward

#### Defined in

dev/stores/account.ts:827
