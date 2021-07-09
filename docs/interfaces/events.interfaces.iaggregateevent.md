[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IAggregateEvent

# Interface: IAggregateEvent<EntityId, EntityType, N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IAggregateEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TAggregateTypeMain`](../modules/aggregates.interfaces.md#taggregatetypemain) |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- [`IDomainEntityEvent`](events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `N`, `P`\>

  ↳ **`IAggregateEvent`**

## Table of contents

### Properties

- [entityId](events.interfaces.iaggregateevent.md#entityid)
- [entityType](events.interfaces.iaggregateevent.md#entitytype)
- [eventType](events.interfaces.iaggregateevent.md#eventtype)
- [id](events.interfaces.iaggregateevent.md#id)
- [metaVersion](events.interfaces.iaggregateevent.md#metaversion)
- [name](events.interfaces.iaggregateevent.md#name)
- [payload](events.interfaces.iaggregateevent.md#payload)

### Methods

- [serialize](events.interfaces.iaggregateevent.md#serialize)

## Properties

### entityId

• `Readonly` **entityId**: `EntityId`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[entityId](events.interfaces.idomainentityevent.md#entityid)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:64

___

### entityType

• `Readonly` **entityType**: `EntityType`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[entityType](events.interfaces.idomainentityevent.md#entitytype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:65

___

### eventType

• `Readonly` **eventType**: `ENTITY_EVENT`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[eventType](events.interfaces.idomainentityevent.md#eventtype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:66

___

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[id](events.interfaces.idomainentityevent.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:17

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[metaVersion](events.interfaces.idomainentityevent.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:31

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[name](events.interfaces.idomainentityevent.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:24

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[payload](events.interfaces.idomainentityevent.md#payload)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:40

## Methods

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IDomainEntityEvent](events.interfaces.idomainentityevent.md).[serialize](events.interfaces.idomainentityevent.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
