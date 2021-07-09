[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventPropertiesWithPayload

# Interface: IDomainEventPropertiesWithPayload<N, P\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventPropertiesWithPayload

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload) |

## Hierarchy

- [`IDomainEventPropertiesWithoutPayload`](events.interfaces.idomaineventpropertieswithoutpayload.md)<`N`\>

  ↳ **`IDomainEventPropertiesWithPayload`**

  ↳↳ [`IDomainEventPropertiesSerialized`](events.interfaces.idomaineventpropertiesserialized.md)

  ↳↳ [`IDomainEvent`](events.interfaces.idomainevent.md)

## Table of contents

### Properties

- [id](events.interfaces.idomaineventpropertieswithpayload.md#id)
- [metaVersion](events.interfaces.idomaineventpropertieswithpayload.md#metaversion)
- [name](events.interfaces.idomaineventpropertieswithpayload.md#name)
- [payload](events.interfaces.idomaineventpropertieswithpayload.md#payload)

## Properties

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[id](events.interfaces.idomaineventpropertieswithoutpayload.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:17

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[metaVersion](events.interfaces.idomaineventpropertieswithoutpayload.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:31

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Inherited from

[IDomainEventPropertiesWithoutPayload](events.interfaces.idomaineventpropertieswithoutpayload.md).[name](events.interfaces.idomaineventpropertieswithoutpayload.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:24

___

### payload

• `Readonly` **payload**: `P`

Payload of the event

**`memberof`** IDomainEvent

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:40
