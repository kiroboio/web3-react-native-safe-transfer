[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / IWeb3ReactContext

# Interface: IWeb3ReactContext<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [active](IWeb3ReactContext.md#active)
- [address](IWeb3ReactContext.md#address)
- [chainId](IWeb3ReactContext.md#chainid)
- [connector](IWeb3ReactContext.md#connector)
- [error](IWeb3ReactContext.md#error)
- [library](IWeb3ReactContext.md#library)

### Methods

- [activate](IWeb3ReactContext.md#activate)
- [connect](IWeb3ReactContext.md#connect)
- [disconnect](IWeb3ReactContext.md#disconnect)

## Properties

### active

• **active**: `boolean`

#### Defined in

useWeb3.ts:49

___

### address

• `Optional` **address**: ``null`` \| `string`

#### Defined in

useWeb3.ts:48

___

### chainId

• `Optional` **chainId**: `number`

#### Defined in

useWeb3.ts:47

___

### connector

• `Optional` **connector**: `ConnectorType`

#### Defined in

useWeb3.ts:45

___

### error

• `Optional` **error**: `Error`

#### Defined in

useWeb3.ts:50

___

### library

• **library**: `T`

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

#### Defined in

useWeb3.ts:43

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

useWeb3.ts:44
