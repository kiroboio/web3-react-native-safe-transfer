---
id: "InAppWalletConnector"
title: "Class: InAppWalletConnector"
sidebar_label: "InAppWalletConnector"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `AbstractConnector`

  ↳ **`InAppWalletConnector`**

## Implements

- [`IInAppWalletConnector`](../interfaces/IInAppWalletConnector.md)

## Constructors

### constructor

• **new InAppWalletConnector**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`NetworkConnectorArguments`](../interfaces/NetworkConnectorArguments.md) & { `path?`: `string`  } |

#### Overrides

AbstractConnector.constructor

## Properties

### addresses

• **addresses**: `string`[] = `[]`

___

### currentChainId

• `Private` **currentChainId**: `number`

___

### hdNode

• `Private` **hdNode**: `HDNode`

___

### name

• **name**: `Connectors`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[name](../interfaces/IInAppWalletConnector.md#name)

___

### paths

• **paths**: `Object`

#### Index signature

▪ [key: `string`]: { [key: number]: `string`;  }

___

### providers

• `Private` `Readonly` **providers**: `Object`

#### Index signature

▪ [chainId: `number`]: `string`

___

### secureStorage

• `Private` **secureStorage**: `SecureLS`

___

### supportedChainIds

• `Optional` `Readonly` **supportedChainIds**: `number`[]

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[supportedChainIds](../interfaces/IInAppWalletConnector.md#supportedchainids)

#### Inherited from

AbstractConnector.supportedChainIds

___

### web3

• **web3**: `default`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[web3](../interfaces/IInAppWalletConnector.md#web3)

___

### DEFAULT\_PATH

▪ `Static` **DEFAULT\_PATH**: `string` = `"m/44'/60'/0'/0/0"`

___

### account

▪ `Static` `Optional` **account**: `string`

___

### activeAccount

▪ `Static` **activeAccount**: `undefined` \| `string`

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](InAppWalletConnector.md#capturerejectionsymbol)

#### Inherited from

AbstractConnector.captureRejectionSymbol

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

AbstractConnector.captureRejections

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

AbstractConnector.defaultMaxListeners

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](InAppWalletConnector.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

AbstractConnector.errorMonitor

___

### mnemonic

▪ `Static` `Private` **mnemonic**: `undefined` \| `string`

## Methods

### activate

▸ **activate**(): `Promise`<`Object`\>

#### Returns

`Promise`<`Object`\>

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[activate](../interfaces/IInAppWalletConnector.md#activate)

#### Overrides

AbstractConnector.activate

___

### addListener

▸ **addListener**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[addListener](../interfaces/IInAppWalletConnector.md#addlistener)

#### Inherited from

AbstractConnector.addListener

___

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

___

### changeChainId

▸ **changeChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`void`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[changeChainId](../interfaces/IInAppWalletConnector.md#changechainid)

___

### deactivate

▸ **deactivate**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[deactivate](../interfaces/IInAppWalletConnector.md#deactivate)

#### Overrides

AbstractConnector.deactivate

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[emit](../interfaces/IInAppWalletConnector.md#emit)

#### Inherited from

AbstractConnector.emit

___

### emitDeactivate

▸ `Protected` **emitDeactivate**(): `void`

#### Returns

`void`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[emitDeactivate](../interfaces/IInAppWalletConnector.md#emitdeactivate)

#### Inherited from

AbstractConnector.emitDeactivate

___

### emitError

▸ `Protected` **emitError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[emitError](../interfaces/IInAppWalletConnector.md#emiterror)

#### Inherited from

AbstractConnector.emitError

___

### emitUpdate

▸ `Protected` **emitUpdate**(`update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | `ConnectorUpdate`<`string` \| `number`\> |

#### Returns

`void`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[emitUpdate](../interfaces/IInAppWalletConnector.md#emitupdate)

#### Inherited from

AbstractConnector.emitUpdate

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[eventNames](../interfaces/IInAppWalletConnector.md#eventnames)

#### Inherited from

AbstractConnector.eventNames

___

### getAccount

▸ **getAccount**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[getAccount](../interfaces/IInAppWalletConnector.md#getaccount)

#### Overrides

AbstractConnector.getAccount

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[getChainId](../interfaces/IInAppWalletConnector.md#getchainid)

#### Overrides

AbstractConnector.getChainId

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[getMaxListeners](../interfaces/IInAppWalletConnector.md#getmaxlisteners)

#### Inherited from

AbstractConnector.getMaxListeners

___

### getPaths

▸ `Private` **getPaths**(): `any`

#### Returns

`any`

___

### getPrivateKeys

▸ **getPrivateKeys**(): `string`[]

#### Returns

`string`[]

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[getProvider](../interfaces/IInAppWalletConnector.md#getprovider)

#### Overrides

AbstractConnector.getProvider

___

### handleAccountChanged

▸ **handleAccountChanged**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`void`

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[listenerCount](../interfaces/IInAppWalletConnector.md#listenercount)

#### Inherited from

AbstractConnector.listenerCount

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[listeners](../interfaces/IInAppWalletConnector.md#listeners)

#### Inherited from

AbstractConnector.listeners

___

### off

▸ **off**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[off](../interfaces/IInAppWalletConnector.md#off)

#### Inherited from

AbstractConnector.off

___

### on

▸ **on**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[on](../interfaces/IInAppWalletConnector.md#on)

#### Inherited from

AbstractConnector.on

___

### once

▸ **once**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[once](../interfaces/IInAppWalletConnector.md#once)

#### Inherited from

AbstractConnector.once

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[prependListener](../interfaces/IInAppWalletConnector.md#prependlistener)

#### Inherited from

AbstractConnector.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[prependOnceListener](../interfaces/IInAppWalletConnector.md#prependoncelistener)

#### Inherited from

AbstractConnector.prependOnceListener

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[rawListeners](../interfaces/IInAppWalletConnector.md#rawlisteners)

#### Inherited from

AbstractConnector.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[removeAllListeners](../interfaces/IInAppWalletConnector.md#removealllisteners)

#### Inherited from

AbstractConnector.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[removeListener](../interfaces/IInAppWalletConnector.md#removelistener)

#### Inherited from

AbstractConnector.removeListener

___

### removeWalletAddress

▸ **removeWalletAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`void`

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`InAppWalletConnector`](InAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`InAppWalletConnector`](InAppWalletConnector.md)

#### Implementation of

[IInAppWalletConnector](../interfaces/IInAppWalletConnector.md).[setMaxListeners](../interfaces/IInAppWalletConnector.md#setmaxlisteners)

#### Inherited from

AbstractConnector.setMaxListeners

___

### clearMnemonic

▸ `Static` **clearMnemonic**(): `void`

#### Returns

`void`

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

AbstractConnector.listenerCount

___

### on

▸ `Static` **on**(`emitter`, `event`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

AbstractConnector.on

___

### once

▸ `Static` **once**(`emitter`, `event`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `event` | `string` \| `symbol` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

AbstractConnector.once

▸ `Static` **once**(`emitter`, `event`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `event` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

AbstractConnector.once

___

### setActiveAccount

▸ `Static` **setActiveAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `undefined` \| `string` |

#### Returns

`void`

___

### setMnemonic

▸ `Static` **setMnemonic**(`mnemonic`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`void`
