[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / ICompareValuesStrategy

# Interface: ICompareValuesStrategy<S\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).ICompareValuesStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ICompareValuesStrategy`](utilities.interfaces.icomparevaluesstrategy.md)<`S`\> |

## Table of contents

### Properties

- [compareArrays](utilities.interfaces.icomparevaluesstrategy.md#comparearrays)
- [compareDates](utilities.interfaces.icomparevaluesstrategy.md#comparedates)
- [compareObjects](utilities.interfaces.icomparevaluesstrategy.md#compareobjects)
- [compareOther](utilities.interfaces.icomparevaluesstrategy.md#compareother)
- [compareSimpleType](utilities.interfaces.icomparevaluesstrategy.md#comparesimpletype)

## Properties

### compareArrays

• **compareArrays**: [`ICompareObjectsWithStrategy`](utilities.interfaces.icompareobjectswithstrategy.md)<`Object`, `Object`, `S`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/valuesComparisonStrategies.d.ts:12

___

### compareDates

• **compareDates**: [`ICompareDateValues`](utilities.interfaces.icomparedatevalues.md)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/valuesComparisonStrategies.d.ts:10

___

### compareObjects

• **compareObjects**: [`ICompareObjectsWithStrategy`](utilities.interfaces.icompareobjectswithstrategy.md)<`Object`, `Object`, `S`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/valuesComparisonStrategies.d.ts:11

___

### compareOther

• **compareOther**: [`ICompareAnyByStrategy`](utilities.interfaces.icompareanybystrategy.md)<`any`, `any`, `S`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/valuesComparisonStrategies.d.ts:13

___

### compareSimpleType

• **compareSimpleType**: [`ICompareSimpleTypeValues`](utilities.interfaces.icomparesimpletypevalues.md)<`TSimpleType`, `TSimpleType`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/interfaces/comparison/valuesComparisonStrategies.d.ts:9
