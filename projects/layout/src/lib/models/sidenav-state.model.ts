export class SidenavStateModel {
  side: 'left' | 'right';
  isOpen: boolean;
  width: number;
  isCollapsed: boolean;

  constructor(side: 'left' | 'right', isOpen = true, width = 265) {
    this.side = side;
    this.isOpen = isOpen;
    this.width = width;
    this.isCollapsed = !isOpen;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.isCollapsed = !this.isOpen;
  }
}
