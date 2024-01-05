import { createSlice } from '@reduxjs/toolkit';
import { ICart, ICarts } from '../../types/dto';

const initialState: ICarts = [];
export const cartSlice = createSlice({
  name: 'carts',
  initialState: initialState,
  reducers: {
    cartAdded(state, action) {
      const data = action.payload;

      const existProductIndex = state.findIndex(
        (x: ICart) => x.product === data.product
      );

      // Override product if already exist
      if (existProductIndex !== -1) {
        state[existProductIndex] = data;
      } else {
        state.push(data);
      }
    },
    cartDeleted(state, action) {
      const indexToDelete = state.findIndex(
        (x: ICart) => x.product === action.payload
      );

      // Delete product
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },
  },
});

export const { cartAdded, cartDeleted } = cartSlice.actions;
export const selectCart = (state: any) => state.carts;

export default cartSlice.reducer;
