import { Component, Input } from '@angular/core';
import { Deck } from '../../../../generated/graphql';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
})
export class DeckListComponent {
  @Input() decks: Deck[];
  backgroundColorMap = { 0: '#D8E2DC', 1: '#FFE5D9', 2: '#FFCAD4' };

  constructor() {}
}
