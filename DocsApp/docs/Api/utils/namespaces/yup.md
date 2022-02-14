---
id: "yup"
title: "Namespace: yup"
sidebar_label: "yup"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [array](yup.array)
- [bool](yup.bool)
- [date](yup.date)
- [mixed](yup.mixed)
- [number](yup.number)
- [object](yup.object)
- [string](yup.string)

## Classes

- [ArraySchema](../classes/yup.ArraySchema)
- [BaseSchema](../classes/yup.BaseSchema)
- [BooleanSchema](../classes/yup.BooleanSchema)
- [DateSchema](../classes/yup.DateSchema)
- [ObjectSchema](../classes/yup.ObjectSchema)
- [ValidationError](../classes/yup.ValidationError)
- [default](../classes/yup.default)
- [default](../classes/yup.default-1)

## References

### InferType

Renames and re-exports [Asserts](yup#asserts)

___

### boolean

Renames and re-exports [bool](yup#bool)

## Type aliases

### AnyObjectSchema

Ƭ **AnyObjectSchema**: [`ObjectSchema`](../classes/yup.ObjectSchema)<`any`, `any`, `any`, `any`\>

___

### AnySchema

Ƭ **AnySchema**<`Type`, `TContext`, `TOut`\>: [`BaseSchema`](../classes/yup.BaseSchema)<`Type`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |
| `TContext` | `any` |
| `TOut` | `any` |

___

### Asserts

Ƭ **Asserts**<`TSchema`\>: `TSchema`[``"__outputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

___

### CreateErrorOptions

Ƭ **CreateErrorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`any`\> |
| `params?` | `ExtraParams` |
| `path?` | `string` |
| `type?` | `string` |

___

### SchemaOf

Ƭ **SchemaOf**<`T`\>: `T` extends infer E[] ? [`ArraySchema`](../classes/yup.ArraySchema)<[`SchemaOf`](yup#schemaof)<`E`\> \| `Lazy`<[`SchemaOf`](yup#schemaof)<`E`\>\>\> : `T` extends `AnyObject` ? `ObjectSchemaOf`<`T`\> : [`BaseSchema`](../classes/yup.BaseSchema)<`Maybe`<`T`\>, `AnyObject`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### TestConfig

Ƭ **TestConfig**<`TValue`, `TContext`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `unknown` |
| `TContext` | {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exclusive?` | `boolean` |
| `message?` | `Message`<`any`\> |
| `name?` | `string` |
| `params?` | `ExtraParams` |
| `test` | [`TestFunction`](yup#testfunction)<`TValue`, `TContext`\> |

___

### TestContext

Ƭ **TestContext**<`TContext`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContext` | {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options` | `ValidateOptions`<`TContext`\> |
| `parent` | `any` |
| `path` | `string` |
| `schema` | `any` |
| `createError` | (`params?`: [`CreateErrorOptions`](yup#createerroroptions)) => [`ValidationError`](../classes/yup.ValidationError) |
| `resolve` | <T\>(`value`: `T` \| `default`<`T`\>) => `T` |

___

### TestFunction

Ƭ **TestFunction**<`T`, `TContext`\>: (`this`: [`TestContext`](yup#testcontext)<`TContext`\>, `value`: `T`, `context`: [`TestContext`](yup#testcontext)<`TContext`\>) => `boolean` \| [`ValidationError`](../classes/yup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yup.ValidationError)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TContext` | {} |

#### Type declaration

▸ (`this`, `value`, `context`): `boolean` \| [`ValidationError`](../classes/yup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yup.ValidationError)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`TestContext`](yup#testcontext)<`TContext`\> |
| `value` | `T` |
| `context` | [`TestContext`](yup#testcontext)<`TContext`\> |

##### Returns

`boolean` \| [`ValidationError`](../classes/yup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yup.ValidationError)\>

___

### TestOptions

Ƭ **TestOptions**<`TSchema`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends [`AnySchema`](yup#anyschema) = [`AnySchema`](yup#anyschema) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `string` |
| `options` | `InternalOptions` |
| `originalValue` | `any` |
| `path?` | `string` |
| `schema` | `TSchema` |
| `sync?` | `boolean` |
| `value` | `any` |

___

### TypeOf

Ƭ **TypeOf**<`TSchema`\>: `TSchema`[``"__inputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

## Variables

### MixedSchema

• **MixedSchema**: typeof `MixedSchema`

## Functions

### addMethod

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../classes/yup.BaseSchema)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | (...`arg`: `any`[]) => `T` |
| `name` | `string` |
| `fn` | (...`args`: `any`[]) => `T` |

#### Returns

`void`

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => [`AnySchema`](yup#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | `T` |
| `name` | `string` |
| `fn` | (...`args`: `any`[]) => `InstanceType`<`T`\> |

#### Returns

`void`

___

### array

▸ **array**<`C`, `T`\>(`type?`): `OptionalArraySchema`<`T`, `C`, [`TypeOf`](yup#typeof)<`T`\>[] \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `AnyObject` = `AnyObject` |
| `T` | extends [`AnySchema`](yup#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> = [`AnySchema`](yup#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Returns

`OptionalArraySchema`<`T`, `C`, [`TypeOf`](yup#typeof)<`T`\>[] \| `undefined`\>

___

### bool

▸ **bool**(): [`BooleanSchema`](../classes/yup.BooleanSchema)<`boolean` \| `undefined`, `Record`<`string`, `any`\>, `boolean` \| `undefined`\>

#### Returns

[`BooleanSchema`](../classes/yup.BooleanSchema)<`boolean` \| `undefined`, `Record`<`string`, `any`\>, `boolean` \| `undefined`\>

___

### date

▸ **date**(): [`DateSchema`](../classes/yup.DateSchema)<`Date` \| `undefined`, `Record`<`string`, `any`\>, `Date` \| `undefined`\>

#### Returns

[`DateSchema`](../classes/yup.DateSchema)<`Date` \| `undefined`, `Record`<`string`, `any`\>, `Date` \| `undefined`\>

___

### isSchema

▸ `Const` **isSchema**(`obj`): obj is SchemaLike

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is SchemaLike

___

### lazy

▸ **lazy**<`T`\>(`builder`): `Lazy`<`T`, `ContextOf`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../classes/yup.BaseSchema)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | `LazyBuilder`<`T`\> |

#### Returns

`Lazy`<`T`, `ContextOf`<`T`\>\>

___

### mixed

▸ **mixed**<`TType`\>(): `MixedSchema`<`TType` \| `undefined`, `Record`<`string`, `any`\>, `TType` \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | `any` |

#### Returns

`MixedSchema`<`TType` \| `undefined`, `Record`<`string`, `any`\>, `TType` \| `undefined`\>

___

### number

▸ **number**(): [`default`](../classes/yup.default-1)<`number` \| `undefined`, `Record`<`string`, `any`\>, `number` \| `undefined`\>

#### Returns

[`default`](../classes/yup.default-1)<`number` \| `undefined`, `Record`<`string`, `any`\>, `number` \| `undefined`\>

___

### object

▸ **object**<`TShape`\>(`spec?`): `OptionalObjectSchema`<`TShape`, `Record`<`string`, `any`\>, `TypeOfShape`<`TShape`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

#### Returns

`OptionalObjectSchema`<`TShape`, `Record`<`string`, `any`\>, `TypeOfShape`<`TShape`\>\>

___

### reach

▸ `Const` **reach**(`obj`, `path`, `value?`, `context?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `path` | `string` |
| `value?` | `any` |
| `context?` | `any` |

#### Returns

`any`

___

### ref

▸ **ref**<`TValue`\>(`key`, `options?`): `Reference`<`TValue`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options?` | `ReferenceOptions`<`TValue`\> |

#### Returns

`Reference`<`TValue`\>

___

### setLocale

▸ **setLocale**(`custom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `custom` | `any` |

#### Returns

`void`

___

### string

▸ **string**(): [`default`](../classes/yup.default)<`string` \| `undefined`, `Record`<`string`, `any`\>, `string` \| `undefined`\>

#### Returns

[`default`](../classes/yup.default)<`string` \| `undefined`, `Record`<`string`, `any`\>, `string` \| `undefined`\>
