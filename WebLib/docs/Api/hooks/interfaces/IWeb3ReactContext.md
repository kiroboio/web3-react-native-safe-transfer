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

• `Optional` **connector**: `ConnectorType`

___

### error

• `Optional` **error**: `Error`

___

### library

• **library**: `default`

## Methods

### activate

▸ **activate**(`connector`, `onError?`, `throwErrors?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `AbstractConnector` |
| `onError?` | (`error`: `Error`) => `void` |
| `throwErrors?` | `boolean` |

#### Returns

`Promise`<`void`\>

___

### connect

▸ **connect**(`connectorName`, `params?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectorName` | [`Connectors`](../enums/Connectors.md) |
| `params?` | [`IConnectParams`](IConnectParams.md) |

#### Returns

`Promise`<`void`\>

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`
