import {
  IUseCaseAsync,
  IUseCaseParameters,
} from '@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces';
import {flow} from 'mobx';
import {IUseCaseGeneratorFunction} from '../../interfaces/fabrics';

export function mobxUseCaseAsyncFabric<P extends IUseCaseParameters, R>(
  useCaseGeneratorFunction: IUseCaseGeneratorFunction<P, R>
): IUseCaseAsync<R> {
  return flow<R, [P]>(useCaseGeneratorFunction) as IUseCaseAsync<R>;
}
