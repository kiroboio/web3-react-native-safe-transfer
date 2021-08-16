---
id: "yup.ArraySchema"
title: "Class: ArraySchema<T, C, TIn, TOut>"
sidebar_label: "yup.ArraySchema"
custom_edit_url: null
---

[yup](../modules/yup.md).ArraySchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../modules/yup.md#anyschema) \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../modules/yup.md#typeof)<`T`\>[]\>[`TypeOf`](../modules/yup.md#typeof)<`T`\>[] \| `undefined` |
| `TOut` | extends `Maybe`<[`Asserts`](../modules/yup.md#asserts)<`T`\>[]\>[`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema.md)<`TIn`, `C`, `TOut`\>

  ↳ **`ArraySchema`**

## Constructors

### constructor

• **new ArraySchema**<`T`, `C`, `TIn`, `TOut`\>(`type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../modules/yup.md#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../modules/yup.md#typeof)<`T`\>[]\>`undefined` \| [`TypeOf`](../modules/yup.md#typeof)<`T`\>[] |
| `TOut` | extends `Maybe`<[`Asserts`](../modules/yup.md#asserts)<`T`\>[]\>[`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Overrides

[BaseSchema](yup.BaseSchema.md).[constructor](yup.BaseSchema.md#constructor)

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TIn`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[__inputType](yup.BaseSchema.md#__inputtype)

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[__isYupSchema__](yup.BaseSchema.md#__isyupschema__)

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOut`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[__outputType](yup.BaseSchema.md#__outputtype)

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[_blacklist](yup.BaseSchema.md#_blacklist)

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[_whitelist](yup.BaseSchema.md#_whitelist)

___

### deps

• `Readonly` **deps**: readonly `string`[]

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[deps](yup.BaseSchema.md#deps)

___

### equals

• **equals**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

##### Returns

[`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[equals](yup.BaseSchema.md#equals)

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[exclusiveTests](yup.BaseSchema.md#exclusivetests)

___

### innerType

• `Optional` **innerType**: `T`

___

### is

• **is**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

##### Returns

[`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[is](yup.BaseSchema.md#is)

___

### nope

• **nope**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

##### Returns

[`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nope](yup.BaseSchema.md#nope)

___

### not

• **not**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

##### Returns

[`BaseSchema`](yup.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[not](yup.BaseSchema.md#not)

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[spec](yup.BaseSchema.md#spec)

___

### tests

• **tests**: `Test`[]

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[tests](yup.BaseSchema.md#tests)

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../modules/yup.md#anyschema)<`any`, `any`, `any`\>\>[]

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transforms](yup.BaseSchema.md#transforms)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[type](yup.BaseSchema.md#type)

## Accessors

### \_subType

• `Private` `get` **_subType**(): `any`

#### Returns

`any`

___

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

## Methods

### \_cast

▸ `Protected` **_cast**(`_value`, `_opts`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `_opts` | `InternalOptions`<`C`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_cast](yup.BaseSchema.md#_cast)

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[_getDefault](yup.BaseSchema.md#_getdefault)

___

### \_isPresent

▸ `Protected` **_isPresent**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[_isPresent](yup.BaseSchema.md#_ispresent)

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TIn\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_typeCheck](yup.BaseSchema.md#_typecheck)

___

### \_validate

▸ `Protected` **_validate**(`_value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options` | `undefined` \| `InternalOptions`<`C`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_validate](yup.BaseSchema.md#_validate)

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`C`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[cast](yup.BaseSchema.md#cast)

___

### clone

▸ **clone**(`spec?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `SchemaSpec`<`any`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[clone](yup.BaseSchema.md#clone)

___

### compact

▸ **compact**(`rejector?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rejector?` | `RejectorFn` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ArraySchema`](yup.ArraySchema.md)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[concat](yup.BaseSchema.md#concat)

▸ **concat**(`schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`any`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[concat](yup.BaseSchema.md#concat)

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[default](yup.BaseSchema.md#default)

___

### defined

▸ **defined**(): `DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[defined](yup.BaseSchema.md#defined)

___

### describe

▸ **describe**(): `SchemaInnerTypeDescription`

#### Returns

`SchemaInnerTypeDescription`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[describe](yup.BaseSchema.md#describe)

___

### ensure

▸ **ensure**(): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

___

### getDefault

▸ **getDefault**(`options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[getDefault](yup.BaseSchema.md#getdefault)

___

### isType

▸ **isType**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[isType](yup.BaseSchema.md#istype)

___

### isValid

▸ **isValid**(`value`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[isValid](yup.BaseSchema.md#isvalid)

___

### isValidSync

▸ **isValidSync**(`value`, `options?`): value is TOut

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

value is TOut

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[isValidSync](yup.BaseSchema.md#isvalidsync)

___

### label

▸ **label**(`label`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[label](yup.BaseSchema.md#label)

___

### length

▸ **length**(`length`, `message?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

___

### max

▸ **max**(`max`, `message?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

▸ **meta**(`obj`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

___

### min

▸ **min**(`min`, `message?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../modules/yup.md#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notOneOf](yup.BaseSchema.md#notoneof)

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notRequired](yup.BaseSchema.md#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

▸ **nullable**(`isNullable`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../modules/yup.md#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

___

### of

▸ **of**<`TInner`\>(`schema`): [`ArraySchema`](yup.ArraySchema.md)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../modules/yup.md#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../modules/yup.md#asserts)<`TInner`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInner` | extends [`BaseSchema`](yup.BaseSchema.md)<`any`, `any`, `any`, `TInner`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TInner` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../modules/yup.md#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../modules/yup.md#asserts)<`TInner`\>[]\>

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../modules/yup.md#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[oneOf](yup.BaseSchema.md#oneof)

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[optional](yup.BaseSchema.md#optional)

___

### required

▸ **required**(`msg?`): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[required](yup.BaseSchema.md#required)

___

### resolve

▸ **resolve**(`options`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[resolve](yup.BaseSchema.md#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strict](yup.BaseSchema.md#strict)

___

### strip

▸ **strip**(`strip?`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strip](yup.BaseSchema.md#strip)

___

### test

▸ **test**(`options`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

Adds a test function to the schema's queue of tests.
tests can be exclusive or non-exclusive.

- exclusive tests, will replace any existing tests of the same name.
- non-exclusive: can be stacked

If a non-exclusive test is added to a schema with an exclusive test of the same name
the exclusive test is removed and further tests of the same name will be stacked.

If an exclusive test is added to a schema with non-exclusive tests of the same name
the previous tests are removed and further tests of the same name will replace each other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TestConfig`](../modules/yup.md#testconfig)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`test`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `test`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `message`, `test`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

___

### transform

▸ **transform**(`fn`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transform](yup.BaseSchema.md#transform)

___

### typeError

▸ **typeError**(`message`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[typeError](yup.BaseSchema.md#typeerror)

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[validate](yup.BaseSchema.md#validate)

___

### validateAt

▸ **validateAt**(`path`, `value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[validateAt](yup.BaseSchema.md#validateat)

___

### validateSync

▸ **validateSync**(`value`, `options?`): `TOut`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[validateSync](yup.BaseSchema.md#validatesync)

___

### validateSyncAt

▸ **validateSyncAt**(`path`, `value`, `options?`): `TOut`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[validateSyncAt](yup.BaseSchema.md#validatesyncat)

___

### when

▸ **when**(`options`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

▸ **when**(`keys`, `options`): [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

___

### withMutation

▸ **withMutation**<`T`\>(`fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`schema`: [`ArraySchema`](yup.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[withMutation](yup.BaseSchema.md#withmutation)
