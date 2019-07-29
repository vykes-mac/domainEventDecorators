

import { IDomainEvent } from './IDomainEvent';

export interface IMediatZ {
    Publish(event: IDomainEvent)
}