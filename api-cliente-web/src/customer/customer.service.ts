import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Customer, CustomerByIdRequest } from './customer.types';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService implements OnModuleInit {
  private customerService;

  constructor(@Inject('CUSTOMER_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.customerService = this.client.getService('Customers');
  }

  async createCustomer(customer: Customer): Promise<Customer> {
    const $response: Observable<Customer> =
      this.customerService.CreateCustomer(customer);
    return $response.toPromise();
  }

  async getCustomerById(
    customerByIdRequest: CustomerByIdRequest,
  ): Promise<Customer> {
    const $response: Observable<Customer> =
      this.customerService.GetCustomerById(customerByIdRequest);
    return $response.toPromise();
  }
}
