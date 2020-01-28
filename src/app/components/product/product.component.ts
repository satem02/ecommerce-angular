import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products=this.productService.getAll();
  }


}
