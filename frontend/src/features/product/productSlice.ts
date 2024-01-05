import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '../../types';

const initialState: IProducts = [];
export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    productAdded(state, action) {
      const data = action.payload;
      state.push(data);
    },
  },
});

export const { productAdded } = productSlice.actions;

export default productSlice.reducer;
