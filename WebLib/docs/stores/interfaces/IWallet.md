---
id: "IWallet"
title: "Interface: IWallet"
sidebar_label: "IWallet"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `MobxClearInstance`<typeof `Wallet`\>

  ↳ **`IWallet`**

## Properties

### accounts

• **accounts**: `IMSTArray`<`ISimpleType`<`string`\>\> & `IStateTreeNode`<`IArrayType`<`ISimpleType`<`string`\>\>\>

#### Inherited from

MobxClearInstance.accounts

___

### activeAccount

• **activeAccount**: `string`

#### Inherited from

MobxClearInstance.activeAccount

___

### addAddressCmd

• **addAddressCmd**: [`IWalletAddressCmd`](IWalletAddressCmd.md)

#### Overrides

MobxClearInstance.addAddressCmd

___

### mnemonic

• **mnemonic**: [`IMnemonic`](IMnemonic.md)

#### Overrides

MobxClearInstance.mnemonic

___

### removeAddressCmd

• **removeAddressCmd**: [`IWalletAddressCmd`](IWalletAddressCmd.md)

#### Overrides

MobxClearInstance.removeAddressCmd

## Methods

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.addWalletAddress

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

___

### clearMnemonic

▸ **clearMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearMnemonic

___

### generateMnemonic

▸ **generateMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.generateMnemonic

___

### getMnemonic

▸ **getMnemonic**(): `string`

#### Returns

`string`

#### Inherited from

MobxClearInstance.getMnemonic

___

### removeMnemonic

▸ **removeMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.removeMnemonic

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

___

### tryRestoreMnemonicFromStorage

▸ **tryRestoreMnemonicFromStorage**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.tryRestoreMnemonicFromStorage
