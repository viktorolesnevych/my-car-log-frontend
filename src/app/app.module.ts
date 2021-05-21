import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authorization/login//login.component';
import { SignupComponent } from './components/authorization/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ModelsComponent } from './components/models/models.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';
import { SearchVehiclesComponent } from './components/search-vehicles/search-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    BrandsComponent,
    ModelsComponent,
    VehiclesComponent,
    VehicleComponent,
    MainPageComponent,
    CommentsComponent,
    UserComponent,
    SearchVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
