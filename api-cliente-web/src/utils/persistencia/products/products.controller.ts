import { Body, Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CompareProductList,
  ProductList,
  ProductListRequest,
} from './products.types';
import { ProductsService } from './products.service';
import { ProductByIdRequest } from './products.types';
import { ProductDAO, Product, CompareProduct } from 'src/utils/persistencia/products.dao';
import { MarketDAO } from 'src/utils/persistencia/merket.dao';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService,
    private readonly productDAO: ProductDAO,
    private readonly marketDAO: MarketDAO,
  ) { }
  @Get('names')
  async getProducts(): Promise<Product[]> {
    // const products: ProductList = await this.productsService.getProducts();
    const products = this.productDAO.getAllProducts(0, 0, true);
    return products;
  }

  @Get('prices/:product_name')
  async getProductsByPrice(
    @Param() params: ProductListRequest,
  ): Promise<CompareProduct> {
    // const products: CompareProductList = await this.productsService.getProductsByPrice(params);
    const products = this.productDAO.getProductByName(params.product_name);
    const product = this.productDAO.getCompareProductsById(products.id);
    return product;
  }

  @Get(':product_id')
  async getProductById(
    @Param() data: ProductByIdRequest
  ): Promise<Product> {
    // const product: Product = await this.productsService.getProductById(data);
    const product = this.productDAO.getProductById(data.product_id);
    return product;
  }

  @Get('compare/:productId')
  async getCompareProductListById(
    @Param() data: ProductByIdRequest
  ): Promise<CompareProductList> {
    const product: CompareProductList = await this.productsService.getCompareProductListById(data);
    return product;
  }

  @Get('market/:marketId')
  async getProductsByMarketId(
    @Param('marketId') id: string
  ): Promise<Product[]> {
    const products: Product[] = this.productDAO.getProductsByMarketId(id);
    return products;
  }
}
