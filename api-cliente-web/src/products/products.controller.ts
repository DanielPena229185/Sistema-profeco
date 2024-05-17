import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  CompareProductList,
  Product,
  ProductByIdRequest,
  ProductList,
  ProductListRequest,
} from './products.types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('names')
  async getProducts(): Promise<ProductList> {
    const products: ProductList = await this.productsService.getProducts();
    return products;
  }

  @Get('prices/:productName')
  async getProductsByPrice(
    @Param() params: ProductListRequest,
  ): Promise<CompareProductList> {
    const products: CompareProductList =
      await this.productsService.getProductsByPrice(params);
    return products;
  }

  @Get(':productId')
  async getProductById(@Param() data: ProductByIdRequest): Promise<Product> {
    const product: Product = await this.productsService.getProductById(data);
    return product;
  }

  @Get('compare/:productId')
  async getCompareProductListById(
    @Param() data: ProductByIdRequest,
  ): Promise<CompareProductList> {
    const product: CompareProductList =
      await this.productsService.getCompareProductListById(data);
    return product;
  }
}
