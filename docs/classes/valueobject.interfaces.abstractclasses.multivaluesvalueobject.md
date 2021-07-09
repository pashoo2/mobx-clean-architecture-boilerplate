[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / [abstractClasses](../modules/valueobject.interfaces.abstractclasses.md) / MultiValuesValueObject

# Class: MultiValuesValueObject<V\>

[interfaces](../modules/valueobject.interfaces.md).[abstractClasses](../modules/valueobject.interfaces.abstractclasses.md).MultiValuesValueObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Implements

- [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<`V`\>

## Table of contents

### Constructors

- [constructor](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#constructor)

### Properties

- [\_\_value](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#__value)

### Accessors

- [value](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#value)

### Methods

- [\_validate](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#_validate)
- [equalsTo](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#equalsto)
- [serialize](valueobject.interfaces.abstractclasses.multivaluesvalueobject.md#serialize)

## Constructors

### constructor

• **new MultiValuesValueObject**<`V`\>(`__value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `V` |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:4

## Properties

### \_\_value

• `Private` **\_\_value**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:3

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IMultiValuesValueObject](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md).[value](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md#value)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:4

## Methods

### \_validate

▸ `Protected` `Abstract` **_validate**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:8

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> |

#### Returns

`boolean`

#### Implementation of

[IMultiValuesValueObject](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md).[equalsTo](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:7

___

### serialize

▸ `Abstract` **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IMultiValuesValueObject](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md).[serialize](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/multiValuesValueObject.d.ts:6
