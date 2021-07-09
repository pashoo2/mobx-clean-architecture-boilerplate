[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / comparison

# Namespace: comparison

[utilities](utilities.md).[utilities](utilities.utilities-1.md).comparison

## Table of contents

### Variables

- [deepComparisonStrategy](utilities.utilities-1.comparison.md#deepcomparisonstrategy)
- [shallowComparisonStrategy](utilities.utilities-1.comparison.md#shallowcomparisonstrategy)

### Functions

- [areDatesEqual](utilities.utilities-1.comparison.md#aredatesequal)
- [areSimpleValuesEqual](utilities.utilities-1.comparison.md#aresimplevaluesequal)
- [compareObjectsDeepByStrategy](utilities.utilities-1.comparison.md#compareobjectsdeepbystrategy)
- [compareObjectsDeepWithCompareValuesFunction](utilities.utilities-1.comparison.md#compareobjectsdeepwithcomparevaluesfunction)
- [compareObjectsShallowByStrategy](utilities.utilities-1.comparison.md#compareobjectsshallowbystrategy)
- [compareValuesByStrategy](utilities.utilities-1.comparison.md#comparevaluesbystrategy)
- [compareValuesFunctionFabric](utilities.utilities-1.comparison.md#comparevaluesfunctionfabric)

## Variables

### deepComparisonStrategy

• `Const` **deepComparisonStrategy**: [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`any`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/valuesComparisonStrategies.d.ts:3

___

### shallowComparisonStrategy

• `Const` **shallowComparisonStrategy**: [`ICompareValuesShallowStrategy`](../interfaces/utilities.interfaces.icomparevaluesshallowstrategy.md)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/valuesComparisonStrategies.d.ts:2

## Functions

### areDatesEqual

▸ **areDatesEqual**(`d1`, `d2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `Date` |
| `d2` | `Date` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/objectTypeValuesComparison.d.ts:1

___

### areSimpleValuesEqual

▸ **areSimpleValuesEqual**<`V1`, `V2`\>(`value1`, `value2`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | extends `TSimpleType` |
| `V2` | extends `TSimpleType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value1` | `V1` |
| `value2` | `V2` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/simpleTypeValuesComparison.d.ts:2

___

### compareObjectsDeepByStrategy

▸ **compareObjectsDeepByStrategy**<`O1`, `O2`, `S`\>(`objectFirst`, `objectSecond`, `comparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `comparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/objectComparison.d.ts:5

___

### compareObjectsDeepWithCompareValuesFunction

▸ **compareObjectsDeepWithCompareValuesFunction**<`O1`, `O2`\>(`objectFirst`, `objectSecond`, `compareValues`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `compareValues` | [`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/objectComparison.d.ts:3

___

### compareObjectsShallowByStrategy

▸ **compareObjectsShallowByStrategy**<`O1`, `O2`, `S`\>(`objectFirst`, `objectSecond`, `shallowComparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O1` | extends `Object` |
| `O2` | extends `Object` |
| `S` | extends [`ICompareValuesShallowStrategy`](../interfaces/utilities.interfaces.icomparevaluesshallowstrategy.md)<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectFirst` | `O1` |
| `objectSecond` | `O2` |
| `shallowComparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/objectComparison.d.ts:4

___

### compareValuesByStrategy

▸ **compareValuesByStrategy**<`V1`, `V2`, `S`\>(`firstValue`, `secondValue`, `comparisonStrategy`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | `V1` |
| `V2` | `V2` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstValue` | `V1` |
| `secondValue` | `V2` |
| `comparisonStrategy` | `S` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/compareByStrategy.d.ts:2

___

### compareValuesFunctionFabric

▸ **compareValuesFunctionFabric**<`V1`, `V2`, `S`\>(`comparisonStrategy`): [`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`V1`, `V2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V1` | `V1` |
| `V2` | `V2` |
| `S` | extends [`ICompareValuesStrategy`](../interfaces/utilities.interfaces.icomparevaluesstrategy.md)<`S`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparisonStrategy` | `S` |

#### Returns

[`ICompareValues`](../interfaces/utilities.interfaces.icomparevalues.md)<`V1`, `V2`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/comparison/compareByStrategy.d.ts:3
