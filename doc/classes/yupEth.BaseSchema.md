[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / BaseSchema

# Class: BaseSchema<TCast, TContext, TOutput\>

[yupEth](../modules/yupEth.md).BaseSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCast` | `any` |
| `TContext` | `AnyObject` |
| `TOutput` | `any` |

## Hierarchy

- **`BaseSchema`**

  ↳ [`BooleanSchema`](yupEth.BooleanSchema.md)

  ↳ [`default`](yupEth.default.md)

  ↳ [`default`](yupEth.default-1.md)

  ↳ [`DateSchema`](yupEth.DateSchema.md)

  ↳ [`ObjectSchema`](yupEth.ObjectSchema.md)

  ↳ [`ArraySchema`](yupEth.ArraySchema.md)

## Table of contents

### Constructors

- [constructor](yupEth.BaseSchema.md#constructor)

### Properties

- [\_\_inputType](yupEth.BaseSchema.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.BaseSchema.md#__isyupschema__)
- [\_\_outputType](yupEth.BaseSchema.md#__outputtype)
- [\_blacklist](yupEth.BaseSchema.md#_blacklist)
- [\_blacklistError](yupEth.BaseSchema.md#_blacklisterror)
- [\_mutate](yupEth.BaseSchema.md#_mutate)
- [\_typeError](yupEth.BaseSchema.md#_typeerror)
- [\_whitelist](yupEth.BaseSchema.md#_whitelist)
- [\_whitelistError](yupEth.BaseSchema.md#_whitelisterror)
- [conditions](yupEth.BaseSchema.md#conditions)
- [deps](yupEth.BaseSchema.md#deps)
- [equals](yupEth.BaseSchema.md#equals)
- [exclusiveTests](yupEth.BaseSchema.md#exclusivetests)
- [is](yupEth.BaseSchema.md#is)
- [nope](yupEth.BaseSchema.md#nope)
- [not](yupEth.BaseSchema.md#not)
- [spec](yupEth.BaseSchema.md#spec)
- [tests](yupEth.BaseSchema.md#tests)
- [transforms](yupEth.BaseSchema.md#transforms)
- [type](yupEth.BaseSchema.md#type)

### Accessors

- [\_type](yupEth.BaseSchema.md#_type)

### Methods

- [\_cast](yupEth.BaseSchema.md#_cast)
- [\_getDefault](yupEth.BaseSchema.md#_getdefault)
- [\_isPresent](yupEth.BaseSchema.md#_ispresent)
- [\_typeCheck](yupEth.BaseSchema.md#_typecheck)
- [\_validate](yupEth.BaseSchema.md#_validate)
- [cast](yupEth.BaseSchema.md#cast)
- [clone](yupEth.BaseSchema.md#clone)
- [concat](yupEth.BaseSchema.md#concat)
- [default](yupEth.BaseSchema.md#default)
- [defined](yupEth.BaseSchema.md#defined)
- [describe](yupEth.BaseSchema.md#describe)
- [getDefault](yupEth.BaseSchema.md#getdefault)
- [isType](yupEth.BaseSchema.md#istype)
- [isValid](yupEth.BaseSchema.md#isvalid)
- [isValidSync](yupEth.BaseSchema.md#isvalidsync)
- [label](yupEth.BaseSchema.md#label)
- [meta](yupEth.BaseSchema.md#meta)
- [notOneOf](yupEth.BaseSchema.md#notoneof)
- [notRequired](yupEth.BaseSchema.md#notrequired)
- [nullable](yupEth.BaseSchema.md#nullable)
- [oneOf](yupEth.BaseSchema.md#oneof)
- [optional](yupEth.BaseSchema.md#optional)
- [required](yupEth.BaseSchema.md#required)
- [resolve](yupEth.BaseSchema.md#resolve)
- [strict](yupEth.BaseSchema.md#strict)
- [strip](yupEth.BaseSchema.md#strip)
- [test](yupEth.BaseSchema.md#test)
- [transform](yupEth.BaseSchema.md#transform)
- [typeError](yupEth.BaseSchema.md#typeerror)
- [validate](yupEth.BaseSchema.md#validate)
- [validateAt](yupEth.BaseSchema.md#validateat)
- [validateSync](yupEth.BaseSchema.md#validatesync)
- [validateSyncAt](yupEth.BaseSchema.md#validatesyncat)
- [when](yupEth.BaseSchema.md#when)
- [withMutation](yupEth.BaseSchema.md#withmutation)

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

#### Defined in

node_modules/yup/lib/schema.d.ts:69

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TCast`

#### Defined in

node_modules/yup/lib/schema.d.ts:54

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Defined in

node_modules/yup/lib/schema.d.ts:56

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOutput`

#### Defined in

node_modules/yup/lib/schema.d.ts:55

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Defined in

node_modules/yup/lib/schema.d.ts:66

___

### \_blacklistError

• `Private` `Optional` **\_blacklistError**: `any`

#### Defined in

node_modules/yup/lib/schema.d.ts:64

___

### \_mutate

• `Private` `Optional` **\_mutate**: `any`

#### Defined in

node_modules/yup/lib/schema.d.ts:61

___

### \_typeError

• `Private` `Optional` **\_typeError**: `any`

#### Defined in

node_modules/yup/lib/schema.d.ts:62

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Defined in

node_modules/yup/lib/schema.d.ts:65

___

### \_whitelistError

• `Private` `Optional` **\_whitelistError**: `any`

#### Defined in

node_modules/yup/lib/schema.d.ts:63

___

### conditions

• `Private` **conditions**: `any`

#### Defined in

node_modules/yup/lib/schema.d.ts:60

___

### deps

• `Readonly` **deps**: readonly `string`[]

#### Defined in

node_modules/yup/lib/schema.d.ts:57

___

### equals

• **equals**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

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

[`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:138

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:67

___

### is

• **is**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

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

[`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:139

___

### nope

• **nope**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

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

[`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:141

___

### not

• **not**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<`Object`\>) => [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

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

[`BaseSchema`](yupEth.BaseSchema.md)<`any`, `AnyObject`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:140

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:68

___

### tests

• **tests**: `Test`[]

#### Defined in

node_modules/yup/lib/schema.d.ts:58

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\>\>[]

#### Defined in

node_modules/yup/lib/schema.d.ts:59

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/yup/lib/schema.d.ts:53

## Accessors

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

#### Defined in

node_modules/yup/lib/schema.d.ts:70

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

#### Defined in

node_modules/yup/lib/schema.d.ts:89

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:95

___

### \_isPresent

▸ `Protected` **_isPresent**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

node_modules/yup/lib/schema.d.ts:99

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`_value`): \_value is NonNullable<TCast\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |

#### Returns

\_value is NonNullable<TCast\>

#### Defined in

node_modules/yup/lib/schema.d.ts:71

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

#### Defined in

node_modules/yup/lib/schema.d.ts:90

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

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:72

___

### concat

▸ **concat**(`schema`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:77

▸ **concat**(`schema`): [`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\> |

#### Returns

[`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:78

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:97

___

### defined

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:100

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Defined in

node_modules/yup/lib/schema.d.ts:133

___

### getDefault

▸ **getDefault**(`options?`): `TCast`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TCast`

#### Defined in

node_modules/yup/lib/schema.d.ts:96

___

### isType

▸ **isType**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/yup/lib/schema.d.ts:79

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

#### Defined in

node_modules/yup/lib/schema.d.ts:93

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

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:102

___

### nullable

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:103

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:104

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:142

___

### required

▸ **required**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:101

___

### resolve

▸ **resolve**(`options`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

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
| `options` | [`TestConfig`](../modules/yupEth.md#testconfig)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:125

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

#### Defined in

node_modules/yup/lib/schema.d.ts:91

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

#### Defined in

node_modules/yup/lib/schema.d.ts:136

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

#### Defined in

node_modules/yup/lib/schema.d.ts:92

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

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:124

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
| `fn` | (`schema`: [`BaseSchema`](yupEth.BaseSchema.md)<`TCast`, `TContext`, `TOutput`\>) => `T` |

#### Returns

`T`

#### Defined in

node_modules/yup/lib/schema.d.ts:76
