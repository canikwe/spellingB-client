import { Component, Input, OnInit } from '@angular/core';
import { DictionaryWordRes } from '../../../../generated/graphql';

@Component({
  selector: 'app-word-of-the-day',
  templateUrl: './word-of-the-day.component.html',
  styleUrls: ['./word-of-the-day.component.scss'],
})
export class WordOfTheDayComponent implements OnInit {
  @Input() public word: DictionaryWordRes;

  constructor() {}

  ngOnInit(): void {}
}
