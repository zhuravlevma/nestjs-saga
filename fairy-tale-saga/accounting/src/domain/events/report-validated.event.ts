import { DomainEvent, DomainEventAttr } from 'src/__relay__/domain-event';
interface ReportValidatedPayload {
  orderId: string;
}

export class ReportValidatedEvent
  implements DomainEvent<ReportValidatedPayload>
{
  type: string;
  reason: string;
  url: string;
  payload: ReportValidatedPayload;
  constructor(attributes: DomainEventAttr<ReportValidatedPayload>) {
    this.type = 'report-validated';
    this.reason = attributes.reason;
    this.payload = attributes.payload;
    this.url = 'localhost:3000/report/' + attributes.payload.orderId;
  }
}
