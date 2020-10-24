import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from '@shared/sidebar/sidebar.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { MaterialModule } from '../shared/material.module';
import { UserListComponent } from './users/user-list/user-list.component';
@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserListComponent
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
