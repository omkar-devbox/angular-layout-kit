import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'lt-layout-container',
  template: `
    <div class="layout-wrapper">
      <div class="sidebar-slot">
        <ng-content select="lt-left-sidenav"></ng-content>
      </div>
      
      <div class="main-content-wrapper" [style.padding-left.px]="leftWidth()">
        <ng-content select="lt-top-navbar"></ng-content>
        
        <main class="main-content">
          <ng-content></ng-content>
        </main>

        <ng-content select="lt-footer"></ng-content>
      </div>

      <ng-content select="lt-right-sidenav"></ng-content>
      <ng-content select="lt-bottom-nav"></ng-content>
    </div>
  `,
  styles: [`
    .layout-wrapper { display: flex; flex-direction: column; min-height: 100vh; }
    .main-content-wrapper { flex: 1; display: flex; flex-direction: column; transition: padding 0.3s ease; }
    .main-content { flex: 1; padding: 24px; background: #f3f4f6; }
    @media (max-width: 768px) {
      .main-content-wrapper { padding-left: 0 !important; }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class LayoutContainerComponent {
  readonly layoutService = inject(LayoutService);
  readonly leftWidth = this.layoutService.leftWidth;
}
