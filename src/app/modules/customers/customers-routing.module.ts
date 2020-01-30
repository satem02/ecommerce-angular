import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'list', component: CustomerListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
