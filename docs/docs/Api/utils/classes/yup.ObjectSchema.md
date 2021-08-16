---
id: "yup.ObjectSchema"
title: "Class: ObjectSchema<TShape, TContext, TIn, TOut>"
sidebar_label: "yup.ObjectSchema"
custom_edit_url: null
---

[yup](../modules/yup.md).ObjectSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\>`TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\>`AssertsShape`<`TShape`\> \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema.md)<`TIn`, `TContext`, `TOut`\>

  ↳ **`ObjectSchema`**

## Constructors

### constructor

• **new ObjectSchema**<`TShape`, `TContext`, `TIn`, `TOut`\>(`spec?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\>`TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\>`AssertsShape`<`TShape`\> \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

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

### \_excludedEdges

• `Private` **\_excludedEdges**: `any`

___

### \_nodes

• `Private` **\_nodes**: `any`

___

### \_sortErrors

• `Private` **\_sortErrors**: `any`

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

### fields

• **fields**: `TShape`

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

• **spec**: `ObjectSchemaSpec`

#### Overrides

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

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

## Methods

### \_cast

▸ `Protected` **_cast**(`_value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options?` | `InternalOptions`<`TContext`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_cast](yup.BaseSchema.md#_cast)

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Overrides

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

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TIn\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_typeCheck](yup.BaseSchema.md#_typecheck)

___

### \_validate

▸ `Protected` **_validate**(`_value`, `opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `opts` | `undefined` \| `InternalOptions`<`TContext`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_validate](yup.BaseSchema.md#_validate)

___

### camelCase

▸ **camelCase**(): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[cast](yup.BaseSchema.md#cast)

___

### clone

▸ **clone**(`spec?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `ObjectSchemaSpec` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[clone](yup.BaseSchema.md#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther` extends [`ObjectSchema`](yup.ObjectSchema.md)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yup.ObjectSchema.md)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ObjectSchema`](yup.ObjectSchema.md)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther` extends [`ObjectSchema`](yup.ObjectSchema.md)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yup.ObjectSchema.md)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[concat](yup.BaseSchema.md#concat)

▸ **concat**(`schema`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[concat](yup.BaseSchema.md#concat)

___

### constantCase

▸ **constantCase**(): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[defined](yup.BaseSchema.md#defined)

___

### describe

▸ **describe**(): `SchemaObjectDescription`

#### Returns

`SchemaObjectDescription`

#### Overrides

[BaseSchema](yup.BaseSchema.md).[describe](yup.BaseSchema.md#describe)

___

### from

▸ **from**(`from`, `to`, `alias?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | keyof `TShape` |
| `alias?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

### getDefaultFromShape

▸ **getDefaultFromShape**(): `DefaultFromShape`<`TShape`\>

#### Returns

`DefaultFromShape`<`TShape`\>

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

value is TOut

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[isValidSync](yup.BaseSchema.md#isvalidsync)

___

### label

▸ **label**(`label`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[label](yup.BaseSchema.md#label)

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

▸ **meta**(`obj`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

___

### noUnknown

▸ **noUnknown**(`noAllow?`, `message?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `noAllow?` | `boolean` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

___

### omit

▸ **omit**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

### pick

▸ **pick**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

___

### required

▸ **required**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[required](yup.BaseSchema.md#required)

___

### resolve

▸ **resolve**(`options`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[resolve](yup.BaseSchema.md#resolve)

___

### shape

▸ **shape**<`TNextShape`\>(`additions`, `excludes?`): [`ObjectSchema`](yup.ObjectSchema.md)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextShape` | extends `ObjectShape` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `additions` | `TNextShape` |
| `excludes?` | [`string`, `string`][] |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

___

### snakeCase

▸ **snakeCase**(): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### strict

▸ **strict**(`isStrict?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strict](yup.BaseSchema.md#strict)

___

### strip

▸ **strip**(`strip?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strip](yup.BaseSchema.md#strip)

___

### test

▸ **test**(`options`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../modules/yup.md#testconfig)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`test`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `test`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `message`, `test`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

___

### transform

▸ **transform**(`fn`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transform](yup.BaseSchema.md#transform)

___

### transformKeys

▸ **transformKeys**(`fn`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`key`: `string`) => `string` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### typeError

▸ **typeError**(`message`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[typeError](yup.BaseSchema.md#typeerror)

___

### unknown

▸ **unknown**(`allow?`, `message?`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[validateSyncAt](yup.BaseSchema.md#validatesyncat)

___

### when

▸ **when**(`options`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

▸ **when**(`keys`, `options`): [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `fn` | (`schema`: [`ObjectSchema`](yup.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[withMutation](yup.BaseSchema.md#withmutation)
