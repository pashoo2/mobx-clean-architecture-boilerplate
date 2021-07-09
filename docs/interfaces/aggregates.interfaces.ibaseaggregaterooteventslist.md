[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IBaseAggregateRootEventsList

# Interface: IBaseAggregateRootEventsList<Id, Type\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IBaseAggregateRootEventsList

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Hierarchy

- [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\>

  ↳ **`IBaseAggregateRootEventsList`**

## Table of contents

### Properties

- [DOMAIN\_ENTITY\_CONSTRUCTED](aggregates.interfaces.ibaseaggregaterooteventslist.md#domain_entity_constructed)
- [DOMAIN\_ENTITY\_DELETED](aggregates.interfaces.ibaseaggregaterooteventslist.md#domain_entity_deleted)

## Properties

### DOMAIN\_ENTITY\_CONSTRUCTED

• **DOMAIN\_ENTITY\_CONSTRUCTED**: [`BaseDomainEntityCreateEvent`](../classes/events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>

#### Inherited from

[IBaseEntityEventsList](entities.interfaces.ibaseentityeventslist.md).[DOMAIN_ENTITY_CONSTRUCTED](entities.interfaces.ibaseentityeventslist.md#domain_entity_constructed)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/baseEntity.d.ts:13

___

### DOMAIN\_ENTITY\_DELETED

• **DOMAIN\_ENTITY\_DELETED**: [`BaseDomainEntityDeleteEvent`](../classes/events.classes.basedomainentitydeleteevent.md)<`Id`, `string`\>

#### Inherited from

[IBaseEntityEventsList](entities.interfaces.ibaseentityeventslist.md).[DOMAIN_ENTITY_DELETED](entities.interfaces.ibaseentityeventslist.md#domain_entity_deleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/baseEntity.d.ts:12
