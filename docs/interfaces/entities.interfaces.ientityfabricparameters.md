[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityFabricParameters

# Interface: IEntityFabricParameters<EntityId, EntityType\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |

## Table of contents

### Properties

- [getTransferableProps](entities.interfaces.ientityfabricparameters.md#gettransferableprops)
- [type](entities.interfaces.ientityfabricparameters.md#type)
- [validateInstance](entities.interfaces.ientityfabricparameters.md#validateinstance)

## Properties

### getTransferableProps

• **getTransferableProps**: [`IGetTransferablePropertiesOfEntity`](entities.interfaces.igettransferablepropertiesofentity.md)<`EntityId`, `EntityType`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entityFabric.d.ts:16

___

### type

• **type**: `EntityType`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entityFabric.d.ts:14

___

### validateInstance

• **validateInstance**: [`IValidateEntity`](entities.interfaces.ivalidateentity.md)<`EntityId`, `EntityType`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/interfaces/entityFabric.d.ts:15
