import { InjectionToken } from '@angular/core';
import { SidenavConfig } from '../interfaces/sidenav-config.interface';

export const SIDENAV_CONFIG_TOKEN = new InjectionToken<SidenavConfig>('SIDENAV_CONFIG_TOKEN');
