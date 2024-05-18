import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketDTO } from './market-preference.type';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketPreferenceService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getMarketsPreference(user_id:string):Observable<MarketDTO[]>{
    return this.http.get<MarketDTO[]>(`${environment.apiURL}/preference/favorite-markets`,{params:{user_id}});
  }
}