[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootClassFabric

# Interface: IAggregateRootClassFabric<Id, Type, E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootClassFabric

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Callable

### IAggregateRootClassFabric

▸ **IAggregateRootClassFabric**(`parameters`): `Constructor`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IAggregateRootClassFabricParameters`](aggregates.interfaces.iaggregaterootclassfabricparameters.md)<`Id`, `Type`, `E`\> |

#### Returns

`Constructor`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseAggregateRootParameters`](aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:20
