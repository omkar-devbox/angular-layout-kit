import { Injectable, signal, inject } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private readonly sidenav = inject(SidenavService);
  
  readonly isMobile = signal(false);

  setMobile(value: boolean) {
    this.isMobile.set(value);
    if (value) {
      this.sidenav.setLeftOpen(false);
      this.sidenav.setRightOpen(false);
    }
  }
}
