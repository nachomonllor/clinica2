
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from '../../pages/users/user-list/user-list.component';

const routes: Routes = [{
  path: 'users', component: UsersComponent,
  children: [
    { path: 'list', component: UserListComponent },
    // { path: 'new', component: UserDetailComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
