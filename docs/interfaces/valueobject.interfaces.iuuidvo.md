[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IUuidVO

# Interface: IUuidVO

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IUuidVO

## Hierarchy

- [`IBaseValueObjectStringSerialization`](valueobject.interfaces.ibasevalueobjectstringserialization.md)<`string`\>

  ↳ **`IUuidVO`**

## Implemented by

- [`UuidValueObject`](../classes/valueobject.classes.uuidvalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.iuuidvo.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iuuidvo.md#equalsto)
- [serialize](valueobject.interfaces.iuuidvo.md#serialize)

## Properties

### value

• `Readonly` **value**: `string`

#### Inherited from

[IBaseValueObjectStringSerialization](valueobject.interfaces.ibasevalueobjectstringserialization.md).[value](valueobject.interfaces.ibasevalueobjectstringserialization.md#value)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:8

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\> |

#### Returns

`boolean`

#### Inherited from

[IBaseValueObjectStringSerialization](valueobject.interfaces.ibasevalueobjectstringserialization.md).[equalsTo](valueobject.interfaces.ibasevalueobjectstringserialization.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IBaseValueObjectStringSerialization](valueobject.interfaces.ibasevalueobjectstringserialization.md).[serialize](valueobject.interfaces.ibasevalueobjectstringserialization.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:13
