import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { AppConfig } from '../models';
// --------------------------------------------------------------- //

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  // Gets Api Url from assets using httpclient

  private configPath = 'assets/config.json';

  public appConfig: AppConfig;

  constructor(private http: HttpClient) { }

  public initialize(): Promise<any> {
    return this.http.get(this.configPath)
      .toPromise()
      .then((data: AppConfig) => {
        this.appConfig = data;
      });
  }

}
