[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [valueObject](../modules/valueobject.md) / [interfaces](../modules/valueobject.interfaces.md) / IMultiValuesValueObjectAsync

# Interface: IMultiValuesValueObjectAsync<V\>

[valueObject](../modules/valueobject.md).[interfaces](../modules/valueobject.interfaces.md).IMultiValuesValueObjectAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`IMultiValuesValueObjectValue`](valueobject.interfaces.imultivaluesvalueobjectvalue.md) |

## Hierarchy

- `Omit`<[`IMultiValuesValueObjectBase`](valueobject.interfaces.imultivaluesvalueobjectbase.md)<`V`\>, ``"serialize"`` \| ``"equalsTo"``\>

- `ISerializableAsync`<`string`\>

- `IComparableAsync`<[`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> \| [`IMultiValuesValueObjectAsync`](valueobject.interfaces.imultivaluesvalueobjectasync.md)<`V`\>\>

  ↳ **`IMultiValuesValueObjectAsync`**

## Implemented by

- [`MultiValuesValueObjectAsync`](../classes/valueobject.interfaces.abstractclasses.multivaluesvalueobjectasync.md)

## Table of contents

### Properties

- [value](valueobject.interfaces.imultivaluesvalueobjectasync.md#value)

### Methods

- [equalsTo](valueobject.interfaces.imultivaluesvalueobjectasync.md#equalsto)
- [serialize](valueobject.interfaces.imultivaluesvalueobjectasync.md#serialize)

## Properties

### value

• `Readonly` **value**: `V`

#### Inherited from

Omit.value

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces/multipleValuesValueObjectBase.d.ts:11

## Methods

### equalsTo

▸ **equalsTo**(`anotherValue`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IMultiValuesValueObjectAsync`](valueobject.interfaces.imultivaluesvalueobjectasync.md)<`V`\> \| [`IMultiValuesValueObject`](valueobject.interfaces.imultivaluesvalueobject.md)<`V`\> |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IComparableAsync.equalsTo

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/comparison.d.ts:5

___

### serialize

▸ **serialize**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

ISerializableAsync.serialize

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/interfaces/serialization.d.ts:12
