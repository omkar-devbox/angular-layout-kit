import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { MutualFundsComponent } from './pages/mutual-funds/mutual-funds.component';
import { SipComponent } from './pages/sip/sip.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'mutual-funds', component: MutualFundsComponent },
  { path: 'sip', component: SipComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
