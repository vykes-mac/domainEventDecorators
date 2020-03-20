import { DomainEvents } from "./EventSystem/DomainEvents";
import { DomainEvent } from "./EventSystem/IDomainEvent";
import { NotificationHandler } from "./EventSystem/NotificationHandler";

@DomainEvent
class Event1 {
  name: string = "John";
  message: string = "Hey there";
}

@DomainEvent
class Event2 {
  name: string = "Jenny";
  message: string = "Hey there";
}

@NotificationHandler(Event1)
class EventHandler {
  HandleEvent(domainEvent: Event1) {
    console.log(domainEvent);
  }
}

@NotificationHandler(Event2)
class EventHandler2 {
  HandleEvent(domainEvent: Event2) {
    console.log(domainEvent);
  }
}

DomainEvents.Publish(new Event1());
DomainEvents.Publish(new Event2());

//Thanks for watching...github link in the description below...
