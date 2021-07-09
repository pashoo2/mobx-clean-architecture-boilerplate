[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IEmailVO

# Interface: IEmailVO

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IEmailVO

## Hierarchy

- [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`string`\>

  ↳ **`IEmailVO`**

## Implemented by

- [`EmailVO`](../classes/valueobject.classes.emailvo.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.iemailvo.md#value)

### Methods

- [equalsTo](valueobject.interfaces.iemailvo.md#equalsto)
- [serialize](valueobject.interfaces.iemailvo.md#serialize)

## Properties

### value

• `Readonly` **value**: `string`

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
| `anotherValue` | [`IBaseValueObject`](valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\> |

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

#### Inherited from

[IBaseValueObject](valueobject.interfaces.ibasevalueobject.md).[serialize](valueobject.interfaces.ibasevalueobject.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:9
