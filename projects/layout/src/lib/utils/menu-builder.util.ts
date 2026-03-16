import { MenuItemModel } from '../models/menu-item.model';

export class MenuBuilder {
  private items: MenuItemModel[] = [];

  static create(): MenuBuilder {
    return new MenuBuilder();
  }

  add(item: any): MenuBuilder {
    this.items.push(new MenuItemModel(item));
    return this;
  }

  addGroup(name: string, items: any[]): MenuBuilder {
    items.forEach(item => {
      this.items.push(new MenuItemModel({ ...item, group: name }));
    });
    return this;
  }

  build(): MenuItemModel[] {
    return this.items;
  }
}
