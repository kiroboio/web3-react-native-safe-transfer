---
id: "IWallet"
title: "Interface: IWallet"
sidebar_label: "IWallet"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearWallet`

  ↳ **`IWallet`**

## Properties

### accounts

• **accounts**: `string`[]

___

### activeAccount

• **activeAccount**: `string`

#### Inherited from

MobxClearWallet.activeAccount

___

### addAddressCmd

• **addAddressCmd**: [`IWalletAddressCmd`](IWalletAddressCmd.md)

#### Overrides

MobxClearWallet.addAddressCmd

___

### mnemonic

• **mnemonic**: [`IMnemonic`](IMnemonic.md)

#### Overrides

MobxClearWallet.mnemonic

___

### removeAddress

• **removeAddress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **is**(): `Object`` | `Object` |
| `run` | (`address`: `string`) => `void` |

#### Inherited from

MobxClearWallet.removeAddress

___

### removeAddressCmd

• **removeAddressCmd**: [`IWalletAddressCmd`](IWalletAddressCmd.md)

#### Overrides

MobxClearWallet.removeAddressCmd

## Methods

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearWallet.addWalletAddress

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

MobxClearWallet.changeMnemonic

___

### clearMnemonic

▸ **clearMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearWallet.clearMnemonic

___

### generateMnemonic

▸ **generateMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearWallet.generateMnemonic

___

### getMnemonic

▸ **getMnemonic**(): `string`

#### Returns

`string`

#### Inherited from

MobxClearWallet.getMnemonic

___

### removeMnemonic

▸ **removeMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearWallet.removeMnemonic

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

MobxClearWallet.setAccounts

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

MobxClearWallet.setActiveAccount

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

MobxClearWallet.setMnemonic

___

### tryRestoreMnemonicFromStorage

▸ **tryRestoreMnemonicFromStorage**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearWallet.tryRestoreMnemonicFromStorage
