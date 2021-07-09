import {action} from 'mobx';
import {IUseCaseSync} from '@pashoo2/clean-architecture-boilerplate/es/useCases/interfaces';

export function mobxUseCaseSyncFabric<R>(
  useCaseSync: IUseCaseSync<R>
): IUseCaseSync<R> {
  return action(useCaseSync);
}
