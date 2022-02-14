---
id: "yup.DateSchema"
title: "Class: DateSchema<TType, TContext, TOut>"
sidebar_label: "yup.DateSchema"
custom_edit_url: null
---

[yup](../namespaces/yup).DateSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\> = `Date` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`DateSchema`**

## Constructors

### constructor

• **new DateSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\> = `undefined` \| `Date` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`Date`\> = `TType` |

#### Overrides

[BaseSchema](yup.BaseSchema).[constructor](yup.BaseSchema#constructor)

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TType`

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

### prepareParam

• `Private` **prepareParam**: `any`

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

___

### INVALID\_DATE

▪ `Static` **INVALID\_DATE**: `Date`

## Accessors

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

#### Inherited from

BaseSchema.\_type

## Methods

### \_cast

▸ `Protected` **_cast**(`rawValue`, `_options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawValue` | `any` |
| `_options` | `CastOptions`<`TContext`\> |

#### Returns

`any`

#### Inherited from

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

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TType\>

#### Overrides

[BaseSchema](yup.BaseSchema).[_typeCheck](yup.BaseSchema#_typecheck)

___

### \_validate

▸ `Protected` **_validate**(`_value`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options` | `undefined` \| `InternalOptions`<`TContext`\> |
| `cb` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

[BaseSchema](yup.BaseSchema).[_validate](yup.BaseSchema#_validate)

___

### cast

▸ **cast**(`value`, `options?`): `TType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TType`

#### Inherited from

[BaseSchema](yup.BaseSchema).[cast](yup.BaseSchema#cast)

___

### clone

▸ **clone**(`spec?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[clone](yup.BaseSchema#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`DateSchema`](yup.DateSchema)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](yup.BaseSchema).[concat](yup.BaseSchema#concat)

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`DateSchema`](yup.DateSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yup.DateSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`DateSchema`](yup.DateSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yup.DateSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[default](yup.BaseSchema#default)

___

### defined

▸ **defined**(`msg?`): `DefinedDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[defined](yup.BaseSchema#defined)

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Inherited from

[BaseSchema](yup.BaseSchema).[describe](yup.BaseSchema#describe)

___

### getDefault

▸ **getDefault**(`options?`): `TType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TType`

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

▸ **label**(`label`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[label](yup.BaseSchema#label)

___

### max

▸ **max**(`max`, `message?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `unknown` |
| `message?` | `Message`<{ `max`: `string` \| `Date`  }\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

▸ **meta**(`obj`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

___

### min

▸ **min**(`min`, `message?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `unknown` |
| `message?` | `Message`<{ `min`: `string` \| `Date`  }\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notOneOf](yup.BaseSchema#notoneof)

___

### notRequired

▸ **notRequired**(): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notRequired](yup.BaseSchema#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`DateSchema`](yup.DateSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`DateSchema`](yup.DateSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

▸ **nullable**(`isNullable`): [`DateSchema`](yup.DateSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`DateSchema`](yup.DateSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[oneOf](yup.BaseSchema#oneof)

___

### optional

▸ **optional**(): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[optional](yup.BaseSchema#optional)

___

### required

▸ **required**(`msg?`): `RequiredDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[required](yup.BaseSchema#required)

___

### resolve

▸ **resolve**(`options`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[resolve](yup.BaseSchema#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strict](yup.BaseSchema#strict)

___

### strip

▸ **strip**(`strip?`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strip](yup.BaseSchema#strip)

___

### test

▸ **test**(`options`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

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
| `options` | [`TestConfig`](../namespaces/yup#testconfig)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`test`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `test`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `message`, `test`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

___

### transform

▸ **transform**(`fn`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[transform](yup.BaseSchema#transform)

___

### typeError

▸ **typeError**(`message`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[typeError](yup.BaseSchema#typeerror)

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

▸ **when**(`options`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

▸ **when**(`keys`, `options`): [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`DateSchema`](yup.DateSchema)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema).[withMutation](yup.BaseSchema#withmutation)
