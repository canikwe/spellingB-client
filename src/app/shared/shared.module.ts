import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckListItemComponent } from './components/deck-list-item/deck-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './components/loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [DeckListComponent, DeckListItemComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [DeckListComponent, DeckListItemComponent, LoaderComponent],
})
export class SharedModule {}
