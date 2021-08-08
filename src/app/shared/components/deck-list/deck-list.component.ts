import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
})
export class DeckListComponent implements OnInit {
  decks: number[];
  backgroundColorMap = { 0: '#D8E2DC', 1: '#FFE5D9', 2: '#FFCAD4' };

  constructor() {}

  ngOnInit(): void {
    this.decks = new Array(3).fill(3);
    console.log(this.decks);
  }
}
