import {makeObservable, action, computed, observable} from 'mobx';
import {IBaseEntityAbstractClassImplementationUtitlities} from '@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
  TEntityTypeMain,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import {Constructor} from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import {TIdentityValueObject} from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';
import {entityClassWithDeleteMethodServicesAndUtilitiesFabric} from '@pashoo2/clean-architecture-boilerplate/es/entities/fabrics';

export function observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
): Constructor<
  IEntityImplementationWithDeleteMethod<Id, Type, E>,
  [IBaseEntityParameters<Id>]
> {
  class ObservableEntityConstructorWithDeleteMethod extends entityClassWithDeleteMethodServicesAndUtilitiesFabric<
    Id,
    Type,
    E
  >(parameters, services, utilities) {
    constructor(parameters: IBaseEntityParameters<Id>) {
      super(parameters);
      makeObservable(this, {
        isDeleted: computed,
        $delete: action,
      });
      // TODO - the private property might become a private (actually without an access from an outside) in future
      makeObservable(this as any, {
        __isDeleted: observable,
      });
    }
  }
  return ObservableEntityConstructorWithDeleteMethod;
}
