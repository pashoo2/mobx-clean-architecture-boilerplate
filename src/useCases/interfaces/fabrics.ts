import {
  IUseCaseAsync,
  IUseCaseParameters,
  IUseCaseSync,
} from '@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces';

export interface IMobxUseCaseSyncFabric<R> {
  (useCaseSync: IUseCaseSync<R>): IUseCaseSync<R>;
}

export interface IUseCaseGeneratorFunction<P extends IUseCaseParameters, R> {
  (useCaseParameters: P): Generator<any, R, any>;
}

export interface IMobxUseCaseAsyncFabric<P extends IUseCaseParameters, R> {
  (useCaseGeneratorFunction: IUseCaseGeneratorFunction<P, R>): IUseCaseAsync<R>;
}
