import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { County } from './county';
import { District } from './district';


@Injectable({
  providedIn: 'root'
})
export class NgxFrenchLocationService {

  readonly API_URL = 'https://geo.api.gouv.fr/';
  readonly cities = 'communes';
  readonly counties = 'departements';
  readonly districts = 'regions';

  constructor(private http: HttpClient) { }

  /**
   * @desc Fetch all cities inside a county.
   * @param countyCode The county code string
   */
  getCitiesByCounty(countyCode: string) {
    return this.http.get(`${this.API_URL}${this.cities}?codeDepartement=${countyCode}`);
  }

  /**
   * @desc Fetch all counties by default
   * @param code The county code. Sould be a string
   * If provided only one county will be returned
   */
  getCounties(code?: string): Observable<County[]|County> {
    code = code ? `/${code}` : '';
    return this.http.get(`${this.API_URL}${this.counties}${code}`) as Observable<County[]|County>;
  }

  /**
   * @desc Fetch all districts by default
   * @param code The district code. Sould be a string
   */
  getDistrics(code?: string): Observable<District[]|District> {
    code = code ? `/${code}` : '';
    return this.http.get(`${this.API_URL}${this.districts}${code}`) as Observable<District[]|District>;
  }
}
