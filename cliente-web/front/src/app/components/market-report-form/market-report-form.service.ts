import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketDTO, MarketOptionDTO, ProductOptionDTO } from './market-report-form.types';
import { Observable, count } from 'rxjs';
import { environment } from '../../enviroment/enviroment';
import { MarketOption } from '../market-item/market-item.types';

@Injectable({
  providedIn: 'root'
})
export class MarketReportFormService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getMarketById(marketId: string, fields: string, relations: string): Observable<MarketDTO> {
    const params = {
      fields,
      relations
    };
    return this.http.get<MarketDTO>(`${environment.apiURL}/market/${marketId}`, { params });
  }

  getMarketsOptions(fields: string, relations: string): Observable<MarketOptionDTO[]> {
    const params = {
      fields,
      relations,
      page: 0,
      count: 10
    };
    return this.http.get<MarketOptionDTO[]>(`${environment.apiURL}/market`, { params });
  }

  getProductById(productId: string, fields: string, relations: string): Observable<ProductOptionDTO> {
    const params = {
      fields,
      relations
    }
    return null; //Aún no se implementa
  }

  getProductsOptionsByMarketId(marketId: string, fields: string, relations: string): Observable<ProductOptionDTO[]> {
    const params = {
      fields,
      relations
    };
    return null;//Aún no pruebo este caso de uso
  }
}
