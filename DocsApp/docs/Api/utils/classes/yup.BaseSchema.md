---
id: "yup.BaseSchema"
title: "Class: BaseSchema<TCast, TContext, TOutput>"
sidebar_label: "yup.BaseSchema"
custom_edit_url: null
---

[yup](../namespaces/yup).BaseSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCast` | `any` |
| `TContext` | `AnyObject` |
| `TOutput` | `any` |

## Hierarchy

- **`BaseSchema`**

  ↳ [`BooleanSchema`](yup.BooleanSchema)

  ↳ [`default`](yup.default)

  ↳ [`default`](yup.default-1)

  ↳ [`DateSchema`](yup.DateSchema)

  ↳ [`ObjectSchema`](yup.ObjectSchema)

  ↳ [`ArraySchema`](yup.ArraySchema)

## Constructors

### constructor

• **new BaseSchema**<`TCast`, `TContext`, `TOutput`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCast` | `any` |
| `TContext` | `AnyObject` |
| `TOutput` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SchemaOptions`<`any`\> |

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TCast`

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOutput`

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

___

### \_blacklistError

• `Private` `Optional` **\_blacklistError**: `any`

___

### \_mutate

• `Private` `Optional` **\_mutate**: `any`

___

### \_typeError

• `Private` `Optional` **\_typeError**: `any`

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

___

### \_whitelistError

• `Private` `Optional` **\_whitelistError**: `any`

___

### conditions

• `Private` **conditions**: `any`

___

### deps

• `Readonly` **deps**: readonly `string`[]

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

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

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

___

### spec

• **spec**: `SchemaSpec`<`any`\>

___

### tests

• **tests**: `Test`[]

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\>\>[]

___

### type

• `Readonly` **type**: `string`

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

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

___

### \_isPresent

▸ `Protected` **_isPresent**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`_value`): \_value is NonNullable<TCast\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |

#### Returns

\_value is NonNullable<TCast\>

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

___

### cast

▸ **cast**(`value`, `options?`): `TCast`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TCast`

___

### clone

▸ **clone**(`spec?`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### concat

▸ **concat**(`schema`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

▸ **concat**(`schema`): [`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\> |

#### Returns

[`AnySchema`](../namespaces/yup#anyschema)<`any`, `any`, `any`\>

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

___

### defined

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

___

### getDefault

▸ **getDefault**(`options?`): `TCast`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TCast`

___

### isType

▸ **isType**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

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

___

### isValidSync

▸ **isValidSync**(`value`, `options?`): value is TOutput

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

value is TOutput

___

### label

▸ **label**(`label`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

▸ **meta**(`obj`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

___

### nullable

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### optional

▸ **optional**(): `any`

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

___

### resolve

▸ **resolve**(`options`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### strict

▸ **strict**(`isStrict?`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### strip

▸ **strip**(`strip?`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### test

▸ **test**(`options`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

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
| `options` | [`TestConfig`](../namespaces/yup#testconfig)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

▸ **test**(`test`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

▸ **test**(`name`, `test`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

▸ **test**(`name`, `message`, `test`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### transform

▸ **transform**(`fn`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### typeError

▸ **typeError**(`message`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`Promise`<`TOutput`\>

___

### validateAt

▸ **validateAt**(`path`, `value`, `options?`): `Promise`<`TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`Promise`<`TOutput`\>

___

### validateSync

▸ **validateSync**(`value`, `options?`): `TOutput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOutput`

___

### validateSyncAt

▸ **validateSyncAt**(`path`, `value`, `options?`): `TOutput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOutput`

___

### when

▸ **when**(`options`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

▸ **when**(`keys`, `options`): [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

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
| `fn` | (`schema`: [`BaseSchema`](yup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>) => `T` |

#### Returns

`T`
