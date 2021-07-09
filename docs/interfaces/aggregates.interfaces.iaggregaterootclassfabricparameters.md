[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootClassFabricParameters

# Interface: IAggregateRootClassFabricParameters<Id, Type, E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootClassFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Table of contents

### Properties

- [compareEntitiesIdentities](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiesidentities)
- [compareEntitiesTypes](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiestypes)
- [getTransferableProps](aggregates.interfaces.iaggregaterootclassfabricparameters.md#gettransferableprops)
- [services](aggregates.interfaces.iaggregaterootclassfabricparameters.md#services)
- [type](aggregates.interfaces.iaggregaterootclassfabricparameters.md#type)
- [validateInstance](aggregates.interfaces.iaggregaterootclassfabricparameters.md#validateinstance)

## Properties

### compareEntitiesIdentities

• **compareEntitiesIdentities**: [`ICompareEntitiesIdentities`](entities.utilities.interfaces.icompareentitiesidentities.md)<`Id`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:18

___

### compareEntitiesTypes

• **compareEntitiesTypes**: [`ICompareEntitiesTypes`](entities.utilities.interfaces.icompareentitiestypes.md)<`Type`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:17

___

### getTransferableProps

• **getTransferableProps**: [`IGetTransferablePropertiesOfAggregateRoot`](aggregates.interfaces.igettransferablepropertiesofaggregateroot.md)<`Id`, `Type`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:16

___

### services

• **services**: [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:14

___

### type

• **type**: `Type`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:13

___

### validateInstance

• **validateInstance**: [`IValidateAggregate`](aggregates.interfaces.ivalidateaggregate.md)<`Id`, `Type`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRootFabric.d.ts:15
