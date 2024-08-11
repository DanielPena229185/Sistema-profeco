import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfoDTO } from './product-prices.types';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductPricesService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPrices(productId: string) : Observable<ProductInfoDTO>{
    return this.http.get<ProductInfoDTO>(`${environment.apiURL}/products/prices/${productId}`);
  }
}
