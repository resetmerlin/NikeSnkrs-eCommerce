import { expect, test } from 'vitest';
import { orderDeleted, orderSlice, orderAdded } from '.';

test('should return the initial state', () => {
  expect(orderSlice.reducer(undefined, { type: undefined })).toEqual({});
});

test('should handle a orders being added to an empty object', () => {
  const previousState = {};

  const newState = {
    user: '658a65632b99d29d377080f6',
    email: 'jasmine@example.com',
    name: 'jasmine',
    paymentMethod: 'paypal',
    itemsPrice: 145,
    taxPrice: 15,
  };
  expect(orderSlice.reducer(previousState, orderAdded(newState))).toEqual(
    newState
  );
});

test('should handle a orders being changed to an existing object', () => {
  const previousState = {
    user: '658a65632b99d29d377080f6',
    email: 'jasmine@example.com',
    name: 'jasmine',
    paymentMethod: 'paypal',
    itemsPrice: 145,
    taxPrice: 15,
  };

  const newState = {
    user: '658a65632b99d29d377080f5',
    email: 'jasmin2e@example.com',
    name: 'jasmine2',
    paymentMethod: 'paypal',
    itemsPrice: 145,
    taxPrice: 15,
  };

  expect(orderSlice.reducer(previousState, orderAdded(newState))).toEqual(
    newState
  );
});

test('should handle a orders being deleted', () => {
  const previousState = {
    email: 'random@example.com',
    isAdmin: false,
    name: 'random',
    token: '123',
    _id: '321',
  };
  expect(orderSlice.reducer(previousState, orderDeleted())).toEqual({});
});
