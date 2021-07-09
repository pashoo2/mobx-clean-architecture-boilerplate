[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](entities.md) / fabrics

# Namespace: fabrics

[entities](entities.md).fabrics

## Table of contents

### Functions

- [entityClassFabric](entities.fabrics.md#entityclassfabric)
- [entityClassFabricWithServices](entities.fabrics.md#entityclassfabricwithservices)
- [entityClassFabricWithServicesAndUtilities](entities.fabrics.md#entityclassfabricwithservicesandutilities)
- [entityClassWithDeleteMethodAndServicesFabric](entities.fabrics.md#entityclasswithdeletemethodandservicesfabric)
- [entityClassWithDeleteMethodFabric](entities.fabrics.md#entityclasswithdeletemethodfabric)
- [entityClassWithDeleteMethodServicesAndUtilitiesFabric](entities.fabrics.md#entityclasswithdeletemethodservicesandutilitiesfabric)
- [runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric](entities.fabrics.md#runtestentityclasswithdeletemethodservicesandutilitiesfabric)
- [runTestsForEntityClassFabricWithServicesAndUtilities](entities.fabrics.md#runtestsforentityclassfabricwithservicesandutilities)

## Functions

### entityClassFabric

▸ **entityClassFabric**<`Id`, `Type`, `E`\>(`parameters`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

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

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassFabric/entityClassFabric.d.ts:4

___

### entityClassFabricWithServices

▸ **entityClassFabricWithServices**<`Id`, `Type`, `E`\>(`parameters`, `services`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

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

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassFabricWithServices/entityClassFabricWithServices.d.ts:4

___

### entityClassFabricWithServicesAndUtilities

▸ **entityClassFabricWithServicesAndUtilities**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

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

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassFabricWithServicesAndUtilities/entityClassFabricWithServicesAndUtilities.d.ts:5

___

### entityClassWithDeleteMethodAndServicesFabric

▸ **entityClassWithDeleteMethodAndServicesFabric**<`Id`, `Type`, `E`\>(`parameters`, `services`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

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

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassWithDeleteMethodAndServicesFabric/entityClassWithDeleteMethodAndServicesFabric.d.ts:4

___

### entityClassWithDeleteMethodFabric

▸ **entityClassWithDeleteMethodFabric**<`Id`, `Type`, `E`\>(`parameters`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

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

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.d.ts:4

___

### entityClassWithDeleteMethodServicesAndUtilitiesFabric

▸ **entityClassWithDeleteMethodServicesAndUtilitiesFabric**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

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

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric.d.ts:5

___

### runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric

▸ **runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric**<`Id`, `Type`, `E`\>(`entityClassFabricWithServicesAndUtilities`, `testName?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends ``"entity____entity_type"`` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityClassFabricWithServicesAndUtilities` | (`parameters`: [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\>, `services`: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>, `utilities`: `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\>) => `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\> |
| `testName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric.runTest.d.ts:6

___

### runTestsForEntityClassFabricWithServicesAndUtilities

▸ **runTestsForEntityClassFabricWithServicesAndUtilities**<`Id`, `Type`, `E`\>(`entityClassFabricWithServicesAndUtilities`, `testName?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends ``"entity____entity_type"`` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityClassFabricWithServicesAndUtilities` | (`parameters`: [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\>, `services`: [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>, `utilities`: `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\>) => `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\> |
| `testName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassFabricWithServicesAndUtilities/entityClassFabricWithServicesAndUtilities.runTest.d.ts:6
