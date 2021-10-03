---
id: "modules"
title: "@kiroboio/web3-react-safe-transfer"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [yup](modules/yup.md)

## Classes

- [SecureStorage](classes/SecureStorage.md)

## Interfaces

- [ISecureStorage](interfaces/ISecureStorage.md)

## Type aliases

### SetSecureStorageParams

Ƭ **SetSecureStorageParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encodingType` | ``"aes"`` |
| `encryptionNamespace` | `string` |
| `encryptionSecret` | `string` |

## Functions

### currencyValueToWei

▸ `Const` **currencyValueToWei**(`value`, `decimals?`): `string`

convert crypto `value`(ethereum coin or token) to wei depends on `decimals` amount (default 18)
```
const { currency } = useAccount()
currencyValueToWei(value, currency.decimals)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `decimals?` | `number` |

#### Returns

`string`

___

### formatCurrencyValue

▸ `Const` **formatCurrencyValue**(`value`, `format?`): `string`

format currency value to readable format
```
formatCurrencyValue(value, '0,0.[00000]' )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `format?` | `string` |

#### Returns

`string`

___

### wait

▸ `Const` **wait**(`timeToWait`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeToWait` | `number` |

#### Returns

`Promise`<`unknown`\>

___

### weiToCurrencyValue

▸ `Const` **weiToCurrencyValue**(`value`, `decimals?`): `string`

wei `value` to crypto (ethereum coin or token) depends on `decimals` amount (default 18)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `decimals?` | `number` |

#### Returns

`string`
