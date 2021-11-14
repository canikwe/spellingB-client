import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() isSideBarOpen: boolean;
  @Output('toggleSideBar') toggleSideBar = new EventEmitter();

  public activeRoute: string;
  public sideBarRoutes: string[] = [
    'dashboard' /**'play', 'add', 'stats', 'settings' */,
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  handleSideBarClick(): void {
    this.toggleSideBar.emit(!this.isSideBarOpen);
  }
}
