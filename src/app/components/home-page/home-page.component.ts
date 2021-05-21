import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
    const iCarousel = new M.Carousel(document.querySelector('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true
    });
    // this did the trick
    setInterval(() => {
      iCarousel.next();
    }, 4000);
  }
}
