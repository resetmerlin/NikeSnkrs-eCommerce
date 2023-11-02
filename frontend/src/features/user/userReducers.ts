import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    userInfoAdded(state, action) {
      const data = action.payload;
      state.push(data);
      localStorage.setItem('userInfo', JSON.stringify(current(state)));
    },
    userInfoDeleted: () => {
      localStorage.removeItem('userInfo');

      return initialState;
    },
  },
});

export const { userInfoAdded, userInfoDeleted } = userInfoSlice.actions;

export default userInfoSlice.reducer;
