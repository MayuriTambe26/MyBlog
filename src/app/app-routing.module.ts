import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './MyComponents/register/register.component';
import { Login2Component } from './MyComponents/login2/login2.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { HomeComponent } from './DashboardComponents/home/home.component';
import { AboutComponent } from './DashboardComponents/about/about.component';
import { FaqComponent } from './DashboardComponents/faq/faq.component';
import { SupportComponent } from './DashboardComponents/support/support.component';

const routes: Routes = [
  {path:'',component: Login2Component},
  {path:'register',component: RegisterComponent},
  {path: 'dashboard',component:DashboardComponent, 
  children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'faq',component:FaqComponent},
    {path:'support',component:SupportComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
