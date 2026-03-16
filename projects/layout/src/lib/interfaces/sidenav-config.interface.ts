import { SidenavTheme } from "./sidenav-theme.interface";

export interface SidenavConfig {

  width?: string;
  collapsedWidth?: string;

  collapsible?: boolean;

  defaultCollapsed?: boolean;

  hoverExpand?: boolean;

  scrollable?: boolean;

  activeHighlight?: boolean;

  theme?: SidenavTheme;

}