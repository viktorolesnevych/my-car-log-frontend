import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authorization/login//login.component';
import { SignupComponent } from './components/authorization/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrandsComponent } from './components/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
