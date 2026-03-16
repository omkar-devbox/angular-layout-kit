import { LayoutConfig } from '../interfaces/layout-config.interface';
import { DEFAULT_SIDENAV_CONFIG } from './default-sidenav.config';
import { DEFAULT_THEME_CONFIG } from './default-theme.config';
import { DEFAULT_RESPONSIVE_CONFIG } from './default-responsive.config';

export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  leftSidenavWidth: 265,
  rightSidenavWidth: 265,
  topNavbarHeight: 64,
  bottomNavHeight: 56,
  footerHeight: 48,
  theme: DEFAULT_THEME_CONFIG,
  sidenav: DEFAULT_SIDENAV_CONFIG,
  responsive: DEFAULT_RESPONSIVE_CONFIG
};
