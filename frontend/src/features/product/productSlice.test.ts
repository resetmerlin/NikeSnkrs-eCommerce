import { expect, test } from 'vitest';
import { productAdded, productSlice } from '.';
import { IProducts } from '../../types';

test('should return the initial state', () => {
  expect(productSlice.reducer(undefined, { type: undefined })).toEqual([]);
});

test('should handle a product being added to an empty product lists', () => {
  const previousState: IProducts = [];

  const randomProduct = {
    product: '64057e49aafc2434e58a9484',
    name: 'Nike Phatom GT',
    price: 185,
    countInStock: 5,
    qty: 1,
  };

  expect(
    productSlice.reducer(previousState, productAdded(randomProduct))
  ).toEqual([randomProduct]);
});
