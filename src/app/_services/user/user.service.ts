import { GetUserByIdGQL } from './../../../generated/graphql';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private getUserByIdQuery: GetUserByIdGQL) {}

  getUser = (id: number) => {
    return this.getUserByIdQuery
      .fetch({ id })
      .pipe(map(({ data: { User } }) => User));
  };
}
