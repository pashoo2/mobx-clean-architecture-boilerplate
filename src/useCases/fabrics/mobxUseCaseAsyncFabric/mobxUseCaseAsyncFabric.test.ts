import {IObservableArray, observable, autorun} from 'mobx';
import {mobxUseCaseAsyncFabric} from './mobxUseCaseAsyncFabric';

describe('mobxUseCaseAsyncFabric', () => {
  it('should return a function', () => {
    expect(mobxUseCaseAsyncFabric(function* () {})).toEqual(
      expect.any(Function)
    );
  });
  it('should return a function, that will resulted with a Promise', () => {
    expect(mobxUseCaseAsyncFabric(function* () {})({})).toEqual(
      expect.any(Promise)
    );
  });
  it('should return a function, that will resolved with the same result as a function passed as the argument', async () => {
    const expectedResult = 'expectedResult';
    await expect(
      mobxUseCaseAsyncFabric(function* () {
        yield Promise.resolve('something');
        return expectedResult;
      })({})
    ).resolves.toBe(expectedResult);
  });
  test('function passed as a parameter should affects observables and let them trigger outside observers', async () => {
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
    await expect(
      mobxUseCaseAsyncFabric(function* (parameters: {
        observableArray: IObservableArray;
      }) {
        yield Promise.resolve();
        parameters.observableArray.push(valueToPutIntoArray);
      })({
        observableArray: observableArrayArgument,
      })
    ).resolves.toBe(undefined);
    expect(isValueExpectedExistInArray).toBe(true);
  });
});
