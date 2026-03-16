import { Directive, inject, HostListener } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Directive({
  selector: '[ltHoverExpand]',
  standalone: true
})
export class HoverExpandDirective {
  private readonly sidenav = inject(SidenavService);
  private wasOpen = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.wasOpen = this.sidenav.leftOpen();
    if (!this.wasOpen) {
      this.sidenav.setLeftOpen(true);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.wasOpen) {
      this.sidenav.setLeftOpen(false);
    }
  }
}
