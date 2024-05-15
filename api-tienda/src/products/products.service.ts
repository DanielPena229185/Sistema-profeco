import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Product, ProductByIdRequest, ProductList } from './products.types';
import { BusinessRuleException } from 'libs/exceptions/src';

@Injectable()
export class ProductsService implements OnModuleInit {
  private productsService;
  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.productsService = this.client.getService('Products');
  }

  async getProducts(): Promise<ProductList> {
    const $products: Observable<ProductList> = this.productsService.GetProducts(
      {},
    );
    const products: ProductList = await $products.toPromise();
    return products;
  }

  async getProductById(data: ProductByIdRequest): Promise<Product> {
    if (!data) {
      throw new BusinessRuleException('Product id empty');
    }
    const $product: Observable<Product> =
      this.productsService.GetProductById(data);
    const product: Product = await $product.toPromise();
    return product;
  }
}
