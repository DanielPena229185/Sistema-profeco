import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInfoDTO } from './comparacion-producto-tiendas.component.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComparacionProductosTiendasService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getProductInfoByProductId(productId: string){
    return this.http.get<ProductInfoDTO>(`${environment.apiURL}/prices`, )
  }
}
