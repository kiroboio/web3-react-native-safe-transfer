[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IWallet

# Interface: IWallet

## Hierarchy

- `MobxClearInstance`<typeof `Wallet`\>

  ↳ **`IWallet`**

## Table of contents

### Properties

- [accounts](IWallet.md#accounts)
- [activeAccount](IWallet.md#activeaccount)
- [addAddressCmd](IWallet.md#addaddresscmd)
- [mnemonic](IWallet.md#mnemonic)
- [removeAddressCmd](IWallet.md#removeaddresscmd)

### Methods

- [addWalletAddress](IWallet.md#addwalletaddress)
- [changeMnemonic](IWallet.md#changemnemonic)
- [clearMnemonic](IWallet.md#clearmnemonic)
- [generateMnemonic](IWallet.md#generatemnemonic)
- [getMnemonic](IWallet.md#getmnemonic)
- [removeMnemonic](IWallet.md#removemnemonic)
- [removeWalletAddress](IWallet.md#removewalletaddress)
- [setAccounts](IWallet.md#setaccounts)
- [setActiveAccount](IWallet.md#setactiveaccount)
- [setMnemonic](IWallet.md#setmnemonic)
- [tryRestoreMnemonicFromStorage](IWallet.md#tryrestoremnemonicfromstorage)

## Properties

### accounts

• **accounts**: `any`

#### Inherited from

MobxClearInstance.accounts

___

### activeAccount

• **activeAccount**: `string`

#### Inherited from

MobxClearInstance.activeAccount

___

### addAddressCmd

• **addAddressCmd**: { `address`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.addAddressCmd

___

### mnemonic

• **mnemonic**: { `clearCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `data`: `string` ; `removeCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\> ; `restoreCmd`: { is: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & NonEmptyObject & { clear(): void; prepared(): void; started(): void; finished(err?: { ...; } \| undefined): void; } & IStateTreeNode<...\>; } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `remove`: () => `void` ; `restore`: () => `void` ; `set`: (`mnemonic?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.mnemonic

___

### removeAddressCmd

• **removeAddressCmd**: { `address`: `string` ; `is`: { ready: boolean; running: boolean; done: boolean; failed: boolean; withFailMessage: string; withId: number; } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>  } & `NonEmptyObject` & { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`address?`: `string`) => `void`  }, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.removeAddressCmd

## Methods

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.addWalletAddress

#### Defined in

dev/stores/account.ts:719

___

### changeMnemonic

▸ **changeMnemonic**(`mnemonic`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.changeMnemonic

#### Defined in

dev/stores/account.ts:746

___

### clearMnemonic

▸ **clearMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearMnemonic

#### Defined in

dev/stores/account.ts:740

___

### generateMnemonic

▸ **generateMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.generateMnemonic

#### Defined in

dev/stores/account.ts:728

___

### getMnemonic

▸ **getMnemonic**(): `string`

#### Returns

`string`

#### Inherited from

MobxClearInstance.getMnemonic

#### Defined in

dev/stores/account.ts:734

___

### removeMnemonic

▸ **removeMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.removeMnemonic

#### Defined in

dev/stores/account.ts:743

___

### removeWalletAddress

▸ **removeWalletAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.removeWalletAddress

#### Defined in

dev/stores/account.ts:716

___

### setAccounts

▸ **setAccounts**(`accounts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setAccounts

#### Defined in

dev/stores/account.ts:722

___

### setActiveAccount

▸ **setActiveAccount**(`activeAccount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeAccount` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setActiveAccount

#### Defined in

dev/stores/account.ts:725

___

### setMnemonic

▸ **setMnemonic**(`mnemonic?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic?` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearInstance.setMnemonic

#### Defined in

dev/stores/account.ts:731

___

### tryRestoreMnemonicFromStorage

▸ **tryRestoreMnemonicFromStorage**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.tryRestoreMnemonicFromStorage

#### Defined in

dev/stores/account.ts:737
