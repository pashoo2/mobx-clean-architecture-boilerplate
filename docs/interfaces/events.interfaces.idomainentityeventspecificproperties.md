[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEventSpecificProperties

# Interface: IDomainEntityEventSpecificProperties<EntityId, EntityType, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEventSpecificProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `EventType` | extends `EDomainEntityEventType` |

## Hierarchy

- **`IDomainEntityEventSpecificProperties`**

  ↳ [`IDomainEntityOrAggregateEvent`](events.interfaces.idomainentityoraggregateevent.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityeventspecificproperties.md#entityid)
- [entityType](events.interfaces.idomainentityeventspecificproperties.md#entitytype)
- [eventType](events.interfaces.idomainentityeventspecificproperties.md#eventtype)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:64

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:65

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:66
