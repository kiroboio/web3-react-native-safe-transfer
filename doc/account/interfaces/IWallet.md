[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IWallet

# Interface: IWallet

## Hierarchy

- `SnapshotOut`<typeof `Wallet`\>

  ↳ **`IWallet`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IWallet.md#[$nonemptyobject])
- [accounts](IWallet.md#accounts)
- [activeAccount](IWallet.md#activeaccount)
- [addAddressCmd](IWallet.md#addaddresscmd)
- [mnemonic](IWallet.md#mnemonic)
- [removeAddressCmd](IWallet.md#removeaddresscmd)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

SnapshotOut.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### accounts

• **accounts**: `any`

#### Inherited from

SnapshotOut.accounts

___

### activeAccount

• **activeAccount**: `string`

#### Inherited from

SnapshotOut.activeAccount

___

### addAddressCmd

• **addAddressCmd**: `ModelSnapshotType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }\>

#### Inherited from

SnapshotOut.addAddressCmd

___

### mnemonic

• **mnemonic**: `ModelSnapshotType`<`Object`\>

#### Inherited from

SnapshotOut.mnemonic

___

### removeAddressCmd

• **removeAddressCmd**: `ModelSnapshotType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `address`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }\>

#### Inherited from

SnapshotOut.removeAddressCmd
