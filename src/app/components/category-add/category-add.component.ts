import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities';
import { CategoryService } from 'src/app/services/category.service';
declare var alertify: any;

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})

export class CategoryAddComponent implements OnInit {

  model: Category = new Category();
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  add() {
    this.categoryService.insert(this.model).subscribe(() => alertify.success(this.model.name + ' Eklendi...'))
  }
}
