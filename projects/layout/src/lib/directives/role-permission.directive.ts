import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { StateService } from '../services/state.service';

@Directive({
  selector: '[ltRolePermission]',
  standalone: true
})
export class RolePermissionDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly state = inject(StateService);

  @Input() set ltRolePermission(roles: string | string[]) {
    const requiredRoles = Array.isArray(roles) ? roles : [roles];
    this.updateView(requiredRoles);
  }

  private updateView(requiredRoles: string[]): void {
    // This is a placeholder for actual user role logic
    // For now, we'll assume the user has a 'user' role by default or check against config
    const userRoles = ['admin', 'user']; // Placeholder
    const hasPermission = requiredRoles.some(role => userRoles.includes(role));

    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
