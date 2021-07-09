[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](utilities.md) / [utilities](utilities.utilities-1.md) / objects

# Namespace: objects

[utilities](utilities.md).[utilities](utilities.utilities-1.md).objects

## Table of contents

### Functions

- [copyOwnPropertiesIntoTarget](utilities.utilities-1.objects.md#copyownpropertiesintotarget)
- [makeObjectReadOnly](utilities.utilities-1.objects.md#makeobjectreadonly)
- [mergeDeep](utilities.utilities-1.objects.md#mergedeep)

## Functions

### copyOwnPropertiesIntoTarget

▸ **copyOwnPropertiesIntoTarget**<`T`, `B`\>(`target`, `baseObject`): target is T & B

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `B` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `baseObject` | `B` |

#### Returns

target is T & B

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/objects/copyOwnProperties.d.ts:1

___

### makeObjectReadOnly

▸ **makeObjectReadOnly**<`O`\>(`o`): `Readonly`<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `O` |

#### Returns

`Readonly`<`O`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/objects/makeObjectReadOnly.d.ts:1

___

### mergeDeep

▸ `Const` **mergeDeep**<`T`\>(...`objects`): `TUnionToIntersection`<`T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IObject`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | `T` |

#### Returns

`TUnionToIntersection`<`T`[`number`]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/utilities/implementations/objects/mergeDeep.d.ts:8
