[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / serialization

# Namespace: serialization

[utilities](utilities.md).[utilities](utilities.utilities-1.md).serialization

## Table of contents

### Functions

- [convertTransferableToSerializableAsync](utilities.utilities-1.serialization.md#converttransferabletoserializableasync)

## Functions

### convertTransferableToSerializableAsync

▸ **convertTransferableToSerializableAsync**<`O`, `TO`, `R`\>(`objectTransferable`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |
| `TO` | extends `TPickTransferableProperties`<`O`\> |
| `R` | extends `Record`<keyof `TO`, `TSerializableSimple`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectTransferable` | `TO` |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/serialization/convertTransferableToSerializable/convertTransferableToSerializable.d.ts:3
