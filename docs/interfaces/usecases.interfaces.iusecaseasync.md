[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseAsync

# Interface: IUseCaseAsync<R\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseAsync

## Type parameters

| Name |
| :------ |
| `R` |

## Hierarchy

- [`IUseCaseSync`](usecases.interfaces.iusecasesync.md)<`Promise`<`R`\>\>

  ↳ **`IUseCaseAsync`**

## Callable

### IUseCaseAsync

▸ **IUseCaseAsync**(`parameters`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces/useCasesOuter.d.ts:5

### IUseCaseAsync

▸ **IUseCaseAsync**(`parameters`, `services`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `services` | [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces/useCasesOuter.d.ts:8
