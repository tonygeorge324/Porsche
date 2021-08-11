import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestViewComponent } from './request-view/request-view.component';

const routes: Routes = [
 { path:'request',component:RequestViewComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
