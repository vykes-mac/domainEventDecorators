import { DomainEvents } from "./DomainEvents";
import { IDomainEvent } from "./IDomainEvent";
import { IDomainEventHandler } from "./IDomainEventHandler";
//create notification handler decorator

export function NotificationHandler(event: IDomainEvent) {
  type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };

  return function<T extends Constructor<IDomainEventHandler<IDomainEvent>>>(
    target: T
  ) {
    //register domain event here
    DomainEvents.register(event, new target());
  };
}
