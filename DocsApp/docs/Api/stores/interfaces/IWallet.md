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

• **addAddressCmd**: [`IWalletAddressCmd`](IWalletAddress)

#### Overrides

MobxClearWallet.addAddressCmd

___

### mnemonic

• **mnemonic**: [`IMnemonic`](IMnemonic)

#### Overrides

MobxClearWallet.mnemonic

___

### removeAddress

• **removeAddress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| ``get` **is**(): `Object`` | {} |
| `run` | (`address`: `string`) => `void` |

#### Inherited from

MobxClearWallet.removeAddress

___

### removeAddressCmd

• **removeAddressCmd**: [`IWalletAddressCmd`](IWalletAddress)

#### Overrides

MobxClearWallet.removeAddressCmd

## Methods

### addAccount

▸ **addAccount**(`newAccount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newAccount` | `string` |

#### Returns

`void`

#### Inherited from

MobxClearWallet.addAccount

___

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
