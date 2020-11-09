import { SidebarPatientComponent } from './../core/sidebar/patient/sidebar-patient.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '@core/navbar/navbar.component';
import { MaterialModule } from '../core/material.module';
import { SidebarAdminComponent } from '@core/sidebar/admin/sidebar-admin.component';
import { SidebarProfesionalComponent } from '../core/sidebar/profesional/sidebar-profesional.component';
@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    SidebarAdminComponent,
    SidebarProfesionalComponent,
    SidebarPatientComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule,
  ],
})
export class PagesModule { }
