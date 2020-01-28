import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  detail;
  constructor(private productService: ProductService, private activetedRouted: ActivatedRoute) { }

  ngOnInit() {

    // Ornek parametre okuma sekilleri.
    // this.detail=this.productService.getAll().find(f=>f.id==Number(this.activatedRoute.snapshot.paramMap.get("id"))).description;
    //this.detail=this.productService.getAll().find(f=>f.name.toLowerCase().replace(" ","-")==this.activatedRoute.snapshot.paramMap.get("name")).description;

    this.activetedRouted.params.subscribe(p => {
      this.detail = this.productService.getAll().find(x => x.id == p["id"]).description;
    });
  }
}
