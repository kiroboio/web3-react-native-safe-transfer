---
id: "yup.DateSchema"
title: "Class: DateSchema<TType, TContext, TOut>"
sidebar_label: "yup.DateSchema"
custom_edit_url: null
---

[yup](../modules/yup.md).DateSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\>`Date` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`DateSchema`**

## Constructors

### constructor

• **new DateSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\>`undefined` \| `Date` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `Maybe`<`Date`\>`TType` |

#### Overrides

[BaseSchema](yup.BaseSchema.md).[constructor](yup.BaseSchema.md#constructor)

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TType`

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

### prepareParam

• `Private` **prepareParam**: `any`

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

___

### INVALID\_DATE

▪ `Static` **INVALID\_DATE**: `Date`

## Accessors

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

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

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TType\>

#### Overrides

[BaseSchema](yup.BaseSchema.md).[_typeCheck](yup.BaseSchema.md#_typecheck)

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

[BaseSchema](yup.BaseSchema.md).[_validate](yup.BaseSchema.md#_validate)

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

[BaseSchema](yup.BaseSchema.md).[cast](yup.BaseSchema.md#cast)

___

### clone

▸ **clone**(`spec?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[clone](yup.BaseSchema.md#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`DateSchema`](yup.DateSchema.md)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[concat](yup.BaseSchema.md#concat)

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`DateSchema`](yup.DateSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yup.DateSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`DateSchema`](yup.DateSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yup.DateSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[default](yup.BaseSchema.md#default)

___

### defined

▸ **defined**(`msg?`): `DefinedDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`DefinedDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[defined](yup.BaseSchema.md#defined)

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[describe](yup.BaseSchema.md#describe)

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

▸ **label**(`label`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[label](yup.BaseSchema.md#label)

___

### max

▸ **max**(`max`, `message?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `unknown` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

▸ **meta**(`obj`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

___

### min

▸ **min**(`min`, `message?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `unknown` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notOneOf](yup.BaseSchema.md#notoneof)

___

### notRequired

▸ **notRequired**(): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notRequired](yup.BaseSchema.md#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`DateSchema`](yup.DateSchema.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`DateSchema`](yup.DateSchema.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

▸ **nullable**(`isNullable`): [`DateSchema`](yup.DateSchema.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[oneOf](yup.BaseSchema.md#oneof)

___

### optional

▸ **optional**(): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[optional](yup.BaseSchema.md#optional)

___

### required

▸ **required**(`msg?`): `RequiredDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[required](yup.BaseSchema.md#required)

___

### resolve

▸ **resolve**(`options`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[resolve](yup.BaseSchema.md#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strict](yup.BaseSchema.md#strict)

___

### strip

▸ **strip**(`strip?`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strip](yup.BaseSchema.md#strip)

___

### test

▸ **test**(`options`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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
| `options` | [`TestConfig`](../modules/yup.md#testconfig)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`test`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `test`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `message`, `test`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

___

### transform

▸ **transform**(`fn`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transform](yup.BaseSchema.md#transform)

___

### typeError

▸ **typeError**(`message`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[typeError](yup.BaseSchema.md#typeerror)

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

▸ **when**(`options`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

▸ **when**(`keys`, `options`): [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`DateSchema`](yup.DateSchema.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[withMutation](yup.BaseSchema.md#withmutation)
