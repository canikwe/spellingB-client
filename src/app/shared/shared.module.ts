import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckListItemComponent } from './components/deck-list-item/deck-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeckListComponent, DeckListItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [
    DeckListComponent,
    DeckListItemComponent,
    MatCardModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
