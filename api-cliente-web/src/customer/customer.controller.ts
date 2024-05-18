import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer, CustomerByIdRequest } from './customer.types';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async createCustomer(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.createCustomer(customer);
  }

  @Get()
  async getCustomerById(
    @Query() customerByIdRequest: CustomerByIdRequest,
  ): Promise<Customer> {
    return this.customerService.getCustomerById(customerByIdRequest);
  }
}
