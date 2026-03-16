import { Injectable, signal, inject } from '@angular/core';
import { LAYOUT_CONFIG, LayoutConfig } from '../interfaces/layout-config.interface';
import { DEFAULT_LAYOUT_CONFIG } from '../configs/default-layout.config';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly injectedConfig = inject(LAYOUT_CONFIG, { optional: true }) as LayoutConfig | null;

  private readonly initialConfig: LayoutConfig = {
    ...DEFAULT_LAYOUT_CONFIG,
    ...(this.injectedConfig || {}),
    sidenav: {
      ...(DEFAULT_LAYOUT_CONFIG.sidenav || {}),
      ...(this.injectedConfig?.sidenav || {})
    },
    theme: typeof this.injectedConfig?.theme === 'object'
      ? { ...(DEFAULT_LAYOUT_CONFIG.theme as object), ...this.injectedConfig.theme }
      : (this.injectedConfig?.theme || DEFAULT_LAYOUT_CONFIG.theme),
    responsive: {
      ...(DEFAULT_LAYOUT_CONFIG.responsive || {}),
      ...(this.injectedConfig?.responsive || {})
    }
  } as LayoutConfig;

  readonly config = signal<LayoutConfig>(this.initialConfig);

  updateConfig(partialConfig: Partial<LayoutConfig>) {
    this.config.update(current => ({
      ...current,
      ...partialConfig,
      sidenav: partialConfig.sidenav ? { ...current.sidenav, ...partialConfig.sidenav } : current.sidenav,
      theme: typeof partialConfig.theme === 'object'
        ? { ...(current.theme as object), ...partialConfig.theme }
        : (partialConfig.theme || current.theme),
      responsive: partialConfig.responsive ? { ...current.responsive, ...partialConfig.responsive } : current.responsive
    }));
  }
}
