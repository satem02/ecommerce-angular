import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMail]' //  <input appMail> </input> 
  //selector: 'input'   // tüm inputlarda <input></input> 
})
export class MailDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
