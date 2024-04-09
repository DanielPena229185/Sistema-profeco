import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ProductDTO, ProductsDTO } from './comparar.types';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompararService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<ProductsDTO> {
    return this.http.get<ProductsDTO>(`${environment.apiURL}/products/names`);
  }
}
