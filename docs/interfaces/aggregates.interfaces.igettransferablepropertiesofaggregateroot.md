[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IGetTransferablePropertiesOfAggregateRoot

# Interface: IGetTransferablePropertiesOfAggregateRoot<Id, Type\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IGetTransferablePropertiesOfAggregateRoot

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Callable

### IGetTransferablePropertiesOfAggregateRoot

▸ **IGetTransferablePropertiesOfAggregateRoot**<`T`\>(`aggregateRoot`): `TPickTransferableProperties`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregateRoot` | `T` |

#### Returns

`TPickTransferableProperties`<`T`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:9
