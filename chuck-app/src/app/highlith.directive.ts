import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlith]',
  standalone: true,
})
export class HighlithDirective {
  constructor(elemele: ElementRef) {
    console.log(elemele);
  }
}
