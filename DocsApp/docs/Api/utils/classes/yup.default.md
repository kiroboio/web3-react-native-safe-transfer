---
id: "yup.default"
title: "Class: default<TType, TContext, TOut>"
sidebar_label: "yup.default"
custom_edit_url: null
---

[yup](../namespaces/yup).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\> = `string` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](yup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`default`**

## Constructors

### constructor

• **new default**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\> = `undefined` \| `string` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`string`\> = `TType` |

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
| `value` | `any` |

#### Returns

`boolean`

#### Overrides

[BaseSchema](yup.BaseSchema).[_isPresent](yup.BaseSchema#_ispresent)

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

▸ **clone**(`spec?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[clone](yup.BaseSchema#clone)

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`default`](yup.default)<`any`, `any`, `any`, `TOther`\> |

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

▸ **default**<`D`\>(`def`): `If`<`D`, [`default`](yup.default)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yup.default)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`default`](yup.default)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yup.default)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[default](yup.BaseSchema#default)

___

### defined

▸ **defined**(`msg?`): `DefinedStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedStringSchema`<`TType`, `TContext`\>

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

### desiredCurrency

▸ **desiredCurrency**(`min`, `minMessage`): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `string` |
| `minMessage` | `string` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

___

### email

▸ **email**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### emptyAsUndefined

▸ **emptyAsUndefined**(): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

___

### ensure

▸ **ensure**(): [`default`](yup.default)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

#### Returns

[`default`](yup.default)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

___

### ether

▸ **ether**(`min`, `minMessage`, `maxMessage`): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `string` |
| `minMessage` | `string` |
| `maxMessage` | `string` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

___

### ethereumAddress

▸ **ethereumAddress**(`message`): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

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

▸ **label**(`label`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[label](yup.BaseSchema#label)

___

### length

▸ **length**(`length`, `message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `length`: `number`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### lowercase

▸ **lowercase**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### matches

▸ **matches**(`regex`, `options?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `options?` | `MatchOptions` \| `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### max

▸ **max**(`max`, `message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `max`: `number`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

▸ **meta**(`obj`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[meta](yup.BaseSchema#meta)

___

### min

▸ **min**(`min`, `message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `min`: `number`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notOneOf](yup.BaseSchema#notoneof)

___

### notRequired

▸ **notRequired**(): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[notRequired](yup.BaseSchema#notrequired)

___

### nullable

▸ **nullable**(`isNullable?`): [`default`](yup.default)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`default`](yup.default)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

▸ **nullable**(`isNullable`): [`default`](yup.default)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`default`](yup.default)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[nullable](yup.BaseSchema#nullable)

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[oneOf](yup.BaseSchema#oneof)

___

### optional

▸ **optional**(): [`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[optional](yup.BaseSchema#optional)

___

### required

▸ **required**(`msg?`): `RequiredStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredStringSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[required](yup.BaseSchema#required)

___

### resolve

▸ **resolve**(`options`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[resolve](yup.BaseSchema#resolve)

___

### strict

▸ **strict**(`isStrict?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strict](yup.BaseSchema#strict)

___

### strip

▸ **strip**(`strip?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[strip](yup.BaseSchema#strip)

___

### test

▸ **test**(`options`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

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

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`test`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `test`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

▸ **test**(`name`, `message`, `test`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../namespaces/yup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[test](yup.BaseSchema#test)

___

### transform

▸ **transform**(`fn`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`default`](yup.default)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[transform](yup.BaseSchema#transform)

___

### trim

▸ **trim**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### typeError

▸ **typeError**(`message`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[typeError](yup.BaseSchema#typeerror)

___

### uppercase

▸ **uppercase**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### url

▸ **url**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

___

### uuid

▸ **uuid**(`message?`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`default`](yup.default)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

▸ **when**(`keys`, `options`): [`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`default`](yup.default)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yup.default)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yup.BaseSchema).[when](yup.BaseSchema#when)

___

### withContext

▸ **withContext**<`TNextContext`\>(): [`default`](yup.default)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextContext` | extends `AnyObject` |

#### Returns

[`default`](yup.default)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

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
| `fn` | (`schema`: [`default`](yup.default)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yup.BaseSchema).[withMutation](yup.BaseSchema#withmutation)
