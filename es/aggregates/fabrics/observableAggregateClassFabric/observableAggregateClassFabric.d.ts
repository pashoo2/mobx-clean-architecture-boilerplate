import { IAggregateRootClassFabricParameters, IAggregateRootImplementation, IBaseAggregateRootEventsList, IBaseAggregateRootParameters, TAggregateTypeMain } from '@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces';
import { Constructor } from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import { TIdentityValueObject } from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';
export declare function observableAggregateClassFabric<Id extends TIdentityValueObject, Type extends TAggregateTypeMain, E extends IBaseAggregateRootEventsList<Id, Type> = IBaseAggregateRootEventsList<Id, Type>>(parameters: IAggregateRootClassFabricParameters<Id, Type, E>): Constructor<IAggregateRootImplementation<Id, Type, E>, [
    IBaseAggregateRootParameters<Id>
]>;
