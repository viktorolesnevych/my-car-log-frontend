import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../models/Vehicle';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/User";
import {Log} from "../../models/Log";

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
  title: string;
  content: string;
  imgLink: string;

  errorText = '';
  showAddLog = false;
  confirmDelete = false;
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService, private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.vehicleService.getVehicleById(parseInt(params.get('vehicle-id'), 10))
          .subscribe((response: Vehicle) => {
          this.vehicle = response;
          //this.vehicle.logList.reverse();
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

  changeShowAddLogs(): void{
    this.showAddLog = !this.showAddLog;
  }

  deleteVehicle(): void{
    this.vehicleService.deleteVehicle(this.vehicle.brand_id, this.vehicle.model_id, this.vehicle.id)
      .subscribe(response => {
        console.log(response);
        this.vehicleService.vehicleToDelete.next(this.vehicle.id);
      });
    this.router.navigate([`/${this.vehicle.brand_name}/${this.vehicle.model_name}`]);
  }

  addLog(): void{
    let newLog;
    if (this.title && this.content && this.imgLink) {
      newLog = {
        title: this.title,
       content: this.content,
        imgLink: this.imgLink,
        commentList: Array(0)
      };
      console.log(newLog);
      this.vehicleService.addLog(this.vehicle.id, newLog).subscribe((response: Log) => {
        console.log(response);
        this.showComments.push(false);
        this.vehicle.logList.unshift(response);
        this.title = '';
        this.imgLink = '';
        this.content = '';
        this.changeShowAddLogs();
      });
      this.errorText = '';
    }
    else{
      this.errorText = 'Check the inputs and try again!';
    }
  }

  deleteLog(logId: number): void{
    this.vehicleService.deleteLog(this.vehicle.id, logId).subscribe(response => {
      this.vehicle.logList = this.vehicle.logList.filter(log => log.id !== logId);
      console.log(response);
    });
  }
}
