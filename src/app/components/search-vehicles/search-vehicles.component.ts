import { Component, OnInit } from '@angular/core';
import {VehiclesService} from "../../services/vehicles/vehicles.service";
import {Vehicle} from "../../models/Vehicle";
import {SearchService} from "../../services/search/search.service";

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit {

  searchValue = '';
  vehicles: Vehicle[];
  constructor(private vehicleService: VehiclesService, private searchService: SearchService) { }

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
      this.searchService.searchSubject.subscribe(search => {
        this.searchValue = search;
        this.vehicles = this.vehicles.filter(vehicle => {
          console.log(this.searchValue);
          if (vehicle.brand_name.includes(this.searchValue) || vehicle.model_name.includes(this.searchValue) ||
            vehicle.nickName.includes(this.searchValue) || vehicle.description.includes(this.searchValue)) {
            console.log(true);
            return vehicle;
          }
        });
      });
    });
  }
  ngOnDestroy(): void{
    this.searchService.searchNext('');
  }

}
