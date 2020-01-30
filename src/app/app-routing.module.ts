import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductComponent, HomeComponent, ProductDetailComponent,
  CategoryAddComponent, ProductAddComponent, LayoutComponent
} from './components';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';


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
  {path :"login" , component:LoginComponent},
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'admin', canActivate:[AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
