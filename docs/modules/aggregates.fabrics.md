[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / fabrics

# Namespace: fabrics

[aggregates](aggregates.md).fabrics

## Table of contents

### Functions

- [aggregateClassFabric](aggregates.fabrics.md#aggregateclassfabric)
- [runTestsForAggregateClassFabric](aggregates.fabrics.md#runtestsforaggregateclassfabric)

## Functions

### aggregateClassFabric

▸ **aggregateClassFabric**<`Id`, `Type`, `E`\>(`__namedParameters`): `Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`aggregate\_\_\_\_${string}\` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\>[`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IAggregateRootClassFabricParameters`](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`\> |

#### Returns

`Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.d.ts:5

___

### runTestsForAggregateClassFabric

▸ **runTestsForAggregateClassFabric**(`aggregateClassFabric`, `testName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateClassFabric` | [`IAggregateRootClassFabric`](../interfaces/aggregates.interfaces.iaggregaterootclassfabric.md)<[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject), [`TAggregateTypeMain`](aggregates.interfaces.md#taggregatetypemain), `TAggregateTestClassEventsList`\> |
| `testName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest.d.ts:4
