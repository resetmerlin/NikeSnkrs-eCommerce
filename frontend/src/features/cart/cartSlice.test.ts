import { expect, test } from 'vitest';
import { cartAdded, cartDeleted, cartSlice } from '.';
import { ICarts } from '../../types';

test('should return the initial state', () => {
  expect(cartSlice.reducer(undefined, { type: undefined })).toEqual([]);
});

test('should handle a product being added to an empty cart list', () => {
  const previousState: ICarts = [];

  const randomProduct = {
    product: '64057e49aafc2434e58a9484',
    name: 'Nike Phatom GT',
    price: 185,
    countInStock: 5,
    qty: 1,
  };

  expect(cartSlice.reducer(previousState, cartAdded(randomProduct))).toEqual([
    randomProduct,
  ]);
});

test('should handle a product being added to an existing cart lists', () => {
  const previousState: ICarts = [
    {
      product: '64057e49aafc2434e58a9484',
      name: 'Nike Phatom GT',
      price: 185,
      countInStock: 5,
      qty: 1,
    },
  ];

  const newState = {
    product: '64057e49aafc2434e58a9482',
    name: 'Nike Jordan 1 Retro',
    price: 321,
    countInStock: 10,
    qty: 1,
  };

  expect(cartSlice.reducer(previousState, cartAdded(newState))).toEqual([
    ...previousState,
    newState,
  ]);
});

test('should handle a product being deleted in cart lists', () => {
  const sameState = {
    product: '64057e49aafc2434e58a9484',
    name: 'Nike Phatom GT',
    price: 185,
    countInStock: 5,
    qty: 1,
  };
  const previousState: ICarts = [sameState];

  const wishProduct = sameState.product;

  expect(cartSlice.reducer(previousState, cartDeleted(wishProduct))).toEqual(
    []
  );
});
