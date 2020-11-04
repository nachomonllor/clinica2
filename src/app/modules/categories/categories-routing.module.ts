import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';

import { LoginGuard } from '@core/guards/login.guard';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    canActivateChild: [LoginGuard],
    data: { titulo: 'Gestión de Especialidades' },
    children: [
      {
        path: '',
        component: CategoryListComponent,
        data: { animation: 'CategoryListPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
