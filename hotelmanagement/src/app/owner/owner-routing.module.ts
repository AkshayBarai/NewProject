import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';

const routes: Routes = [
   {path:'ownersignin',component:OwnersigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
