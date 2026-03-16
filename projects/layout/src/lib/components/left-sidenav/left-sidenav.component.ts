import { Component, input, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'lt-left-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent {
  menu = input<MenuItem[]>([]);
  width = input('250px');
  collapsedWidth = input('80px');

  private readonly sidenavService = inject(SidenavService);
  private readonly router = inject(Router);

  readonly isCollapsed = computed(() => !this.sidenavService.leftOpen());
  
  readonly sidebarWidth = computed(() => 
    this.isCollapsed() ? this.collapsedWidth() : this.width()
  );

  readonly expandedItems = signal<Set<MenuItem>>(new Set());

  toggleSidenav() {
    this.sidenavService.toggleLeft();
  }

  toggleSubmenu(item: MenuItem, event: Event) {
    event.stopPropagation();
    if (this.isCollapsed()) {
      this.sidenavService.setLeftOpen(true);
    }
    
    const expanded = new Set(this.expandedItems());
    if (expanded.has(item)) {
      expanded.delete(item);
    } else {
      expanded.add(item);
    }
    this.expandedItems.set(expanded);
  }

  isExpanded(item: MenuItem): boolean {
    return this.expandedItems().has(item);
  }

  hasChildren(item: MenuItem): boolean {
    return !!item.children && item.children.length > 0;
  }

  isActive(item: MenuItem): boolean {
    if (item.route && this.router.isActive(item.route, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    })) {
      return true;
    }
    return item.children?.some(child => this.isActive(child)) ?? false;
  }
}
