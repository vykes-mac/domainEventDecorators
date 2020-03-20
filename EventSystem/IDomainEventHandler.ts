import { IDomainEvent } from "./IDomainEvent";

export interface IDomainEventHandler<T extends IDomainEvent> {
  HandleEvent(domainEvent: T): void;
}
