import { Injectable, Inject } from '@angular/core';
import { Product } from '../entities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiBaseUrl: string;

  constructor(public http: HttpClient, @Inject('environment.apiURL') apiURL: string) {
    this.apiBaseUrl = apiURL;
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBaseUrl}products`);
  }
}
