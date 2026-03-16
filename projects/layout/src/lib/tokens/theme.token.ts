import { InjectionToken } from '@angular/core';
import { ThemeModel } from '../models/theme.model';

export const THEME_TOKEN = new InjectionToken<ThemeModel>('THEME_TOKEN');
