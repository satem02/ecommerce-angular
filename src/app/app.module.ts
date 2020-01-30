import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";
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
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './components/about/about.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiLanguageComponent } from './examples/multi-language/multi-language.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    LinkPipe,
    LayoutComponent,
    AboutComponent,
    MultiLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule { }
