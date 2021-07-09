[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [interfaces](../modules/services.interfaces.md) / [common](../modules/services.interfaces.common.md) / IServicesContainer

# Interface: IServicesContainer<L\>

[interfaces](../modules/services.interfaces.md).[common](../modules/services.interfaces.common.md).IServicesContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Implemented by

- [`ServicesContainerAbstractClass`](../classes/services.interfaces.common.servicescontainerabstractclass.md)
- [`ServicesContainerBase`](../classes/services.classes.servicescontainerbase.md)

## Table of contents

### Methods

- [getBoundaryServices](services.interfaces.common.iservicescontainer.md#getboundaryservices)
- [getServices](services.interfaces.common.iservicescontainer.md#getservices)
- [registerServices](services.interfaces.common.iservicescontainer.md#registerservices)

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

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/common/servicesContainer.d.ts:6

___

### getServices

▸ **getServices**(): `L`

#### Returns

`L`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/common/servicesContainer.d.ts:5

___

### registerServices

▸ **registerServices**(`services`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | `DeepPartial`<`L`\> |

#### Returns

`void`

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/services/interfaces/common/servicesContainer.d.ts:4
