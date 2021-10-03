---
id: "ISecureStorage"
title: "Interface: ISecureStorage"
sidebar_label: "ISecureStorage"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`SecureStorage`](../classes/SecureStorage.md)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### getAllKeys

▸ **getAllKeys**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

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

___

### getRawItem

▸ **getRawItem**(`itemName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |

#### Returns

`string`

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

___

### removeItem

▸ **removeItem**(`itemName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |

#### Returns

`void`

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
