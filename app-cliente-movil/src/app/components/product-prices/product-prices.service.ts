import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInfoDTO } from './product-prices';

@Injectable({
  providedIn: 'root'
})
export class ProductPricesService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPrices(productId: string) : Observable<ProductInfoDTO>{
    return this.http.get<ProductInfoDTO>(`${environment.apiURL}/products/compare/${productId}`);
  }
}
