[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IIdentityMultiValueObject

# Interface: IIdentityMultiValueObject<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IIdentityMultiValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md)[`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\>

  ↳ **`IIdentityMultiValueObject`**

## Table of contents

### Properties

- [value](valueobject.interfaces.iidentitymultivalueobject.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iidentitymultivalueobject.md#equalsto)
- [serialize](valueobject.interfaces.iidentitymultivalueobject.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[value](valueobject.interfaces.imultivaluesvalueobject.md#value)

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

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[equalsTo](valueobject.interfaces.imultivaluesvalueobject.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:2

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[IMultiValuesValueObject](valueobject.interfaces.imultivaluesvalueobject.md).[serialize](valueobject.interfaces.imultivaluesvalueobject.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
