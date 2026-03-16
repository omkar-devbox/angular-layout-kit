import { Injectable, signal, computed, inject } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private readonly state = inject(StateService);

  readonly leftOpen = signal(true);
  readonly rightOpen = signal(false);

  readonly leftWidth = computed(() => {
    const cfg = this.state.config();
    return this.leftOpen() ? cfg.leftSidenavWidth : 72;
  });

  readonly rightWidth = computed(() => {
    const cfg = this.state.config();
    return this.rightOpen() ? cfg.rightSidenavWidth : 0;
  });

  toggleLeft() {
    this.leftOpen.update(v => !v);
  }

  toggleRight() {
    this.rightOpen.update(v => !v);
  }

  setLeftOpen(value: boolean) {
    this.leftOpen.set(value);
  }

  setRightOpen(value: boolean) {
    this.rightOpen.set(value);
  }
}
