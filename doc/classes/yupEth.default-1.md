[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / default

# Class: default<TType, TContext, TOut\>

[yupEth](../modules/yupEth.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`number`\>`number` \| `undefined` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TOut` | extends `TType``TType` |

## Hierarchy

- [`BaseSchema`](yupEth.BaseSchema.md)<`TType`, `TContext`, `TOut`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](yupEth.default-1.md#constructor)

### Properties

- [\_\_inputType](yupEth.default-1.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.default-1.md#__isyupschema__)
- [\_\_outputType](yupEth.default-1.md#__outputtype)
- [\_blacklist](yupEth.default-1.md#_blacklist)
- [\_whitelist](yupEth.default-1.md#_whitelist)
- [deps](yupEth.default-1.md#deps)
- [equals](yupEth.default-1.md#equals)
- [exclusiveTests](yupEth.default-1.md#exclusivetests)
- [is](yupEth.default-1.md#is)
- [nope](yupEth.default-1.md#nope)
- [not](yupEth.default-1.md#not)
- [spec](yupEth.default-1.md#spec)
- [tests](yupEth.default-1.md#tests)
- [transforms](yupEth.default-1.md#transforms)
- [type](yupEth.default-1.md#type)

### Accessors

- [\_type](yupEth.default-1.md#_type)

### Methods

- [\_cast](yupEth.default-1.md#_cast)
- [\_getDefault](yupEth.default-1.md#_getdefault)
- [\_isPresent](yupEth.default-1.md#_ispresent)
- [\_typeCheck](yupEth.default-1.md#_typecheck)
- [\_validate](yupEth.default-1.md#_validate)
- [cast](yupEth.default-1.md#cast)
- [clone](yupEth.default-1.md#clone)
- [concat](yupEth.default-1.md#concat)
- [default](yupEth.default-1.md#default)
- [defined](yupEth.default-1.md#defined)
- [describe](yupEth.default-1.md#describe)
- [emptyAsUndefined](yupEth.default-1.md#emptyasundefined)
- [getDefault](yupEth.default-1.md#getdefault)
- [integer](yupEth.default-1.md#integer)
- [isType](yupEth.default-1.md#istype)
- [isValid](yupEth.default-1.md#isvalid)
- [isValidSync](yupEth.default-1.md#isvalidsync)
- [label](yupEth.default-1.md#label)
- [lessThan](yupEth.default-1.md#lessthan)
- [max](yupEth.default-1.md#max)
- [meta](yupEth.default-1.md#meta)
- [min](yupEth.default-1.md#min)
- [moreThan](yupEth.default-1.md#morethan)
- [negative](yupEth.default-1.md#negative)
- [notOneOf](yupEth.default-1.md#notoneof)
- [notRequired](yupEth.default-1.md#notrequired)
- [nullable](yupEth.default-1.md#nullable)
- [oneOf](yupEth.default-1.md#oneof)
- [optional](yupEth.default-1.md#optional)
- [positive](yupEth.default-1.md#positive)
- [required](yupEth.default-1.md#required)
- [resolve](yupEth.default-1.md#resolve)
- [round](yupEth.default-1.md#round)
- [strict](yupEth.default-1.md#strict)
- [strip](yupEth.default-1.md#strip)
- [test](yupEth.default-1.md#test)
- [transform](yupEth.default-1.md#transform)
- [truncate](yupEth.default-1.md#truncate)
- [typeError](yupEth.default-1.md#typeerror)
- [validate](yupEth.default-1.md#validate)
- [validateAt](yupEth.default-1.md#validateat)
- [validateSync](yupEth.default-1.md#validatesync)
- [validateSyncAt](yupEth.default-1.md#validatesyncat)
- [when](yupEth.default-1.md#when)
- [withMutation](yupEth.default-1.md#withmutation)

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

[BaseSchema](yupEth.BaseSchema.md).[constructor](yupEth.BaseSchema.md#constructor)

#### Defined in

node_modules/yup/lib/number.d.ts:11

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
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[_isPresent](yupEth.BaseSchema.md#_ispresent)

#### Defined in

node_modules/yup/lib/schema.d.ts:99

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

node_modules/yup/lib/number.d.ts:12

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

▸ **clone**(`spec?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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
| `TOther` | extends [`default`](yupEth.default-1.md)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/number.d.ts:36

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`default`](yupEth.default-1.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yupEth.default-1.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`default`](yupEth.default-1.md)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`default`](yupEth.default-1.md)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[default](yupEth.BaseSchema.md#default)

#### Defined in

node_modules/yup/lib/number.d.ts:37

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

[BaseSchema](yupEth.BaseSchema.md).[defined](yupEth.BaseSchema.md#defined)

#### Defined in

node_modules/yup/lib/number.d.ts:38

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

### emptyAsUndefined

▸ **emptyAsUndefined**(): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Defined in

dev/utils/form.ts:89

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

### integer

▸ **integer**(`message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:31

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

▸ **label**(`label`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[label](yupEth.BaseSchema.md#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### lessThan

▸ **lessThan**(`less`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `less` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:19

___

### max

▸ **max**(`max`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:16

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:13

___

### moreThan

▸ **moreThan**(`more`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `more` | `number` \| `default`<`number`\> |
| `message?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:22

___

### negative

▸ **negative**(`msg?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:28

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notOneOf](yupEth.BaseSchema.md#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[notRequired](yupEth.BaseSchema.md#notrequired)

#### Defined in

node_modules/yup/lib/number.d.ts:41

___

### nullable

▸ **nullable**(`isNullable?`): [`default`](yupEth.default-1.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`default`](yupEth.default-1.md)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/number.d.ts:42

▸ **nullable**(`isNullable`): [`default`](yupEth.default-1.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`default`](yupEth.default-1.md)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/number.d.ts:43

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[oneOf](yupEth.BaseSchema.md#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[optional](yupEth.BaseSchema.md#optional)

#### Defined in

node_modules/yup/lib/number.d.ts:40

___

### positive

▸ **positive**(`msg?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:25

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

[BaseSchema](yupEth.BaseSchema.md).[required](yupEth.BaseSchema.md#required)

#### Defined in

node_modules/yup/lib/number.d.ts:39

___

### resolve

▸ **resolve**(`options`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[resolve](yupEth.BaseSchema.md#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### round

▸ **round**(`method`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"ceil"`` \| ``"floor"`` \| ``"round"`` \| ``"trunc"`` |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:33

___

### strict

▸ **strict**(`isStrict?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strict](yupEth.BaseSchema.md#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strip](yupEth.BaseSchema.md#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TType`, `TContext`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transform](yupEth.BaseSchema.md#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### truncate

▸ **truncate**(): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:32

___

### typeError

▸ **typeError**(`message`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`default`](yupEth.default-1.md)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[withMutation](yupEth.BaseSchema.md#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76
