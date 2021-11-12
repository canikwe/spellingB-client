import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type Deck = {
  __typename?: 'Deck';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  isPublic: Scalars['Boolean'];
  userId: Scalars['Int'];
  user: User;
  deckWords?: Maybe<Array<DeckWord>>;
  _count?: Maybe<DeckCount>;
  words: Array<Word>;
};

export type DeckCount = {
  __typename?: 'DeckCount';
  deckWords: Scalars['Int'];
};

export type DeckListRelationFilter = {
  every?: Maybe<DeckWhereInput>;
  some?: Maybe<DeckWhereInput>;
  none?: Maybe<DeckWhereInput>;
};

export type DeckOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type DeckOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  isPublic?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  deckWords?: Maybe<DeckWordOrderByRelationAggregateInput>;
};

export type DeckRelationFilter = {
  is?: Maybe<DeckWhereInput>;
  isNot?: Maybe<DeckWhereInput>;
};

export enum DeckScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  IsPublic = 'isPublic',
  UserId = 'userId'
}

export type DeckWhereInput = {
  AND?: Maybe<Array<DeckWhereInput>>;
  OR?: Maybe<Array<DeckWhereInput>>;
  NOT?: Maybe<Array<DeckWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolFilter>;
  userId?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
  deckWords?: Maybe<DeckWordListRelationFilter>;
};

export type DeckWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DeckWord = {
  __typename?: 'DeckWord';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  starred: Scalars['Boolean'];
  order: Scalars['Int'];
  wordId: Scalars['Int'];
  deckId: Scalars['Int'];
  deck: Deck;
  word: Word;
};

export type DeckWordListRelationFilter = {
  every?: Maybe<DeckWordWhereInput>;
  some?: Maybe<DeckWordWhereInput>;
  none?: Maybe<DeckWordWhereInput>;
};

export type DeckWordOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type DeckWordOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  starred?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  wordId?: Maybe<SortOrder>;
  deckId?: Maybe<SortOrder>;
  deck?: Maybe<DeckOrderByWithRelationInput>;
  word?: Maybe<WordOrderByWithRelationInput>;
};

export enum DeckWordScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Starred = 'starred',
  Order = 'order',
  WordId = 'wordId',
  DeckId = 'deckId'
}

export type DeckWordWhereInput = {
  AND?: Maybe<Array<DeckWordWhereInput>>;
  OR?: Maybe<Array<DeckWordWhereInput>>;
  NOT?: Maybe<Array<DeckWordWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  starred?: Maybe<BoolFilter>;
  order?: Maybe<IntFilter>;
  wordId?: Maybe<IntFilter>;
  deckId?: Maybe<IntFilter>;
  deck?: Maybe<DeckRelationFilter>;
  word?: Maybe<WordRelationFilter>;
};

export type DeckWordWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FindManyDeckArgs = {
  where?: Maybe<DeckWhereInput>;
  orderBy?: Maybe<Array<DeckOrderByWithRelationInput>>;
  cursor?: Maybe<DeckWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DeckScalarFieldEnum>>;
};

export type FindManyDeckWordArgs = {
  where?: Maybe<DeckWordWhereInput>;
  orderBy?: Maybe<Array<DeckWordOrderByWithRelationInput>>;
  cursor?: Maybe<DeckWordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DeckWordScalarFieldEnum>>;
};

export type FindManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type FindManyWordArgs = {
  where?: Maybe<WordWhereInput>;
  orderBy?: Maybe<Array<WordOrderByWithRelationInput>>;
  cursor?: Maybe<WordWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<WordScalarFieldEnum>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  User: User;
  Words: Array<Word>;
  Word: Word;
  Decks: Array<Deck>;
  Deck: Deck;
  DeckWords: Array<DeckWord>;
  DeckWord: DeckWord;
};


export type QueryUsersArgs = {
  findManyUserArgs?: Maybe<FindManyUserArgs>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryWordsArgs = {
  findManyWordArgs?: Maybe<FindManyWordArgs>;
};


export type QueryWordArgs = {
  id: Scalars['Int'];
};


export type QueryDecksArgs = {
  findManyDeckArgs?: Maybe<FindManyDeckArgs>;
};


export type QueryDeckArgs = {
  id: Scalars['Int'];
};


export type QueryDeckWordsArgs = {
  findManyDeckWordArgs?: Maybe<FindManyDeckWordArgs>;
};


export type QueryDeckWordArgs = {
  id: Scalars['Int'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  decks?: Maybe<Array<Deck>>;
  _count?: Maybe<UserCount>;
};

export type UserCount = {
  __typename?: 'UserCount';
  decks: Scalars['Int'];
};

export type UserOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  decks?: Maybe<DeckOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  decks?: Maybe<DeckListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Word = {
  __typename?: 'Word';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  deckWords?: Maybe<Array<DeckWord>>;
  _count?: Maybe<WordCount>;
};

export type WordCount = {
  __typename?: 'WordCount';
  deckWords: Scalars['Int'];
};

export type WordOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  deckWords?: Maybe<DeckWordOrderByRelationAggregateInput>;
};

export type WordRelationFilter = {
  is?: Maybe<WordWhereInput>;
  isNot?: Maybe<WordWhereInput>;
};

export enum WordScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name'
}

export type WordWhereInput = {
  AND?: Maybe<Array<WordWhereInput>>;
  OR?: Maybe<Array<WordWhereInput>>;
  NOT?: Maybe<Array<WordWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  deckWords?: Maybe<DeckWordListRelationFilter>;
};

export type WordWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type DecksQueryVariables = Exact<{ [key: string]: never; }>;


export type DecksQuery = (
  { __typename?: 'Query' }
  & { Decks: Array<(
    { __typename?: 'Deck' }
    & Pick<Deck, 'id' | 'title' | 'createdAt'>
  )> }
);

export type GetUserForDashboardQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserForDashboardQuery = (
  { __typename?: 'Query' }
  & { User: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
    & { decks?: Maybe<Array<(
      { __typename?: 'Deck' }
      & Pick<Deck, 'id' | 'title' | 'createdAt'>
    )>> }
  ) }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { User: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { Users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export const DecksDocument = gql`
    query Decks {
  Decks {
    id
    title
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DecksGQL extends Apollo.Query<DecksQuery, DecksQueryVariables> {
    document = DecksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserForDashboardDocument = gql`
    query GetUserForDashboard($id: Int!) {
  User(id: $id) {
    id
    firstName
    lastName
    decks {
      id
      title
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserForDashboardGQL extends Apollo.Query<GetUserForDashboardQuery, GetUserForDashboardQueryVariables> {
    document = GetUserForDashboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserByIdDocument = gql`
    query GetUserById($id: Int!) {
  User(id: $id) {
    id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUsersDocument = gql`
    query GetUsers {
  Users {
    id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }