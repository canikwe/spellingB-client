import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() isSideBarOpen: boolean;
  @Output('toggleSideBar') toggleSideBar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSideBarClick() {
    this.toggleSideBar.emit(!this.isSideBarOpen);
  }
}
