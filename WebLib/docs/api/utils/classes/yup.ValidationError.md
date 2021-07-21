---
id: "yup.ValidationError"
title: "Class: ValidationError"
sidebar_label: "yup.ValidationError"
custom_edit_url: null
---

[yup](../modules/yup.md).ValidationError

## Hierarchy

- `Error`

  ↳ **`ValidationError`**

## Constructors

### constructor

• **new ValidationError**(`errorOrErrors`, `value?`, `field?`, `type?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorOrErrors` | `string` \| [`ValidationError`](yup.ValidationError.md) \| [`ValidationError`](yup.ValidationError.md)[] |
| `value?` | `any` |
| `field?` | `string` |
| `type?` | `string` |

#### Overrides

Error.constructor

## Properties

### errors

• **errors**: `string`[]

___

### inner

• **inner**: [`ValidationError`](yup.ValidationError.md)[]

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### params

• `Optional` **params**: `Params`

___

### path

• `Optional` **path**: `string`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### type

• `Optional` **type**: `string`

___

### value

• **value**: `any`

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

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

___

### isError

▸ `Static` **isError**(`err`): err is ValidationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

err is ValidationError
