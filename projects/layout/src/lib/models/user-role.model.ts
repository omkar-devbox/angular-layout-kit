export class UserRoleModel {
  id: string;
  name: string;
  permissions: string[];

  constructor(id: string, name: string, permissions: string[] = []) {
    this.id = id;
    this.name = name;
    this.permissions = permissions;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission) || this.permissions.includes('*');
  }
}
