import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const layoutRoutes: Routes = [
  {
  path: '', component: LayoutComponent ,
  children: [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' }
  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }