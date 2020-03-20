export interface IDomainEvent {}

//create domain event decorator
export function DomainEvent<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor implements IDomainEvent {};
}
