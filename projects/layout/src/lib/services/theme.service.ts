import { Injectable, inject, computed } from '@angular/core';
import { StateService } from './state.service';
import { SidenavTheme } from '../interfaces/sidenav-theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly state = inject(StateService);

  readonly theme = computed(() => this.state.config().theme);

  setTheme(theme: SidenavTheme | 'light' | 'dark') {
    this.state.updateConfig({ theme });
  }
}
