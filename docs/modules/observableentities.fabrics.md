[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [observableEntities](observableentities.md) / fabrics

# Namespace: fabrics

[observableEntities](observableentities.md).fabrics

## Table of contents

### Functions

- [observableEntityClassFabricWithServicesAndUtilities](observableentities.fabrics.md#observableentityclassfabricwithservicesandutilities)
- [observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric](observableentities.fabrics.md#observableentityclasswithdeletemethodservicesandutilitiesfabric)

## Functions

### observableEntityClassFabricWithServicesAndUtilities

▸ **observableEntityClassFabricWithServicesAndUtilities**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `utilities` | `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/observableEntityClassFabricWithServicesAndUtilities/observableEntityClassFabricWithServicesAndUtilities.ts:17](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/entities/fabrics/observableEntityClassFabricWithServicesAndUtilities/observableEntityClassFabricWithServicesAndUtilities.ts#L17)

___

### observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric

▸ **observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `utilities` | `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric/observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric.ts:15](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/entities/fabrics/observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric/observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric.ts#L15)
