import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DictionaryEntry } from '../../../../generated/graphql';

@Component({
  selector: 'app-word-of-the-day',
  templateUrl: './word-of-the-day.component.html',
  styleUrls: ['./word-of-the-day.component.scss'],
})
export class WordOfTheDayComponent implements OnInit {
  @Input() public word: DictionaryEntry;
  @Output('getNewWord') getNewWord = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
