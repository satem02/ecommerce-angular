import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductComment } from 'src/app/entities';
import { ProductCommentService } from 'src/app/services';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent implements OnInit {

  data: ProductComment[];
  @Input() productId: number;
  @Output() count: EventEmitter<number> = new EventEmitter();

  constructor(private productCommentService: ProductCommentService) { }

  ngOnInit() {
    this.data = this.productCommentService.getAll().filter(f => f.productID == this.productId);
    this.count.emit(this.data.length);
  }

}
