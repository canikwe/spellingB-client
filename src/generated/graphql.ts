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




export type Deck = {
  __typename?: 'Deck';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  isPublic: Scalars['Boolean'];
  userId: Scalars['Int'];
  user: User;
  deckWords: Array<DeckWord>;
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
  word: Word;
  deck: Deck;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  User: User;
  Decks: Array<Deck>;
  Deck: Deck;
  Words: Array<Word>;
  Word: Word;
  DeckWords: Array<DeckWord>;
  DeckWord: DeckWord;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryDeckArgs = {
  id: Scalars['Int'];
};


export type QueryWordArgs = {
  id: Scalars['Int'];
};


export type QueryDeckWordArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  decks: Array<Deck>;
};

export type Word = {
  __typename?: 'Word';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  deckWords: Array<DeckWord>;
};

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