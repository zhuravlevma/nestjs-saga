export interface DomainEventAttr<Payload = object> {
  reason: string;
  payload: Payload;
}

export interface DomainEvent<Payload = object>
  extends DomainEventAttr<Payload> {
  type: string;
  url: string;
  reason: string;
  payload: Payload;
}
