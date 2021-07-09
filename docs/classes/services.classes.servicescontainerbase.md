[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [classes](../modules/services.classes.md) / ServicesContainerBase

# Class: ServicesContainerBase<L\>

[services](../modules/services.md).[classes](../modules/services.classes.md).ServicesContainerBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Hierarchy

- [`ServicesContainerAbstractClass`](services.interfaces.common.servicescontainerabstractclass.md)<`L`\>

  ↳ **`ServicesContainerBase`**

## Implements

- [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

## Table of contents

### Constructors

- [constructor](services.classes.servicescontainerbase.md#constructor)

### Properties

- [\_\_services](services.classes.servicescontainerbase.md#__services)
- [\_services](services.classes.servicescontainerbase.md#_services)

### Methods

- [getBoundaryServices](services.classes.servicescontainerbase.md#getboundaryservices)
- [getServices](services.classes.servicescontainerbase.md#getservices)
- [registerServices](services.classes.servicescontainerbase.md#registerservices)

## Constructors

### constructor

• **new ServicesContainerBase**<`L`\>(`__services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__services` | `L` |

#### Overrides

[ServicesContainerAbstractClass](services.interfaces.common.servicescontainerabstractclass.md).[constructor](services.interfaces.common.servicescontainerabstractclass.md#constructor)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerBase/servicesContainerBase.d.ts:6

## Properties

### \_\_services

• `Private` **\_\_services**: `any`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerBase/servicesContainerBase.d.ts:6

___

### \_services

• `Protected` **\_services**: `L`

#### Inherited from

[ServicesContainerAbstractClass](services.interfaces.common.servicescontainerabstractclass.md).[_services](services.interfaces.common.servicescontainerabstractclass.md#_services)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:4

## Methods

### getBoundaryServices

▸ **getBoundaryServices**<`B`\>(`boundaryName`): `L`[`B`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundaryName` | `B` |

#### Returns

`L`[`B`]

#### Implementation of

[IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md).[getBoundaryServices](../interfaces/services.interfaces.common.iservicescontainer.md#getboundaryservices)

#### Overrides

[ServicesContainerAbstractClass](services.interfaces.common.servicescontainerabstractclass.md).[getBoundaryServices](services.interfaces.common.servicescontainerabstractclass.md#getboundaryservices)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerBase/servicesContainerBase.d.ts:10

___

### getServices

▸ **getServices**(): `L`

#### Returns

`L`

#### Implementation of

[IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md).[getServices](../interfaces/services.interfaces.common.iservicescontainer.md#getservices)

#### Overrides

[ServicesContainerAbstractClass](services.interfaces.common.servicescontainerabstractclass.md).[getServices](services.interfaces.common.servicescontainerabstractclass.md#getservices)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerBase/servicesContainerBase.d.ts:9

___

### registerServices

▸ **registerServices**(`updatedServices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updatedServices` | `DeepPartial`<`L`\> |

#### Returns

`void`

#### Implementation of

[IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md).[registerServices](../interfaces/services.interfaces.common.iservicescontainer.md#registerservices)

#### Overrides

[ServicesContainerAbstractClass](services.interfaces.common.servicescontainerabstractclass.md).[registerServices](services.interfaces.common.servicescontainerabstractclass.md#registerservices)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerBase/servicesContainerBase.d.ts:8
