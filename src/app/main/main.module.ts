import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, MatSidenavModule],
})
export class MainModule {}
