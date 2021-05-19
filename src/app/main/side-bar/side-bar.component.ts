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

  constructor(public router: Router) {}
  activeRoute: string;
  sideBarRoutes: string[] = [
    'dashboard' /**'play', 'add', 'stats', 'settings' */,
  ];

  ngOnInit(): void {}

  handleSideBarClick() {
    this.toggleSideBar.emit(!this.isSideBarOpen);
  }
}
