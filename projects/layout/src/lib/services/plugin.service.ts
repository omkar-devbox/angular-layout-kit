import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PluginService {
  readonly plugins = signal<any[]>([]); // Placeholder for layout plugins

  registerPlugin(plugin: any) {
    this.plugins.update(p => [...p, plugin]);
  }
}
