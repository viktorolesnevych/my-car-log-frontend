import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentBrandName: string;
  currentModelName: string;
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event): void {
    console.log(event);
    if (event.route.params.value['car-brand']){
      this.currentBrandName = event.route.params.value['car-brand'];
    }
    if (event.route.params.value['model']){
        this.currentModelName = event.route.params.value['model'];
      }
  }
}
