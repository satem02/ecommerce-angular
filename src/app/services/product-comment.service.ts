import { Injectable, Inject } from '@angular/core';
import { ProductComment } from '../entities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCommentService {

  apiBaseUrl: string;

  constructor(public http: HttpClient, @Inject('environment.apiURL') apiURL: string) {
    this.apiBaseUrl = apiURL;
  }

  getAll(): Observable<ProductComment[]> {
    return this.http.get<ProductComment[]>(`${this.apiBaseUrl}productComments`);
  }
}
