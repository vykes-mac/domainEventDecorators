import { IDomainEventHandler } from './IDomainEventHandler';
import { IMediatZ } from './IMediatZ';
import { IDomainEvent } from './IDomainEvent';

export abstract class MediatZ implements IMediatZ {
  public static domainEventHandlers: Map<string, IDomainEventHandler<IDomainEvent>[]> = new Map<string, IDomainEventHandler<IDomainEvent>[]>();

  public static Publish(event: IDomainEvent) {
    if(event === null) {
      throw new Error('event cannot be null');
    }
 
     MediatZ.PublishEvent(event);
  }

  private static PublishEvent(event: IDomainEvent) {
    const name = event.constructor.name;
    const handlers = MediatZ.domainEventHandlers.get(name);
    handlers.forEach(handler => handler.Handle(event));
  }

  public static register(event: any, handler: IDomainEventHandler<IDomainEvent>) {
    const eventName = event;
    const eventExist = MediatZ.domainEventHandlers.get(eventName);

    if(eventExist) {
      eventExist.push(handler)
      MediatZ.domainEventHandlers.set(eventName, eventExist);
    } else {
      MediatZ.domainEventHandlers.set(eventName,[handler]);
    }
  }
}