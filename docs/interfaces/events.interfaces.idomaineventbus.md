[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventBus

# Interface: IDomainEventBus<E\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventBus

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](events.interfaces.ieventslist.md) |

## Table of contents

### Methods

- [emit](events.interfaces.idomaineventbus.md#emit)
- [emitEventFailed](events.interfaces.idomaineventbus.md#emiteventfailed)
- [subscribe](events.interfaces.idomaineventbus.md#subscribe)
- [subscribeAllEvents](events.interfaces.idomaineventbus.md#subscribeallevents)
- [subscribeOnFailed](events.interfaces.idomaineventbus.md#subscribeonfailed)
- [unsubscribe](events.interfaces.idomaineventbus.md#unsubscribe)
- [unsubscribeListenerAllEvents](events.interfaces.idomaineventbus.md#unsubscribelistenerallevents)

## Methods

### emit

▸ **emit**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:4

___

### emitEventFailed

▸ **emitEventFailed**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`Event`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:5

___

### subscribe

▸ **subscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:7

___

### subscribeAllEvents

▸ **subscribeAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:6

___

### subscribeOnFailed

▸ **subscribeOnFailed**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:8

___

### unsubscribe

▸ **unsubscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`E`[`N`]\> \| [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:9

___

### unsubscribeListenerAllEvents

▸ **unsubscribeListenerAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/interfaces/domainEventBus.d.ts:10
