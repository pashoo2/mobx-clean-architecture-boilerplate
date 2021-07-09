[@pashoo2/mobx-clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](usecases.md) / interfaces

# Namespace: interfaces

[useCases](usecases.md).interfaces

## Table of contents

### Interfaces

- [IUseCaseAsync](../interfaces/usecases.interfaces.iusecaseasync.md)
- [IUseCaseParameters](../interfaces/usecases.interfaces.iusecaseparameters.md)
- [IUseCaseServices](../interfaces/usecases.interfaces.iusecaseservices.md)
- [IUseCaseSync](../interfaces/usecases.interfaces.iusecasesync.md)
- [IUseCaseWithEntitiesConstructorsAsync](../interfaces/usecases.interfaces.iusecasewithentitiesconstructorsasync.md)
- [IUseCaseWithEntitiesConstructorsSync](../interfaces/usecases.interfaces.iusecasewithentitiesconstructorssync.md)

### Type aliases

- [TUseCaseEntitiesClasses](usecases.interfaces.md#tusecaseentitiesclasses)

## Type aliases

### TUseCaseEntitiesClasses

Ƭ **TUseCaseEntitiesClasses**<`T`, `Id`\>: { [key in T]: BaseEntityAbstractClass<Id, T, TBaseEntityEventsListCommonEvents<Id, T\>\>}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TEntityTypeMain`](entities.interfaces.md#tentitytypemain)[`TEntityTypeMain`](entities.interfaces.md#tentitytypemain) |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject)[`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |

#### Defined in

node_modules/@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces/useCasesImplementations.d.ts:6
