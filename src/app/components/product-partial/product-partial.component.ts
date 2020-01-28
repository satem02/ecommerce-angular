import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-partial',
  templateUrl: './product-partial.component.html',
  styleUrls: ['./product-partial.component.scss']
})
export class ProductPartialComponent implements OnInit {

  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}
