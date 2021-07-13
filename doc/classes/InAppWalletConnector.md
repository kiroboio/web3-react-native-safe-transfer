[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / InAppWalletConnector

# Class: InAppWalletConnector

## Hierarchy

- `AbstractConnector`

  ↳ **`InAppWalletConnector`**

## Implements

- `IInAppWalletConnector`

## Table of contents

### Constructors

- [constructor](InAppWalletConnector.md#constructor)

### Properties

- [addresses](InAppWalletConnector.md#addresses)
- [currentChainId](InAppWalletConnector.md#currentchainid)
- [hdNode](InAppWalletConnector.md#hdnode)
- [name](InAppWalletConnector.md#name)
- [paths](InAppWalletConnector.md#paths)
- [providers](InAppWalletConnector.md#providers)
- [secureStorage](InAppWalletConnector.md#securestorage)
- [supportedChainIds](InAppWalletConnector.md#supportedchainids)
- [web3](InAppWalletConnector.md#web3)
- [DEFAULT\_PATH](InAppWalletConnector.md#default_path)
- [account](InAppWalletConnector.md#account)
- [activeAccount](InAppWalletConnector.md#activeaccount)
- [captureRejectionSymbol](InAppWalletConnector.md#capturerejectionsymbol)
- [captureRejections](InAppWalletConnector.md#capturerejections)
- [defaultMaxListeners](InAppWalletConnector.md#defaultmaxlisteners)
- [errorMonitor](InAppWalletConnector.md#errormonitor)
- [mnemonic](InAppWalletConnector.md#mnemonic)

### Methods

- [activate](InAppWalletConnector.md#activate)
- [addListener](InAppWalletConnector.md#addlistener)
- [addWalletAddress](InAppWalletConnector.md#addwalletaddress)
- [changeChainId](InAppWalletConnector.md#changechainid)
- [deactivate](InAppWalletConnector.md#deactivate)
- [emit](InAppWalletConnector.md#emit)
- [emitDeactivate](InAppWalletConnector.md#emitdeactivate)
- [emitError](InAppWalletConnector.md#emiterror)
- [emitUpdate](InAppWalletConnector.md#emitupdate)
- [eventNames](InAppWalletConnector.md#eventnames)
- [getAccount](InAppWalletConnector.md#getaccount)
- [getChainId](InAppWalletConnector.md#getchainid)
- [getMaxListeners](InAppWalletConnector.md#getmaxlisteners)
- [getPaths](InAppWalletConnector.md#getpaths)
- [getPrivateKeys](InAppWalletConnector.md#getprivatekeys)
- [getProvider](InAppWalletConnector.md#getprovider)
- [handleAccountChanged](InAppWalletConnector.md#handleaccountchanged)
- [listenerCount](InAppWalletConnector.md#listenercount)
- [listeners](InAppWalletConnector.md#listeners)
- [off](InAppWalletConnector.md#off)
- [on](InAppWalletConnector.md#on)
- [once](InAppWalletConnector.md#once)
- [prependListener](InAppWalletConnector.md#prependlistener)
- [prependOnceListener](InAppWalletConnector.md#prependoncelistener)
- [rawListeners](InAppWalletConnector.md#rawlisteners)
- [removeAllListeners](InAppWalletConnector.md#removealllisteners)
- [removeListener](InAppWalletConnector.md#removelistener)
- [removeWalletAddress](InAppWalletConnector.md#removewalletaddress)
- [setMaxListeners](InAppWalletConnector.md#setmaxlisteners)
- [clearMnemonic](InAppWalletConnector.md#clearmnemonic)
- [listenerCount](InAppWalletConnector.md#listenercount)
- [on](InAppWalletConnector.md#on)
- [once](InAppWalletConnector.md#once)
- [setActiveAccount](InAppWalletConnector.md#setactiveaccount)
- [setMnemonic](InAppWalletConnector.md#setmnemonic)

## Constructors

### constructor

• **new InAppWalletConnector**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `NetworkConnectorArguments` & { `path?`: `string`  } |

#### Overrides

AbstractConnector.constructor

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:82

## Properties

### addresses

• **addresses**: `string`[] = `[]`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:46

___

### currentChainId

• `Private` **currentChainId**: `number`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:52

___

### hdNode

• `Private` **hdNode**: `HDNode`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:61

___

### name

• **name**: [`Connectors`](../enums/Connectors.md)

#### Implementation of

IInAppWalletConnector.name

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:48

___

### paths

• **paths**: `Object`

#### Index signature

▪ [key: `string`]: { [key: number]: `string`;  }

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:41

___

### providers

• `Private` `Readonly` **providers**: `Object`

#### Index signature

▪ [chainId: `number`]: `string`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:51

___

### secureStorage

• `Private` **secureStorage**: `SecureLS`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:28

___

### supportedChainIds

• `Optional` `Readonly` **supportedChainIds**: `number`[]

#### Implementation of

IInAppWalletConnector.supportedChainIds

#### Inherited from

AbstractConnector.supportedChainIds

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:5

___

### web3

• **web3**: `default`

#### Implementation of

IInAppWalletConnector.web3

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:49

___

### DEFAULT\_PATH

▪ `Static` **DEFAULT\_PATH**: `string` = `"m/44'/60'/0'/0/0"`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:29

___

### account

▪ `Static` `Optional` **account**: `string`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:179

___

### activeAccount

▪ `Static` **activeAccount**: `undefined` \| `string`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:31

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](InAppWalletConnector.md#capturerejectionsymbol)

#### Inherited from

AbstractConnector.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:38

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

AbstractConnector.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:44

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

AbstractConnector.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:45

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

#### Defined in

node_modules/@types/node/events.d.ts:37

___

### mnemonic

▪ `Static` `Private` **mnemonic**: `undefined` \| `string`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:53

## Methods

### activate

▸ **activate**(): `Promise`<`Object`\>

#### Returns

`Promise`<`Object`\>

#### Implementation of

IInAppWalletConnector.activate

#### Overrides

AbstractConnector.activate

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:181

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

IInAppWalletConnector.addListener

#### Inherited from

AbstractConnector.addListener

#### Defined in

node_modules/@types/node/events.d.ts:57

___

### addWalletAddress

▸ **addWalletAddress**(): `void`

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:119

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

IInAppWalletConnector.changeChainId

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:209

___

### deactivate

▸ **deactivate**(): `undefined`

#### Returns

`undefined`

#### Implementation of

IInAppWalletConnector.deactivate

#### Overrides

AbstractConnector.deactivate

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:205

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

IInAppWalletConnector.emit

#### Inherited from

AbstractConnector.emit

#### Defined in

node_modules/@types/node/events.d.ts:67

___

### emitDeactivate

▸ `Protected` **emitDeactivate**(): `void`

#### Returns

`void`

#### Implementation of

IInAppWalletConnector.emitDeactivate

#### Inherited from

AbstractConnector.emitDeactivate

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:14

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

IInAppWalletConnector.emitError

#### Inherited from

AbstractConnector.emitError

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:13

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

IInAppWalletConnector.emitUpdate

#### Inherited from

AbstractConnector.emitUpdate

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:12

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

IInAppWalletConnector.eventNames

#### Inherited from

AbstractConnector.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:72

___

### getAccount

▸ **getAccount**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

IInAppWalletConnector.getAccount

#### Overrides

AbstractConnector.getAccount

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:201

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

IInAppWalletConnector.getChainId

#### Overrides

AbstractConnector.getChainId

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:197

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Implementation of

IInAppWalletConnector.getMaxListeners

#### Inherited from

AbstractConnector.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:64

___

### getPaths

▸ `Private` **getPaths**(): `any`

#### Returns

`any`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:33

___

### getPrivateKeys

▸ **getPrivateKeys**(): `string`[]

#### Returns

`string`[]

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:63

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

IInAppWalletConnector.getProvider

#### Overrides

AbstractConnector.getProvider

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:193

___

### handleAccountChanged

▸ **handleAccountChanged**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:114

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

IInAppWalletConnector.listenerCount

#### Inherited from

AbstractConnector.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:68

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

IInAppWalletConnector.listeners

#### Inherited from

AbstractConnector.listeners

#### Defined in

node_modules/@types/node/events.d.ts:65

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

IInAppWalletConnector.off

#### Inherited from

AbstractConnector.off

#### Defined in

node_modules/@types/node/events.d.ts:61

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

IInAppWalletConnector.on

#### Inherited from

AbstractConnector.on

#### Defined in

node_modules/@types/node/events.d.ts:58

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

IInAppWalletConnector.once

#### Inherited from

AbstractConnector.once

#### Defined in

node_modules/@types/node/events.d.ts:59

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

IInAppWalletConnector.prependListener

#### Inherited from

AbstractConnector.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:70

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

IInAppWalletConnector.prependOnceListener

#### Inherited from

AbstractConnector.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:71

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

IInAppWalletConnector.rawListeners

#### Inherited from

AbstractConnector.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:66

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

IInAppWalletConnector.removeAllListeners

#### Inherited from

AbstractConnector.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:62

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

IInAppWalletConnector.removeListener

#### Inherited from

AbstractConnector.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:60

___

### removeWalletAddress

▸ **removeWalletAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:165

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

IInAppWalletConnector.setMaxListeners

#### Inherited from

AbstractConnector.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:63

___

### clearMnemonic

▸ `Static` **clearMnemonic**(): `void`

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:55

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

#### Defined in

node_modules/@types/node/events.d.ts:26

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

#### Defined in

node_modules/@types/node/events.d.ts:23

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

#### Defined in

node_modules/@types/node/events.d.ts:21

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

#### Defined in

node_modules/@types/node/events.d.ts:22

___

### setActiveAccount

▸ `Static` **setActiveAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:43

___

### setMnemonic

▸ `Static` **setMnemonic**(`mnemonic`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`void`

#### Defined in

dev/customConnectors/InAppWalletConnector.ts:58
