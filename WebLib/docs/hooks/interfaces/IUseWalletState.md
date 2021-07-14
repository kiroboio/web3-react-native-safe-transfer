[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IUseWalletState

# Interface: IUseWalletState

## Hierarchy

- `ReturnType`<typeof `useWallet`\>

  ↳ **`IUseWalletState`**

## Table of contents

### Properties

- [error](IUseWalletState.md#error)
- [generateNewMnemonic](IUseWalletState.md#generatenewmnemonic)
- [getActiveAccountFromStorage](IUseWalletState.md#getactiveaccountfromstorage)
- [getCredentialsFromStorage](IUseWalletState.md#getcredentialsfromstorage)
- [getMnemonic](IUseWalletState.md#getmnemonic)
- [mnemonic](IUseWalletState.md#mnemonic)
- [provider](IUseWalletState.md#provider)
- [setActiveAccount](IUseWalletState.md#setactiveaccount)
- [setCredentialsToStorage](IUseWalletState.md#setcredentialstostorage)
- [setNewMnemonic](IUseWalletState.md#setnewmnemonic)
- [setProvider](IUseWalletState.md#setprovider)

## Properties

### error

• **error**: `Error`

#### Inherited from

ReturnType.error

#### Defined in

useWallet.ts:14

___

### generateNewMnemonic

• **generateNewMnemonic**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

ReturnType.generateNewMnemonic

#### Defined in

useWallet.ts:19

___

### getActiveAccountFromStorage

• **getActiveAccountFromStorage**: () => `undefined` \| `string`

#### Type declaration

▸ (): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Inherited from

ReturnType.getActiveAccountFromStorage

#### Defined in

useWallet.ts:23

___

### getCredentialsFromStorage

• **getCredentialsFromStorage**: () => { `mnemonic`: `undefined` \| `string` ; `rpc`: `undefined` \| `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `mnemonic` | `undefined` \| `string` |
| `rpc` | `undefined` \| `string` |

#### Inherited from

ReturnType.getCredentialsFromStorage

#### Defined in

useWallet.ts:21

___

### getMnemonic

• **getMnemonic**: () => `undefined` \| `string`

#### Type declaration

▸ (): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Inherited from

ReturnType.getMnemonic

#### Defined in

useWallet.ts:17

___

### mnemonic

• **mnemonic**: `undefined` \| `string`

#### Inherited from

ReturnType.mnemonic

#### Defined in

useWallet.ts:15

___

### provider

• **provider**: `undefined` \| `string`

#### Inherited from

ReturnType.provider

#### Defined in

useWallet.ts:16

___

### setActiveAccount

• **setActiveAccount**: (`account`: `string`) => `void`

#### Type declaration

▸ (`account`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

##### Returns

`void`

#### Inherited from

ReturnType.setActiveAccount

#### Defined in

useWallet.ts:24

___

### setCredentialsToStorage

• **setCredentialsToStorage**: (`rpc`: `string`, `mnemonic`: `string`) => `void`

#### Type declaration

▸ (`rpc`, `mnemonic`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | `string` |
| `mnemonic` | `string` |

##### Returns

`void`

#### Inherited from

ReturnType.setCredentialsToStorage

#### Defined in

useWallet.ts:22

___

### setNewMnemonic

• **setNewMnemonic**: (`mnemonic`: `undefined` \| `string`) => `void`

#### Type declaration

▸ (`mnemonic`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `undefined` \| `string` |

##### Returns

`void`

#### Inherited from

ReturnType.setNewMnemonic

#### Defined in

useWallet.ts:18

___

### setProvider

• **setProvider**: `Dispatch`<`SetStateAction`<`undefined` \| `string`\>\>

#### Inherited from

ReturnType.setProvider

#### Defined in

useWallet.ts:20
