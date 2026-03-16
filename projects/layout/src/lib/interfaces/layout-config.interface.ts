import { InjectionToken } from '@angular/core';
import { SidenavConfig } from './sidenav-config.interface';
import { SidenavTheme } from './sidenav-theme.interface';
import { ResponsiveConfig } from './responsive-config.interface';

export interface LayoutConfig {
  leftSidenavWidth: number;
  rightSidenavWidth: number;
  topNavbarHeight: number;
  bottomNavHeight: number;
  footerHeight: number;
  theme?: SidenavTheme | 'light' | 'dark';
  sidenav?: SidenavConfig;
  responsive?: ResponsiveConfig;
}

export const LAYOUT_CONFIG = new InjectionToken<LayoutConfig>('LAYOUT_CONFIG');
