[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IDepositCmd

# Interface: IDepositCmd

## Hierarchy

- `Instance`<typeof [`DepositCmd`](../modules.md#depositcmd)\>

  ↳ **`IDepositCmd`**

## Table of contents

### Properties

- [[$nonEmptyObject]](IDepositCmd.md#[$nonemptyobject])
- [[$stateTreeNodeType]](IDepositCmd.md#[$statetreenodetype])
- [from](IDepositCmd.md#from)
- [is](IDepositCmd.md#is)
- [message](IDepositCmd.md#message)
- [privateSalt](IDepositCmd.md#privatesalt)
- [publicSalt](IDepositCmd.md#publicsalt)
- [secretHash](IDepositCmd.md#secrethash)
- [to](IDepositCmd.md#to)
- [value](IDepositCmd.md#value)

### Methods

- [clear](IDepositCmd.md#clear)
- [clearErrors](IDepositCmd.md#clearerrors)
- [done](IDepositCmd.md#done)
- [failed](IDepositCmd.md#failed)
- [prepare](IDepositCmd.md#prepare)
- [start](IDepositCmd.md#start)

## Properties

### [$nonEmptyObject]

• `Optional` **[$nonEmptyObject]**: `any`

#### Inherited from

Instance.\_\_@$nonEmptyObject@1525

#### Defined in

node_modules/mobx-state-tree/dist/types/complex-types/model.d.ts:46

___

### [$stateTreeNodeType]

• `Optional` `Readonly` **[$stateTreeNodeType]**: [`any`] \| [`IModelType`<{ `is`: `IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>  } & { `from`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `message`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `privateSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `publicSalt`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `secretHash`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `to`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\> ; `value`: `IOptionalIType`<`ISimpleType`<`string`\>, [`undefined`]\>  }, { `clear`: () => `void` ; `clearErrors`: () => `void` ; `done`: () => `void` ; `failed`: (`__namedParameters`: { `message`: `string`  }) => `void` ; `start`: () => `void`  } & { `prepare`: (`params`: [`DepositCmdParams`](DepositCmdParams.md)) => `void`  }, `_NotCustomized`, `_NotCustomized`\>]

#### Inherited from

Instance.\_\_@$stateTreeNodeType@1528

#### Defined in

node_modules/mobx-state-tree/dist/core/node/node-utils.d.ts:9

___

### from

• **from**: `string`

#### Inherited from

Instance.from

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

Instance.is

___

### message

• **message**: `string`

#### Inherited from

Instance.message

___

### privateSalt

• **privateSalt**: `string`

#### Inherited from

Instance.privateSalt

___

### publicSalt

• **publicSalt**: `string`

#### Inherited from

Instance.publicSalt

___

### secretHash

• **secretHash**: `string`

#### Inherited from

Instance.secretHash

___

### to

• **to**: `string`

#### Inherited from

Instance.to

___

### value

• **value**: `string`

#### Inherited from

Instance.value

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clear

#### Defined in

dev/stores/account.ts:172

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

Instance.clearErrors

#### Defined in

dev/stores/account.ts:168

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

Instance.done

#### Defined in

dev/stores/account.ts:162

___

### failed

▸ **failed**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.message` | `string` |

#### Returns

`void`

#### Inherited from

Instance.failed

#### Defined in

dev/stores/account.ts:165

___

### prepare

▸ **prepare**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DepositCmdParams`](DepositCmdParams.md) |

#### Returns

`void`

#### Inherited from

Instance.prepare

#### Defined in

dev/stores/account.ts:464

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

Instance.start

#### Defined in

dev/stores/account.ts:159
