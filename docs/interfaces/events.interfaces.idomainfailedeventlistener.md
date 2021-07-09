[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainFailedEventListener

# Interface: IDomainFailedEventListener<DE\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainFailedEventListener

## Type parameters

| Name | Type |
| :------ | :------ |
| `DE` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Hierarchy

- **`IDomainFailedEventListener`**

  ↳ [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)

## Callable

### IDomainFailedEventListener

▸ **IDomainFailedEventListener**(`failedEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failedEvent` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`DE`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:58
