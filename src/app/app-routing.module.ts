import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/authorization/login/login.component';
import {SignupComponent} from './components/authorization/signup/signup.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ModelsComponent} from './components/models/models.component';
import {VehiclesComponent} from './components/vehicles/vehicles.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: ':car-brand',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: ModelsComponent
      },
      {
        path: ':model',
        component: VehiclesComponent
      },
      {
      path: ':model/:vehicle-id',
      component: VehicleComponent
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
