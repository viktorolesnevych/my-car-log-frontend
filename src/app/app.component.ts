import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  getBrands(): any {
    return this.http.get('http://localhost:9092/api/brands').subscribe(response =>
    console.log(response)); // returns a subscription
  }
}
