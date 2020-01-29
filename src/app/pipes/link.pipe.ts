import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  // value pipe'ın kullanıldigi obje burada string tipinde
  // :string ise dönüs degeri
  transform(value:string): string {
    return value.toLocaleLowerCase()
    .replace(new RegExp("ö", "g"), "o")
    .replace(new RegExp("ü", "g"), "u")
    .replace(new RegExp("ç", "g"), "c")
    .replace(new RegExp("ı", "g"), "i")
    .replace(new RegExp(" ", "g"), "-")
    .replace(new RegExp("ğ", "g"), "g")
    ;
}
}
