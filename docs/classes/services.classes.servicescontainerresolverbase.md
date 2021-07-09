[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [classes](../modules/services.classes.md) / ServicesContainerResolverBase

# Class: ServicesContainerResolverBase<L\>

[services](../modules/services.md).[classes](../modules/services.classes.md).ServicesContainerResolverBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Implements

- `IServicesContainerResolver`<`L`\>

## Table of contents

### Constructors

- [constructor](services.classes.servicescontainerresolverbase.md#constructor)

### Properties

- [\_servicesContainer](services.classes.servicescontainerresolverbase.md#_servicescontainer)
- [\_servicesContainerDefault](services.classes.servicescontainerresolverbase.md#_servicescontainerdefault)

### Methods

- [\_getServicesContainerOrDefaultOrUndefined](services.classes.servicescontainerresolverbase.md#_getservicescontainerordefaultorundefined)
- [getServicesContainer](services.classes.servicescontainerresolverbase.md#getservicescontainer)
- [setServicesContainer](services.classes.servicescontainerresolverbase.md#setservicescontainer)

## Constructors

### constructor

• **new ServicesContainerResolverBase**<`L`\>(`_servicesContainerDefault?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_servicesContainerDefault?` | [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\> |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:5

## Properties

### \_servicesContainer

• `Protected` **\_servicesContainer**: `undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:5

___

### \_servicesContainerDefault

• `Protected` `Optional` `Readonly` **\_servicesContainerDefault**: [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:4

## Methods

### \_getServicesContainerOrDefaultOrUndefined

▸ `Protected` **_getServicesContainerOrDefaultOrUndefined**(): `undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Returns

`undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:9

___

### getServicesContainer

▸ **getServicesContainer**(): [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Returns

[`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Implementation of

IServicesContainerResolver.getServicesContainer

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:7

___

### setServicesContainer

▸ **setServicesContainer**(`servicesContainer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `servicesContainer` | [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\> |

#### Returns

`void`

#### Implementation of

IServicesContainerResolver.setServicesContainer

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.d.ts:8
