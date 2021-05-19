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
        console.log(params.get('vehicle-id'));
        this.vehicleService.getVehicleById(parseInt(params.get('vehicle-id'), 10)).subscribe((response: Vehicle) =>
          this.vehicle = response);
        this.brandName = params.get('car-brand');
        this.modelName = params.get('model');
      });
  }

}
