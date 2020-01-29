import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent, HomeComponent, ProductDetailComponent, CategoryAddComponent, ProductAddComponent } from './components';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "category/add", component: CategoryAddComponent },
  { path: "product/add", component: ProductAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
