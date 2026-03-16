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
  brandName = 'TradeFlow';
  brandLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
  currentUser = {
    name: 'Omkar Rege',
    role: 'Fullstack Developer',
    avatar: 'https://github.com/omkarpathak.png'
  };

  toggleSidenav() {
    this.layoutService.toggleLeftSidenav();
  }

  switchTheme() {
    const current = this.themeService.theme();
    const nextTheme = current === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(nextTheme);

    if (nextTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  simulateMobile() {
    const isMobile = this.layoutService.isMobile();
    this.layoutService.setMobile(!isMobile);
  }
}
