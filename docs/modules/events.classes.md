[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](events.md) / classes

# Namespace: classes

[events](events.md).classes

## Table of contents

### Classes

- [BaseDomainEntityCreateEvent](../classes/events.classes.basedomainentitycreateevent.md)
- [BaseDomainEntityDeleteEvent](../classes/events.classes.basedomainentitydeleteevent.md)
- [BaseDomainEntityEvent](../classes/events.classes.basedomainentityevent.md)
- [BaseDomainEventClass](../classes/events.classes.basedomaineventclass.md)

### Interfaces

- [IFabricDomainEntityEventParameters](../interfaces/events.classes.ifabricdomainentityeventparameters.md)

### Functions

- [createDomainEntityEventConstructor](events.classes.md#createdomainentityeventconstructor)

## Functions

### createDomainEntityEventConstructor

▸ **createDomainEntityEventConstructor**<`EventName`, `EntityType`, `EntityId`, `P`\>(`__namedParameters`): `Constructor`<[`IDomainEntityEvent`](../interfaces/events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `EventName`, `P`, `EDomainEntityEventType.ENTITY_EVENT`\>, [`TBaseDomainEntityEventParameters`<`EntityId`, `P`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` |
| `EntityType` | extends `string` |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `P` | extends `TSerializableValue``undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IFabricDomainEntityEventParameters`](../interfaces/events.classes.ifabricdomainentityeventparameters.md)<`EntityType`, `EventName`\> |

#### Returns

`Constructor`<[`IDomainEntityEvent`](../interfaces/events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `EventName`, `P`, `EDomainEntityEventType.ENTITY_EVENT`\>, [`TBaseDomainEntityEventParameters`<`EntityId`, `P`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/fabricDomainEntityEventConstructor/fabricDomainEntityEventConstructor.d.ts:10
