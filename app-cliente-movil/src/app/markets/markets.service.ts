import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketDTO, searchParamsDTO as SearchParamsDTO } from './markets.types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketsService {
  constructor(private readonly http: HttpClient) {}

  getMarkets(searchParamsDTO: SearchParamsDTO): Observable<MarketDTO[]> {
    return this.http.get<MarketDTO[]>(`${environment.apiURL}/market`, {
      params: <any>searchParamsDTO,
    });
  }
}
