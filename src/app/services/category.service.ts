import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from '.';
import { Product, Category } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IRepository<Category> {
   
  path:string;
  constructor(public http: HttpClient, @Inject('environment.apiURL') apiURL: string) {
    this.path = apiURL + "categories";
  }

  getByID(id: any): Observable<Category> {
    return this.http.get<Category>(this.path+"/"+id)
  }
  getAll():  Observable<Category[]> {
    return this.http.get<Category[]>(this.path)
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
