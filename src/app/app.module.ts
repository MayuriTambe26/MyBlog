import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { MainComponent } from './MyComponents/main/main.component';
import { CardDesignComponent } from './MyComponents/card-design/card-design.component';

import { RegisterComponent } from './MyComponents/register/register.component';
import { Login2Component } from './MyComponents/login2/login2.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './DashboardComponents/home/home.component';
import { AboutComponent } from './DashboardComponents/about/about.component';
import { FaqComponent } from './DashboardComponents/faq/faq.component';
import { SupportComponent } from './DashboardComponents/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CardDesignComponent,
   
    RegisterComponent,
    Login2Component,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
