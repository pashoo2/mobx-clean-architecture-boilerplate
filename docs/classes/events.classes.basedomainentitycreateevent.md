[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEntityCreateEvent

# Class: BaseDomainEntityCreateEvent<EntityId, EntityType\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEntityCreateEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

## Hierarchy

- [`BaseDomainEntityEvent`](events.classes.basedomainentityevent.md)<`EntityId`, `EntityType`, typeof `DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED`\>

  ↳ **`BaseDomainEntityCreateEvent`**

## Table of contents

### Constructors

- [constructor](events.classes.basedomainentitycreateevent.md#constructor)

### Properties

- [\_entityType](events.classes.basedomainentitycreateevent.md#_entitytype)
- [\_name](events.classes.basedomainentitycreateevent.md#_name)
- [eventName](events.classes.basedomainentitycreateevent.md#eventname)

### Accessors

- [entityId](events.classes.basedomainentitycreateevent.md#entityid)
- [entityType](events.classes.basedomainentitycreateevent.md#entitytype)
- [eventType](events.classes.basedomainentitycreateevent.md#eventtype)
- [id](events.classes.basedomainentitycreateevent.md#id)
- [metaVersion](events.classes.basedomainentitycreateevent.md#metaversion)
- [name](events.classes.basedomainentitycreateevent.md#name)
- [payload](events.classes.basedomainentitycreateevent.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomainentitycreateevent.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomainentitycreateevent.md#serialize)

## Constructors

### constructor

• **new BaseDomainEntityCreateEvent**<`EntityId`, `EntityType`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEntityEventParameters`<`EntityId`, `undefined`\> |

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[constructor](events.classes.basedomainentityevent.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:13

## Properties

### \_entityType

• `Protected` `Abstract` **\_entityType**: `EntityType`

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_entityType](events.classes.basedomainentityevent.md#_entitytype)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:13

___

### \_name

• `Protected` **\_name**: ``"DOMAIN_ENTITY_CONSTRUCTED"``

#### Overrides

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_name](events.classes.basedomainentityevent.md#_name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityConstructEvent/baseDomainEntityConstructEvent.d.ts:10

___

### eventName

▪ `Static` **eventName**: ``"DOMAIN_ENTITY_CONSTRUCTED"``

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityConstructEvent/baseDomainEntityConstructEvent.d.ts:9

## Accessors

### entityId

• `get` **entityId**(): `EntityId`

#### Returns

`EntityId`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:9

___

### entityType

• `get` **entityType**(): `EntityType`

#### Returns

`EntityType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:10

___

### eventType

• `get` **eventType**(): `ENTITY_EVENT`

#### Returns

`ENTITY_EVENT`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:11

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:14

___

### metaVersion

• `get` **metaVersion**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:12

___

### name

• `get` **name**(): `N`

#### Returns

`N`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:11

___

### payload

• `get` **payload**(): `P`

#### Returns

`P`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:13

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, ``"DOMAIN_ENTITY_CONSTRUCTED"``, `undefined`, `ENTITY_EVENT`\>

#### Returns

[`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, ``"DOMAIN_ENTITY_CONSTRUCTED"``, `undefined`, `ENTITY_EVENT`\>

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_getSerializableObjectRepresentation](events.classes.basedomainentityevent.md#_getserializableobjectrepresentation)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.d.ts:15

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[serialize](events.classes.basedomainentityevent.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:20
