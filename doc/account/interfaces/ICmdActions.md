[@kiroboio/web3-react-safe-transfer](../README.md) / [Exports](../modules.md) / ICmdActions

# Interface: ICmdActions

## Hierarchy

- `Instance`<typeof `CmdActions`\>

  ↳ **`ICmdActions`**

## Callable

### ICmdActions

▸ **ICmdActions**(`self`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `Object` |
| `self.is` | { `done`: `boolean` ; `failed`: `boolean` ; `ready`: `boolean` ; `running`: `boolean` ; `withFailMessage`: `string` ; `withId`: `number`  } & `NonEmptyObject` & { `clear`: () => `void` ; `finished`: (`err?`: { `err`: { `message`: `string`  }  }) => `void` ; `prepared`: () => `void` ; `started`: () => `void`  } & `IStateTreeNode`<`IModelType`<`Object`, `Object`, `_NotCustomized`, `_NotCustomized`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `clearErrors` | () => `void` |
| `done` | () => `void` |
| `failed` | (`__namedParameters`: { `message`: `string`  }) => `void` |
| `start` | () => `void` |

#### Defined in

dev/stores/account.ts:158
