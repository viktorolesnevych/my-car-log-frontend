import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Vehicle} from '../../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiUrl = 'https://mycarlog.herokuapp.com/api';
  vehicleToDelete = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

  getVehicleById(id: number): Observable<Vehicle>{
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicles/${id}`);
  }

  addVehicle(brandId: number, modelId: number, newVehicle: Vehicle): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.post(`${this.apiUrl}/brands/${brandId}/models/${modelId}/vehicles`, newVehicle, requestOptions);
  }

  deleteVehicle(brandId: number, modelId: number, vehicleId: number): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.delete(`${this.apiUrl}/brands/${brandId}/models/${modelId}/vehicles/${vehicleId}`, requestOptions);
  }

  getToken(): string{
    return localStorage.getItem('token');
  }
  getRequestOptions(token: string): object{
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
  }
}
