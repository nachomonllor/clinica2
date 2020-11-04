import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from '@core/sidebar/sidebar.component';
import { NavbarComponent } from '@core/navbar/navbar.component';
import { MaterialModule } from '../core/material.module';
import { UserListComponent } from './users/user-list/user-list.component';
@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule
  ],
})
export class PagesModule { }
