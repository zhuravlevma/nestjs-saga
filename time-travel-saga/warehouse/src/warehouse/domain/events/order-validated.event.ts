import { DomainEvent, DomainEventAttr } from 'src/__relay__/domain-event';

interface OrderValidatedPayload {
  orderId: string;
}
export class OrderValidatedEvent implements DomainEvent<OrderValidatedPayload> {
  type: string;
  reason: string;
  payload: OrderValidatedPayload;
  url: string;

  constructor(attributes: DomainEventAttr<OrderValidatedPayload>) {
    this.reason = attributes.reason;
    this.payload = attributes.payload;
    this.type = 'order-validated';
    this.url = 'localhost:3008/reports';
  }
}
