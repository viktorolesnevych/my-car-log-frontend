import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import {BrandsService} from '../../services/brands/brands.service';
import {Brand} from '../../models/Brand';
import {Model} from '../../models/Model';
import {VehiclesService} from '../../services/vehicles/vehicles.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  brands: Brand[];
  brand: string;
  model: string;
  color: string;
  nickName: string;
  imgLink: string;
  description: string;



  constructor(private userService: UserService, private brandsService: BrandsService,
              private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.emailAddress === localStorage.getItem('currentUser')){
          this.user = user;
          console.log(user);
        }
      });
    });
    this.brandsService.getBrands().subscribe(brands => this.brands = brands);
  }

  addVehicle(): void{
    const brand: Brand = this.brands.find(brandVar => brandVar.name === this.brand);
    const model: Model = brand.modelList.find(modelVar => modelVar.name === this.model);
    const newVehicle = {
      color: this.color,
      nickName: this.nickName,
      imgLink: this.imgLink,
      description: this.description
    };
    if (newVehicle && brand && model) {
      if (newVehicle.nickName && newVehicle.description && newVehicle.color && brand.id && model.id) {
        this.vehiclesService.addVehicle(brand.id, model.id, newVehicle).subscribe(response => console.log(response));
      }
    }
  }
}
