[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IValidateAggregate

# Interface: IValidateAggregate<Id, Type\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IValidateAggregate

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Callable

### IValidateAggregate

▸ **IValidateAggregate**(`aggregateRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateRoot` | [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:6
