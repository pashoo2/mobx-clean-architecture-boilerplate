import {makeObservable, action, computed, observable} from 'mobx';
import {aggregateClassFabric} from '@pashoo2/clean-architecture-boilerplate/es/aggregates/fabrics';
import {
  IAggregateRootClassFabricParameters,
  IAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  TAggregateTypeMain,
} from '@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces';
import {Constructor} from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import {TIdentityValueObject} from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';

export function observableAggregateClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateTypeMain,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
>(
  parameters: IAggregateRootClassFabricParameters<Id, Type, E>
): Constructor<
  IAggregateRootImplementation<Id, Type, E>,
  [IBaseAggregateRootParameters<Id>]
> {
  class ObservableAggregateRootConstructor extends aggregateClassFabric<
    Id,
    Type,
    E
  >(parameters) {
    constructor(constructorParameters: IBaseAggregateRootParameters<Id>) {
      super(constructorParameters);
      makeObservable(this, {
        isDeleted: computed,
        delete: action,
      });
      // TODO - the private property might become a private (actually without an access from an outside) in future
      makeObservable(this as any, {
        __isDeleted: observable,
      });
    }
  }
  return ObservableAggregateRootConstructor;
}
