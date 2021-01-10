import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private buttonRef: ElementRef) {
    this.buttonRef.nativeElement.style.backgroundColor = 'var(--theme-primary)';
    this.buttonRef.nativeElement.style.border = 'none';
    this.buttonRef.nativeElement.style.padding = 'var(--space-sm)';
    this.buttonRef.nativeElement.style.borderRadius = '10px';
    this.buttonRef.nativeElement.style.color = 'white';
    this.buttonRef.nativeElement.style.maxWidth = '400px';
    this.buttonRef.nativeElement.style.width = '100%';
    this.buttonRef.nativeElement.style.height = '42px';
    this.buttonRef.nativeElement.style.cursor = 'pointer';
  }

}
