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

### Action

Ƭ **Action**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `Address` |
| `key?` | `string` |
| `payload?` | [`AddressBook`](modules.md#addressbook) |
| `type` | `ActionType` |

___

### AddressBook

Ƭ **AddressBook**: `Object`

#### Index signature

▪ [key: `string`]: `Address`

___

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

### useCurrentMutableState

▸ `Const` **useCurrentMutableState**<`T`\>(`state`): `MutableRefObject`<`T`\>

Use this hook to mutate the .current value instead of creating new

Two use cases

1) For not adding state to hook deps
2) For getting updated(mutated) state version in async operations

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |

#### Returns

`MutableRefObject`<`T`\>

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

___

### useSecureAddressBook

▸ `Const` **useSecureAddressBook**(): { `addCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: { ...; } & ... 1 more ... & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addManyCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; replace: boolean; mergeAnyway: boolean; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; addresses: IMSTArray<...\> & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  } & { `mergeAnyway`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `replace`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `addresses`: `IOptionalIType`<`IArrayType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addresses`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `removeAllCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `removeCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `setCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `updateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>\>

#### Returns

{ `addCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: { ...; } & ... 1 more ... & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addManyCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; replace: boolean; mergeAnyway: boolean; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; addresses: IMSTArray<...\> & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  } & { `mergeAnyway`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `replace`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `addresses`: `IOptionalIType`<`IArrayType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addresses`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `removeAllCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `removeCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `setCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `updateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>\>

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

### useSwapRates

▸ `Const` **useSwapRates**(): `void`

#### Returns

`void`

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

▸ `Const` **useWeb3**(): [`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)

#### Returns

[`IWeb3ReactContext`](interfaces/IWeb3ReactContext.md)
