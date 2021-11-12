import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../../../generated/graphql';

@Component({
  selector: 'app-deck-list-item',
  templateUrl: './deck-list-item.component.html',
  styleUrls: ['./deck-list-item.component.scss'],
})
export class DeckListItemComponent {
  @Input() deck: Partial<Deck>;
  @Input() backgroundColor: string;

  constructor() {}
}
