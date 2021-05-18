import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  apiUrl = 'http://localhost:9092/api/';
  constructor(private http: HttpClient) { }

  getVehicleById(id: number): Observable<Vehicle>{
    return this.http.get<Vehicle>(`${this.apiUrl}vehicles/${id}`);
  }
}
