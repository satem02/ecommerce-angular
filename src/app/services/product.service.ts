import { Injectable } from '@angular/core';
import { Product } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[];
  constructor() { 
    this.products=[
      {id:1,name:"Klavye",description:"çok iyi bir klavyedir.",picture:"1.jpg",detail:"klavyenin detayları, burada belirtilecektir. çok yakında...",catID:1},
      {id:2,name:"Fare",description:"çok sağlam bir faredir.",picture:"2.jpg",detail:"farenin detayları, burada belirtilecektir. çok yakında...",catID:1},
      {id:3,name:"Monitör",description:"HP marka bir monitördür",picture:"3.jpg",detail:"Monitör detayları, burada belirtilecektir. çok yakında...",catID:1},
      {id:4,name:"Yazıcı",description:"mürekepi bitmeyen yazıcıdır",picture:"4.jpg",detail:"Yazıcı detayları, burada belirtilecektir. çok yakında...",catID:2},
      {id:5,name:"Tarayıcı",description:"herkes tarafından tercih edilir",picture:"5.jpg",detail:"Tarayıcı detayları, burada belirtilecektir. çok yakında...",catID:2},
      {id:6,name:"IP Telefon",description:"Hat gerektirmeyen bir telefon",picture:"6.jpg",detail:"P Telefon detayları, burada belirtilecektir. çok yakında...",catID:2}
    ];
  }
  getAll()
  {
    return this.products;
  }
}
