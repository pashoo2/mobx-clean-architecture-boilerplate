[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [classes](../modules/valueobject.classes.md) / EmailVO

# Class: EmailVO

[valueObject](../modules/valueobject.md).[classes](../modules/valueobject.classes.md).EmailVO

## Hierarchy

- [`BaseValueObjectStringSerialization`](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md)<`string`\>

  ↳ **`EmailVO`**

## Implements

- [`IEmailVO`](../interfaces/valueobject.interfaces.iemailvo.md)

## Table of contents

### Constructors

- [constructor](valueobject.classes.emailvo.md#constructor)

### Accessors

- [value](valueobject.classes.emailvo.md#value)

### Methods

- [\_validate](valueobject.classes.emailvo.md#_validate)
- [equalsTo](valueobject.classes.emailvo.md#equalsto)
- [serialize](valueobject.classes.emailvo.md#serialize)

## Constructors

### constructor

• **new EmailVO**(`__value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__value` | `string` |

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[constructor](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:5

## Accessors

### value

• `get` **value**(): `V`

#### Returns

`V`

#### Implementation of

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[value](../interfaces/valueobject.interfaces.iemailvo.md#value)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:5

## Methods

### \_validate

▸ `Protected` **_validate**(): `void`

#### Returns

`void`

#### Overrides

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[_validate](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#_validate)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/classes/emailValueObject.d.ts:4

___

### equalsTo

▸ **equalsTo**(`anotherValueObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValueObject` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`string`, `string`\> |

#### Returns

`boolean`

#### Implementation of

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[equalsTo](../interfaces/valueobject.interfaces.iemailvo.md#equalsto)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[equalsTo](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#equalsto)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:8

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IEmailVO](../interfaces/valueobject.interfaces.iemailvo.md).[serialize](../interfaces/valueobject.interfaces.iemailvo.md#serialize)

#### Inherited from

[BaseValueObjectStringSerialization](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md).[serialize](valueobject.interfaces.abstractclasses.basevalueobjectstringserialization.md#serialize)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/abstractClasses/baseValueObject.d.ts:12
