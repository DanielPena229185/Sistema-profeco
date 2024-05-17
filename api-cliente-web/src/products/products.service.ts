import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompareProductList,
  Product,
  ProductByIdRequest,
  ProductList,
  ProductListRequest,
} from './products.types';
import { Observable } from 'rxjs';
import { BusinessRuleException } from '@app/libs';

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

  async getProductsByPrice(
    productListRequest: ProductListRequest,
  ): Promise<CompareProductList> {
    if (!productListRequest) {
      throw new BusinessRuleException('Product name empty');
    }
    const $products: Observable<CompareProductList> =
      this.productsService.GetProductsByPrice(productListRequest);
    const products: CompareProductList = await $products.toPromise();
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

  async getCompareProductListById(
    data: ProductByIdRequest,
  ): Promise<CompareProductList> {
    if (!data) {
      throw new BusinessRuleException('Product id empty');
    }
    const $products: Observable<CompareProductList> =
      this.productsService.GetCompareProductListById(data);
    const products: CompareProductList = await $products.toPromise();
    return products;
  }
}
