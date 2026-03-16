import { Injectable, inject } from '@angular/core';
import { StateService } from './state.service';
import { SidenavService } from './sidenav.service';
import { MenuService } from './menu.service';
import { ThemeService } from './theme.service';
import { ResponsiveService } from './responsive.service';
import { PluginService } from './plugin.service';
import { LayoutConfig } from '../interfaces/layout-config.interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  readonly state = inject(StateService);
  readonly sidenav = inject(SidenavService);
  readonly menu = inject(MenuService);
  readonly theme = inject(ThemeService);
  readonly responsive = inject(ResponsiveService);
  readonly plugins = inject(PluginService);

  // Expose signals for backward compatibility
  readonly config = this.state.config;
  readonly leftSidenavOpen = this.sidenav.leftOpen;
  readonly rightSidenavOpen = this.sidenav.rightOpen;
  readonly isMobile = this.responsive.isMobile;
  readonly leftWidth = this.sidenav.leftWidth;
  readonly rightWidth = this.sidenav.rightWidth;

  updateConfig(partialConfig: Partial<LayoutConfig>) {
    this.state.updateConfig(partialConfig);
  }

  toggleLeftSidenav() {
    this.sidenav.toggleLeft();
  }

  toggleRightSidenav() {
    this.sidenav.toggleRight();
  }

  setMobile(value: boolean) {
    this.responsive.setMobile(value);
  }
}

