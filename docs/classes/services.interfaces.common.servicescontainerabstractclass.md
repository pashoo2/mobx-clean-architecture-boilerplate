[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [interfaces](../modules/services.interfaces.md) / [common](../modules/services.interfaces.common.md) / ServicesContainerAbstractClass

# Class: ServicesContainerAbstractClass<L\>

[interfaces](../modules/services.interfaces.md).[common](../modules/services.interfaces.common.md).ServicesContainerAbstractClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Hierarchy

- **`ServicesContainerAbstractClass`**

  ↳ [`ServicesContainerBase`](services.classes.servicescontainerbase.md)

## Implements

- [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

## Table of contents

### Constructors

- [constructor](services.interfaces.common.servicescontainerabstractclass.md#constructor)

### Properties

- [\_services](services.interfaces.common.servicescontainerabstractclass.md#_services)

### Methods

- [getBoundaryServices](services.interfaces.common.servicescontainerabstractclass.md#getboundaryservices)
- [getServices](services.interfaces.common.servicescontainerabstractclass.md#getservices)
- [registerServices](services.interfaces.common.servicescontainerabstractclass.md#registerservices)

## Constructors

### constructor

• **new ServicesContainerAbstractClass**<`L`\>(`_services`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_services` | `L` |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:4

## Properties

### \_services

• `Protected` **\_services**: `L`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:4

## Methods

### getBoundaryServices

▸ `Abstract` **getBoundaryServices**<`B`\>(`boundaryName`): `L`[`B`]

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

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:8

___

### getServices

▸ `Abstract` **getServices**(): `L`

#### Returns

`L`

#### Implementation of

[IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md).[getServices](../interfaces/services.interfaces.common.iservicescontainer.md#getservices)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:7

___

### registerServices

▸ `Abstract` **registerServices**(`services`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | `DeepPartial`<`L`\> |

#### Returns

`void`

#### Implementation of

[IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md).[registerServices](../interfaces/services.interfaces.common.iservicescontainer.md#registerservices)

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/abstractClasses/serviceContainerAbstractClass.d.ts:6
