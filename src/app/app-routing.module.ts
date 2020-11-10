import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './public/admin/admin.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',component: DashboardComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'admin',component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
