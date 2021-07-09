[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](entities.md) / [utilities](entities.utilities.md) / implementations

# Namespace: implementations

[entities](entities.md).[utilities](entities.utilities.md).implementations

## Table of contents

### Functions

- [compareEntitiesIdentitiesUtility](entities.utilities.implementations.md#compareentitiesidentitiesutility)
- [compareEntitiesTypesUtility](entities.utilities.implementations.md#compareentitiestypesutility)
- [getEntityTypeByString](entities.utilities.implementations.md#getentitytypebystring)
- [isEntityMainType](entities.utilities.implementations.md#isentitymaintype)
- [isEntityTypeStringContainsCorrectCharacters](entities.utilities.implementations.md#isentitytypestringcontainscorrectcharacters)
- [validateEntityBasic](entities.utilities.implementations.md#validateentitybasic)
- [validateEntityObject](entities.utilities.implementations.md#validateentityobject)
- [validateEntityType](entities.utilities.implementations.md#validateentitytype)

## Functions

### compareEntitiesIdentitiesUtility

▸ **compareEntitiesIdentitiesUtility**(`firstId`, `secondId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `secondId` | [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/compareEntitiesIdentities.d.ts:2

___

### compareEntitiesTypesUtility

▸ **compareEntitiesTypesUtility**(`firstEntityType`, `secondEntityType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstEntityType` | `string` |
| `secondEntityType` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/compareEntitiesTypes.d.ts:1

___

### getEntityTypeByString

▸ **getEntityTypeByString**<`T`\>(`stringValue`): [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `String` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringValue` | `T` |

#### Returns

[`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)<`T` extends `String` ? `ReturnType`<`T`[``"toString"``]\> : `T`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/getEntityTypeByString.d.ts:2

___

### isEntityMainType

▸ **isEntityMainType**(`typeValue`): typeValue is \`entity\_\_\_\_${string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeValue` | `any` |

#### Returns

typeValue is \`entity\_\_\_\_${string}\`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/typeGuards.d.ts:3

___

### isEntityTypeStringContainsCorrectCharacters

▸ **isEntityTypeStringContainsCorrectCharacters**(`entityTypeString`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityTypeString` | `string` \| `String` |

#### Returns

`boolean`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/typeGuards.d.ts:2

___

### validateEntityBasic

▸ **validateEntityBasic**<`EntityId`, `EntityType`\>(`entity`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends \`entity\_\_\_\_${string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/validateEntityBasic.d.ts:5

___

### validateEntityObject

▸ **validateEntityObject**<`EntityId`, `EntityType`\>(`entity`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends \`entity\_\_\_\_${string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`IEntity`](../interfaces/entities.interfaces.ientity.md)<`EntityId`, `EntityType`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/validateEntityBasic.d.ts:4

___

### validateEntityType

▸ **validateEntityType**(`entityType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityType` | [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain) |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations/validateEntityBasic.d.ts:3
