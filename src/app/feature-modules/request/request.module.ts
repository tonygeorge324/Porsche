import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestViewComponent } from './request-view/request-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
