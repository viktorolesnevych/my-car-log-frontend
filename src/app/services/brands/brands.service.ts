import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../../models/Brand';
import {Model} from '../../models/Model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  apiUrl = 'https://mycarlog.herokuapp.com/api/brands';
  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.apiUrl);
  }
  getBrand(model: string): Observable<any>{
    return  this.http.get(`${this.apiUrl}/name=${model}`);
  }
}
