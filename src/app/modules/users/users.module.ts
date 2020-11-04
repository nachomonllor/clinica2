import { CategoriesModule } from './../categories/categories.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '@core/material.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    PipesModule,
    CategoriesModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
    // UserSearchComponent,
    // ProfessionalSearchComponent,
    // UserDetailComponent
  ],
  providers: [],
  entryComponents: []
})
export class UsersModule {}
