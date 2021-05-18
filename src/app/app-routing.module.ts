import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/authorization/login/login.component';
import {SignupComponent} from './components/authorization/signup/signup.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ModelsComponent} from "./components/models/models.component";

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
    component: ModelsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
