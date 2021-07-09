[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / mobxUseCases

# Namespace: mobxUseCases

## Table of contents

### Interfaces

- [IMobxUseCaseAsyncFabric](../interfaces/mobxusecases.imobxusecaseasyncfabric.md)
- [IMobxUseCaseSyncFabric](../interfaces/mobxusecases.imobxusecasesyncfabric.md)
- [IUseCaseGeneratorFunction](../interfaces/mobxusecases.iusecasegeneratorfunction.md)

### Functions

- [mobxUseCaseAsyncFabric](mobxusecases.md#mobxusecaseasyncfabric)
- [mobxUseCaseSyncFabric](mobxusecases.md#mobxusecasesyncfabric)

## Functions

### mobxUseCaseAsyncFabric

▸ **mobxUseCaseAsyncFabric**<`P`, `R`\>(`useCaseGeneratorFunction`): [`IUseCaseAsync`](../interfaces/usecases.interfaces.iusecaseasync.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IUseCaseParameters`](../interfaces/usecases.interfaces.iusecaseparameters.md)<`P`\> |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `useCaseGeneratorFunction` | [`IUseCaseGeneratorFunction`](../interfaces/mobxusecases.iusecasegeneratorfunction.md)<`P`, `R`\> |

#### Returns

[`IUseCaseAsync`](../interfaces/usecases.interfaces.iusecaseasync.md)<`R`\>

#### Defined in

[src/useCases/fabrics/mobxUseCaseAsyncFabric/mobxUseCaseAsyncFabric.ts:8](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/useCases/fabrics/mobxUseCaseAsyncFabric/mobxUseCaseAsyncFabric.ts#L8)

___

### mobxUseCaseSyncFabric

▸ **mobxUseCaseSyncFabric**<`R`\>(`useCaseSync`): [`IUseCaseSync`](../interfaces/usecases.interfaces.iusecasesync.md)<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `useCaseSync` | [`IUseCaseSync`](../interfaces/usecases.interfaces.iusecasesync.md)<`R`\> |

#### Returns

[`IUseCaseSync`](../interfaces/usecases.interfaces.iusecasesync.md)<`R`\>

#### Defined in

[src/useCases/fabrics/mobxUseCaseSyncFabric/mobxUseCaseSyncFabric.ts:4](https://github.com/pashoo2/mobx-clean-architecture-boilerplate/blob/2abcc7c/src/useCases/fabrics/mobxUseCaseSyncFabric/mobxUseCaseSyncFabric.ts#L4)
