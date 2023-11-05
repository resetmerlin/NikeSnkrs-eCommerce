import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const addressSlice = createSlice({
  name: 'address',
  initialState: initialState,
  reducers: {
    addressAdded(state, action) {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    addressDeleted: () => initialState,
  },
});

export const { addressAdded, addressDeleted } = addressSlice.actions;
export const selectAddress = (state) => state.address;

export default addressSlice.reducer;
