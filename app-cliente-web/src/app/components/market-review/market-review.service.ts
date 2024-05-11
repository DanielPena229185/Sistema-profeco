import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketDTO, MarketSearchParamsDTO } from './market-review.types';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MarketReviewService {

  constructor(private readonly http: HttpClient) { }

  getMarketById(params: MarketSearchParamsDTO, marketId: string): Observable<MarketDTO>{
    return this.http.get<MarketDTO>(`${environment.apiURL}/market/${marketId}`, {
      params: <any>params,
    });
  }
}
