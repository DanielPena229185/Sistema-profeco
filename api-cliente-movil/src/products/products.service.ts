import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
//import { CompareProductList, ProductList, ProductListRequest } from './proto/product';
import { Observable } from 'rxjs';
import { BusinessRuleException } from 'default/exceptions';
import {
  CompareProductList,
  ProductDTO,
  ProductByIdRequest,
  ProductList,
  ProductListRequest,
} from './products.types';
import {
  MarketDTO,
  ProductCompareDTO,
} from './output/get-compare-product-list-by-id.dto';
import {
  GetMarketByIdRequest,
  GetMarketByIdResponse,
  MarketEntity,
} from 'src/market/market.types';

@Injectable()
export class ProductsService implements OnModuleInit {
  private productsService;
  private marketService;
  constructor(
    @Inject('PRODUCTS_SERVICE') private clientProducts: ClientGrpc,
    @Inject('MARKET_PACKAGE') private clientMarkets: ClientGrpc,
  ) {}

  onModuleInit() {
    this.productsService = this.clientProducts.getService('Products');
    this.marketService = this.clientMarkets.getService('Market');
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

  async getProductById(data: ProductByIdRequest): Promise<ProductDTO> {
    if (!data) {
      throw new BusinessRuleException('Product id empty');
    }
    const $product: Observable<ProductDTO> =
      this.productsService.GetProductById(data);
    const product: ProductDTO = await $product.toPromise();
    return product;
  }

  // async getCompareProductListById(data:ProductByIdRequest):Promise<CompareProductList>{
  //   if(!data){
  //     throw new BusinessRuleException('Product id empty');
  //   }
  //   const $products:Observable<CompareProductList> = this.productsService.GetCompareProductListById(data);
  //   const products:CompareProductList = await $products.toPromise();
  //   return products;
  // }

  async getCompareProductListById(
    data: ProductByIdRequest,
  ): Promise<ProductCompareDTO> {
    if (!data) {
      throw new BusinessRuleException('Product id is empty');
    }

    const $responseProduct: Observable<CompareProductList> =
      this.productsService.GetCompareProductListById(data);
    const product: CompareProductList = await $responseProduct.toPromise();

    const marketPromises: Promise<MarketDTO>[] = product.prices.map(
      async (market) => {
        const getMarketByIdRequest: GetMarketByIdRequest = {
          query: {
            marketId: market.id,
            fields: 'id,name,urlImage',
            relations: '',
          },
        };

        const $responseMarket: Observable<GetMarketByIdResponse> =
        await this.marketService.GetMarketById(getMarketByIdRequest);
        const marketSelected: GetMarketByIdResponse =
          await $responseMarket.toPromise();
        const marketEntity: MarketEntity = marketSelected.market;

        return {
          id: marketEntity.id,
          name: marketEntity.name,
          price: market.price,
          urlImg: marketEntity.urlImg,
        } as MarketDTO;
      },
    );

    const markets: MarketDTO[] = await Promise.all(marketPromises);
    const productEntity: ProductDTO = product.product;
    const compareProduct: ProductCompareDTO = {
      id: productEntity.id,
      name: productEntity.name,
      urlImg: productEntity.imageUrl,
      details: productEntity.details,
      markets: markets,
    };
    return compareProduct;
  }
}
