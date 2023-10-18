import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {

  @Input() color: string;

  constructor(private elementRef: ElementRef)  {
  }

  public ngOnChanges() {
    this.elementRef.nativeElement.style.color = this.color
  }
}
