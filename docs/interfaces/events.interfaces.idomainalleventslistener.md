[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainAllEventsListener

# Interface: IDomainAllEventsListener<DE\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainAllEventsListener

## Type parameters

| Name | Type |
| :------ | :------ |
| `DE` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Hierarchy

- [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`DE`\>

- [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`DE`\>

  ↳ **`IDomainAllEventsListener`**

## Callable

### IDomainAllEventsListener

▸ **IDomainAllEventsListener**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DE` |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:55

### IDomainAllEventsListener

▸ **IDomainAllEventsListener**(`failedEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failedEvent` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`DE`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEvents.d.ts:58
