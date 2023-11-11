import { DomainEvent } from 'src/__relay__/domain-event';
import { OrderEntity } from './order.entity';
import { OrderValidatedEvent } from '../events/order-validated.event';

interface Attributes {
  id: string;
  name: string;
  orders: OrderEntity[];
}

export class WarehouseEntity implements Attributes {
  id: string;
  name: string;
  orders: OrderEntity[];
  events: DomainEvent[];

  constructor(attributes: Attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.orders = attributes.orders;
  }

  addOrder(order: OrderEntity) {
    this.orders.push(order);
  }

  changeOrderStatusToValid(orderId: string) {
    const order = this.orders.find((el) => el.id === orderId);
    order.changeStatus(true);
    this.events.push(
      new OrderValidatedEvent({
        reason: 'this order has been validate',
        payload: {
          orderId: this.id,
        },
      }),
    );
  }
}
