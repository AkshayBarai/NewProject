import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersigninComponent } from './usersignin/usersignin.component';

const routes: Routes = [

  {path:'usersignin',component:UsersigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
