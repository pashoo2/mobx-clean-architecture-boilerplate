[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [mobxUseCases](../modules/mobxusecases.md) / IMobxUseCaseAsyncFabric

# Interface: IMobxUseCaseAsyncFabric<P, R\>

[mobxUseCases](../modules/mobxusecases.md).IMobxUseCaseAsyncFabric

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `R` | `R` |

## Callable

### IMobxUseCaseAsyncFabric

▸ **IMobxUseCaseAsyncFabric**(`useCaseGeneratorFunction`): [`IUseCaseAsync`](usecases.interfaces.iusecaseasync.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `useCaseGeneratorFunction` | [`IUseCaseGeneratorFunction`](mobxusecases.iusecasegeneratorfunction.md)<`P`, `R`\> |

#### Returns

[`IUseCaseAsync`](usecases.interfaces.iusecaseasync.md)<`R`\>

#### Defined in

[src/useCases/interfaces/fabrics.ts:15](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/useCases/interfaces/fabrics.ts#L15)
