import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBusyIndicator]',
})
export class BusyIndicatorDirective {
  @Input() appBusyIndicator: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appBusyIndicator) {
      const spinner = this.renderer.createElement('span');
      this.renderer.addClass(spinner, 'busy-indicator');
      this.renderer.appendChild(this.elementRef.nativeElement, spinner);
    } else {
      const spinner =
        this.elementRef.nativeElement.querySelector('.busy-indicator');
      this.renderer.removeChild(this.elementRef.nativeElement, spinner);
    }
  }
}
