import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInfoDTO } from './comparacion-producto-tiendas.component.types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComparacionProductosTiendasService {
  constructor(private readonly http: HttpClient) {}

  getProductInfoByProductId(productId: string): Observable<ProductInfoDTO> {
    return this.http.get<ProductInfoDTO>(
      `${environment.apiURL}/products/prices/${productId}`
    );
  }
}
