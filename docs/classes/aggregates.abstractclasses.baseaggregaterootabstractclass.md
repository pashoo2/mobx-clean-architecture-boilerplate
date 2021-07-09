[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [abstractClasses](../modules/aggregates.abstractclasses.md) / BaseAggregateRootAbstractClass

# Class: BaseAggregateRootAbstractClass<Id, Type, E\>

[aggregates](../modules/aggregates.md).[abstractClasses](../modules/aggregates.abstractclasses.md).BaseAggregateRootAbstractClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseAggregateRootAbstractClass`**

## Implements

- [`IAggregateRootImplementation`](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>

## Table of contents

### Constructors

- [constructor](aggregates.abstractclasses.baseaggregaterootabstractclass.md#constructor)

### Properties

- [\_EntityCreateEventClass](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_entitydeleteeventclass)
- [\_parameters](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_parameters)
- [\_services](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_services)
- [\_type](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_type)

### Accessors

- [id](aggregates.abstractclasses.baseaggregaterootabstractclass.md#id)
- [isDeleted](aggregates.abstractclasses.baseaggregaterootabstractclass.md#isdeleted)
- [type](aggregates.abstractclasses.baseaggregaterootabstractclass.md#type)

### Methods

- [\_compareEntitiesIdentities](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_compareentitiestypes)
- [\_delete](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_delete)
- [\_emitCreateEvent](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_emitcreateevent)
- [\_emitDeleteEvent](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_geteventuniqueidentity)
- [\_getTransferableProps](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_gettransferableprops)
- [\_markDeleted](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_markdeleted)
- [\_validate](aggregates.abstractclasses.baseaggregaterootabstractclass.md#_validate)
- [delete](aggregates.abstractclasses.baseaggregaterootabstractclass.md#delete)
- [emit](aggregates.abstractclasses.baseaggregaterootabstractclass.md#emit)
- [emitEventFailed](aggregates.abstractclasses.baseaggregaterootabstractclass.md#emiteventfailed)
- [equalsTo](aggregates.abstractclasses.baseaggregaterootabstractclass.md#equalsto)
- [getTransferableProps](aggregates.abstractclasses.baseaggregaterootabstractclass.md#gettransferableprops)
- [subscribe](aggregates.abstractclasses.baseaggregaterootabstractclass.md#subscribe)
- [subscribeOnFailed](aggregates.abstractclasses.baseaggregaterootabstractclass.md#subscribeonfailed)
- [unsubscribe](aggregates.abstractclasses.baseaggregaterootabstractclass.md#unsubscribe)

## Constructors

### constructor

• **new BaseAggregateRootAbstractClass**<`Id`, `Type`, `E`\>(`parameters`, `services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseAggregateRootParameters`](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)<`Id`\> |
| `services` | [`IBaseAggregateRootServices`](../interfaces/aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\> |

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[constructor](entities.abstractclasses.baseentity.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/abstractClasses/aggregateRootAbstractClass.d.ts:4

## Properties

### \_EntityCreateEventClass

• `Protected` `Readonly` **\_EntityCreateEventClass**: `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityCreateEventClass](entities.abstractclasses.baseentity.md#_entitycreateeventclass)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:24

___

### \_EntityDeleteEventClass

• `Protected` `Readonly` **\_EntityDeleteEventClass**: `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_EntityDeleteEventClass](entities.abstractclasses.baseentity.md#_entitydeleteeventclass)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:21

___

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_parameters](entities.abstractclasses.baseentity.md#_parameters)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:8

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_services](entities.abstractclasses.baseentity.md#_services)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:9

___

### \_type

• `Protected` `Readonly` `Abstract` **\_type**: `Type`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_type](entities.abstractclasses.baseentity.md#_type)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:17

## Accessors

### id

• `get` **id**(): `Id`

#### Returns

`Id`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[id](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:13

___

### isDeleted

• `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[isDeleted](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#isdeleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:14

___

### type

• `get` **type**(): `Type`

#### Returns

`Type`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[type](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#type)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:15

## Methods

### \_compareEntitiesIdentities

▸ `Protected` **_compareEntitiesIdentities**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `secondId` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`boolean`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:36

___

### \_compareEntitiesTypes

▸ `Protected` **_compareEntitiesTypes**(`firstType`, `secondType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstType` | `string` |
| `secondType` | `string` |

#### Returns

`boolean`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:37

___

### \_delete

▸ `Protected` **_delete**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_delete](entities.abstractclasses.baseentity.md#_delete)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:38

___

### \_emitCreateEvent

▸ `Protected` **_emitCreateEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitCreateEvent](entities.abstractclasses.baseentity.md#_emitcreateevent)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:41

___

### \_emitDeleteEvent

▸ `Protected` **_emitDeleteEvent**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_emitDeleteEvent](entities.abstractclasses.baseentity.md#_emitdeleteevent)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:40

___

### \_getEventUniqueIdentity

▸ `Protected` **_getEventUniqueIdentity**(): `string`

#### Returns

`string`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getEventUniqueIdentity](entities.abstractclasses.baseentity.md#_geteventuniqueidentity)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:42

___

### \_getTransferableProps

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_getTransferableProps](entities.abstractclasses.baseentity.md#_gettransferableprops)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:43

___

### \_markDeleted

▸ `Protected` **_markDeleted**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_markDeleted](entities.abstractclasses.baseentity.md#_markdeleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:39

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[_validate](entities.abstractclasses.baseentity.md#_validate)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:35

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[delete](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#delete)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/aggregates/abstractClasses/aggregateRootAbstractClass.d.ts:6

___

### emit

▸ **emit**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[emit](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#emit)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emit](entities.abstractclasses.baseentity.md#emit)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:30

___

### emitEventFailed

▸ **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Ev`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFailed` | [`IDomainEventFailed`](../interfaces/events.interfaces.idomaineventfailed.md)<`Ev`\> |

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[emitEventFailed](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#emiteventfailed)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[emitEventFailed](entities.abstractclasses.baseentity.md#emiteventfailed)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:31

___

### equalsTo

▸ **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[equalsTo](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#equalsto)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[equalsTo](entities.abstractclasses.baseentity.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:28

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[getTransferableProps](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#gettransferableprops)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[getTransferableProps](entities.abstractclasses.baseentity.md#gettransferableprops)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:29

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
| `eventListener` | [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[subscribe](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#subscribe)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribe](entities.abstractclasses.baseentity.md#subscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:32

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
| `eventListener` | [`IDomainFailedEventListener`](../interfaces/events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[subscribeOnFailed](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#subscribeonfailed)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[subscribeOnFailed](entities.abstractclasses.baseentity.md#subscribeonfailed)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:33

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
| `eventListener` | [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md).[unsubscribe](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md#unsubscribe)

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:34
