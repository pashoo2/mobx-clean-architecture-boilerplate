import {observable, autorun} from 'mobx';
import {mobxUseCaseSyncFabric} from './mobxUseCaseSyncFabric';
import {IUseCaseParameters} from '@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces';

describe('mobxUseCaseSyncFabric', () => {
  it('should return a function', () => {
    expect(mobxUseCaseSyncFabric(() => {})).toEqual(expect.any(Function));
  });
  it('should return a function, that will resolved with the same result as a function passed as the argument', () => {
    const expectedResult = 'expectedResult';
    expect(
      mobxUseCaseSyncFabric(() => {
        return expectedResult;
      })({})
    ).toEqual(expectedResult);
  });
  test('function passed as a parameter should affects observables and let them trigger outside observers', () => {
    const observableArrayArgument = observable([] as number[]);
    const valueToPutIntoArray = 3;
    let isValueExpectedExistInArray = false;
    expect(observableArrayArgument).not.toEqual(
      expect.arrayContaining([valueToPutIntoArray])
    );
    autorun(() => {
      if (observableArrayArgument.includes(valueToPutIntoArray)) {
        isValueExpectedExistInArray = true;
      }
    });
    expect(isValueExpectedExistInArray).toBe(false);
    expect(
      mobxUseCaseSyncFabric((parameters: IUseCaseParameters) => {
        parameters.observableArray.push(valueToPutIntoArray);
      })({
        observableArray: observableArrayArgument,
      })
    ).toBe(undefined);
    expect(isValueExpectedExistInArray).toBe(true);
  });
});
