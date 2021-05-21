import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Vehicle} from '../../models/Vehicle';
import {Log} from "../../models/Log";
import {Comment} from "../../models/Comment";

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

  addLog(vehicleId: number, newLog: Log): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.post(`${this.apiUrl}/vehicle/${vehicleId}/logs`, newLog, requestOptions);
  }

  deleteLog(vehicleId: number, logId: number): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.delete(`${this.apiUrl}/vehicle/${vehicleId}/logs/${logId}`, requestOptions);
  }

  addComment(vehicleId: number, logId: number, newComment: Comment): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.post(`${this.apiUrl}/vehicles/${vehicleId}/logs/${logId}/comments`, newComment, requestOptions);
  }

  deleteComment(vehicleId: number, logId: number, commentId: number): Observable<any>{
    const token = this.getToken();
    const requestOptions = this.getRequestOptions(token);
    return this.http.post(`${this.apiUrl}/vehicles/${vehicleId}/logs/${logId}/comments/${commentId}`, requestOptions);
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
