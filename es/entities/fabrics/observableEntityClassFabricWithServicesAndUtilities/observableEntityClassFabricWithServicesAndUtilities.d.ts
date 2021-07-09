import { TEntityTypeMain, IBaseEntityEventsList, IEntityImplementation } from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import { TIdentityValueObject } from '@pashoo2/clean-architecture-boilerplate/es/valueObjects/interfaces';
import { IEntityFabricParameters, IBaseEntityServices } from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import { IBaseEntityAbstractClassImplementationUtitlities } from '@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import { Constructor } from '@pashoo2/clean-architecture-boilerplate/es/interfaces/classes';
import { IBaseEntityParameters } from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
export declare function observableEntityClassFabricWithServicesAndUtilities<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>>(parameters: IEntityFabricParameters<Id, Type>, services: IBaseEntityServices<E>, utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>): Constructor<IEntityImplementation<Id, Type, E>, [
    IBaseEntityParameters<Id>
]>;
