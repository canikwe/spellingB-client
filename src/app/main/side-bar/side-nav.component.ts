import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../_services/main/main.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Input() public isSideBarOpen: boolean;
  @Output('toggleSideBar') private toggleSideBar = new EventEmitter();

  public activeRoute: string;

  constructor(public router: Router, public mainService: MainService) {}

  handleSideBarClick(): void {
    this.toggleSideBar.emit(!this.isSideBarOpen);
  }
}
