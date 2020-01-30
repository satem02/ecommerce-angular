import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductComponent, HomeComponent, ProductDetailComponent,
  CategoryAddComponent, ProductAddComponent, LayoutComponent
} from './components';


const routes: Routes = [
  {
    path: "", component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "products", component: ProductComponent },
      { path: "product/detail/:id", component: ProductDetailComponent },
      { path: "category/add", component: CategoryAddComponent },
      { path: "product/add", component: ProductAddComponent }
    ]
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
