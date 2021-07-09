import {makeObservable, computed, observable, action} from 'mobx';
import {
  TEntityTypeMain,
  IBaseEntityEventsList,
  IEntityImplementation,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import {TIdentityValueObject} from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';
import {
  IEntityFabricParameters,
  IBaseEntityServices,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import {IBaseEntityAbstractClassImplementationUtitlities} from '@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {Constructor} from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import {IBaseEntityParameters} from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import {entityClassFabricWithServicesAndUtilities} from '@pashoo2/clean-architecture-boilerplate/es/entities/fabrics';

export function observableEntityClassFabricWithServicesAndUtilities<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
): Constructor<
  IEntityImplementation<Id, Type, E>,
  [IBaseEntityParameters<Id>]
> {
  class ObservableEntityConstructor extends entityClassFabricWithServicesAndUtilities<
    Id,
    Type,
    E
  >(parameters, services, utilities) {
    constructor(parameters: IBaseEntityParameters<Id>) {
      super(parameters);
      makeObservable(this, {
        isDeleted: computed,
      });
      // TODO - the private property might become a private (actually without an access from an outside) in future
      makeObservable(this as any, {
        __isDeleted: observable,
        _delete: action,
      });
    }
  }
  return ObservableEntityConstructor;
}
