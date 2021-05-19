import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string;
  errorText: string;
  navSubject = new Subject();
  searchSubject = new BehaviorSubject('');
  apiUrl = 'https://mycarlog.herokuapp.com';

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('currentUser')) {
      this.searchSubject.next(localStorage.getItem('currentUser'));
      console.log(this.searchSubject);
    }
  }

  registerUser(newUser): void {
    this.http
      .post(`${this.apiUrl}/auth/users/register`, newUser)
      .subscribe(response => {
        localStorage.removeItem('currentError');
        this.loginUser(newUser);
      }, err => console.log(err));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${this.apiUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.emailAddress}`);
        localStorage.setItem('token', `${token}`);
        localStorage.removeItem('currentError');
        this.router.navigate(['/']);
        this.currentUser = user.emailAddress;
        // this.navSubject.next(this.currentUser);
       // this.searchSubject = new BehaviorSubject(this.currentUser);
        this.searchSubject.next(this.currentUser);
      }, err => console.log(err));
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = '';
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }

  getUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/auth/users`);
  }
}