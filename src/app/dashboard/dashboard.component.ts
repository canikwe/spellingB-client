import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard/dashboard.service';
import {
  DictionaryWordRes,
  GetUserForDashboardQuery,
  User,
} from '../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { QueryResponseService } from '../_services/query-response/query-response.service';
import { Subscription } from 'rxjs';
import { MainService } from '../_services/main/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public greeting: string;
  public user: Partial<User>;
  public randomWord: DictionaryWordRes;
  public isLoading = true;

  private subscriptions = new Subscription();

  constructor(
    private dashboardService: DashboardService,
    private queryResponseService: QueryResponseService,
    public mainService: MainService
  ) {}

  ngOnInit(): void {
    this.subscribeToUserInfo();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private subscribeToUserInfo(): void {
    const observable = this.dashboardService.getUser();
    observable.subscribe(
      (res) => this.queryResponseService.handleRes(res, this.handleSuccess),
      this.queryResponseService.handleError
    );
  }

  private handleSuccess = (
    res: ApolloQueryResult<GetUserForDashboardQuery>
  ): void => {
    this.isLoading = false; // TODO: This needs to be in the response + error handlers as well
    this.user = res.data.User as any;
    this.randomWord = res.data.RandomWordAndDefinition;
    this.greeting = `Good ${this.greetingTime}, ${this.user.firstName}`;
  };

  private get greetingTime(): 'Evening' | 'Morning' {
    return new Date().toLocaleTimeString().slice(-2) === 'PM'
      ? 'Evening'
      : 'Morning'; /** TODO: add a better parser for afternoon greeting as well */
  }
}
