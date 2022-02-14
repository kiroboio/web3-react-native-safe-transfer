---
id: "IWeb3ReactContext"
title: "Interface: IWeb3ReactContext"
sidebar_label: "IWeb3ReactContext"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### active

• **active**: `boolean`

___

### address

• `Optional` **address**: ``null`` \| `string`

___

### chainId

• `Optional` **chainId**: `number`

___

### connector

• **connector**: `undefined` \| `InAppWalletConnector`

___

### library

• **library**: `default`

## Methods

### connect

▸ **connect**(`p`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |
| `p.chainId` | ``1`` \| ``4`` |
| `p.privateKey` | `string` |

#### Returns

`Promise`<`void`\>

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`
