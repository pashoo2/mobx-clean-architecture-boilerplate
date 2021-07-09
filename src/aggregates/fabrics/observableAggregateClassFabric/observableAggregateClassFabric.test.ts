import {autorun, isAction, isComputedProp} from 'mobx';
import {TAggregateTestClassEventsList} from '@pashoo2/clean-architecture-boilerplate/es/aggregates/abstractClasses/aggregateRootAbstractClass.test';
import {runTestsForAggregateClassFabric} from '@pashoo2/clean-architecture-boilerplate/es/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest';
import {
  IAggregateRootImplementation,
  IBaseAggregateRootServices,
} from '@pashoo2/clean-architecture-boilerplate/es/aggregates/interfaces';
import {serviceGeneratorIdentifierUnique} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/services/identifiers.mock';
import {getMockDomainEventBus} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/services/domainEventsBus.mock';
import {AGGREGATE_TYPE_STUB} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/entityType.stub';
import {
  compareEntitiesIdentitiesUtility,
  compareEntitiesTypesUtility,
} from '@pashoo2/clean-architecture-boilerplate/es/entities/utilities/implementations';
import {
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@pashoo2/clean-architecture-boilerplate/es/__mock__/valueObjects.mock';

import {observableAggregateClassFabric} from './observableAggregateClassFabric';

describe('observableAggregateClassFabric', () => {
  describe('general tests', () => {
    runTestsForAggregateClassFabric(observableAggregateClassFabric, '');
  });

  describe('Test properties and methods wrapped up by Mobx', () => {
    let aggregateRootImplementation: IAggregateRootImplementation<
      any,
      any,
      any
    >;

    beforeEach(() => {
      const services: IBaseAggregateRootServices<TAggregateTestClassEventsList> =
        {
          domainEventBus:
            getMockDomainEventBus<TAggregateTestClassEventsList>(),
          generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
        };
      const validateInstance = jest.fn(() => {});
      const getTransferableProps = jest.fn(() => {
        return {} as any;
      }) as any;
      const compareEntitiesTypes = jest.fn(compareEntitiesTypesUtility);
      const compareEntitiesIdentities = jest.fn(
        compareEntitiesIdentitiesUtility
      );
      class TestClass extends observableAggregateClassFabric({
        type: AGGREGATE_TYPE_STUB,
        services,
        validateInstance,
        getTransferableProps,
        compareEntitiesTypes,
        compareEntitiesIdentities,
      }) {}
      aggregateRootImplementation = new TestClass({
        id: new SimpleIdentityValueObjectClassMock(
          UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
        ),
        isDeleted: false,
      });
    });
    test('"isDelete" property should be an observable', () => {
      expect(isComputedProp(aggregateRootImplementation, 'isDeleted')).toBe(
        true
      );
    });
    test('"delete" method should be an action', () => {
      expect(isAction(aggregateRootImplementation.delete)).toBe(true);
    });
    test('"isDelete" property should be changed by "delete" method and cause reactions on that changing', () => {
      let isEntityDeleted = false;
      expect(aggregateRootImplementation.isDeleted).toBe(false);
      autorun(() => {
        isEntityDeleted = aggregateRootImplementation.isDeleted;
      });
      expect(isEntityDeleted).toBe(false);
      expect(() => {
        aggregateRootImplementation.delete();
      }).not.toThrow();
      expect(isEntityDeleted).toBe(true);
    });
  });
});
