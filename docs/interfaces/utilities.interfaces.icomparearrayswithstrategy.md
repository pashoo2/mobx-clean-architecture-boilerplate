[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareArraysWithStrategy

# Interface: ICompareArraysWithStrategy<A1, A2, S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareArraysWithStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `A1` | extends `unknown`[] |
| `A2` | extends `unknown`[] |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Callable

### ICompareArraysWithStrategy

▸ **ICompareArraysWithStrategy**(`objectFirst`, `objectSecond`, `compareValuesStrategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `A1` |
| `objectSecond` | `A2` |
| `compareValuesStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/objectsComparison.d.ts:8
