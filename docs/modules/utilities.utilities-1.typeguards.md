[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / typeGuards

# Namespace: typeGuards

[utilities](utilities.md).[utilities](utilities.utilities-1.md).typeGuards

## Table of contents

### Functions

- [isAnyNumber](utilities.utilities-1.typeguards.md#isanynumber)
- [isObjectWithoutConstructor](utilities.utilities-1.typeguards.md#isobjectwithoutconstructor)
- [isSimpleArray](utilities.utilities-1.typeguards.md#issimplearray)
- [isSimpleObject](utilities.utilities-1.typeguards.md#issimpleobject)
- [isSimpleType](utilities.utilities-1.typeguards.md#issimpletype)
- [isSimpleTypeOrArrayOrObject](utilities.utilities-1.typeguards.md#issimpletypeorarrayorobject)
- [isString](utilities.utilities-1.typeguards.md#isstring)

## Functions

### isAnyNumber

▸ **isAnyNumber**(`v`): v is number \| Number

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is number \| Number

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleType.d.ts:2

___

### isObjectWithoutConstructor

▸ **isObjectWithoutConstructor**(`o`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleTypeOrArrayOrObject.d.ts:3

___

### isSimpleArray

▸ **isSimpleArray**(`arr`): arr is TSimpleArray

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `unknown` |

#### Returns

arr is TSimpleArray

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleTypeOrArrayOrObject.d.ts:5

___

### isSimpleObject

▸ **isSimpleObject**(`o`): o is Partial<object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

o is Partial<object\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleTypeOrArrayOrObject.d.ts:4

___

### isSimpleType

▸ **isSimpleType**(`v`): v is TSimpleType

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is TSimpleType

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleType.d.ts:4

___

### isSimpleTypeOrArrayOrObject

▸ **isSimpleTypeOrArrayOrObject**(`item`): item is TSimpleType \| Partial<object\> \| TSimpleArray

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `unknown` |

#### Returns

item is TSimpleType \| Partial<object\> \| TSimpleArray

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleTypeOrArrayOrObject.d.ts:2

___

### isString

▸ **isString**(`v`): v is string \| String

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is string \| String

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/typeGuards/isSimpleType.d.ts:3
