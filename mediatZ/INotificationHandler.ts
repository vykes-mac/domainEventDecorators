
import { IDomainEventHandler } from './IDomainEventHandler';

export namespace INotificationHandler {
  type Constructor<T> = {
    new(...args: any[]): T;
    readonly prototype: T;
  }

  const implementations: Constructor<IDomainEventHandler>[] = [];
  export function GetImplementations(): Constructor<IDomainEventHandler>[] {
    return implementations;
   }
  export function Register<T extends Constructor<IDomainEventHandler>>(ctor: T) {
    implementations.push(ctor);
    return ctor;
  }
}