import { Body, Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompareProductList,
  Product,
  ProductList,
  ProductListRequest,
} from './proto/product';

@Controller('products')
export class ProductsController implements OnModuleInit {
  private productsService;
  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.productsService = this.client.getService('Products');
  }

  @Get('names')
  async getProducts(): Promise<ProductList> {
    const products: ProductList = await this.productsService.GetProducts({});
    return products;
  }

  @Get('prices')
  async getProductsByPrice(
    @Body() body: ProductListRequest,
  ): Promise<CompareProductList> {
    const products: CompareProductList =
      await this.productsService.GetProductsByPrice(body);
    return products;
  }
}
