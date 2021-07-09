import { IBaseEntityAbstractClassImplementationUtitlities } from '@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices, IEntityFabricParameters, IEntityImplementationWithDeleteMethod, TEntityTypeMain } from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import { Constructor } from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import { TIdentityValueObject } from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';
export declare function observableEntityClassWithDeleteMethodServicesAndUtilitiesFabric<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>>(parameters: IEntityFabricParameters<Id, Type>, services: IBaseEntityServices<E>, utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>): Constructor<IEntityImplementationWithDeleteMethod<Id, Type, E>, [
    IBaseEntityParameters<Id>
]>;
