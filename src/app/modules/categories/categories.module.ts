import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MaterialModule } from '@core/material.module';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
  ],
  exports: [
  ],
  providers: [],
  entryComponents: []
})
export class CategoriesModule {}
