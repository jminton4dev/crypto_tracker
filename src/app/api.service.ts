import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoinInfoModel } from './models/CoinInfoModel';
import { CoinQuantityModel } from './models/CoinQuantityModel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = 'https://bravenewcoin-v1.p.rapidapi.com';
  HeaderForRapi: any;

  constructor(private httpClient: HttpClient) {
      this.HeaderForRapi = new HttpHeaders ( {
        'x-rapidapi-key': 'c978e05ccfmshf52ea01f0cd385bp1c992bjsn769cf98fac75'
      })
  }


public getCoinInfo(type): Observable<CoinInfoModel> {
  return this.httpClient.get<CoinInfoModel>(`${this.SERVER_URL}/ticker?show=usd&coin=${type}` , {headers: this.HeaderForRapi});
}

public get100CoinQty(type): Observable<CoinQuantityModel> {
  return this.httpClient.get<CoinQuantityModel>(`${this.SERVER_URL}/convert?qty=100&from=usd&to=${type}` , {headers: this.HeaderForRapi});
}

public get250CoinQty(type): Observable<CoinQuantityModel> {
  return this.httpClient.get<CoinQuantityModel>(`${this.SERVER_URL}/convert?qty=250&from=usd&to=${type}` , {headers: this.HeaderForRapi});
}

public get5KCoinQty(type): Observable<CoinQuantityModel> {
  return this.httpClient.get<CoinQuantityModel>(`${this.SERVER_URL}/convert?qty=5000&from=usd&to=${type}` , {headers: this.HeaderForRapi});
}

}
