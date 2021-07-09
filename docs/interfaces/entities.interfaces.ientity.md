[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntity

# Interface: IEntity<Id, Type\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Hierarchy

- **`IEntity`**

  ↳ [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)

  ↳ [`IEntityImplementation`](entities.interfaces.ientityimplementation.md)

## Table of contents

### Properties

- [id](entities.interfaces.ientity.md#id)
- [isDeleted](entities.interfaces.ientity.md#isdeleted)
- [type](entities.interfaces.ientity.md#type)

## Properties

### id

• `Readonly` **id**: `Id`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entity.d.ts:9

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entity.d.ts:11

___

### type

• `Readonly` **type**: `Type`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entity.d.ts:10
