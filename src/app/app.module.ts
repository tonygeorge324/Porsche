import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialsModule } from './materials/materials.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RequestModule } from './feature-modules/request/request.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, routingComponents, HeaderComponent, FooterComponent],
  imports: [
    CarouselModule,
    BrowserModule,
FormsModule,
    RequestModule,
    BrowserAnimationsModule,
    MaterialsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
