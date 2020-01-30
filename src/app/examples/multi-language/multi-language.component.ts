import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.scss']
})
export class MultiLanguageComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

  public changeLanguage(language: string) {
    this.translateService.use(language);
  }

}
