import { SidenavStateModel } from './sidenav-state.model';

export class LayoutStateModel {
  leftSidenav: SidenavStateModel;
  rightSidenav: SidenavStateModel;
  isMobile: boolean;
  activeTheme: string;

  constructor() {
    this.leftSidenav = new SidenavStateModel('left');
    this.rightSidenav = new SidenavStateModel('right', false);
    this.isMobile = false;
    this.activeTheme = 'light';
  }

  setMobile(value: boolean): void {
    this.isMobile = value;
    if (value) {
      this.leftSidenav.isOpen = false;
      this.rightSidenav.isOpen = false;
    }
  }
}
