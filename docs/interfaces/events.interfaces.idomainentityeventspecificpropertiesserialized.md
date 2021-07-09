[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityEventSpecificPropertiesSerialized

# Interface: IDomainEntityEventSpecificPropertiesSerialized<EntityId, EntityType, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityEventSpecificPropertiesSerialized

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `EventType` | extends `EDomainEntityEventType` |

## Hierarchy

- **`IDomainEntityEventSpecificPropertiesSerialized`**

  ↳ [`IDomainEntityEventPropertiesSerialized`](events.interfaces.idomainentityeventpropertiesserialized.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entityid)
- [entityType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#entitytype)
- [eventType](events.interfaces.idomainentityeventspecificpropertiesserialized.md#eventtype)

## Properties

### entityId

• `Readonly` **entityId**: `ReturnType`<`EntityId`[``"serialize"``]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:69

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:70

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:71
