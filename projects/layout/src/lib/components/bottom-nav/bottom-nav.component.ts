import { Component } from '@angular/core';

@Component({
  selector: 'lt-bottom-nav',
  template: `
    <nav class="bottom-nav">
      <ng-content></ng-content>
    </nav>
  `,
  styles: [`
    .bottom-nav {
      height: 56px;
      background: #ffffff;
      border-top: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 998;
    }
  `],
  standalone: true
})
export class BottomNavComponent {}
