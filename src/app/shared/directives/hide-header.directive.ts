import { Directive, Renderer } from '@angular/core';

@Directive({
  selector: '[hide-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
  },
})
export class HideHeaderDirective {
  public header: HTMLElement;

  constructor(public readonly renderer: Renderer) {}

  public ngOnInit(): void {
    this.header = document.querySelector('.header');
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
  }

  public onContentScroll(event): void {
    if (event.detail.scrollTop > 0) {
      this.renderer.setElementStyle(this.header, 'top', '-3.5rem');
    } else {
      this.renderer.setElementStyle(this.header, 'top', '0');
    }
  }
}
