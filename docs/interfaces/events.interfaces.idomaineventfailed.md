[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventFailed

# Interface: IDomainEventFailed<E\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventFailed

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Table of contents

### Properties

- [error](events.interfaces.idomaineventfailed.md#error)
- [failedEvent](events.interfaces.idomaineventfailed.md#failedevent)
- [name](events.interfaces.idomaineventfailed.md#name)

## Properties

### error

• **error**: `Error`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:53

___

### failedEvent

• **failedEvent**: `E`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:52

___

### name

• **name**: \`failed::${E["name"]}\`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:51
