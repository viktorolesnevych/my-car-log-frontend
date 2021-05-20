import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiUrl = 'https://mycarlog.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getVehicleById(id: number): Observable<Vehicle>{
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicles/${id}`);
  }

  addVehicle(brandId: number, modelId: number, newVehicle: Vehicle): Observable<any>{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post(`${this.apiUrl}/brands/${brandId}/models/${modelId}/vehicles`, newVehicle, requestOptions);
  }
}
