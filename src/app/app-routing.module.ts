import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/create', component: DeviceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
