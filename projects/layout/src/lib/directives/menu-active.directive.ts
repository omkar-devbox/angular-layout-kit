import { Directive, inject, Input, ElementRef, Renderer2, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[ltMenuActive]',
  standalone: true
})
export class MenuActiveDirective {
  private readonly router = inject(Router);
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @Input('ltMenuActive') route!: string;
  @Input() activeClass = 'active';

  constructor() {
    this.checkActive();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.checkActive());
  }

  private checkActive(): void {
    const currentUrl = this.router.url;
    const isActive = currentUrl === this.route || currentUrl.startsWith(this.route + '/');
    
    if (isActive) {
      this.renderer.addClass(this.el.nativeElement, this.activeClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.activeClass);
    }
  }
}
