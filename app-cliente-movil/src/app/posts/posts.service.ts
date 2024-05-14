import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DealDTO } from './posts.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private readonly http:HttpClient
  ) { }

   getDeals():Observable<DealDTO[]>{
    return this.http.get<DealDTO[]>(`${environment.apiURL}/deal`,{params:{page:1,count:10}});
  }

  getDealById(dealId:string):Observable<DealDTO>{
    return this.http.get<DealDTO>(`${environment.apiURL}/deal/${dealId}`);
  }
}
