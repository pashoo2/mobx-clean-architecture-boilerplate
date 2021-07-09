[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEntityOrAggregateEvent

# Interface: IDomainEntityOrAggregateEvent<EntityId, EntityType, N, P, EventType\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEntityOrAggregateEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |
| `EventType` | extends `EDomainEntityEventType``EDomainEntityEventType` |

## Hierarchy

- [`IDomainEvent`](events.interfaces.idomainevent.md)<`N`, `P`\>

- [`IDomainEntityEventSpecificProperties`](events.interfaces.idomainentityeventspecificproperties.md)<`EntityId`, `EntityType`, `EventType`\>

  ↳ **`IDomainEntityOrAggregateEvent`**

  ↳↳ [`IDomainEntityEvent`](events.interfaces.idomainentityevent.md)

## Table of contents

### Properties

- [entityId](events.interfaces.idomainentityoraggregateevent.md#entityid)
- [entityType](events.interfaces.idomainentityoraggregateevent.md#entitytype)
- [eventType](events.interfaces.idomainentityoraggregateevent.md#eventtype)
- [id](events.interfaces.idomainentityoraggregateevent.md#id)
- [metaVersion](events.interfaces.idomainentityoraggregateevent.md#metaversion)
- [name](events.interfaces.idomainentityoraggregateevent.md#name)
- [payload](events.interfaces.idomainentityoraggregateevent.md#payload)

### Methods

- [serialize](events.interfaces.idomainentityoraggregateevent.md#serialize)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[entityId](events.interfaces.idomainentityeventspecificproperties.md#entityid)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:64

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[entityType](events.interfaces.idomainentityeventspecificproperties.md#entitytype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:65

___

### eventType

• `Readonly` **eventType**: `EventType`

#### Inherited from

[IDomainEntityEventSpecificProperties](events.interfaces.idomainentityeventspecificproperties.md).[eventType](events.interfaces.idomainentityeventspecificproperties.md#eventtype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:66

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[id](events.interfaces.idomainevent.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:17

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[metaVersion](events.interfaces.idomainevent.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:31

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[name](events.interfaces.idomainevent.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:24

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[payload](events.interfaces.idomainevent.md#payload)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:40

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEvent](events.interfaces.idomainevent.md).[serialize](events.interfaces.idomainevent.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
