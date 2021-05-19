import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vehicle} from '../../models/Vehicle';
import {Brand} from '../../models/Brand';
import {Model} from '../../models/Model';
import {BrandsService} from '../../services/brands/brands.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private brandsService: BrandsService) { }
  currentBrand: Brand;
  currentModel: Model;
  vehicles: Vehicle[];
  ngOnInit(): void {
    this.route.parent.paramMap
      .subscribe(params => {
        console.log(params.get('car-brand'));
        this.brandsService.getBrand(params.get('car-brand')).subscribe((response: Brand) => {
          this.currentBrand = response;
          this.route.paramMap
            .subscribe(paramsChild => {
              this.currentModel = this.currentBrand.modelList.find(model => model.name === paramsChild.get('model'));
              console.log(this.currentModel.vehicleList);
              this.vehicles = this.currentModel.vehicleList;
            });
        });
      });
  }
}
