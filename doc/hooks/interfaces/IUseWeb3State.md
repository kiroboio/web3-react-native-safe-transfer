[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IUseWeb3State

# Interface: IUseWeb3State

## Hierarchy

- `ReturnType`<typeof [`useWeb3`](../modules.md#useweb3)\>

  ↳ **`IUseWeb3State`**

## Table of contents

### Properties

- [active](IUseWeb3State.md#active)
- [address](IUseWeb3State.md#address)
- [chainId](IUseWeb3State.md#chainid)
- [connector](IUseWeb3State.md#connector)
- [error](IUseWeb3State.md#error)
- [library](IUseWeb3State.md#library)

### Methods

- [activate](IUseWeb3State.md#activate)
- [connect](IUseWeb3State.md#connect)
- [disconnect](IUseWeb3State.md#disconnect)

## Properties

### active

• **active**: `boolean`

#### Inherited from

ReturnType.active

#### Defined in

useWeb3.ts:49

___

### address

• `Optional` **address**: ``null`` \| `string`

#### Inherited from

ReturnType.address

#### Defined in

useWeb3.ts:48

___

### chainId

• `Optional` **chainId**: `number`

#### Inherited from

ReturnType.chainId

#### Defined in

useWeb3.ts:47

___

### connector

• `Optional` **connector**: `ConnectorType`

#### Inherited from

ReturnType.connector

#### Defined in

useWeb3.ts:45

___

### error

• `Optional` **error**: `Error`

#### Inherited from

ReturnType.error

#### Defined in

useWeb3.ts:50

___

### library

• **library**: `default`

#### Inherited from

ReturnType.library

#### Defined in

useWeb3.ts:46

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

#### Inherited from

ReturnType.activate

#### Defined in

useWeb3.ts:51

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

#### Inherited from

ReturnType.connect

#### Defined in

useWeb3.ts:43

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

ReturnType.disconnect

#### Defined in

useWeb3.ts:44
