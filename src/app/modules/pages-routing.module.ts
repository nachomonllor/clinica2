import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { UserListComponent } from '@modules/users/user-list/user-list.component';
import { LoginGuard } from '@core/guards/login.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    component: DashboardComponent,
  },
  {
    path: 'users',
    canActivate: [LoginGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'profesional',
    canActivate: [LoginGuard],
    loadChildren: () => import('./profesionals/profesionals.module').then(m => m.ProfesionalsModule)
  },
  {
    path: 'categories',
    canActivate: [LoginGuard],
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'quiensoy',
    component: QuienSoyComponent
  },
  { path: '**', component: DashboardComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
