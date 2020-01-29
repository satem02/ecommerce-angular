import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/entities';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services';

declare var alertify: any
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  categories: Category[];
  formProduct = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]*$")]),
    description: new FormControl(""),
    detail: new FormControl(""),
    catID: new FormControl("")
  })
  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => this.categories = data);
  }

  addProduct() {
    if (this.formProduct.valid) {
      this.productService.insert(this.formProduct.value).subscribe(() => alertify.error(this.formProduct.value.name + ' Eklendi...'))
    }
  }

}
