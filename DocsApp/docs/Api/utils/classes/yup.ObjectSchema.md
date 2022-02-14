---
id: "yup.ObjectSchema"
title: "Class: ObjectSchema<TShape, TContext, TIn, TOut>"
sidebar_label: "yup.ObjectSchema"
custom_edit_url: null
---

[yup](../namespaces/yup).ObjectSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> = `TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\> = `AssertsShape`<`TShape`\> \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema)<`TIn`, `TContext`, `TOut`\>

  ↳ **`ObjectSchema`**

## Constructors

### constructor

• **new ObjectSchema**<`TShape`, `TContext`, `TIn`, `TOut`\>(`spec?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> = `TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\> = `AssertsShape`<`TShape`\> \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

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

### fields

• **fields**: `TShape`

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

• **spec**: `ObjectSchemaSpec`

#### Overrides

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

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

#### Inherited from

BaseSchema.\_type

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

[BaseSchema](yup.BaseSchema).[_cast](yup.BaseSchema#_cast)

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Overrides

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

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TIn\>

#### Overrides

[BaseSchema](yup.BaseSchema).[_typeCheck](yup.BaseSchema#_typecheck)

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

[BaseSchema](yup.BaseSchema).[_validate](yup.BaseSchema#_validate)

___

### camelCase

▸ **camelCase**(): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

[BaseSchema](yup.BaseSchema).[cast](yup.BaseSchema#cast)

___

### clone

▸ **clone**(`spec?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `ObjectSchemaSpec` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema).[clone](yup.BaseSchema#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther` extends [`ObjectSchema`](yup.ObjectSchema)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yup.ObjectSchema)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ObjectSchema`](yup.ObjectSchema)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther` extends [`ObjectSchema`](yup.ObjectSchema)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yup.ObjectSchema)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Overrides

[BaseSchema](yup.BaseSchema).[concat](yup.BaseSchema#concat)

▸ **concat**(`schema`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yup.BaseSchema).[concat](yup.BaseSchema#concat)

___

### constantCase

▸ **constantCase**(): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[defined](yup.BaseSchema#defined)

___

### describe

▸ **describe**(): `SchemaObjectDescription`

#### Returns

`SchemaObjectDescription`

#### Overrides

[BaseSchema](yup.BaseSchema).[describe](yup.BaseSchema#describe)

___

### from

▸ **from**(`from`, `to`, `alias?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | keyof `TShape` |
| `alias?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

[BaseSchema](yup.BaseSchema).[isType](yup.BaseSchema#istype)

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

[BaseSchema](yup.BaseSchema).[isValid](yup.BaseSchema#isvalid)

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

[BaseSchema](yup.BaseSchema).[isValidSync](yup.BaseSchema#isvalidsync)

___

### label

▸ **label**(`label`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[label](yup.BaseSchema#label)

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

▸ **meta**(`obj`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

___

### noUnknown

▸ **noUnknown**(`noAllow?`, `message?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `noAllow?` | `boolean` |
| `message?` | `Message`<{}\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

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

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yup.BaseSchema).[required](yup.BaseSchema#required)

___

### resolve

▸ **resolve**(`options`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[resolve](yup.BaseSchema#resolve)

___

### shape

▸ **shape**<`TNextShape`\>(`additions`, `excludes?`): [`ObjectSchema`](yup.ObjectSchema)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

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

[`ObjectSchema`](yup.ObjectSchema)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

___

### snakeCase

▸ **snakeCase**(): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### strict

▸ **strict**(`isStrict?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strict](yup.BaseSchema#strict)

___

### strip

▸ **strip**(`strip?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strip](yup.BaseSchema#strip)

___

### test

▸ **test**(`options`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../namespaces/yup#testconfig)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`test`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `test`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `message`, `test`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

___

### transform

▸ **transform**(`fn`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[transform](yup.BaseSchema#transform)

___

### transformKeys

▸ **transformKeys**(`fn`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`key`: `string`) => `string` |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

___

### typeError

▸ **typeError**(`message`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[typeError](yup.BaseSchema#typeerror)

___

### unknown

▸ **unknown**(`allow?`, `message?`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |
| `message?` | `Message`<{}\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

[BaseSchema](yup.BaseSchema).[validate](yup.BaseSchema#validate)

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

[BaseSchema](yup.BaseSchema).[validateAt](yup.BaseSchema#validateat)

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

[BaseSchema](yup.BaseSchema).[validateSync](yup.BaseSchema#validatesync)

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

[BaseSchema](yup.BaseSchema).[validateSyncAt](yup.BaseSchema#validatesyncat)

___

### when

▸ **when**(`options`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

▸ **when**(`keys`, `options`): [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `fn` | (`schema`: [`ObjectSchema`](yup.ObjectSchema)<`TShape`, `TContext`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema).[withMutation](yup.BaseSchema#withmutation)
