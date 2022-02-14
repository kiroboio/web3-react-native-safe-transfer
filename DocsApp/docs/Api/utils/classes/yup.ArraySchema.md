---
id: "yup.ArraySchema"
title: "Class: ArraySchema<T, C, TIn, TOut>"
sidebar_label: "yup.ArraySchema"
custom_edit_url: null
---

[yup](../namespaces/yup).ArraySchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../namespaces/yup#anyschema) \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../namespaces/yup#typeof)<`T`\>[]\> = [`TypeOf`](../namespaces/yup#typeof)<`T`\>[] \| `undefined` |
| `TOut` | extends `Maybe`<[`Asserts`](../namespaces/yup#asserts)<`T`\>[]\> = [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema)<`TIn`, `C`, `TOut`\>

  ↳ **`ArraySchema`**

## Constructors

### constructor

• **new ArraySchema**<`T`, `C`, `TIn`, `TOut`\>(`type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../namespaces/yup#typeof)<`T`\>[]\> = `undefined` \| [`TypeOf`](../namespaces/yup#typeof)<`T`\>[] |
| `TOut` | extends `Maybe`<[`Asserts`](../namespaces/yup#asserts)<`T`\>[]\> = [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Overrides

[BaseSchema](yup.BaseSchema).[constructor](yup.BaseSchema#constructor)

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TIn`

#### Inherited from

[BaseSchema](yup.BaseSchema).[__inputType](yup.BaseSchema#__inputtype)

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Inherited from

[BaseSchema](yup.BaseSchema).[__isYupSchema__](yup.BaseSchema#__isyupschema__)

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOut`

#### Inherited from

[BaseSchema](yup.BaseSchema).[__outputType](yup.BaseSchema#__outputtype)

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Inherited from

[BaseSchema](yup.BaseSchema).[_blacklist](yup.BaseSchema#_blacklist)

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Inherited from

[BaseSchema](yup.BaseSchema).[_whitelist](yup.BaseSchema#_whitelist)

___

### deps

• `Readonly` **deps**: readonly `string`[]

#### Inherited from

[BaseSchema](yup.BaseSchema).[deps](yup.BaseSchema#deps)

___

### equals

• **equals**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[equals](yup.BaseSchema#equals)

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[exclusiveTests](yup.BaseSchema#exclusivetests)

___

### innerType

• `Optional` **innerType**: `T`

___

### is

• **is**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[is](yup.BaseSchema#is)

___

### nope

• **nope**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nope](yup.BaseSchema#nope)

___

### not

• **not**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](yup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[not](yup.BaseSchema#not)

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[spec](yup.BaseSchema#spec)

___

### tests

• **tests**: `Test`[]

#### Inherited from

[BaseSchema](yup.BaseSchema).[tests](yup.BaseSchema#tests)

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\>\>[]

#### Inherited from

[BaseSchema](yup.BaseSchema).[transforms](yup.BaseSchema#transforms)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[BaseSchema](yup.BaseSchema).[type](yup.BaseSchema#type)

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

#### Inherited from

BaseSchema.\_type

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

[BaseSchema](yup.BaseSchema).[_cast](yup.BaseSchema#_cast)

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[_getDefault](yup.BaseSchema#_getdefault)

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

[BaseSchema](yup.BaseSchema).[_isPresent](yup.BaseSchema#_ispresent)

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

[BaseSchema](yup.BaseSchema).[_typeCheck](yup.BaseSchema#_typecheck)

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

[BaseSchema](yup.BaseSchema).[_validate](yup.BaseSchema#_validate)

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

[BaseSchema](yup.BaseSchema).[cast](yup.BaseSchema#cast)

___

### clone

▸ **clone**(`spec?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `SchemaSpec`<`any`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema).[clone](yup.BaseSchema#clone)

___

### compact

▸ **compact**(`rejector?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rejector?` | `RejectorFn` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ArraySchema`](yup.ArraySchema)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Overrides

[BaseSchema](yup.BaseSchema).[concat](yup.BaseSchema#concat)

▸ **concat**(`schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`any`

#### Overrides

[BaseSchema](yup.BaseSchema).[concat](yup.BaseSchema#concat)

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

[BaseSchema](yup.BaseSchema).[default](yup.BaseSchema#default)

___

### defined

▸ **defined**(): `DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yup.BaseSchema).[defined](yup.BaseSchema#defined)

___

### describe

▸ **describe**(): `SchemaInnerTypeDescription`

#### Returns

`SchemaInnerTypeDescription`

#### Overrides

[BaseSchema](yup.BaseSchema).[describe](yup.BaseSchema#describe)

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

[BaseSchema](yup.BaseSchema).[getDefault](yup.BaseSchema#getdefault)

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

[BaseSchema](yup.BaseSchema).[isType](yup.BaseSchema#istype)

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

[BaseSchema](yup.BaseSchema).[isValid](yup.BaseSchema#isvalid)

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

[BaseSchema](yup.BaseSchema).[isValidSync](yup.BaseSchema#isvalidsync)

___

### label

▸ **label**(`label`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[label](yup.BaseSchema#label)

___

### length

▸ **length**(`length`, `message?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `length`: `number`  }\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

___

### max

▸ **max**(`max`, `message?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `max`: `number`  }\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

▸ **meta**(`obj`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

___

### min

▸ **min**(`min`, `message?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `min`: `number`  }\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../namespaces/yup#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notOneOf](yup.BaseSchema#notoneof)

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[notRequired](yup.BaseSchema#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

▸ **nullable**(`isNullable`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../namespaces/yup#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

___

### of

▸ **of**<`TInner`\>(`schema`): [`ArraySchema`](yup.ArraySchema)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../namespaces/yup#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../namespaces/yup#asserts)<`TInner`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInner` | extends [`BaseSchema`](yup.BaseSchema)<`any`, `any`, `any`, `TInner`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TInner` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../namespaces/yup#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../namespaces/yup#asserts)<`TInner`\>[]\>

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../namespaces/yup#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[oneOf](yup.BaseSchema#oneof)

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[optional](yup.BaseSchema#optional)

___

### required

▸ **required**(`msg?`): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yup.BaseSchema).[required](yup.BaseSchema#required)

___

### resolve

▸ **resolve**(`options`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[resolve](yup.BaseSchema#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strict](yup.BaseSchema#strict)

___

### strip

▸ **strip**(`strip?`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strip](yup.BaseSchema#strip)

___

### test

▸ **test**(`options`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../namespaces/yup#testconfig)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`test`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `test`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `message`, `test`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

___

### transform

▸ **transform**(`fn`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[transform](yup.BaseSchema#transform)

___

### typeError

▸ **typeError**(`message`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[typeError](yup.BaseSchema#typeerror)

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

[BaseSchema](yup.BaseSchema).[validate](yup.BaseSchema#validate)

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

[BaseSchema](yup.BaseSchema).[validateAt](yup.BaseSchema#validateat)

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

[BaseSchema](yup.BaseSchema).[validateSync](yup.BaseSchema#validatesync)

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

[BaseSchema](yup.BaseSchema).[validateSyncAt](yup.BaseSchema#validatesyncat)

___

### when

▸ **when**(`options`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

▸ **when**(`keys`, `options`): [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

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
| `fn` | (`schema`: [`ArraySchema`](yup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema).[withMutation](yup.BaseSchema#withmutation)
