import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BrandsService} from '../../services/brands/brands.service';
import {Model} from '../../models/Model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  currentBrandName: string;
  models: Model[];
  constructor(private route: ActivatedRoute, private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.currentBrandName = params.get('car-brand');
        this.brandsService.getBrand(this.currentBrandName).subscribe(response => {
          this.models = response.modelList;
          this.models.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
          });
      });
  });
}
}
