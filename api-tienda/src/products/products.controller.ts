import { Controller, Get, Param } from '@nestjs/common';
import { Product, ProductList } from './products.types';
import { ProductsService } from './products.service';
import { ProductByIdRequest } from './products.types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('names')
  async getProducts(): Promise<ProductList> {
    const products: ProductList = await this.productsService.getProducts();
    return products;
  }

  @Get(':productId')
  async getProductById(@Param() data: ProductByIdRequest): Promise<Product> {
    const product: Product = await this.productsService.getProductById(data);
    return product;
  }
}
