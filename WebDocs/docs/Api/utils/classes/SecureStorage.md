---
id: "SecureStorage"
title: "Class: SecureStorage"
sidebar_label: "SecureStorage"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ISecureStorage`](../interfaces/ISecureStorage.md)

## Constructors

### constructor

• **new SecureStorage**()

## Properties

### encryptionNamespace

• `Private` **encryptionNamespace**: `string` = `''`

___

### storage

• `Private` **storage**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `SecureLS`

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[clear](../interfaces/ISecureStorage.md#clear)

___

### createNewSecureSecureStorage

▸ `Private` **createNewSecureSecureStorage**(`encryptionNamespace`, `encryptionSecret?`, `encodingType?`, `replace?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encryptionNamespace` | `string` | `undefined` |
| `encryptionSecret?` | `string` | `undefined` |
| `encodingType` | `string` | `'aes'` |
| `replace` | `boolean` | `false` |

#### Returns

`void`

___

### getAllKeys

▸ **getAllKeys**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[getAllKeys](../interfaces/ISecureStorage.md#getallkeys)

___

### getItem

▸ **getItem**<`I`\>(`itemName`, `isAllKeysData?`): `Promise`<`undefined` \| `I`\>

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |
| `isAllKeysData?` | `boolean` |

#### Returns

`Promise`<`undefined` \| `I`\>

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[getItem](../interfaces/ISecureStorage.md#getitem)

___

### getRawItem

▸ **getRawItem**(`itemName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |

#### Returns

`string`

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[getRawItem](../interfaces/ISecureStorage.md#getrawitem)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[removeAll](../interfaces/ISecureStorage.md#removeall)

___

### removeItem

▸ **removeItem**(`itemName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |

#### Returns

`void`

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[removeItem](../interfaces/ISecureStorage.md#removeitem)

___

### setItem

▸ **setItem**(`itemName`, `item`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |
| `item` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISecureStorage](../interfaces/ISecureStorage.md).[setItem](../interfaces/ISecureStorage.md#setitem)

___

### setSecreteStorage

▸ **setSecreteStorage**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SetSecureStorageParams`](../modules.md#setsecurestorageparams) |

#### Returns

`void`
