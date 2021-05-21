import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchSubject = new BehaviorSubject('');
  constructor() { }

  searchNext(str: string): void{
    this.searchSubject.next(str);
  }
}
