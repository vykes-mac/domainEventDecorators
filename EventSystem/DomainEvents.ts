import { IDomainEvent } from "./IDomainEvent";
import { IDomainEventHandler } from "./IDomainEventHandler";
export abstract class DomainEvents {
  public static eventHandlers: Map<
    string,
    IDomainEventHandler<IDomainEvent>[]
  > = new Map<string, IDomainEventHandler<IDomainEvent>[]>();

  public static Publish(event: IDomainEvent) {
    if (event === null) {
      throw new Error("event cannot be null");
    }

    DomainEvents.PublishEvent(event);
  }

  private static PublishEvent(event: IDomainEvent) {
    const name = event.constructor.name;
    const handlers = DomainEvents.eventHandlers.get(name) || [];
    handlers.forEach(handler => handler.HandleEvent(event));
  }

  public static register(
    event: any,
    handler: IDomainEventHandler<IDomainEvent>
  ) {
    const eventName = event.name;
    const eventExist = DomainEvents.eventHandlers.get(eventName);

    if (eventExist) {
      eventExist.push(handler);
      DomainEvents.eventHandlers.set(eventName, eventExist);
    } else {
      DomainEvents.eventHandlers.set(eventName, [handler]);
    }
  }
}
