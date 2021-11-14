import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard/dashboard.service';
import {
  DictionaryWordRes,
  GetUserForDashboardQuery,
  User,
} from '../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { QueryResponseService } from '../_services/query-response/query-response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public greeting: string;
  public user: Partial<User>;
  public randomWord: DictionaryWordRes;

  constructor(
    private dashboardService: DashboardService,
    private queryResponseService: QueryResponseService
  ) {}

  ngOnInit(): void {
    this.subscribeToUserInfo();
  }

  private subscribeToUserInfo() {
    const observable = this.dashboardService.getUser();
    observable.subscribe(
      (res) => this.queryResponseService.handleRes(res, this.handleSuccess),
      this.queryResponseService.handleError
    );
  }

  private handleSuccess = (
    res: ApolloQueryResult<GetUserForDashboardQuery>
  ) => {
    this.user = res.data.User as any;
    this.randomWord = res.data.RandomWordAndDefinition;
    this.greeting = `Good ${this.greetingTime}, ${this.user.firstName}`;
  };

  private get greetingTime() {
    return new Date().toLocaleTimeString().slice(-2) === 'PM'
      ? 'Evening'
      : 'Morning'; /** TODO: add a better parser for afternoon greeting as well */
  }
}
