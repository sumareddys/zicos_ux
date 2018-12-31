import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}