---
id: "modules"
title: "@kiroboio/web3-react-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [AppStore](classes/AppStore.md)

## Interfaces

- [IAccount](interfaces/IAccount.md)

## Variables

### AccountContext

• `Const` **AccountContext**: `Context`<[`IAccount`](interfaces/IAccount.md)\>

___

### AddressBookContext

• `Const` **AddressBookContext**: `Context`<{ `addCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; address: { ...; } & ... 1 more ... & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address`: { key: string; address: string; } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addManyCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; replace: boolean; mergeAnyway: boolean; } & NonEmptyObject & { ...; } & IStateTreeNode<...\>; addresses: IMSTArray<...\> & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<{ `done`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `failed`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `ready`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `running`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `withFailMessage`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `withId`: `IOptionalIType`<`ISimpleType`<`number`\>, [`undefined`]\>  } & { `mergeAnyway`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\> ; `replace`: `IOptionalIType`<`ISimpleType`<`boolean`\>, [`undefined`]\>  }, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `addresses`: `IOptionalIType`<`IArrayType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `clear`: () => `void` ; `prepare`: (`__namedParameters`: `AddManyParams`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `addresses`: `IMSTMap`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> & `IStateTreeNode`<`IMapType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\>\> ; `removeAllCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: () => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `removeCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `setCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `updateCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; key: string; address: string; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `key`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`key`: `string`, `address`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `search`: (`__namedParameters`: { `input?`: `string`  }) => { `address`: `string` ; `key`: `string`  }[] ; `add`:  ; `addMany`:  ; `remove`:  ; `removeAll`:  ; `update`:   } & { `addAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void` ; `addAddresses`: (`addresses`: { `address`: `string` ; `key`: `string`  }[]) => `void` ; `clear`: () => `void` ; `removeAddress`: (`__namedParameters`: { `key`: `string`  }) => `void` ; `setSecret`: (...`args`: [{ `secret`: `string`  }]) => `Promise`<`void`\> ; `setStorage`: (`params`: `SetSecureStorageParams`) => `void` ; `updateAddress`: (`__namedParameters`: { `address`: `string` ; `key`: `string`  }) => `void`  } & { `addressBook`:  ; `list`:   }, `_NotCustomized`, `_NotCustomized`\>\>\>

___

### AppContext

• `Const` **AppContext**: `Context`<[`AppStore`](classes/AppStore.md)\>

___

### UiContext

• `Const` **UiContext**: `Context`<{ `theme`: `number`  } & `NonEmptyObject` & { `setTheme`: (`theme`: `THEMES`) => `void` ; `toggleTheme`: () => `void`  } & { `isDarkTheme`:   } & `IStateTreeNode`<`IModelType`<`Object`, { `setTheme`: (`theme`: `THEMES`) => `void` ; `toggleTheme`: () => `void`  } & { `isDarkTheme`:   }, `_NotCustomized`, `_NotCustomized`\>\>\>

___

### appStore

• `Const` **appStore**: [`AppStore`](classes/AppStore.md)

## Functions

### useAccount

▸ **useAccount**(): [`IAccount`](interfaces/IAccount.md)

#### Returns

[`IAccount`](interfaces/IAccount.md)

___

### useAddressBook

▸ **useAddressBook**(): typeof `addressBookStore`

#### Returns

typeof `addressBookStore`

___

### useUI

▸ **useUI**(): typeof `uiStore`

#### Returns

typeof `uiStore`
