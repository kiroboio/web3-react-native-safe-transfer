[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / ArraySchema

# Class: ArraySchema<T, C, TIn, TOut\>

[yupEth](../modules/yupEth.md).ArraySchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../modules/yupEth.md#anyschema) \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[]\>[`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[] \| `undefined` |
| `TOut` | extends `Maybe`<[`Asserts`](../modules/yupEth.md#asserts)<`T`\>[]\>[`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yupEth.BaseSchema.md)<`TIn`, `C`, `TOut`\>

  ↳ **`ArraySchema`**

## Table of contents

### Constructors

- [constructor](yupEth.ArraySchema.md#constructor)

### Properties

- [\_\_inputType](yupEth.ArraySchema.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.ArraySchema.md#__isyupschema__)
- [\_\_outputType](yupEth.ArraySchema.md#__outputtype)
- [\_blacklist](yupEth.ArraySchema.md#_blacklist)
- [\_whitelist](yupEth.ArraySchema.md#_whitelist)
- [deps](yupEth.ArraySchema.md#deps)
- [equals](yupEth.ArraySchema.md#equals)
- [exclusiveTests](yupEth.ArraySchema.md#exclusivetests)
- [innerType](yupEth.ArraySchema.md#innertype)
- [is](yupEth.ArraySchema.md#is)
- [nope](yupEth.ArraySchema.md#nope)
- [not](yupEth.ArraySchema.md#not)
- [spec](yupEth.ArraySchema.md#spec)
- [tests](yupEth.ArraySchema.md#tests)
- [transforms](yupEth.ArraySchema.md#transforms)
- [type](yupEth.ArraySchema.md#type)

### Accessors

- [\_subType](yupEth.ArraySchema.md#_subtype)
- [\_type](yupEth.ArraySchema.md#_type)

### Methods

- [\_cast](yupEth.ArraySchema.md#_cast)
- [\_getDefault](yupEth.ArraySchema.md#_getdefault)
- [\_isPresent](yupEth.ArraySchema.md#_ispresent)
- [\_typeCheck](yupEth.ArraySchema.md#_typecheck)
- [\_validate](yupEth.ArraySchema.md#_validate)
- [cast](yupEth.ArraySchema.md#cast)
- [clone](yupEth.ArraySchema.md#clone)
- [compact](yupEth.ArraySchema.md#compact)
- [concat](yupEth.ArraySchema.md#concat)
- [default](yupEth.ArraySchema.md#default)
- [defined](yupEth.ArraySchema.md#defined)
- [describe](yupEth.ArraySchema.md#describe)
- [ensure](yupEth.ArraySchema.md#ensure)
- [getDefault](yupEth.ArraySchema.md#getdefault)
- [isType](yupEth.ArraySchema.md#istype)
- [isValid](yupEth.ArraySchema.md#isvalid)
- [isValidSync](yupEth.ArraySchema.md#isvalidsync)
- [label](yupEth.ArraySchema.md#label)
- [length](yupEth.ArraySchema.md#length)
- [max](yupEth.ArraySchema.md#max)
- [meta](yupEth.ArraySchema.md#meta)
- [min](yupEth.ArraySchema.md#min)
- [notOneOf](yupEth.ArraySchema.md#notoneof)
- [notRequired](yupEth.ArraySchema.md#notrequired)
- [nullable](yupEth.ArraySchema.md#nullable)
- [of](yupEth.ArraySchema.md#of)
- [oneOf](yupEth.ArraySchema.md#oneof)
- [optional](yupEth.ArraySchema.md#optional)
- [required](yupEth.ArraySchema.md#required)
- [resolve](yupEth.ArraySchema.md#resolve)
- [strict](yupEth.ArraySchema.md#strict)
- [strip](yupEth.ArraySchema.md#strip)
- [test](yupEth.ArraySchema.md#test)
- [transform](yupEth.ArraySchema.md#transform)
- [typeError](yupEth.ArraySchema.md#typeerror)
- [validate](yupEth.ArraySchema.md#validate)
- [validateAt](yupEth.ArraySchema.md#validateat)
- [validateSync](yupEth.ArraySchema.md#validatesync)
- [validateSyncAt](yupEth.ArraySchema.md#validatesyncat)
- [when](yupEth.ArraySchema.md#when)
- [withMutation](yupEth.ArraySchema.md#withmutation)

## Constructors

### constructor

• **new ArraySchema**<`T`, `C`, `TIn`, `TOut`\>(`type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../modules/yupEth.md#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[]\>`undefined` \| [`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[] |
| `TOut` | extends `Maybe`<[`Asserts`](../modules/yupEth.md#asserts)<`T`\>[]\>[`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[constructor](yupEth.BaseSchema.md#constructor)

#### Defined in

node_modules/yup/lib/array.d.ts:14

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TIn`

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

### innerType

• `Optional` **innerType**: `T`

#### Defined in

node_modules/yup/lib/array.d.ts:13

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

### \_subType

• `Private` `get` **_subType**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/array.d.ts:16

___

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

#### Defined in

node_modules/yup/lib/schema.d.ts:70

## Methods

### \_cast

▸ `Protected` **_cast**(`_value`, `_opts`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `_opts` | `InternalOptions`<`C`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_cast](yupEth.BaseSchema.md#_cast)

#### Defined in

node_modules/yup/lib/array.d.ts:17

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

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TIn\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_typeCheck](yupEth.BaseSchema.md#_typecheck)

#### Defined in

node_modules/yup/lib/array.d.ts:15

___

### \_validate

▸ `Protected` **_validate**(`_value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options` | `undefined` \| `InternalOptions`<`C`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_validate](yupEth.BaseSchema.md#_validate)

#### Defined in

node_modules/yup/lib/array.d.ts:18

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`C`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[cast](yupEth.BaseSchema.md#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `SchemaSpec`<`any`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[clone](yupEth.BaseSchema.md#clone)

#### Defined in

node_modules/yup/lib/array.d.ts:19

___

### compact

▸ **compact**(`rejector?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rejector?` | `RejectorFn` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:33

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ArraySchema`](yupEth.ArraySchema.md)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/array.d.ts:20

▸ **concat**(`schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`any`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/array.d.ts:21

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[default](yupEth.BaseSchema.md#default)

#### Defined in

node_modules/yup/lib/schema.d.ts:97

___

### defined

▸ **defined**(): `DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[defined](yupEth.BaseSchema.md#defined)

#### Defined in

node_modules/yup/lib/array.d.ts:37

___

### describe

▸ **describe**(): `SchemaInnerTypeDescription`

#### Returns

`SchemaInnerTypeDescription`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[describe](yupEth.BaseSchema.md#describe)

#### Defined in

node_modules/yup/lib/array.d.ts:34

___

### ensure

▸ **ensure**(): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Defined in

node_modules/yup/lib/array.d.ts:32

___

### getDefault

▸ **getDefault**(`options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TIn`

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
| `options?` | `ValidateOptions`<`C`\> |

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
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

value is TOut

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[isValidSync](yupEth.BaseSchema.md#isvalidsync)

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[label](yupEth.BaseSchema.md#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### length

▸ **length**(`length`, `message?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:23

___

### max

▸ **max**(`max`, `message?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:29

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:26

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notOneOf](yupEth.BaseSchema.md#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notRequired](yupEth.BaseSchema.md#notrequired)

#### Defined in

node_modules/yup/lib/schema.d.ts:102

___

### nullable

▸ **nullable**(`isNullable?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/array.d.ts:35

▸ **nullable**(`isNullable`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../modules/yupEth.md#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/array.d.ts:36

___

### of

▸ **of**<`TInner`\>(`schema`): [`ArraySchema`](yupEth.ArraySchema.md)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../modules/yupEth.md#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../modules/yupEth.md#asserts)<`TInner`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInner` | extends [`BaseSchema`](yupEth.BaseSchema.md)<`any`, `any`, `any`, `TInner`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TInner` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../modules/yupEth.md#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../modules/yupEth.md#asserts)<`TInner`\>[]\>

#### Defined in

node_modules/yup/lib/array.d.ts:22

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../modules/yupEth.md#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[oneOf](yupEth.BaseSchema.md#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[optional](yupEth.BaseSchema.md#optional)

#### Defined in

node_modules/yup/lib/schema.d.ts:142

___

### required

▸ **required**(`msg?`): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[required](yupEth.BaseSchema.md#required)

#### Defined in

node_modules/yup/lib/array.d.ts:38

___

### resolve

▸ **resolve**(`options`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[resolve](yupEth.BaseSchema.md#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strict](yupEth.BaseSchema.md#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strip](yupEth.BaseSchema.md#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../modules/yupEth.md#testconfig)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transform](yupEth.BaseSchema.md#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

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
| `options?` | `ValidateOptions`<`C`\> |

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
| `options?` | `ValidateOptions`<`C`\> |

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
| `options?` | `ValidateOptions`<`C`\> |

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
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[validateSyncAt](yupEth.BaseSchema.md#validatesyncat)

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>

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
| `fn` | (`schema`: [`ArraySchema`](yupEth.ArraySchema.md)<`T`, `C`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[withMutation](yupEth.BaseSchema.md#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76
