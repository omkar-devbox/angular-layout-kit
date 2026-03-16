import { InjectionToken } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

export const MENU_ITEMS = new InjectionToken<MenuItem[]>('MENU_ITEMS');
export const LAYOUT_TOKEN = new InjectionToken<string>('LAYOUT_TOKEN');
