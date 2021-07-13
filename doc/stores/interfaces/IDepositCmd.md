[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IDepositCmd

# Interface: IDepositCmd

## Hierarchy

- `MobxClearInstance`<typeof [`DepositCmd`](../modules.md#depositcmd)\>

  ↳ **`IDepositCmd`**

## Table of contents

### Properties

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

### from

• **from**: `string`

#### Inherited from

MobxClearInstance.from

___

### is

• **is**: { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IOptionalIType`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>, [`undefined`]\>\>

#### Inherited from

MobxClearInstance.is

___

### message

• **message**: `string`

#### Inherited from

MobxClearInstance.message

___

### privateSalt

• **privateSalt**: `string`

#### Inherited from

MobxClearInstance.privateSalt

___

### publicSalt

• **publicSalt**: `string`

#### Inherited from

MobxClearInstance.publicSalt

___

### secretHash

• **secretHash**: `string`

#### Inherited from

MobxClearInstance.secretHash

___

### to

• **to**: `string`

#### Inherited from

MobxClearInstance.to

___

### value

• **value**: `string`

#### Inherited from

MobxClearInstance.value

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clear

#### Defined in

dev/stores/account.ts:174

___

### clearErrors

▸ **clearErrors**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.clearErrors

#### Defined in

dev/stores/account.ts:170

___

### done

▸ **done**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.done

#### Defined in

dev/stores/account.ts:164

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

MobxClearInstance.failed

#### Defined in

dev/stores/account.ts:167

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

MobxClearInstance.prepare

#### Defined in

dev/stores/account.ts:466

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MobxClearInstance.start

#### Defined in

dev/stores/account.ts:161
