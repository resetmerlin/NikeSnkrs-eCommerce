import { createSlice } from '@reduxjs/toolkit';
import { IAddress } from '../../types/dto';

const initialState = {};

export const addressSlice = createSlice({
  name: 'address',
  initialState: initialState as IAddress,
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
