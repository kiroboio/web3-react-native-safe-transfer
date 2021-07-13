[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / yupEth

# Namespace: yupEth

## Table of contents

### References

- [InferType](yupEth.md#infertype)
- [boolean](yupEth.md#boolean)

### Namespaces

- [array](yupEth.array.md)
- [bool](yupEth.bool.md)
- [date](yupEth.date.md)
- [mixed](yupEth.mixed.md)
- [number](yupEth.number.md)
- [object](yupEth.object.md)
- [string](yupEth.string.md)

### Classes

- [ArraySchema](../classes/yupEth.ArraySchema.md)
- [BaseSchema](../classes/yupEth.BaseSchema.md)
- [BooleanSchema](../classes/yupEth.BooleanSchema.md)
- [DateSchema](../classes/yupEth.DateSchema.md)
- [ObjectSchema](../classes/yupEth.ObjectSchema.md)
- [ValidationError](../classes/yupEth.ValidationError.md)
- [default](../classes/yupEth.default.md)
- [default](../classes/yupEth.default-1.md)

### Type aliases

- [AnyObjectSchema](yupEth.md#anyobjectschema)
- [AnySchema](yupEth.md#anyschema)
- [Asserts](yupEth.md#asserts)
- [CreateErrorOptions](yupEth.md#createerroroptions)
- [SchemaOf](yupEth.md#schemaof)
- [TestConfig](yupEth.md#testconfig)
- [TestContext](yupEth.md#testcontext)
- [TestFunction](yupEth.md#testfunction)
- [TestOptions](yupEth.md#testoptions)
- [TypeOf](yupEth.md#typeof)

### Variables

- [MixedSchema](yupEth.md#mixedschema)

### Functions

- [addMethod](yupEth.md#addmethod)
- [array](yupEth.md#array)
- [bool](yupEth.md#bool)
- [date](yupEth.md#date)
- [isSchema](yupEth.md#isschema)
- [lazy](yupEth.md#lazy)
- [mixed](yupEth.md#mixed)
- [number](yupEth.md#number)
- [object](yupEth.md#object)
- [reach](yupEth.md#reach)
- [ref](yupEth.md#ref)
- [setLocale](yupEth.md#setlocale)
- [string](yupEth.md#string)

## References

### InferType

Renames and exports: [Asserts](yupEth.md#asserts)

___

### boolean

Renames and exports: [bool](yupEth.md#bool)

## Type aliases

### AnyObjectSchema

Ƭ **AnyObjectSchema**: [`ObjectSchema`](../classes/yupEth.ObjectSchema.md)<`any`, `any`, `any`, `any`\>

#### Defined in

node_modules/yup/lib/index.d.ts:24

___

### AnySchema

Ƭ **AnySchema**<`Type`, `TContext`, `TOut`\>: [`BaseSchema`](../classes/yupEth.BaseSchema.md)<`Type`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |
| `TContext` | `any` |
| `TOut` | `any` |

#### Defined in

node_modules/yup/lib/schema.d.ts:22

___

### Asserts

Ƭ **Asserts**<`TSchema`\>: `TSchema`[``"__outputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

#### Defined in

node_modules/yup/lib/util/types.d.ts:7

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

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:5

___

### SchemaOf

Ƭ **SchemaOf**<`T`\>: `T` extends infer E[] ? [`ArraySchema`](../classes/yupEth.ArraySchema.md)<[`SchemaOf`](yupEth.md#schemaof)<`E`\> \| `Lazy`<[`SchemaOf`](yupEth.md#schemaof)<`E`\>\>\> : `T` extends `AnyObject` ? `ObjectSchemaOf`<`T`\> : [`BaseSchema`](../classes/yupEth.BaseSchema.md)<`Maybe`<`T`\>, `AnyObject`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/yup/lib/index.d.ts:23

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
| `test` | [`TestFunction`](yupEth.md#testfunction)<`TValue`, `TContext`\> |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:29

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
| `createError` | (`params?`: [`CreateErrorOptions`](yupEth.md#createerroroptions)) => [`ValidationError`](../classes/yupEth.ValidationError.md) |
| `resolve` | <T\>(`value`: `T` \| `default`<`T`\>) => `T` |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:11

___

### TestFunction

Ƭ **TestFunction**<`T`, `TContext`\>: (`this`: [`TestContext`](yupEth.md#testcontext)<`TContext`\>, `value`: `T`, `context`: [`TestContext`](yupEth.md#testcontext)<`TContext`\>) => `boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TContext` | {} |

#### Type declaration

▸ (`this`, `value`, `context`): `boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`TestContext`](yupEth.md#testcontext)<`TContext`\> |
| `value` | `T` |
| `context` | [`TestContext`](yupEth.md#testcontext)<`TContext`\> |

##### Returns

`boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md) \| `Promise`<`boolean` \| [`ValidationError`](../classes/yupEth.ValidationError.md)\>

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:19

___

### TestOptions

Ƭ **TestOptions**<`TSchema`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends [`AnySchema`](yupEth.md#anyschema)[`AnySchema`](yupEth.md#anyschema) |

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

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:20

___

### TypeOf

Ƭ **TypeOf**<`TSchema`\>: `TSchema`[``"__inputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

#### Defined in

node_modules/yup/lib/util/types.d.ts:6

## Variables

### MixedSchema

• `Const` **MixedSchema**: typeof `MixedSchema`

#### Defined in

node_modules/yup/lib/mixed.d.ts:15

## Functions

### addMethod

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../classes/yupEth.BaseSchema.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | (...`arg`: `any`[]) => `T` |
| `name` | `string` |
| `fn` | (`this`: `T`, ...`args`: `any`[]) => `T` |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/index.d.ts:17

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => [`AnySchema`](yupEth.md#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | `T` |
| `name` | `string` |
| `fn` | (`this`: `InstanceType`<`T`\>, ...`args`: `any`[]) => `InstanceType`<`T`\> |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/index.d.ts:18

___

### array

▸ **array**<`C`, `T`\>(`type?`): `OptionalArraySchema`<`T`, `C`, [`TypeOf`](yupEth.md#typeof)<`T`\>[] \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `AnyObject``AnyObject` |
| `T` | extends [`AnySchema`](yupEth.md#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\>[`AnySchema`](yupEth.md#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Returns

`OptionalArraySchema`<`T`, `C`, [`TypeOf`](yupEth.md#typeof)<`T`\>[] \| `undefined`\>

#### Defined in

node_modules/yup/lib/array.d.ts:8

___

### bool

▸ **bool**(): [`BooleanSchema`](../classes/yupEth.BooleanSchema.md)<`boolean` \| `undefined`, `Record`<`string`, `any`\>, `boolean` \| `undefined`\>

#### Returns

[`BooleanSchema`](../classes/yupEth.BooleanSchema.md)<`boolean` \| `undefined`, `Record`<`string`, `any`\>, `boolean` \| `undefined`\>

#### Defined in

node_modules/yup/lib/boolean.d.ts:5

___

### date

▸ **date**(): [`DateSchema`](../classes/yupEth.DateSchema.md)<`Date` \| `undefined`, `Record`<`string`, `any`\>, `Date` \| `undefined`\>

#### Returns

[`DateSchema`](../classes/yupEth.DateSchema.md)<`Date` \| `undefined`, `Record`<`string`, `any`\>, `Date` \| `undefined`\>

#### Defined in

node_modules/yup/lib/date.d.ts:6

___

### isSchema

▸ `Const` **isSchema**(`obj`): obj is SchemaLike

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is SchemaLike

#### Defined in

node_modules/yup/lib/util/isSchema.d.ts:2

___

### lazy

▸ **lazy**<`T`\>(`builder`): `Lazy`<`T`, `ContextOf`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../classes/yupEth.BaseSchema.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | `LazyBuilder`<`T`\> |

#### Returns

`Lazy`<`T`, `ContextOf`<`T`\>\>

#### Defined in

node_modules/yup/lib/Lazy.d.ts:7

___

### mixed

▸ **mixed**<`TType`\>(): `MixedSchema`<`TType` \| `undefined`, `Record`<`string`, `any`\>, `TType` \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | `any` |

#### Returns

`MixedSchema`<`TType` \| `undefined`, `Record`<`string`, `any`\>, `TType` \| `undefined`\>

#### Defined in

node_modules/yup/lib/mixed.d.ts:17

___

### number

▸ **number**(): [`default`](../classes/yupEth.default-1.md)<`number` \| `undefined`, `Record`<`string`, `any`\>, `number` \| `undefined`\>

#### Returns

[`default`](../classes/yupEth.default-1.md)<`number` \| `undefined`, `Record`<`string`, `any`\>, `number` \| `undefined`\>

#### Defined in

node_modules/yup/lib/number.d.ts:6

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

#### Defined in

node_modules/yup/lib/object.d.ts:53

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

#### Defined in

node_modules/yup/lib/util/reach.d.ts:6

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

#### Defined in

node_modules/yup/lib/Reference.d.ts:5

___

### setLocale

▸ **setLocale**(`custom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `custom` | `any` |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/setLocale.d.ts:1

___

### string

▸ **string**(): [`default`](../classes/yupEth.default.md)<`string` \| `undefined`, `Record`<`string`, `any`\>, `string` \| `undefined`\>

#### Returns

[`default`](../classes/yupEth.default.md)<`string` \| `undefined`, `Record`<`string`, `any`\>, `string` \| `undefined`\>

#### Defined in

node_modules/yup/lib/string.d.ts:13
