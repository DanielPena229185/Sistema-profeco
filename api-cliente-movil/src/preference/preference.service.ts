import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AddProductRequest,
  FavoriteMarketRequest,
  FavoriteMarketsList,
  Market,
  PreferencesDefaultRequest,
  Product,
  ShoppingCart,
  VisitedProductsList,
} from './preference.types';
import { Observable } from 'rxjs';

@Injectable()
export class PreferenceService implements OnModuleInit {
  private preferenceService;

  constructor(@Inject('PREFERENCE_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.preferenceService = this.client.getService('CustomerPreferences');
  }

  async addVisitedProduct(addProduct: AddProductRequest): Promise<Product[]> {
    const response: Observable<VisitedProductsList> =
      this.preferenceService.AddVisitedProduct(addProduct);
    const visitedProductsList = await response.toPromise();
    return visitedProductsList.products;
  }

  async addFavoriteMarket(
    favoriteMarket: FavoriteMarketRequest,
  ): Promise<Market[]> {
    const response: Observable<FavoriteMarketsList> =
      this.preferenceService.AddFavoriteMarket(favoriteMarket);
    const favoriteMarketsList = await response.toPromise();
    return favoriteMarketsList.markets;
  }

  async addProductToShoppingCart(
    addProduct: AddProductRequest,
  ): Promise<Product[]> {
    const response: Observable<ShoppingCart> =
      this.preferenceService.AddProductToShoppingCart(addProduct);
    const shoppingCart = await response.toPromise();
    return shoppingCart.products;
  }

  async getVisitedProducts(
    preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Product[]> {
    const response: Observable<VisitedProductsList> =
      this.preferenceService.GetVisitedProducts(preferencesDefaultRequest);
    const visitedProductsList = await response.toPromise();
    return visitedProductsList.products;
  }

  async getFavoriteMarketsList(
    preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Market[]> {
    const response: Observable<FavoriteMarketsList> =
      this.preferenceService.GetFavoriteMarketsList(preferencesDefaultRequest);
    const favoriteMarketsList = await response.toPromise();
    return favoriteMarketsList.markets;
  }

  async getShoppingCart(
    preferencesDefaultRequest: PreferencesDefaultRequest,
  ): Promise<Product[]> {
    const response: Observable<ShoppingCart> =
      this.preferenceService.GetShoppingCart(preferencesDefaultRequest);
    const shoppingCart = await response.toPromise();
    return shoppingCart.products;
  }
}
