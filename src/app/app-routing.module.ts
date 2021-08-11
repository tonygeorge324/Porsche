import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestViewComponent } from './feature-modules/request/request-view/request-view.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
 {path:"", component:HomeComponent},

  
  {
    path:'request',
    loadChildren:()=>import('src/app/feature-modules/request/request.module').then(m=>m.RequestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]