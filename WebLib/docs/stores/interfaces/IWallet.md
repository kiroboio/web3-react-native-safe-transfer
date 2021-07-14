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

#### Defined in

dev/stores/account.ts:783

___

### mnemonic

• **mnemonic**: [`IMnemonic`](IMnemonic.md)

#### Overrides

MobxClearInstance.mnemonic

#### Defined in

dev/stores/account.ts:782

___

### removeAddressCmd

• **removeAddressCmd**: [`IWalletAddressCmd`](IWalletAddressCmd.md)

#### Overrides

MobxClearInstance.removeAddressCmd

#### Defined in

dev/stores/account.ts:784

## Methods

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.addWalletAddress

#### Defined in

dev/stores/account.ts:747

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

dev/stores/account.ts:776

___

### clearMnemonic

▸ **clearMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearMnemonic

#### Defined in

dev/stores/account.ts:770

___

### generateMnemonic

▸ **generateMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.generateMnemonic

#### Defined in

dev/stores/account.ts:758

___

### getMnemonic

▸ **getMnemonic**(): `string`

#### Returns

`string`

#### Inherited from

MobxClearInstance.getMnemonic

#### Defined in

dev/stores/account.ts:764

___

### removeMnemonic

▸ **removeMnemonic**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.removeMnemonic

#### Defined in

dev/stores/account.ts:773

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

dev/stores/account.ts:744

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

dev/stores/account.ts:750

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

dev/stores/account.ts:755

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

dev/stores/account.ts:761

___

### tryRestoreMnemonicFromStorage

▸ **tryRestoreMnemonicFromStorage**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.tryRestoreMnemonicFromStorage

#### Defined in

dev/stores/account.ts:767
