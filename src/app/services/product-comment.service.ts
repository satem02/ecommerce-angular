import { Injectable } from '@angular/core';
import { ProductComment } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ProductCommentService {

  constructor() { }
  getAll() {
    let productsComment: ProductComment[] = [
      { id: 1, nameSurname: "Ali Veli", productID: 1, comment: "süper ürün taviye ederim", title: "Süper Kalite Ürün" },
      { id: 2, nameSurname: "Sami Çalışkan", productID: 1, comment: "süper ürün taviye ederim", title: "Kırık Ürün" },
      { id: 3, nameSurname: "Yaşar Veli", productID: 1, comment: "süper ürün taviye ederim", title: "Kötü Ürün" },
      { id: 4, nameSurname: "Mert Ulker", productID: 1, comment: "süper ürün taviye ederim", title: "Çok Başarılı Ürün" },
      { id: 5, nameSurname: "Ali Veli", productID: 4, comment: "süper ürün taviye ederim", title: "Sakın almayın" },
      { id: 6, nameSurname: "Ferhat Kaplan", productID: 2, comment: "süper ürün taviye ederim", title: "Kesin Alın" },
      { id: 9, nameSurname: "Ali Aslan", productID: 2, comment: "süper ürün taviye ederim", title: "Başka hiçbir yerde yok" },
      { id: 7, nameSurname: "Hasan Veli", productID: 2, comment: "süper ürün taviye ederim", title: "Alan Binpişman" },
      { id: 8, nameSurname: "Canan Karatay", productID: 3, comment: "süper ürün taviye ederim", title: "Ben yandım siz yanmayın" },
      { id: 10, nameSurname: "Ali Kemal", productID: 3, comment: "süper ürün taviye ederim", title: "Herkese tavsiye ederim" }
    ];
    return productsComment;
  }
}
