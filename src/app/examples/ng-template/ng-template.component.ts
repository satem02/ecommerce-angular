import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  districtList:string[] = ["Beşiktaş","Kadıköy"];
  cityList:string[] = ["İstanbul","Ankara"];
  constructor() { }

  ngOnInit() {
  }

}


// indexi tek olnalari t degiskenine true yada false atar
// <ul class="list-group">
// <li class="list-group-item" [class.yesil]="t" *ngFor="let sehir of sehirler;odd as t">{{sehir}}</li>
// </ul>
