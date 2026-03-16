import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  LeftSidenavComponent, 
  LayoutContainerComponent, 
  TopNavbarComponent, 
  FooterComponent,
  LayoutService,
  ThemeService
} from 'layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LeftSidenavComponent, 
    LayoutContainerComponent, 
    TopNavbarComponent, 
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private readonly layoutService = inject(LayoutService);
  private readonly themeService = inject(ThemeService);

  readonly menu = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/dashboard'
    },
    {
      label: 'Portfolio',
      icon: 'folder',
      children: [
        {
          label: 'Stocks',
          route: '/stocks'
        },
        {
          label: 'Mutual Funds',
          children: [
            {
              label: 'SIP',
              route: '/sip'
            }
          ]
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];

  sidebarWidth = '250px';
  sidebarCollapsedWidth = '80px';

  toggleSidenav() {
    this.layoutService.toggleLeftSidenav();
  }

  switchTheme() {
    const current = this.themeService.theme();
    this.themeService.setTheme(current === 'light' ? 'dark' : 'light');
  }

  simulateMobile() {
    const isMobile = this.layoutService.isMobile();
    this.layoutService.setMobile(!isMobile);
  }
}
