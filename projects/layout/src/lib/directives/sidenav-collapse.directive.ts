import { Directive, HostListener, inject, Input } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Directive({
  selector: '[ltSidenavCollapse]',
  standalone: true
})
export class SidenavCollapseDirective {
  private readonly sidenav = inject(SidenavService);

  @Input('ltSidenavCollapse') side: 'left' | 'right' = 'left';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    if (this.side === 'left') {
      this.sidenav.setLeftOpen(!this.sidenav.leftOpen());
    } else {
      this.sidenav.setRightOpen(!this.sidenav.rightOpen());
    }
  }
}
