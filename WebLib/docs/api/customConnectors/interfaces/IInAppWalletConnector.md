---
id: "IInAppWalletConnector"
title: "Interface: IInAppWalletConnector"
sidebar_label: "IInAppWalletConnector"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `AbstractConnector`

  ↳ **`IInAppWalletConnector`**

## Properties

### name

• **name**: `string`

___

### supportedChainIds

• `Optional` `Readonly` **supportedChainIds**: `number`[]

#### Inherited from

AbstractConnector.supportedChainIds

___

### web3

• **web3**: `default`

## Methods

### activate

▸ **activate**(): `Promise`<`Object`\>

#### Returns

`Promise`<`Object`\>

#### Overrides

AbstractConnector.activate

___

### addListener

▸ **addListener**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.addListener

___

### changeChainId

▸ **changeChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`void`

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

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

#### Inherited from

AbstractConnector.emit

___

### emitDeactivate

▸ `Protected` **emitDeactivate**(): `void`

#### Returns

`void`

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

#### Inherited from

AbstractConnector.emitUpdate

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

AbstractConnector.eventNames

___

### getAccount

▸ **getAccount**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Overrides

AbstractConnector.getAccount

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Overrides

AbstractConnector.getChainId

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

AbstractConnector.getMaxListeners

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

AbstractConnector.getProvider

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

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

#### Inherited from

AbstractConnector.listeners

___

### off

▸ **off**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.off

___

### on

▸ **on**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.on

___

### once

▸ **once**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.once

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

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

#### Inherited from

AbstractConnector.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.removeListener

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`IInAppWalletConnector`](IInAppWalletConnector.md)

#### Inherited from

AbstractConnector.setMaxListeners
