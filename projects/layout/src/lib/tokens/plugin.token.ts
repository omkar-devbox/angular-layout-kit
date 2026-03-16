import { InjectionToken } from '@angular/core';
import { LayoutPluginModel } from '../models/plugin.model';

export const PLUGIN_TOKEN = new InjectionToken<LayoutPluginModel[]>('PLUGIN_TOKEN');
