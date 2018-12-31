import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {LeftSidebarComponent} from '../shared/components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../shared/components/right-sidebar/right-sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule    
  ],
  declarations: [
    LayoutComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }