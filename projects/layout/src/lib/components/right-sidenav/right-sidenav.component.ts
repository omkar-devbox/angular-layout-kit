import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'lt-right-sidenav',
  template: `
    <aside class="right-sidebar" [class.open]="isOpen()">
      <div class="header">
        <ng-content select="[ltRightHeader]"></ng-content>
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </aside>
  `,
  styles: [`
    .right-sidebar {
      width: 265px;
      height: 100vh;
      background: #ffffff;
      border-left: 1px solid #e5e7eb;
      position: fixed;
      right: -265px;
      top: 0;
      transition: right 0.3s ease;
      z-index: 999;
      &.open { right: 0; }
    }
    .header { height: 64px; padding: 0 16px; display: flex; align-items: center; border-bottom: 1px solid #f3f4f6; }
    .content { padding: 16px; }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class RightSidenavComponent {
  readonly layoutService = inject(LayoutService);
  readonly isOpen = this.layoutService.rightSidenavOpen;
}
