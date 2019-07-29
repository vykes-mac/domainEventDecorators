// Import stylesheets


import './style.css';
import { IDomainEvent } from './mediatZ/IDomainEvent';
import { IDomainEventHandler } from './mediatZ/IDomainEventHandler';
import { MediatZ } from './mediatZ/MediatZ';
import { INotificationHandler } from './mediatZ/INotificationHandler';

function IDomainNotificationHandler
(event: IDomainEvent) {

 type Constructor<T> = {
    new(...args: any[]): T;
    readonly prototype: T;
  }

  return function<T extends Constructor<IDomainEventHandler<IDomainEvent>>>(target : T) {
     MediatZ.register(event.name, new target);
  }
 
}

class DomainEvent implements IDomainEvent {
  name = "hello";
  message = "world";
}

class DomainEvent2 implements IDomainEvent {
  name = "yes";
  message = "hii";
}

@IDomainNotificationHandler(DomainEvent)
class EventHandler {

 Handle(domainEvent : DomainEvent): Promise<void> {
   console.log(domainEvent.message);
   return null;
 }

}

@IDomainNotificationHandler(DomainEvent2)
class EventHandler2 {

 Handle(domainEvent : DomainEvent): Promise<void> {
   console.log(domainEvent.message);
   return null;
 }

}

/*export class EventHandler1 implements IDomainEventHandler<DomainEvent> {

  constructor() {
    MediatZ.register(DomainEvent.prototype, this);
  }

 Handle(domainEvent : DomainEvent): Promise<void> {
   console.log(domainEvent.message.concat(' hello'));
   return null;
 }

}*/

//const handler = new EventHandler();
//const handler2 = new EventHandler1();

MediatZ.Publish(new DomainEvent());
MediatZ.Publish(new DomainEvent2());


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;