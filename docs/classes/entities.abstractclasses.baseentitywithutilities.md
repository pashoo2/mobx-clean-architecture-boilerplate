[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [abstractClasses](../modules/entities.abstractclasses.md) / BaseEntityWithUtilities

# Class: BaseEntityWithUtilities<Id, Type, E, U\>

[entities](../modules/entities.md).[abstractClasses](../modules/entities.abstractclasses.md).BaseEntityWithUtilities

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |
| `U` | extends `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\>`IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

## Hierarchy

- [`BaseEntity`](entities.abstractclasses.baseentity.md)<`Id`, `Type`, `E`\>

  ↳ **`BaseEntityWithUtilities`**

## Table of contents

### Constructors

- [constructor](entities.abstractclasses.baseentitywithutilities.md#constructor)

### Properties

- [\_EntityCreateEventClass](entities.abstractclasses.baseentitywithutilities.md#_entitycreateeventclass)
- [\_EntityDeleteEventClass](entities.abstractclasses.baseentitywithutilities.md#_entitydeleteeventclass)
- [\_parameters](entities.abstractclasses.baseentitywithutilities.md#_parameters)
- [\_services](entities.abstractclasses.baseentitywithutilities.md#_services)
- [\_type](entities.abstractclasses.baseentitywithutilities.md#_type)
- [\_utilities](entities.abstractclasses.baseentitywithutilities.md#_utilities)

### Accessors

- [id](entities.abstractclasses.baseentitywithutilities.md#id)
- [isDeleted](entities.abstractclasses.baseentitywithutilities.md#isdeleted)
- [type](entities.abstractclasses.baseentitywithutilities.md#type)

### Methods

- [\_compareEntitiesIdentities](entities.abstractclasses.baseentitywithutilities.md#_compareentitiesidentities)
- [\_compareEntitiesTypes](entities.abstractclasses.baseentitywithutilities.md#_compareentitiestypes)
- [\_delete](entities.abstractclasses.baseentitywithutilities.md#_delete)
- [\_emitCreateEvent](entities.abstractclasses.baseentitywithutilities.md#_emitcreateevent)
- [\_emitDeleteEvent](entities.abstractclasses.baseentitywithutilities.md#_emitdeleteevent)
- [\_getEventUniqueIdentity](entities.abstractclasses.baseentitywithutilities.md#_geteventuniqueidentity)
- [\_getTransferableProps](entities.abstractclasses.baseentitywithutilities.md#_gettransferableprops)
- [\_markDeleted](entities.abstractclasses.baseentitywithutilities.md#_markdeleted)
- [\_validate](entities.abstractclasses.baseentitywithutilities.md#_validate)
- [emit](entities.abstractclasses.baseentitywithutilities.md#emit)
- [emitEventFailed](entities.abstractclasses.baseentitywithutilities.md#emiteventfailed)
- [equalsTo](entities.abstractclasses.baseentitywithutilities.md#equalsto)
- [getTransferableProps](entities.abstractclasses.baseentitywithutilities.md#gettransferableprops)
- [subscribe](entities.abstractclasses.baseentitywithutilities.md#subscribe)
- [subscribeOnFailed](entities.abstractclasses.baseentitywithutilities.md#subscribeonfailed)
- [unsubscribe](entities.abstractclasses.baseentitywithutilities.md#unsubscribe)

## Constructors

### constructor

• **new BaseEntityWithUtilities**<`Id`, `Type`, `E`, `U`\>(`parameters`, `services`, `_utilities`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |
| `U` | extends `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`, `U`\>`IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `_utilities` | `U` |

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[constructor](entities.abstractclasses.baseentity.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.d.ts:11

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

___

### \_utilities

• `Protected` **\_utilities**: `U`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.d.ts:11

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
| `firstId` | `Id` |
| `secondId` | `Id` |

#### Returns

`boolean`

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesIdentities](entities.abstractclasses.baseentity.md#_compareentitiesidentities)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.d.ts:13

___

### \_compareEntitiesTypes

▸ `Protected` **_compareEntitiesTypes**(`firstType`, `secondType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstType` | `Type` |
| `secondType` | `Type` |

#### Returns

`boolean`

#### Overrides

[BaseEntity](entities.abstractclasses.baseentity.md).[_compareEntitiesTypes](entities.abstractclasses.baseentity.md#_compareentitiestypes)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities.d.ts:14

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

▸ `Protected` `Abstract` **_getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

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

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[equalsTo](entities.abstractclasses.baseentity.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:28

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityWithUtilities`](entities.abstractclasses.baseentitywithutilities.md)<`Id`, `Type`, `E`, `U`\>\>

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

#### Inherited from

[BaseEntity](entities.abstractclasses.baseentity.md).[unsubscribe](entities.abstractclasses.baseentity.md#unsubscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntity/baseEntity.d.ts:34
