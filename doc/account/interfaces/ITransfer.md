[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ITransfer

# Interface: ITransfer

## Hierarchy

- `Instance`<typeof [`Transfer`](../modules.md#transfer)\>

  ↳ **`ITransfer`**

## Table of contents

### Properties

- [[$nonEmptyObject]](ITransfer.md#[$nonemptyobject])
- [[$stateTreeNodeType]](ITransfer.md#[$statetreenodetype])
- [confirmedBlock](ITransfer.md#confirmedblock)
- [fees](ITransfer.md#fees)
- [from](ITransfer.md#from)
- [id](ITransfer.md#id)
- [message](ITransfer.md#message)
- [salt](ITransfer.md#salt)
- [secretHash](ITransfer.md#secrethash)
- [state](ITransfer.md#state)
- [to](ITransfer.md#to)
- [token](ITransfer.md#token)
- [txid](ITransfer.md#txid)
- [updatedAt](ITransfer.md#updatedat)
- [value](ITransfer.md#value)

### Methods

- [update](ITransfer.md#update)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### confirmedBlock

• **confirmedBlock**: `number`

#### Inherited from

Instance.confirmedBlock

___

### fees

• **fees**: `string`

#### Inherited from

Instance.fees

___

### from

• **from**: `string`

#### Inherited from

Instance.from

___

### id

• **id**: `string`

#### Inherited from

Instance.id

___

### message

• **message**: `string`

#### Inherited from

Instance.message

___

### salt

• **salt**: `string`

#### Inherited from

Instance.salt

___

### secretHash

• **secretHash**: `string`

#### Inherited from

Instance.secretHash

___

### state

• **state**: `EthTransferState`

#### Inherited from

Instance.state

___

### to

• **to**: `string`

#### Inherited from

Instance.to

___

### token

• **token**: { `address`: `string` ; `decimals`: `number` ; `symbol`: `string` ; `type`: `string`  } & `NonEmptyObject` & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.token

___

### txid

• **txid**: `string`

#### Inherited from

Instance.txid

___

### updatedAt

• **updatedAt**: `Date` & `IStateTreeNode`<`IType`<`number` \| `Date`, `number`, `Date`\>\>

#### Inherited from

Instance.updatedAt

___

### value

• **value**: `string`

#### Inherited from

Instance.value

## Methods

### update

▸ **update**(`state`, `txid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `EthTransferState` |
| `txid?` | `string` |

#### Returns

`void`

#### Inherited from

Instance.update

#### Defined in

dev/stores/account.ts:96
