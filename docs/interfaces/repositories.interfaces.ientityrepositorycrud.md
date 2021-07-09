[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [repositories](../modules/repositories.md) / [interfaces](../modules/repositories.interfaces.md) / IEntityRepositoryCRUD

# Interface: IEntityRepositoryCRUD<Entity\>

[repositories](../modules/repositories.md).[interfaces](../modules/repositories.interfaces.md).IEntityRepositoryCRUD

## Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`IEntity`](entities.interfaces.ientity.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\> |

## Table of contents

### Methods

- [create](repositories.interfaces.ientityrepositorycrud.md#create)
- [deleteById](repositories.interfaces.ientityrepositorycrud.md#deletebyid)
- [readById](repositories.interfaces.ientityrepositorycrud.md#readbyid)
- [update](repositories.interfaces.ientityrepositorycrud.md#update)

## Methods

### create

▸ **create**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Entity` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/repositories/interfaces/repository.d.ts:4

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/repositories/interfaces/repository.d.ts:7

___

### readById

▸ **readById**(`id`): `Promise`<`undefined` \| `Entity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |

#### Returns

`Promise`<`undefined` \| `Entity`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/repositories/interfaces/repository.d.ts:5

___

### update

▸ **update**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Entity` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/repositories/interfaces/repository.d.ts:6
