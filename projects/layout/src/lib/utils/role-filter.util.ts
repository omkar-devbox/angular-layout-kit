import { MenuItemModel } from '../models/menu-item.model';
import { UserRoleModel } from '../models/user-role.model';

export class RoleFilterUtil {
  static filterMenuItems(items: MenuItemModel[], user: UserRoleModel): MenuItemModel[] {
    return items
      .filter(item => !item.permissions || item.permissions.length === 0 || item.permissions.some(p => user.hasPermission(p)))
      .map(item => {
        if (item.children) {
          return new MenuItemModel({
            ...item,
            children: this.filterMenuItems(item.children, user)
          });
        }
        return item;
      });
  }

  static hasAccess(requiredPermissions: string[], user: UserRoleModel): boolean {
    if (!requiredPermissions || requiredPermissions.length === 0) return true;
    return requiredPermissions.some(p => user.hasPermission(p));
  }
}
