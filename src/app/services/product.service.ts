import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from '.';
import { Product } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IRepository<Product> {
   
  path:string;
  constructor(public http: HttpClient, @Inject('environment.apiURL') apiURL: string) {
    this.path = apiURL + "products";
  }

  getByID(id: any): Observable<Product> {
    return this.http.get<Product>(this.path+"/"+id)
  }
  getAll():  Observable<Product[]> {
    return this.http.get<Product[]>(this.path)
  }
  insert(T: any) {
    return this.http.post(this.path,T)
  }
  delete(id: any) {
    return this.http.delete(this.path,id)
  }
  update(id: any, T: any) {
    return this.http.put(this.path+"/"+id,T)
  }  
}
