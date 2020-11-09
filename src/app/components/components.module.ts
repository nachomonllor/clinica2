import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { MaterialModule } from '../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimeSlotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TimeSlotComponent
  ]
})
export class ComponentsModule { }
