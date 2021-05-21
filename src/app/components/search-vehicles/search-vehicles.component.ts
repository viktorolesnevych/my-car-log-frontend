import { Component, OnInit } from '@angular/core';
import {VehiclesService} from "../../services/vehicles/vehicles.service";
import {Vehicle} from "../../models/Vehicle";

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((response: Vehicle[]) => {
      this.vehicles = response;
      this.vehicles.sort((a, b) => {
        if (a.brand_name < b.brand_name) { return -1; }
        if (a.brand_name > b.brand_name) { return 1; }
        else {
          if (a.model_name < b.model_name) { return -1; }
          if (a.model_name > b.model_name) { return 1; }
        }
      });
    });
  }

}
