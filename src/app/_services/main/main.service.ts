import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public isSmallScreen = new BehaviorSubject(false);
  public readonly routes = [
    { name: 'dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'decks', icon: 'content_copy', link: '/decks' },
    { name: 'add', icon: 'add_circle_outline', link: '/add' },
    { name: 'stats', icon: 'bar_chart', link: '/stats' },
    // { name: 'more', icon: 'more_horiz', link: '/more' },
  ];
  constructor() {}
}
