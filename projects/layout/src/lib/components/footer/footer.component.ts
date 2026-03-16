import { Component } from '@angular/core';

@Component({
  selector: 'lt-footer',
  template: `
    <footer class="footer">
      <ng-content></ng-content>
    </footer>
  `,
  styles: [`
    .footer {
      height: 48px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
      font-size: 13px;
      color: #6b7280;
    }
  `],
  standalone: true
})
export class FooterComponent {}
