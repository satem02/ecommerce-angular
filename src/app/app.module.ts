import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  HeaderComponent, FooterComponent, HomeComponent, ProductComponent, ProductDetailComponent,
  ProductPartialComponent, ProductCommentComponent, CategoryAddComponent, ProductAddComponent
} from './components';
import { environment } from 'src/environments/environment';

import { NgTemplateComponent } from './examples';
import { MailDirective } from './directives';
import { CKEditorModule } from 'ckeditor4-angular';
import { LinkPipe } from './pipes';

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
    NgTemplateComponent,
    MailDirective,
    CategoryAddComponent,
    ProductAddComponent,
    LinkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule { }
