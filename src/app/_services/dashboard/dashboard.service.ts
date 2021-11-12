import { Injectable } from '@angular/core';
import { GetUserForDashboardGQL } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private getUserGQL: GetUserForDashboardGQL) {}

  getUser() {
    const id = 1; /** hardcoded for now */
    return this.getUserGQL.fetch({ id });
  }
}
