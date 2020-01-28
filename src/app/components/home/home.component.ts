import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities';
import { ProductService } from 'src/app/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      response => {
      this.products = response.filter(x => x.catID == 1),
        error => console.log("Product Servisi Hatalı")
      });
  }
}
