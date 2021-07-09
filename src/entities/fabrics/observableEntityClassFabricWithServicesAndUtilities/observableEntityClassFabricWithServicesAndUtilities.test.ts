import {runTestsForEntityClassFabricWithServicesAndUtilities} from '@pashoo2/clean-architecture-boilerplate/es/entities/fabrics/entityClassFabricWithServicesAndUtilities/entityClassFabricWithServicesAndUtilities.runTest';
import {
  IBaseEntityServices,
  IEntityImplementation,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/interfaces';
import {observableEntityClassFabricWithServicesAndUtilities} from './observableEntityClassFabricWithServicesAndUtilities';
import {getMockDomainEventBus} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/services/identifiers.mock';
import {ENTITY_TYPE_STUB} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/entityType.stub';
import {IBaseEntityAbstractClassImplementationUtitlities} from '@pashoo2/clean-architecture-boilerplate/es/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/valueObjects.mock';
import {
  compareEntitiesIdentitiesUtility,
  compareEntitiesTypesUtility,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations';
import {isComputedProp, isAction, autorun} from 'mobx';

describe('observableEntityClassFabricWithServicesAndUtilities', () => {
  describe('general tests', () => {
    runTestsForEntityClassFabricWithServicesAndUtilities(
      observableEntityClassFabricWithServicesAndUtilities
    );
  });

  describe('Test properties and methods wrapped up by Mobx', () => {
    let entityImplementation: IEntityImplementation<any, any, any>;

    beforeEach(() => {
      const services: IBaseEntityServices<any> = {
        domainEventBus: getMockDomainEventBus(),
        generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
      };
      const compareEntitiesTypes = jest.fn(compareEntitiesTypesUtility);
      const compareEntitiesIdentities = jest.fn(
        compareEntitiesIdentitiesUtility
      );
      const utilities: IBaseEntityAbstractClassImplementationUtitlities<
        any,
        any
      > = {
        compareEntitiesTypes,
        compareEntitiesIdentities,
      };
      const validateInstance = jest.fn(() => {});
      const getTransferableProps = jest.fn(() => {
        return {} as any;
      }) as any;

      class TestClass extends observableEntityClassFabricWithServicesAndUtilities(
        {
          type: ENTITY_TYPE_STUB,
          getTransferableProps,
          validateInstance,
        },
        services,
        utilities
      ) {}
      entityImplementation = new TestClass({
        id: new SimpleIdentityValueObjectClassMock(
          UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
        ),
        isDeleted: false,
      });
    });
    test('"isDelete" property should be an observable', () => {
      expect(isComputedProp(entityImplementation, 'isDeleted')).toBe(true);
    });
    test('The protected "_delete" method should be an action', () => {
      expect(isAction((entityImplementation as any)._delete)).toBe(true);
    });
    test('"isDelete" property should be changed by the protected method "_delete" method and cause reactions on that changing', () => {
      let isEntityDeleted = false;
      expect(entityImplementation.isDeleted).toBe(false);
      autorun(() => {
        isEntityDeleted = entityImplementation.isDeleted;
      });
      expect(isEntityDeleted).toBe(false);
      expect(() => {
        (entityImplementation as any)._delete();
      }).not.toThrow();
      expect(isEntityDeleted).toBe(true);
    });
  });
});
