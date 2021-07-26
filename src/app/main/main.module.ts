import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [MainComponent, SideBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
  ],
})
export class MainModule {}
