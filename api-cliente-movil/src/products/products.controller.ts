import { Body, Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompareProductList,
  Product,
  ProductList,
  ProductListRequest,
} from './proto/product';
import { GetPricesByProductId } from './input/getPricesByProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  
constructor(
  private readonly productsService:ProductsService,
){}
  @Get('names')
  async getProducts():Promise<ProductList>{
    const products:ProductList = await this.productsService.getProducts();
    return products;
  }

  @Get('prices/:productId')
  async getProductsByPrice(
    @Param() params: GetPricesByProductId,
  ): Promise<CompareProductList> {
    const productListRequest: ProductListRequest = {
      productName: params.productId
    }
    const products: CompareProductList = await this.productsService.getProductsByPrice(productListRequest);
    return products;
  }
}
