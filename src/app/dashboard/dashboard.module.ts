import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { WordOfTheDayComponent } from './components/word-of-the-day/word-of-the-day.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DashboardComponent, WordOfTheDayComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDividerModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
