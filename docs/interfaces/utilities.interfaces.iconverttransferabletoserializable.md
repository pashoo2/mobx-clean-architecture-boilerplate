[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / IConvertTransferableToSerializable

# Interface: IConvertTransferableToSerializable<O, TO, R\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).IConvertTransferableToSerializable

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |
| `TO` | extends `TPickTransferableProperties`<`O`\> |
| `R` | extends `Record`<keyof `TO`, `TSerializableSimple`\> |

## Hierarchy

- **`IConvertTransferableToSerializable`**

  ↳ [`IConvertTransferableToSerializableAsync`](utilities.interfaces.iconverttransferabletoserializableasync.md)

## Callable

### IConvertTransferableToSerializable

▸ **IConvertTransferableToSerializable**(`objectTransferable`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectTransferable` | `TO` |

#### Returns

`R`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/serialization/convertTransferableToSerializable.d.ts:3
