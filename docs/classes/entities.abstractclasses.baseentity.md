[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [abstractClasses](../modules/entities.abstractclasses.md) / BaseEntity

# Class: BaseEntity<Id, Type, E\>

[entities](../modules/entities.md).[abstractClasses](../modules/entities.abstractclasses.md).BaseEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseEntity`**

  ↳↳ [`BaseAggregateRootAbstractClass`](aggregates.abstractclasses.baseaggregaterootabstractclass.md)

  ↳↳ [`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)

## Table of contents

### Constructors

- [constructor](entities.abstractclasses.baseentity.md#constructor)

### Properties

- [\_EntityCreateEventClass](entities.abstractclasses.baseentity.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](entities.abstractclasses.baseentity.md#_entitydeleteeventclass)
- [\_\_createEntityCreateEventInstance](entities.abstractclasses.baseentity.md#__createentitycreateeventinstance)
- [\_\_createEntityDeleteEventInstance](entities.abstractclasses.baseentity.md#__createentitydeleteeventinstance)
- [\_\_domainEventBus](entities.abstractclasses.baseentity.md#__domaineventbus)
- [\_\_generateUniqueIdentityString](entities.abstractclasses.baseentity.md#__generateuniqueidentitystring)
- [\_\_getEntityCreateEventClass](entities.abstractclasses.baseentity.md#__getentitycreateeventclass)
- [\_\_getEntityDeleteEventClass](entities.abstractclasses.baseentity.md#__getentitydeleteeventclass)
- [\_\_id](entities.abstractclasses.baseentity.md#__id)
- [\_\_isDeleted](entities.abstractclasses.baseentity.md#__isdeleted)
- [\_parameters](entities.abstractclasses.baseentity.md#_parameters)
- [\_services](entities.abstractclasses.baseentity.md#_services)
- [\_type](entities.abstractclasses.baseentity.md#_type)

### Accessors

- [id](entities.abstractclasses.baseentity.md#id)
- [isDeleted](entities.abstractclasses.baseentity.md#isdeleted)
- [type](entities.abstractclasses.baseentity.md#type)

### Methods

- [\_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)
- [\_delete](entities.abstractclasses.baseentity.md#_delete)
- [\_emitCreateEvent](entities.abstractclasses.baseentity.md#_emitcreateevent)
- [\_emitDeleteEvent](entities.abstractclasses.baseentity.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](entities.abstractclasses.baseentity.md#_geteventuniqueidentity)
- [\_getTransferableProps](entities.abstractclasses.baseentity.md#_gettransferableprops)
- [\_markDeleted](entities.abstractclasses.baseentity.md#_markdeleted)
- [\_validate](entities.abstractclasses.baseentity.md#_validate)
- [emit](entities.abstractclasses.baseentity.md#emit)
- [emitEventFailed](entities.abstractclasses.baseentity.md#emiteventfailed)
- [equalsTo](entities.abstractclasses.baseentity.md#equalsto)
- [getTransferableProps](entities.abstractclasses.baseentity.md#gettransferableprops)
- [subscribe](entities.abstractclasses.baseentity.md#subscribe)
- [subscribeOnFailed](entities.abstractclasses.baseentity.md#subscribeonfailed)
- [unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

## Constructors

### constructor

• **new BaseEntity**<`Id`, `Type`, `E`\>(`parameters`, `services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[constructor](entities.abstractclasses.baseentityabstractclass.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:26

## Properties

### \_EntityCreateEventClass

• `Protected` `Readonly` **\_EntityCreateEventClass**: `Constructor`<[`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:24

___

### \_EntityDeleteEventClass

• `Protected` `Readonly` **\_EntityDeleteEventClass**: `Constructor`<[`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)<`Id`, `Type`\>, [`TBaseDomainEntityEventParameters`<`Id`, `undefined`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:21

___

### \_\_createEntityCreateEventInstance

• `Private` **\_\_createEntityCreateEventInstance**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:47

___

### \_\_createEntityDeleteEventInstance

• `Private` **\_\_createEntityDeleteEventInstance**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:46

___

### \_\_domainEventBus

• `Private` `Readonly` **\_\_domainEventBus**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:19

___

### \_\_generateUniqueIdentityString

• `Private` `Readonly` **\_\_generateUniqueIdentityString**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:20

___

### \_\_getEntityCreateEventClass

• `Private` **\_\_getEntityCreateEventClass**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:45

___

### \_\_getEntityDeleteEventClass

• `Private` **\_\_getEntityDeleteEventClass**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:44

___

### \_\_id

• `Private` `Readonly` **\_\_id**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:16

___

### \_\_isDeleted

• `Private` **\_\_isDeleted**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:18

___

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

#### Inherited from

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_parameters](entities.abstractclasses.baseentityabstractclass.md#_parameters)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:8

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

#### Inherited from

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_services](entities.abstractclasses.baseentityabstractclass.md#_services)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:9

___

### \_type

• `Protected` `Readonly` `Abstract` **\_type**: `Type`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:17

## Accessors

### id

• `get` **id**(): `Id`

#### Returns

`Id`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:13

___

### isDeleted

• `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:14

___

### type

• `get` **type**(): `Type`

#### Returns

`Type`

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

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:37

___

### \_delete

▸ `Protected` **_delete**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:38

___

### \_emitCreateEvent

▸ `Protected` **_emitCreateEvent**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:41

___

### \_emitDeleteEvent

▸ `Protected` **_emitDeleteEvent**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:40

___

### \_getEventUniqueIdentity

▸ `Protected` **_getEventUniqueIdentity**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:42

___

### \_getTransferableProps

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:43

___

### \_markDeleted

▸ `Protected` **_markDeleted**(): `void`

#### Returns

`void`

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_markDeleted](entities.abstractclasses.baseentityabstractclass.md#_markdeleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:39

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[_validate](entities.abstractclasses.baseentityabstractclass.md#_validate)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:35

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[emit](entities.abstractclasses.baseentityabstractclass.md#emit)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[emitEventFailed](entities.abstractclasses.baseentityabstractclass.md#emiteventfailed)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[equalsTo](entities.abstractclasses.baseentityabstractclass.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:28

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>\>

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[getTransferableProps](entities.abstractclasses.baseentityabstractclass.md#gettransferableprops)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[subscribe](entities.abstractclasses.baseentityabstractclass.md#subscribe)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[subscribeOnFailed](entities.abstractclasses.baseentityabstractclass.md#subscribeonfailed)

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

#### Overrides

[BaseEntityAbstractClass](entities.abstractclasses.baseentityabstractclass.md).[unsubscribe](entities.abstractclasses.baseentityabstractclass.md#unsubscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:34
