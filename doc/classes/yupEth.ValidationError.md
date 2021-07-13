[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / ValidationError

# Class: ValidationError

[yupEth](../modules/yupEth.md).ValidationError

## Hierarchy

- `Error`

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](yupEth.ValidationError.md#constructor)

### Properties

- [errors](yupEth.ValidationError.md#errors)
- [inner](yupEth.ValidationError.md#inner)
- [message](yupEth.ValidationError.md#message)
- [name](yupEth.ValidationError.md#name)
- [params](yupEth.ValidationError.md#params)
- [path](yupEth.ValidationError.md#path)
- [stack](yupEth.ValidationError.md#stack)
- [type](yupEth.ValidationError.md#type)
- [value](yupEth.ValidationError.md#value)
- [prepareStackTrace](yupEth.ValidationError.md#preparestacktrace)
- [stackTraceLimit](yupEth.ValidationError.md#stacktracelimit)

### Methods

- [captureStackTrace](yupEth.ValidationError.md#capturestacktrace)
- [formatError](yupEth.ValidationError.md#formaterror)
- [isError](yupEth.ValidationError.md#iserror)

## Constructors

### constructor

• **new ValidationError**(`errorOrErrors`, `value?`, `field?`, `type?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorOrErrors` | `string` \| [`ValidationError`](yupEth.ValidationError.md) \| [`ValidationError`](yupEth.ValidationError.md)[] |
| `value?` | `any` |
| `field?` | `string` |
| `type?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:11

## Properties

### errors

• **errors**: `string`[]

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:6

___

### inner

• **inner**: [`ValidationError`](yupEth.ValidationError.md)[]

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:8

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### params

• `Optional` **params**: `Params`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:7

___

### path

• `Optional` **path**: `string`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:4

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• `Optional` **type**: `string`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:5

___

### value

• **value**: `any`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:3

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### formatError

▸ `Static` **formatError**(`message`, `params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `params` | `Params` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:9

___

### isError

▸ `Static` **isError**(`err`): err is ValidationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

err is ValidationError

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:10
