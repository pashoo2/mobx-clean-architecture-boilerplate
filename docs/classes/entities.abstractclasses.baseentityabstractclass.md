[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [abstractClasses](../modules/entities.abstractclasses.md) / BaseEntityAbstractClass

# Class: BaseEntityAbstractClass<Id, Type, E\>

[entities](../modules/entities.md).[abstractClasses](../modules/entities.abstractclasses.md).BaseEntityAbstractClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Hierarchy

- **`BaseEntityAbstractClass`**

  ↳ [`BaseEntity`](entities.abstractclasses.baseentity.md)

## Implements

- [`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>

## Table of contents

### Constructors

- [constructor](entities.abstractclasses.baseentityabstractclass.md#constructor)

### Properties

- [\_parameters](entities.abstractclasses.baseentityabstractclass.md#_parameters)
- [\_services](entities.abstractclasses.baseentityabstractclass.md#_services)
- [type](entities.abstractclasses.baseentityabstractclass.md#type)

### Accessors

- [id](entities.abstractclasses.baseentityabstractclass.md#id)
- [isDeleted](entities.abstractclasses.baseentityabstractclass.md#isdeleted)

### Methods

- [\_markDeleted](entities.abstractclasses.baseentityabstractclass.md#_markdeleted)
- [\_validate](entities.abstractclasses.baseentityabstractclass.md#_validate)
- [emit](entities.abstractclasses.baseentityabstractclass.md#emit)
- [emitEventFailed](entities.abstractclasses.baseentityabstractclass.md#emiteventfailed)
- [equalsTo](entities.abstractclasses.baseentityabstractclass.md#equalsto)
- [getTransferableProps](entities.abstractclasses.baseentityabstractclass.md#gettransferableprops)
- [subscribe](entities.abstractclasses.baseentityabstractclass.md#subscribe)
- [subscribeOnFailed](entities.abstractclasses.baseentityabstractclass.md#subscribeonfailed)
- [unsubscribe](entities.abstractclasses.baseentityabstractclass.md#unsubscribe)

## Constructors

### constructor

• `Protected` **new BaseEntityAbstractClass**<`Id`, `Type`, `E`\>(`_parameters`, `_services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_parameters` | [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\> |
| `_services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:12

## Properties

### \_parameters

• `Protected` `Readonly` **\_parameters**: [`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:8

___

### \_services

• `Protected` `Readonly` **\_services**: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:9

___

### type

• `Readonly` `Abstract` **type**: `Type`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[type](../interfaces/entities.interfaces.ientityimplementation.md#type)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:12

## Accessors

### id

• `Abstract` `get` **id**(): `Id`

#### Returns

`Id`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[id](../interfaces/entities.interfaces.ientityimplementation.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:10

___

### isDeleted

• `Abstract` `get` **isDeleted**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[isDeleted](../interfaces/entities.interfaces.ientityimplementation.md#isdeleted)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:11

## Methods

### \_markDeleted

▸ `Protected` `Abstract` **_markDeleted**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:22

___

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:21

___

### emit

▸ `Abstract` **emit**<`Event`\>(`event`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[emit](../interfaces/entities.interfaces.ientityimplementation.md#emit)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:16

___

### emitEventFailed

▸ `Abstract` **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[emitEventFailed](../interfaces/entities.interfaces.ientityimplementation.md#emiteventfailed)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:17

___

### equalsTo

▸ `Abstract` **equalsTo**(`anotherEntity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherEntity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[equalsTo](../interfaces/entities.interfaces.ientityimplementation.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:14

___

### getTransferableProps

▸ `Abstract` **getTransferableProps**(): `TPickTransferableProperties`<[`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`BaseEntityAbstractClass`](entities.abstractclasses.baseentityabstractclass.md)<`Id`, `Type`, `E`\>\>

#### Implementation of

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[getTransferableProps](../interfaces/entities.interfaces.ientityimplementation.md#gettransferableprops)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:15

___

### subscribe

▸ `Abstract` **subscribe**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[subscribe](../interfaces/entities.interfaces.ientityimplementation.md#subscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:18

___

### subscribeOnFailed

▸ `Abstract` **subscribeOnFailed**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[subscribeOnFailed](../interfaces/entities.interfaces.ientityimplementation.md#subscribeonfailed)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:19

___

### unsubscribe

▸ `Abstract` **unsubscribe**<`N`\>(`eventName`, `eventListener`): `void`

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

[IEntityImplementation](../interfaces/entities.interfaces.ientityimplementation.md).[unsubscribe](../interfaces/entities.interfaces.ientityimplementation.md#unsubscribe)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityAbstractClass.d.ts:20
