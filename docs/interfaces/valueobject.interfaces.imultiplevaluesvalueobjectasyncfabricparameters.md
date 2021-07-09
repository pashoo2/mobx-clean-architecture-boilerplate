[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultipleValuesValueObjectAsyncFabricParameters

# Interface: IMultipleValuesValueObjectAsyncFabricParameters<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultipleValuesValueObjectAsyncFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Table of contents

### Properties

- [compareValues](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#comparevalues)
- [serializeValue](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#serializevalue)
- [validateValue](valueobject.interfaces.imultiplevaluesvalueobjectasyncfabricparameters.md#validatevalue)

## Properties

### compareValues

• **compareValues**: [`ICompareValuesAsync`](utilities.interfaces.icomparevaluesasync.md)<`V`, `V`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/multipleValuesValueObjectAsync.d.ts:11

___

### serializeValue

• **serializeValue**: `ISerializerAsync`<`V`, `string`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/multipleValuesValueObjectAsync.d.ts:12

___

### validateValue

• **validateValue**: `IValidator`<`V`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/multipleValuesValueObjectAsync.d.ts:13
