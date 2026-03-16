import { Directive, HostListener, inject, Input } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Directive({
  selector: '[ltSidenavToggle]',
  standalone: true
})
export class SidenavToggleDirective {
  private readonly layout = inject(LayoutService);
  
  @Input('ltSidenavToggle') side: 'left' | 'right' = 'left';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    if (this.side === 'left') {
      this.layout.toggleLeftSidenav();
    } else {
      this.layout.toggleRightSidenav();
    }
  }
}
