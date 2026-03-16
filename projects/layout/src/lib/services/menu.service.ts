import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  readonly menuItems = signal<any[]>([]); // Placeholder for actual menu items

  setMenuItems(items: any[]) {
    this.menuItems.set(items);
  }
}
