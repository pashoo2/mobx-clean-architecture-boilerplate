[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObject

# Interface: IBaseValueObject<V, S\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType``string` |

## Hierarchy

- `ISerializable`<`S`\>

- `IComparable`<[`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\>\>

  ↳ **`IBaseValueObject`**

  ↳↳ [`IBaseValueObjectStringSerialization`](valueobject.interfaces.ibasevalueobjectstringserialization.md)

  ↳↳ [`IEmailVO`](valueobject.interfaces.iemailvo.md)

  ↳↳ [`IIdentityValueObjectSimple`](valueobject.interfaces.iidentityvalueobjectsimple.md)

## Implemented by

- [`BaseValueObject`](../classes/valueobject.interfaces.abstractclasses.basevalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.ibasevalueobject.md#value)

### Methods

- [equalsTo](valueobject.interfaces.ibasevalueobject.md#equalsto)
- [serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:8

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `S`\> |

#### Returns

`boolean`

#### Inherited from

IComparable.equalsTo

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `S`

#### Returns

`S`

#### Inherited from

ISerializable.serialize

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
