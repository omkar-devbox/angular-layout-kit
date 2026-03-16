import { MenuItem } from '../interfaces/menu-item.interface';

export const DEFAULT_MENU_CONFIG: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '/settings'
  }
];
