import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../types/dto';

const initialState = {};

export const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState as IOrder,
  reducers: {
    orderAdded(state, action) {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    orderDeleted: () => initialState,
  },
});

export const { orderAdded, orderDeleted } = orderSlice.actions;
export const selectUser = (state) => state.orders;

export default orderSlice.reducer;
