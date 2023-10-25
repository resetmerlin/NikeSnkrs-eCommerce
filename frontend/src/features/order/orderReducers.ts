import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    productsAdded(state, action) {
      const data = action.payload;

      state.push(data);
    },
  },
});

export const { productsAdded } = productsSlice.actions;

export default productsSlice.reducer;
