[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventPropertiesSerialized

# Interface: IDomainEventPropertiesSerialized<N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventPropertiesSerialized

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- [`IDomainEventPropertiesWithPayload`](events.interfaces.idomaineventpropertieswithpayload.md)<`N`, `P`\>

  ↳ **`IDomainEventPropertiesSerialized`**

  ↳↳ [`IDomainEntityEventPropertiesSerialized`](events.interfaces.idomainentityeventpropertiesserialized.md)

## Table of contents

### Properties

- [id](events.interfaces.idomaineventpropertiesserialized.md#id)
- [metaVersion](events.interfaces.idomaineventpropertiesserialized.md#metaversion)
- [name](events.interfaces.idomaineventpropertiesserialized.md#name)
- [payload](events.interfaces.idomaineventpropertiesserialized.md#payload)

## Properties

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[id](events.interfaces.idomaineventpropertieswithpayload.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:17

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[metaVersion](events.interfaces.idomaineventpropertieswithpayload.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:31

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[name](events.interfaces.idomaineventpropertieswithpayload.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:24

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithPayload](events.interfaces.idomaineventpropertieswithpayload.md).[payload](events.interfaces.idomaineventpropertieswithpayload.md#payload)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:40
