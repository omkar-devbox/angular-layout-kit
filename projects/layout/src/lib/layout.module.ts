import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { SidenavToggleDirective } from './directives/sidenav-toggle.directive';
import { SidenavCollapseDirective } from './directives/sidenav-collapse.directive';
import { MenuActiveDirective } from './directives/menu-active.directive';
import { RolePermissionDirective } from './directives/role-permission.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { HoverExpandDirective } from './directives/hover-expand.directive';
import { ResponsiveHideDirective } from './directives/responsive-hide.directive';

@NgModule({
  imports: [
    CommonModule,
    LeftSidenavComponent,
    RightSidenavComponent,
    TopNavbarComponent,
    BottomNavComponent,
    FooterComponent,
    LayoutContainerComponent,
    SidenavToggleDirective,
    SidenavCollapseDirective,
    MenuActiveDirective,
    RolePermissionDirective,
    TooltipDirective,
    HoverExpandDirective,
    ResponsiveHideDirective
  ],
  exports: [
    LeftSidenavComponent,
    RightSidenavComponent,
    TopNavbarComponent,
    BottomNavComponent,
    FooterComponent,
    LayoutContainerComponent,
    SidenavToggleDirective,
    SidenavCollapseDirective,
    MenuActiveDirective,
    RolePermissionDirective,
    TooltipDirective,
    HoverExpandDirective,
    ResponsiveHideDirective
  ]
})
export class LayoutModule { }
