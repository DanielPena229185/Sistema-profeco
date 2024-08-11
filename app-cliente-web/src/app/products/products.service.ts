import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from './products.types';
import { environment } from '../enviroment/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${environment.apiURL}/products/names`);
  }
}
