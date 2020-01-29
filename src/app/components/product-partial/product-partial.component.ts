import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/entities';
declare var alertify: any;

@Component({
  selector: 'app-product-partial',
  templateUrl: './product-partial.component.html',
  styleUrls: ['./product-partial.component.scss']
})
export class ProductPartialComponent implements OnInit {

  activeProduct: Product;
  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

  btnAddClick(product: Product) {
    alertify.success(product.name + ' Eklendi.');
  }

  showModal(product: Product) {
    this.activeProduct = product;
  }

}
