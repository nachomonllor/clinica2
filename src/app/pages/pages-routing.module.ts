import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '@app/services/guards/auth.guard';
import { UserListComponent } from '@app/pages/users/user-list/user-list.component';
import { LoginGuard } from '@app/services/guards/login.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    component: DashboardComponent
  },
  {
    path: 'usuarios',
    component: UserListComponent
  },
  {
    path: 'quiensoy',
    component: QuienSoyComponent
  },
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
