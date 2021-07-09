import { IUseCaseAsync, IUseCaseParameters } from '@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces';
import { IUseCaseGeneratorFunction } from '../../interfaces/fabrics';
export declare function mobxUseCaseAsyncFabric<P extends IUseCaseParameters, R>(useCaseGeneratorFunction: IUseCaseGeneratorFunction<P, R>): IUseCaseAsync<R>;
