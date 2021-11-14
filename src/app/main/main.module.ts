import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SideNavComponent } from './side-bar/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [MainComponent, SideNavComponent, BottomNavComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MainModule {}
