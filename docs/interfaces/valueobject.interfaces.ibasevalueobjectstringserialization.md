[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObjectStringSerialization

# Interface: IBaseValueObjectStringSerialization<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObjectStringSerialization

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |

## Hierarchy

- [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `string`\>

  ↳ **`IBaseValueObjectStringSerialization`**

  ↳↳ [`IUuidVO`](valueobject.interfaces.iuuidvo.md)

## Implemented by

- [`BaseValueObjectStringSerialization`](../classes/valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.ibasevalueobjectstringserialization.md#value)

### Methods

- [equalsTo](valueobject.interfaces.ibasevalueobjectstringserialization.md#equalsto)
- [serialize](valueobject.interfaces.ibasevalueobjectstringserialization.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[value](valueobject.interfaces.ibasevalueobject.md#value)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:8

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`V`, `string`\> |

#### Returns

`boolean`

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[equalsTo](valueobject.interfaces.ibasevalueobject.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Overrides

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:13
