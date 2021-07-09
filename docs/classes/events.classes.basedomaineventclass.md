[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEventClass

# Class: BaseDomainEventClass<N, P\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEventClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- **`BaseDomainEventClass`**

  ↳ [`BaseDomainEntityEvent`](events.classes.basedomainentityevent.md)

## Implements

- [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`N`, `P`\>

## Table of contents

### Constructors

- [constructor](events.classes.basedomaineventclass.md#constructor)

### Properties

- [\_\_id](events.classes.basedomaineventclass.md#__id)
- [\_\_metaVersion](events.classes.basedomaineventclass.md#__metaversion)
- [\_\_payload](events.classes.basedomaineventclass.md#__payload)
- [\_name](events.classes.basedomaineventclass.md#_name)

### Accessors

- [id](events.classes.basedomaineventclass.md#id)
- [metaVersion](events.classes.basedomaineventclass.md#metaversion)
- [name](events.classes.basedomaineventclass.md#name)
- [payload](events.classes.basedomaineventclass.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomaineventclass.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomaineventclass.md#serialize)

## Constructors

### constructor

• **new BaseDomainEventClass**<`N`, `P`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends `TSerializableValue``undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEventClassParameters`<`P`\> |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:18

## Properties

### \_\_id

• `Private` `Readonly` **\_\_id**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:18

___

### \_\_metaVersion

• `Private` `Readonly` **\_\_metaVersion**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:16

___

### \_\_payload

• `Private` `Readonly` **\_\_payload**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:17

___

### \_name

• `Protected` `Abstract` **\_name**: `N`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:15

## Accessors

### id

• `get` **id**(): `string`

A unique identifier of an event

#### Returns

`string`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[id](../interfaces/events.interfaces.idomainevent.md#id)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:14

___

### metaVersion

• `get` **metaVersion**(): `number`

Version of the event format

#### Returns

`number`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[metaVersion](../interfaces/events.interfaces.idomainevent.md#metaversion)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:12

___

### name

• `get` **name**(): `N`

A name of the event

#### Returns

`N`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[name](../interfaces/events.interfaces.idomainevent.md#name)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:11

___

### payload

• `get` **payload**(): `P`

Payload of the event

#### Returns

`P`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[payload](../interfaces/events.interfaces.idomainevent.md#payload)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:13

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEventPropertiesSerialized`](../interfaces/events.interfaces.idomaineventpropertiesserialized.md)<`N`, `P`\>

#### Returns

[`IDomainEventPropertiesSerialized`](../interfaces/events.interfaces.idomaineventpropertiesserialized.md)<`N`, `P`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:21

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[serialize](../interfaces/events.interfaces.idomainevent.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/events/classes/baseDomainEvent/baseDomainEvent.d.ts:20
