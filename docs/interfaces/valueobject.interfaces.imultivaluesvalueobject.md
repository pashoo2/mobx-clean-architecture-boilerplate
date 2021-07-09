[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultiValuesValueObject

# Interface: IMultiValuesValueObject<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultiValuesValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- [`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\>

  ↳ **`IMultiValuesValueObject`**

  ↳↳ [`IIdentityMultiValueObject`](valueobject.interfaces.iidentitymultivalueobject.md)

## Implemented by

- [`MultiValuesValueObject`](../classes/valueobject.interfaces.abstractclasses.multivaluesvalueobject.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.imultivaluesvalueobject.md#value)

### Methods

- [equalsTo](valueobject.interfaces.imultivaluesvalueobject.md#equalsto)
- [serialize](valueobject.interfaces.imultivaluesvalueobject.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

[IMultiValuesValueObjectBase](valueobject.interfaces.imultivaluesvalueobjectbase.md).[value](valueobject.interfaces.imultivaluesvalueobjectbase.md#value)

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

[IMultiValuesValueObjectBase](valueobject.interfaces.imultivaluesvalueobjectbase.md).[equalsTo](valueobject.interfaces.imultivaluesvalueobjectbase.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IMultiValuesValueObjectBase](valueobject.interfaces.imultivaluesvalueobjectbase.md).[serialize](valueobject.interfaces.imultivaluesvalueobjectbase.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
