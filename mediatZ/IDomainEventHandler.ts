
import { IDomainEvent } from './IDomainEvent';

export interface IDomainEventHandler<T extends IDomainEvent>  {
    Handle(domainEvent : T) : Promise<void>;
}