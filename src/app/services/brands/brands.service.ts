import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../../models/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  apiUrl = 'http://localhost:9092/api/brands';
  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.apiUrl);
  }
}
