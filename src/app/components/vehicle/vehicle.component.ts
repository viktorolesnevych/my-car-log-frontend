import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../models/Vehicle';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/User";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle;
  brandName: string;
  modelName: string;
  showComments: boolean[];
  currentUserId: number;

  confirmDelete = false;
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService, private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.vehicleService.getVehicleById(parseInt(params.get('vehicle-id'), 10))
          .subscribe((response: Vehicle) => {
          this.vehicle = response;
          this.showComments = new Array(this.vehicle.logList.length);
          this.showComments.forEach(value => value = false);
          });
        this.route.parent.paramMap
          .subscribe(parentParams =>  this.brandName = parentParams.get('car-brand'));
        this.modelName = params.get('model');
      });
    if (localStorage.getItem('currentUser')) {
      this.userService.getUsers().subscribe((response: User[]) => {
        response.forEach((user: User) => {
          if (user.emailAddress === localStorage.getItem('currentUser')){
            this.currentUserId = user.id;
            console.log(this.currentUserId);
          }
        });
      });
    }
  }

  isShown(i: number): void{
    this.showComments[i] = !this.showComments[i];
  }

  confirmDeleteVehicle(): void{
    this.confirmDelete = !this.confirmDelete;
  }

  deleteVehicle(): void{
    this.vehicleService.deleteVehicle(this.vehicle.brand_id, this.vehicle.model_id, this.vehicle.id)
      .subscribe(response => {
        console.log(response);
        this.vehicleService.vehicleToDelete.next(this.vehicle.id);
      });
    this.router.navigate([`/${this.vehicle.brand_name}/${this.vehicle.model_name}`]);
  }
}
