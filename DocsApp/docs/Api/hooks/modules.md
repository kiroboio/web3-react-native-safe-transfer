---
id: "modules"
title: "@kiroboio/web3-react-native-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [Connectors](enums/Connectors)

## Interfaces

- [IConnectParams](interfaces/IConnectParams)
- [IWeb3ReactContext](interfaces/IWeb3ReactContext)

## Functions

### useCurrentMutableState

▸ `Const` **useCurrentMutableState**<`T`\>(`state`): `MutableRefObject`<`T`\>

Use this hook to mutate the .current value instead of creating new

Two use cases

1) For not adding state to hook deps
2) For getting updated(mutated) state version in async operations

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |

#### Returns

`MutableRefObject`<`T`\>

___

### useSwapRates

▸ `Const` **useSwapRates**(): `void`

#### Returns

`void`

___

### useWeb3

▸ `Const` **useWeb3**(`__namedParameters`): [`IWeb3ReactContext`](interfaces/IWeb3ReactContext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.infuraKey` | `string` |

#### Returns

[`IWeb3ReactContext`](interfaces/IWeb3ReactContext)
