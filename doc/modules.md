[@kiroboio/web3-react-safe-transfer](README.md) / Exports

# @kiroboio/web3-react-safe-transfer

## Table of contents

### Namespaces

- [yupEth](modules/yupEth.md)

### Enumerations

- [Connectors](enums/Connectors.md)

### Classes

- [InAppWalletConnector](classes/InAppWalletConnector.md)

### Interfaces

- [ERC20TokenItem](interfaces/ERC20TokenItem.md)
- [ISafeTransferItem](interfaces/ISafeTransferItem.md)
- [ITransferItem](interfaces/ITransferItem.md)

### Type aliases

- [Currency](modules.md#currency)
- [UseSecureStorageEmptyRes](modules.md#usesecurestorageemptyres)
- [UseSecureStorageRes](modules.md#usesecurestorageres)

### Variables

- [KiroboProvider](modules.md#kiroboprovider)

### Functions

- [configureReactotronDebugging](modules.md#configurereactotrondebugging)
- [etherToWei](modules.md#ethertowei)
- [formatEther](modules.md#formatether)
- [observer](modules.md#observer)
- [useAccount](modules.md#useaccount)
- [useLocalStorage](modules.md#uselocalstorage)
- [useSecureStorage](modules.md#usesecurestorage)
- [useWallet](modules.md#usewallet)
- [useWhatChangedDev](modules.md#usewhatchangeddev)
- [weiToEther](modules.md#weitoether)

## Type aliases

### Currency

Ƭ **Currency**: ``"ETH"`` \| ``"KIRO"`` \| ``"USDT"`` \| ``"BNB"`` \| ``"UNI"`` \| ``"LINK"`` \| ``"SUSHI"`` \| ``"USDC"`` \| ``"WBTC"`` \| ``"DAI"``

#### Defined in

dev/stores/account.ts:37

___

### UseSecureStorageEmptyRes

Ƭ **UseSecureStorageEmptyRes**: typeof `useSecureStorageEmptyRes`

#### Defined in

dev/hooks/useSecureStorage.ts:22

___

### UseSecureStorageRes

Ƭ **UseSecureStorageRes**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `secureStorage` | `T` & `SecureLS` |
| `clear` | () => `void` |
| `getAllKeys` | () => `undefined` \| `string`[] |
| `getItem` | <I\>(`itemName`: `string`, `isAllKeysData?`: `boolean`) => `undefined` \| `I` |
| `removeAll` | () => `void` |
| `removeItem` | (`itemName`: `string`) => `void` |
| `setItem` | (`itemName`: `string`, `item`: `unknown`) => `void` |
| `setNewSecureStorageConfig` | (`encryptionSecret`: `string`, `encodingType?`: `string`) => `void` |

#### Defined in

dev/hooks/useSecureStorage.ts:24

## Variables

### KiroboProvider

• `Const` **KiroboProvider**: `React.FC`

#### Defined in

dev/providers/KiroboProvider.tsx:7

## Functions

### configureReactotronDebugging

▸ `Const` **configureReactotronDebugging**(): `void`

#### Returns

`void`

#### Defined in

dev/debugging/configureReactotronDebugging.ts:6

___

### etherToWei

▸ `Const` **etherToWei**(`value`, `decimals?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `decimals?` | `number` |

#### Returns

`string`

#### Defined in

dev/utils/ethereum.ts:4

___

### formatEther

▸ `Const` **formatEther**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

dev/utils/ethereum.ts:40

___

### observer

▸ **observer**<`P`, `TRef`\>(`baseComponent`, `options`): `React.MemoExoticComponent`<`React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<`P`\> & `React.RefAttributes`<`TRef`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` |
| `TRef` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseComponent` | `React.RefForwardingComponent`<`TRef`, `P`\> |
| `options` | `IObserverOptions` & { `forwardRef`: ``true``  } |

#### Returns

`React.MemoExoticComponent`<`React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<`P`\> & `React.RefAttributes`<`TRef`\>\>\>

#### Defined in

node_modules/mobx-react-lite/dist/observer.d.ts:5

▸ **observer**<`P`\>(`baseComponent`, `options?`): `React.FunctionComponent`<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseComponent` | `React.FunctionComponent`<`P`\> |
| `options?` | `IObserverOptions` |

#### Returns

`React.FunctionComponent`<`P`\>

#### Defined in

node_modules/mobx-react-lite/dist/observer.d.ts:8

▸ **observer**<`C`, `Options`\>(`baseComponent`, `options?`): `Options` extends { `forwardRef`: ``true``  } ? `C` extends `React.RefForwardingComponent`<infer TRef, infer P\> ? `C` & `React.MemoExoticComponent`<`React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<`P`\> & `React.RefAttributes`<`TRef`\>\>\> : `never` : `C` & { `displayName`: `string`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `FunctionComponent`<`any`\> \| `RefForwardingComponent`<`any`, `Object`\> |
| `Options` | extends `IObserverOptions` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseComponent` | `C` |
| `options?` | `Options` |

#### Returns

`Options` extends { `forwardRef`: ``true``  } ? `C` extends `React.RefForwardingComponent`<infer TRef, infer P\> ? `C` & `React.MemoExoticComponent`<`React.ForwardRefExoticComponent`<`React.PropsWithoutRef`<`P`\> & `React.RefAttributes`<`TRef`\>\>\> : `never` : `C` & { `displayName`: `string`  }

#### Defined in

node_modules/mobx-react-lite/dist/observer.d.ts:9

___

### useAccount

▸ **useAccount**(): typeof `accountStore`

#### Returns

typeof `accountStore`

#### Defined in

dev/context/account.ts:6

___

### useLocalStorage

▸ `Const` **useLocalStorage**<`T`\>(`key`, `initialValue`): readonly [`T`, (`value`: `T`) => `void`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `initialValue` | `T` |

#### Returns

readonly [`T`, (`value`: `T`) => `void`]

#### Defined in

dev/hooks/useLocaleStorage.ts:3

___

### useSecureStorage

▸ `Const` **useSecureStorage**<`T`\>(`encryptionSecret?`, `encodingType?`, `encryptionNamespace?`): [`UseSecureStorageRes`](modules.md#usesecurestorageres)<`T` & `SecureLS`\> \| { `clear`: `undefined` ; `error`: { `content`: `undefined` ; `isError`: `boolean` = true; `isLocalStorageExist`: `boolean` = false } ; `getAllKeys`: `undefined` ; `getItem`: `undefined` ; `removeAll`: `undefined` ; `removeItem`: `undefined` ; `secureStorage`: `undefined` ; `setItem`: `undefined` ; `setNewSecureStorageConfig`: `undefined`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encryptionSecret?` | `string` | `undefined` |
| `encodingType` | `string` | `'aes'` |
| `encryptionNamespace?` | `string` | `undefined` |

#### Returns

[`UseSecureStorageRes`](modules.md#usesecurestorageres)<`T` & `SecureLS`\> \| { `clear`: `undefined` ; `error`: { `content`: `undefined` ; `isError`: `boolean` = true; `isLocalStorageExist`: `boolean` = false } ; `getAllKeys`: `undefined` ; `getItem`: `undefined` ; `removeAll`: `undefined` ; `removeItem`: `undefined` ; `secureStorage`: `undefined` ; `setItem`: `undefined` ; `setNewSecureStorageConfig`: `undefined`  }

#### Defined in

dev/hooks/useSecureStorage.ts:42

___

### useWallet

▸ `Const` **useWallet**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `generateNewMnemonic` | () => `void` |
| `getActiveAccountFromStorage` | () => `undefined` \| `string` |
| `getCredentialsFromStorage` | () => { `mnemonic`: `undefined` \| `string` ; `rpc`: `undefined` \| `string`  } |
| `getMnemonic` | () => `undefined` \| `string` |
| `mnemonic` | `undefined` \| `string` |
| `provider` | `undefined` \| `string` |
| `setActiveAccount` | (`account`: `string`) => `void` |
| `setCredentialsToStorage` | (`rpc`: `string`, `mnemonic`: `string`) => `void` |
| `setNewMnemonic` | (`mnemonic`: `undefined` \| `string`) => `void` |
| `setProvider` | `Dispatch`<`SetStateAction`<`undefined` \| `string`\>\> |

#### Defined in

dev/hooks/useWallet.ts:13

___

### useWhatChangedDev

▸ `Const` **useWhatChangedDev**(`hookDescription`, `deps?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookDescription` | `string` |
| `deps?` | `Object` |

#### Returns

`void`

#### Defined in

dev/debugging/useWhatChangedDev.ts:3

___

### weiToEther

▸ `Const` **weiToEther**(`value`, `decimals?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `decimals?` | `number` |

#### Returns

`string`

#### Defined in

dev/utils/ethereum.ts:23
