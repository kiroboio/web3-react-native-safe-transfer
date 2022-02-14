---
id: "yup.BooleanSchema"
title: "Class: BooleanSchema<TType, TContext, TOut>"
sidebar_label: "yup.BooleanSchema"
custom_edit_url: null
---

[yup](../namespaces/yup).BooleanSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`boolean`\> = `boolean` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`BooleanSchema`**

## Constructors

### constructor

• **new BooleanSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`boolean`\> = `undefined` \| `boolean` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`boolean`\> = `TType` |

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

▸ **clone**(`spec?`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[clone](yup.BaseSchema#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`BooleanSchema`](yup.BooleanSchema)<`any`, `any`, `any`, `TOther`\> |

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

▸ **default**<`TNextDefault`\>(`def`): `TNextDefault` extends `undefined` ? [`BooleanSchema`](yup.BooleanSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\> : [`BooleanSchema`](yup.BooleanSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextDefault` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `TNextDefault` \| () => `TNextDefault` |

#### Returns

`TNextDefault` extends `undefined` ? [`BooleanSchema`](yup.BooleanSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\> : [`BooleanSchema`](yup.BooleanSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[default](yup.BaseSchema#default)

___

### defined

▸ **defined**(`msg?`): `DefinedBooleanSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedBooleanSchema`<`TType`, `TContext`\>

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

### isFalse

▸ **isFalse**(`message?`): [`BooleanSchema`](yup.BooleanSchema)<``false`` \| `TType`, `TContext`, ``false`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` \| `Record`<`string` \| `number` \| `symbol`, `unknown`\> \| (`params`: `MessageParams`) => `unknown` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<``false`` \| `TType`, `TContext`, ``false`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

___

### isTrue

▸ **isTrue**(`message?`): [`BooleanSchema`](yup.BooleanSchema)<``true`` \| `TType`, `TContext`, ``true`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` \| `Record`<`string` \| `number` \| `symbol`, `unknown`\> \| (`params`: `MessageParams`) => `unknown` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<``true`` \| `TType`, `TContext`, ``true`` \| `Extract`<`TOut`, `undefined` \| ``null``\>\>

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

▸ **label**(`label`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[label](yup.BaseSchema#label)

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

▸ **meta**(`obj`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notOneOf](yup.BaseSchema#notoneof)

___

### notRequired

▸ **notRequired**(): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notRequired](yup.BaseSchema#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`BooleanSchema`](yup.BooleanSchema)<``null`` \| `TType`, `AnyObject`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<``null`` \| `TType`, `AnyObject`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

▸ **nullable**(`isNullable`): [`BooleanSchema`](yup.BooleanSchema)<`Exclude`<`TType`, ``null``\>, `AnyObject`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`Exclude`<`TType`, ``null``\>, `AnyObject`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`boolean`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[oneOf](yup.BaseSchema#oneof)

___

### optional

▸ **optional**(): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[optional](yup.BaseSchema#optional)

___

### required

▸ **required**(`msg?`): `RequiredBooleanSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredBooleanSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[required](yup.BaseSchema#required)

___

### resolve

▸ **resolve**(`options`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[resolve](yup.BaseSchema#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strict](yup.BaseSchema#strict)

___

### strip

▸ **strip**(`strip?`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strip](yup.BaseSchema#strip)

___

### test

▸ **test**(`options`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

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

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`test`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `test`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `message`, `test`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

___

### transform

▸ **transform**(`fn`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[transform](yup.BaseSchema#transform)

___

### typeError

▸ **typeError**(`message`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

▸ **when**(`keys`, `options`): [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`BooleanSchema`](yup.BooleanSchema)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema).[withMutation](yup.BaseSchema#withmutation)
