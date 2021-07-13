[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / [yupEth](../modules/yupEth.md) / ObjectSchema

# Class: ObjectSchema<TShape, TContext, TIn, TOut\>

[yupEth](../modules/yupEth.md).ObjectSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\>`TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\>`AssertsShape`<`TShape`\> \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](yupEth.BaseSchema.md)<`TIn`, `TContext`, `TOut`\>

  ↳ **`ObjectSchema`**

## Table of contents

### Constructors

- [constructor](yupEth.ObjectSchema.md#constructor)

### Properties

- [\_\_inputType](yupEth.ObjectSchema.md#__inputtype)
- [\_\_isYupSchema\_\_](yupEth.ObjectSchema.md#__isyupschema__)
- [\_\_outputType](yupEth.ObjectSchema.md#__outputtype)
- [\_blacklist](yupEth.ObjectSchema.md#_blacklist)
- [\_excludedEdges](yupEth.ObjectSchema.md#_excludededges)
- [\_nodes](yupEth.ObjectSchema.md#_nodes)
- [\_sortErrors](yupEth.ObjectSchema.md#_sorterrors)
- [\_whitelist](yupEth.ObjectSchema.md#_whitelist)
- [deps](yupEth.ObjectSchema.md#deps)
- [equals](yupEth.ObjectSchema.md#equals)
- [exclusiveTests](yupEth.ObjectSchema.md#exclusivetests)
- [fields](yupEth.ObjectSchema.md#fields)
- [is](yupEth.ObjectSchema.md#is)
- [nope](yupEth.ObjectSchema.md#nope)
- [not](yupEth.ObjectSchema.md#not)
- [spec](yupEth.ObjectSchema.md#spec)
- [tests](yupEth.ObjectSchema.md#tests)
- [transforms](yupEth.ObjectSchema.md#transforms)
- [type](yupEth.ObjectSchema.md#type)

### Accessors

- [\_type](yupEth.ObjectSchema.md#_type)

### Methods

- [\_cast](yupEth.ObjectSchema.md#_cast)
- [\_getDefault](yupEth.ObjectSchema.md#_getdefault)
- [\_isPresent](yupEth.ObjectSchema.md#_ispresent)
- [\_typeCheck](yupEth.ObjectSchema.md#_typecheck)
- [\_validate](yupEth.ObjectSchema.md#_validate)
- [camelCase](yupEth.ObjectSchema.md#camelcase)
- [cast](yupEth.ObjectSchema.md#cast)
- [clone](yupEth.ObjectSchema.md#clone)
- [concat](yupEth.ObjectSchema.md#concat)
- [constantCase](yupEth.ObjectSchema.md#constantcase)
- [default](yupEth.ObjectSchema.md#default)
- [defined](yupEth.ObjectSchema.md#defined)
- [describe](yupEth.ObjectSchema.md#describe)
- [from](yupEth.ObjectSchema.md#from)
- [getDefault](yupEth.ObjectSchema.md#getdefault)
- [getDefaultFromShape](yupEth.ObjectSchema.md#getdefaultfromshape)
- [isType](yupEth.ObjectSchema.md#istype)
- [isValid](yupEth.ObjectSchema.md#isvalid)
- [isValidSync](yupEth.ObjectSchema.md#isvalidsync)
- [label](yupEth.ObjectSchema.md#label)
- [meta](yupEth.ObjectSchema.md#meta)
- [noUnknown](yupEth.ObjectSchema.md#nounknown)
- [notOneOf](yupEth.ObjectSchema.md#notoneof)
- [notRequired](yupEth.ObjectSchema.md#notrequired)
- [nullable](yupEth.ObjectSchema.md#nullable)
- [omit](yupEth.ObjectSchema.md#omit)
- [oneOf](yupEth.ObjectSchema.md#oneof)
- [optional](yupEth.ObjectSchema.md#optional)
- [pick](yupEth.ObjectSchema.md#pick)
- [required](yupEth.ObjectSchema.md#required)
- [resolve](yupEth.ObjectSchema.md#resolve)
- [shape](yupEth.ObjectSchema.md#shape)
- [snakeCase](yupEth.ObjectSchema.md#snakecase)
- [strict](yupEth.ObjectSchema.md#strict)
- [strip](yupEth.ObjectSchema.md#strip)
- [test](yupEth.ObjectSchema.md#test)
- [transform](yupEth.ObjectSchema.md#transform)
- [transformKeys](yupEth.ObjectSchema.md#transformkeys)
- [typeError](yupEth.ObjectSchema.md#typeerror)
- [unknown](yupEth.ObjectSchema.md#unknown)
- [validate](yupEth.ObjectSchema.md#validate)
- [validateAt](yupEth.ObjectSchema.md#validateat)
- [validateSync](yupEth.ObjectSchema.md#validatesync)
- [validateSyncAt](yupEth.ObjectSchema.md#validatesyncat)
- [when](yupEth.ObjectSchema.md#when)
- [withMutation](yupEth.ObjectSchema.md#withmutation)

## Constructors

### constructor

• **new ObjectSchema**<`TShape`, `TContext`, `TIn`, `TOut`\>(`spec?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject``AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\>`TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\>`AssertsShape`<`TShape`\> \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[constructor](yupEth.BaseSchema.md#constructor)

#### Defined in

node_modules/yup/lib/object.d.ts:32

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

### \_excludedEdges

• `Private` **\_excludedEdges**: `any`

#### Defined in

node_modules/yup/lib/object.d.ts:31

___

### \_nodes

• `Private` **\_nodes**: `any`

#### Defined in

node_modules/yup/lib/object.d.ts:30

___

### \_sortErrors

• `Private` **\_sortErrors**: `any`

#### Defined in

node_modules/yup/lib/object.d.ts:29

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

### fields

• **fields**: `TShape`

#### Defined in

node_modules/yup/lib/object.d.ts:27

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

• **spec**: `ObjectSchemaSpec`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[spec](yupEth.BaseSchema.md#spec)

#### Defined in

node_modules/yup/lib/object.d.ts:28

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

▸ `Protected` **_cast**(`_value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options?` | `InternalOptions`<`TContext`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_cast](yupEth.BaseSchema.md#_cast)

#### Defined in

node_modules/yup/lib/object.d.ts:34

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_getDefault](yupEth.BaseSchema.md#_getdefault)

#### Defined in

node_modules/yup/lib/object.d.ts:40

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

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TIn\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_typeCheck](yupEth.BaseSchema.md#_typecheck)

#### Defined in

node_modules/yup/lib/object.d.ts:33

___

### \_validate

▸ `Protected` **_validate**(`_value`, `opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `opts` | `undefined` \| `InternalOptions`<`TContext`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[_validate](yupEth.BaseSchema.md#_validate)

#### Defined in

node_modules/yup/lib/object.d.ts:35

___

### camelCase

▸ **camelCase**(): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:48

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[cast](yupEth.BaseSchema.md#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `ObjectSchemaSpec` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[clone](yupEth.BaseSchema.md#clone)

#### Defined in

node_modules/yup/lib/object.d.ts:36

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther` extends [`ObjectSchema`](yupEth.ObjectSchema.md)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ObjectSchema`](yupEth.ObjectSchema.md)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther` extends [`ObjectSchema`](yupEth.ObjectSchema.md)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/object.d.ts:37

▸ **concat**(`schema`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[concat](yupEth.BaseSchema.md#concat)

#### Defined in

node_modules/yup/lib/object.d.ts:38

___

### constantCase

▸ **constantCase**(): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:50

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

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[defined](yupEth.BaseSchema.md#defined)

#### Defined in

node_modules/yup/lib/schema.d.ts:100

___

### describe

▸ **describe**(): `SchemaObjectDescription`

#### Returns

`SchemaObjectDescription`

#### Overrides

[BaseSchema](yupEth.BaseSchema.md).[describe](yupEth.BaseSchema.md#describe)

#### Defined in

node_modules/yup/lib/object.d.ts:51

___

### from

▸ **from**(`from`, `to`, `alias?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | keyof `TShape` |
| `alias?` | `boolean` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:44

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

### getDefaultFromShape

▸ **getDefaultFromShape**(): `DefaultFromShape`<`TShape`\>

#### Returns

`DefaultFromShape`<`TShape`\>

#### Defined in

node_modules/yup/lib/object.d.ts:39

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

▸ **label**(`label`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[label](yupEth.BaseSchema.md#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[meta](yupEth.BaseSchema.md#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### noUnknown

▸ **noUnknown**(`noAllow?`, `message?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `noAllow?` | `boolean` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:45

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/schema.d.ts:103

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[nullable](yupEth.BaseSchema.md#nullable)

#### Defined in

node_modules/yup/lib/schema.d.ts:104

___

### omit

▸ **omit**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/object.d.ts:43

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

### pick

▸ **pick**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/object.d.ts:42

___

### required

▸ **required**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`Object`\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[required](yupEth.BaseSchema.md#required)

#### Defined in

node_modules/yup/lib/schema.d.ts:101

___

### resolve

▸ **resolve**(`options`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[resolve](yupEth.BaseSchema.md#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### shape

▸ **shape**<`TNextShape`\>(`additions`, `excludes?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextShape` | extends `ObjectShape` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `additions` | `TNextShape` |
| `excludes?` | [`string`, `string`][] |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

#### Defined in

node_modules/yup/lib/object.d.ts:41

___

### snakeCase

▸ **snakeCase**(): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:49

___

### strict

▸ **strict**(`isStrict?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strict](yupEth.BaseSchema.md#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[strip](yupEth.BaseSchema.md#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../modules/yupEth.md#testconfig)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<`Object`\> |
| `test` | [`TestFunction`](../modules/yupEth.md#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[test](yupEth.BaseSchema.md#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[transform](yupEth.BaseSchema.md#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### transformKeys

▸ **transformKeys**(`fn`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`key`: `string`) => `string` |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:47

___

### typeError

▸ **typeError**(`message`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[typeError](yupEth.BaseSchema.md#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### unknown

▸ **unknown**(`allow?`, `message?`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |
| `message?` | `Message`<`Object`\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:46

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

▸ **when**(`options`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[when](yupEth.BaseSchema.md#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `fn` | (`schema`: [`ObjectSchema`](yupEth.ObjectSchema.md)<`TShape`, `TContext`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](yupEth.BaseSchema.md).[withMutation](yupEth.BaseSchema.md#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76
