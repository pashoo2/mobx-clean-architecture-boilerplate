[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEntityEvent

# Class: BaseDomainEntityEvent<EntityId, EntityType, N, P\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEntityEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- [`BaseDomainEventClass`](events.classes.basedomaineventclass.md)<`N`, `P`\>

  ↳ **`BaseDomainEntityEvent`**

  ↳↳ [`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)

  ↳↳ [`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)

## Implements

- [`IDomainEntityEvent`](../interfaces/events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `N`, `P`, `EDomainEntityEventType.ENTITY_EVENT`\>

## Table of contents

### Constructors

- [constructor](events.classes.basedomainentityevent.md#constructor)

### Properties

- [\_\_entityId](events.classes.basedomainentityevent.md#__entityid)
- [\_entityType](events.classes.basedomainentityevent.md#_entitytype)
- [\_name](events.classes.basedomainentityevent.md#_name)

### Accessors

- [entityId](events.classes.basedomainentityevent.md#entityid)
- [entityType](events.classes.basedomainentityevent.md#entitytype)
- [eventType](events.classes.basedomainentityevent.md#eventtype)
- [id](events.classes.basedomainentityevent.md#id)
- [metaVersion](events.classes.basedomainentityevent.md#metaversion)
- [name](events.classes.basedomainentityevent.md#name)
- [payload](events.classes.basedomainentityevent.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomainentityevent.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomainentityevent.md#serialize)

## Constructors

### constructor

• **new BaseDomainEntityEvent**<`EntityId`, `EntityType`, `N`, `P`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends `TSerializableValue``undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEntityEventParameters`<`EntityId`, `P`\> |

#### Overrides

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[constructor](events.classes.basedomaineventclass.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:13

## Properties

### \_\_entityId

• `Private` **\_\_entityId**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:12

___

### \_entityType

• `Protected` `Abstract` **\_entityType**: `EntityType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:13

___

### \_name

• `Protected` `Abstract` **\_name**: `N`

#### Inherited from

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[_name](events.classes.basedomaineventclass.md#_name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:15

## Accessors

### entityId

• `get` **entityId**(): `EntityId`

#### Returns

`EntityId`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[entityId](../interfaces/events.interfaces.idomainentityevent.md#entityid)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:9

___

### entityType

• `get` **entityType**(): `EntityType`

#### Returns

`EntityType`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[entityType](../interfaces/events.interfaces.idomainentityevent.md#entitytype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:10

___

### eventType

• `get` **eventType**(): `ENTITY_EVENT`

#### Returns

`ENTITY_EVENT`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[eventType](../interfaces/events.interfaces.idomainentityevent.md#eventtype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:11

___

### id

• `get` **id**(): `string`

A unique identifier of an event

#### Returns

`string`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[id](../interfaces/events.interfaces.idomainentityevent.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:14

___

### metaVersion

• `get` **metaVersion**(): `number`

Version of the event format

#### Returns

`number`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[metaVersion](../interfaces/events.interfaces.idomainentityevent.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:12

___

### name

• `get` **name**(): `N`

A name of the event

#### Returns

`N`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[name](../interfaces/events.interfaces.idomainentityevent.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:11

___

### payload

• `get` **payload**(): `P`

Payload of the event

#### Returns

`P`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[payload](../interfaces/events.interfaces.idomainentityevent.md#payload)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:13

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, `N`, `P`, `ENTITY_EVENT`\>

#### Returns

[`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, `N`, `P`, `ENTITY_EVENT`\>

#### Overrides

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[_getSerializableObjectRepresentation](events.classes.basedomaineventclass.md#_getserializableobjectrepresentation)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:15

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[serialize](../interfaces/events.interfaces.idomainentityevent.md#serialize)

#### Inherited from

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[serialize](events.classes.basedomaineventclass.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:20
