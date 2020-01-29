import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {
  HeaderComponent, FooterComponent, HomeComponent, ProductComponent, ProductDetailComponent,
  ProductPartialComponent, ProductCommentComponent
} from './components';
import { environment } from 'src/environments/environment';

import { NgTemplateComponent } from './examples';

export const PROVIDERS = [
  {
    provide: "environment.apiURL",
    useValue: environment.apiUrl
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductPartialComponent,
    ProductCommentComponent,
    NgTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule { }
