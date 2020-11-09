import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesionalDetailComponent } from './profesional-detail/profesional-detail.component';
import { ProfesionalsComponent } from './profesionals.component';
import { ProfesionalsRoutingModule } from './profesionals-routing.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ProfesionalsComponent,
    ProfesionalDetailComponent,
  ],
  imports: [
    CommonModule,
    ProfesionalsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})

export class ProfesionalsModule { }
