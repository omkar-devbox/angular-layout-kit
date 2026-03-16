import { Component } from '@angular/core';

@Component({
  selector: 'lt-top-navbar',
  template: `
    <header class="top-navbar">
      <div class="left">
        <ng-content select="[ltNavLeft]"></ng-content>
      </div>
      <div class="center">
        <ng-content select="[ltNavCenter]"></ng-content>
      </div>
      <div class="right">
        <ng-content select="[ltNavRight]"></ng-content>
      </div>
    </header>
  `,
  styles: [`
    .top-navbar {
      height: 64px;
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      width: 100%;
    }
  `],
  standalone: true
})
export class TopNavbarComponent {}
