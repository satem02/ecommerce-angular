import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PartialComponent } from './components/partial/partial.component';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, FooterComponent, LayoutComponent, PartialComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [PartialComponent]
})
export class ProductModule { }
