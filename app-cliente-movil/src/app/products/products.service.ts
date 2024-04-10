import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsDTO } from './products.types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts(): Observable<ProductsDTO> {
    return this.http.get<ProductsDTO>(`${environment.apiURL}/products/names`);
  }
}
