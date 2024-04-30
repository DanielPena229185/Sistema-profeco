import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketDTO, MarketOptionDTO, SearchParamsMarketDTO, SearchParamsMarketOptionDTO } from './report-market-form.types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportMarketFormService {
  constructor(private readonly http: HttpClient) {}

  getMarketById(
    id: string,
    searchParamsMarketDTO: SearchParamsMarketDTO
  ): Observable<MarketDTO>{
    return this.http.get<MarketDTO>(`${environment.apiURL}/market/${id}`, {
      params: <any>searchParamsMarketDTO,
    });
  }

  getMarketsOptions(searchParamsMarketOptionDTO: SearchParamsMarketOptionDTO): Observable<MarketOptionDTO[]>{
    return this.http.get<MarketOptionDTO[]>(`${environment.apiURL}/market`, {
      params: <any>searchParamsMarketOptionDTO,
    });
  }
}
