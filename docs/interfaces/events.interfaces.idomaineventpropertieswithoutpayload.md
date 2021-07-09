[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventPropertiesWithoutPayload

# Interface: IDomainEventPropertiesWithoutPayload<N\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventPropertiesWithoutPayload

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |

## Hierarchy

- **`IDomainEventPropertiesWithoutPayload`**

  ↳ [`IDomainEventPropertiesWithPayload`](events.interfaces.idomaineventpropertieswithpayload.md)

## Table of contents

### Properties

- [id](events.interfaces.idomaineventpropertieswithoutpayload.md#id)
- [metaVersion](events.interfaces.idomaineventpropertieswithoutpayload.md#metaversion)
- [name](events.interfaces.idomaineventpropertieswithoutpayload.md#name)

## Properties

### id

• `Readonly` **id**: `string`

A unique identifier of an event

**`memberof`** IDomainEvent

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:17

___

### metaVersion

• `Readonly` **metaVersion**: `number`

Version of the event format

**`memberof`** IDomainEvent

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:31

___

### name

• `Readonly` **name**: `N`

A name of the event

**`memberof`** IDomainEvent

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:24
