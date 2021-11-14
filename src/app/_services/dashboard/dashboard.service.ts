import { Injectable } from '@angular/core';
import {
  GetUserForDashboardGQL,
  GetRandomWordAndDefinitionGQL,
} from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private getUserGQL: GetUserForDashboardGQL,
    private getRandomWordAndDefinitionGQL: GetRandomWordAndDefinitionGQL
  ) {}

  getUser() {
    const id = 1; /** hardcoded for now */
    return this.getUserGQL.fetch({ id });
  }

  getRandomWord() {
    return this.getRandomWordAndDefinitionGQL.fetch(
      {},
      { fetchPolicy: 'no-cache' }
    );
  }
}
