[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / default

# Class: default<TType, TContext, TOut\>

[yupEth](../modules/yupEth.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\>`string` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yupEth.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](yupEth.default.md#constructor)

### Properties

- [\_\_inputType](yupEth.default.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.default.md#__isyupschema__)
- [\_\_outputType](yupEth.default.md#__outputtype)
- [\_blacklist](yupEth.default.md#_blacklist)
- [\_whitelist](yupEth.default.md#_whitelist)
- [deps](yupEth.default.md#deps)
- [equals](yupEth.default.md#equals)
- [exclusiveTests](yupEth.default.md#exclusivetests)
- [is](yupEth.default.md#is)
- [nope](yupEth.default.md#nope)
- [not](yupEth.default.md#not)
- [spec](yupEth.default.md#spec)
- [tests](yupEth.default.md#tests)
- [transforms](yupEth.default.md#transforms)
- [type](yupEth.default.md#type)

### Accessors

- [\_type](yupEth.default.md#_type)

### Methods

- [\_cast](yupEth.default.md#_cast)
- [\_getDefault](yupEth.default.md#_getdefault)
- [\_isPresent](yupEth.default.md#_ispresent)
- [\_typeCheck](yupEth.default.md#_typecheck)
- [\_validate](yupEth.default.md#_validate)
- [cast](yupEth.default.md#cast)
- [clone](yupEth.default.md#clone)
- [concat](yupEth.default.md#concat)
- [default](yupEth.default.md#default)
- [defined](yupEth.default.md#defined)
- [describe](yupEth.default.md#describe)
- [email](yupEth.default.md#email)
- [emptyAsUndefined](yupEth.default.md#emptyasundefined)
- [ensure](yupEth.default.md#ensure)
- [ether](yupEth.default.md#ether)
- [ethereumAddress](yupEth.default.md#ethereumaddress)
- [getDefault](yupEth.default.md#getdefault)
- [isType](yupEth.default.md#istype)
- [isValid](yupEth.default.md#isvalid)
- [isValidSync](yupEth.default.md#isvalidsync)
- [label](yupEth.default.md#label)
- [length](yupEth.default.md#length)
- [lowercase](yupEth.default.md#lowercase)
- [matches](yupEth.default.md#matches)
- [max](yupEth.default.md#max)
- [meta](yupEth.default.md#meta)
- [min](yupEth.default.md#min)
- [notOneOf](yupEth.default.md#notoneof)
- [notRequired](yupEth.default.md#notrequired)
- [nullable](yupEth.default.md#nullable)
- [oneOf](yupEth.default.md#oneof)
- [optional](yupEth.default.md#optional)
- [required](yupEth.default.md#required)
- [resolve](yupEth.default.md#resolve)
- [strict](yupEth.default.md#strict)
- [strip](yupEth.default.md#strip)
- [test](yupEth.default.md#test)
- [transform](yupEth.default.md#transform)
- [trim](yupEth.default.md#trim)
- [typeError](yupEth.default.md#typeerror)
- [uppercase](yupEth.default.md#uppercase)
- [url](yupEth.default.md#url)
- [uuid](yupEth.default.md#uuid)
- [validate](yupEth.default.md#validate)
- [validateAt](yupEth.default.md#validateat)
- [validateSync](yupEth.default.md#validatesync)
- [validateSyncAt](yupEth.default.md#validatesyncat)
- [when](yupEth.default.md#when)
- [withContext](yupEth.default.md#withcontext)
- [withMutation](yupEth.default.md#withmutation)

## Constructors

### constructor

• **new default**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\>`undefined` \| `string` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `Maybe`<`string`\>`TType` |

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[constructor](yupEth.BaseSchema.md#constructor)

#### Defined in

node_modules/yup/lib/string.d.ts:18

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TType`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[__inputType](yupEth.BaseSchema.md#__inputtype)

#### Defined in

node_modules/yup/lib/schema.d.ts:54

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[__isYupSchema__](yupEth.BaseSchema.md#__isyupschema__)

#### Defined in

node_modules/yup/lib/schema.d.ts:56

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOut`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[__outputType](yupEth.BaseSchema.md#__outputtype)

#### Defined in

node_modules/yup/lib/schema.d.ts:55

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_blacklist](yupEth.BaseSchema.md#_blacklist)

#### Defined in

node_modules/yup/lib/schema.d.ts:66

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_whitelist](yupEth.BaseSchema.md#_whitelist)

#### Defined in

node_modules/yup/lib/schema.d.ts:65

___

### deps

• `Readonly` **deps**: readonly `string`[]

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[deps](yupEth.BaseSchema.md#deps)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[equals](yupEth.BaseSchema.md#equals)

#### Defined in

node_modules/yup/lib/schema.d.ts:138

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[exclusiveTests](yupEth.BaseSchema.md#exclusivetests)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[is](yupEth.BaseSchema.md#is)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nope](yupEth.BaseSchema.md#nope)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[not](yupEth.BaseSchema.md#not)

#### Defined in

node_modules/yup/lib/schema.d.ts:140

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[spec](yupEth.BaseSchema.md#spec)

#### Defined in

node_modules/yup/lib/schema.d.ts:68

___

### tests

• **tests**: `Test`[]

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[tests](yupEth.BaseSchema.md#tests)

#### Defined in

node_modules/yup/lib/schema.d.ts:58

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\>\>[]

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transforms](yupEth.BaseSchema.md#transforms)

#### Defined in

node_modules/yup/lib/schema.d.ts:59

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[type](yupEth.BaseSchema.md#type)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_cast](yupEth.BaseSchema.md#_cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:89

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_getDefault](yupEth.BaseSchema.md#_getdefault)

#### Defined in

node_modules/yup/lib/schema.d.ts:95

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

[BaseSchema](yupEth.BaseSchema.md).[_isPresent](yupEth.BaseSchema.md#_ispresent)

#### Defined in

node_modules/yup/lib/string.d.ts:20

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

[BaseSchema](yupEth.BaseSchema.md).[_typeCheck](yupEth.BaseSchema.md#_typecheck)

#### Defined in

node_modules/yup/lib/string.d.ts:19

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

[BaseSchema](yupEth.BaseSchema.md).[_validate](yupEth.BaseSchema.md#_validate)

#### Defined in

node_modules/yup/lib/schema.d.ts:90

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

[BaseSchema](yupEth.BaseSchema.md).[cast](yupEth.BaseSchema.md#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[clone](yupEth.BaseSchema.md#clone)

#### Defined in

node_modules/yup/lib/schema.d.ts:72

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`default`](yupEth.default.md)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/string.d.ts:64

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`default`](yupEth.default.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yupEth.default.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`default`](yupEth.default.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yupEth.default.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[default](yupEth.BaseSchema.md#default)

#### Defined in

node_modules/yup/lib/string.d.ts:65

___

### defined

▸ **defined**(`msg?`): `DefinedStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`DefinedStringSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[defined](yupEth.BaseSchema.md#defined)

#### Defined in

node_modules/yup/lib/string.d.ts:66

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[describe](yupEth.BaseSchema.md#describe)

#### Defined in

node_modules/yup/lib/schema.d.ts:133

___

### email

▸ **email**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:31

___

### emptyAsUndefined

▸ **emptyAsUndefined**(): [`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Defined in

dev/utils/form.ts:75

___

### ensure

▸ **ensure**(): [`default`](yupEth.default.md)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

#### Returns

[`default`](yupEth.default.md)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

#### Defined in

node_modules/yup/lib/string.d.ts:40

___

### ether

▸ **ether**(`min`, `minMessage`, `maxMessage`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `string` |
| `minMessage` | `string` |
| `maxMessage` | `string` |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Defined in

dev/utils/form.ts:77

___

### ethereumAddress

▸ **ethereumAddress**(`message`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Defined in

dev/utils/form.ts:76

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

[BaseSchema](yupEth.BaseSchema.md).[getDefault](yupEth.BaseSchema.md#getdefault)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[isType](yupEth.BaseSchema.md#istype)

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

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[isValid](yupEth.BaseSchema.md#isvalid)

#### Defined in

node_modules/yup/lib/schema.d.ts:93

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

[BaseSchema](yupEth.BaseSchema.md).[isValidSync](yupEth.BaseSchema.md#isvalidsync)

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[label](yupEth.BaseSchema.md#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### length

▸ **length**(`length`, `message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:21

___

### lowercase

▸ **lowercase**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:42

___

### matches

▸ **matches**(`regex`, `options?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `options?` | `MatchOptions` \| `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:30

___

### max

▸ **max**(`max`, `message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:27

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:24

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notOneOf](yupEth.BaseSchema.md#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notRequired](yupEth.BaseSchema.md#notrequired)

#### Defined in

node_modules/yup/lib/string.d.ts:69

___

### nullable

▸ **nullable**(`isNullable?`): [`default`](yupEth.default.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`default`](yupEth.default.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/string.d.ts:70

▸ **nullable**(`isNullable`): [`default`](yupEth.default.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`default`](yupEth.default.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/string.d.ts:71

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[oneOf](yupEth.BaseSchema.md#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[optional](yupEth.BaseSchema.md#optional)

#### Defined in

node_modules/yup/lib/string.d.ts:68

___

### required

▸ **required**(`msg?`): `RequiredStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredStringSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[required](yupEth.BaseSchema.md#required)

#### Defined in

node_modules/yup/lib/string.d.ts:67

___

### resolve

▸ **resolve**(`options`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[resolve](yupEth.BaseSchema.md#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strict](yupEth.BaseSchema.md#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strip](yupEth.BaseSchema.md#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

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
| `options` | [`TestConfig`](../modules/yupEth.md#testconfig)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transform](yupEth.BaseSchema.md#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### trim

▸ **trim**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:41

___

### typeError

▸ **typeError**(`message`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[typeError](yupEth.BaseSchema.md#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### uppercase

▸ **uppercase**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:43

___

### url

▸ **url**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:34

___

### uuid

▸ **uuid**(`message?`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:37

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

[BaseSchema](yupEth.BaseSchema.md).[validate](yupEth.BaseSchema.md#validate)

#### Defined in

node_modules/yup/lib/schema.d.ts:91

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

[BaseSchema](yupEth.BaseSchema.md).[validateAt](yupEth.BaseSchema.md#validateat)

#### Defined in

node_modules/yup/lib/schema.d.ts:136

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

[BaseSchema](yupEth.BaseSchema.md).[validateSync](yupEth.BaseSchema.md#validatesync)

#### Defined in

node_modules/yup/lib/schema.d.ts:92

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

[BaseSchema](yupEth.BaseSchema.md).[validateSyncAt](yupEth.BaseSchema.md#validatesyncat)

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:124

___

### withContext

▸ **withContext**<`TNextContext`\>(): [`default`](yupEth.default.md)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextContext` | extends `AnyObject` |

#### Returns

[`default`](yupEth.default.md)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

#### Defined in

node_modules/yup/lib/string.d.ts:72

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
| `fn` | (`schema`: [`default`](yupEth.default.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[withMutation](yupEth.BaseSchema.md#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76
