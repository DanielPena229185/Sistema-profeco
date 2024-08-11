import { Injectable } from '@angular/core';
import { MarketDTO, SearchParamsDTO } from './markets.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getMarkets(searchParams: SearchParamsDTO): Observable<MarketDTO[]> {
    return this.http.get<MarketDTO[]>(`${environment.apiURL}/market`, { params: <any>searchParams });
  }
}
