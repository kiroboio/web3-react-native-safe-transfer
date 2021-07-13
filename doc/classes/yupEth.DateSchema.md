[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / DateSchema

# Class: DateSchema<TType, TContext, TOut\>

[yupEth](../modules/yupEth.md).DateSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\>`Date` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yupEth.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`DateSchema`**

## Table of contents

### Constructors

- [constructor](yupEth.DateSchema.md#constructor)

### Properties

- [\_\_inputType](yupEth.DateSchema.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.DateSchema.md#__isyupschema__)
- [\_\_outputType](yupEth.DateSchema.md#__outputtype)
- [\_blacklist](yupEth.DateSchema.md#_blacklist)
- [\_whitelist](yupEth.DateSchema.md#_whitelist)
- [deps](yupEth.DateSchema.md#deps)
- [equals](yupEth.DateSchema.md#equals)
- [exclusiveTests](yupEth.DateSchema.md#exclusivetests)
- [is](yupEth.DateSchema.md#is)
- [nope](yupEth.DateSchema.md#nope)
- [not](yupEth.DateSchema.md#not)
- [prepareParam](yupEth.DateSchema.md#prepareparam)
- [spec](yupEth.DateSchema.md#spec)
- [tests](yupEth.DateSchema.md#tests)
- [transforms](yupEth.DateSchema.md#transforms)
- [type](yupEth.DateSchema.md#type)
- [INVALID\_DATE](yupEth.DateSchema.md#invalid_date)

### Accessors

- [\_type](yupEth.DateSchema.md#_type)

### Methods

- [\_cast](yupEth.DateSchema.md#_cast)
- [\_getDefault](yupEth.DateSchema.md#_getdefault)
- [\_isPresent](yupEth.DateSchema.md#_ispresent)
- [\_typeCheck](yupEth.DateSchema.md#_typecheck)
- [\_validate](yupEth.DateSchema.md#_validate)
- [cast](yupEth.DateSchema.md#cast)
- [clone](yupEth.DateSchema.md#clone)
- [concat](yupEth.DateSchema.md#concat)
- [default](yupEth.DateSchema.md#default)
- [defined](yupEth.DateSchema.md#defined)
- [describe](yupEth.DateSchema.md#describe)
- [getDefault](yupEth.DateSchema.md#getdefault)
- [isType](yupEth.DateSchema.md#istype)
- [isValid](yupEth.DateSchema.md#isvalid)
- [isValidSync](yupEth.DateSchema.md#isvalidsync)
- [label](yupEth.DateSchema.md#label)
- [max](yupEth.DateSchema.md#max)
- [meta](yupEth.DateSchema.md#meta)
- [min](yupEth.DateSchema.md#min)
- [notOneOf](yupEth.DateSchema.md#notoneof)
- [notRequired](yupEth.DateSchema.md#notrequired)
- [nullable](yupEth.DateSchema.md#nullable)
- [oneOf](yupEth.DateSchema.md#oneof)
- [optional](yupEth.DateSchema.md#optional)
- [required](yupEth.DateSchema.md#required)
- [resolve](yupEth.DateSchema.md#resolve)
- [strict](yupEth.DateSchema.md#strict)
- [strip](yupEth.DateSchema.md#strip)
- [test](yupEth.DateSchema.md#test)
- [transform](yupEth.DateSchema.md#transform)
- [typeError](yupEth.DateSchema.md#typeerror)
- [validate](yupEth.DateSchema.md#validate)
- [validateAt](yupEth.DateSchema.md#validateat)
- [validateSync](yupEth.DateSchema.md#validatesync)
- [validateSyncAt](yupEth.DateSchema.md#validatesyncat)
- [when](yupEth.DateSchema.md#when)
- [withMutation](yupEth.DateSchema.md#withmutation)

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

[BaseSchema](yupEth.BaseSchema.md).[constructor](yupEth.BaseSchema.md#constructor)

#### Defined in

node_modules/yup/lib/date.d.ts:13

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

### prepareParam

• `Private` **prepareParam**: `any`

#### Defined in

node_modules/yup/lib/date.d.ts:15

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

___

### INVALID\_DATE

▪ `Static` **INVALID\_DATE**: `Date`

#### Defined in

node_modules/yup/lib/date.d.ts:12

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
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_isPresent](yupEth.BaseSchema.md#_ispresent)

#### Defined in

node_modules/yup/lib/schema.d.ts:99

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

[BaseSchema](yupEth.BaseSchema.md).[_typeCheck](yupEth.BaseSchema.md#_typecheck)

#### Defined in

node_modules/yup/lib/date.d.ts:14

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

▸ **clone**(`spec?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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
| `TOther` | extends [`DateSchema`](yupEth.DateSchema.md)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/date.d.ts:24

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`DateSchema`](yupEth.DateSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yupEth.DateSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`DateSchema`](yupEth.DateSchema.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](yupEth.DateSchema.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[default](yupEth.BaseSchema.md#default)

#### Defined in

node_modules/yup/lib/date.d.ts:25

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

[BaseSchema](yupEth.BaseSchema.md).[defined](yupEth.BaseSchema.md#defined)

#### Defined in

node_modules/yup/lib/date.d.ts:26

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

▸ **label**(`label`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[label](yupEth.BaseSchema.md#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### max

▸ **max**(`max`, `message?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `unknown` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/date.d.ts:19

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `unknown` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/date.d.ts:16

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notOneOf](yupEth.BaseSchema.md#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notRequired](yupEth.BaseSchema.md#notrequired)

#### Defined in

node_modules/yup/lib/date.d.ts:29

___

### nullable

▸ **nullable**(`isNullable?`): [`DateSchema`](yupEth.DateSchema.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/date.d.ts:30

▸ **nullable**(`isNullable`): [`DateSchema`](yupEth.DateSchema.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/date.d.ts:31

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[oneOf](yupEth.BaseSchema.md#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[optional](yupEth.BaseSchema.md#optional)

#### Defined in

node_modules/yup/lib/date.d.ts:28

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

[BaseSchema](yupEth.BaseSchema.md).[required](yupEth.BaseSchema.md#required)

#### Defined in

node_modules/yup/lib/date.d.ts:27

___

### resolve

▸ **resolve**(`options`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[resolve](yupEth.BaseSchema.md#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strict](yupEth.BaseSchema.md#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strip](yupEth.BaseSchema.md#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

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

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transform](yupEth.BaseSchema.md#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[typeError](yupEth.BaseSchema.md#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

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

▸ **when**(`options`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

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
| `fn` | (`schema`: [`DateSchema`](yupEth.DateSchema.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[withMutation](yupEth.BaseSchema.md#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76
