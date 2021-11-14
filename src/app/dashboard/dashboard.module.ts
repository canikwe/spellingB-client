import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { WordOfTheDayComponent } from './components/word-of-the-day/word-of-the-day.component';

@NgModule({
  declarations: [DashboardComponent, WordOfTheDayComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDividerModule,
  ],
})
export class DashboardModule {}
