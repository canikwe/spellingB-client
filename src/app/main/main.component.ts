import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../_services/main/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public isSideBarOpen: boolean;
  private subscriptions = new Subscription();

  constructor(
    private breakpointObserver: BreakpointObserver,
    public mainService: MainService
  ) {}

  ngOnInit(): void {
    this.isSideBarOpen = true;
    this.subscribeToBreakpoints();
  }

  private subscribeToBreakpoints(): void {
    const subscription = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe(this.setIsSmallScreen);
    this.subscriptions.add(subscription);
  }

  private setIsSmallScreen = (result: BreakpointState): void => {
    this.mainService.isSmallScreen.next(result.matches);
  };
}
