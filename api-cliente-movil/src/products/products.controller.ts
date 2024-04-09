import { Body, Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompareProductList,
  Product,
  ProductList,
  ProductListRequest,
} from './proto/product';
import { GetPricesByProductId } from './input/getPricesByProduct.dto';

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

  @Get('prices/:productId')
  async getProductsByPrice(
    @Param() params: GetPricesByProductId,
  ): Promise<CompareProductList> {
    const productListRequest: ProductListRequest = {
      productName: params.productId
    }
    const products: CompareProductList =
      await this.productsService.GetProductsByPrice(productListRequest);
    return products;
  }
}
