export class MenuItemModel {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItemModel[];
  group?: string;
  permissions?: string[];
  expanded = false;

  constructor(data: any) {
    this.id = data.id;
    this.label = data.label;
    this.icon = data.icon;
    this.route = data.route;
    this.group = data.group;
    this.permissions = data.permissions || [];
    if (data.children) {
      this.children = data.children.map((child: any) => new MenuItemModel(child));
    }
  }

  hasChildren(): boolean {
    return !!this.children && this.children.length > 0;
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
