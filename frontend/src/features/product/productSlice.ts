import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    productAdded(state, action) {
      const data = action.payload;
      state.push(data);
    },
  },
});

export const { productAdded } = productSlice.actions;

export default productSlice.reducer;
