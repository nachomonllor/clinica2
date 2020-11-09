import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginGuard } from '@core/guards/login.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivateChild: [LoginGuard],
    data: { titulo: 'Gestión de Usuarios' },
    children: [
      {
        path: '',
        component: UserListComponent,
        data: { animation: 'UserListPage' },
      },
      {
        path: 'new', component: UserDetailComponent,
        data: { role: 'administrador', animation: 'UserCreatePage' }
      },
      // { path: ':id', component: UserDetailComponent, data: {animation: 'UserDetailPage'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
