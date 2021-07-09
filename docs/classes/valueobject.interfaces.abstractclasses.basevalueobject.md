[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / [abstractClasses](../modules/valueobject.interfaces.abstractclasses.md) / BaseValueObject

# Class: BaseValueObject<V, S\>

[interfaces](../modules/valueobject.interfaces.md).[abstractClasses](../modules/valueobject.interfaces.abstractclasses.md).BaseValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

## Hierarchy

- **`BaseValueObject`**

  ↳ [`BaseValueObjectStringSerialization`](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)

## Implements

- [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\>

## Table of contents

### Constructors

- [constructor](valueobject.interfaces.abstractclasses.basevalueobject.md#constructor)

### Properties

- [\_\_value](valueobject.interfaces.abstractclasses.basevalueobject.md#__value)

### Accessors

- [value](valueobject.interfaces.abstractclasses.basevalueobject.md#value)

### Methods

- [\_validate](valueobject.interfaces.abstractclasses.basevalueobject.md#_validate)
- [equalsTo](valueobject.interfaces.abstractclasses.basevalueobject.md#equalsto)
- [serialize](valueobject.interfaces.abstractclasses.basevalueobject.md#serialize)

## Constructors

### constructor

• **new BaseValueObject**<`V`, `S`\>(`__value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `V` |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:5

## Properties

### \_\_value

• `Private` **\_\_value**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:4

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[value](../interfaces/valueobject.interfaces.ibasevalueobject.md#value)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:5

## Methods

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:9

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\> |

#### Returns

`boolean`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[equalsTo](../interfaces/valueobject.interfaces.ibasevalueobject.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:8

___

### serialize

▸ `Abstract` **serialize**(): `S`

#### Returns

`S`

#### Implementation of

[IBaseValueObject](../interfaces/valueobject.interfaces.ibasevalueobject.md).[serialize](../interfaces/valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:7
