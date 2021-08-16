---
id: "yup.default-1"
title: "Class: default<TType, TContext, TOut>"
sidebar_label: "yup.default"
custom_edit_url: null
---

[yup](../modules/yup.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`number`\>`number` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`default`**

## Constructors

### constructor

• **new default**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`number`\>`undefined` \| `number` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `Maybe`<`number`\>`TType` |

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

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TType\>

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

▸ **clone**(`spec?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[clone](yup.BaseSchema.md#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`default`](yup.default-1.md)<`any`, `any`, `any`, `TOther`\> |

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

▸ **default**<`D`\>(`def`): `If`<`D`, [`default`](yup.default-1.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yup.default-1.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`default`](yup.default-1.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yup.default-1.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[default](yup.BaseSchema.md#default)

___

### defined

▸ **defined**(`msg?`): `DefinedNumberSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`DefinedNumberSchema`<`TType`, `TContext`\>

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

### emptyAsUndefined

▸ **emptyAsUndefined**(): [`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

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

### integer

▸ **integer**(`message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

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

▸ **label**(`label`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[label](yup.BaseSchema.md#label)

___

### lessThan

▸ **lessThan**(`less`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `less` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### max

▸ **max**(`max`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

▸ **meta**(`obj`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[meta](yup.BaseSchema.md#meta)

___

### min

▸ **min**(`min`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### moreThan

▸ **moreThan**(`more`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `more` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### negative

▸ **negative**(`msg?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notOneOf](yup.BaseSchema.md#notoneof)

___

### notRequired

▸ **notRequired**(): [`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[notRequired](yup.BaseSchema.md#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`default`](yup.default-1.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`default`](yup.default-1.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

▸ **nullable**(`isNullable`): [`default`](yup.default-1.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`default`](yup.default-1.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[nullable](yup.BaseSchema.md#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[oneOf](yup.BaseSchema.md#oneof)

___

### optional

▸ **optional**(): [`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[optional](yup.BaseSchema.md#optional)

___

### positive

▸ **positive**(`msg?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### required

▸ **required**(`msg?`): `RequiredNumberSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredNumberSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[required](yup.BaseSchema.md#required)

___

### resolve

▸ **resolve**(`options`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[resolve](yup.BaseSchema.md#resolve)

___

### round

▸ **round**(`method`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"ceil"`` \| ``"floor"`` \| ``"round"`` \| ``"trunc"`` |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### strict

▸ **strict**(`isStrict?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strict](yup.BaseSchema.md#strict)

___

### strip

▸ **strip**(`strip?`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[strip](yup.BaseSchema.md#strip)

___

### test

▸ **test**(`options`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

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

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`test`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `test`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

▸ **test**(`name`, `message`, `test`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yup.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[test](yup.BaseSchema.md#test)

___

### transform

▸ **transform**(`fn`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[transform](yup.BaseSchema.md#transform)

___

### truncate

▸ **truncate**(): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

___

### typeError

▸ **typeError**(`message`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[when](yup.BaseSchema.md#when)

▸ **when**(`keys`, `options`): [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`default`](yup.default-1.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema.md).[withMutation](yup.BaseSchema.md#withmutation)
