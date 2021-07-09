[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](valueobject.md) / [utilities](valueobject.utilities.md) / implementations

# Namespace: implementations

[valueObject](valueobject.md).[utilities](valueobject.utilities.md).implementations

## Table of contents

### Functions

- [isBaseValueObject](valueobject.utilities.implementations.md#isbasevalueobject)
- [isEmptyBaseValueObjectValue](valueobject.utilities.implementations.md#isemptybasevalueobjectvalue)
- [isEmptyMultipleValuesValueObjectValue](valueobject.utilities.implementations.md#isemptymultiplevaluesvalueobjectvalue)
- [isMultipleValuesValueObject](valueobject.utilities.implementations.md#ismultiplevaluesvalueobject)
- [isMultipleValuesValueObjectInsteadOfBase](valueobject.utilities.implementations.md#ismultiplevaluesvalueobjectinsteadofbase)
- [isValueObject](valueobject.utilities.implementations.md#isvalueobject)
- [validateEntityIdentity](valueobject.utilities.implementations.md#validateentityidentity)
- [validateEntityIdentityBase](valueobject.utilities.implementations.md#validateentityidentitybase)
- [validateEntityIdentityMultipleValue](valueobject.utilities.implementations.md#validateentityidentitymultiplevalue)

## Functions

### isBaseValueObject

▸ **isBaseValueObject**(`valueObject`): valueObject is IBaseValueObject<TSimpleType, string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IBaseValueObject<TSimpleType, string\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/typeGuards.d.ts:4

___

### isEmptyBaseValueObjectValue

▸ **isEmptyBaseValueObjectValue**(`valueObjectValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObjectValue` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\>[``"value"``] |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/isEmptyValueObjectValue.d.ts:3

___

### isEmptyMultipleValuesValueObjectValue

▸ **isEmptyMultipleValuesValueObjectValue**(`valueObjectValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObjectValue` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<[`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md)\>[``"value"``] |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/isEmptyValueObjectValue.d.ts:4

___

### isMultipleValuesValueObject

▸ **isMultipleValuesValueObject**(`valueObject`): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/typeGuards.d.ts:5

___

### isMultipleValuesValueObjectInsteadOfBase

▸ **isMultipleValuesValueObjectInsteadOfBase**(`valueObject`): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<[`IMultiValuesValueObjectValue`](../interfaces/valueobject.interfaces.imultivaluesvalueobjectvalue.md)\> \| [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\> |

#### Returns

valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/typeGuards.d.ts:6

___

### isValueObject

▸ **isValueObject**(`valueObject`): valueObject is IBaseValueObject<any, string\> \| IMultiValuesValueObject<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueObject` | `any` |

#### Returns

valueObject is IBaseValueObject<any, string\> \| IMultiValuesValueObject<any\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/typeGuards.d.ts:3

___

### validateEntityIdentity

▸ **validateEntityIdentity**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/validate.d.ts:5

___

### validateEntityIdentityBase

▸ **validateEntityIdentityBase**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`IBaseValueObject`](../interfaces/valueobject.interfaces.ibasevalueobject.md)<`TSimpleType`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/validate.d.ts:3

___

### validateEntityIdentityMultipleValue

▸ **validateEntityIdentityMultipleValue**(`entityId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | [`IMultiValuesValueObject`](../interfaces/valueobject.interfaces.imultivaluesvalueobject.md)<`any`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/utilities/implementations/validate.d.ts:4
