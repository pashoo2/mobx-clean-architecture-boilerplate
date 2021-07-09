[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultiValuesValueObjectBase

# Interface: IMultiValuesValueObjectBase<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultiValuesValueObjectBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- `ISerializable`<`string`\>

- `IComparable`<[`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\>\>

  ↳ **`IMultiValuesValueObjectBase`**

  ↳↳ [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.imultivaluesvalueobjectbase.md#value)

### Methods

- [equalsTo](valueobject.interfaces.imultivaluesvalueobjectbase.md#equalsto)
- [serialize](valueobject.interfaces.imultivaluesvalueobjectbase.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/multipleValuesValueObjectBase.d.ts:11

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\> |

#### Returns

`boolean`

#### Inherited from

IComparable.equalsTo

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

ISerializable.serialize

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
