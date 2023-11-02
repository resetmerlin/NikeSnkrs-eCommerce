import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    cartAdded(state, action) {
      const data = action.payload;

      const existProductIndex = state.findIndex(
        (x) => x.product === data.product
      );

      // Override product if already exist
      if (existProductIndex !== -1) {
        state[existProductIndex] = data;
      } else {
        state.push(data);
      }
      localStorage.setItem('cartItems', JSON.stringify(state));
    },
    cartDeleted(state, action) {
      const indexToDelete = state.findIndex(
        (x) => x.product === action.payload
      );

      // Delete product
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }

      localStorage.setItem('cartItems', JSON.stringify(state));
    },
    cartAddressAdded(_, action) {
      const { data } = action.payload;

      localStorage.setItem('shippingAddress', JSON.stringify(data));
    },
  },
});

export const { cartAdded, cartDeleted, cartAddressAdded } = cartSlice.actions;

export default cartSlice.reducer;
