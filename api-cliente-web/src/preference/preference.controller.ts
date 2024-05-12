import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PreferenceService } from './preference.service';
import {
  AddProductRequest,
  FavoriteMarketRequest,
  Market,
  PreferencesDefaultRequest,
  Product,
} from './preference.types';

@Controller('preference')
export class PreferenceController {
    
  constructor(private readonly preferenceService: PreferenceService) {}

  @Post('visited-product')
  addVisitedProduct(@Body() addProduct: AddProductRequest): Promise<Product[]> {
    return this.preferenceService.addVisitedProduct(addProduct);
  }

  @Post('favorite-market')
  addFavoriteMarket(
    @Body() favoriteMarket: FavoriteMarketRequest,
  ): Promise<Market[]> {
    return this.preferenceService.addFavoriteMarket(favoriteMarket);
  }

  @Post('product-to-shopping-cart')
  addProductToShoppingCart(
    @Body() addProduct: AddProductRequest,
  ): Promise<Product[]> {
    return this.preferenceService.addProductToShoppingCart(addProduct);
  }

  @Get('visited-products')
  getVisitedProducts(
    @Query() preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Product[]> {
    return this.preferenceService.getVisitedProducts(preferencesDefaultRequest);
  }

  @Get('favorite-markets')
  getFavoriteMarketsList(
    @Query() preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Market[]> {
    return this.preferenceService.getFavoriteMarketsList(
      preferencesDefaultRequest,
    );
  }

  @Get('shopping-cart')
  getShoppingCart(
    @Query() preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Product[]> {
    return this.preferenceService.getShoppingCart(preferencesDefaultRequest);
  }
}
