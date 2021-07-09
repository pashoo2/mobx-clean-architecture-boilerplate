[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IBaseEntityServices

# Interface: IBaseEntityServices<E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IBaseEntityServices

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](events.interfaces.ieventslist.md) |

## Hierarchy

- **`IBaseEntityServices`**

  ↳ [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)

## Table of contents

### Properties

- [domainEventBus](entities.interfaces.ibaseentityservices.md#domaineventbus)
- [generateUniqueIdentifierString](entities.interfaces.ibaseentityservices.md#generateuniqueidentifierstring)

## Properties

### domainEventBus

• **domainEventBus**: [`IDomainEventBus`](events.interfaces.idomaineventbus.md)<`E`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/baseEntity.d.ts:18

___

### generateUniqueIdentifierString

• **generateUniqueIdentifierString**: `IServiceGeneratorIdentifierUnique`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/baseEntity.d.ts:19
