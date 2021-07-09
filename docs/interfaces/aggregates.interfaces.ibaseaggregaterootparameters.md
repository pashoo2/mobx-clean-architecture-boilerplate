[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IBaseAggregateRootParameters

# Interface: IBaseAggregateRootParameters<Id\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IBaseAggregateRootParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

## Hierarchy

- [`IBaseEntityParameters`](entities.interfaces.ibaseentityparameters.md)<`Id`\>

  ↳ **`IBaseAggregateRootParameters`**

## Table of contents

### Properties

- [id](aggregates.interfaces.ibaseaggregaterootparameters.md#id)
- [isDeleted](aggregates.interfaces.ibaseaggregaterootparameters.md#isdeleted)

## Properties

### id

• **id**: `Id`

#### Inherited from

[IBaseEntityParameters](entities.interfaces.ibaseentityparameters.md).[id](entities.interfaces.ibaseentityparameters.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/baseEntity.d.ts:8

___

### isDeleted

• **isDeleted**: `boolean`

#### Overrides

[IBaseEntityParameters](entities.interfaces.ibaseentityparameters.md).[isDeleted](entities.interfaces.ibaseentityparameters.md#isdeleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces/aggregateRoot.d.ts:8
