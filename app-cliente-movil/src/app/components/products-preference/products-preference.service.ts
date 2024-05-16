import { Injectable } from '@angular/core';
import { ProductsDTO } from './products-preference.types';
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

  getProductsPrefered(): Observable<ProductsDTO> {
    return this.http.get<ProductsDTO>(`${environment.apiURL}/products/names`);
  }
}
