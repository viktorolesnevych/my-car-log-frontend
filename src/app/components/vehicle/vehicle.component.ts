import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {ActivatedRoute} from '@angular/router';
import {Vehicle} from '../../models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle;
  brandName: string;
  modelName: string;
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.vehicleService.getVehicleById(parseInt(params.get('vehicle-id'), 10))
          .subscribe((response: Vehicle) => {
          this.vehicle = response;
          console.log(this.vehicle);
          });
        this.route.parent.paramMap
          .subscribe(parentParams =>  this.brandName = parentParams.get('car-brand'));
        this.modelName = params.get('model');
      });
  }
}