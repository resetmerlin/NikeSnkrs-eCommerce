import { expect, test } from 'vitest';
import { userInfoAdded, userInfoDeleted, userInfoSlice } from '.';
import { IUser } from '../../types';

test('should return the initial state', () => {
  expect(userInfoSlice.reducer(undefined, { type: undefined })).toEqual({});
});

test('should handle a userInfo being added to an empty object', () => {
  const previousState = {};

  const newState: IUser = {
    email: 'random@example.com',
    isAdmin: false,
    name: 'random',
    token: '123',
    _id: '321',
  };
  expect(userInfoSlice.reducer(previousState, userInfoAdded(newState))).toEqual(
    newState
  );
});

test('should handle a userInfo being changed to an existing object', () => {
  const previousState: IUser = {
    email: 'random@example.com',
    isAdmin: false,
    name: 'random',
    token: '123',
    _id: '321',
  };

  const newState: IUser = {
    email: 'random2@example.com',
    isAdmin: false,
    name: 'random2',
    token: '1232',
    _id: '3212',
  };

  expect(userInfoSlice.reducer(previousState, userInfoAdded(newState))).toEqual(
    newState
  );
});

test('should handle a userInfo being deleted', () => {
  const previousState: IUser = {
    email: 'random@example.com',
    isAdmin: false,
    name: 'random',
    token: '123',
    _id: '321',
  };
  expect(userInfoSlice.reducer(previousState, userInfoDeleted())).toEqual({});
});
