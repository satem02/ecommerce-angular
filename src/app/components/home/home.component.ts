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
  filterProducts: Product[];
  keyword: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //  this.products=this.productService.getAll().filter(f=>f.catID==2);
    //  this.products=this.productService.getAll();
    this.productService.getAll().subscribe(
      response => {
        this.products = response;
        this.filterProducts = response,
          error => console.log("Product Servisi Hatalı")
      });
  }
  keywordChange() {
    if (this.keyword && this.keyword.length > 0)
      this.filterProducts = this.products.filter(f => f.name.toLocaleLowerCase().indexOf(this.keyword.toLocaleLowerCase()) != -1);
    else
      this.filterProducts = this.products;
  }
}
