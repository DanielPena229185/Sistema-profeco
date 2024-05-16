import { Injectable } from '@angular/core';
import { ProductDTO, ProductsDTO } from './products-preference.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsPreferenceService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getProductsPrefered(user_id:string): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${environment.apiURL}/preference/shopping-cart`,{params:{user_id}});
  }
}
