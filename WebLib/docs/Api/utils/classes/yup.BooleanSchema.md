---
id: "yup.BooleanSchema"
title: "Class: BooleanSchema<TType, TContext, TOut>"
sidebar_label: "yup.BooleanSchema"
custom_edit_url: null
---

[yup](../modules/yup.md).BooleanSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`boolean`\>`boolean` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`BooleanSchema`**

## Constructors

### constructor

• **new BooleanSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`boolean`\>`undefined` \| `boolean` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `Maybe`<`boolean`\>`TType` |

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

▸ **clone**(`spec?`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[clone](yup.BaseSchema.md#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`BooleanSchema`](yup.BooleanSchema.md)<`any`, `any`, `any`, `TOther`\> |

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

▸ **default**<`TNextDefault`\>(`def`): `TNextDefault` extends `undefined` ? [`BooleanSchema`](yup.BooleanSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\> : [`BooleanSchema`](yup.BooleanSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextDefault` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `TNextDefault` \| () => `TNextDefault` |

#### Returns

`TNextDefault` extends `undefined` ? [`BooleanSchema`](yup.BooleanSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\> : [`BooleanSchema`](yup.BooleanSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[default](yup.BaseSchema.md#default)

___

### defined

▸ **defined**(`msg?`): `DefinedBooleanSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`DefinedBooleanSchema`<`TType`, `TContext`\>

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

### isFalse

▸ **isFalse**(`message?`): [`BooleanSchema`](yup.BooleanSchema.md)<``false`` \| `TType`, `TContext`, ``false`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` \| `Record`<`string` \| `number` \| `symbol`, `unknown`\> \| (`params`: `MessageParams`) => `unknown` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<``false`` \| `TType`, `TContext`, ``false`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

___

### isTrue

▸ **isTrue**(`message?`): [`BooleanSchema`](yup.BooleanSchema.md)<``true`` \| `TType`, `TContext`, ``true`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` \| `Record`<`string` \| `number` \| `symbol`, `unknown`\> \| (`params`: `MessageParams`) => `unknown` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<``true`` \| `TType`, `TContext`, ``true`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

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

▸ **label**(`label`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[label](yup.BaseSchema.md#label)

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

▸ **meta**(`obj`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notOneOf](yup.BaseSchema.md#notoneof)

___

### notRequired

▸ **notRequired**(): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notRequired](yup.BaseSchema.md#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`BooleanSchema`](yup.BooleanSchema.md)<``null`` \| `TType`, `AnyObject`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<``null`` \| `TType`, `AnyObject`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

▸ **nullable**(`isNullable`): [`BooleanSchema`](yup.BooleanSchema.md)<`Exclude`<`TType`, ``null``\>, `AnyObject`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`Exclude`<`TType`, ``null``\>, `AnyObject`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[oneOf](yup.BaseSchema.md#oneof)

___

### optional

▸ **optional**(): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[optional](yup.BaseSchema.md#optional)

___

### required

▸ **required**(`msg?`): `RequiredBooleanSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredBooleanSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[required](yup.BaseSchema.md#required)

___

### resolve

▸ **resolve**(`options`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[resolve](yup.BaseSchema.md#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strict](yup.BaseSchema.md#strict)

___

### strip

▸ **strip**(`strip?`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strip](yup.BaseSchema.md#strip)

___

### test

▸ **test**(`options`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

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

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`test`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `test`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `message`, `test`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

___

### transform

▸ **transform**(`fn`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transform](yup.BaseSchema.md#transform)

___

### typeError

▸ **typeError**(`message`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

▸ **when**(`keys`, `options`): [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`BooleanSchema`](yup.BooleanSchema.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[withMutation](yup.BaseSchema.md#withmutation)
