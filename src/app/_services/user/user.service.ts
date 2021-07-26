import { GetUserByIdGQL } from './../../../generated/graphql';
import { Injectable } from '@angular/core';
import { User } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private getUserByIdQuery: GetUserByIdGQL) {}

  loggedInUser: Partial<User>;

  getUser = (id: number) => {
    return this.getUserByIdQuery.fetch({ id });
  };

  fakeLogIn = () => {
    this.getUser(1).subscribe(({ data: { User } }) => {
      this.loggedInUser = User;
    });
  };
}
