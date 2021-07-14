[@kiroboio/web3-react-safe-transfer](README.md) / Exports

# @kiroboio/web3-react-safe-transfer

## Table of contents

### Enumerations

- [Connectors](enums/Connectors.md)

### Interfaces

- [IConnectParams](interfaces/IConnectParams.md)
- [IUseWalletState](interfaces/IUseWalletState.md)
- [IUseWeb3State](interfaces/IUseWeb3State.md)
- [IWeb3ReactContext](interfaces/IWeb3ReactContext.md)

### Type aliases

- [Error](modules.md#error)
- [UseLocalStorageType](modules.md#uselocalstoragetype)
- [UseSecureStorage](modules.md#usesecurestorage)
- [UseSecureStorageEmptyRes](modules.md#usesecurestorageemptyres)
- [UseSecureStorageRes](modules.md#usesecurestorageres)
- [UseWalletHook](modules.md#usewallethook)
- [UseWeb3Hook](modules.md#useweb3hook)

### Functions

- [useLocalStorage](modules.md#uselocalstorage)
- [useWeb3](modules.md#useweb3)

## Type aliases

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `unknown` |
| `isError` | `boolean` |
| `isLocalStorageExist` | `boolean` |

#### Defined in

useSecureStorage.ts:4

___

### UseLocalStorageType

Ƭ **UseLocalStorageType**: typeof [`useLocalStorage`](modules.md#uselocalstorage)

#### Defined in

useLocaleStorage.ts:18

___

### UseSecureStorage

Ƭ **UseSecureStorage**: typeof `useSecureStorage`

#### Defined in

useSecureStorage.ts:184

___

### UseSecureStorageEmptyRes

Ƭ **UseSecureStorageEmptyRes**: typeof `useSecureStorageEmptyRes`

#### Defined in

useSecureStorage.ts:22

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
| `error` | [`Error`](modules.md#error) |
| `secureStorage` | `T` & `SecureLS` |
| `clear` | () => `void` |
| `getAllKeys` | () => `undefined` \| `string`[] |
| `getItem` | <I\>(`itemName`: `string`, `isAllKeysData?`: `boolean`) => `undefined` \| `I` |
| `removeAll` | () => `void` |
| `removeItem` | (`itemName`: `string`) => `void` |
| `setItem` | (`itemName`: `string`, `item`: `unknown`) => `void` |
| `setNewSecureStorageConfig` | (`encryptionSecret`: `string`, `encodingType?`: `string`) => `void` |

#### Defined in

useSecureStorage.ts:24

___

### UseWalletHook

Ƭ **UseWalletHook**: () => [`IUseWalletState`](interfaces/IUseWalletState.md)

#### Type declaration

▸ (): [`IUseWalletState`](interfaces/IUseWalletState.md)

##### Returns

[`IUseWalletState`](interfaces/IUseWalletState.md)

#### Defined in

useWallet.ts:153

___

### UseWeb3Hook

Ƭ **UseWeb3Hook**: () => [`IUseWeb3State`](interfaces/IUseWeb3State.md)

#### Type declaration

▸ (): [`IUseWeb3State`](interfaces/IUseWeb3State.md)

##### Returns

[`IUseWeb3State`](interfaces/IUseWeb3State.md)

#### Defined in

useWeb3.ts:167

## Functions

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

useLocaleStorage.ts:3

___

### useWeb3

▸ `Const` **useWeb3**(): [`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)<`default`\>

#### Returns

[`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)<`default`\>

#### Defined in

useWeb3.ts:58
