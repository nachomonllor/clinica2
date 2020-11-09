
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesionalsComponent } from './profesionals.component';
import { ProfesionalDetailComponent } from './profesional-detail/profesional-detail.component';

const routes: Routes = [{
  path: '', component: ProfesionalsComponent,
  children: [
    { path: '', component: ProfesionalDetailComponent },
    // { path: 'new', component: UserDetailComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalsRoutingModule { }
