import { MenuItem } from '../interfaces/menu-item.interface';

export class MenuBuilder {
  private items: MenuItem[] = [];

  static create(): MenuBuilder {
    return new MenuBuilder();
  }

  add(item: MenuItem): MenuBuilder {
    this.items.push(item);
    return this;
  }

  build(): MenuItem[] {
    return this.items;
  }
}
