[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IBaseValueObjectConstructorFabricParameters

# Interface: IBaseValueObjectConstructorFabricParameters<V, S\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IBaseValueObjectConstructorFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `TSimpleType` |
| `S` | extends `TSimpleType` |

## Table of contents

### Properties

- [compareValues](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#comparevalues)
- [serializeValue](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#serializevalue)
- [validateValue](valueobject.interfaces.ibasevalueobjectconstructorfabricparameters.md#validatevalue)

## Properties

### compareValues

• **compareValues**: [`ICompareValues`](utilities.interfaces.icomparevalues.md)<`V`, `V`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:16

___

### serializeValue

• **serializeValue**: `ISerializer`<`V`, `S`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:17

___

### validateValue

• **validateValue**: `IValidator`<`V`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/baseValueObject.d.ts:18
