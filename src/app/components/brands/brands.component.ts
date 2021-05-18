import { Component, OnInit } from '@angular/core';
import {Brand} from '../../models/Brand';
import {BrandsService} from '../../services/brands/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand[];
  constructor(private brandsService: BrandsService) { }
  ngOnInit(): void {
    this.brandsService.getBrands().subscribe(response => {
      this.brands = response;
      this.brands.sort((a: Brand, b: Brand) => a.name.localeCompare(b.name));
    });
  }
}
