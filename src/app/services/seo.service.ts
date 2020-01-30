import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }
  setTitle(title) {
    this.title.setTitle(title);
  }

  addMeta(name, content) {
    this.meta.addTag({ name, content });
  }

}
