import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CompareProductList, ProductList, ProductListRequest } from './proto/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService implements OnModuleInit {
    private productsService;
    constructor(@Inject('PRODUCTS_SERVICE') private client: ClientGrpc) {}
  
    onModuleInit() {
      this.productsService = this.client.getService('Products');
    }

    async getProducts():Promise<ProductList>{
        const $products:Observable<ProductList> = this.productsService.GetProducts({});
        const products:ProductList = await $products.toPromise();
        return products; 
    }

    async getProductsByPrice(productListRequest:ProductListRequest){
      if(!productListRequest){
        
      }
      const $products:Observable<CompareProductList> = this.productsService.GetProductsByPrice(productListRequest);
      const products:CompareProductList = await $products.toPromise();
      return products;
    }
}
