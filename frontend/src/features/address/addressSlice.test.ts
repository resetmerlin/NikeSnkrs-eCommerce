import { expect, test } from 'vitest';
import { addressAdded, addressDeleted, addressSlice } from '.';

test('should return the initial state', () => {
  expect(addressSlice.reducer(undefined, { type: undefined })).toEqual({});
});

test('should handle a address being added to an empty object', () => {
  const previousState = {};

  expect(
    addressSlice.reducer(
      previousState,
      addressAdded({ address: 'Run the tests' })
    )
  ).toEqual({ address: 'Run the tests' });
});

test('should handle a address being changed to an existing object', () => {
  const previousState = { address: 'I exist' };

  expect(
    addressSlice.reducer(
      previousState,
      addressAdded({ address: 'Run the tests' })
    )
  ).toEqual({ address: 'Run the tests' });
});

test('should handle a address being deleted', () => {
  const previousState = { address: 'Run the tests' };

  expect(addressSlice.reducer(previousState, addressDeleted())).toEqual({});
});
