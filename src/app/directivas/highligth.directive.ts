import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() appHighligth = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.highligth(this.appHighligth || 'yellow');

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highligth('');
  }

  highligth(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
