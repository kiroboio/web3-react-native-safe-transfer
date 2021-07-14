---
id: "modules"
title: "@kiroboio/web3-react-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [Connectors](enums/Connectors.md)

## Interfaces

- [IConnectParams](interfaces/IConnectParams.md)
- [IWeb3ReactContext](interfaces/IWeb3ReactContext.md)

## Type aliases

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `unknown` |
| `isError` | `boolean` |
| `isLocalStorageExist` | `boolean` |

___

### UseLocalStorageType

Ƭ **UseLocalStorageType**: typeof [`useLocalStorage`](modules.md#uselocalstorage)

___

### UseSecureStorageEmptyRes

Ƭ **UseSecureStorageEmptyRes**: typeof `useSecureStorageEmptyRes`

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

___

### useWeb3

▸ `Const` **useWeb3**(): [`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)<`default`\>

#### Returns

[`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)<`default`\>
