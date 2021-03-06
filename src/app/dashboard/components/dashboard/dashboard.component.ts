import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/_services/main/main.service';
import {
  User,
  DictionaryEntry,
  GetUserForDashboardQuery,
  GetRandomWordAndDefinitionQuery,
} from 'src/generated/graphql';
import { DashboardService } from 'src/app/_services/dashboard/dashboard.service';
import { QueryResponseService } from 'src/app/_services/query-response/query-response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public greeting: string;
  public user: Partial<User>;
  public randomWord: DictionaryEntry;
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

  handleGetNewWord() {
    this.randomWord = null;
    const observable = this.dashboardService.getRandomWord();
    observable.subscribe(
      (res) =>
        this.queryResponseService.handleRes(res, this.handleGetWordSuccess),
      this.queryResponseService.handleError
    );
  }

  private subscribeToUserInfo(): void {
    const observable = this.dashboardService.getUser();
    observable.subscribe(
      (res) =>
        this.queryResponseService.handleRes(res, this.handleInitialDataSuccess),
      this.queryResponseService.handleError
    );
  }

  private handleInitialDataSuccess = (
    res: ApolloQueryResult<GetUserForDashboardQuery>
  ): void => {
    this.isLoading = false; // TODO: This needs to be in the response + error handlers as well
    this.user = res.data.User as any;
    this.randomWord = res.data.RandomWordAndDefinition;
    this.greeting = `Good ${this.greetingTime}, ${this.user.firstName}`;
  };

  private handleGetWordSuccess = (
    res: ApolloQueryResult<GetRandomWordAndDefinitionQuery>
  ): void => {
    this.randomWord = res.data.RandomWordAndDefinition;
  };

  private get greetingTime(): 'Evening' | 'Morning' {
    return new Date().toLocaleTimeString().slice(-2) === 'PM'
      ? 'Evening'
      : 'Morning'; /** TODO: add a better parser for afternoon greeting as well */
  }
}
