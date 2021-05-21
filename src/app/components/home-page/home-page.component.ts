import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search/search.service";
import {Router} from "@angular/router";
declare const M: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  search: string;
  constructor(private searchService: SearchService, private router: Router) { }

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

  newSearch(): void{
    if (this.search){
      this.searchService.searchNext(this.search);
      this.router.navigate(['/search']);
    }
  }
}
