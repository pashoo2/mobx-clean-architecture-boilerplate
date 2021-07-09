[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [observableAggregates](observableaggregates.md) / fabrics

# Namespace: fabrics

[observableAggregates](observableaggregates.md).fabrics

## Table of contents

### Functions

- [observableAggregateClassFabric](observableaggregates.fabrics.md#observableaggregateclassfabric)

## Functions

### observableAggregateClassFabric

▸ **observableAggregateClassFabric**<`Id`, `Type`, `E`\>(`parameters`): `Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`aggregate\_\_\_\_${string}\` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\>[`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IAggregateRootClassFabricParameters`](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`\> |

#### Returns

`Constructor`<[`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Defined in

[src/aggregates/fabrics/observableAggregateClassFabric/observableAggregateClassFabric.ts:13](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/aggregates/fabrics/observableAggregateClassFabric/observableAggregateClassFabric.ts#L13)
